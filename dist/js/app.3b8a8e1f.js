(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0af9":function(t,e,a){t.exports=a.p+"img/candidato.6f436dd6.jpeg"},"0d3c":function(t,e,a){t.exports=a.p+"img/bootstrap.06940b4d.jpeg"},"1b16":function(t,e,a){t.exports=a.p+"img/plsql.49cab912.png"},2763:function(t,e,a){t.exports=a.p+"img/historico.08490ba4.jpeg"},"31b3":function(t,e,a){t.exports=a.p+"img/paciente.1c963760.jpeg"},3713:function(t,e,a){t.exports=a.p+"img/fabricante.3905ab10.jpeg"},"3aae":function(t,e,a){t.exports=a.p+"img/acoes.e612c359.jpeg"},"40cd":function(t,e,a){t.exports=a.p+"img/login.4d192f8a.jpeg"},"4b96":function(t,e,a){t.exports=a.p+"img/stocktrader.d800fe07.jpeg"},"4ee7":function(t,e,a){t.exports=a.p+"img/vue.790436a9.jpeg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("portifolio"),a("projetos"),a("sobre"),a("experiencias"),a("modal")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top",attrs:{id:"mainNav"}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[t._v(t._s(t.title))]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},t._l(t.menus,(function(e,s){return a("li",{key:s,staticClass:"nav-item mx-lg-2"},[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"nav-link py-2 px-0 px-lg-2 rounded js-scroll-trigger",attrs:{href:e.href}},[t._v(" "+t._s(e.nome)+" ")])])})),0)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[t._v(" Menu "),a("i",{staticClass:"fas fa-bars"})])}],c={name:"navbar",data:function(){return{title:"Bem vindo!",menus:[{nome:"Projetos",href:"#portfolio"},{nome:"Sobre",href:"#about"},{nome:"Experiencias",href:"#experiencias"}]}}},l=c,p=a("2877"),d=Object(p["a"])(l,o,r,!1,null,null,null),u=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"masthead bg-primary text-white text-center"},[a("div",{staticClass:"container d-flex align-items-center flex-column"},[a("img",{staticClass:"masthead-avatar mb-5",attrs:{src:t.avatar,alt:"Avatar"}}),a("h1",{staticClass:"masthead-heading text-uppercase mb-0"},[t._v(t._s(t.title))]),a("divider"),a("p",{staticClass:"masthead-subheading font-weight-light mb-0"},[t._v(t._s(t.subhead))])],1)])},f=[],g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider-custom"},[a("div",{staticClass:"divider-custom-line"}),a("div",{staticClass:"divider-custom-icon"},[a("i",{staticClass:"fas fa-star"})]),a("div",{staticClass:"divider-custom-line"})])}],v={},h=Object(p["a"])(v,g,b,!1,null,null,null),x=h.exports,C={name:"portifolio",components:{divider:x},data:function(){return{avatar:a("bb20"),title:"Portfolio",subhead:"Web Developer - Full Stack"}}},_=C,w=Object(p["a"])(_,m,f,!1,null,null,null),y=w.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-section portfolio",attrs:{id:"portfolio"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"page-section-heading text-center text-uppercase text-secondary mb-0"},[t._v(t._s(t.title))]),a("divider"),a("div",{staticClass:"row justify-content-center"},t._l(t.cards,(function(e,s){return a("div",{key:s,staticClass:"col-md-6 col-lg-4 mb-5"},[a("div",{staticClass:"portfolio-item mx-auto",attrs:{"data-toggle":"modal","data-target":"#portfolioModal"+s}},[t._m(0,!0),a("h5",[t._v(" "+t._s(e.nome)+" ")]),a("img",{staticClass:"card-tela-section",attrs:{src:e.src,alt:e.nome}})])])})),0)],1)])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},[a("div",{staticClass:"portfolio-item-caption-content text-center text-white"},[a("i",{staticClass:"fas fa-plus fa-3x"})])])}],O={name:"projetos",components:{divider:x},data:function(){return{title:"Projetos",cards:[{nome:"Ficha de inscrição",src:a("8e48")},{nome:"Gerence",src:a("40cd")},{nome:"Centro de vacinação",src:a("e5e0")},{nome:"Stock trader",src:a("4b96")},{nome:"Sambox",src:a("9529")},{nome:"Vingadores",src:a("fb87")}]}}},E=O,M=Object(p["a"])(E,j,k,!1,null,null,null),S=M.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-section bg-primary text-white mb-0",attrs:{id:"about"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"page-section-heading text-center text-uppercase text-white"},[t._v(" "+t._s(t.title)+" ")]),a("divider"),a("div",{staticClass:"row"},t._l(t.textos,(function(e,s){return a("div",{key:s,staticClass:"col-sm-5",class:e.divClass},[a("p",{staticClass:"lead",domProps:{innerHTML:t._s(e.texto)}})])})),0),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-sm-6 text-center"},[a("h4",{staticClass:"text-uppercase"},[t._v("Redes Sociais")]),t._l(t.redesSociais,(function(t,e){return a("a",{key:e,staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:t.href}},[a("i",{class:t.icon})])}))],2),t._m(0)])],1)])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6 text-center"},[a("h4",{staticClass:"text-uppercase"},[t._v("Gmail")]),a("h6",[t._v(" brunodiashen@gmail.com ")])])}],z={name:"sobre",components:{divider:x},data:function(){return{title:"Sobre",textos:[{divClass:"ml-auto",texto:"Olá! Meu nome é Bruno Dias, moro em Belo Horizonte - MG. <br> Estou cursando Ciências da computação no Centro Universitário de Belo Horizonte (UniBH). <br> Comecei a estudar tecnologia no ano de 2016. <br> Atualmente trabalho no cargo de desenvolvedor Full Stack"},{divClass:"mr-auto",texto:"Interessei-me por esta área pelo fato de gostar de diversificar meus conhecimentos e também por me permitir uma extensa lista de novas possibilidade, entre elas: <br> - Desenvolvimento de sites para colocar ideias em prática. <br> - Ferramentas para facilitar o nosso dia a dia e até mesmo, jogos para entretenimento e aprender mais ainda a respeito das tecnologias utilizadas."}],redesSociais:[{nome:"Github",icon:"fab fa-fw fa-github",href:"https://github.com/brunohendias"},{nome:"Linkedin",icon:"fab fa-fw fa-linkedin-in",href:"https://linkedin.com/in/brunohda5"},{nome:"Whatsapp",icon:"fab fa-fw fa-whatsapp",href:"https://api.whatsapp.com/send?phone=5531997753105&text=Ola!%20Tudo%20bem?%20Estou%20analisando%20seu%20curriculo!"}]}}},q=z,B=Object(p["a"])(q,$,P,!1,null,null,null),F=B.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-section portfolio",attrs:{id:"experiencias"}},[a("div",{staticClass:"container text-center"},[a("h2",{staticClass:"page-section-heading text-center text-uppercase text-secondary mb-0"},[t._v(t._s(t.title))]),a("divider"),t._l(t.rows,(function(e,s){return a("div",{key:s},[a("h1",{staticClass:"my-5"},[t._v(t._s(e.title))]),a("div",{staticClass:"row justify-content-center"},t._l(e.cards,(function(e,s){return a("div",{key:s,staticClass:"col-md-6 col-lg-4 mb-5"},[a("div",{staticClass:"portfolio-item mx-auto",attrs:{"data-toggle":"modal","data-target":"#cursosModal"+s}},[a("a",{attrs:{href:e.doc,target:"_blank"}},[t._m(0,!0),a("img",{staticClass:"card-tela-section",attrs:{src:e.src,alt:e.nome}})])])])})),0)])}))],2)])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},[a("div",{staticClass:"portfolio-item-caption-content text-center text-white"},[a("i",{staticClass:"fas fa-plus fa-3x"})])])}],H={name:"experiencias",components:{divider:x},data:function(){return{window:window,title:"Experiencias",rows:[{title:"Front - End",cards:[{nome:"vuejs",src:a("4ee7"),doc:"https://br.vuejs.org/"},{nome:"bootstrap",src:a("0d3c"),doc:"https://getbootstrap.com/"},{nome:"InertiaJS",src:a("e48d"),doc:"https://inertiajs.com/"},{nome:"pacotefront",src:a("f24c"),doc:"https://www.w3schools.com/"}]},{title:"Back - End",cards:[{nome:"php",src:a("e751"),doc:"https://www.php.net/"},{nome:"python",src:a("d55a"),doc:"https://www.python.org/"},{nome:"csharp",src:a("8705"),doc:"https://docs.microsoft.com/pt-br/dotnet/csharp/"},{nome:"laravel",src:a("e8b0"),doc:"https://laravel.com/"},{nome:".Net Core",src:a("9f3c"),doc:"https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0"}]},{title:"Banco de dados",cards:[{nome:"Firebase",src:a("fc7d"),doc:"https://firebase.google.com/"},{nome:"Oracle",src:a("1b16"),doc:"https://www.oracle.com/br/index.html"},{nome:"Mysql",src:a("9223"),doc:"https://www.mysql.com/"},{nome:"Postgree",src:a("9841"),doc:"https://www.postgresql.org/"}]},{title:"Sistema operacional",cards:[{nome:"Linux/Windows",src:a("c74e"),doc:"https://www.linux.org/"}]}]}}},L=H,N=Object(p["a"])(L,T,G,!1,null,null,null),R=N.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("templateM",{attrs:{title:"Ficha de inscrição",index:0}},[a("p",{staticClass:"mb-5"}),t._l(t.imgs.inscricao,(function(t,e){return a("img",{key:e,staticClass:"img-fluid my-4",attrs:{src:t,alt:"inscricao"}})})),a("visualizar",{attrs:{link:t.links.inscricao}})],2),a("templateM",{attrs:{title:"Gerence",index:1}},[a("p",{staticClass:"mb-5"}),t._l(t.imgs.gerence,(function(t,e){return a("img",{key:e,staticClass:"img-fluid my-4",attrs:{src:t,alt:"gerence"}})})),a("visualizar",{attrs:{link:t.links.gerence}})],2),a("templateM",{attrs:{title:"Centro de vacinação",index:2}},[a("p",{staticClass:"mb-5"}),t._l(t.imgs.vacinacao,(function(t,e){return a("img",{key:e,staticClass:"img-fluid my-4",attrs:{src:t,alt:"vacinacao"}})})),a("visualizar",{attrs:{link:t.links.vacinacao}})],2),a("templateM",{attrs:{title:"Stock trader",index:3}},[a("p",{staticClass:"mb-5"}),t._l(t.imgs.stocktrader,(function(t,e){return a("img",{key:e,staticClass:"img-fluid my-4",attrs:{src:t,alt:"stocktrader"}})})),a("visualizar",{attrs:{link:t.links.stocktrader}})],2),a("templateM",{attrs:{title:"Sambox",index:4}},[a("p",{staticClass:"mb-5"}),t._l(t.imgs.sambox,(function(t,e){return a("img",{key:e,staticClass:"img-fluid my-4",attrs:{src:t,alt:"sambox"}})})),a("visualizar",{attrs:{link:t.links.sambox}})],2),a("templateM",{attrs:{title:"Vingadores",index:5}},[a("p",{staticClass:"mb-5"}),t._l(t.imgs.vingadores,(function(t,e){return a("img",{key:e,staticClass:"img-fluid my-4",attrs:{src:t,alt:"vingadores"}})})),a("visualizar",{attrs:{link:t.links.vingadores}})],2)],1)},A=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal"+t.index,tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal1Label","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body text-center"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0",attrs:{id:"portfolioModal1Label"}},[t._v(t._s(t.title))]),a("divider"),t._t("default")],2)])])])])])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])}],W=(a("a9e3"),{name:"modal",components:{divider:x},props:{title:{type:String,default:""},index:{type:Number,require:!0}}}),I=W,U=Object(p["a"])(I,D,J,!1,null,null,null),K=U.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){t.window.location.href=t.link}}},[t._v(" Visualizar Projeto "),a("i",{staticClass:"fas fa-external-link-square-alt ml-2"})])},X=[],Y={name:"visualizar",props:{link:{type:String,default:"#"}},data:function(){return{window:window}}},Z=Y,tt=Object(p["a"])(Z,Q,X,!1,null,null,null),et=tt.exports,at={name:"projetos",components:{templateM:K,visualizar:et},data:function(){return{links:{inscricao:"https://inscricao.brunohendias.com.br",gerence:"https://gerence.brunohendias.com.br",vacinacao:"https://github.com/brunohendias/vacinacao",stocktrader:"https://stocktrader.brunohendias.com.br",sambox:"https://sambox.brunohendias.com.br",vingadores:"https://brunohendias.github.io/Vingadores",tarefas:"https://brunohendias.github.io/tarefastodo"},imgs:{inscricao:[a("9a14")],gerence:[a("40cd"),a("c636"),a("0af9"),a("e510"),a("807c")],stocktrader:[a("4b96"),a("3aae"),a("e379")],vacinacao:[a("3713"),a("e5e0"),a("31b3"),a("2763")],sambox:[a("dabd")],vingadores:[a("ca95")]}}}},st=at,it=Object(p["a"])(st,V,A,!1,null,null,null),nt=it.exports,ot={name:"App",components:{navbar:u,portifolio:y,projetos:S,sobre:F,experiencias:R,modal:nt}},rt=ot,ct=Object(p["a"])(rt,i,n,!1,null,null,null),lt=ct.exports,pt=a("45e3");s["a"].use(pt["a"],{duration:900,offset:-70,updateHistory:!1}),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(lt)}}).$mount("#app")},"807c":function(t,e,a){t.exports=a.p+"img/aluno.8b15b824.jpeg"},8705:function(t,e,a){t.exports=a.p+"img/csharp.4328475e.jpeg"},"8e48":function(t,e,a){t.exports=a.p+"img/inscricao.8cf904ab.jpeg"},9223:function(t,e,a){t.exports=a.p+"img/mysql.830fbbdc.jpeg"},9529:function(t,e,a){t.exports=a.p+"img/sambox.7714b6e4.png"},9841:function(t,e,a){t.exports=a.p+"img/postgreesql.fafa91f2.png"},"9a14":function(t,e,a){t.exports=a.p+"img/fullpage.fe6d8436.jpeg"},"9f3c":function(t,e,a){t.exports=a.p+"img/aspnetcore.63531ed9.png"},bb20:function(t,e,a){t.exports=a.p+"img/avatar.2373e629.png"},c636:function(t,e,a){t.exports=a.p+"img/inscricao.d9f0d261.jpeg"},c74e:function(t,e,a){t.exports=a.p+"img/linuxwindows.ae5e9792.webp"},ca95:function(t,e,a){t.exports=a.p+"img/fullpage.a44000d6.jpeg"},d55a:function(t,e,a){t.exports=a.p+"img/python.3d9a78ed.jpeg"},dabd:function(t,e,a){t.exports=a.p+"img/fullpage.f79316d6.jpeg"},e379:function(t,e,a){t.exports=a.p+"img/portifolio.190bb057.jpeg"},e48d:function(t,e,a){t.exports=a.p+"img/inertiajs.df95a2a8.png"},e510:function(t,e,a){t.exports=a.p+"img/geracandidato.1bca1374.jpeg"},e5e0:function(t,e,a){t.exports=a.p+"img/vacina.a8f826af.jpeg"},e751:function(t,e,a){t.exports=a.p+"img/php.ce9de4de.png"},e8b0:function(t,e,a){t.exports=a.p+"img/laravel.41c91e64.png"},f24c:function(t,e,a){t.exports=a.p+"img/pacotefront.9e833c8b.jpeg"},fb87:function(t,e,a){t.exports=a.p+"img/vingadores.7e1eaed4.png"},fc7d:function(t,e,a){t.exports=a.p+"img/firebase.48515ba3.png"}});
//# sourceMappingURL=app.3b8a8e1f.js.map