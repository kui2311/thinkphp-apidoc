if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-ed249f6c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.75d1ecf0.css",revision:"a2b600ba0deefae19467d1e94e74e473"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/40.11817f52.js",revision:"83938d41df85a3858f63f76da3d1d45e"},{url:"assets/js/41.23c75bc6.js",revision:"f20e1c66e9a9d84ea0628131c4f2b1c6"},{url:"assets/js/42.46eb9147.js",revision:"dab6bc49902e05932bee85abd891f425"},{url:"assets/js/app.e3abd29b.js",revision:"748da5ca043ddb592eed85d1395fbc00"},{url:"assets/js/layout-Blog.2fa42e14.js",revision:"7f2d96dfa45b66a4a116a7f0892d2b1e"},{url:"assets/js/layout-Layout.85d11602.js",revision:"e5b24bf52e3169e1f19f8d202283945f"},{url:"assets/js/layout-NotFound.41d628ed.js",revision:"ccbbafb84f5cfb9ff7af6cda4cfb4b73"},{url:"assets/js/layout-Slide.a41f58b6.js",revision:"630844b40488b8edc6d88c5f19dcd5d1"},{url:"assets/js/page-Markdown文档.1c6cc5ca.js",revision:"f9c973bdaa8ccac033dcec7d0e123bec"},{url:"assets/js/page-Mock调试数据.970f2484.js",revision:"c9c12f8c827c4dbc32ae4c1fe2c86f18"},{url:"assets/js/page-TP6新项目的创建与Apidoc的安装.8af4d176.js",revision:"16314dd8f5718c3d867113ddaf58e390"},{url:"assets/js/page-V2x升级V3x指南.26ac527d.js",revision:"27b7e0edd45fe038d46f535f689c4394"},{url:"assets/js/page-介绍.2ae19ad8.js",revision:"40c13b8361ffac5d25c5d9dcca78d6b0"},{url:"assets/js/page-使用GithubActions实现TP6自动化部署.35d69a72.js",revision:"1331ef44a80517744337435d561215bd"},{url:"assets/js/page-使用phpstudy搭建TP6运行环境.3f079f6b.js",revision:"8baf449be6c8c9ad4b624d44453be64b"},{url:"assets/js/page-前端配置.6829820c.js",revision:"e867da4cc6a3e430c64d451e0711fa38"},{url:"assets/js/page-各种参数类型的注解教程.86b5727a.js",revision:"8ea39f2d94477f995d9c6c99b5adeb3b"},{url:"assets/js/page-多应用多版本.b5c41ffd.js",revision:"371d44958691fea48fdb8792dd389b9c"},{url:"assets/js/page-多语言.e5fb07a7.js",revision:"dcaffe8a50ac5e838133ff3e32b50e5c"},{url:"assets/js/page-安装升级.31ec8c74.js",revision:"80c62aff67d7a207d7ab5b43cbbde692"},{url:"assets/js/page-建议及规范.656e0a82.js",revision:"003178dbdc70cbda9ba66ace443f7bd9"},{url:"assets/js/page-引入解释文件.2479f92a.js",revision:"352d2a6ac2074fec21c1c9dbe4506480"},{url:"assets/js/page-指南.5d6c7f66.js",revision:"abafeceb8f807e41a7743961ee1da175"},{url:"assets/js/page-接口参数Param、Returned注解技巧.592563c2.js",revision:"d43263c227d8e1238f129d39dc17dae4"},{url:"assets/js/page-接口注释.0f357cda.js",revision:"2e520c516c19ab27f067477bfe369ca9"},{url:"assets/js/page-接口调试.6013ad72.js",revision:"93b4fc16490d8df62675599c04c6066f"},{url:"assets/js/page-控制器分组.cb098dc6.js",revision:"02c96a6d2257827f10faa05c91e1cabd"},{url:"assets/js/page-控制器注释.08fc1716.js",revision:"d611214b925fb215638bd7ddb1e72501"},{url:"assets/js/page-教程.56e7e767.js",revision:"fe0c6cb7d10ede95d97aa4f9104f1eaa"},{url:"assets/js/page-文档缓存.54e023ce.js",revision:"5d713aa9cdad68eda615b8d54b146edb"},{url:"assets/js/page-更新日志.cd18da1f.js",revision:"9704dfb58d55acf38e99f0cda242022d"},{url:"assets/js/page-没有生成apidocphp配置文件.5e35ebd3.js",revision:"b9dfe1139c529d10292f61935d8cd414"},{url:"assets/js/page-访问密码.27068f9d.js",revision:"cb1e6e59646787fc71ca9ce28fb14a7c"},{url:"assets/js/page-调试时的事件.f6b3c875.js",revision:"dd0de8cee5eb4ef27f9e22f280f8ad3c"},{url:"assets/js/page-配置参数.6f702c1c.js",revision:"395ef4c864758818672b7b2e9ddc4ff1"},{url:"assets/js/page-页面404错误.6e4470fb.js",revision:"3c1ab9d3e3a8b887212b7e59efb78e24"},{url:"assets/js/page-页面500错误.ffee9389.js",revision:"1d0e3554470c8866bd484da673264b02"},{url:"assets/js/page-页面布局.f92a1c76.js",revision:"2233e17fba22e5354e9e7bf38d61c081"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.c13b613b.js",revision:"13cf464b28026154409967db43d49a31"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.358419a0.js",revision:"7204388c3bbc1471554ad69c7bbf6ed3"},{url:"assets/js/vendors~layout-Layout.bd3b9219.js",revision:"33bcf9f382e50a01e1bfff3fda5f8ceb"},{url:"assets/js/vendors~photo-swipe.ce98cbf6.js",revision:"0235e34826c3ebfbab8c92feb7fc8d05"},{url:"404.html",revision:"151f28efacaadb38e14b8bd2a048afc1"},{url:"config/index.html",revision:"35c4619ac6e7ed9ff99c7a8cb35ddfc2"},{url:"config/page/index.html",revision:"5621dd23236ad9ed5cabadb9557b4ae6"},{url:"course/apiParam/index.html",revision:"340f20d99c3ea96948875a42bab8865c"},{url:"course/createTpAndInstall/index.html",revision:"588dc246b8210a448204518c7457ebfc"},{url:"course/githubActionsDeploy/index.html",revision:"2d81e7f840172f96f3068cb117c44bf5"},{url:"course/index.html",revision:"44b537c247fc59ba94acfd69e2f8acb3"},{url:"course/paramSkills/index.html",revision:"6990b806e34efb14efa92201d6c0f2ca"},{url:"course/phpStudyInstall/index.html",revision:"0561641c411c41017ca1fde6f16525d9"},{url:"guide/changelog/index.html",revision:"d275b7c1df65a66e07dfee01f74f7de2"},{url:"guide/index.html",revision:"f26c1b3e6a25ab64f8578f3750c67b39"},{url:"guide/install/index.html",revision:"b01be312eea4ee195faef9ff0c36b3de"},{url:"index.html",revision:"efaee1e99841b3336fc21429b0ab73a4"},{url:"use/function/apps/index.html",revision:"e220454dd378fe1184b3a9b6d13c2d99"},{url:"use/function/cache/index.html",revision:"aa1e1c839dc56fb557319e0f84c0eef1"},{url:"use/function/controllerGroup/index.html",revision:"af1e1314ab1d2e2a54c929d45185c813"},{url:"use/function/debugEvent/index.html",revision:"0010b947d36df554cae063852b76da0d"},{url:"use/function/docs/index.html",revision:"59c9cacbc21625b63e54c103ff91ac59"},{url:"use/function/lang/index.html",revision:"1b578ef7f95dd70194b6ac6e3a1c5656"},{url:"use/function/mock/index.html",revision:"40ad8427d20c80f62056d099825ca370"},{url:"use/function/password/index.html",revision:"b1711f2897045700d2ec26acc6b2235c"},{url:"use/help/404/index.html",revision:"f9775107abefeb22a493d73fd1f46f10"},{url:"use/help/500/index.html",revision:"6db006847691494a9ba94066f039219a"},{url:"use/help/notConfig/index.html",revision:"71421f3b291b9ef8c0f0eaade5972d05"},{url:"use/help/v2Tov3/index.html",revision:"bb0bd720869cd609632b2dd50e8c473d"},{url:"use/index.html",revision:"d6d50da04c94fb3281ab8cd405539bdc"},{url:"use/notes/api/index.html",revision:"dbc6793b797861e85ed4a7e3eb8685de"},{url:"use/notes/controller/index.html",revision:"4106cbe18370bcff0d652b50a3ced601"},{url:"use/notes/index.html",revision:"e2c60915f6a82f668b3750d86798b75d"},{url:"use/notes/useFile/index.html",revision:"1ace9f0a4696055f0dc03f8e62822c71"},{url:"use/operation/apidebug/index.html",revision:"6f2e8013cf71caba0c3fb8c6e680896a"},{url:"use/operation/layout/index.html",revision:"fdfe84eca71e4c96c479512e93b87a95"},{url:"assets/icon/apple-icon-152.png",revision:"f80145aa55bdcd965ca90e40c7bf852c"},{url:"assets/icon/chrome-192.png",revision:"f1aa7a38848d97a4328f561ce4c25fe1"},{url:"assets/icon/chrome-512.png",revision:"b36b4238ca28da6995301ef2637e06ce"},{url:"assets/icon/chrome-mask-192.png",revision:"71a4c2f46e621bf85b6a1bcd8c21560c"},{url:"assets/icon/chrome-mask-512.png",revision:"bb407756d4070797d4b4e0986c71e632"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"bccb7c7b07285b900091c7618fe1171a"},{url:"images/apidoc-api-base-demo.png",revision:"bc8627c9a152086a3f84ead363532ffc"},{url:"images/apidoc-api-complete-demo.png",revision:"c5fa189101acc34b46ccb492187787b0"},{url:"images/apidoc-api-dictionary-demo.png",revision:"d6ce3a96f5038e78264c71e0967f18b7"},{url:"images/apidoc-api-model-demo.png",revision:"590cf66c15ea3499b04c6bf388f9ea70"},{url:"images/apidoc-api-page_debug.jpg",revision:"6e4266062877ba804bf70bba3e359865"},{url:"images/apidoc-api-page.jpg",revision:"1de3a949b9cf33f23f3919d1ce7406fd"},{url:"images/apidoc-api-server-demo.png",revision:"b09fcfb9040826083d9713c1ae196527"},{url:"images/apidoc-config_crud.png",revision:"dddcb3ecd0a963673725df4bd08e7437"},{url:"images/apidoc-controller-demo.png",revision:"647d55b314e74979f84299bd7fa11aac"},{url:"images/apidoc-demo-apps.png",revision:"a31d7ccf34565fc8e80cacad42968469"},{url:"images/apidoc-demo-md.png",revision:"8d8fdd9f507f2b34afb787b1f8b2b328"},{url:"images/apidoc-help-404_error.png",revision:"1f0b312587fba9355ea02e35fc52babe"},{url:"images/apidoc-help-route404.png",revision:"00f5a734b5e0d1567bec18234a1acef2"},{url:"images/apidoc-help-use_error.png",revision:"38e6f12ce9120d87dbf02b5b777ad18a"},{url:"images/apidoc-home-page.jpeg",revision:"c47a3f25ead28d5754ffd73c2504bcd7"},{url:"images/course/apiParam/titlepic.jpg",revision:"24f8a97f9140532f5b42ceba929f5a1e"},{url:"images/course/githubActions/composer.png",revision:"dce4eed3259a7790e10acdafa71ac3d5"},{url:"images/course/githubActions/github-actions.png",revision:"b59f8481260fe60142d6c22e33915594"},{url:"images/course/githubActions/github-settings-key.png",revision:"eaedb35383ab85f12bf906ded5d2d74e"},{url:"images/course/githubActions/github-settings.png",revision:"f3329cdc8654e476164e78cc974302cf"},{url:"images/course/githubActions/titlepic.png",revision:"3149df4a493dc829e1e2f68ad32e765b"},{url:"images/course/install-1.png",revision:"033d2bcb91f1ddecf782b4ab50d946de"},{url:"images/course/install-2.png",revision:"368b137317a4a2e17309e106a4c4fd89"},{url:"images/course/install-3.png",revision:"7e80273c9be9dfa0dc53e3617c94484a"},{url:"images/course/install-4.png",revision:"59a163113aeb9b6c21ac21395a2d7938"},{url:"images/course/install-apidoc-1.png",revision:"5c34c0640652e3670988580215a38e3b"},{url:"images/course/install-apidoc-2.png",revision:"c9a7f968f6be9705e2b994ce57690dd9"},{url:"images/course/install-apidoc-3.png",revision:"557909af93f3a19610f8c0772205678c"},{url:"images/course/install-apidoc-4.png",revision:"0a9dc2601a45853e57ac4e66dc3b84c0"},{url:"images/course/install-apidoc-5.png",revision:"a084d350ab1a4066953fd03cb1e51c4e"},{url:"images/course/install-apidoc-6.png",revision:"ffb6cededbeeab5b588c764ff614b6bb"},{url:"images/course/php-study-install/install-1.png",revision:"356f7a4f3790ce393b60529e2717223f"},{url:"images/course/php-study-install/install-2.png",revision:"83379b0328db209771c29b9ecdf87003"},{url:"images/course/php-study-install/install-3.png",revision:"e98a5c9b2119e6e07eb42b1cc22c38e6"},{url:"images/course/php-study-install/install-4.png",revision:"be98f0da3c4edec2ba876c9de1c436eb"},{url:"images/course/php-study-install/install-5.png",revision:"b9fef03a021f58fc274f671b4c9cb006"},{url:"images/course/php-study-install/install-6.png",revision:"529dfe051c095770d62c13810da75d04"},{url:"images/course/php-study-install/install-7.png",revision:"c819e8538b5cff578447d1f7201065b3"},{url:"images/course/php-study-install/install-8.png",revision:"63771f6319b0d3c8f99c361e0c3614f5"},{url:"images/course/php-study-install/titlepic.png",revision:"22db0a43aa94063f622a3135d5215048"},{url:"images/course/titlepic.png",revision:"4f036983e6aea693343b039f2498aad6"},{url:"images/logo.png",revision:"b000157a61a423c6b357baf49fd19031"},{url:"logo.png",revision:"b000157a61a423c6b357baf49fd19031"}],{}),e.cleanupOutdatedCaches()}));
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
