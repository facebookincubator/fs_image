(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(104)),c={id:"fetched-artifacts",title:"Fetched Artifacts"},o={unversionedId:"concepts/pre-built-artifacts/fetched-artifacts",id:"concepts/pre-built-artifacts/fetched-artifacts",isDocsHomePage:!1,title:"Fetched Artifacts",description:"While Antlir provides utilities to build and install binaries directly into",source:"@site/docs/concepts/pre-built-artifacts/fetched-artifacts.md",slug:"/concepts/pre-built-artifacts/fetched-artifacts",permalink:"/antlir/docs/concepts/pre-built-artifacts/fetched-artifacts",editUrl:"https://github.com/facebookincubator/antlir/edit/master/website/docs/concepts/pre-built-artifacts/fetched-artifacts.md",version:"current",sidebar:"docs",previous:{title:"Version Selection",permalink:"/antlir/docs/concepts/rpms/version-selection"},next:{title:"Image",permalink:"/antlir/docs/api/image"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'While Antlir provides utilities to build and install binaries directly into\nimages as part of image creation, it can also be advantageous to include\n"fetched" artifacts. These provide two core benefits:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Speed"),": One can explicitly cache large, infrequently changed artifacts."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Controlled release cadence"),': An image may want to use a "stable", released\nversion of a given dependency rather than build it directly alongside the\nimage build.')),Object(i.b)("p",null,"However, fetched packages are naturally opposed to Antlir's underlying goal of\nhermeticity and determinism, in that any fetch to an external artifact store is\nnot guaranteed to deterministically produce the same result."),Object(i.b)("p",null,'To tackle this, Antlir relies on the concept of "in-repo databases", which:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Store an address and cryptographic hash of each fetched artifact in a file\nin the repo."),Object(i.b)("li",{parentName:"ul"},"Provide a build target that fetches the package, checks the hash, and\npresents the package contents to be used by images.")),Object(i.b)("p",null,"The above process is hermetic (unless the package is unavailable). Antlir\naccomplishes this by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Exposing an interface that can then be implemented by different artifact\nstores. The code is well documented and can be found in\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.internalfb.com/intern/diffusion/FBS/browse/master/fbcode/antlir/bzl/fetched_package_layer.bzl"}),"fetched_package_layer.bzl"),"."),Object(i.b)("li",{parentName:"ul"},"Providing a binary that can be called to update the in-repo database for a\ngiven artifact:\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.internalfb.com/intern/diffusion/FBS/browse/master/fbcode/antlir/update_package_db.py"}),"update_package_db.py"),".")))}p.isMDXComponent=!0}}]);