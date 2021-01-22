(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{372:function(t,a,s){"use strict";s.r(a);var n=s(42),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h2",{attrs:{id:"tp5-x版本文档接口404"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tp5-x版本文档接口404"}},[t._v("#")]),t._v(" TP5.x版本文档接口404")]),t._v(" "),s("p",[t._v("TP5.x版本或本插件小于v1.1.1版本的在安装后 访问文档页面出现如下接口404的情况。")]),t._v(" "),s("blockquote",[s("p",[t._v("因为TP5.x版本没有自动注册服务来注册文档所需的接口路由导致的")])]),t._v(" "),s("img",{staticClass:"img-view",staticStyle:{width:"100%"},attrs:{src:t.$withBase("/images/v1/apidoc-help-route404.png"),alt:"apidoc-help-route404"}}),t._v(" "),s("p",[t._v("将以下路由加入到 "),s("code",[t._v("route/app.php")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// route/app.php")]),t._v("\nRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'apidoc/config'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"\\\\hg\\\\apidoc\\\\Controller@getConfig"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'apidoc/data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"\\\\hg\\\\apidoc\\\\Controller@getList"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'apidoc/auth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"\\\\hg\\\\apidoc\\\\Controller@verifyAuth"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用了tp6注解扩展报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用了tp6注解扩展报错"}},[t._v("#")]),t._v(" 使用了TP6注解扩展报错")]),t._v(" "),s("p",[t._v("如果使用了TP6的注解扩展"),s("code",[t._v("topthink/think-annotation")]),t._v("，书写注释后，导致类似如下错误")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Semantical Error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" The annotation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"@title'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('" '),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" class app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BaseDemo was never imported. Did you maybe forget to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"use'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('" statement '),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this annotation?\n")])])]),s("p",[t._v("可在相应的控制器use解释文件消除错误")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Desc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Tag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ParamType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @title 基础示例\n * @controller BaseDemo\n * @group base\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseDemo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("p",[t._v("更多处理方式可查阅 "),s("a",{attrs:{href:"https://github.com/doctrine/annotations",target:"_blank",rel:"noopener noreferrer"}},[t._v("doctrine/annotations"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=p.exports}}]);