!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=19)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPopularRepos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:"+e+"&sort=stars&order=desc&type=Repositories");return(0,r.default)(t).then(function(e){return e.json()}).then(function(e){return e.items}).catch(function(e){return console.warn(e),null})};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(13))},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),a=n(6),i=(n(3),n(14));var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchRepos(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){e.match.params.id!==this.props.match.params.id&&this.props.fetchRepos(e.match.params.id)}},{key:"render",value:function(){var e=this.props.repos;return u.default.createElement("ul",{style:{display:"flex",flexWrap:"wrap"}},e.map(function(e){var t=e.name,n=e.owner,r=e.stargazers_count,o=e.html_url;return u.default.createElement("li",{key:t,style:{margin:30}},u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("a",{href:o},t)),u.default.createElement("li",null,"@",n.login),u.default.createElement("li",null,r," stars")))}))}}]),t}();t.default=(0,a.connect)(function(e){return{repos:e.repos}},function(e){return{fetchRepos:function(t){return e((0,i.fetchRepos)(t))}}})(l)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(4)),o=a(n(12)),u=n(14);function a(e){return e&&e.__esModule?e:{default:e}}var i=[{path:"/",exact:!0,component:o.default},{path:"/popular/:id",component:r.default,action:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,u.fetchRepos)(e.split("/").pop())}}];t.default=i},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];return"FETCH_REPOS"===t.type?t.data:e}},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=a(n(8)),u=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}var i=void 0,l=(0,r.combineReducers)({repos:u.default});i=(0,r.createStore)(l,(0,r.applyMiddleware)(o.default)),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement("ul",null,[{name:"All",param:"all"},{name:"JavaScript",param:"javascript"},{name:"Ruby",param:"ruby"},{name:"Python",param:"python"},{name:"Java",param:"java"}].map(function(e){var t=e.name,n=e.param;return r.default.createElement("li",{key:n},r.default.createElement(o.NavLink,{activeStyle:{fontWeight:"bold"},to:"/popular/"+n},t))}))};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),o=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=f(u),i=(f(n(4)),n(1)),l=f(n(5)),c=f(n(10));function f(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(c.default,null),l.default.map(function(e){var t=e.path,n=e.exact,o=e.component,u=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["path","exact","component"]);return a.default.createElement(i.Route,{key:t,path:t,exact:n,render:function(e){return a.default.createElement(o,r({},e,u))}})}))}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement("div",null,"Select a language ")};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0))},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchRepos=function(e){return function(t){return(0,r.fetchPopularRepos)(e).then(function(e){t({type:"FETCH_REPOS",data:e})})}};var r=n(2)},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";var r=d(n(18)),o=d(n(17)),u=d(n(0)),a=n(16),i=n(1),l=n(6),c=d(n(15)),f=d(n(5)),s=d(n(11)),p=d(n(9));function d(e){return e&&e.__esModule?e:{default:e}}var m=(0,r.default)();m.use((0,o.default)()),m.use(r.default.static("public")),m.get("*",function(e,t){var n=f.default.find(function(t){return(0,i.matchPath)(e.url,t)})||{};(n.action?p.default.dispatch(n.action(e.path)):Promise.resolve()).then(function(n){var r=(0,a.renderToString)(u.default.createElement(l.Provider,{store:p.default},u.default.createElement(i.StaticRouter,{location:e.url,context:{data:n}},u.default.createElement(s.default,{data:n})))),o="\n            <!DOCTYPE html>\n            <html>\n                <head>\n                    <title>React SSR</title>\n                    <script>window.__INIT_STATE__ = "+(0,c.default)(p.default.getState())+'<\/script>\n                </head>\n                <body>\n                    <div id="root">'+r+'</div>\n                    <script src="/bundle.js"><\/script>\n                </body>\n            </html>\n        ';t.send(o)})}),m.listen(3e3,function(){console.log("server is listening on port: 3000!")})}]);