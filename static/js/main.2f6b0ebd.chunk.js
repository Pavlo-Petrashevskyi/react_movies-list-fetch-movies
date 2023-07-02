(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(7),s=i.n(c),a=(i(13),i(2)),n=i(1),r=(i(14),i(15),i(16),i(0)),d=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},l=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(d,{movie:e},e.imdbId)}))})},o=i(8),j=(i(18),i(6)),m=i.n(j);var b=function(e){var t=e.setMoviesList,i=e.moviesList,c=Object(n.useState)(""),s=Object(a.a)(c,2),l=s[0],j=s[1],b=Object(n.useState)(),v=Object(a.a)(b,2),u=v[0],h=v[1],O=Object(n.useState)(!1),x=Object(a.a)(O,2),f=x[0],p=x[1],N=Object(n.useState)(!1),g=Object(a.a)(N,2),y=g[0],w=g[1],I=function(e){var t="N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster;return{title:e.Title,description:e.Plot,imgUrl:t,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID}};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),w(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=5d2ddef","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(l).then((function(e){return"Title"in e?h(e):p(!0)})).finally((function(){return w(!1)}))},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",value:l,placeholder:"Enter a title to search",className:m()("input",{"is-danger":f}),onChange:function(e){p(!1),j(e.target.value)}})}),f&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button","is-light",{"is-loading":y}),disabled:""===l,children:"Find a movie"})}),void 0!==u&&"Title"in u&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return e=I(u),i.find((function(t){return t.imdbId===e.imdbId}))||t([].concat(Object(o.a)(i),[e])),h(void 0),void j("");var e},children:"Add to the list"})})]})]}),void 0!==u&&"Title"in u&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(d,{movie:I(u)})]})]})},v=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(l,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{setMoviesList:c,moviesList:i})})]})};s.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2f6b0ebd.chunk.js.map