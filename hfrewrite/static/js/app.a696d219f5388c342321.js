webpackJsonp([1],{"/T+A":function(e,s){},"0RXL":function(e,s){},"9fJc":function(e,s){},KGBp:function(e,s,t){e.exports=t.p+"static/img/result_bg.4c4bb05.jpg"},NHnr:function(e,s,t){"use strict";function n(e){t("emzW")}function a(e){t("/T+A")}function c(e){t("9fJc")}function i(e){t("0RXL")}Object.defineProperty(s,"__esModule",{value:!0});var o=t("7+uW"),r={name:"app"},u=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],d={render:u,staticRenderFns:l},C=d,_=t("VU/8"),p=n,h=_(r,C,!1,p,null,null),f=h.exports,m=t("/ocq"),v=(t("mkHe"),{name:"Home",data:function(){return{}},computed:{count:function(){return this.$store.state.count}}}),q=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"home"},[e._m(0,!1,!1),e._v(" "),t("div",{staticClass:"home_main"},[t("div",{staticClass:"home_logo"}),e._v(" "),t("router-link",{staticClass:"start",attrs:{to:"/resolve"}})],1)])},A=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("header",{staticClass:"header_tips"},[t("span",[e._v("第一周")])])}],b={render:q,staticRenderFns:A},D=b,w=t("VU/8"),g=a,k=w(v,D,!1,g,null,null),x=k.exports,B=t("Dd8w"),S=t.n(B),y=t("NYxO"),E={name:"Resolve",data:function(){return{}},computed:S()({},Object(y.e)({quescount:"quescount",selectedAns:"selectedAns",questions:"questions"}),Object(y.c)({currentQues:"currentQues"})),methods:S()({},Object(y.d)({liClick:"liClick",initialState:"initialState"}),Object(y.b)({nextButtonClick:"nextButtonClick"})),created:function(){this.initialState(),document.body.style.backgroundImage="url("+t("nSZi")+")"}},I=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("header",{staticClass:"header_tips"},[t("span",[e._v("题目"+e._s(e.quescount))])]),e._v(" "),t("div",{staticClass:"question_container"},[t("header",{staticClass:"question_header"},[e._v(e._s(e.currentQues.quesTitle))]),e._v(" "),t("ul",{staticClass:"answer_list"},e._l(e.currentQues.quesAns,function(s){return t("li",{key:s.ansCode,on:{click:function(t){e.liClick(s.ansCode)}}},[t("span",{staticClass:"answer_code",class:{answer_selected:e.selectedAns===s.ansCode}},[e._v(e._s(s.ansCode))]),e._v(" "),t("span",{staticClass:"answer_describe"},[e._v(e._s(s.ansDescribe))])])}))]),e._v(" "),e.quescount<e.questions.length?t("span",{staticClass:"next_ques",on:{click:e.nextButtonClick}}):t("span",{staticClass:"next_ques submit_button",on:{click:e.nextButtonClick}})])},R=[],T={render:I,staticRenderFns:R},j=T,H=t("VU/8"),O=c,$=H(E,j,!1,O,null,null),L=$.exports,N={name:"",data:function(){return{correctNums:0,shareIsShow:0}},computed:S()({score:function(){return Math.ceil(this.correctNums/this.correctAnswers.length*100)},scoreEvaluate:function(){return this.score<60?"你说，是不是把老师讲的内容又偷偷还给老师了？":this.score<80?"还可以，下次再努力努力吧！":this.score<100?"考了这么高的分数，可以说是很厉害了！":100==this.score?"恭喜你获得成就：满分达成！":"成绩有误，请返回重试！"}},Object(y.e)({answers:"answers",correctAnswers:"correctAnswers"})),methods:{shareShow:function(){this.shareIsShow=1},shareHide:function(){this.shareIsShow=0}},created:function(){var e=this;document.body.style.backgroundImage="url("+t("KGBp")+")",this.answers.forEach(function(s,t){s===e.correctAnswers[t]&&e.correctNums++})}},U=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"score_container"},[t("span",{staticClass:"score_number"},[e._v(" "+e._s(e.score)+"分 !")]),e._v(" "),t("span",{staticClass:"score_evaluate"},[e._v(e._s(e.scoreEvaluate))])]),e._v(" "),t("div",{staticClass:"share_container"},[t("span",{staticClass:"share_button",on:{click:e.shareShow}})]),e._v(" "),1==e.shareIsShow?t("div",{staticClass:"share_cover",on:{click:function(s){s.stopPropagation(),e.shareHide(s)}}},[t("span",{staticClass:"share_guide"})]):e._e(),e._v(" "),e._m(0,!1,!1)])},z=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"qrcode"},[t("span",{staticClass:"qrcode_desc"},[e._v("关注葡萄之家，获取答案")]),e._v(" "),t("span",{staticClass:"qrcode_image"})])}],Q={render:U,staticRenderFns:z},F=Q,V=t("VU/8"),W=i,J=V(N,F,!1,W,null,null),M=J.exports;o.a.use(m.a);var G=new m.a({routes:[{path:"/",name:"Home",component:x},{path:"/resolve",name:"Resolve",component:L},{path:"/result",name:"Result",component:M}]}),K={quescountDecrement:function(e){e.quescount++,e.answers.push(e.selectedAns),e.selectedAns=""},quesCompleted:function(e){e.answers.push(e.selectedAns),e.selectedAns=""},liClick:function(e,s){e.selectedAns=s},initialState:function(e){e.quescount=1,e.selectedAns="",e.answers=[]}},P=K,X={nextButtonClick:function(e){var s=e.commit,t=e.state;if(""===t.selectedAns)return void alert("请选择一个答案");t.quescount<t.questions.length?s("quescountDecrement"):(s("quesCompleted"),G.push("/result"))}},Z=X;o.a.use(y.a);var Y=new y.a.Store({state:{quescount:1,selectedAns:"",questions:[{quesId:1,quesTitle:"题目一",quesAns:[{ansCode:"A",ansDescribe:"答案AAAAA"},{ansCode:"B",ansDescribe:"这是答案B"},{ansCode:"C",ansDescribe:"这是正确答案"},{ansCode:"D",ansDescribe:"选D吧，D也不错"}]},{quesId:2,quesTitle:"题目二",quesAns:[{ansCode:"A",ansDescribe:"二题A答案"},{ansCode:"B",ansDescribe:"这是正确答案"},{ansCode:"C",ansDescribe:"C答案也是二题的"},{ansCode:"D",ansDescribe:"选D吧，二题D"}]},{quesId:3,quesTitle:"题目三",quesAns:[{ansCode:"A",ansDescribe:"三题答案AA"},{ansCode:"B",ansDescribe:"选B吧，三题的B"},{ansCode:"C",ansDescribe:"C也是三题的C"},{ansCode:"D",ansDescribe:"这是正确答案"}]},{quesId:4,quesTitle:"题目四",quesAns:[{ansCode:"A",ansDescribe:"四题A答案，简称4A"},{ansCode:"B",ansDescribe:"这是正确答案"},{ansCode:"C",ansDescribe:"C已经是四题的C"},{ansCode:"D",ansDescribe:"D也成了四题的D"}]},{quesId:5,quesTitle:"题目五",quesAns:[{ansCode:"A",ansDescribe:"五题A，最后的A"},{ansCode:"B",ansDescribe:"正确答案是D"},{ansCode:"C",ansDescribe:"D说它是正确答案"},{ansCode:"D",ansDescribe:"这是正确答案"}]}],answers:[],correctAnswers:["C","B","D","B","D"]},getters:{currentQues:function(e){try{return e.questions.find?e.questions.find(function(s){return s.quesId===e.quescount}):e.questions.filter(function(s){return s.quesId===e.quescount})[0]}catch(e){console.log(e.name+":"+e.message)}}},mutations:P,actions:Z}),ee=Y;t("UAgs"),t("r7AC");o.a.config.productionTip=!1,new o.a({el:"#app",router:G,store:ee,template:"<App/>",components:{App:f}})},UAgs:function(e,s){!function(e,s){var t=e.documentElement,n=e.body,a="orientationchange"in window?"orientationchange":"resize",c=function(){var e=t.clientWidth;if(e){if(console.log(e),e>800)return t.style.fontSize="50px",n.style.width="800px",n.style.margin="0 auto",void(n.style.position="relative");t.style.fontSize=e/320*20+"px"}};addEventListener&&(s.addEventListener(a,c),e.addEventListener("DOMContentLoaded",c))}(document,window)},emzW:function(e,s){},mkHe:function(e,s,t){e.exports=t.p+"static/img/home_logo.278774a.png"},nSZi:function(e,s,t){e.exports=t.p+"static/img/bg.a92218b.jpg"},r7AC:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.a696d219f5388c342321.js.map