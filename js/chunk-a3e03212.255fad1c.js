(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3e03212"],{"140c":function(e,t,n){"use strict";n("1cb1")},"1cb1":function(e,t,n){},"4fad":function(e,t,n){var a=n("23e7"),c=n("6f53").entries;a({target:"Object",stat:!0},{entries:function(e){return c(e)}})},"572c":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("4de4"),n("d3b7"),n("ac1f"),n("00b4"),n("7db0");var a=n("7a23"),c={id:"anime-index-container"},r={class:"py-2 d-flex justify-content-between"},i={class:"py-2 d-flex justify-content-start flex-grow-1"},o=Object(a["o"])(" 進階篩選 "),l=Object(a["o"])(" 清空 "),u=Object(a["o"])(" TEST "),s={class:"d-flex justify-content-end"},b=Object(a["o"])("更新"),d={class:"py-2 d-flex justify-content-end flex-grow-1"},f={class:"pb-4"},p=Object(a["o"])(" 篩選器： "),O={key:0},j={key:1,class:"w-100"},m={key:0,class:"d-flex gap-1 justify-content-end"},v={key:0,class:"anime-action-completed"},h={key:1,class:"anime-action-current"},g={key:2,class:"anime-action-add"},y={key:3,class:"anime-action-planning"},w={key:4,class:"anime-action-delete"},_={key:3,class:"d-flex justify-content-center align-items-center border-left"},k=Object(a["o"])(" "),M={key:1},P={class:"w-100"},x={class:"w-100 py-2 d-flex justify-content-center align-items-center"},C={class:"d-flex justify-content-center align-items-center flex-column"},z={class:"d-flex justify-content-center align-items-center anime-block-cover-box"},A={class:"pagination align-items-center justify-content-center mt-3"};function F(e,t,n,F,S,Y){var D=Object(a["M"])("a-input-search"),E=Object(a["M"])("filter-outlined"),H=Object(a["M"])("a-button"),N=Object(a["M"])("sync-outlined"),T=Object(a["M"])("a-input"),V=Object(a["M"])("a-form-item"),I=Object(a["M"])("a-col"),L=Object(a["M"])("a-row"),U=Object(a["M"])("a-select"),B=Object(a["M"])("a-form"),R=Object(a["M"])("a-drawer"),$=Object(a["M"])("bars-outlined"),G=Object(a["M"])("a-radio-button"),Z=Object(a["M"])("appstore-outlined"),J=Object(a["M"])("a-radio-group"),K=Object(a["M"])("a-tag"),W=Object(a["M"])("a-image"),q=Object(a["M"])("router-link"),Q=Object(a["M"])("check-circle-filled"),X=Object(a["M"])("a-tooltip"),ee=Object(a["M"])("eye-filled"),te=Object(a["M"])("plus-circle-filled"),ne=Object(a["M"])("calendar-filled"),ae=Object(a["M"])("close-circle-filled"),ce=Object(a["M"])("check-circle-two-tone"),re=Object(a["M"])("play-circle-two-tone"),ie=Object(a["M"])("calendar-two-tone"),oe=Object(a["M"])("a-table"),le=Object(a["M"])("a-spin"),ue=Object(a["M"])("a-typography-paragraph"),se=Object(a["M"])("a-pagination");return Object(a["F"])(),Object(a["m"])("div",c,[Object(a["n"])("div",r,[Object(a["n"])("div",i,[Object(a["p"])(D,{value:S.filter.data.name,"onUpdate:value":t[0]||(t[0]=function(e){return S.filter.data.name=e}),placeholder:"搜索動漫名稱...",style:{width:"200px"},onSearch:t[1]||(t[1]=function(e){return Y.getAnimeData()})},null,8,["value"]),Object(a["p"])(H,{type:"primary",class:"h-100 d-flex align-items-center",onClick:t[2]||(t[2]=function(e){return Y.toggleFilterDrawer()})},{default:Object(a["Y"])((function(){return[Object(a["p"])(E),o]})),_:1}),Object(a["p"])(H,{class:"h-100 d-flex align-items-center",onClick:t[3]||(t[3]=function(e){return Y.clearFilter()}),danger:""},{default:Object(a["Y"])((function(){return[Object(a["p"])(N),l]})),_:1}),Object(a["p"])(H,{class:"h-100 d-flex align-items-center",onClick:t[4]||(t[4]=function(e){return Y.test()})},{default:Object(a["Y"])((function(){return[u]})),_:1}),Object(a["p"])(R,{visible:S.filter.drawer.visible,"onUpdate:visible":t[9]||(t[9]=function(e){return S.filter.drawer.visible=e}),placement:"left"},{footer:Object(a["Y"])((function(){return[Object(a["n"])("div",s,[Object(a["p"])(H,{type:"primary",class:"mr-2",onClick:t[8]||(t[8]=function(e){Y.getAnimeData(),S.filter.drawer.visible=!1})},{default:Object(a["Y"])((function(){return[b]})),_:1})])]})),default:Object(a["Y"])((function(){return[Object(a["p"])(B,{layout:"vertical"},{default:Object(a["Y"])((function(){return[Object(a["p"])(L,{gutter:24},{default:Object(a["Y"])((function(){return[Object(a["p"])(I,{span:24},{default:Object(a["Y"])((function(){return[Object(a["p"])(V,{label:"名稱"},{default:Object(a["Y"])((function(){return[Object(a["p"])(T,{value:S.filter.data.name,"onUpdate:value":t[5]||(t[5]=function(e){return S.filter.data.name=e}),placeholder:"搜索動漫名稱..."},null,8,["value"])]})),_:1})]})),_:1})]})),_:1}),Object(a["p"])(L,{gutter:24},{default:Object(a["Y"])((function(){return[Object(a["p"])(I,{span:12},{default:Object(a["Y"])((function(){return[Object(a["p"])(V,{label:"年份"},{default:Object(a["Y"])((function(){return[Object(a["p"])(U,{"show-search":"",value:S.filter.data.year,"onUpdate:value":t[6]||(t[6]=function(e){return S.filter.data.year=e}),options:S.filter.options.year},null,8,["value","options"])]})),_:1})]})),_:1}),Object(a["p"])(I,{span:12},{default:Object(a["Y"])((function(){return[Object(a["p"])(V,{label:"季度"},{default:Object(a["Y"])((function(){return[Object(a["p"])(U,{"show-searchx":"",value:S.filter.data.season,"onUpdate:value":t[7]||(t[7]=function(e){return S.filter.data.season=e}),options:S.filter.options.season},null,8,["value","options"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["visible"])]),Object(a["n"])("div",d,[Object(a["p"])(J,{value:S.options.display.type,"onUpdate:value":t[10]||(t[10]=function(e){return S.options.display.type=e}),size:"large"},{default:Object(a["Y"])((function(){return[Object(a["p"])(G,{value:"row"},{default:Object(a["Y"])((function(){return[Object(a["p"])($)]})),_:1}),Object(a["p"])(G,{value:"block"},{default:Object(a["Y"])((function(){return[Object(a["p"])(Z)]})),_:1})]})),_:1},8,["value"])])]),Object(a["n"])("div",f,[p,Object(a["Z"])(Object(a["p"])(K,null,{default:Object(a["Y"])((function(){return[Object(a["o"])("名稱："+Object(a["P"])(S.filter.data.name),1)]})),_:1},512),[[a["V"],S.filter.data.name.length]]),Object(a["Z"])(Object(a["p"])(K,null,{default:Object(a["Y"])((function(){return[Object(a["o"])("年份："+Object(a["P"])(S.filter.data.year),1)]})),_:1},512),[[a["V"],S.filter.data.year.length]]),Object(a["Z"])(Object(a["p"])(K,null,{default:Object(a["Y"])((function(){return[Object(a["o"])(" 季度："+Object(a["P"])(S.filter.options.season.find((function(e){return e.value===S.filter.data.season})).label),1)]})),_:1},512),[[a["V"],S.filter.data.season.length]])]),"row"==S.options.display.type?(Object(a["F"])(),Object(a["m"])("div",O,[Object(a["p"])(oe,{columns:S.anime.columns,dataSource:S.anime.data,pagination:!1,"row-class-name":"anime-table-row",loading:S.loading.anime},{bodyCell:Object(a["Y"])((function(e){var t=e.column,n=e.record;return["cover"==t.key?(Object(a["F"])(),Object(a["k"])(W,{key:0,class:"anime-table-cover-image",src:n.coverImage},null,8,["src"])):"title"==t.key?(Object(a["F"])(),Object(a["m"])("div",j,[Object(a["p"])(q,{to:"",class:"text-reset"},{default:Object(a["Y"])((function(){return[Object(a["o"])(Object(a["P"])(n.title),1)]})),_:2},1024)])):"action"==t.key?(Object(a["F"])(),Object(a["m"])(a["b"],{key:2},[S.is_authenticated?(Object(a["F"])(),Object(a["m"])("div",m,[n.action.can_complete?(Object(a["F"])(),Object(a["m"])("div",v,[Object(a["p"])(X,{title:"看完啦~",color:"lime",mouseLeaveDelay:0},{default:Object(a["Y"])((function(){return[Object(a["p"])(Q,{onClick:function(e){return Y.updateAnimeData({mediaId:n.id,status:"COMPLETED"})}},null,8,["onClick"])]})),_:2},1024)])):Object(a["l"])("",!0),n.action.can_watch?(Object(a["F"])(),Object(a["m"])("div",h,[Object(a["p"])(X,{title:"開始觀看",color:"green",mouseLeaveDelay:0},{default:Object(a["Y"])((function(){return[Object(a["p"])(ee,{onClick:function(e){return Y.updateAnimeData({mediaId:n.id,status:"CURRENT"})}},null,8,["onClick"])]})),_:2},1024)])):Object(a["l"])("",!0),n.action.can_add?(Object(a["F"])(),Object(a["m"])("div",g,[Object(a["p"])(X,{title:"又看了一集",color:"green",mouseLeaveDelay:0},{default:Object(a["Y"])((function(){return[Object(a["p"])(te,{onClick:function(e){return Y.updateAnimeData({mediaId:n.id,progress:n.progression.episodes+1})}},null,8,["onClick"])]})),_:2},1024)])):Object(a["l"])("",!0),n.action.can_planning?(Object(a["F"])(),Object(a["m"])("div",y,[Object(a["p"])(X,{title:"之後會看",color:"purple",mouseLeaveDelay:0},{default:Object(a["Y"])((function(){return[Object(a["p"])(ne,{onClick:function(e){return Y.updateAnimeData({mediaId:n.id,status:"PLANNING"})}},null,8,["onClick"])]})),_:2},1024)])):Object(a["l"])("",!0),n.progression?(Object(a["F"])(),Object(a["m"])("div",w,[Object(a["p"])(X,{title:"不管這個了!",color:"red",mouseLeaveDelay:0},{default:Object(a["Y"])((function(){return[Object(a["p"])(ae,{onClick:function(e){return Y.deleteAnimeData({id:n.progression.id,mediaId:n.id})}},null,8,["onClick"])]})),_:2},1024)])):Object(a["l"])("",!0)])):Object(a["l"])("",!0)],64)):"status"==t.key?(Object(a["F"])(),Object(a["m"])("div",_,["NONE"==n.progression_status?(Object(a["F"])(),Object(a["m"])(a["b"],{key:0},[k],64)):"COMPLETED"==n.progression_status?(Object(a["F"])(),Object(a["k"])(X,{key:1,title:"看完啦~",color:"lime"},{default:Object(a["Y"])((function(){return[Object(a["p"])(ce,{style:{"font-size":"32px"},"two-tone-color":"#a0d911"})]})),_:1})):"CURRENT"==n.progression_status?(Object(a["F"])(),Object(a["k"])(X,{key:2,title:"看到第 "+n.progression.episodes+" 集",color:"green"},{default:Object(a["Y"])((function(){return[Object(a["p"])(re,{style:{"font-size":"32px"},"two-tone-color":"#52c41a"})]})),_:2},1032,["title"])):"PLANNING"==n.progression_status?(Object(a["F"])(),Object(a["k"])(X,{key:3,title:"以後會看",color:"purple"},{default:Object(a["Y"])((function(){return[Object(a["p"])(ie,{style:{"font-size":"32px"},"two-tone-color":"#722ed1"})]})),_:1})):Object(a["l"])("",!0)])):Object(a["l"])("",!0)]})),_:1},8,["columns","dataSource","loading"])])):Object(a["l"])("",!0),"block"==S.options.display.type?(Object(a["F"])(),Object(a["m"])("div",M,[Object(a["Z"])(Object(a["n"])("div",P,[Object(a["n"])("div",x,[Object(a["p"])(le,{size:"large"})])],512),[[a["V"],S.loading.anime]]),(Object(a["F"])(!0),Object(a["m"])(a["b"],null,Object(a["K"])(Math.ceil(S.anime.data.length/S.options.display.block.amount_in_row),(function(e){return Object(a["Z"])((Object(a["F"])(),Object(a["k"])(L,{key:e-1,gutter:28,class:"my-2"},{default:Object(a["Y"])((function(){return[(Object(a["F"])(!0),Object(a["m"])(a["b"],null,Object(a["K"])(S.options.display.block.amount_in_row,(function(t){return Object(a["F"])(),Object(a["k"])(I,{span:parseInt(24/S.options.display.block.amount_in_row),key:t-1},{default:Object(a["Y"])((function(){return[Object(a["n"])("div",C,[Object(a["n"])("div",z,[Object(a["p"])(W,{class:"anime-block-cover-image",src:S.anime.data[(e-1)*S.options.display.block.amount_in_row+(t-1)].coverImage},null,8,["src"])]),Object(a["p"])(q,{to:"#",class:"mt-2 mb-4"},{default:Object(a["Y"])((function(){return[Object(a["p"])(ue,{ellipsis:{rows:2},strong:"",content:S.anime.data[(e-1)*S.options.display.block.amount_in_row+(t-1)].title},null,8,["content"])]})),_:2},1024)])]})),_:2},1032,["span"])})),128))]})),_:2},1024)),[[a["V"],!S.loading.anime]])})),128))])):Object(a["l"])("",!0),Object(a["n"])("div",A,[Object(a["p"])(se,{current:S.anime.pagination.current,"onUpdate:current":t[11]||(t[11]=function(e){return S.anime.pagination.current=e}),pageSize:S.anime.pagination.per_page,"onUpdate:pageSize":t[12]||(t[12]=function(e){return S.anime.pagination.per_page=e}),total:S.anime.pagination.total,simple:"",disabled:S.loading.anime,onChange:t[13]||(t[13]=function(e){return Y.getAnimeData()})},null,8,["current","pageSize","total","disabled"])])])}var S=n("3835"),Y=(n("99af"),n("a630"),n("3ca3"),n("c740"),n("4fad"),{icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"}}]},name:"appstore",theme:"outlined"}),D=Y,E=n("b3f0");function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){N(e,t,n[t])}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e,t){var n=H({},e,t.attrs);return a["p"](E["a"],a["v"](n,{icon:D}),null)};T.displayName="AppstoreOutlined",T.inheritAttrs=!1;var V=T,I=n("5ede"),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M112 880c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V460H112v420zm768-696H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v176h800V216c0-17.7-14.3-32-32-32z"}}]},name:"calendar",theme:"filled"},U=L;function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){R(e,t,n[t])}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=function(e,t){var n=B({},e,t.attrs);return a["p"](E["a"],a["v"](n,{icon:U}),null)};$.displayName="CalendarFilled",$.inheritAttrs=!1;var G=$,Z={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z",fill:t}},{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z",fill:e}}]}},name:"calendar",theme:"twotone"},J=Z;function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){W(e,t,n[t])}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e,t){var n=K({},e,t.attrs);return a["p"](E["a"],a["v"](n,{icon:J}),null)};q.displayName="CalendarTwoTone",q.inheritAttrs=!1;var Q=q,X={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z",fill:t}},{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",fill:e}}]}},name:"check-circle",theme:"twotone"},ee=X;function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){ne(e,t,n[t])}))}return e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae=function(e,t){var n=te({},e,t.attrs);return a["p"](E["a"],a["v"](n,{icon:ee}),null)};ae.displayName="CheckCircleTwoTone",ae.inheritAttrs=!1;var ce=ae,re=n("0c35"),ie=n("e1b2"),oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]},name:"eye",theme:"filled"},le=oe;function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){se(e,t,n[t])}))}return e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=function(e,t){var n=ue({},e,t.attrs);return a["p"](E["a"],a["v"](n,{icon:le}),null)};be.displayName="EyeFilled",be.inheritAttrs=!1;var de=be,fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"}}]},name:"filter",theme:"outlined"},pe=fe;function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){je(e,t,n[t])}))}return e}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=function(e,t){var n=Oe({},e,t.attrs);return a["p"](E["a"],a["v"](n,{icon:pe}),null)};me.displayName="FilterOutlined",me.inheritAttrs=!1;var ve=me,he={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm164.1 378.2L457.7 677.1a8.02 8.02 0 01-12.7-6.5V353a8 8 0 0112.7-6.5l218.4 158.8a7.9 7.9 0 010 12.9z",fill:t}},{tag:"path",attrs:{d:"M676.1 505.3L457.7 346.5A8 8 0 00445 353v317.6a8.02 8.02 0 0012.7 6.5l218.4-158.9a7.9 7.9 0 000-12.9z",fill:e}}]}},name:"play-circle",theme:"twotone"},ge=he;function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){we(e,t,n[t])}))}return e}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _e=function(e,t){var n=ye({},e,t.attrs);return a["p"](E["a"],a["v"](n,{icon:ge}),null)};_e.displayName="PlayCircleTwoTone",_e.inheritAttrs=!1;var ke=_e,Me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]},name:"plus-circle",theme:"filled"},Pe=Me;function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){Ce(e,t,n[t])}))}return e}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ze=function(e,t){var n=xe({},e,t.attrs);return a["p"](E["a"],a["v"](n,{icon:Pe}),null)};ze.displayName="PlusCircleFilled",ze.inheritAttrs=!1;var Ae=ze,Fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},Se=Fe;function Ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){De(e,t,n[t])}))}return e}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ee=function(e,t){var n=Ye({},e,t.attrs);return a["p"](E["a"],a["v"](n,{icon:Se}),null)};Ee.displayName="SyncOutlined",Ee.inheritAttrs=!1;var He=Ee,Ne=new Date,Te={name:"Anime Index",components:{AppstoreOutlined:V,BarsOutlined:I["a"],CalendarFilled:G,CalendarTwoTone:Q,CheckCircleTwoTone:ce,CheckCircleFilled:re["a"],CloseCircleFilled:ie["a"],EyeFilled:de,FilterOutlined:ve,PlayCircleTwoTone:ke,PlusCircleFilled:Ae,SyncOutlined:He},data:function(){return{is_authenticated:this.$store.state.auth.is_authenticated,options:{display:{type:"row",block:{amount_in_row:4}}},filter:{data:{name:"",year:"",season:""},options:{year:Array.from({length:Ne.getFullYear()-1938},(function(e,t){return{value:"".concat(t+1940),label:"".concat(t+1940)}})).concat({value:"",label:"不指定"}).reverse(),season:[{value:"",label:"不指定"},{value:"WINTER",label:"冬季"},{value:"SPRING",label:"春季"},{value:"SUMMER",label:"夏季"},{value:"FALL",label:"秋季"}]},drawer:{visible:!1}},loading:{anime:!0},anime:{columns:[{title:"封面",key:"cover",align:"center",width:70},{title:"標題",dataIndex:"title",key:"title"},{title:"操作",key:"action",width:140},{title:"狀態",key:"status",width:60}],data:[],pagination:{per_page:50,total:1,current:1}}}},methods:{getAnimeData:function(){var e=this;this.loading.anime=!0;var t={page:this.anime.pagination.current};this.is_authenticated&&(t["access_token"]=this.$store.state.auth.access_token),this.filter.data.name.length&&(t["filter_name"]=this.filter.data.name),this.filter.data.year.length&&(t["filter_year"]=this.filter.data.year),this.filter.data.season.length&&(t["filter_season"]=this.filter.data.season),this.$http.get("https://acgl-backend.herokuapp.com/api/anime/index/",{params:t}).then((function(t){e.anime.data=t.data.media,e.anime.pagination=t.data.pagination,e.loading.anime=!1}),(function(e){console.error(e)}))},updateAnimeData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t["access_token"]=this.$store.state.auth.access_token,this.$http.post("https://acgl-backend.herokuapp.com/api/anime/update/",t).then((function(t){console.log(t);var n=e.anime.data.findIndex((function(e){return e.id==t.data.media_id}));e.anime.data[n].progression=t.data.progression,e.anime.data[n].progression_status=t.data.progression.status,e.anime.data[n].action.can_complete=t.data.action.can_complete,e.anime.data[n].action.can_watch=t.data.action.can_watch,e.anime.data[n].action.can_planning=t.data.action.can_planning,e.anime.data[n].action.can_rewatch=t.data.action.can_rewatch,e.anime.data[n].action.can_add=t.data.action.can_add}),(function(e){console.error(e.response)}))},deleteAnimeData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t["access_token"]=this.$store.state.auth.access_token,this.$http.post("https://acgl-backend.herokuapp.com/api/anime/delete/",t).then((function(t){console.log(t);var n=e.anime.data.findIndex((function(e){return e.id==t.data.media_id}));e.anime.data[n].progression=null,e.anime.data[n].progression_status="NONE",e.anime.data[n].action.can_complete=t.data.action.can_complete,e.anime.data[n].action.can_watch=t.data.action.can_watch,e.anime.data[n].action.can_planning=t.data.action.can_planning,e.anime.data[n].action.can_rewatch=t.data.action.can_rewatch,e.anime.data[n].action.can_add=t.data.action.can_add}),(function(e){console.error(e.response)}))},toggleFilterDrawer:function(){this.filter.drawer.visible=!this.filter.drawer.visible},clearFilter:function(){for(var e=0,t=Object.entries(this.filter.data);e<t.length;e++){var n=Object(S["a"])(t[e],2),a=n[0];n[1];this.filter.data[a]=""}this.getAnimeData()},test:function(){console.log("TESTING START");var e=[];console.log(e),console.log("TESTING END")}},mounted:function(){this.getAnimeData()}},Ve=(n("140c"),n("6b0d")),Ie=n.n(Ve);const Le=Ie()(Te,[["render",F]]);t["default"]=Le},"6f53":function(e,t,n){var a=n("83ab"),c=n("e330"),r=n("df75"),i=n("fc6a"),o=n("d1e7").f,l=c(o),u=c([].push),s=function(e){return function(t){var n,c=i(t),o=r(c),s=o.length,b=0,d=[];while(s>b)n=o[b++],a&&!l(c,n)||u(d,e?[n,c[n]]:c[n]);return d}};e.exports={entries:s(!0),values:s(!1)}},"7db0":function(e,t,n){"use strict";var a=n("23e7"),c=n("b727").find,r=n("44d2"),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a({target:"Array",proto:!0,forced:o},{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),r(i)},"99af":function(e,t,n){"use strict";var a=n("23e7"),c=n("da84"),r=n("d039"),i=n("e8b5"),o=n("861d"),l=n("7b0b"),u=n("07fa"),s=n("8418"),b=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),O=f("isConcatSpreadable"),j=9007199254740991,m="Maximum allowed index exceeded",v=c.TypeError,h=p>=51||!r((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),g=d("concat"),y=function(e){if(!o(e))return!1;var t=e[O];return void 0!==t?!!t:i(e)},w=!h||!g;a({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,a,c,r,i=l(this),o=b(i,0),d=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?i:arguments[t],y(r)){if(c=u(r),d+c>j)throw v(m);for(n=0;n<c;n++,d++)n in r&&s(o,d,r[n])}else{if(d>=j)throw v(m);s(o,d++,r)}return o.length=d,o}})},c740:function(e,t,n){"use strict";var a=n("23e7"),c=n("b727").findIndex,r=n("44d2"),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a({target:"Array",proto:!0,forced:o},{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),r(i)}}]);
//# sourceMappingURL=chunk-a3e03212.255fad1c.js.map