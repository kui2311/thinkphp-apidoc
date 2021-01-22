(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"功能配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能配置"}},[t._v("#")]),t._v(" 功能配置")]),t._v(" "),a("h2",{attrs:{id:"多版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多版本"}},[t._v("#")]),t._v(" 多版本")]),t._v(" "),a("p",[t._v("在单应用中，我们通常使用这样的目录接口来实现多版本接口开发")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("app\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("—— controller\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("—— v1\n        BaseDemo.php\n        CrudDemo.php\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("—— v2\n        BaseDemo.php\n        CrudDemo.php\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("—— model\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("根据以上项目的目录结构，在配置文件"),a("code",[t._v("/config/apidoc.php")]),t._v("中的 versions 参数中配置你的可选版本，如下")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /config/apidoc.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置可选版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'versions'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'V1.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'folder'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'controller\\\\v1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'V2.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'folder'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'controller\\\\v2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("配置文件"),a("code",[t._v("/config/apidoc.php")]),t._v("中的 controllers 生成文档的控制器目录调整为：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /config/apidoc.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//生成文档的控制器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'controllers'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'BaseDemo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'CrudDemo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("folder")]),t._v(" "),a("p",[t._v("多版本配置的关键点在于 folder 目录的配置，请根据你的项目结构调整，\n其原理为 app文件夹开始， 当前版本的folder + 配置的controllers中的控制器 来生成接口文档")])]),t._v(" "),a("h2",{attrs:{id:"控制器分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制器分组"}},[t._v("#")]),t._v(" 控制器分组")]),t._v(" "),a("blockquote",[a("p",[t._v("支持版本 >= v1.1.1")])]),t._v(" "),a("p",[t._v("可通过控制器分组实现将多模块的控制器进行分组")]),t._v(" "),a("p",[t._v("1、配置文件"),a("code",[t._v("/config/apidoc.php")]),t._v("中的 groups 配置分组列表：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /config/apidoc.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置控制器分组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'groups'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'基础模块'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'base'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'示例模块'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("2、在对应控制器注释中，加入 "),a("code",[t._v("@group")]),t._v(" 来指定该控制器所属分类的 name")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @title Api接口文档测试\n * @controller ApiDocTest\n * @group base\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiDocTest")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n")])])]),a("h2",{attrs:{id:"密码验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密码验证"}},[t._v("#")]),t._v(" 密码验证")]),t._v(" "),a("p",[t._v("配置文件"),a("code",[t._v("/config/apidoc.php")]),t._v("中的 auth 设置如下，即可在访问接口文档时需输入密码访问：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /config/apidoc.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 密码验证配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'auth'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否启用密码验证")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'with_auth'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 验证密码")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'auth_password'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"123456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"文档缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档缓存"}},[t._v("#")]),t._v(" 文档缓存")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("建议")]),t._v(" "),a("p",[t._v("开发环境中关闭缓存，可方便实时修改查看效果，提升开发效率。正式发布后可开启。")])]),t._v(" "),a("p",[t._v("开启缓存后，每次访问接口文档则直接使用缓存数据展示文档，大大提升访问速度，也可在页面右上角切换历史文档。\n但当修改了接口注释后，需手动点击接口文档页面右上角的 "),a("code",[t._v("ReLoad")]),t._v(" 按钮生成新的文档数据。")]),t._v(" "),a("p",[t._v("配置文件"),a("code",[t._v("/config/apidoc.php")]),t._v("中的 with_cache 设置为 "),a("code",[t._v("true")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /config/apidoc.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否开启缓存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'with_cache'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("缓存的文件生成在 "),a("code",[t._v("/runtime/apidoc/")]),t._v("目录下，如需删除缓存记录，可直接删除该目录下的相应文件即可")])])}),[],!1,null,null,null);s.default=e.exports}}]);