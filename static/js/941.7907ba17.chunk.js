"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[941],{7941:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,c,i=r(5861),o=r(9439),s=r(7757),u=r.n(s),p=r(2791),d=r(7689),l=r(1011),f=r(2134),h=r(168),x=r(6444),v=r(1087),g=(0,x.ZP)(v.rU)(t||(t=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),m=r(184),w=function(n){var e=n.to,r=n.children;return console.log(e),console.log(r),(0,m.jsxs)(g,{to:e,children:[(0,m.jsx)(f.kyg,{})," ",r]})},b=r(407),k=(0,x.ZP)("div")(b.$_,b.GQ,b.bK,b.Dh),j=(0,x.ZP)(v.OL)(a||(a=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  font-size: 20px;\n  gap: 4px;\n  padding: 5px 10px;\n  margin: 15px 25px;\n  color: black;\n  text-decoration: dashed;\n  font-weight: 500;\n  text-transform: uppercase;\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: 5px 5px 5px black;\n\n  &:hover {\n    color: ",";\n  }\n\n  &.active {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent})),Z=x.ZP.div(c||(c=(0,h.Z)(["\n  padding: 60px;\n"]))),y=function(){var n,e=(0,p.useState)([]),r=(0,o.Z)(e,2),t=r[0],a=r[1],c=(0,d.UO)(),s=null!==(n=(0,d.TH)().state)&&void 0!==n?n:"/";(0,p.useEffect)((function(){try{var n=function(){var n=(0,i.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.TP(c);case 2:e=n.sent,a(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e.message)}}),[c]);var f=t.poster_path,h=t.title,x=t.vote_average,v=t.overview,g=t.genres;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(w,{to:s,children:"Back to movies"}),(0,m.jsxs)(k,{display:"flex",bg:"#808080",children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(f),alt:h}),(0,m.jsxs)(Z,{children:[(0,m.jsx)("h1",{children:h}),(0,m.jsxs)("b",{children:["Score: ",x]}),(0,m.jsx)("h2",{children:"Overiew"}),(0,m.jsx)("p",{children:v}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("ul",{children:g&&g.map((function(n){var e=n.id,r=n.name;return(0,m.jsx)("li",{children:r},e)}))})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(j,{to:"cast",children:"Cast"}),(0,m.jsx)(j,{to:"reviews",children:"Reviews"})]}),(0,m.jsx)(p.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading page..."}),children:(0,m.jsx)(d.j3,{})})]})}},1011:function(n,e,r){r.d(e,{Df:function(){return s},TP:function(){return u},oW:function(){return l},tx:function(){return d},zv:function(){return p}});var t=r(5861),a=r(7757),c=r.n(a),i=r(2388),o="7907e1cc37fd6f724820da1650cbe62b";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(o,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,n.next=3,i.Z.get("movie/".concat(r,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,n.next=3,i.Z.get("movie/".concat(r,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,n.next=3,i.Z.get("movie/".concat(r,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=941.7907ba17.chunk.js.map