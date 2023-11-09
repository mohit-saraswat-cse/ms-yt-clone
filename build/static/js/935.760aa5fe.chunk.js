"use strict";(self.webpackChunkms_yt_clone=self.webpackChunkms_yt_clone||[]).push([[935],{5935:function(e,s,l){l.r(s),l.d(s,{default:function(){return S}});var t=l(9439),n=l(2791),a=l(9434),r=l(8499),i=l(1087),c=l(7692),d=l(184),o=function(e){var s=e.name,l=e.text;return(0,d.jsxs)("div",{className:"p-2 flex items-center bg-gray-50 mb-2 dark:bg-slate-800 dark:text-white",children:[(0,d.jsx)(c.ePx,{className:" dark:bg-slate-800 text-2xl",alt:"user-Icon"}),(0,d.jsx)("p",{className:"font-bold px-2",children:s}),(0,d.jsx)("p",{children:l})]})},u=l(5100),x=l(5169),m=function(){var e=(0,a.I0)(),s=(0,n.useState)(""),l=(0,t.Z)(s,2),r=l[0],i=l[1],c=(0,a.v9)((function(e){return e.chat.chatList}));return(0,n.useEffect)((function(){var s=setInterval((function(){e((0,u.Z)({name:(0,x.Dj)(),text:(0,x.Jf)(10)}))}),2e3);return function(){clearInterval(s)}}),[]),(0,d.jsxs)("div",{className:"border border-black w-full  p-2 mb-1 rounded-lg shadow-lg dark:border-white",children:[(0,d.jsx)("div",{className:"flex flex-col-reverse overflow-y-scroll h-[380px]",children:c.map((function(e,s){return(0,d.jsx)(o,{name:e.name,text:e.text},e.name+s)}))}),(0,d.jsxs)("form",{className:"items-center my-2",onSubmit:function(e){e.preventDefault()},children:[(0,d.jsx)("input",{className:"border border-black rounded-sm shadow-lg ml-4 px-2 dark:border-white dark:bg-slate-700",value:r,type:"text",onChange:function(e){i(e.target.value)}}),(0,d.jsx)("button",{className:"font-bold px-2 py-1 mx-2 bg-green-100 dark:bg-slate-500",onClick:function(){e((0,u.Z)({name:"My-Account",text:r})),i("")},children:"Submit"})]})]})},h=l(4165),v=l(5861),f=l(3185),p=function(e){var s,l,a,r,i,c=e.channelId,o=e.channelTitle,u=(0,n.useState)(null),m=(0,t.Z)(u,2),p=m[0],j=m[1];(0,n.useEffect)((function(){b()}),[]);var b=function(){var e=(0,v.Z)((0,h.Z)().mark((function e(){var s,l;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x.Gc+"&id="+c);case 2:return s=e.sent,e.next=5,s.json();case 5:l=e.sent,j(l);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(null==p)return(0,d.jsx)(d.Fragment,{});var g=(null===p||void 0===p||null===(s=p.items[0].snippet)||void 0===s||null===(l=s.thumbnails)||void 0===l||null===(a=l.high)||void 0===a?void 0:a.url)||{},N=null===p||void 0===p||null===(r=p.items[0])||void 0===r||null===(i=r.statistics)||void 0===i?void 0:i.subscriberCount;return(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("img",{className:"w-14 h-14 mr-1 rounded-full",alt:"channelImage",src:g}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"font-semibold text-lg",children:o}),(0,d.jsxs)("p",{className:"text-xs",children:[(0,f.abbreviateNumber)(N)," subscribers"]})]})]})},j=l(3524),b=l(3853),g=l(8820),N=function(e){var s,l,t,n=e.data,a=n=null===(s=n)||void 0===s||null===(l=s.snippet)||void 0===l||null===(t=l.topLevelComment)||void 0===t?void 0:t.snippet,r=a.authorDisplayName,i=a.authorProfileImageUrl,c=a.likeCount,o=a.publishedAt,u=a.textDisplay;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"flex mb-2",children:[(0,d.jsx)("img",{className:"w-10 h-12 mr-4 py-1 rounded-full",alt:"user",src:i}),(0,d.jsxs)("div",{className:" w-full",children:[(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("p",{className:"mr-2 text-base font-semibold",children:["@",r.split(" ").join("")]}),(0,d.jsx)("p",{className:"",children:o.split("T")[0]})]}),(0,d.jsx)("p",{className:"",children:u}),(0,d.jsxs)("div",{className:"flex my-1 items-center",children:[(0,d.jsx)(g.DZs,{className:"text-xl"}),(0,d.jsx)("p",{className:"text-center mx-2",children:(0,f.abbreviateNumber)(c)}),(0,d.jsx)(g.qBr,{className:"text-xl"})]})]}),(0,d.jsx)("div",{className:"mr-3 mt-3 text-xl flex justify-end w-full",children:(0,d.jsx)(b.$Pu,{})})]})})},w=function e(s){return s.comments.map((function(s,l){return(0,d.jsxs)("div",{children:[(0,d.jsx)(N,{data:s},l),(0,d.jsx)("div",{className:"pl-8 border-l-2",children:(0,d.jsx)(e,{comments:null===s||void 0===s?void 0:s.replies})})]})}))},y=function(e){var s=e.videoId,l=e.commentCount,a=(0,n.useState)(null),r=(0,t.Z)(a,2),i=r[0],c=r[1],o=(0,n.useState)(null),u=(0,t.Z)(o,2),m=u[0],f=u[1],p=(0,n.useState)(!1),j=(0,t.Z)(p,2),b=j[0],g=j[1];(0,n.useEffect)((function(){N()}),[s]);var N=function(){var e=(0,v.Z)((0,h.Z)().mark((function e(){var l,t,n,a,r,i;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x._8+s);case 2:return a=e.sent,e.next=5,a.json();case 5:null===(r=e.sent)||void 0===r||null===(l=r.items)||void 0===l||l.map((function(e){return e.replies=x.bo})),i=(null===r||void 0===r||null===(t=r.items)||void 0===t?void 0:t.length)>6?null===r||void 0===r||null===(n=r.items)||void 0===n?void 0:n.slice(1,6):null===r||void 0===r?void 0:r.items,c(i),f(i);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null==i?(0,d.jsx)("div",{children:"Loading"}):(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{className:"my-2 font-bold",children:[l," Comments"]}),(0,d.jsx)(w,{comments:i}),!b&&(0,d.jsx)("div",{className:"w-full flex justify-center rounded-3xl ",children:(0,d.jsx)("button",{"data-testid":"show-chat",onClick:function(){c(m),g(!0)},className:"w-full py-2 border rounded-3xl my-2 hover:bg-gray-200 dark:hover:bg-slate-600",children:"Show All Comments"})})]})},k=l(5118),Z=function(e){var s=(0,n.useState)(null),l=(0,t.Z)(s,2),a=l[0],r=l[1];(0,n.useEffect)((function(){S()}),[e.videoId]);var i=(null===a||void 0===a?void 0:a.snippet)||{},o=i.channelId,u=i.channelTitle,m=i.description,g=i.tags,N=i.title,w=i.publishedAt,Z=(null===a||void 0===a?void 0:a.statistics)||{},I=Z.commentCount,C=Z.likeCount,D=Z.viewCount,S=function(){var s=(0,v.Z)((0,h.Z)().mark((function s(){var l,t,n,a;return(0,h.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(x.cB+"&id="+e.videoId);case 2:return n=s.sent,s.next=5,n.json();case 5:a=s.sent,r(null===a||void 0===a?void 0:a.items[0]),e.channelDetail(null===a||void 0===a||null===(l=a.items[0])||void 0===l||null===(t=l.snippet)||void 0===t?void 0:t.channelId);case 8:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();if(null!=g)var T=g.slice(0,5);return null==a?(0,d.jsx)("div",{}):(0,d.jsxs)("div",{className:"flex flex-col w-full",children:[(0,d.jsx)("div",{className:"my-2 font-semibold text-lg",children:N}),(0,d.jsxs)("div",{className:"flex items-center my-2 justify-between",children:[(0,d.jsxs)("div",{className:"flex items-center ",children:[(0,d.jsx)(p,{channelId:o,channelTitle:u}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{className:"mx-4 p-2 px-4 bg-black text-white dark:bg-white dark:text-black rounded-full",children:"Subscribe"})})]}),(0,d.jsxs)("div",{className:"flex items-center max-sm:hidden",children:[(0,d.jsxs)("div",{className:"m-2  flex items-center bg-gray-100 dark:bg-slate-800 p-2 px-6 rounded-full dark:border border-white",children:[(0,d.jsx)(c.UZT,{className:"text-xl mr-1"}),(0,d.jsx)("p",{className:"mx-1 text-sm",children:(0,f.abbreviateNumber)(C)}),(0,d.jsx)("p",{className:"mx-1",children:"|"}),(0,d.jsx)(c.MZj,{className:"text-xl ml-1"})]}),(0,d.jsxs)("div",{className:"m-2 flex items-center text-center bg-gray-100 p-2 px-6 rounded-full justify-between  dark:bg-slate-800 dark:border border-white ",children:[(0,d.jsx)(j.m$7,{className:"text-xl mr-1"}),(0,d.jsx)("p",{className:"font-medium ml-1",children:"Share"})]}),(0,d.jsx)("div",{className:"bg-gray-100 p-2 rounded-full ml-2 dark:bg-slate-800 dark:border border-white hidden md:block ",children:(0,d.jsx)(b.K9M,{})})]})]}),(0,d.jsxs)("div",{className:"bg-gray-100 p-2 rounded-xl px-4 dark:bg-slate-600 ",children:[(0,d.jsxs)("div",{className:"lg:flex",children:[(0,d.jsxs)("p",{className:"flex",children:[(0,d.jsx)("span",{className:"font-semibold mr-2",children:(0,f.abbreviateNumber)(D)})," views"]}),(0,d.jsx)("p",{className:"lg:ml-6 font-medium",children:(0,k.k)(w)}),(0,d.jsxs)("div",{className:"flex pl-6",children:[null!=g&&g.length>0," && ",(0,d.jsxs)("p",{className:"text-blue-800 dark:text-blue-500",children:["#",g[0]]}),null!=g&&g.length>1," && ",(0,d.jsxs)("p",{className:"text-blue-800 dark:text-blue-500",children:["#",g[1]]}),null!=g&&g.length>2," && ",(0,d.jsxs)("p",{className:"text-blue-800 dark:text-blue-500",children:["#",g[2]]})]})]}),(0,d.jsx)("p",{className:"text-clip",children:m.split("\n")[0]}),(0,d.jsx)("div",{className:"lg:flex",children:T.map((function(e,s){return(0,d.jsxs)("p",{children:["#",e]},s)}))})]}),(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(y,{videoId:e.videoId,commentCount:I})})]})},I=function(e){var s,l,a,r,i=e.data,c=null===i||void 0===i||null===(s=i.contentDetails)||void 0===s||null===(l=s.upload)||void 0===l?void 0:l.videoId,o=(0,n.useState)(null),u=(0,t.Z)(o,2),m=u[0],p=u[1];(0,n.useEffect)((function(){j()}),[]);var j=function(){var e=(0,v.Z)((0,h.Z)().mark((function e(){var s,l;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x.cB+"&id="+c);case 2:return s=e.sent,e.next=5,s.json();case 5:l=e.sent,p(null===l||void 0===l?void 0:l.items[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(null==m)return(0,d.jsx)("div",{});var b=null===m||void 0===m?void 0:m.snippet,g=(b.channelId,b.channelTitle),N=b.publishedAt,w=b.title,y=(null===m||void 0===m||null===(a=m.snippet)||void 0===a||null===(r=a.thumbnails)||void 0===r?void 0:r.high).url,Z=(null===m||void 0===m?void 0:m.statistics).viewCount;return(0,d.jsxs)("div",{className:"grid grid-cols-12 flex mb-3 ml-1",children:[(0,d.jsx)("div",{className:"mr-2 col-span-5",children:(0,d.jsx)("img",{className:"h-24 w-80 rounded-lg ",alt:"thumbnail",src:y})}),(0,d.jsxs)("div",{className:"col-span-7",children:[(0,d.jsx)("p",{className:"line-clamp-2 mt-1 font-semibold text-sm",children:w}),(0,d.jsx)("p",{className:"line-clamp-1 text-sm text-gray-700 dark:text-slate-300",children:g}),(0,d.jsxs)("div",{className:"flex line-clamp-1 text-sm text-gray-500 items-center",children:[(0,d.jsxs)("p",{className:"mr-1 dark:text-slate-200 ",children:[(0,f.abbreviateNumber)(Z)," views"]}),(0,d.jsx)("span",{className:"mx-1 dark:text-slate-200 ",children:"."}),(0,d.jsx)("p",{className:"dark:text-slate-200 ",children:(0,k.k)(N)})]})]})]})},C=function(){return(0,d.jsxs)("div",{className:"h-24 grid grid-cols-12 bg-gray-50 mb-2 dark:bg-slate-800",children:[(0,d.jsx)("div",{className:"col-span-5 bg-gray-300 mr-2 rounded-lg dark:bg-slate-600"}),(0,d.jsxs)("div",{className:"col-span-7 bg-gray-100 grid grid-rows-4 py-1 dark:bg-slate-800",children:[(0,d.jsxs)("div",{className:"row-span-1  py-2 w-11/12",children:[(0,d.jsx)("p",{className:"bg-gray-300 h-1/2 rounded-lg "})," "]}),(0,d.jsxs)("div",{className:"row-span-1  py-2 w-11/12",children:[(0,d.jsx)("p",{className:"bg-gray-300 h-1/2 rounded-lg "})," "]}),(0,d.jsxs)("div",{className:"row-span-1  py-2 w-3/4",children:[(0,d.jsx)("p",{className:"bg-gray-300 h-1/2 rounded-lg"})," "]}),(0,d.jsxs)("div",{className:"row-span-1  py-2 w-1/2",children:[(0,d.jsx)("p",{className:"bg-gray-300 h-1/2 rounded-lg"})," "]})]})]})},D=function(e){var s=e.channelId,l=(0,n.useState)(null),a=(0,t.Z)(l,2),r=a[0],c=a[1];(0,n.useEffect)((function(){o()}),[s]);var o=function(){var e=(0,v.Z)((0,h.Z)().mark((function e(){var l,t;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x.zv+s);case 2:return l=e.sent,e.next=5,l.json();case 5:t=e.sent,c(null===t||void 0===t?void 0:t.items);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null==r?(0,d.jsxs)("div",{children:[(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{}),(0,d.jsx)(C,{})]}):(0,d.jsx)("div",{children:r.map((function(e,s){var l,t;return(0,d.jsx)(i.rU,{to:"/watch?v="+(null===e||void 0===e||null===(l=e.contentDetails)||void 0===l||null===(t=l.upload)||void 0===t?void 0:t.videoId),children:(0,d.jsx)(I,{data:e})},s)}))})},S=function(){var e=(0,a.I0)(),s=(0,n.useState)(!1),l=(0,t.Z)(s,2),c=l[0],o=l[1],u=(0,n.useState)(""),x=(0,t.Z)(u,2),h=x[0],v=x[1],f=(0,i.lr)(),p=(0,t.Z)(f,1)[0].get("v");(0,n.useEffect)((function(){e((0,r.Wj)())}),[]);return(0,d.jsxs)("div",{className:"p-2 w-full pl-10 grid grid-cols-12  dark:bg-slate-800 dark:text-white",children:[(0,d.jsxs)("div",{className:"flex flex-col col-span-12 md:col-span-8 overflow-x-hidden mr-2",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsx)("iframe",{"data-testid":"iframe",width:"100%",height:"450",src:"https://www.youtube.com/embed/"+p+"?autoplay=1&mute=0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,className:"rounded-xl dark:bg-white"})}),(0,d.jsx)(Z,{videoId:p,channelDetail:function(e){v(e)}})]}),(0,d.jsxs)("div",{className:"col-span-4 p-1 hidden md:block",children:[(0,d.jsxs)("div",{className:"w-full",children:[c&&(0,d.jsx)(m,{}),(0,d.jsx)("div",{className:"w-full flex justify-center rounded-3xl ",children:(0,d.jsx)("button",{"data-testid":"show-chat",onClick:function(){return o(!c)},className:"w-full py-2 border rounded-3xl my-2 hover:bg-gray-200 dark:hover:bg-slate-600",children:c?"Hide chat":"Show chat"})})]}),(0,d.jsx)(D,{channelId:h})]})]})}},5118:function(e,s,l){l.d(s,{k:function(){return t}});var t=function(e){var s=new Date(e),l=new Date;return l.getFullYear()-s.getFullYear()?l.getFullYear()-s.getFullYear()+" years ago":l.getMonth()-s.getMonth()?l.getMonth()-s.getMonth()+" months ago":l.getDate()-s.getDate()==0?"Today":l.getDate()-s.getDate()==1?"1 day ago":l.getDate()-s.getDate()+" days ago"}}}]);
//# sourceMappingURL=935.760aa5fe.chunk.js.map