(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{452:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("h2",{attrs:{id:"tp5-x版本文档接口404"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tp5-x版本文档接口404"}},[t._v("#")]),t._v(" TP5.x版本文档接口404")]),t._v(" "),a("p",[t._v("TP5.x版本或本插件小于v1.1.1版本的在安装后 访问文档页面出现如下接口404的情况。")]),t._v(" "),a("blockquote",[a("p",[t._v("因为TP5.x版本没有自动注册服务来注册文档所需的接口路由导致的")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/apidoc-help-route404.png",alt:"apidoc-help-route404",title:"apidoc-help-route404"}})]),t._v(" "),a("p",[t._v("将以下路由加入到 "),a("code",[t._v("route/app.php")])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// route/app.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'apidoc/config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"\\\\hg\\\\apidoc\\\\Controller@getConfig"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'apidoc/data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"\\\\hg\\\\apidoc\\\\Controller@getList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'apidoc/auth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"\\\\hg\\\\apidoc\\\\Controller@verifyAuth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"使用了tp6注解扩展报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用了tp6注解扩展报错"}},[t._v("#")]),t._v(" 使用了TP6注解扩展报错")]),t._v(" "),a("p",[t._v("如果使用了TP6的注解扩展"),a("code",[t._v("topthink/think-annotation")]),t._v("，书写注释后，导致类似如下错误")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Semantical Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" The annotation "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"@title'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('" '),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" class app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BaseDemo was never imported. Did you maybe forget to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"use'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('" statement '),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this annotation?\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("可在相应的控制器use解释文件消除错误")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Author")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("hg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("explain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ParamType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @title 基础示例\n * @controller BaseDemo\n * @group base\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseDemo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[t._v("更多处理方式可查阅 "),a("a",{attrs:{href:"https://github.com/doctrine/annotations",target:"_blank",rel:"noopener noreferrer"}},[t._v("doctrine/annotations"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);