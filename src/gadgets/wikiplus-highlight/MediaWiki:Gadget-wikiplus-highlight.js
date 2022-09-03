/**
 * Minified by jsDelivr using Terser v5.14.1.
 * Original file: /npm/wikiplus-highlight@2.20.0/main.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @name Wikiplus-highlight Wikiplus编辑器的CodeMirror语法高亮扩展
 * @author Bhsd <https://github.com/bhsd-harry>
 * @author 机智的小鱼君 <https://github.com/Dragon-Fish>
 * @license GPL-3.0
 */
(async()=>{"use strict";if(mw.libs.wphl)return;mw.libs.wphl={};const e="2.20",t="object"==typeof mw.storage&&"function"==typeof mw.storage.getObject?mw.storage:{getObject(e){const t=localStorage.getItem(e);if(!1===t)return!1;try{return JSON.parse(t)}catch(e){return null}},setObject(e,t){try{return localStorage.setItem(e,JSON.stringify(t))}catch(e){return!1}}},i=Object.fromEntries||(e=>{const t={};for(const[i,o]of e)t[i]=o;return t}),o=e=>"function"==typeof e.flat?e.flat():e.reduce(((e,t)=>e.concat(t)),[]),n=(e="2.20")=>e.split(".").map((e=>Number(e))),a=(e,...t)=>mw.msg(`wphl-${e}`,...t),s=(...e)=>$($.parseHTML(a(...e))),r=(...e)=>()=>{const t=$("<p>",{html:a(...e)});return mw.notify(t,{type:"success",autoHideSeconds:"long",tag:"wikiplus-highlight"}),t},d=n().slice(0,2).join("."),l="//fastly.jsdelivr.net",c="npm/codemirror@5.65.3",m="gh/bhsd-harry/codemirror-mediawiki@1.1.5",g=`npm/wikiplus-highlight@${d}`,{wgPageName:u,wgNamespaceNumber:p,wgPageContentModel:w,wgServerName:h,wgScriptPath:k,wgUserLanguage:f,skin:b}=mw.config.values,x=null!==mw.loader.getState("ext.CodeMirror"),y=t.getObject("InPageEditMwConfig")||{},C=`${h}${k}`,j=y[C]||{},S=!(j.time>Date.now()-2592e6),M={css:"css","sanitized-css":"css",javascript:"javascript",json:"javascript",wikitext:"mediawiki"},v=x?{lib:"ext.CodeMirror.lib",css:"ext.CodeMirror.lib.mode.css",javascript:"ext.CodeMirror.lib.mode.javascript",lua:`${c}/mode/lua/lua.min.js`,mediawiki:S?"ext.CodeMirror.data":[],htmlmixed:"ext.CodeMirror.lib.mode.htmlmixed",xml:[]}:{lib:`${c}/lib/codemirror.min.js`,css:`${c}/mode/css/css.min.js`,javascript:`${c}/mode/javascript/javascript.min.js`,lua:`${c}/mode/lua/lua.min.js`,mediawiki:[],htmlmixed:`${c}/mode/htmlmixed/htmlmixed.min.js`,xml:`${c}/mode/xml/xml.min.js`},W={searchcursor:`${c}/addon/search/searchcursor.min.js`,search:`${g}/search.min.js`,markSelection:`${c}/addon/selection/mark-selection.min.js`,activeLine:`${c}/addon/selection/active-line.min.js`,trailingspace:`${c}/addon/edit/trailingspace.min.js`,matchBrackets:`${c}/addon/edit/matchbrackets.min.js`,closeBrackets:`${c}/addon/edit/closebrackets.min.js`,matchTags:`${g}/matchtags.min.js`,fold:`${g}/fold.min.js`,wikiEditor:"ext.wikiEditor",contextmenu:"mediawiki.Title"},E=[{option:"styleSelectedText",addon:"search",download:"markSelection",only:!0,complex:()=>!O.has("wikiEditor")},{option:"styleActiveLine",addon:"activeLine"},{option:"showTrailingSpace",addon:"trailingspace"},{option:"matchBrackets",complex:(e,t)=>"mediawiki"!==e&&!t||{bracketRegex:/[{}[\]]/}},{option:"autoCloseBrackets",addon:"closeBrackets",complex:(e,t)=>"mediawiki"!==e&&!t||'()[]{}""'},{option:"matchTags",addon:["matchTags","fold"],modes:["mediawiki","widget"]},{option:"fold",modes:["mediawiki","widget"]}];let O=new Set(t.getObject("Wikiplus-highlight-addons")||["search"]),_=t.getObject("Wikiplus-highlight-indent")||4;const z={'"':"quot","'":"apos","<":"lt",">":"gt","&":"amp"," ":"nbsp"},I=e=>t=>{t.replaceSelection(t.getSelection().split("\n").map(e).join("\n"),"around")},T=I((e=>e.split("").map((e=>{if(e in z)return`&${z[e]};`;const t=e.charCodeAt();return t<256?`&#${t};`:`&#x${t.toString(16)};`})).join(""))),A=({keyMap:e})=>e.default===e.pcDefault,L={"Ctrl-/":T,"Ctrl-\\":I(encodeURIComponent)},P={"Cmd-/":T,"Cmd-\\":I(encodeURIComponent)},D=(e,t)=>{if(!["mediawiki","widget"].includes(t)||!O.has("contextmenu"))return;const i=$(e.getWrapperElement()).addClass("CodeMirror-contextmenu"),{functionSynonyms:[o]}=mw.config.get("extCodeMirrorConfig")||{functionSynonyms:[{invoke:"invoke","调用":"invoke",widget:"widget","小工具":"widget"}]},n=e=>Object.keys(o).filter((t=>o[t]===e)).map((e=>e.startsWith("#")?e:`#${e}`)),a=n("invoke"),s=n("widget");i.contextmenu((({pageX:t,pageY:i})=>{const o=e.coordsChar({left:t,top:i}),{line:n,ch:r}=o,d=e.getTokenTypeAt(o);if(!/\bmw-(?:template-name|parserfunction)\b/.test(d))return;const l=e.getLineTokens(n);for(const[e,{type:t,end:i,string:o}]of[...l.entries()].reverse())e>0&&l[e-1].type===t&&(l[e-1].end=i,l[e-1].string+=o,l.splice(e,1));const c=l.findIndex((({start:e,end:t})=>e<r&&t>=r)),m=l[c].string.replace(/\u200e/g,"").replace(/_/g," ").trim();if(/\bmw-template-name\b/.test(d)){const e=new mw.Title(m);return 0!==e.namespace||m.startsWith(":")?open(e.getUrl(),"_blank"):open(mw.util.getUrl(`Template:${m}`),"_blank"),!1}if(c<2||!/\bmw-parserfunction-delimiter\b/.test(l[c-1].type)||!/\bmw-parserfunction-name\b/.test(l[c-2].type))return;const g=l[c-2].string.trim().toLowerCase();if(a.includes(g))open(mw.util.getUrl(`Module:${m}`),"_blank");else{if(!s.includes(g))return;open(mw.util.getUrl(`Widget:${m}`,{action:"edit"}),"_blank")}return!1}))};let N,U=t.getObject("Wikiplus-highlight-i18n");U?((e,t)=>{const[i,o]=n(e),[a,s]=n(t);return i<a||i===a&&o<s})(U["wphl-version"],e)&&(N=r("welcome-upgrade",e,0)):(U={},N=r("welcome"));const F={zh:"zh-hans","zh-hans":"zh-hans","zh-cn":"zh-hans","zh-my":"zh-hans","zh-sg":"zh-hans","zh-hant":"zh-hant","zh-tw":"zh-hant","zh-hk":"zh-hant","zh-mo":"zh-hant",ka:"ka"}[f]||"en",H=`${l}/${g}/i18n/${F}.json`,B=U["wphl-version"]===d,V=async()=>{B&&U["wphl-lang"]===F||(U=await $.ajax(`${H}`,{dataType:"json",cache:!0}),t.setObject("Wikiplus-highlight-i18n",U)),mw.messages.set(U)},Q=Promise.all([mw.loader.using("mediawiki.util"),V()]),q=e=>e.length?mw.loader.using(e):Promise.resolve(),K=e=>e.length?$.ajax(`${l}/${e.length>1?"combine/":""}${e.join()}`,{dataType:"script",cache:!0}):Promise.resolve(),J=async(e,t)=>{const i=e.filter((e=>!e.includes("/"))),o=e.filter((e=>e.includes("/")));return!0===t?(await q(i),K(o)):!1===t?(await K(o),q(i)):Promise.all([q(i),K(o)])};let R;const G=(e,t=!1)=>{const i=[];for(const{option:o,addon:n=o,download:a=(Array.isArray(n)?o:n),only:s}of E)s&&t||o in e.optionHandlers||!X(n,O)||i.push(W[a]);return i},X=(e,t)=>Array.isArray(e)?e.some((e=>t.has(e))):t.has(e),Y=e=>{let t=[];const i="function"==typeof window.CodeMirror,o=i?window.CodeMirror:{modes:{},prototype:{},commands:{},optionHandlers:{}};if(i||(t.push(v.lib),x||mw.loader.load(`${l}/${c}/lib/codemirror.min.css`,"text/css")),"mediawiki"===e&&j.config&&j.config.tags.html&&(e="html"),["mediawiki","widget"].includes(e)&&!o.modes.mediawiki&&(mw.loader.load(`${l}/${m}/mediawiki.min.css`,"text/css"),t.push(`${m}/mediawiki.min.js`)),["widget","html"].includes(e))for(const e of["css","javascript","mediawiki","htmlmixed","xml"])o.modes[e]||(t=t.concat(v[e]));else t=t.concat(v[e]);if(o.prototype.getSearchCursor||!O.has("search")||O.has("wikiEditor")||t.push(W.searchcursor),o.commands.findForward||!O.has("search")||O.has("wikiEditor")||t.push(W.search),O.has("wikiEditor")){const e=mw.loader.getState("ext.wikiEditor");e?"ready"!==e&&t.push(W.wikiEditor):O.delete("wikiEditor")}return"ready"!==mw.loader.getState("mediawiki.Title")&&O.has("contextmenu")&&t.push(W.contextmenu),t.push(...G(o)),J(t,i?void 0:x)},Z=e=>{y[C]={config:e,time:Date.now()},t.setObject("InPageEditMwConfig",y)},ee=async(e,t)=>{if(!["mediawiki","widget"].includes(e))return;x&&S&&await t;let n=mw.config.get("extCodeMirrorConfig");if(n||S||!B||(({config:n}=j),n.tags.ref&&(n.tagModes.ref="text/mediawiki"),mw.config.set("extCodeMirrorConfig",n)),n&&n.redirect&&n.img)return n;if(n)return n;const{query:{magicwords:a,extensiontags:s,functionhooks:r,variables:d}}=await(new mw.Api).get({meta:"siteinfo",siprop:n?"magicwords":"magicwords|extensiontags|functionhooks|variables",formatversion:2}),l=["msg","raw","msgnw","subst","safesubst"],c=e=>o(e.map((({aliases:e,name:t})=>e.map((e=>({alias:e,name:t})))))),m=e=>i(e.map((({alias:e,name:t})=>[e.replace(/:$/,""),t])));if(n){const{functionSynonyms:[e]}=n;e.subst||c(a.filter((({name:e})=>l.includes(e)))).forEach((({alias:t,name:i})=>{e[t.replace(/:$/,"")]=i}))}else{n={tagModes:{pre:"mw-tag-pre",nowiki:"mw-tag-nowiki",ref:"text/mediawiki"},tags:i(s.map((e=>[e.slice(1,-1),!0]))),urlProtocols:mw.config.get("wgUrlProtocols")};const e=new Set([...r,...d,...l]),t=a.filter((({name:t,aliases:i})=>i.some((e=>/^__.+__$/.test(e)))||e.has(t))),o=c(t.filter((e=>e["case-sensitive"]))),g=c(t.filter((e=>!e["case-sensitive"]))).map((({alias:e,name:t})=>({alias:e.toLowerCase(),name:t})));n.doubleUnderscore=[m(g.filter((({alias:e})=>/^__.+__$/.test(e)))),m(o.filter((({alias:e})=>/^__.+__$/.test(e))))],n.functionSynonyms=[m(g.filter((({alias:e})=>!/^__.+__|^#$/.test(e)))),m(o.filter((({alias:e})=>!/^__.+__|^#$/.test(e))))]}return n.redirect=a.find((({name:e})=>"redirect"===e)).aliases,n.img=m(c(a.filter((({name:e})=>e.startsWith("img_"))))),mw.config.set("extCodeMirrorConfig",n),Z(n),n},te={getContents:()=>R.getValue(),setContents(e){return R.setValue(e),this},getSelection:()=>R.getSelection(),setSelection(e){return R.setSelection(R.posFromIndex(e.start),"end"in e?R.posFromIndex(e.end):void 0),R.focus(),this},replaceSelection(e){return R.replaceSelection(e),this},getCaretPosition(e){const t=R.indexFromPos(R.getCursor("from")),i=R.indexFromPos(R.getCursor("to"));return e.startAndEnd?[t,i]:t},scrollToCaretPosition(){return R.scrollIntoView(),this}},ie=async(e,o)=>{const n=o?"javascript":await(async()=>{if([274,828].includes(p)&&!u.endsWith("/doc")){const e=274===p?"Widget":"Lua";return await mw.loader.using(["oojs-ui-windows","oojs-ui.styles.icons-content"]),await OO.ui.confirm(a("contentmodel"),{actions:[{label:e},{label:"Wikitext",action:"accept"}]})?"mediawiki":e.toLowerCase()}return u.endsWith("/doc")?"mediawiki":M[w]})(),s=Y(n),[r]=await Promise.all([ee(n,s),s]);if(!o&&O.has("wikiEditor"))try{if("function"==typeof mw.addWikiEditor)mw.addWikiEditor(e);else{const{config:t}=$.wikiEditor.modules.dialogs;e.wikiEditor("addModule",{...$.wikiEditor.modules.toolbar.config.getDefaultConfig(),...t.getDefaultConfig()}),t.replaceIcons(e)}}catch(e){O.delete("wikiEditor"),mw.notify("WikiEditor工具栏加载失败。",{type:"error"}),console.error(e)}"mediawiki"===n&&r.tags.html?(r.tagModes.html="htmlmixed",await Y("html")):"widget"!==n||CodeMirror.mimeModes.widget||CodeMirror.defineMIME("widget",{name:"htmlmixed",tags:{noinclude:[[null,null,"mediawiki"]]}});const d=e.height();R&&R.toTextArea();const l=o||"json"===w;if(R=CodeMirror.fromTextArea(e[0],$.extend({inputStyle:"contenteditable",lineNumbers:!/Android\b/.test(navigator.userAgent),lineWrapping:!0,mode:n,mwConfig:r,json:l},i(E.map((({option:e,addon:t=e,modes:i,complex:o=(e=>!i||i.includes(e))})=>{const a=Array.isArray(t)?t[0]:t;return[e,O.has(a)&&o(n,l)]}))),"mediawiki"===n?{extraKeys:O.has("escape")&&(A(CodeMirror)?L:P)}:{indentUnit:O.has("indentWithSpace")?_:4,indentWithTabs:!O.has("indentWithSpace")})),R.setSize(null,d),R.refresh(),R.getWrapperElement().id="Wikiplus-CodeMirror",$.fn.textSelection&&e.textSelection("register",te),O.has("wikiEditor")){const t=e.data("wikiEditorContext"),{keyMap:i}=CodeMirror,o=()=>{$.wikiEditor.modules.dialogs.api.openDialog(t,"search-and-replace")};R.addKeyMap(i.default===i.pcDefault?{"Ctrl-F":o}:{"Cmd-F":o})}if(D(R,n),$("#Wikiplus-Quickedit-Jump").children("a").attr("href","#Wikiplus-CodeMirror"),!o){const e="object"==typeof window.Wikiplus?window.Wikiplus:{getSetting(e){const i=t.getObject("Wikiplus_Settings");return i&&i[e]}},i=()=>{$("#Wikiplus-Quickedit-Submit").triggerHandler("click")},o=()=>{$("#Wikiplus-Quickedit-MinorEdit").click(),$("#Wikiplus-Quickedit-Submit").triggerHandler("click")};R.addKeyMap($.extend(A(CodeMirror)?{"Ctrl-S":i,"Shift-Ctrl-S":o}:{"Cmd-S":i,"Shift-Cmd-S":o},[!0,"true"].includes(e.getSetting("esc_to_exit_quickedit"))?{Esc(){$("#Wikiplus-Quickedit-Back").triggerHandler("click")}}:{}))}mw.hook("wiki-codemirror").fire(R)},{body:oe}=document;new MutationObserver((e=>{const t=$(o(e.map((({addedNodes:e})=>[...e])))).find("#Wikiplus-Quickedit, #Wikiplus-Setting-Input");0!==t.length&&ie(t,"Wikiplus-Setting-Input"===t.attr("id"))})).observe(oe,{childList:!0}),$(oe).on("keydown.wphl",".ui-dialog",(function(e){if("Escape"===e.key){const t=$(this).children(".ui-dialog-content").data("context");t&&t.$textarea&&"Wikiplus-Quickedit"===t.$textarea.attr("id")&&e.stopPropagation()}}));const ne=document.getElementById("wphl-style")||mw.loader.addStyleTag("#Wikiplus-CodeMirror{border:1px solid #c8ccd1;line-height:1.3;clear:both;-moz-user-select:auto;-webkit-user-select:auto;user-select:auto}#Wikiplus-CodeMirror .CodeMirror-gutter-wrapper{-moz-user-select:none;-webkit-user-select:none;user-select:none}div.Wikiplus-InterBox{font-size:14px;z-index:100}.skin-minerva .Wikiplus-InterBox{font-size:16px}.cm-trailingspace{text-decoration:underline wavy red}div.CodeMirror span.CodeMirror-matchingbracket{box-shadow:0 0 0 2px #9aef98}div.CodeMirror span.CodeMirror-nonmatchingbracket{box-shadow:0 0 0 2px #eace64}#Wikiplus-highlight-dialog .oo-ui-messageDialog-title{margin-bottom:0.28571429em}#Wikiplus-highlight-dialog .oo-ui-flaggedElement-notice{font-weight:normal;margin:0}.CodeMirror-contextmenu .cm-mw-template-name{cursor:pointer}");ne.id="wphl-style";const{get:ae=function(e){return e.value},set:se=function(e,t){e.value=t}}=$.valHooks.textarea||{},re=e=>["Wikiplus-Quickedit","Wikiplus-Setting-Input"].includes(e.id);let de,le,ce,me,ge,ue,pe;$.valHooks.textarea={get:e=>re(e)&&R?R.getValue():ae(e),set(e,t){re(e)&&R?R.setValue(t):se(e,t)}},await Q;const we=(e=[...O])=>{pe.toggle(e.includes("indentWithSpace"))},he=$(mw.util.addPortletLink({minerva:"page-actions-overflow",citizen:"p-actions"}[b]||"p-cactions","#",a("portlet"),"wphl-settings")).click((async e=>{if(e.preventDefault(),de)le.setValue([...O]),ge.setValue(_);else{await mw.loader.using(["oojs-ui-windows","oojs-ui.styles.icons-content"]),de=new OO.ui.MessageDialog({id:"Wikiplus-highlight-dialog"});const e=new OO.ui.WindowManager;e.$element.appendTo(oe),e.addWindows([de]),le=new OO.ui.CheckboxMultiselectInputWidget({options:[...E.map((({option:e,addon:t=e})=>{const i=Array.isArray(t)?t[0]:t;return{data:i,label:s(`addon-${i.toLowerCase()}`)}})),...["wikiEditor","escape","contextmenu","indentWithSpace","otherEditors"].map((e=>({data:e,label:s(`addon-${e.toLowerCase()}`)})))],value:[...O]}).on("change",we);const{checkboxMultiselectWidget:t}=le;ce=t.findItemFromData("search"),me=t.findItemFromData("wikiEditor"),ge=new OO.ui.NumberInputWidget({min:0,value:_}),ue=new OO.ui.FieldLayout(le,{label:a("addon-label"),notices:[a("addon-notice")],align:"top"}),pe=new OO.ui.FieldLayout(ge,{label:a("addon-indent")}),we(),Object.assign(mw.libs.wphl,{widget:le,indentWidget:ge})}const i="object"==typeof window.Wikiplus||"object"==typeof window.Pages;ce.setDisabled(!i),me.setDisabled(!i||!mw.loader.getState("ext.wikiEditor")),de.open({title:a("addon-title"),message:ue.$element.add(pe.$element).add($("<p>",{html:a("feedback")})),actions:[{action:"reject",label:mw.msg("ooui-dialog-message-reject")},{action:"accept",label:mw.msg("ooui-dialog-message-accept"),flags:"progressive"}],size:"en"===F||"minerva"===b?"medium":"small"}).closing.then((e=>{if(ue.$element.detach(),pe.$element.detach(),"object"==typeof e&&"accept"===e.action){const e=le.getValue();O=new Set(e),_=Number(ge.getValue()),t.setObject("Wikiplus-highlight-addons",e),t.setObject("Wikiplus-highlight-indent",_)}}))}));"minerva"===b&&he.find(".mw-ui-icon").addClass("mw-ui-icon-minerva-settings"),"function"==typeof N&&N().find("#wphl-settings-notify").click((e=>{e.preventDefault(),$("#wphl-settings").triggerHandler("click")}));const ke=async e=>{if(!O.has("otherEditors"))return;let t=e.getOption("mode");t="text/mediawiki"===t?"mediawiki":t;const i=G(CodeMirror,!0),o=e.getOption("json");await J(i);for(const{option:i,addon:n=i,modes:a,complex:s=(e=>!a||a.includes(e))}of E.filter((({only:e})=>!e))){const a=Array.isArray(n)?n[0]:n;void 0===e.getOption(i)&&O.has(a)&&e.setOption(i,s(t,o))}"mediawiki"!==t&&O.has("indentWithSpace")?(e.setOption("indentUnit",_),e.setOption("indentWithTabs",!1)):"mediawiki"===t&&O.has("escape")&&e.addKeyMap(A(CodeMirror)?L:P,!0),D(e,t)};mw.hook("InPageEdit.quickEdit.codemirror").add((({cm:e})=>ke(e))),mw.hook("inspector").add((e=>ke(e))),mw.libs.wphl={version:e,options:E,addons:O,i18n:U,i18nLang:F,wphlStyle:ne,$portlet:he,USING_LOCAL:x,MODE_LIST:v,ADDON_LIST:W,msg:a,htmlMsg:s,escapeHTML:T,handleContextMenu:D,setI18N:V,getAddonScript:G,updateCachedConfig:Z,getMwConfig:ee,renderEditor:ie,handleOtherEditors:ke}})();
//# sourceMappingURL=/sm/b355506ecc034eb1c2ab1e94989c178152903f2c035ce41ece7998fc1537efbe.map
