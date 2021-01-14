(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(104)),o={id:"bzl-and-targets",title:".bzl and TARGETS"},l={unversionedId:"contributing/coding-conventions/bzl-and-targets",id:"contributing/coding-conventions/bzl-and-targets",isDocsHomePage:!1,title:".bzl and TARGETS",description:"Stay lint clean",source:"@site/docs/contributing/coding-conventions/bzl-and-targets.md",slug:"/contributing/coding-conventions/bzl-and-targets",permalink:"/antlir/docs/contributing/coding-conventions/bzl-and-targets",editUrl:"https://github.com/facebookincubator/antlir/edit/master/website/docs/contributing/coding-conventions/bzl-and-targets.md",version:"current",sidebar:"docs",previous:{title:"Shape",permalink:"/antlir/docs/api/shape"},next:{title:"Pyre",permalink:"/antlir/docs/contributing/coding-conventions/pyre"}},s=[{value:"Stay lint clean",id:"stay-lint-clean",children:[]},{value:"Please maintain <code>fake_macro_library</code> dependencies",id:"please-maintain-fake_macro_library-dependencies",children:[]},{value:"Target naming: dash-separated binaries &amp; layers, underscore-separated libraries &amp; features",id:"target-naming-dash-separated-binaries--layers-underscore-separated-libraries--features",children:[]},{value:"Write pure functions, macros, or macro wrappers",id:"write-pure-functions-macros-or-macro-wrappers",children:[]},{value:"No mutable state outside of functions",id:"no-mutable-state-outside-of-functions",children:[]},{value:"Do not expose magic target names to the user",id:"do-not-expose-magic-target-names-to-the-user",children:[]},{value:"Get expert review when writing genrules",id:"get-expert-review-when-writing-genrules",children:[]},{value:"In genrules, use bash arrays for <code>$()</code> command substitution",id:"in-genrules-use-bash-arrays-for--command-substitution",children:[]},{value:"Use <code>maybe_export_file</code> when appropriate",id:"use-maybe_export_file-when-appropriate",children:[]},{value:"Load from <code>oss_shim.bzl</code>, avoid built-in (or fbcode) build rules",id:"load-from-oss_shimbzl-avoid-built-in-or-fbcode-build-rules",children:[]},{value:"Mark user-instantiated rules with <code>antlir_rule = &quot;user-{facing,internal}&quot;</code>",id:"mark-user-instantiated-rules-with-antlir_rule--user-facinginternal",children:[]},{value:"Naming conventions when using <code>shape.bzl</code>",id:"naming-conventions-when-using-shapebzl",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"stay-lint-clean"},"Stay lint clean"),Object(r.b)("p",null,"Enough said. Critically, this ensures that we don't stray outside of the\nrestricted feature-set of the Starlark language (the Buck runtime is\ncurrently much more permissive)."),Object(r.b)("h2",{id:"please-maintain-fake_macro_library-dependencies"},"Please maintain ",Object(r.b)("inlineCode",{parentName:"h2"},"fake_macro_library")," dependencies"),Object(r.b)("p",null,"Take a look at the doc in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookincubator/antlir/blob/master/antlir/bzl/BUCK#L4"}),"antlir/bzl/TARGETS"),".\nThis is kind of a chore, but it helps kick off the right CI jobs when we edit\n",Object(r.b)("inlineCode",{parentName:"p"},".bzl")," files, so it's worth doing."),Object(r.b)("p",null,"Ideally, we would just write a linter to do this on our behalf. However,\nwe haven't yet found time."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note:")," The vmtest macros have not yet been updated to follow this pattern, help\nis welcome!"),Object(r.b)("h2",{id:"target-naming-dash-separated-binaries--layers-underscore-separated-libraries--features"},"Target naming: dash-separated binaries & layers, underscore-separated libraries & features"),Object(r.b)("p",null,"This convention follows ",Object(r.b)("inlineCode",{parentName:"p"},"fbcode/folly/"),". One concrete benefit is that it's\neasier to spot when a ",Object(r.b)("inlineCode",{parentName:"p"},"python_binary")," is being used as a library without the\n",Object(r.b)("inlineCode",{parentName:"p"},"-library")," suffix to reference the implicit library target."),Object(r.b)("h2",{id:"write-pure-functions-macros-or-macro-wrappers"},"Write pure functions, macros, or macro wrappers"),Object(r.b)("p",null,"The failure mode here is writing something that is neither clearly a\nfunction nor a macro, but a mix."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A function defines no targets, returns a value, and has no side-effects.\nFunctions that take mutable arguments are acceptable only in very limited\ncircumstances (e.g. ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebookincubator/antlir/blob/master/antlir/common.py#L69"}),"set_new_key"),")."),Object(r.b)("li",{parentName:"ul"},"A macro takes ",Object(r.b)("inlineCode",{parentName:"li"},"name")," as its first arg, and defines a target of that name\n(along with possibly auxiliary functions). When convenient, an internal\nmacro ",Object(r.b)("strong",{parentName:"li"},"may")," return a path to the target it created, but we have not made\nthis the norm for externally visible macros."),Object(r.b)("li",{parentName:"ul"},"A macro wrapper transforms a target into a wrapped target, and returns the\npath to the wrapper. You should write these very rarely.")),Object(r.b)("h2",{id:"no-mutable-state-outside-of-functions"},"No mutable state outside of functions"),Object(r.b)("p",null,"If you define a module-level ",Object(r.b)("inlineCode",{parentName:"p"},"a = []"),", and mutate it from your macros, this is a\nsure-fire way to get non-deterministic builds. This kind of thing has actually\ncaused subtle breakages in the FBCode Target determinator before, requiring\nmultiple human-days to find and fix."),Object(r.b)("h2",{id:"do-not-expose-magic-target-names-to-the-user"},"Do not expose magic target names to the user"),Object(r.b)("p",null,"If your macro defines an purely internal target, make sure it's namespaced so\nthat, ideally: - It does not show up in ",Object(r.b)("inlineCode",{parentName:"p"},"buck")," TAB-completion (put your magic in\nthe prefix, not suffix) - The magic prefix should discourages people from typing\nit manually into their TARGETS files or ",Object(r.b)("inlineCode",{parentName:"p"},".bzl")," files -- provide an accessor\nmethod when this is necessary, see e.g.  the FB-internal ",Object(r.b)("inlineCode",{parentName:"p"},"fetched_layer")," in\n",Object(r.b)("inlineCode",{parentName:"p"},"fbpkg.bzl"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If appropriate, use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebookincubator/antlir/blob/master/antlir/bzl/target_helpers.bzl#L32"}),"mangle_target"),".")),Object(r.b)("p",null,"There are exceptions to this, which are magic target names that we expect users\nto type as part of a ",Object(r.b)("inlineCode",{parentName:"p"},"buck")," command-line on a regular basis, e.g.:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-container")," and ",Object(r.b)("inlineCode",{parentName:"li"},"-boot")," for ",Object(r.b)("inlineCode",{parentName:"li"},"image.layer"),"s"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--test-layer")," for ",Object(r.b)("inlineCode",{parentName:"li"},"image.*_unittest"),"s")),Object(r.b)("h2",{id:"get-expert-review-when-writing-genrules"},"Get expert review when writing genrules"),Object(r.b)("p",null,"There are a lot of failure-modes here, from quoting to error-handling, to\nmis-uses of command substitution via ",Object(r.b)("inlineCode",{parentName:"p"},"\\$()"),", to mis-uses of ",Object(r.b)("inlineCode",{parentName:"p"},"$(exe)")," vs\n",Object(r.b)("inlineCode",{parentName:"p"},"$(location)"),", to errors in cacheability. For now, treat any diff with such code\nas blocked on a review from @lesha. We need a second domain expert ASAP."),Object(r.b)("p",null,"To get a taste of some potential problems, carefully study\n",Object(r.b)("inlineCode",{parentName:"p"},"_wrap_bash_build_in_common_boilerplate")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"maybe_wrap_runtime_deps_as_build_time_deps"),". This is not exhaustive."),Object(r.b)("h2",{id:"in-genrules-use-bash-arrays-for--command-substitution"},"In genrules, use bash arrays for ",Object(r.b)("inlineCode",{parentName:"h2"},"$()")," command substitution"),Object(r.b)("p",null,"You know what ",Object(r.b)("inlineCode",{parentName:"p"},'"$(ls)"')," does in ",Object(r.b)("inlineCode",{parentName:"p"},"bash"),". Now you want this in the ",Object(r.b)("inlineCode",{parentName:"p"},"bash =")," field\nof your genrule. Unfortunately, this is hard. You have to do this two-liner:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'binary_path=( $(exe //antlir:artifacts-dir) )\nartifacts_dir=\\\\$( "${binary_path[@]}" )\n')),Object(r.b)("p",null,"Understanding what follows starts with carefully reading the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://buck.build/rule/genrule.html"}),"genrule docs"),"."),Object(r.b)("p",null,"You have to use ",Object(r.b)("inlineCode",{parentName:"p"},"exe")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"location")," because the latter will rebuild your\ngenrule if the ",Object(r.b)("strong",{parentName:"p"},"runtime dependencies")," of the executable target change, while\nthe former will only rebuild if the ",Object(r.b)("strong",{parentName:"p"},"content")," of the executable change.\nSpecifically, in @mode/dev, if the executable is a PAR, its content is just a\nsymlink, which never changes, so your genrule never rebuilds. Even with C++, you\nwould fail to rebuild on changes to any libraries that are linked into your\ncode, since in ",Object(r.b)("inlineCode",{parentName:"p"},"@mode/dev")," those are ",Object(r.b)("inlineCode",{parentName:"p"},".so"),'s that are not part of the target\'s\n"content".'),Object(r.b)("p",null,"You have to use a bash array because ",Object(r.b)("inlineCode",{parentName:"p"},"$(exe)")," expands to multiple shell words,\nBecause Buck (TM). E.g. for PARs, the expansion of ",Object(r.b)("inlineCode",{parentName:"p"},"$(exe)")," might look like\nsomething like ",Object(r.b)("inlineCode",{parentName:"p"},'python3 "/path to/the actual/binary"'),"."),Object(r.b)("h2",{id:"use-maybe_export_file-when-appropriate"},"Use ",Object(r.b)("inlineCode",{parentName:"h2"},"maybe_export_file")," when appropriate"),Object(r.b)("p",null,"If your macro takes an argument that is a target, and that target might\nsometimes be an in-repo file, use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookincubator/antlir/blob/master/antlir/bzl/maybe_export_file.bzl"}),"maybe_export_file"),"."),Object(r.b)("h2",{id:"load-from-oss_shimbzl-avoid-built-in-or-fbcode-build-rules"},"Load from ",Object(r.b)("inlineCode",{parentName:"h2"},"oss_shim.bzl"),", avoid built-in (or fbcode) build rules"),Object(r.b)("p",null,"This shim exists to bridge the differences between the semantics of\nFB-internal build rules, and those of OSS Buck.  If you bypass it, you will\neither break Antlir for FB-internal users, or for OSS users."),Object(r.b)("p",null,"Note that any newly shimmed rules have to follow a few basic practices:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Follow the fbcode API, unless the rule has no counterpart in fbcode."),Object(r.b)("li",{parentName:"ul"},"Add both an OSS and FB implementation."),Object(r.b)("li",{parentName:"ul"},"In both implementations, wrap your rule with ",Object(r.b)("inlineCode",{parentName:"li"},"_wrap_internal"),"."),Object(r.b)("li",{parentName:"ul"},"Follow the local naming & sorting conventions.")),Object(r.b)("h2",{id:"mark-user-instantiated-rules-with-antlir_rule--user-facinginternal"},"Mark user-instantiated rules with ",Object(r.b)("inlineCode",{parentName:"h2"},'antlir_rule = "user-{facing,internal}"')),Object(r.b)("p",null,"All Buck rules used within Antlir have an ",Object(r.b)("inlineCode",{parentName:"p"},"antlir_rule")," kwarg."),Object(r.b)("p",null,"You can declare Buck rules in one of three contexts.  The context\ncorresponds to the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"antlir_rule")," kwarg:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},'"antlir-private"')," (default): A private implementation detail of Antlir --\ne.g.  a ",Object(r.b)("inlineCode",{parentName:"p"},"python_library")," that is linked into the image compiler.  These\nrules need no explicit annotation.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},'"user-facing"'),": A rule that may be instantiated in a user project (aka\na Buck package outside of ",Object(r.b)("inlineCode",{parentName:"p"},"//antlir"),"), and whose output is directly\nconsumed by the user.  Specifically, the rule's ",Object(r.b)("inlineCode",{parentName:"p"},"name")," must be the ",Object(r.b)("inlineCode",{parentName:"p"},"name"),"\nprovided by the end-user, and the artifact must be user-exposed.  For\nexample, ",Object(r.b)("inlineCode",{parentName:"p"},"image.package")," is user-facing, whereas ",Object(r.b)("inlineCode",{parentName:"p"},"image.feature")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"image.layer")," are considered implementation plumbing, even though users\ndeclare them directly.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},'"user-internal"'),": A rule that may be instantiated in a user project,\nwhose output is not directly usable by the client.  Besides\n",Object(r.b)("inlineCode",{parentName:"p"},"image.{feature,layer}"),", this includes private intermediate targets like\n",Object(r.b)("inlineCode",{parentName:"p"},"PREFIX-<name>"),"."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Marking rules ",Object(r.b)("inlineCode",{parentName:"strong"},'"user-internal"')," is important"),", since FB on-diff CI only\nruns builds & test within a certain dependency distance from the modified\nsources, and ",Object(r.b)("inlineCode",{parentName:"p"},'"user-internal"')," targets get excluded from this distance\ncalculation to ensure that the right CI targets get triggered."),Object(r.b)("p",null,"To ensure that all user-instantiated (",Object(r.b)("inlineCode",{parentName:"p"},'"user-facing"')," / ",Object(r.b)("inlineCode",{parentName:"p"},'"user-internal"'),")\nrules are annotated, un-annotated rules will ",Object(r.b)("strong",{parentName:"p"},"fail to instantiate")," from\ninside a user project.  That is, if your rule doesn't set ",Object(r.b)("inlineCode",{parentName:"p"},"antlir_rule"),", it\ndefaults to ",Object(r.b)("inlineCode",{parentName:"p"},'"antlir-private"'),", which triggers ",Object(r.b)("inlineCode",{parentName:"p"},"_assert_package()"),", which\nwill fail if the Buck package path does not start with ",Object(r.b)("inlineCode",{parentName:"p"},"antlir/"),". This\nhas two desirable effects:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Antlir devs will not forget to annotate user-instantiated rules."),Object(r.b)("li",{parentName:"ul"},"External devs will not be able to (erroneously) load rules from\n",Object(r.b)("inlineCode",{parentName:"li"},"oss_shim.bzl"),".")),Object(r.b)("p",null,"The implementation details and more specific docs can be found in\n",Object(r.b)("inlineCode",{parentName:"p"},"antlir/bzl/oss_shim_impl.bzl"),"."),Object(r.b)("h2",{id:"naming-conventions-when-using-shapebzl"},"Naming conventions when using ",Object(r.b)("inlineCode",{parentName:"h2"},"shape.bzl")),Object(r.b)("p",null,"Shape types should be named with a trailing ",Object(r.b)("inlineCode",{parentName:"p"},"_t")," to indicate that it is a\nshape type. Shape instance variable names should conform to the local style\nconventions."),Object(r.b)("p",null,"For example, the type and instance for installing a tarball might look like\nthis:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"tarball_t = shape.shape(\n  from_target = shape.field(str, optional = True),\n  into_dir = str,\n)\n\ninstall_tarball = shape.new(tarball_t, from_target=..., into_dir=...)\n")))}b.isMDXComponent=!0}}]);