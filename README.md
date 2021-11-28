# Web-Development-Practice
Daily Practice - HTML , CSS , JavaScript

# JavaScript Interview Questions & Answers

> Click :star:if you like the project. Pull Requests are highly appreciated. Follow me [@SudheerJonna](https://twitter.com/SudheerJonna) for technical updates.

Go to [Coding Exercise](#coding-exercise) for coding specific questions

## Download PDF/Epub formats

You can download the PDF and Epub version of this repository from the latest run on the [actions tab](https://github.com/sudheerj/JavaScript-Interview-Questions/actions).

---
<p align="center">
  <a href=https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=javascript-interview-questions>
    <img src=https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:70/https://www.filepicker.io/api/file/AKYtjj5SSGyJuyZrkAB2 alt="ZTM Logo">
  </a>
  <p align="center">
    <ol>
    <li>Take this <a href=https://links.zerotomastery.io/jsp_sudheer>JavaScript Projects</a> course to go from a JavaScript beginner to confidently building your own projects</li>
    <li>Take this <a href=https://links.zerotomastery.io/mci_sudheer2>coding interview bootcamp</a> if you’re serious about getting hired and don’t have a CS degree</li>
    <li>Take this <a href=https://links.zerotomastery.io/ajs_sudheer>Advanced JavaScript Course</a> to learn advanced JS concepts and become a top JS developer</li>
    </ol>
  </p>
</p>

---

### Table of Contents

| No. | Questions |
|---- | ---------
|1  | [What are the possible ways to create objects in JavaScript](#what-are-the-possible-ways-to-create-objects-in-javascript) |
|2  | [What is prototype chain](#what-is-a-prototype-chain)|
|3  | [What is the difference between Call, Apply and Bind](#what-is-the-difference-between-call-apply-and-bind)|
|4  | [What is JSON and its common operations](#what-is-json-and-its-common-operations)|
|5  | [What is the purpose of the array slice method](#what-is-the-purpose-of-the-array-slice-method)|
|6  | [What is the purpose of the array splice method](#what-is-the-purpose-of-the-array-splice-method)|
|7  | [What is the difference between slice and splice](#what-is-the-difference-between-slice-and-splice)|
|8  | [How do you compare Object and Map](#how-do-you-compare-object-and-map)|
|9  | [What is the difference between == and === operators](#what-is-the-difference-between--and--operators)|
|10 | [What are lambda or arrow functions](#what-are-lambda-or-arrow-functions)|
|11 | [What is a first class function](#what-is-a-first-class-function)|
|12 | [What is a first order function](#what-is-a-first-order-function)|
|13 | [What is a higher order function](#what-is-a-higher-order-function)|
|14 | [What is a unary function](#what-is-a-unary-function)|
|15 | [What is the currying function](#what-is-the-currying-function)|
|16 | [What is a pure function](#what-is-a-pure-function)|
|17 | [What is the purpose of the let keyword](#what-is-the-purpose-of-the-let-keyword)|
|18 | [What is the difference between let and var](#what-is-the-difference-between-let-and-var)|
|19 | [What is the reason to choose the name let as a keyword](#what-is-the-reason-to-choose-the-name-let-as-a-keyword)|
|20 | [How do you redeclare variables in switch block without an error](#how-do-you-redeclare-variables-in-switch-block-without-an-error)|
|21 | [What is the Temporal Dead Zone](#what-is-the-temporal-dead-zone)|
|22 | [What is IIFE(Immediately Invoked Function Expression)](#what-is-iifeimmediately-invoked-function-expression)|
|23 | [What is the benefit of using modules](#what-is-the-benefit-of-using-modules)|
|24 | [What is memoization](#what-is-memoization)|
|25 | [What is Hoisting](#what-is-hoisting)|
|26 | [What are classes in ES6](#what-are-classes-in-es6)|
|27 | [What are closures](#what-are-closures)|
|28 | [What are modules](#what-are-modules)|
|29 | [Why do you need modules](#why-do-you-need-modules)|
|30 | [What is scope in javascript](#what-is-scope-in-javascript)|
|31 | [What is a service worker](#what-is-a-service-worker)|
|32 | [How do you manipulate DOM using a service worker](#how-do-you-manipulate-dom-using-a-service-worker)|
|33 | [How do you reuse information across service worker restarts](#how-do-you-reuse-information-across-service-worker-restarts)|
|34 | [What is IndexedDB](#what-is-indexeddb)|
|35 | [What is web storage](#what-is-web-storage)|
|36 | [What is a post message](#what-is-a-post-message)|
|37 | [What is a cookie](#what-is-a-cookie)|
|38 | [Why do you need a Cookie](#why-do-you-need-a-cookie)|
|39 | [What are the options in a cookie](#what-are-the-options-in-a-cookie)|
|40 | [How do you delete a cookie](#how-do-you-delete-a-cookie)|
|41 | [What are the differences between cookie, local storage and session storage](#What-are-the-differences-between-cookie-local-storage-and-session-storage)|
|42 | [What is the main difference between localStorage and sessionStorage](#what-is-the-main-difference-between-localstorage-and-sessionstorage)|
|43 | [How do you access web storage](#how-do-you-access-web-storage)|
|44 | [What are the methods available on session storage](#what-are-the-methods-available-on-session-storage)|
|45 | [What is a storage event and its event handler](#what-is-a-storage-event-and-its-event-handler)|
|46 | [Why do you need web storage](#why-do-you-need-web-storage)|
|47 | [How do you check web storage browser support](#how-do-you-check-web-storage-browser-support)|
|48 | [How do you check web workers browser support](#how-do-you-check-web-workers-browser-support)|
|49 | [Give an example of web worker](#give-an-example-of-web-worker)|
|50 | [What are the restrictions of web workers on DOM](#what-are-the-restrictions-of-web-workers-on-dom)|
|51 | [What is a promise](#what-is-a-promise)|
|52 | [Why do you need a promise](#why-do-you-need-a-promise)|
|53 | [What are the three states of promise](#what-are-the-three-states-of-promise)|
|54 | [What is a callback function](#what-is-a-callback-function)|
|55 | [Why do we need callbacks](#why-do-we-need-callbacks)|
|56 | [What is a callback hell](#what-is-a-callback-hell)|
|57 | [What is server-sent events](#what-is-server-sent-events)|
|58 | [How do you receive server-sent event notifications](#how-do-you-receive-server-sent-event-notifications)|
|59 | [How do you check browser support for server-sent events](#how-do-you-check-browser-support-for-server-sent-events)|
|60 | [What are the events available for server sent events](#what-are-the-events-available-for-server-sent-events)|
|61 | [What are the main rules of promise](#what-are-the-main-rules-of-promise)|
|62 | [What is callback in callback](#what-is-callback-in-callback)|
|63 | [What is promise chaining](#what-is-promise-chaining)|
|64 | [What is promise.all](#what-is-promise.all)|
|65 | [What is the purpose of race method in promise](#what-is-the-purpose-of-race-method-in-promise)|
|66 | [What is a strict mode in javascript](#what-is-a-strict-mode-in-javascript)|
|67 | [Why do you need strict mode](#why-do-you-need-strict-mode)|
|68 | [How do you declare strict mode](#how-do-you-declare-strict-mode)|
|69 | [What is the purpose of double exclamation](#what-is-the-purpose-of-double-exclamation)|
|70 | [What is the purpose of delete operator](#what-is-the-purpose-of-delete-operator)|
|71 | [What is typeof operator](#what-is-typeof-operator)|
|72 | [What is undefined property](#what-is-undefined-property)|
|73 | [What is null value](#what-is-null-value)|
|74 | [What is the difference between null and undefined](#what-is-the-difference-between-null-and-undefined)|
|75 | [What is eval](#What-is-eval)|
|76 | [What is the difference between window and document](#what-is-the-difference-between-window-and-document)|
|77 | [How do you access history in javascript](#how-do-you-access-history-in-javascript)|
|78 | [How do you detect caps lock key turned on or not](#how-do-you-detect-caps-lock-key-turned-on-or-not)|
|79 | [What is isNaN](#what-is-isnan)|
|80 | [What are the differences between undeclared and undefined variables](#what-are-the-differences-between-undeclared-and-undefined-variables)|
|81 | [What are global variables](#what-are-global-variables)|
|82 | [What are the problems with global variables](#what-are-the-problems-with-global-variables)|
|83 | [What is NaN property](#what-is-nan-property)|
|84 | [What is the purpose of isFinite function](#what-is-the-purpose-of-isfinite-function)
|85 | [What is an event flow](#what-is-an-event-flow)|
|86 | [What is event bubbling](#what-is-event-bubbling)|
|87 | [What is event capturing](#what-is-event-capturing)|
|88 | [How do you submit a form using JavaScript](#how-do-you-submit-a-form-using-javascript)|
|89 | [How do you find operating system details](#how-do-you-find-operating-system-details)|
|90 | [What is the difference between document load and DOMContentLoaded events](#what-is-the-difference-between-document-load-and-domcontentloaded-events)|
|91 | [What is the difference between native, host and user objects](#what-is-the-difference-between-native,-host-and-user-objects)|
|92 | [What are the tools or techniques used for debugging JavaScript code](#what-are-the-tools-or-techniques-used-for-debugging-javascript-code)|
|93 | [What are the pros and cons of promises over callbacks](#what-are-the-pros-and-cons-of-promises-over-callbacks)|
|94 | [What is the difference between an attribute and a property](#what-is-the-difference-between-an-attribute-and-a-property)|
|95 | [What is same-origin policy](#what-is-same-origin-policy)|
|96 | [What is the purpose of void 0](#what-is-the-purpose-of-void-0)|
|97 | [Is JavaScript a compiled or interpreted language](#is-javascript-a-compiled-or-interpreted-language)|
|98 | [Is JavaScript a case-sensitive language](#is-javascript-a-case-sensitive-language)|
|99 | [Is there any relation between Java and JavaScript](#is-there-any-relation-between-java-and-javascript)|
|100| [What are events](#what-are-events)|
|101| [Who created javascript](#who-created-javascript)|
|102| [What is the use of preventDefault method](#what-is-the-use-of-preventdefault-method)|
|103| [What is the use of stopPropagation method](#what-is-the-use-of-stoppropagation-method)|
|104| [What are the steps involved in return false](#what-are-the-steps-involved-in-return-false)|
|105| [What is BOM](#what-is-bom)|
|106| [What is the use of setTimeout](#what-is-the-use-of-settimeout)|
|107| [What is the use of setInterval](#what-is-the-use-of-setinterval)|
|108| [Why is JavaScript treated as Single threaded](#why-is-javascript-treated-as-single-threaded)|
|109| [What is an event delegation](#what-is-an-event-delegation)|
|110| [What is ECMAScript](#what-is-ecmascript)|
|111| [What is JSON](#what-is-json)|
|112| [What are the syntax rules of JSON](#what-are-the-syntax-rules-of-json)|
|113| [What is the purpose JSON stringify](#what-is-the-purpose-json-stringify)|
|114| [How do you parse JSON string](#how-do-you-parse-json-string)|
|115| [Why do you need JSON](#why-do-you-need-json)|
|116| [What are PWAs](#what-are-pwas?)|
|117| [What is the purpose of clearTimeout method](#what-is-the-purpose-of-cleartimeout-method)|
|118| [What is the purpose of clearInterval method](#what-is-the-purpose-of-clearinterval-method)|
|119| [How do you redirect new page in javascript](#how-do-you-redirect-new-page-in-javascript)|
|120| [How do you check whether a string contains a substring](#how-do-you-check-whether-a-string-contains-a-substring)|
|121| [How do you validate an email in javascript](#how-do-you-validate-an-email-in-javascript)|
|122| [How do you get the current url with javascript](#how-do-you-get-the-current-url-with-javascript)|
|123| [What are the various url properties of location object](#what-are-the-various-url-properties-of-location-object)|
|124| [How do get query string values in javascript](#how-do-get-query-string-values-in-javascript)|
|125| [How do you check if a key exists in an object](#how-do-you-check-if-a-key-exists-in-an-object)|
|126| [How do you loop through or enumerate javascript object](#how-do-you-loop-through-or-enumerate-javascript-object)|
|127| [How do you test for an empty object](#how-do-you-test-for-an-empty-object)|
|128| [What is an arguments object](#what-is-an-arguments-object)|
|129| [How do you make first letter of the string in an uppercase](#how-do-you-make-first-letter-of-the-string-in-an-uppercase)|
|130| [What are the pros and cons of for loop](#what-are-the-pros-and-cons-of-for-loop)|
|131| [How do you display the current date in javascript](#how-do-you-display-the-current-date-in-javascript)|
|132| [How do you compare two date objects](#how-do-you-compare-two-date-objects)|
|133| [How do you check if a string starts with another string](#how-do-you-check-if-a-string-starts-with-another-string)|
|134| [How do you trim a string in javascript](#how-do-you-trim-a-string-in-javascript)|
|135| [How do you add a key value pair in javascript](#how-do-you-add-a-key-value-pair-in-javascript)|
|136| [Is the '!--' notation represents a special operator](#is-the-'!--'-notation-represents-a-special-operator)|
|137| [How do you assign default values to variables](#how-do-you-assign-default-values-to-variables)|
|138| [How do you define multiline strings](#how-do-you-define-multiline-strings)|
|139| [What is an app shell model](#what-is-an-app-shell-model)|
|140| [Can we define properties for functions](#can-we-define-properties-for-functions)|
|141| [What is the way to find the number of parameters expected by a function](#what-is-the-way-to-find-the-number-of-parameters-expected-by-a-function)|
|142| [What is a polyfill](#what-is-a-polyfill)|
|143| [What are break and continue statements](#what-are-break-and-continue-statements)|
|144| [What are js labels](#what-are-js-labels)|
|145| [What are the benefits of keeping declarations at the top](#what-are-the-benefits-of-keeping-declarations-at-the-top)|
|146| [What are the benefits of initializing variables](#what-are-the-benefits-of-initializing-variables)|
|147| [What are the recommendations to create new object](#what-are-the-recommendations-to-create-new-object)|
|148| [How do you define JSON arrays](#how-do-you-define-json-arrays)|
|149| [How do you generate random integers](#how-do-you-generate-random-integers)|
|150| [Can you write a random integers function to print integers with in a range](#can-you-write-a-random-integers-function-to-print-integers-with-in-a-range)|
|151| [What is tree shaking](#what-is-tree-shaking)|
|152| [What is the need of tree shaking](#what-is-the-need-of-tree-shaking)|
|153| [Is it recommended to use eval](#is-it-recommended-to-use-eval)|
|154| [What is a Regular Expression](#what-is-a-regular-expression)|
|155| [What are the string methods available in Regular expression](#what-are-the-string-methods-available-in-regular-expression)|
|156| [What are modifiers in regular expression](#what-are-modifiers-in-regular-expression)|
|157| [What are regular expression patterns](#what-are-regular-expression-patterns)|
|158| [What is a RegExp object](#what-is-a-regexp-object)|
|159| [How do you search a string for a pattern](#how-do-you-search-a-string-for-a-pattern)|
|160| [What is the purpose of exec method](#what-is-the-purpose-of-exec-method)|
|161| [How do you change style of a HTML element](#how-do-you-change-style-of-a-html-element)|
|162| [What would be the result of 1+2+'3'](#what-would-be-the-result-of-1+2+'3')|
|163| [What is a debugger statement](#what-is-a-debugger-statement)|
|164| [What is the purpose of breakpoints in debugging](#what-is-the-purpose-of-breakpoints-indebugging)|
|165| [Can I use reserved words as identifiers](#can-i-use-reserved-words-as-identifiers)|
|166| [How do you detect a mobile browser](#how-do-you-detect-a-mobile-browser)|
|167| [How do you detect a mobile browser without regexp](#how-do-you-detect-a-mobile-browser-without-regexp)|
|168| [How do you get the image width and height using JS](#how-do-you-get-the-image-width-and-height-using-js)|
|169| [How do you make synchronous HTTP request](#how-do-you-make-synchronous-http-request)|
|170| [How do you make asynchronous HTTP request](#how-do-you-make-asynchronous-http-request)|
|171| [How do you convert date to another timezone in javascript](#how-do-you-convert-date-to-another-timezone-in-javascript)|
|172| [What are the properties used to get size of window](#what-are-the-properties-used-to-get-size-of-window)|
|173| [What is a conditional operator in javascript](#what-is-a-conditional-operator-in-javascript)|
|174| [Can you apply chaining on conditional operator](#Can-you-apply-chaining-on-conditional-operator)|
|175| [What are the ways to execute javascript after page load](#what-are-the-ways-to-execute-javascript-after-page-load)|
|176| [What is the difference between proto and prototype](#what-is-the-difference-between-proto-and-prototype)|
|177| [Give an example where do you really need semicolon](#give-an-example-where-do-you-really-need-semicolon)|
|178| [What is a freeze method](#what-is-a-freeze-method)|
|179| [What is the purpose of freeze method](#what-is-the-purpose-of-freeze-method)|
|180| [Why do I need to use freeze method](#why-do-i-need-to-use-freeze-method)|
|181| [How do you detect a browser language preference](#how-do-you-detect-a-browser-language-preference)|
|182| [How to convert string to title case with javascript](#how-to-convert-string-to-title-case-with-javascript)|
|183| [How do you detect javascript disabled in the page](#how-do-you-detect-javascript-disabled-in-the-page)|
|184| [What are various operators supported by javascript](#what-are-various-operators-supported-by-javascript)|
|185| [What is a rest parameter](#what-is-a-rest-parameter)|
|186| [What happens if you do not use rest parameter as a last argument](#what-happens-if-you-do-not-use-rest-parameter-as-a-last-argument)|
|187| [What are the bitwise operators available in javascript](#what-are-the-bitwise-operators-available-in-javascript)|
|188| [What is a spread operator](#what-is-a-spread-operator)|
|189| [How do you determine whether object is frozen or not](#how-do-you-determine-whether-object-is-frozen-or-not)|
|190| [How do you determine two values same or not using object](#how-do-you-determine-two-values-same-or-not-using-object)|
|191| [What is the purpose of using object is method](#what-is-the-purpose-of-using-object-is-method)|
|192| [How do you copy properties from one object to other](#how-do-you-copy-properties-from-one-object-to-other)|
|193| [What are the applications of assign method](#what-are-the-applications-of-assign-method)|
|194| [What is a proxy object](#what-is-a-proxy-object)|
|195| [What is the purpose of seal method](#what-is-the-purpose-of-seal-method)|
|196| [What are the applications of seal method](#what-are-the-applications-of-seal-method)|
|197| [What are the differences between freeze and seal methods](#what-are-the-differences-between-freeze-and-seal-methods)|
|198| [How do you determine if an object is sealed or not](#how-do-you-determine-if-an-object-is-sealed-or-not)|
|199| [How do you get enumerable key and value pairs](#how-do-you-get-enumerable-key-and-value-pairs)|
|200| [What is the main difference between Object.values and Object.entries method](#what-is-the-main-difference-between-object.values-and-object.entries-method)|
|201| [How can you get the list of keys of any object](#how-can-you-get-the-list-of-keys-of-any-object)|
|202| [How do you create an object with prototype](#how-do-you-create-an-object-with-prototype)|
|203| [What is a WeakSet](#what-is-a-weakset)|
|204| [What are the differences between WeakSet and Set](#what-are-the-differences-between-weakset-and-set)|
|205| [List down the collection of methods available on WeakSet](#list-down-the-collection-of-methods-available-on-weakset)|
|206| [What is a WeakMap](#what-is-a-weakmap)|
|207| [What are the differences between WeakMap and Map](#what-are-the-differences-between-weakmap-and-map)|
|208| [List down the collection of methods available on WeakMap](#list-down-the-collection-of-methods-available-on-weakmap)|
|209| [What is the purpose of uneval](#what-is-the-purpose-of-uneval)|
|210| [How do you encode an URL](#how-do-you-encode-an-url)|
|211| [How do you decode an URL](#how-do-you-decode-an-url)|
|212| [How do you print the contents of web page](#how-do-you-print-the-contents-of-web-page)|
|213| [What is the difference between uneval and eval](#what-is-the-difference-between-uneval-and-eval)|
|214| [What is an anonymous function](#what-is-an-anonymous-function)|
|215| [What is the precedence order between local and global variables](#what-is-the-precedence-order-between-local-and-global-variables)|
|216| [What are javascript accessors](#what-are-javascript-accessors)|
|217| [How do you define property on Object constructor](#how-do-you-define-property-on-object-constructor)|
|218| [What is the difference between get and defineProperty](#what-is-the-difference-between-get-and-defineproperty)|
|219| [What are the advantages of Getters and Setters](#what-are-the-advantages-of-getters-and-setters)|
|220| [Can I add getters and setters using defineProperty method](#can-i-add-getters-and-setters-using-defineproperty-method)|
|221| [What is the purpose of switch-case](#what-is-the-purpose-of-switch-case)|
|222| [What are the conventions to be followed for the usage of swtich case](#what-are-the-conventions-to-be-followed-for-the-usage-of-swtich-case)|
|223| [What are primitive data types](#what-are-primitive-data-types)|
|224| [What are the different ways to access object properties](#what-are-the-different-ways-to-access-object-properties)|
|225| [What are the function parameter rules](#what-are-the-function-parameter-rules)|
|226| [What is an error object](#what-is-an-error-object)|
|227| [When you get a syntax error](#when-you-get-a-syntax-error)|
|228| [What are the different error names from error object](#what-are-the-different-error-names-from-error-object)|
|229| [What are the various statements in error handling](#what-are-the-various-statements-in-error-handling)|
|230| [What are the two types of loops in javascript](#what-are-the-two-types-of-loops-in-javascript)|
|231| [What is nodejs](#what-is-nodejs)|
|232| [What is an Intl object](#what-is-an-intl-object)|
|233| [How do you perform language specific date and time formatting](#how-do-you-perform-language-specific-date-and-time-formatting)|
|234| [What is an Iterator](#what-is-an-iterator)|
|235| [How does synchronous iteration works](#how-does-synchronous-iteration-works)|
|236| [What is an event loop](#what-is-an-event-loop)|
|237| [What is call stack](#what-is-call-stack)|
|238| [What is an event queue](#what-is-an-event-queue)|
|239| [What is a decorator](#what-is-a-decorator)|
|240| [What are the properties of Intl object](#what-are-the-properties-of-intl-object)|
|241| [What is an Unary operator](#what-is-an-unary-operator)|
|242| [How do you sort elements in an array](#how-do-you-sort-elements-in-an-array)|
|243| [What is the purpose of compareFunction while sorting arrays](#what-is-the-purpose-of-comparefunction-while-sorting-arrays)|
|244| [How do you reversing an array](#how-do-you-reversing-an-array)|
|245| [How do you find min and max value in an array](#how-do-you-find-min-and-max-value-in-an-array)|
|246| [How do you find min and max values without Math functions](#how-do-you-find-min-and-max-values-without--math-functions)|
|247| [What is an empty statement and purpose of it](#what-is-an-empty-statement-and-purpose-of-it)|
|248| [How do you get meta data of a module](#how-do-you-get-meta-data-of-a-module)|
|249| [What is a comma operator](#what-is-a-comma-operator)|
|250| [What is the advantage of a comma operator](#what-is-the-advantage-of-a-comma-operator)|
|251| [What is typescript](#what-is-typescript)|
|252| [What are the differences between javascript and typescript](#what-are-the-differences-between-javascript-and-typescript)|
|253| [What are the advantages of typescript over javascript](#what-are-the-advantages-of-typescript-over-javascript)|
|254| [What is an object initializer](#what-is-an-object-initializer)|
|255| [What is a constructor method](#what-is-a-constructor-method)|
|256| [What happens if you write constructor more than once in a class](#what-happens-if-you-write-constructor-more-than-once-in-a-class)|
|257| [How do you call the constructor of a parent class](#how-do-you-call-the-constructor-of-a-parent-class)|
|258| [How do you get the prototype of an object](#how-do-you-get-the-prototype-of-an-object)|
|259| [What happens If I pass string type for getPrototype method](#what-happens-if-i-pass-string-type-for-getprototype-method)|
|260| [How do you set prototype of one object to another](#how-do-you-set-prototype-of-one-object-to-another)|
|261| [How do you check whether an object can be extendable or not](#how-do-you-check-whether-an-object-can-be-extendable-or-not)|
|262| [How do you prevent an object to extend](#how-do-you-prevent-an-object-to-extend)|
|263| [What are the different ways to make an object non-extensible](#what-are-the-different-ways-to-make-an-object-non-extensible)|
|264| [How do you define multiple properties on an object](#how-do-you-define-multiple-properties-on-an-object)|
|265| [What is MEAN in javascript](#what-is-mean-in-javascript)|
|266| [What Is Obfuscation in javascript](#what-is-obfuscation-in-javascript)|
|267| [Why do you need Obfuscation](#why-do-you-need-obfuscation)|
|268| [What is Minification](#what-is-minification)|
|269| [What are the advantages of minification](#what-are-the-advantages-of-minification)|
|270| [What are the differences between Obfuscation and Encryption](#what-are-the-differences-between-obfuscation-and-encryption)|
|271| [What are the common tools used for minification](#what-are-the-common-tools-used-for-minification)|
|272| [How do you perform form validation using javascript](#how-do-you-perform-form-validation-using-javascript)|
|273| [How do you perform form validation without javascript](#how-do-you-perform-form-validation-without-javascript)|
|274| [What are the DOM methods available for constraint validation](#what-are-the-dom-methods-available-for-constraint-validation)|
|275| [What are the available constraint validation DOM properties](#what-are-the-available-constraint-validation-dom-properties)|
|276| [What are the list of validity properties](#what-are-the-list-of-validity-properties)|
|277| [Give an example usage of rangeOverflow property](#give-an-example-usage-of-rangeoverflow-property)|
|278| [Is enums feature available in javascript](#is-enums-feature-available-in-javascript)|
|279| [What is an enum](#What-is-an-enum)|
|280| [How do you list all properties of an object](#how-do-you-list-all-properties-of-an-object)|
|281| [How do you get property descriptors of an object](#how-do-you-get-property-descriptors-of-an-object)|
|282| [What are the attributes provided by a property descriptor](#what-are-the-attributes-provided-by-a-property-descriptor)|
|283| [How do you extend classes](#how-do-you-extend-classes)|
|284| [How do I modify the url without reloading the page](#how-do-i-modify-the-url-without-reloading-the-page)|
|285| [How do you check whether an array includes a particular value or not](#how-do-you-check-whether-an-array-includes-a-particular-value-or-not)|
|286| [How do you compare scalar arrays](#how-do-you-compare-scalar-arrays)|
|287| [How to get the value from get parameters](#how-to-get-the-value-from-get-parameters)|
|288| [How do you print numbers with commas as thousand separators](#how-do-you-print-numbers-with-commas-as-thousand-separators)|
|289| [What is the difference between java and javascript](#what-is-the-difference-between-java-and-javascript)|
|290| [Does javascript supports namespace](#does-javascript-supports-namespace)|
|291| [How do you declare namespace](#how-do-you-declare-namespace)|
|292| [How do you invoke javascript code in an iframe from parent page](#how-do-you-invoke-javascript-code-in-an-iframe-from-parent-page)|
|293| [How do get the timezone offset from date](#how-do-get-the-timezone-offset-from-date)|
|294| [How do you load CSS and JS files dynamically](#how-do-you-load-css-and-js-files-dynamically)|
|295| [What are the different methods to find HTML elements in DOM](#what-are-the-different-methods-to-find-html-elements-in-dom)|
|296| [What is jQuery](#what-is-jquery)|
|297| [What is V8 JavaScript engine](#what-is-v8-javascript-engine)|
|298| [Why do we call javascript as dynamic language](#why-do-we-call-javascript-as-dynamic-language)|
|299| [What is a void operator](#what-is-a-void-operator)|
|300| [How to set the cursor to wait](#how-to-set-the-cursor-to-wait)|
|301| [How do you create an infinite loop](#how-do-you-create-an-infinite-loop)|
|302| [Why do you need to avoid with statement](#why-do-you-need-to-avoid-with-statement)|
|303| [What is the output of below for loops](#what-is-the-output-of-below-for-loops)|
|304| [List down some of the features of ES6](#list-down-some-of-the-features-of-es6)|
|305| [What is ES6](#what-is-es6)|
|306| [Can I redeclare let and const variables](#can-I-redeclare-let-and-const-variables)|
|307| [Is const variable makes the value immutable](#is-const-variable-makes-the-value-immutable)|
|308| [What are default parameters](#what-are-default-parameters)|
|309| [What are template literals](#what-are-template-literals)|
|310| [How do you write multi-line strings in template literals](#how-do-you-write-multi-line-strings-in-template-literals)|
|311| [What are nesting templates](#what-are-nesting-templates)|
|312| [What are tagged templates](#what-are-tagged-templates)|
|313| [What are raw strings](#what-are-raw-strings)|
|314| [What is destructuring assignment](#what-is-destructuring-assignment)|
|315| [What are default values in destructuring assignment](#what-are-default-values-in-destructuring-assignment)|
|316| [How do you swap variables in destructuring assignment](#how-do-you-swap-variables-in-destructuring-assignment)|
|317| [What are enhanced object literals](#what-are-enhanced-object-literals)|
|318| [What are dynamic imports](#what-are-dynamic-imports)|
|319| [What are the use cases for dynamic imports](#what-are-the-use-cases-for-dynamic-imports)|
|320| [What are typed arrays](#what-are-typed-arrays)|
|321| [What are the advantages of module loaders](#what-are-the-advantages-of-module-loaders)|
|322| [What is collation](#what-is-collation)|
|323| [What is for...of statement](#what-is-for...of-statement)|
|324| [What is the output of below spread operator array](#what-is-the-output-of-below-spread-operator-array)|
|325| [Is PostMessage secure](#is-postmessage-secure)|
|326| [What are the problems with postmessage target origin as wildcard](#what-are-the-problems-with-postmessage-target-origin-as-wildcard)|
|327| [How do you avoid receiving postMessages from attackers](#how-do-you-avoid-receiving-postmessages-from-attackers)|
|328| [Can I avoid using postMessages completely](#can-i-avoid-using-postmessages-completely)|
|329| [Is postMessages synchronous](#is-postmessages-synchronous)|
|330| [What paradigm is Javascript](#what-paradigm-is-javascript)|
|331| [What is the difference between internal and external javascript](#what-is-the-difference-between-internal-and-external-javascript)|
|332| [Is JavaScript faster than server side script](#is-javascript-faster-than-server-side-script)|
|333| [How do you get the status of a checkbox](#how-do-you-get-the-status-of-a-checkbox)|
|334| [What is the purpose of double tilde operator](#what-is-the-purpose-of-double-tilde-operator)|
|335| [How do you convert character to ASCII code](#how-do-you-convert-character-to-ascii-code)|
|336| [What is ArrayBuffer](#what-is-arraybuffer)|
|337| [What is the output of below string expression](#what-is-the-output-of-below-string-expression)|
|338| [What is the purpose of Error object](#what-is-the-purpose-of-error-object)|
|339| [What is the purpose of EvalError object](#what-is-the-purpose-of-evalerror-object)|
|340| [What are the list of cases error thrown from non-strict mode to strict mode](#what-are-the-list-of-cases-error-thrown-from-non-strict-mode-to-strict-mode)|
|341| [Do all objects have prototypes](#do-all-objects-have-prototypes)|
|342| [What is the difference between a parameter and an argument](#what-is-the-difference-between-a-parameter-and-an-argument)|
|343| [What is the purpose of some method in arrays](#what-is-the-purpose-of-some-method-in-arrays)|
|344| [How do you combine two or more arrays](#how-do-you-combine-two-or-more-arrays)|
|345| [What is the difference between Shallow and Deep copy](#what-is-the-difference-between-shallow-and-deep-copy)|
|346| [How do you create specific number of copies of a string](#how-do-you-create-specific-number-of-copies-of-a-string)|
|347| [How do you return all matching strings against a regular expression](#how-do-you-return-all-matching-strings-against-a-regular-expression)|
|348| [How do you trim a string at the beginning or ending](#how-do-you-trim-a-string-at-the-beginning-or-ending)|
|349| [What is the output of below console statement with unary operator](#what-is-the-output-of-below-console-statement-with-unary-operator)|
|350| [Does javascript uses mixins](#does-javascript-uses-mixins)|
|351| [What is a thunk function](#what-is-a-thunk-function)|
|352| [What are asynchronous thunks](#what-are-asynchronous-thunks)|
|353| [What is the output of below function calls](#what-is-the-output-of-below-function-calls)|
|354| [How to remove all line breaks from a string](#how-to-remove-all-line-breaks-from-a-string)|
|355| [What is the difference between reflow and repaint](#what-is-the-difference-between-reflow-and-repaint)|
|356| [What happens with negating an array](#what-happens-with-negating-an-array)|
|357| [What happens if we add two arrays](#what-happens-if-we-add-two-arrays)|
|358| [What is the output of prepend additive operator on falsy values](#what-is-the-output-of-prepend-additive-operator-on-falsy-values)|
|359| [How do you create self string using special characters](#how-do-you-create-self-string-using-special-characters)|
|360| [How do you remove falsy values from an array](#how-do-you-remove-falsy-values-from-an-array)|
|361| [How do you get unique values of an array](#how-do-you-get-unique-values-of-an-array)|
|362| [What is destructuring aliases](#what-is-destructuring-aliases)|
|363| [How do you map the array values without using map method](#how-do-you-map-the-array-values-without-using-map-method)|
|364| [How do you empty an array](#how-do-you-empty-an-array)|
|365| [How do you rounding numbers to certain decimals](#how-do-you-rounding-numbers-to-certain-decimals)|
|366| [What is the easiest way to convert an array to an object](#what-is-the-easiest-way-to-convert-an-array-to-an-object)|
|367| [How do you create an array with some data](#how-do-you-create-an-array-with-some-data)|
|368| [What are the placeholders from console object](#what-are-the-placeholders-from-console-object)|
|369| [Is it possible to add CSS to console messages](#is-it-possible-to-add-css-to-console-messages)|
|370| [What is the purpose of dir method of console object](#what-is-the-purpose-of-dir-method-of-console-object)|
|371| [Is it possible to debug HTML elements in console](#is-it-possible-to-debug-html-elements-in-console)|
|372| [How do you display data in a tabular format using console object](#how-do-you-display-data-in-a-tabular-format-using-console-object)|
|373| [How do you verify that an argument is a Number or not](#how-do-you-verify-that-an-argument-is-a-number-or-not)|
|374| [How do you create copy to clipboard button](#how-do-you-create-copy-to-clipboard-button)|
|375| [What is the shortcut to get timestamp](#what-is-the-shortcut-to-get-timestamp)|
|376| [How do you flattening multi dimensional arrays](#how-do-you-flattening-multi-dimensional-arrays)|
|377| [What is the easiest multi condition checking](#what-is-the-easiest-multi-condition-checking)|
|378| [How do you capture browser back button](#how-do-you-capture-browser-back-button)|
|379| [How do you disable right click in the web page](#how-do-you-disable-right-click-in-the-web-page)|
|380| [What are wrapper objects](#what-are-wrapper-objects)|
|381| [What is AJAX](#what-is-ajax)|
|382| [What are the different ways to deal with Asynchronous Code](#what-are-the-different-ways-to-deal-with-asynchronous-code)|
|383| [How to cancel a fetch request](#how-to-cancel-a-fetch-request)|
|384| [What is web speech API](#what-is-web-speech-api)|
|385| [What is minimum timeout throttling](#what-is-minimum-timeout-throttling)|
|386| [How do you implement zero timeout in modern browsers](#how-do-you-implement-zero-timeout-in-modern-browsers)|
|387| [What are tasks in event loop](#what-are-tasks-in-event-loop)|
|388| [What are microtasks](#what-are-microtasks)|
|389| [What are different event loops](#what-are-different-event-loops)|
|390| [What is the purpose of queueMicrotask](#what-is-the-purpose-of-queuemicrotask)|
|391| [How do you use javascript libraries in typescript file](#how-do-you-use-javascript-libraries-in-typescript-file)|
|392| [What are the differences between promises and observables](#what-are-the-differences-between-promises-and-observables)|
|393| [What is heap](#what-is-heap)|
|394| [What is an event table](#what-is-an-event-table)|
|395| [What is a microTask queue](#what-is-a-microtask-queue)|
|396| [What is the difference between shim and polyfill](#what-is-the-difference-between-shim-and-polyfill)|
|397| [How do you detect primitive or non primitive value type](#how-do-you-detect-primitive-or-non-primitive-value-type)|
|398| [What is babel](#what-is-babel)|
|399| [Is Node.js completely single threaded](#is-node.js-completely-single-threaded)|
|400| [What are the common use cases of observables](#what-are-the-common-use-cases-of-observables)|
|401| [What is RxJS](#what-is-rxjs)|
|402| [What is the difference between Function constructor and function declaration](#what-is-the-difference-between-function-constructor-and-function-declaration)|
|403| [What is a Short circuit condition](#what-is-a-short-circuit-condition)|
|404| [What is the easiest way to resize an array](#what-is-the-easiest-way-to-resize-an-array)|
|405| [What is an observable](#what-is-an-observable)|
|406| [What is the difference between function and class declarations](#what-is-the-difference-between-function-and-class-declarations)|
|407| [What is an async function](#what-is-an-async-function)|
|408| [How do you prevent promises swallowing errors](#how-do-you-prevent-promises-swallowing-errors)|
|409| [What is deno](#what-is-deno)|
|410| [How do you make an object iterable in javascript](#how-do-you-make-an-object-iterable-in-javascript)|
|411| [What is a Proper Tail Call](#what-is-a-proper-tail-call)|
|412| [How do you check an object is a promise or not](#how-do-you-check-an-object-is-a-promise-or-not)|
|413| [How to detect if a function is called as constructor](#how-to-detect-if-a-function-is-called-as-constructor)|
|414| [What are the differences between arguments object and rest parameter](#what-are-the-differences-between-arguments-object-and-rest-parameter)|
|415| [What are the differences between spread operator and rest parameter](#what-are-the-differences-between-spread-operator-and-rest-parameter)|
|416| [What are the different kinds of generators](#what-are-the-different-kinds-of-generators)|
|417| [What are the built-in iterables](#what-are-the-built-in-iterables)|
|418| [What are the differences between for...of and for...in statements](#what-are-the-differences-between-for...of-and-for...in-statements)|
|419| [How do you define instance and non-instance properties](#how-do-you-define-instance-and-non-instance-properties)|
|420| [What is the difference between isNaN and Number.isNaN?](#what-is-the-difference-between-isnan-and-number.isnan)|
|421| [How to invoke an IIFE without any extra brackets?](#how-to-invoke-an-iife-without-any-extra-brackets)|
|422| [Is that possible to use expressions in switch cases?](#is-that-possible-to-use-expressions-in-switch-cases)|
|423| [What is the easiest way to ignore promise errors?](#what-is-the-easiest-way-to-ignore-promise-errors)|
|424| [How do style the console output using CSS?](#how-do-style-the-console-output-using-css)|
|425| [What is nullish coalescing operator(??)?](#what-is-nullish-coalescing-operator-(??))|
|426| [How do you group and nest console output?](#how-do-you-group-and-nest-console-output)|
|427| [What is the difference between dense and sparse arrays?](#what-is-the-difference-between-dense-and-sparse-arrays)|
|428| [What are the different ways to create sparse arrays?](#what-are-the-different-ways-to-create-sparse-arrays)|

1. ### What are the possible ways to create objects in JavaScript

   There are many ways to create objects in javascript as below

   1. **Object constructor:**

      The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

      ```javascript
      var object = new Object();
      ```

   2. **Object's create method:**

      The create method of Object creates a new object by passing the prototype object as a parameter

      ```javascript
      var object = Object.create(null);
      ```

   3. **Object literal syntax:**

      The object literal syntax is equivalent to create method when it passes null as parameter

      ```javascript
      var object = {};
      ```

   4. **Function constructor:**

      Create any function and apply the new operator to create object instances,

      ```javascript
      function Person(name){
         this.name=name;
         this.age=21;
      }
      var object = new Person("Sudheer");
      ```

   5. **Function constructor with prototype:**

      This is similar to function constructor but it uses prototype for their properties and methods,

      ```javascript
      function Person(){}
      Person.prototype.name = "Sudheer";
      var object = new Person();
      ```

      This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

      ```javascript
      function func {};

      new func(x, y, z);
      ```

      **(OR)**

      ```javascript
      // Create a new instance using function prototype.
      var newInstance = Object.create(func.prototype)

      // Call the function
      var result = func.call(newInstance, x, y, z),

      // If the result is a non-null object then use it otherwise just use the new instance.
      console.log(result && typeof result === 'object' ? result : newInstance);
      ```

   6. **ES6 Class syntax:**

      ES6 introduces class feature to create the objects

      ```javascript
      class Person {
         constructor(name) {
            this.name = name;
         }
      }

      var object = new Person("Sudheer");
      ```

   7. **Singleton pattern:**

      A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

      ```javascript
      var object = new function(){
         this.name = "Sudheer";
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

2. ### What is a prototype chain

    **Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. 
    
    The prototype on object instance is available through **Object.getPrototypeOf(object)** or **__proto__** property whereas prototype on constructors function is available through **Object.prototype**.

    ![Screenshot](images/prototype_chain.png)

    **[⬆ Back to Top](#table-of-contents)**

3. ### What is the difference between Call, Apply and Bind

    The difference between Call, Apply and Bind can be explained with below examples,

    **Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

    ```javascript
    var employee1 = {firstName: 'John', lastName: 'Rodson'};
    var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }

    invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
    invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
    ```

    **Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

    ```javascript
    var employee1 = {firstName: 'John', lastName: 'Rodson'};
    var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }

    invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
    invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?
    ```

    **bind:** returns a new function, allowing you to pass any number of arguments

    ```javascript
    var employee1 = {firstName: 'John', lastName: 'Rodson'};
    var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }

    var inviteEmployee1 = invite.bind(employee1);
    var inviteEmployee2 = invite.bind(employee2);
    inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
    inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
    ```

    Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**. 
    
    Whereas Bind creates a new function that will have `this` set to the first parameter passed to bind().

    **[⬆ Back to Top](#table-of-contents)**

4. ### What is JSON and its common operations

    **JSON** is a text-based data format following JavaScript object syntax, which was popularized by `Douglas Crockford`. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json
    
    **Parsing:** Converting a string to a native object

    ```javascript
    JSON.parse(text)
    ```

    **Stringification:** converting a native object to a string so it can be transmitted across the network

    ```javascript
    JSON.stringify(object)
    ```

    **[⬆ Back to Top](#table-of-contents)**

5. ### What is the purpose of the array slice method

    The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.
    
    Some of the examples of this method are,

    ```javascript
    let arrayIntegers = [1, 2, 3, 4, 5];
    let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
    let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
    let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
    ```

    **Note:** Slice method won't mutate the original array but it returns the subset as a new array.

    **[⬆ Back to Top](#table-of-contents)**

6. ### What is the purpose of the array splice method

    The **splice()** method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array. 
    
    Some of the examples of this method are,

    ```javascript
    let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

    let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array: [3, 4, 5]
    let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
    let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
    ```

    **Note:** Splice method modifies the original array and returns the deleted array.

    **[⬆ Back to Top](#table-of-contents)**

7. ### What is the difference between slice and splice

    Some of the major difference in a tabular form

    | Slice | Splice |
    |---- | ---------
    | Doesn't modify the original array(immutable)  | Modifies the original array(mutable) |
    | Returns the subset of original array | Returns the deleted elements as array  |
    | Used to pick the elements from array | Used to insert or delete elements to/from array|

    **[⬆ Back to Top](#table-of-contents)**

8. ### How do you compare Object and Map

    **Objects** are similar to **Maps** in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

    1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
    2. The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
    3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
    4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
    5. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
    6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.

    **[⬆ Back to Top](#table-of-contents)**

9. ### What is the difference between == and === operators

    JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,
    1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
    2. Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value.
       There are two special cases in this,
       1. NaN is not equal to anything, including NaN.
       2. Positive and negative zeros are equal to one another.
    3. Two Boolean operands are strictly equal if both are true or both are false.
    4. Two objects are strictly equal if they refer to the same Object.
    5. Null and Undefined types are not equal with ===, but equal with ==. i.e,
        null===undefined --> false but null==undefined --> true

    Some of the example which covers the above cases,

    ```javascript
    0 == false   // true
    0 === false  // false
    1 == "1"     // true
    1 === "1"    // false
    null == undefined // true
    null === undefined // false
    '0' == false // true
    '0' === false // false
    []==[] or []===[] //false, refer different objects in memory
    {}=={} or {}==={} //false, refer different objects in memory
    ```

    **[⬆ Back to Top](#table-of-contents)**

10. ### What are lambda or arrow functions

    An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These functions are best suited for non-method functions, and they cannot be used as constructors.

    **[⬆ Back to Top](#table-of-contents)**

11. ### What is a first class function

    In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

    For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

    ```javascript
    const handler = () => console.log ('This is a click handler function');
    document.addEventListener ('click', handler);
    ```

    **[⬆ Back to Top](#table-of-contents)**

12. ### What is a first order function

    First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

    ```javascript
    const firstOrder = () => console.log ('I am a first order function!');
    ```

    **[⬆ Back to Top](#table-of-contents)**

13. ### What is a higher order function

    Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

    ```javascript
    const firstOrderFunc = () => console.log ('Hello, I am a First order function');
    const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
    higherOrder(firstOrderFunc);
    ```

    **[⬆ Back to Top](#table-of-contents)**

14. ### What is a unary function

    Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.
    
    Let us take an example of unary function,

    ```javascript
    const unaryFunction = a => console.log (a + 10); // Add 10 to the given argument and display the value
    ```

    **[⬆ Back to Top](#table-of-contents)**

15. ### What is the currying function

    Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician **Haskell Curry**. By applying currying, a n-ary function turns it into a unary function. 
    
    Let's take an example of n-ary function and how it turns into a currying function,

    ```javascript
    const multiArgFunction = (a, b, c) => a + b + c;
    console.log(multiArgFunction(1,2,3));// 6
    
    const curryUnaryFunction = a => b => c => a + b + c;
    curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
    curryUnaryFunction (1) (2); // returns a function: c => 3 + c
    curryUnaryFunction (1) (2) (3); // returns the number 6
    ```

    Curried functions are great to improve **code reusability** and **functional composition**.

    **[⬆ Back to Top](#table-of-contents)**

16. ### What is a pure function

    A **Pure function** is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.
    
    Let's take an example to see the difference between pure and impure functions,

    ```javascript
    //Impure
    let numberArray = [];
    const impureAddNumber = number => numberArray.push(number);
    //Pure
    const pureAddNumber = number => argNumberArray =>
      argNumberArray.concat([number]);

    //Display the results
    console.log (impureAddNumber(6)); // returns 1
    console.log (numberArray); // returns [6]
    console.log (pureAddNumber(7) (numberArray)); // returns [6, 7]
    console.log (numberArray); // returns [6]
    ```

    As per above code snippets, **Push** function is impure itself by altering the array and returning an push number index which is independent of parameter value. Whereas **Concat** on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of the previous array.
    
    Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and make it harder to break your application by not having any side effects. These principles are coming together with **Immutability** concept of ES6 by giving preference to **const** over **let** usage.

    **[⬆ Back to Top](#table-of-contents)**

17. ### What is the purpose of the let keyword

    The `let` statement declares a **block scope local variable**. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the `var` keyword used to define a variable globally, or locally to an entire function regardless of block scope.
    
    Let's take an example to demonstrate the usage,

    ```javascript
    let counter = 30;
    if (counter === 30) {
      let counter = 31;
      console.log(counter); // 31
    }
    console.log(counter); // 30 (because the variable in if block won't exist here)
    ```

    **[⬆ Back to Top](#table-of-contents)**

18. ### What is the difference between let and var

    You can list out the differences in a tabular format

    | var | let |
    |---- | ---------
    | It is been available from the beginning of JavaScript  | Introduced as part of ES6 |
    | It has function scope | It has block scope  |
    | Variables will be hoisted | Hoisted but not initialized |

    Let's take an example to see the difference,

    ```javascript
    function userDetails(username) {
       if(username) {
         console.log(salary); // undefined due to hoisting
         console.log(age); // ReferenceError: Cannot access 'age' before initialization
         let age = 30;
         var salary = 10000;
       }
       console.log(salary); //10000 (accessible to due function scope)
       console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails('John');
    ```

    **[⬆ Back to Top](#table-of-contents)**

19. ### What is the reason to choose the name let as a keyword

    `let` is a mathematical statement that was adopted by early programming languages like **Scheme** and **Basic**. It has been borrowed from dozens of other languages that use `let` already as a traditional keyword as close to `var` as possible.

    **[⬆ Back to Top](#table-of-contents)**

20. ### How do you redeclare variables in switch block without an error

    If you try to redeclare variables in a `switch block` then it will cause errors because there is only one block. For example, the below code block throws a syntax error as below,

    ```javascript
    let counter = 1;
    switch(x) {
      case 0:
        let name;
        break;

      case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }
    ```

    To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.

    ```javascript
    let counter = 1;
        switch(x) {
          case 0: {
            let name;
            break;
          }
          case 1: {
            let name; // No SyntaxError for redeclaration.
            break;
          }
        }
    ```

    **[⬆ Back to Top](#table-of-contents)**

21. ### What is the Temporal Dead Zone

    The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a `let` or `const` variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.
    
    Let's see this behavior with an example,

    ```javascript
    function somemethod() {
      console.log(counter1); // undefined
      console.log(counter2); // ReferenceError
      var counter1 = 1;
      let counter2 = 2;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

22. ### What is IIFE(Immediately Invoked Function Expression)

    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

    ```javascript
    (function ()
        {
          // logic here
        }
     )
    ();
    ```

    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

    ```javascript
    (function ()
            {
              var message = "IIFE";
              console.log(message);
            }
     )
    ();
    console.log(message); //Error: message is not defined
    ```

    **[⬆ Back to Top](#table-of-contents)**

23. ### What is the benefit of using modules

    There are a lot of benefits to using modules in favour of a sprawling. Some of the benefits are,
    1. Maintainability
    2. Reusability
    3. Namespacing

    **[⬆ Back to Top](#table-of-contents)**

24. ### What is memoization

    Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.  Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.
    Let's take an example of adding function with memoization,

    ```javascript
    const memoizAddition = () => {
      let cache = {};
     return (value) => {
      if (value in cache) {
       console.log('Fetching from cache');
       return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
      }
      else {
       console.log('Calculating result');
       let result = value + 20;
       cache[value] = result;
       return result;
      }
     }
    }
    // returned function from memoizAddition
    const addition = memoizAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
    ```

    **[⬆ Back to Top](#table-of-contents)**

25. ### What is Hoisting

    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.
    Let's take a simple example of variable hoisting,

    ```javascript
    console.log(message); //output : undefined
    var message = 'The variable Has been hoisted';
    ```

    The above code looks like as below to the interpreter,

    ```javascript
    var message;
    console.log(message);
    message = 'The variable Has been hoisted';
    ```

    **[⬆ Back to Top](#table-of-contents)**

26. ### What are classes in ES6

    In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.
    For example, the prototype based inheritance written in function expression as below,

    ```javascript
    function Bike(model,color) {
        this.model = model;
        this.color = color;
    }

    Bike.prototype.getDetails = function() {
        return this.model + ' bike has' + this.color + ' color';
    };
    ```

    Whereas ES6 classes can be defined as an alternative

    ```javascript
    class Bike{
      constructor(color, model) {
        this.color= color;
        this.model= model;
      }

      getDetails() {
        return this.model + ' bike has' + this.color + ' color';
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

27. ### What are closures

    A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
    
    1. Own scope where variables defined between its curly brackets
    2. Outer function’s variables
    3. Global variables
    
    Let's take an example of closure concept,

    ```javascript
    function Welcome(name){
      var greetingInfo = function(message){
       console.log(message+' '+name);
      }
    return greetingInfo;
    }
    var myFunction = Welcome('John');
    myFunction('Welcome '); //Output: Welcome John
    myFunction('Hello Mr.'); //output: Hello Mr.John
    ```

    As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.

    **[⬆ Back to Top](#table-of-contents)**

28. ### What are modules

    Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns.  Most of the JavaScript modules export an object literal, a function, or a constructor

    **[⬆ Back to Top](#table-of-contents)**

29. ### Why do you need modules

    Below are the list of benefits using modules in javascript ecosystem
    1. Maintainability
    2. Reusability
    3. Namespacing

    **[⬆ Back to Top](#table-of-contents)**

30. ### What is scope in javascript

    Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

    **[⬆ Back to Top](#table-of-contents)**

31. ### What is a service worker

    A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

    **[⬆ Back to Top](#table-of-contents)**

32. ### How do you manipulate DOM using a service worker

    Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the `postMessage` interface, and those pages can manipulate the DOM.

    **[⬆ Back to Top](#table-of-contents)**

33. ### How do you reuse information across service worker restarts

    The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's `onfetch` and `onmessage` handlers. In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.

    **[⬆ Back to Top](#table-of-contents)**

34. ### What is IndexedDB

    IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.

    **[⬆ Back to Top](#table-of-contents)**

35. ### What is web storage

    Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.
    1. **Local storage:** It stores data for current origin with no expiration date.
    2. **Session storage:** It stores data for one session and the data is lost when the browser tab is closed.

    **[⬆ Back to Top](#table-of-contents)**

36. ### What is a post message

    Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).

    **[⬆ Back to Top](#table-of-contents)**

37. ### What is a Cookie

    A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.
    For example, you can create a cookie named username as below,

    ```javascript
    document.cookie = "username=John";
    ```

    ![Screenshot](images/cookie.png)

    **[⬆ Back to Top](#table-of-contents)**

38. ### Why do you need a Cookie

    Cookies are used to remember information about the user profile(such as username). It basically involves two steps,
    1. When a user visits a web page, the user profile can be stored in a cookie.
    2. Next time the user visits the page, the cookie remembers the user profile.

    **[⬆ Back to Top](#table-of-contents)**

39. ### What are the options in a cookie

    There are few below options available for a cookie,
    1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).

    ```javascript
    document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
    ```

    1. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.

    ```javascript
    document.cookie = "username=John; path=/services";
    ```

    **[⬆ Back to Top](#table-of-contents)**

40. ### How do you delete a cookie

    You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case.
    For example, you can delete a username cookie in the current page as below.

    ```javascript
    document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
    ```

    **Note:** You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.

    **[⬆ Back to Top](#table-of-contents)**

41. ### What are the differences between cookie, local storage and session storage

    Below are some of the differences between cookie, local storage and session storage,

    | Feature | Cookie | Local storage | Session storage |
    |---- | --------- | ----- | ----- |
    | Accessed on client or server side | Both server-side & client-side | client-side only | client-side only |
    | Lifetime | As configured using Expires option  | until deleted | until tab is closed |
    | SSL support | Supported | Not supported | Not supported |
    | Maximum data size | 4KB | 5 MB | 5MB |

    **[⬆ Back to Top](#table-of-contents)**

42. ### What is the main difference between localStorage and sessionStorage

    LocalStorage is the same as SessionStorage but it persists the data even when the browser is closed and reopened(i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.

    **[⬆ Back to Top](#table-of-contents)**

43. ### How do you access web storage

    The Window object implements the `WindowLocalStorage` and `WindowSessionStorage` objects which has `localStorage`(window.localStorage) and `sessionStorage`(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local).
    For example, you can read and write on local storage objects as below

    ```javascript
    localStorage.setItem('logo', document.getElementById('logo').value);
    localStorage.getItem('logo');
    ```

    **[⬆ Back to Top](#table-of-contents)**

44. ### What are the methods available on session storage

    The session storage provided methods for reading, writing and clearing the session data

    ```javascript
    // Save data to sessionStorage
    sessionStorage.setItem('key', 'value');

    // Get saved data from sessionStorage
    let data = sessionStorage.getItem('key');

    // Remove saved data from sessionStorage
    sessionStorage.removeItem('key');

    // Remove all saved data from sessionStorage
    sessionStorage.clear();
    ```

    **[⬆ Back to Top](#table-of-contents)**

45. ### What is a storage event and its event handler

    The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events.
    The syntax would be as below

    ```javascript
     window.onstorage = functionRef;
    ```

    Let's take the example usage of onstorage event handler which logs the storage key and it's values

    ```javascript
    window.onstorage = function(e) {
      console.log('The ' + e.key +
        ' key has been changed from ' + e.oldValue +
        ' to ' + e.newValue + '.');
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

46. ### Why do you need web storage

    Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.

    **[⬆ Back to Top](#table-of-contents)**

47. ### How do you check web storage browser support

    You need to check browser support for localStorage and sessionStorage before using web storage,

    ```javascript
    if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
    } else {
      // Sorry! No Web Storage support..
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

48. ### How do you check web workers browser support

    You need to check browser support for web workers before using it

    ```javascript
    if (typeof(Worker) !== "undefined") {
      // code for Web worker support.
    } else {
      // Sorry! No Web Worker support..
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

49. ### Give an example of a web worker

    You need to follow below steps to start using web workers for counting example
    1. Create a Web Worker File:  You need to write a script to increment the count value. Let's name it as counter.js

    ```javascript
    let i = 0;

    function timedCount() {
      i = i + 1;
      postMessage(i);
      setTimeout("timedCount()",500);
    }

    timedCount();
    ```

    Here postMessage() method is used to post a message back to the HTML page
    1. Create a Web Worker Object: You can create a web worker object by checking for browser support. Let's name this file as web_worker_example.js

    ```javascript
    if (typeof(w) == "undefined") {
      w = new Worker("counter.js");
    }
    ```

    and we can receive messages from web worker

    ```javascript
    w.onmessage = function(event){
      document.getElementById("message").innerHTML = event.data;
    };
    ```

    1. Terminate a Web Worker:
    Web workers will continue to listen for messages (even after the external script is finished) until it is terminated. You can use the terminate() method to terminate listening to the messages.

    ```javascript
    w.terminate();
    ```

    1. Reuse the Web Worker: If you set the worker variable to undefined you can reuse the code

    ```javascript
    w = undefined;
    ```

    **[⬆ Back to Top](#table-of-contents)**

50. ### What are the restrictions of web workers on DOM

    WebWorkers don't have access to below javascript objects since they are defined in an external files
    1. Window object
    2. Document object
    3. Parent object

    **[⬆ Back to Top](#table-of-contents)**

51. ### What is a promise

    A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

    The syntax of Promise creation looks like below,

    ```javascript
        const promise = new Promise(function(resolve, reject) {
          // promise description
        })
    ```

    The usage of a promise would be as below,

    ```javascript
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve("I'm a Promise!");
      }, 5000);
    }, reject => {

    });

    promise.then(value => console.log(value));
    ```

    The action flow of a promise will be as below,

    ![Screenshot](images/promises.png)

    **[⬆ Back to Top](#table-of-contents)**

52. ### Why do you need a promise

    Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

    **[⬆ Back to Top](#table-of-contents)**

53. ### What are the three states of promise

    Promises have three states:
    1. **Pending:** This is an initial state of the Promise before an operation begins
    2. **Fulfilled:** This state indicates that the specified operation was completed.
    3. **Rejected:** This state indicates that the operation did not complete. In this case an error value will be thrown.

    **[⬆ Back to Top](#table-of-contents)**

54. ### What is a callback function

    A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
    Let's take a simple example of how to use callback function

    ```javascript
    function callbackFunction(name) {
      console.log('Hello ' + name);
    }

    function outerFunction(callback) {
      let name = prompt('Please enter your name.');
      callback(name);
    }

    outerFunction(callbackFunction);
    ```

    **[⬆ Back to Top](#table-of-contents)**

55. ### Why do we need callbacks

    The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.
    Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.

    ```javascript
    function firstFunction(){
      // Simulate a code delay
      setTimeout( function(){
        console.log('First function called');
      }, 1000 );
    }
    function secondFunction(){
      console.log('Second function called');
    }
    firstFunction();
    secondFunction();

    Output
    // Second function called
    // First function called
    ```

    As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

    **[⬆ Back to Top](#table-of-contents)**

56. ### What is a callback hell

    Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

    ```javascript
    async1(function(){
        async2(function(){
            async3(function(){
                async4(function(){
                    ....
                });
            });
        });
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

57. ### What are server-sent events

    Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.

    **[⬆ Back to Top](#table-of-contents)**

58. ### How do you receive server-sent event notifications

    The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below,

    ```javascript
    if(typeof(EventSource) !== "undefined") {
      var source = new EventSource("sse_generator.js");
      source.onmessage = function(event) {
        document.getElementById("output").innerHTML += event.data + "<br>";
      };
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

59. ### How do you check browser support for server-sent events

    You can perform browser support for server-sent events before using it as below,

    ```javascript
    if(typeof(EventSource) !== "undefined") {
      // Server-sent events supported. Let's have some code here!
    } else {
      // No server-sent events supported
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

60. ### What are the events available for server sent events

    Below are the list of events available for server sent events
    | Event | Description |
    |---- | ---------
    | onopen  | It is used when a connection to the server is opened |
    | onmessage | This event is used when a message is received  |
    | onerror | It happens when an error occurs|

    **[⬆ Back to Top](#table-of-contents)**

61. ### What are the main rules of promise

    A promise must follow a specific set of rules,
    1. A promise is an object that supplies a standard-compliant `.then()` method
    2. A pending promise may transition into either fulfilled or rejected state
    3. A fulfilled or rejected promise is settled and it must not transition into any other state.
    4. Once a promise is settled, the value must not change.

    **[⬆ Back to Top](#table-of-contents)**

62. ### What is callback in callback

    You can nest one callback inside in another callback to execute the actions sequentially one by one. This is known as callbacks in callbacks.

    ```javascript
    loadScript('/script1.js', function(script) {
       console.log('first script is loaded');

      loadScript('/script2.js', function(script) {

        console.log('second script is loaded');

        loadScript('/script3.js', function(script) {

            console.log('third script is loaded');
          // after all scripts are loaded
        });

      })

    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

63. ### What is promise chaining

    The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,

    ```javascript
    new Promise(function(resolve, reject) {

      setTimeout(() => resolve(1), 1000);

    }).then(function(result) {

      console.log(result); // 1
      return result * 2;

    }).then(function(result) {

      console.log(result); // 2
      return result * 3;

    }).then(function(result) {

      console.log(result); // 6
      return result * 4;

    });
    ```

    In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,
    1. The initial promise resolves in 1 second,
    2. After that `.then` handler is called by logging the result(1) and then return a promise with the value of result * 2.
    3. After that the value passed to the next `.then` handler by logging the result(2) and return a promise with result * 3.
    4. Finally the value passed to the last `.then` handler by logging the result(6) and return a promise with result * 4.

    **[⬆ Back to Top](#table-of-contents)**

64. ### What is promise.all

    Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected. For example, the syntax of promise.all method is below,

    ```javascript
    Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log(`Error in promises ${error}`))
    ```

    **Note:** Remember that the order of the promises(output the result) is maintained as per input order.

    **[⬆ Back to Top](#table-of-contents)**

65. ### What is the purpose of the race method in promise

    Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first

    ```javascript
    var promise1 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, 'one');
    });
    var promise2 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'two');
    });

    Promise.race([promise1, promise2]).then(function(value) {
      console.log(value); // "two" // Both promises will resolve, but promise2 is faster
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

66. ### What is a strict mode in javascript

    Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression `"use strict";` instructs the browser to use the javascript code in the Strict mode.

    **[⬆ Back to Top](#table-of-contents)**

67. ### Why do you need strict mode

    Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

    **[⬆ Back to Top](#table-of-contents)**

68. ### How do you declare strict mode

    The strict mode is declared by adding "use strict"; to the beginning of a script or a function.
    If declared at the beginning of a script, it has global scope.

    ```javascript
    "use strict";
    x = 3.14; // This will cause an error because x is not declared
    ```

    and if you declare inside a function, it has local scope

    ```javascript
    x = 3.14;       // This will not cause an error.
    myFunction();

    function myFunction() {
      "use strict";
      y = 3.14;   // This will cause an error
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

69. ### What is the purpose of double exclamation

    The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true.
    For example, you can test IE version using this expression as below,

    ```javascript
    let isIE8 = false;
    isIE8 = !! navigator.userAgent.match(/MSIE 8.0/);
    console.log(isIE8); // returns true or false
    ```

    If you don't use this expression then it returns the original value.

    ```javascript
    console.log(navigator.userAgent.match(/MSIE 8.0/));  // returns either an Array or null
    ```

    **Note:** The expression !! is not an operator, but it is just twice of ! operator.

    **[⬆ Back to Top](#table-of-contents)**

70. ### What is the purpose of the delete operator

    The delete keyword is used to delete the property as well as its value.

    ```javascript
    var user= {name: "John", age:20};
    delete user.age;

    console.log(user); // {name: "John"}
    ```

    **[⬆ Back to Top](#table-of-contents)**

71. ### What is the typeof operator

    You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.

    ```javascript
    typeof "John Abraham"     // Returns "string"
    typeof (1 + 2)        // Returns "number"
    ```

    **[⬆ Back to Top](#table-of-contents)**

72. ### What is undefined property

    The undefined property indicates that a variable has not been assigned a value, or not declared at all. The type of undefined value is undefined too.

    ```javascript
    var user;    // Value is undefined, type is undefined
    console.log(typeof(user)) //undefined
    ```

    Any variable can be emptied by setting the value to undefined.

    ```javascript
    user = undefined
    ```

    **[⬆ Back to Top](#table-of-contents)**

73. ### What is null value

    The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object.
    You can empty the variable by setting the value to null.

    ```javascript
    var user = null;
    console.log(typeof(user)) //object
    ```

    **[⬆ Back to Top](#table-of-contents)**

74. ### What is the difference between null and undefined

    Below are the main differences between null and undefined,

    | Null | Undefined |
    |---- | -----------|
    | It is an assignment value which indicates that variable points to no object.  | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
    | Type of null is object | Type of undefined is undefined  |
    | The null value is a primitive value that represents the null, empty, or non-existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value.|
    | Indicates the absence of a value for a variable | Indicates absence of variable itself |
    | Converted to zero (0) while performing primitive operations | Converted to NaN while performing primitive operations |

    **[⬆ Back to Top](#table-of-contents)**

75. ### What is eval

    The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.

    ```javascript
    console.log(eval('1 + 2')); //  3
    ```

    **[⬆ Back to Top](#table-of-contents)**

76. ### What is the difference between window and document

    Below are the main differences between window and document,

    | Window | Document |
    |---- | ---------
    | It is the root level element in any web page  | It is the direct child of the window object. This is also known as Document Object Model(DOM) |
    | By default window object is available implicitly in the page | You can access it via window.document or document.  |
    | It has methods like alert(), confirm() and properties like document, location | It provides methods like getElementById, getElementsByTagName, createElement etc  |

    **[⬆ Back to Top](#table-of-contents)**

77. ### How do you access history in javascript

    The window.history object contains the browser's history. You can load previous and next URLs in the history using back() and next() methods.

    ```javascript
    function goBack() {
      window.history.back()
    }
    function goForward() {
      window.history.forward()
    }
    ```

    **Note:** You can also access history without window prefix.

    **[⬆ Back to Top](#table-of-contents)**

78. ### How do you detect caps lock key turned on or not

    The `mouseEvent getModifierState()` is used to return a boolean value that indicates whether the specified modifier key is activated or not. The modifiers such as CapsLock, ScrollLock and NumLock are activated when they are clicked, and deactivated when they are clicked again.
    
    Let's take an input element to detect the CapsLock on/off behavior with an example,
    
    ```html
        <input type="password" onmousedown="enterInput(event)">
          
        <p id="feedback"></p>
          
        <script>
        function enterInput(e) {
          var flag = e.getModifierState("CapsLock");
          if(flag) {
              document.getElementById("feedback").innerHTML = "CapsLock activated";
              
          } else {
              document.getElementById("feedback").innerHTML = "CapsLock not activated";
          }
        }
        </script>
    ```

    **[⬆ Back to Top](#table-of-contents)**

79. ### What is isNaN

    The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.

    ```javascript
    isNaN('Hello') //true
    isNaN('100') //false
    ```

    **[⬆ Back to Top](#table-of-contents)**

80. ### What are the differences between undeclared and undefined variables

    Below are the major differences between undeclared and undefined variables,

    | undeclared | undefined |
    |---- | ---------
    | These variables do not exist in a program and are not declared  | These variables declared in the program but have not assigned any value |
    | If you try to read the value of an undeclared variable, then a runtime error is encountered | If you try to read the value of an undefined variable, an undefined value is returned.  |

    **[⬆ Back to Top](#table-of-contents)**

81. ### What are global variables

    Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable

    ```javascript
    msg = "Hello" // var is missing, it becomes global variable
    ```

    **[⬆ Back to Top](#table-of-contents)**

82. ### What are the problems with global variables

    The problem with global variables is the conflict of variable names of local and global scope. It is also difficult to debug and test the code that relies on global variables.

    **[⬆ Back to Top](#table-of-contents)**

83. ### What is NaN property

    The NaN property is a global property that represents "Not-a-Number" value. i.e, It indicates that a value is not a legal number. It is very rare to use NaN in a program but it can be used as return value for few cases

    ```javascript
    Math.sqrt(-1)
    parseInt("Hello")
    ```

    **[⬆ Back to Top](#table-of-contents)**

84. ### What is the purpose of isFinite function

    The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.

    ```javascript
    isFinite(Infinity);  // false
    isFinite(NaN);       // false
    isFinite(-Infinity); // false

    isFinite(100);         // true
    ```

    **[⬆ Back to Top](#table-of-contents)**

85. ### What is an event flow

    Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object.
    There are two ways of event flow
    1. Top to Bottom(Event Capturing)
    2. Bottom to Top (Event Bubbling)

    **[⬆ Back to Top](#table-of-contents)**

86. ### What is event bubbling

    Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

    **[⬆ Back to Top](#table-of-contents)**

87. ### What is event capturing

    Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element.

    **[⬆ Back to Top](#table-of-contents)**

88. ### How do you submit a form using JavaScript

    You can submit a form using `document.forms[0].submit()`. All the form input's information is submitted using onsubmit event handler

    ```javascript
    function submit() {
        document.forms[0].submit();
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

89. ### How do you find operating system details

    The window.navigator object contains information about the visitor's browser OS details. Some of the OS properties are available under platform property,

    ```javascript
    console.log(navigator.platform);
    ```

    **[⬆ Back to Top](#table-of-contents)**

90. ### What is the difference between document load and DOMContentLoaded events

    The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).

    **[⬆ Back to Top](#table-of-contents)**

91. ### What is the difference between native, host and user objects

    `Native objects` are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec.
    `Host objects` are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects.
    `User objects` are objects defined in the javascript code. For example, User objects created for profile information.

    **[⬆ Back to Top](#table-of-contents)**

92. ### What are the tools or techniques used for debugging JavaScript code

    You can use below tools or techniques for debugging javascript
    1. Chrome Devtools
    2. debugger statement
    3. Good old console.log statement

    **[⬆ Back to Top](#table-of-contents)**

93. ### What are the pros and cons of promises over callbacks

    Below are the list of pros and cons of promises over callbacks,

    **Pros:**
    1. It avoids callback hell which is unreadable
    2. Easy to write sequential asynchronous code with .then()
    3. Easy to write parallel asynchronous code with Promise.all()
    4. Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)

    **Cons:**
    1. It makes little complex code
    2. You need to load a polyfill if ES6 is not supported

    **[⬆ Back to Top](#table-of-contents)**

94. ### What is the difference between an attribute and a property

    Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,

    ```javascript
    <input type="text" value="Name:">
    ```

    You can retrieve the attribute value as below,

    ```javascript
    const input = document.querySelector('input');
    console.log(input.getAttribute('value')); // Good morning
    console.log(input.value); // Good morning
    ```

    And after you change the value of the text field to "Good evening", it becomes like

    ```javascript
    console.log(input.getAttribute('value')); // Good morning
    console.log(input.value); // Good evening
    ```

    **[⬆ Back to Top](#table-of-contents)**

95. ### What is same-origin policy

    The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

    **[⬆ Back to Top](#table-of-contents)**

96. ### What is the purpose of void 0

    Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an ```<a>``` element. i.e, when you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression.
    For example, the below link notify the message without reloading the page

    ```javascript
    <a href="JavaScript:void(0);" onclick="alert('Well done!')">Click Me!</a>
    ```

    **[⬆ Back to Top](#table-of-contents)**

97. ### Is JavaScript a compiled or interpreted language

    JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays  modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

    **[⬆ Back to Top](#table-of-contents)**

98. ### Is JavaScript a case-sensitive language

    Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

    **[⬆ Back to Top](#table-of-contents)**

99. ### Is there any relation between Java and JavaScript

    No, they are entirely two different programming languages and have nothing to do with each other. But both of them are Object Oriented Programming languages and like many other languages, they follow similar syntax for basic features(if, else, for, switch, break, continue etc).

    **[⬆ Back to Top](#table-of-contents)**

100. ### What are events

     Events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can `react` on these events. Some of the examples of HTML events are,

     1. Web page has finished loading
     2. Input field was changed
     3. Button was clicked

     Let's describe the behavior of click event for button element,

     ```javascript
     <!doctype html>
     <html>
      <head>
        <script>
          function greeting() {
            alert('Hello! Good morning');
          }
        </script>
      </head>
      <body>
        <button type="button" onclick="greeting()">Click me</button>
      </body>
     </html>
     ```

     **[⬆ Back to Top](#table-of-contents)**

101. ### Who created javascript

     JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Initially it was developed under the name `Mocha`, but later the language was officially called `LiveScript` when it first shipped in beta releases of Netscape.

     **[⬆ Back to Top](#table-of-contents)**

102. ### What is the use of preventDefault method

     The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.

     ```javascript
     document.getElementById("link").addEventListener("click", function(event){
      event.preventDefault();
     });
     ```

     **Note:** Remember that not all events are cancelable.

     **[⬆ Back to Top](#table-of-contents)**

103. ### What is the use of stopPropagation method

     The stopPropagation method is used to stop the event from bubbling up the event chain. For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested div(Div1)

     ```javascript
     <p>Click DIV1 Element</p>
     <div onclick="secondFunc()">DIV 2
       <div onclick="firstFunc(event)">DIV 1</div>
     </div>

     <script>
     function firstFunc(event) {
       alert("DIV 1");
       event.stopPropagation();
     }

     function secondFunc() {
       alert("DIV 2");
     }
     </script>
     ```

     **[⬆ Back to Top](#table-of-contents)**

104. ### What are the steps involved in return false usage

     The return false statement in event handlers performs the below steps,

     1. First it stops the browser's default action or behaviour.
     2. It prevents the event from propagating the DOM
     3. Stops callback execution and returns immediately when called.

     **[⬆ Back to Top](#table-of-contents)**

105. ### What is BOM

     The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

     ![Screenshot](images/bom.png)

     **[⬆ Back to Top](#table-of-contents)**

106. ### What is the use of setTimeout

     The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method,

     ```javascript
     setTimeout(function(){ console.log("Good morning"); }, 2000);
     ```

     **[⬆ Back to Top](#table-of-contents)**

107. ### What is the use of setInterval

     The setInterval() method is used to call a function or evaluate an expression at specified intervals (in milliseconds). For example, let's log a message after 2 seconds using setInterval method,

     ```javascript
     setInterval(function(){ console.log("Good morning"); }, 2000);
     ```

     **[⬆ Back to Top](#table-of-contents)**

108. ### Why is JavaScript treated as Single threaded

     JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.

     **[⬆ Back to Top](#table-of-contents)**

109. ### What is an event delegation

     Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

     For example, if you wanted to detect field changes in inside a specific form, you can use event delegation technique,

     ```javascript
     var form = document.querySelector('#registration-form');

     // Listen for changes to fields inside the form
     form.addEventListener('input', function (event) {

     // Log the field that was changed
     console.log(event.target);

     }, false);
     ```

     **[⬆ Back to Top](#table-of-contents)**

110. ### What is ECMAScript

     ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The first edition of ECMAScript was released in 1997.

     **[⬆ Back to Top](#table-of-contents)**

111. ### What is JSON

     JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

     **[⬆ Back to Top](#table-of-contents)**

112. ### What are the syntax rules of JSON

     Below are the list of syntax rules of JSON
     1. The data is in name/value pairs
     2. The data is separated by commas
     3. Curly braces hold objects
     4. Square brackets hold arrays

     **[⬆ Back to Top](#table-of-contents)**

113. ### What is the purpose JSON stringify

     When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.

     ```javascript
     var userJSON = {'name': 'John', age: 31}
     var userString = JSON.stringify(user);
     console.log(userString); //"{"name":"John","age":31}"
     ```

     **[⬆ Back to Top](#table-of-contents)**

114. ### How do you parse JSON string

     When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

     ```javascript
     var userString = '{"name":"John","age":31}';
     var userJSON = JSON.parse(userString);
     console.log(userJSON);// {name: "John", age: 31}
     ```

     **[⬆ Back to Top](#table-of-contents)**

115. ### Why do you need JSON

     When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

     **[⬆ Back to Top](#table-of-contents)**

116. ### What are PWAs

     Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

     **[⬆ Back to Top](#table-of-contents)**

117. ### What is the purpose of clearTimeout method

     The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that. i.e, The return value of setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer.

     For example, the below setTimeout method is used to display the message after 3 seconds. This timeout can be cleared by the clearTimeout() method.

     ```javascript
     <script>
     var msg;
     function greeting() {
        alert('Good morning');
     }
     function start() {
       msg =setTimeout(greeting, 3000);

     }

     function stop() {
         clearTimeout(msg);
     }
     </script>
     ```

     **[⬆ Back to Top](#table-of-contents)**

118. ### What is the purpose of clearInterval method

     The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function. i.e, The return value returned by setInterval() function is stored in a variable and it’s passed into the clearInterval() function to clear the interval.

     For example, the below setInterval method is used to display the message for every 3 seconds. This interval can be cleared by the clearInterval() method.

     ```javascript
     <script>
     var msg;
     function greeting() {
        alert('Good morning');
     }
     function start() {
       msg = setInterval(greeting, 3000);

     }

     function stop() {
         clearInterval(msg);
     }
     </script>
     ```

     **[⬆ Back to Top](#table-of-contents)**

119. ### How do you redirect new page in javascript

     In vanilla javascript, you can redirect to a new page using the `location` property of window object. The syntax would be as follows,

     ```javascript
     function redirect() {
        window.location.href = 'newPage.html';
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

120. ### How do you check whether a string contains a substring

     There are 3 possible ways to check whether a string contains a substring or not,
     1. **Using includes:** ES6 provided `String.prototype.includes` method to test a string contains a substring

     ```javascript
     var mainString = "hello", subString = "hell";
     mainString.includes(subString)
     ```

     1. **Using indexOf:** In an ES5 or older environment, you can use `String.prototype.indexOf` which returns the index of a substring. If the index value is not equal to -1 then it means the substring exists in the main string.

     ```javascript
     var mainString = "hello", subString = "hell";
     mainString.indexOf(subString) !== -1
     ```

     1. **Using RegEx:** The advanced solution is using Regular expression's test method(`RegExp.test`), which allows for testing for against regular expressions

     ```javascript
     var mainString = "hello", regex = /hell/;
     regex.test(mainString)
     ```

     **[⬆ Back to Top](#table-of-contents)**

121. ### How do you validate an email in javascript

     You can validate an email in javascript using regular expressions. It is recommended to do validations on the server side instead of the client side. Because the javascript can be disabled on the client side.

     ```javascript
     function validateEmail(email) {
         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(String(email).toLowerCase());
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

     The above regular expression accepts unicode characters.

122. ### How do you get the current url with javascript

     You can use `window.location.href` expression to get the current url path and you can use the same expression for updating the URL too. You can also use `document.URL` for read-only purposes but this solution has issues in FF.

     ```javascript
     console.log('location.href', window.location.href); // Returns full URL
     ```

     **[⬆ Back to Top](#table-of-contents)**

123. ### What are the various url properties of location object

     The below `Location` object properties can be used to access URL components of the page,
     1. href - The entire URL
     2. protocol - The protocol of the URL
     3. host - The hostname and port of the URL
     4. hostname - The hostname of the URL
     5. port - The port number in the URL
     6. pathname - The path name of the URL
     7. search - The query portion of the URL
     8. hash - The anchor portion of the URL

     **[⬆ Back to Top](#table-of-contents)**

124. ### How do get query string values in javascript

     You can use URLSearchParams to get query string values in javascript. Let's see an example to get the client code value from URL query string,

     ```javascript
     const urlParams = new URLSearchParams(window.location.search);
     const clientCode = urlParams.get('clientCode');
     ```

     **[⬆ Back to Top](#table-of-contents)**

125. ### How do you check if a key exists in an object

     You can check whether a key exists in an object or not using three approaches,

     1. **Using in operator:** You can use the in operator whether a key exists in an object or not

     ```javascript
     "key" in obj
     ```

     and If you want to check if a key doesn't exist, remember to use parenthesis,

     ```javascript
     !("key" in obj)
     ```

     1. **Using hasOwnProperty method:** You can use `hasOwnProperty` to particularly test for properties of the object instance (and not inherited properties)

     ```javascript
     obj.hasOwnProperty("key") // true
     ```

     1. **Using undefined comparison:** If you access a non-existing property from an object, the result is undefined. Let’s compare the properties against undefined to determine the existence of the property.

     ```javascript
     const user = {
       name: 'John'
     };

     console.log(user.name !== undefined);     // true
     console.log(user.nickName !== undefined); // false
     ```

     **[⬆ Back to Top](#table-of-contents)**

126. ### How do you loop through or enumerate javascript object

     You can use the `for-in` loop to loop through javascript object. You can also make sure that the key you get is an actual property of an object, and doesn't come from the prototype using `hasOwnProperty` method.

     ```javascript
     var object = {
         "k1": "value1",
         "k2": "value2",
         "k3": "value3"
     };

     for (var key in object) {
         if (object.hasOwnProperty(key)) {
             console.log(key + " -> " + object[key]); // k1 -> value1 ...
         }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

127. ### How do you test for an empty object

     There are different solutions based on ECMAScript versions
     1. **Using Object entries(ECMA 7+):** You can use object entries length along with constructor type.

     ```javascript
     Object.entries(obj).length === 0 && obj.constructor === Object // Since date object length is 0, you need to check constructor check as well
     ```

     1. **Using Object keys(ECMA 5+):** You can use object keys length along with constructor type.

     ```javascript
     Object.keys(obj).length === 0 && obj.constructor === Object // Since date object length is 0, you need to check constructor check as well
     ```

     1. **Using for-in with hasOwnProperty(Pre-ECMA 5):** You can use a for-in loop along with hasOwnProperty.

     ```javascript
     function isEmpty(obj) {
       for(var prop in obj) {
         if(obj.hasOwnProperty(prop)) {
           return false;
         }
       }

       return JSON.stringify(obj) === JSON.stringify({});
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

128. ### What is an arguments object

     The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,

     ```javascript
     function sum() {
         var total = 0;
         for (var i = 0, len = arguments.length; i < len; ++i) {
             total += arguments[i];
         }
         return total;
     }

     sum(1, 2, 3) // returns 6
     ```

     **Note:** You can't apply array methods on arguments object. But you can convert into a regular array as below.

     ```javascript
     var argsArray = Array.prototype.slice.call(arguments);
     ```

     **[⬆ Back to Top](#table-of-contents)**

129. ### How do you make first letter of the string in an uppercase

     You can create a function which uses a chain of string methods such as charAt, toUpperCase and slice methods to generate a string with the first letter in uppercase.

     ```javascript
     function capitalizeFirstLetter(string) {
         return string.charAt(0).toUpperCase() + string.slice(1);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

130. ### What are the pros and cons of for loop

     The for-loop is a commonly used iteration syntax in javascript. It has both pros and cons
     
     #### Pros
     1. Works on every environment
     2. You can use break and continue flow control statements

     #### Cons
     1. Too verbose
     2. Imperative
     3. You might face one-by-off errors

     **[⬆ Back to Top](#table-of-contents)**

131. ### How do you display the current date in javascript

     You can use `new Date()` to generate a new Date object containing the current date and time. For example, let's display the current date in mm/dd/yyyy

     ```javascript
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();

     today = mm + '/' + dd + '/' + yyyy;
     document.write(today);
     ```

     **[⬆ Back to Top](#table-of-contents)**

132. ### How do you compare two date objects

     You need to use date.getTime() method to compare date values instead of comparison operators (==, !=, ===, and !== operators)

     ```javascript
     var d1 = new Date();
     var d2 = new Date(d1);
     console.log(d1.getTime() === d2.getTime()); //True
     console.log(d1 === d2); // False
     ```

     **[⬆ Back to Top](#table-of-contents)**

133. ### How do you check if a string starts with another string

     You can use ECMAScript 6's `String.prototype.startsWith()` method to check if a string starts with another string or not. But it is not yet supported in all browsers. Let's see an example to see this usage,

     ```javascript
     "Good morning".startsWith("Good"); // true
     "Good morning".startsWith("morning"); // false
     ```

     **[⬆ Back to Top](#table-of-contents)**

134. ### How do you trim a string in javascript

     JavaScript provided a trim method on string types to trim any whitespaces present at the beginning or ending of the string.

     ```javascript
     "  Hello World   ".trim(); //Hello World
     ```

     If your browser(<IE9) doesn't support this method then you can use below polyfill.

     ```javascript
     if (!String.prototype.trim) {
         (function() {
             // Make sure we trim BOM and NBSP
             var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
             String.prototype.trim = function() {
                 return this.replace(rtrim, '');
             };
         })();
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

135. ### How do you add a key value pair in javascript

     There are two possible solutions to add new properties to an object. Let's take a simple object to explain these solutions.

     ```javascript
     var object = {
         key1: value1,
         key2: value2
     };
     ```

     1. **Using dot notation:** This solution is useful when you know the name of the property

     ```javascript
     object.key3 = "value3";
     ```

     1. **Using square bracket notation:** This solution is useful when the name of the property is dynamically determined.

     ```javascript
     obj["key3"] = "value3";
     ```

     **[⬆ Back to Top](#table-of-contents)**

136. ### Is the !-- notation represents a special operator

     No,that's not a special operator. But it is a combination of 2 standard operators one after the other,
     1. A logical not (!)
     2. A prefix decrement (--)

     At first, the value decremented by one and then tested to see if it is equal to zero or not for determining the truthy/falsy value.

     **[⬆ Back to Top](#table-of-contents)**

137. ### How do you assign default values to variables

     You can use the logical or operator `||` in an assignment expression to provide a default value. The syntax looks like as below,

     ```javascript
     var a = b || c;
     ```

     As per the above expression, variable 'a 'will get the value of 'c' only if 'b' is falsy (if is null, false, undefined, 0, empty string, or NaN), otherwise 'a' will get the value of 'b'.

     **[⬆ Back to Top](#table-of-contents)**

138. ### How do you define multiline strings

     You can define multiline string literals using the '\\' character followed by line terminator.

     ```javascript
     var str = "This is a \
     very lengthy \
     sentence!";
     ```

     But if you have a space after the '\\' character, the code will look exactly the same, but it will raise a SyntaxError.

     **[⬆ Back to Top](#table-of-contents)**

139. ### What is an app shell model

     An application shell (or app shell) architecture is one way to build a Progressive Web App that reliably and instantly loads on your users' screens, similar to what you see in native applications. It is useful for getting some initial HTML to the screen fast without a network.

     **[⬆ Back to Top](#table-of-contents)**

140. ### Can we define properties for functions

     Yes, We can define properties for functions because functions are also objects.

     ```javascript
     fn = function(x) {
        //Function code goes here
     }

     fn.name = "John";

     fn.profile = function(y) {
       //Profile code goes here
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

141. ### What is the way to find the number of parameters expected by a function

     You can use `function.length` syntax to find the number of parameters expected by a function. Let's take an example of `sum` function to calculate the sum of numbers,

     ```javascript
     function sum(num1, num2, num3, num4){
         return num1 + num2 + num3 + num4;
     }
     sum.length // 4 is the number of parameters expected.
     ```

     **[⬆ Back to Top](#table-of-contents)**

142. ### What is a polyfill

     A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7.

     **[⬆ Back to Top](#table-of-contents)**

143. ### What are break and continue statements

     The break statement is used to "jump out" of a loop. i.e, It breaks the loop and continues executing the code after the loop.

     ```javascript
     for (i = 0; i < 10; i++) {
       if (i === 5) { break; }
       text += "Number: " + i + "<br>";
     }
     ```

     The continue statement is used to "jump over" one iteration in the loop. i.e, It breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

     ```javascript
     for (i = 0; i < 10; i++) {
         if (i === 5) { continue; }
         text += "Number: " + i + "<br>";
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

144. ### What are js labels

     The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later. For example, the below code with labels avoids printing the numbers when they are same,

     ```javascript
     var i, j;

     loop1:
     for (i = 0; i < 3; i++) {
        loop2:
        for (j = 0; j < 3; j++) {
           if (i === j) {
              continue loop1;
           }
           console.log('i = ' + i + ', j = ' + j);
        }
     }

     // Output is:
     //   "i = 1, j = 0"
     //   "i = 2, j = 0"
     //   "i = 2, j = 1"
     ```

     **[⬆ Back to Top](#table-of-contents)**

145. ### What are the benefits of keeping declarations at the top

     It is recommended to keep all declarations at the top of each script or function. The benefits of doing this are,
     1. Gives cleaner code
     2. It provides a single place to look for local variables
     3. Easy to avoid unwanted global variables
     4. It reduces the possibility of unwanted re-declarations

     **[⬆ Back to Top](#table-of-contents)**

146. ### What are the benefits of initializing variables

     It is recommended to initialize variables because of the below benefits,
     1. It gives cleaner code
     2. It provides a single place to initialize variables
     3. Avoid undefined values in the code

     **[⬆ Back to Top](#table-of-contents)**

147. ### What are the recommendations to create new object

     It is recommended to avoid creating new objects using `new Object()`. Instead you can initialize values based on it's type to create the objects.
     1. Assign {} instead of new Object()
     2. Assign "" instead of new String()
     3. Assign 0 instead of new Number()
     4. Assign false instead of new Boolean()
     5. Assign [] instead of new Array()
     6. Assign /()/ instead of new RegExp()
     7. Assign function (){} instead of new Function()

     You can define them as an example,

     ```javascript
     var v1 = {};
     var v2 = "";
     var v3 = 0;
     var v4 = false;
     var v5 = [];
     var v6 = /()/;
     var v7 = function(){};
     ```

     **[⬆ Back to Top](#table-of-contents)**

148. ### How do you define JSON arrays

     JSON arrays are written inside square brackets and arrays contain javascript objects. For example, the JSON array of users would be as below,

     ```javascript
     "users":[
       {"firstName":"John", "lastName":"Abrahm"},
       {"firstName":"Anna", "lastName":"Smith"},
       {"firstName":"Shane", "lastName":"Warn"}
     ]
     ```

     **[⬆ Back to Top](#table-of-contents)**

149. ### How do you generate random integers

     You can use Math.random() with Math.floor() to return random integers. For example, if you want generate random integers between 1 to 10, the multiplication factor should be 10,

     ```javascript
     Math.floor(Math.random() * 10) + 1;     // returns a random integer from 1 to 10
     Math.floor(Math.random() * 100) + 1;     // returns a random integer from 1 to 100
     ```

     **Note:** Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)

     **[⬆ Back to Top](#table-of-contents)**

150. ### Can you write a random integers function to print integers with in a range

     Yes, you can create a proper random function to return a random number between min and max (both included)

     ```javascript
     function randomInteger(min, max) {
       return Math.floor(Math.random() * (max - min + 1) ) + min;
     }
     randomInteger(1, 100); // returns a random integer from 1 to 100
     randomInteger(1, 1000); // returns a random integer from 1 to 1000
     ```

     **[⬆ Back to Top](#table-of-contents)**

151. ### What is tree shaking

     Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler `rollup`.

     **[⬆ Back to Top](#table-of-contents)**

152. ### What is the need of tree shaking

     Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be. For example, if we just want to create a “Hello World” Application using SPA frameworks then it will take around a few MBs, but by tree shaking it can bring down the size to just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack bundlers.

     **[⬆ Back to Top](#table-of-contents)**

153. ### Is it recommended to use eval

     No, it allows arbitrary code to be run which causes a security problem. As we know that the eval() function is used to run text as code. In most of the cases, it should not be necessary to use it.

     **[⬆ Back to Top](#table-of-contents)**

154. ### What is a Regular Expression

     A regular expression is a sequence of characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and text replace operations. Let's see the syntax format now,

     ```javascript
     /pattern/modifiers;
     ```

     For example, the regular expression or search pattern with case-insensitive username would be,

     ```javascript
     /John/i
     ```

     **[⬆ Back to Top](#table-of-contents)**

155. ### What are the string methods available in Regular expression

     Regular Expressions has two string methods: search() and replace().
     The search() method uses an expression to search for a match, and returns the position of the match.

     ```javascript
     var msg = "Hello John";
     var n = msg.search(/John/i); // 6
     ```

     The replace() method is used to return a modified string where the pattern is replaced.

     ```javascript
     var msg = "Hello John";
     var n = msg.replace(/John/i, "Buttler"); // Hello Buttler
     ```

     **[⬆ Back to Top](#table-of-contents)**

156. ### What are modifiers in regular expression

      Modifiers can be used to perform case-insensitive and global searches. Let's list down some of the modifiers,

      | Modifier | Description |
      |---- | ---------
      | i  | Perform case-insensitive matching |
      | g | Perform a global match rather than stops at first match  |
      | m | Perform multiline matching|

      Let's take an example of global modifier,

      ```javascript
      var text = "Learn JS one by one";
      var pattern = /one/g;
      var result = text.match(pattern); // one,one
      ```

      **[⬆ Back to Top](#table-of-contents)**

157. ### What are regular expression patterns

     Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,
     1. **Brackets:** These are used to find a range of characters.
        For example, below are some use cases,
        1. [abc]: Used to find any of the characters between the brackets(a,b,c)
        2. [0-9]: Used to find any of the digits between the brackets
        3. (a|b): Used to find any of the alternatives separated with |
     2. **Metacharacters:** These are characters with a special meaning
        For example, below are some use cases,
        1. \\d: Used to find a digit
        2. \\s: Used to find a whitespace character
        3. \\b: Used to find a match at the beginning or ending of a word
     3. **Quantifiers:** These are useful to define quantities
        For example, below are some use cases,
        1. n+: Used to find matches for any string that contains at least one n
        2. n*: Used to find matches for any string that contains zero or more occurrences of n
        3. n?: Used to find matches for any string that contains zero or one occurrences of n

     **[⬆ Back to Top](#table-of-contents)**

158. ### What is a RegExp object

     RegExp object is a regular expression object with predefined properties and methods. Let's see the simple usage of RegExp object,

     ```javascript
     var regexp = new RegExp('\\w+');
     console.log(regexp);
     // expected output: /\w+/
     ```

     **[⬆ Back to Top](#table-of-contents)**

159. ### How do you search a string for a pattern

     You can use the test() method of regular expression in order to search a string for a pattern, and return true or false depending on the result.

     ```javascript
     var pattern = /you/;
     console.log(pattern.test("How are you?")); //true
     ```

     **[⬆ Back to Top](#table-of-contents)**

160. ### What is the purpose of exec method

     The purpose of exec method is similar to test method but it executes a search for a match in a specified string and returns a result array, or null instead of returning true/false.

     ```javascript
     var pattern = /you/;
     console.log(pattern.exec("How are you?")); //["you", index: 8, input: "How are you?", groups: undefined]
     ```

     **[⬆ Back to Top](#table-of-contents)**

161. ### How do you change the style of a HTML element

     You can change inline style or classname of a HTML element using javascript
     1. **Using style property:** You can modify inline style using style property

     ```javascript
     document.getElementById("title").style.fontSize = "30px";
     ```

     1. **Using ClassName property:** It is easy to modify element class using className property

     ```javascript
      document.getElementById("title").className = "custom-title";
      ```

     **[⬆ Back to Top](#table-of-contents)**

162. ### What would be the result of 1+2+'3'

     The output is going to be `33`. Since `1` and `2` are numeric values, the result of the first two digits is going to be a numeric value `3`. The next digit is a string type value because of that the addition of numeric value `3` and string type value `3` is just going to be a concatenation value `33`.

     **[⬆ Back to Top](#table-of-contents)**

163. ### What is a debugger statement

     The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.
     For example, in the below function a debugger statement has been inserted. So
     execution is paused at the debugger statement just like a breakpoint in the script source.

     ```javascript
     function getProfile() {
     // code goes here
     debugger;
     // code goes here
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

164. ### What is the purpose of breakpoints in debugging

     You can set breakpoints in the javascript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button.

     **[⬆ Back to Top](#table-of-contents)**

165. ### Can I use reserved words as identifiers

     No, you cannot use the reserved words as variables, labels, object or function names. Let's see one simple example,

     ```javascript
     var else = "hello"; // Uncaught SyntaxError: Unexpected token else
     ```

     **[⬆ Back to Top](#table-of-contents)**

166. ### How do you detect a mobile browser

     You can use regex which returns a true or false value depending on whether or not the user is browsing with a mobile.

     ```javascript
     window.mobilecheck = function() {
       var mobileCheck = false;
       (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) mobileCheck = true;})(navigator.userAgent||navigator.vendor||window.opera);
       return mobileCheck;
     };
     ```

     **[⬆ Back to Top](#table-of-contents)**

167. ### How do you detect a mobile browser without regexp

     You can detect mobile browsers by simply running through a list of devices and checking if the useragent matches anything. This is an alternative solution for RegExp usage,

     ```javascript
     function detectmob() {
      if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ){
         return true;
       }
      else {
         return false;
       }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

168. ### How do you get the image width and height using JS

     You can programmatically get the image and check the dimensions(width and height) using Javascript.

     ```javascript
     var img = new Image();
     img.onload = function() {
       console.log(this.width + 'x' + this.height);
     }
     img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
     ```

     **[⬆ Back to Top](#table-of-contents)**

169. ### How do you make synchronous HTTP request

     Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests from JavaScript

     ```javascript
     function httpGet(theUrl)
     {
         var xmlHttpReq = new XMLHttpRequest();
         xmlHttpReq.open( "GET", theUrl, false ); // false for synchronous request
         xmlHttpReq.send( null );
         return xmlHttpReq.responseText;
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

170. ### How do you make asynchronous HTTP request

     Browsers provide an XMLHttpRequest object which can be used to make asynchronous HTTP requests from JavaScript by passing the 3rd parameter as true.

     ```javascript
     function httpGetAsync(theUrl, callback)
     {
         var xmlHttpReq = new XMLHttpRequest();
         xmlHttpReq.onreadystatechange = function() {
             if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
                 callback(xmlHttpReq.responseText);
         }
         xmlHttp.open("GET", theUrl, true); // true for asynchronous
         xmlHttp.send(null);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

171. ### How do you convert date to another timezone in javascript

     You can use the toLocaleString() method to convert dates in one timezone to another. For example, let's convert current date to British English timezone as below,

     ```javascript
     console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' })); //29/06/2019, 09:56:00
     ```

     **[⬆ Back to Top](#table-of-contents)**

172. ### What are the properties used to get size of window

     You can use innerWidth, innerHeight, clientWidth, clientHeight properties of windows, document element and document body objects to find the size of a window. Let's use them combination of these properties to calculate the size of a window or document,

     ```javascript
     var width = window.innerWidth
     || document.documentElement.clientWidth
     || document.body.clientWidth;

     var height = window.innerHeight
     || document.documentElement.clientHeight
     || document.body.clientHeight;
     ```

     **[⬆ Back to Top](#table-of-contents)**

173. ### What is a conditional operator in javascript

     The conditional (ternary) operator is the only JavaScript operator that takes three operands which acts as a shortcut for if statements.

     ```javascript
     var isAuthenticated = false;
     console.log(isAuthenticated ? 'Hello, welcome' : 'Sorry, you are not authenticated'); //Sorry, you are not authenticated
     ```

     **[⬆ Back to Top](#table-of-contents)**

174. ### Can you apply chaining on conditional operator

     Yes, you can apply chaining on conditional operators similar to if … else if … else if … else chain. The syntax is going to be as below,

     ```javascript
     function traceValue(someParam) {
         return condition1 ? value1
              : condition2 ? value2
              : condition3 ? value3
              : value4;
     }

     // The above conditional operator is equivalent to:

     function traceValue(someParam) {
         if (condition1) { return value1; }
         else if (condition2) { return value2; }
         else if (condition3) { return value3; }
         else { return value4; }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

175. ### What are the ways to execute javascript after page load

     You can execute javascript after page load in many different ways,
     1. **window.onload:**

     ```javascript
     window.onload = function ...
     ```

     1. **document.onload:**

     ```javascript
     document.onload = function ...
     ```

     1. **body onload:**

     ```javascript
     <body onload="script();">
     ```

     **[⬆ Back to Top](#table-of-contents)**

176. ### What is the difference between proto and prototype

     The `__proto__` object is the actual object that is used in the lookup chain to resolve methods, etc. Whereas `prototype` is the object that is used to build `__proto__` when you create an object with new

     ```javascript
     ( new Employee ).__proto__ === Employee.prototype;
     ( new Employee ).prototype === undefined;
     ```

     **[⬆ Back to Top](#table-of-contents)**

177. ### Give an example where do you really need semicolon

     It is recommended to use semicolons after every statement in JavaScript. For example, in the below case it throws an error ".. is not a function" at runtime due to missing semicolon.

     ```javascript
     // define a function
     var fn = function () {
         //...
     } // semicolon missing at this line

     // then execute some code inside a closure
     (function () {
         //...
     })();
     ```

     and it will be interpreted as

     ```javascript
     var fn = function () {
         //...
     }(function () {
         //...
     })();
     ```

     In this case, we are passing the second function as an argument to the first function and then trying to call the result of the first function call as a function. Hence, the second function will fail with a "... is not a function" error at runtime.

     **[⬆ Back to Top](#table-of-contents)**

178. ### What is a freeze method

     The **freeze()** method is used to freeze an object. Freezing an object does not allow adding new properties to an object,prevents from removing and prevents changing the enumerability, configurability, or writability of existing properties. i.e, It returns the passed object and does not create a frozen copy.

     ```javascript
     const obj = {
       prop: 100
     };

     Object.freeze(obj);
     obj.prop = 200; // Throws an error in strict mode

     console.log(obj.prop); //100
     ```

     **Note:** It causes a TypeError if the argument passed is not an object.

     **[⬆ Back to Top](#table-of-contents)**

179. ### What is the purpose of freeze method

     Below are the main benefits of using freeze method,

     1. It is used for freezing objects and arrays.
     2. It is used to make an object immutable.

     **[⬆ Back to Top](#table-of-contents)**

180. ### Why do I need to use freeze method

     In the Object-oriented paradigm, an existing API contains certain elements that are not intended to be extended, modified, or re-used outside of their current context. Hence it works as the `final` keyword which is used in various languages.

     **[⬆ Back to Top](#table-of-contents)**

181. ### How do you detect a browser language preference

     You can use navigator object to detect a browser language preference as below,

     ```javascript
     var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
                    navigator.language ||   // All browsers
                    navigator.userLanguage; // IE <= 10

     console.log(language);
     ```

     **[⬆ Back to Top](#table-of-contents)**

182. ### How to convert string to title case with javascript

     Title case means that the first letter of each word is capitalized. You can convert a string to title case using the below function,

     ```javascript
         function toTitleCase(str) {
             return str.replace(
                 /\w\S*/g,
                 function(txt) {
                     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                 }
             );
         }
         toTitleCase("good morning john"); // Good Morning John
     ```

     **[⬆ Back to Top](#table-of-contents)**

183. ### How do you detect javascript disabled in the page

     You can use the `<noscript>` tag to detect javascript disabled or not. The code block inside `<noscript>` gets executed when JavaScript is disabled, and is typically used to display alternative content when the page generated in JavaScript.

     ```javascript
     <script type="javascript">
         // JS related code goes here
     </script>
     <noscript>
         <a href="next_page.html?noJS=true">JavaScript is disabled in the page. Please click Next Page</a>
     </noscript>
     ```

     **[⬆ Back to Top](#table-of-contents)**

184. ### What are various operators supported by javascript

     An operator is capable of manipulating(mathematical and logical computations) a certain value or operand. There are various operators supported by JavaScript as below,
     1. **Arithmetic Operators:** Includes + (Addition),– (Subtraction), * (Multiplication), / (Division), % (Modulus), + + (Increment)  and – – (Decrement)
     2. **Comparison Operators:** Includes = =(Equal),!= (Not Equal), ===(Equal with type), > (Greater than),> = (Greater than or Equal to),< (Less than),<= (Less than or Equal to)
     3. **Logical Operators:** Includes &&(Logical AND),||(Logical OR),!(Logical NOT)
     4. **Assignment Operators:** Includes = (Assignment Operator), += (Add and Assignment Operator), – = (Subtract and Assignment Operator), *= (Multiply and Assignment), /= (Divide and Assignment), %= (Modules and Assignment)
     5. **Ternary Operators:** It includes conditional(: ?) Operator
     6. **typeof Operator:** It uses to find type of variable. The syntax looks like `typeof variable`

     **[⬆ Back to Top](#table-of-contents)**

185. ### What is a rest parameter

     Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array. The syntax would be as below,

     ```javascript
     function f(a, b, ...theArgs) {
       // ...
     }
     ```

     For example, let's take a sum example to calculate on dynamic number of parameters,

     ```javascript
     function total(…args){
     let sum = 0;
     for(let i of args){
     sum+=i;
     }
     return sum;
     }
     console.log(fun(1,2)); //3
     console.log(fun(1,2,3)); //6
     console.log(fun(1,2,3,4)); //13
     console.log(fun(1,2,3,4,5)); //15
     ```

     **Note:** Rest parameter is added in ES2015 or ES6

     **[⬆ Back to Top](#table-of-contents)**

186. ### What happens if you do not use rest parameter as a last argument

     The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it doesn’t make any sense and will throw an error.

     ```javascript
     function someFunc(a,…b,c){
     //You code goes here
     return;
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

187. ### What are the bitwise operators available in javascript

     Below are the list of bitwise logical operators used in JavaScript
     1. Bitwise AND ( & )
     2. Bitwise OR ( | )
     3. Bitwise XOR ( ^ )
     4. Bitwise NOT ( ~ )
     5. Left Shift ( << )
     6. Sign Propagating Right Shift ( >> )
     7. Zero fill Right Shift ( >>> )

     **[⬆ Back to Top](#table-of-contents)**

188. ### What is a spread operator

     Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,

     ```javascript
     function calculateSum(x, y, z) {
       return x + y + z;
     }

     const numbers = [1, 2, 3];

     console.log(calculateSum(...numbers)); // 6
     ```

     **[⬆ Back to Top](#table-of-contents)**

189. ### How do you determine whether object is frozen or not

     Object.isFrozen() method is used to determine if an object is frozen or not.An object is frozen if all of the below conditions hold true,
     1. If it is not extensible.
     2. If all of its properties are non-configurable.
     3. If all its data properties are non-writable.
     The usage is going to be as follows,

     ```javascript
     const object = {
        property: 'Welcome JS world'
     };
     Object.freeze(object);
     console.log(Object.isFrozen(object));
     ```

     **[⬆ Back to Top](#table-of-contents)**

190. ### How do you determine two values same or not using object

     The Object.is() method determines whether two values are the same value. For example, the usage with different types of values would be,

     ```javascript
     Object.is('hello', 'hello');     // true
     Object.is(window, window);   // true
     Object.is([], []) // false
     ```

     Two values are the same if one of the following holds:
     1. both undefined
     2. both null
     3. both true or both false
     4. both strings of the same length with the same characters in the same order
     5. both the same object (means both object have same reference)
     6. both numbers and
        both +0
        both -0
        both NaN
        both non-zero and both not NaN and both have the same value.

     **[⬆ Back to Top](#table-of-contents)**

191. ### What is the purpose of using object is method

     Some of the applications of Object's `is` method are follows,
     1. It is used for comparison of two strings.
     2. It is used for comparison of two numbers.
     3. It is used for comparing the polarity of two numbers.
     4. It is used for comparison of two objects.

     **[⬆ Back to Top](#table-of-contents)**

192. ### How do you copy properties from one object to other

     You can use the Object.assign() method which is used to copy the values and properties from one or more source objects to a target object.  It returns the target object which has properties and values copied from the target object. The syntax would be as below,

     ```javascript
     Object.assign(target, ...sources)
     ```

     Let's take example with one source and one target object,

     ```javascript
     const target = { a: 1, b: 2 };
     const source = { b: 3, c: 4 };

     const returnedTarget = Object.assign(target, source);

     console.log(target); // { a: 1, b: 3, c: 4 }

     console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
     ```

     As observed in the above code, there is a common property(`b`) from source to target so it's value has been overwritten.

     **[⬆ Back to Top](#table-of-contents)**

193. ### What are the applications of assign method

     Below are the some of main applications of Object.assign() method,

     1. It is used for cloning an object.
     2. It is used to merge objects with the same properties.

     **[⬆ Back to Top](#table-of-contents)**

194. ### What is a proxy object

     The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc. The syntax would be as follows,

     ```javascript
     var p = new Proxy(target, handler);
     ```

     Let's take an example of proxy object,

     ```javascript
     var handler = {
         get: function(obj, prop) {
             return prop in obj ?
                 obj[prop] :
                 100;
         }
     };

     var p = new Proxy({}, handler);
     p.a = 10;
     p.b = null;

     console.log(p.a, p.b); // 10, null
     console.log('c' in p, p.c); // false, 100
     ```

     In the above code, it uses `get` handler which define the behavior of the proxy when an operation is performed on it

     **[⬆ Back to Top](#table-of-contents)**

195. ### What is the purpose of seal method

     The **Object.seal()** method is used to seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. Let's see the below example to understand more about seal() method

     ```javascript
      const object = {
         property: 'Welcome JS world'
      };
      Object.seal(object);
      object.property = 'Welcome to object world';
      console.log(Object.isSealed(object)); // true
      delete object.property; // You cannot delete when sealed
      console.log(object.property); //Welcome to object world
     ```

     **[⬆ Back to Top](#table-of-contents)**

196. ### What are the applications of seal method

     Below are the main applications of Object.seal() method,
     1. It is used for sealing objects and arrays.
     2. It is used to make an object immutable.

     **[⬆ Back to Top](#table-of-contents)**

197. ### What are the differences between freeze and seal methods

     If an object is frozen using the Object.freeze() method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the Object.seal() method then the changes can be made in the existing properties of the object.

     **[⬆ Back to Top](#table-of-contents)**

198. ### How do you determine if an object is sealed or not

     The Object.isSealed() method is used to determine if an object is sealed or not. An object is sealed if all of the below conditions hold true
     1. If it is not extensible.
     2. If all of its properties are non-configurable.
     3. If it is not removable (but not necessarily non-writable).
     Let's see it in the action

     ```javascript
     const object = {
     property: 'Hello, Good morning'
     };

     Object.seal(object); // Using seal() method to seal the object

     console.log(Object.isSealed(object));      // checking whether the object is sealed or not
     ```

     **[⬆ Back to Top](#table-of-contents)**

199. ### How do you get enumerable key and value pairs

     The Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. Let's see the functionality of object.entries() method in an example,

     ```javascript
     const object = {
       a: 'Good morning',
       b: 100
     };

     for (let [key, value] of Object.entries(object)) {
       console.log(`${key}: ${value}`); // a: 'Good morning'
                                        // b: 100
     }
     ```

     **Note:** The order is not guaranteed as object defined.

     **[⬆ Back to Top](#table-of-contents)**

200. ### What is the main difference between Object.values and Object.entries method

     The Object.values() method's behavior is similar to Object.entries() method but it returns an array of values instead [key,value] pairs.

     ```javascript
      const object = {
        a: 'Good morning',
        b: 100
      };

      for (let value of Object.values(object)) {
        console.log(`${value}`); // 'Good morning'
                                     100
      }
     ```

     **[⬆ Back to Top](#table-of-contents)**

201. ### How can you get the list of keys of any object

     You can use the `Object.keys()` method which is used to return an array of a given object's own property names, in the same order as we get with a normal loop. For example, you can get the keys of a user object,

     ```javascript
     const user = {
       name: 'John',
       gender: 'male',
       age: 40
     };

     console.log(Object.keys(user)); //['name', 'gender', 'age']
     ```

     **[⬆ Back to Top](#table-of-contents)**

202. ### How do you create an object with prototype

     The Object.create() method is used to create a new object with the specified prototype object and properties. i.e, It uses an existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties.

     ```javascript
      const user = {
        name: 'John',
        printInfo: function () {
          console.log(`My name is ${this.name}.`);
        }
      };

      const admin = Object.create(user);

      admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object

      admin.printInfo(); // My name is Nick
     ```

     **[⬆ Back to Top](#table-of-contents)**

203. ### What is a WeakSet

     WeakSet is used to store a collection of weakly(weak references) held objects. The syntax would be as follows,

     ```javascript
     new WeakSet([iterable]);
     ```

     Let's see the below example to explain it's behavior,

     ```javascript
     var ws = new WeakSet();
     var user = {};
     ws.add(user);
     ws.has(user);    // true
     ws.delete(user); // removes user from the set
     ws.has(user);    // false, user has been removed
     ```

     **[⬆ Back to Top](#table-of-contents)**

204. ### What are the differences between WeakSet and Set

     The main difference is that references to objects in Set are strong while references to objects in WeakSet are weak. i.e, An object in WeakSet can be garbage collected if there is no other reference to it.
     Other differences are,
     1. Sets can store any value Whereas WeakSets can store only collections of objects
     2. WeakSet does not have size property unlike Set
     3. WeakSet does not have methods such as clear, keys, values, entries, forEach.
     4. WeakSet is not iterable.

     **[⬆ Back to Top](#table-of-contents)**

205. ### List down the collection of methods available on WeakSet

     Below are the list of methods available on WeakSet,
     
     1. add(value): A new object is appended with the given value to the weakset
     2. delete(value): Deletes the value from the WeakSet collection.
     3. has(value): It returns true if the value is present in the WeakSet Collection, otherwise it returns false.
     
     Let's see the functionality of all the above methods in an example,

     ```javascript
     var weakSetObject = new WeakSet();
     var firstObject = {};
     var secondObject = {};
     // add(value)
     weakSetObject.add(firstObject);
     weakSetObject.add(secondObject);
     console.log(weakSetObject.has(firstObject)); //true
     weakSetObject.delete(secondObject);
     ```

     **[⬆ Back to Top](#table-of-contents)**

206. ### What is a WeakMap

     The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. In this case, keys must be objects and the values can be arbitrary values. The syntax is looking like as below,

     ```javascript
     new WeakMap([iterable])
     ```

     Let's see the below example to explain it's behavior,

     ```javascript
      var ws = new WeakMap();
      var user = {};
      ws.set(user);
      ws.has(user);    // true
      ws.delete(user); // removes user from the map
      ws.has(user);    // false, user has been removed
     ```

     **[⬆ Back to Top](#table-of-contents)**

207. ### What are the differences between WeakMap and Map

     The main difference is that references to key objects in Map are strong while references to key objects in WeakMap are weak. i.e, A key object in WeakMap can be garbage collected if there is no other reference to it.
     Other differences are,
     1. Maps can store any key type Whereas WeakMaps can store only collections of key objects
     2. WeakMap does not have size property unlike Map
     3. WeakMap does not have methods such as clear, keys, values, entries, forEach.
     4. WeakMap is not iterable.

     **[⬆ Back to Top](#table-of-contents)**

208. ### List down the collection of methods available on WeakMap

     Below are the list of methods available on WeakMap,
     1. set(key, value): Sets the value for the key in the WeakMap object. Returns the WeakMap object.
     2. delete(key): Removes any value associated to the key.
     3. has(key): Returns a Boolean asserting whether a value has been associated to the key in the WeakMap object or not.
     4. get(key): Returns the value associated to the key, or undefined if there is none.
     Let's see the functionality of all the above methods in an example,

     ```javascript
     var weakMapObject = new WeakMap();
     var firstObject = {};
     var secondObject = {};
     // set(key, value)
     weakMapObject.set(firstObject, 'John');
     weakMapObject.set(secondObject, 100);
     console.log(weakMapObject.has(firstObject)); //true
     console.log(weakMapObject.get(firstObject)); // John
     weakMapObject.delete(secondObject);
     ```

     **[⬆ Back to Top](#table-of-contents)**

209. ### What is the purpose of uneval

     The uneval() is an inbuilt function which is used to create a string representation of the source code of an Object. It is a top-level function and is not associated with any object. Let's see the below example to know more about it's functionality,

     ```javascript
     var a = 1;
     uneval(a); // returns a String containing 1
     uneval(function user() {}); // returns "(function user(){})"
     ```

     **[⬆ Back to Top](#table-of-contents)**

210. ### How do you encode an URL

     The encodeURI() function is used to encode complete URI which has special characters except (, / ? : @ & = + $ #) characters.

     ```javascript
     var uri = 'https://mozilla.org/?x=шеллы';
     var encoded = encodeURI(uri);
     console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
     ```

     **[⬆ Back to Top](#table-of-contents)**

211. ### How do you decode an URL

     The decodeURI() function is used to decode a Uniform Resource Identifier (URI) previously created by encodeURI().

     ```javascript
      var uri = 'https://mozilla.org/?x=шеллы';
      var encoded = encodeURI(uri);
      console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
     try {
       console.log(decodeURI(encoded)); // "https://mozilla.org/?x=шеллы"
     } catch(e) { // catches a malformed URI
       console.error(e);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

212. ### How do you print the contents of web page

     The window object provided a print() method which is used to print the contents of the current window. It opens a Print dialog box which lets you choose between various printing options. Let's see the usage of print method in an example,

     ```html
        <input type="button" value="Print" onclick="window.print()" />
     ```

     **Note:** In most browsers, it will block while the print dialog is open.

     **[⬆ Back to Top](#table-of-contents)**

213. ### What is the difference between uneval and eval

     The `uneval` function returns the source of a given object; whereas the `eval` function does the opposite, by evaluating that source code in a different memory area. Let's see an example to clarify the difference,

     ```javascript
     var msg = uneval(function greeting() { return 'Hello, Good morning'; });
     var greeting = eval(msg);
     greeting(); // returns "Hello, Good morning"
     ```

     **[⬆ Back to Top](#table-of-contents)**

214. ### What is an anonymous function

     An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,

     ```javascript
     function (optionalParameters) {
       //do something
     }

     const myFunction = function(){ //Anonymous function assigned to a variable
       //do something
     };

     [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
       //do something
     });
     ```

     Let's see the above anonymous function in an example,

     ```javascript
     var x = function (a, b) {return a * b};
     var z = x(5, 10);
     console.log(z); // 50
     ```

     **[⬆ Back to Top](#table-of-contents)**

215. ### What is the precedence order between local and global variables

     A local variable takes precedence over a global variable with the same name. Let's see this behavior in an example.

     ```javascript
     var msg = "Good morning";
     function greeting() {
        msg = "Good Evening";
        console.log(msg);
     }
     greeting();
     ```

     **[⬆ Back to Top](#table-of-contents)**

216. ### What are javascript accessors

     ECMAScript 5 introduced javascript object accessors or computed properties through getters and setters. Getters uses the `get` keyword whereas Setters uses the `set` keyword.

     ```javascript
     var user = {
       firstName: "John",
       lastName : "Abraham",
       language : "en",
       get lang() {
         return this.language;
       }
       set lang(lang) {
       this.language = lang;
       }
     };
     console.log(user.lang); // getter access lang as en
     user.lang = 'fr';
     console.log(user.lang); // setter used to set lang as fr
     ```

     **[⬆ Back to Top](#table-of-contents)**

217. ### How do you define property on Object constructor

     The Object.defineProperty() static method is used to define a new property directly on an object, or modify an existing property on an object, and returns the object. Let's see an example to know how to define property,

     ```javascript
     const newObject = {};

     Object.defineProperty(newObject, 'newProperty', {
       value: 100,
       writable: false
     });

     console.log(newObject.newProperty); // 100

     newObject.newProperty = 200; // It throws an error in strict mode due to writable setting

     ```

     **[⬆ Back to Top](#table-of-contents)**

218. ### What is the difference between get and defineProperty

     Both have similar results until unless you use classes. If you use `get` the property will be defined on the prototype of the object whereas using `Object.defineProperty()` the property will be defined on the instance it is applied to.

     **[⬆ Back to Top](#table-of-contents)**

219. ### What are the advantages of Getters and Setters

     Below are the list of benefits of Getters and Setters,
     1. They provide simpler syntax
     2. They are used for defining computed properties, or accessors in JS.
     3. Useful to provide equivalence relation between properties and methods
     4. They can provide better data quality
     5. Useful for doing things behind the scenes with the encapsulated logic.

     **[⬆ Back to Top](#table-of-contents)**

220. ### Can I add getters and setters using defineProperty method

     Yes, You can use the `Object.defineProperty()` method to add Getters and Setters. For example, the below counter object uses increment, decrement, add and subtract properties,

     ```javascript
     var obj = {counter : 0};

     // Define getters
     Object.defineProperty(obj, "increment", {
       get : function () {this.counter++;}
     });
     Object.defineProperty(obj, "decrement", {
       get : function () {this.counter--;}
     });

     // Define setters
     Object.defineProperty(obj, "add", {
       set : function (value) {this.counter += value;}
     });
     Object.defineProperty(obj, "subtract", {
       set : function (value) {this.counter -= value;}
     });

     obj.add = 10;
     obj.subtract = 5;
     console.log(obj.increment); //6
     console.log(obj.decrement); //5
     ```

     **[⬆ Back to Top](#table-of-contents)**

221. ### What is the purpose of switch-case

     The switch case statement in JavaScript is used for decision making purposes. In a few cases, using the switch case statement is going to be more convenient than if-else statements. The syntax would be as below,

     ```javascript
     switch (expression)
     {
         case value1:
             statement1;
             break;
         case value2:
             statement2;
             break;
         .
         .
         case valueN:
             statementN;
             break;
         default:
             statementDefault;
     }
     ```

     The above multi-way branch statement provides an easy way to dispatch execution to different parts of code based on the value of the expression.

     **[⬆ Back to Top](#table-of-contents)**

222. ### What are the conventions to be followed for the usage of switch case

     Below are the list of conventions should be taken care,
     1. The expression can be of type either number or string.
     2. Duplicate values are not allowed for the expression.
     3. The default statement is optional. If the expression passed to switch does not match with any case value then the statement within default case will be executed.
     4. The break statement is used inside the switch to terminate a statement sequence.
     5. The break statement is optional. But if it is omitted, the execution will continue on into the next case.

     **[⬆ Back to Top](#table-of-contents)**

223. ### What are primitive data types

     A primitive data type is data that has a primitive value (which has no properties or methods). There are 7 types of primitive data types.
     
     1. string
     2. number
     3. boolean
     4. null
     5. undefined
     6. bigint
     7. symbol

     **[⬆ Back to Top](#table-of-contents)**

224. ### What are the different ways to access object properties

     There are 3 possible ways for accessing the property of an object.
     1. **Dot notation:** It uses dot for accessing the properties

     ```javascript
     objectName.property
     ```

     1. **Square brackets notation:** It uses square brackets for property access

     ```javascript
     objectName["property"]
     ```

     1. **Expression notation:** It uses expression in the square brackets

     ```javascript
     objectName[expression]
     ```

     **[⬆ Back to Top](#table-of-contents)**

225. ### What are the function parameter rules

     JavaScript functions follow below rules for parameters,
     1. The function definitions do not specify data types for parameters.
     2. Do not perform type checking on the passed arguments.
     3. Do not check the number of arguments received.
     i.e, The below function follows the above rules,

     ```javascript
     function functionName(parameter1, parameter2, parameter3) {
       console.log(parameter1); // 1
     }
     functionName(1);
     ```

     **[⬆ Back to Top](#table-of-contents)**

226. ### What is an error object

     An error object is a built in error object that provides error information when an error occurs. It has two properties: name and message. For example, the below function logs error details,

     ```javascript
     try {
       greeting("Welcome");
     }
     catch(err) {
       console.log(err.name + "<br>" + err.message);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

227. ### When you get a syntax error

     A SyntaxError is thrown if you try to evaluate code with a syntax error. For example, the below missing quote for the function parameter throws a syntax error

     ```javascript
     try {
       eval("greeting('welcome)");   // Missing ' will produce an error
     }
     catch(err) {
       console.log(err.name);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

228. ### What are the different error names from error object

     There are 6 different types of error names returned from error object,
     | Error Name | Description |
     |---- | ---------
     | EvalError  | An error has occurred in the eval() function |
     | RangeError | An error has occurred with a number "out of range"  |
     | ReferenceError | An error due to an illegal reference|
     | SyntaxError | An error due to a syntax error|
     | TypeError | An error due to a type error |
     | URIError | An error due to encodeURI() |

     **[⬆ Back to Top](#table-of-contents)**

229. ### What are the various statements in error handling

     Below are the list of statements used in an error handling,
     1. **try:** This statement is used to test a block of code for errors
     2. **catch:** This statement is used to handle the error
     3. **throw:** This statement is used to create custom errors.
     4. **finally:** This statement is used to execute code after try and catch regardless of the result.

     **[⬆ Back to Top](#table-of-contents)**

230. ### What are the two types of loops in javascript

     1. **Entry Controlled loops:** In this kind of loop type, the test condition is tested before entering the loop body. For example, For Loop and While Loop comes under this category.
     2. **Exit Controlled Loops:** In this kind of loop type, the test condition is tested or evaluated at the end of the loop body. i.e, the loop body will execute at least once irrespective of test condition true or false. For example, do-while loop comes under this category.

     **[⬆ Back to Top](#table-of-contents)**

231. ### What is nodejs

     Node.js is a server-side platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. It is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.

     **[⬆ Back to Top](#table-of-contents)**

232. ### What is an Intl object

     The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. It provides access to several constructors and language sensitive functions.

     **[⬆ Back to Top](#table-of-contents)**

233. ### How do you perform language specific date and time formatting

     You can use the `Intl.DateTimeFormat` object which is a constructor for objects that enable language-sensitive date and time formatting. Let's see this behavior with an example,

     ```javascript
     var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));
     console.log(new Intl.DateTimeFormat('en-GB').format(date)); // 07/08/2019
     console.log(new Intl.DateTimeFormat('en-AU').format(date)); // 07/08/2019
     ```

     **[⬆ Back to Top](#table-of-contents)**

234. ### What is an Iterator

     An iterator is an object which defines a sequence and a return value upon its termination. It implements the Iterator protocol with a `next()` method which returns an object with two properties: `value` (the next value in the sequence) and `done` (which is true if the last value in the sequence has been consumed).

     **[⬆ Back to Top](#table-of-contents)**

235. ### How does synchronous iteration works

     Synchronous iteration was introduced in ES6 and it works with below set of components,

     **Iterable:** It is an object which can be iterated over via a method whose key is Symbol.iterator.
     **Iterator:** It is an object returned by invoking `[Symbol.iterator]()` on an iterable. This iterator object wraps each iterated element in an object and returns it via `next()` method one by one.
     **IteratorResult:** It is an object returned by `next()` method. The object contains two properties; the `value` property contains an iterated element and the `done` property  determines whether the element is the last element or not.

     Let's demonstrate synchronous iteration with an array as below,

     ```javascript
     const iterable = ['one', 'two', 'three'];
     const iterator = iterable[Symbol.iterator]();
     console.log(iterator.next());  // { value: 'one', done: false }
     console.log(iterator.next());  // { value: 'two', done: false }
     console.log(iterator.next());  // { value: 'three', done: false }
     console.log(iterator.next());  // { value: 'undefined, done: true }
     ```

     **[⬆ Back to Top](#table-of-contents)**

236. ### What is an event loop

     The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the async function has finished executing the code.
     **Note:** It allows Node.js to perform non-blocking I/O operations even though JavaScript is single-threaded.

     **[⬆ Back to Top](#table-of-contents)**

237. ### What is call stack

     Call Stack is a data structure for javascript interpreters to keep track of function calls in the program. It has two major actions,
     1. Whenever you call a function for its execution, you are pushing it to the stack.
     2. Whenever the execution is completed, the function is popped out of the stack.

     Let's take an example and it's state representation in a diagram format

     ```javascript
     function hungry() {
        eatFruits();
     }
     function eatFruits() {
        return "I'm eating fruits";
     }

     // Invoke the `hungry` function
     hungry();
     ```

     The above code  processed in a call stack as  below,
     1. Add the `hungry()` function to the call stack list and execute the code.
     2. Add the `eatFruits()` function to the call stack list and execute the code.
     3. Delete the `eatFruits()` function from our call stack list.
     4. Delete the `hungry()` function from the call stack list since there are no items anymore.

     ![Screenshot](images/call-stack.png)

     **[⬆ Back to Top](#table-of-contents)**

238. ### What is an event queue

     **[⬆ Back to Top](#table-of-contents)**

239. ### What is a decorator

     A decorator is an expression that evaluates to a function and that takes the target, name, and decorator descriptor as arguments. Also, it optionally returns a decorator descriptor to install on the target object. Let's define admin decorator for user class at design time,

     ```javascript
     function admin(isAdmin) {
        return function(target) {
            target.isAdmin = isAdmin;
        }
     }

     @admin(true)
     class User() {
     }
     console.log(User.isAdmin); //true

      @admin(false)
      class User() {
      }
      console.log(User.isAdmin); //false
     ```

     **[⬆ Back to Top](#table-of-contents)**

240. ### What are the properties of Intl object

     Below are the list of properties available on Intl object,
     1. **Collator:** These are the objects that enable language-sensitive string comparison.
     2. **DateTimeFormat:** These are the objects that enable language-sensitive date and time formatting.
     3. **ListFormat:** These are the objects that enable language-sensitive list formatting.
     4. **NumberFormat:** Objects that enable language-sensitive number formatting.
     5. **PluralRules:** Objects that enable plural-sensitive formatting and language-specific rules for plurals.
     6. **RelativeTimeFormat:** Objects that enable language-sensitive relative time formatting.

     **[⬆ Back to Top](#table-of-contents)**

241. ### What is an Unary operator

     The unary(+) operator is used to convert a variable to a number.If the variable cannot be converted, it will still become a number but with the value NaN. Let's see this behavior in an action.

     ```javascript
     var x = "100";
     var y = + x;
     console.log(typeof x, typeof y); // string, number

     var a = "Hello";
     var b = + a;
     console.log(typeof a, typeof b, b); // string, number, NaN
     ```

     **[⬆ Back to Top](#table-of-contents)**

242. ### How do you sort elements in an array

     The sort() method is used to sort the elements of an array in place and returns the sorted array. The example usage would be as below,

     ```javascript
     var months = ["Aug", "Sep", "Jan", "June"];
     months.sort();
     console.log(months); //  ["Aug", "Jan", "June", "Sep"]
     ```

     **[⬆ Back to Top](#table-of-contents)**

243. ### What is the purpose of compareFunction while sorting arrays

     The compareFunction is used to define the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value. Let's take an example to see the usage of compareFunction,

     ```javascript
     let numbers = [1, 2, 5, 3, 4];
     numbers.sort((a, b) => b - a);
     console.log(numbers); // [5, 4, 3, 2, 1]
     ```

     **[⬆ Back to Top](#table-of-contents)**

244. ### How do you reversing an array

     You can use the reverse() method to reverse the elements in an array. This method is useful to sort an array in descending order. Let's see the usage of reverse() method in an example,

     ```javascript
     let numbers = [1, 2, 5, 3, 4];
     numbers.sort((a, b) => b - a);
     numbers.reverse();
     console.log(numbers); // [1, 2, 3, 4 ,5]
     ```

     **[⬆ Back to Top](#table-of-contents)**

245. ### How do you find min and max value in an array

     You can use `Math.min` and `Math.max` methods on array variables to find the minimum and maximum elements within an array. Let's create two functions to find the min and max value with in an array,

     ```javascript
     var marks = [50, 20, 70, 60, 45, 30];
     function findMin(arr) {
       return Math.min.apply(null, arr);
     }
     function findMax(arr) {
       return Math.max.apply(null, arr);
     }

     console.log(findMin(marks));
     console.log(findMax(marks));
     ```

     **[⬆ Back to Top](#table-of-contents)**

246. ### How do you find min and max values without Math functions

     You can write functions which loop through an array comparing each value with the lowest value or highest value to find the min and max values. Let's create those functions to find min and max values,

     ```javascript
      var marks = [50, 20, 70, 60, 45, 30];
      function findMin(arr) {
        var length = arr.length
        var min = Infinity;
        while (length--) {
          if (arr[length] < min) {
            min = arr[len];
          }
        }
        return min;
      }

      function findMax(arr) {
        var length = arr.length
        var max = -Infinity;
        while (len--) {
          if (arr[length] > max) {
            max = arr[length];
          }
        }
        return max;
      }

      console.log(findMin(marks));
      console.log(findMax(marks));
     ```

     **[⬆ Back to Top](#table-of-contents)**

247. ### What is an empty statement and purpose of it

     The empty statement is a semicolon (;) indicating that no statement will be executed, even if JavaScript syntax requires one. Since there is no action with an empty statement you might think that it's usage is quite less, but the empty statement is occasionally useful when you want to create a loop that has an empty body. For example, you can initialize an array with zero values as below,

     ```javascript
     // Initialize an array a
     for(int i=0; i < a.length; a[i++] = 0) ;
     ```

     **[⬆ Back to Top](#table-of-contents)**

248. ### How do you get metadata of a module

     You can use the `import.meta` object which is a meta-property exposing context-specific meta data to a JavaScript module. It contains information about the current module, such as the module's URL. In browsers, you might get different meta data than NodeJS.

     ```javascript
     <script type="module" src="welcome-module.js"></script>
     console.log(import.meta); // { url: "file:///home/user/welcome-module.js" }
     ```

     **[⬆ Back to Top](#table-of-contents)**

249. ### What is a comma operator

     The comma operator is used to evaluate each of its operands from left to right and returns the value of the last operand. This is totally different from comma usage within arrays, objects, and function arguments and parameters. For example, the usage for numeric expressions would be as below,

     ```javascript
     var x = 1;
     x = (x++, x);

     console.log(x); // 2
     ```

     **[⬆ Back to Top](#table-of-contents)**

250. ### What is the advantage of a comma operator

     It is normally used to include multiple expressions in a location that requires a single expression. One of the common usages of this comma operator is to supply multiple parameters in a `for` loop. For example, the below for loop uses multiple expressions in a single location using comma operator,

     ```javascript
     for (var a = 0, b =10; a <= 10; a++, b--)
     ```

     You can also use the comma operator in a return statement where it processes before returning.

     ```javascript
     function myFunction() {
        var a = 1;
        return (a += 10, a); // 11
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

251. ### What is typescript

      TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. Angular built entirely in TypeScript and used as a primary language. You can install it globally as

      ```bash
      npm install -g typescript
      ```

      Let's see a simple example of TypeScript usage,

      ```typescript
      function greeting(name: string): string {
         return "Hello, " + name;
      }

      let user = "Sudheer";

      console.log(greeting(user));
      ```

      The greeting method allows only string type as argument.

      **[⬆ Back to Top](#table-of-contents)**

252. ### What are the differences between javascript and typescript

     Below are the list of differences between javascript and typescript,

     | feature | typescript | javascript |
     |---- | --------- | ----
     | Language paradigm  | Object oriented programming language  | Scripting language |
     | Typing support | Supports static typing  | It has dynamic typing |
     | Modules | Supported | Not supported |
     | Interface | It has interfaces concept | Doesn't support interfaces |
     | Optional parameters | Functions support optional parameters | No support of optional parameters for functions |

     **[⬆ Back to Top](#table-of-contents)**

253. ### What are the advantages of typescript over javascript

     Below are some of the advantages of typescript over javascript,
     1. TypeScript is able to find compile time errors at the development time only and it makes sures less runtime errors. Whereas javascript is an interpreted language.
     2. TypeScript is strongly-typed or supports static typing which allows for checking type correctness at compile time. This is not available in javascript.
     3. TypeScript compiler can compile the .ts files into ES3,ES4 and ES5 unlike ES6 features of javascript which may not be supported in some browsers.

     **[⬆ Back to Top](#table-of-contents)**

254. ### What is an object initializer

     An object initializer is an expression that describes the initialization of an Object. The syntax for this expression is represented as a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). This is also known as literal notation. It is one of the ways to create an object.

     ```javascript
     var initObject = {a: 'John', b: 50, c: {}};

     console.log(initObject.a); // John
     ```

     **[⬆ Back to Top](#table-of-contents)**

255. ### What is a constructor method

     The constructor method is a special method for creating and initializing an object created within a class. If you do not specify a constructor method, a default constructor is used. The example usage of constructor would be as below,

     ```javascript
     class Employee {
       constructor() {
         this.name = "John";
       }
     }

     var employeeObject = new Employee();

     console.log(employeeObject.name); // John
     ```

     **[⬆ Back to Top](#table-of-contents)**

256. ### What happens if you write constructor more than once in a class

     The "constructor" in a class is a special method and it should be defined only once in a class. i.e, If you write a constructor method more than once in a class it will throw a `SyntaxError` error.

     ```javascript
      class Employee {
        constructor() {
          this.name = "John";
        }
        constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
          this.age = 30;
        }
      }

      var employeeObject = new Employee();

      console.log(employeeObject.name);
     ```

     **[⬆ Back to Top](#table-of-contents)**

257. ### How do you call the constructor of a parent class

     You can use the `super` keyword to call the constructor of a parent class. Remember that `super()` must be called before using 'this' reference. Otherwise it will cause a reference error. Let's the usage of it,

     ```javascript
     class Square extends Rectangle {
       constructor(length) {
         super(length, length);
         this.name = 'Square';
       }

       get area() {
         return this.width * this.height;
       }

       set area(value) {
         this.area = value;
       }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

258. ### How do you get the prototype of an object

     You can use the `Object.getPrototypeOf(obj)` method to return the prototype of the specified object. i.e. The value of the internal `prototype` property. If there are no inherited properties then `null` value is returned.

     ```javascript
     const newPrototype = {};
     const newObject = Object.create(newPrototype);

     console.log(Object.getPrototypeOf(newObject) === newPrototype); // true
     ```

     **[⬆ Back to Top](#table-of-contents)**

259. ### What happens If I pass string type for getPrototype method

     In ES5, it will throw a TypeError exception if the obj parameter isn't an object. Whereas in ES2015, the parameter will be coerced to an `Object`.

     ```javascript
     // ES5
     Object.getPrototypeOf('James'); // TypeError: "James" is not an object
     // ES2015
     Object.getPrototypeOf('James'); // String.prototype
     ```

     **[⬆ Back to Top](#table-of-contents)**

260. ### How do you set prototype of one object to another

     You can use the `Object.setPrototypeOf()` method that sets the prototype (i.e., the internal `Prototype` property) of a specified object to another object or null. For example, if you want to set prototype of a square object to rectangle object would be as follows,

     ```javascript
     Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
     Object.setPrototypeOf({}, null);
     ```

     **[⬆ Back to Top](#table-of-contents)**

261. ### How do you check whether an object can be extendable or not

     The `Object.isExtensible()` method is used to determine if an object is extendable or not. i.e, Whether it can have new properties added to it or not.

     ```javascript
     const newObject = {};
     console.log(Object.isExtensible(newObject)); //true
     ```

     **Note:** By default, all the objects are extendable. i.e, The new properties can be added or modified.

     **[⬆ Back to Top](#table-of-contents)**

262. ### How do you prevent an object to extend

     The `Object.preventExtensions()` method is used to prevent new properties from ever being added to an object. In other words, it prevents future extensions to the object. Let's see the usage of this property,

     ```javascript
     const newObject = {};
     Object.preventExtensions(newObject); // NOT extendable

     try {
       Object.defineProperty(newObject, 'newProperty', { // Adding new property
         value: 100
       });
     } catch (e) {
       console.log(e); // TypeError: Cannot define property newProperty, object is not extensible
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

263. ### What are the different ways to make an object non-extensible

     You can mark an object non-extensible in 3 ways,
     1. Object.preventExtensions
     2. Object.seal
     3. Object.freeze

     ```javascript
     var newObject = {};

     Object.preventExtensions(newObject); // Prevent objects are non-extensible
     Object.isExtensible(newObject); // false

     var sealedObject = Object.seal({}); // Sealed objects are non-extensible
     Object.isExtensible(sealedObject); // false

     var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
     Object.isExtensible(frozenObject); // false
     ```

     **[⬆ Back to Top](#table-of-contents)**

264. ### How do you define multiple properties on an object

     The `Object.defineProperties()` method is used to define new or modify existing properties directly on an object and returning the object. Let's define multiple properties on an empty object,

     ```javascript
     const newObject = {};

     Object.defineProperties(newObject, {
       newProperty1: {
         value: 'John',
         writable: true
       },
       newProperty2: {}
     });
     ```

     **[⬆ Back to Top](#table-of-contents)**

265. ### What is MEAN in javascript

     The MEAN (MongoDB, Express, AngularJS, and Node.js) stack is the most popular open-source JavaScript software tech stack available for building dynamic web apps where you can write both the server-side and client-side halves of the web project entirely in JavaScript.

     **[⬆ Back to Top](#table-of-contents)**

266. ### What Is Obfuscation in javascript

     Obfuscation is the deliberate act of creating obfuscated javascript code(i.e, source or machine code) that is difficult for humans to understand. It is something similar to encryption, but a machine can understand the code and execute it.
     Let's see the below function before Obfuscation,

     ```javascript
     function greeting() {
        console.log('Hello, welcome to JS world');
     }
     ```

     And after the code Obfuscation, it would be appeared as below,

     ```javascript
     eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2 1(){0.3(\'4, 7 6 5 8\')}',9,9,'console|greeting|function|log|Hello|JS|to|welcome|world'.split('|'),0,{}))
     ```

     **[⬆ Back to Top](#table-of-contents)**

267. ### Why do you need Obfuscation

     Below are the few reasons for Obfuscation,
     1. The Code size will be reduced. So data transfers between server and client will be fast.
     2. It hides the business logic from outside world and protects the code from others
     3. Reverse engineering is highly difficult
     4. The download time will be reduced

     **[⬆ Back to Top](#table-of-contents)**

268. ### What is Minification

     Minification is the process of removing all unnecessary characters(empty spaces are removed) and variables will be renamed without changing it's functionality. It is also a type of obfuscation .

     **[⬆ Back to Top](#table-of-contents)**

269. ### What are the advantages of minification

     Normally it is recommended to use minification for heavy traffic and intensive requirements of resources. It reduces file sizes with below benefits,
     1. Decreases loading times of a web page
     2. Saves bandwidth usages

     **[⬆ Back to Top](#table-of-contents)**

270. ### What are the differences between Obfuscation and Encryption

     Below are the main differences between Obfuscation and Encryption,

     | Feature | Obfuscation | Encryption |
     |---- | --------- | ----
     | Definition  | Changing the form of any data in any other form  | Changing the form of information to an unreadable format by using a key |
     | A key to decode | It can be decoded without any key  | It is required |
     | Target data format | It will be converted to a complex form  | Converted into an unreadable format  |

     **[⬆ Back to Top](#table-of-contents)**

271. ### What are the common tools used for minification

     There are many online/offline tools to minify the javascript files,
     1. Google's Closure Compiler
     2. UglifyJS2
     3. jsmin
     4. javascript-minifier.com/
     5. prettydiff.com

     **[⬆ Back to Top](#table-of-contents)**

272. ### How do you perform form validation using javascript

     JavaScript can be used to perform HTML form validation. For example, if the form field is empty, the function needs to notify, and return false, to prevent the form being submitted.
     Lets' perform user login in an html form,

     ```html
     <form name="myForm" onsubmit="return validateForm()" method="post">
     User name: <input type="text" name="uname">
     <input type="submit" value="Submit">
     </form>
     ```

     And the validation on user login is below,

     ```javascript
     function validateForm() {
       var x = document.forms["myForm"]["uname"].value;
       if (x == "") {
         alert("The username shouldn't be empty");
         return false;
       }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

273. ### How do you perform form validation without javascript

     You can perform HTML form validation automatically without using javascript. The validation enabled by applying the `required` attribute to prevent form submission when the input is empty.

     ```html
     <form method="post">
       <input type="text" name="uname" required>
       <input type="submit" value="Submit">
     </form>
     ```

     **Note:** Automatic form validation does not work in Internet Explorer 9 or earlier.

     **[⬆ Back to Top](#table-of-contents)**

274. ### What are the DOM methods available for constraint validation

     The below DOM methods are available for constraint validation on an invalid input,
     1. checkValidity(): It returns true if an input element contains valid data.
     2. setCustomValidity(): It is used to set the validationMessage property of an input element.
     Let's take an user login form with DOM validations

     ```javascript
     function myFunction() {
       var userName = document.getElementById("uname");
       if (!userName.checkValidity()) {
         document.getElementById("message").innerHTML = userName.validationMessage;
       } else {
         document.getElementById("message").innerHTML = "Entered a valid username";
       }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

275. ### What are the available constraint validation DOM properties

     Below are the list of some of the constraint validation DOM properties available,

     1. validity: It provides a list of boolean properties related to the validity of an input element.
     2. validationMessage: It displays the message when the validity is false.
     3. willValidate: It indicates if an input element will be validated or not.

     **[⬆ Back to Top](#table-of-contents)**

276. ### What are the list of validity properties

     The validity property of an input element provides a set of properties related to the validity of data.

     1. customError: It returns true, if a custom validity message is set.
     2. patternMismatch: It returns true, if an element's value does not match its pattern attribute.
     3. rangeOverflow: It returns true, if an element's value is greater than its max attribute.
     4. rangeUnderflow: It returns true, if an element's value is less than its min attribute.
     5. stepMismatch: It returns true, if an element's value is invalid according to step attribute.
     6. tooLong: It returns true, if an element's value exceeds its maxLength attribute.
     7. typeMismatch: It returns true, if an element's value is invalid according to type attribute.
     8. valueMissing: It returns true, if an element with a required attribute has no value.
     9. valid: It returns true, if an element's value is valid.

     **[⬆ Back to Top](#table-of-contents)**

277. ### Give an example usage of rangeOverflow property

     If an element's value is greater than its max attribute then rangeOverflow property returns true. For example, the below form submission throws an error if the value is more than 100,

     ```html
     <input id="age" type="number" max="100">
     <button onclick="myOverflowFunction()">OK</button>
     ```

     ```javascript
     function myOverflowFunction() {
       if (document.getElementById("age").validity.rangeOverflow) {
         alert("The mentioned age is not allowed");
       }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

278. ### Is enums feature available in javascript

     No, javascript does not natively support enums. But there are different kinds of solutions to simulate them even though they may not provide exact equivalents. For example, you can use freeze or seal on object,

     ```javascript
     var DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})
     ```

     **[⬆ Back to Top](#table-of-contents)**

279. ### What is an enum

     An enum is a type restricting variables to one value from a predefined set of constants. JavaScript has no enums but typescript provides built-in enum support.

     ```javascript
     enum Color {
      RED, GREEN, BLUE
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

280. ### How do you list all properties of an object

     You can use the `Object.getOwnPropertyNames()` method which returns an array of all properties found directly in a given object. Let's the usage of it in an example,

     ```javascript
     const newObject = {
       a: 1,
       b: 2,
       c: 3
     };

     console.log(Object.getOwnPropertyNames(newObject));  ["a", "b", "c"]
     ```

     **[⬆ Back to Top](#table-of-contents)**

281. ### How do you get property descriptors of an object

     You can use the `Object.getOwnPropertyDescriptors()` method which returns all own property descriptors of a given object. The example usage of this method is below,

     ```javascript
      const newObject = {
        a: 1,
        b: 2,
        c: 3
      };
     const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
     console.log(descriptorsObject.a.writable); //true
     console.log(descriptorsObject.a.configurable); //true
     console.log(descriptorsObject.a.enumerable); //true
     console.log(descriptorsObject.a.value); // 1
     ```

     **[⬆ Back to Top](#table-of-contents)**

282. ### What are the attributes provided by a property descriptor

     A property descriptor is a record which has the following attributes
     1. value: The value associated with the property
     2. writable: Determines whether the value associated with the property can be changed or not
     3. configurable: Returns true if the type of this property descriptor can be changed and if the property can be deleted from the corresponding object.
     4. enumerable: Determines whether the property appears during enumeration of the properties on the corresponding object or not.
     5. set: A function which serves as a setter for the property
     6. get: A function which serves as a getter for the property

     **[⬆ Back to Top](#table-of-contents)**

283. ### How do you extend classes

     The `extends` keyword is used in class declarations/expressions to create a class which is a child of another class. It can be used to subclass custom classes as well as built-in objects. The syntax would be as below,

     ```javascript
     class ChildClass extends ParentClass { ... }
     ```

     Let's take an example of Square subclass from Polygon parent class,

     ```javascript
      class Square extends Rectangle {
        constructor(length) {
          super(length, length);
          this.name = 'Square';
        }

        get area() {
          return this.width * this.height;
        }

        set area(value) {
          this.area = value;
        }
      }
     ```

     **[⬆ Back to Top](#table-of-contents)**

284. ### How do I modify the url without reloading the page

     The `window.location.url` property will be helpful to modify the url but it reloads the page. HTML5 introduced the `history.pushState()` and `history.replaceState()` methods, which allow you to add and modify history entries, respectively. For example, you can use pushState as below,

     ```javascript
     window.history.pushState('page2', 'Title', '/page2.html');
     ```

     **[⬆ Back to Top](#table-of-contents)**

285. ### How do you check whether an array includes a particular value or not

     The `Array#includes()` method is used to determine whether an array includes a particular value among its entries by returning either true or false. Let's see an example to find an element(numeric and string) within an array.

     ```javascript
     var numericArray = [1, 2, 3, 4];
     console.log(numericArray.includes(3)); // true

     var stringArray = ['green', 'yellow', 'blue'];
     console.log(stringArray.includes('blue')); //true
     ```

     **[⬆ Back to Top](#table-of-contents)**

286. ### How do you compare scalar arrays

     You can use length and every method of arrays to compare two scalar(compared directly using ===) arrays. The combination of these expressions can give the expected result,

     ```javascript
     const arrayFirst = [1,2,3,4,5];
     const arraySecond = [1,2,3,4,5];
     console.log(arrayFirst.length === arraySecond.length && arrayFirst.every((value, index) => value === arraySecond[index])); // true
     ````

     If you would like to compare arrays irrespective of order then you should sort them before,

     ```javascript
     const arrayFirst = [2,3,1,4,5];
     const arraySecond = [1,2,3,4,5];
     console.log(arrayFirst.length === arraySecond.length && arrayFirst.sort().every((value, index) => value === arraySecond[index])); //true
     ````

     **[⬆ Back to Top](#table-of-contents)**

287. ### How to get the value from get parameters

     The `new URL()` object accepts the url string and `searchParams` property of this object can be used to access the get parameters. Remember that you may need to use polyfill or `window.location` to access the URL in older browsers(including IE).

     ```javascript
     let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3"; //window.location.href
     let url = new URL(urlString);
     let parameterZ = url.searchParams.get("z");
     console.log(parameterZ); // 3
     ```

     **[⬆ Back to Top](#table-of-contents)**

288. ### How do you print numbers with commas as thousand separators

     You can use the `Number.prototype.toLocaleString()` method which returns a string with a language-sensitive representation such as thousand separator,currency etc of this number.

     ```javascript
     function convertToThousandFormat(x){
       return x.toLocaleString(); // 12,345.679
     }

     console.log(convertToThousandFormat(12345.6789));
     ```

     **[⬆ Back to Top](#table-of-contents)**

289. ### What is the difference between java and javascript

     Both are totally unrelated programming languages and no relation between them. Java is statically typed, compiled, runs on its own VM. Whereas Javascript is dynamically typed, interpreted, and runs in a browser and nodejs environments. Let's see the major differences in a tabular format,
     | Feature | Java | JavaScript |
     |---- | ---- | -----
     | Typed  | It's a strongly typed language | It's a dynamic typed language |
     | Paradigm | Object oriented programming  | Prototype based programming |
     | Scoping | Block scoped | Function-scoped |
     | Concurrency | Thread based | event based |
     | Memory | Uses more memory | Uses less memory. Hence it will be used for web pages |

     **[⬆ Back to Top](#table-of-contents)**

290. ### Does JavaScript supports namespace

     JavaScript doesn’t support namespace by default. So if you create any element(function, method, object, variable) then it becomes global and pollutes the global namespace. Let's take an example of defining two functions without any namespace,

     ```javascript
     function func1() {
         console.log("This is a first definition");

     }
     function func1() {
         console.log("This is a second definition");
     }
     func1(); // This is a second definition
     ```

     It always calls the second function definition. In this case, namespace will solve the name collision problem.

     **[⬆ Back to Top](#table-of-contents)**

291. ### How do you declare namespace

     Even though JavaScript lacks namespaces, we can use Objects , IIFE to create namespaces.
     1. **Using Object Literal Notation:** Let's wrap variables and functions inside an Object literal which acts as a namespace. After that you can access them using object notation

     ```javascript
     var namespaceOne = {
        function func1() {
            console.log("This is a first definition");
        }
     }
     var namespaceTwo = {
          function func1() {
              console.log("This is a second definition");
          }
      }
     namespaceOne.func1(); // This is a first definition
     namespaceTwo.func1(); // This is a second definition
     ```

     1. **Using IIFE (Immediately invoked function expression):** The outer pair of parentheses of IIFE creates a local scope for all the code inside of it and makes the anonymous function a function expression. Due to that, you can create the same function in two different function expressions to act as a namespace.

     ```javascript
     (function() {
      function fun1(){
        console.log("This is a first definition");
        } fun1();
     }());

     (function() {
         function fun1(){
            console.log("This is a second definition");
        } fun1();
      }());
     ```

     1. **Using a block and a let/const declaration:** In ECMAScript 6, you can simply use a block and a let declaration to restrict the scope of a variable to a block.

     ```javascript
      {
       let myFunction= function fun1(){
       console.log("This is a first definition");
       }
       myFunction();
      }
       //myFunction(): ReferenceError: myFunction is not defined.

      {
       let myFunction= function fun1(){
       console.log("This is a second definition");
       }
       myFunction();
      }
       //myFunction(): ReferenceError: myFunction is not defined.
     ```

     **[⬆ Back to Top](#table-of-contents)**

292. ### How do you invoke javascript code in an iframe from parent page

     Initially iFrame needs to be accessed using either `document.getElementBy` or `window.frames`. After that `contentWindow` property of iFrame gives the access for targetFunction

     ```javascript
     document.getElementById('targetFrame').contentWindow.targetFunction();
     window.frames[0].frameElement.contentWindow.targetFunction(); // Accessing iframe this way may not work in latest versions chrome and firefox

     ```

     **[⬆ Back to Top](#table-of-contents)**

293. ### How do get the timezone offset from date

     You can use the `getTimezoneOffset` method of the date object. This method returns the time zone difference, in minutes, from current locale (host system settings) to UTC

     ```javascript
     var offset = new Date().getTimezoneOffset();
     console.log(offset); // -480
     ```

     **[⬆ Back to Top](#table-of-contents)**

294. ### How do you load CSS and JS files dynamically

     You can create both link and script elements in the DOM and append them as child to head tag. Let's create a function to add script and style resources as below,

     ```javascript
     function loadAssets(filename, filetype) {
       if (filetype == "css") { // External CSS file
            var fileReference = document.createElement("link")
            fileReference.setAttribute("rel", "stylesheet");
            fileReference.setAttribute("type", "text/css");
            fileReference.setAttribute("href", filename);
       } else if (filetype == "js") { // External JavaScript file
            var fileReference = document.createElement('script');
            fileReference.setAttribute("type", "text/javascript");
            fileReference.setAttribute("src", filename);
       }
       if (typeof fileReference != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileReference)
      }
     ```

     **[⬆ Back to Top](#table-of-contents)**

295. ### What are the different methods to find HTML elements in DOM

     If you want to access any element in an HTML page, you need to start with accessing the document object. Later you can use any of the below methods to find the HTML element,
     1. document.getElementById(id): It finds an element by Id
     2. document.getElementsByTagName(name): It finds an element by tag name
     3. document.getElementsByClassName(name): It finds an element by class name

     **[⬆ Back to Top](#table-of-contents)**

296. ### What is jQuery

     jQuery is a popular cross-browser JavaScript library that provides Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. It is widely famous with its philosophy of “Write less, do more”. For example, you can display welcome message on the page load using jQuery as below,

     ```javascript
     $(document).ready(function(){ // It selects the document and apply the function on page load
         alert('Welcome to jQuery world');
     });
     ```

     **Note:** You can download it from jquery's official site or install it from CDNs, like google.

     **[⬆ Back to Top](#table-of-contents)**

297. ### What is V8 JavaScript engine

     V8 is an open source high-performance JavaScript engine used by the Google Chrome browser, written in C++. It is also being used in the node.js project. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors.
     **Note:** It can run standalone, or can be embedded into any C++ application.

     **[⬆ Back to Top](#table-of-contents)**

298. ### Why do we call javascript as dynamic language

     JavaScript is a loosely typed or a dynamic language because variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned/reassigned with values of all types.

     ```javascript
     let age = 50;    // age is a number now
     age  = 'old'; // age is a string now
     age  = true;  // age is a boolean
     ```

     **[⬆ Back to Top](#table-of-contents)**

299. ### What is a void operator

     The `void` operator evaluates the given expression and then returns undefined(i.e, without returning value). The syntax would be as below,

     ```javascript
     void (expression)
     void expression
     ```

     Let's display a message without any redirection or reload

     ```javascript
     <a href="javascript:void(alert('Welcome to JS world'))">Click here to see a message</a>
     ```

     **Note:** This operator is often used to obtain the undefined primitive value, using "void(0)".

     **[⬆ Back to Top](#table-of-contents)**

300. ### How to set the cursor to wait

     The cursor can be set to wait in JavaScript by using the property "cursor". Let's perform this behavior on page load using the below function.

     ```javascript
     function myFunction() {
     window.document.body.style.cursor = "wait";
     }
     ```

     and this function invoked on page load

     ```html
     <body onload="myFunction()">
     ```

     **[⬆ Back to Top](#table-of-contents)**

301. ### How do you create an infinite loop

     You can create infinite loops using for and while loops without using any expressions. The for loop construct or syntax is better approach in terms of ESLint and code optimizer tools,

     ```javascript
     for (;;) {}
     while(true) {
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

302. ### Why do you need to avoid with statement

     JavaScript's with statement was intended to provide a shorthand for writing recurring accesses to objects. So it can help reduce file size by reducing the need to repeat a lengthy object reference without performance penalty. Let's take an example where it is used to avoid redundancy when accessing an object several times.

     ```javascript
     a.b.c.greeting   = 'welcome';
     a.b.c.age = 32;
     ```

     Using `with` it turns this into:

     ```javascript
     with(a.b.c) {
             greeting   = "welcome";
             age = 32;
     }
     ```

     But this `with` statement creates performance problems since one cannot predict whether an argument will refer to a real variable or to a property inside the with argument.

     **[⬆ Back to Top](#table-of-contents)**

303. ### What is the output of below for loops

     ```javascript
     for (var i = 0; i < 4; i++) { // global scope
       setTimeout(() => console.log(i));
     }

     for (let i = 0; i < 4; i++) { // block scope
       setTimeout(() => console.log(i));
     }
     ```

     The output of the above for loops is 4 4 4 4 and 0 1 2 3
     
     **Explanation:** Due to the event queue/loop of javascript, the `setTimeout` callback function is called after the loop has been executed. Since the variable i is declared with the `var` keyword it became a global variable and the value was equal to 4 using iteration when the time `setTimeout` function is invoked. Hence, the output of the first loop is `4 4 4 4`. 
     
     Whereas in the second loop, the variable i is declared as the `let` keyword it becomes a block scoped variable and it holds a new value(0, 1 ,2 3) for each iteration. Hence, the output of the first loop is `0 1 2 3`.

     **[⬆ Back to Top](#table-of-contents)**

304. ### List down some of the features of ES6

     Below are the list of some new features of ES6,
     1. Support for constants or immutable variables
     2. Block-scope support for variables, constants and functions
     3. Arrow functions
     4. Default parameters
     5. Rest and Spread Parameters
     6. Template Literals
     7. Multi-line Strings
     8. Destructuring Assignment
     9. Enhanced Object Literals
     10. Promises
     11. Classes
     12. Modules

     **[⬆ Back to Top](#table-of-contents)**

305. ### What is ES6

     ES6 is the sixth edition of the javascript language and it was released in June 2015. It was initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015. Almost all the modern browsers support ES6 but for the old browsers there are many transpilers, like Babel.js etc.

     **[⬆ Back to Top](#table-of-contents)**

306. ### Can I redeclare let and const variables

     No, you cannot redeclare let and const variables. If you do, it throws below error

     ```bash
     Uncaught SyntaxError: Identifier 'someVariable' has already been declared
     ```

     **Explanation:** The variable declaration with `var` keyword refers to a function scope and the variable is treated as if it were declared at the top of the enclosing scope due to hoisting feature. So all the multiple declarations contributing to the same hoisted variable without any error. Let's take an example of re-declaring variables in the same scope for both var and let/const variables.

     ```javascript
     var name = 'John';
     function myFunc() {
         var name = 'Nick';
         var name = 'Abraham'; // Re-assigned in the same function block
         alert(name); // Abraham
     }
     myFunc();
     alert(name); // John
     ```

     The block-scoped multi-declaration throws syntax error,

     ```javascript
     let name = 'John';
     function myFunc() {
         let name = 'Nick';
         let name = 'Abraham'; // Uncaught SyntaxError: Identifier 'name' has already been declared
         alert(name);
     }

     myFunc();
     alert(name);
     ```

     **[⬆ Back to Top](#table-of-contents)**

307. ### Is const variable makes the value immutable

     No, the const variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)

     ```javascript
     const userList = [];
     userList.push('John'); // Can mutate even though it can't re-assign
     console.log(userList); // ['John']
     ```

     **[⬆ Back to Top](#table-of-contents)**

308. ### What are default parameters

     In E5, we need to depend on logical OR operators to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with an examples,

     ```javascript
     //ES5
     var calculateArea = function(height, width) {
        height =  height || 50;
        width = width || 60;

        return width * height;
     }
     console.log(calculateArea()); //300
     ```

     The default parameters makes the initialization more simpler,

     ```javascript
     //ES6
     var calculateArea = function(height = 50, width = 60) {
        return width * height;
     }

     console.log(calculateArea()); //300
     ```

     **[⬆ Back to Top](#table-of-contents)**

309. ### What are template literals

     Template literals or template strings are string literals allowing embedded expressions. These are enclosed by the back-tick (`) character instead of double or single quotes.
     In E6, this feature enables using dynamic expressions as below,

     ```javascript
     var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`
     ```

     In ES5, you need break string like below,

     ```javascript
     var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`
     ```

     **Note:** You can use multi-line strings and string interpolation features with template literals.

     **[⬆ Back to Top](#table-of-contents)**

310. ### How do you write multi-line strings in template literals

     In ES5, you would have to use newline escape characters('\\n') and concatenation symbols(+) in order to get multi-line strings.

     ```javascript
     console.log('This is string sentence 1\n' +
     'This is string sentence 2');
     ```

     Whereas in ES6, You don't need to mention any newline sequence character,

     ```javascript
     console.log(`This is string sentence
     'This is string sentence 2`);
     ```

     **[⬆ Back to Top](#table-of-contents)**

311. ### What are nesting templates

     The nesting template is a feature supported within template literals syntax to allow inner backticks inside a placeholder ${ } within the template. For example, the below nesting template is used to display the icons based on user permissions whereas outer template checks for platform type,

     ```javascript
     const iconStyles = `icon ${ isMobilePlatform() ? '' :
      `icon-${user.isAuthorized ? 'submit' : 'disabled'}` }`;
     ```

     You can write the above use case without nesting template features as well. However, the nesting template feature is more compact and readable.

     ```javascript
     //Without nesting templates
      const iconStyles = `icon ${ isMobilePlatform() ? '' :
       (user.isAuthorized ? 'icon-submit' : 'icon-disabled'}`;
     ```

     **[⬆ Back to Top](#table-of-contents)**

312. ### What are tagged templates

     Tagged templates are the advanced form of templates in which tags allow you to parse template literals with a function. The tag function accepts the first parameter as an array of strings and remaining parameters as expressions. This function can also return manipulated strings based on parameters. Let's see the usage of this tagged template behavior of an IT professional skill set in an organization,

     ```javascript
     var user1 = 'John';
     var skill1 = 'JavaScript';
     var experience1 = 15;

     var user2 = 'Kane';
     var skill2 = 'JavaScript';
     var experience2 = 5;

     function myInfoTag(strings, userExp, experienceExp, skillExp) {
       var str0 = strings[0]; // "Mr/Ms. "
       var str1 = strings[1]; // " is a/an "
       var str2 = strings[2]; // "in"

       var expertiseStr;
       if (experienceExp > 10){
         expertiseStr = 'expert developer';
       } else if(skillExp > 5 && skillExp <= 10) {
         expertiseStr = 'senior developer';
       } else {
         expertiseStr = 'junior developer';
       }

       return `${str0}${userExp}${str1}${expertiseStr}${str2}${skillExp}`;
     }

     var output1 = myInfoTag`Mr/Ms. ${ user1 } is a/an ${ experience1 } in ${skill1}`;
     var output2 = myInfoTag`Mr/Ms. ${ user2 } is a/an ${ experience2 } in ${skill2}`;

     console.log(output1);// Mr/Ms. John is a/an expert developer in JavaScript
     console.log(output2);// Mr/Ms. Kane is a/an junior developer in JavaScript
     ```

     **[⬆ Back to Top](#table-of-contents)**

313. ### What are raw strings

      ES6 provides a raw strings feature using the `String.raw()` method which is used to get the raw string form of template strings. This feature allows you to access the raw strings as they were entered, without processing escape sequences. For example, the usage would be as below,

      ```javascript
      var calculationString = String.raw `The sum of numbers is \n${1+2+3+4}!`;
      console.log(calculationString); // The sum of numbers is 10
      ```

      If you don't use raw strings, the newline character sequence will be processed by displaying the output in multiple lines

      ```javascript
      var calculationString = `The sum of numbers is \n${1+2+3+4}!`;
      console.log(calculationString);
      // The sum of numbers is
      // 10
      ```

      Also, the raw property is available on the first argument to the tag function

      ```javascript
      function tag(strings) {
         console.log(strings.raw[0]);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

314. ### What is destructuring assignment

     The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.
     Let's get the month values from an array using destructuring assignment

     ```javascript
     var [one, two, three] = ['JAN', 'FEB', 'MARCH'];

     console.log(one); // "JAN"
     console.log(two); // "FEB"
     console.log(three); // "MARCH"
     ```

     and you can get user properties of an object using destructuring assignment,

     ```javascript
     var {name, age} = {name: 'John', age: 32};

     console.log(name); // John
     console.log(age); // 32
     ```

     **[⬆ Back to Top](#table-of-contents)**

315. ### What are default values in destructuring assignment

     A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment. Let's take an example for both arrays and object use cases,

     **Arrays destructuring:**

     ```javascript
     var x, y, z;

     [x=2, y=4, z=6] = [10];
     console.log(x); // 10
     console.log(y); // 4
     console.log(z); // 6
     ```

     **Objects destructuring:**

     ```javascript
     var {x=2, y=4, z=6} = {x: 10};

     console.log(x); // 10
     console.log(y); // 4
     console.log(z); // 6
     ```

     **[⬆ Back to Top](#table-of-contents)**

316. ### How do you swap variables in destructuring assignment

     If you don't use destructuring assignment, swapping two values requires a temporary variable. Whereas using a destructuring feature, two variable values can be swapped in one destructuring expression. Let's swap two number variables in array destructuring assignment,

     ```javascript
     var x = 10, y = 20;

     [x, y] = [y, x];
     console.log(x); // 20
     console.log(y); // 10
     ```

     **[⬆ Back to Top](#table-of-contents)**

317. ### What are enhanced object literals

     Object literals make it easy to quickly create objects with properties inside the curly braces. For example, it provides shorter syntax for common object property definition as below.

     ```javascript
     //ES6
     var x = 10, y = 20
     obj = { x, y }
     console.log(obj); // {x: 10, y:20}
     //ES5
     var x = 10, y = 20
     obj = { x : x, y : y}
     console.log(obj); // {x: 10, y:20}
     ```

     **[⬆ Back to Top](#table-of-contents)**

318. ### What are dynamic imports

     The dynamic imports using `import()` function syntax allows us to load modules on demand by using promises or the async/await syntax. Currently this feature is in [stage4 proposal](https://github.com/tc39/proposal-dynamic-import). The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload response of our requests and overall improvements in the user experience.
     The syntax of dynamic imports would be as below,

     ```javascript
     import('./Module').then(Module => Module.method());
     ```

     **[⬆ Back to Top](#table-of-contents)**

319. ### What are the use cases for dynamic imports

     Below are some of the use cases of using dynamic imports over static imports,
     1. Import a module on-demand or conditionally. For example, if you want to load a polyfill on legacy browser

     ```javascript
     if (isLegacyBrowser()) {
         import(···)
         .then(···);
     }
     ```

     1. Compute the module specifier at runtime. For example, you can use it for internationalization.

     ```javascript
     import(`messages_${getLocale()}.js`).then(···);
     ```

     1. Import a module from within a regular script instead a module.

     **[⬆ Back to Top](#table-of-contents)**

320. ### What are typed arrays

     Typed arrays are array-like objects from ECMAScript 6 API for handling binary data. JavaScript provides 8 Typed array types,

     1. Int8Array: An array of 8-bit signed integers
     2. Int16Array: An array of 16-bit signed integers
     3. Int32Array: An array of 32-bit signed integers
     4. Uint8Array: An array of 8-bit unsigned integers
     5. Uint16Array: An array of 16-bit unsigned integers
     6. Uint32Array: An array of 32-bit unsigned integers
     7. Float32Array: An array of 32-bit floating point numbers
     8. Float64Array: An array of 64-bit floating point numbers

     For example, you can create an array of 8-bit signed integers as below

     ```javascript
     const a = new Int8Array();
     // You can pre-allocate n bytes
     const bytes = 1024
     const a = new Int8Array(bytes)
     ```

     **[⬆ Back to Top](#table-of-contents)**

321. ### What are the advantages of module loaders

     The module loaders provides the below features,
     1. Dynamic loading
     2. State isolation
     3. Global namespace isolation
     4. Compilation hooks
     5. Nested virtualization

     **[⬆ Back to Top](#table-of-contents)**

322. ### What is collation

     Collation is used for sorting a set of strings and searching within a set of strings. It is parameterized by locale and aware of Unicode. Let's take comparison and sorting features,
     1. **Comparison:**

     ```javascript
     var list = [ "ä", "a", "z" ]; // In German,  "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
     var l10nDE = new Intl.Collator("de");
     var l10nSV = new Intl.Collator("sv");
     console.log(l10nDE.compare("ä", "z") === -1); // true
     console.log(l10nSV.compare("ä", "z") === +1); // true
     ```

     1. **Sorting:**

     ```javascript
     var list = [ "ä", "a", "z" ]; // In German,  "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
     var l10nDE = new Intl.Collator("de");
     var l10nSV = new Intl.Collator("sv");
     console.log(list.sort(l10nDE.compare)) // [ "a", "ä", "z" ]
     console.log(list.sort(l10nSV.compare)) // [ "a", "z", "ä" ]
     ```

     **[⬆ Back to Top](#table-of-contents)**

323. ### What is for...of statement

     The for...of statement creates a loop iterating over iterable objects or elements such as built-in String, Array, Array-like objects (like arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. The basic usage of for...of statement on arrays would be as below,

     ```javascript
     let arrayIterable = [10, 20, 30, 40, 50];

     for (let value of arrayIterable) {
       value ++;
       console.log(value); // 11 21 31 41 51
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

324. ### What is the output of below spread operator array

     ```javascript
     [...'John Resig']
     ```

     The output of the array is ['J', 'o', 'h', 'n', '', 'R', 'e', 's', 'i', 'g']
     **Explanation:** The string is an iterable type and the spread operator within an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.

     **[⬆ Back to Top](#table-of-contents)**

325. ### Is PostMessage secure

     Yes, postMessages can be considered very secure as long as the programmer/developer is careful about checking the origin and source of an arriving message. But if you try to send/receive a message without verifying its source will create cross-site scripting attacks.

     **[⬆ Back to Top](#table-of-contents)**

326. ### What are the problems with postmessage target origin as wildcard

     The second argument of postMessage method specifies which origin is allowed to receive the message. If you use the wildcard “*” as an argument then any origin is allowed to receive the message. In this case, there is no way for the sender window to know if the target window is at the target origin when sending the message. If the target window has been navigated to another origin, the other origin would receive the data. Hence, this may lead to XSS vulnerabilities.

     ```javascript
     targetWindow.postMessage(message, '*');
     ```

     **[⬆ Back to Top](#table-of-contents)**

327. ### How do you avoid receiving postMessages from attackers

     Since the listener listens for any message, an attacker can trick the application by sending a message from the attacker’s origin,  which gives an impression that the receiver received the message from the actual sender’s window. You can avoid this issue by validating the origin of the message on the receiver's end using the “message.origin” attribute. For examples, let's check the sender's origin [http://www.some-sender.com](http://www.some-sender.com) on receiver side [www.some-receiver.com](www.some-receiver.com),

     ```javascript
     //Listener on http://www.some-receiver.com/
     window.addEventListener("message", function(message){
         if(/^http://www\.some-sender\.com$/.test(message.origin)){
              console.log('You received the data from valid sender', message.data);
        }
     });
     ```

     **[⬆ Back to Top](#table-of-contents)**

328. ### Can I avoid using postMessages completely

     You cannot avoid using postMessages completely(or 100%). Even though your application doesn’t use postMessage considering the risks, a lot of third party scripts use postMessage to communicate with the third party service. So your application might be using postMessage without your knowledge.

     **[⬆ Back to Top](#table-of-contents)**

329. ### Is postMessages synchronous

     The postMessages are synchronous in IE8 browser but they are asynchronous in IE9 and all other modern browsers (i.e, IE9+, Firefox, Chrome, Safari).Due to this asynchronous behaviour, we use a callback mechanism when the postMessage is returned.

     **[⬆ Back to Top](#table-of-contents)**

330. ### What paradigm is Javascript

     JavaScript is a multi-paradigm language, supporting imperative/procedural programming, Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented Programming with prototypical inheritance.

     **[⬆ Back to Top](#table-of-contents)**

331. ### What is the difference between internal and external javascript

     **Internal JavaScript:** It is the source code within the script tag.
     **External JavaScript:** The source code is stored in an external file(stored with .js extension) and referred with in the tag.

     **[⬆ Back to Top](#table-of-contents)**

332. ### Is JavaScript faster than server side script

     Yes, JavaScript is faster than server side script. Because JavaScript is a client-side script it does not require any web server’s help for its computation or calculation. So JavaScript is always faster than any server-side script like ASP, PHP, etc.

     **[⬆ Back to Top](#table-of-contents)**

333. ### How do you get the status of a checkbox

     You can apply the `checked` property on the selected checkbox in the DOM. If the value is `True` means the checkbox is checked otherwise it is unchecked. For example, the below HTML checkbox element can be access using javascript as below,

     ```html
       <input type="checkbox" name="checkboxname" value="Agree"> Agree the conditions<br>
     ```

     ```javascript
     console.log(document.getElementById(‘checkboxname’).checked); // true or false
     ```

     **[⬆ Back to Top](#table-of-contents)**

334. ### What is the purpose of double tilde operator

     The double tilde operator(~~) is known as double NOT bitwise operator. This operator is going to be a quicker substitute for Math.floor().

     **[⬆ Back to Top](#table-of-contents)**

335. ### How do you convert character to ASCII code

     You can use the `String.prototype.charCodeAt()` method to convert string characters to ASCII numbers. For example, let's find ASCII code for the first letter of 'ABC' string,

     ```javascript
     "ABC".charCodeAt(0) // returns 65
     ```

     Whereas `String.fromCharCode()` method converts numbers to equal ASCII characters.

     ```javascript
     String.fromCharCode(65,66,67); // returns 'ABC'
     ```

     **[⬆ Back to Top](#table-of-contents)**

336. ### What is ArrayBuffer

     An ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can create it as below,

     ```javascript
     let buffer = new ArrayBuffer(16); // create a buffer of length 16
     alert(buffer.byteLength); // 16
     ```

     To manipulate an ArrayBuffer, we need to use a “view” object.

     ```javascript
     //Create a DataView referring to the buffer
      let view = new DataView(buffer);
     ```

     **[⬆ Back to Top](#table-of-contents)**

337. ### What is the output of below string expression

     ```javascript
     console.log("Welcome to JS world"[0])
     ```

     The output of the above expression is "W".
     **Explanation:** The bracket notation with specific index on a string returns the character at a specific location. Hence, it returns the character "W" of the string. Since this is not supported in IE7 and below versions, you may need to use the .charAt() method to get the desired result.

     **[⬆ Back to Top](#table-of-contents)**

338. ### What is the purpose of Error object

     The Error constructor creates an error object and the instances of error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. The syntax of error object would be as below,

     ```javascript
     new Error([message[, fileName[, lineNumber]]])
     ```

     You can throw user defined exceptions or errors using Error object in try...catch block as below,

     ```javascript
     try {
       if(withdraw > balance)
       throw new Error("Oops! You don't have enough balance");
     } catch (e) {
       console.log(e.name + ': ' + e.message);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

339. ### What is the purpose of EvalError object

     The EvalError object indicates an error regarding the global `eval()` function. Even though this exception is not thrown by JavaScript anymore, the EvalError object remains for compatibility. The syntax of this expression would be as below,

     ```javascript
     new EvalError([message[, fileName[, lineNumber]]])
     ```

     You can throw EvalError with in try...catch block as below,

     ```javascript
     try {
       throw new EvalError('Eval function error', 'someFile.js', 100);
     } catch (e) {
       console.log(e.message, e.name, e.fileName);              // "Eval function error", "EvalError", "someFile.js"
     ```

     **[⬆ Back to Top](#table-of-contents)**

340. ### What are the list of cases error thrown from non-strict mode to strict mode

     When you apply 'use strict'; syntax, some of the below cases will throw a SyntaxError before executing the script
     1. When you use Octal syntax

     ```javascript
     var n = 022;
     ```

     1. Using `with` statement
     2. When you use delete operator on a variable name
     3. Using eval or arguments as variable or function argument name
     4. When you use newly reserved keywords
     5. When you declare a function in a block

     ```javascript
     if (someCondition) { function f() {} }
     ```

     Hence, the errors from above cases are helpful to avoid errors in development/production environments.

     **[⬆ Back to Top](#table-of-contents)**

341. ### Do all objects have prototypes

     No. All objects have prototypes except for the base object which is created by the user, or an object that is created using the new keyword.

     **[⬆ Back to Top](#table-of-contents)**

342. ### What is the difference between a parameter and an argument

     Parameter is the variable name of a function definition whereas an argument represents the value given to a function when it is invoked. Let's explain this with a simple function

     ```javascript
     function myFunction(parameter1, parameter2, parameter3) {
       console.log(arguments[0]) // "argument1"
       console.log(arguments[1]) // "argument2"
       console.log(arguments[2]) // "argument3"
     }
     myFunction("argument1", "argument2", "argument3")
     ```

     **[⬆ Back to Top](#table-of-contents)**

343. ### What is the purpose of some method in arrays

     The some() method is used to test whether at least one element in the array passes the test implemented by the provided function. The method returns a boolean value. Let's take an example to test for any odd elements,

     ```javascript
     var array = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];

     var odd = element ==> element % 2 !== 0;

     console.log(array.some(odd)); // true (the odd element exists)
     ```

     **[⬆ Back to Top](#table-of-contents)**

344. ### How do you combine two or more arrays

     The concat() method is used to join two or more arrays by returning a new array containing all the elements. The syntax would be as below,

     ```javascript
     array1.concat(array2, array3, ..., arrayX)
     ```

     Let's take an example of array's concatenation with veggies and fruits arrays,

     ```javascript
       var veggies = ["Tomato", "Carrot", "Cabbage"];
       var fruits = ["Apple", "Orange", "Pears"];
       var veggiesAndFruits = veggies.concat(fruits);
       console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears
     ```

     **[⬆ Back to Top](#table-of-contents)**

345. ### What is the difference between Shallow and Deep copy

      There are two ways to copy an object,

      **Shallow Copy:**
      Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

      **Example**

      ```javascript
      var empDetails = {
        name: "John", age: 25, expertise: "Software Developer"
      }
      ```

      to create a duplicate

      ```javascript
      var empDetailsShallowCopy = empDetails    //Shallow copying!
      ```

      if we change some property value in the duplicate one like this:

      ```javascript
      empDetailsShallowCopy.name = "Johnson"
      ```

      The above statement will also change the name of `empDetails`, since we have a shallow copy. That means we're losing the original data as well.

      **Deep copy:**
      A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

      **Example**

      ```javascript
      var empDetails = {
        name: "John", age: 25, expertise: "Software Developer"
      }
      ```

      Create a deep copy by using the properties from the original object into new variable

      ```javascript
      var empDetailsDeepCopy = {
        name: empDetails.name,
        age: empDetails.age,
        expertise: empDetails.expertise
      }
      ```

      Now if you change `empDetailsDeepCopy.name`, it will only affect `empDetailsDeepCopy` & not `empDetails`

      **[⬆ Back to Top](#table-of-contents)**

346. ### How do you create specific number of copies of a string

     The `repeat()` method is used to construct and return a new string which contains the specified number of copies of the string on which it was called, concatenated together. Remember that this method has been added to the ECMAScript 2015 specification.
     Let's take an example of Hello string to repeat it 4 times,

     ```javascript
     'Hello'.repeat(4);  // 'HelloHelloHelloHello'
     ```

347. ### How do you return all matching strings against a regular expression

     The `matchAll()` method can be used to return an iterator of all results matching a string against a regular expression. For example, the below example returns an array of matching string results against a regular expression,

     ```javascript
     let regexp = /Hello(\d?))/g;
     let greeting = 'Hello1Hello2Hello3';

     let greetingList = [...greeting.matchAll(regexp)];

     console.log(greetingList[0]); //Hello1
     console.log(greetingList[1]); //Hello2
     console.log(greetingList[2]); //Hello3
     ```

     **[⬆ Back to Top](#table-of-contents)**

348. ### How do you trim a string at the beginning or ending

     The `trim` method of string prototype is used to trim on both sides of a string. But if you want to trim especially at the beginning or ending of the string then you can use `trimStart/trimLeft` and `trimEnd/trimRight` methods. Let's see an example of these methods on a greeting message,

     ```javascript
     var greeting = '   Hello, Goodmorning!   ';

     console.log(greeting); // "   Hello, Goodmorning!   "
     console.log(greeting.trimStart()); // "Hello, Goodmorning!   "
     console.log(greeting.trimLeft()); // "Hello, Goodmorning!   "

     console.log(greeting.trimEnd()); // "   Hello, Goodmorning!"
     console.log(greeting.trimRight()); // "   Hello, Goodmorning!"
     ```

     **[⬆ Back to Top](#table-of-contents)**

349. ### What is the output of below console statement with unary operator

     Let's take console statement with unary operator as given below,

     ```javascript
     console.log(+ 'Hello');
     ```

     The output of the above console log statement returns NaN. Because the element is prefixed by the unary operator and the JavaScript interpreter will try to convert that element into a number type. Since the conversion fails, the value of the statement results in NaN value.

     **[⬆ Back to Top](#table-of-contents)**

350. ### Does javascript uses mixins

     Mixin is a generic object-oriented programming term - is a class containing methods that can be used by other classes without a need to inherit from it. In JavaScript we can only inherit from a single object. ie. There can be only one `[[prototype]]` for an object.

     But sometimes we require to extend more than one, to overcome this we can use Mixin which helps to copy methods to the prototype of another class. 
     
     Say for instance, we've two classes `User` and `CleanRoom`. Suppose we need to add `CleanRoom` functionality to `User`, so that user can clean the room at demand. Here's where concept called mixins comes into picture. 

     ```javascript
     // mixin
     let cleanRoomMixin = {
          cleanRoom() {
          alert(`Hello ${this.name}, your room is clean now`);
     },
     sayBye() {
          alert(`Bye ${this.name}`);
     }
     };

     // usage:
     class User {
          constructor(name) {
               this.name = name;
          }
     }

     // copy the methods
     Object.assign(User.prototype, cleanRoomMixin);

     // now User can clean the room
     new User("Dude").cleanRoom(); // Hello Dude, your room is clean now!
     ```

     **[⬆ Back to Top](#table-of-contents)**

351. ### What is a thunk function

     A thunk is just a function which delays the evaluation of the value. It doesn’t take any arguments but gives the value whenever you invoke the thunk. i.e, It is used not to execute now but it will be sometime in the future. Let's take a synchronous example,

     ```javascript
     const add = (x,y) => x + y;

     const thunk = () => add(2,3);

     thunk() // 5
     ```

     **[⬆ Back to Top](#table-of-contents)**

352. ### What are asynchronous thunks

     The asynchronous thunks are useful to make network requests.  Let's see an example of network requests,

     ```javascript
     function fetchData(fn){
       fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response => response.json())
       .then(json => fn(json))
     }

     const asyncThunk = function (){
        return fetchData(function getData(data){
           console.log(data)
       })
     }

     asyncThunk()
     ```

     The `getData` function won't be called immediately but it will be invoked only when the data is available from API endpoint. The setTimeout function is also used to make our code asynchronous. The best real time example is redux state management library which uses the asynchronous thunks to delay the actions to dispatch.

     **[⬆ Back to Top](#table-of-contents)**

353. ### What is the output of below function calls

     **Code snippet:**

     ```javascript
     const circle = {
       radius: 20,
       diameter() {
         return this.radius * 2;
       },
       perimeter: () => 2 * Math.PI * this.radius
     };
     ```

     console.log(circle.diameter());
     console.log(circle.perimeter());

     **Output:**

     The output is 40 and NaN. Remember that diameter is a regular function, whereas the value of perimeter is an arrow function. The `this` keyword of a regular function(i.e, diameter) refers to the surrounding scope which is a class(i.e, Shape object). Whereas this keyword of perimeter function refers to the surrounding scope which is a window object. Since there is no radius property on window objects it returns an undefined value and the multiple of number value returns NaN value.

     **[⬆ Back to Top](#table-of-contents)**

354. ### How to remove all line breaks from a string

     The easiest approach is using regular expressions to detect and replace newlines in the string. In this case, we use replace function along with string to replace with, which in our case is an empty string.

     ```javascript
     function remove_linebreaks( var message ) {
         return message.replace( /[\r\n]+/gm, "" );
     }
     ```

     In the above expression, g and m are for global and multiline flags.

     **[⬆ Back to Top](#table-of-contents)**

355. ### What is the difference between reflow and repaint

     A *repaint* occurs when changes are made which affect the visibility of an element, but not its layout. Examples of this include outline, visibility, or background color. A *reflow* involves changes that affect the layout of a portion of the page (or the whole page). Resizing the browser window, changing the font, content changing (such as user typing text), using JavaScript methods involving computed styles, adding or removing elements from the DOM, and changing an element's classes are a few of the things that can trigger reflow. Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.

      **[⬆ Back to Top](#table-of-contents)**

356. ### What happens with negating an array

     Negating an array with `!` character will coerce the array into a boolean. Since Arrays are considered to be truthy So negating it will return `false`.

     ```javascript
     console.log(![]); // false
     ```

     **[⬆ Back to Top](#table-of-contents)**

357. ### What happens if we add two arrays

     If you add two arrays together, it will convert them both to strings and concatenate them. For example, the result of adding arrays would be as below,

     ```javascript
     console.log(['a'] + ['b']);  // "ab"
     console.log([] + []); // ""
     console.log(![] + []); // "false", because ![] returns false.
     ```

     **[⬆ Back to Top](#table-of-contents)**

358. ### What is the output of prepend additive operator on falsy values

     If you prepend the additive(+) operator on falsy values(null, undefined, NaN, false, ""), the falsy value converts to a number value zero. Let's display them on browser console as below,

     ```javascript
     console.log(+null); // 0
     console.log(+undefined);// NaN
     console.log(+false); // 0
     console.log(+NaN); // NaN
     console.log(+""); // 0
     ```

     **[⬆ Back to Top](#table-of-contents)**

359. ### How do you create self string using special characters

     The self string can be formed with the combination of `[]()!+` characters. You need to remember the below conventions to achieve this pattern.
     1. Since Arrays are truthful values, negating the arrays will produce false: ![] === false
     2. As per JavaScript coercion rules, the addition of arrays together will toString them: [] + [] === ""
     3. Prepend an array with + operator will convert an array to false, the negation will make it true and finally converting the result will produce value '1': +(!(+[])) === 1

     By applying the above rules, we can derive below conditions

     ```javascript
     ![] + [] === "false"
     +!+[] === 1
     ```

     Now the character pattern would be created as below,

     ```javascript
           s               e               l               f
      ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^

      (![] + [])[3] + (![] + [])[4] + (![] + [])[2] + (![] + [])[0]
      ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^
     (![] + [])[+!+[]+!+[]+!+[]] +
     (![] + [])[+!+[]+!+[]+!+[]+!+[]] +
     (![] + [])[+!+[]+!+[]] +
     (![] + [])[+[]]
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     (![]+[])[+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]]+(![]+[])[+[]]
     ```

     **[⬆ Back to Top](#table-of-contents)**

360. ### How do you remove falsy values from an array

     You can apply the filter method on the array by passing Boolean as a parameter. This way it removes all falsy values(0, undefined, null, false and "") from the array.

     ```javascript
     const myArray = [false, null, 1,5, undefined]
     myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);
     ```

     **[⬆ Back to Top](#table-of-contents)**

361. ### How do you get unique values of an array

     You can get unique values of an array with the combination of `Set` and rest expression/spread(...) syntax.

     ```javascript
     console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]
     ```

     **[⬆ Back to Top](#table-of-contents)**

362. ### What is destructuring aliases

     Sometimes you would like to have a destructured variable with a different name than the property name. In that case, you'll use a `: newName` to specify a name for the variable. This process is called destructuring aliases.

     ```javascript
     const obj = { x: 1 };
     // Grabs obj.x as as { otherName }
     const { x: otherName } = obj;
     ```

     **[⬆ Back to Top](#table-of-contents)**

363. ### How do you map the array values without using map method

     You can map the array values without using the `map` method by just using the `from` method of Array. Let's map city names from Countries array,

     ```javascript
     const countries = [
         { name: 'India', capital: 'Delhi' },
         { name: 'US', capital: 'Washington' },
         { name: 'Russia', capital: 'Moscow' },
         { name: 'Singapore', capital: 'Singapore' },
         { name: 'China', capital: 'Beijing' },
         { name: 'France', capital: 'Paris' },
     ];

     const cityNames = Array.from(countries, ({ capital}) => capital);
     console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']
     ```

     **[⬆ Back to Top](#table-of-contents)**

364. ### How do you empty an array

     You can empty an array quickly by setting the array length to zero.

     ```javascript
     let cities = ['Singapore', 'Delhi', 'London'];
     cities.length = 0; // cities becomes []
     ```

     **[⬆ Back to Top](#table-of-contents)**

365. ### How do you rounding numbers to certain decimals

     You can round numbers to a certain number of decimals using `toFixed` method from native javascript.

     ```javascript
     let pie = 3.141592653;
     pie = pie.toFixed(3); // 3.142
     ```

     **[⬆ Back to Top](#table-of-contents)**

366. ### What is the easiest way to convert an array to an object

     You can convert an array to an object with the same data using spread(...) operator.

     ```javascript
     var fruits = ["banana", "apple", "orange", "watermelon"];
     var fruitsObject = {...fruits};
     console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}
     ```

     **[⬆ Back to Top](#table-of-contents)**

367. ### How do you create an array with some data

     You can create an array with some data or an array with the same values using `fill` method.

     ```javascript
     var newArray = new Array(5).fill("0");
     console.log(newArray); // ["0", "0", "0", "0", "0"]
     ```

     **[⬆ Back to Top](#table-of-contents)**

368. ### What are the placeholders from console object

     Below are the list of placeholders available from console object,
     1. %o — It takes an object,
     2. %s — It takes a string,
     3. %d — It is used for a decimal or integer
     These placeholders can be represented in the console.log as below

     ```javascript
     const user = { "name":"John", "id": 1, "city": "Delhi"};
     console.log("Hello %s, your details %o are available in the object form", "John", user); // Hello John, your details {name: "John", id: 1, city: "Delhi"} are available in object
     ```

     **[⬆ Back to Top](#table-of-contents)**

369. ### Is it possible to add CSS to console messages

     Yes, you can apply CSS styles to console messages similar to html text on the web page.

     ```javascript
     console.log('%c The text has blue color, with large font and red background', 'color: blue; font-size: x-large; background: red');
     ```

     The text will be displayed as below,
     ![Screenshot](images/console-css.png)

     **Note:** All CSS styles can be applied to console messages.

     **[⬆ Back to Top](#table-of-contents)**

370. ### What is the purpose of dir method of console object

     The `console.dir()` is used to display an interactive list of the properties of the specified JavaScript object as JSON.

     ```javascript
     const user = { "name":"John", "id": 1, "city": "Delhi"};
     console.dir(user);
     ```

     The user object displayed in JSON representation
     ![Screenshot](images/console-dir.png)

     **[⬆ Back to Top](#table-of-contents)**

371. ### Is it possible to debug HTML elements in console

     Yes, it is possible to get and debug HTML elements in the console just like inspecting elements.

     ```javascript
     const element = document.getElementsByTagName("body")[0];
     console.log(element);
     ```

     It prints the HTML element in the console,
     
     ![Screenshot](images/console-html.png)

     **[⬆ Back to Top](#table-of-contents)**

372. ### How do you display data in a tabular format using console object

     The `console.table()` is used to display data in the console in a tabular format to visualize complex arrays or objects.

     ```js
     const users = [{ "name":"John", "id": 1, "city": "Delhi"}, { "name":"Max", "id": 2, "city": "London"}, { "name":"Rod", "id": 3, "city": "Paris"} ];
     console.table(users);
     ```

     The data visualized in a table format,
     
     ![Screenshot](images/console-table.png)
     **Not:** Remember that `console.table()` is not supported in IE.

     **[⬆ Back to Top](#table-of-contents)**

373. ### How do you verify that an argument is a Number or not

     The combination of IsNaN and isFinite methods are used to confirm whether an argument is a number or not.

     ```javascript
     function isNumber(n){
         return !isNaN(parseFloat(n)) && isFinite(n);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

374. ### How do you create copy to clipboard button

     You need to select the content(using .select() method) of the input element and execute the copy command with execCommand (i.e, execCommand('copy')). You can also execute other system commands like cut and paste.

     ```javascript
     document.querySelector("#copy-button").onclick = function() {
       // Select the content
       document.querySelector("#copy-input").select();
       // Copy to the clipboard
       document.execCommand('copy');
     };
     ```

     **[⬆ Back to Top](#table-of-contents)**

375. ### What is the shortcut to get timestamp

     You can use `new Date().getTime()` to get the current timestamp. There is an alternative shortcut to get the value.

     ```javascript
     console.log(+new Date());
     console.log(Date.now());
     ```

     **[⬆ Back to Top](#table-of-contents)**

376. ### How do you flattening multi dimensional arrays

     Flattening bi-dimensional arrays is trivial with Spread operator.

     ```javascript
     const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
     const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
     ```

     But you can make it work with multi-dimensional arrays by recursive calls,

     ```javascript
     function flattenMultiArray(arr) {
         const flattened = [].concat(...arr);
         return flattened.some(item => Array.isArray(item)) ? flattenMultiArray(flattened) : flattened;
      }
     const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
     const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
     ```

     **[⬆ Back to Top](#table-of-contents)**

377. ### What is the easiest multi condition checking

     You can use `indexOf` to compare input with multiple values instead of checking each value as one condition.

     ```javascript
     // Verbose approach
     if (input === 'first' || input === 1 || input === 'second' || input === 2) {
       someFunction();
     }
     // Shortcut
     if (['first', 1, 'second', 2].indexOf(input) !== -1) {
       someFunction();
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

378. ### How do you capture browser back button

     The `window.onbeforeunload` method is used to capture browser back button events. This is helpful to warn users about losing the current data.

     ```javascript
      window.onbeforeunload = function() {
         alert("You work will be lost");
      };
     ```

     **[⬆ Back to Top](#table-of-contents)**

379. ### How do you disable right click in the web page

     The right click on the page can be disabled by returning false from the `oncontextmenu` attribute on the body element.

     ```html
     <body oncontextmenu="return false;">
     ```

     **[⬆ Back to Top](#table-of-contents)**

380. ### What are wrapper objects

     Primitive Values like string,number and boolean don't have properties and methods but they are temporarily converted or coerced to an object(Wrapper object) when you try to perform actions on them. For example, if you apply toUpperCase() method on a primitive string value, it does not throw an error but returns uppercase of the string.

     ```javascript
     let name = "john";

     console.log(name.toUpperCase());  // Behind the scenes treated as console.log(new String(name).toUpperCase());
     ```

     i.e, Every primitive except null and undefined have Wrapper Objects and the list of wrapper objects are String,Number,Boolean,Symbol and BigInt.

     **[⬆ Back to Top](#table-of-contents)**

381. ### What is AJAX

     AJAX stands for Asynchronous JavaScript and XML and it is a group of related technologies(HTML, CSS, JavaScript, XMLHttpRequest API etc) used to display data asynchronously. i.e. We can send data to the server and get data from the server without reloading the web page.

     **[⬆ Back to Top](#table-of-contents)**

382. ### What are the different ways to deal with Asynchronous Code

     Below are the list of different ways to deal with Asynchronous code.
     1. Callbacks
     2. Promises
     3. Async/await
     4. Third-party libraries such as async.js,bluebird etc

     **[⬆ Back to Top](#table-of-contents)**

383. ### How to cancel a fetch request

     Until a few days back, One shortcoming of native promises is no direct way to cancel a fetch request. But the new `AbortController` from js specification allows you to use a signal to abort one or multiple fetch calls.
     The basic flow of cancelling a fetch request would be as below,
     1. Create an `AbortController` instance
     2. Get the signal property of an instance and pass the signal as a fetch option for signal
     3. Call the AbortController's abort property to cancel all fetches that use that signal
     For example, let's pass the same signal to multiple fetch calls will cancel all requests with that signal,

     ```javascript
     const controller = new AbortController();
     const { signal } = controller;

     fetch("http://localhost:8000", { signal }).then(response => {
         console.log(`Request 1 is complete!`);
     }).catch(e => {
         if(e.name === "AbortError") {
             // We know it's been canceled!
         }
     });

     fetch("http://localhost:8000", { signal }).then(response => {
         console.log(`Request 2 is complete!`);
     }).catch(e => {
          if(e.name === "AbortError") {
              // We know it's been canceled!
           }
     });

     // Wait 2 seconds to abort both requests
     setTimeout(() => controller.abort(), 2000);
     ```

     **[⬆ Back to Top](#table-of-contents)**

384. ### What is web speech API

     Web speech API is used to enable modern browsers recognize and synthesize speech(i.e, voice data into web apps). This API has been introduced by W3C Community in the year 2012. It has two main parts,
     1. **SpeechRecognition (Asynchronous Speech Recognition or Speech-to-Text):** It provides the ability to recognize voice context from an audio input and respond accordingly. This is accessed by the `SpeechRecognition` interface.
     The below example shows on how to use this API to get text from speech,

     ```javascript
     window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;  // webkitSpeechRecognition for Chrome and SpeechRecognition for FF
     const recognition = new window.SpeechRecognition();
     recognition.onresult = (event) => { // SpeechRecognitionEvent type
       const speechToText = event.results[0][0].transcript;
       console.log(speechToText);
     }
     recognition.start();
     ```

     In this API, browser is going to ask you for permission to use your microphone
     1. **SpeechSynthesis (Text-to-Speech):** It provides the ability to recognize voice context from an audio input and respond. This is accessed by the `SpeechSynthesis` interface.
     For example, the below code is used to get voice/speech from text,

     ```javascript
     if('speechSynthesis' in window){
         var speech = new SpeechSynthesisUtterance('Hello World!');
         speech.lang = 'en-US';
         window.speechSynthesis.speak(speech);
     }
     ```

     The above examples can be tested on chrome(33+) browser's developer console.
     **Note:**  This API is still a working draft and only available in Chrome and Firefox browsers(ofcourse Chrome only implemented the specification)
     
     **[⬆ Back to Top](#table-of-contents)**

385. ### What is minimum timeout throttling

     Both browser and NodeJS javascript environments throttles with a minimum delay that is greater than 0ms. That means even though setting a delay of 0ms will not happen instantaneously.
     **Browsers:** They have a minimum delay of 4ms. This throttle occurs when successive calls are triggered due to callback nesting(certain depth) or after a certain number of successive intervals.
     Note: The older browsers have a minimum delay of 10ms.
     **Nodejs:** They have a minimum delay of 1ms. This throttle happens when the delay is larger than 2147483647 or less than 1.
     The best example to explain this timeout throttling behavior is the order of below code snippet.

     ```javascript
     function runMeFirst() {
         console.log('My script is initialized');
     }
     setTimeout(runMeFirst, 0);
     console.log('Script loaded');
     ```

     and the output would be in

     ```cmd
     Script loaded
     My script is initialized
     ```

     If you don't use `setTimeout`, the order of logs will be sequential.

     ```javascript
     function runMeFirst() {
        console.log('My script is initialized');
     }
     runMeFirst();
     console.log('Script loaded');
     ```

     and the output is,

     ```cmd
     My script is initialized
     Script loaded
     ```

     **[⬆ Back to Top](#table-of-contents)**

386. ### How do you implement zero timeout in modern browsers

     You can't use setTimeout(fn, 0) to execute the code immediately due to minimum delay of greater than 0ms. But you can use window.postMessage() to achieve this behavior.

     **[⬆ Back to Top](#table-of-contents)**

387. ### What are tasks in event loop

     A task is any javascript code/program which is scheduled to be run by the standard mechanisms such as initially starting to run a program, run an event callback, or an interval or timeout being fired. All these tasks are scheduled on a task queue.
     Below are the list of use cases to add tasks to the task queue,
     1. When a new javascript program is executed directly from console or running by the ```<script>``` element, the task will be added to the task queue.
     2. When an event fires, the event callback added to task queue
     3. When a setTimeout or setInterval is reached, the corresponding callback added to task queue

     **[⬆ Back to Top](#table-of-contents)**

388. ### What is microtask

     Microtask is the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty.
     The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc

     **Note:** All of these microtasks are processed in the same turn of the event loop.
     **[⬆ Back to Top](#table-of-contents)**

389. ### What are different event loops

     **[⬆ Back to Top](#table-of-contents)**

390. ### What is the purpose of queueMicrotask

     **[⬆ Back to Top](#table-of-contents)**

391. ### How do you use javascript libraries in typescript file

     It is known that not all JavaScript libraries or frameworks have TypeScript declaration files. But if you still want to use libraries or frameworks in our TypeScript files without getting compilation errors, the only solution is `declare` keyword along with a variable declaration. For example, let's imagine you have a library called `customLibrary` that doesn’t have a TypeScript declaration and have a namespace called `customLibrary` in the global namespace. You can use this library in typescript code as below,

     ```javascript
     declare var customLibrary;
     ```

     In the runtime, typescript will provide the type to the `customLibrary` variable as `any` type. The another alternative without using declare keyword is below

     ```javascript
     var customLibrary: any;
     ```

     **[⬆ Back to Top](#table-of-contents)**

392. ### What are the differences between promises and observables

     Some of the major difference in a tabular form

     | Promises | Observables |
     |---- | ---------
     | Emits only a single value at a time  | Emits multiple values over a period of time(stream of values ranging from 0 to multiple) |
     | Eager in nature; they are going to be called immediately  | Lazy in nature; they require subscription to be invoked |
     | Promise is always asynchronous even though it resolved immediately | Observable can be either synchronous or asynchronous|
     | Doesn't provide any operators | Provides operators such as map, forEach, filter, reduce, retry, and retryWhen etc |
     | Cannot be canceled | Canceled by using unsubscribe() method |

     **[⬆ Back to Top](#table-of-contents)**

393. ### What is heap

     Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime.
     Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

     ![Screenshot](images/heap.png)

     **[⬆ Back to Top](#table-of-contents)**

394. ### What is an event table

     Event Table is a data structure that stores and keeps track of all the events which will be executed asynchronously like after some time interval or after the resolution of some API requests. i.e Whenever you call a setTimeout function or invoke async operation, it is added to the Event Table.
     It doesn't not execute functions on it’s own. The main purpose of the event table is to keep track of events and send them to the Event Queue as shown in the below diagram.

     ![Screenshot](images/event-table.png)

     **[⬆ Back to Top](#table-of-contents)**

395. ### What is a microTask queue

     Microtask Queue is the new queue where all the tasks initiated by promise objects get processed before the callback queue.
     The microtasks queue are processed before the next rendering and painting jobs. But if these microtasks are running for a long time then it leads to visual degradation.

     **[⬆ Back to Top](#table-of-contents)**

396. ### What is the difference between shim and polyfill

     A shim is a library that brings a new API to an older environment, using only the means of that environment.  It isn't necessarily restricted to a web application. For example, es5-shim.js is used to emulate ES5 features on older browsers (mainly pre IE9).
     Whereas polyfill is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.
     In a simple sentence, A polyfill is a shim for a browser API.

     **[⬆ Back to Top](#table-of-contents)**

397. ### How do you detect primitive or non primitive value type

     In JavaScript, primitive types include boolean, string, number, BigInt, null, Symbol and undefined. Whereas non-primitive types include the Objects. But you can easily identify them with the below function,

     ```javascript
     var myPrimitive = 30;
     var myNonPrimitive = {};
     function isPrimitive(val) {
         return Object(val) !== val;
     }

     isPrimitive(myPrimitive);
     isPrimitive(myNonPrimitive);
     ```

     If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. But If the value is a non-primitive data type (an object), the Object constructor will give the same object.

     **[⬆ Back to Top](#table-of-contents)**

398. ### What is babel

     Babel is a JavaScript transpiler to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Some of the main features are listed below,
     1. Transform syntax
     2. Polyfill features that are missing in your target environment (using @babel/polyfill)
     3. Source code transformations (or codemods)

     **[⬆ Back to Top](#table-of-contents)**

399. ### Is Node.js completely single threaded

     Node is a single thread, but some of the functions included in the Node.js standard library(e.g, fs module functions) are not single threaded. i.e, Their logic runs outside of the Node.js single thread to improve the speed and performance of a program.

     **[⬆ Back to Top](#table-of-contents)**

400. ### What are the common use cases of observables

     Some of the most common use cases of observables are web sockets with push notifications, user input changes, repeating intervals, etc

     **[⬆ Back to Top](#table-of-contents)**

401. ### What is RxJS

     RxJS (Reactive Extensions for JavaScript) is a library for implementing reactive programming using observables that makes it easier to compose asynchronous or callback-based code. It also provides utility functions for creating and working with observables.

     **[⬆ Back to Top](#table-of-contents)**

402. ### What is the difference between Function constructor and function declaration

     The functions which are created with `Function constructor` do not create closures to their creation contexts but they are always created in the global scope. i.e, the function can access its own local variables and global scope variables only. Whereas function declarations can access outer function variables(closures) too.

     Let's see this difference with an example,

     **Function Constructor:**

     ```javascript
     var a = 100;
     function createFunction() {
         var a = 200;
         return new Function('return a;');
     }
     console.log(createFunction()()); // 100
     ```

     **Function declaration:**

     ```javascript
     var a = 100;
     function createFunction() {
         var a = 200;
         return function func() {
             return a;
         }
     }
     console.log(createFunction()()); // 200
     ```

     **[⬆ Back to Top](#table-of-contents)**

403. ### What is a Short circuit condition

     Short circuit conditions are meant for condensed way of writing simple if statements. Let's demonstrate the scenario using an example. If you would like to login to a portal with an authentication condition, the expression would be as below,

     ```javascript
     if (authenticate) {
        loginToPorta();
     }
     ```

     Since the javascript logical operators evaluated from left to right, the above expression can be simplified using && logical operator

     ```javascript
     authenticate && loginToPorta();
     ```

     **[⬆ Back to Top](#table-of-contents)**

404. ### What is the easiest way to resize an array

     The length property of an array is useful to resize or empty an array quickly. Let's apply length property on number array to resize the number of elements from 5 to 2,

     ```javascript
     var array = [1, 2, 3, 4, 5];
     console.log(array.length); // 5

     array.length = 2;
     console.log(array.length); // 2
     console.log(array); // [1,2]
     ```

     and the array can be emptied too

     ```javascript
     var array = [1, 2, 3, 4, 5];
     array.length = 0;
     console.log(array.length); // 0
     console.log(array); // []
     ```

     **[⬆ Back to Top](#table-of-contents)**

405. ### What is an observable

     An Observable is basically a function that can return a stream of values either synchronously or asynchronously to an observer over time. The consumer can get the value by calling `subscribe()` method.
     Let's look at a simple example of an Observable

     ```javascript
     import { Observable } from 'rxjs';

     const observable = new Observable(observer => {
       setTimeout(() => {
         observer.next('Message from a Observable!');
       }, 3000);
     });

     observable.subscribe(value => console.log(value));
     ```

     ![Screenshot](images/observables.png)

     **Note:** Observables are not part of the JavaScript language yet but they are being proposed to be added to the language

     **[⬆ Back to Top](#table-of-contents)**

406. ### What is the difference between function and class declarations

     The main difference between function declarations and class declarations is `hoisting`. The function declarations are hoisted but not class declarations.

     **Classes:**

     ```javascript
     const user = new User(); // ReferenceError

     class User {}
     ```

     **Constructor Function:**

     ```javascript
      const user = new User(); // No error

      function User() {
      }
     ```

     **[⬆ Back to Top](#table-of-contents)**

407. ### What is an async function

     An async function is a function declared with the `async` keyword which enables asynchronous, promise-based behavior to be written in a cleaner style by avoiding promise chains. These functions can contain zero or more `await` expressions.

     Let's take a below async function example,

     ```javascript
     async function logger() {

       let data = await fetch('http://someapi.com/users'); // pause until fetch returns
       console.log(data)
     }
     logger();
     ```

     It is basically syntax sugar over ES2015 promises and generators.

     **[⬆ Back to Top](#table-of-contents)**

408. ### How do you prevent promises swallowing errors

     While using asynchronous code, JavaScript’s ES6 promises can make your life a lot easier without having callback pyramids and error handling on every second line. But Promises have some pitfalls and the biggest one is swallowing errors by default.

     Let's say you expect to print an error to the console for all the below cases,

      ```javascript
      Promise.resolve('promised value').then(function() {
            throw new Error('error');
      });

      Promise.reject('error value').catch(function() {
            throw new Error('error');
      });

      new Promise(function(resolve, reject) {
            throw new Error('error');
      });
      ```

      But there are many modern JavaScript environments that won't print any errors. You can fix this problem in different ways,

     1. **Add catch block at the end of each chain:** You can add catch block to the end of each of your promise chains

         ```javascript
         Promise.resolve('promised value').then(function() {
             throw new Error('error');
         }).catch(function(error) {
           console.error(error.stack);
         });
          ```

        But it is quite difficult to type for each promise chain and verbose too.

     2. **Add done method:** You can replace first solution's then and catch blocks with done method

         ```javascript
         Promise.resolve('promised value').done(function() {
             throw new Error('error');
         });
         ```

        Let's say you want to fetch data using HTTP and later perform processing on the resulting data asynchronously. You can write `done` block as below,

         ```javascript
         getDataFromHttp()
           .then(function(result) {
             return processDataAsync(result);
           })
           .done(function(processed) {
             displayData(processed);
           });
         ```

         In future, if the processing library API changed to synchronous then you can remove `done` block as below,

         ```javascript
          getDataFromHttp()
            .then(function(result) {
              return displayData(processDataAsync(result));
            })
         ```

         and then you forgot to add `done` block to `then` block leads to silent errors.

     3. **Extend ES6 Promises by Bluebird:**
         Bluebird extends the ES6 Promises API to avoid the issue in the second solution. This library has a “default” onRejection handler which will print all errors from rejected Promises to stderr. After installation, you can process unhandled rejections

         ```javascript
         Promise.onPossiblyUnhandledRejection(function(error){
             throw error;
         });
         ```

         and discard a rejection, just handle it with an empty catch

         ```javascript
         Promise.reject('error value').catch(function() {});
         ```

     **[⬆ Back to Top](#table-of-contents)**

409. ### What is deno

     Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 JavaScript engine and the Rust programming language.

     **[⬆ Back to Top](#table-of-contents)**

410. ### How do you make an object iterable in javascript

     By default, plain objects are not iterable. But you can make the object iterable by defining a `Symbol.iterator` property on it.

     Let's demonstrate this with an example,

     ```javascript
     const collection = {
       one: 1,
       two: 2,
       three: 3,
       [Symbol.iterator]() {
         const values = Object.keys(this);
         let i = 0;
         return {
           next: () => {
             return {
               value: this[values[i++]],
               done: i > values.length
             }
           }
         };
       }
     };

     const iterator = collection[Symbol.iterator]();

     console.log(iterator.next());    // → {value: 1, done: false}
     console.log(iterator.next());    // → {value: 2, done: false}
     console.log(iterator.next());    // → {value: 3, done: false}
     console.log(iterator.next());    // → {value: undefined, done: true}
     ```

     The above process can be simplified using a generator function,

     ```javascript
      const collection = {
        one: 1,
        two: 2,
        three: 3,
        [Symbol.iterator]: function * () {
          for (let key in this) {
            yield this[key];
          }
        }
      };
      const iterator = collection[Symbol.iterator]();
      console.log(iterator.next());    // {value: 1, done: false}
      console.log(iterator.next());    // {value: 2, done: false}
      console.log(iterator.next());    // {value: 3, done: false}
      console.log(iterator.next());    // {value: undefined, done: true}
     ```

     **[⬆ Back to Top](#table-of-contents)**

411. ### What is a Proper Tail Call

     First, we should know about tail call before talking about "Proper Tail Call". A tail call is a subroutine or function call performed as the final action of a calling function. Whereas **Proper tail call(PTC)** is a technique where the program or code will not create additional stack frames for a recursion when the function call is a tail call.

     For example, the below classic or head recursion of factorial function relies on stack for each step. Each step need to be processed upto `n * factorial(n - 1)`

     ```javascript
     function factorial(n) {
       if (n === 0) {
         return 1
       }
       return n * factorial(n - 1)
     }
     console.log(factorial(5)); //120
     ```

     But if you use Tail recursion functions, they keep passing all the necessary data it needs down the recursion without relying on the stack.

     ```javascript
     function factorial(n, acc = 1) {
       if (n === 0) {
         return acc
       }
       return factorial(n - 1, n * acc)
     }
     console.log(factorial(5)); //120
     ```

     The above pattern returns the same output as the first one. But the accumulator keeps track of total as an argument without using stack memory on recursive calls.

     **[⬆ Back to Top](#table-of-contents)**

412. ### How do you check an object is a promise or not

      If you don't know if a value is a promise or not, wrapping the value as `Promise.resolve(value)` which returns a promise

      ```javascript
         function isPromise(object){
            if(Promise && Promise.resolve){
            return Promise.resolve(object) == object;
            }else{
            throw "Promise not supported in your environment"
            }
         }

         var i = 1;
         var promise = new Promise(function(resolve,reject){
            resolve()
         });

         console.log(isPromise(i)); // false
         console.log(isPromise(p)); // true
      ```

      Another way is to check for `.then()` handler type

      ```javascript
      function isPromise(value) {
         return Boolean(value && typeof value.then === 'function');
      }
      var i = 1;
      var promise = new Promise(function(resolve,reject){
         resolve()
      });

      console.log(isPromise(i)) // false
      console.log(isPromise(promise)); // true
      ```

      **[⬆ Back to Top](#table-of-contents)**

413. ### How to detect if a function is called as constructor

      You can use `new.target` pseudo-property to detect whether a function was called as a constructor(using the new operator) or as a regular function call.

      1. If a constructor or function invoked using the new operator, new.target returns a reference to the constructor or function.
      2. For function calls, new.target is undefined.

      ```javascript
      function Myfunc() {
         if (new.target) {
            console.log('called with new');
         } else {
            console.log('not called with new');
         }
      }

      new Myfunc(); // called with new
      Myfunc(); // not called with new
      Myfunc.call({}); not called with new
      ```

     **[⬆ Back to Top](#table-of-contents)**

414. ### What are the differences between arguments object and rest parameter

     There are three main differences between arguments object and rest parameters

     1. The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
     2. The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.
     3. The rest parameters are only the ones that haven’t been given a separate name, while  the arguments object contains all arguments passed to the function

     **[⬆ Back to Top](#table-of-contents)**

415. ### What are the differences between spread operator and rest parameter

     Rest parameter collects all remaining elements into an array. Whereas Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. i.e, Rest parameter is opposite to the spread operator.

     **[⬆ Back to Top](#table-of-contents)**

416. ### What are the different kinds of generators

     There are five kinds of generators,

     1. **Generator function declaration:**

         ```javascript
          function* myGenFunc() {
               yield 1;
               yield 2;
               yield 3;
          }
          const genObj = myGenFunc();
         ```

     2. **Generator function expressions:**

        ```javascript
        const myGenFunc = function* () {
               yield 1;
               yield 2;
               yield 3;
        };
        const genObj = myGenFunc();
        ```

     3. **Generator method definitions in object literals:**

        ```javascript
         const myObj = {
             * myGeneratorMethod() {
                yield 1;
                yield 2;
                yield 3;
             }
         };
         const genObj = myObj.myGeneratorMethod();
        ```

     4. **Generator method definitions in class:**

        ```javascript
          class MyClass {
             * myGeneratorMethod() {
                yield 1;
                yield 2;
                yield 3;
             }
          }
          const myObject = new MyClass();
          const genObj = myObject.myGeneratorMethod();
        ```

     5. **Generator as a computed property:**

        ```javascript
        const SomeObj = {
          *[Symbol.iterator] () {
            yield 1;
            yield 2;
            yield 3;
          }
        }

        console.log(Array.from(SomeObj)); // [ 1, 2, 3 ]
        ```

     **[⬆ Back to Top](#table-of-contents)**

417. ### What are the built-in iterables

     Below are the list of built-in iterables in javascript,

     1. Arrays and TypedArrays
     2. Strings: Iterate over each character or Unicode code-points
     3. Maps: iterate over its key-value pairs
     4. Sets: iterates over their elements
     5. arguments: An array-like special variable in functions
     6. DOM collection such as NodeList

     **[⬆ Back to Top](#table-of-contents)**

418. ### What are the differences between for...of and for...in statements

     Both for...in and for...of statements iterate over js data structures. The only difference is over what they iterate:

     1. for..in iterates over all enumerable property keys of an object
     2. for..of iterates over the values of an iterable object.

     Let's explain this difference with an example,

     ```javascript
     let arr = ['a', 'b', 'c'];

     arr.newProp = 'newVlue';

     // key are the property keys
     for (let key in arr) {
       console.log(key);
     }

     // value are the property values
     for (let value of arr) {
       console.log(value);
     }
     ```

     Since for..in loop iterates over the keys of the object, the first loop logs 0, 1, 2 and newProp while iterating over the array object. The for..of loop iterates over the values of a arr data structure and logs  a, b, c in the console.

     **[⬆ Back to Top](#table-of-contents)**

419. ### How do you define instance and non-instance properties

     The Instance properties must be defined inside of class methods. For example, name and age properties defined insider constructor as below,

     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
     }
     ```

     But Static(class) and prototype data properties must be defined outside of the ClassBody declaration. Let's assign the age value for Person class as below,

     ```javascript
     Person.staticAge = 30;
     Person.prototype.prototypeAge = 40;
     ```

     **[⬆ Back to Top](#table-of-contents)**

420. ### What is the difference between isNaN and Number.isNaN?

     1. **isNaN**: The global function `isNaN` converts the argument to a Number and returns true if the resulting value is NaN.
     2. **Number.isNaN**: This method does not convert the argument. But it returns true when the type is a Number and value is NaN.

     Let's see the difference with an example,

     ```javascript
     isNaN(‘hello’);   // true
     Number.isNaN('hello'); // false
     ```
     
     **[⬆ Back to Top](#table-of-contents)**
     
421. ### How to invoke an IIFE without any extra brackets?
     Immediately Invoked Function Expressions(IIFE) requires a pair of parenthesis to wrap the function which contains set of statements.
     ```js
     (function(dt) { 
        console.log(dt.toLocaleTimeString()); 
      })(new Date()); 
     ```
     Since both IIFE and void operator discard the result of an expression, you can avoid the extra brackets using `void operator` for IIFE  as below,
     ```js
      void function(dt) { 
        console.log(dt.toLocaleTimeString()); 
      }(new Date()); 
     ```
     
     **[⬆ Back to Top](#table-of-contents)**

422. ### Is that possible to use expressions in switch cases?
     You might have seen expressions used in switch condition but it is also possible to use for switch cases by assigning true value for the switch condition. Let's see the weather condition based on temparature as an example,
     ```js
     const weather = function getWeather(temp) {
        switch(true) {
            case temp < 0: return 'freezing';
            case temp < 10: return 'cold';
            case temp < 24: return 'cool';
            default: return 'unknown';
        }
        }(10);
     ```
     
     **[⬆ Back to Top](#table-of-contents)**
         
423. ### What is the easiest way to ignore promise errors?    
     The easiest and safest way to ignore promise errors is void that error. This approach is ESLint friendly too.
     
     ```js
     await promise.catch(e => void e);
     ```
     **[⬆ Back to Top](#table-of-contents)**
     
424. ### How do style the console output using CSS?

     You can add CSS styling to the console output using the CSS format content specifier %c. The console string message can be appended after the specifier and CSS style in another argument. Let's print the red the color text using console.log and CSS specifier as below,
     ```js
     console.log("%cThis is a red text", "color:red");
     ```
    
     It is also possible to add more styles for the content. For example, the font-size can be modified for the above text
     ```js
     console.log("%cThis is a red text with bigger font", "color:red; font-size:20px");
     ```
     **[⬆ Back to Top](#table-of-contents)**
     
425. ### What is nullish coalescing operator (??)?

     It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.

     ```js
     console.log(null ?? true); // true
     console.log(false ?? true); // false
     console.log(undefined ?? true); // true
     ```

     **[⬆ Back to Top](#table-of-contents)**

426. ### How do you group and nest console output?

     The `console.group()` can be used to group related log messages to be able to easily read the logs and use console.groupEnd()to close the group. Along with this, you can also nest groups which allows to output message in hierarchical manner.

     For example, if you’re logging a user’s details:

     ```js
     console.group('User Details');
     console.log('name: Sudheer Jonna');
     console.log('job: Software Developer');

     // Nested Group
     console.group('Address');
     console.log('Street: Commonwealth');
     console.log('City: Los Angeles');
     console.log('State: California');

     console.groupEnd();
     ```
     You can also use `console.groupCollapsed()` instead of `console.group()` if you want the groups to be collapsed by default.
         
     **[⬆ Back to Top](#table-of-contents)**

427. ### What is the difference between dense and sparse arrays?

     An array contians items at each index starting from first(0) to last(array.length - 1) is called as Dense array. Whereas if at least one item is missing at any index, the array is called as sparse.

     Let's see the below two kind of arrays,

     ```js
     const avengers = ['Ironman', 'Hulk', 'CaptainAmerica'];
     console.log(avengers[0]); // 'Ironman'
     console.log(avengers[1]); // 'Hulk'
     console.log(avengers[2]); // 'CaptainAmerica'
     console.log(avengers.length); // 3

     const justiceLeague = ['Superman', 'Aquaman', ,'Batman'];
     console.log(justiceLeague[0]); // 'Superman'
     console.log(justiceLeague[1]); // 'Aquaman'
     console.log(justiceLeague[2]); // undefined
     console.log(justiceLeague[3]); // 'Batman'
     console.log(justiceLeague.length); // 4
     ```

     **[⬆ Back to Top](#table-of-contents)**

428. ### What are the different ways to create sparse arrays?

     There are 4 different ways to create sparse arrays in JavaScript

     1. **Array literal:** Omit a value when using the array literal 
          ```js
          const justiceLeague = ['Superman', 'Aquaman', ,'Batman'];
          console.log(justiceLeague); // ['Superman', 'Aquaman', empty ,'Batman']
          ```
     2. **Array() constructor:** Invoking Array(length) or new Array(length)
          ```js
          const array = Array(3);
          console.log(array); // [empty, empty ,empty]
          ```
     3. **Delete operator:** Using delete array[index] operator on the array
          ```js
          const justiceLeague = ['Superman', 'Aquaman', 'Batman'];
          delete justiceLeague[1];
          console.log(justiceLeague); // ['Superman', empty, ,'Batman']
          ```
     4. **Increase length property:** Increasing length property of an array
          ```js
          const justiceLeague = ['Superman', 'Aquaman', 'Batman'];
          justiceLeague.length = 5;
          console.log(justiceLeague); // ['Superman', 'Aquaman', 'Batman', empty, empty]
          ```
     **[⬆ Back to Top](#table-of-contents)**

### Coding Exercise

#### 1. What is the output of below code

```javascript
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
```

- 1: Undefined
- 2: ReferenceError
- 3: null
- 4: {model: "Honda", color: "white", year: "2010", country: "UK"}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

   The function declarations are hoisted similar to any variables. So the placement for `Vehicle` function declaration doesn't make any difference.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 2. What is the output of below code

```javascript
function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);
```

- 1: 1, undefined and undefined
- 2: ReferenceError: X is not defined
- 3: 1, undefined and number
- 4: 1, number and number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Of course the return value of `foo()` is 1 due to the increment operator. But the statement `let x = y = 0` declares a local variable x. Whereas y declared as a global variable accidentally. This statement is equivalent to,

```javascript
 let x;
 window.y = 0;
 x = window.y;
```

Since the block scoped variable x is undefined outside of the function, the type will be undefined too. Whereas the global variable `y` is available outside the function, the value is 0 and type is number.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 3. What is the output of below code

```javascript
function main(){
   console.log('A');
   setTimeout(
      function print(){ console.log('B'); }
   ,0);
   console.log('C');
}
main();
```

- 1: A, B and C
- 2: B, A and C
- 3: A and C
- 4: A, C and B

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The statements order is based on the event loop mechanism. The order of statements follows the below order,

1. At first, the main function is pushed to the stack.
2. Then the browser pushes the fist statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.
3. But `setTimeout` statement moved to Browser API to apply the delay for callback.
4. In the meantime, C's console.log added to stack, executed and popped out.
5. The callback of `setTimeout` moved from Browser API to message queue.
6. The `main` function popped out from stack because there are no statements to execute
7. The callback moved from message queue to the stack since the stack is empty.
8. The console.log for B is added to the stack and display on the console.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 4. What is the output of below equality check

```javascript
console.log(0.1 + 0.2 === 0.3);
```

- 1: false
- 2: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

This is due to the float point math problem. Since the floating point numbers are encoded in binary format, the addition operations on them lead to rounding errors. Hence, the comparison of floating points doesn't give expected results.
You can find more details about the explanation here [0.30000000000000004.com/](https://0.30000000000000004.com/)

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 5. What is the output of below code

```javascript
var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y);
```

- 1: 1function
- 2: 1object
- 3: ReferenceError
- 4: 1undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The main points in the above code snippets are,

1. You can see function expression instead function declaration inside if statement. So it always returns true.
2. Since it is not declared(or assigned) anywhere, f is undefined and typeof f is undefined too.

In other words, it is same as

```javascript
var y = 1;
  if ('foo') {
    y += typeof f;
  }
  console.log(y);
```

**Note:** It returns 1object for MS Edge browser
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 6. What is the output of below code

```javascript
function foo() {
  return
  {
    message: "Hello World"
  };
}
console.log(foo());
```

- 1: Hello World
- 2: Object {message: "Hello World"}
- 3: Undefined
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

This is a semicolon issue. Normally semicolons are optional in JavaScript. So if there are any statements(in this case, return) missing semicolon, it is automatically inserted immediately. Hence, the function returned as undefined.

Whereas if the opening curly brace is along with the return keyword then the function is going to be returned as expected.

```javascript
function foo() {
  return {
    message: "Hello World"
  };
}
console.log(foo()); // {message: "Hello World"}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 7. What is the output of below code

```javascript
var myChars = ['a', 'b', 'c', 'd']
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);
```

- 1: [empty, 'b', 'c', 'd'], empty, 3
- 2: [null, 'b', 'c', 'd'], empty, 3
- 3: [empty, 'b', 'c', 'd'], undefined, 4
- 4: [null, 'b', 'c', 'd'], undefined, 4

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The `delete` operator will delete the object property but it will not reindex the array or change its length. So the number or elements or length of the array won't be changed.
If you try to print myChars then you can observe that it doesn't set an undefined value, rather the property is removed from the array. The newer versions of Chrome use `empty` instead of `undefined` to make the difference a bit clearer.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 8. What is the output of below code in latest Chrome

```javascript
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [,,,];
console.log(array3);
```

- 1: [undefined × 3], [undefined × 2, 100], [undefined × 3]
- 2: [empty × 3], [empty × 2, 100], [empty × 3]
- 3: [null × 3], [null × 2, 100], [null × 3]
- 4: [], [100], []

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The latest chrome versions display `sparse array`(they are filled with holes) using this empty x n notation. Whereas the older versions have undefined x n notation.
**Note:** The latest version of FF displays `n empty slots` notation.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 9. What is the output of below code

```javascript
const obj = {
  prop1: function() { return 0 },
  prop2() { return 1 },
  ['prop' + 3]() { return 2 }
}

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
```

- 1: 0, 1, 2
- 2: 0, { return 1 }, 2
- 3: 0, { return 1 }, { return 2 }
- 4: 0, 1, undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

ES6 provides method definitions and property shorthands for objects. So both prop2 and prop3 are treated as regular function values.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 10. What is the output of below code

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

- 1: true, true
- 2: true, false
- 3: SyntaxError, SyntaxError,
- 4: false, false

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right.
The first statement follows the below order,

1. console.log(1 < 2 < 3);
2. console.log(true < 3);
3. console.log(1 < 3); // True converted as `1` during comparison
4. True

Whereas the second statement follows the below order,

1. console.log(3 > 2 > 1);
2. console.log(true > 1);
3. console.log(1 > 1); // False converted as `0` during comparison
4. False

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 11. What is the output of below code in non-strict mode

```javascript
function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);
```

- 1: 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters.
The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.

**Note:** In strict mode, duplicate parameters will throw a Syntax Error.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 12. What is the output of below code

```javascript
const printNumbersArrow = (first, second, first) => {
  console.log(first, second, first);
}
printNumbersArrow(1, 2, 3);
```

- 1: 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Unlike regular functions, the arrow functions doesn't not allow duplicate parameters in either strict or non-strict mode. So you can see `SyntaxError` in the console.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 13. What is the output of below code

```javascript
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));
```

- 1: ReferenceError: arguments is not defined
- 2: 3
- 3: undefined
- 4: null

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Arrow functions do not have an `arguments, super, this, or new.target` bindings. So any reference to `arguments` variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.

Where as the normal function provides the number of arguments passed to the function

```javascript
const func = function () {
                    return arguments.length;
                    }
console.log(func(1, 2, 3));
```

But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

```javascript
const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 14. What is the output of below code

```javascript
console.log( String.prototype.trimLeft.name === 'trimLeft' );
console.log( String.prototype.trimLeft.name === 'trimStart' );
```

- 1: True, False
- 2: False, True

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

In order to be consistent with functions like `String.prototype.padStart`, the standard method name for trimming the whitespaces is considered as `trimStart`. Due to web web compatibility reasons, the old method name 'trimLeft' still acts as an alias for 'trimStart'. Hence, the prototype for 'trimLeft' is always 'trimStart'
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 15. What is the output of below code

```javascript
console.log(Math.max());
```

- 1: undefined
- 2: Infinity
- 3: 0
- 4: -Infinity

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

-Infinity is the initial comparant because almost every other value is bigger. So when no arguments are provided, -Infinity is going to be returned.
**Note:** Zero number of arguments is a valid case.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 16. What is the output of below code

```javascript
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);
```

- 1: True, True
- 2: True, False
- 3: False, False
- 4: False, True

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
As per the comparison algorithm in the ECMAScript specification(ECMA-262), the above expression converted into JS as below
```javascript
10 === Number([10].valueOf().toString()) // 10
```
So it doesn't matter about number brackets([]) around the number, it is always converted to a number in the expression.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 17. What is the output of below code

```javascript
console.log(10 + '10');
console.log(10 - '10');
```

- 1: 20, 0
- 2: 1010, 0
- 3: 1010, 10-10
- 4: NaN, NaN

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The concatenation operator(+) is applicable for both number and string types. So if any operand is string type then both operands concatenated as strings. Whereas subtract(-) operator tries to convert the operands as number type.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 18. What is the output of below code

```javascript
console.log([0] == false);
if([0]) {
console.log("I'm True");
} else {
console.log("I'm False");
}

```

- 1: True, I'm True
- 2: True, I'm False
- 3: False, I'm True
- 4: False, I'm False

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

In comparison operators, the expression `[0]` converted to Number([0].valueOf().toString()) which is resolved to false. Whereas `[0]` just becomes a truthy value without any conversion because there is no comparison operator.
</p>
</details>

#### 19. What is the output of below code

```javascript
console.log([1, 2] + [3, 4]);
```

- 1: [1,2,3,4]
- 2: [1,2][3,4]
- 3: SyntaxError
- 4: 1,23,4

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 20. What is the output of below code

```javascript
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set('Firefox');
console.log(browser);
```

- 1: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
- 2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
- 3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
- 4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Since `Set` object is a collection of unique values, it won't allow duplicate values in the collection. At the same time, it is case sensitive data structure.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 21. What is the output of below code

```javascript
console.log(NaN === NaN);
```

- 1: True
- 2: False

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

JavaScript follows IEEE 754 spec standards. As per this spec, NaNs are never equal for floating-point numbers.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 22. What is the output of below code

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));
```

- 1: 4
- 2: NaN
- 3: SyntaxError
- 4: -1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The `indexOf` uses strict equality operator(===) internally and `NaN === NaN` evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always.
But you can use `Array.prototype.findIndex` method to find out the index of NaN in an array or You can use `Array.prototype.includes` to check if NaN is present in an array or not.

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 23. What is the output of below code

```javascript
let [a, ...b,] = [1, 2, 3, 4, 5];
console.log(a, b);
```

- 1: 1, [2, 3, 4, 5]
- 2: 1, {2, 3, 4, 5}
- 3: SyntaxError
- 4: 1, [2, 3, 4]

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

When using rest parameters, trailing commas are not allowed and will throw a SyntaxError.
If you remove the trailing comma then it displays 1st answer

```javascript
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b); // 1, [2, 3, 4, 5]
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 25. What is the output of below code

```javascript
async function func() {
   return 10;
}
console.log(func());
```

- 1: Promise {\<fulfilled\>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {\<rejected\>: 10}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Async functions always return a promise. But even if the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. The above async function is equivalent to below expression,

```javascript
function func() {
   return Promise.resolve(10)
}
```
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 26. What is the output of below code

```javascript
async function func() {
   await 10;
}
console.log(func());
```

- 1: Promise {\<fulfilled\>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {\<resolved\>: undefined}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The await expression returns value 10 with promise resolution and the code after each await expression can be treated as existing in a `.then` callback. In this case, there is no return expression at the end of the function. Hence, the default return value of `undefined` is returned as the resolution of the promise.  The above async function is equivalent to below expression,

```javascript
function func() {
   return Promise.resolve(10).then(() => undefined)
}
```
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 27. What is the output of below code

```javascript
function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function processArray(array) {
  array.forEach(item => {
    await delayedLog(item);
  })
}

processArray([1, 2, 3, 4]);
```

- 1: SyntaxError
- 2: 1, 2, 3, 4
- 3: 4, 4, 4, 4
- 4: 4, 3, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Even though “processArray” is an async function, the anonymous function that we use for `forEach` is synchronous. If you use await inside a synchronous function then it throws a syntax error.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 28. What is the output of below code

```javascript
function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log('Process completed!');
}
process([1, 2, 3, 5]);
```

- 1: 1 2 3 5 and Process completed!
- 2: 5 5 5 5 and Process completed!
- 3: Process completed! and 5 5 5 5
- 4: Process completed! and 1 2 3 5

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The forEach method will not wait until all items are finished but it just runs the tasks and goes next. Hence, the last statement is displayed first followed by a sequence of promise resolutions.

But you control the array sequence using for..of loop,

```javascript
async function processArray(array) {
  for (const item of array) {
    await delayedLog(item);
  }
  console.log('Process completed!');
}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 29. What is the output of below code

```javascript
var set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);;
console.log(set);
```

- 1: Set(4) {"+0", "-0", NaN, undefined}
- 2: Set(3) {"+0", NaN, undefined}
- 3: Set(5) {"+0", "-0", NaN, undefined, NaN}
- 4: Set(4) {"+0", NaN, undefined, NaN}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Set has few exceptions from equality check,

1. All NaN values are equal
2. Both +0 and -0 considered as different values

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 30. What is the output of below code

```javascript
const sym1 = Symbol('one');
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');

cnsooe.log(sym1 === sym2, sym3 === sym4);
```

- 1: true, true
- 2: true, false
- 3: false, true
- 4: false, false

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Symbol follows below conventions,

1. Every symbol value returned from Symbol() is unique irrespective of the optional string.
2. `Symbol.for()` function creates a symbol in a global symbol registry list. But it doesn't  necessarily create a new symbol on every call, it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.

**Note:** The symbol description is just useful for debugging purposes.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 31. What is the output of below code

```javascript
const sym1 = new Symbol('one');
console.log(sym1);
```

- 1: SyntaxError
- 2: one
- 3: Symbol('one')
- 4: Symbol

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

`Symbol` is a just a standard function and not an object constructor(unlike other primitives new Boolean, new String and new Number). So if you try to call it with the new operator will result in a TypeError
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 32. What is the output of below code

```javascript
let myNumber = 100;
let myString = '100';

if (!typeof myNumber === "string") {
   console.log("It is not a string!");
} else {
    console.log("It is a string!");
}

if (!typeof myString === "number"){
   console.log("It is not a number!")
} else {
   console.log("It is a number!");
}
```

- 1: SyntaxError
- 2: It is not a string!, It is not a number!
- 3: It is not a string!, It is a number!
- 4: It is a string!, It is a number!

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The return value of `typeof myNumber (OR) typeof myString` is always the truthy value (either "number" or "string"). Since ! operator converts the value to a boolean value, the value of both `!typeof myNumber or !typeof myString` is always false. Hence the if condition fails and control goes to else block.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 33. What is the output of below code

```javascript
console.log(JSON.stringify({ myArray: ['one', undefined, function(){}, Symbol('')] }));
console.log(JSON.stringify({ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]));
```

- 1: {"myArray":['one', undefined, {}, Symbol]}, {}
- 2: {"myArray":['one', null,null,null]}, {}
- 3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
- 4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The symbols has below constraints,

1. The undefined, Functions, and Symbols are not valid JSON values. So those values are either omitted (in an object) or changed to null (in an array). Hence, it returns null values for the value array.
2. All Symbol-keyed properties will be completely ignored. Hence it returns an empty object({}).

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 34. What is the output of below code

```javascript
class A {
  constructor() {
    console.log(new.target.name)
  }
}

class B extends A { constructor() { super() } }

new A();
new B();
```

- 1: A, A
- 2: A, B

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Using constructors, `new.target` refers to the constructor (points to the class definition of class which is initialized) that was directly invoked by new. This also applies to the case if the constructor is in a parent class and was delegated from a child constructor.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 35. What is the output of below code

```javascript
const [x, ...y,] = [1, 2, 3, 4];
console.log(x, y);
```

- 1: 1, [2, 3, 4]
- 2: 1, [2, 3]
- 3: 1, [2]
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

It throws a syntax error because the rest element should not have a trailing comma. You should always consider using a rest operator as the last element.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 36. What is the output of below code

```javascript
const {a: x = 10, b: y = 20} = {a: 30};

console.log(x);
console.log(y);
```

- 1: 30, 20
- 2: 10, 20
- 3: 10, undefined
- 4: 30, undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The object property follows below rules,

1. The object properties can be retrieved and assigned to a variable with a different name
2. The property assigned a default value when the retrieved value is `undefined`

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 37. What is the output of below code

```javascript
function area({length = 10, width = 20}) {
  console.log(length*width);
}

area();
```

- 1: 200
- 2: Error
- 3: undefined
- 4: 0

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error `Error: Cannot read property 'length' of undefined` as mentioned above.

You can avoid the error with either of the below changes,

1. **Pass at least an empty object:**

```javascript
function area({length = 10, width = 20}) {
  console.log(length*width);
}

area({});
```

2. **Assign default empty object:**

```javascript
function area({length = 10, width = 20} = {}) {
  console.log(length*width);
}

area();
```

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 38. What is the output of below code

```javascript
const props = [
  { id: 1, name: 'John'},
  { id: 2, name: 'Jack'},
  { id: 3, name: 'Tom'}
];

const [,, { name }] = props;
console.log(name);
```

- 1: Tom
- 2: Error
- 3: undefined
- 4: John

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

It is possible to combine Array and Object destructuring. In this case, the third element in the array props accessed first followed by name property in the object.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 39. What is the output of below code

```javascript
function checkType(num = 1) {
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType('');
checkType(null);
```

- 1: number, undefined, string, object
- 2: undefined, undefined, string, object
- 3: number, number, string, object
- 4: number, number, number, number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

If the function argument is set implicitly(not passing argument) or explicitly to undefined, the value of the argument is the default parameter. Whereas for other falsy values('' or null), the value of the argument is passed as a parameter.

Hence, the result of function calls categorized as below,

1. The first two function calls logs number type since the type of default value is number
2. The type of '' and null values are string and object type respectively.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 40. What is the output of below code

```javascript
function add(item, items = []) {
  items.push(item);
  return items;
}

console.log(add('Orange'));
console.log(add('Apple'));
```

- 1: ['Orange'], ['Orange', 'Apple']
- 2: ['Orange'], ['Apple']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Since the default argument is evaluated at call time, a new object is created each time the function is called. So in this case, the new array is created and an element pushed to the default empty array.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 41. What is the output of below code

```javascript
function greet(greeting, name, message = greeting + ' ' + name) {
  console.log([greeting, name, message]);
}

greet('Hello', 'John');
greet('Hello', 'John', 'Good morning!');
```

- 1: SyntaxError
- 2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']


<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Since parameters defined earlier are available to later default parameters, this code snippet doesn't throw any error.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 42. What is the output of below code

```javascript
function outer(f = inner()) {
  function inner() { return 'Inner' }
}
outer();
```

- 1: ReferenceError
- 2: Inner

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The functions and variables declared in the function body cannot be referred from default value parameter initializers. If you still try to access, it throws a run-time ReferenceError(i.e, `inner` is not defined).
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 43. What is the output of below code

```javascript
function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs)
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);
```

- 1: [3, 4, 5], undefined
- 2: SyntaxError
- 3: [3, 4, 5], []
- 4: [3, 4, 5], [undefined]

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The rest parameter is used to hold the remaining parameters of a function and it becomes an empty array if the argument is not provided.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 44. What is the output of below code

```javascript
const obj = {'key': 'value'};
const array = [...obj];
console.log(array);
```

- 1: ['key', 'value']
- 2: TypeError
- 3: []
- 4: ['key']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, but they become iterable when used in an Array, or with iterating functions such as `map(), reduce(), and assign()`. If you still try to do it, it still throws `TypeError: obj is not iterable`.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 45. What is the output of below code

```javascript
function* myGenFunc() {
    yield 1;
    yield 2;
    yield 3;
}
var myGenObj = new myGenFunc;
console.log(myGenObj.next().value);
```

- 1: 1
- 2: undefined
- 3: SyntaxError
- 4: TypeError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Generators are not constructible type. But if you still proceed to do, there will be an error saying "TypeError: myGenFunc is not a constructor"

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 46. What is the output of below code

```javascript

function* yieldAndReturn() {
  yield 1;
  return 2;
  yield 3;
}

var myGenObj = yieldAndReturn()
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
```

- 1: { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }
- 2: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }
- 3: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }
- 4: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

A return statement in a generator function will make the generator finish. If a value is returned, it will be set as the value property of the object and done property to true. When a generator is finished, subsequent next() calls return an object of this form: `{value: undefined, done: true}`.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 47. What is the output of below code

```javascript
const myGenerator = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}
```

- 1: 1,2,3 and 1,2,3
- 2: 1,2,3 and 4,5,6
- 3: 1 and 1
- 4: 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The generator should not be re-used once the iterator is closed. i.e, Upon exiting a loop(on completion or using break & return), the generator is closed and trying to iterate over it again does not yield any more results. Hence, the second loop doesn't print any value.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 48. What is the output of below code

```javascript
const num = 0o38;
console.log(num);
```

- 1: SyntaxError
- 2: 38

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 49. What is the output of below code

```javascript
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
```

- 1: 100
- 2: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Unlike function declarations, class declarations are not hoisted. i.e, First You need to declare your class and then access it, otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".

**Note:** Class expressions also applies to the same hoisting restrictions of class declarations.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 50. What is the output of below code

```javascript
function Person() { }

Person.prototype.walk = function() {
  return this;
}

Person.run = function() {
  return this;
}

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());
```

- 1: undefined, undefined
- 2: Person, Person
- 3: SyntaxError
- 4: Window, Window

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

When a regular or prototype method is called without a value for **this**, the methods return an initial this value if the value is not undefined. Otherwise global window object will be returned. In our case, the initial `this` value is undefined so both methods return window objects.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 51. What is the output of below code

```javascript
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}

const car = new Car('BMW');
console.log(car.start());
```

- 1: SyntaxError
- 2: BMW vehicle started, BMW car started
- 3: BMW car started, BMW vehicle started
- 4: BMW car started, BMW car started

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. i.e, The statements will be executed in the same order of code.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 52. What is the output of below code

```javascript
const USER = {'age': 30};
USER.age = 25;
console.log(USER.age);
```

- 1: 30
- 2: 25
- 3: Uncaught TypeError
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Even though we used constant variables, the content of it is an object and the object's contents (e.g properties) can be altered. Hence, the change is going to be valid in this case.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 53. What is the output of below code

```javascript
console.log('🙂' === '🙂');
```

- 1: false
- 2: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2
Emojis are unicodes and the unicode for smile symbol is "U+1F642". The unicode comparision of same emojies is equivalent to string comparison. Hence, the output is always true.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 54. What is the output of below code?

```javascript
console.log(typeof typeof typeof true);
```

- 1: string
- 2: boolean
- 3: NaN
- 4: number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
The typeof operator on any primitive returns a string value. So even if you apply the chain of typeof operators on the return value, it is always string.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 55. What is the output of below code?

```javascript
let zero = new Number(0);

if (zero) {
  console.log("If");
} else {
  console.log("Else");
}
```

- 1: If
- 2: Else
- 3: NaN
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
1. The type of operator on new Number always returns object. i.e, typeof new Number(0) --> object. 
2. Objects are always truthy in if block

Hence the above code block always goes to if section.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 55. What is the output of below code in non strict mode?

```javascript
let msg = "Good morning!!";

msg.name = "John"; 

console.log(msg.name);
```

- 1: ""
- 2: Error
- 3: John
- 4: Undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4
It returns undefined for non-strict mode and returns Error for strict mode. In non-strict mode, the wrapper object is going to be created and get the mentioned property. But the object get disappeared after accessing the property in next line.
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 56. What is the output of below code?

```javascript
let count = 10;

(function innerFunc() {
    if (count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
})();
```

- 1: 11, 10
- 2: 11, 11
- 3: 10, 11
- 4: 10, 10

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
11 and 10 is logged to the console. 

The innerFunc is a closure which captures the count variable from the outerscope. i.e, 10. But the conditional has another local variable `count` which overwrites the ourter `count` variable. So the first console.log displays value 11.
Whereas the second console.log logs 10 by capturing the count variable from outerscope.
 
</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

---

## Disclaimer

The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don't know the answer to all of them ⁠— that is ok!

Good luck with your interview 😊

---






# CSS Interview Questions

*Click <img src="assets/images/star.png" width="18" height="18" align="absmiddle" title="Star" /> if you like the project. Pull Request are highly appreciated.*

## Table of Contents

* *[CSS Coding Practice](css-practice.md)*
* *[CSS3 Properties](css3-properties.md)*
* *[SCSS Interview Questions and Answers](scss-questions.md)*
* *[CSS Multiple Choice Questions](css-multiple-choice-questions.md)*

<br/>

## Q. ***What is CSS?***

**CSS** stands for **Cascading Style Sheets**. CSS is used to define styles for web pages, including the design, layout and variations in display for different devices and screen sizes. CSS was intended to allow web professionals to separate the content and structure of a website\'s code from the visual design.

CSS can be used for document text styling — for example changing the color and size of headings and links. It can be used to create layout — for example turning a single column of text into a layout with a main content area and a sidebar for related information. It can even be used for effects such as animation.

**Example**

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the use of css ruleset?***

CSS is a rule or set of rules that describe the formatting (change of appearance) of individual elements on a web page. The rule consists of two parts: the selector and the next declaration block. The image below shows the structure (syntax) of the rule:

```css
div {
  color: blue;
  text-align: justify;
}
```

<p align="center">
  <img src="assets/images/css-rule.png" alt="CSS rule" width="500px;" />
</p>

* The first is always the **selector**, it tells the browser which element or elements of the web page will be styled.
* Next is the **declaration block**, which begins with the opening curly brace { and ends with the closing }, between the curly braces are specified formatting commands (declarations), which are used by the browser to stylize the selected selector element.
* Each **declaration** consists of two parts: the property and its value. The declaration must always end with a semicolon (;). You can omit the ; only at the end of the last declaration before the closing curly brace.
* A **property** is a formatting command that defines a specific style effect for an element. Each property has its own predefined set of values. After the property name, a colon is specified, which separates the property name from the valid value.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the possible ways to apply CSS styles to a web page?***

There are three ways to apply CSS to HTML: Inline, internal, and external.

### **1. Inline CSS**

Inline CSS is specified directly in the opening tag of the element you want it to apply to. It is entered into the style attribute within HTML. This allows CSS properties on a "per tag" basis.

**Example**

```html
<p style="font-weight:bold;">Bold Font</p>
```

This CSS type is not really recommended, as each HTML tag needs to be styled individually. However, inline CSS in HTML can be useful in some situations. For example, in cases where you don\'t have access to CSS files or need to apply styles for a single element only.

### **2. Internal CSS**

Internal or Embedded, styles are used for the whole page. Inside the head element, the style tags surround all of the styles for the page.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Internal CSS Example</title>
  <style>
    p {
        color: red;
    }
    
    a {
        color: blue;
    }
</style>
...
```

This CSS style is an effective method of styling a single page. However, using this style for multiple pages is time-consuming as you need to put CSS rules to every page of your website.

### **3. External CSS**

In external CSS rules are stored in a separate file. To refer to that file from the HTML page, add the link element (and its closing element within XHTML) to the head element. This CSS type is a more efficient method, especially for styling a large website. By editing one **.css** file, you can change your entire site at once.

**style.css**

```css
  p {
      color: red;
  }
  
  a {
      color: blue;
  }
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>External CSS Example</title>
    <link rel="stylesheet" type="text/css" href="style.css">
...
```

The link element in the example has three attributes. The first, `rel`, tells the browser the type of the target of the link. The second, `type`, tells the browser what type of stylesheet it is. And the third, `href`, tells the browser under which URL to find the stylesheet.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does the cascading portion of CSS mean?***

The **cascading** in CSS refers to the fact that styling rules "cascade" down from several sources. This means that CSS has an inherent hierarchy and styles of a higher precedence will overwrite rules of a lower precedence.

Even the simplest HTML document may have three or more style sheets associated with it including:

* The browser\'s style sheet
* The user\'s style sheet
* The author\'s style sheet

### **Browser style sheets**

Browsers apply style sheets to all web documents. Although these style sheets vary from browser to browser, they all have common characteristics such as black text, blue links, purple visited links etc. These are referred to as a "default" browser stylesheet.

As soon as you, the author, apply a style sheet to a document, it will override the browser's style sheet. This is because author style sheets will always override browser style sheets.

### **User style sheets**

Most modern browsers allow users to set their own style sheets within their browser. These style sheets will override the browsers default style sheets - for that user only.

### **Author style sheets**

As soon as you apply a basic style sheet or an inline style to a page, you have added what is referred to as an "author style sheet". Everything you do, from choosing fonts, colours and laying out pages in CSS is done using author style sheets.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain new features in CSS3?***

### **1. CSS3 Selectors**

 * Matches any element E whose attribute attr starts with the value val. In other words, the val matches the beginning of the attribute value.

```css
E[attr^=val]
/* Example */
a[href^='http://sales.']{color: teal;}
```

 * Matches any element E whose attribute attr ends in val. In other words, the val matches the end of the attribute value.

```css
E[attr$=val]
/* Example */
a[href$='.jsp']{color: purple;}
```

 * Matches any element E whose attribute attr matches val anywhere within the attribute. It is similar to E[attr~=val], except the val can be part of a word.

```css
E[attr*=val]  
/* Example */
img[src*='artwork']{
        border-color: #C3B087 #FFF #FFF #C3B087;
}
```

### **2. Pseudo-classes**

CSS2 supports user interaction pseudo-classes, namely `:link`, `:visited`, `:hover`, `:active`, and `:focus`.  
A few more pseudo-class selectors were added in CSS3. One is the `:root` selector, which allows designers to point to the root element of a document.

```css
  :root{overflow:auto;}
```

As a complement to the `:first-child` selector, the `:last-child` was added. With it one can select the last element named of a parent element.

```css
  div.article > p:last-child{font-style: italic;}
```

A new user interaction pseudo-class selector was added, the `:target` selector.

```html
<style>
  span.notice:target { font-size: 2em; font-style: bold; }
</style>

<a href='#section2'>Section 2</a>
<p id='section2'>...</p>
```

The negation pseudo-class selector, `:not` can be coupled with almost any other selector that has been implemented.

```css
  img:not([border]){ border: 1; }
```

### **3. CSS3 Colors**

The color keyword list has been extended in the CSS3 color module to include 147 additional keyword colors (that are generally well supported), CSS3 also provides us with a number of other options: **HSL**, **HSLA**, **RGBA** and **Opacity**.

```css
div.halfopaque {
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
  color: #000000;
}
div.halfalpha {
  background-color: rgba(0, 0, 0, 0.5);
  color: #000000;
}
``` 

### **4. Rounded Corners: border-radius**

```css
border-radius: 25px;
```

### **5 Drop Shadows**

```css
box-shadow: 2px 5px 0 0 rgba(72,72,72,1);
```

### **6. Text Shadow**

```css
text-shadow: topOffset leftOffset blurRadius color;
```

### **7. Linear Gradients**

```css
Syntax: background: linear-gradient(direction, color-stop1, color-stop2, ...);
/* Example */   
#grad {
  background: linear-gradient(to right, red , yellow);
}
```

### **8. Radial Gradients**

```css
Syntax : background: radial-gradient(shape size at position, start-color, ..., last-color);
/* Example */      
#grad {
  background: radial-gradient(red, yellow, green);
}//Default       
#grad {
  background: radial-gradient(circle, red, yellow, green);
}//Circle
```

### **9. Multiple Background Images**

In CSS3, there\'s no need to include an element for every background image; it provides us with the ability to add more than one background image to any element, even to pseudo-elements.

```css
background-image:
url(firstImage.jpg),
url(secondImage.gif),
url(thirdImage.png);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the css selectors?***

A CSS selector is the part of a CSS rule set that actually selects the content you want to style.

**i) Universal Selector**: The universal selector works like a wild card character, selecting all elements on a page. Every HTML page is built on content placed within HTML tags. Each set of tags represents an element on the page.

```css
* {
   color: green;
   font-size: 20px;
   line-height: 25px;
}
```

**ii) Element Type Selector**: This selector match one or more HTML elements of the same name.

```css
ul {
   list-style: none;
   border: solid 1px #ccc;
}
```

```html
<ul>
  <li>Fish</li>
  <li>Apples</li>
  <li>Cheese</li>
</ul>

<div class="example">
  <p>Example paragraph text.</p>
</div>

<ul>
  <li>Water</li>
  <li>Juice</li>
  <li>Maple Syrup</li>
</ul>
```

**iii) ID Selector**: This selector matches any HTML element that has an ID attribute with the same value as that of the selector.

```css
#container {
   width: 960px;
   margin: 0 auto;
}
```

```html
<div id="container"></div>
```

**iv) Class Selector**: The class selector also matches all elements on the page that have their class attribute set to the same value as the class.

```css
.box {
   padding: 20px;
   margin: 10px;
   width: 240px;
}
```

```html
<div class="box"></div>
```

**v) Descendant Combinator**: The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method.

```css
#container .box {
   float: left;
   padding-bottom: 15px;
}
```

This declaration block will apply to all elements that have a class of box that are inside an element with an ID of `container`. It’s worth noting that the `.box` element doesn’t have to be an immediate child: there could be another element wrapping `.box`, and the styles would still apply.

```html
<div id="container">
  <div class="box"></div>

  <div class="box-2"></div>
</div>

<div class="box"></div>
```

**vi) Child Combinator**: A selector that uses the child combinator is similar to a selector that uses a descendant combinator, except it only targets immediate child elements.

```css
#container > .box {
   float: left;
   padding-bottom: 15px;
}
```

The selector will match all elements that have a class of `box` and that are immediate children of the `#container` element. That means, unlike the descendant combinator, there can’t be another element wrapping `.box`—it has to be a direct child element.

```html
<div id="container">
  <div class="box"></div>

  <div>
    <div class="box"></div>
  </div>
</div>
```

**vii) General Sibling Combinator**: A selector that uses a general sibling combinator matches elements based on sibling relationships. The selected elements are beside each other in the HTML.

```css
h2 ~ p {
   margin-bottom: 20px;
}
```

In this example, all paragraph elements (`<p>`) will be styled with the specified rules, but only if they are siblings of `<h2>` elements. There could be other elements in between the `<h2>` and `<p>`, and the styles would still apply.

```html
<h2>Title</h2>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<div class="box">
  <p>Paragraph example.</p>
</div>
```

**viii) Adjacent Sibling Combinator**: A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as the general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling.

```css
p + p {
   text-indent: 1.5em;
   margin-bottom: 0;
}
```

In this example will apply the specified styles only to paragraph elements that immediately follow other paragraph elements. This means the first paragraph element on a page would not receive these styles. Also, if another element appeared between two paragraphs, the second paragraph of the two wouldn’t have the styles applied.

```html
<h2>Title</h2>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<p>Paragraph example.</p>

<div class="box">
  <p>Paragraph example.</p>
  <p>Paragraph example.</p>
</div>
```

**ix) Attribute Selector**: The attribute selector targets elements based on the presence and/or value of HTML attributes, and is declared using square brackets

```css
input[type="text"] {
   background-color: #444;
   width: 200px;
}
```

```html
<input type="text">
```

The attribute selector can also be declared using just the attribute itself, with no value, like this:

```css
input[type] {
   background-color: #444;
   width: 200px;
}
```

**x) Pseudo-class**: A pseudo-class uses a colon character to identify a pseudo-state that an element might be in—for example, the state of being hovered, or the state of being activated.

```css
a:hover {
   color: red;
}
```

**xi) Pseudo-element**: A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to:

* Style the first letter, or line, of an element
* Insert content before, or after, the content of an element 

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p::first-line {
        color: #ff0000;
        font-variant: small-caps;
      }

      p::first-letter {
        color: #ff0000;
        font-size: xx-large;
      }

      h1::before {
        content: url(smiley.gif);
      }

      h1::after {
        content: url(smiley.gif);
      }

      ::selection {
        color: red;
        background: yellow;
      }
    </style>
  </head>
<body>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,
  <h1>when an unknown printer took a galley of type and scrambled it to make a
  type specimen book.<h1></p>
</body>
</html>
```

**Live Demo**: [CSS Selectors](https://learning-zone.github.io/css-interview-questions/assets/files/selector.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is contextual selector?***

Contextual selector addresses specific occurrence of an element. It is a string of individual selectors separated by white space (search pattern), where only the last element in the pattern is addressed providing it matches the specified contex.

It also check the context of the class in the html tree, assigning the style to the element through a specific route, taking into account the order of depth in the tree.

**Example:**

```css
table p { property: value; } 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between Pseudo-classes and pseudo-elements?***

A pseudo-class is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example `:hover`. A pseudo-element however allows us to create items that do not normally exist in the document tree, for example `::after`.

**Pseudo-classes**  

Pseudo-classes select regular elements but under certain conditions, like when their position relative to siblings or when they’re under a particular state. Here is a list of pseudo-classes in CSS3:

**a) Dynamic pseudo-classes**  

* :link
* :visited
* :hover
* :active
* :focus

**b) UI element states pseudo-classes**  

* :enabled
* :disabled
* :checked

**c) Structural pseudo-classes**  

* :first-child
* :nth-child(n)
* :nth-last-child(n)
* :nth-of-type(n)
* :nth-last-of-type(n)
* :last-child
* :first-of-type
* :last-of-type
* :only-child
* :only-of-type
* :root
* :empty

**d) Other pseudo-classes**  

:not(x)
:target
:lang(language)


**Pseudo-elements**  

Pseudo-elements effectively create new elements that are not specified in the markup of the document and can be manipulated much like a regular element. 

* ::before
* ::after
* ::first-letter
* ::first-line
* ::selection

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Combinator selector?***

A combinator is the character in a selector that connects two selectors together. There are four types of combinators. 

**a) Descendant Combinator (space)**: The descendant selector matches all elements that are descendants of a specified element.

The following example selects all `<p>` elements inside `<div>` elements:

```css
div p {
  background-color: yellow;
}
```
**b) Child Combinator (>)**: The child selector selects all elements that are the children of a specified element.

The following example selects all `<p>` elements that are children of a `<div>` element:

```css
div > p {
  background-color: yellow;
}
```

**c) Adjacent Sibling Combinator (+)**: The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.

The following example selects all `<p>` elements that are placed immediately after `<div>` elements:

```css
div + p {
  background-color: yellow;
}
```
**d) General Sibling Combinator (~)**: The general sibling selector selects all elements that are siblings of a specified element.

The following example selects all `<p>` elements that are siblings of `<div>` elements: 
```css
div ~ p {
  background-color: yellow;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between class selectors and id selectors?***

In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.
```css
#top {
    background-color: #ccc;
    padding: 20px
}

.intro {
    color: red;
    font-weight: bold;
}
```

```html
<div id="top">

<h1>Chocolate curry</h1>
<p class="intro">This is my recipe for making curry purely with chocolate</p>
<p class="intro">Mmm mm mmmmm</p>

</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between the “nth-child()” and “nth-of-type()” selectors?***

The `nth-child()` pseudo-class is used to match an element based on a number, which represents the element\'s position amongst it\'s siblings. More specifically, the number represents the number of siblings that exist before the element in the document tree (minus 1).

**Example**

```css
.example :nth-child(5) { background: #ffdb3a; }
```

```html
<div class="example">
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p>
	<div>This is a <em>divider</em>.</div>
	<div>This is a <em>divider</em>.</div> <!-- Element to select -->
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p>
	<div>This is a <em>divider</em>.</div>
	<p>This is a <em>paragraph</em>.</p>
	<div>This is a <em>divider</em>.</div>
</div>
```

The `nth-of-type()` pseudo-class, like nth-child(), is used to match an element based on a number. This number, however, represents the element's position within only those of its siblings that are of the same element type.

This number can also be expressed as a function, or using the keywords even or odd.

```css
.example p:nth-of-type(odd) { background: #ffdb3a; }
```

```html
<div class="example">
	<p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
	<div>This is a <em>divider</em>.</div>
	<div>This is a <em>divider</em>.</div> 
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
	<div>This is a <em>divider</em>.</div>
	<p>This is a <em>paragraph</em>.</p>
	<div>This is a <em>divider</em>.</div>
</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain CSS grid layout with example?***

CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives. Like tables, grid layout enables us to align elements into columns and rows.

### **Basic Terminology**

<p align="center">
  <img src="assets/images/grid-term.jpg" alt="Grid Terminology" width="500px;" />
</p>

* **Grid Item**: The grid container contains the grid items.
* **Grid Line**: The grid line is either a vertical or horizontal grid line that makes up the structure of the grid.
* **Grid Cell**: The smallest unit on a grid is referred to as a Grid cell. It is the space between the two adjacent rows and columns.
* **Rows**: The grid row is the horizontal track of the grid.
* **Columns**: The grid column is the vertical track of the grid.
* **Gutter**: A gutter is a space between the rows and columns in the grid.

### **CSS Grid Properties**

|Property         |Description                       |
|-----------------|----------------------------------|
|column-gap	      |Specifies the gap between the columns|
|gap	            |A shorthand property for the row-gap and the column-gap properties|
|grid	            |A shorthand property for the grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and the grid-auto-flow properties|
|grid-area	      |Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties|
|grid-auto-columns|Specifies a default column size|
|grid-auto-flow	  |Specifies how auto-placed items are inserted in the grid|
|grid-auto-rows	  |Specifies a default row size|
|grid-column	    |A shorthand property for the grid-column-start and the grid-column-end properties|
|grid-column-end	|Specifies where to end the grid item|
|grid-column-gap	|Specifies the size of the gap between columns|
|grid-column-start|Specifies where to start the grid item|
|grid-gap	        |A shorthand property for the grid-row-gap and grid-column-gap properties|
|grid-row	        |A shorthand property for the grid-row-start and the grid-row-end properties|
|grid-row-end	    |Specifies where to end the grid item|
|grid-row-gap	    |Specifies the size of the gap between rows|
|grid-row-start	  |Specifies where to start the grid item|
|grid-template	  |A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties|
|grid-template-areas|Specifies how to display columns and rows, using named grid items|
|grid-template-columns	|Specifies the size of the columns, and how many columns in a grid layout|
|grid-template-rows	    |Specifies the size of the rows in a grid layout|
|row-gap	         |Specifies the gap between the grid rows|

**Example**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Grid Layout</title>
  <style>
    .item1 {
        grid-area: header;
    }

    .item2 {
        grid-area: menu;
    }

    .item3 {
        grid-area: main;
    }

    .item4 {
        grid-area: right;
    }

    .item5 {
        grid-area: footer;
    }

    .grid-container {
        display: grid;
        grid-template-areas:
            'header header header header header header'
            'menu main main main right right'
            'menu footer footer footer footer footer';
        grid-gap: 10px;
        background-color: rgba(155, 249, 249);
        padding: 10px;
    }

    .grid-container>div {
        background-color: rgba(0, 150, 149);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
  </style>
  </head>
<body>
  <h1>Grid Layout</h1>
  <p>This grid layout contains six columns and three rows:</p>

  <div class="grid-container">
    <div class="item1">Header</div>
    <div class="item2">Menu</div>
    <div class="item3">main</div>
    <div class="item4">Right</div>
    <div class="item5">Footer</div>
  </div>
</body>
</html>
```

**Live Demo**: [Grid Layout](https://learning-zone.github.io/css-interview-questions/assets/files/grid-layout.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is CSS flexbox? Write all the properties of the flexbox?***

The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning. Flexbox makes it simple to align items vertically and horizontally using rows and columns. Items will "flex" to different sizes to fill the space.

Before the Flexbox Layout module, there were four layout modes:

* **Block**, for sections in a webpage
* **Inline**, for text
* **Table**, for two-dimensional table data
* **Positioned**, for explicit position of an element

### **Flex Container**

An area of a document laid out using flexbox is called a **flex container**. To create a flex container, we set the value of the area\'s container\'s `display` property to `flex` or `inline-flex`. As soon as we do this the direct children of that container become **flex items**.

### **Flexbox Terminology**

<p align="center">
  <img src="assets/images/flex-terminology.png" alt="Flexbox Terminology" width="500px;" />
</p>

### **The CSS Flexbox Container Properties**

|Property        |Values                                                            |
|----------------|------------------------------------------------------------------|
|display:        |flexbox, inline-flex;|
|flex-direction: |row, row-reverse, column, column-reverse;|
|flex-wrap:      |nowrap, wrap, wrap-reverse;|
|flex-flow:      |<‘flex-direction’>, <‘flex-wrap’>|
|justify-content:|flex-start, flex-end, center, space-between, space-around;|
|align-items:    |flex-start, flex-end, center, baseline, stretch;|
|align-content:  |flex-start, flex-end, center, space-between, space-around, stretch;|

### **The CSS Flexbox Properties**

|Property        |Values                                                  |
|----------------|--------------------------------------------------------|
|order:          |`<integer>`;                        |
|flex-grow:      |`<number>`; /* default 0 */         |
|flex-shrink:    |`<number>`; /* default 1 */         |
|flex-basis:     |`<length>`, auto; /* default auto */|
|flex:           |none, [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]|
|align-self:     |auto, flex-start, flex-end, center, baseline, stretch;|

**Example**

```html
<!DOCTYPE html>
<html>
<head>
    <title>The flex-direction Property</title>
    <style>
        .flex-container {
            display: flex;
            flex-direction: column;
            background-color: DodgerBlue;
        }

        .flex-container>div {
            background-color: #f1f1f1;
            width: 100px;
            margin: 10px;
            text-align: center;
            line-height: 75px;
            font-size: 30px;
        }
    </style>
</head>
<body>
    <h1>The flex-direction Property</h1>
    <p>The "flex-direction: column;" stacks the flex items vertically (from top to bottom):</p>

    <div class="flex-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>
```

**Live Demo**: [flex-direction Property](https://learning-zone.github.io/css-interview-questions/assets/files/flexbox.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When to use css grid and flexbox?***

* CSS Grid Layout is a **two-dimensional** system, meaning it can handle both columns and rows, unlike flexbox which is largely a **one-dimensional** system (either in a column or a row).
* A core difference between CSS Grid and Flexbox is that — CSS Grid’s approach is **layout-first** while Flexbox’ approach is **content-first**. If you are well aware of your content before making layout, then blindly opt for Flexbox and if not, opt for CSS Grid.
* Flexbox layout is most appropriate to the components of an application (as most of them are fundamentally linear), and **small-scale** layouts, while the Grid layout is intended for **larger-scale** layouts which aren’t linear in their design.
* If you only need to define a layout as a row or a column, then you probably need flexbox. If you want to define a grid and fit content into it in two dimensions — you need the grid.

<p align="center">
  <img src="assets/images/flex.png" alt="One-Dimensional" />
  <img src="assets/images/grid.png" alt="Two-Dimensional" />
</p>

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Grid vs Flexbox Layout</title>
  </head>
  <style>
    /* Grid layout */
    .row {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #2196f3;
        padding: 5px;
    }

    .col-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 10px;
        font-size: 30px;
        text-align: center;
    }

    /* Flexbox layout */
    .wrapper {
        border: 2px solid #f76707;
        border-radius: 5px;
        background-color: #fff4e6;
    }

    .wrapper > div {
        border: 2px solid #ffa94d;
        border-radius: 5px;
        background-color: #ffd8a8;
        padding: 1em;
        color: #d9480f;
    }

    .wrapper {
        display: flex;
        width: 500px;
        flex-wrap: wrap;
    }

    .wrapper > div {
        flex: 1 1 150px;
    }
  </style>
  <body>
    <p><h1>Grid Layout Example<hr/></h1></p>
    <div class="row">
        <div class="col-item">Column - 1</div>
        <div class="col-item">Column - 2</div>
        <div class="col-item">Column - 3</div>
        <div class="col-item">Column - 1</div>
        <div class="col-item">Column - 2</div>
        <div class="col-item">Column - 3</div>
        <div class="col-item">Column - 1</div>
        <div class="col-item">Column - 2</div>
        <div class="col-item">Column - 3</div>
    </div>

    <p><h1><br/>Flexbox Layout Example<hr/></h1></p>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
  </body>
</html>
```

**Live Demo**: [CSS Grid and flexbox](https://learning-zone.github.io/css-interview-questions/assets/files/grid-flexbox-layout.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is CSS BEM?***

The BEM (**Block Element Modifier**) methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

```css
/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}
```

**Example**

```css
.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}
```

```html
<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>
```

**Benefits**  

* **Modularity**: Block styles are never dependent on other elements on a page, so you will never experience problems from cascading.
* **Reusability**: Composing independent blocks in different ways, and reusing them intelligently, reduces the amount of CSS code that you will have to maintain.
* **Structure**: BEM methodology gives your CSS code a solid structure that remains simple and easy to understand.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the benefits of using CSS sprites?*** 

CSS sprites combine multiple images into one single larger image. It is a commonly-used technique for icons. 

**Advantages:**

* Reduce the number of ```HTTP``` requests for multiple images (only one single request is required per spritesheet). But with ```HTTP2```, loading multiple images is no longer much of an issue.
* Advance downloading of assets that won't be downloaded until needed, such as images that only appear upon `:hover` pseudo-states. Blinking wouldn't be seen.


* When you have multiple images/ icons, browser makes separate call to the server for each one of them. sprite is a technique to combine all/ some of them (usually similar one in terms of type of image. For example, you will put jpg in one sprite) in one image. To display the icon you set height, width and background position.

**Alternatives:**

* Data URIs - allow you to embed the image data directly into a stylesheet. This avoids additional HTTP requests for images, making it essentially the same thing as a sprite, without the fancy positioning.
* Icon Fonts
* SVGs

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is tweening in css?***

The pose-to-pose option is to create a few keyframes throughout the sequence, and then fill in the gaps later. Filling in these gaps is known as **tweening**. It is the process of generating intermediate frames between two images. It gives the impression that the first image has smoothly evolved into the second one. In CSS3, Transforms (matrix, translate, rotate, scale etc.) module can be used to achieve tweening.

**Example**:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the difference between `visibility: hidden;` and `display: none;`? What are the pros and cons of using `display:none`?***

* **visibility: hidden** simply hides the element but it will occupy space and affect the layout of the document.  
* **display: none** removes the element from the normal layout flow (causes DOM reflow). It will not affect the layout of the document nor occupy space.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the purpose of the `z-index` and how a stacking context is formed?***

The `z-index` helps specify the stack order of positioned elements that may overlap one another. The `z-index` default value is zero, and can take on either a positive or negative number. An element with a higher `z-index` is always stacked above than a lower index.

`z-index` can take the following values:

  * **Auto**: Sets the stack order equal to its parents.
  * **Number**: Orders the stack order.
  * **Initial**: Sets this property to its default value (0).
  * **Inherit**: Inherits this property from its parent element.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS z-index Property</title>
    <style>
      img {
        position: absolute;
        left: 0px;
        top: 0px;
        padding: 5px 2px;
        margin: 5px 1px 2px;
        z-index: -1;
      }

      p {
        color: red;
        font-size: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>The z-index Property</h1>
    <img src="../images/horse.jpg" alt="Horse Image" />
    <p>Because the image has a z-index of -1, it will be placed behind the heading.</p>
  </body>
</html>
```

**Live Demo**: [Z-Index](https://learning-zone.github.io/css-interview-questions/assets/files/z-index.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Exaplain CSS position Property?***

<p align="center">
  <img src="assets/images/css-position-all.png" alt="One-Dimensional" />
</p>

* **absolute**, place an element exactly where you want to place it. absolute position is actually set relative to the element\'s parent. if no parent available then relatively place to the page itself (it will default all the way back up to the <html> element).

* **relative**, means "relative to itself". Setting position: relative; on an element and no other positioning attributes, it will no effect on it\'s positioning. It allows the use of `z-index` on the element and it limits the scope of absolutely positioned child elements. Any child element will be absolutely positioned within that block.

* **fixed**, element is positioned relative to viewport or the browser window itself. viewport doesn't changed if you scroll and hence fixed element will stay right in the same position.

* **static** default for every single page element. The only reason you would ever set an element to position: static is to forcefully-remove some positioning that got applied to an element outside of your control.

* **sticky** - Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as `relative` positioned until it crosses a specified threshold, at which point it is treated as `fixed` positioned.

**Live Demo**: [CSS Position Property](https://learning-zone.github.io/css-interview-questions/assets/files/position-index.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the differences between relative and absolute in CSS?***

### **Relative Position**

An element with `position: relative;` is positioned relative to its normal position.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

<p align="center">
  <img src="assets/images/relative-position.png" alt="CSS rule" width="250px;" />
</p>

**Example**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Relative Position</title>
  <style>
    div.relative {
      position: relative;
      top: 20px;
      left: 20px;
      border: 3px solid #2321ad;
    }
  </style>
</head>
<body>
    <h2>position: relative;</h2>
    <p>An element with position: relative; is positioned relative to its normal position:</p>

    <div class="relative">
        This div element has position: relative;
    </div>
</body>
</html>
```

**Live Demo**: [Relative Position Property](https://learning-zone.github.io/css-interview-questions/assets/files/relative-position.html)

### **Absolute Position**

An element with `position: absolute;` will cause it to adjust its position with respect to its parent. If no parent is present, then it uses the document body as parent.

<p align="center">
  <img src="assets/images/absolute-position.png" alt="CSS rule" width="350px;" />
</p>

**Example**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Absolute Position</title>
  <style>
    div.relative {
      position: relative;
      width: 400px;
      height: 200px;
      border: 3px solid #2321ad;
    }  

    div.absolute {
      position: absolute;
      top: 80px;
      right: 0;
      width: 200px;
      height: 100px;
      border: 3px solid #ee0b0b;
    }
  </style>
</head>
<body>
    <h2>position: absolute;</h2>

    <p>An element with position: absolute; is positioned relative to the nearest positioned ancestor 
      (instead of positioned relative to the viewport, like fixed):</p>

    <div class="relative">This div element has position: relative;
        <div class="absolute">This div element has position: absolute;</div>
    </div>
</body>
</html>
```

**Live Demo**: [Absolute Position Property](https://learning-zone.github.io/css-interview-questions/assets/files/absolute-position.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***The difference between block, inline and inline-block element?***

**a) Block Elements**  
The block elements always start on a new line. They will also take space of an entire row or width. List of block elements are `<p>`, `<h1>`, `<div>`, `<header>`.

**Example**:

```html
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem,
  consequatur deleniti nobis beatae quo dolore nemo corporis. Ad delectus
  dignissimos pariatur illum eveniet dolor rem eius laborum sed iure!
</p>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem,
  consequatur deleniti nobis beatae quo dolore nemo corporis. Ad delectus
  dignissimos pariatur illum eveniet dolor rem eius laborum sed iure!
</p>
```

**b) Inline Elements**  
Inline elements don\'t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are `<a>`, `<span>` , `<strong>`, and `<img>` tags.

When it comes to margins and padding, browsers treat inline elements differently. You can add space to the left and right on an inline element, but you cannot add height to the top or bottom padding or margin of an inline element.

**Example**:

```html
<a href="#">Link</a>
<img src="https://picsum.photos/30" />
<span>Span</span>
<strong>Strong Player</strong>
```

**c) Inline-Block Elements**  
Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides.
One common use for using inline-block is for creating navigation links horizontally. Some examples of inline-block elements are `<input>`, `<button>`, `<select>`, `<textarea>` etc.

```css
input {
  width: 300px;
  height: 50px;
}

button {
  width: 100px;
  height: 50px;
  margin-top: 20px;
}
```

```html
<input type="text" /> <button>Submit</button>
```

**Live Demo**: [Display Property](https://learning-zone.github.io/css-interview-questions/assets/files/display-properties.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are counters in CSS3?***

CSS counters let you adjust the appearance of content based on its location in a document. To use a CSS counter, it must first be initialized to a value with the `counter-reset` property (0 by default). The same property can also be used to change its value to any specific number. Once initialized, a counter\'s value can be increased or decreased with counter-increment. The counter\'s name must not be "none", "inherit", or "initial"; otherwise the declaration is ignored.

```css
body {
  counter-reset: section;   /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section;   /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": ";  /* Display the word 'Section ', the value of 
                                                 section counter, and a colon before the content
                                                 of each h3 */
}
```

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

**CSS Counter Properties**

|Property	        |Description  |
|-----------------|-------------------------------------------------------------------------------|
|content	        |Used with the ::before and ::after pseudo-elements, to insert generated content|
|counter-increment|Increments one or more counter values|
|counter-reset	  |Creates or resets one or more counters|

**Example**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      counter-reset: section;   /* Set a counter named 'section', and its initial value is 0. */
    }

    h3::before {
      counter-increment: section;   /* Increment the value of section counter by 1 */
      content: "Section " counter(section) ": ";  /* Display the word 'Section ', the value of 
                                                 section counter, and a colon before the content
                                                 of each h3 */
    }   
  </style>
</head>
<body>
  <h3>Introduction</h3>
  <h3>Body</h3>
  <h3>Conclusion</h3>
</body>
</html>
```

**Live Demo**: [CSS Counters](https://learning-zone.github.io/css-interview-questions/assets/files/counters.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you specify units in the CSS? What are the different ways to do it?***

There are various units in CSS to express the measurement and length. A CSS unit is used to determine the property size, which we set for an element or its content. The units in CSS are required to define the measurement such as margin: 20px; in which the px (or pixel) is the CSS unit. They are used to set margin, padding, lengths, and so on.

The length unit in CSS is of two types:

* Absolute length units.
* Relative length units.

### **Absolute length units**

The following are all absolute length units — they are not relative to anything else, and are generally considered to always be the same size.

|Unit	        |Name	                |Equivalent to        |
|-------------|---------------------|---------------------|
|cm	          |Centimeters	        |1cm = 38px = 25/64in|
|mm	          |Millimeters	        |1mm = 1/10th of 1cm|
|Q	          |Quarter-millimeters	|1Q = 1/40th of 1cm|
|in	          |Inches	              |1in = 2.54cm = 96px|
|pc	          |Picas	              |1pc = 1/6th of 1in|
|pt	          |Points	              |1pt = 1/72th of 1in|
|px	          |Pixels	              |1px = 1/96th of 1in|

### **Relative length units**

Relative length units specify a length relative to another length property. Relative length units scale better between different rendering medium.

|Unit	           |Relative to                                   |
|----------------|----------------------------------------------|
|em	             |Font size of the parent, in the case of typographical properties like font-size, and font size of the element itself, in the case of other properties like width.|
|ex	             |x-height of the element's font.|
|ch	             |The advance measure (width) of the glyph "0" of the element's font.|
|rem	           |Font size of the root element.|
|lh	             |Line height of the element.|
|vw	             |1% of the viewport's width.|
|vh	             |1% of the viewport's height.|
|vmin	           |1% of the viewport's smaller dimension.|
|vmax	           |1% of the viewport's larger dimension.|

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
      <title>CSS Units</title>
    <style>
      .wrapper {
        font-size: 1em;
      }
      
      .px {
        width: 200px;
      }
      
      .vw {
        width: 10vw;
      }
      
      .em {
        width: 10em;
      }
    </style>
  </head>
<body>
  <div class="wrapper">
    <div class="box px">I am 200px wide</div>
    <div class="box vw">I am 10vw wide</div>
    <div class="box em">I am 10em wide</div>
  </div>
</body>
</html>
```

**Live Demo**: [CSS Units](https://learning-zone.github.io/css-interview-questions/assets/files/css-units.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which one would you prefer among px, em % or pt and why?***

* ```px``` gives fine grained control and maintains alignment because 1 px or multiple of 1 px is guaranteed to look sharp. px is not cascade, this means if parent font-size is 20px and child 16px. child would be 16px.

* ```em``` maintains relative size. you can have responsive fonts. em is the width of the letter 'm' in the selected typeface. However, this concept is tricky. 1em is equal to the current font-size of the element or the browser default. if u sent font-size to 16px then 1em = 16px. The common practice is to set default body font-size to 62.5% (equal to 10px). em is cascade

* ```%``` sets font-size relative to the font size of the body. Hence, you have to set font-size of the body to a reasonable size. this is easy to use and does cascade. for example, if parent font-size is 20px and child font-size is 50%. child would be 10px.

* ```pt```(points) are traditionally used in print. 1pt = 1/72 inch and it is fixed-size unit.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is pseudo element? What is pseudo class?***

**1. Pseudo Element**: A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

* Style the first letter, or line, of an element
* Insert content before, or after, the content of an element

**CSS Pseudo Elements**  

|Sl.No|Selector	      |Example	        |description|
|-----|---------------|-----------------|-------------|
| 01. |::after	      |p::after	        |Insert something after the content of each <p> element|
| 02. |::before	      |p::before	      |Insert something before the content of each <p> element|
| 03. |::first-letter	|p::first-letter	|Selects the first letter of each <p> element|
| 04. |::first-line	  |p::first-line	  |Selects the first line of each <p> element|
| 05. |::selection	  |p::selection	    |Selects the portion of an element that is selected by a user|


**2. Pseudo-classes**: A pseudo-class is used to define a special state of an element.

For example, it can be used to:

* Style an element when a user mouses over it
* Style visited and unvisited links differently
* Style an element when it gets focus

**CSS Pseudo Classes**  

| Sl.No |Selector	         | Example	              |description|
|-------|------------------|------------------------|-----------|
| 01.  |:active	           |a:active	              |Selects the active link|
| 02.  |:checked	         |input:checked	          |Selects every checked `<input>` element|
| 03.  |:disabled	         |input:disabled	        |Selects every disabled `<input>` element|
| 04.  |:empty	           |p:empty	                |Selects every `<p>` element that has no children|
| 05.  |:enabled	         |input:enabled	          |Selects every enabled `<input>` element|
| 06.  |:first-child	     |p:first-child	          |Selects every `<p>` elements that is the first child of its parent|
| 07.  |:first-of-type	   |p:first-of-type	        |Selects every `<p>` element that is the first `<p>` element of its parent|
| 08.  |:focus	           |input:focus	            |Selects the `<input>` element that has focus|
| 09.  |:hover	           |a:hover	                |Selects links on mouse over|
| 10.  |:in-range	         |input:in-range	        |Selects `<input>` elements with a value within a specified range|
| 11.  |:invalid	         |input:invalid	          |Selects all `<input>` elements with an invalid value|
| 12.  |:lang(language)	   |p:lang(it)	            |Selects every `<p>` element with a lang attribute value starting with "it"|
| 13.  |:last-child	       |p:last-child	          |Selects every `<p>` elements that is the last child of its parent|
| 14.  |:last-of-type	     |p:last-of-type	        |Selects every `<p>` element that is the last `<p>` element of its parent|
| 15.  |:link	             |a:link	                |Selects all unvisited links|
| 16.  |:not(selector)	   |:not(p)	                |Selects every element that is not a `<p>` element|
| 17.  |:nth-child(n)	     |p:nth-child(2)	        |Selects every `<p>` element that is the second child of its parent|
| 18.  |:nth-last-child(n) |p:nth-last-child(2)	    |Selects every `<p>` element that is the second child of its parent, |counting from the last child|
| 19.  |:nth-last-of-type(n) |p:nth-last-of-type(2)	|Selects every `<p>` element that is the second `<p>` element of its parent, counting from the last child|
| 20.  |:nth-of-type(n)	    |p:nth-of-type(2)	      |Selects every `<p>` element that is the second `<p>` element of its parent|
| 21.  |:only-of-type	      |p:only-of-type	        |Selects every `<p>` element that is the only `<p>` element of its parent|
| 22.  |:only-child	        |p:only-child	          |Selects every `<p>` element that is the only child of its parent|
| 23.  |:optional	          |input:optional	        |Selects `<input>` elements with no "required" attribute|
| 24.  |:out-of-range	      |input:out-of-range	    |Selects `<input>` elements with a value outside a specified range|
| 25.  |:read-only	        |input:read-only	      |Selects `<input>` elements with a "readonly" attribute specified|
| 26.  |:read-write	        |input:read-write	      |Selects `<input>` elements with no "readonly" attribute|
| 27.  |:required	          |input:required	        |Selects `<input>` elements with a "required" attribute specified|
| 28.  |:root	root	        |                       |Selects the document\'s root element|
| 29.  |:target	            |#news:target	          |Selects the current active #news element (clicked on a URL containing that anchor name)|
| 30.  |:valid	            |input:valid	          |Selects all `<input>` elements with a valid value|
| 31.  |:visited	          |a:visited	            |Selects all visited links|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the CSS “box model” and the layout components that it consists of?***

The CSS box model is a rectangular layout paradigm for HTML elements that consists of the following:

* **Content**: The content of the box, where text and images appear
* **Padding**: A transparent area surrounding the content (i.e., the amount of space between the border and the content)
* **Border**: A border surrounding the padding (if any) and content
* **Margin**: A transparent area surrounding the border (i.e., the amount of space between the border and any neighboring elements)

<p align="center">
  <img src="assets/images/box-model.png" alt="CSS Box Model" width="300px;" />
</p>

The size of the box itself is calculated like this:

|Property |Total                                                             |
|---------|------------------------------------------------------------------|
|Width    |width + padding-left + padding-right + border-left + border-right |
|Height   |height + padding-top + padding-bottom + border-top + border-bottom|

**Example**

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Box Model</title>
  <style>
    div {
      background-color: lightgrey;
      width: 300px;
      border: 10px solid rgb(3, 141, 233);
      padding: 50px;
      margin: 20px;
    }
  </style>
</head>
<body>
  <h2>CSS Box Model</h2>

  <p>The CSS box model is essentially a box that wraps around every HTML element. 
    It consists of: borders, padding, margins, and the actual content.</p>

  <div>This text is the content of the box. We have added a 50px padding, 20px margin and a 10px blue 
    border.</div>
</body>
</html>
```

**Live Demo**: [CSS Box Model](https://learning-zone.github.io/css-interview-questions/assets/files/boxmodel.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How you would tell the browser in CSS to render your layout in different box models?***

The **box-sizing** property allows us to include the padding and border in an element\'s total width and height. If you set `box-sizing: border-box;` on an element, padding and border are included in the width and height

**Syntax**

```css
box-sizing: content-box|border-box|initial|inherit;
```

### **Property Values**

|Value       |Description                              |
|------------|-----------------------------------------|
|content-box |Default. The width and height properties (and min/max properties) includes only the content. Border and padding are not included|
|border-box	 |The width and height properties (and min/max properties) includes content, padding and border|
|initial	   |Sets this property to its default value. Read about initial|
|inherit	   |Inherits this property from its parent element. Read about inherit|

**Example**

```html
<!DOCTYPE html>
<html>
<head>
  <title>The box-sizing Property</title>
  <style>
    .content-box {
        box-sizing: content-box;
        width: 300px;
        height: 100px;
        padding: 30px;
        border: 10px solid rgb(0, 89, 255);
    }

    .border-box {
        box-sizing: border-box;
        width: 300px;
        height: 100px;
        padding: 30px;
        border: 10px solid rgb(255, 102, 0);
    }
  </style>
</head>
<body>
    <h2>The box-sizing Property</h2>
    <p>Defines how the width and height of an element are calculated: should they include padding 
      and borders, or not.</p>

    <h3>1. box-sizing: content-box (default):</h3>
    <p>Width and height only apply to the content of the element:</p>
    <div class="content-box">This div has a width of 300px. But the full width is 300px + 20px 
      (left and right border) + 60px (left and right padding) = 380px!</div>

    <h3>2. box-sizing: border-box:</h3>
    <p>Width and height apply to all parts of the element: content, padding and borders:</p>
    <div class="border-box">Here, the full width is 300px</div>
</body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between border-box and content-box?***

* **content-box** – Default box-sizing property. The width and height properties (and min/max properties) includes only the content. Border and padding are not included
* **border-box** – The width and height properties (and min/max properties) includes content, padding and border.

<p align="center">
  <img src="assets/images/content-box-vs-border-box.png" alt="border-box vs content-box" width="600px;" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the meaning of each of these CSS units for expressing length?***

* ```cm``` centimeters
* ```em``` elements (i.e., relative to the font-size of the element; e.g., 2 em means 2 times the current font size)
* ```in``` inches
* ```mm``` millimeters
* ```pc``` picas (1 pc = 12 pt = 1/6th of an inch)
* ```pt``` points (1 pt = 1/72nd of an inch)
* ```px``` pixels (1 px = 1/96th of an inch)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***In CSS3, how would you select?***

* Every ```<a>``` element whose href attribute value begins with “https”.
```css
  a[href^="https"]
```
    
* Every ```<a>``` element whose href attribute value ends with “.pdf”.
```css
  a[href$=".pdf"]
```
    
* Every ```<a>``` element whose href attribute value contains the substring “css”.
```css
  a[href*="css"]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the purpose of the box-sizing property?***

<p align="center">
  <img src="assets/images/box-sizing.jpg" alt="One-Dimensional" width="75%" />
</p>

The box-sizing CSS property sets how the total width and height of an element is calculated.

* **content-box**: the default width and height values apply to the element\'s content only. The padding and border are added to the outside of the box.
* **padding-box**: Width and height values apply to the element\'s content and its padding. The border is added to the outside of the box. Currently, only Firefox supports the padding-box value.
* **border-box**: Width and height values apply to the content, padding, and border.
* **inherit**: inherits the box sizing of the parent element.

**Example**:

```css
box-sizing: content-box;
width: 100%;
border: solid rgb(90,107,204) 10px;
padding: 5px;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between RGBa, HEX and HSLa?***

* **RGB** (Red/Green/Blue) is a color model.

```css
p {
  color: rgba(37, 84, 127, 1);
}
```

* **HEX (Hexadecimal color values)**

```css
p {
  color: #25547f;
}
```

* **HSLa (Hue Saturation Lightness alpha)**

```css
p {
  color: hsla(209, 55%, 32%, 1);
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is CSS preprocessor?***

Pre-processors extend CSS with variables, operators, interpolations, functions, mixins and many more other usable assets. After development, these specific files are compiled into regular CSS that any browser can understand. Pre-processor help writing reusable, easily maintainable and extensible codes in CSS. 

**CSS preprocessors**

  * SASS (SCSS)
  * LESS
  * Stylus
  * PostCSS

**Advantages:**

* CSS is made more maintainable.
* Easy to write nested selectors.
* Variables for consistent theming. Can share theme files across different projects.
* Mixins to generate repeated CSS.
* Splitting your code into multiple files. CSS files can be split up too but doing so will require an HTTP request to download each CSS file.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between "resetting" and "normalizing" CSS?***

**1. Resetting**: CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.

**Example**

```css
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, 
acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, 
sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, 
caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, 
footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {  
   margin: 0;  
   padding: 0;  
   border: 0;  
   font-size: 100%;  
   font: inherit;  
   vertical-align: baseline; 
}
```

**2. Normalizing**: Normalize CSS aims to make built-in browser styling consistent across browsers. It also corrects bugs for common browser dependencies.

**Example**

```css
/* 
  Correct the font size and margin on `h1` elements within `section`  
  and `article` contexts in Chrome, Firefox, and Safari.
*/
 h1 {  font-size: 2em;  margin: 0.67em 0;}
 ```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain CSS Block Formatting Context?***

Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

In a block formatting context, each box\'s left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch)

A BFC is an HTML box that satisfies at least one of the following conditions:

* The value of `float` is not `none`.
* The value of `position` is neither `static` nor `relative`.
* The value of `display` is `table-cell`, `table-caption`, `inline-block`, `flex`, or `inline-flex`.
* The value of `overflow` is not `visible`.

In a BFC, each box\'s left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). Vertical margins between adjacent block-level boxes in a BFC collapse. 

**Example**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>CSS Block Formatting Context</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <style type="text/css">
    * {
      box-sizing: border-box;
    }

    body {
      margin: 40px;
      background-color: #fff;
      color: #444;
      font: 1.4em Arial, sans-serif;
    }

    .outer {
      background-color: #ccc;
      margin: 0 0 40px 0;
    }

    p {
      padding: 0;
      margin: 20px 0 20px 0;
      background-color: rgb(233, 78, 119);
      color: #fff;
    }

    .overflow {
      overflow: auto;
    }
  </style>
  <body>
    <h2>no BFC</h2>
    <div class="outer">
      <p>I am paragraph one and I have a margin top and bottom of 20px;</p>
      <p>I am paragraph two and I have a margin top and bottom of 20px;</p>
    </div>

    <h2>With a BFC</h2>

    <div class="outer overflow">
      <p>I am paragraph one and I have a margin top and bottom of 20px;</p>
      <p>I am paragraph two and I have a margin top and bottom of 20px;</p>
    </div>
  </body>
</html>
```

**Live Demo**: [CSS Block Formatting](https://learning-zone.github.io/css-interview-questions/assets/files/block-formatting-context.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the float property and what float do?***

The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. 

**Syntax**

```css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Global values */
float: inherit;
float: initial;
float: unset;
```

**Property Values**

|Sl.No| Value  | Description| 
|-----|--------|------------|
| 01. |none	   |The element does not float, (will be displayed just where it occurs in the text).|	
| 02. |left	   |The element floats to the left of its container	|
| 03. |right	 |The element floats the right of its container	|
| 04. |initial |Sets this property to its default value.    	|
| 05. |inherit |Inherits this property from its parent element. |

**Example**:

```css
section {
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```

```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Morbi tristique sapien ac erat tincidunt, sit amet dignissim
     lectus vulputate. Donec id iaculis velit. Aliquam vel
     malesuada erat. Praesent non magna ac massa aliquet tincidunt
     vel in massa. Phasellus feugiat est vel leo finibus congue.</p>
</section>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Describe clear Property in css?***

The clear property specifies what elements can float beside the cleared element and on which side.

|Sl.No| Properties     | Description  |
|-----|----------------|--------------|
| 01. |clear: none     |Allows floating elements on both sides. This is default|
| 02. |clear: left     |No floating elements allowed on the left side|
| 03. |clear: right    |No floating elements allowed on the right side|
| 04. |clear: both     |No floating elements allowed on either the left or the right side|
| 05. |clear: inherit  |The element inherits the clear value of its parent|

**Example**

```css
div {
  clear: left;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the purpose of clearing floats in CSS?***

The **clear** property is directly related to the float property. It specifies if an element should be next to the floated elements or if it should move below them. This property applies to both floated and non-floated elements.

**CSS Syntax**

```css
clear: none|left|right|both|inherit|inline-start|inline-end;
```

### **Property Values**

|Value       |Description	                                       |
|------------|---------------------------------------------------|
|none	       |The element is not moved down to clear past floats.|
|left	       |The element is moved down to clear past left floats.|
|right	     |The element is moved down to clear past right floats.|
|Both 	     |The element is moved down to clear past both left and right floats.|

**Example**

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS clear Property</title>
  <style>
    .div1 {
      float: left;
      width: 100px;
      height: 50px;
      margin: 10px;
      border: 3px solid #73AD21;
    }

    .div2 {
      border: 1px solid red;
      height: 100px;
    }

    .div3 {
      float: left;
      width: 100px;
      height: 50px;
      margin: 10px;
      border: 3px solid #73AD21;
    }

    .div4 {
      border: 1px solid red;
      height: 100px;
      clear: left;
    }
  </style>
</head>
<body>
    <h2>Without clear</h2>
    <div class="div1">div1</div>
    <div class="div2">div2 - Notice that the div2 element is after div1, in the HTML code. 
      However, since div1 is floated to the left, this happens: the text in div2 is floated 
      around div1, and div2 surrounds the whole thing.
    </div><br/>

    <h2>Using clear</h2>
    <div class="div3">div3</div>
    <div class="div4">div4 - Using clear moves div4 down below the floated div3. The value 
      "left" clears elements floated to the left. You can also clear "right" and "both".</div>
</body>
</html>
```

**Live Demo**: [CSS clear Property](https://learning-zone.github.io/css-interview-questions/assets/files/clear-float.html) 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is a clearfix in CSS?***

A **clearfix** is a way for an element to clear its child elements automatically without any additional markup. The clearfix property is generally used in float layouts where elements are floated to be stacked horizontally.

The clearfix property allows a container to wrap its floated children. Without a clearfix, a container will not wrap around its floated children and will collapse, just as if its floated children had been positioned absolutely.

<p align="center">
  <img src="assets/images/clearfix.png" alt="CSS rule" width="800px;" />
</p>

**Syntax**

```css
.clearfix {
  properties
}
```

**Example**

```html

<!DOCTYPE html>
<html>
<head>
  <title>CSS Clearfix property</title>
  <style>
    div {
      border: 3px solid #4CAF50;
      padding: 5px;
    }

    .clearfix {
      overflow: auto;
    }
    
    .img {
      float: right;
    }
  </style>
</head>
<body>
  <div class="clearfix">
    <img class="img" 
         src="../images/horse.jpg" 
         alt="Running Horse" 
         width="250"
         height="180">
        Running Horse
  </div>
</body>
</html>
```

**Live Demo**: [CSS Clearfix](https://learning-zone.github.io/css-interview-questions/assets/files/clearfix.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Does `overflow: hidden` create a new block formatting context?***

Yes. overflow property deals with the content if content size exceeds the allocated size for the content. You can make extra content visible, hidden, scroll or auto (viewport default behavior).

## Q. ***How would you approach fixing browser-specific styling issues?***

* Use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though.
* Use `autoprefixer` to automatically add vendor prefixes to your code.
* Use Reset CSS or Normalize.css.

```css
/*Example: 01*/
.box-shadow {
  background-color: red;
  background-image: url(gradient-slice.png);
  background-image: -webkit-linear-gradient(top right, #A60000, #FFFFFF); /*Chrome and Safari*/
  background-image: -moz-linear-gradient(top right, #A60000, #FFFFFF); 	  /*Firefox*/
  background-image: -ms-linear-gradient(top right, #A60000, #FFFFFF);     /*Internet Explorer*/
  background-image: -o-linear-gradient(top right, #A60000, #FFFFFF);      /*Opera*/
  background-image: linear-gradient(top right, #A60000, #FFFFFF);
}

/*Example: 02*/
.box {
	-moz-border-radius: 15px;    /* Firefox */
	-webkit-border-radius: 15px; /* Safari and Chrome */
	border-radius: 15px;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are your favorite image replacement techniques and which do you use when?***

**Technique: 01**

```css
h1#technique-one {
  width: 250px;
  height: 25px;
  background-image: url(logo.gif);
}
h1#technique-one span {
  display: none;
}
```

```html
<h1 id="technique-one">
  <span>CSS-Tricks</span>
</h1>
```

**Technique: 02**

```css
h1.technique-two {
  width: 2350px; 
  height: 75px;
  background: url("images/header-image.jpg") top right;
  margin: 0 0 0 -2000px;
}
```

```html
<h1 class="technique-two">
  CSS-Tricks
</h1>
```

**Technique: 03**

```css
h1.technique-three {
  width: 350px; 
  height: 75px;
  background: url("images/header-image.jpg");
  text-indent: -9999px;
}
```

```html
<h1 class="technique-three">
  CSS-Tricks
</h1>
```

**Technique: 04**

```css
h1.technique-four {
	width: 350px; 
  height: 75px;
	background: url("images/header-image.jpg");
	text-indent: -9999px;
}
```
```html
<h1 class="technique-four">
  <a href="#">
    <img src="images/header-image.jpg" alt="CSS-Tricks" />
  </a>
</h1>
```

**Technique: 05**

```css
h1.technique-five {
	width: 350px; 
  height: 75px;
	background: url("images/header-image.jpg");
}
h1.technique-five span {
  display: none;
}
```
```html
<h1 class="technique-five">
  <img src="images/blank.gif" alt="CSS-Tricks" />
  <span>CSS-Tricks</span>
</h1>
```

**Technique: 06**

```css
h1.technique-six {
	width: 350px;
	padding: 75px 0 0 0;
	height: 0;
	background: url("images/header-image.jpg") no-repeat;
	overflow: hidden;
}
```

```html
<h1 class="technique-six">
  CSS-Tricks
</h1>
```

**Technique: 07**

```css
h1.technique-seven {
	width: 350px; 
  height: 75px;
	background: url("images/header-image.jpg") no-repeat;
}
h1.technique-seven span {
  display: block;
  width: 0;
  height: 0;
  overflow: hidden;
}
```

```html
<h1 class="technique-seven">
	<span>CSS-Tricks</span>
</h1>
```

**Technique: 08**

```css
h1.technique-eight {
	width: 350px; 
  height: 75px;
	position: relative;
}
h1.technique-eight span {
  background: url("images/header-image.jpg");
  position: absolute;
  width: 100%;
  height: 100%;
}
```

```html
<h1 class="technique-eight">
  <span></span>CSS-Tricks
</h1>
```

**Technique: 09**

```css
h1.technique-nine {
  width: 350px; 
  height: 75px;
  background: url("images/header-image.jpg") no-repeat;
  font-size: 1px;
  color: white;
}
```

```html
<h1 class="technique-nine">
  CSS-Tricks
</h1>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are media queries? How could you apply css rules specific to a media?***

Media queries are useful when you want to modify your site or app depending on a device\'s general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width). It uses the @media rule to include a block of CSS properties only if a certain condition is true.

**Media Types**

|Sl.No| Value | Description          |
|------|-------|---------------------|
|  01. |all	   |Default. Used for all media type devices|
|  02. |print	 |Used for printers|
|  03. |screen |Used for computer screens, tablets, smart-phones etc.|
|  04. |speech |Used for screenreaders that "reads" the page out loud|

**Media Features**  

|Sl.No | Value           | Description          |
|------|-----------------|----------------------|  
| 01.  |any-hover	       | Does any available input mechanism allow the user to hover over elements? |
| 02.  |any-pointer	     | Is any available input mechanism a pointing device, and if so, how accurate is it? |
| 03.  |aspect-ratio	   | The ratio between the width and the height of the viewport|
| 04.  |color	           | The number of bits per color component for the output device|
| 05.  |color-gamut	     | The approximate range of colors that are supported by the user agent and output device|
| 06.  |color-index	     | The number of colors the device can display|
| 07.  |grid	           | Whether the device is a grid or bitmap|
| 08.  |height	         | The viewport height|
| 09.  |hover	           | Does the primary input mechanism allow the user to hover over elements? |
| 10.  |inverted-colors	 | Is the browser or underlying OS inverting colors? |
| 11.  |light-level	     | Current ambient light level |
| 12.  |max-aspect-ratio |	The maximum ratio between the width and the height of the display area|
| 13.  |max-color	       | The maximum number of bits per color component for the output device|
| 14.  |max-color-index	 | The maximum number of colors the device can display|
| 15.  |max-height	     | The maximum height of the display area, such as a browser window|
| 16.  |max-monochrome	 | The maximum number of bits per "color" on a monochrome (greyscale) device|
| 17.  |max-resolution	 | The maximum resolution of the device, using dpi or dpcm|
| 18.  |max-width	       | The maximum width of the display area, such as a browser window|
| 19.  |min-aspect-ratio |	The minimum ratio between the width and the height of the display area|
| 20.  |min-color	       | The minimum number of bits per color component for the output device|
| 21.  |min-color-index	 | The minimum number of colors the device can display|
| 22.  |min-height	     | The minimum height of the display area, such as a browser window|
| 23.  |min-monochrome	 | The minimum number of bits per "color" on a monochrome (greyscale) device|
| 24.  |min-resolution	 | The minimum resolution of the device, using dpi or dpcm|
| 25.  |min-width	       | The minimum width of the display area, such as a browser window|
| 26.  |monochrome	     | The number of bits per "color" on a monochrome (greyscale) device|
| 27.  |orientation	     | The orientation of the viewport (landscape or portrait mode)|
| 28.  |overflow-block	 | How does the output device handle content that overflows the viewport along the block axis| 
| 29.  |overflow-inline	 | Can content that overflows the viewport along the inline axis be scrolled |
| 30.  |pointer	         | Is the primary input mechanism a pointing device, and if so, how accurate is it? |
| 31.  |resolution	     | The resolution of the output device, using dpi or dpcm|
| 32.  |scan	           | The scanning process of the output device|
| 33.  |scripting	       | Is scripting (e.g. JavaScript) available? |
| 34.  |update	         | How quickly can the output device modify the appearance of the content |
| 35.  |width	           | The viewport width |


**Example**:

```css
@media print {
  body { font-size: 10pt; }
}

@media screen {
  body { font-size: 13px; }
}

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) { }

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) { }

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) { }

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) { }

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) { }
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the use of `@media only screen`?***

It hide style sheets from older user agents.

## Q. ***Does the `screen` keyword apply to the device\'s physical screen or the browser\'s viewport?***

Browser\'s Viewport

## Q. ***How would you implement a web design comp that uses non-standard fonts?***

Use `@font-face` and define `font-family` for different `font-weight`s.

## Q. ***How a browser determines what elements match a CSS selector?***

Browsers match selectors from rightmost (key selector) to left. Browsers filter out elements in the DOM according to the key selector and traverse up its parent elements to determine matches. The shorter the length of the selector chain, the faster the browser can determine if that element matches the selector.

For example with this selector `p span`, browsers firstly find all the `<span>` elements and traverse up its parent all the way up to the root to find the `<p>` element. For a particular `<span>`, as soon as it finds a `<p>`, it knows that the `<span>` matches and can stop its matching.

## Q. ***How can you load css resources conditionally?***

**@import**:  allows to load stylesheet by using a path (uri) representing the location of the file.

```css
/* By default, include the "light" color theme for syntax highlighting */
@import "cdn.com/atom-one-light.min.css";
/* And if you’re in dark mode, have those rules superseded via a different stylesheet */
@media (prefers-color-scheme: dark) {
  @import "cdn.com/atom-one-dark.min.css";
}
```

**matchMedia()**: Using matchMedia lets you execute blocks of JavaScript only when a certain media query condition is met. This means you can just write out the CSS when and if the query is true:

```javascript
if (window.matchMedia('screen and (min-width: 600px)')) {
  document.write('<link rel="stylesheet" href="css/small.css">');
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does  `* { box-sizing: border-box; }` do? What are its advantages?***

* Make every element in the document include the padding and border in the element\'s inner dimensions; 
making it easier to reason about the layout of elements on the page.
* By default, elements have `box-sizing: content-box` applied, and only the content size is being accounted for.
* `box-sizing: border-box` changes how the `width` and `height` of elements are being calculated, `border` and `padding` are also being included in the calculation.
* The `height` of an element is now calculated by the content\'s `height` + vertical `padding` + vertical `border` width.
* The `width` of an element is now calculated by the content\'s `width` + horizontal `padding` + horizontal `border` width.
* Taking into account `padding`s and `border`s as part of our box model resonates better with how designers actually imagine content in grids.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***List display property in CSS?***

The display property specifies the display behavior (the type of rendering box) of an element.  
**Example**:

```css
p.ex1 {display: none;}
p.ex2 {display: inline;}
p.ex3 {display: block;}
p.ex4 {display: inline-block;}
```

**Property Values**

|Sl.No|Value	   |Description	
|-----|---------------|------------------
| 01. |inline	|Displays an element as an inline element (like `<span>`). Any height and width properties will have no effect|	
| 02. |block	|Displays an element as a block element (like `<p>`). It starts on a new line, and takes up the whole width	|
| 03. |contents|Makes the container disappear, making the child elements children of the element the next level up in the DOM	|
| 04. |flex	          |Displays an element as a block-level flex container	|
| 05. |grid	          |Displays an element as a block-level grid container	|
| 06. |inline-block   |Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values|	
| 07. |inline-flex	   |Displays an element as an inline-level flex container	|
| 08. |inline-grid	   |Displays an element as an inline-level grid container	|
| 09. |inline-table    |The element is displayed as an inline-level table	|
| 10. |list-item	     |Let the element behave like a `<li>` element	|
| 11. |run-in	         |Displays an element as either block or inline, depending on context	|
| 12. |table	         |Let the element behave like a `<table>` element	|
| 13. |table-caption	 |Let the element behave like a `<caption>` element	|
| 14. |table-column-group	|Let the element behave like a `<colgroup>` element	|
| 15. |table-header-group	|Let the element behave like a `<thead>` element	|
| 16. |table-footer-group	|Let the element behave like a `<tfoot>` element	|
| 17. |table-row-group	  |Let the element behave like a `<tbody>` element	|
| 18. |table-cell	        |Let the element behave like a `<td>` element	|
| 19. |table-column	      |Let the element behave like a `<col>` element	|
| 20. |table-row	        |Let the element behave like a `<tr>` element	|
| 21. |none	              |The element is completely removed	|
| 22. |initial	          |Sets this property to its default value. Read about initial	|
| 23. |inherit	          |Inherits this property from its parent element. Read about inherit|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How is responsive design different from adaptive design?*** 

**1) Responsive design** uses `CSS media queries` to change styles based on the target device such as display type, width, height, etc., and only one of these is necessary for the site to adapt to different screens.

Responsive doesn’t offer as much control as adaptive, but takes much less work to both build and maintain. Responsive layouts are also fluid and whilst adaptive can and do use percentages to give a more fluid feel when scaling, these can again cause a jump when a window is resized. 

**2) Adaptive design** uses static layouts based on breakpoints which don\'t respond once they\’re initially loaded. Adaptive works to detect the screen size and load the appropriate layout for it.
Generally adaptive site uses six common screen widths:

* 320 px
* 480 px
* 760 px
* 960 px
* 1200 px
* 1600 px

Adaptive is useful for retrofitting an existing site in order to make it more mobile-friendly. This allows you to take control of the design and develop for specific, multiple viewports. 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is retina graphics? What kind of techniques do you use to handle images for retina screens?***

In order to have crisp, good-looking graphics that make the best of retina displays we need to use high resolution images whenever possible. However using always the highest resolution images will have an impact on performance as more bytes will need to be sent over the wire.

To overcome this problem, we can use responsive images, as specified in HTML5. It requires making available different resolution files of the same image to the browser and let it decide which image is best, using the html attribute `srcset` and optionally `sizes`, for instance:

```html
<div responsive-background-image>  
  <img src="/images/foo.png" alt="bar" srcset="/images/foo.png 2x" />
</div>

<!-- It enable the browser to use a medium and large image based on 
     the sizes of the image in the viewport
-->
<img
  src="/images/foo.png"
  alt="bar"
  srcset="/images/foo-medium.png 1024w,
               /images/foo-large.png 2048w,
               /images/foo.png 800w"
/>
```

The browsers which does not support HTML5\'s `srcset` (i.e. IE11) will ignore it and uses `src` instead. If we really need to support IE11 and we want to provide this feature for performance reasons, we can use a JavaScript `polyfill`.

**HTML5 picture Element**

```html
<picture>
   <source media="(min-width: 1024px)" srcset="foo-large.jpg  1024w, foo-medium.jpg 640w" sizes="50vw" />
   <source srcset="foo@2x.jpg 2x, foo.jpg 1x" />
   <img src="foo.jpg" alt="Bar" />
</picture>
```

**Retina Display Media Query**

```css
/* 1.25 dpr */
@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) { 
    /* Retina-specific stuff here */
}

/* 1.3 dpr */
@media (-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 124.8dpi) { 
    /* Retina-specific stuff here */
}

/* 1.5 dpr */
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) { 
    /* Retina-specific stuff here */
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa?*** 

`translate()` is a value of CSS `transform`. Changing `transform` or `opacity` does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers `reflow`. `transform` causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence `translate()` is more efficient and will result in shorter paint times for smoother animations.

When using `translate()`, the element still occupies its original space (sort of like `position: relative`), unlike in changing the absolute positioning.

**Example:**

If we combine `position:relative` with one of the offset properties `top`, `bottom`, `left` or `right` the element will be moved from its original place in the layout whilst preserving the space in the document it once occupied. The element will be moved on to a new layer and its “layer order” or its stacking order can then be controlled with the `z-index` property.

```css
.thing {
  position: relative;
  top: 100px;
  left: 50px;
}
```

In the above example the element will be moved 100px away from the top and 50px away from the left of its original position.

When using `transform:translate(x,y)` we get a very similar visual result to using relative position. The same result as above could be achieved with the following snippet:

```css
.thing {
  transform: translate(50px, 100px);
}
```

In this case, we are translating the coordinates of the element by `50px` along the x-axis and `100px` along the y-axis. The end result is visually the same as the previous `position` example.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***The translate() function can move the position of an element on the z-axis?***

* False

## Q. ***Tell what each of these tags do, if there are alternatives, which are preferable, why?***

**`<em>`**: The HTML `<em>` tag represents stress emphasis of its contents.

```html
<em>Emphasized content...</em>
```

**`<b>`**: The `<b>` tag specifies bold text without any extra importance.

```html
<p>This is normal text - <b>and this is bold text</b>.</p>
```

**`<abbr>`**: The HTML Abbreviation element (`<abbr>`) represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation.

```html
The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.
```

**`<nav>`**: The `<nav>` tag defines a set of navigation links.

```html
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```

**`<i>`**: The content of the `<i>` tag is usually displayed in italic.
```html
<p>I looked at it and thought <i>This can't be real!</i></p>
```

**`<link>`**: The HTML `<link>` tag is used for defining a link to an external resource. It is placed in in the `<head>` section of the HTML document.
```html
<head>
  <link rel="stylesheet" type="text/css" href="theme.css">
</head>
```

**`<strong>`**: The `<strong>` element is used to identify text that is of greater importance than the surrounding text. By default, all browsers render `<strong>` text in a bold typeface.
```html
<strong>Strong text</strong>
```
**`<article>`**: The `<article>` tag specifies independent, self-contained content.
```html
<article>
  <h1>Google Chrome</h1>
  <p>Google Chrome is a free, open-source web browser developed by Google, released in 2008.</p>
</article>
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is At-Rule?***

At-rules are `CSS statements` that instructs CSS how to behave. They begin with an at sign, `@` followed by an identifier and includes everything up to the next semicolon, `;` or the next CSS block, whichever comes first.
```css
/* General structure */
@IDENTIFIER (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

|Sl.No| at-rules  | Description |
|-----|-----------|-------------|
| 01. |@charset   |Defines the character set used by the style sheet.|
| 02. |@import    |Tells the CSS engine to include an external style sheet.|
| 03. |@namespace |Tells the CSS engine that all its content must be considered prefixed with an XML namespace.|
| 04. |@media     |A conditional group rule that will apply its content if the device meets the criteria of the condition defined using a media query.|
| 05. |@supports  |A conditional group rule that will apply its content if the browser meets the criteria of the given condition.|
| 06. |@page      |Describes the aspect of layout changes that will be applied when printing the document.|
| 07. |@font-face |Describes the aspect of an external font to be downloaded.|
| 08. |@keyframes |Describes the aspect of intermediate steps in a CSS animation sequence.|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How can the gap under the image be removed?***

As images being inline elements are treated same as texts, so there is a gap left, which can be removed by:

```html
<figure>
  <img style="display: block" src="..." alt="">
</figure>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is progressive rendering?***

Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible.

**Examples:**

* **Lazy loading of images** - Images on the page are not loaded all at once. JavaScript will be used to load an image when the user scrolls into the part of the page that displays the image.
* **Prioritizing visible content (or above-the-fold rendering)** - Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the DOMContentLoaded/load event to load in other resources and content.
* **Async HTML fragments** - Flushing parts of the HTML to the browser as the page is constructed on the back end.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is mobile-first? Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?***

Making a website responsive means the some elements will respond by adapting its size or other functionality according to the device\'s screen size, typically the viewport width, through CSS media queries, for example, making the font size smaller on smaller devices.

```css
@media (min-width: 601px) {
  .my-class {
    font-size: 24px;
  }
}
@media (max-width: 600px) {
  .my-class {
    font-size: 12px;
  }
}
```

A mobile-first strategy is also responsive, however it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later. Following the previous example:

```css
.my-class {
  font-size: 12px;
}

@media (min-width: 600px) {
  .my-class {
    font-size: 24px;
  }
}
```

A mobile-first strategy has 2 main advantages:

* It\'s more performant on mobile devices, since all the rules applied for them don\'t have to be validated against any media queries.
* It forces to write cleaner code in respect to responsive CSS rules.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Media Query</title>
  <style>
    body {
        background-color: lightgreen;
    }

    @media only screen and (max-width: 800px) {
        body {
            background-color: rgb(233, 50, 18);
        }
    }
  </style>
  </head>
<body>
    <h1>Resize the browser window</h1>
    <h2>When the width of this document is 800px or less, the background-color is "green", 
      otherwise it is "Red".</h2>
</body>
</html>
```

**Live Demo**: [Media Query](https://learning-zone.github.io/css-interview-questions/assets/files/media-query.html) 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which property is used to change the face of a font?***

The `font-family` property is used to change the face of a font.

## Q. ***Which property is used to make a font italic or oblique?***

The `font-style` property is used to make a font italic or oblique.

## Q. ***Which property is used to create a small-caps effect?***

The `font-variant` property is used to create a small-caps effect.

## Q. ***Which property is used to increase or decrease how bold or light a font appears?***

The `font-weight` property is used to increase or decrease how bold or light a font appears.

## Q. ***Which property is used to add or subtract space between the letters that make up a word?***

The `letter-spacing` property is used to add or subtract space between the letters that make up a word.

## Q. ***Which property is used to add or subtract space between the words of a sentence?***

The `word-spacing` property is used to add or subtract space between the words of a sentence.

## Q. ***Which property is used to indent the text of a paragraph?***

The `text-indent` property is used to indent the text of a paragraph.

## Q. ***Which property is used to align the text of a document?***

The `text-align` property is used to align the text of a document.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which property is used to underline, overline, and strikethrough text?***

The `text-decoration` property is used to underline, overline, and strikethrough text.

## Q. ***Which property is used to capitalize text or convert text to uppercase or lowercase letters?***

The `text-transform` property is used to capitalize text or convert text to uppercase or lowercase letters.

## Q. ***Which property allows you to control the shape or appearance of the marker of a list?***

The `list-style-type` allows you to control the shape or appearance of the marker.

## Q. ***How do I restore the default value of a property?***

The keyword `initial` can be used to resets it to its default value, which is defined in the CSS specification of the given property.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is specificity? How to calculate specificity?***

A process of determining which css rule will be applied to an element. It actually determines which rules will take precedence. Inline style usually wins then ID then class value (or pseudo-class or attribute selector), universal selector (*) has no specificity. ID selectors have a higher specificity than attribute selectors.

**Selector Types**  

The following list of selector types increases by specificity:

* **Type selectors** (e.g., h1) and pseudo-elements (e.g., ::before).
* **Class selectors** (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
* **ID selectors** (e.g., #example).

```css
/*wins*/
a#a-02 { background-image : url(n.gif); }
a[id="a-02"] { background-image : url(n.png); }
```

Contextual selectors are more specific than a single element selector.The embedded style sheet is closer to the element to be styled. The last rule defined overrides any previous, conflicting rules.

```css
p { color: red; background: yellow }
p { color: green } // wins
```

A class selector beats any number of element selectors.

```css
.introduction {} //wins
html body div div h2 p {}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What do you know about CSS Transitions?***

**CSS Transitions** allows to add an effect while changing from one style to another. You can set the which property you want to transition, duration, how you want to transit (linear, ease, ease-in, ease-out, cubic-bezier) and delay when transition will start.

**CSS Transition Properties**  

|Sl.No| Property                  | Description                       |
|-----|---------------------------|-----------------------------------|
| 01. |transition	                |A shorthand property for setting the four transition properties into a single property|
| 02. |transition-delay	          |Specifies a delay (in seconds) for the transition effect|
| 03. |transition-duration	      |Specifies how many seconds or milliseconds a transition effect takes to complete|
| 04. |transition-property	      |Specifies the name of the CSS property the transition effect is for|
| 05. |transition-timing-function	|Specifies the speed curve of the transition effect|

**Example: 01**

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  -webkit-transition: width 2s; /* Safari prior 6.1 */
  transition: width 2s;
}
```

**Live Demo**: [CSS Transitions](https://learning-zone.github.io/css-interview-questions/assets/files/transitions-index.html) 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the different css filters you can use?***

The filter CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Example**:

```css
img {
  -webkit-filter: brightness(200%); /* Safari 6.0 - 9.0 */
  filter: brightness(200%);
}
```
**Filter Functions**  

|Sl.No|Filter        | Description                       |
|-----|--------------|-----------------------------------|
| 01. |none	         |Default value. Specifies no effects|
| 02. |blur(px)	     |Applies a blur effect to the image. A larger value will create more blur.|
| 03. |brightness(%) |Adjusts the brightness of the image.|
| 04. |contrast(%)	 |Adjusts the contrast of the image.	|
| 05. |drop-shadow(h-shadow v-shadow blur spread color)|Applies a drop shadow effect to the image.|
| 06. |grayscale(%)	 |Converts the image to grayscale.|
| 07. |hue-rotate(deg)|	Applies a hue rotation on the image. The value defines the number of degrees around the color circle| the image samples will be adjusted. 0deg is default, and represents the original image.|
| 08. |invert(%)	   |Inverts the samples in the image.|
| 09. |opacity(%)	   |Sets the opacity level for the image. The opacity-level describes the transparency-level|
| 10. |saturate(%)	 |Saturates the image.|
| 11. |sepia(%)	     |Converts the image to sepia.|
| 12. |url()	       |The url() function takes the location of an XML file that specifies an SVG filter, and may include an anchor to a specific filter element. **Example**: `filter: url(svg-url#element-id)`	|
| 13. |initial	     |Sets this property to its default value.|
| 14. |inherit	     |Inherits this property from its parent element.|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Enlist the various fonts properties?***

|Property	             |Description                |
|----------------------|---------------------------|
|font-style	           | Specifies the font style. |
|font-variant	         | Specifies the font variant. |
|font-weight	         | Specifies the font weight. |
|font-size/line-height | Specifies the font size and the line-height. |
|font-family	         | Specifies the font family. Default value depends on the browser|
|caption	             | Uses the font that are used by captioned controls (like buttons, drop-downs, etc.)|
|icon	                 | Uses the font that are used by icon labels|
|menu	                 | Uses the fonts that are used by dropdown menus|
|message-box	         | Uses the fonts that are used by dialog boxes|
|small-caption	       | A smaller version of the caption font|
|status-bar	           | Uses the fonts that are used by the status bar|
|initial	             | Sets this property to its default value.|
|inherit	             | Inherits this property from its parent element.|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Enlist the various background properties css?***


|  Property             | Description                               |
|-----------------------|-------------------------------------------|
|background-color	      |Specifies the background color to be used	|
|background-image	      |Specifies ONE or MORE background images to be used	|
|background-position	  |Specifies the position of the background images	|
|background-size	      |Specifies the size of the background images	|
|background-repeat	    |Specifies how to repeat the background images	|
|background-origin	    |Specifies the positioning area of the background images|
|background-clip	      |Specifies the painting area of the background images|
|background-attachment	|Specifies whether the background images are fixed or scrolls with the rest of the page|
|initial	              |Sets this property to its default value.|
|inherit	              |Inherits this property from its parent element|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between `em` and `rem` units?***

Both em and rem units are based on the font-size CSS property. The only difference is where they inherit their values from.
* `em` units inherit their value from the font-size of the parent element

```css
.parent {
  font-size: 18px;
}
.child {
  font-size: 1.5em;
}
```

```html
<div class="parent">
  I'm 15px
  <div class="child">
  I'm 30px, as expected
    <div class="child">
    I'm 60px, trouble starts!
      <div class="child">
      I'm 120px, now we're really in trouble!
      </div>
    </div>
  </div>
</div>
```

* `rem` units inherit their value from the font-size of the root element (html)

```css
.html {
  font-size: 16px;
}
.parent {
  font-size: 15px;
}
.child-rem {
  font-size: 2rem;
}
```

```html
<div class="parent">
  I'm 15px
  <div class="child-rem">
  I'm 32px, as expected
    <div class="child-rem">
    I'm 32px, yep!
      <div class="child-rem">
      I'm 32px, like clockwork!
      </div>
    </div>
  </div>
</div>
```

*Note: In most browsers, the font-size of the root element is set to 16px by default.*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does !important mean in CSS?***

It overrides the cascade and gives the style rule the highest precedence.

```css
p {
    color: red !important;
}
#thing {
    color: green;
}
```
```html
<p id="thing">Will be RED.</p>
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Does style2.css have to be downloaded and parsed before Paragraph 1 is rendered on the page?***

```html
<head>
    <link href="style1.css" rel="stylesheet">
</head>
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <link href="style2.css" rel="stylesheet">
</body>
```
* Yes

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Does style1.css have to be downloaded and parsed before style2.css can be fetched?***

```html
<head>
    <link href="style1.css" rel="stylesheet">
    <link href="style2.css" rel="stylesheet">
</head>
```
* No

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the CSS positioning?***

|Keyword    | Value                 |Description                                                                           |
|:----------|:----------------------|:-------------------------------------------------------------------------------------|
|position 	|static 				|The default mode, block element is positioned in the flow. Top, left etc. are ignored.|
|position 	|relative 				|The block element is positioned relative to its position in the flow.                 |
|position 	|absolute 				|Block element is positioned relative to its container.                                |
|position 	|fixed 					|Block element is positioned relative to the window and won’t scroll.                  |
|top 		|Number [px, cm, in…] 	|Positions the block down from the reference point at the specified distance.          |
|bottom 	|Number [px, cm, in…] 	|Positions the block up from the reference point at the specified distance.            |
|left 		|Number [px, cm, in…] 	|Positions the block right from the reference point at the specified distance.         |
|right 		|Number [px, cm, in…] 	|Positions the block left from the reference point at the specified distance.          |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between padding and margin?***

**1) Margin** is applied to the outside of you element hence effecting how far your element is away from other elements.  
**2) Padding** is applied to the inside of your element hence effecting how far your element\'s content is away from the border.

Also, using margin will not affect your element\'s dimensions whereas padding will make your elements dimensions (set height + padding) so for example if you have a 100x100px div with a 5 px padding, your div will actually be 105x105px

<p align="center">
  <img src="assets/images/padding-margin.png" alt="Padding vs Margin" width="600px" />
</p>

*Note:* **Top/Bottom margins are collapsible:** if you have a 20px margin at the bottom of an element and a 30px margin at the top of the next element, the margin between the two elements will be 30px rather than 50px. This does not apply to left/right margin or padding.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are gradients in CSS?***

CSS gradients are represented by the `<gradient>` data type, a special type of `<image>` made of a progressive transition between two or more colors. There are three types of gradients: 
* linear (created with the `linear-gradient()` function), 
* radial (created with `radial-gradient()`), and 
* conic (created with the `conic-gradient()` function).  

We can also create repeating gradients with the `repeating-linear-gradient()`, `repeating-radial-gradient()`, and `repeating-conic-gradient()` functions.
```css
/* Example - 01: A basic linear gradient */
.simple-linear {
  background: linear-gradient(blue, pink);
}

/* Example - 02: Changing the direction */
.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}

/* Example - 03: Diagonal gradients */
.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}

/* Example - 04: Using angles */
.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}

/* Example - 05: Creating hard lines */
.striped { 
   background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%); 
}
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is CSS opacity?***

<p align="center">
  <img src="assets/images/box-opacity.jpg" alt="CSS Opacity" />
</p>

The `opacity` CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

```css
div { background-color: lightblue; }
.light {
  opacity: 30%; /* Barely see the text over the background */
}
.medium {
  opacity: 60%; /* See the text more clearly over the background */
}
.heavy {
  opacity: 100%; /* See the text very clearly over the background */
}
```

```html
<div class="light">You can barely see this.</div>
<div class="medium">This is easier to see.</div>
<div class="heavy">This is very easy to see.</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How is the concept of inheritance applied in CSS?***

Inheritance is a concept in which the child class will inherit the properties of its parent class. It is used in CSS to define the hierarchy from the top level to the bottom level. Inherited properties can be overridden by the children class if the child uses the same name.

**Example:**
```css
span {
  color: blue;
  border: 1px solid black;
}
.extra span {
  color: inherit;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you handle browser differences in your user base?***

The `@supports` query in CSS can be very useful to scan if the user\'s current browser has a certain feature. The `@supports` CSS at-rule lets you specify declarations that depend on a browser\'s support for one or more specific CSS features. This is called a feature query. The rule may be placed at the top level of your code or nested inside any other conditional group at-rule.

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}

@supports not (display: grid) {
  div {
    float: right;
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Cascade?***

Cascade is a method of defining the weight (importance) of individual styling rules thus allowing conflicting rules to be sorted out should such rules apply to the same selector.

```css
P {color: white ! important} /* increased weight */
P (color: black} /* normal weight */
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are CSS vendor prefixes?***

Vendor prefixes are extensions to CSS standards that can be added to these features to prevent incompatibilities from arising when the standard is extended. CSS vendor prefixes for some common platforms are listed below.

* **-webkit-**: Android, Chrome, iOS, and Safari
* **-moz-**: Mozilla Firefox
* **-ms-**: Internet Explorer
* **-o-**: Opera

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is DOM (Document Object Model) and how is it linked to CSS?***

The Document Object Model (DOM) is a programming interface for HTML and XML(Extensible markup language) documents. It defines the logical structure of documents and the way a document is accessed and manipulated. This document enables Javascript to access and manipulate the elements and styles of a website. The model is built in a tree structure of objects and defines:

* The HTML elements as objects
* The properties of all HTML elements
* The methods to access all HTML elements
* The events for all HTML elements

<p align="center">
  <img src="assets/images/DOM.png" alt="Document Object Model" width="500px;" />
</p>

### **DOM Document**

The DOM Document is the owner of all other objects in your webpage. That means if you want to access any object on your webpage you always have to start with the document. It also contains many important properties and methods that enable us to access and modify our website.

### **Finding HTML Elements**

|Methods           |Description |
|------------------|-----------------|
|getElementById()  |This method is used to get a single element by its id.|
|getElementsByClassName() |This method returns an array of elements.      |
|getElementsByTagName()   |This method is used to get a single element by its tag name|
|querySelector()          |This method returns the first element that matches a specified CSS selector. It can get elements by id, class, tag and all other valid CSS selectors. |
|querySelectorAll()       |This method is completely the same as the querySelector() except that it returns all elements that fit the CSS Selector.|

### **Changing HTML Elements**

The innerHTML property can be used to change the content of an HTML element. In this example we get the element with an id of header and set the inner content to "Hello World!".

```js
// Example: Using text
document.getElementById("#header").innerHTML = "Hello World!";

// Example: Using text with tag
document.getElementsByTagName("div").innerHTML = "<h1>Hello World!</h1>"
```

**Changing a value of an attribute**

We can also change the value of an attribute using the DOM.

```js
document.getElementsByTag("img").src = "image.jpg";
```

**Changing the style**

To change the style of an HTML element we need to change the style property of our elements. The CSS properties need to be written in camelcase instead of the normal css property name.

```js
document.getElementsByTag("h1").style.borderBottom = "solid 3px #000";
```

### **Adding and deleting elements**

**Adding elements**

create a div element using the `createElement()` method which takes a tagname as a parameter and saves it into a variable. After that we just need to give it some content and then insert it into our DOM document.

```js
var div = document.createElement("div");

var newContent = document.createTextNode("Hello World!"); 
div.appendChild(newContent);
document.body.insertBefore(div, currentDiv);
```

Here we create content using the `createTextNode()` method which takes a String as a parameter and then we insert our new div element before a div that already exists in our document.

**Deleting elements**

Here we get an element and delete it using the `removeChild()` method.

```js
var elem = document.querySelector('#header');
elem.parentNode.removeChild(elem);
```

**Replace elements**

```js
var div = document.querySelector('#div');
var newDiv = document.createElement('div');

newDiv.innerHTML = "Hello World2";
div.parentNode.replaceChild(newDiv, div);
```

Here we replace an element using the `replaceChild()` method. The first argument is the new element and the second argument is the element which we want to replace.

### **Writing directly into the HTML output stream**

We can also write HTML expressions and JavaScript directly into the HTML output stream using the `write()` method. The `write()` method can also take multiple arguments that will be appended to the document in order of their occurrence.

```js
// HTML Content
document.write("<h1>Hello World!</h1><p>This is a paragraph!</p>");

// date object
document.write(Date());
```

### **Event Handlers**

The HTML DOM also allows Javascript to react to HTML events. for example, mouse click, page load, mouse move, input field change etc.

**Assign Events**

You can define events directly in your js code. Here is an example of an onclick event:

```js
document.getElementById("btn").onclick = changeText();
```

**Assign Events Listeners**

Here we just assigned a clickevent that calls the runEvent method when our btn element is clicked.

```js
document.getElementById("btn").addEventListener('click', runEvent);
```

### **Node Relationships**

The nodes in the DOM Document have a hierarchical relationship to each other. This means that the nodes are structured like a tree. We use the terms parent, sibling and child to describe the relationship between nodes.

The top node is called the root and is the only node that has no parent. The root in a normal HTML document is the `<html/>` tag because it has no parent and is the top tag of the document.

**Navigating Between Nodes**

We can navigate between nodes using these properties:

* parentNode
* childNodes
* firstChild
* lastChild
* nextSibling

**Example**

```js
var parent = document.getElementById("heading").parentNode
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the usage of "table-layout" property?***

The **table-layout** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns. 

**Syntax**

```css
table-layout: auto|fixed|initial|inherit;
```

### **Property Values**

|Value          |Description          |
|---------------|---------------------|
|auto:          |It is used to set the automatic table layout on the browser. This property set the column width by unbreakable content in the cells.|
|fixed:         |It is used to set a fixed table layout. The table and column widths are set by the widths of table and col or by the width of the first row of cells. Cells in other rows do not affect column widths. If no widths are present on the first row, the column widths are divided equally across the table according to content of table.|
|initial:       |It is used to set its default value.|
|inherit:       |It is used to inherit the property from its parent.|

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
      <title>table-layout Property</title>
    <style>
      table {
        width: 100%; 
        table-layout: fixed;       
        border-collapse: collapse;
      } 

      th, td {
        padding: 8px;
        border: 1px solid #dee2e6;
      }

      th {
        height: 40px;
        text-align: left;
      }
    </style>
  </head>
<body>
<h2>table-layout Property</h2>
<table>
    <thead>
        <tr>
            <th>Row</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Clark</td>
            <td>Kent</td>
            <td>clarkkent@mail.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>John</td>
            <td>Carter</td>
            <td>johncarter@mail.com</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Peter</td>
            <td>Parker</td>
            <td>peterparker@mail.com</td>
        </tr>            
    </tbody>
</table>
</body>
</html>
```

**Live Demo**: [Table-layout Property](https://learning-zone.github.io/css-interview-questions/assets/files/table-layout.html)

*Note: The main benefit of `table-layout: fixed;` is that the table renders much faster. On large tables, users will not see any part of the table until the browser has rendered the whole table. So, if you use `table-layout: fixed`, users will see the top of the table while the browser loads and renders rest of the table. This gives the impression that the page loads a lot quicker!*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Does margin-top or margin-bottom have an effect on inline elements***

Top and bottom margins do not affect inline elements because inline elements flow with content on the page. You can set left and right margins/padding on an inline element but not top or bottom because it would disrupt the flow of content. You can set margins on block (or inline-block but it will only look right if you set the vertical align right) because block level elements disrupt the flow of content.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Separator</title>
  </head>
  <style>
    .separator {
      border: 1px solid #333;
      margin: 10px;
    }
  </style>
  <body>
    <div>
        <span>Hello</span>
        <span class="separator"></span>
        <span>World</span>
    </div>
  </body>
</html>
```

**Live Demo**: [Inline Elements](https://learning-zone.github.io/css-interview-questions/assets/files/separator.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How does Calc() work?***

The `calc()` function can be used to perform addition, subtraction, multiplication, and division calculations with numeric property values. Specifically, it can be used with `<length>`, `<frequency>`, `<angle>`, `<time>`, `<number>`, or `<integer>` data types.

**Example**

```css
/* Example - 1 */
.main-content {
  width: calc(100vh - 10px); /* Subtract 10px from 100vh */
}

/* Example - 2 */
.container {
  padding: calc(1vw + 1em);
  width: calc(var(--variable-width) + 200px);
  transform: rotate( calc(1turn + 28deg) );
  background: hsl(100, calc(3 * 20%), 40%);
  font-size: calc(50vw / 3);
  border-radius: 15px calc(15px / 3) 4px 2px;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What do CSS Custom properties variables mean?***

Custom properties (sometimes referred to as **CSS variables** or **cascading variables**) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: black;`) and are accessed using the `var()` function (e.g., `color: var(--main-color);`).

Property names that are prefixed with `--`, like `--example-name`, represent custom properties that contain a value that can be used in other declarations using the `var()` function.

**Syntax**

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20, 32, 54);
```

**Example**

```css
:root {
  --first-color: #16f;
  --second-color: #ff7;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #290;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

```html
<p id="firstParagraph">This paragraph should have a blue background and yellow text.</p>
<p id="secondParagraph">This paragraph should have a yellow background and blue text.</p>
<div id="container">
  <p id="thirdParagraph">This paragraph should have a green background and yellow text.</p>
</div>
```

**Live Demo**: [Custom Properties Variables](https://learning-zone.github.io/css-interview-questions/assets/files/custom-properties.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between CSS variables and preprocessor(SASS, LESS, Stylus) variables?***

SASS variables are replaced with their values as the preprocessor produces its CSS output long before the browser interprets the code, while CSS custom properties are evaluated by the browser at runtime.

**Example**: Preprocessor Variable

```css
$brandColor: #F06D06;

.main-header {
  color: $brandColor;
}
.main-footer {
  background-color: $brandColor;
}
```

The above code would do nothing in a browser. The browser wouldn\'t understand the declarations and toss them out. Preprocessors need to compile into CSS to be used. This code would compile to:

```css
.main-header {
  color: #F06D06;
}
.main-footer {
  background-color: #F06D06;
}
```

This is now valid CSS. The variable was part of the preprocessor language, not CSS itself. Once the code compiles, the variables are gone.

**Example**: CSS Custom Property

The native CSS has started supporting CSS variables, or "CSS Custom Properties". It allows you to work with variables directly in CSS. There is no compiling.

```css
:root {
  --main-color: #F06D06;
}

.main-header {
  color: var(--main-color);
}
.main-footer {
  background-color: var(--main-color);
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are Vendor-Prefixes?***

CSS vendor prefixes, also sometimes known as or CSS browser prefixes, are a way for browser makers to add support for new CSS features before those features are fully supported in all browsers.

**Example**: `transition` property

```css
.myClass {
	-webkit-transition: all 1s linear;
	-moz-transition: all 1s linear;
	-ms-transition: all 1s linear;
	-o-transition: all 1s linear;
	transition: all 1s linear;
}
```

### **CSS prefixes**

The major browsers use the following prefixes:

* `-webkit-` (Chrome, Safari, newer versions of Opera, almost all iOS browsers including Firefox for iOS; basically, any WebKit based browser)
* `-moz-` (Firefox)
* `-o-` (old pre-WebKit versions of Opera)
* `-ms-` (Internet Explorer and Microsoft Edge)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the property that is used for controlling image-scroll?***

The **background-attachment** property in CSS is used to specify the kind of attachment of the background image with respect to its container. It can be set to scroll or remain fixed. It can be applied to all HTML elements.

**Syntax**

```css
background-attachment: scroll|fixed|local|initial|inherit;
```

### **Property Values**

|Value	      |Description|
|-------------|-------------------------------------------------------|
|scroll	      |The background image will scroll with the page. This is default|
|fixed	      |The background image will not scroll with the page|
|local	      |The background image will scroll with the element\'s contents|
|initial	    |Sets this property to its default value. Read about initial|
|inherit	    |Inherits this property from its parent element. Read about inherit|

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-image: url("../images/img_tree.gif");
        background-repeat: no-repeat;
        background-attachment: fixed;
      }
    </style>
  </head>
<body>
  <h1>The background-attachment Property</h1>

  <p>The background-image is fixed. Try to scroll down the page.</p>
    ...
  <p>If you do not see any scrollbars, try to resize the browser window.</p>
</body>
</html>
```

**Live Demo**: [CSS background-attachment](https://learning-zone.github.io/css-interview-questions/assets/files/background-attachment.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the overflow property in CSS used for?***

The CSS overflow property specifies how to handle the content when it overflows its block level container.

**Syntax**

```css
overflow: visible|hidden|scroll|auto|initial|inherit;
```

### **Property Values**

|Value	   |Description	|
|--------- |--------------------------------|
|visible	 |The overflow is not clipped. It renders outside the element\'s box.                |	
|hidden	   |The overflow is clipped, and the rest of the content will be invisible	            |
|scroll	   |The overflow is clipped, but a scroll-bar is added to see the rest of the content	|
|auto	     |If overflow is clipped, a scroll-bar should be added to see the rest of the content|	
|initial	 |Sets this property to its default value. 	|
|inherit	 |Inherits this property from its parent element. |
|overflow-x|Specifies what to do with the left/right edges of the content if it overflows the element\'s content area|
|overflow-y|Specifies what to do with the top/bottom edges of the content if it overflows the element\'s content area|

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS Overflow Property</title>
    <style>
      div {
        background-color: #eee;
        width: 200px;
        height: 100px;
        border: 1px dotted black;
        overflow: scroll;
        padding: 10px;
      }
    </style>
  </head>
<body>
  <h2>CSS Overflow Property</h2>
  <p>Setting the overflow value to scroll, the overflow is clipped and a scrollbar
     is added to scroll inside the box.
  </p>

  <div>You can use the overflow property when you want to have better control of 
    the layout. The overflow property specifies what happens if content overflows 
    an element's box.
  </div>
</body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is word-wrapping in CSS?***

The word-wrap property in CSS is used to break long word and wrap into the next line. It defines whether to break words when the content exceeds the boundaries of its container.

**Syntax**

```css
word-wrap: normal|break-word|initial|inherit;
```

### **Property Values**

|Value	      |Description                       |
|-------------|----------------------------------|
|normal	      |Break words only at allowed break points|
|break-word	  |Allows unbreakable words to be broken|
|initial	    |Sets this property to its default value. |
|inherit	    |Inherits this property from its parent element.|

**Example**

```html
<!DOCTYPE html>
<html>
<head>
    <title>The word-wrap Property</title>
    <style>
        div {
            width: 150px;
            border: 1px solid #333;
        }

        div.a {
            word-wrap: normal;
        }

        div.b {
            word-wrap: break-word;
        }
    </style>
</head>
<body>
    <h1>The word-wrap Property</h1>

    <h2>word-wrap: normal (default):</h2>
    <div class="a"> This div contains a very long word: thisisaveryveryveryveryveryverylongword. 
      The long word will break and wrap to the next line.</div>

    <h2>word-wrap: break-word:</h2>
    <div class="b"> This div contains a very long word: thisisaveryveryveryveryveryverylongword. 
      The long word will break and wrap to the next line.</div>
</body>
</html>
```

**Live Demo**: [The word-wrap Property](https://learning-zone.github.io/css-interview-questions/assets/files/word-wrap.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Accessibility (a11y) in a web application?***

Accessibility refers to how software or hardware combinations are designed to make a system accessible to persons with disabilities, such as:

* Visual impairment
* Hearing loss
* Limited dexterity

For example, a website developed with accessibility in mind might have text-to-speech capabilities or output for special braille hardware geared toward individuals with visual impairments.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is UI/UX?***

**1) UI or User Interface**:  is how a product or website is laid out and how you interact with it: Where the buttons are, how big the fonts are, and how menus are organized are all elements of UI.

**2) UX or User Experience**: is how you feel about using a product or a website. So, your love for the way the new Apple Watch looks or your excitement that there’s finally a tablet-sized iPhone to watch those Corgi videos you’re obsessed with are reflections of UX.
So the new look of the Facebook news feed involves a change to UI, and the way you navigate that new page is the UX. 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you serve your pages for feature-constrained browsers? What techniques do you use?***

* **Graceful degradation**: The practice of building an application for modern browsers while ensuring it remains functional in older browsers.
* **Progressive enhancement**: The practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.
* **[caniuse](https://caniuse.com/)**: to check for feature support.
* **[Autoprefixer](https://autoprefixer.github.io/)**: for automatic vendor prefix insertion.
* **Feature detection**: using [Modernizr](https://modernizr.com/).
* **CSS Feature queries**: using [@support](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the different ways to visually hide content (and make it available only for screen readers)?***

These techniques are related to accessibility (a11y).

* `visibility: hidden`: However, the element is still in the flow of the page, and still takes up space.
* `width: 0; height: 0`: Make the element not take up any space on the screen at all, resulting in not showing it.
* `position: absolute; left: -99999px`: Position it outside of the screen.
* `text-indent: -9999px`: This only works on text within the `block` elements.
* **Metadata**: For example by using Schema.org, RDF, and JSON-LD.
* **WAI-ARIA**: A W3C technical specification that specifies how to increase the accessibility of web pages.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is file splitting? When is it used?***

A monolithic file is fine for solo developers or very small projects. For large projects—sites with multiple layouts and content types, or multiple brands under the same design umbrella—it\'s smarter to use a modular approach and split your CSS across multiple files.

* **reset.css**: reset and normalization styles; minimal color, border, or font-related declarations
* **typography.css**: font faces, weights, line heights, sizes, and styles for headings and body text
* **layouts.css**: styles that manage page layouts and segments, including grids
* **forms.css**: styles for form controls and labels
* **lists.css**: list-specific styles
* **tables.css**: table-specific styles
* **carousel.css**: styles required for carousel components
* **accordion.css**: styles for accordion components

CSS frameworks such as Foundation and Bootstrap use this approach. Both become quite granular with separate files for progress bars, range inputs, close buttons, and tooltips. This allows developers to include only the components that they need for a project.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is DOM reflow?***

Reflow is the name of the web browser process for re-calculating the positions and geometries of elements in the document, for the purpose of re-rendering part or all of the document.

**Reflow occurs when**

  * insert, remove or update an element in the DOM
  * modify content on the page, e.g. the text in an input box
  * move a DOM element
  * animate a DOM element
  * take measurements of an element such as offsetHeight or getComputedStyle
  * change a CSS style
  * change the className of an element
  * add or remove a stylesheet
  * resize the window
  * scroll

**Minimizing browser reflow**  

* Reduce unnecessary DOM depth. Changes at one level in the DOM tree can cause changes at every level of the tree - all the way up to the root, and all the way down into the children of the modified node. This leads to more time being spent performing reflow.
* Minimize CSS rules, and remove unused CSS rules.
* If you make complex rendering changes such as animations, do so out of the flow. Use position-absolute or position-fixed to accomplish this.
* Avoid unnecessary complex CSS selectors - descendant selectors in particular - which require more CPU power to do selector matching.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How does CSS work under the hood?***

The CSS language is designed to be used alongside a "markup" language like HTML. CSS defines how HTML elements are formatted – controlling their layout, colors, fonts, and so on. When a browser displays a document, it must combine the document\'s content with its style information. It processes the document in a number of stages, which we\'ve listed below.

1. The browser loads the HTML (e.g. receives it from the network).
2. It converts the HTML into a DOM (Document Object Model).
3. The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images and videos and linked CSS.
4. The browser parses the fetched CSS, and sorts the different rules by their selector types into different "buckets", e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required (this intermediate step is called a render tree).
5. The render tree is laid out in the structure it should appear in after the rules have been applied to it.
6. The visual display of the page is shown on the screen (this stage is called painting).

The following diagram also offers a simple view of the process.

<p align="center">
  <img src="assets/images/css-dom.png" alt="CSS DOM" width="500px;" />
</p>

### **The DOM and CSSOM**

A DOM has a tree-like structure. Each element, attribute, and piece of text in the markup language becomes a DOM node in the tree structure. The nodes are defined by their relationship to other DOM nodes. Some elements are parents of child nodes, and child nodes have siblings. The browser undergo a process that includes conversion, tokenization, lexing, and parsing which ultimately constructs the DOM and CSSOM.

* **Conversion**: Reading raw bytes of HTML and CSS off the disk or network.
* **Tokenization**: Breaking input into chunks (ex: start tags, end tags, attribute names, attribute values), striping irrelevant characters such as whitespace and line breaks.
* **Lexing**: Like the tokenizer, but it also identifies the type of each token (this token is a number, that token is a string literal, this other token is an equality operator).
* **Parsing**: Takes the stream of tokens from the lexer, interprets the tokens using a specific grammar, and turns it into an abstract syntax tree.

**Example**: DOM Representation

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
````

In the DOM, the node corresponding to our `<p>` element is a parent. Its children are a text node and the three nodes corresponding to our `<span>` elements. The SPAN nodes are also parents, with text nodes as their children:

```html
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
   └─ "Sheets"
```

Applying CSS to the DOM

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

Once both tree structures are created, the rendering engine then attaches the data structures into what\'s called a render tree as part of the layout process. The render tree is a visual representation of the document which enable painting the contents of the page in their correct order. 

Render tree construction follows the following order:

* Starting at the root of the DOM tree, traverse each visible node.
* Omit non visible nodes.
* For each visible node find the appropriate matching CSSOM rules and apply them.
* Emit visible nodes with content and their computed styles.
* Finally, output a render tree that contains both the content and style information of all visible content on the screen.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
	

	
	

	

# HTML5 Interview Questions

*Click <img src="assets/images/star.png" width="18" height="18" align="absmiddle" title="Star" /> if you like the project. Pull Request are highly appreciated.*

## Table of Contents

* *[HTML5 Events List](html5-events.md)*
* *[HTML5 Tags](html5-tags.md)*

<br/>

|Sl.No|  Questions                        |
|----|------------------------------------|
|01. |[What is difference between HTML and XHTML?](#q-what-is-difference-between-html-and-xhtml)|
|02. |[What are the building blocks of HTML5?](#q-what-are-the-building-blocks-of-html5)|
|03. |[What are the semantic tags available in html5?](#q-what-are-the-semantic-tags-available-in-html5)|
|04. |[Why you would like to use semantic tag?](#q-why-you-would-like-to-use-semantic-tag)|
|05. |[What does a `<DOCTYPE html>` do?](#q-what-does-a-doctype-html-do)|
|06. |[What happens when DOCTYPE is not given?](#q-what-happens-when-doctype-is-not-given)|
|07. |[What are the new form elements in HTML5?](#q-what-are-the-new-form-elements-in-html5)|
|08. |[How many new form elements are introduced in html5?](#q-how-many-new-form-elements-are-introduced-in-html5)|
|09. |[What is difference between `span` tag and `div` tag?](#q-what-is-difference-between-span-tag-and-div-tag)|
|10. |[What are optional closing tag?](#q-what-are-optional-closing-tag)|
|11. |[What is a self closing tag?](#q-what-is-a-self-closing-tag)|
|12. |[Explain the difference between block elements and inline elements?](#q-explain-the-difference-between-block-elements-and-inline-elements)|
|13.|[What are semantic and non-semantic elements?](#q-what-are-semantic-and-non-semantic-elements)|
|14.|[What is the purpose of `main` element?](#q-what-is-the-purpose-of-main-element)|
|15.|[Define semantic markup. What are the semantic meanings for `<section>, <article>, <aside>, <nav>, <header>, <footer>` and when/how should each be used in structuring html markup?](#q-define-semantic-markup-what-are-the-semantic-meanings-for-section-article-aside-nav-header-footer-and-when-how-should-each-be-used-in-structuring-html-markup)|
|16. |[When should you use `section`, `div` or `article`?](#q-when-should-you-use-section-div-or-article)|
|17. |[Can a web page contain multiple `<header>` elements? What about `<footer>` elements?](#q-can-a-web-page-contain-multiple-header-elements-what-about-footer-elements)|
|18. |[What is Character Encoding?](#q-what-is-character-encoding)|
|19. |[What is the purpose of meta tags?](#q-what-is-the-purpose-of-meta-tags)|
|20. |[What does async and defer refer in script tag? Describe the difference between `<script>`, `<script async>` and `<script defer>`](#q-what-does-async-and-defer-refer-in-script-tag-describe-the-difference-between-script-script-async-and-script-defer)|
|21. |[Describe the difference between a `cookie`, `sessionStorage` and `localStorage`?](#q-describe-the-difference-between-a-cookie-sessionstorage-and-localstorage)|
|22. |[Does localStorage throw error after reaches maximum limits?](#q-does-localstorage-throw-error-after-reaches-maximum-limits)|
|23. |[Why to use IndexedDB instead of WebSQL in HTML5?](#q-why-to-use-indexeddb-instead-of-websql-in-html5)|
|24. |[Explain Application Cache in HTML5. OR What is a manifest file in HTML?](#q-explain-application-cache-in-html5-or-what-is-a-manifest-file-in-html)|
|25. |[What is the purpose of cache busting and how can you achieve it?](#q-what-is-the-purpose-of-cache-busting-and-how-can-you-achieve-it)|
|26. |[What ARIA and screenreaders are, and how to make a website accessible?](#q-what-aria-and-screenreaders-are-and-how-to-make-a-website-accessible)|
|27. |[What is the purpose of the `alt` attribute on images?](#q-what-is-the-purpose-of-the-alt-attribute-on-images)|
|28. |[What does `enctype='multipart/form-data'` mean?](#q-what-does-enctype-multipart-form-data-mean)|
|29. |[What is difference between Select and Datalist?](#q-what-is-difference-between-select-and-datalist)|
|30. |[Explain some of the pros and cons for CSS animations versus JavaScript animations?](#q-explain-some-of-the-pros-and-cons-for-css-animations-versus-javascript-animations)|
|31. |[What does CORS stand for and what issue does it address?](#q-what-does-cors-stand-for-and-what-issue-does-it-address)|
|32. |[Can you describe the difference between progressive enhancement and graceful degradation?](#q-can-you-describe-the-difference-between-progressive-enhancement-and-graceful-degradation)|
|33. |[What is the DOM? How does the DOM work?](#q-what-is-the-dom-how-does-the-dom-work)|
|34. |[How does the browser rendering engine work?](#q-how-does-the-browser-rendering-engine-work)|
|35. |[What is the difference between standards mode and quirks mode?](#q-what-is-the-difference-between-standards-mode-and-quirks-mode)|
|36. |[What is Critical Rendering Path?](#q-what-is-critical-rendering-path)|
|37. |[What are the Benefits of Server Side Rendering (SSR) Over Client Side Rendering (CSR)?](#q-what-are-the-benefits-of-server-side-rendering-ssr-over-client-side-rendering-csr)|
|38. |[Name 3 ways to decrease page load?](#q-name-3-ways-to-decrease-page-load)|
|39. |[Ways to improve website performance](#q-ways-to-improve-website-performance)|
|40. |[Comparison of browsers engines like Chrome, Firefox, Internet explorer, Safari?](#q-comparison-of-browsers-engines-like-chrome-firefox-internet-explorer-safari)|
|41. |[What does the lang attribute in html do?](#q-what-does-the-lang-attribute-in-html-do)|
|42. |[What is desktop first and mobile first design approach?](#q-what-is-desktop-first-and-mobile-first-design-approach)|
|43. |[What are `data-` attributes good for?](#q-what-are-data-attributes-good-for)|
|44. |[Explain the difference between layout, painting and compositing?](#q-explain-the-difference-between-layout-painting-and-compositing)|
|45. |[Explain about HTML Layout Engines used by browsers?](#q-explain-about-html-layout-engines-used-by-browsers)|
|46. |[How to make page responsive?](#q-how-to-make-page-responsive)|
|47. |[Does the following trigger http request at the time of page load?](#q-does-the-following-trigger-http-request-at-the-time-of-page-load)|
|48. |[List the API available in HTML5?](#q-list-the-api-available-in-html5)|
|49. |[How geolocation api works in html5?](#q-how-geolocation-api-works-in-html5)|
|50. |[What is the use of WebSocket API?](#q-what-is-the-use-of-websocket-api)|
|51. |[Explain about HTML Canvas?](#q-explain-about-html-canvas)|
|53. |[What is difference between SVG and Canvas?](#q-what-is-difference-between-svg-and-canvas)|
|54. |[Explain Drag and Drop in HTML5?](#q-explain-drag-and-drop-in-html5)|
|55. |[Explain Microdata in HTML5?](#q-explain-microdata-in-html5)|
|56. |[What are the HTML tags which deprecated in HTML5?](#q-what-are-the-html-tags-which-deprecated-in-html5)|
|57. |[How you can Use Modernizr in HTML5?](#q-how-you-can-use-modernizr-in-html5)|
|58. |[What is progressive rendering?](#q-what-is-progressive-rendering)|
|59. |[What is an iframe and how it works?](#q-what-is-an-iframe-and-how-it-works)|
|60. |[Explain the use of rel="nofollow", rel="noreferrer", rel="noopener" attribute?](#q-explain-the-use-of-rel-nofollow-rel-noreferrer-rel-noopener-attribute)|
|61. |[How can you highlight text in HTML?](#q-how-can-you-highlight-text-in-html)|
|62. |[How can I get indexed better by search engines?](#q-how-can-i-get-indexed-better-by-search-engines)|
|63. |[What is the difference between an "attribute" and a "property" in HTML?](#q-what-is-the-difference-between-an-attribute-and-a-property-in-html)|
|64. |[How do you set IE compatibility mode?](#q-how-do-you-set-ie-compatibility-mode)|
|65. |[What is an optional tag?](#q-what-is-an-optional-tag)|
|66. |[What is an HTML preprocessor? Have you used different HTML templating languages before?](#q-what-is-an-html-preprocessor-have-you-used-different-html-templating-languages-before)|
|67. |[How do you change the direction of html text?](#q-how-do-you-change-the-direction-of-html-text)|
|68. |[When is it appropriate to use the small element?](#q-when-is-it-appropriate-to-use-the-small-element)|
|79. |[How do you serve a page with content in multiple languages?](#q-how-do-you-serve-a-page-with-content-in-multiple-languages)|
|70. |[What is the difference between `<section>` and `<div>`?](#q-what-is-the-difference-between-section-and-div)|
|71. |[Discuss the differences between an HTML specification and a browser\'s implementation thereof.](#q-discuss-the-differences-between-an-html-specification-and-a-browser-s-implementation-thereof)|
|72. |[Why you would use a srcset attribute in an image tag? Explain the process the browser used when evaluating the content of this attribute.](#q-why-you-would-use-a-srcset-attribute-in-an-image-tag-explain-the-process-the-browser-used-when-evaluating-the-content-of-this-attribute)|
|73. |[What is accessibility & ARIA role means in a web application?](#q-what-is-accessibility-aria-role-means-in-a-web-application)|

<br/>

## Q. ***What is difference between HTML and XHTML?***

The Extensible Hypertext Markup Language, or XHTML, has two important notes for front end developers.

1) It needs to be well formed, meaning all elements need to be closed and nested correctly or you will return errors.
2) Since it is more strict than HTML is requires less pre-processing by the browser, which may improve your sites performance.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the building blocks of HTML5?***

* **Semantics**: allowing you to describe more precisely what your content is.
* **Connectivity**: allowing you to communicate with the server in new and innovative ways.
* **Offline and storage**: allowing webpages to store data on the client-side locally and operate offline more efficiently.
* **Multimedia**: making video and audio first-class citizens in the Open Web.
* **2D/3D graphics and effects**: allowing a much more diverse range of presentation options.
* **Performance and integration**: providing greater speed optimization and better usage of computer hardware.
* **Device access**: allowing for the usage of various input and output devices.
* **Styling**: letting authors write more sophisticated themes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the semantic tags available in html5?***

HTML5 semantic tags define the function and the category of your text, simplifying the work for browsers and search engines, as well as developers.

HTML5 offers new semantic elements to define different parts of a web page:

* `<article>`
* `<aside>`
* `<details>`
* `<figcaption>`
* `<figure>`
* `<footer>`
* `<header>`
* `<main>`
* `<mark>`
* `<nav>`
* `<section>`
* `<summary>`
* `<time>`

Syntax:

```html
<header></header>
<section>
	<article>
		<figure>
			<img>
			<figcaption></figcaption>
		</figure>
	</article>
</section>
<footer></footer>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why you would like to use semantic tag?***

* Search Engine Optimization, accessibility, repurposing, light code. 
* Many visually impaired person rely on browser speech and semantic tag helps to interpret page content clearly.
* Search engine needs to understand page content to rank and semantic tag helps.
* Semantic code aids accessibility. Specially, many people whose eyes are not good rely on speech browsers to read pages to them. These programs cannot interpret pages very well unless they are clearly explained.
* Help Search engines to better understand pages. Search engine need to understand what your content is about when rank you properly on search engines. Semantic code tends to improve your placement on search engines, as it is easier for the "search engine spiders" to understand.
* It\'s easier to read and edit, which saves time and money during maintenance.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does a `<DOCTYPE html>` do?***

A DOCTYPE is always associated to a `DTD` ( **Document Type Definition** ). A DTD defines how documents of a certain type should be structured (i.e. a `button` can contain a `span` but not a `div`), whereas a DOCTYPE declares what DTD a document supposedly respects (i.e. this document respects the HTML DTD). For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML specifications your document respects. 

Once a user agent has recognized a correct DOCTYPE, it will trigger the `no-quirks mode` matching this DOCTYPE forreading the document. If a user agent doesn't recognize a correct DOCTYPE, it will trigger the `quirks mode`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What happens when DOCTYPE is not given?***

The web page is rendered in quirks mode. The web browsers engines use quirks mode to support older browsers which does not follow the **W3C specifications**. In quirks mode CSS class and id names are case insensitive. In standards mode they are case sensitive.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the new form elements in HTML5?***

There are five new form elements in the HTML5 forms specification: `<datalist>`, `<output>`, `<progress>`, and `<meter>`. 

### **1. Datalist Tag**

Allows to attach a list of suggestions to a text input element. As soon as the user begins to type in the text field, the list of suggestions appears and the user can choose from the suggestions with the mouse.

```html
<p>Enter your favorite browser name:</p>
<input type="text" list="browsers" name="favorite_browser">
<datalist id="browsers">
    <option value="Firefox">
    <option value="Chrome">    
    <option value="Internet Explorer">
    <option value="Opera">
    <option value="Safari">
</datalist>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/html5-semantic-tags/datalist.html)

### **2. Meter Tag**

Indicates a numeric value that falls within a range. The tag supports a number of attributes:
value: If you don\'t specify a value, the first numeric value inside the `<meter></meter>` pair becomes the value.

* **max**: The maximum possible value of the item.
* **min**: The minimum possible value of the item.
* **high**: If the value can be defined as a range, this is the high end of the range.
* **low**: If the value can defined as a range, this is the low end of that range.
* **optimum**: The optimal value of the element. 

```html
<p>Disk Usage: <meter value="0.2">20%</meter></p>

<p>Total Score: <meter value="6" min="0" max="10">6 out of 10</meter></p>

<p>Pollution Level: <meter low="60" high="80" max="100" value="85">Very High</meter></p>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/html5-semantic-tags/meter.html)

### **3. Output Tag**

It indicates a section of the page that can be modified by a script (usually JavaScript).

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50"> +
  <input type="number" id="b" value="100"> =
  <output name="result" for="a b"></output>
</form>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/html5-semantic-tags/output.html)

### **4. Progress Tag**

Indicates how much of a task has been completed (often marked as a percentage). It is expected to be modified through JavaScript code.

```html
 
<p>Progress: <progress id="bar" value="0" max="100"><span>0</span>%</progress></p>

<script type="text/javascript">
    var i = 0;
    var progressBar = document.getElementById("bar");
    
    function countNumbers() {
      if(i < 100) {
        i = i + 1;
        progressBar.value = i;
        // For browsers that don't support progress tag
        progressBar.getElementsByTagName("span")[0].textContent = i;
      }

      // Wait for sometime before running this script again
      setTimeout("countNumbers()", 100);
    }
    countNumbers();
</script>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/html5-semantic-tags/progress.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How many new form elements are introduced in html5?***

|Sl.No| Element     | Description   |
|-----|-------------|---------------------------|
| 01. |color        |Gives the end user a native color picker to choose a color.|
| 02. |date         |Offers a datepicker.|
| 03. |datetime     |An element to choose both date and time.|
| 04. |datetime-local |An element to choose both date and time, with local settings support.|
| 05. |email        |A field for entering e-mail address(es).|
| 06. |month       |Choose a full month.|
| 07. |number       |Picking a number.|
| 08. |range        |Offers a slider to set to a certain value/position.|
| 09. |search       |A field for search queries.|
| 10. |tel          |Choosing a telephone number.|
| 11. |time         |Input a certain time.|
| 12. |url          |Entering a URL.|
| 13. |week         |Picking a specific week.|


**Example:**

```html
<input type="color" value="#b97a57">

<input type="date" value="2020-06-08">

<input type="datetime" value="2020-06-09T20:35:34.32">

<input type="datetime-local" value="2020-06-09T22:41">

<input type="email" value="robert@robertnyman.com">

<input type="month" value="2020-06">

<input type="number" value="4">

<input type="range" value="15">

<!-- Note: If not set, default attribute values are min="0", max="100", step="1". -->

<input type="search" value="[Any search text]">

<input type="tel" value="[Any numeric value]">

<!-- Note: Most web browsers seem to let through any value at this time. -->

<input type="time" value="22:38">

<input type="url" value="https://www.google.com/">

<!-- Note: requires a protocol like http://, ftp:// etc in the beginning. -->


<input type="week" value="2020-W24">
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is difference between `span` tag and `div` tag?***

The primary difference between div and span tag is their default behavior. By default, a `<div>` is a **block-level-element** and a `<span>` is an **inline element**.

* `<div>` is a block level element which means it will render it on it\'s own line with a width of a 100% of the parent element.
* `<span>` is an inline element which means it will render on the same line as the previous element, if it is also an inline element, and it's width will be determined by it\'s content.

```html
<div>Demo Text, with <span>some other</span> text.</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are optional closing tag?***

`<p>, <li>, <td>, <tr>, <th>, <html>, <body>`, etc. don\'t have to provide end tag. Whenever browser hits a new tag it automatically ends the previous tag. 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is a self closing tag?***

In HTML5 it is not strictly necessary to close certain HTML tags. The tags that aren\'t required to have specific closing tags are called “self closing” tags.

An example of a self closing tag is something like a line break (`<br />`) or the meta tag (`<meta>`). This means that the following are both acceptable:

```html
<meta charset="UTF-8">
...
<meta charset="UTF-8" />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the difference between block elements and inline elements?***

* block elements `<h1>, <p>, <ul>, <ol>, <li>`,
* inline elements `<span>, <a>, <strong>, <i>, <img>`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are semantic and non-semantic elements?***

* **Semantic elements**: clearly describes its meaning to both the browser and the developer. For example: `<form>`, `<table>`,  `<article>`, `<aside>`, `<details>`, `<figcaption>`, `<figure>`, `<footer>`, `<header>`, `<main>`, `<mark>`, `<nav>`, `<section>`, `<summary>`, `<time>` clearly defines its content.
  
* **Non-semantic elements**: `<div>` and `<span>` tells nothing about its content.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the purpose of `main` element?***

The HTML `<main>` element represents the dominant content of the `<body>` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

```html
<main role="main">
    <p>Geckos are a group of usually small, usually nocturnal lizards. 
       They are found on every continent except Australia.</p>
    <p>Many species of gecko have adhesive toe pads which enable them to climb walls and even windows.</p>
</main>
```

*Note: A document mustn\'t have more than one `<main>` element that doesn't have the hidden attribute specified.*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Define semantic markup. What are the semantic meanings for `<section>, <article>, <aside>, <nav>, <header>, <footer>` and when/how should each be used in structuring html markup?***

* `<header>` is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author\'s name, time and date of publication, table of contents, or other navigational information.

* `<article>` is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing it\'s meaining. Individual blog posts or news stories are good examples.

* `<section>` is a flexible container for holding content that shares a common informational theme or purpose.

* `<footer>` is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author\'s name, copyright information, and related links are typical examples of such content.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When should you use `section`, `div` or `article`?***

* `<section>`, group of content inside is related to a single theme, and should appear as an entry in an outline of the page. It\'s a chunk of related content, like a subsection of a long article, a major part of the page (eg the news section on the homepage), or a page in a webapp\'s tabbed interface. A section normally has a heading (title) and maybe a footer too.

* `<article>`, represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

* `<div>`, on the other hand, does not convey any meaning, aside from any found in its class, lang and title attributes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Can a web page contain multiple `<header>` elements? What about `<footer>` elements?***

Yes, header elements can be used multiple times in documents. A `<header>` tag must be present for all articles, sections, and pages, although a `<footer>` tag is not necessary.

**From W3C standards**

```html
A header element is intended to usually contain the section's heading (an h1–h6 element or an hgroup 
element), but this is not required. The header element can also be used to wrap a section's table of 
contents, a search form, or any relevant logos.
```

```html
The footer element represents a footer for its nearest ancestor sectioning content or sectioning root 
element. A footer typically contains information about its section such as who wrote it, links to related 
documents, copyright data, and the like.
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is a physical tag and logical tag in HTML?***

*ToDo*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Character Encoding?***

Character encoding is a method of converting bytes into characters. To validate or display an HTML document properly, a program must choose a proper character encoding. This is specified in the tag:

```html
<meta charset="utf-8"/>
```

* **UTF-8**: A Unicode Translation Format that comes in 8-bit units that is, it comes in bytes. A character in UTF8 can be from 1 to 4 bytes long, making UTF8 variable width.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the purpose of meta tags?***

The META elements can be used to include name/value pairs describing properties of the HTML document, such as author, expiry date, a list of keywords, document author etc.

```html
<!DOCTYPE html>
<html>
  <head>
        <!--Recommended Meta Tags-->
        <meta charset="utf-8">
        <meta name="language" content="english"> 
        <meta http-equiv="content-type" content="text/html">
        <meta name="author" content="Author Name">
        <meta name="designer" content="Designer Name">
        <meta name="publisher" content="Publisher Name">
        <meta name="no-email-collection" content="name@email.com">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

        <!--Search Engine Optimization Meta Tags-->
        <meta name="description" content="Project Description">
        <meta name="keywords" content="Software Engineer,Product Manager,Project Manager,Data Scientist">
        <meta name="robots" content="index,follow">
        <meta name="revisit-after" content="7 days">
        <meta name="distribution" content="web">
        <meta name="robots" content="noodp">
        
        <!--Optional Meta Tags-->
        <meta name="distribution" content="web">
        <meta name="web_author" content="">
        <meta name="rating" content="">
        <meta name="subject" content="Personal">
        <meta name="title" content=" - Official Website.">
        <meta name="copyright" content="Copyright 2020">
        <meta name="reply-to" content="">
        <meta name="abstract" content="">
        <meta name="city" content="Bangalore">
        <meta name="country" content="INDIA">
        <meta name="distribution" content="">
        <meta name="classification" content="">
    
        <!--Meta Tags for HTML pages on Mobile-->
        <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        <!--http-equiv Tags-->
        <meta http-equiv="Content-Style-Type" content="text/css">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
      
    <title>HTML5 Meta Tags</title>
  </head>
  <body>
       ...
  </body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does async and defer refer in script tag? Describe the difference between `<script>`, `<script async>` and `<script defer>`***

* **Async**: Downloads the script file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading.

* **Defer**: Defer downloads the script file during HTML parsing and will only execute it after the HTML parser has completed. Not all browsers support this.

The async attribute is used to indicate to the browser that the script file can be executed asynchronously. The HTML parser does not need to pause at the point it reaches the script tag to fetch and execute, the execution can happen whenever the script becomes ready after being fetched in parallel with the document parsing.

The defer attribute tells the browser to only execute the script file once the HTML document has been fully parsed.

**Example**

```html
<!-- Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag. -->
<script src="myscript.js"></script>


<!-- With async (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time. -->
<!-- Google Analytics is usually added like this -->
<script async src="https://google-analytics.com/analytics.js"></script>


<!-- With defer, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.) -->
<script defer src="myscript.js"></script>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Describe the difference between a `cookie`, `sessionStorage` and `localStorage`?***

* ```cookie```: A text file saved on the users computer to store and retrieve data

* ```sessionStorage```: Is memory space in a browser to save temporary data until the window or tab is closed.

* ```localStorage```: Like cookie, where data can be saved and retrieved after browser sessions, but stored in memory like sessionStorage. Data is stored as plain key value pairs and can be stored as Json objects.

|                                        | `cookie`                                                 | `localStorage` | `sessionStorage` |
| -------------------------------------- | -------------------------------------------------------- | -------------- | ---------------- |
| Initiator                              | Client or server. Server can use `Set-Cookie` header     | Client         | Client           |
| Expiry                                 | Manually set                                             | Forever        | On tab close     |
| Persistent across browser sessions     | Depends on whether expiration is set                     | Yes            | No               |
| Sent to server with every HTTP request | Cookies are automatically being sent via `Cookie` header | No             | No               |
| Capacity (per domain)                  | 4kb                                                      | 5MB            | 5MB              |
| Accessibility                          | Any window                                               | Any window     | Same tab         |

*Note: If the user decides to clear browsing data via whatever mechanism provided by the browser, this will clear out any `cookie`, `localStorage`, or `sessionStorage` stored. It\'s important to keep this in mind when designing for local persistance, especially when comparing to alternatives such as server side storing in a database or similar (which of course will persist despite user actions).*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Does localStorage throw error after reaches maximum limits?***

Yes

*Example:*

```html
<!DOCTYPE HTML>
<html>
   <head>
         <title>HTML5 localStorage</title>
   </head>
   <body>
      <script type="text/javascript">
        try{
            if(window.localStorage){ // Check if the localStorage object exists
            
                var result = "";
                var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for(var i = 0; i < 10000; i++){
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    localStorage.setItem("key"+i, result);
                }  
            } else {
                alert("Sorry, your browser do not support localStorage.");
            }
        } catch(e) {
            console.log('Exception: '+e);
        }
      </script>
   </body>
</html>
```

Output

```js
Exception: QuotaExceededError: Failed to execute 'setItem' on 'Storage': 
           Setting the value of 'key3230' exceeded the quota.
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why to use IndexedDB instead of WebSQL in HTML5?***

### **1. WebSQL**

It is an API that is only supported in Chrome and Safari (and Android and iOS by extension). It provides an asynchronous, transactional interface to SQLite. Since 2010, it has been deprecated in favor of IndexedDB.

**Advantages**

* Supported on major mobile browsers (Android Browser, Mobile Safari, Opera Mobile) as well as several desktop browsers (Chrome, Safari, Opera).
* Good performance generally, being an asynchronous API. Database interaction won't lock up the user interface. (Synchronous API is also available for WebWorkers.)
* Good search performance, since data can be indexed according to search keys.
* Robust, since it supports a transactional database model.
* Easier to maintain integrity of data, due to rigid data structure.

**Disadvantages**

* Deprecated. Will not be supported on IE or Firefox, and will probably be phased out from the other browsers at some stage.
* Steep learning curve, requiring knowledge of relational databases and SQL.
* Suffers from object-relational impedance mismatch.
* Diminishes agility, as database schema must be defined upfront, with all records in a table matching the same structure.

### **2. IndexedDB**

It is the successor to both LocalStorage and WebSQL, designed to replace them as the “one true” browser database. It exposes an asynchronous API that supposedly avoids blocking the DOM, but as we\'ll see below, it doesn\'t necessarily live up to the hype. Browser support is extremely spotty, with only Chrome and Firefox having fully usable implementations.

**Advantages**

* Good performance generally, being an asynchronous API. Database interaction won't lock up the user interface. (Synchronous API is also available for WebWorkers.)
* Good search performance, since data can be indexed according to search keys.
* Supports versioning.
* Robust, since it supports a transactional database model.
* Fairly easy learning curve, due to a simple data model.
* Decent browser support: Chrome, Firefox, mobile FF, IE10.

**Disadvantages**

* Very complex API resulting in large amounts of nested callbacks.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain Application Cache in HTML5. OR What is a manifest file in HTML?***

HTML5 provides an application caching mechanism that lets web-based applications run offline. Developers can use the Application Cache (AppCache) interface to specify resources that the browser should cache and make available to offline users. Applications that are cached load and work correctly even if users click the refresh button when they are offline.

Using an application cache gives an application the following benefits:

* **Offline browsing**: users can navigate a site even when they are offline.
* **Speed**: cached resources are local, and therefore load faster.
* **Reduced server load**: the browser only downloads resources that have changed from the server.

Syntax:

```html
<html manifest="example.appcache">
  ...
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/application-cache.html)

*Note: Using the application caching feature described here is at this point highly discouraged; it\'s in the process of being removed from the Web platform. Use **Service Workers** instead. In fact as of Firefox 44, when AppCache is used to provide offline support for a page a warning message is now displayed in the console advising developers to use Service workers instead (bug 1204581).*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the purpose of cache busting and how can you achieve it?***

Browsers have a cache to temporarily store files on websites so they don\'t need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.

However, it can cause problems when the website has been changed by developers because the user's cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.

**Cache busting** is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.

A common technique to force the browser to re-download the file is to append a query string to the end of the file.

```html
<!-- src="js/script.js" => src="js/script.js?v=2" -->
<script src="js/script.js?v=2"></script>
```

The browser considers it a different file but prevents the need to change the file name.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What ARIA and screenreaders are, and how to make a website accessible?***

Screen readers are software programs that  provide assistive technologies that allow people with disabilities (such as no sight, sound or mouse-ing ability) to use web applications. You can make your sites more accessible by following ARIA standards such as semantic HTML, alt attributes and using [role=button] in the expected ways

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to use data- attribute in html5***

*ToDo*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the purpose of the `alt` attribute on images?***

The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.

```html
<img src="pancakes.png" alt="Stack of blueberry pancakes with powdered sugar">
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does `enctype='multipart/form-data'` mean?***

The enctype attribute specifies how the form-data should be encoded when submitting it to the server.

*Example:* 01

```html
<form action="fileupload.php" method="post" enctype="multipart/form-data"> 
    <p>Please select the file you would like to upload.</p> 
    <input type="file" name="upload"> 
    <br> 
    <input type="submit" value="Upload File">
</form>
```

*Example:* 02

```html
<form action="/urlencoded?token=A87412B" method="POST" enctype="application/x-www-form-urlencoded">
    <input type="text" name="username" value=""/>
    <input type="text" name="password" value=""/>
    <input type="submit" value="Submit" />
</form>
```

*Example:* 03

```html
<form action="action.do" method="get" enctype="text/plain">
    Name: <input type="text" name="name" />
    Phone: <input type="number" name="phone" />
    <input type="submit" value="Submit" />
</form>
```

|Sl.No|Value	                |Description                        |
|-----|-------------------------|-----------------------------------|
| 01. |application/x-www-form-urlencoded  |	Default. All characters are encoded before sent (spaces are converted to "+" symbols, and special characters are converted to ASCII HEX values)|
| 02. |multipart/form-data	    |No characters are encoded. This value is required when you are using forms that have a file upload control |
| 03.  |text/plain	            |Spaces are converted to "+" symbols, but no special characters are encoded|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is difference between Select and Datalist?***

For the select element, the user is required to select one of the options you\'ve given. For the datalist element, it is suggested that the user select one of the options you\'ve given, but he can actually enter anything he wants in the input.

### **Select**

```html
<select name="browser">
  <option value="firefox">Firefox</option>
  <option value="ie">IE</option>
  <option value="chrome">Chrome</option>
  <option value="opera">Opera</option>
  <option value="safari">Safari</option>
</select>
```

### **Datalist**

```html
<input type="text" list="browsers">
<datalist id="browsers">
  <option value="Firefox">
  <option value="IE">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain some of the pros and cons for CSS animations versus JavaScript animations?***

Regarding optimization and responsiveness the debate bounces back and forth but, the concept is:

* CSS animations allows the browser to choose where the animation processing is done, CPU or the GPU. (Central or Graphics Processing Unit)

* That said, adding many layers to a document will eventually have a performance hit.

* JS animation means more code for the user to download and for the developer to maintain.

* Applying multiple animation types on an element is harder with CSS since all transforming power is in one property transform

* CSS animations being declarative are not programmable therefore limited in capability.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does CORS stand for and what issue does it address?***

Cross-Origin Resource Sharing (CORS) is a W3C spec that allows cross-domain communication from the browser. By building on top of the XMLHttpRequest object, CORS allows developers to work with the same idioms as same-domain requests. CORS gives web servers cross-domain access controls, which enable secure cross-domain data transfers.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Can you describe the difference between progressive enhancement and graceful degradation?***

* Graceful degradation is when you initially serve the best possible user experience, with all modern functionality, but use feature detection to “gracefully degrade” parts of your application with a fallback or polyfill.

* Progressive enhancement ensures a page works at the lowest expected abilities of browsers. So if you have a JavaScript web application that enhances a persons ability to send information to a database with features like ajax – at the very least you need to provide the ability for a person to send that same information without JavaScript enabled. In this case a simple form with full-page refresh will do what you need.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the DOM? How does the DOM work?***

The DOM (Document Object Model) is a cross-platform API that treats HTML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

* The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.

* document.getElementById() and document.querySelector() are common functions for selecting DOM nodes.

* Setting the innerHTML property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How does the browser rendering engine work?***

In order to render content the browser has to go through a series of steps:

* Document Object Model(DOM)
* CSS object model(CSSOM)
* Render Tree
* Layout
* Paint

<p align="center">
    <img src="assets/images/layers.png" alt="Browser Rendering Engine" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between standards mode and quirks mode?***

In **Quirks mode**, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5. This is essential in order to support websites that were built before the widespread adoption of web standards. In **Standards mode**, the behavior is described by the HTML and CSS specifications. 

For HTML documents, browsers use a `<!DOCTYPE html>` in the beginning of the document to decide whether to handle it in quirks mode or standards mode. 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset=UTF-8>
    <title>Hello World!</title>
  </head>
  <body>
  </body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Critical Rendering Path?***

* Constructing the DOM Tree
* Constructing the CSSOM Tree
* Running JavaScript - parser blocking resource
* Creating the Render Tree
* Generating the Layout
* Painting

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the Benefits of Server Side Rendering (SSR) Over Client Side Rendering (CSR)?***

* We are using server side rendering for two reasons:
    * performance benefit for our customers
    * Consistent SEO performance

* The main difference is that for SSR your server\'s response to the browser is the HTML of your page that is ready to be rendered, while for CSR the browser gets a pretty empty document with links to your javascript. That means for SSR your browser will start rendering the HTML from your server without having to wait for all the JavaScript to be downloaded and executed.
    
* for SSR, the user can start viewing the page while all of that is happening. For the CSR world, you need to wait for all of the above to happen and then have the virtual dom moved to the browser dom for the page to be viewable.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Name 3 ways to decrease page load?***

1. LocalStorage 
1. Caching resources 
1. DNS-prefetch (sample below) 
1. Keep resources on a CDN

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Ways to improve website performance***

* Minimize HTTP Requests
    * Sites are mainly slow because of too many (or too large) HTTP requests. We can eliminate unnecessary request;
        * combined files: js to a file, css to a file
        * CSS sprites: CSS Sprites are the preferred method for reducing the number of image requests. Combine your background images into a single image and use the CSS background-image and background-position properties to display the desired image segment.

* Use a Content Delivery Network CDN

    * A CDN is essentially many optimized servers around the world that deliver web content to users based on their geographic location. This means big performance improvements for site users. Because, say, if a person accessing your site in India, they will be retrieving web content from a server nearby

* Optimize Images:

    * image sizes make a huge difference to site speed. The larger content/images, the slower the site. we could:
        * Changing the resolution: reducing the “quality” of the image (and thereby the file size)
        * Compressing the picture: increasing the efficiency of image data storage
        * Cropping the picture: when cropping, you are cutting out unneeded areas and thus making the image smaller in size

* Put Scripts at the Bottom:

    * Javascript files can load after the rest of your page. The simplest solution is to place your external Javascript files at the bottom of your page, just before the close of your body tag. Now more of your site can load before your scripts. Another method that allows even more control is to use the defer or async attributes when placing external .js files on your site.
        
        * Async tags load the scripts while the rest of the page loads, but this means scripts can be loaded out of order. Basically, lighter files load first. This might be fine for some scripts, but can be disastrous for others.
        
        * The defer attribute loads your scripts after your content has finished loading. It also runs the scripts in order. Just make sure your scripts run so late without breaking your site.

* Add an Expires or a Cache-Control Header

    * Web page designs are getting richer and richer, which means more scripts, stylesheets, images, and Flash in the page. A first-time visitor to your page may have to make several HTTP requests, but by using the Expires header you make those components cacheable. This avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often used with images, but they should be used on all components including scripts, stylesheets, and Flash components.

* Gzip Components

    * Compression reduces response times by reducing the size of the HTTP response. Gzipping generally reduces the response size by about 70%.

* Put Stylesheets at the Top:

    * This is because putting stylesheets in the HEAD allows the page to render progressively.

* Avoid CSS Expressions

* Use GET for AJAX Requests:

    * Ajax is that it provides instantaneous feedback to the user because it requests information asynchronously from the backend web server

* Make JavaScript and CSS External:

    *  Using external files in the real world generally produces faster pages because the JavaScript and CSS files are cached by the browser. JavaScript and CSS that are inlined in HTML documents get downloaded every time the HTML document is requested. This reduces the number of HTTP requests that are needed, but increases the size of the HTML document. On the other hand, if the JavaScript and CSS are in external files cached by the browser, the size of the HTML document is reduced without increasing the number of HTTP requests.

* Use get to ajax request:

    *  POST is implemented in the browsers as a two-step process: sending the headers first, then sending data. So it's best to use GET, which only takes one TCP packet to send (unless you have a lot of cookies).

* No 404s:

    * HTTP requests are expensive so making an HTTP request and getting a useless response (i.e. 404 Not Found) is totally unnecessary and will slow down the user experience without any benefit.

* Reduce Cookie Size:

    * HTTP cookies are used for a variety of reasons such as authentication and personalization. Information about cookies is exchanged in the HTTP headers between web servers and browsers. It's important to keep the size of cookies as low as possible to minimize the impact on the user's response time.

* Reduce DNS Lookups
* Minify JavaScript and CSS
* Avoid Redirects
* Remove Duplicate Scripts
* Configure Etags
* Make Ajax Cacheable
* Post-load Components
* Preload Components
* Reduce the Number of DOM Elements
* Minimize the Number of iframes
* Minimize DOM Access
* Optimize CSS Sprites
* Don't Scale Images in HTML
* Make favicon.ico Small and Cacheable
* Avoid Empty Image src

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Comparison of browsers engines like Chrome, Firefox, Internet explorer, Safari?***

* Chrome: 
    * Layout rendering engine **Webkit**. 
    * JavaScript engine **V8**

* Firefox: 
    * Layout rendering engine **Gecko**. 
    * JavaScript engine **Spider monkey**
        
* Internet explorer: 
    * Layout rendering engine **Trident**. 
    * JavaScript  engine **Chakra**
        
* Safari:
    * Layout rendering engine **Webkit**. 
    * JavaScript engine JavascriptCore i.e **Nitro**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does the lang attribute in html do?***

* Helps in styling pages by using them in css `:lang()` pseudo class Spelling and grammar checkers Languade detection by search engines

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is desktop first and mobile first design approach?***

* Desktop first : 
        General selectors and styles designed to make the site look good on DESKTOP screens defined globally. But they affect all devices, and must be overridden by max-width media queries targeting minimum screen size

* Mobile First : 
        General selectors and styles designed to make the site look good on small MOBILE screens go here. But they affect all devices, and must be overridden by min-width media queries targeting maximum scrren size
    
    In desktop first approach the media queries will be written with respect to max-width whereas in mobile first approach media queries will be written with respect to min-width

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are `data-` attributes good for?***

* The HTML5 data attribute lets you assign custom data to an element. When we want to store more information/data about the element when no suitable HTML5 element or attribute exists

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the difference between layout, painting and compositing?***

<img src="lib/img/frame-full.jpg" alt="Browser Engine" />

* **JavaScript**: Typically JavaScript is used to handle work that will result in visual changes, whether it\'s jQuery\'s animate function, sorting a data set, or adding DOM elements to the page. It doesn\'t have to be JavaScript that triggers a visual change, though: CSS Animations, Transitions, and the Web Animations API are also commonly used.

* **Style calculations**: This is the process of figuring out which CSS rules apply to which elements based on matching selectors, for example, .headline or .nav > .nav__item. From there, once rules are known, they are applied and the final styles for each element are calculated.

* **Layout**: Once the browser knows which rules apply to an element it can begin to calculate how much space it takes up and where it is on screen. The web\'s layout model means that one element can affect others, for example the width of the `<body>` element typically affects its children\'s widths and so on all the way up and down the tree, so the process can be quite involved for the browser.

* **Paint**: Painting is the process of filling in pixels. It involves drawing out text, colors, images, borders, and shadows, essentially every visual part of the elements. The drawing is typically done onto multiple surfaces, often called layers.

* **Compositing**: Since the parts of the page were drawn into potentially multiple layers they need to be drawn to the screen in the correct order so that the page renders correctly. This is especially important for elements that overlap another, since a mistake could result in one element appearing over the top of another incorrectly.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain about HTML Layout Engines used by browsers?***

|Engine	      |Status	        |Embedded in                                                                           |
|-------------|-----------------|--------------------------------------------------------------------------------------|
|WebKit	      |Active	        |Safari browser, plus all browsers hosted on the iOS App Store                         |
|Blink	      |Active	        |Google Chrome and all other Chromium-based browsers like Opera and Microsoft Edge     |
|Gecko	      |Active	        |Firefox browser and Thunderbird email client, plus forks like SeaMonkey and Waterfox  |
|KHTML	      |Discontinued	  |Konqueror browser                                                                     |
|Presto	      |Discontinued	  |formerly in the Opera browser                                                         |
|EdgeHTML	  |Discontinued	  |formerly in the Microsoft Edge browser                                                |
|Trident	  |Discontinued	  |Internet Explorer browser and Microsoft Outlook email client                          |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to make page responsive?***

Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones).

### **1. Setting the viewport**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### **2. Responsive Images**

If the CSS width property is set to 100%, the image will be responsive and scale up and down

```html
<img src="img.png" style="width:100%;">
```

### **3. Show different Images depending on Browser Width**

The HTML `<picture>` element allows you to define different images for different browser window sizes.

```html
<picture>
  <source srcset="img_small.jpg" media="(max-width: 600px)">
  <source srcset="img_large.jpg" media="(max-width: 1500px)">
  <source srcset="img.jpg">
  <img src="img_small.jpg" alt="Image">
</picture>
```

### **4. Responsive Text Size**

The text size can be set with a "vw" unit, which means the "viewport width". That way the text size will follow the size of the browser window.

```html
<h1 style="font-size:10vw">Hello World</h1>
```

### **5. Media Queries**

Using media queries you can define completely different styles for different browser sizes.

```css
/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {
  .left, .main, .right {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Does the following trigger http request at the time of page load?***

```html
<img src="mypic.jpg" style="visibility: hidden" alt="My photo">

<div style="display: none;">
    <img src="mypic.jpg" alt="My photo">
</div>
```

* Yes

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***List the API available in HTML5?***

### **1. High Resolution Time API**

The High Resolution Time API provides the current time in sub-millisecond resolution and such that it is not subject to system clock skew or adjustments.

It exposes only one method, that belongs to the `window.performance` object, called `now()`. It returns a `DOMHighResTimeStamp` representing the current time in milliseconds. The timestamp is very accurate, with precision to a thousandth of a millisecond, allowing for accurate tests of the performance of our code.

```javascript
var time = performance.now();
```

### **2. User Timing API**

It allows us to accurately measure and report the performance of a section of JavaScript code. It deals with two main concepts: mark and measure. The former represents an instant (timestamp), while the latter represents the time elapsed between two marks.

```javascript
performance.mark("startFoo");
// A time consuming function
foo();
performance.mark("endFoo");

performance.measure("durationFoo", "startFoo", "endFoo");
```

### **3. Network Information API**

This API belongs to the connection property of the `window.navigator` object. It exposes two read-only properties: `bandwidth` and `metered`. The former is a number representing an estimation of the current bandwidth, while the latter is a Boolean whose value is true if the user\'s connection is subject to limitation and bandwidth usage, and false otherwise.

|Sl.No| API                            | Description
|-----|--------------------------------|--------------------------------------------------------------------|
| 01. |navigator.connection.type       |Network Type                               |
| 02. |navigator.connection.downlink   |Effective bandwidth estimate ( downlink )                               |
| 03. |navigator.connection.rtt        |Effective round-trip time estimate ( rtt )                                |
| 04. |navigator.connection.downlinkMax|Upper bound on the downlink speed of the first network hop ( downlinkMax )|
| 05. |navigator.connection.effectiveType|Effective connection type  |
| 06. |navigator.connection.saveData   |True if the user has requested a reduced data usage mode from the user agent ( saveData )|

### **4.) Vibration API**

It exposes only one method, `vibrate()`, that belongs to the `window.navigator` object. This method accepts one parameter specifying the duration of the vibration in milliseconds. The parameter can be either an integer or an array of integers. In the second case, it\'s interpreted as alternating vibration times and pauses.

```javascript
// Vibrate once for 2 seconds
navigator.vibrate(2000);
```

### **5.) Battery Status API**

The Battery Status API exposes four properties (`charging`, `chargingTime`, `discharingTime`, and `level`) and four events. The properties specify if the battery is in charge, the seconds remaining until the battery is fully charged, the seconds remaining until the battery is fully discharged, and the current level of the battery. These properties belongs to the `battery` property of the `window.navigator` object.

```javascript
// Retrieves the percentage of the current level of the device's battery
var percentageLevel = navigator.battery.level * 100;
```

### **6.) Page Visibility API**

The Page Visibility API enables us to determine the current visibility state of the page. The Page Visibility API is especially useful for saving resources and improving performance by letting a page avoid performing unnecessary tasks when the document isn\'t visible.

```javascript
//document.hidden retuns true if page is not visible.
console.log('Page Visibility: '+document.hidden); 
```

### **7.) Fullscreen API**

The Fullscreen API provides a way to request fullscreen display from the user, and exit this mode when desired. This API exposes two methods, `requestFullscreen()` and `exitFullscreen()`, allowing us to request an element to become fullscreen and to exit fullscreen.

```javascript
document.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) { // Enter Key
        toggleFullScreen();
    }
}, false);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
        document.exitFullscreen(); 
        }
    }
}
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/html5-api.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How geolocation api works in html5?***

The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

The Geolocation API is published through the `navigator.geolocation` object.

```javascript
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

**Example**

```html
<!DOCTYPE html>
<html>
    <head>
         <title>Geolocation</title>
    </head>
   <body>
    <p><button onclick="geoFindMe()">Show my location</button></p>
    <div id="out"></div>
</body>

<script type="text/javascript">
    /**
        The Geolocation API allows the user to provide their location to web applications 
        if they so desire. For privacy reasons, the user is asked for permission to report 
        location information.
    **/
    function geoFindMe() {
        var output = document.getElementById("out");

        if (!navigator.geolocation){
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }

        function success(position) {
            var latitude  = position.coords.latitude;
            var longitude = position.coords.longitude;

            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

            var img = new Image();
            img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

            output.appendChild(img);
        }

        function error() {
            output.innerHTML = "Unable to retrieve your location";
        }

        output.innerHTML = "<p>Locating…</p>";

        navigator.geolocation.getCurrentPosition(success, error); //function to get the current position of the device
    }
</script>
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/geolocation.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the use of WebSocket API?***

The **WebSocket API** is an advanced technology that makes it possible to open a two-way interactive communication session between the user\'s browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.

**Interfaces**  

|Sl.No|   API      | Description    |
|-----|------------|----------------|
| 01. |WebSocket   |The primary interface for connecting to a WebSocket server and then sending and receiving data on the connection.|   
| 02. |CloseEvent  |The event sent by the WebSocket object when the connection closes.   |
| 03. |MessageEvent|The event sent by the WebSocket object when a message is received from the server.|   
 
Example

```javascript
 // Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080/');

// Connection opened
socket.addEventListener('open', function(event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function(event) {
    console.log('Message from server ', event.data);
});
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain about HTML Canvas?***

**canvas** is an HTML element which can be used to draw graphics via JavaScript. This can, for instance, be used to draw graphs, combine photos, or create animations.

**Colors, Styles, and Shadows**

|  Property    |	Description                                                                 |
|--------------|--------------------------------------------------------------------------------|
|fillStyle	   | Sets or returns the color, gradient, or pattern used to fill the drawing       |
|strokeStyle   | Sets or returns the color, gradient, or pattern used for strokes               |
|shadowColor   | Sets or returns the color to use for shadows                                   |
|shadowBlur	   | Sets or returns the blur level for shadows                                     |
|shadowOffsetX | Sets or returns the horizontal distance of the shadow from the shape           |
|shadowOffsetY | Sets or returns the vertical distance of the shadow from the shape             |


**Line Styles**

|Property	 |  Description                                                   |
|------------|----------------------------------------------------------------|
|lineCap	 |Sets or returns the style of the end caps for a line            |
|lineJoin	 |Sets or returns the type of corner created, when two lines meet |
|lineWidth	 |Sets or returns the current line width                          |
|miterLimit	 |Sets or returns the maximum miter length                        |


**Rectangles**
  
|Method	        |Description                                          |
|---------------|-----------------------------------------------------|
|rect()	        |Creates a rectangle                                  |
|fillRect()	    |Draws a "filled" rectangle                           |
|strokeRect()	|Draws a rectangle (no fill)                          |
|clearRect()	|Clears the specified pixels within a given rectangle |


**Paths**
   
| Method	      |   Description                                                                                 |
|-----------------|---------------------------------------------------------------------------------------------- |
|fill()	          |Fills the current drawing (path)                                                               |
|stroke()	      |Actually draws the path you have defined                                                       |
|beginPath()	  |Begins a path, or resets the current path                                                      |
|moveTo()	      |Moves the path to the specified point in the canvas, without creating a line                   |
|closePath()	  |Creates a path from the current point back to the starting point                               |
|lineTo()	      |Adds a new point and creates a line to that point from the last specified point in the canvas  |
|clip()	          |Clips a region of any shape and size from the original canvas                                  |
|arc()	          |Creates an arc/curve (used to create circles, or parts of circles)                             |
|arcTo()	      |Creates an arc/curve between two tangents                                                      |
  

**Transformations**
   
|Method	        |Description                                                                |
|---------------|-------------------------------------------------------------------------- |
|scale()	    |Scales the current drawing bigger or smaller                               |
|rotate()	    |Rotates the current drawing                                                |
|translate()	|Remaps the (0,0) position on the canvas                                    |
|transform()	|Replaces the current transformation matrix for the drawing                 |
|setTransform()	|Resets the current transform to the identity matrix. Then runs transform() |
  

**Text**
    
|Property	    |Description                                                       |
|---------------|----------------------------------------------------------------- |
|font	        |Sets or returns the current font properties for text content      |
|textAlign	    |Sets or returns the current alignment for text content            |
|textBaseline	|Sets or returns the current text baseline used when drawing text  |
|fillText()	    |Draws "filled" text on the canvas                                 |
|strokeText()	|Draws text on the canvas (no fill)                                |
|measureText()	|Returns an object that contains the width of the specified text   |

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Canvas</title>
  </head>
  <body>
    
    <div><b>Text</b></div>
    <canvas id="text" width="200" height="100" ></canvas><br/><br/>


    <div><b>Straight Line</b></div>
    <canvas id="line" width="300" height="0" style="border: 1px solid #333;"></canvas><br/><br/>


    <div><b>Rectangle</b></div>
    <canvas id="rectangle" width="300" height="200" style="border: 1px solid #999;"></canvas><br/><br/>


    <div><b>Rectangle with Style</b></div>
    <canvas id="rect">This browser does not support Canvas!</canvas><br/><br/>


    <div><b>Circle</b></div>
    <canvas id="circle">This browser does not support Canvas!</canvas><br/><br/>


    <script type="text/javascript">
      // Text with style
      var canvas = document.getElementById('text');
      var context = canvas.getContext('2d');
      context.font = '20pt Calibri';
      context.fillStyle = 'blue';
      context.fillText('Hello World!', 50, 50);


      // Straight Line
      var canvas = document.getElementById("line");
      var context = canvas.getContext("2d");
      context.moveTo(50, 150);
      context.lineTo(250, 50);
      context.stroke();


      // Rectange with style
      var canvas = document.getElementById("rect");
      var context = canvas.getContext("2d");
      context.fillStyle = "#FF0000";
      context.fillRect(0, 0, 300, 200);

      // Circle
      var canvas = document.getElementById("circle");
      var context = canvas.getContext("2d");
      context.beginPath();
      context.arc(95, 50, 40, 0, 2 * Math.PI);
      context.stroke();
    </script>
  </body>
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/canvas.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is difference between SVG and Canvas?***

### **SVG**

The Scalable Vector Graphics (SVG) is an XML-based image format that is used to define two-dimensional vector based graphics for the web. Unlike raster image (e.g. .jpg, .gif, .png, etc.), a vector image can be scaled up or down to any extent without losing the image quality.

There are following advantages of using SVG over other image formats like JPEG, GIF, PNG, etc.

* SVG images can be searched, indexed, scripted, and compressed.
* SVG images can be created and modified using JavaScript in real time.
* SVG images can be printed with high quality at any resolution.
* SVG content can be animated using the built-in animation elements.
* SVG images can contain hyperlinks to other documents.

**Example:**  

```html
<!DOCTYPE html>
<html>
   <head>
      <style>
         #svgelem {
            position: relative;
            left: 50%;
            -webkit-transform: translateX(-20%);
            -ms-transform: translateX(-20%);
            transform: translateX(-20%);
         }
      </style>
      <title>HTML5 SVG</title>
   </head>
   <body>
      <h2 align="center">HTML5 SVG Circle</h2>
      <svg id="svgelem" height="200" xmlns="http://www.w3.org/2000/svg">
         <circle id="bluecircle" cx="60" cy="60" r="50" fill="blue" />
      </svg>
   </body>
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/svg.html)

### **Canvas**

Canvas is a HTML element is used to draw graphics on a web page. It is a  bitmap with an “immediate mode” graphics application programming interface (API) for drawing on it. The `<canvas>` element is only a container for graphics. In order to draw the graphics, you are supposed to use a script. Canvas has several strategies when it comes to drawing paths, boxes, circles, text & adding images.

*Example:*

```html
<!DOCTYPE html>
<html>
   <head>
      <title>HTML5 Canvas Tag</title>
   </head>
   <body>
      <canvas id="newCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>
      <script>
         var c = document.getElementById('newCanvas');
         var ctx = c.getContext('2d');
         ctx.fillStyle = '#7cce2b';
         ctx.fillRect(0,0,300,100);
      </script>
   </body>
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/canvas.html) 

**Differences between SVG and Canvas**

|SVG	                |Canvas                                         |
|-----------------------|-----------------------------------------------|
|Vector based (composed of shapes)	|Raster based (composed of pixel)
|Multiple graphical elements, which become the part of the page's DOM tree|	Single element similar to <img> in behavior. Canvas diagram can be saved to PNG or JPG format|
|Modified through script and CSS	|Modified through script only
|Good text rendering capabilities	|Poor text rendering capabilities
|Give better performance with smaller number of objects or larger surface, or both	|Give better performance with larger number of objects or smaller surface, or both|
|Better scalability. Can be printed with high quality at any resolution. Pixelation does not occur	|Poor scalability. Not suitable for printing on higher resolution. Pixelation may occur |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain Drag and Drop in HTML5?***

HTML5 drag-and-drop uses the `DOM event model` and `drag events` inherited from `mouse events`. A typical drag operation begins when a user selects a draggable element, drags the element to a droppable element, and then releases the dragged element.

|Event	        |Description                                                            |
|---------------|-----------------------------------------------------------------------|
|Drag	        |It fires every time when the mouse is moved while the object is being dragged.|
|Dragstart	    |It is a very initial stage. It fires when the user starts dragging object.|
|Dragenter	    |It fires when the user moves his/her mouse cursur over the target element.|
|Dragover	    |This event is fired when the mouse moves over an element.|
|Dragleave	    |This event is fired when the mouse leaves an element.|
|Drop	        |Drop It fires at the end of the drag operation.|
|Dragend	    |It fires when user releases the mouse button to complete the drag operation.|

Example

```html
<!DOCTYPE HTML>
<html>
   <head>
   <script>
        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
    </script>
</head>
<body>
  <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
  <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">
</body>
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/drag-drop.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain Microdata in HTML5?***

Microdata is a standardized way to provide additional semantics in web pages. Microdata lets you define your own customized elements and start embedding custom properties in your web pages. At a high level, microdata consists of a group of name-value pairs.

The groups are called **items**, and each name-value pair is a **property**. Items and properties are represented by regular elements. Search engines benefit greatly from direct access to this structured data because it allows search engines to understand the information on web pages and provide more 
relevant results to users.

At a high level, microdata consists of a group of name-value pairs
* **itemscope**:- To create an item
* **itemprop**:- To add a property to an item

Example

```html
<div itemscope>
    <p>My name is <span itemprop="name">Elizabeth</span>.</p>
</div>

<div itemscope>
    <p>My name is <span itemprop="name">Daniel</span>.</p>
</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the HTML tags which deprecated in HTML5?***

### **Deprecated Tags**

The following elements are not available in HTML5 anymore and their function is better handled by CSS.

|Sl.No|Tags (Elements)  |	Description        |
|-----|-----------------|----------------------|
| 01. |`<acronym>`	    |Defines an acronym|
| 02. |`<applet>`	    |Defines an applet|
| 03. |`<basefont>`	    |Defines an base font for the page.|
| 04. |`<big>`	        |Defines big text|
| 05. |`<center>`	    |Defines centered text|
| 06. |`<dir>`	        |Defines a directory list|
| 07. |`<font>`	        |Defines text font, size, and color|
| 08. |`<frame>`	    |Defines a frame|
| 08. |`<frameset>`	    |Defines a set of frames|
| 10. |`<isindex>`	    |Defines a single-line input field|
| 11. |`<noframes>`	    |Defines a noframe section|
| 12. |`<s>`	        |Defines strikethrough text|
| 13. |`<strike>`	    |Defines strikethrough text|
| 14. |`<tt>`	        |Defines teletype text|
| 15. |`<u>`	        |Defines underlined text|

### **Deprecated Attributes**  

|Removed Attributes	  |From the Elements     |
|---------------------|----------------------|
|rev	              |link, a|
|charset	          |link and a|
|shape	              |a|
|coords	              |a|
|longdesc	          |img and iframe.|
|target	              |link|
|nohref	              |area|
|profile	          |head|
|version	          |html|
|name	              |img|
|scheme	              |meta|
|archive	          |object|
|classid	          |object|
|codebase	          |object|
|codetype	          |object|
|declare	          |object|
|standby	          |object|
|valuetype	          |param|
|type	              |param|
|axis	              |td and t|
|abbr	              |td and t|
|scope	              |td|
|align	              |caption, iframe, img, input, object, legend, table, hr, div, h1, h2, h3, h4, h5, h6, p, col, colgroup, tbody, td, tfoot, th, thead and tr.|
|alink	              |body|
|link	              |body|
|vlink	              |body|
|text	              |body|
|background	          |body|
|bgcolor	          |table, tr, td, th and body.|
|border	              |table and object.|
|cellpadding	      |table|
|cellspacing	      |table|
|char	              |col, colgroup, tbody, td, tfoot, th, thead and tr.|
|charoff 	          |col, colgroup, tbody, td, tfoot, th, thead and tr.|
|clear	              |br|
|compact	          |dl, menu, ol and ul.|
|frame	              |table|
|compact	          |dl, menu, ol and ul.|
|frame	              |table|
|frameborder	      |iframe|
|hspace	              |img and object.|
|vspace	              |img and object.|
|marginheight	      |iframe|
|marginwidth	      |iframe|
|noshade	          |hr|
|nowrap	              |td and th|
|rules	              |table|
|scrolling	          |iframe|
|size	              |hr|
|type	              |li, ol and ul.|
|valign	              |col, colgroup, tbody, td, tfoot, th, thead and tr|
|width	              |hr, table, td, th, col, colgroup and pre.|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How you can Use Modernizr in HTML5?***

Modernizr is a JavaScript library that detects which HTML5 and CSS3 features visitor\'s browser supports. In detecting feature support, it allows developers to test for some of the new technologies and then provide fallbacks for browsers that do not support them. This is called **feature detection** and is much more efficient than browser sniffing.

### **Using Modernizr with CSS**

By default, Modernizr sets classes for all of your tests on the root element (`<html>` for websites). This means adding the class for each feature when it is supported, and adding it with a no- prefix when it is not (e.g. `.feature` or `.no-feature`).

```css
.no-cssgradients .header {
  background: url("images/glossybutton.png");
}

.cssgradients .header {
  background-image: linear-gradient(cornflowerblue, rebeccapurple);
}
```

### **Using Modernizr with JavaScript**

Modernizr keeps track of the results of all of it\'s feature detections via the `Modernizr` object.

```javascript
if (Modernizr.canvas) {
    alert("This browser supports HTML5 canvas!");
} else {
    alert("no canvas :(");
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is progressive rendering?***

Progressive Rendering is the technique of sequentially rendering portions of a webpage in the server and streaming it to the client in parts without waiting for the whole page to rendered.

It implies that once the important material is produced on the server, you may stream it to the client without having to wait for non-critical stuff to be displayed. It combines the advantages of both CSR (Client Side Rendering) and SSR (Server Side Rendering) (Server Side Rendering).

### **Client Side Rendering**

Client Side Rendering (CSR) is a technique in which content is rendered in the browser using JavaScript. Instead of getting all the content from the HTML file itself, the server sends HTML with an empty body and script tags that contain links to JavaScript bundles that the browser will use to render the content.

Typical page load behaviour in CSR —

* Browser requests the server for HTML
* Server sends HTML with script tags in head and no content in body
* Browser parses the HTML and makes http requests to load the scripts
* Once the scripts are loaded, the browser parses them and makes API requests and loads all the content asynchronously

Since the all the content starts loading only after loading the initial JavaScript, it takes a longer time to show any content on the page. If the user is on a slow network, the content is blocked for an even longer time due to lower bandwidth and higher latency.

### **Server Side Rendering**

When rendering on the server side, the HTML is rendered on the server and sent to the client. The content that we need to display on the screen becomes available immediately after the HTML is parsed; hence, primary rendering of content is faster than CSR.

Typical page load behaviour in SSR —

* Browser requests the server for HTML.
* Server makes API requests (usually co-located) and renders the content in the server.
* Once the page is ready, the server sends it to the browser.
* The browser loads and parses the HTML and paints the content on the screen without waiting for the JavaScript bundle(s) to load.
* Once the JavaScript bundle(s) are loaded, the browser hydrates interactivity to DOM elements, which is usually attaching event handlers and other interactive behaviours.

Since the APIs are usually co-located with the server, the content is loaded super fast (faster than CSR) and the HTML is sent to the browser. Initial JavaScript load doesn\'t block content load as the HTML sent by the server already has the content.

<p align="center">
    <img src="assets/images/progressive-rendering.png" alt="Progressive Rendering" width="500px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is an iframe and how it works?***

The `<iframe>` HTML element represents a nested browsing context, embedding another HTML page into the current one. Each embedded browsing context has its own **session history** and **document**. The browsing context that embeds the others is called the parent browsing context. The topmost browsing context — the one with no parent — is usually the browser window, represented by the **Window** object.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 iframe</title>
  </head>
  <style type="text/css">
  iframe {
    border: 1px solid #333;
    width: 50%;
  }
  .output {
    background: #eee;
  }
  </style>
  <body>
    <p>The Inline iFrame Example</p>
    <iframe id="inlineFrameId"
      title="Inline iFrame Example"
      width="300"
      height="200"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
        Sorry your browser does not support inline frames.
    </iframe>
  </body>
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/iframe.html)

### **The Iframe Tag Attributes**

|Attribute       | Description                |
|----------------|----------------------------|
|allow           |indicates what features the iframe is allowed to use (e.g. fullscreen, camera, autoplay)|
|allowfullscreen |grants or denies permission for the iframe to appear in full-screen mode|
|height           |sets the height of the iframe (if not specified, the default height is 150 pixels)|
|loading         |sets lazy loading or eager loading for the iframe|
|referrerpolicy  |sets what referrer information should be sent in the request for the iframe|
|src             |the address of the resource included in the iframe|
|width           |sets the width of the iframe (if not specified, the default width is 300 pixels)|

*Note: Because each browsing context is a complete document environment, every `<iframe>` in a page requires increased memory and other computing resources.*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the use of rel="nofollow", rel="noreferrer", rel="noopener" attribute?*** 

### **1. rel="nofollow"**

When `rel="nofollow"` tag is used, it instruct the search engines not to pass any PageRank from one page to the other. It does not allow it to pass the authority to the specific website. The main advantage of using this attribute is to control the spam attack.

There may be times, when you do not have control over what people publish on your websites, for example some blog comments and some kind of forum posting.

**Example**

```html
<a href="https://www.website.com" rel="nofollow">Link to yoursite.com</a>
```

### **2. rel="noreferrer"**

Noreferrer is related to analytics and tracking. The referrer value shows the previous page where a user came from. By using the noreferrer attribute on a link, you are preventing other pages from seeing that traffic came from a click on your link.

**Example**

```html
<a href="https://www.website.com" rel="noreferrer">Link to yoursite.com</a>
```

### **3. rel="noopener"**

It prevents the new page from being able to access the `window.opener` property and will make it run in a separate process. noopener tag works as a security fix which prevents malicious links to take control over an opened tab.

**Example**

```html
<a href="https://www.website.com" target="_blank" rel="noopener">Link to yoursite.com</a>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How can you highlight text in HTML?***

The `<mark>` HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage\'s relevance or importance in the enclosing context.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Highlight text in HTML</title>
  </head>
  <body>
    <p>Search results for "salamander":</p>
    <hr>
    <p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>
    <p>Most <mark>salamander</mark>s are nocturnal, and hunt for insects, worms, and other small creatures.</p>
  </body>
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/mark.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How can I get indexed better by search engines?***

HTML tags are used to influence the way our pages appear in search results. With the help of certain tags, we can turn regular search snippets into rich snippets, and maybe even into featured snippets. And, as our search snippets get more advanced, they are able to secure better **Search Engine Results Pages (SERP)** positions and attract more traffic.

Here are all the HTML tags that still matter:

### **1. Title tag**

Title tags are used by search engines to determine the subject of a page and display it in SERP. As a rule of thumb, titles that are under 60 characters long will fit on most screens. In HTML, a title tag looks like this:

```html
<title>Your Title Goes Here</title>
```

### **2. Meta description tag**

Meta description is a short paragraph of text used to describe your page in search results. The function of meta description is similar to the title. It provides a little more detail about your page and it helps users decide whether to visit your page or not. In HTML, a meta description tag looks like this:

```html
<meta name="description" content="Your description goes here">
```

### **3. Heading tags**

Headings (H1-H6) are used to split your page into sections or chapters. Each heading is like a small title within the page. In HTML, a heading looks like this:

```html
<h1>Your heading goes here</h1>
```

### **4. Image alt attribute**

The `alt` text attribute is a part of an image tag, and it provides a description for an image. Alt text plays a major role in image optimization. It makes your images accessible both to search engines (by telling them what a particular image means) and to people (by displaying an alternative text in case a particular image cannot be loaded or by helping screen readers convey images). In HTML it may look like this:

```html
<img src="url" alt="Your image description goes here">
```

### **5. Open Graph tags**

Open Graph (OG) tags are placed in the `<head>` section of a page and allow any webpage to become a rich object in social networks. OG tags let you control how the information about your page is represented when shared via social channels. This possibility may help you enhance the performance of your links on social media, thus driving more click-throughs and increasing conversions. In HTML, it can look like this:

```html
<meta name="og:title" property="og:title" content="Your Open Graph Title Goes Here">
```

### **6. Robots tag**

A robots tag is an element in the HTML of a page that informs search engines which pages on your site should be indexed and which should not. Its functions are similar to robots.txt, but robots.txt gives suggestions. Whereas robots tags give instructions. In HTML, it can look like this:

```html
<meta name="robots" content="index, follow">
```

### **7. Canonical tag**

A canonical tag is a way of telling search engines that a specific URL represents the master copy of a page. Using the canonical tag prevents problems caused by identical or "duplicate" content appearing on multiple URLs. Practically speaking, the canonical tag tells search engines which version of a URL you want to appear in search results. In HTML, it may look like this:

```html
<link href="URL" rel="canonical">
```

### **8. HTML5 semantic tags**

One of the most important features of HTML5 is its semantics tags. Semantic tags refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content. For example, instead of using `<div id="header"></div>` you can use a `<header></hrader>` tag.

<p align="center">
    <img src="assets/images/semantic-tags.png" alt="HTML5 semantic tags" width="300px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between an "attribute" and a "property" in HTML?***

Attributes are defined by HTML. Properties are accessed from DOM (Document Object Model) nodes.

**Example**

```html
<input id="inputId" type="text" value="Hello World!" />
```

The **value** property reflects the current text-content inside the input box, whereas the **value** attribute contains the initial text-content of the **value** attribute from the HTML source code

**Difference between HTML attributes and DOM properties:**

|Attribute                               |Property                |
|----------------------------------------|------------------------|
|Attributes are defined by HTML.         |Properties are defined by the DOM.|
|The value of an attribute is constant.  |The value of a property is variable.|
|These are used to initialize the DOM properties.| No such job defined.|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you set IE compatibility mode?***

**X-UA-Compatible** is a document mode meta tag that allows to choose what version of Internet Explorer the page should be rendered as. It is used by Internet Explorer 8 to specify whether a page should be rendered as IE 7 (compatibility view) or IE 8 (standards view).

```html
<html>
   <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>My Web Page</title>
   </head>
   <body>
      <p>Content goes here.</p>
   </body>
</html>
```

Emulating the version tells the browser to use the DOCTYPE to determine how to render content. pages without a DOCTYPE will be rendered in quirks mode. Edge mode tells Windows Internet Explorer to display content in the highest mode available, which actually breaks the "lock-in" paradigm. With Internet Explorer 8, this is equivalent to IE8 mode.

**Setting the Meta Element**

The meta element includes a content attribute that enables you to specify the mode that content is rendered in for the webpage, as the following table shows.

|Value          |Rendering mode                                              |
|---------------|------------------------------------------------------------|
|IE=edge        |Display content in the highest mode available               |
|IE=9           |Use the Windows Internet Explorer 9 standards rendering mode|
|IE=8           |Use the Internet Explorer 8 standards rendering mode        |
|IE=7           |Use the Windows Internet Explorer 7 standards rendering mode|
|IE=5           |Use the Microsoft Internet Explorer 5 standards rendering mode|

*Note: It is recommended that Web developers restrict their use of Edge mode to test pages and other non-production uses because of the possible unexpected results of rendering page content in future versions of Windows Internet Explorer.*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is an optional tag?***

The following lists all optional tags.

|Tag            |Description  |
|---------------|-------------|
|`<area>`       |             |
|`<base>`       |             |
|`<body>`       |             |
|`<br>`         |             |
|`<caption>`    |             |
|`<col>`        |             |
|`<colgroup>`   |             |
|`<dd>`         |             |
|`<dt>`         |             |
|`<embed>`      |             |
|`<head>`       |             |
|`<hr>`         |             |
|`<html>`       |             |
|`<img>`        |             |
|`<input>`      |             |
|`<li>`         |             |
|`<link>`       |             |
|`<meta>`       |             |  
|`<optgroup>`   |             |
|`<option>`     |             |
|`<p>`          |             |
|`<param>`      |             |
|`<rp>`         |             |
|`<rt>`         |             |
|`<source>`     |             |
|`<tbody>`      |             |
|`<td>`         |             |
|`<tfoot>`      |             |
|`<th>`         |             |
|`<thead>`      |             |
|`<tr>`         |             |
|`<track>`      |             |
|`<wbr>`        |             |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is an HTML preprocessor? Have you used different HTML templating languages before?***

A **HTML preprocessor** is a program that takes one type of data and converts it to another one. In case of HTML and CSS, some of the more popular preprocessor languages are Slim and Sass. Slim is processed into HTML and Sass is processed into CSS.

No, but I heard about html template language like PUG (formerly Jade), Haml, ERB, Slim, Handlebars, Jinja, Liquid etc which is HTML preprocessor this mean that it is basically a language that will be converted to native html code.

The typical usage is when you render something on the server side. The usual use-case is when you have to add dynamic content to your website, so when you fetch something from your database, you will have to replace some parts in your original template.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you change the direction of html text?***

The default text direction in HTML is left-to-right. However, when developing web content and applications, we may need to set it to right-to-left, for instance, to cater for languages such as Arabic, Hebrew, Pashto, Persian, Urdu, and Sindhi.

We can set text direction in HTML in one of two ways:

* With the HTML **dir** attribute
* With the CSS **direction** property

**Example**

```html
<!-- Syntax -->
<element dir="ltr|rtl|auto">

<!-- Example -->
<textarea dir="rtl"></textarea>
```

**Attribute Values**

|Value          |Description                |
|---------------|---------------------------|
|ltr            |Default. Left-to-right text direction|
|rtl            |Right-to-left text direction|
|auto           |Let the browser figure out the text direction, based on the content|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When is it appropriate to use the small element?***

The `<small>` HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from `small` to `x-small`.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
      <title>Small Element</title>
  </head>
  <style>
    small {
      font-size: .7em
    }
  </style>
  <body>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <hr>
    <p><small>The content is licensed under a W3C License.</small></p>
  </body>
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/small-element.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you serve a page with content in multiple languages?***

The **lang** attribute specifies the language of the element\'s content.

**Example**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Multilanguage Page</title>
  </head>
  <body>
      <h2>English</h2>
      <p lang="en">This is demo text</p>
     
      <h2>French</h2>
      <p lang="fr">Ceci est un texte de démonstration</p>
     
      <h2>Spanish</h2>
      <p lang="es">Este es un texto de demostración</p>
  </body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between `<section>` and `<div>`?***

The `<section>` tag creates independent sections within a webpage having logically connected content. And the `<div>` tag is an empty container specifying a division or a section.

**The `<section>` Element**

According to the W3C specification, the `<section>` tag means that the content inside this element is grouped. In other words, the content relates to a single theme. It must be an entry in the outline of the page.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Section Tag Example</title>
  </head>
  <body>
    <h1>W3Docs</h1>
    <section>
      <h2>W3Docs Sections</h2>
      <ul>
        <li>Books</li>
        <li>Quizzes</li>
        <li>Snippets</li>
      </ul>
    </section>
    <section>
      <h3>Books</h3>
      <p>Learn HTML</p>
      <p>Learn CSS</p>
      <p>Learn Javascript</p>
    </section>
  </body>
</html>
```

**The `<div>` Element**

The `<div>` element only represents its child elements and doesn\'t have a special meaning. It can be used with the `lang`, `title`, and `class` attributes to add semantics that is common to a group of consecutive elements. This element can also be used in a `<dl>` tag and wrap groups of `<dt>` and `<dd>` elements.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Div Tag Example</title>
    <style>
      div {
        background-color: #87f5b3
      }
    </style>
  </head>
  <body>
    <h1>Example</h1>
    <div>
      <h2>A heading in a <div> tag.</h2>
      <p>Some text in a <div> tag.</p>
    </div>
    <p>Here is some other text in a <p> tag.</p>
  </body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Discuss the differences between an HTML specification and a browser\'s implementation thereof.***

HTML specifications such as HTML5 define a set of rules that a document must adhere to in order to be "valid" according to that specification. In addition, a specification provides instructions on how a browser must interpret and render such a document.

A browser is said to "support" a specification if it handles valid documents according to the rules of the specification. As of yet, no browser supports all aspects of the HTML5 specification (although all of the major browser support most of it), and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache for developers, despite the improved specificiations.

In addition, while HTML5 defines some rules to follow for an invalid HTML5 document (i.e., one that contains syntactical errors), invalid documents may contain anything, and it is impossible for the specification to handle all possibilities comprehensively. Thus, many decisions about how to handle malformed documents are left up to the browser.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why you would use a srcset attribute in an image tag? Explain the process the browser used when evaluating the content of this attribute.***

The `srcset` attribute allows to define a list of different image resources along with size information so that browser can pick the most appropriate image based on the actual device\'s resolution.

**Syntax**

```html
<img 
   srcset=" 
      url size, 
      url size, 
      url size " 
    src="default url" 
>
```

### **1. Using display density descriptor**

`srcset` provides a comma-separated list of image resources along with display density it should be used, for example1x, 2x etc.

**Example**

```html
<img src="image.jpg" 
     srcset="image.jpg,
             image_2x.jpg 2x"
/>
```

### **2. Using width descriptor**

The syntax is similar to the display density descriptor, but instead of display density values, we provide the actual width of the image.

**Example**

```html
<img src="image.jpg" 
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 900w"
/>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is accessibility & ARIA role means in a web application?***

The **Accessible Rich Internet Applications (ARIA)** Suite, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with HTML, JavaScript, and related technologies.

Screen readers work with regular HTML, but adding ARIA can provide screen reader users with greater context and interactivity with the content on the page. ARIA has no effect on how elements are displayed or behave in browsers. It does not add new functionality, and is meant to act only as an extra descriptive layer for screen readers.

Without WAI-ARIA certain functionality used in Web sites is not available to some users with disabilities, especially people who rely on screen readers and people who cannot use a mouse. WAI-ARIA addresses these accessibility challenges, for example, by defining ways for functionality to be provided to assistive technology. With WAI-ARIA, developers can make advanced Web applications accessible and usable to people with disabilities.

ARIA attributes are divided into two categories: roles, and states & properties.

### **ARIA Roles**

An ARIA role is added via a `role="<ROLE TYPE>"` attribute, and does not ever change for an element once it is set. There are four categories of ARIA roles:

* landmark
* document
* widget
* abstract

### **Landmark ARIA Roles**

Much like semantic HTML elements, landmark ARIA Roles are used to give users of assistive technology a better way to navigate and identify the different parts of a web page.

**Example**

```html
 <nav class='mobile-nav' role='navigation' aria-label='Mobile Menu'> List of Links </nav>
```

While seeming redundant, is actually useful for screen readers. It wouldn\'t read the aria-label on this navigation, which is really helpful for giving greater context to visually impaired users, without the `role="navigation"`.

The different landmark roles you can use are as follows, copied from the W3C Wiki Page:

* **banner**: A region that contains the prime heading or internal title of a page.
* **complementary**: Any section of the document that supports the main content, yet is separate and meaningful on its own.
* **contentinfo**: A region that contains information about the parent document such as copyrights and links to privacy statements.
* **form**: A region of the document that represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
* **main**: Main content in a document. In almost all cases a page will have only one `role=“main”`.
* **navigation**: A collection of links suitable for use when navigating the document or related documents.
* **search**: The search tool of a Web document.
* **application**: A region declared as a web application, as opposed to a web document.

### **Document ARIA Roles**

Document roles describe the structure of the content on the page, as opposed to the structure of the whole page, which landmark roles describe. The roles in bold are the ones we think are the most common document aria roles, and the ones which are useful to think about including in your HTML.

* **article**: A section of a page that consists of a composition that forms an independent part of a document, page, or site.
* **columnheader**
* **definition**: A definition of a term or concept.
* **directory**
* **document**
* **group**: A set of user interface objects which are not intended to be included in a page summary or table of contents by assistive technologies.
* **heading**: A heading for a section of the page.
* **img**
* **list**
* **listitem**
* **math**
* **note**
* **presentation**
* **region**
* **row**
* **rowgroup**
* **rowheader**
* **separator**
* **toolbar**

### **Widget ARIA Roles**

Widget Roles are used to describe what are often javascript-based interfaces, or the more complicated parts of your web page\'s interface. The roles that are starred are the ones we think are the most common elements widget aria roles, and the ones which are useful useful to think about including in your HTML.

* **alert**: A message with important, and usually time-sensitive, information. 
* **alertdialog**: A type of dialog that contains an alert message, where initial focus goes to an element within the dialog. 
* **button**: An input that allows for user-triggered actions when clicked or pressed.
* **checkbox**: A checkable input that has three possible values: true, false, or mixed.
* **dialog**: A dialog is an application window that is designed to interrupt the current processing of an application in order to prompt the user to enter information or require a response. 
* **gridcell**
* **link**
* **log**
* **marquee**
* **menuitem**
* **menuitemcheckbox**
* **menuitemradio**
* **option**
* **progressbar**
* **radio**: A checkable input in a group of radio roles, only one of which can be checked at a time.
* **scrollbar**
* **slider**
* **spinbutton**
* **status**
* **tab**: A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.
* **tabpanel**: A container for the resources associated with a tab, where each tab is contained in a tablist.
* **textbox**: Input that allows free-form text as its value.
* **timer**
* **tooltip**
* **treeitem**

### **Abstract ARIA Roles**

Abstract aria roles are the basis of how the other ARIA roles are defined. These are not to be used in HTML.

### **ARIA States & Properties**

ARIA states and properties are often used to support ARIA roles that exist on a page. ARIA Properties often describe relationships with other elements, and for the most part, do not change once they\'re set.

ARIA States are more dynamic and are typically updated with JavaScript as a user interacts with a page. Screen readers are notified when these states change, and can announce these changes to users after an interaction takes place.

While there are 35 aria properties and states the W3C defines and which you can read more about on the W3C site, here are the ones we believe to most commonly used and practical for most web pages/applications.

* **aria-activedescendant**: Identifies the currently active descendant of a composite widget. Use with autofill search suggestions.
* **aria-autocomplete**: Indicates whether user input completion suggestions are provided. Use with autofill search suggestions.
* **aria-checked (state)**: Indicates the current “checked” state of checkboxes, radio buttons, and other widgets. You can set this to true, false, or mixed state. 
* **aria-controls**: Identifies the element (or elements) whose contents or presence are controlled by the current element.
* **aria-describedby**: Identifies the element (or elements) that describes the object.
* **aria-disabled (state)**: Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
* **aria-expanded (state)**: Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
* **aria-hidden (state)**: Indicates that the element and all of its descendants are not visible or perceivable to any user as implemented by the author.
* **aria-invalid (state)**: Indicates the entered value does not conform to the format expected by the application.
* **aria-label**: Defines a string value that labels the current element.
* **aria-labelledby**: Identifies the element (or elements) that labels the current element.
* **aria-live**: Indicates that an element is dynamic, changing, and will be updated, and describes the types of updates the user can expect from the live region.
* **aria-owns**: Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child  relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
* **aria-pressed (state)**: Indicates the current “pressed” state of toggle buttons.
* **aria-required**: Indicates that user input is required on the element before a form may be submitted.
* **aria-selected (state)**: Indicates the current “selected” state of various widgets.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
