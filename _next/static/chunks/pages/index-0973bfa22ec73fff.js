(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(2612)}])},2612:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return pages}});var jsx_runtime=__webpack_require__(5893),dom_motion=__webpack_require__(3566),styles_0={innerWidth:"2xl:max-w-[1280px] w-full",interWidth:"lg:w-[80%] w-[100%]",paddings:"sm:p-16 xs:p-8 px-6 py-12",yPaddings:"sm:py-16 xs:py-8 py-12",xPaddings:"sm:px-16 px-6",topPaddings:"sm:pt-16 xs:pt-8 pt-12",bottomPaddings:"sm:pb-16 xs:pb-8 pb-12",flexCenter:"flex justify-center items-center",flexStart:"flex justify-start items-start",flexEnd:"flex justify-end",navPadding:"pt-[98px]",heroHeading:"font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",heroDText:"md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]"};let navVariants={hidden:{opacity:0,y:-50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:1}}},slideIn=(direction,type,delay,duration)=>({hidden:{x:"left"===direction?"-100%":"right"===direction?"100%":0,y:"up"===direction?"100%":"down"===direction?"100%":0},show:{x:0,y:0,transition:{type,delay,duration,ease:"easeOut"}}}),staggerContainer=(staggerChildren,delayChildren)=>({hidden:{},show:{transition:{staggerChildren,delayChildren}}}),textVariant=delay=>({hidden:{y:50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay}}}),textContainer={hidden:{opacity:0},show:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{opacity:1,transition:{staggerChildren:.1,delayChildren:.1*i}}}},textVariant2={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{type:"tween",ease:"easeIn"}}},motion_fadeIn=(direction,type,delay,duration)=>({hidden:{x:"left"===direction?100:"right"===direction?-100:0,y:"up"===direction?100:"down"===direction?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type,delay,duration,ease:"easeOut"}}}),planetVariants=direction=>({hidden:{x:"left"===direction?"-100%":"100%",rotate:120},show:{x:0,rotate:0,transition:{type:"spring",duration:1.8,delay:.5}}}),footerVariants={hidden:{opacity:0,y:50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:.5}}},Navbar=()=>(0,jsx_runtime.jsxs)(dom_motion.E.nav,{variants:navVariants,initial:"hidden",whileInView:"show",className:"".concat(styles_0.xPaddings," py-8 relative"),children:[(0,jsx_runtime.jsx)("div",{className:"absolute w-[50%] inset-0 gradient-01"}),(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_0.innerWidth," mx-auto flex justify-between gap-8"),children:[(0,jsx_runtime.jsx)("img",{src:"/logo.png",alt:"search",className:"w-[50px] h-[50px] object-contain"}),(0,jsx_runtime.jsx)("h2",{className:"font-extrabold text-[24px] leading-[30.24px] text-white",children:"ORBITA"}),(0,jsx_runtime.jsx)("img",{src:"/menu.svg",alt:"menu",className:"w-[24px] h-[24px] object-contain"})]})]}),TypingText=param=>{let{title,textStyles}=param;return(0,jsx_runtime.jsx)(dom_motion.E.p,{variants:textContainer,className:"font-normal text-[14px] text-secondary-white ".concat(textStyles),children:Array.from(title).map((letter,index)=>(0,jsx_runtime.jsx)(dom_motion.E.span,{variants:textVariant2,children:" "===letter?"\xa0":letter},index))})},TitleText=param=>{let{title,textStyles}=param;return(0,jsx_runtime.jsx)(dom_motion.E.h2,{variants:textVariant2,initial:"hidden",whileInView:"show",className:"mt-[8px] font-bold md:text-[64px] text-[40px] text-white ".concat(textStyles),children:title})},ExploreCard=param=>{let{id,imgUrl,title,index,active,handleClick}=param;return(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_fadeIn("right","spring",.5*index,.75),className:"relative ".concat(active===id?"lg:flex-[3.5] flex-[10]":"lg:flex-[0.5] flex-[2]"," flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer"),onClick:()=>handleClick(id),children:[(0,jsx_runtime.jsx)("img",{src:imgUrl,alt:"planet-04",className:"absolute w-full h-full object-cover rounded-[24px]"}),active!==id?(0,jsx_runtime.jsx)("h3",{className:"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]",children:title}):(0,jsx_runtime.jsxs)("div",{className:"absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]",children:[(0,jsx_runtime.jsx)("div",{className:"".concat(styles_0.flexCenter," w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]"),children:(0,jsx_runtime.jsx)("img",{src:"/logo.png",alt:"headset",className:"w-1/2 h-1/2 object-contain"})}),(0,jsx_runtime.jsx)("p",{className:"font-normal text-[16px] leading-[20.16px] text-white uppercase",children:"ORBITA"}),(0,jsx_runtime.jsx)("h2",{className:"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white",children:title})]})]})},NewFeatures=param=>{let{imgUrl,title,l1,l2,l3,l4}=param;return(0,jsx_runtime.jsxs)("div",{className:"flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]",children:[(0,jsx_runtime.jsx)("div",{className:"".concat(styles_0.flexCenter," w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]"),children:(0,jsx_runtime.jsx)("img",{src:imgUrl,alt:"icon",className:"w-1/2 h-1/2 object-contain"})}),(0,jsx_runtime.jsx)("h1",{className:"mt-[26px] font-bold text-[24px] leading-[30.24px] text-white",children:title}),(0,jsx_runtime.jsx)("p",{className:"flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]",children:l1}),(0,jsx_runtime.jsx)("p",{className:"flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]",children:l2}),(0,jsx_runtime.jsx)("p",{className:"flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]",children:l3}),(0,jsx_runtime.jsx)("p",{className:"flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]",children:l4})]})},exploreWorlds=[{id:"world-1",imgUrl:"/1.jpg",title:"Auto-Respond To Messages"},{id:"world-2",imgUrl:"/2.jpg",title:"Fun and Games"},{id:"world-3",imgUrl:"/3.jpg",title:"Contract Scanner"},{id:"world-4",imgUrl:"/4.jpg",title:"AI Image Generator"},{id:"world-5",imgUrl:"/5.jpg",title:"CHAT GPT"}],newFeature=[{imgUrl:"/vrpano.svg",title:"PHASE-1",l1:"Creation Announcement Channel ",l2:"Creation Social Network ",l3:"First Ads",l4:"Website v1"},{imgUrl:"/headset.svg",title:"PHASE-2",l1:"Listing on Pancakeswap",l2:"Tg Marketing ",l3:"AI Bot v1 version release",l4:"Twitter influencer"}],newFeatures=[{imgUrl:"/vrpano.svg",title:"PHASE-3",l1:"Update AI Bot functions",l2:"Buybot release",l3:"First Partnership ",l4:"nothing"},{imgUrl:"/headset.svg",title:"PHASE-4",l1:"Ca scanner release",l2:"Press release ",l3:"Orbita Wallet ",l4:"CEX listing"}],socials=[{name:"twitter",url:"/twitter.svg"},{name:"linkedin",url:"/telegram.svg"},{name:"instagram",url:"/dex.png"},{name:"facebook",url:"/bsc.png"}],Footer=()=>(0,jsx_runtime.jsxs)(dom_motion.E.footer,{variants:footerVariants,initial:"hidden",whileInView:"show",className:"".concat(styles_0.xPaddings," py-8 relative"),children:[(0,jsx_runtime.jsx)("div",{className:"footer-gradient"}),(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_0.innerWidth," mx-auto flex flex-col gap-8"),children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-5",children:[(0,jsx_runtime.jsx)("h4",{className:"font-bold md:text-[64px] text-[44px] text-white",children:"BUY ORBITA"}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]",children:[(0,jsx_runtime.jsx)("img",{src:"/ether.png",alt:"headset",className:"w-[24px] h-[24px] object-contain"}),(0,jsx_runtime.jsx)("span",{className:"font-normal text-[16px] text-white",children:"BUY"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[(0,jsx_runtime.jsx)("div",{className:"mb-[50px] h-[2px] bg-white opacity-10"}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[(0,jsx_runtime.jsx)("h4",{className:"font-extrabold text-[24px] text-white",children:"ORBITA"}),(0,jsx_runtime.jsx)("p",{className:"font-normal text-[14px] text-white opacity-50",children:"Copyright \xa9 2021 - 2022 ORBITA. All rights reserved."}),(0,jsx_runtime.jsx)("div",{className:"flex gap-4",children:socials.map(social=>(0,jsx_runtime.jsx)("img",{src:social.url,alt:social.name,className:"w-[24px] h-[24px] object-contain cursor-pointer"},social.name))})]})]})]})]}),Hero=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.yPaddings," sm:pl-16 pl-6"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-center items-center flex-col relative z-10",children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:textVariant(1.2),className:"flex flex-row justify-center items-center",children:[(0,jsx_runtime.jsx)("h1",{className:styles_0.heroHeading,children:"Orb"}),(0,jsx_runtime.jsx)("h1",{className:styles_0.heroHeading,children:"ita"})]})}),(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:slideIn("right","tween",.2,1),className:"relative w-full md:-mt-[20px] -mt-[12px]",children:[(0,jsx_runtime.jsx)("div",{className:"absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px] sm:hidden"}),(0,jsx_runtime.jsx)("img",{src:"/cover.png",alt:"hero_cover",className:"w-full sm:h-[500px] h-[350px] object-contain rounded-tl-[140px] z-10 relative sm:-mt-[70px] -mt-[50px]"}),(0,jsx_runtime.jsx)("a",{href:"#explore",children:(0,jsx_runtime.jsx)("div",{className:"w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10",children:(0,jsx_runtime.jsx)("img",{src:"/stamp.png",alt:"stamp",className:"sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"})})})]})]})}),About=()=>(0,jsx_runtime.jsxs)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:[(0,jsx_runtime.jsx)("div",{className:"gradient-02 z-0"}),(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto ").concat(styles_0.flexCenter," flex-col"),children:[(0,jsx_runtime.jsx)(TypingText,{title:"| About ORBITA",textStyles:"text-center"}),(0,jsx_runtime.jsxs)(dom_motion.E.p,{variants:motion_fadeIn("up","tween",.2,1),className:"mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white",children:[(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"ORBITA"})," our AI-powered Telegram management bot for crypto projects. It auto-responds, offers customizable replies, and filters out spam. Engage your community with ",(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"FUN GAMES"})," ",", while gaining insights through analytics.",(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"ChatGPT"})," ","integration ensures conversational responses. Create custom images and track cryptocurrencies with ease. Scan CAs for instant details. Streamline communication and elevate your Telegram channel with our powerful bot."," ","of today, using only"," "]}),(0,jsx_runtime.jsx)(dom_motion.E.img,{variants:motion_fadeIn("up","tween",.3,1),src:"/arrow-down.svg",alt:"arrow down",className:"w-[18px] h-[28px] object-contain mt-[28px]"})]})]});var react=__webpack_require__(7294);let Explore=()=>{let[active,setActive]=(0,react.useState)("world-2");return(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings),id:"explore",children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)(TypingText,{title:"| FEATURES",textStyles:"text-center"}),(0,jsx_runtime.jsx)(TitleText,{title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Features of AI-powered Telegram ",(0,jsx_runtime.jsx)("br",{className:"md:block hidden"})," Management BOT"]}),textStyles:"text-center"}),(0,jsx_runtime.jsx)("div",{className:"mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5",children:exploreWorlds.map((world,index)=>(0,jsx_runtime.jsx)(ExploreCard,{...world,index:index,active:active,handleClick:setActive},world.id))})]})})},GetStarted=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex lg:flex-row flex-col gap-8"),children:[(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:planetVariants("left"),className:"flex-1 ".concat(styles_0.flexCenter),children:(0,jsx_runtime.jsx)("img",{src:"/whats-new.png",alt:"get-started",className:"w-[90%] h-[90%] object-contain"})}),(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_fadeIn("right","tween",.2,1),className:"flex-[0.95] flex justify-center flex-col",children:[(0,jsx_runtime.jsx)(TypingText,{title:"| ROADMAP?"}),(0,jsx_runtime.jsx)(TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"OUR GOALS"})}),(0,jsx_runtime.jsx)("div",{className:"mt-[48px] flex flex-wrap justify-between gap-[24px]",children:newFeature.map(feature=>(0,jsx_runtime.jsx)(NewFeatures,{...feature},feature.title))})]})]})}),WhatsNew=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex lg:flex-row flex-col gap-8"),children:[(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_fadeIn("right","tween",.2,1),className:"flex-[0.95] flex justify-center flex-col",children:[(0,jsx_runtime.jsx)(TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"What's Coming...?"})}),(0,jsx_runtime.jsx)("div",{className:"mt-[48px] flex flex-wrap justify-between gap-[24px]",children:newFeatures.map(feature=>(0,jsx_runtime.jsx)(NewFeatures,{...feature},feature.title))})]}),(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:planetVariants("right"),className:"flex-1 ".concat(styles_0.flexCenter),children:(0,jsx_runtime.jsx)("img",{src:"/whats-new.png",alt:"get-started",className:"w-[90%] h-[90%] object-contain"})})]})}),World=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)(TypingText,{title:"| COMMUNITY",textStyles:"text-center"}),(0,jsx_runtime.jsx)(TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Track friends around you and invite them to join ORBITA DEFI LAB"}),textStyles:"text-center"}),(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_fadeIn("up","tween",.3,1),className:"relative mt-[68px] flex w-full h-[550px]",children:[(0,jsx_runtime.jsx)("img",{src:"/map.png",alt:"map",className:"w-full h-full object-cover"}),(0,jsx_runtime.jsx)("div",{className:"absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]",children:(0,jsx_runtime.jsx)("img",{src:"people-01.png",alt:"people",className:"w-full h-full"})}),(0,jsx_runtime.jsx)("div",{className:"absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]",children:(0,jsx_runtime.jsx)("img",{src:"/people-02.png",alt:"people",className:"w-full h-full"})}),(0,jsx_runtime.jsx)("div",{className:"absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]",children:(0,jsx_runtime.jsx)("img",{src:"people-03.png",alt:"people",className:"w-full h-full"})})]})]})}),Insights=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10")}),Feedback=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings)}),Home=()=>(0,jsx_runtime.jsxs)("div",{className:"bg-primary-black overflow-hidden",children:[(0,jsx_runtime.jsx)(Navbar,{}),(0,jsx_runtime.jsx)(Hero,{}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(About,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-03 z-0"}),(0,jsx_runtime.jsx)(Explore,{})]}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(GetStarted,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-04 z-0"}),(0,jsx_runtime.jsx)(WhatsNew,{})]}),(0,jsx_runtime.jsx)(World,{}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(Insights,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-04 z-0"}),(0,jsx_runtime.jsx)(Feedback,{})]}),(0,jsx_runtime.jsx)(Footer,{})]});var pages=Home}},function(__webpack_require__){__webpack_require__.O(0,[566,774,888,179],function(){return __webpack_require__(__webpack_require__.s=5557)}),_N_E=__webpack_require__.O()}]);