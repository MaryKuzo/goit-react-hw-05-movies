"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{4672:function(n,t,e){e.d(t,{Z:function(){return Z}});e(2791);var r,a,c,u,i,o=e(7689),s=e(168),p=e(5706),f=e(1087),l=e(6856),d=(0,p.Z)(l.owp)(r||(r=(0,s.Z)(["\n  fill: #D43369;\n  margin-right: 5px;\n  vertical-align: middle;\n"]))),h=p.Z.div(a||(a=(0,s.Z)(["\n  margin-top: 20px;\n  padding-left: 40px;\n"]))),v=p.Z.h2(c||(c=(0,s.Z)(["\n  font-size: 28px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n"]))),g=p.Z.li(u||(u=(0,s.Z)(["\n  margin-bottom: 10px;\n"]))),m=(0,p.Z)(f.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n  color: #333;\n\n  &:hover {\n    color: #D43369;\n  }\n"]))),x=e(184),Z=function(n){var t=n.movies,e=n.titlePage,r=void 0===e?"":e,a=(0,o.TH)();return(0,x.jsxs)(h,{children:[r&&(0,x.jsxs)(v,{children:[(0,x.jsx)(d,{}),r]}),(0,x.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.title,r=n.name;return(0,x.jsx)(g,{children:(0,x.jsx)(m,{to:"/movies/".concat(t),state:{from:a},children:e||r})},t)}))})]})}},5415:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),c=e(1970),u=e(4672),i=e(184);t.default=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],o=t[1];if((0,a.useEffect)((function(){(0,c.rj)().then((function(n){o(n.results)})).catch((function(n){return console.log(n)}))}),[]),e)return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,{movies:e,titlePage:"Trending Movies"})})}},1970:function(n,t,e){e.d(t,{GC:function(){return d},M1:function(){return v},YJ:function(){return f},jP:function(){return m},rj:function(){return s}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),i="d79036dd91636485f959ac267909ee3a",o="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"trending/movie/day?api_key=").concat(i,"&language=en-US"),n.next=3,u.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.1366a736.chunk.js.map