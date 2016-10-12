webpackJsonp([111,197],{1690:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=a(1),p=(t(e),a(2));t(p);n.exports={content:["section",["p","\u5782\u76f4\u5c55\u793a\u7684\u65f6\u95f4\u6d41\u4fe1\u606f\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["ul",["li",["p","\u5f53\u6709\u4e00\u7cfb\u5217\u4fe1\u606f\u9700\u8981\u4ece\u4e0a\u81f3\u4e0b\u6309\u65f6\u95f4\u6392\u5217\u65f6\uff1b"]],["li",["p","\u9700\u8981\u6709\u4e00\u6761\u65f6\u95f4\u8f74\u8fdb\u884c\u89c6\u89c9\u4e0a\u7684\u4e32\u8054\u65f6\uff1b"]]]],meta:{category:"Components",subtitle:"\u65f6\u95f4\u8f74",type:"Views",title:"Timeline",filename:"components/timeline/index.zh-CN.md"},toc:["ul",["li",["a",{href:"#\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521b\u5efa\u670d\u52a1\u73b0\u573a <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u7f51\u7edc\u5f02\u5e38\u6b63\u5728\u4fee\u590d <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>'},["code","<Timeline>\n  <Timeline.Item>\u521b\u5efa\u670d\u52a1\u73b0\u573a 2015-09-01</Timeline.Item>\n  <Timeline.Item>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 2015-09-01</Timeline.Item>\n  <Timeline.Item>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 2015-09-01</Timeline.Item>\n  <Timeline.Item>\u7f51\u7edc\u5f02\u5e38\u6b63\u5728\u4fee\u590d 2015-09-01</Timeline.Item>\n</Timeline>"]],["h3","Timeline"],["p","\u65f6\u95f4\u8f74\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","pending"],["td","\u6307\u5b9a\u6700\u540e\u4e00\u4e2a\u5e7d\u7075\u8282\u70b9\u662f\u5426\u5b58\u5728\u6216\u5185\u5bb9"],["td","boolean or React.Element"],["td","false"]]]],["h3","Timeline.Item"],["p","\u65f6\u95f4\u8f74\u7684\u6bcf\u4e00\u4e2a\u8282\u70b9\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","color"],["td","\u6307\u5b9a\u5706\u5708\u989c\u8272 ",["code","blue, red, green"],"\uff0c\u6216\u81ea\u5b9a\u4e49\u7684\u8272\u503c"],["td","string"],["td","blue"]],["tr",["td","dot"],["td","\u81ea\u5b9a\u4e49\u65f6\u95f4\u8f74\u70b9"],["td","React.Element"],["td","-"]]]]]}}});