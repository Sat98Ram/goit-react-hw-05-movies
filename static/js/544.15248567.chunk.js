"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{28:function(e,t,n){n.d(t,{e:function(){return c}});var r=n(87),a={movieLink:"MovieList_movieLink__kzavH",movieName:"MovieList_movieName__sBSsG",poster:"MovieList_poster__UbPpc",movieListItem:"MovieList_movieListItem__6DqRG"},i=n(184),s=function(e){var t=e.movie,n=e.location;return(0,i.jsx)("li",{className:a.movieListItem,children:(0,i.jsxs)(r.rU,{to:"/movies/".concat(t.id),state:n,className:a.movieLink,children:[(0,i.jsx)("div",{className:a.poster,children:(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:"poster",width:"72",className:a.thumbnailPoster})}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{className:a.movieName,children:[" ",t.title]}),(0,i.jsx)("p",{children:t.overview})]})]})})},c=function(e){var t=e.movies,n=e.location;return(0,i.jsx)("ul",{className:a.movieList,children:t.map((function(e){return(0,i.jsx)(s,{movie:e,location:n},e.id)}))})}},111:function(e,t,n){n.d(t,{$:function(){return c}});var r=n(700),a="Section_section__Z2PLw",i="Section_sectionTitle__in2ym",s=n(184),c=function(e){var t=e.title,n=e.children;return(0,s.jsx)("section",{className:a,children:(0,s.jsxs)(r.W,{children:[t&&(0,s.jsx)("h2",{className:i,children:t}),n]})})}},544:function(e,t,n){n.r(t);var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(258),o=n(791),u=n(28),v=n(689),f=n(111),l=n(184);t.default=function(){var e=(0,v.TH)(),t=(0,o.useState)([]),n=(0,a.Z)(t,2),i=n[0],p=n[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Hg)();case 3:t=e.sent,console.log(t),p(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsx)(f.$,{title:"Trending today",children:(0,l.jsx)(u.e,{movies:i,location:e})})}},258:function(e,t,n){n.d(t,{HI:function(){return u},Hg:function(){return c},IQ:function(){return v},Jh:function(){return f},qF:function(){return o}});var r=n(861),a=n(757),i=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"5c0bf9db5346d794ef678ef6835ac9bf"};var c=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?query=".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?language=en-US'"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?language=en-US"));case 2:return n=e.sent,r=n.data,console.log(r),e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.15248567.chunk.js.map