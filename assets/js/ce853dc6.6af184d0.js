"use strict";(self.webpackChunklenspa_docusaurus=self.webpackChunklenspa_docusaurus||[]).push([[625],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={slug:"report-4-10-23",title:"Week 4",authors:"ella",tags:["week3"]},l="Lenspa Weekly Report - Week of 04/03/23",i={permalink:"/lenspa-docusaurus/blog/report-4-10-23",source:"@site/blog/2023-4-17-fourth-report.md",title:"Week 4",description:"With the due date of the project and our presentation coming up in just a couple weeks, we wanted to get as much of the technical development of our final prototype done by the end of this week as possible in order to have time to translate everything we needed to translate, deploy the application, run evaluations, and make our presentation next week. Due to team member schedules and wanting the codebase to be consistent and smoothly interconnected, we decided to have Kayla and Ella take on most of the remaining development responsibilities in exchange for Sarah and Miranda taking a lead on the evaluation and presentation aspects of the project in the coming weeks.",date:"2023-04-17T00:00:00.000Z",formattedDate:"April 17, 2023",tags:[{label:"week3",permalink:"/lenspa-docusaurus/blog/tags/week-3"}],readingTime:2.36,hasTruncateMarker:!1,authors:[{name:"Ella Apykhti",title:"Backend developer",url:"https://github.com/eapykhti",imageURL:"https://github.com/eapykhti.png",key:"ella"}],frontMatter:{slug:"report-4-10-23",title:"Week 4",authors:"ella",tags:["week3"]},nextItem:{title:"Week 3",permalink:"/lenspa-docusaurus/blog/report-4-03-23"}},s={authorsImageUrls:[void 0]},p=[{value:"Ella",id:"ella",level:3},{value:"Kayla",id:"kayla",level:3},{value:"Miranda",id:"miranda",level:3},{value:"Sarah",id:"sarah",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With the due date of the project and our presentation coming up in just a couple weeks, we wanted to get as much of the technical development of our final prototype done by the end of this week as possible in order to have time to translate everything we needed to translate, deploy the application, run evaluations, and make our presentation next week. Due to team member schedules and wanting the codebase to be consistent and smoothly interconnected, we decided to have Kayla and Ella take on most of the remaining development responsibilities in exchange for Sarah and Miranda taking a lead on the evaluation and presentation aspects of the project in the coming weeks."),(0,r.kt)("h1",{id:"goals"},"Goals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implement random daily prompt assignments"),(0,r.kt)("li",{parentName:"ul"},"Implement user messaging"),(0,r.kt)("li",{parentName:"ul"},"Implement unmatching and reporting"),(0,r.kt)("li",{parentName:"ul"},"Come up with an evaluation plan"),(0,r.kt)("li",{parentName:"ul"},"Gather everything that will need to be localized in JSON files / spreadsheets")),(0,r.kt)("h1",{id:"tasks"},"Tasks"),(0,r.kt)("h3",{id:"ella"},"Ella"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the socket.io endpoints for loading in conversation and match data, getting user data, sending a new message, and blocking/reporting a match"),(0,r.kt)("li",{parentName:"ul"},"Set up prompts to update every 24 hours after a conversation is first created"),(0,r.kt)("li",{parentName:"ul"},"Complete the individual evaluation plan assignment"),(0,r.kt)("li",{parentName:"ul"},"Add prompt ideas to the prompts spreadsheet")),(0,r.kt)("h3",{id:"kayla"},"Kayla"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finish the front-end pages for conversations, user profiles, and picture selection/taking/drawing"),(0,r.kt)("li",{parentName:"ul"},"Integrate the back-end API and endpoints into the front-end client\nComplete the individual evaluation plan assignment")),(0,r.kt)("h3",{id:"miranda"},"Miranda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complete the individual evaluation plan assignment"),(0,r.kt)("li",{parentName:"ul"},"After group evaluation plan is determined, work with Sarah to create a detailed procedure outline and necessary pre/post surveys"),(0,r.kt)("li",{parentName:"ul"},"Add prompt ideas to the prompts spreadsheet")),(0,r.kt)("h3",{id:"sarah"},"Sarah"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complete the individual plan assignment"),(0,r.kt)("li",{parentName:"ul"},"After group evaluation plan is determined, work with Miranda to create a detailed procedure outline and necessary pre/post surveys"),(0,r.kt)("li",{parentName:"ul"},"Add prompt ideas to the prompts spreadsheet"),(0,r.kt)("li",{parentName:"ul"},"Double check the list of front-end strings to be localized")),(0,r.kt)("h1",{id:"challenges"},"Challenges"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Besides lots of troubleshooting and debugging, everything went pretty smoothly."),(0,r.kt)("li",{parentName:"ul"},"Programming actual functionality made us realize that some changes should be made to our database schema, but all were easy to implement."),(0,r.kt)("li",{parentName:"ul"},"Ella unfortunately was busier than anticipated with other classes and onboarding documents for her new job but Kayla really stepped up and drove the development of the prototype further, jumping in on  some of the back-end tasks as well.")),(0,r.kt)("h1",{id:"reflection"},"Reflection"),(0,r.kt)("p",null,"While a few layout and technical issues remain and there is additional functionality we\u2019d like to add if we have time (such as email notifications), the vast majority of our final prototype is now functional! We will use the first few days of next week to iron out those last technical difficulties while also getting translations and our evaluation plan ready to go and should still be on schedule."))}c.isMDXComponent=!0}}]);