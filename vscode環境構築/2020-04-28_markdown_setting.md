---
titel: 2020-04-28_markdown_setting
up date: 2020-04-28
tags:
 - markdown
 - vsnotes
 - 使い方
---  

# markdown preview にCSSを設定    
参考：[markdown preview にCSSを適応](https://rui-log.com/vscode-markdown-preview-custom/)  
Markdown Preview Github Styling を拡張  
```
base.css を開く

/Users/ユーザー名/.vscode/extensions/bierner.markdown-preview-github-styles-0.1.4/base.css  

```

## base.cssの中  

```css:base.css
body {
    background: rgb(233, 233, 233);
}

h1 {
    color: rgb(51, 94, 69);
}

h2 {
    color: rgb(58, 54, 82);
}

.vscode-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 40px;
    border: 1px solid transparent;
}

.vscode-body blockquote {
    background-color: initial;
}

.vscode-body pre {
    color: initial;
    background: #fffafd !important;
}

.vscode-body code {
    color: inherit;
}

.vscode-body pre code {
    color: initial;
}

.vscode-body code > div {
    background: none
}

.vscode-body table th,
.vscode-body table td {
    border: 1px solid #ddd !important;
}

.vscode-body.showEditorSelection .code-active-line:before {
	border-left: 3px solid rgba(0, 0, 0, 0.15);
}

.vscode-body.showEditorSelection .code-line:hover:before {
	border-left: 3px solid rgba(0, 0, 0, 0.40);
}

.vscode-body.showEditorSelection .code-line .code-line:hover:before {
	border-left: none;
}

.vscode-body p,
.vscode-body blockquote,
.vscode-body ul,
.vscode-body ol,
.vscode-body dl,
.vscode-body table,
.vscode-body pre {
  margin-top: 16px;
  margin-bottom: 16px;
}

body.vscode-body::-webkit-scrollbar {
    background-color: white;
}
body.vscode-body::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.4);
}
body.vscode-body::-webkit-scrollbar-thumb:hover {
    background-color: rgba(100, 100, 100, 0.7);
}

```