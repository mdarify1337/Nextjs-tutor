(()=>{var e={};e.id=665,e.ids=[665],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},5689:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.default,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>l});var o=t(260),s=t(8203),n=t(8160),a=t(7292),i={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>a[e]);t.d(r,i);let l=["",{children:["dashboard",{children:["home",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5386)),"/home/ael/Desktop/Nextjs-tutor/src/app/dashboard/home/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3405)),"/home/ael/Desktop/Nextjs-tutor/src/app/dashboard/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1354)),"/home/ael/Desktop/Nextjs-tutor/src/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(t.bind(t,8160)),"/home/ael/Desktop/Nextjs-tutor/src/app/global-error.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,42)),"/home/ael/Desktop/Nextjs-tutor/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/ael/Desktop/Nextjs-tutor/src/app/dashboard/home/page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},p=new o.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/dashboard/home/page",pathname:"/dashboard/home",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8935:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},6959:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,9340,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},2651:(e,r,t)=>{Promise.resolve().then(t.bind(t,1417))},3267:(e,r,t)=>{Promise.resolve().then(t.bind(t,3653))},7906:(e,r,t)=>{Promise.resolve().then(t.bind(t,5730))},7818:(e,r,t)=>{Promise.resolve().then(t.bind(t,9222))},8505:(e,r,t)=>{Promise.resolve().then(t.bind(t,8160))},3657:(e,r,t)=>{Promise.resolve().then(t.bind(t,3444))},6487:()=>{},8335:()=>{},9334:(e,r,t)=>{"use strict";var o=t(8686);t.o(o,"usePathname")&&t.d(r,{usePathname:function(){return o.usePathname}}),t.o(o,"useRouter")&&t.d(r,{useRouter:function(){return o.useRouter}})},3653:(e,r,t)=>{"use strict";t.d(r,{default:()=>l});var o=t(5512),s=t(8531),n=t.n(s),a=t(9334);let i=[{name:"Home",path:"/dashboard/home"},{name:"Profile",path:"/dashboard/profile"},{name:"Settings",path:"/dashboard/settings"}];function l(){let e=(0,a.usePathname)();return(0,o.jsx)("div",{className:"w-1/5 bg-gray-900 text-white p-4 flex flex-col h-screen",children:i.map(r=>(0,o.jsx)(n(),{href:r.path,className:`p-3 mb-2 rounded 
                    ${e===r.path?"bg-gray-600":"bg-gray-700 hover:bg-gray-600"}`,children:r.name},r.name))})}},9222:(e,r,t)=>{"use strict";t.d(r,{ErrorWrapper:()=>a});var o=t(5512);t(4263);var s=t(8009);let n=({message:e="An error occurred"})=>{let[r,t]=(0,s.useState)(!1);if(r)throw Error(e);return(0,o.jsx)("button",{title:"Simulate an error",className:"bg-red-950 text-red-500 rounded p-1  leading-none font-semibold text-sm hover:bg-red-900 transition",onClick:()=>t(!0),children:"Simulate Error"})},a=({children:e})=>(0,o.jsxs)("div",{className:"flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300",children:[(0,o.jsx)("div",{className:"absolute top-0 left-4 -translate-y-1/2",children:(0,o.jsx)(n,{message:"Simulated error in root layout"})}),e]})},3444:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var o=t(5512);function s(){return(0,o.jsx)("html",{lang:"en",children:(0,o.jsx)("body",{children:(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen",children:[(0,o.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Something went wrong!"}),(0,o.jsx)("button",{onClick:()=>{window.location.reload()},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Refresh"})]})})})}t(4263)},1417:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});let o=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/ael/Desktop/Nextjs-tutor/src/app/components/Sidebar.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/ael/Desktop/Nextjs-tutor/src/app/components/Sidebar.tsx","default")},5386:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var o=t(2740);function s(){return(0,o.jsx)("h1",{className:"text-2xl",children:"\uD83C\uDFE0 Home"})}},3405:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var o=t(2740),s=t(1417);function n({children:e}){return(0,o.jsxs)("div",{className:"flex h-screen",children:[(0,o.jsx)(s.default,{}),(0,o.jsx)("div",{className:"flex-1 p-6",children:e})]})}},5730:(e,r,t)=>{"use strict";t.d(r,{ErrorWrapper:()=>o});let o=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call ErrorWrapper() from the server but ErrorWrapper is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/ael/Desktop/Nextjs-tutor/src/app/error-wrapper.tsx","ErrorWrapper")},8160:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});let o=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/ael/Desktop/Nextjs-tutor/src/app/global-error.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/ael/Desktop/Nextjs-tutor/src/app/global-error.tsx","default")},1354:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,metadata:()=>n});var o=t(2740),s=t(5730);let n={title:{default:"Next.js Tutorial - Codevolution",template:"%s | Codevolution",absolute:""},description:"Generated by Next.js"};function a({children:e}){return(0,o.jsx)("html",{lang:"en",children:(0,o.jsxs)("body",{children:[(0,o.jsx)("header",{style:{backgroundColor:"lightblue",padding:"1rem"},children:(0,o.jsx)("p",{children:"Header"})}),(0,o.jsx)(s.ErrorWrapper,{children:e}),(0,o.jsx)("footer",{style:{backgroundColor:"ghostwhite",padding:"1rem"},children:(0,o.jsx)("p",{children:"Footer"})})]})})}},42:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var o=t(2740);t(6301);let s=function(){return(0,o.jsxs)("div",{children:["NotFoundPage",(0,o.jsx)("h1",{children:"404"}),(0,o.jsx)("p",{children:"Could Not Find request resource"})]})}},440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var o=t(8077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},4263:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[638,483,531],()=>t(5689));module.exports=o})();