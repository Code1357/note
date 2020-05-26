Linuxでディレクトリを扱うためのコマンド

pwd	現在のディレクトリの表示
             > /home/{Linuxユーザー名}

「 / 」　  最上位のディレクトリ（ルートディレクトリという）
　　　 「 / 」で繋がれたディレクトリの位置を表す文字列をパス呼ぶ
絶対パス：ルートディレクトリからのパス
相対パス：現在のディレクトリ（カレントディレクトリ）からのパス
/home/vagrant の相対は、 ./vagrant と表示 vagrant でもよい

ls	ファイル・ディレクトリの一覧を表示
　　　  ls だけの場合、「 . ファイル名 」は表示されない
             ls -a でカレントディレクトリ内のファイル、ディレクト一覧を表示
　　　 表示された一覧の中で、
　　　　　　「 . 」は、現在のディレクトリを示す
　　　　　　「 .. 」は、一つ上の階層のディレクトリを示す
　　　　　　「 . ファイル名 」となっているものは特別なファイル

cd	チェンジディレクトリ
　　　 現在のディレクトリから別のディレクトリに移動する
　　　 cd .. は、一つ上のディレクトリに移動
　　　 cd / は、ルートディレクトリに移動
　　　 cd ~ ホームディレクトリへの移動（cd /home/vagrant と一緒）
            cd ~/ディレクト名/ディレクト名 下の階層へ移動する

mkdir	ディレクトリの作成
　　　 mkdir 作成したいディレクト名
            mkdir: cannot create directory ‘workspace’: File exists：すでにディレクトリあり作成不可

rm	ファイルやディレクトリの削除
　　　 ディレクトリをrmコマンドで削除するには -r か rmdir にする必要あり

cp	ファイルやディレクトリのコピー
　　　 cd ~ で移動して
            cp -r tmp workspace は、tmp ディレクトリをwoekspace の中にコピーしている
            -r は、ディレクトリの中のb も一緒にコピーするという記述
　　　
mv	ファイルやディレクトリの移動
　　　 mv b c は、b のディレクトリ名をc ディレクトリ名に変更する

find	ファイル・ディレクトリを検索
　　　 cd ~
            find
            ディレクトリを移動し、検索することで、ディレクトリ内の内容が確認できる
　　　 cd ~
            find . -name b
            名前がb のディレクトリとファイルを検索

**************************
共有方法 Vagrantfile ファイルを編集

# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/bionic64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"
  config.vm.synced_folder "./workspace", "/home/vagrant/workspace"
  config.vm.provider :virtualbox do |vb|
    vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate//home/vagrant/workspace","1"]
  end
  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
   config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
     vb.memory = "1024"
   end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
end

**************************

共有のリロード
fsutil behavior set SymlinkEvaluation L2L:1 R2R:1 L2R:1 R2L:1
cd ~\vagrant\ubuntu64_18
vagrant reload --provision
