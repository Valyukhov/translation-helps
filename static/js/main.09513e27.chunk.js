(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){},5484:function(e,t,n){e.exports=n(5753)},5489:function(e,t,n){},5753:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),i=(n(5489),n(44)),l=n(45),s=n(47),u=n(46),m=n(48),p=n(7),h=(n(116),n(56)),f=n(10),d=n.n(f),b=n(2),v=n(24),w=n(179),E=function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(260,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},drawerPaper:{width:260,overflowY:"unset"},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawerHeader:Object(w.a)({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 8px 0 1em"},e.mixins.toolbar),toolbar:{width:"100%"},filepath:{}}},g=Object(p.withStyles)(E,{withTheme:!0})(function(e){var t,n=e.classes,a=e.projectName,c=e.open,o=e.handleDrawerOpen,i=e.handleDrawerClose,l=r.a.createElement(b.c,{variant:"persistent",anchor:"left",open:c,classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement(b.j,{variant:"subheading"},"Coins"),r.a.createElement(b.h,{onClick:i},r.a.createElement(v.a,null))),r.a.createElement(b.b,null));return r.a.createElement("div",null,r.a.createElement(b.a,{className:d()(n.appBar,(t={},Object(h.a)(t,n.appBarShift,c),Object(h.a)(t,n["appBarShift-left"],c),t))},r.a.createElement(b.i,{className:n.toolbar,disableGutters:!c},r.a.createElement(b.h,{color:"inherit","aria-label":"Open drawer",onClick:o,className:d()(n.menuButton,c&&n.hide)},r.a.createElement(v.c,null)),r.a.createElement(b.j,{variant:"title",color:"inherit",noWrap:!0},a," -",r.a.createElement("span",null,"\xa0")),r.a.createElement(b.j,{variant:"subheading",color:"inherit",className:n.coin,noWrap:!0},"Titus"))),l)}),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleDrawerOpen=function(){n.setState({open:!0})},n.handleDrawerClose=function(){n.setState({open:!1})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=this.state;return r.a.createElement(g,Object.assign({},e,{open:t.open,projectName:"translationHelps",handleDrawerOpen:this.handleDrawerOpen.bind(this),handleDrawerClose:this.handleDrawerClose.bind(this)}))}}]),t}(r.a.Component),O=n(57),y=n.n(O),D=Object(p.withStyles)(function(e){return{root:{width:"100%"}}})(function(e){e.classes;return e.verseObject.children.map(function(e,t){return r.a.createElement(N,{key:t,verseObject:e})})}),k=Object(p.withStyles)(function(e){return{root:{width:"100%"}}})(function(e){e.classes;var t=e.verseObject,n="word"===t.type;t.type;return r.a.createElement("span",null,n?" ":"",t.text)}),N=Object(p.withStyles)(function(e){return{root:{width:"100%"}}})(function(e){e.classes;var t=e.verseObject;return"milestone"===t.type?r.a.createElement(D,{verseObject:t}):r.a.createElement(k,{verseObject:t})}),S=Object(p.withStyles)(function(e){return{root:{width:"100%"}}})(function(e){var t=e.classes,n=e.verseKey,a=e.verseData,c=e.translationNotesVerseData,o=a.verseObjects?a.verseObjects.map(function(e,t){return r.a.createElement(N,{key:t,verseObject:e})}):r.a.createElement("span",null),i=c?c.map(function(e,t){return r.a.createElement("span",{key:t},r.a.createElement("em",null,e.gl_quote),": ",e.occurrence_note)}):"";return r.a.createElement(b.d,null,r.a.createElement(b.f,{expandIcon:r.a.createElement(v.b,null)},r.a.createElement(b.j,{className:t.heading},r.a.createElement("sup",null,n),o)),r.a.createElement(b.e,null,r.a.createElement(b.j,null,i)))}),x=Object(p.withStyles)(function(e){return{root:{width:"100%"}}})(function(e){e.classes;var t=e.chapterKey,n=e.chapterData,a=e.translationNotesChapterData,c=Object.keys(n).map(function(e){return r.a.createElement(S,{key:e,verseKey:e,verseData:n[e],translationNotesVerseData:a[e]})}),o=a.intro[0].occurrence_note;return[r.a.createElement(b.d,{key:Math.random()},r.a.createElement(b.f,{expandIcon:r.a.createElement(v.b,null)},r.a.createElement("h2",null,"Chapter ",t)),r.a.createElement(b.e,null,r.a.createElement(b.j,null,r.a.createElement(y.a,{source:o,escapeHtml:!1}))))].concat(c)}),C=Object(p.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"justified",color:e.palette.text.secondary}}})(function(e){var t=e.classes,n=e.bookData,a=e.translationNotesData,c=Object.keys(n.chapters).map(function(e){return r.a.createElement(b.g,{key:e,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(x,{key:e,chapterKey:e,chapterData:n.chapters[e],translationNotesChapterData:a[e]}))}),o=a.front.intro[0].occurrence_note;return r.a.createElement("div",{className:t.root},r.a.createElement(b.g,{container:!0,spacing:24},r.a.createElement(b.g,{item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(b.d,{key:Math.random()},r.a.createElement(b.f,{expandIcon:r.a.createElement(v.b,null)},r.a.createElement(y.a,{source:o.split("\n")[0],escapeHtml:!1})),r.a.createElement(b.e,null,r.a.createElement(b.j,null,r.a.createElement(y.a,{source:o.split("\n").splice(1).join("\n"),escapeHtml:!1}))))),c))}),I=Object(p.withStyles)(function(e){return{root:{}}})(function(e){e.classes;var t=e.bookData,n=e.translationNotesData,a=t&&n?r.a.createElement(C,{bookData:t,translationNotesData:n}):r.a.createElement("div",null);return r.a.createElement("div",null,a)}),B=n(183),P=n(77),_=n.n(P),H=n(181),W=n.n(H),A=n(182),J=n.n(A),K=function(e,t,n){return new Promise(function(a,r){M(e,t+"-tn",n).then(function(e){var t=G(e);a(t)}).catch(r)})},M=function(e,t,n){return new Promise(function(a,r){z(e,t,n).then(function(c){var o=q(c.projects,n).path;o=o.replace(/^\.\//,""),F(e,t,o).then(a).catch(r)})})},q=function(e,t){return e.filter(function(e){return e.identifier===t})[0]},G=function(e){return e.split("\n").map(function(e){return e.trim().split("\t")})},z=function(e,t){return new Promise(function(n,a){F(e,t,"manifest.yaml").then(function(e){var t=W.a.parseDocument(e).toJSON();n(t)}).catch(a)})},F=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"master";return new Promise(function(r,c){var o=_.a.join(e,t,"raw/branch",a,n);T(o).then(r).catch(c)})},T=function(e){return new Promise(function(t,n){fetch("https://cors-anywhere.herokuapp.com/https://git.door43.org/"+e,{mode:"cors"}).then(function(e){t(e.text())}).catch(n)})},V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={bookData:null,translationNotesData:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.username,a=t.languageId,r=t.reference;(function(e,t,n){return new Promise(function(a,r){M(e,t+"_ult",n).then(function(e){var t=J.a.toJSON(e);a(t)}).catch(r)})})(n,a,r.book).then(function(t){(function(e,t,n){return new Promise(function(a,r){K(e,t,n).then(function(e){var t={};e.shift(),e.forEach(function(e){var n=Object(B.a)(e,9),a=n[0],r=n[1],c=n[2],o=n[3],i=n[4],l=n[5],s=n[6],u=n[7],m=n[8];if(a&&r&&c){t[r]||(t[r]={}),t[r][c]||(t[r][c]=[]);var p={id:o,support_reference:i,original_quote:l,occurrence:s,gl_quote:u,occurrence_note:m.replace(/<br>/g,"\n")};t[r][c].push(p)}}),a(t)}).catch(r)})})(n,a,r.book).then(function(n){e.setState({bookData:t,translationNotesData:n})})})}},{key:"render",value:function(){var e=this.props,t=this.state,n=t.bookData,a=t.translationNotesData;return r.a.createElement(I,Object.assign({},e,{bookData:n,translationNotesData:a}))}}]),t}(r.a.Component),L=Object(p.withStyles)(function(e){return{root:{flexGrow:1},appFrame:{zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%"},main:{padding:"5em 1em 1em 1em",minWidth:"20em",fontSize:"0.9em",lineHeight:"1.75em"}}})(function(e){var t=e.classes,n=e.username,a=e.languageId,c=e.reference;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.appFrame},r.a.createElement(j,{username:n,languageId:a,reference:c}),r.a.createElement("main",{className:t.main},r.a.createElement(V,{username:n,languageId:a,reference:c}))))}),R=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"unfoldingWord",languageId:"en",reference:{book:"tit",chapter:"1",verse:"1"}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.languageId,a=e.reference;return r.a.createElement(L,{username:t,languageId:n,reference:a})}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5484,2,1]]]);
//# sourceMappingURL=main.09513e27.chunk.js.map