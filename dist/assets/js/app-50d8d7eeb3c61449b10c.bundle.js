webpackJsonp([1],{133:function(e,t,n){"use strict";var o=u(n(2)),r=u(n(7)),a=u(n(144));function u(e){return e&&e.__esModule?e:{default:e}}n(176),r.default.render(o.default.createElement(a.default,null),document.getElementById("cryptologg"))},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(2)),r=c(n(145)),a=c(n(151)),u=c(n(152)),l=c(n(172)),i=c(n(175));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return o.default.createElement("div",null,o.default.createElement(r.default,null),o.default.createElement("main",null,o.default.createElement(a.default,null),o.default.createElement(u.default,null),o.default.createElement(l.default,null)),o.default.createElement(i.default,null))}},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2),a=l(r),u=l(n(146));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleAbout=n.toggleAbout.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"toggleAbout",value:function(){this.popup.togglePopup()}},{key:"render",value:function(){var e=this,t=["📉","📈"][Math.floor(2*Math.random())],n=a.default.createElement("span",{className:"popup__emoji"},"🙋‍♂️"),o=a.default.createElement("p",{className:"popup__text"},"CryptoLogg was built by ",a.default.createElement("a",{className:"popup__link",href:"http://thomasvaeth.com",target:"_blank",rel:"noopener noreferrer"},"Thomas Vaeth")," in Seattle, Washington. Thomas was feeling losses significantly more than gains and CryptoLogg is his way of coming to grip with his emotional liability.");return a.default.createElement("div",null,a.default.createElement("header",{className:"header"},a.default.createElement("span",{className:"header__img"},t),a.default.createElement("span",{className:"header__popup",onClick:this.toggleAbout},"About")),a.default.createElement(u.default,{ref:function(t){return e.popup=t},leftContent:n,rightContent:o}))}}]),t}();t.default=i},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2),a=l(r),u=l(n(147));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={popup:!1},n.togglePopup=n.togglePopup.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",function(t){e.state.popup&&27===t.which&&e.togglePopup()}),this.popup.addEventListener("click",function(t){e.popupContainer.contains(t.target)||e.togglePopup()})}},{key:"togglePopup",value:function(){this.setState(function(e){return{popup:!e.popup}})}},{key:"render",value:function(){var e=this;return a.default.createElement("div",null,a.default.createElement("section",{className:"popup "+(this.state.popup?"popup-open":""),ref:function(t){return e.popup=t}},a.default.createElement("div",{className:"popup__close"},a.default.createElement("div",null)),a.default.createElement("div",{className:"popup__container",ref:function(t){return e.popupContainer=t}},a.default.createElement("div",{className:"popup__subcontainer section-padding"},this.props.leftContent),a.default.createElement("div",{className:"popup__content"},this.props.rightContent))))}}]),t}();i.propTypes={leftContent:u.default.object,rightContent:u.default.object},t.default=i},147:function(e,t,n){e.exports=n(148)()},148:function(e,t,n){"use strict";var o=n(3),r=n(149),a=n(150);e.exports=function(){function e(e,t,n,o,u,l){l!==a&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},149:function(e,t,n){"use strict";var o=function(e){};e.exports=function(e,t,n,r,a,u,l,i){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,a,u,l,i],f=0;(c=new Error(t.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},150:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(2),a=(o=r)&&o.__esModule?o:{default:o};t.default=function(){return a.default.createElement("section",{className:"mast section-padding"},a.default.createElement("div",{className:"grid"},a.default.createElement("p",{className:"mast__text"},"CryptoLogg only shows the price change of cryptocurrencies since the last time you checked. This is to discourage you from checking the values of your investments often. 💸")))}},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2),a=l(r),u=l(n(8));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={crypto:{},currency:!0},n.toggleCurrency=n.toggleCurrency.bind(n),n.crypto=[{name:"Bitcoin",symbol:"BTC"},{name:"Ethereum",symbol:"ETH"},{name:"Ripple",symbol:"XRP"},{name:"Bitcoin Cash",symbol:"BCH"},{name:"Cardano",symbol:"ADA"},{name:"Litecoin",symbol:"LTC"},{name:"NEM",symbol:"XEM"},{name:"Stellar",symbol:"XLM"},{name:"IOTA",symbol:"IOT"},{name:"Dash",symbol:"DASH"},{name:"NEO",symbol:"NEO"},{name:"TRON",symbol:"TRX"}],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("currency");null!==t&&this.setState({currency:JSON.parse(t)});var n=this.crypto.map(function(e){return e.symbol}).join(",");this.spotPrice(n),document.addEventListener("visibilitychange",function(){"visible"===document.visibilityState&&e.spotPrice(n)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("currency",this.state.currency)}},{key:"spotPrice",value:function(e){var t=this;u.default.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms="+e+"&tsyms=USD").then(function(e){var n=e.data,o={};Object.keys(n).map(function(e,r){var a=e.toLowerCase(),u=n[e].USD;o[e]={lastValue:localStorage.getItem(a+"LastValue"),currentValue:u,title:t.crypto[r].name},localStorage.setItem(a+"LastValue",u)}),t.setState({crypto:o})}).catch(function(e){console.log(e)})}},{key:"marketChange",value:function(){var e=this,t=function(e){return e[Math.floor(Math.random()*e.length)]},n=function(e){return"$"+Number(Math.abs(e)).toFixed(2)},o=function(e){return Number(Math.abs(e)).toFixed(4)+"%"},r=["🤑","😎","😋","😍"],a=["🤔","😶","🙃"],u=["😵","😥","🤢","🙄","😤"];return Object.keys(this.state.crypto).map(function(l){var i=e.state.crypto[l],c=i.lastValue,s=i.currentValue,f=i.title,p="",d="";if(!i.lastValue){var m=t(r),y=e.state.currency?n(i.currentValue):"Infinity%";return e.cards(l,m,f,y)}var h=e.state.currency?s-c:(s-c)/c*100;return h>0?(p=t(r),d=e.state.currency?n(h):o(h)):h<0?(p=t(u),d=e.state.currency?"–"+n(h):"–"+o(h)):(p=t(a),d=e.state.currency?"$0.00":"0%"),e.cards(l,p,f,d)})}},{key:"cards",value:function(e,t,n,o){return a.default.createElement("div",{className:"crypto__subcontainer",key:e},a.default.createElement("div",{className:"crypto__content"},a.default.createElement("span",{className:"crypto__emoji"},t),a.default.createElement("h2",{className:"crypto__title"},n),a.default.createElement("span",{className:"crypto__value",onClick:this.toggleCurrency},o)))}},{key:"toggleCurrency",value:function(){this.setState(function(e){return{currency:!e.currency}})}},{key:"render",value:function(){return a.default.createElement("section",{className:"crypto section-padding"},a.default.createElement("div",{className:"grid-xlarge"},a.default.createElement("div",{className:"crypto__container"},this.marketChange())),a.default.createElement("div",{className:"crypto__format"},a.default.createElement("span",{className:"crypto__button "+(this.state.currency?"active":""),onClick:this.toggleCurrency},a.default.createElement("span",null,"$")),a.default.createElement("span",{className:"crypto__button "+(this.state.currency?"":"active"),onClick:this.toggleCurrency},a.default.createElement("span",null,"%"))))}}]),t}();t.default=i},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2),a=l(r),u=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={time:"a few seconds"},n.time=n.time.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;this.time(),document.addEventListener("visibilitychange",function(){"visible"===document.visibilityState&&e.time()})}},{key:"time",value:function(){var e=(0,u.default)().toISOString(),t=localStorage.getItem("lastChecked"),n=u.default.duration((0,u.default)(e).diff((0,u.default)(t))).humanize();localStorage.setItem("lastChecked",e),this.setState({time:t?n:this.state.time})}},{key:"quote",value:function(){var e=[{author:"Warren Buffet",quote:"Buy, hold, and don't watch the market closely"},{author:"Nicholas Taleb",quote:"Over a short time increment, one observes the variability of the portfolio, not the returns"},{author:"Allan Mecham",quote:"Continual performance monitoring is not good for your mental health or for your portfolio’s well-being"},{author:"Nicholas Taleb",quote:"Daily exposure to such high degrees of randomness without much control will have physiological effects on humans"},{author:"Daniel Kahneman",quote:"Losses look larger than gains"},{author:"Allan Mecham",quote:"Almost all investors experience more pain and anguish from losses than they do pleasure from gains"}];return e[Math.floor(Math.random()*e.length)]}},{key:"render",value:function(){var e=this.quote();return a.default.createElement("section",{className:"time section-padding"},a.default.createElement("div",{className:"grid"},a.default.createElement("p",{className:"time__text"},e.author," said, “",e.quote,",” but the last time you checked your portfolio was ",this.state.time," ago. ⏳")))}}]),t}();t.default=i},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(2)),r=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=(0,r.default)().year();return o.default.createElement("footer",{className:"footer"},o.default.createElement("span",{className:"footer__text"},"Coded With Code in ",e,". 👨‍💻"))}},176:function(e,t){}},[133]);