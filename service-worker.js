if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7dafdff6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b57d11b9.css",revision:"c221b9d71a4aa958d942db13bd6d5ad4"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/40.bc47f520.js",revision:"83938d41df85a3858f63f76da3d1d45e"},{url:"assets/js/41.3c8f8709.js",revision:"f20e1c66e9a9d84ea0628131c4f2b1c6"},{url:"assets/js/42.46eb9147.js",revision:"dab6bc49902e05932bee85abd891f425"},{url:"assets/js/app.0f10a45f.js",revision:"4562229209d939d1253990e376225190"},{url:"assets/js/layout-Blog.26c3dad4.js",revision:"7f2d96dfa45b66a4a116a7f0892d2b1e"},{url:"assets/js/layout-Layout.85d11602.js",revision:"e5b24bf52e3169e1f19f8d202283945f"},{url:"assets/js/layout-NotFound.2ddaa33d.js",revision:"ccbbafb84f5cfb9ff7af6cda4cfb4b73"},{url:"assets/js/layout-Slide.8a31f320.js",revision:"630844b40488b8edc6d88c5f19dcd5d1"},{url:"assets/js/page-Markdown文档.9a175583.js",revision:"f9c973bdaa8ccac033dcec7d0e123bec"},{url:"assets/js/page-Mock调试数据.2b2648cd.js",revision:"c9c12f8c827c4dbc32ae4c1fe2c86f18"},{url:"assets/js/page-TP6新项目的创建与Apidoc的安装.afebb59b.js",revision:"16314dd8f5718c3d867113ddaf58e390"},{url:"assets/js/page-V2x升级V3x指南.98a3d27d.js",revision:"27b7e0edd45fe038d46f535f689c4394"},{url:"assets/js/page-介绍.96b10db5.js",revision:"94b880b0819daee64453eef76cbe6235"},{url:"assets/js/page-使用GithubActions实现TP6自动化部署.9ad93e53.js",revision:"1331ef44a80517744337435d561215bd"},{url:"assets/js/page-使用phpstudy搭建TP6运行环境.1b31ac9b.js",revision:"8baf449be6c8c9ad4b624d44453be64b"},{url:"assets/js/page-前端配置.86a1329c.js",revision:"e867da4cc6a3e430c64d451e0711fa38"},{url:"assets/js/page-各种参数类型的注解教程.68cdd20f.js",revision:"8ea39f2d94477f995d9c6c99b5adeb3b"},{url:"assets/js/page-多应用多版本.6ad79b67.js",revision:"371d44958691fea48fdb8792dd389b9c"},{url:"assets/js/page-多语言.ebd5a81e.js",revision:"dcaffe8a50ac5e838133ff3e32b50e5c"},{url:"assets/js/page-安装升级.823d32bb.js",revision:"3c51d5bb35f93944dd24e6b81aa02ece"},{url:"assets/js/page-建议及规范.b077490d.js",revision:"003178dbdc70cbda9ba66ace443f7bd9"},{url:"assets/js/page-引入解释文件.7c9aa9e1.js",revision:"352d2a6ac2074fec21c1c9dbe4506480"},{url:"assets/js/page-指南.d92a8463.js",revision:"abafeceb8f807e41a7743961ee1da175"},{url:"assets/js/page-接口参数Param、Returned注解技巧.760f6fa0.js",revision:"d43263c227d8e1238f129d39dc17dae4"},{url:"assets/js/page-接口注释.b09f9e6d.js",revision:"723dd5cd8ff6440c98cc7122ceb9f360"},{url:"assets/js/page-接口调试.65ba7540.js",revision:"93b4fc16490d8df62675599c04c6066f"},{url:"assets/js/page-控制器分组.d8cab74e.js",revision:"02c96a6d2257827f10faa05c91e1cabd"},{url:"assets/js/page-控制器注释.256b26b5.js",revision:"d611214b925fb215638bd7ddb1e72501"},{url:"assets/js/page-教程.9171567a.js",revision:"fe0c6cb7d10ede95d97aa4f9104f1eaa"},{url:"assets/js/page-文档缓存.585536df.js",revision:"5d713aa9cdad68eda615b8d54b146edb"},{url:"assets/js/page-更新日志.ce4d3a2f.js",revision:"00a27d933cfbc6a67e2ab9846ba6f83b"},{url:"assets/js/page-没有生成apidocphp配置文件.59e854f7.js",revision:"b9dfe1139c529d10292f61935d8cd414"},{url:"assets/js/page-访问密码.891d4ca2.js",revision:"cb1e6e59646787fc71ca9ce28fb14a7c"},{url:"assets/js/page-调试时的事件.0ee91b0d.js",revision:"dd0de8cee5eb4ef27f9e22f280f8ad3c"},{url:"assets/js/page-配置参数.7890c967.js",revision:"aa291c36197eb963fe053bec2e15e515"},{url:"assets/js/page-页面404错误.0bb6b3d0.js",revision:"3c1ab9d3e3a8b887212b7e59efb78e24"},{url:"assets/js/page-页面500错误.ccbc6cbc.js",revision:"1d0e3554470c8866bd484da673264b02"},{url:"assets/js/page-页面布局.2d8cf951.js",revision:"2233e17fba22e5354e9e7bf38d61c081"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.a0178148.js",revision:"13cf464b28026154409967db43d49a31"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.03ba6a36.js",revision:"7204388c3bbc1471554ad69c7bbf6ed3"},{url:"assets/js/vendors~layout-Layout.70205388.js",revision:"33bcf9f382e50a01e1bfff3fda5f8ceb"},{url:"assets/js/vendors~photo-swipe.ce98cbf6.js",revision:"0235e34826c3ebfbab8c92feb7fc8d05"},{url:"404.html",revision:"b79b3518babc472eae89e15997981821"},{url:"config/index.html",revision:"86f2a326e52312b427037773aed59489"},{url:"config/page/index.html",revision:"89c039063cd0425434fcd1d1f7203351"},{url:"course/apiParam/index.html",revision:"2e61c4b7443f34ead66e79febe1439ca"},{url:"course/createTpAndInstall/index.html",revision:"c3d40c30a758be499c9bfdfb1c27c8ed"},{url:"course/githubActionsDeploy/index.html",revision:"99bb754f2dfb44edc10aabaac985d253"},{url:"course/index.html",revision:"821f6f404d0cda279d4e66c9e5746b92"},{url:"course/paramSkills/index.html",revision:"7b2530ed943b1c271c95c370ba54dc60"},{url:"course/phpStudyInstall/index.html",revision:"004c6d245c40711e069f72877dd87f69"},{url:"guide/changelog/index.html",revision:"c7fc0dbd7d87ade5134727f5b4d4550b"},{url:"guide/index.html",revision:"5f64d5e693040899e7dcaec2b2354b3a"},{url:"guide/install/index.html",revision:"0df1770a1c8e2d7c7b8698392742275c"},{url:"index.html",revision:"dd03731dbdfb89902471dbbf1f647272"},{url:"use/function/apps/index.html",revision:"da1d554907ab563c2f32b3a75d42553c"},{url:"use/function/cache/index.html",revision:"bad6ab9fcd49db30463ad14368965239"},{url:"use/function/controllerGroup/index.html",revision:"c9986dfb80657c45ae936a879f4d5d98"},{url:"use/function/debugEvent/index.html",revision:"896b6f324f7694595f16eb007f27a8d6"},{url:"use/function/docs/index.html",revision:"da65fdc7618493e26a5036b161b97f5f"},{url:"use/function/lang/index.html",revision:"f491f33f41bae7806bc042799ab4ff7c"},{url:"use/function/mock/index.html",revision:"a15d2f8dffe7fb710615beac9a68cd81"},{url:"use/function/password/index.html",revision:"4b5ad2f9edd49e1ea0a0c8290a3baa96"},{url:"use/help/404/index.html",revision:"dad27122a1c3b68bec2ac3fc8b861ffb"},{url:"use/help/500/index.html",revision:"51f7f40daa8bed9bdd87d3c78879c160"},{url:"use/help/notConfig/index.html",revision:"3f2f51918c173dd65c1b6ec43628d04b"},{url:"use/help/v2Tov3/index.html",revision:"dfc99ae2713255e946ed2c47dcd53813"},{url:"use/index.html",revision:"9340fa0fd9b68db3acfa83b6fbcb8ed0"},{url:"use/notes/api/index.html",revision:"cbf6f71ef208ce1a136515f107e48946"},{url:"use/notes/controller/index.html",revision:"6b8c66dd8915fd4207de6bce129ee7fa"},{url:"use/notes/index.html",revision:"18c13e5781826fdd71a20e119dbf14b4"},{url:"use/notes/useFile/index.html",revision:"1be1cebc3d43d62a3e656a0b958c4435"},{url:"use/operation/apidebug/index.html",revision:"b16e74319b033d03d0bc2838ef131e15"},{url:"use/operation/layout/index.html",revision:"abc662b19b1220e7cc5367d7a7332e63"},{url:"assets/icon/apple-icon-152.png",revision:"f80145aa55bdcd965ca90e40c7bf852c"},{url:"assets/icon/chrome-192.png",revision:"f1aa7a38848d97a4328f561ce4c25fe1"},{url:"assets/icon/chrome-512.png",revision:"b36b4238ca28da6995301ef2637e06ce"},{url:"assets/icon/chrome-mask-192.png",revision:"71a4c2f46e621bf85b6a1bcd8c21560c"},{url:"assets/icon/chrome-mask-512.png",revision:"bb407756d4070797d4b4e0986c71e632"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"bccb7c7b07285b900091c7618fe1171a"},{url:"images/apidoc-api-base-demo.png",revision:"bc8627c9a152086a3f84ead363532ffc"},{url:"images/apidoc-api-complete-demo.png",revision:"c5fa189101acc34b46ccb492187787b0"},{url:"images/apidoc-api-dictionary-demo.png",revision:"d6ce3a96f5038e78264c71e0967f18b7"},{url:"images/apidoc-api-model-demo.png",revision:"590cf66c15ea3499b04c6bf388f9ea70"},{url:"images/apidoc-api-page_debug.jpg",revision:"2d80868ba39955285baf3c22f2c172b5"},{url:"images/apidoc-api-page.jpg",revision:"10f8c091787dd3e142e51d4631fca29b"},{url:"images/apidoc-api-server-demo.png",revision:"b09fcfb9040826083d9713c1ae196527"},{url:"images/apidoc-config_crud.png",revision:"dddcb3ecd0a963673725df4bd08e7437"},{url:"images/apidoc-controller-demo.png",revision:"647d55b314e74979f84299bd7fa11aac"},{url:"images/apidoc-demo-apps.png",revision:"a31d7ccf34565fc8e80cacad42968469"},{url:"images/apidoc-demo-md.png",revision:"8d8fdd9f507f2b34afb787b1f8b2b328"},{url:"images/apidoc-help-404_error.png",revision:"1f0b312587fba9355ea02e35fc52babe"},{url:"images/apidoc-help-route404.png",revision:"00f5a734b5e0d1567bec18234a1acef2"},{url:"images/apidoc-help-use_error.png",revision:"38e6f12ce9120d87dbf02b5b777ad18a"},{url:"images/apidoc-home-page.jpeg",revision:"c47a3f25ead28d5754ffd73c2504bcd7"},{url:"images/course/apiParam/titlepic.jpg",revision:"24f8a97f9140532f5b42ceba929f5a1e"},{url:"images/course/githubActions/composer.png",revision:"dce4eed3259a7790e10acdafa71ac3d5"},{url:"images/course/githubActions/github-actions.png",revision:"b59f8481260fe60142d6c22e33915594"},{url:"images/course/githubActions/github-settings-key.png",revision:"eaedb35383ab85f12bf906ded5d2d74e"},{url:"images/course/githubActions/github-settings.png",revision:"f3329cdc8654e476164e78cc974302cf"},{url:"images/course/githubActions/titlepic.png",revision:"3149df4a493dc829e1e2f68ad32e765b"},{url:"images/course/install-1.png",revision:"033d2bcb91f1ddecf782b4ab50d946de"},{url:"images/course/install-2.png",revision:"368b137317a4a2e17309e106a4c4fd89"},{url:"images/course/install-3.png",revision:"7e80273c9be9dfa0dc53e3617c94484a"},{url:"images/course/install-4.png",revision:"59a163113aeb9b6c21ac21395a2d7938"},{url:"images/course/install-apidoc-1.png",revision:"5c34c0640652e3670988580215a38e3b"},{url:"images/course/install-apidoc-2.png",revision:"c9a7f968f6be9705e2b994ce57690dd9"},{url:"images/course/install-apidoc-3.png",revision:"557909af93f3a19610f8c0772205678c"},{url:"images/course/install-apidoc-4.png",revision:"0a9dc2601a45853e57ac4e66dc3b84c0"},{url:"images/course/install-apidoc-5.png",revision:"a084d350ab1a4066953fd03cb1e51c4e"},{url:"images/course/install-apidoc-6.png",revision:"ffb6cededbeeab5b588c764ff614b6bb"},{url:"images/course/php-study-install/install-1.png",revision:"356f7a4f3790ce393b60529e2717223f"},{url:"images/course/php-study-install/install-2.png",revision:"83379b0328db209771c29b9ecdf87003"},{url:"images/course/php-study-install/install-3.png",revision:"e98a5c9b2119e6e07eb42b1cc22c38e6"},{url:"images/course/php-study-install/install-4.png",revision:"be98f0da3c4edec2ba876c9de1c436eb"},{url:"images/course/php-study-install/install-5.png",revision:"b9fef03a021f58fc274f671b4c9cb006"},{url:"images/course/php-study-install/install-6.png",revision:"529dfe051c095770d62c13810da75d04"},{url:"images/course/php-study-install/install-7.png",revision:"c819e8538b5cff578447d1f7201065b3"},{url:"images/course/php-study-install/install-8.png",revision:"63771f6319b0d3c8f99c361e0c3614f5"},{url:"images/course/php-study-install/titlepic.png",revision:"22db0a43aa94063f622a3135d5215048"},{url:"images/course/titlepic.png",revision:"4f036983e6aea693343b039f2498aad6"},{url:"images/logo.png",revision:"b000157a61a423c6b357baf49fd19031"},{url:"logo.png",revision:"b000157a61a423c6b357baf49fd19031"}],{}),e.cleanupOutdatedCaches()}));
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
