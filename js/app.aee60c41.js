(function(t){function n(n){for(var a,i,c=n[0],s=n[1],u=n[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],a=!0,c=1;c<e.length;c++){var s=e[c];0!==r[s]&&(a=!1)}a&&(o.splice(n--,1),t=i(i.s=e[0]))}return t}var a={},r={app:0},o=[];function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/giglevich/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"017a":function(t,n,e){},"0ef1":function(t,n,e){},"160d":function(t,n,e){"use strict";var a=e("98fd"),r=e.n(a);r.a},"192c":function(t,n){t.exports="data:image/png;base64,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"},"21a3":function(t,n,e){},"2e52":function(t,n,e){"use strict";var a=e("a892"),r=e.n(a);r.a},"2eff":function(t,n,e){},3109:function(t,n,e){},"3f31":function(t,n,e){"use strict";var a=e("caec"),r=e.n(a);r.a},"417d":function(t,n,e){},"422c":function(t,n,e){},"4d9c":function(t,n,e){"use strict";var a=e("6dd6"),r=e.n(a);r.a},"4e31":function(t,n,e){},"50cd":function(t,n,e){},"526f":function(t,n,e){"use strict";var a=e("422c"),r=e.n(a);r.a},5661:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-nav"),e("transition",{attrs:{name:"section"}},[e("router-view")],1),e("app__footer",[e("v-footer")],1)],1)},o=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",[e("nav__routs")],1)},c=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"nav__routs"},[e("li",{staticClass:"nav__rout"},[e("router-link",{attrs:{to:"/home"}},[t._v("home")])],1),e("li",{staticClass:"nav__rout"},[e("router-link",{attrs:{to:"/about-icon"}},[t._v("об иконе")])],1),e("li",{staticClass:"nav__rout",on:{click:t.clear}},[e("router-link",{attrs:{to:"/map"}},[t._v("карта")])],1),e("li",{staticClass:"nav__rout"},[e("router-link",{attrs:{to:"/about-progect"}},[t._v("о проекте")])],1)])},u=[],l=e("2f62");a["a"].use(l["a"]);var d=new l["a"].Store({state:{render_card:!1,render_image:!1},mutations:{card:function(t){t.render_card=!t.render_card},image:function(t){t.render_image=!t.render_image}},actions:{}}),f={computed:{render_card:function(){return this.$store.state.render_card}},methods:{clear:function(){0!=this.render_card&&d.commit("card")}}},p=f,h=(e("69b5"),e("2877")),v=Object(h["a"])(p,s,u,!1,null,"be89ae3a",null),b=v.exports,m={components:{nav__routs:b}},A=m,g=(e("e235"),Object(h["a"])(A,i,c,!1,null,"02ceb12b",null)),_=g.exports,y=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("footer",{staticClass:"footer"},[a("a",{staticClass:"link",attrs:{href:"https://vk.com/lrmpsm",target:"blank"}},[a("img",{staticClass:"footer__icon",attrs:{src:e("6075")}}),t._v("\n        Автор\n    ")]),a("a",{staticClass:"link",attrs:{href:"mailto:orlov.dmitriy2303@outlook.com",target:"blank"}},[a("img",{staticClass:"footer__icon",attrs:{src:e("192c")}}),t._v("\n        Почта автора\n    ")]),a("a",{staticClass:"link",attrs:{href:"https://github.com/DmitriyOrlov53/giglevich",target:"blank"}},[a("img",{staticClass:"footer__icon",attrs:{src:e("c50f")}}),t._v("\n        GitHub\n    ")]),a("span",[a("b",[t._v("2019 год")])])])}],x=(e("9152"),{}),E=Object(h["a"])(x,y,j,!1,null,"ffa7bc7a",null),k=E.exports,w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app__footer"},[t._t("default")],2)},O=[],C=(e("a43a"),{}),z=Object(h["a"])(C,w,O,!1,null,"1caf549a",null),S=z.exports,H={components:{"v-nav":_,"v-footer":k,app__footer:S}},W=H,X=(e("6284"),Object(h["a"])(W,r,o,!1,null,null,null)),R=X.exports,L=e("8c4f"),B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-header")],1)},G=[],U=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("headlline",{attrs:{h:"1",position:"center",size:"48px"},scopedSlots:t._u([{key:"first",fn:function(){return[t._v("Икона Жиглевича: ")]},proxy:!0},{key:"second",fn:function(){return[t._v("взгляни на историю")]},proxy:!0}])}),e("header__paragraph",[e("paragraph",[t._v("\n                Когда-то у одного неизвестного художника появилась идея: \n                запечатлеть свой город во времена его жизни на иконе. \n                На ней поместилось несколько десятков зданий, многие из \n                которых сейчас являются историко-культурным наследием Пскова. \n                Часть из них мы никогда не увидим, но многие пережили всю \n                бурную историю нашей страны. Предлагаю Вам получить \n                удовольствие не только от просмотра карты средневекового \n                Пскова, но и сравнить её объекты с их современным состоянием. \n        ")])],1),e("header__banner")],1)},Z=[],Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",["1"==t.h?e("h1",{style:{"text-align":t.position,"font-size":t.size}},[e("span",[t._t("first")],2),t._t("second")],2):e("h2",{style:{"text-align":t.position,"font-size":t.size}},[e("span",[t._t("first")],2),t._t("second")],2)])},J=[],D={props:["h","size","position"]},N=D,q=(e("9bc7"),Object(h["a"])(N,Y,J,!1,null,"1cabeeba",null)),K=q.exports,Q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._t("default")],2)},M=[],P=(e("cb0d"),{}),V=Object(h["a"])(P,Q,M,!1,null,"8da2c9ea",null),F=V.exports,I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header__paragraph"},[t._t("default")],2)},T=[],$=(e("dd8b"),{}),tt=Object(h["a"])($,I,T,!1,null,"d5d4cd56",null),nt=tt.exports,et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div")},at=[],rt=(e("f901"),{}),ot=Object(h["a"])(rt,et,at,!1,null,"d7b6dfdc",null),it=ot.exports,ct={components:{headlline:K,paragraph:F,header__paragraph:nt,header__banner:it}},st=ct,ut=(e("cf91"),Object(h["a"])(st,U,Z,!1,null,"0232027e",null)),lt=ut.exports,dt={components:{"v-header":lt}},ft=dt,pt=(e("160d"),Object(h["a"])(ft,B,G,!1,null,"d82fbfb8",null)),ht=pt.exports,vt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"unit"}},[e("div",[e("about-icon")],1)])},bt=[],mt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-icon"},[e("about-icon__headline",[e("headline",{attrs:{position:"center",size:"36px",h:"2"},scopedSlots:t._u([{key:"first",fn:function(){return[t._v("Об иконе: ")]},proxy:!0},{key:"second",fn:function(){return[t._v("история")]},proxy:!0}])})],1),e("div",{staticClass:"flex"},[e("about-icon__image"),e("about-icon__content",[e("paragraph",[e("b",[t._v("Из работы Ю. Г. Малкова «План Пскова конца ⅩⅦ века («икона Жиглевича»)")])]),e("about-icon__paragraph",[e("paragraph",[t._v("\n                    « Одним из немаловажных вопросов изучения \n                    древнерусского зодчества все еще остается \n                    вопрос о сложении архитектурных композиций \n                    древнейших городов Руси, вопрос выявления \n                    основных закономерностей этого живого \n                    динамичного процесса, а также поэтапной \n                    характеристики самих городских ансамблей \n                    от их зарождения до заключительного периода \n                    их развития, приходящегося, как правило, \n                    на вторую половину XVII столетия.\n                ")])],1),e("about-icon__paragraph",[e("paragraph",[t._v('\n                    Икона позволяет составить более полное \n                    представление о характере городского \n                    ансамбля Пскова в последней четверти \n                    XVII века. Она была задумана художником \n                    как своеобразный реально-исторический \n                    фон, на котором развертываются легендарные \n                    события весьма популярного в средневековом \n                    Пскове "Сказания о явлении Божией матери \n                    кузнецу Дорофею" во время осады Пскова \n                    польским королем Стефаном Баторием в 1581 \n                    году.\n                ')])],1),e("about-icon__paragraph",[e("paragraph",[t._v('\n                    Икона Жиглевича была ранее упомянута Н. \n                    Окулич-Казариным в его известной книге о \n                    Пскове. При этом никакой \n                    расшифровки изображенных на иконе зданий \n                    сделано не было. За этой иконой утвердилось \n                    условное название "икона Жиглевича", так как \n                    некогда она находилась в псковском Гостином \n                    дворе, возле лавки купца И. И. Жиглевича. \n                    Размер иконы 68 * 60 см.\n                ')])],1),e("about-icon__paragraph",[e("paragraph",[t._v("\n                    Данная икона \n                    представляет интерес не только с точки \n                    зрения истории топографии древнего Пскова, \n                    но любопытна и тем, что дополнительно \n                    знакомит нас, хотя бы и в схематических \n                    чертах, с рядом несохранившихся древних \n                    культовых сооружений города. »\n                ")])],1)],1)],1)],1)},At=[],gt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-icon__headline"},[t._t("default")],2)},_t=[],yt=(e("fb25"),{}),jt=Object(h["a"])(yt,gt,_t,!1,null,"ca55016e",null),xt=jt.exports,Et=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("img",{staticClass:"about-icon__image",attrs:{src:e("e4da")}})},kt=[],wt=(e("3f31"),{}),Ot=Object(h["a"])(wt,Et,kt,!1,null,"2549fb7d",null),Ct=Ot.exports,zt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-icon__content"},[t._t("default")],2)},St=[],Ht=(e("9f10"),{}),Wt=Object(h["a"])(Ht,zt,St,!1,null,"40ac7bd3",null),Xt=Wt.exports,Rt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-icon__paragraph"},[t._t("default")],2)},Lt=[],Bt=(e("a17a"),{}),Gt=Object(h["a"])(Bt,Rt,Lt,!1,null,"45133e16",null),Ut=Gt.exports,Zt={components:{"about-icon__headline":xt,"about-icon__image":Ct,"about-icon__content":Xt,"about-icon__paragraph":Ut}},Yt=Zt,Jt=(e("b1b3"),Object(h["a"])(Yt,mt,At,!1,null,"d85fe91e",null)),Dt=Jt.exports,Nt={components:{"about-icon":Dt}},qt=Nt,Kt=(e("526f"),Object(h["a"])(qt,vt,bt,!1,null,"79cb14dc",null)),Qt=Kt.exports,Mt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"unit"}},[e("div",{staticClass:"app__map"},[e("v-map")],1)])},Pt=[],Vt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"map"},[e("map__headline",[e("headline",{attrs:{h:"2",position:"center",size:"36px"},scopedSlots:t._u([{key:"first",fn:function(){return[t._v("Икона: ")]},proxy:!0},{key:"second",fn:function(){return[t._v("интерактивная карта")]},proxy:!0}])})],1),t.show?e("map__render"):e("map__notice")],1)},Ft=[],It=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"root"}},[t.render_card?e("card",{attrs:{rendering:t.rendering,position:t.position,card:t.render_card}}):t._e(),t.render_image?e("big-image",{attrs:{photo:t.rendering.photo}}):t._e(),e("div",{attrs:{id:"container"}})],1)},Tt=[],$t=e("362d"),tn=e.n($t),nn=e("bc3a"),en=e.n(nn),an=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card",style:{width:t.width_of_card(),left:t.left(),top:t.top()},attrs:{"data-scrollbar":""}},[e("div",{staticClass:"card__text"},[e("headline",{attrs:{position:"left",size:"36px",h:"1"},scopedSlots:t._u([{key:"second",fn:function(){return[t._v(t._s(t.rendering.header))]},proxy:!0}])}),e("paragraph",[e("b",[t._v("Район:")]),t._v(" "+t._s(t.rendering.district))]),e("paragraph",[e("b",[t._v("Статус:")]),t._v(" "+t._s(t.rendering.status))]),t.rendering.adress?e("paragraph",[e("b",[t._v("Адрес:")]),t._v(" "+t._s(t.rendering.adress))]):t._e()],1),t.rendering.photo?e("card__photo",{attrs:{photo:t.rendering.photo}}):t._e(),e("close-button",{attrs:{object:"render_card"}})],1)},rn=[],on=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.photo?e("img",{staticClass:"card__photo",attrs:{src:t.photo},on:{click:t.show_big_image}}):t._e()},cn=[],sn={props:["photo"],methods:{show_big_image:function(){document.body.style.overflow="hidden",d.commit("image")}}},un=sn,ln=(e("2e52"),Object(h["a"])(un,on,cn,!1,null,"caf7023e",null)),dn=ln.exports,fn=e("5744"),pn=window.innerWidth,hn=Math.round(650*pn/536),vn={components:{card__photo:dn},props:["position","rendering"],mounted:function(){fn["a"].initAll({alwaysShowTracks:!0})},methods:{left:function(){var t=+this.width_of_card().substring(0,3);return t>=pn-(this.position.x+5*pn/536)?this.position.x-5*pn/536-t+"px":this.position.x+5*pn/536+"px"},top:function(){return this.position.y+5*hn/650+"px"},width_of_card:function(){return pn>1700?"800px":"500px"}}},bn=vn,mn=(e("fbd1"),Object(h["a"])(bn,an,rn,!1,null,"7d92432b",null)),An=mn.exports,gn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"big-image",attrs:{"data-scrollbar":""}},[e("big-image__photo",{attrs:{photo:t.photo}}),e("close-button",{attrs:{object:"big_image"}})],1)},_n=[],yn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("img",{staticClass:"big-image__photo",attrs:{src:t.photo}})},jn=[],xn={props:["photo"]},En=xn,kn=(e("a6f3"),Object(h["a"])(En,yn,jn,!1,null,"39244d1d",null)),wn=kn.exports,On={components:{"big-image__photo":wn},props:["photo"],mounted:function(){fn["a"].initAll({alwaysShowTracks:!0})}},Cn=On,zn=(e("5fe3"),Object(h["a"])(Cn,gn,_n,!1,null,"55810fb8",null)),Sn=zn.exports,Hn={components:{card:An,"big-image":Sn},computed:{render_card:function(){return this.$store.state.render_card},render_image:function(){return this.$store.state.render_image}},data:function(){return{rendering:{header:null,district:null,status:null,adress:null,photo:null},position:{x:null,y:null}}},methods:{renderCard:function(t){this.rendering.header=t.target.header,this.rendering.district=t.target.district,this.rendering.status=t.target.status,this.rendering.adress=t.target.adress,this.rendering.photo=t.target.photo,this.position.x=Math.round(t.target.X),this.position.y=Math.round(t.target.Y),1!=this.render_card&&d.commit("card")}},mounted:function(){var t=this.renderCard,n=window.innerWidth,e=Math.round(650*n/536),a=new Image;a.src="./map.jpg",a.decoding="async";var r=new tn.a.Image({image:a,width:n,height:e,x:0,y:0}),o=new tn.a.Stage({width:n,height:e,container:"container"});o.container().style.position="static";var i=new tn.a.Layer;o.add(i);var c=new tn.a.Group({width:n,height:e});function s(a){c.add(r),i.batchDraw();for(var s=[],u=0;u<a.length;u++)s[u]=new tn.a.Circle({radius:8*n/536,fill:"white",stroke:"darkgray",strokeWidth:2*n/536,x:a[u].x*n/536,y:a[u].y*e/650,opacity:.5}),c.add(s[u]),s[u].header=a[u].header,s[u].district=a[u].district,s[u].status=a[u].status,s[u].adress=a[u].adress,s[u].photo=a[u].photo,s[u].X=a[u].x*n/536,s[u].Y=a[u].y*e/650,s[u].on("click",t),s[u].on("mouseenter",function(){o.container().style.cursor="pointer"}),s[u].on("mouseleave",function(){o.container().style.cursor="default"}),s[u].zIndex(u+1);i.add(c)}en.a.get("./objects_list.json").then(function(t){s(t.data)})}},Wn=Hn,Xn=(e("cefb"),Object(h["a"])(Wn,It,Tt,!1,null,"170564ec",null)),Rn=Xn.exports,Ln=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"map__headline"},[t._t("default")],2)},Bn=[],Gn=(e("f8eb"),{}),Un=Object(h["a"])(Gn,Ln,Bn,!1,null,"489aa3c2",null),Zn=Un.exports,Yn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"map_notice"},[e("paragraph",[t._v("\n        Для использования интерактивной карты ваше устройство не подходит.\n        Зайдите на этот сайт с устройства с большей диагональю для лучшего просмотра.\n        Рекомендуется не менее 10 дюймов.\n    ")])],1)},Jn=[],Dn=(e("ddd5"),{}),Nn=Object(h["a"])(Dn,Yn,Jn,!1,null,"57bfc134",null),qn=Nn.exports,Kn={components:{map__render:Rn,map__headline:Zn,map__notice:qn},computed:{show:function(){return window.innerWidth>1024}}},Qn=Kn,Mn=(e("5bc9"),Object(h["a"])(Qn,Vt,Ft,!1,null,"5f1abc6c",null)),Pn=Mn.exports,Vn={components:{"v-map":Pn}},Fn=Vn,In=(e("d262"),Object(h["a"])(Fn,Mt,Pt,!1,null,"682f03d0",null)),Tn=In.exports,$n=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"unit"}},[e("div",{staticClass:"app__about-progect"},[e("about-progect")],1)])},te=[],ne=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"about-project"},[e("about-project__headline"),e("section",{staticClass:"about-project__data"},[e("about-project__sources"),e("about-project__other")],1)],1)},ee=[],ae=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("headline",{staticClass:"about-project__headline",attrs:{position:"center",size:"36px",h:"2"},scopedSlots:t._u([{key:"first",fn:function(){return[t._v("О ")]},proxy:!0},{key:"second",fn:function(){return[t._v("проекте")]},proxy:!0}])})},re=[],oe=(e("7792"),{}),ie=Object(h["a"])(oe,ae,re,!1,null,"699fd214",null),ce=ie.exports,se=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"about-project__sources"},[e("headline",{attrs:{size:"24px",h:"2"},scopedSlots:t._u([{key:"second",fn:function(){return[t._v("Источники")]},proxy:!0}])}),e("paragraph",[t._v("   \n        Окулич-Казарин Н. Спутник по древнему Пскову. Псков, 1913. Рис. 11.\n    ")]),e("paragraph",[t._v("\n        И. К. Лабутина. Историческая топография Пскова в ⅩⅣ - ⅩⅤ веках/\n        И.К. Лабутина;Ин-т археологии РАН. – М.: Наука, 2011.\n    ")]),e("paragraph",[t._v("\n        Древний Псков. История. Искусство. Археология., 1988// \n        Ю. Г. Малков «План Пскова конца ⅩⅦ века («икона Жиглевича»). \n    ")]),e("paragraph",[e("a",{attrs:{href:"http://architecture.artyx.ru/books/item/f00/s00/z0000006/st013.shtml ",target:"blank"}},[t._v("\n            architecture.artyx.ru\n        ")])]),e("paragraph",[e("a",{attrs:{href:"https://pskovskij-putevoditel-okuneva.blogspot.com/2019/04/Ikona-iz-lavki-Zhiglevicha-cerkvi-K-voprosu-o-datirovke.html",target:"blank"}},[t._v("\n            pskovskij-putevoditel-okuneva.blogspot.com\n        ")])])],1)},ue=[],le=(e("4d9c"),{}),de=Object(h["a"])(le,se,ue,!1,null,"ed74b90a",null),fe=de.exports,pe=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"about-project__other"},[e("headline",{attrs:{size:"24px",h:"2"},scopedSlots:t._u([{key:"second",fn:function(){return[t._v("Дополнительно")]},proxy:!0}])}),e("paragraph",[t._v("\n        Ресурс был создан в рамках индивидуального проекта.\n    ")]),e("paragraph",[t._v("\n        Все фотографии, которые были использованы, принадлежат автору проекта.\n    ")]),e("paragraph",[t._v("\n        Шрифты, библиотеки и т.п. ввзяты из открытых источников и распространяются в рамках opensource.\n    ")]),e("paragraph",[t._v("\n        Отдельно хочу выразить благодарность своему другу \n        "),e("a",{attrs:{target:"blank",href:"https://vk.com/vietnamian_rhapsody"}},[t._v("Арсению Кмицицу")]),t._v("\n        за помощь в создании проекта.\n    ")]),e("paragraph",[t._v("\n        Закрытое тестирование проводилось в сообществе \n        "),e("a",{attrs:{target:"blank",href:"https://vk.com/old_pskov_town"}},[t._v("Старый Псков")])])],1)},he=[],ve=(e("d69d"),{}),be=Object(h["a"])(ve,pe,he,!1,null,"75a35464",null),me=be.exports,Ae={components:{"about-project__headline":ce,"about-project__sources":fe,"about-project__other":me}},ge=Ae,_e=(e("f143"),Object(h["a"])(ge,ne,ee,!1,null,null,null)),ye=_e.exports,je={components:{"about-progect":ye}},xe=je,Ee=(e("7ebf"),Object(h["a"])(xe,$n,te,!1,null,"93619916",null)),ke=Ee.exports;a["a"].use(L["a"]);var we=new L["a"]({base:"/giglevich/",mode:"history",routes:[{path:"/",component:ht},{path:"/home",component:ht},{path:"/about-icon",component:Qt},{path:"/map",component:Tn},{path:"/about-progect",component:ke}]}),Oe=e("9483");Object(Oe["a"])("".concat("/giglevich/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Ce=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"paragraph button card__button",on:{click:t.close}},[t._v("закрыть")])},ze=[],Se={props:["object"],methods:{close:function(){"render_card"==this.object?d.commit("card"):(d.commit("image"),setTimeout(function(){document.body.style.overflow="auto"},300))}}},He=Se,We=(e("6c02"),Object(h["a"])(He,Ce,ze,!1,null,"6941390c",null)),Xe=We.exports;a["a"].component("headline",K),a["a"].component("paragraph",F),a["a"].component("close-button",Xe),a["a"].config.productionTip=!1,new a["a"]({router:we,store:d,render:function(t){return t(R)}}).$mount("#app")},"5bb6":function(t,n,e){},"5bc9":function(t,n,e){"use strict";var a=e("50cd"),r=e.n(a);r.a},"5fe3":function(t,n,e){"use strict";var a=e("4e31"),r=e.n(a);r.a},6075:function(t,n){t.exports="data:image/png;base64,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"},6284:function(t,n,e){"use strict";var a=e("b50f"),r=e.n(a);r.a},"69b5":function(t,n,e){"use strict";var a=e("be1f"),r=e.n(a);r.a},"6c02":function(t,n,e){"use strict";var a=e("ef2f"),r=e.n(a);r.a},"6dd6":function(t,n,e){},"70d4":function(t,n,e){},"73e2":function(t,n,e){},7792:function(t,n,e){"use strict";var a=e("3109"),r=e.n(a);r.a},"7d29":function(t,n,e){},"7ebf":function(t,n,e){"use strict";var a=e("c679"),r=e.n(a);r.a},9152:function(t,n,e){"use strict";var a=e("ff53"),r=e.n(a);r.a},"98fd":function(t,n,e){},"9bc7":function(t,n,e){"use strict";var a=e("b83e"),r=e.n(a);r.a},"9f10":function(t,n,e){"use strict";var a=e("e5f3"),r=e.n(a);r.a},a17a:function(t,n,e){"use strict";var a=e("21a3"),r=e.n(a);r.a},a38f:function(t,n,e){},a43a:function(t,n,e){"use strict";var a=e("b3a1"),r=e.n(a);r.a},a6f3:function(t,n,e){"use strict";var a=e("0ef1"),r=e.n(a);r.a},a892:function(t,n,e){},ab45:function(t,n,e){},b1b3:function(t,n,e){"use strict";var a=e("017a"),r=e.n(a);r.a},b3a1:function(t,n,e){},b50f:function(t,n,e){},b83e:function(t,n,e){},bad8:function(t,n,e){},be1f:function(t,n,e){},c50f:function(t,n){t.exports="data:image/png;base64,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"},c679:function(t,n,e){},caec:function(t,n,e){},cb0d:function(t,n,e){"use strict";var a=e("70d4"),r=e.n(a);r.a},cefb:function(t,n,e){"use strict";var a=e("5bb6"),r=e.n(a);r.a},cf91:function(t,n,e){"use strict";var a=e("f5a6"),r=e.n(a);r.a},d262:function(t,n,e){"use strict";var a=e("5661"),r=e.n(a);r.a},d420:function(t,n,e){},d69d:function(t,n,e){"use strict";var a=e("ab45"),r=e.n(a);r.a},dd8b:function(t,n,e){"use strict";var a=e("d420"),r=e.n(a);r.a},ddd5:function(t,n,e){"use strict";var a=e("7d29"),r=e.n(a);r.a},e088:function(t,n,e){},e235:function(t,n,e){"use strict";var a=e("a38f"),r=e.n(a);r.a},e4da:function(t,n,e){t.exports=e.p+"img/map.9e0bb56f.jpg"},e5f3:function(t,n,e){},ef2f:function(t,n,e){},f143:function(t,n,e){"use strict";var a=e("73e2"),r=e.n(a);r.a},f5a6:function(t,n,e){},f8eb:function(t,n,e){"use strict";var a=e("2eff"),r=e.n(a);r.a},f901:function(t,n,e){"use strict";var a=e("e088"),r=e.n(a);r.a},fb25:function(t,n,e){"use strict";var a=e("bad8"),r=e.n(a);r.a},fbd1:function(t,n,e){"use strict";var a=e("417d"),r=e.n(a);r.a},ff53:function(t,n,e){}});
//# sourceMappingURL=app.aee60c41.js.map