"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(689),u=r(87),l=r(425),p="MovieDetails_container__Ys+c9",v="MovieDetails_goBackButton__gD2UR",f="MovieDetails_movieContainer__ilr3m",d="MovieDetails_poster__yO7gD",h="MovieDetails_movieText__6iJl1",m="MovieDetails_movieHeader__lQO3q",x="MovieDetails_text__RHcc4",_="MovieDetails_moviesButtonList__Ah-Ui",w="MovieDetails_castButton__WD8gO",g="MovieDetails_reviewsButton__e0Cwn",j=r(184),b=function(){var e,t,r=(0,o.UO)().movieId,s=(0,c.useState)(null),b=(0,a.Z)(s,2),k=b[0],N=b[1],y=(0,o.TH)(),D=(0,c.useRef)(null!==(e=null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");if((0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Y5)(r);case 3:t=e.sent,N(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Sorry, something goes wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),k){var Z=k.poster_path,M=k.title,O=k.vote_average,B=k.genres,U=k.overview;return(0,j.jsxs)("div",{className:p,children:[(0,j.jsx)(u.OL,{to:D.current,children:(0,j.jsx)("button",{type:"button",className:v,children:"Go back"})}),(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("img",{src:Z?"https://image.tmdb.org/t/p/w500".concat(Z):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:M,width:"300px",height:"100%",className:d}),(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("h1",{className:m,children:M||"No Info"}),(0,j.jsxs)("p",{className:x,children:[(0,j.jsx)("b",{children:"Average rating:"})," ",O?Math.round(10*O):0,"%"]}),(0,j.jsxs)("p",{className:x,children:[(0,j.jsx)("b",{children:"Overview:"})," ",U||"No Info"]}),(0,j.jsxs)("p",{className:x,children:[(0,j.jsx)("b",{children:"Genres:"})," ",B.length>0?B.map((function(e){return e.name})).join(", "):"No Info"]})]})]}),(0,j.jsx)("div",{children:(0,j.jsxs)("ul",{className:_,children:[(0,j.jsx)("li",{children:(0,j.jsx)(u.OL,{to:"cast",state:{from:D},children:(0,j.jsx)("button",{type:"button",className:w,children:"Cast"})})}),(0,j.jsx)("li",{children:(0,j.jsx)(u.OL,{to:"reviews",state:{from:D},children:(0,j.jsx)("button",{type:"button",className:g,children:"Rewievs"})})})]})}),(0,j.jsx)(o.j3,{})]})}}},425:function(e,t,r){r.d(t,{Bt:function(){return v},SU:function(){return o},Y5:function(){return l},qF:function(){return u},y:function(){return p}});var n=r(861),a=r(757),s=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={params:{api_key:"0f708fe56e4c6c703a9a5ec495c3a94d"}},o=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/popular",c);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(t),c);case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t),c);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?"),c);case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?"),c);case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.3261aff9.chunk.js.map