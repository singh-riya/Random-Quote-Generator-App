(this["webpackJsonpgenerate-random-qoute"]=this["webpackJsonpgenerate-random-qoute"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(3),o=n.n(s),r=(n(13),n(4)),d=n(5),u=n(7),h=n(6),l=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={quotes:[{quote:"Life isn\u2019t about getting and having, it\u2019s about giving and being.",author:"Kevin Kruse"}],index:0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(t){e.setState({quotes:t.quotes},e.getRandomIndex)}))}},{key:"getRandomIndex",value:function(){var e=this.state.quotes;if(e.length>0){var t=Math.floor(Math.random()*e.length);this.setState({index:t})}}},{key:"render",value:function(){var e=this.state,t=e.quotes[e.index],n="https://twitter.com/intent/tweet?text=".concat(t.quote," - ").concat(t.author);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsxs)("div",{id:"content",className:"d-flex justify-content-center vh-100 align-items-center",children:[Object(c.jsx)("p",{className:"display-4 d-flex align-content-center flex-wrap",id:"heading",children:"Random Quote Generator App \ud83d\ude80"}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"box p-6",id:"quote-box",children:Object(c.jsxs)("blockquote",{children:[t&&Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:t.quote}),Object(c.jsxs)("cite",{children:[" -- ",t.author]})]}),Object(c.jsxs)("div",{className:"d-flex justify-content-between",id:"btn-container",children:[Object(c.jsx)("button",{id:"tweet-quote",children:Object(c.jsxs)("a",{href:n,target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("i",{class:"fa fa-twitter"}),"tweet"]})}),Object(c.jsxs)("button",{id:"btn-new-qoute",onClick:this.getRandomIndex.bind(this),children:[Object(c.jsx)("i",{class:"fa fa-quote-left"}),"New Quote"]})]})]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"https://github.com/singh-riya",id:"link",children:"Riya Singh"}),"\xa9 2021"]})]})})})}}]),n}(i.Component),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};n(14);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.ebf9670b.chunk.js.map