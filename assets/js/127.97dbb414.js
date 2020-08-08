(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{405:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"google-tag-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-tag-manager"}},[t._v("#")]),t._v(" Google Tag Manager")]),t._v(" "),a("h2",{attrs:{id:"무엇이냐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#무엇이냐"}},[t._v("#")]),t._v(" 무엇이냐?")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://mindthelog.com/2014/05/%EA%B5%AC%EA%B8%80-%EC%A0%84%EC%9E%90%EC%83%81%EA%B1%B0%EB%9E%98-%EB%A1%9C%EA%B7%B8%EB%B6%84%EC%84%9D-%EA%B3%BC%EC%A0%95-%EA%B0%9C%EB%85%90/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mind the log 자료"),a("OutboundLink")],1),t._v("\n주문완료 되면 사이트 서버에서 해당 정보 처리 후 GA서버에 2종류 데이터 전달")]),t._v(" "),a("ol",[a("li",[t._v("주문 정보")])]),t._v(" "),a("ul",[a("li",[t._v("주문번호(ID)")]),t._v(" "),a("li",[t._v("제휴사(Affiliation)")]),t._v(" "),a("li",[t._v("총액(Revenue)")]),t._v(" "),a("li",[t._v("배송비(shipping)")]),t._v(" "),a("li",[t._v("세금(Tax)")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("제품 정보")])]),t._v(" "),a("ul",[a("li",[t._v("주문정보(ID): 위의 주문번호와 동일")]),t._v(" "),a("li",[t._v("제품명(Name)")]),t._v(" "),a("li",[t._v("제품코드(SKU)")]),t._v(" "),a("li",[t._v("제품가격(Price)")]),t._v(" "),a("li",[t._v("제품수량(Quantity)")])]),t._v(" "),a("h2",{attrs:{id:"향상된-전자상거래-켜기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#향상된-전자상거래-켜기"}},[t._v("#")]),t._v(" 향상된 전자상거래 켜기")]),t._v(" "),a("p",[t._v("Google Analytics사이트 > 설정원하는 앱 > Admin > Property Settings > Use enhanced link attribution을 On으로 켠다.")]),t._v(" "),a("h2",{attrs:{id:"ga-전자상거래"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ga-전자상거래"}},[t._v("#")]),t._v(" GA 전자상거래")]),t._v(" "),a("ol",[a("li",[t._v("설정방법\n"),a("ul",[a("li",[t._v("Google 애널리틱스에서 새로운 태그 유형을 만듭니다.")]),t._v(" "),a("li",[t._v("태그가 실행되는 경우를 지정합니다.")]),t._v(" "),a("li",[t._v("태그 이름, 태그 유형, 관련 추적 ID와 같은 필수 입력란에 해당 정보를 입력합니다.")]),t._v(" "),a("li",[t._v("추적 유형을 '거래'로 설정합니다.")])])]),t._v(" "),a("li",[t._v("변수\n"),a("ul",[a("li",[t._v("모든 거래 정보는 데이터 영역을 통해 전달되어야 함.")]),t._v(" "),a("li",[t._v("transactionId(필수)   고유 거래 식별자   문자열")]),t._v(" "),a("li",[t._v("transactionAffiliation(선택)  파트너 또는 상점   문자열")]),t._v(" "),a("li",[t._v("transactionTotal(필수)    거래의 총 가치    숫자")]),t._v(" "),a("li",[t._v("transactionShipping(선택) 거래의 배송비 숫자")]),t._v(" "),a("li",[t._v("transactionTax(선택)  거래에 대한 과세액  숫자")]),t._v(" "),a("li",[t._v("transactionProducts(선택) 거래에서 구매한 상품 목록  TransactionProduct 객체의 배열")])])]),t._v(" "),a("li",[t._v("TransactionProduct 데이터\n"),a("ul",[a("li",[t._v("온라인 거래에 포함되는 제품 설명하는 객체 목록")]),t._v(" "),a("li",[t._v("이름(필수)  제품 이름 문자열")]),t._v(" "),a("li",[t._v("SKU(필수) 제품 SKU  문자열")]),t._v(" "),a("li",[t._v("카테고리(선택)  제품 카테고리 문자열")]),t._v(" "),a("li",[t._v("가격(필수)  단가  숫자")]),t._v(" "),a("li",[t._v("수량(필수)  품목 수  숫자")])])])]),t._v(" "),a("p",[t._v("데이터 영역 코드 구현 예")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\ndataLayer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transactionId'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transactionAffiliation'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Acme Clothing'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transactionTotal'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("38.26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transactionTax'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.29")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transactionShipping'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transactionProducts'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sku'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DD44'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'T-Shirt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apparel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quantity'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sku'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AA1243544'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Socks'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apparel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quantity'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("비동기때문에 GTM컨테이너 스니펫 "),a("strong",[t._v("앞")]),t._v("에 이 코드를 넣어야 한다.")]),t._v(" "),a("h2",{attrs:{id:"콘텐츠-그룹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#콘텐츠-그룹"}},[t._v("#")]),t._v(" 콘텐츠 그룹")]),t._v(" "),a("p",[t._v("앱 콘텐츠를 논리적 구조로 분류 가능.\n남성-셔츠  여성-악세사리 이렇게 대분류 소분류 등으로 분류 가능하다.")]),t._v(" "),a("h3",{attrs:{id:"_1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1"}},[t._v("#")]),t._v(" 1")]),t._v(" "),a("p",[a("code",[t._v("admin > view > content grouping > New")]),t._v("에 들어가서 입력한다.")]),t._v(" "),a("ul",[a("li",[t._v("이름: 유아책")]),t._v(" "),a("li",[t._v("Index: 색인 번호. 지정하는 콘텐츠 분류 이름과 연결. GTM에서 태그 만들 때 이 숫자 사용.")])]),t._v(" "),a("p",[t._v("Universal Analytics Tracking Code (analytics.js):")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'set'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'contentGroup1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Group Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[t._v("이런식으로 삽입.")]),t._v(" "),a("h3",{attrs:{id:"_2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2"}},[t._v("#")]),t._v(" 2")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://support.google.com/tagmanager/answer/6107004?hl=ko&ref_topic=3002579",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고"),a("OutboundLink")],1),t._v("\nGTM에서 태그 추가 > "),a("code",[t._v("Track Type: Page View")]),t._v(" > "),a("code",[t._v("Configure Tag")]),t._v(" > "),a("code",[t._v("More setting")]),t._v(" > "),a("code",[t._v("add content group")]),t._v("에서 위에서 지정한 최상이 콘텐츠 분류의 "),a("code",[t._v("색인 번호")]),t._v("를 적어준다.\nContent Group에는 하위 분류를 적어둔다(e.g 셔츠)")]),t._v(" "),a("h2",{attrs:{id:"추적코드-달기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추적코드-달기"}},[t._v("#")]),t._v(" 추적코드 달기")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://mindthelog.com/2014/06/ecommerce-%EC%A0%84%EC%9E%90%EC%83%81%EA%B1%B0%EB%9E%98-%EC%BD%94%EB%93%9C-%EC%84%A4%EC%A0%95/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mind the log"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),a("p",[t._v("기본코드 외 4가지가 필요하다.")]),t._v(" "),a("ol",[a("li",[t._v("Ecommerce.js플러그인 호출")]),t._v(" "),a("li",[t._v("결제정보(e.g. 주문번호, 구매액 등) 코드")]),t._v(" "),a("li",[t._v("제품정보(e.g. 제품 아이디, 제품명) 코드")]),t._v(" "),a("li",[t._v("GA로 위 정보를 전송하는 커맨드")])]),t._v(" "),a("p",[t._v("이 4가지가 기본 GA코드에 추가되어 구매완료(영수증) 페이지에 삽입되어야 함.")]),t._v(" "),a("h3",{attrs:{id:"_1-ecommerce-js-플러그인-호출"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-ecommerce-js-플러그인-호출"}},[t._v("#")]),t._v(" 1. Ecommerce.js 플러그인 호출")]),t._v(" "),a("p",[t._v("페이지마다 삽입되는 기본 GA코드에")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'require'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ecommerce'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ecommerce.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("를 추가함. "),a("code",[t._v("구매완료")]),t._v(" 페이지에만 추가하면 된다.")]),t._v(" "),a("h3",{attrs:{id:"_2-결제정보-코드-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-결제정보-코드-추가"}},[t._v("#")]),t._v(" 2. 결제정보 코드 추가")]),t._v(" "),a("p",[a("code",[t._v("구매완료")]),t._v("페이지에 추가한다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ecommerce:addTransaction'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 시스템에서 생성된 주문번호. 필수. ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'affiliation'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'store.co.kr'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제휴사이름. 선택사항. 쿠폰이름 같은거 넣어도 된다.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'revenue'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 구매총액. 필수. 배송비 및 세금 기타 모든 비용 포함")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shipping'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 배송비. 선택사항. ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tax'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2000'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 세금. 선택사항.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-제품정보-코드-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-제품정보-코드-추가"}},[t._v("#")]),t._v(" 3. 제품정보 코드 추가")]),t._v(" "),a("p",[t._v("구매완료 페이지에 추가. for문으로 돌린다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ecommerce:addItem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//시스템에서 생성된 주문번호. 필수. ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'남성용 긴팔셔츠 흰색 XL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제품명. 필수. ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sku'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XXX56789'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SKU 또는 제품고유번호. 선택사항. ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'남성의류'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제품 분류. ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'30000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제품 단가. ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quantity'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제품 수량.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-ga로-위-정보-전송"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-ga로-위-정보-전송"}},[t._v("#")]),t._v(" 4. GA로 위 정보 전송")]),t._v(" "),a("p",[t._v("구매완료 페이지에 추가")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ecommerce:send'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"tagmanager로-전자상거래-추적-달기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tagmanager로-전자상거래-추적-달기"}},[t._v("#")]),t._v(" tagmanager로 전자상거래 추적 달기")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://support.google.com/tagmanager/answer/6107169",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고링크"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"실제로-어떻게-동작하나-살펴볼-수-있는-사이트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실제로-어떻게-동작하나-살펴볼-수-있는-사이트"}},[t._v("#")]),t._v(" 실제로 어떻게 동작하나 살펴볼 수 있는 사이트")]),t._v(" "),a("p",[t._v("http://enhancedecommerce.appspot.com/")]),t._v(" "),a("h2",{attrs:{id:"환불"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#환불"}},[t._v("#")]),t._v(" 환불")]),t._v(" "),a("p",[t._v("마찬가지로 '환불영수증' 을 발행시키면 되는데요, 주문번호를 그대로 두되 같은 액수를 마이너스로 해서 마이너스 주문을 입력하는 방식입니다.")]),t._v(" "),a("p",[t._v("두 가지 방법을 알려드리자면,")]),t._v(" "),a("ol",[a("li",[t._v("아래와 같이 구매총액 및 상품갯수를 마이너스로, 제품단가는 양수로 입력한 환불영수증 페이지를 만들어서 로드합니다.")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ecommerce:addTransaction'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 시스템에서 생성된 주문번호. 필수. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'affiliation'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'store.co.kr'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제휴사이름. 선택사항. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'revenue'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-127000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 구매총액의 마이너스 입력!!! 필수. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shipping'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-5000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 배송비 마이너스 입력!!! 선택사항. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tax'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2000'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 세금 마이너스 입력!!! 선택사항.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제품별 데이터")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ecommerce:addItem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//시스템에서 생성된 주문번호. 필수. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'남성용 긴팔셔츠 흰색 XL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제품명. 필수. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sku'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XXX56789'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SKU 또는 제품고유번호. 선택사항. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'남성의류'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제품 분류. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'30000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제품 단가. 양수로 입력!!! ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quantity'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 제품 수량. 마이너스 입력!!!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("참조: https://support.google.com/analytics/answer/1037443?hl=ko")]),t._v(" "),a("p",[t._v("만약 향상된전자상거래 (Enhanced Ecommerce) 를 사용중이시면, Data Import 를 통해 보다 손쉽게 일괄적으로 처리 가능합니다.")]),t._v(" "),a("p",[t._v("참조: https://support.google.com/analytics/answer/6014861?hl=ko")]),t._v(" "),a("p",[t._v("답변이 되었기를 바랍니다~\n"),a("a",{attrs:{href:"http://mindthelog.com/2014/06/ecommerce-%EC%A0%84%EC%9E%90%EC%83%81%EA%B1%B0%EB%9E%98-%EC%BD%94%EB%93%9C-%EC%84%A4%EC%A0%95/",target:"_blank",rel:"noopener noreferrer"}},[t._v("refer"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"공식가이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공식가이드"}},[t._v("#")]),t._v(" 공식가이드")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식가이드 링크"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"ecommerce-with-tag-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecommerce-with-tag-manager"}},[t._v("#")]),t._v(" Ecommerce with Tag manager")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.google.com/tag-manager/enhanced-ecommerce",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식가이드"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce",target:"_blank",rel:"noopener noreferrer"}},[t._v("미리 읽어야 할 Enhanced Ecommerce"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://youtu.be/ZKjlIhFJMCU",target:"_blank",rel:"noopener noreferrer"}},[t._v("tagmanager ecommerce 동영상강의"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),a("ul",[a("li",[t._v("GTM enhanced ecommerce할 때 그 이벤트에 명시된 이벤트에서 불리워지나 확인해보아야 한다. (e.g. "),a("code",[t._v("impression")]),t._v("이 잘 동작하는지 확인하려면, 무작정 GTM Preview의 summary에서 dataLayer가 잘 들어갔는지 보기 전에 "),a("code",[t._v("gtm.dom")]),t._v("이 불리워지는 "),a("code",[t._v("DOM Ready")]),t._v("에 그 데이터레이어가 잘 들어갔는지 확인한다. )")]),t._v(" "),a("li",[t._v("datalayer를 위로 두는 것 때문에 돔을 못잡는다면 "),a("code",[t._v("$(function() {...}")]),t._v("처럼 dom ready가 된 이후에 넣어주면 된다. 이는 "),a("code",[t._v("gtm.dom")]),t._v("이벤트랑도 잘 맞는다.")])]),t._v(" "),a("h2",{attrs:{id:"refer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://datum.io/google-analytics-mooc-ecommerce-analytics-%ED%9B%84%EA%B8%B0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GOOGLE ANALYTICS MOOC - ECOMMERCE ANALYTICS"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://analyticsacademy.withgoogle.com/course03/unit?unit=1&lesson=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("GOOGLE ANALYTICS MOOC - ECOMMERCE ANALYTICS 후기"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);