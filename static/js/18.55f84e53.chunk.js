"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[18],{4672:function(n,t,e){e.d(t,{Z:function(){return m}});e(2791);var r,a,c,o,i,u=e(7689),s=e(168),p=e(5706),l=e(1087),f=e(6856),d=(0,p.Z)(f.owp)(r||(r=(0,s.Z)(["\n  fill: #D43369;\n  margin-right: 5px;\n  vertical-align: middle;\n"]))),x=p.Z.div(a||(a=(0,s.Z)(["\n  margin-top: 20px;\n"]))),h=p.Z.h2(c||(c=(0,s.Z)(["\n  font-size: 28px;\n  margin-bottom: 20px;\n  padding-left: 40px;\n  display: flex;\n  align-items: center;\n"]))),v=p.Z.li(o||(o=(0,s.Z)(["\n  margin-bottom: 10px;\n"]))),g=(0,p.Z)(l.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n  color: #333;\n\n  &:hover {\n    color: #D43369;\n  }\n"]))),Z=e(184),m=function(n){var t=n.movies,e=n.titlePage,r=void 0===e?"":e,a=(0,u.TH)();return(0,Z.jsxs)(x,{children:[r&&(0,Z.jsxs)(h,{children:[(0,Z.jsx)(d,{}),r]}),(0,Z.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.title,r=n.name;return(0,Z.jsx)(v,{children:(0,Z.jsx)(g,{to:"/movies/".concat(t),state:{from:a},children:e||r})},t)}))})]})}},2018:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,o,i,u=e(9439),s=e(2791),p=e(168),l=e(5706),f=e(9126),d=l.Z.div(r||(r=(0,p.Z)(["\n  padding: 20px;\n"]))),x=l.Z.input(a||(a=(0,p.Z)(["\n  width: 500px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  transition: border-color 0.3s;\n  padding-left: 30px;\n  border-radius: 20px;\n\n  &:focus {\n    border-color: #D43369;\n  }\n\n"]))),h=(0,l.Z)(f.pem)(c||(c=(0,p.Z)(["\n  position: absolute;\n  top: 20px;\n  transform: translateY(-50%);\n  left: 500px;\n  font-size: 20px;\n  color: #D43369;\n"]))),v=l.Z.div(o||(o=(0,p.Z)(["\n  position: relative;\n"]))),g=l.Z.div(i||(i=(0,p.Z)(["\n  margin-top: 20px;\n"]))),Z=e(1087),m=e(1970),y=e(4672),w=e(184),k=function(){var n,t=(0,Z.lr)(),e=(0,u.Z)(t,2),r=e[0],a=e[1],c=null!==(n=r.get("query"))&&void 0!==n?n:"",o=(0,s.useState)(null),i=(0,u.Z)(o,2),p=i[0],l=i[1];return(0,s.useEffect)((function(){""!==c?(0,m.GC)(c).then((function(n){l(n.data.results)})).catch((function(n){return console.log(n)})):l(null)}),[c]),(0,w.jsxs)(d,{children:[(0,w.jsxs)(v,{children:[(0,w.jsx)(x,{type:"text",value:c,onChange:function(n){var t=n.target.value;""===t?r.delete("query"):r.set("query",t),a(r)},placeholder:"Search movies..."}),(0,w.jsx)(h,{})]}),p&&(0,w.jsx)(g,{children:(0,w.jsx)(y.Z,{movies:p})})]})}},1970:function(n,t,e){e.d(t,{GC:function(){return d},M1:function(){return h},YJ:function(){return l},jP:function(){return g},rj:function(){return s}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),i="d79036dd91636485f959ac267909ee3a",u="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u,"trending/movie/day?api_key=").concat(i,"&language=en-US"),n.next=3,o.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=18.55f84e53.chunk.js.map