(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{547:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"nodejs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[t._v("#")]),t._v(" NodeJS")]),t._v(" "),n("p",[t._v("자바스크립트로 서버 애플리케이션을 구현할 수 있게 해주는 서버 플랫폼.")]),t._v(" "),n("h3",{attrs:{id:"간단한-시나리오"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#간단한-시나리오"}},[t._v("#")]),t._v(" 간단한 시나리오")]),t._v(" "),n("ol",[n("li",[t._v("사용자: 조회를 위한 요청을 보냄 -> 서버: 결과를 응답")]),t._v(" "),n("li",[t._v("사용자: 데이터 생성/저장 요청 -> 서버: 데이터 받고 처리")]),t._v(" "),n("li",[t._v("모든 요청이나 응답은 HTTP 프로토콜을 사용.")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//내장되어 있는 http모듈 사용")]),t._v("\n\nhttp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//서버 인스턴스 생성:http모듈의 createServer함수 사용")]),t._v("\n  response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("파일 저장하고 "),n("code",[t._v("nodejs server.js")]),t._v("친 다음에 "),n("code",[t._v("localhost:8888")]),t._v('들어가보면 "Hello World"')]),t._v(" "),n("li",[t._v("서버 인스턴스의 listen()함수는 http서버를 시작하게 하며 여기서 사용자의 요청을 받도록 대기.")]),t._v(" "),n("li",[t._v("이 서버는 클라의 요청에 응답하기 위하여 Callback함수가 등록되었고 response객체로 응답하게 됨.")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("위 코드를 "),n("code",[t._v("기명 함수")]),t._v("로 변경한 것")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'request'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'requested...'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello nodejs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connection'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("socket")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connected...'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("addListener()로 등록")])]),t._v(" "),n("h2",{attrs:{id:"nodejs-on-heroku"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-on-heroku"}},[t._v("#")]),t._v(" nodejs on heroku")]),t._v(" "),n("p",[t._v("https://devcenter.heroku.com/articles/deploying-nodejs"),n("br"),t._v("\nheroku 라는 클라우드 서비스가 있습니다 amazon과 달리 git 명령으로 push해서 배포하는 서비스로,\nnode.js 로 서버를 만들수 있습니다.")]),t._v(" "),n("p",[t._v("mongodb는 직접 heroku에 설치하지 않고,  mongodb를 제공해주는 saas 서비스인 mongolab 에서 db를 free 버전으로 만든다음에 heroku랑 연동을 하면 돈을 들지 않고 여러분만의 간단한 서비스를 만들수 있습니다. -> 부하가 많지 않다는 전제하에.")]),t._v(" "),n("p",[t._v("https://mongolab.com/\nnode.js + heroku + mongolab + (웹 페이지가 필요할 경우 jade 추가)\n참고하세요!!")]),t._v(" "),n("h2",{attrs:{id:"zsh-bower-install에서-command-not-found나오면"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zsh-bower-install에서-command-not-found나오면"}},[t._v("#")]),t._v(" zsh bower install에서 command not found나오면?")]),t._v(" "),n("p",[t._v("http://stackoverflow.com/questions/12369390/bower-command-not-found\n1시간 삽질\n"),n("a",{attrs:{href:"http://stackoverflow.com/questions/18940333/how-to-install-grunt",target:"_blank",rel:"noopener noreferrer"}},[t._v("grunt 버젼"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"여러-파일-하나로-합치기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#여러-파일-하나로-합치기"}},[t._v("#")]),t._v(" 여러 파일 하나로 합치기")]),t._v(" "),n("p",[t._v("https://www.npmjs.com/package/concat")]),t._v(" "),n("h2",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" reference")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.nextree.co.kr/p8574/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js: Hello로 시작하는 Web 애플리케이션"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"http://www.nodebeginner.org/index-kr.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Node Beginner Book"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"http://blog.doortts.com/207",target:"_blank",rel:"noopener noreferrer"}},[t._v("making nodepad"),n("OutboundLink")],1),t._v("\n[AngularJS Tutorial for Beginners With NodeJS ExpressJS and MongoDB (Part I)](AngularJS Tutorial for Beginners With NodeJS ExpressJS and MongoDB (Part I))\n"),n("a",{attrs:{href:"https://speakerdeck.com/leewin12/rest-api-seolgye",target:"_blank",rel:"noopener noreferrer"}},[t._v("REST API 설계"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://thinkster.io/mean-stack-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MEAN Stack Tutorial"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"http://mean.io/#!/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MEAN.io"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"http://mobicon.tistory.com/384",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mean stack 소개"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"http://nodeqa.com/nodejs_ref/65",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs runtime에서 지켜야할 필수 조건들"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"http://blog.outsider.ne.kr/588",target:"_blank",rel:"noopener noreferrer"}},[t._v("node.js 템플릿엔진 jade"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://github.com/jadejs/jade",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jade"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"http://uiandwe.tistory.com/964",target:"_blank",rel:"noopener noreferrer"}},[t._v("jade 간단예제"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);