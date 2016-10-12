webpackJsonp([16,197],{612:function(n,a,s){n.exports={banner:s(1356),basic:s(1357),closable:s(1358),"close-text":s(1359),description:s(1360),icon:s(1361),style:s(1362)}},1356:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(102),s(101)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u7528\u4f5c\u9876\u90e8\u516c\u544a\u65f6\uff0c\u9ed8\u8ba4\u6709\u56fe\u6807\uff0c",["code","type"]," \u4e3a 'warning'\uff0c\u5e76\u6709\u7279\u6b8a\u6837\u5f0f\u3002"]],"en-US":[["p","When ",["code","Alert"]," is used as banner, it has particular style, Icon and ",["code","type"],"(warning) are specified by default."]]},meta:{order:6,title:{"zh-CN":"\u9876\u90e8\u516c\u544a","en-US":"Banner"},filename:"components/alert/demo/banner.md",id:"components-alert-demo-banner"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Warning</span> <span class="token attr-name" >text"</span> <span class="token attr-name" >banner</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Very</span> <span class="token attr-name" >long</span> <span class="token attr-name" >warning</span> <span class="token attr-name" >text</span> <span class="token attr-name" >warning</span> <span class="token attr-name" >text</span> <span class="token attr-name" >text</span> <span class="token attr-name" >text</span> <span class="token attr-name" >text</span> <span class="token attr-name" >text</span> <span class="token attr-name" >text</span> <span class="token attr-name" >text"</span> <span class="token attr-name" >banner</span> <span class="token attr-name" >closable</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],{message:"Warning text",banner:!0}),c["default"].createElement("br",null),c["default"].createElement(p["default"],{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}))}}},1357:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(102),s(101)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u9002\u7528\u4e8e\u7b80\u77ed\u7684\u8b66\u544a\u63d0\u793a\u3002"]],"en-US":[["p","The simplest usage for short messages."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/alert/demo/basic.md",id:"components-alert-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Success</span> <span class="token attr-name" >Text"</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(p["default"],{message:"Success Text",type:"success"})}}},1358:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(102),s(101)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u663e\u793a\u5173\u95ed\u6309\u94ae\uff0c\u70b9\u51fb\u53ef\u5173\u95ed\u8b66\u544a\u63d0\u793a\u3002"]],"en-US":[["p","To show close button."]]},meta:{order:2,title:{"zh-CN":"\u53ef\u5173\u95ed\u7684\u8b66\u544a\u63d0\u793a","en-US":"Closable"},filename:"components/alert/demo/closable.md",id:"components-alert-demo-closable"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> onClose <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>e<span class="token punctuation" >,</span> <span class="token string" >\'I was closed.\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Warning</span> <span class="token attr-name" >Text</span> <span class="token attr-name" >Warning</span> <span class="token attr-name" >Text</span> <span class="token attr-name" >Warning</span> <span class="token attr-name" >TextW</span> <span class="token attr-name" >arning</span> <span class="token attr-name" >Text</span> <span class="token attr-name" >Warning</span> <span class="token attr-name" >Text</span> <span class="token attr-name" >Warning</span> <span class="token attr-name" >TextWarning</span> <span class="token attr-name" >Text"</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >closable</span>\n    <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onClose<span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Error</span> <span class="token attr-name" >Text"</span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Error</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Error</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Error</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Error</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Error</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Error</span> <span class="token attr-name" >Description"</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >closable</span>\n    <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onClose<span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){console.log(n,"I was closed.")};return c["default"].createElement("div",null,c["default"].createElement(p["default"],{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:n}),c["default"].createElement(p["default"],{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:n}))}}},1359:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(102),s(101)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5173\u95ed\uff0c\u81ea\u5b9a\u4e49\u7684\u6587\u5b57\u4f1a\u66ff\u6362\u539f\u5148\u7684\u5173\u95ed ",["code","Icon"],"\u3002"]],"en-US":[["p","Replace the default icon with customized text."]]},meta:{order:5,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u5173\u95ed","en-US":"Customized Close Text"},filename:"components/alert/demo/close-text.md",id:"components-alert-demo-close-text"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Info</span> <span class="token attr-name" >Text"</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span> <span class="token attr-name" >closeText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Close</span> <span class="token attr-name" >Now"</span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(p["default"],{message:"Info Text",type:"info",closeText:"Close Now"})}}},1360:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(102),s(101)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u542b\u6709\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u7684\u8b66\u544a\u63d0\u793a\u3002"]],"en-US":[["p","Additional description for alert message."]]},meta:{order:3,title:{"zh-CN":"\u542b\u6709\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd","en-US":"Description"},filename:"components/alert/demo/description.md",id:"components-alert-demo-description"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Success</span> <span class="token attr-name" >Text"</span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Success</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Success</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Success</span> <span class="token attr-name" >Description"</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Info</span> <span class="token attr-name" >Text"</span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Info</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Info</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Info</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Info</span> <span class="token attr-name" >Description"</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Warning</span> <span class="token attr-name" >Text"</span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Warning</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Warning</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Warning</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Warning</span> <span class="token attr-name" >Description"</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Error</span> <span class="token attr-name" >Text"</span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Error</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Error</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Error</span> <span class="token attr-name" >Description</span> <span class="token attr-name" >Error</span> <span class="token attr-name" >Description"</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],{message:"Success Text",description:"Success Description Success Description Success Description",type:"success"}),c["default"].createElement(p["default"],{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info"}),c["default"].createElement(p["default"],{message:"Warning Text",description:"Warning Description Warning Description Warning Description Warning Description",type:"warning"}),c["default"].createElement(p["default"],{message:"Error Text",description:"Error Description Error Description Error Description Error Description",type:"error"}))}}},1361:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(102),s(101)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u53ef\u53e3\u7684\u56fe\u6807\u8ba9\u4fe1\u606f\u7c7b\u578b\u66f4\u52a0\u9192\u76ee\u3002"]],"en-US":[["p","Decent icon make information more clear and more friendly."]]},meta:{order:4,title:{"zh-CN":"\u56fe\u6807","en-US":"Icon"},filename:"components/alert/demo/icon.md",id:"components-alert-demo-icon"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Success</span> <span class="token attr-name" >Tips"</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span> <span class="token attr-name" >showIcon</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Informational</span> <span class="token attr-name" >Notes"</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span> <span class="token attr-name" >showIcon</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Warning<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span> <span class="token attr-name" >showIcon</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Error<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token attr-name" >showIcon</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success</span> <span class="token attr-name" >tips"</span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Detailed</span> <span class="token attr-name" >description</span> <span class="token attr-name" >and</span> <span class="token attr-name" >advices</span> <span class="token attr-name" >about</span> <span class="token attr-name" >successful</span> <span class="token attr-name" >copywriting."</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >showIcon</span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Informational</span> <span class="token attr-name" >Notes"</span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Additional</span> <span class="token attr-name" >description</span> <span class="token attr-name" >and</span> <span class="token attr-name" >informations</span> <span class="token attr-name" >about</span> <span class="token attr-name" >copywriting."</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >showIcon</span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Warning<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >warning</span> <span class="token attr-name" >notice</span> <span class="token attr-name" >about</span> <span class="token attr-name" >copywriting."</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >showIcon</span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Error<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >an</span> <span class="token attr-name" >error</span> <span class="token attr-name" >message</span> <span class="token attr-name" >about</span> <span class="token attr-name" >copywriting."</span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >showIcon</span>\n  <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],{message:"Success Tips",type:"success",showIcon:!0}),c["default"].createElement(p["default"],{message:"Informational Notes",type:"info",showIcon:!0}),c["default"].createElement(p["default"],{message:"Warning",type:"warning",showIcon:!0}),c["default"].createElement(p["default"],{message:"Error",type:"error",showIcon:!0}),c["default"].createElement(p["default"],{message:"success tips",description:"Detailed description and advices about successful copywriting.",type:"success",showIcon:!0}),c["default"].createElement(p["default"],{message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info",showIcon:!0}),c["default"].createElement(p["default"],{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),c["default"].createElement(p["default"],{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0}))}}},1362:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(102),s(101)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u5171\u6709\u56db\u79cd\u6837\u5f0f ",["code","success"],"\u3001",["code","info"],"\u3001",["code","warning"],"\u3001",["code","error"],"\u3002"]],"en-US":[["p","There are 4 types of Alert: ",["code","success"],", ",["code","info"],", ",["code","warning"],", ",["code","error"],"."]]},meta:{order:1,title:{"zh-CN":"\u56db\u79cd\u6837\u5f0f","en-US":"More types"},filename:"components/alert/demo/style.md",id:"components-alert-demo-style"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Success</span> <span class="token attr-name" >Text"</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Info</span> <span class="token attr-name" >Text"</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Warning</span> <span class="token attr-name" >Text"</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Error</span> <span class="token attr-name" >Text"</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],{message:"Success Text",type:"success"}),c["default"].createElement(p["default"],{message:"Info Text",type:"info"}),c["default"].createElement(p["default"],{message:"Warning Text",type:"warning"}),c["default"].createElement(p["default"],{message:"Error Text",type:"error"}))}}}});