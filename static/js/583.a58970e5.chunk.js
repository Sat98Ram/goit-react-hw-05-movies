"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[583],{28:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(87),a={movieLink:"MovieList_movieLink__kzavH",movieName:"MovieList_movieName__sBSsG",poster:"MovieList_poster__UbPpc",movieListItem:"MovieList_movieListItem__6DqRG"},s=n(184),c=function(e){var t=e.movie,n=e.location;return(0,s.jsx)("li",{className:a.movieListItem,children:(0,s.jsxs)(r.rU,{to:"/movies/".concat(t.id),state:n,className:a.movieLink,children:[(0,s.jsx)("div",{className:a.poster,children:t.poster_path&&(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:"poster",width:"72",className:a.thumbnailPoster})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:a.movieName,children:[" ",t.title]}),(0,s.jsx)("p",{children:t.overview})]})]})})},i=function(e){var t=e.movies,n=e.location;return(0,s.jsx)("ul",{className:a.movieList,children:t.map((function(e){return(0,s.jsx)(c,{movie:e,location:n},e.id)}))})}},111:function(e,t,n){n.d(t,{$:function(){return i}});var r=n(700),a="Section_section__Z2PLw",s="Section_sectionTitle__in2ym",c=n(184),i=function(e){var t=e.title,n=e.children;return(0,c.jsx)("section",{className:a,children:(0,c.jsxs)(r.W,{children:[t&&(0,c.jsx)("h2",{className:s,children:t}),n]})})}},583:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),o=n(28),u=n(258),l="Search_searchForm__0FeD+",v="Search_btnSearch__phQip",f="Search_searchInput__Qk-44",p=n(184),m=function(e){var t=e.onSubmit,n=(0,i.useState)(""),r=(0,a.Z)(n,2),s=r[0],c=r[1];return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(s),t(s)},className:l,children:[(0,p.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:s,onChange:function(e){var t=e.target.value;c(t)},className:f}),(0,p.jsx)("button",{className:v,children:"Search"})]})},h=n(689),d=n(87),_="Movies_btnReturn__AhRpA",x=n(111),g=function(e){var t=(0,h.TH)(),n=(0,i.useState)([]),s=(0,a.Z)(n,2),l=s[0],v=s[1],f=(0,d.lr)(),g=(0,a.Z)(f,2),b=g[0],w=g[1],j=b.get("query");(0,i.useEffect)((function(){if(j){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.qF)(j);case 3:t=e.sent,console.log(t),v(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[j]);return(0,p.jsxs)(x.$,{children:[(0,p.jsx)(m,{onSubmit:function(e){w({query:e})}}),(0,p.jsx)(d.rU,{to:"/",className:_,children:"Go home"}),(0,p.jsx)(o.e,{movies:l,location:t})]})}},258:function(e,t,n){n.d(t,{HI:function(){return u},Hg:function(){return i},IQ:function(){return l},Jh:function(){return v},qF:function(){return o}});var r=n(861),a=n(757),s=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"5c0bf9db5346d794ef678ef6835ac9bf"};var i=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?query=".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?language=en-US'"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?language=en-US"));case 2:return n=e.sent,r=n.data,console.log(r),e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=583.a58970e5.chunk.js.map