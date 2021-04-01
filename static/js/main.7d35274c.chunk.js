(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=function(){return r.a.createElement("div",{className:"jumbotron",style:{backgroundImage:"linear-gradient(to right,rgba(0, 0, 0, 0.9),rgba(181, 166, 127, 0.3)),url('".concat("/portfolio/profile.jpg","')")}},r.a.createElement("div",{className:"hero-text"},r.a.createElement("h1",{style:{fontSize:"5rem"}},"Aditya Mahale"),r.a.createElement("p",null,"Senior Software Engineer"),r.a.createElement("i",{className:"fa fa-chevron-down mt-2","aria-hidden":"true"})))},s=a(1),c=a(2),d=a(4),m=a(3),p=a(19),u=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).links=["About","Experience","Education","Projects","Skills","Contact"],e.collapseRef=r.a.createRef(),e.state={scrollTop:0,screenWidth:0},e.componentDidMount=function(){window.addEventListener("scroll",e.handleScroll),e.setState({screenWidth:window.innerWidth})},e.componentWillUnmount=function(){window.removeEventListener("scroll",e.handleScroll)},e.handleScroll=function(t){var a=t.target.scrollingElement.scrollTop;e.setState({scrollTop:a})},e.changeBackground=function(){var t="navbar navbar-expand-lg fixed-top navbar-dark";return e.state.scrollTop>100?t+" silver":t},e.handleCollapse=function(){e.state.screenWidth<768&&e.collapseRef.current.click()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:this.changeBackground()},r.a.createElement("button",{ref:this.collapseRef,className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},this.links.map((function(t){return r.a.createElement(p.Link,{key:t,style:{cursor:"pointer"},className:"nav-item nav-link text-light px-4 py-3",to:"#".concat(t),smooth:!0,offset:-80,duration:500,onClick:e.handleCollapse},t)})))))}}]),a}(n.Component),f=function(){return r.a.createElement("header",null,r.a.createElement(u,null),r.a.createElement(l,null))},g=a(20),h=function(e){var t=e.renderHorizontalRule;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"#About",className:"gold-text"},"About"),r.a.createElement("p",{className:"gold-text text-justify"},"A passionate Software Engineer with a background working effectively in dynamic environments. Fluent in programming languages such as Python, JavaScript, and Java. Proven history of developing useful and efficient automation frameworks. Quickly learn and master new technologies and working in both team and self-directed settings."),t())},b=function(e){var t=e.rows;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{key:e.id,className:"row m-3 border-block-left gold-text"},r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement("h4",{className:"silver-text"},e.title),r.a.createElement("h6",null,e.subtitle),e.description&&e.description.length>1?r.a.createElement("ul",null,e.description.map((function(e){return r.a.createElement("li",{className:"text-justify",key:e.id},e.description)}))):e.description.map((function(e){return r.a.createElement("p",{className:"text-justify",key:e.id},e.description)}))),r.a.createElement("div",{className:"col-12 col-md-3 duration silver-text"},e.duration))})))},v=function(e){var t=e.experience,a=e.renderHorizontalRule;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"#Experience",className:"gold-text"},"Experience"),r.a.createElement(b,{rows:t}),a())},E=function(e){var t=e.education,a=e.renderHorizontalRule;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"#Education",className:"gold-text"},"Education"),r.a.createElement(b,{rows:t}),a())},y=function(e){var t=e.project,a=e.onSelect,n=t.image,i=t.title,o=t.link;return r.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 mb-4"},r.a.createElement("div",{className:"card",style:{boxShadow:"4px 4px 2px 2px rgba(153, 151, 125, 0.4)"}},r.a.createElement("img",{className:"card-img-top",src:n,alt:i}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title gold-text"},i),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",className:"btn gold text-light",onClick:function(){return a(t)},"data-toggle":"modal","data-target":"#myModal"},"Show info")),r.a.createElement("div",{className:"col justify-content-center align-self-center"},o&&r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"gold-text"},"See project ",r.a.createElement("i",{className:"fa fa-external-link"})))))))},k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderDescription=function(e){return e&&e.map((function(e){return r.a.createElement("p",{key:e.id,className:"text-justify"},e.point)}))},e.renderCertificates=function(e){return e&&r.a.createElement("div",{className:"mb-3"},e.length>1?r.a.createElement("h5",{className:"silver-text"},"Associated Certificates:"):r.a.createElement("h5",{className:"silver-text"},"Associated Certificate:"),e.map((function(e){return r.a.createElement("a",{key:e.id,href:e.link,target:"_blank",rel:"noopener noreferrer",className:"gold-text d-block mb-1"},e.label," ",r.a.createElement("i",{className:"fa fa-external-link"}))})))},e.renderSkills=function(e){return r.a.createElement("div",{className:"mb-3"},r.a.createElement("h5",{className:"silver-text"},"Skills, Tools or Software:"),e&&e.map((function(e){return r.a.createElement("span",{key:e,className:"badge badge-pill gold text-light ml-1"},e)})))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.project,t=e.title,a=e.description,n=e.skills,i=e.associatedCertificates;return r.a.createElement("div",{className:"modal fade",id:"myModal",role:"dialog"},r.a.createElement("div",{className:"modal-dialog modal-lg"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header gold text-light"},r.a.createElement("h4",{className:"modal-title"},t),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),r.a.createElement("div",{className:"modal-body gold-text"},this.renderDescription(a),this.renderSkills(n),this.renderCertificates(i)))))}}]),a}(n.Component),w=function(e){var t=e.projects,a=e.selectedProject,n=e.onSelect,i=e.renderHorizontalRule;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"#Projects",className:"gold-text"},"Projects"),r.a.createElement("div",{className:"row"},r.a.createElement(k,{project:a}),t.map((function(e){return r.a.createElement(y,{key:e.id,project:e,onSelect:n})}))),i())},S=a(13),x=function(e){var t=e.renderHorizontalRule,a=e.skills;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"#Skills",className:"gold-text"},"Skills"),r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-4 col-lg-3 mb-4"},r.a.createElement("div",{className:"card",style:{boxShadow:"4px 4px 2px 2px rgba(153, 151, 125, 0.4)"}},r.a.createElement("div",{className:"card-header",style:{padding:"50px"}},r.a.createElement(S.a,{strokeWidth:5,value:e.profiency,text:"".concat(e.profiency,"%"),styles:Object(S.b)({pathColor:"#7d7b64",textColor:"#7d7b64"})})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title gold-text"},e.domain),e.names&&e.names.map((function(e){return r.a.createElement("span",{key:e,className:"badge badge-pill text-light gold ml-2"},e)})))))}))),t())},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"#Contact",className:"gold-text"},"Contact"),r.a.createElement("div",{className:"LI-profile-badge","data-version":"v1","data-size":"medium","data-locale":"en_US","data-type":"horizontal","data-theme":"light","data-vanity":"aditya-mahale"},r.a.createElement("a",{className:"LI-simple-link",href:"https://in.linkedin.com/in/aditya-mahale?trk=profile-badge"},"Aditya Mahale")))},j=[{id:1,title:"Plant Adoption Website (Full-Stack Web Development)",link:"https://adoptplants.herokuapp.com/home",image:"/portfolio/adopt.jpg",description:[{id:1,point:"Taking inspiration from a podcast, I have created a website for the adoption of indoor plants. I have developed the website using React.js and Bootstrap for the front-end and Node.js/Express.js and MongoDB for the back-end."}],skills:["React","Redux","JSX","Bootstrap","Node.js","Express","MongoDB"],associatedCertificates:[{id:1,label:"Full-Stack Web Development with React",link:"https://coursera.org/share/e69a795b02286b518df1342d4ec9fd24"}]},{id:2,title:"Front-End Web Development with React: Honors Assignment",image:"/portfolio/online_portfolio.jpg",description:[{id:1,point:"The project is created as a part of the honors assignment of the course 'Front-End Web Development with React' on the Coursera platform. This project is a single-page responsive online portfolio developed using React.js and Bootstrap."}],skills:["React","Redux","JSX","Bootstrap"],associatedCertificates:[{id:1,label:"Front-End Web Development with React",link:"https://coursera.org/share/bbca02ecff49611b62041b0dd9808a9a"},{id:2,label:"Front-End Web UI Frameworks and Tools: Bootstrap 4",link:"https://coursera.org/share/625dc4bf6479220f6f3aacef6943dc0f"}]},{id:3,title:"Web Design for Everbody Capstone: Hiking portfolio",image:"/portfolio/hiking_portfolio.jpg",link:"http://adwde.byethost22.com/wdecapstone/capstone.html",description:[{id:1,point:"The project is a hiking portfolio created as a part of the 'Web Design for Everybody' specialization Capstone project on Coursera. The capstone project mainly focuses on building syntactically and semantically correct responsive web design targeted on multiple devices. The web page has been developed from scratch using HTML, CSS, and JavaScript."}],skills:["Web Design","HTML","CSS","JavaScript"],associatedCertificates:[{id:1,label:"Web Design for Everybody: Basics of Web Development & Coding Specialization",link:"https://coursera.org/share/36f332f2786f6f676d058b8904a26268"},{id:2,label:"Introduction to HTML5",link:"https://coursera.org/share/1acbef0d06db727ae022f6ffa9eb6087"},{id:3,label:"Introduction to CSS3",link:"https://coursera.org/share/570e90b25ff91466ad2054755ee361df"},{id:4,label:"Interactivity with JavaScript",link:"https://coursera.org/share/d22c159fd261d1341d55c54bbe702e92"},{id:5,label:"Web Design for Everybody Capstone",link:"https://coursera.org/share/99fe272f4cd5fc590caf56066da8c059"},{id:6,label:"Advanced Styling with Responsive Design",link:"https://coursera.org/share/d2896e922b2521550b9fe425ee2754b0"}]},{id:4,title:"IBM Data Science Project",image:"/portfolio/data_science.jpg",link:"https://adityacourse.blogspot.com/2019/11/ibm-data-science-capstone-project.html",description:[{id:1,point:"The purpose of this capstone project is to find the most suitable location for the delivery service owner to open limited delivery outlets in different parts of the Pune city. Although several locations can be chosen based on distance, the owner wants to find the most popular types of food consumed across different parts of the city to set up relevant outlets in relevant parts of the city. Also, there is a budgetary restriction to the opening of the number of outlets. By using data science tools and machine learning models such as clustering, this project aims to provide solutions to these problems."}],skills:["Data Science","Machine Learning","Python Programming","Data Analysis","Data Visualization","Numpy","Pandas","Ipython","Predictive Modelling","SQL"],associatedCertificates:[{id:1,label:"IBM Data Science Professional Certificate",link:"https://coursera.org/share/1cdc9ecd9a67d5d780abb86aac5b7850"},{id:2,label:"Databases and SQL for Data Science",link:"https://coursera.org/share/89c41021295d10435311d9466cf4c3b9"},{id:3,label:"Python for Data Science and AI",link:"https://coursera.org/share/00af0b33c853c4944c0fe92571b703ab"},{id:4,label:"Data Science Methodology",link:"https://coursera.org/share/bdcf66d1e71effccfbbfd871ec577139"},{id:5,label:"Data Analysis with Python",link:"https://coursera.org/share/49e5c2959e671fa93d79a60dd642c4c3"},{id:6,label:"What is Data Science?",link:"https://coursera.org/share/26e028d2098e0883b596285303a28a5a"},{id:7,label:"Tools for Data Science",link:"https://coursera.org/share/4b6fcb6b3b7e0cc54d606c73efa6c246"},{id:8,label:"Data Visualization with Python",link:"https://coursera.org/share/d7e97a21643e2ebe1dff2aeb6dc81132"},{id:9,label:"Machine Learning with Python",link:"https://coursera.org/share/fea2852284db6b587d462050d8dfdaba"},{id:10,label:"Applied Data Science Capstone",link:"https://coursera.org/share/d2c4fab5d1fb6528b9c16e8595162667"}]},{id:5,title:"Audio Equalizer",image:"/portfolio/final_year.jpg",description:[{id:1,point:"- Implemented graphic equalizer on a hardware platform for the processing of real-time audio signals using digital signal processor TDA7315."},{id:2,point:"- Used AVR platform, peripheral interfacing hardware - Keypad and LCD and stereo power amplifier."},{id:3,point:"- Programmed using Embedded C."}],skills:["Embedded C","MATLAB","LabVIEW"]},{id:6,title:"Eye Gaze Tracking System",image:"/portfolio/third_year.jpg",description:[{id:1,point:"- The project's goal was to provide accessibility to the digital world for people with motor disabilities."},{id:2,point:"- Built pupil tracking glasses mounted with compact IR sensitive camera and IR LED."},{id:3,point:"- Utilized digital video processing techniques to enhance a series of raw images received from the camera."},{id:4,point:"- MATLAB was used to design the software."}],skills:["MATLAB","Digital Image Processing"]}];var A=[{id:1,title:"Software Engineer",subtitle:"EnterpriseDB",description:[{id:1,description:"Develop automated testing programs using Python and Docker that address areas such as database impacts, software scenarios, regression testing, negative testing, error or bug retests, or usability."},{id:2,description:"Update automated test scripts(Pytest Framework) to ensure currency."},{id:3,description:"Install and configure recreations of software production environments on different cloud platforms such as AWS, Azure, and OpenStack to allow testing of software."},{id:4,description:"Collaborate with developers and testers to evaluate or diagnose problems and recommend possible solutions."},{id:5,description:"Migrated existing cloud infrastructure automation suite to a more robust framework reducing execution time by 70%."},{id:6,description:"Simplified code implementation by applying knowledge of design patterns."}],duration:"Mar 2018 \u2013 Present"},{id:2,title:"Software Engineering Analyst",subtitle:"Accenture",description:[{id:1,description:"Promoted to software engineering analyst based on success with optimisation tests that boosted portal traffic."},{id:2,description:"Oversaw 3-member team developing and executing automation scripts."},{id:3,description:"Upgraded an existing automation framework by integrating with ALM reducing a significant amount of manual efforts."},{id:4,description:"Created a framework from scratch using Java and Robot framework to auto-generate SQL full load queries from a standardized input file by a data-driven approach."},{id:5,description:"Aided two trainees using pair programming technique."}],duration:"Dec 2015 \u2013 Feb 2018"},{id:3,title:"Associate Software Engineer",subtitle:"Accenture",description:[{id:1,description:"Created reusable scripts in Perfecto to automate testing on Android and iOS platforms."},{id:2,description:"Analyzed web browsing data on Adobe target and performed A/B and multivariate testing to optimize the customer experience."},{id:3,description:"Proactively recommended changes in web design to boost shop conversion rates based on analyzed data."},{id:4,description:"Accelerated the process of merchandising publishing by retrieving data from the website by web-scraping using Python language."},{id:5,description:"Developed script in Python to automate page visits required for segment tracking."}],duration:"Aug 2014 \u2013 Nov 2015"}];var D=[{id:1,domain:"IT Automation",names:["Python","Pytest","Docker","Git","Linux","Java","PostgreSQL","Bash","Robot Framework","Selenium WebDriver"],profiency:100},{id:2,domain:"Web and App Development",names:["HTML","CSS","JavaScript","Bootstrap","React.js","Node.js","Redux.js","Express.js","React Native","Responsive Web Design"],profiency:85},{id:3,domain:"Cloud Computing",names:["AWS","Azure","OpenStack","GCP","Heroku"],profiency:70},{id:4,domain:"Data Science",names:["Numpy","Pandas","Ipython","Machine Learning","Data Analysis","Data Visualization","Predictive Modelling"],profiency:60}];var C=[{id:1,title:"Savitribai Phule Pune University",subtitle:"Bachelor of Engineering - BE, Electronics and Telecommunication Engineering",description:[{id:1,description:"First Class with Distinction, 70.5%"}],duration:"2010 - 2014"}];var P=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={experience:[],education:[],projects:[],skills:[],selectedProject:{}},e.handleSelect=function(t){var a=Object(g.a)({},t);e.setState({selectedProject:a})},e.renderHorizontalRule=function(){return r.a.createElement("hr",{style:{borderColor:"1px solid #7d7b64",marginBottom:"70px"}})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=j,t=A,a=D,n=C;this.setState({projects:e,experience:t,education:n,skills:a})}},{key:"render",value:function(){var e=this.state,t=e.projects,a=e.selectedProject,n=e.experience,i=e.education,o=e.skills;return r.a.createElement("main",{className:"container"},r.a.createElement(h,{renderHorizontalRule:this.renderHorizontalRule}),r.a.createElement(v,{experience:n,renderHorizontalRule:this.renderHorizontalRule}),r.a.createElement(E,{education:i,renderHorizontalRule:this.renderHorizontalRule}),r.a.createElement(w,{projects:t,selectedProject:a,onSelect:this.handleSelect,renderHorizontalRule:this.renderHorizontalRule}),r.a.createElement(x,{skills:o,renderHorizontalRule:this.renderHorizontalRule}),r.a.createElement(N,null))}}]),a}(n.Component),R=function(){return r.a.createElement("footer",{className:"footer text-light mt-5"},"\xa9 Aditya Mahale 2020. All rights for this template are reserved except for external images.")};var z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(P,null),r.a.createElement(R,null))};a(35),a(36),a(37),a(40),a(41),a(42),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7d35274c.chunk.js.map