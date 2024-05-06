"use strict";(self.webpackChunkjotai_website=self.webpackChunkjotai_website||[]).push([[678],{7824:function(e,t,n){n.d(t,{h:function(){return o}});var s=n(993),r=n(1562),a=n(5893);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const o=e=>{let{lang:t="zh-Hans",title:n,description:o,uri:c}=e;const l=(0,s.K2)(i),{site:d}=l,h=d.siteMetadata.title,m=d.siteMetadata.siteUrl,p=(0,r.dq)("/favicon.svg"),g="https://cdn.candycode.com/jotai/jotai-opengraph-v2.png",x=d.siteMetadata.shortName,j=n?n+" — "+(n.length<=10?h:x):h,u=o||d.siteMetadata.description,b=c?m+"/"+c:m;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:j}),(0,a.jsx)("meta",{property:"description",content:u}),(0,a.jsx)("meta",{property:"og:locale",content:t}),(0,a.jsx)("meta",{property:"og:site_name",content:x}),(0,a.jsx)("meta",{property:"og:title",content:j}),(0,a.jsx)("meta",{property:"og:description",content:u}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:image",content:g}),(0,a.jsx)("meta",{property:"og:image:url",content:g}),(0,a.jsx)("meta",{property:"og:image:secure_url",content:g}),(0,a.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,a.jsx)("meta",{property:"og:image:height",content:"630"}),(0,a.jsx)("meta",{property:"og:url",content:b}),(0,a.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("link",{rel:"icon",type:"image/svg+xml",href:p}),(0,a.jsx)("link",{rel:"canonical",href:b}),(0,a.jsx)("link",{rel:"dns-prefetch",href:"appid-dsn.algolia.net"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://98qz5x9lgr-dsn.algolia.net",crossOrigin:"true"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://cdn.candycode.com",crossOrigin:"true"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://storage.googleapis.com",crossOrigin:"true"})]})},i="930225796"},1351:function(e,t,n){n.r(t),n.d(t,{Head:function(){return S},default:function(){return O}});var s=n(9610),r=n(8583),a=n(189),o=n(5893);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const i=()=>{const e=()=>{const[e,t]=(0,r.KO)(a.gp);return(0,o.jsx)("input",{value:e,onChange:e=>t(e.target.value),className:"w-full bg-transparent focus:!ring-transparent !border-none"})},t=()=>{const[e]=(0,r.KO)(a.RC);return(0,o.jsx)("span",{className:"flex-shrink-0 font-bold",children:e})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"py-8 text-sm",children:(0,o.jsxs)("div",{className:"flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-lg focus-within:ring focus-within:ring-blue-400 dark:border-gray-800 dark:bg-gray-950 dark:focus-within:ring-teal-700",children:[(0,o.jsx)(e,{}),(0,o.jsx)(t,{})]})}),(0,o.jsx)(s.E,{children:"import { atom, useAtom } from 'jotai'\n\n// 创建你的原子和派生物\nconst textAtom = atom('hello')\nconst uppercaseAtom = atom(\n  (get) => get(textAtom).toUpperCase()\n)\n\n// 在你的应用程序的任何地方使用它们\nconst Input = () => {\n  const [text, setText] = useAtom(textAtom)\n  const handleChange = (e) => setText(e.target.value)\n  return (\n    <input value={text} onChange={handleChange} />\n  )\n}\n\nconst Uppercase = () => {\n  const [uppercase] = useAtom(uppercaseAtom)\n  return (\n    <div>Uppercase: {uppercase}</div>\n  )\n}\n\n// 现在你有了组件\nconst App = () => {\n  return (\n    <>\n      <Input />\n      <Uppercase />\n    </>\n  )\n}"})]})};var c=n(4752);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const l=()=>{const[e,t]=(0,r.KO)(a.o_);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex items-center space-x-8 pt-4 lg:pt-8 lg:pb-4",children:[(0,o.jsx)(c.z,{onClick:()=>t((e=>e+1)),icon:"plus",className:"focus:ring",children:"增量"}),(0,o.jsx)("span",{className:"text-3xl font-bold ordinal slashed-zero tabular-nums",children:e})]}),(0,o.jsx)(s.E,{children:"import { useAtom } from 'jotai'\nimport { atomWithImmer } from 'jotai-immer'\n\n// 使用基于 immer 的写函数创建一个新的原子\nconst countAtom = atomWithImmer(0)\n\nconst Counter = () => {\n  const [count] = useAtom(countAtom)\n  return (\n    <div>count: {count}</div>\n  )\n}\n\nconst Controls = () => {\n  // setCount === update: (draft: Draft<Value>) => void\n  const [, setCount] = useAtom(countAtom)\n  const increment = () => setCount((c) => (c = c + 1))\n  return (\n    <button onClick={increment}>+1</button>\n  )\n}"})]})};var d=n(4184),h=n.n(d);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const m=e=>{let{className:t="",children:n}=e;return(0,o.jsx)("div",{className:h()("text-4xl font-bold tracking-tight text-black dark:text-gray-50 lg:text-7xl lg:text-gray-300",t),children:n})};var p=n(9759),g=n(5292);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const x=()=>(0,o.jsxs)("header",{children:[(0,o.jsx)(g.m,{className:"max-w-xs lg:hidden"}),(0,o.jsxs)("div",{className:"mt-8 flex items-center space-x-4 sm:space-x-8 sm:px-16 lg:mt-0 lg:px-0",children:[(0,o.jsxs)("div",{className:"relative w-1/3 max-w-[215px] lg:w-1/4",children:[(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/jotai-mascot.png",title:"Atomikku, the Jotai mascot",alt:"Atomikku, the Jotai mascot"}),(0,o.jsx)("div",{className:"absolute -right-2 -bottom-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-black text-white shadow-md dark:bg-white dark:text-black dark:!shadow-none lg:-right-4 lg:-bottom-6 lg:h-[4.5rem] lg:w-[4.5rem] lg:text-[2rem]",children:"v2"})]}),(0,o.jsxs)("div",{className:"relative w-2/3 space-y-4 rounded-xl bg-gray-100 p-4 text-sm leading-snug text-gray-800 dark:bg-gray-900 dark:text-gray-300 sm:text-base md:text-lg lg:w-3/4 lg:p-8 lg:leading-normal after:absolute after:left-0 after:top-1/2 after:w-0 after:h-0 after:-ml-6 after:-mt-4 after:border-solid after:border-transparent after:border-t-[16px] after:border-r-[24px] after:border-b-[16px] after:border-l-0 after:border-r-[#f5f5f5] after:dark:!border-r-[#171717]",children:[(0,o.jsx)("div",{children:"欢迎使用 Jotai v2！"}),(0,o.jsxs)("div",{children:["完全兼容 React 18 和即将推出的 ",(0,o.jsx)(p.Z,{dark:!0,children:"use"})," 钩子。 现在有一个可以在 React 外部使用的存储接口。"]}),(0,o.jsx)("div",{children:"在下面享受新的“入门”体验！"})]})]})]});var j=n(4572),u=n(4925);const b=["to","children"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const v=e=>{let{to:t,children:n}=e,s=(0,u.Z)(e,b);return(0,o.jsx)("a",y(y({href:t,target:"_blank",rel:"noreferrer"},s),{},{children:n}))};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const w=()=>(0,o.jsxs)("div",{className:"mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 2xl:-mx-6",children:[(0,o.jsxs)(A,{to:"https://about.meta.com/",children:[(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/meta-current.svg",alt:"",className:"w-full opacity-50 transition duration-300 ease-in-out dark:invert"}),(0,o.jsx)(k,{children:(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/meta-color.svg",alt:"",className:"w-full","aria-hidden":!0})})]}),(0,o.jsxs)(A,{to:"https://candycode.com/",children:[(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/candycode-current.svg",alt:"candycode alternative graphic design web development agency",className:"aspect-[16/9] w-full opacity-50 transition duration-300 ease-in-out dark:invert"}),(0,o.jsx)(k,{children:(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/candycode-color.svg",alt:"",className:"aspect-[16/9] w-full","aria-hidden":!0})})]}),(0,o.jsxs)(A,{to:"https://www.adobe.com/",children:[(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/adobe-current.svg",alt:"Adobe",className:"w-full px-1 opacity-50 transition duration-300 ease-in-out dark:invert lg:px-2"}),(0,o.jsx)(k,{children:(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/adobe-color.svg",alt:"",className:"w-full px-1 lg:px-2","aria-hidden":!0})})]}),(0,o.jsxs)(A,{to:"https://ping.gg",children:[(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/ping-current.svg",alt:"Ping Labs",className:"aspect-[24/9] w-full opacity-50 transition duration-300 ease-in-out dark:invert"}),(0,o.jsx)(k,{children:(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/ping-color.svg",alt:"",className:"aspect-[24/9] w-full","aria-hidden":!0})})]}),(0,o.jsxs)(A,{to:"https://www.tiktok.com/",children:[(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/tiktok-current.svg",alt:"TokTok",className:"w-full px-1 opacity-50 transition duration-300 ease-in-out dark:invert lg:px-2"}),(0,o.jsx)(k,{children:(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/tiktok-color.svg",alt:"",className:"w-full px-1 lg:px-2","aria-hidden":!0})})]}),(0,o.jsxs)(A,{to:"https://uniswap.org/",children:[(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/uniswap-current.svg",alt:"Uniswap",className:"aspect-[16/9] w-full opacity-50 transition duration-300 ease-in-out dark:invert"}),(0,o.jsx)(k,{children:(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/logos/uniswap-color.svg",alt:"",className:"aspect-[16/9] w-full","aria-hidden":!0})})]})]}),A=e=>{let{to:t,className:n="",children:s}=e;return(0,o.jsx)(v,{to:t,className:h()("group relative flex aspect-video items-center justify-center rounded-lg bg-gray-100 px-6 transition duration-300 ease-in-out hover:!bg-black dark:bg-gray-900",n),children:s})},k=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"absolute inset-0 flex h-full w-full items-center justify-center px-6 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 text-white",children:t})};var C=n(7824),N=n(7294);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const P=e=>{let{tabs:t={}}=e;const n=(0,N.useMemo)((()=>Object.values(t)),[t]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"space-y-12",children:n.map((e=>(0,o.jsx)("div",{children:e})))})})};var T=n(6894);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const M=()=>{const[e,t]=(0,r.KO)(a.H_);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"py-8",children:(0,o.jsx)(T.q,{children:(0,o.jsxs)("div",{className:h()(e?"bg-gray-900 text-gray-100":"bg-gray-100 text-gray-900","flex items-center space-x-4 rounded-xl p-4 transition duration-300 ease-in-out lg:space-x-8 lg:p-8"),children:[(0,o.jsx)("div",{children:(0,o.jsx)("button",{onClick:()=>t(!e),className:h()(e?"bg-gray-700":"bg-gray-300","dark:focus-teal-700 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-opacity duration-200 ease-in-out focus:outline-none focus:ring focus:ring-blue-400"),children:(0,o.jsx)("span",{className:h()(e?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"),"aria-hidden":"true"})})}),(0,o.jsx)("div",{className:"text-sm leading-relaxed lg:text-lg",children:"此切换将通过 localStorage 在用户会话之间持久化。"})]})})}),(0,o.jsx)(s.E,{children:"import { useAtom } from 'jotai'\nimport { atomWithStorage } from 'jotai/utils'\n\n// 设置字符串键和初始值\nconst darkModeAtom = atomWithStorage('darkMode', false)\n\nconst Page = () => {\n  // 像使用任何其他原子一样使用持久化状态\n  const [darkMode, setDarkMode] = useAtom(darkModeAtom)\n  const toggleDarkMode = () => setDarkMode(!darkMode)\n  return (\n    <>\n      <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>\n      <button onClick={toggleDarkMode}>toggle theme</button>\n    </>\n  )\n}"})]})};function O(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{}),(0,o.jsxs)("div",{className:"mt-12 space-y-12 lg:mt-24 lg:space-y-24",children:[(0,o.jsxs)("div",{className:"space-y-4",children:[(0,o.jsx)(m,{children:"介绍"}),(0,o.jsx)("p",{children:"Jotai 采用原子化的方法进行全局 React 状态管理。"}),(0,o.jsx)("p",{children:"通过组合原子来构建状态，渲染会根据原子依赖自动优化。这解决了 React 上下文的额外重新渲染问题，消除了对 memoization 的需要，并在保持声明式编程模型的同时，提供了类似于信号的开发者体验。"}),(0,o.jsxs)("p",{children:["它可以从简单的 ",(0,o.jsx)(p.Z,{children:"useState"})," 替代品扩展到具有复杂需求的企业级 TypeScript 应用程序。此外，还有许多实用工具和扩展可以帮助你！"]}),(0,o.jsx)("p",{children:"Jotai 在这些创新公司的生产环境中得到了信任。"}),(0,o.jsx)(w,{})]}),(0,o.jsxs)("div",{className:"space-y-4",children:[(0,o.jsx)(m,{children:"入门"}),(0,o.jsx)("p",{className:"!mb-8",children:"这将引导你创建一个简单的 Jotai 应用程序的过程。从安装开始，然后探索核心 API 的基础知识，最后在 React 框架中进行服务器端渲染。"}),(0,o.jsx)(P,{tabs:R})]}),(0,o.jsxs)("div",{className:"space-y-4",children:[(0,o.jsx)(m,{children:"API 概览"}),(0,o.jsx)(P,{tabs:E})]}),(0,o.jsxs)("div",{className:"space-y-4",children:[(0,o.jsx)(m,{children:"了解更多"}),(0,o.jsx)("p",{children:"查看 Jotai 创建者 Daishi 的免费 Egghead 课程。"}),(0,o.jsx)("a",{href:"https://egghead.io/courses/manage-application-state-with-jotai-atoms-2c3a29f0",target:"_blank",rel:"noreferrer",className:"mt-4 block",children:(0,o.jsx)("img",{src:"https://cdn.candycode.com/jotai/jotai-course-banner.jpg",className:"block rounded-md shadow-lg dark:!shadow-none sm:rounded-lg",alt:"Jotai course",title:"Jotai course"})})]})]})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const E={Core:(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"核心"}),(0,o.jsxs)("p",{children:["Jotai的API非常简洁，以TypeScript为主。它的使用就像React的内置",(0,o.jsx)(p.Z,{children:"useState"}),"钩子一样简单，但所有的状态都可以全局访问， 派生状态易于实现，且自动消除了不必要的重新渲染。"]}),(0,o.jsx)(i,{})]}),Utilities:(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"实用工具"}),(0,o.jsxs)("p",{children:["Jotai包还包括一个",(0,o.jsx)(p.Z,{children:"jotai/utils"}),"包。这些额外的函数增加了在localStorage中持久化原子的支持，服务端渲染时的原子水合， 创建具有Redux-like的reducers和action类型的原子等等。"]}),(0,o.jsx)(M,{})]}),Extensions:(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"扩展"}),(0,o.jsx)("p",{children:"还有每个官方扩展的单独包：tRPC，Immer，Query，XState，URQL，Optics，Relay，location，molecules，cache等等。"}),(0,o.jsxs)("p",{children:["一些扩展提供了新的原子类型，带有替代的写函数，例如",(0,o.jsx)(p.Z,{children:"atomWithImmer"}),"（Immer）或",(0,o.jsx)(p.Z,{children:"atomWithMachine"}),"（XState）。"]}),(0,o.jsxs)("p",{children:["其他的提供了新的原子类型，带有双向数据绑定，例如",(0,o.jsx)(p.Z,{children:"atomWithLocation"}),"或",(0,o.jsx)(p.Z,{children:"atomWithHash"}),"。"]}),(0,o.jsx)(l,{})]})},R={Installation:(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"安装"}),(0,o.jsx)("p",{children:"首先将 Jotai 作为依赖添加到你的 React 项目中。"}),(0,o.jsx)(s.E,{language:"bash",children:"# npm\nnpm i jotai\n\n# yarn\nyarn add jotai\n\n# pnpm\npnpm add jotai\n"})]}),"Create atoms":(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"创建原子"}),(0,o.jsx)("p",{children:"首先创建原始和派生的原子来构建状态。"}),(0,o.jsx)("h3",{children:"原始原子"}),(0,o.jsx)("p",{children:"原始原子可以是任何类型：布尔值，数字，字符串，对象，数组，集合，映射等等。"}),(0,o.jsx)(s.E,{children:"import { atom } from 'jotai'\n\nconst countAtom = atom(0)\n\nconst countryAtom = atom('Japan')\n\nconst citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])\n\nconst animeAtom = atom([\n  {\n    title: 'Ghost in the Shell',\n    year: 1995,\n    watched: true\n  },\n  {\n    title: 'Serial Experiments Lain',\n    year: 1998,\n    watched: false\n  }\n])"}),(0,o.jsx)("h3",{children:"派生原子"}),(0,o.jsx)("p",{children:"派生原子可以在返回其自身的值之前读取其他原子的值。"}),(0,o.jsx)(s.E,{children:"const progressAtom = atom((get) => {\n  const anime = get(animeAtom)\n  return anime.filter((item) => item.watched).length / anime.length\n})"})]}),"Use atoms":(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"使用原子"}),(0,o.jsx)("p",{children:"然后在 React 组件中使用原子来读取或写入状态。"}),(0,o.jsx)("h3",{children:"在同一组件中读取和写入"}),(0,o.jsxs)("p",{children:["当在同一组件中同时读取和写入原子时，为了简单起见，使用组合的",(0,o.jsx)(p.Z,{children:"useAtom"})," hook。"]}),(0,o.jsx)(s.E,{children:"import { useAtom } from 'jotai'\n\nconst AnimeApp = () => {\n  const [anime, setAnime] = useAtom(animeAtom)\n\n  return (\n    <>\n      <ul>\n        {anime.map((item) => (\n          <li key={item.title}>{item.title}</li>\n        ))}\n      </ul>\n      <button onClick={() => {\n        setAnime((anime) => [\n          ...anime,\n          {\n            title: 'Cowboy Bebop',\n            year: 1998,\n            watched: false\n          }\n        ])\n      }}>\n        Add Cowboy Bebop\n      </button>\n    <>\n  )\n}"}),(0,o.jsx)("h3",{children:"从不同的组件读取和写入"}),(0,o.jsxs)("p",{children:["当原子值只被读取或写入时，使用单独的",(0,o.jsx)(p.Z,{children:"useAtomValue"})," 和 ",(0,o.jsx)(p.Z,{children:"useSetAtom"})," 钩子来 优化重新渲染。"]}),(0,o.jsx)(s.E,{children:"import { useAtomValue, useSetAtom } from 'jotai'\n\nconst AnimeList = () => {\n  const anime = useAtomValue(animeAtom)\n\n  return (\n    <ul>\n      {anime.map((item) => (\n        <li key={item.title}>{item.title}</li>\n      ))}\n    </ul>\n  )\n}\n\nconst AddAnime = () => {\n  const setAnime = useSetAtom(animeAtom)\n\n  return (\n    <button onClick={() => {\n      setAnime((anime) => [\n        ...anime,\n        {\n          title: 'Cowboy Bebop',\n          year: 1998,\n          watched: false\n        }\n      ])\n    }}>\n      Add Cowboy Bebop\n    </button>\n  )\n}\n\nconst ProgressTracker = () => {\n  const progress = useAtomValue(progressAtom)\n\n  return (\n    <div>{Math.trunc(progress * 100)}% watched</div>\n  )\n}\n\nconst AnimeApp = () => {\n  return (\n    <>\n      <AnimeList />\n      <AddAnime />\n      <ProgressTracker />\n    </>\n  )\n}"})]}),SSR:(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"服务器端渲染"}),(0,o.jsx)("p",{children:"如果使用 Next.js 或 Gatsby 等框架进行服务器端渲染，请确保至少在根部使用一个 Provider 组件。"}),(0,o.jsx)(s.E,{children:"import { Provider } from 'jotai'\n\n// Placement is framework-specific (see below)\n<Provider>\n  {...}\n</Provider>\n"}),(0,o.jsx)("h3",{children:"Next.js (应用目录)"}),(0,o.jsxs)("p",{children:["在一个单独的客户端组件中创建 provider。然后将 provider 导入到根",(0,o.jsx)(p.Z,{children:"layout.js"}),"服务器组件中。"]}),(0,o.jsx)(s.E,{children:"// providers.js (app directory)\n'use client'\n\nimport { Provider } from 'jotai'\n\nexport default function Providers({ children }) {\n  return (\n    <Provider>\n      {children}\n    </Provider>\n  )\n}\n\n\n// layout.js (app directory)\nimport Providers from './providers'\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\">\n      <body>\n        <Providers>\n          {children}\n        </Providers>\n      </body>\n    </html>\n  )\n}\n"}),(0,o.jsx)("h3",{children:"Next.js (页面目录)"}),(0,o.jsxs)("p",{children:["在 ",(0,o.jsx)(p.Z,{children:"_app.js"})," 中创建 provider。"]}),(0,o.jsx)(s.E,{children:"// _app.js (pages directory)\nimport { Provider } from 'jotai'\n\nexport default function App({ Component, pageProps }) {\n  return (\n    <Provider>\n      <Component {...pageProps} />\n    </Provider>\n  )\n}\n"}),(0,o.jsx)("h3",{children:"Gatsby"}),(0,o.jsxs)("p",{children:["在 ",(0,o.jsx)(p.Z,{children:"gatsby-shared.js"})," 文件中创建 provider，以在 ",(0,o.jsx)(p.Z,{children:"gatsby-browser.js"})," 和",(0,o.jsx)(p.Z,{children:"gatsby-ssr.js"})," 之间共享代码。使用 ",(0,o.jsx)(p.Z,{children:"wrapRootElement"})," API 来放置 provider。"]}),(0,o.jsx)(s.E,{children:"\n// gatsby-shared.js\nimport { Provider } from 'jotai'\n\nexport const wrapRootElement = ({ element }) => {\n  return (\n    <Provider>\n      {element}\n    </Provider>\n  )\n}\n\n// gatsby-browser.js\nexport { wrapRootElement } from './gatsby-shared'\n\n// gatsby-ssr.js\nexport { wrapRootElement } from './gatsby-shared'\n"})]})},S=()=>(0,o.jsx)(C.h,{})}}]);
//# sourceMappingURL=component---src-pages-index-js-dff8e64c792010d2dbb6.js.map