(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{585:function(t,e,a){"use strict";a.r(e);var s=a(42),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-archiving-good-suggestions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-archiving-good-suggestions"}},[t._v("#")]),t._v(" Javascript: Archiving good suggestions")]),t._v(" "),a("h2",{attrs:{id:"pass-actions-with-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-actions-with-props"}},[t._v("#")]),t._v(" Pass actions with props")]),t._v(" "),a("p",[t._v("Do you know how to move actions to connect ?")]),t._v(" "),a("p",[t._v("If they are pre-lifted ( 🙅let's try to avoid that in the future )")]),t._v(" "),a("p",[t._v("like this")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("connect(\n  mapStateToProps,\n  () => ({ // mapActionsToProps function\n    onEnterRoute: preLiftedActions.enterRoute,\n  })\n)\n")])])]),a("p",[t._v("if they are not pre-lifted, meaning they need dispatch function injected (🙆 we should try that as much as possible, it makes our components pure)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("connect(\n  mapStateToProps,\n  { // mapActionsToProps object\n    onEnterRoute: pureActions.enterRoute,\n  }\n)\n")])])]),a("h2",{attrs:{id:"do-not-pass-implicit-proptypes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-not-pass-implicit-proptypes"}},[t._v("#")]),t._v(" Do not pass implicit proptypes")]),t._v(" "),a("p",[t._v("Actually can we avoid these implicit props? Or if you need something like this")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const Dropdown = ({\n  options, defaultValueIndex, onChange, minWidth, optionalReactSelectOptions\n}) => (\n  <Select\n    // ...\n    {...optionalReactSelectOptions}\n  />\n);\n")])])]),a("p",[t._v("This way you can use prop-types for that 😃")]),t._v(" "),a("p",[t._v("Yeah it seems implicit that we would like to wanna avoid by using proptypes/defaultprops.")]),t._v(" "),a("p",[t._v("In the example, shall we pass the optional props with")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// Parent component\n<Dropdown\n  optionalSelectOptions={{\n    isMulti: true,\n    selectOption: "foo",\n  }}\n/>\n\n// Dropdown/v2/index.jsx\nDropdown.propTypes = {\n  // ...\n  optionalSelectOptions: PropTypes.shape({\n    isMulti: PropTypes.string.isRequired,\n    selectOption: PropTypes.string,\n  }),\n};\n')])])]),a("p",[t._v("Then shall we gonna make proptypes with the some options that we put in the future?\n(e.g. if someone want to pass isMulti prop and it's kinda optional thing -> put it in optionalSelectOptions and write the propTypes)")]),t._v(" "),a("h2",{attrs:{id:"proptypes와-immutable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proptypes와-immutable"}},[t._v("#")]),t._v(" PropTypes와 Immutable")]),t._v(" "),a("ol",[a("li",[t._v("Get the value from deep Immutable object in 'connect()' and return scalar/base types.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Yes, but instead of something like `userSelector(state).get("displayName")` you should create a `userDisplayNameSelector(state)` selector that returns a base type `String` (the user displayName)\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("So avoid using Immutable types in react components except for optimisation purpose -> "),a("code",[t._v("Yes")])]),t._v(" "),a("li",[t._v("Then what about I want to return json in 'connect()'? Choose 'Immutable' or '.toJS()' case by case would be enough?")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("For this, use `react-redux-immutable`, never use `toJS()` in the connect function, this is by far the worst for optimization.\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("이름 짓기 방법\nif we start using selectors everywhere you might want to change how you call/name/import them, I think the following is easier to read. But this is up to you:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" userSelectors "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"selectors/user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuserDisplayName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" userSelectors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDisplayName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("PropTypes를 Immutable로 하려면?")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("React.PropTypes.instanceOf(Immutable.List)\n")])])]),a("h2",{attrs:{id:"dealing-with-unused-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-unused-parameters"}},[t._v("#")]),t._v(" Dealing with unused parameters")]),t._v(" "),a("p",[t._v("Also if you want to not use a parameter you can still write seomthing like "),a("code",[t._v("(_unusedParameterA, b) =>")]),t._v(" and eslint will be ok 👍")]),t._v(" "),a("h2",{attrs:{id:"actioncreator-and-lift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actioncreator-and-lift"}},[t._v("#")]),t._v(" actionCreator and lift")]),t._v(" "),a("h3",{attrs:{id:"question"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#question"}},[t._v("#")]),t._v(" question")]),t._v(" "),a("p",[t._v("Who is comfortable with the "),a("code",[t._v("actionCreator")]),t._v(" and "),a("code",[t._v("lift")]),t._v(" utils? I really have a hard time understanding the reasoning behind it. It is really opaque, adds a layer of complexity and obfuscates the function signature, it also breaks possible tree-shaking of unused actions.")]),t._v(" "),a("p",[a("strong",[t._v("Using "),a("code",[t._v("actionCreator")]),t._v(" and "),a("code",[t._v("lift")])])]),t._v(" "),a("div",{staticClass:"language-// Need to import complex utils extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import {lift, actionCreator} from "../util"\n\n// Will automagically create functions using string manipulation from all caps to camelCase\nconst actions = actionCreator(fooBarTypes)\n\n// Arguments needed are totally obfuscated\nexport const getAllFooBar = lift(actions.getAllFooBar)\n')])])]),a("p",[a("strong",[t._v("Following standard redux action definition")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n// No import, standard javascript, explicit function signature (you don't need to guess function name and arguments)\nexport const getAllFooBar = () => ({ type: fooBarTypes.GET_ALL});```\nor\n\n```// No import, standard javascript, explicit function signature (you don't need to guess function name and arguments)\nexport const getAllFoo = bar => ({ type: fooBarTypes.GET_ALL, bar});\n")])])]),a("h3",{attrs:{id:"answer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer"}},[t._v("#")]),t._v(" answer")]),t._v(" "),a("p",[t._v("those are just sugar to:")]),t._v(" "),a("ul",[a("li",[t._v("create the actions from the types")]),t._v(" "),a("li",[t._v("bring the dispatch directly (so you dont need to use connect from the component etc you just need to call the function)")])]),t._v(" "),a("h3",{attrs:{id:"sum-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sum-up"}},[t._v("#")]),t._v(" sum up")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("code",[t._v("actionCreator")]),t._v(" util should be deprecated because it obfuscates function signature and it breaks tree-shaking")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("lift")]),t._v(" util should be deprecated because it re-implements a util that redux provides as "),a("code",[t._v("bindActionCreators")])]),t._v(" "),a("li",[t._v("Use "),a("code",[t._v("bindActionCreators")]),t._v(" for the following use case :")])]),t._v(" "),a("blockquote",[a("p",[t._v("Need to pass actions from "),a("code",[t._v("<Parent />")]),t._v(" that is aware of redux (that has "),a("code",[t._v("dispatch")]),t._v(" in props) down to "),a("code",[t._v("<Child />")]),t._v(" that is not aware of redux without being able to pass "),a("code",[t._v("dispatch")]),t._v(". Otherwise follow the standard pattern (declare the actions needed by the component in the "),a("code",[t._v("connect")]),t._v(" function)")])])])}),[],!1,null,null,null);e.default=o.exports}}]);