(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},35:function(e,t,a){},36:function(e,t,a){},57:function(e,t){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),o=a.n(r),c=(a(35),a(62)),i=a(63),s=a(64),m=(a(36),a(11)),u=a(12),h=a(16),v=a(13),d=a(17),b=a(61),f={title:{fontFamily:"Quicksand"},maintitle:{fontFamily:"Quicksand",fontWeight:"bold"}},E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{className:"navbar-item",href:"/",style:f.maintitle},"Google Book Search"),l.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",href:"/"},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},l.a.createElement("div",{className:"navbar-start"},l.a.createElement(b.a,{to:"/",className:"navbar-item",style:f.title},"Search"),l.a.createElement(b.a,{to:"/saved",className:"navbar-item",style:f.title},"Saved")))))}}]),t}(n.Component),p={title:{textAlign:"center",fontSize:35},subtitle:{textAlign:"center",fontSize:20}},g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"hero is-medium is-primary is-bold"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title",style:p.title},"React Google Book Search"),l.a.createElement("h2",{className:"subtitle",style:p.subtitle},"A place to search and save books!"))))}}]),t}(l.a.Component),k=a(26),N=a(5),y=a(6),B=a(8),j=a(7),O=a(9);var S=function(e){return l.a.createElement("div",{className:"box"},l.a.createElement("article",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-64x64"},l.a.createElement("img",{src:e.image,alt:"book"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("a",{href:e.link}," Book Title:",e.title))," ",l.a.createElement("br",null),l.a.createElement("strong",null,"Authors: ",e.author),l.a.createElement("br",null),e.description)),l.a.createElement("nav",{className:"level is-mobile"},l.a.createElement("div",{className:"level-left"})))))},w=a(10),x=a.n(w),I={search:function(e){return x.a.get("https://www.googleapis.com/books/v1/volumes?q=search+"+e)},getBook:function(e){return x.a.get("/api/books/"+e)},deleteBook:function(e){return x.a.delete("/api/books/"+e)},saveBook:function(e){return x.a.post("/api/books",e)},getSavedBooks:function(){return x.a.get("/api/books")}};var A=function(e){return l.a.createElement("button",Object.assign({type:"button",className:"button is-warning"},e),"Save")},C={short:{textAlign:"center",width:600,marginLeft:100},title:{textAlign:"center",marginTop:55,marginLeft:60,fontFamily:"Quicksand"},searchButton:{marginLeft:25,marginRight:25}},F=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(B.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(l)))).state={search:"",books:[],book:""},a.searchGoogle=function(e){I.search(e).then(function(e){console.log(e.data.items),a.setState({books:e.data.items})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(k.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchGoogle(a.state.search)},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"favoriteBook",value:function(e){var t={title:e.title,authors:e.authors,description:e.description,image:e.imageLinks.thumbnail,link:e.previewLink};I.saveBook(t).then(console.log(t)).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("p",{className:"subtitle is-5",style:C.title},"Book Search")))),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("input",{className:"input",type:"text",placeholder:"Search for a Book",style:C.short,value:this.state.search,onChange:this.handleInputChange,name:"search",id:"search"})),l.a.createElement("span",null,l.a.createElement("button",{className:"button is-info",style:C.searchButton,onClick:this.handleFormSubmit},"Search"))),l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},"Results"),this.state.books.map(function(t,a){return l.a.createElement("div",{key:a},l.a.createElement(A,{onClick:function(){return e.favoriteBook(t.volumeInfo)}}),l.a.createElement(S,{book:t.volumeInfo,id:t.id,image:t.volumeInfo.imageLinks.thumbnail?t.volumeInfo.imageLinks.thumbnail:"",title:t.volumeInfo.title,authors:t.volumeInfo.authors?t.volumeInfo.authors.toString():"",description:t.volumeInfo.description,link:t.volumeInfo.infoLink}))}))))}}]),t}(n.Component);function L(e){return l.a.createElement("button",{className:"button is-danger"},"Delete")}var D=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(B.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"box"},l.a.createElement("article",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-64x64"},l.a.createElement("img",{src:this.props.image,alt:"book"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement(L,{onClick:this.props.deleteById}),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("a",{href:this.props.link}," Book Title:",this.props.title))," ",l.a.createElement("br",null),l.a.createElement("strong",null,"Authors: ",this.props.author),l.a.createElement("br",null),this.props.description)),l.a.createElement("nav",{className:"level is-mobile"},l.a.createElement("div",{className:"level-left"}))))))}}]),t}(l.a.Component),G=(a(57),function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(B.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},a.getSavedBooks=function(){I.getSavedBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.deleteBookById=function(e){I.deleteBook(e).then(function(e){return a.getSavedBooks()})},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,this.state.books.map(function(t,a){return l.a.createElement("div",{key:a},l.a.createElement(D,{id:t.id,image:t.image,title:t.title,authors:t.authors.toString(),description:t.description,link:t.infoLink,DeleteButton:function(){return l.a.createElement("button",{onClick:function(){return e.deleteBookById(t.id)}},"Delete")}}))}))}}]),t}(l.a.Component));var Q=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(g,null),l.a.createElement(i.a,null,l.a.createElement(s.a,{exact:!0,path:"/Search",component:F}),l.a.createElement(s.a,{exact:!0,path:"/saved",component:G}),l.a.createElement(s.a,{component:F}))))};o.a.render(l.a.createElement(Q,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b07af786.chunk.js.map