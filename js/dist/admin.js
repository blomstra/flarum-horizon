(()=>{var t={195:(t,r,n)=>{t.exports=n(236)},236:t=>{var r=function(t){"use strict";var r,n=Object.prototype,e=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,n){return t[r]=n}}function c(t,r,n,e){var o=r&&r.prototype instanceof g?r:g,a=Object.create(o.prototype),i=new R(e||[]);return a._invoke=function(t,r,n){var e=m;return function(o,a){if(e===d)throw new Error("Generator is already running");if(e===f){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=L(i,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===m)throw e=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=d;var l=u(t,r,n);if("normal"===l.type){if(e=n.done?f:h,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(e=f,n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var m="suspendedStart",h="suspendedYield",d="executing",f="completed",p={};function g(){}function v(){}function y(){}var b={};l(b,a,(function(){return this}));var z=Object.getPrototypeOf,_=z&&z(z(j([])));_&&_!==n&&e.call(_,a)&&(b=_);var x=y.prototype=g.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function n(o,a,i,s){var l=u(t[o],t,a);if("throw"!==l.type){var c=l.arg,m=c.value;return m&&"object"==typeof m&&e.call(m,"__await")?r.resolve(m.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):r.resolve(m).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,s)}))}s(l.arg)}var o;this._invoke=function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}}function L(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,L(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:r,done:!0}}return v.prototype=y,l(x,"constructor",y),l(y,"constructor",v),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(S.prototype),l(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(r,n,e,o,a){void 0===a&&(a=Promise);var i=new S(c(r,n,e,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),l(x,s,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=j,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return s.type="throw",s.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return n.d(r,{a:r}),r},n.d=(t,r)=>{for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};(()=>{"use strict";n.r(e);const t=flarum.core.compat["admin/app"];var r=n.n(t);function o(t,r){return o=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},o(t,r)}function a(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,o(t,r)}const i=flarum.core.compat["admin/components/ExtensionPage"];var s=n.n(i);const l=flarum.core.compat["common/components/LinkButton"];var c=n.n(l),u=function(t){function n(){return t.apply(this,arguments)||this}return a(n,t),n.prototype.content=function(){var t=r().forum.attribute("adminUrl")+"/horizon";return m("div",{className:"container"},m("div",{className:"HorizonSettingsPage"},m(c(),{icon:"fas fa-external-link-alt",className:"Button",href:t,external:!0,target:"_blank"},r().translator.trans("blomstra-horizon.admin.stats.full_dashboard")),m("hr",null),m("div",{className:"HorizonSettingsPage-settings"},m("div",{className:"Form-group"},m("div",{className:"HorizonSettingsPage-trim"},m("h3",null,r().translator.trans("blomstra-horizon.admin.settings.trim_title")),m("p",{className:"helpText"},r().translator.trans("blomstra-horizon.admin.settings.trim_help")),this.buildSettingComponent({setting:"blomstra-horizon.trim.recent",type:"number",label:r().translator.trans("blomstra-horizon.admin.settings.trim_recent"),help:r().translator.trans("blomstra-horizon.admin.settings.trim_recent_help")}),this.buildSettingComponent({setting:"blomstra-horizon.trim.pending",type:"number",label:r().translator.trans("blomstra-horizon.admin.settings.trim_pending"),help:r().translator.trans("blomstra-horizon.admin.settings.trim_pending_help")}),this.buildSettingComponent({setting:"blomstra-horizon.trim.completed",type:"number",label:r().translator.trans("blomstra-horizon.admin.settings.trim_completed"),help:r().translator.trans("blomstra-horizon.admin.settings.trim_completed_help")}),this.buildSettingComponent({setting:"blomstra-horizon.trim.recent_failed",type:"number",label:r().translator.trans("blomstra-horizon.admin.settings.trim_recent_failed"),help:r().translator.trans("blomstra-horizon.admin.settings.trim_recent_failed_help")}),this.buildSettingComponent({setting:"blomstra-horizon.trim.failed",type:"number",label:r().translator.trans("blomstra-horizon.admin.settings.trim_failed"),help:r().translator.trans("blomstra-horizon.admin.settings.trim_failed_help")}),this.buildSettingComponent({setting:"blomstra-horizon.trim.monitored",type:"number",label:r().translator.trans("blomstra-horizon.admin.settings.trim_monitored"),help:r().translator.trans("blomstra-horizon.admin.settings.trim_monitored_help")})),m("br",null),this.submitButton()))))},n}(s());const h=flarum.core.compat["common/extend"],d=flarum.core.compat["admin/components/StatusWidget"];var f=n.n(d);const p=flarum.core.compat["admin/components/DashboardPage"];var g=n.n(p);function v(t,r,n,e,o,a,i){try{var s=t[a](i),l=s.value}catch(t){return void n(t)}s.done?r(l):Promise.resolve(l).then(e,o)}var y=n(195),b=n.n(y);const z=flarum.core.compat["admin/components/DashboardWidget"];var _=n.n(z);const x=flarum.core.compat["common/components/LoadingIndicator"];var w=n.n(x);const S=flarum.core.compat["common/components/Button"];var L=n.n(S);const E=flarum.core.compat["common/components/Tooltip"];var N=n.n(E);const R=flarum.core.compat["common/components/Switch"];var j=n.n(R);const O=flarum.core.compat["common/helpers/icon"];var P=n.n(O),k=function(t){function n(){for(var r,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(r=t.call.apply(t,[this].concat(e))||this).loading=!0,r.data={},r.autoRefreshEnabled=!1,r.autoRefreshInterval=void 0,r}a(n,t);var e=n.prototype;return e.oncreate=function(r){t.prototype.oncreate.call(this,r),this.loadHorizonStats()},e.onremove=function(){this.clearAutoRefresh()},e.loadHorizonStats=function(){var t,n=(t=b().mark((function t(){var n;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,m.redraw(),t.next=4,r().request({method:"GET",url:r().forum.attribute("adminUrl")+"/horizon/api/stats"});case 4:n=t.sent,this.data=n,this.loading=!1,m.redraw();case 8:case"end":return t.stop()}}),t,this)})),function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function i(t){v(a,e,o,i,s,"next",t)}function s(t){v(a,e,o,i,s,"throw",t)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),e.toggleAutoRefresh=function(t){this.autoRefreshEnabled=t,t?this.setAutoRefresh():this.clearAutoRefresh()},e.setAutoRefresh=function(){var t=this;this.clearAutoRefresh(),this.autoRefreshInterval=setInterval((function(){return t.loadHorizonStats()}),5e3)},e.clearAutoRefresh=function(){this.autoRefreshInterval&&(clearInterval(this.autoRefreshInterval),this.autoRefreshInterval=void 0)},e.className=function(){return"HorizonStatsWidget"},e.content=function(){var t=this;return m("div",{className:"HorizonStatsWidget-container"},m("div",{className:"HorizonStatsWidget-header"},m("h4",{className:"HorizonStatsWidget-title"},r().translator.trans("blomstra-horizon.admin.stats.heading")),m("div",{className:"HorizonStatsWidget-controls"},m(N(),{text:r().translator.trans("blomstra-horizon.admin.stats.refresh")},m(L(),{className:"Button Button--icon",icon:"fas fa-sync-alt",onclick:function(){return t.loadHorizonStats()},disabled:this.loading||this.autoRefreshEnabled})),m(c(),{className:"Button",icon:"fas fa-external-link-alt",href:r().forum.attribute("adminUrl")+"/horizon",target:"_blank",external:!0},r().translator.trans("blomstra-horizon.admin.stats.full_dashboard")))),m("div",{className:"HorizonStatsWidget-grid"},this.renderStatsSection()),m("div",{className:"HorizonStatsWidget-footer"},m(j(),{state:this.autoRefreshEnabled,onchange:this.toggleAutoRefresh.bind(this),loading:this.loading},r().translator.trans("blomstra-horizon.admin.stats.auto_refresh"))))},e.renderStatsSection=function(){var t,n,e=this.data,o=e.jobsPerMinute,a=e.recentJobs,i=e.recentlyFailed,s=e.status,l=e.processes,c=e.queueWithMaxRuntime,u=e.queueWithMaxThroughput,h=null!=(t=this.data.redis_stats)?t:{};return m("[",null,this.renderStatusIndicator(s),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.redis-used-memory"),h.memory_used),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.redis-peak-memory"),h.memory_peak),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.redis-max-memory"),null!=(n=h.memory_max)?n:"auto"),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.redis-cpu-user"),h.cpu_user+"%"),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.redis-cpu-sys"),h.cpu_sys+"%"),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.jobs-per-minute"),o),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.jobs-past-hour"),a),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.failed-last-seconds"),i),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.total-processes"),l),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.max-wait-time"),"-"),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.max-runtime"),null!=c?c:"-"),this.renderStat(r().translator.trans("blomstra-horizon.admin.stats.data.max-throughput"),null!=u?u:"-"))},e.renderStat=function(t,r){return m("div",{className:"HorizonStatsWidget-stat"},m("small",null,t),m("p",null,r||!this.loading?r:m(w(),{size:"small",display:"inline"})))},e.renderStatusIndicator=function(t){var n="running"===t?"fas fa-check-circle text-success":"fas fa-times-circle text-danger";return m("div",{className:"HorizonStatsWidget-stat"},m("small",null,r().translator.trans("blomstra-horizon.admin.stats.data.status.label")),m("p",null,P()(n)," ",t?r().translator.trans("blomstra-horizon.admin.stats.data.status."+t):""))},n}(_());r().initializers.add("blomstra/horizon",(function(){r().extensionData.for("blomstra-horizon").registerPage(u),(0,h.extend)(f().prototype,"items",(function(t){t.add("version-redis",[m("strong",null,"Redis"),m("br",null),r().data.redisVersion],75)})),(0,h.extend)(g().prototype,"availableWidgets",(function(t){t.add("horizon-stats",m(k,null),30)}))}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map