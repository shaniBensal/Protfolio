(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){var n={"./appSus.jpg":35,"./memeGenerator.jpg":36,"./misterBit.jpg":37,"./myCinema.jpg":38,"./myLocations.jpg":39,"./psdToHtml.jpg":40,"./rentApp.jpg":41,"./wikiTube.jpg":42};function o(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=15},function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/myPic.f4cce781.jpg"},,,function(e,t,a){e.exports=a(57)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/appSus.77f7a041.jpg"},function(e,t,a){e.exports=a.p+"static/media/memeGenerator.2cd24eec.jpg"},function(e,t,a){e.exports=a.p+"static/media/misterBit.f831dc2b.jpg"},function(e,t,a){e.exports=a.p+"static/media/myCinema.e7be1ebb.jpg"},function(e,t,a){e.exports=a.p+"static/media/myLocations.a2d81aec.jpg"},function(e,t,a){e.exports=a.p+"static/media/psdToHtml.be456c1f.jpg"},function(e,t,a){e.exports=a.p+"static/media/rentApp.43742837.jpg"},function(e,t,a){e.exports=a.p+"static/media/wikiTube.1b04684d.jpg"},function(e,t,a){},,,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),i=a.n(r),c=(a(27),a(5)),l=a(6),s=a(8),m=a(7),u=a(9),p=(a(29),a(59)),f=a(60),h=a(61),d=a(20),b=(a(31),function(e,t){t(e)}),g=function(e){var t=e.showNavBar;return o.a.createElement("div",{className:"head-container flex"},o.a.createElement("div",{className:"hamburger ".concat(t),onClick:function(t){return function(e,t){e(t)}(e.onShowNav,t)}}),o.a.createElement("ul",{className:"nav-list flex flex-wrap margin-zero align-items-center ".concat(t)},o.a.createElement("li",{onClick:function(){return b("about",e.onSrollToRef)},className:"nav-item list-item flex justify-center align-items-center"},"About Me"),o.a.createElement("li",{onClick:function(){return b("projects",e.onSrollToRef)},className:"nav-item list-item flex justify-center align-items-center"},"My Projects"),o.a.createElement("li",{onClick:function(){return b("contactMe",e.onSrollToRef)},className:"nav-item list-item flex justify-center align-items-center"},"Contact Me")))},v=(a(33),function(e){var t=e.project;return o.a.createElement("div",{className:"item-preview"},o.a.createElement("div",{className:"flex justify-space-between"},o.a.createElement("ul",{className:"margin-zero padding-zero"},o.a.createElement("li",{className:"list-item title"},t.name),o.a.createElement("li",{className:"list-item"},o.a.createElement("img",{src:a(15)("./"+t.appImg+".jpg"),alt:"img"})))))}),j=(a(43),a(58)),E=function(e){var t=e.projects.map(function(e){return o.a.createElement("li",{key:e._id,className:"list-item"},o.a.createElement(j.a,{to:"/ProjectDetails/".concat(e._id)},o.a.createElement(v,{project:e})))});return o.a.createElement("div",{className:"project-list"},o.a.createElement("ul",{className:"flex flex-wrap justify-center"},t))},y=(a(47),function(){return o.a.createElement("div",{className:"header flex align-items-center justify-center"},o.a.createElement("p",{className:"quote"},'"If you find a job you love, you\u2019ll never work again..."'))}),w=(a(16),a(18)),N=a.n(w),k=function(){return o.a.createElement("div",{className:"about"},o.a.createElement("p",null,"Junior Front End developer with Bsc. and Msc. from The Hebrew University of Jerusalem in Plant Science. I am responsible, with a high work ethic, love to work in a team and alone. Passionate about Front-End development and creating incredible UX & UI."),o.a.createElement("p",null,"Graduated Coding Academy an intensive bootcamp of three months where I started from JavaScript, HTML, CSS to more complex things such as: AJAX requests, FlexBox, HTML5, VUE.js, VUEX, Node.js, MongoDB, SQL. But more important, I learn how to be a programmer, how to design the application, be a team member, solve complex issues etc. And now I am looking forward to my next challenge to phase my first steps in the industry. Looking to learn new technologies where I can push my abilities further and further and plant my roots in a good place and join to a great family."))},x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Who Am I"),o.a.createElement("div",{className:"about-me flex align-items-center margin-zero"},o.a.createElement(k,null),o.a.createElement("img",{src:N.a,alt:"me"})))},S=a(12),T=(a(50),function(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),c=Object(S.a)(i,2),l=c[0],s=c[1],m=function(e,t){switch(t){case"subject":r(e.target.value);break;case"messege":s(e.target.value);break;default:return}};return o.a.createElement("div",{className:"contect-me"},o.a.createElement("h2",null,"Get In Touch"),o.a.createElement("div",{className:"input-contact flex flex-colom justify-space-between align-items-center"},o.a.createElement("input",{type:"text",onChange:function(e){return m(e,"subject")},placeholder:"Subject"}),o.a.createElement("textarea",{type:"text",onChange:function(e){return m(e,"messege")},className:"messege",placeholder:"Write your messege here..."})),o.a.createElement("div",{className:"submit-btn flex "},o.a.createElement("button",{onClick:function(){window.location.href="https://mail.google.com/mail/?view=cm&fs=1&to=".concat("shano.bensal@mail.huji.ac.il","&su=").concat(a,"&body=").concat(l)}},"Send")),o.a.createElement("div",{className:"button-bottom"},o.a.createElement("ul",{className:"flex justify-center margin-zero text-align-center list-item social-buttons"},o.a.createElement("li",null,o.a.createElement("a",{className:"social-buttons facebook",href:"https://www.facebook.com/shani.bensal"},o.a.createElement("i",{className:"fab fa-facebook-f"}))),o.a.createElement("li",null,o.a.createElement("a",{className:"social-buttons linkedin",href:"https://linkedin.com/in/shani-bensal-95a78b139"},o.a.createElement("i",{className:"fab fa-linkedin-in"}))),o.a.createElement("li",null,o.a.createElement("a",{className:"social-buttons github",href:"https://github.com/shaniBensal"},o.a.createElement("i",{className:"fab fa-github"}))))))}),C=[{_id:"1528908146885",name:"My Locations",description:"Save your favorites places, by category and map coordinates. Look them on the map.",appImg:"myLocations",publishedAt:"1547279746959",labels:["React","Mobx","Geolocation","Routing","GoogleAPI"],urlWeb:"http://shaniBensal.github.io/myLocations",urlCode:"https://github.com/shaniBensal/myLocations"},{_id:"1528908146886",name:"WikiTube",description:"An app combine both first 5 values of YouTube and Wikipedia.",appImg:"wikiTube",publishedAt:"1547279746959",labels:["HTML5","vanilla-JS","RESTfulAPI","YoutubeAPI","WikipediaAPI","Iframe"],urlWeb:"https://shanibensal.github.io/wikiTube/",urlCode:"https://github.com/shaniBensal/wikiTube"},{_id:"1528908146887",name:"RentApp",description:"Final project from Coding Academy Israel. A good way to daily rent from your neighbor even if you dont know him.",appImg:"rentApp",publishedAt:"1547279746959",labels:["HTML5","Vue","Vuex","Node.js","servers","MongoDB","RESTfulAPI","Geolocation","Routing","GoogleAPI","Cloudinary"],urlWeb:"https://rentapp-sts.herokuapp.com/#/",urlCode:"https://github.com/shaniBensal/weRentFull"},{_id:"1528908146888",name:"My first PSD to HTML page",description:"First project PSD to HTML work on CSS, Avocode and pixel perfect",appImg:"psdToHtml",publishedAt:"1547279746959",labels:["PSD","pixelPerfect","CSS3"],urlWeb:" https://shanibensal.github.io/PsdToHtml/",urlCode:"https://github.com/shaniBensal/PsdToHtml"},{_id:"1528908146889",name:"App Sus",description:"One application to rule them all, one app has both Mail and Notes app",appImg:"appSus",publishedAt:"1547279746959",labels:["TODOS","Mail","Routing","CSS3"],urlWeb:"https://shanibensal.github.io/appsus/",urlCode:"https://github.com/shaniBensal/appsus"},{_id:"1528908146890",name:"Meme Generator",description:"Why use meme from the Net when you can create one of your own?",appImg:"memeGenerator",publishedAt:"1547279746959",labels:["HTML5","Canvas","CSS3","Gallery"],urlWeb:"https://shanibensal.github.io/Meme-Generator/",urlCode:"https://github.com/shaniBensal/Meme-Generator"},{_id:"1528908146891",name:"Cinema App",description:"Look for all your favorite movies from all times!",appImg:"myCinema",publishedAt:"1547279746959",labels:["React","Redux","ES6","MovieAPI","Axios","RESTfulAPI"],urlWeb:"https://shanibensal.github.io/myCinema/",urlCode:"https://github.com/shaniBensal/myCinema"}];var A={getProjects:function(){return C},getProjectById:function(e){return C.find(function(t){return t._id===e})},filterProjects:function(){return"hi"}},I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={projectList:[],showNavBar:!1},a.toggelNavBar=function(e){e.preventDefault(),a.setState({showNavBar:!a.state.showNavBar})},a.handleInputChange=function(e){var t=Object(d.a)({},a.state.filterBy);t=e,a.setState({filterBy:t})},a.scrollToRef=function(e){switch(a.setState({showNavBar:!1}),e){case"about":window.scrollTo({top:a.aboutRef.current.offsetTop,behavior:"smooth"});break;case"projects":window.scrollTo({top:a.projectsRef.current.offsetTop,behavior:"smooth"});break;case"contactMe":window.scrollTo({top:a.contactRef.current.offsetTop,behavior:"smooth"});break;default:return}},a.aboutRef=o.a.createRef(),a.projectsRef=o.a.createRef(),a.contactRef=o.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({projectList:A.getProjects()})}},{key:"setFilterCategory",value:function(e){A.filterProjects(e)}},{key:"render",value:function(){var e=this,t=this.state.projectList;return o.a.createElement("div",{className:"protfolio-app"},o.a.createElement(g,{showNavBar:this.state.showNavBar,onSrollToRef:function(t){return e.scrollToRef(t)},onShowNav:function(t){return e.toggelNavBar(t)}}),o.a.createElement(y,null),o.a.createElement("div",{ref:this.aboutRef}),o.a.createElement(x,null),o.a.createElement("div",{className:"flex justify-space-around",ref:this.projectsRef},o.a.createElement("h1",null,"My Projects!")),o.a.createElement(E,{projects:t}),o.a.createElement("footer",{ref:this.contactRef},o.a.createElement(T,null)))}}]),t}(n.Component),B=(a(52),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={currProj:{}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentWillMount",value:function(){var e=this.props.match.params._id;this.setState({currProj:A.getProjectById(e)})}},{key:"render",value:function(){var e=this.state.currProj,t=this.state.currProj.labels.map(function(e,t){return o.a.createElement("li",{key:t,className:"label list-item"},e)});return o.a.createElement("div",{className:"project-details flex flex-colom align-items-center"},o.a.createElement("h2",null," ",o.a.createElement(j.a,{className:"back",to:"/"},o.a.createElement("i",{className:"fa fa-arrow-left"}))," ",e.name," "),o.a.createElement("a",{href:e.urlWeb},o.a.createElement("img",{className:"bigImg",src:a(15)("./"+e.appImg+".jpg"),alt:"img"})),o.a.createElement("h3",null,"Short Description:"),o.a.createElement("p",null,e.description),o.a.createElement("h3",null,"Used Methodes:"),o.a.createElement("ul",null,t),o.a.createElement("div",{className:"link-buttons flex justify-space-between"},o.a.createElement("button",null,o.a.createElement("a",{href:e.urlWeb},"Watch Site")),o.a.createElement("button",null,o.a.createElement("a",{href:e.urlCode},"Code"))))}}]),t}(n.Component)),P=(a(54),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={showNavBar:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"app text-align-center"},o.a.createElement(f.a,null,o.a.createElement(h.a,{exact:!0,component:I,path:"/"}),o.a.createElement(h.a,{exact:!0,component:B,path:"/ProjectDetails/:_id"}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,2,1]]]);
//# sourceMappingURL=main.0ec59c12.chunk.js.map