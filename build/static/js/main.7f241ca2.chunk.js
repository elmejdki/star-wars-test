(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(2),r=t.n(c),s=t(3),i=t(4),o=t(6),m=t(5),h=t(7),u=function(e){var a=e.id,t=e.name,n=e.mass,c=e.films,r=e.height,s=e.gender,i=e.planet,o=e.species,m=e.starships,h=e.vehicules,u=e.birth_year,d=e.handleClick;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"top-part"},l.a.createElement("div",{className:"text-info"},l.a.createElement("span",{className:"icon person-icon"}),l.a.createElement("span",null,t)),l.a.createElement("div",{className:"text-info"},l.a.createElement("span",{className:"weight-icon icon"}),l.a.createElement("span",null,n," Kg")),l.a.createElement("div",{className:"text-info"},l.a.createElement("span",{className:"ruler-icon icon"}),l.a.createElement("span",null,r)," M"),l.a.createElement("div",{className:"text-info"},l.a.createElement("span",{className:"baby-icon icon"}),l.a.createElement("span",null,u)),l.a.createElement("div",{className:"text-info"},l.a.createElement("span",{className:"gender-icon icon"}),l.a.createElement("span",null,s))),l.a.createElement("div",{className:"center-part"},l.a.createElement("img",{className:"profile-img",src:"https://robohash.org/".concat(a,"?200x200&set=set2"),alt:t})),l.a.createElement("div",{className:"bottom-part"},l.a.createElement("ul",{className:"owner-ship"},l.a.createElement("h4",null,"Owns:"),l.a.createElement("li",null,c," Films"),l.a.createElement("li",null,h," Vehicules"),l.a.createElement("li",null,m," StarShips"),l.a.createElement("li",null,o," Species")),l.a.createElement("div",{className:"planet",onClick:function(e){d(i)}},l.a.createElement("span",{className:"planet-icon"}),l.a.createElement("span",{className:"planet-text"},"Planet Home"))))},d=function(e){var a=e.characters,t=e.handleClick;return l.a.createElement("div",{className:"content"},a.map((function(e,a){return l.a.createElement(u,{key:a,id:e.name,name:e.name,mass:e.mass,planet:e.homeworld,height:e.height,birth_year:e.birth_year,gender:e.gender,films:e.films.length,vehicules:e.vehicles.length,species:e.species.length,starships:e.starships.length,handleClick:t})})))},p=function(e){var a=e.searchChange;return l.a.createElement("div",{className:"pa2"},l.a.createElement("input",{className:"filter",onChange:a,type:"text",placeholder:"search for a person ..."}))},f=function(e){var a=e.handleClickEvent;return l.a.createElement("div",{className:"button"},l.a.createElement("button",{id:"nextList",onClick:a}))},E=function(e){var a=e.handleClickEvent,t=e.children;return l.a.createElement("div",{className:"scroll"},t,l.a.createElement(f,{handleClickEvent:a}))},v=function(e){var a=e.handleClose,t=e.planet,n=t.name,c=t.population,r=t.climate,s=t.diameter,i=t.terrain;return l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("span",{className:"close",onClick:a},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("h2",null,"Planet Name: ",n),l.a.createElement("div",{className:"planet-info"},l.a.createElement("span",null,"Population: ",c),l.a.createElement("span",null,"Climate: ",r),l.a.createElement("span",null,"Diameter: ",s," KM"),l.a.createElement("span",null,"Terrain: ",i)))))},g=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).handleSearchChange=function(a){e.setState({searchField:a.target.value})},e.handleClickEvent=function(){e.state.next&&fetch(e.state.next).then((function(e){return e.json()})).then((function(a){e.setState({characters:e.state.characters.concat(a.results),next:a.next})}))},e.handleClick=function(a){fetch(a).then((function(e){return e.json()})).then((function(a){e.setState({planet:a})}))},e.handleClose=function(){e.setState({planet:null})},e.state={next:!0,characters:[],searchField:"",planet:null},e}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("https://swapi.co/api/people").then((function(e){return e.json()})).then((function(a){e.setState({characters:a.results,next:a.next})}))}},{key:"render",value:function(){var e=this.state,a=e.characters,t=e.searchField,n=e.planet,c=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a.length?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"title"},l.a.createElement("span",{className:"crowd-icon"}),l.a.createElement("h1",null,"Star Wars Characters")),l.a.createElement(p,{searchChange:this.handleSearchChange})),l.a.createElement(E,{handleClickEvent:this.handleClickEvent},l.a.createElement(d,{handleClick:this.handleClick,characters:c})),n?l.a.createElement(v,{handleClose:this.handleClose,planet:n}):null):l.a.createElement("h1",{className:"center"},"Loading...")}}]),a}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(13);r.a.render(l.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");N?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(a,e)}))}}()},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7f241ca2.chunk.js.map