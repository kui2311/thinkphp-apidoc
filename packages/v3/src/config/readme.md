---
icon: config
category: 配置
# sidebarDepth: 2
# sidebar: auto
---

# 配置参数
::: tip
安装插件后会在/config/目录生成一个apidoc.php的配置文件，以下为该文件可配置的参数说明

默认配置文件请查看 [apidoc.php](https://github.com/HGthecode/thinkphp-apidoc/blob/master/src/config.php)
:::

## title
- 类型: string
- 默认值: APi接口文档

页面的标题，显示在左上角与首页

## desc
- 类型: string

文档说明，文档首页处显示


## default_method
- 类型: string
- 默认值: GET

默认的请求类型，编写接口注解时，不配置Method参数时，为该配置的默认类型

## default_author
- 类型: string
- 默认值: GET

默认的作者名称，编写接口注解时，不配置Author时，为该配置的默认作者


## apps

- 类型: array
- 默认值: undefined
- 支持版本：>=2.1.0

多应用/多版本管理配置


```php
// config/apidoc.php

'apps' => [
    [
        'title'=>'后台管理',
        'path'=>'app\admin\controller',
        'folder'=>'admin',
        'groups'  => [
            ['title'=>'基础模块','name'=>'base'],
            ['title'=>'示例模块','name'=>'demo'],
            ['title'=>'多级模块','name'=>'subMenu',
                'children'=>[
                    ['title'=>'多级v1','name'=>'subv1',],
                    ['title'=>'多级v2','name'=>'subv2'],
                ]
            ],
        ],
        // 'controllers'=>[
        //     'app\admin\controller\BaseDemo',
        //     'app\admin\controller\CrudDemo',
        // ]
    ],
    [
        'title'=>'演示示例',
        'path'=>'app\demo\controller',
        'folder'=>'demo',
        'items'=>[
            ['title'=>'V1.0','path'=>'app\demo\controller\v1','folder'=>'v1'],
            ['title'=>'V2.0','path'=>'app\demo\controller\v2','folder'=>'v2']
        ],
        
    ],
],
```
apps配置数组的参数说明

|参数名|类型|说明|
|-|-|-|
|title|string|应用的名称|
|path|string|应用的目录|
|folder|string|应用的文件夹名称|
|password|string|应用的访问密码，不配置则无需密码|
|items|array|多层应用配置|
|groups|array|应用的控制器分组|
|controllers|array<\string>|指定api文档解析的控制器|


apps中groups控制器分组参数说明
|参数名|类型|说明|
|-|-|-|
|title|string|分组标题|
|name|string|分组名称，对应控制器注解`@Apidoc\Group("name")`|
|children|array|多层分组|


## definitions
- 类型: string
- 默认值: app\common\controller\Definitions

指定公共注释定义的控制器地址




## cache
- 类型: array

缓存配置，开启后需手动更新接口参数，关闭则每次刷新重新生成接口数据

### cache.enable
- 类型: boolean
- 默认值:false

是否开启缓存


## auth
- 类型: array

进入接口问页面的权限认证配置

### auth.enable
- 类型: boolean
- 默认值:false

是否启用权限认证，启用则需登录

### auth.password
- 类型: string
- 默认值:123456

进入接口文档页面的登录密码

### auth.secret_key
- 类型: string
- 默认值:apidoc#hg_code

密码加密的盐，请务必更改

### auth.expire
- 类型: number
- 默认值:24*\60*\60

密码访问有效期，超过本时间需重新输入访问密码


## headers
- 类型: array
- 默认值: undefined
- 支持版本：>=2.4.0

全局请求头参数，配置后，所有接口请求头参数都统一加上这些参数，如接口单独定义了将会覆盖配置中的全局参数
```php
// config/apidoc.php

// 全局的请求头参数
'headers'=>[
    ['name'=>'token','type'=>'string','require'=>true,'desc'=>'登录票据'],
    ['name'=>'shopid','type'=>'int','desc'=>'店铺id'],
],
```

## parameters
- 类型: array
- 默认值: undefined
- 支持版本：>=2.4.0

全局请求参数，配置后，所有接口请求参数都统一加上这些参数，如接口单独定义了将会覆盖配置中的全局参数
```php
// config/apidoc.php

// 全局的请求参数
'parameters'=>[
    ['name'=>'code','type'=>'string','desc'=>'全局code'],
],
```


## responses
- 类型: string/object/array
- 默认值: 如下示例

统一的请求响应体，当配置为字符串时，只在接口详情页面`响应结果Responses`右侧的问号处做展示用
```php
// config/apidoc.php

'responses'=>[
    ['name'=>'code','desc'=>'状态码','type'=>'int'],
    ['name'=>'message','desc'=>'操作描述','type'=>'string'],
    ['name'=>'data','desc'=>'业务数据','main'=>true,'type'=>'object'],
],

```


## auto_url
- 类型: array

当api接口不无注解`@Apidoc\Url(xxx)`时，api文档url的自动生成规则

### auto_url.letter_rule
- 类型: lcfirst | ucfirst
- 默认值:undefined

url每个参数的首字母大小写规则，`lcfirst`首字母小写，`ucfirst`首字母大写

### auto_url.multistage_route_separator
- 类型: atring
- 默认值:.

多级路由分隔符

### auto_url.custom
- 类型: function
- 默认值:undefined

自定义生成规则,如下：
```php
'auto_url' => [
    'custom' =>function($class,$method){
        return "/".str_replace('\\','/',$class).$method;
    },
],
```


## allowCrossDomain
- 类型: boolean
- 默认值: false

适用于TP6，是否允许跨域访问apidoc的相关接口，TP5自行修改手动添加的路由即可


## docs
- 类型: array
- 默认值: undefined

Markdown文档配置

```php
// config/apidoc.php
<?php
return [
    // markdown 文档
    'docs' => [
        ['title'=>'md语法示例','path'=>'docs/Use'],
        [
            'title'=>'HTTP响应编码',
            'children'=>[
                ['title'=>'status错误码说明','path'=>'docs/${app[0].folder}/HttpStatus'],
                ['title'=>'code错误码说明','path'=>'docs/${app[0].folder}/HttpCode_${app[1].folder}'],
            ],
        ]
    ]
]
```

### path可用变量说明
变量写法`${app[N].folder}`其中的`N`表示`apps`中配置的层级：

比如配置为如下
```php
'apps' => [
    ['title'=>'后台管理','path'=>'app\admin\controller','folder'=>'admin'],
    [
        'title'=>'演示示例',
        'path'=>'app\demo\controller',
        'folder'=>'demo',
        'items'=>[
            ['title'=>'V1.0','path'=>'app\demo\controller\v1','folder'=>'v1'],
            ['title'=>'V2.0','path'=>'app\demo\controller\v2','folder'=>'v2']
        ]
    ],
],
'docs'=>[
    ['title'=>'Http状态码','path'=>'docs/${app[0].folder}/HttpCode_${app[1].folder}'],
]
```
1、当应用/版本选为`后台管理`的应用时，此时`${app[0].folder}`就等于`admin` 由于该应用配置无子级`items`此时的`${app[1].folder}`也就为空。最终文件地址为`dosc/admin/HttpCode_.md`。

2、当应用/版本选为`演示示例-V1.0`时，此时`${app[0].folder}`就等于`demo` 由于该应用配置存在子级（多个版本）`items`此时的`${app[1].folder}`也就为`v1`。最终文件地址为`dosc/admin/HttpCode_v1.txt`。
