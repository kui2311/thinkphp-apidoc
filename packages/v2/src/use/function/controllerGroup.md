# 控制器分组

可通过控制器分组实现将多模块的控制器进行分组

1、配置文件`/config/apidoc.php`中的 groups 配置分组列表：

```php
// /config/apidoc.php
//设置控制器分组
'groups'=>[
    ['title'=>'基础模块','name'=>'base'],
    ['title'=>'示例模块','name'=>'demo'],
],
```

2、在对应控制器注释中，加入 `@group` 来指定该控制器所属分类的 name

```php
namespace app\controller;

use hg\apidoc\annotation as Apidoc;

/**
 * @Apidoc\Title("基础示例")
 * @Apidoc\Group("base")
 */
class ApiDocTest
{ 
```