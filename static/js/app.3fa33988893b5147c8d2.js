webpackJsonp([2,0],[function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=s(89),a=n(o),i=s(29),r=n(i),c=s(146),l=n(c),u=s(175),d=n(u),m=s(69),v=s(72),p=n(v),f=s(136),_=n(f),h=s(5),g=n(h),C=s(145),b=n(C);r.default.use(b.default),g.default.defaults.baseURL="https://rampages.us/bicycleurbanism2015/wp-json/wp/v2",g.default.interceptors.request.use(function(t){return _.default.start(),t},function(t){return _.default.done(!0),a.default.reject(t)}),g.default.interceptors.response.use(function(t){return _.default.done(),t},function(t){return _.default.done(!0),a.default.reject(t)}),r.default.use(d.default);var y=new d.default({mode:"history",routes:m.routes,scrollBehavior:function(t,e,s){return s?s:{x:0,y:0}}});"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(function(t){console.log("Service Worker Registered, Scoped is: "+t.scope)}),new r.default({el:"#app",router:y,store:p.default,template:"<App/>",components:{App:l.default}})},,,,,,,,,function(t,e,s){s(131);var n=s(1)(s(81),s(171),null,null);t.exports=n.exports},,,function(t,e,s){s(126);var n=s(1)(null,s(164),"data-v-3b85f8de",null);t.exports=n.exports},,,,,,,function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=s(38),a=n(o);t.exports={buildRequestURL:function(t,e){return(0,a.default)(e).forEach(function(s){var n=e[s];t+=t.indexOf("?")>-1?"&"+s+"="+n:"?"+s+"="+n}),t}}},,,,,,,,,,,,,,,,function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(5),a=n(o);e.default={getComments:function(t){return a.default.get("/comments",{params:t})},postComment:function(t){return a.default.post("/comments",t)}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(5),a=n(o);e.default={getPosts:function(t){return a.default.get("/posts",{params:t})},getPost:function(t){return a.default.get("/posts",{params:{slug:t}})}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.eventHub=void 0;var o=s(38),a=n(o),i=s(29),r=n(i),c={bus:null,init:function(){return this.bus||(this.bus=new r.default),this},destroy:function(){this.bus&&this.bus.$destroy()},emit:function(t){for(var e,s=arguments.length,n=Array(s>1?s-1:0),o=1;o<s;o++)n[o-1]=arguments[o];return(e=this.bus).$emit.apply(e,[t].concat(n)),this},on:function(){var t=this,e=arguments;return 2===arguments.length?this.bus.$on(arguments[0],arguments[1]):(0,a.default)(arguments[0]).forEach(function(s){t.bus.$on(s,e[0][s])}),this}},l=c.init();e.eventHub=l},,,,,,,,,,,,,,function(t,e,s){s(127);var n=s(1)(s(82),s(166),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.routes=void 0;var o=s(153),a=n(o),i=s(156),r=n(i),c=s(157),l=n(c),u=s(158),d=n(u),m=s(154),v=n(m),p=s(155),f=n(p);e.routes=[{name:"home",path:"/",component:f.default},{name:"about",path:"/about",component:a.default},{name:"resume",path:"/resume",component:r.default},{name:"Work",path:"/work",component:d.default},{name:"Contact",path:"/contact",component:v.default},{name:"single",path:"/post/:slug",component:l.default},{path:"*",component:f.default}]},function(t,e){"use strict"},function(t,e){"use strict";t.exports={posts:function(t){return t.posts.list.data}}},function(t,e,s){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(29),i=o(a),r=s(176),c=o(r),l=s(70),u=n(l),d=s(71),m=n(d),v=s(73),p=o(v);i.default.use(c.default),e.default=new c.default.Store({actions:u,getters:m,modules:{posts:p.default},strict:!1})},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(36),a=n(o),i=s(5),r=n(i),c=s(19),l={list:{data:null,max_pages:0,total_posts:0}},u={getPosts:function(t,e){var s=t.commit,n=r.default.defaults.baseURL+"/posts";n=(0,c.buildRequestURL)(n,e),"caches"in window&&caches.match(n).then(function(t){t&&t.json().then(function(e){var n=t.headers,o={};o.data=e,o.total_posts=n.get("x-wp-total"),o.max_pages=n.get("x-wp-totalpages"),s("FETCH_POSTS",o)})}),a.default.getPosts(e).then(function(t){var e=t.headers,n={};n.data=t.data,n.total_posts=e["x-wp-total"],n.max_pages=e["x-wp-totalpages"],s("FETCH_POSTS",n)}).catch(function(t){console.log(t)})}},d={FETCH_POSTS:function(t,e){t.list=e}};e.default={state:l,mutations:d,actions:u}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(9),a=n(o),i=s(152),r=n(i),c=s(147),l=n(c);e.default={name:"app",components:{SiteHeader:a.default,SiteFooter:r.default,BottomNav:l.default},data:function t(){var t={transition:"fade"};return t}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(35),a=n(o),i=s(37),r=s(133),c=n(r);e.default={props:["post"],computed:{submitText:function(){return this.isSubmitting?"Submitting...":"Submit"}},data:function(){return{commentAuthorName:"",commentAuthorEmail:"",commentContent:"",isSubmitting:!1,isModeration:!1}},mounted:function(){this.submitButton=c.default.create(document.querySelector(".btn-submit"))},methods:{submitComment:function(){var t=this;this.isSubmitting||(this.commentAuthorName&&this.commentAuthorEmail&&this.commentContent?(this.isSubmitting=!0,this.submitButton.start(),a.default.postComment({post:this.post,author_name:this.commentAuthorName,author_email:this.commentAuthorEmail,content:this.commentContent}).then(function(e){t.isSubmitting=!1,t.submitButton.stop(),t.resetCommentFields();var s=e.data;"approved"===s.status?i.eventHub.emit("post_comment_succeed",s):t.isModeration=!0}).catch(function(t){console.log(t)})):window.alert("Comment fields are missing!"))},resetCommentFields:function(){this.commentAuthorName="",this.commentAuthorEmail="",this.commentContent=""}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comment-item",props:["comment"],filters:{dateFormat:function(t){if(t){var e=new Date(t);return"d/m/Y".replace("d",e.getDate()).replace("m",e.getMonth()+1).replace("Y",e.getFullYear())}}}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(35),a=n(o),i=s(37),r=s(19),c=s(5),l=n(c),u=s(149),d=n(u),m=s(148),v=n(m);e.default={props:["post","commentsNumber"],components:{CommentItem:d.default,CommentForm:v.default},filters:{formatCommentsNumber:function(t){return 1===Number(t)?"1 comment":t+" comments"}},data:function(){return{comments:[]}},created:function(){var t=this;this.loadComments(this.post),i.eventHub.on("post_comment_succeed",function(e){t.comments.push(e)})},watch:{post:function(t,e){this.loadComments(t)}},methods:{loadComments:function(t){var e=this,s={post:t,per_page:20,parent:0,order:"asc"},n=l.default.defaults.baseURL+"/comments";n=(0,r.buildRequestURL)(n,s),"caches"in window&&caches.match(n).then(function(t){t&&t.json().then(function(t){e.comments=t})}),a.default.getComments(s).then(function(t){e.comments=t.data}).catch(function(t){console.log(t)})}}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(51),a=n(o);e.default={components:{RedditList:a.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{currentYear:function(){return(new Date).getFullYear()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{ztitle:""},data:function(){return{isOpen:!1,transition:"menu-fade"}},methods:{toggle:function(){this.isOpen=!this.isOpen}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(5);e.default={data:function(){return{posts:[],subreddit:"VueJS",limit:1e3}},mounted:function(){var t=this;n.get("https://www.reddit.com/r/"+this.subreddit+"/.json?limit="+this.limit).then(function(e){t.posts=e.data.data.children})}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(12),a=n(o),i=s(9),r=n(i);e.default={components:{JaggedHr:a.default,SiteHeader:r.default},props:{ztitle:""},created:function(){document.title="About Me | Andrew Finney Weilbaecher"},data:function t(){var t={transitionName:"fade2"};return t}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(9),a=n(o),i=s(12),r=n(i),c=s(151),l=n(c),u=s(51),d=n(u);e.default={components:{JaggedHr:r.default,SiteHeader:a.default,ContactForm:l.default,RedditList:d.default},data:function(){return{}}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(9),a=n(o),i=s(12),r=n(i);e.default={components:{JaggedHr:r.default,SiteHeader:a.default},props:{ztitle:""},created:function(){document.title="My Work | Andrew Finney Weilbaecher"}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(9),a=n(o),i=s(12),r=n(i);e.default={components:{JaggedHr:r.default,SiteHeader:a.default},props:{ztitle:""},created:function(){document.title="My Resume | Andrew Finney Weilbaecher"}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(36),a=n(o),i=s(150),r=n(i),c=s(5),l=n(c),u=s(19),d=s(135),m=n(d);e.default={components:{Comments:r.default},computed:{posts:function(){return this.$store.getters.posts}},data:function(){return{post:null}},created:function(){this.loadItem()},watch:{$route:function(t,e){this.loadItem()}},methods:{loadItem:function(){var t=this;this.posts&&(this.post=m.default.find(this.posts,{slug:this.$route.params.slug}),this.post&&(document.title=this.post.title.rendered+" | Thien's notes"));var e=l.default.defaults.baseURL+"/posts";e=(0,u.buildRequestURL)(e,{slug:this.$route.params.slug}),"caches"in window&&caches.match(e).then(function(e){e&&e.json().then(function(e){t.post=e[0],document.title=t.post.title.rendered+" | Thien's notes"})}),a.default.getPost(this.$route.params.slug).then(function(e){t.post=e.data[0],document.title=t.post.title.rendered+" | Thien's notes"}).catch(function(t){console.log(t)})}}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(9),a=n(o),i=s(12),r=n(i);e.default={components:{JaggedHr:r.default,SiteHeader:a.default},props:{ztitle:""},created:function(){document.title="My Work | Andrew Finney Weilbaecher"}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,function(t,e,s){t.exports=s.p+"static/img/me.acf51fa.jpg"},function(t,e,s){t.exports=s.p+"static/img/work-img-1.8a72406.jpg"},function(t,e,s){t.exports=s.p+"static/img/work-img-2.3bb4408.jpg"},function(t,e,s){t.exports=s.p+"static/img/work-img-3.6055c5f.jpg"},function(t,e,s){t.exports=s.p+"static/img/work-img-4.8f82264.jpg"},function(t,e,s){t.exports=s.p+"static/img/work-img-5.2292f8d.jpg"},function(t,e,s){t.exports=s.p+"static/img/work-img-6.a6b5a33.jpg"},,function(t,e,s){s(132);var n=s(1)(s(74),s(172),null,null);t.exports=n.exports},function(t,e,s){s(125);var n=s(1)(s(75),s(163),null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(76),s(165),null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(77),s(159),null,null);t.exports=n.exports},function(t,e,s){s(124);var n=s(1)(s(78),s(161),"data-v-12c96985",null);t.exports=n.exports},function(t,e,s){s(128);var n=s(1)(s(79),s(167),null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(80),s(174),null,null);t.exports=n.exports},function(t,e,s){s(130);var n=s(1)(s(83),s(170),null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(84),s(173),null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(85),s(160),null,null);t.exports=n.exports},function(t,e,s){s(129);var n=s(1)(s(86),s(169),null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(87),s(168),null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(88),s(162),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.comment?s("li",{staticClass:"comments__item",attrs:{id:"comment-"+t.comment.id}},[s("article",{staticClass:"comments__item__body"},[s("span",{staticClass:"comments__item__date"},[t._v(t._s(t._f("dateFormat")(t.comment.date)))]),t._v(" "),s("span",{staticClass:"comments__item__author",domProps:{textContent:t._s(t.comment.author_name)}}),t._v(" "),s("div",{staticClass:"comments__item__content",domProps:{innerHTML:t._s(t.comment.content.rendered)}})]),t._v(" "),t.comment.children?s("ul",{staticClass:"comments__item__children"},t._l(t.comment.children,function(t){return s("comment-item",{attrs:{comment:t}})})):t._e()]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("SiteHeader",{attrs:{ztitle:"AFW Development"}}),t._v(" "),s("div",{staticClass:"container single"},[s("div",{staticClass:"posts"},[s("article",{staticClass:"post"},[s("h1",{staticClass:"post-title"},[t._v("Web Dev / IT")]),t._v(" "),s("div",{staticClass:"post-meta"},[s("span",[t._v("Thank you for your patience while I get this site up and running.")]),t._v(" "),s("JaggedHr"),t._v(" "),t._m(0)],1)])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._v("Visit "),s("a",{attrs:{href:"https://nolaandy.github.io"}},[t._v("https://nolaandy.github.io")]),t._v(" for more examples. This website uses the power of Service Workers to offer access to its content while offline.")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comments"},[s("h3",{staticClass:"comments__count comments__title"},[t._v(t._s(t._f("formatCommentsNumber")(t.commentsNumber)))]),t._v(" "),s("ul",{staticClass:"comments__list"},t._l(t.comments,function(t){return s("comment-item",{attrs:{comment:t}})})),t._v(" "),s("comment-form",{attrs:{post:t.post}})],1)},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("SiteHeader",{attrs:{ztitle:"Portfolio Items"}}),t._v(" "),s("div",{staticClass:"container single"},[s("div",{staticClass:"posts"},[s("article",{staticClass:"post"},[s("h1",{staticClass:"post-title"},[t._v("My Work")]),t._v(" "),t._m(0),t._v(" "),s("JaggedHr"),t._v(" "),t._m(1)],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-meta"},[s("span",[t._v("this is just a proof of concept for now. These images could be available offline.")]),t._v(" "),s("span",[t._v("Visit "),s("a",{attrs:{href:"https://nolaandy.github.io"}},[t._v("https://nolaandy.github.io")]),t._v(" for more examples.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-content center"},[n("img",{attrs:{src:s(139)}}),t._v(" "),n("img",{attrs:{src:s(140)}}),t._v(" "),n("img",{attrs:{src:s(144)}}),t._v(" "),n("img",{attrs:{src:s(143)}}),t._v(" "),n("img",{attrs:{src:s(141)}}),t._v(" "),n("img",{attrs:{src:s(142)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-wrapper"},[s("div",{staticClass:"triangles-above"}),t._v(" "),s("nav",{staticClass:"bottomNav"},[s("ul",[s("router-link",{attrs:{to:"/about","active-class":"active"}},[s("li",[t._v("About")])]),t._v(" "),s("router-link",{attrs:{to:"/resume","active-class":"active"}},[s("li",[t._v("Resume")])]),t._v(" "),s("router-link",{attrs:{to:"/work","active-class":"active"}},[s("li",[t._v("Work")])]),t._v(" "),s("router-link",{attrs:{to:"/contact","active-class":"active"}},[s("li",[t._v("Contact")])])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"center"},[s("svg",{staticClass:"JaggedHr-svg",attrs:{version:"1.1",id:"Layer_1","xmlns:x":"&ns_extend;","xmlns:i":"&ns_ai;","xmlns:graph":"&ns_graphs;",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"303.792px",height:"25.484px",viewBox:"0 0 303.792 25.484","enable-background":"new 0 0 303.792 25.484","xml:space":"preserve"}},[s("switch",[s("g",{attrs:{"i:extraneous":"self"}},[s("polyline",{attrs:{fill:"none",stroke:"#000000","stroke-width":"2","stroke-miterlimit":"10",points:"1.873,2.742 14.915,22.742 27.958,2.742 \n        40.999,22.742 54.042,2.742 67.083,22.742 80.126,2.742 93.167,22.742 106.205,2.742 119.246,22.742 132.29,2.742 145.331,22.742 \n        158.372,2.742 171.414,22.742 184.458,2.742 197.502,22.742 210.547,2.742 223.591,22.742 236.632,2.742 249.674,22.742 \n        262.724,2.742 275.768,22.742 288.821,2.742 301.873,22.742     "}})])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"form comments__form",on:{submit:function(e){e.preventDefault(),t.submitComment(e)}}},[t.isModeration?s("p",{staticClass:"comments__moderation"},[s("span",{staticClass:"emoji"},[t._v("👍")]),t._v(" Thank you for posting comment. Your comment is awaiting moderation!")]):t._e(),t._v(" "),s("h3",{staticClass:"comments__title"},[t._v("Leave a comment")]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.commentAuthorName,expression:"commentAuthorName"}],attrs:{type:"text",id:"name",required:"",placeholder:"Your name"},domProps:{value:t.commentAuthorName},on:{input:function(e){e.target.composing||(t.commentAuthorName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.commentAuthorEmail,expression:"commentAuthorEmail"}],attrs:{type:"email",id:"email",required:"",placeholder:"Your email"},domProps:{value:t.commentAuthorEmail},on:{input:function(e){e.target.composing||(t.commentAuthorEmail=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],attrs:{required:"",placeholder:"Your comment",id:"comment-content"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"ladda-button btn-submit btn",attrs:{"data-style":"expand-right"}},[s("span",{staticClass:"ladda-label"},[t._v("Submit")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reddit-list"},[s("h3",[t._v("Posts from /r/"+t._s(t.subreddit))]),t._v(" "),s("ul",t._l(t.posts,function(e){return s("li",[s("a",{attrs:{href:e.data.url}},[t._v("\n              "+t._s(e.data.title)+"\n          ")])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("This is the Contact Form Component")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container single"},[s("div",{staticClass:"posts"},[0==t.post?s("div",{staticClass:"not-found"},[s("p",[t._v("Post not found!")])]):t._e(),t._v(" "),t.post?s("article",{staticClass:"post"},[s("h1",{staticClass:"post-title"},[s("router-link",{attrs:{to:{name:"single",params:{slug:t.post.slug}}}},[s("span",{domProps:{innerHTML:t._s(t.post.title.rendered)}})])],1),t._v(" "),s("div",{staticClass:"post-meta"},[s("span",{staticClass:"time",domProps:{textContent:t._s(t.post.date)}})]),t._v(" "),s("div",{staticClass:"post-content",domProps:{innerHTML:t._s(t.post.content.rendered)}})]):t._e(),t._v(" "),t.post?s("comments",{attrs:{post:t.post.id,"comments-number":t.post.comments_number}}):t._e()],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("SiteHeader",{attrs:{ztitle:"My Resume..."}}),t._v(" "),s("div",{staticClass:"container single resume-container"},[s("div",{staticClass:"posts"},[s("article",{staticClass:"post"},[s("h1",{staticClass:"post-title"},[t._v("Resume")]),t._v(" "),s("JaggedHr"),t._v(" "),t._m(0)],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-content resume-post-content"},[s("div",{staticClass:"resume-left"},[s("div",{staticClass:"resume-section-title"},[t._v("Education")]),t._v(" "),s("div",{staticClass:"employment-block"},[s("div",{staticClass:"employment-year"},[t._v("2001-2005")]),t._v(" "),s("div",{staticClass:"employment-position"},[s("div",{staticClass:"employment-location"},[t._v("Louisiana State University, Baton Rouge, LA")]),t._v(" "),s("div",{staticClass:"employment-duties"},[t._v("Graduated in May 2005.  Major: Liberal Arts\r\n              ")])])]),t._v(" "),s("div",{staticClass:"employment-block"},[s("div",{staticClass:"employment-year"},[t._v("1997-2001")]),t._v(" "),s("div",{staticClass:"employment-position"},[s("div",{staticClass:"employment-location"},[t._v("Jesuit High School, New Orleans, LA")]),t._v(" "),s("div",{staticClass:"employment-duties"},[t._v("Graduated in May 2001. It's where I took my 1st HTML class!\r\n              ")])])]),t._v(" "),s("div",{staticClass:"resume-section-title"},[t._v("Employment")]),t._v(" "),s("div",{staticClass:"employment-block"},[s("div",{staticClass:"employment-year"},[t._v("2014-2017")]),t._v(" "),s("div",{staticClass:"employment-position"},[s("div",{staticClass:"employment-location"},[t._v("Mopho Group, New Orleans, LA")]),t._v(" "),s("div",{staticClass:"employment-duties"},[t._v("Web Developer.  Designed 3 websites with Wordpress back-ends. Websites are responsively designed and tested on all devices. Content is easily updatable by the client.\r\n              ")])])]),t._v(" "),s("div",{staticClass:"employment-block"},[s("div",{staticClass:"employment-year"},[t._v("2013-2016")]),t._v(" "),s("div",{staticClass:"employment-position"},[s("div",{staticClass:"employment-location"},[t._v("Schollnick Advertising, Metairie, LA")]),t._v(" "),s("div",{staticClass:"employment-duties"},[t._v("Lead developer in web and graphic design. Programmed web pages using html, css, and javascript languages.  Designed banners, logos, and web page layouts using the Adobe Creative Suite. Responsible for client outreach as well as administering a network of dozens of websites.\r\n              ")])])]),t._v(" "),s("div",{staticClass:"employment-block"},[s("div",{staticClass:"employment-year"},[t._v("2011-2017")]),t._v(" "),s("div",{staticClass:"employment-position"},[s("div",{staticClass:"employment-location"},[t._v("Freelance Design, Greater New Orleans Area")]),t._v(" "),s("div",{staticClass:"employment-duties"},[t._v("Design modern responsive websites for all devices. Create branding, logos, and print materials for businesses. Consult clients on modern web development techniques.\r\n              ")])])])]),t._v(" "),s("div",{staticClass:"resume-right"},[s("div",{staticClass:"resume-section-title"},[t._v("Personal")]),t._v(" "),s("div",{staticClass:"employment-block"},[s("div",{staticClass:"personal-section"},[s("div",{staticClass:"personal-title"},[t._v("Special Skills")]),t._v(" "),s("div",{staticClass:"employment-duties"},[t._v("Skilled with PC and MAC computers including installing new hardware. Over 10 years of experience using the Adobe Creative Suite. Experienced in HTML5, CSS, jQuery, Javascript, Wordpress, SEO, Analytics, Social/AdWords Advertising, Github, Bootstrap, and more.\r\n              ")])])]),t._v(" "),s("div",{staticClass:"employment-block"},[s("div",{staticClass:"personal-section"},[s("div",{staticClass:"personal-title"},[t._v("Activites")]),t._v(" "),s("div",{staticClass:"employment-duties"},[t._v("Organize league signups for a local sports organization. Maintain a vegetable garden in my backyard. Create original music and record live music. Read books on Web Development and keep up with the trends.\r\n              ")])])]),t._v(" "),s("div",{staticClass:"employment-block"},[s("div",{staticClass:"personal-section"},[s("div",{staticClass:"personal-title"},[t._v("Interests")]),t._v(" "),s("div",{staticClass:"employment-duties"},[t._v("Computers, graphic design, gardening, music production, kickball.\r\n              ")])])]),t._v(" "),s("div",{staticClass:"resume-section-title"},[t._v("References")]),t._v(" "),s("div",{staticClass:"employment-block"},[s("div",{staticClass:"personal-section"},[s("div",{staticClass:"personal-title"},[t._v("Available on Request")])])])])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("SiteHeader",{attrs:{ztitle:"About Me..."}}),t._v(" "),s("div",{staticClass:"container single"},[s("div",{staticClass:"posts"},[s("article",{staticClass:"post"},[t._m(0),t._v(" "),s("h1",{staticClass:"post-title"},[t._v("About Me")]),t._v(" "),t._m(1),t._v(" "),s("JaggedHr"),t._v(" "),t._m(2)],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-picture"},[n("img",{attrs:{src:s(138)}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-meta"},[s("span",[t._v("Andrew Finney Weilbaecher")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-content"},[s("p",[t._v("  I’ve been developing websites for over a decade. What I’ve learned is that coding is like the weather, it will continue to change on and off for a long, long time...")]),t._v(" "),s("p",[t._v("Let’s share a few emails or a pint of coffee and discuss your next project.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"site-header"},[s("div",{staticClass:"header-left"},[s("router-link",{staticClass:"logo",attrs:{to:"/",exact:""}},[s("div",{staticClass:"logo-holder"})])],1),t._v(" "),s("div",{staticClass:"header-center"},[s("div",{staticClass:"page-title-top"},[t._v(t._s(t.ztitle))])]),t._v(" "),s("div",{staticClass:"header-right"},[s("nav",[s("button",{staticClass:"nav-toggle",class:{opened:t.isOpen},on:{click:function(e){t.toggle()}}},[s("span",{staticClass:"bar-top"}),t._v(" "),s("span",{staticClass:"bar-mid"}),t._v(" "),s("span",{staticClass:"bar-bot"})])])])]),t._v(" "),s("transition",{attrs:{name:t.transition,mode:"out-in"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"mobile-menu"},[s("router-link",{attrs:{to:"/about","active-class":"active"}},[s("li",[t._v("About")])]),t._v(" "),s("router-link",{attrs:{to:"/resume","active-class":"active"}},[s("li",[t._v("Resume")])]),t._v(" "),s("router-link",{attrs:{to:"/work","active-class":"active"}},[s("li",[t._v("Work")])]),t._v(" "),s("router-link",{attrs:{to:"/contact","active-class":"active"}},[s("li",[t._v("Contact")])])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("site-header"),t._v(" "),s("div",{staticClass:"main-content"},[s("transition",{attrs:{name:t.transition,mode:"out-in"}},[s("router-view")],1)],1),t._v(" "),s("site-footer"),t._v(" "),s("BottomNav")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("SiteHeader",{attrs:{ztitle:"Contact Me Today!"}}),t._v(" "),s("div",{staticClass:"container single"},[s("div",{staticClass:"posts"},[s("article",{staticClass:"post"},[s("h1",{staticClass:"post-title"},[t._v("Contact Me")]),t._v(" "),t._m(0),t._v(" "),s("JaggedHr"),t._v(" "),s("div",{staticClass:"post-content center"},[s("a",{attrs:{href:"mailto:andyw504@gmail.com",rel:"noopener noreferrer"}},[t._v("andyw504@gmail.com")]),t._v(" "),s("ContactForm"),t._v(" "),s("RedditList")],1)],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-meta"},[s("span",[t._v("tell me what's on your mind")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},staticRenderFns:[]}}]);
//# sourceMappingURL=app.3fa33988893b5147c8d2.js.map