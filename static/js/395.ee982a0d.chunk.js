"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[395],{368:function(t,e,n){var r=n(689),a=n(87),u=n(184);e.Z=function(t){var e=t.movies,n=t.titlePage,c=void 0===n?"":n,i=(0,r.TH)();return(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)("h1",{children:c}),(0,u.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title,r=t.name;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:i},children:n||r})},e)}))})]})}},398:function(t,e,n){n.d(e,{GC:function(){return h},YJ:function(){return p},rj:function(){return s}});var r=n(861),a=n(687),u=n.n(a),c=n(243),i="d79036dd91636485f959ac267909ee3a",o="https://api.themoviedb.org/3/";function s(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"trending/movie/day?api_key=").concat(i,"&language=en-US"),t.next=3,c.Z.get(e);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(o,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"),t.next=3,c.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(e,"&language=en-US"),t.next=3,c.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},395:function(t,e,n){n.r(e);var r=n(439),a=n(87),u=n(791),c=n(398),i=n(368),o=n(184);e.default=function(){var t,e=(0,a.lr)(),n=(0,r.Z)(e,2),s=n[0],l=n[1],p=null!==(t=s.get("query"))&&void 0!==t?t:"",f=(0,u.useState)(null),h=(0,r.Z)(f,2),d=h[0],v=h[1];return(0,u.useEffect)((function(){""!==p?(0,c.GC)(p).then((function(t){v(t.data.results)})).catch((function(t){return console.log(t)})):v(null)}),[p]),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"text",value:p,onChange:function(t){var e=t.target.value;""===e?s.delete("query"):s.set("query",e),l(s)}}),d&&(0,o.jsx)(i.Z,{movies:d})]})}}}]);
//# sourceMappingURL=395.ee982a0d.chunk.js.map