(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{441:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装-升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-升级"}},[t._v("#")]),t._v(" 安装/升级")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("在安装本插件时，确保你已成功安装ThinkPHP的项目并成功运行")]),t._v(" "),a("p",[t._v("安装方法参考："),a("a",{attrs:{href:"https://www.kancloud.cn/manual/thinkphp5_1/353948",target:"_blank",rel:"noopener noreferrer"}},[t._v("ThinkPHP5文档"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.kancloud.cn/manual/thinkphp6_0/1037481",target:"_blank",rel:"noopener noreferrer"}},[t._v("ThinkPHP6文档"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[t._v("#")]),t._v(" 安装插件")]),t._v(" "),a("p",[t._v("进入ThinkPHP 项目根目录，执行如下命令：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require hg/apidoc\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("TP5版本需"),a("a",{attrs:{href:"#tp5%E6%B7%BB%E5%8A%A0%E8%B7%AF%E7%94%B1"}},[t._v("手动添加apidoc所需路由")]),t._v("，如未自动生成config/apidoc.php 配置文件，可参考 "),a("RouterLink",{attrs:{to:"/use/help/notConfig/"}},[t._v("没有生成apidoc.php配置文件解决方案")])],1)]),t._v(" "),a("h2",{attrs:{id:"添加前端页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加前端页面"}},[t._v("#")]),t._v(" 添加前端页面")]),t._v(" "),a("p",[t._v("请根据你安装的apidoc版本 点击下载 对应的前端文件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Apidoc版本")]),t._v(" "),a("th",[t._v("Github")]),t._v(" "),a("th",[t._v("Gitee（推荐）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("v3.0.0")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/HGthecode/apidoc-ui/releases/download/v2.0.0/apidoc.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2.0.0"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://gitee.com/hg-code/apidoc-ui/attach_files/816042/download/apidoc.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2.0.0"),a("OutboundLink")],1),t._v("-")])])])]),t._v(" "),a("p",[t._v("下载完成后解压，将apidoc文件夹拷贝到你的项目 public 目录下")]),t._v(" "),a("p",[t._v("打开浏览器访问   http://你的域名/apidoc/ ，出现接口文档页面，表示安装成功。")]),t._v(" "),a("p",[t._v("接下来，了解一下  "),a("RouterLink",{attrs:{to:"/config/"}},[t._v("基本配置")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/use/"}},[t._v("如何使用")]),t._v(" 吧。")],1),t._v(" "),a("blockquote",[a("p",[t._v("如遇页面报错或无法正常使用，可参考"),a("RouterLink",{attrs:{to:"/use/help/"}},[t._v("常见问题")])],1)]),t._v(" "),a("h2",{attrs:{id:"tp5添加路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tp5添加路由"}},[t._v("#")]),t._v(" TP5添加路由")]),t._v(" "),a("p",[t._v("TP5版本需手动将apidoc所需路由添加到路由文件")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// route/route.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'apidoc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$controller_namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'\\hg\\apidoc\\Controller@'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'config'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$controller_namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'getConfig'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'apiData'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$controller_namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'getApidoc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'mdMenus'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$controller_namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'getMdMenus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'mdDetail'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$controller_namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'getMdDetail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'verifyAuth'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$controller_namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'verifyAuth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"升级插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级插件"}},[t._v("#")]),t._v(" 升级插件")]),t._v(" "),a("p",[t._v("1、如果你之前已经安装过，那么切换到你的应用根目录下面，然后执行下面的命令进行更新。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" update hg/apidoc\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("2、更新前端页面，可通过安装时的"),a("RouterLink",{attrs:{to:"/install/#添加前端页面"}},[t._v("添加前端页面")]),t._v(" 方式下载最新的前端文件，覆盖/public/apidoc的文件夹即可。")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);