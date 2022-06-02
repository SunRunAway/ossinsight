"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[1117],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22050:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={},p=void 0,l={type:"mdx",permalink:"/about",source:"@site/src/pages/about.md"},c=[{value:"Analysis in Specific Technical Areas",id:"analysis-in-specific-technical-areas",children:[],level:2},{value:"Powerful Custom Analysis Tool",id:"powerful-custom-analysis-tool",children:[],level:2},{value:"Contributions Welcome!",id:"contributions-welcome",children:[],level:2}],u={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{align:"center"}," About OSS Insight"),(0,r.kt)("p",null,"OSS Insight -> Open Source Software Insight"),(0,r.kt)("p",null,"Recently, we launched OSS Insight - our powerful and interesting insight tool built with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus"},"Docusaurus"),", ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/"},"Apache ECharts"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.gharchive.org/"},"GH Archive"),", ",(0,r.kt)("a",{parentName:"p",href:"https://ghtorrent.org/"},"GHTorrent")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb"},"TiDB"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"homepage",src:n(17618).Z})),(0,r.kt)("p",null,"As a group of people working in the open source community, we often work with GitHub data. We focus on the health of open source projects and all the new things happening in the open source world. Therefore, we decided to establish this site by using ",(0,r.kt)("strong",{parentName:"p"},"4.6 billion GitHub event data")," in order to gain useful insights through a/pair/group of open source projects in multi-dimensional. We hope to make the open source ecosystem better with you."),(0,r.kt)("p",null,"We're honored to have brought this project to the attention of everyone after its release, some interesting responses and shares have started to circulate (see our ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/OSSInsight"},"Twitter")," for details), and we're excited to see more people use this powerful tool to discover insights. If it can also help you deal with problems(such as dealing with dataset as large as 4.6 billion data from GitHub), that would be a bonus!"),(0,r.kt)("p",null,"In this project, we mainly provide two major functions, one is the analysis results of specific fields, and the other one is a custom analysis tool for GitHub repositories."),(0,r.kt)("h2",{id:"analysis-in-specific-technical-areas"},"Analysis in Specific Technical Areas"),(0,r.kt)("p",null,"We provide analysis results from ",(0,r.kt)("a",{parentName:"p",href:"https://ossinsight.io/database/deep-insight-into-open-source-databases/"},"six specific technical areas")," that are popular in open source software. You can explore the trends in different tech-fields and find which repositories are the most popular, which repositories have the most Pull Requests/Issues, etc. And more importantly, we also offer you ",(0,r.kt)("a",{parentName:"p",href:"https://ossinsight.io/database/realtime/"},"real-time insights")," for your reference."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udccc Due to the limitation of raw dataset from GitHub, we currently provide real-time insights in one hour. But we are happy to share with you that ",(0,r.kt)("strong",{parentName:"p"},"minute-level insights")," are already on the way!"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"homepage insight",src:n(59359).Z})),(0,r.kt)("h2",{id:"powerful-custom-analysis-tool"},"Powerful Custom Analysis Tool"),(0,r.kt)("p",null,"A visual, comprehensive tool can be very helpful when analyzing the repositories you are interested in."),(0,r.kt)("p",null,"You can simply enter/select any repository at the ",(0,r.kt)("a",{parentName:"p",href:"https://ossinsight.io/"},"search bar")," and it will lead you to the detailed analysis page as well as experience it at the navigation bar wherever you are on the subpar. In addition to the overview, we will also analyze the repositories from the four dimensions of Commits, Pull Requests, Issues, and People. Here you can see many dynamic and interesting charts, showing the performance of the repository. Of course, we are not just providing static chart images, thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/"},"Apache ECharts"),", our charts are interactive and update in real-time. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"analyze selector",src:n(32395).Z})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*"," Analyze any 1/2 repositories with selectors")),(0,r.kt)("p",null,"If you want to compare your own repository with others, just enter/select another repository's name in the selector which fixed on the top of analyze page. Then you will instantly get a comparative insight result, which can become a unique comparative analysis report after a simple processing. "),(0,r.kt)("p",null,"We recommend you try our ",(0,r.kt)("strong",{parentName:"p"},"Geographical Distribution")," and ",(0,r.kt)("strong",{parentName:"p"},"Companies")," sections on the ",(0,r.kt)("a",{parentName:"p",href:"https://ossinsight.io/analyze/pingcap/tidb"},"analysis page"),". Here, we process personal public information from GitHub and display it with visual charts. You can see which companies are contributing to the projects most, and you can also see how popular it is worldwide."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"user list",src:n(47121).Z})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*"," Personal public information from GitHub")),(0,r.kt)("table",null,(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none"}},(0,r.kt)("img",{src:"/img/screenshots/geo_locations.png",alt:"Geographical Distribution"})),(0,r.kt)("td",{style:{border:"none"}},(0,r.kt)("img",{src:"/img/screenshots/companies.png",alt:"Companies"})))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*"," Geographical Distribution and Companies sections on the analysis page")),(0,r.kt)("p",null,"If you need other detailed cases to start your journey, you can refer to our blog to find out how we built this website and processed such a huge dataset. Of course, we also encourage you to ",(0,r.kt)("a",{parentName:"p",href:"https://ossinsight.io/try-your-own-dataset"},"play around")," with your own dataset and build cool projects. If you have a good idea, please share it with us via ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/OSSInsight"},"Twitter"),"."),(0,r.kt)("h2",{id:"contributions-welcome"},"Contributions Welcome!"),(0,r.kt)("p",null,"If you liked our project or you are a developer who is interested in contributing with us, please feel free to raise a PR ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/ossinsight"},"here"),"."),(0,r.kt)("p",null,"Feel free to reach out to us on our ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/OSSInsight"},"Twitter")," for any queries."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"contact-us-via-email"},"Contact us via email"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"mailto:ossinsight@pingcap.com"},"ossinsight@pingcap.com")))))}h.isMDXComponent=!0},32395:function(e,t,n){t.Z=n.p+"assets/images/analyze_selector-93f515ed0682465e4a742fdd73fab52f.png"},17618:function(e,t,n){t.Z=n.p+"assets/images/homepage-9258abef8ebfb1c34d14b19c3b4cd3fd.png"},59359:function(e,t,n){t.Z=n.p+"assets/images/homepage_insight-679a3e555acd844c93e5ecde57c73b12.png"},47121:function(e,t,n){t.Z=n.p+"assets/images/user_list-dd46978e6719ed127b3ddc3b0304b755.png"}}]);