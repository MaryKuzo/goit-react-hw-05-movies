"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{4672:function(n,t,e){e.d(t,{Z:function(){return m}});e(2791);var r,a,c,u,o=e(7689),i=e(168),s=e(5706),p=e(1087),f=s.Z.div(r||(r=(0,i.Z)(["\n  margin-top: 20px;\n"]))),l=s.Z.h2(a||(a=(0,i.Z)(["\n  font-size: 28px;\n  margin-bottom: 20px;\n  padding-left: 40px;\n"]))),h=s.Z.li(c||(c=(0,i.Z)(["\n  margin-bottom: 10px;\n"]))),d=(0,s.Z)(p.rU)(u||(u=(0,i.Z)(["\n  text-decoration: none;\n  color: #333;\n\n  &:hover {\n    color: #D43369;\n  }\n"]))),v=e(184),m=function(n){var t=n.movies,e=n.titlePage,r=void 0===e?"":e,a=(0,o.TH)();return(0,v.jsxs)(f,{children:[r&&(0,v.jsx)(l,{children:r}),(0,v.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.title,r=n.name;return(0,v.jsx)(h,{children:(0,v.jsx)(d,{to:"/movies/".concat(t),state:{from:a},children:e||r})},t)}))})]})}},5415:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),c=e(1970),u=e(4672),o=e(184);t.default=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],i=t[1];if((0,a.useEffect)((function(){(0,c.rj)().then((function(n){i(n.results)})).catch((function(n){return console.log(n)}))}),[]),e)return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.Z,{movies:e,titlePage:"Trending Movies"})})}},1970:function(n,t,e){e.d(t,{GC:function(){return h},M1:function(){return v},YJ:function(){return f},jP:function(){return g},rj:function(){return s}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),o="d79036dd91636485f959ac267909ee3a",i="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"trending/movie/day?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.2a961b9f.chunk.js.map