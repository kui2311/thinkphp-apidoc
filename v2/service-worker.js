if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-ed249f6c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.82220ece.css",revision:"e39be3ba426aa016ba6f1060bf9830ff"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/38.38b6d842.js",revision:"63d3cc464f695ea4f717b9f03d38e630"},{url:"assets/js/39.be1cab37.js",revision:"9054648cc77ee7b4ea1d76f20907d3c1"},{url:"assets/js/40.cd1d3711.js",revision:"7249aad8c30ade53a7edbfc0d95df8cf"},{url:"assets/js/app.8d52f932.js",revision:"8ecbc2808d8232aa467d675de76e1901"},{url:"assets/js/layout-Blog.2fa42e14.js",revision:"7f2d96dfa45b66a4a116a7f0892d2b1e"},{url:"assets/js/layout-Layout.85d11602.js",revision:"e5b24bf52e3169e1f19f8d202283945f"},{url:"assets/js/layout-NotFound.41d628ed.js",revision:"ccbbafb84f5cfb9ff7af6cda4cfb4b73"},{url:"assets/js/layout-Slide.a41f58b6.js",revision:"630844b40488b8edc6d88c5f19dcd5d1"},{url:"assets/js/page-Markdown文档.e6e618e8.js",revision:"4b29c4dbbd779ae22e75a66f5b12df8d"},{url:"assets/js/page-TP6新项目的创建与Apidoc的安装.c352275d.js",revision:"d6c07013a63763d01830687de12866de"},{url:"assets/js/page-V10升级V20报错.1d297951.js",revision:"73dbe74afe4fe7f0ab7edf3eadb771e5"},{url:"assets/js/page-介绍.e7068a8b.js",revision:"ffd6a863e5f1e7c202e8086891a8366d"},{url:"assets/js/page-使用GithubActions实现TP6自动化部署.0b5a60c9.js",revision:"f3715a84863faaf63d15447b5701f033"},{url:"assets/js/page-使用phpstudy搭建TP6运行环境.39409f8e.js",revision:"f24d5c40368c5c84d0a62a63e3c96e0f"},{url:"assets/js/page-各种参数类型的注解教程.6a10a331.js",revision:"e91dd74daf9fc6fcc69bf06da995563b"},{url:"assets/js/page-多应用多版本.988d3f01.js",revision:"5a62d827eabdfbd0819599eb14d885fc"},{url:"assets/js/page-安装升级.213f0bef.js",revision:"357212d2b382b5ea8d415bed89d0597b"},{url:"assets/js/page-密码验证.5ef6fa35.js",revision:"c02af960a15ea58ceea088378127e7b0"},{url:"assets/js/page-建议及规范.a1b0ed7a.js",revision:"8ef883b67bc5a9e4f3184cbef9eda43e"},{url:"assets/js/page-引入解释文件.9483003d.js",revision:"639022e72bc9ece3cabbd86aa35eca49"},{url:"assets/js/page-快速生成CRUD.7c625a32.js",revision:"bfd4d22662b969e078dffef0d96e116e"},{url:"assets/js/page-指南.15e44d9b.js",revision:"12d9e63bd3f0cfdb4d4bc929c9b7e159"},{url:"assets/js/page-接口参数Param、Returned注解技巧.38ac4e27.js",revision:"b7ab5d33ec87cbdbdce56ab6fcd67c11"},{url:"assets/js/page-接口注释.8af67506.js",revision:"b0eaebbc7b62037c43e7fc466a2c6fa3"},{url:"assets/js/page-接口调试.412ba2a8.js",revision:"864ff96528dc09aa0c5cba6dc4a6c438"},{url:"assets/js/page-控制器分组.af5001ed.js",revision:"f24573928a3dfd81b9df69ea32a319a7"},{url:"assets/js/page-控制器注释.9b4f8255.js",revision:"deec30fd3622291331535f97a3b8d6f1"},{url:"assets/js/page-教程.428d223f.js",revision:"436230afbb986ff8c6e25d835f53abd4"},{url:"assets/js/page-文档缓存.a4ab2e21.js",revision:"5a576e654c65377e72f98cdcb642e239"},{url:"assets/js/page-更新日志.3e94681a.js",revision:"ca6d2939ab5444e3fe9ecd186e5c4d6a"},{url:"assets/js/page-没有生成apidocphp配置文件.679c69e1.js",revision:"56c729fcd4a75a3c37638360dc474c98"},{url:"assets/js/page-配置参数.e3456926.js",revision:"5a861f58c2a4e667fd4cc4cda8f1f887"},{url:"assets/js/page-页面404错误.1ecb8111.js",revision:"c4b6eee75210c622985354f3a206a892"},{url:"assets/js/page-页面500错误.f33250ea.js",revision:"b272722cde060920770b23d01310287d"},{url:"assets/js/page-页面布局.13f15292.js",revision:"f27d8cb3f618ca242cec69b9e15a8436"},{url:"assets/js/page-页面配置.2a802255.js",revision:"502ef43ccc6f4ecc7012c81dc3cfbb69"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.c13b613b.js",revision:"13cf464b28026154409967db43d49a31"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.358419a0.js",revision:"7204388c3bbc1471554ad69c7bbf6ed3"},{url:"assets/js/vendors~layout-Layout.134f61fc.js",revision:"e75601a48b03f23f0a4a0541afabe916"},{url:"assets/js/vendors~photo-swipe.00de1f37.js",revision:"a5f249ecfe640a031ec3b7ff95a8f9e0"},{url:"404.html",revision:"a24f06f9e2c057a4452df41b6d6ec44e"},{url:"config/index.html",revision:"bfe347d092992d55a127da0ac534e420"},{url:"config/page/index.html",revision:"08ca9ec7cdcb828698b07083f62c4e3b"},{url:"course/apiParam/index.html",revision:"57f0027a11ceae133476650ff139cb76"},{url:"course/createTpAndInstall/index.html",revision:"a4f368106a585cd076f42bc4fd1e003a"},{url:"course/githubActionsDeploy/index.html",revision:"d4a61da1a49d36f9256473bc424556f6"},{url:"course/index.html",revision:"ac3802420832cf9f564e6b720cfebd76"},{url:"course/paramSkills/index.html",revision:"d3bec3426ff048796a28430c0544ba68"},{url:"course/phpStudyInstall/index.html",revision:"27081feb3439c55d0df729f1ed1a3cba"},{url:"guide/changelog/index.html",revision:"c2fab338ca89c8ee51679f2bf8a454d7"},{url:"guide/index.html",revision:"6aa32752b216178cf8eafd91b61c4a12"},{url:"guide/install/index.html",revision:"7a114bab8aafd881c67cf96523f846da"},{url:"index.html",revision:"a99dad002a77200f25458185f2b4f27f"},{url:"use/function/apps/index.html",revision:"0385761e1318e7328146dc072af41b3f"},{url:"use/function/cache/index.html",revision:"72bdd940023e7d5712fd9fcfbb3649fe"},{url:"use/function/controllerGroup/index.html",revision:"1efd8c8120fc7cbb61b4e08053527724"},{url:"use/function/crud/index.html",revision:"3c4afa9d6d4e0707b1f30da235a3128a"},{url:"use/function/docs/index.html",revision:"ec9a7d6c5ed12473e98ac6eb37145bbf"},{url:"use/function/password/index.html",revision:"d910bbccc604f4cfa1b26128dd4742f8"},{url:"use/help/404/index.html",revision:"1fdb0a69ffbc90ab3591e751375e2a7d"},{url:"use/help/500/index.html",revision:"d9d602242f8e67b517ea482248eb5b55"},{url:"use/help/notConfig/index.html",revision:"7c0b3667afa402baa93c3bfd7b4fc8b0"},{url:"use/help/v1Tov2/index.html",revision:"4316a50196d87c812263258ddd6786a5"},{url:"use/index.html",revision:"7da5392885e94f338563fb494b0a845f"},{url:"use/notes/api/index.html",revision:"5914144a314afe220272d30a87d3f857"},{url:"use/notes/controller/index.html",revision:"5ee6fb6db09fb9c060f46affa583585e"},{url:"use/notes/index.html",revision:"4a58bcb0d3a63dfc6bc8bda425b5fbbd"},{url:"use/notes/useFile/index.html",revision:"7d4de59b50ccf1c5728fde39695a044e"},{url:"use/operation/apidebug/index.html",revision:"8eb69c53ae34ef6eed3902e5ad6ffab4"},{url:"use/operation/layout/index.html",revision:"d9e1db3bed46ac5ad6afa24018c9f52b"},{url:"assets/icon/apple-icon-152.png",revision:"f80145aa55bdcd965ca90e40c7bf852c"},{url:"assets/icon/chrome-192.png",revision:"f1aa7a38848d97a4328f561ce4c25fe1"},{url:"assets/icon/chrome-512.png",revision:"b36b4238ca28da6995301ef2637e06ce"},{url:"assets/icon/chrome-mask-192.png",revision:"71a4c2f46e621bf85b6a1bcd8c21560c"},{url:"assets/icon/chrome-mask-512.png",revision:"bb407756d4070797d4b4e0986c71e632"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"bccb7c7b07285b900091c7618fe1171a"},{url:"images/apidoc-api-base-demo.png",revision:"dc6db87c76980646dd89d801e7d2fad3"},{url:"images/apidoc-api-complete-demo.png",revision:"0f1b3e12ca365f2c1dec82342cb96510"},{url:"images/apidoc-api-dictionary-demo.png",revision:"e2c83946e7669a4b2943d7e505bd449c"},{url:"images/apidoc-api-model-demo.png",revision:"4920f55448d8f0ff7dd34cc7b1a234cc"},{url:"images/apidoc-api-page_debug.jpg",revision:"2d80868ba39955285baf3c22f2c172b5"},{url:"images/apidoc-api-page.jpg",revision:"10f8c091787dd3e142e51d4631fca29b"},{url:"images/apidoc-api-server-demo.png",revision:"0d04ef74eab3027a652f91c2b8781284"},{url:"images/apidoc-config_crud.png",revision:"dddcb3ecd0a963673725df4bd08e7437"},{url:"images/apidoc-controller-demo.png",revision:"647d55b314e74979f84299bd7fa11aac"},{url:"images/apidoc-demo-apps.png",revision:"db279004724dc47565acee78b9edf013"},{url:"images/apidoc-demo-md.png",revision:"b7f978a7285fcc3173dcb8b5faff6b08"},{url:"images/apidoc-help-404_error.png",revision:"1f0b312587fba9355ea02e35fc52babe"},{url:"images/apidoc-help-route404.png",revision:"00f5a734b5e0d1567bec18234a1acef2"},{url:"images/apidoc-help-use_error.png",revision:"38e6f12ce9120d87dbf02b5b777ad18a"},{url:"images/apidoc-home-page.jpeg",revision:"c47a3f25ead28d5754ffd73c2504bcd7"},{url:"images/course/apiParam/titlepic.jpg",revision:"24f8a97f9140532f5b42ceba929f5a1e"},{url:"images/course/githubActions/composer.png",revision:"dce4eed3259a7790e10acdafa71ac3d5"},{url:"images/course/githubActions/github-actions.png",revision:"b59f8481260fe60142d6c22e33915594"},{url:"images/course/githubActions/github-settings-key.png",revision:"eaedb35383ab85f12bf906ded5d2d74e"},{url:"images/course/githubActions/github-settings.png",revision:"f3329cdc8654e476164e78cc974302cf"},{url:"images/course/githubActions/titlepic.png",revision:"3149df4a493dc829e1e2f68ad32e765b"},{url:"images/course/install-1.png",revision:"033d2bcb91f1ddecf782b4ab50d946de"},{url:"images/course/install-2.png",revision:"368b137317a4a2e17309e106a4c4fd89"},{url:"images/course/install-3.png",revision:"7e80273c9be9dfa0dc53e3617c94484a"},{url:"images/course/install-4.png",revision:"59a163113aeb9b6c21ac21395a2d7938"},{url:"images/course/install-apidoc-1.png",revision:"5c34c0640652e3670988580215a38e3b"},{url:"images/course/install-apidoc-2.png",revision:"c9a7f968f6be9705e2b994ce57690dd9"},{url:"images/course/install-apidoc-3.png",revision:"557909af93f3a19610f8c0772205678c"},{url:"images/course/install-apidoc-4.png",revision:"0a9dc2601a45853e57ac4e66dc3b84c0"},{url:"images/course/install-apidoc-5.png",revision:"a084d350ab1a4066953fd03cb1e51c4e"},{url:"images/course/install-apidoc-6.png",revision:"ffb6cededbeeab5b588c764ff614b6bb"},{url:"images/course/php-study-install/install-1.png",revision:"356f7a4f3790ce393b60529e2717223f"},{url:"images/course/php-study-install/install-2.png",revision:"83379b0328db209771c29b9ecdf87003"},{url:"images/course/php-study-install/install-3.png",revision:"e98a5c9b2119e6e07eb42b1cc22c38e6"},{url:"images/course/php-study-install/install-4.png",revision:"be98f0da3c4edec2ba876c9de1c436eb"},{url:"images/course/php-study-install/install-5.png",revision:"b9fef03a021f58fc274f671b4c9cb006"},{url:"images/course/php-study-install/install-6.png",revision:"529dfe051c095770d62c13810da75d04"},{url:"images/course/php-study-install/install-7.png",revision:"c819e8538b5cff578447d1f7201065b3"},{url:"images/course/php-study-install/install-8.png",revision:"63771f6319b0d3c8f99c361e0c3614f5"},{url:"images/course/php-study-install/titlepic.png",revision:"22db0a43aa94063f622a3135d5215048"},{url:"images/course/titlepic.png",revision:"4f036983e6aea693343b039f2498aad6"},{url:"images/logo.png",revision:"b000157a61a423c6b357baf49fd19031"},{url:"logo.png",revision:"b000157a61a423c6b357baf49fd19031"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});