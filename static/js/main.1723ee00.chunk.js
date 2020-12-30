(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"name":"BruinPlanner","primaryColor":"#2774AE","stack":"MongoDB, ExpressJS, NodeJS, ReactJS","thumbnail":"assets/project_images/BruinPlanner/thumbnail.jpg","images":[{"original":"assets/project_images/BruinPlanner/thumbnail.jpg","thumbnail":"assets/project_images/BruinPlanner/thumbnail.jpg"},{"original":"assets/project_images/BruinPlanner/2.jpg","thumbnail":"assets/project_images/BruinPlanner/2.jpg"},{"original":"assets/project_images/BruinPlanner/3.jpg","thumbnail":"assets/project_images/BruinPlanner/3.jpg"},{"original":"assets/project_images/BruinPlanner/4.jpg","thumbnail":"assets/project_images/BruinPlanner/4.jpg"}],"description":["Committing to a 4-year university may seem like a major accomplishment and stress reliever as you no longer have to deal with high school; however, the reality is that the pressure is only getting started. At a prestigious college such as the University of California, Los-Angeles, not only do students have to compete and strive for good grades, they have to worry about clubs, and more importantly, the classes they need to take to graduate. As a student myself, I understand that coursework itself is taxing enough; I don\u2019t want to have to constantly meet up with counselors, maintain an updated Google doc, and surf through the UCLA coursework website to formulate a four-year plan that will inevitably change throughout my years at college.","BruinPlanner is an interactive application for UCLA students to design a visual 4-year plan. UCLA has always struggled with presenting course requirements and requisites due to them having too many websites with unnecessary information. If students had an interactive 4-year planner, where they can select their major and visually see what the required classes are with their respective prereqs, it would save them a lot of time. This website allows students to create an account that would give them access to 4-year planners where they can organize their classes based on a major\'s graduation requirements.","BruinPlanner is my first ever full-stack web application! It was created using the MERN stack and extracts UCLA course data from the UCLA DevX API (http://api.ucladevx.com/). The website also utilizes many open-source npm packages such as passport, bcrypt, and react-dnd. A majority of this project was created individually receiving very minor assistance from my UCLA CS Peers."],"sourceCodeLink":"https://github.com/jchangz01/bruinplanner/","projectLink":""},{"name":"ScribblMath","primaryColor":"#61dbfb","stack":"MySQL, ExpressJS, NodeJS, ReactJS","thumbnail":"assets/project_images/ScribblMath/thumbnail.jpg","images":[{"original":"assets/project_images/ScribblMath/thumbnail.jpg","thumbnail":"assets/project_images/ScribblMath/thumbnail.jpg"},{"original":"assets/project_images/ScribblMath/2.jpg","thumbnail":"assets/project_images/ScribblMath/2.jpg"},{"original":"assets/project_images/ScribblMath/3.jpg","thumbnail":"assets/project_images/ScribblMath/3.jpg"}],"description":["Being in a worldwide pandemic, teaching mathematics has certainly become a struggle for both students and teachers. We have all been in that one Zoom call where your math teacher is trying to explain some sort of concept, and due to the lack of tools available, it simply isn\'t a good time for anyone.","Inspired from the lack of math functionality on most video chat platforms, our team created a web application focused on accommodating students and teachers alike for their math needs. ScribblMath is a video chatting platform that implements the staples of video chat like webcams and a chat, but also adds elements that are crucial to conveying complex mathematics in an easy way. These primarily include a virtual drawing board as well as LaTeX math typesetting support in the chat box! This means that your teacher will no longer have to spend hours trying to type out the correct math equation or attempt to draw the ten symbols that each of the equations has that you learned that day. It will look just like the way it does in your textbook!!","The client-side of ScribblMath was constructed using the React framework, while the server-side was written using the Express framework. With a partner, we originally intented this project to be a submission for the Covid Hacks 2020 Hackathon but have decided to continue revising and improving it. My focus on this web application is the frontend UI."],"sourceCodeLink":"https://github.com/AGuyWhoIsBored/scribblmath","projectLink":"https://scribblmath.duncanapple.io/"},{"name":"Goober Eats","primaryColor":"black","stack":"C++","thumbnail":"assets/project_images/GooberEats/thumbnail.jpg","images":[{"original":"assets/project_images/GooberEats/thumbnail.jpg","thumbnail":"assets/project_images/GooberEats/thumbnail.jpg"},{"original":"assets/project_images/GooberEats/2.jpg","thumbnail":"assets/project_images/GooberEats/2.jpg"},{"original":"assets/project_images/GooberEats/3.jpg","thumbnail":"assets/project_images/GooberEats/3.jpg"}],"description":["GooberEats is a simple delivery logistics system that loads and indexes geospatial data (latitude and longitude data for streets in the UCLA/Westwood area) and then uses this data to produce delivery plans and navigation instructions.","This project resembles an UberEats GPS (without the UI) where an optimal delivery path is generated given the starting point, endpoint, and food drop-off points. It implements data structures such as a Hash Map and Hash Function to load and store a text file of GeoCoordinates (latitude and longitude) and StreetSegments (a pair of connected latitude/longitude coordinates associated with a street name) in a given region. Using an open hash map, we can map GeoCoordinates to StreetSegments and achieve an O(1) time complexity for lookup. With this fast search speed, GooberEats utilizes the path search algorithm, A* to generate an optimal point to point route between two GeoCoordinates. Given this list of GeoCoordinates, it associates pairs of latitude and longitude coordinates to create a list of StreetSegments and then outputs this data into textual GPS navigation instructions such \\"Proceed north on Broxton Avenue for 0.08 miles\\". This algorithm is repeated for a sequence of point to point deliveries ordered using a simple estimation technique to avoid having to deal with the time complexity of the Traveling Salesmen Problem, O(n!) but still provide an efficient delivery order.","GooberEats is written in C++ and was assigned as Project 4 in my Introduction to Computer Science II (CS32- Data Structures and Algorithms) class at UCLA."],"sourceCodeLink":"https://github.com/jchangz01/UCLA-CS32/tree/e514d87b52ecf29e23be5f0f08e163ed08948241/Project4","projectLink":""},{"name":"BruinDining+","primaryColor":"#03A9F4","stack":"Firebase, NodeJS, React Native","thumbnail":"assets/project_images/BruinDining+/thumbnail.jpg","images":[{"original":"assets/project_images/BruinDining+/thumbnail.jpg","thumbnail":"assets/project_images/BruinDining+/thumbnail.jpg"},{"original":"assets/project_images/BruinDining+/2.jpg","thumbnail":"assets/project_images/BruinDining+/2.jpg"},{"original":"assets/project_images/BruinDining+/3.jpg","thumbnail":"assets/project_images/BruinDining+/3.jpg"}],"description":["BruingDining+ is an app that displays the food options for the dining halls at UCLA. It provides users with crowd-sourced images of each dish and the option to rate and view the ratings of each dish. Students can use our application to gauge other food consumers\' opinions and ratings on the quality of the food at the UCLA dining halls. Our group\'s goal for this app is to create a fast and efficient way to help UCLA students decide which dining hall to dine at.","We built this app using the React Native framework as our frontend and Node and Firebase as our backend. BruinDining+ was created during a 12 hour hackathon, Hack on the Hill 7 hosted by UCLA ACM Hack. My contributions towards this app focused primarily on the UI design (JSX).","NOTE: This app is only a prototype and is not at all 100% complete"],"sourceCodeLink":"https://github.com/jchangz01/bruin-dining-plus","projectLink":""},{"name":"Kontagion","primaryColor":"#8c8c5c","stack":"C, C++","thumbnail":"assets/project_images/Kontagion/thumbnail.jpg","images":[{"original":"assets/project_images/Kontagion/thumbnail.jpg","thumbnail":"assets/project_images/Kontagion/thumbnail.jpg"},{"original":"assets/project_images/Kontagion/2.jpg","thumbnail":"assets/project_images/Kontagion/2.jpg"},{"original":"assets/project_images/Kontagion/3.jpg","thumbnail":"assets/project_images/Kontagion/3.jpg"},{"original":"assets/project_images/Kontagion/4.jpg","thumbnail":"assets/project_images/Kontagion/4.jpg"}],"description":["Kotagion is a survival game that revolves around the main character, Socrates exterminating bacteria. Brief lore of the game is as follows, Dr. Evyyl has been trying to breed trillions of dangerous bacteria to release into the world\u2019s public restrooms. Socrates, an amateur bacteriologist has agreed to be shrunk into microscopic proportions and deposited into a petri dish to exterminate the bacteria before they can be bred. As a player, you are to control Socrates and exterminate as many bacteria as possible.","The ultimate task of Kontagion is to achieve the highest round or score. For every bacteria you exterminate, you are awarded a set number of points. Upon killing all bacteria in a petri dish, you will advance to a more infected petri dish. Throughout each round, random power-ups will appear to grant you more score or refill Socrate\u2019s ammunition. As mentioned above, Kontagion is a survival game, so good luck staying alive!","This game was created for my data structures and algorithms class (CS32) to demonstrate my understanding of polymorphism and inheritance in C++. For example, all objects in this game (Socrates, Bacteria, etc.) derive from an abstract base class that defines methods that identify positioning, health (if valid), and more. In this project, I was only responsible for writing code for the logic and functionality of the game. All sprite designs and some code were provided by the instructor."],"sourceCodeLink":"https://github.com/jchangz01/UCLA-CS32/tree/e514d87b52ecf29e23be5f0f08e163ed08948241/Project3","projectLink":""},{"name":"Typing Mania","primaryColor":"#B22222","stack":"Block Code (HTML, CSS, Javascript)","thumbnail":"assets/project_images/TypingMania/thumbnail.jpg","images":[{"original":"assets/project_images/TypingMania/thumbnail.jpg","thumbnail":"assets/project_images/TypingMania/thumbnail.jpg"},{"original":"assets/project_images/TypingMania/2.jpg","thumbnail":"assets/project_images/TypingMania/2.jpg"},{"original":"assets/project_images/TypingMania/3.jpg","thumbnail":"assets/project_images/TypingMania/3.jpg"},{"original":"assets/project_images/TypingMania/4.jpg","thumbnail":"assets/project_images/TypingMania/4.jpg"}],"description":["Want to improve your typing speed and accuracy? If so, Typing Mania is the application for you! Typing Mania is a typing test used to determine the user\u2019s typing speed. Users will have 60 seconds to type as many words as possible, and in the end, results are displayed.","This application was created using the block code offered by code.org. When looking at Typing Mania\u2019s raw code, we will notice that the block code acts as a layer over the native HTML, CSS, and Javascript, the actual source code of our application. Typing Mania was created individually as a final project for my AP Computer Science Principles class in high school!"],"sourceCodeLink":"https://studio.code.org/projects/applab/W6fYBRljENKuJSX00AyUz5hozLin84DeaoAYgPt1VFE/view","projectLink":"https://studio.code.org/projects/applab/W6fYBRljENKuJSX00AyUz5hozLin84DeaoAYgPt1VFE"}]')},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(37),s=a(4),c=a(19),r=a.n(c),o=(a(44),a(9)),l=a(10),h=a(12),j=a(11),d=a(1),b=a.n(d),m=(a(45),a.p+"static/media/home-profile.cd42f7d1.png"),p=a.p+"static/media/portfolio_logo_black.cbb82d94.svg";function u(e){return Object(i.jsx)("div",{id:"navbar-container",className:"width-size center",children:Object(i.jsxs)("nav",{id:"navbar-contents",children:[Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#about",children:"About"})},"About"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#contact",children:"Contact"})},"Contact"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#",id:"logo",children:Object(i.jsx)("img",{id:"portfolio-logo",alt:"JC",src:p})})},"Home"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#projects",children:"Projects"})},"Projects"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#hire",children:"Hire Me"})},"Hire")]})})}var g=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"content-container",children:[Object(i.jsx)("header",{className:"fade-in-6",children:Object(i.jsx)(u,{})}),Object(i.jsx)("section",{children:Object(i.jsxs)("div",{className:"width-size fade-in-4",id:"home-main",children:[Object(i.jsx)("div",{className:"home-main-content ",children:Object(i.jsxs)("div",{style:{marginBottom:"80px"},children:[Object(i.jsx)("h1",{className:"home-main-title",children:"Justin Kyle"}),Object(i.jsx)("h1",{className:"home-main-title",children:"Chang"}),Object(i.jsx)("h2",{className:"home-main-subtitle",children:"2nd Year Computer Science Student at UCLA"}),Object(i.jsx)("p",{style:{fontSize:"64px",marginBottom:"36px"},children:" . . . "}),Object(i.jsx)("h3",{className:"home-main-subsubtitle",children:Object(i.jsx)("a",{href:"/#about",children:"Learn more about Justin"})})]})}),Object(i.jsxs)("div",{className:"home-main-content",children:[Object(i.jsx)("img",{src:m,alt:"Did not load, please refresh",className:"home-main-pic float"}),Object(i.jsx)("div",{className:"home-main-circ float",children:Object(i.jsx)("div",{className:"home-main-subcirc"})})]})]})})]})}}]),a}(b.a.Component),x=(a(46),a(3)),O=a(5),f=a.p+"static/media/about-profile.4576f33e.JPG";function y(e){return Object(i.jsx)("div",{id:"navbar-container",className:"width-size center",children:Object(i.jsxs)("nav",{id:"navbar-contents",children:[Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#about",children:"About"})},"About"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#contact",children:"Contact"})},"Contact"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#",id:"logo",children:Object(i.jsx)("img",{id:"portfolio-logo",alt:"JC",src:p})})},"Home"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#projects",children:"Projects"})},"Projects"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#hire",children:"Hire Me"})},"Hire")]})})}var v=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"content-container",children:[Object(i.jsx)("header",{children:Object(i.jsx)(y,{})}),Object(i.jsx)("section",{children:Object(i.jsxs)("div",{className:"width-size fade-in-4",id:"about-main",children:[Object(i.jsx)("div",{className:"about-main-content",style:{textAlign:"right"},children:Object(i.jsx)("img",{className:"about-main-pic",src:f,alt:"Did not load, please refresh"})}),Object(i.jsx)("div",{className:"about-main-content",children:Object(i.jsxs)("div",{style:{marginLeft:"40px"},children:[Object(i.jsx)("h1",{className:"about-main-title",children:"About Me"}),Object(i.jsx)("hr",{className:"about-main-linebreak"}),Object(i.jsxs)("p",{className:"about-main-paragraph",children:["Hello! My name is ",Object(i.jsx)("b",{children:"Justin Kyle Chang"}),". I am a 2nd-year student at UCLA (from the Bay Area) pursuing a B.E. degree in Computer Science and aspiring to be a future software engineer."]}),Object(i.jsx)("p",{className:"about-main-paragraph",children:"My focus and interest lie in web development, particularly in front end design (HTML5, CSS3, JS/JSX); however, I am open to exploring all fields of Computer Science! I am also knowledgeable in backend development (Node.js, Express, and MongoDB), C++ (Data structures and algorithms), Bash / Shell, and Git."}),Object(i.jsx)("p",{className:"about-main-paragraph",children:"I love to solve problems, work on side projects, collaborate in teams, and during my free time, go on runs and hikes! I am currently looking for a 2021 summer internship!"}),Object(i.jsxs)("p",{className:"about-main-paragraph",children:["Check out my projects ",Object(i.jsx)("a",{href:"/#projects",children:"here"})," and/or connect with me ",Object(i.jsx)("a",{href:"/#contact",children:"here"}),"."]}),Object(i.jsxs)("div",{className:"about-main-socials",children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/j.changz/",children:Object(i.jsx)(x.a,{icon:O.c})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/justin-kyle-chang-31582419b/",children:Object(i.jsx)(x.a,{icon:O.d})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/justin.chang.54772/",children:Object(i.jsx)(x.a,{icon:O.a})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/jchangz01",children:Object(i.jsx)(x.a,{icon:O.b})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tiktok.com/@j.changz?lang=en",children:Object(i.jsx)(x.a,{icon:O.f})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.strava.com/athletes/51901493",children:Object(i.jsx)(x.a,{icon:O.e})})]})]})})]})})]})}}]),a}(b.a.Component),w=a(35),k=a(36),C=a.n(k),N=(a(65),a(15)),S=a(20),_=S[0],A=S.slice(1,S.length);function L(e){return Object(i.jsx)("div",{id:"navbar-container",className:"width-size center",children:Object(i.jsxs)("nav",{id:"navbar-contents",children:[Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#about",children:"About"})},"About"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#contact",children:"Contact"})},"Contact"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#",id:"logo",children:Object(i.jsx)("img",{id:"portfolio-logo",alt:"JC",src:p})})},"Home"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#projects",children:"Projects"})},"Projects"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#hire",children:"Hire Me"})},"Hire")]})})}function P(e){return Object(i.jsxs)(b.a.Fragment,{children:[Object(i.jsxs)("h2",{className:"project-title",children:["Introducing ",Object(i.jsxs)("span",{style:{color:e.project.primaryColor},children:[e.project.name,"!"]})]}),Object(i.jsxs)("h3",{className:"project-stack",children:["Tech Stack: ",e.project.stack]}),Object(i.jsxs)("div",{className:e.latest?"width-size":null,children:[Object(i.jsx)("div",{className:"project-left-section",children:Object(i.jsx)(C.a,{items:e.project.images})}),Object(i.jsxs)("div",{className:"project-right-section",children:[e.project.description.map((function(e){return Object(i.jsxs)(b.a.Fragment,{children:[Object(i.jsx)("p",{children:e}),Object(i.jsx)("br",{})]})})),e.project.sourceCodeLink?Object(i.jsx)("a",{href:e.project.sourceCodeLink,target:"_blank",rel:"noreferrer",style:{marginRight:"16px"},children:Object(i.jsxs)("button",{className:"project-link",children:[Object(i.jsx)(x.a,{icon:N.c}),Object(i.jsx)("h3",{style:{display:"inline",border:"none"},children:"Source Code"})]})}):null,e.project.projectLink?Object(i.jsx)("a",{href:e.project.projectLink,target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("button",{className:"project-link",children:[Object(i.jsx)(x.a,{icon:N.d}),Object(i.jsx)("h3",{style:{display:"inline",border:"none"},children:"Link to Project"})]})}):null]})]})]})}var B=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{id:"latest-project-content",children:Object(i.jsx)("div",{style:{flexBasis:"100%"},children:Object(i.jsx)(P,{latest:!0,project:_})})})}}]),a}(b.a.Component);function M(e){return Object(i.jsxs)("div",{className:"all-projects-entry",onMouseEnter:function(){e.toggleActiveOn(e.index)},onMouseLeave:function(){e.toggleActiveOff()},onClick:function(){return e.onclick(e.index)},children:[e.active===e.index?Object(i.jsx)(b.a.Fragment,{children:Object(i.jsxs)("div",{className:"all-projects-entry-selected",children:[Object(i.jsx)("h4",{children:e.project.name}),Object(i.jsx)("p",{children:Object(i.jsx)("u",{children:"Learn more"})})]})}):null,Object(i.jsx)("img",{src:e.project.thumbnail,alt:"error",style:{width:"100%",height:"100%"},await:!0})]})}var T=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={active:null},e.toggleActiveOn=function(t){e.setState({active:t})},e.toggleActiveOff=function(){e.setState({active:null})},e}return Object(l.a)(a,[{key:"render",value:function(){for(var e=[],t=0,a=[],n=0;n<this.props.data.length;n++)n%3===0&&0!==n&&(a[t]=e,t++,e=[]),e[n%3]=Object(i.jsx)(M,{index:n,active:this.state.active,toggleActiveOn:this.toggleActiveOn,toggleActiveOff:this.toggleActiveOff,onclick:this.props.popupOn,project:this.props.data[n]});return e.length>0&&(a[t]=e),Object(i.jsx)("div",{id:"all-projects-grid",children:a.map((function(e,t){return Object(i.jsx)("div",{className:"all-projects-row",children:e},t)}))})}}]),a}(b.a.Component);function I(e){return Object(i.jsxs)("div",{className:"popup",children:[Object(i.jsx)("div",{className:"popup white-overlay",onClick:e.onClick}),Object(i.jsx)("div",{className:"box animate",children:Object(i.jsx)(P,{latest:!1,project:e.project})})]})}var z=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={messageIndex:null},e.triggerPopupOn=function(t){e.setState({messageIndex:t}),document.querySelector("body").classList.add("no-scroll")},e.triggerPopupOff=function(){e.setState({messageIndex:null}),document.querySelector("body").classList.remove("no-scroll")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"content-container",style:{height:"auto"},children:[Object(i.jsx)("header",{children:Object(i.jsx)(L,{})}),Object(i.jsx)("section",{style:{width:"97.88vw"},children:Object(i.jsx)("div",{className:"width-size fade-in-4",id:"project-main",children:Object(i.jsxs)("div",{className:"project-main-content",children:[Object(i.jsx)("h1",{id:"project-main-title",children:"Projects"}),Object(i.jsx)("h2",{id:"project-main-subtitle",children:"Check out some of my personal works!"}),Object(i.jsx)("hr",{className:"project-main-linebr"}),Object(i.jsx)("p",{id:"project-main-des",children:"The projects displayed below are a collection of some of my works. These can range from personal projects, group projects created during hackathons, or assigned school works. Each project below will be accompanied by its description, the associated source code, and the coding languages/tech stack used to develop the product. Some projects will have links to the complete product if it is hosted online. Please note that most of these projects are a work in progress meaning they are not perfect and improvements can be made. Supporting my previous statement, I consider my projects as statements of experience in a particular programming language(s). Overall, I had lots of fun, gained tons of knowledge, nd exceeded many of the learning outcomes I had in mind while creating these projects! Click the arrow below to check out my latest piece of work and navigate below that to view a gallery of all my works."}),Object(i.jsx)(w.Link,{to:"latest",spy:!0,smooth:!0,duration:320,children:Object(i.jsx)(x.a,{className:"scroll-down-icon",icon:N.a})})]})})}),Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"project-section",children:Object(i.jsxs)("div",{className:"fade-in-4 width-size",id:"latest",children:[Object(i.jsxs)("div",{style:{paddingTop:"3vh"},children:[Object(i.jsx)("hr",{style:{height:"4px",backgroundColor:"black",border:"none",display:"inline-block",marginBottom:"16px",width:"10%"}}),Object(i.jsx)("h1",{className:"project-section-title",children:"Latest Project"}),Object(i.jsx)("hr",{style:{height:"4px",backgroundColor:"black",border:"none",display:"inline-block",marginBottom:"16px",width:"60%"}})]}),Object(i.jsx)(B,{})]})})}),Object(i.jsxs)("section",{children:[null!==this.state.messageIndex?Object(i.jsx)(I,{onClick:this.triggerPopupOff,project:A[this.state.messageIndex]}):null,Object(i.jsx)("div",{id:"all-projects-content",children:Object(i.jsx)("div",{className:"fade-in-4 width-size",style:{width:"72vw"},children:Object(i.jsxs)("div",{style:{textAlign:"center"},children:[Object(i.jsx)("h1",{id:"all-projects-title",children:"Project Gallery"}),Object(i.jsx)("h2",{id:"all-projects-subtitle",children:"Hover over each thumbnail and click to learn more!"}),Object(i.jsx)("hr",{style:{width:"640px",margin:"3vh auto"}}),Object(i.jsx)(T,{data:A,popupOn:this.triggerPopupOn,popupOff:this.triggerPopupOff})]})})})]})]})}}]),a}(b.a.Component);a(66);function E(e){return Object(i.jsx)("div",{id:"navbar-container",className:"width-size center",children:Object(i.jsxs)("nav",{id:"navbar-contents",children:[Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#about",children:"About"})},"About"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#contact",children:"Contact"})},"Contact"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#",id:"logo",children:Object(i.jsx)("img",{id:"portfolio-logo",alt:"JC",src:p})})},"Home"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#projects",children:"Projects"})},"Projects"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#hire",children:"Hire Me"})},"Hire")]})})}function H(e){return Object(i.jsxs)("div",{id:"contact-main-icon-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/j.changz/",className:"icon-circle instagram",children:Object(i.jsx)(x.a,{className:"icon",icon:O.c})}),Object(i.jsx)("h4",{className:"icon-name",children:"Instagram"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/justin-kyle-chang-31582419b/",className:"icon-circle linkedin",children:Object(i.jsx)(x.a,{className:"icon",icon:O.d})}),Object(i.jsx)("h4",{className:"icon-name",children:"LinkedIn"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/justin.chang.54772/",className:"icon-circle facebook",children:Object(i.jsx)(x.a,{className:"icon",icon:O.a})}),Object(i.jsx)("h4",{className:"icon-name",children:"Facebook"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/jchangz01",className:"icon-circle github",children:Object(i.jsx)(x.a,{className:"icon",icon:O.b})}),Object(i.jsx)("h4",{className:"icon-name",children:"GitHub"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tiktok.com/@j.changz?lang=en",className:"icon-circle tiktok",children:Object(i.jsx)(x.a,{className:"icon",icon:O.f})}),Object(i.jsx)("h4",{className:"icon-name",children:"TikTok"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.strava.com/athletes/51901493",className:"icon-circle strava",children:Object(i.jsx)(x.a,{className:"icon",icon:O.e})}),Object(i.jsx)("h4",{className:"icon-name",children:"Strava"})]})]})}var J=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={message:"",updateKey:0},e.copyToClipboard=function(t){var a="personal"===t?"justinklchang@yahoo.com":"jchangz01@g.ucla.edu",i=document.createElement("textarea");i.value=a,i.style.top="0",i.style.left="0",i.style.position="fixed",document.body.appendChild(i),i.focus(),i.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n),e.setState({message:t,updateKey:e.state.updateKey+1})}catch(s){console.error("Fallback: Oops, unable to copy",s)}document.body.removeChild(i)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{id:"content-container",children:[Object(i.jsx)("header",{children:Object(i.jsx)(E,{})}),Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"width-size fade-in-4",id:"contact-main",children:Object(i.jsxs)("div",{className:"contact-main-content",children:[Object(i.jsx)("h1",{id:"contact-main-title",children:"Contact Me"}),Object(i.jsx)("h2",{id:"contact-main-subtitle",children:"Get in touch with me now!"}),Object(i.jsxs)("div",{id:"contact-main-email-container",children:[Object(i.jsxs)("h3",{className:"email-content",children:["Personal Email: ",Object(i.jsxs)("span",{onClick:function(){return e.copyToClipboard("personal")},children:["justinklchang@yahoo.com",Object(i.jsx)(x.a,{style:{marginLeft:"12px"},icon:N.b})]})]}),Object(i.jsxs)("h3",{className:"email-content",children:["School Email: ",Object(i.jsxs)("span",{onClick:function(){return e.copyToClipboard("school")},children:[" jchangz01@g.ucla.edu",Object(i.jsx)(x.a,{style:{marginLeft:"12px"},icon:N.b})]})]})]}),this.state.message?Object(i.jsx)("div",{className:"contact-message fade-in-2",children:"Copied to Clipboard"},this.state.updateKey):null,Object(i.jsx)(H,{})]})})})]})}}]),a}(b.a.Component);a(67);function U(e){return Object(i.jsx)("div",{id:"navbar-container",className:"width-size center",children:Object(i.jsxs)("nav",{id:"navbar-contents",children:[Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#about",children:"About"})},"About"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#contact",children:"Contact"})},"Contact"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#",id:"logo",children:Object(i.jsx)("img",{id:"portfolio-logo",alt:"JC",src:p})})},"Home"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#projects",children:"Projects"})},"Projects"),Object(i.jsx)("ul",{children:Object(i.jsx)("a",{href:"/#hire",children:"Hire Me"})},"Hire")]})})}var G=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"content-container",children:[Object(i.jsx)("header",{children:Object(i.jsx)(U,{})}),Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"width-size fade-in-4",id:"hire-main",children:Object(i.jsxs)("div",{className:"hire-main-content",children:[Object(i.jsxs)("div",{style:{marginBottom:"80px"},children:[Object(i.jsx)("h2",{id:"hire-name",children:"Justin Kyle Chang"}),Object(i.jsx)("h3",{children:"Software Engineer Intern"}),Object(i.jsx)("h3",{children:"Bay Area \xb7 San Francisco \xb7 Silicon Valley"})]}),Object(i.jsxs)("div",{style:{marginBottom:"80px"},children:[Object(i.jsx)("h3",{id:"hire-advertise",children:"Please consider hiring me by checking out my resume and reaching out to me!"}),Object(i.jsx)("h4",{children:Object(i.jsx)("u",{children:Object(i.jsx)("a",{target:"_blank",href:"/#resume",children:"Link to Resume"})})}),Object(i.jsx)("h4",{children:"justinklchang@yahoo.com"}),Object(i.jsx)("h4",{children:"(707) 534-8001"})]}),Object(i.jsxs)("div",{style:{marginBottom:"32px"},children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/j.changz/",className:"hire-social",children:Object(i.jsx)(x.a,{icon:O.c})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/justin-kyle-chang-31582419b/",className:"hire-social",children:Object(i.jsx)(x.a,{icon:O.d})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/justin.chang.54772/",className:"hire-social",children:Object(i.jsx)(x.a,{icon:O.a})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/jchangz01",className:"hire-social",children:Object(i.jsx)(x.a,{icon:O.b})})]})]})})})]})}}]),a}(b.a.Component),K=a.p+"static/media/resume.a75ee997.png";r.a.render(Object(i.jsx)(n.a,{basename:"",children:Object(i.jsx)("main",{children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{path:"/",component:g,exact:!0}),Object(i.jsx)(s.a,{path:"/about",component:v,exact:!0}),Object(i.jsx)(s.a,{path:"/contact",component:J,exact:!0}),Object(i.jsx)(s.a,{path:"/projects",component:z,exact:!0}),Object(i.jsx)(s.a,{path:"/hire",component:G,exact:!0}),Object(i.jsx)(s.a,{path:"/resume",component:function(){return Object(i.jsx)("div",{style:{textAlign:"center"},children:Object(i.jsx)("img",{src:K,alt:"Please refresh",style:{height:"1080px",width:"auto"}})})},exact:!0}),Object(i.jsx)(s.a,{component:function(){return Object(i.jsx)("h3",{children:"Error 404 - Page Not Found!"})}})]})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1723ee00.chunk.js.map