(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),o=a(9),r=a.n(o),s=(a(15),a(10)),i=a(2),d=a(3),b=a(5),u=a(4),l=a(7),j=a.n(l),p=a(0),h=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.setFeedBack;return Object(p.jsxs)("div",{className:j.a.wrapper,children:[Object(p.jsx)("button",{className:"".concat(j.a.button," ").concat(j.a.good),type:"button",name:"good",onClick:t,children:"Good"}),Object(p.jsx)("button",{className:"".concat(j.a.button," ").concat(j.a.neutral),type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(p.jsx)("button",{className:"".concat(j.a.button," ").concat(j.a.bad),type:"button",name:"bad",onClick:t,children:"Bad"})]})}}]),a}(n.Component),O=h,k=a(6),g=a.n(k),v=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.good,a=t.neutral,n=t.bad,c=t.total,o=t.positivePercentage;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{className:g.a.description,children:["Good: ",e]}),Object(p.jsxs)("p",{className:g.a.description,children:["Neutral: ",a]}),Object(p.jsxs)("p",{className:g.a.description,children:["Bad: ",n]}),Object(p.jsxs)("p",{className:g.a.description,children:["Total: ",c()]}),Object(p.jsxs)("p",{className:o()>50?"".concat(g.a.description," ").concat(g.a.good):"".concat(g.a.description," ").concat(g.a.bad),children:["Percentage: ",o()," %"]})]})}}]),a}(n.Component),f=v,m=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.title,a=t.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:e}),a]})}}]),a}(n.Component),x=m,_=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.message;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("p",{children:t})})}}]),a}(n.Component),F=_,y=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).handleClickButton=function(e){var a=e.currentTarget.name;t.setState((function(t){return Object(s.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return Math.floor(e/t.countTotalFeedback()*100)},t.state={good:0,neutral:0,bad:0},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{title:"Please Leave Feedback",children:Object(p.jsx)(O,{setFeedBack:this.handleClickButton})}),this.countTotalFeedback()>0?Object(p.jsx)(x,{title:"Statistics",children:Object(p.jsx)(f,{good:e,neutral:a,bad:n,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})}):Object(p.jsx)(F,{message:"No feedback given"})]})}}]),a}(n.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))},6:function(t,e,a){t.exports={description:"Statistics_description__3ZAJy",good:"Statistics_good__3Sx--",bad:"Statistics_bad__1_YPk"}},7:function(t,e,a){t.exports={wrapper:"Feedback_wrapper__32UAs",button:"Feedback_button__31mW4",good:"Feedback_good__2T6tC",neutral:"Feedback_neutral__32JXP",bad:"Feedback_bad__2C_xG"}}},[[17,1,2]]]);
//# sourceMappingURL=main.7543415c.chunk.js.map