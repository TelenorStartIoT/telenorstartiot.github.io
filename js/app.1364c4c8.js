(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"163a":function(t,e,a){"use strict";var n=a("8189"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=a("8c4f"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{staticClass:"mb-12",attrs:{cols:"12"}},[a("app-intro")],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-mqtt")],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-coap")],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-coap"}},[n("div",{staticClass:"display-3 text-center font-weight-light mb-12"},[t._v("CoAP")]),n("v-card",{attrs:{color:"#18aaf8",dark:""}},[n("v-card-text",{staticClass:"white--text intro"},[n("a",{staticClass:"white--text font-weight-bold",attrs:{href:"#",target:"_new"}},[t._v("CoAP"),n("v-icon",{staticClass:"mx-1",attrs:{small:""}},[t._v("mdi-open-in-new")])],1),t._v("is lightweight, built on UDP and resembles the HTTP protocol. You can send requests to "),n("b",[t._v("endpoints")]),t._v(" with different "),n("b",[t._v("methods")]),t._v(". CoAP messages go trough the Telenor "),n("b",[t._v("IoT Gateway")]),t._v(", which forwards messages to Telenor Managed IoT Cloud (MIC). Both non-confirmable and confirmable frames for reliable and acknowledgeable transfer is supported."),n("br"),n("br"),t._v("This is an alternative for devices that may not support a full TCP/IP stack or lack encryption capabilities. Data is transported in a secure VPN to the IoT platform without exposing devices or data traffic to the internet. Authentication towards the IoT platform is handled by the mobile network, eliminating this as a separate process from the devices with X.509 certificates."),n("v-divider",{staticClass:"my-6"}),n("v-img",{staticClass:"my-6",attrs:{src:a("6592"),width:"60%",contain:""}})],1)],1),n("v-card",[n("v-simple-table",{staticClass:"mt-6",scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Configuration")]),n("th",{staticClass:"text-left"},[t._v("Value")])])]),n("tbody",[n("tr",[n("td",[t._v("APN")]),n("td",[n("b",[t._v("telenor.iotgw")]),n("kbd",{staticClass:"ml-3"},[t._v("Separate VPN towards the IoT platform")])])]),n("tr",[n("td",[t._v("IP")]),n("td",[n("b",[t._v("172.16.32.1")])])]),n("tr",[n("td",[t._v("Port")]),n("td",[n("b",[t._v("5683")])])]),n("tr",[n("td",[t._v("Endpoint")]),n("td",[n("b",[t._v("/request/uri")])])]),n("tr",[n("td",[t._v("Method")]),n("td",[n("b",[t._v("POST")])])])])]},proxy:!0}])})],1),n("v-card",{staticClass:"mt-6"},[n("v-tabs",{attrs:{"background-color":"secondary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v("MicroPython")])],1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("vue-code-highlight",[n("pre",[t._v("import microcoapy\n\ndef callback(self, packet, sender):\n  print('Message received:', packet, ', from: ', sender)\n  print('Mesage payload: ', packet.payload.decode('unicode_escape'))\n\nclient = microcoapy.Coap()\nclient.resposeCallback = callback\nclient.start()\n\nclient.post('172.16.32.1', 5683, '/request/uri', 'payload')\nclient.poll(2000)")])])],1)],1)],1)],1)},c=[],l=a("d36c"),d={name:"AppCoap",components:{VueCodeHighlight:l["a"]},data:function(){return{tab:null}}},u=d,p=(a("5dfb"),a("2877")),v=a("6544"),f=a.n(v),m=a("b0af"),h=a("99d9"),b=a("ce7e"),g=a("132d"),w=a("adda"),_=a("1f4f"),C=a("71a3"),y=a("c671"),T=a("fe57"),x=a("aac8"),k=Object(p["a"])(u,i,c,!1,null,"3b2bd102",null),S=k.exports;f()(k,{VCard:m["a"],VCardText:h["a"],VDivider:b["a"],VIcon:g["a"],VImg:w["a"],VSimpleTable:_["a"],VTab:C["a"],VTabItem:y["a"],VTabs:T["a"],VTabsItems:x["a"]});var V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-header"}},[n("div",{staticClass:"d-flex justify-center"},[n("a",{attrs:{href:"https://startiot.telenor.com/"}},[n("img",{staticClass:"my-6",attrs:{src:a("6868"),width:"200"}})])])])},I=[],P={name:"AppHeader",data:function(){return{}}},A=P,M=(a("163a"),Object(p["a"])(A,V,I,!1,null,"0e356494",null)),O=M.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app-intro"}},[a("v-card",{attrs:{color:"amber"}},[a("v-card-text",{staticClass:"text-center"},[t._v("Telenor Managed IoT Cloud (MIC) supports two data transport protocols which must be implemented by IoT devices. Transport protocols are connectivity agnostic, although we do not recomment using NB-IoT with MQTT. For constrained NB-IoT devices, MQTT adds additional overhead in terms of battery and data consumption with SSL and TCP. NB-IoT can in challenging conditions have a latency of 10 seconds, which is not well suited for TCP.")])],1)],1)},N=[],E={name:"AppIntro",data:function(){return{}}},q=E,F=Object(p["a"])(q,j,N,!1,null,"24c78b58",null),H=F.exports;f()(F,{VCard:m["a"],VCardText:h["a"]});var $=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-mqtt"}},[n("div",{staticClass:"display-3 text-center font-weight-light mb-12"},[t._v("MQTT")]),n("v-card",{attrs:{color:"#18aaf8",dark:""}},[n("v-card-text",{staticClass:"white--text intro"},[n("a",{staticClass:"white--text font-weight-bold",attrs:{href:"http://mqtt.org/",target:"_new"}},[t._v("MQTT"),n("v-icon",{staticClass:"mx-1",attrs:{small:""}},[t._v("mdi-open-in-new")])],1),t._v("is a many-to-many messaging protocol widely used by IoT devices. You can "),n("b",[t._v("publish")]),t._v(" messages to "),n("b",[t._v("topics")]),t._v(" which then clients can "),n("b",[t._v("subscribe")]),t._v(" to. The MQTT broker is based on "),n("a",{staticClass:"white--text font-weight-bold",attrs:{href:"https://aws.amazon.com/iot/",target:"_new"}},[t._v("AWS IoT"),n("v-icon",{staticClass:"mx-1",attrs:{small:""}},[t._v("mdi-open-in-new")])],1),t._v("and you can make full use of "),n("a",{staticClass:"white--text font-weight-bold",attrs:{href:"https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html",target:"_new"}},[t._v("device shadows"),n("v-icon",{staticClass:"mx-1",attrs:{small:""}},[t._v("mdi-open-in-new")])],1),t._v("."),n("br"),n("br"),t._v("Since data is transferred over the open internet, security is achieved by encrypting traffic using "),n("a",{staticClass:"white--text font-weight-bold",attrs:{href:"https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html",target:"_new"}},[t._v("X.509 client certificates"),n("v-icon",{staticClass:"mx-1",attrs:{small:""}},[t._v("mdi-open-in-new")])],1),t._v("or "),n("a",{staticClass:"white--text font-weight-bold",attrs:{href:"https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html",target:"_new"}},[t._v("AWS Signature Version 4"),n("v-icon",{staticClass:"mx-1",attrs:{small:""}},[t._v("mdi-open-in-new")])],1),t._v(". Different MQTT topic structures apply based on the chosen encryption method."),n("v-divider",{staticClass:"my-6"}),n("v-img",{staticClass:"my-6",attrs:{src:a("d49d"),width:"60%",contain:""}})],1)],1),n("v-card",{staticClass:"mt-6"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Configuration")]),n("th",{staticClass:"text-left"},[t._v("Value")])])]),n("tbody",[n("tr",[n("td",[t._v("APN")]),n("td",[n("b",[t._v("telenor.iot")]),n("kbd",{staticClass:"ml-3"},[t._v("Full internet access")])])]),n("tr",[n("td",[t._v("Host")]),n("td",[n("b",[t._v("a15nxxwvsld4o-ats.iot.eu-west-1.amazonaws.com")])])]),n("tr",[n("td",[t._v("Port")]),n("td",[n("b",[t._v("8883")]),n("kbd",{staticClass:"ml-3"},[t._v("MQTT over TLS with X.509 certificate authentication")])])]),n("tr",[n("td",[t._v("Port")]),n("td",[n("b",[t._v("443")]),n("kbd",{staticClass:"ml-3"},[t._v("MQTT over WebSocket/TLS with SigV4 authentication")])])])])]},proxy:!0}])})],1),n("v-card",{staticClass:"mt-6"},[n("v-tabs",{attrs:{"background-color":"secondary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v("Node.js")]),n("v-tab",[t._v("Node.js (SigV4)")])],1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("vue-code-highlight",[n("pre",[t._v("const awsIot = require('aws-iot-device-sdk');\nconst thingName = '00000XXX';\n\nconst device = awsIot.device({\n   keyPath: 'privkey.pem',\n  certPath: 'cert.pem',\n    caPath: 'ca.pem',\n      host: 'a15nxxwvsld4o-ats.iot.eu-west-1.amazonaws.com',\n      port: 8883,\n  clientId: thingName\n});\n\ndevice.on('connect', () => {\n  device.subscribe(`$aws/things/${thingName}/shadow/update`);\n});\n\ndevice.on('message', (topic, message) => {\n  console.log('Message: ', topic, message.toString());\n});")])])],1),n("v-tab-item",[n("vue-code-highlight",[n("pre",[t._v("const awsIot = require('aws-iot-device-sdk');\nconst thingName = '00000XXX';\n\nconst device = awsIot.device({\n      protocol: 'wss',\n   accessKeyId: AWS_ACCESS_KEY_ID,\n     secretKey: AWS_SECRET_ACCESS_KEY,\n  sessionToken: AWS_SESSION_TOKEN,\n          host: 'a15nxxwvsld4o-ats.iot.eu-west-1.amazonaws.com',\n          port: 443,\n      clientId: thingName\n});\n\ndevice.on('connect', () => {\n  device.subscribe(`thing-update/My/Domain/Path/#`);\n});\n\ndevice.on('message', (topic, message) => {\n  console.log('Message: ', topic, message.toString());\n});")])])],1)],1)],1)],1)},X=[],Q={name:"AppMqtt",components:{VueCodeHighlight:l["a"]},data:function(){return{tab:null}}},z=Q,D=(a("d478"),Object(p["a"])(z,$,X,!1,null,"024f8dfe",null)),B=D.exports;f()(D,{VCard:m["a"],VCardText:h["a"],VDivider:b["a"],VIcon:g["a"],VImg:w["a"],VSimpleTable:_["a"],VTab:C["a"],VTabItem:y["a"],VTabs:T["a"],VTabsItems:x["a"]});var W={name:"Home",components:{AppIntro:H,AppMqtt:B,AppCoap:S}},K=W,Y=a("62ad"),L=a("a523"),J=a("0fd9"),R=Object(p["a"])(K,s,r,!1,null,"5529b10d",null),G=R.exports;f()(R,{VCol:Y["a"],VContainer:L["a"],VRow:J["a"]}),n["a"].use(o["a"]);var U=[{path:"/",name:"home",component:G}],Z=new o["a"]({mode:"history",base:"/",routes:U}),tt=Z,et=a("2f62");n["a"].use(et["a"]);var at=new et["a"].Store({state:{},mutations:{},actions:{},modules:{}}),nt=(a("4717"),a("d5e8"),a("5363"),a("79b0"),a("f309"));n["a"].use(nt["a"]);var ot=new nt["a"]({theme:{themes:{light:{primary:"#18aaf8",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),st=a("9483");Object(st["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.showHeader?a("app-header"):t._e(),a("v-content",[a("router-view")],1)],1)},it=[],ct={name:"App",components:{AppHeader:O},data:function(){return{showHeader:!0}},mounted:function(){this.showHeader=!this.$route.query.hasOwnProperty("noheader")}},lt=ct,dt=(a("e01d"),a("7496")),ut=a("a75b"),pt=Object(p["a"])(lt,rt,it,!1,null,"9725f1b0",null),vt=pt.exports;f()(pt,{VApp:dt["a"],VContent:ut["a"]}),n["a"].config.productionTip=!1,new n["a"]({router:tt,store:at,vuetify:ot,render:function(t){return t(vt)}}).$mount("#app")},"5dfb":function(t,e,a){"use strict";var n=a("613d"),o=a.n(n);o.a},"613d":function(t,e,a){},6592:function(t,e,a){t.exports=a.p+"img/coap.8e023a97.svg"},6868:function(t,e,a){t.exports=a.p+"img/startiot-black.1f0a7264.svg"},"79b0":function(t,e,a){},8189:function(t,e,a){},8241:function(t,e,a){},d478:function(t,e,a){"use strict";var n=a("8241"),o=a.n(n);o.a},d49d:function(t,e,a){t.exports=a.p+"img/mqtt.3c2eff33.svg"},e01d:function(t,e,a){"use strict";var n=a("eb08"),o=a.n(n);o.a},eb08:function(t,e,a){}});
//# sourceMappingURL=app.1364c4c8.js.map