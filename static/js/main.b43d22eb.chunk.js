(this.webpackJsonpjbbiomedical=this.webpackJsonpjbbiomedical||[]).push([[0],{40:function(e){e.exports=JSON.parse('[{"Id":1,"Name":"iMAC 120","ImageUrl":"/images/imac120.png","Images":["/images/imac120.png","/images/imac120.png","/images/imac120.png"],"PdfUrl":"/pdf/iMac120.pdf","Description":"Product 1 Description"},{"Id":2,"Name":"iMac 300","ImageUrl":"/images/imac300.png","Images":["/images/imac120.png","/images/imac120.png","/images/imac120.png"],"PdfUrl":"/pdf/iMAC300.pdf","Description":"Product 2 Description"},{"Id":3,"Name":"iMac 1200","ImageUrl":"/images/imac1200.png","Images":["/images/imac120.png","/images/imac120.png","/images/imac120.png"],"PdfUrl":"/pdf/iMAC1200.pdf","Description":"Product 3 Description"},{"Id":4,"Name":"Zoncare","ImageUrl":"/images/zonecareq3.png","Images":["/images/imac120.png","/images/imac120.png","/images/imac120.png"],"PdfUrl":"/pdf/ZONCAREQ3.pdf","Description":"Product 4 Description"}]')},56:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},57:function(e,a,t){e.exports=t(89)},64:function(e,a,t){},82:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),o=t(14),i=t(5);t(62),t(63),t(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(9),m=t(11),u=t(12),d=t(16),p=t(15),h=t(96),g=t(95);var E=function(e){return console.log(e),r.a.createElement(h.a,{bg:"light",expand:"lg"},r.a.createElement(h.a.Brand,{href:"#home"},"JB BIO Med"),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(g.a.Link,{href:"#products"},"Catalogue"),r.a.createElement(g.a.Link,{href:"#contact"},"Contact Us"),r.a.createElement(g.a.Link,{href:"#about"},"About Us"))))},b=t(98),f=t(94),v=t(54),y=t(91),C=t(92),N=t(97),O=t(22),j=(t(82),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;Object(s.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleMessage=n.handleMessage.bind(Object(u.a)(n)),n.handleProductCategory=n.handleProductCategory.bind(Object(u.a)(n)),n.handleProductName=n.handleProductName.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleUserEmail=n.handleUserEmail.bind(Object(u.a)(n)),n.handleUserPhone=n.handleUserPhone.bind(Object(u.a)(n)),n.handleUserName=n.handleUserName.bind(Object(u.a)(n)),n.onChangeCaptcha=n.onChangeCaptcha.bind(Object(u.a)(n)),console.log(e);var r="";console.log(e.match.params.product_name),e.match.params.product_name&&(r=e.match.params.product_name);var c="";console.log(e.match.params.product_category),e.match.params.product_category&&(c=e.match.params.product_category);var l=!1;return""==c||""==r?(c="",r=""):l=!0,console.log(c),console.log(r),n.state={timestamp:"",user_name:"",user_phone:"",user_email:"",message:"",product_name:r,product_category:c,disable_product_fields:l,formSubmitted:!1,processing:!1},n}return Object(m.a)(t,[{key:"onChangeCaptcha",value:function(e){console.log("Captcha value:",e)}},{key:"handleSubmit",value:function(e){var a=this,t=this.state;t.timestamp=this.getCurrentDateTime(),t.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone,this.setState({processing:!0}),this.validateFields(t)?fetch("https://sendmail-nodejs.herokuapp.com/sendmail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(t)}).then((function(e){429==e.status?(a.sendWarningNotifs("Error in submiting contact form.",18e4),a.setState({processing:!1})):a.setState({formSubmitted:!0,processing:!1})})).catch((function(e){console.log(e),a.sendWarningNotifs("Something went wrong!",3e3),a.setState({processing:!1})})):this.setState({processing:!1})}},{key:"validateFields",value:function(e){return null!==e&&void 0!==e&&""!==e.timestamp&&""!==e.user_name&&""!==e.user_email&&""!==e.user_phone&&""!==e.message||(this.sendWarningNotifs("All fileds must be filled!",3e3),!1)}},{key:"getCurrentDateTime",value:function(){var e=new Date,a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getHours(),n=e.getMinutes();n<10&&(n="0"+n);var r="am";return t>12&&(t-=12,r="pm"),a+" "+t+":"+n+r+" "+e.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+e.getFullYear()}},{key:"handleProductName",value:function(e){this.setState({product_name:e.target.value})}},{key:"handleProductCategory",value:function(e){this.setState({product_category:e.target.value})}},{key:"handleUserEmail",value:function(e){this.setState({user_email:e.target.value})}},{key:"handleUserPhone",value:function(e){this.setState({user_phone:e.target.value})}},{key:"handleUserName",value:function(e){this.setState({user_name:e.target.value})}},{key:"handleMessage",value:function(e){this.setState({message:e.target.value})}},{key:"sendWarningNotifs",value:function(e,a){this.createNotification("warning",e,null,a)}},{key:"createNotification",value:function(e,a,t,n){switch(t=null==t?"Close after ".concat(n,"ms"):t,e){case"info":O.NotificationManager.info(a);break;case"success":O.NotificationManager.success(t,a);break;case"warning":O.NotificationManager.warning(t,a,n);break;case"error":O.NotificationManager.error("Error message","Click me!",5e3,(function(){console.log("callback")}))}}},{key:"render",value:function(){return this.state.formSubmitted?this.renderSubmission():r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{currentPage:"products"}),r.a.createElement(O.NotificationContainer,null),r.a.createElement(b.a,null,r.a.createElement(b.a.Header,{as:"h5"},"Inquire"),r.a.createElement(b.a.Body,null,r.a.createElement(f.a,null,r.a.createElement(f.a.Row,null,r.a.createElement(f.a.Group,{as:v.a},r.a.createElement(f.a.Label,null,"Product Name"),r.a.createElement(f.a.Control,{type:"text",value:this.state.product_name,onChange:this.handleProductName,placeholder:"product name",disabled:this.state.disable_product_fields||this.state.processing})),r.a.createElement(f.a.Group,{as:v.a},r.a.createElement(f.a.Label,null,"Product Category"),r.a.createElement(f.a.Control,{type:"ext",value:this.state.product_category,onChange:this.handleProductCategory,placeholder:"Category",disabled:this.state.disable_product_fields||this.state.processing}))),r.a.createElement(f.a.Row,null,r.a.createElement(f.a.Group,{as:v.a,controlId:"formGridName"},r.a.createElement(f.a.Label,null,"Name"),r.a.createElement(f.a.Control,{type:"text",value:this.state.user_name,onChange:this.handleUserName,placeholder:"Enter Name",disabled:this.state.processing})),r.a.createElement(f.a.Group,{as:v.a,controlId:"formGridEmail"},r.a.createElement(f.a.Label,null,"Email"),r.a.createElement(f.a.Control,{type:"email",value:this.state.user_email,onChange:this.handleUserEmail,placeholder:"Enter email",disabled:this.state.processing})),r.a.createElement(f.a.Group,{as:v.a},r.a.createElement(f.a.Label,null,"Phone Number"),r.a.createElement(f.a.Control,{type:"text",value:this.state.user_phone,onChange:this.handleUserPhone,placeholder:"Enter phone number",disabled:this.state.processing}))),r.a.createElement(f.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(f.a.Label,null,"Message"),r.a.createElement(f.a.Control,{as:"textarea",rows:"3",value:this.state.message,onChange:this.handleMessage,disabled:this.state.processing})),r.a.createElement(y.a,{variant:"primary",type:"submit",onClick:this.handleSubmit,disabled:this.state.processing},this.state.processing?this.renderLoading():"Submit")))),r.a.createElement(b.a,null,r.a.createElement(b.a.Header,{as:"h5"},"Contact Details"),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,"Company Address"),r.a.createElement(b.a.Text,null,"A-117, Tirthraj Complex, Opp. V S Hospital, Ellisbridge, Ahmedabad-380006"),r.a.createElement(b.a.Title,null,"Contact Number"),r.a.createElement(b.a.Text,null,"+91 9825065681"),r.a.createElement(y.a,{variant:"primary",href:"whatsapp://send?phone=+919825065681"},"Open on Whatsapp"))))}},{key:"renderLoading",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Processing...")}},{key:"renderSubmission",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{currentPage:"products"}),r.a.createElement(O.NotificationContainer,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"success"},r.a.createElement(N.a.Heading,null,"Thank you for contacting us!"),r.a.createElement("p",null,"Contact form has been submitted based on the contact details, the admin will contact you as soon as possible."),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(o.b,{to:"/products"},r.a.createElement(y.a,{variant:"outline-success"},"View Products")))))}}]),t}(r.a.Component)),k=t(56),P=t.n(k),S=(t(86),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{currentPage:"products"}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:P.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Welcome to JB Bio Medical Equipments Showcase!"),r.a.createElement(o.b,{to:"/products"},"Catalogue"),r.a.createElement(o.b,{to:"/contact"},"Contact Us"))))}}]),t}(r.a.Component)),_=t(40),w=function(){function e(){Object(s.a)(this,e)}return Object(m.a)(e,null,[{key:"getProducts",value:function(){return _}},{key:"getProductById",value:function(e){return _.filter((function(a){return a.Id===e})).pop()}}]),e}(),I=(t(87),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).products=[],e.products=w.getProducts(),e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=[];return this.products.forEach((function(t){a.push(e.getCard(t))})),r.a.createElement("div",null,r.a.createElement(E,{currentPage:"products"}),a)}},{key:"getCard",value:function(e){return r.a.createElement(b.a,{style:{width:"18rem",display:"inline-block"}},r.a.createElement(b.a.Img,{variant:"top",src:"/jb-bio-medical"+e.ImageUrl}),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,e.Name),r.a.createElement(b.a.Text,null,e.Description),r.a.createElement(o.b,{to:"/contact/"+e.Name+"/General"},r.a.createElement(y.a,{variant:"primary"},"Enquire Now"))))}}]),t}(r.a.Component)),U=t(93),M=(t(88),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(s.a)(this,t),n=a.call(this,e),console.log("props"),n.productId=e.match.params.id,console.log(n.productId),n.product=w.getProductById(n.productId),console.log(n.product),n.products=[],n.products=w.getProducts(),n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{currentPage:"products"}),r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product-left-div"},r.a.createElement(U.a,{src:"/jb-bio-medical"+this.product.ImageUrl,height:"100",width:"150",thumbnail:!0}),r.a.createElement("br",null)),r.a.createElement("div",{className:"product-right-div"},r.a.createElement("h3",null,this.product.Name),r.a.createElement("br",null),r.a.createElement("span",{className:"description"},this.product.Description),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"/jb-bio-medical"+this.product.PdfUrl},"pdf version")),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(r.a.Component)),x=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{currentPage:"products"}),r.a.createElement(b.a,null,r.a.createElement(b.a.Header,{as:"h5"},"About Us"),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Text,null,"J B Biomed is a leading brand in dealing with High tech medical and Endoscopy equipemnts/ instruments, Surgical Lasers in all the major discipline."))),r.a.createElement(b.a,null,r.a.createElement(b.a.Header,{as:"h5"},"Mission and Vision"),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Text,null,"Our Mission and vision are to provide high-tech/ minimal invasive surgical and medical equipment at a very economical price. Also will provide the necessary service to maintain the equipment.",r.a.createElement("br",null),"Our contribution to give continuous support and provide academic help to explore more and more advance surgical operative procedures with high-tech equipments at reasonable charges."))))}}]),t}(r.a.Component),A=r.a.createElement(o.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(i.a,{path:"/home",component:S}),r.a.createElement(i.a,{path:"/products",component:I}),r.a.createElement(i.a,{path:"/product/:id",component:M}),r.a.createElement(i.a,{exact:!0,path:"/contact",component:j}),r.a.createElement(i.a,{exact:!0,path:"/about",component:x}),r.a.createElement(i.a,{exact:!0,path:"/contact/:product_name/:product_category",component:j})));l.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.b43d22eb.chunk.js.map