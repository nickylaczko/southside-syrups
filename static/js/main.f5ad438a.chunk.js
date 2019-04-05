(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),c=(a(49),a(25)),s=a(26),i=a(30),u=a(27),m=a(31),d=a(129),h=a(134),p=a(130),y=a(128),b=a(131),E=a(21),f=a(22),v=a(136);function g(e){return r.a.createElement(v.a,{className:"singleCard",id:e.id,style:{width:"18rem"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,e.title),r.a.createElement(v.a.Subtitle,{className:"mb-2 text-muted"},e.subtitle),r.a.createElement(v.a.Text,null,e.text)))}var k=a(127);function S(e){return r.a.createElement(k.a,{className:"jumbo",fluid:!0},r.a.createElement(y.a,null,r.a.createElement("br",null),r.a.createElement("h1",{style:{textAlign:"center"}}," Southside Syrups "),r.a.createElement("p",{style:{textAlign:"center",padding:"20px 0 20px 0"}},r.a.createElement("br",null),"One of Savannah's most interesting syrup sellers on the market. With the most creative flavors and the least amount of excess sugar and preservates.")))}var w=a(135),O=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{className:"nav",expand:"lg"},r.a.createElement(w.a.Brand,{href:"#"},r.a.createElement(E.b,{to:"/"},"Southside Syrups"))))}}]),t}(n.Component),j=a(23),C=a(137),x=a(133),T=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e,a))).handleShow=n.handleShow.bind(Object(j.a)(Object(j.a)(n))),n.handleClose=n.handleClose.bind(Object(j.a)(Object(j.a)(n))),n.state={show:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{className:"yellow",onClick:this.handleShow},e.launchText),r.a.createElement(x.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,e.title)),r.a.createElement(x.a.Body,null,e.body),r.a.createElement(x.a.Footer,null,r.a.createElement(C.a,{variant:"secondary",onClick:this.handleClose},"Close"))))}}]),t}(n.Component);a(132),a(60);function B(e,t,a,n,r){return{id:e,name:t,price:a,oz:n,inStock:r}}a(60);var N=[B(1,"Simple Vanilla",9,6,!0),B(2,"Chocolate",9,6,!0),B(3,"Camp Fire",11,6,!0),B(4,"Strawberry Marshmellow",12,6,!0),B(5,"Basic Almond",9,6,!0),B(6,"Sweetened Almonds",10,6,!0)],A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={syrupList:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("./data/collection.json").then(function(e){return e.json()}).then(function(t){e.setState({syrupList:N.push(t)}),console.log(t)}).catch(function(e){console.log(e)})}},{key:"addToCart",value:function(){return r.a.createElement(d.a,{id:"popover-basic",title:"Popover right"},"And here's some ",r.a.createElement("strong",null,"amazing")," content. It's very engaging. right?")}},{key:"renderSyrups",value:function(){var e=this;return r.a.createElement(h.a,{variant:"info"},N.map(function(t){return r.a.createElement(h.a.Item,{className:"syrupLI",key:t.key,action:e.addToCart(),disabled:!t.inStock},r.a.createElement(p.a,{className:"stock",disabled:!0,variant:t.inStock?"success":"danger"},t.inStock?"In Stock":"Out of Stock"),r.a.createElement("span",null),t.name,": $",t.price,", Oz:",t.oz)}))}},{key:"render",value:function(){this.state.syrupList.map(function(e){return r.a.createElement(h.a,{variant:"info"},r.a.createElement(h.a.Item,{className:"syrupLI",key:e.key,action:!0},r.a.createElement(p.a,{variant:e.inStock?"success":"danger"},e.inStock?"In Stock":"Out of Stock"),e.name,": $",e.price,", Oz:",e.oz))});return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement(O,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/components/SyrupModal",component:this.SyrupModal}),r.a.createElement(f.a,{path:"/"}))),r.a.createElement(S,null),r.a.createElement(b.a,null,r.a.createElement(g,{title:"Got Questions?",subtitle:"Want to know more about our syrups or have any feedback?",text:"Email us at southside.syrups@gmail.com!",id:"cardThree"}),r.a.createElement(g,{title:"About Us",subtitle:"Based locally in savannah",text:"Our mission is to bring Savannah the best tasting\nsyrups that you could use for coffee or tea or even baking. We use organic sugars and flavorings to bring you\nthe best product ever!",body:"...",id:"cardOne"}),r.a.createElement(g,{title:"Buy our syrups",subtitle:"Thinking of buying one of our syrups? Just email us at southside.syrups@gmail.com!",text:r.a.createElement(T,{launchText:"View our syrups",title:"Current Syrup List",body:this.renderSyrups()}),id:"cardTwo"})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){},71:function(e,t,a){e.exports=a(126)}},[[71,1,2]]]);
//# sourceMappingURL=main.f5ad438a.chunk.js.map