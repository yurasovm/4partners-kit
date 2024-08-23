import{tv as e}from"tailwind-variants";import{twMerge as r}from"tailwind-merge";import a from"clsx";var n={slots:{base:"inline-flex items-center border",iconWrapper:"shrink-0",iconWrapperStart:"",iconWrapperEnd:"",icon:"",label:""},variants:{variant:{primary:{base:"bg-primary-core text-primary-on border-primary-core hover:bg-primary-dim hover:text-primary-on border-primary-dim",iconWrapper:"",icon:"",label:""},ghost:{base:"bg-surface-transparent text-surface-on-high border-surface-transparent hover:bg-surface-transparent hover:text-surface-on-highest border-surface-transparent",iconWrapper:"",icon:"",label:""},addition:{base:"bg-addition-core text-addition-on border-addition-chroma hover:bg-addition-dim hover:text-addition-on border-addition-dim",iconWrapper:"",icon:"",label:""},secondary:{base:"bg-secondary-core text-secondary-on border-secondary-core hover:bg-secondary-dim hover:text-secondary-on border-secondary-dim",iconWrapper:"",icon:"",label:""},tertiary:{base:"bg-tertiary-core text-tertiary-on border-tertiary-core hover:bg-tertiary-dim hover:text-tertiary-on border-tertiary-dim",iconWrapper:"",icon:"",label:""},contrast:{base:"bg-surface-on-highest text-surface-bright border-surface-on-highest hover:bg-surface-on-highest hover:text-surface-bright border-surface-on-highest",iconWrapper:"",icon:"",label:""}},size:{200:{base:"p-2 rounded-200",iconWrapper:"size-4",iconWrapperStart:"",iconWrapperEnd:"",icon:"size-4",label:"control-300 px-1"},300:{base:"p-2 rounded-300",iconWrapper:"size-5",iconWrapperStart:"",iconWrapperEnd:"",icon:"size-5",label:"control-400 px-1.5"},400:{base:"p-2.5 rounded-400",iconWrapper:"size-5",iconWrapperStart:"",iconWrapperEnd:"",icon:"size-5",label:"control-600 px-1.5"},500:{base:"p-3 rounded-500",iconWrapper:"size-6",iconWrapperStart:"",iconWrapperEnd:"",icon:"size-6",label:"control-800 px-1.5"},600:{base:"p-3 rounded-600",iconWrapper:"size-7",iconWrapperStart:"",iconWrapperEnd:"",icon:"size-7",label:"control-850 px-2.5"}},chroma:{true:{base:"",iconWrapper:"",icon:"",label:""},false:{base:"",iconWrapper:"",icon:"",label:""}},onlyIcon:{true:{iconWrapperStart:"",iconWrapperEnd:""},false:{iconWrapperStart:"ms-2.5",iconWrapperEnd:"me-2.5"}}}},i=function(e){var r=e.name,a=e.size,n=e.className,i=void 0===n?"":n;return React.createElement("svg",{className:i,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,"aria-hidden":"true"},React.createElement("use",{xlinkHref:"#".concat(r,"-outline-sm")}))};function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r(a(e))}var o=e(n)(),c=o.base,m=o.label,l=o.iconWrapper,d=o.iconWrapperStart,s=o.iconWrapperEnd,h=o.icon,g=function(e){var r=e.label,a=e.variant,n=void 0===a?"primary":a,o=e.size,g=void 0===o?"500":o,p=e.iconStart,u=e.iconEnd,v=e.className,f=void 0===v?"":v,b={variant:n,size:g,onlyIcon:!r};return React.createElement("button",{className:t(c(b),f)},p&&React.createElement("span",{className:t(l(b),d(b))},React.createElement(i,{className:t(h(b)),name:p,size:24})),r&&React.createElement("span",{className:t(m(b))},r),u&&React.createElement("span",{className:t(l(b),s(b))},React.createElement(i,{className:t(h(b)),name:u,size:24})))},p=function(){return p=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++)for(var i in r=arguments[a])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},p.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var u=e(n)(),v=u.base,f=u.label,b=u.iconWrapper,S=u.iconWrapperStart,w=u.iconWrapperEnd,y=u.icon,z={label:"",variant:"primary",size:"500",iconStart:!1,iconEnd:!1,class:""};function H(e){var r={variant:(e=p(p({},z),e)).variant,size:e.size,onlyIcon:!e.label||""==e.label};return'\n\t\t<button\n\t\t\tclass="'.concat(t(v(r),e.class),'"\n\t\t>\n\t\t\t').concat(e.iconStart&&'\n\t\t\t\t\t<span class="'.concat(t(b(r),S(r)),'">\n\t\t\t\t\t\t<Icon className={ cn( slotIcon( slotsProps ) ) } name={iconStart} size={ 24 } />\n\t\t\t\t\t</span>\n\t\t\t\t'),"\n\n\t\t\t").concat(e.label&&"<span className=".concat(t(f(r)),">").concat(e.label,"</span>"),"\n\n\t\t\t").concat(e.iconEnd&&"<span className=".concat(t(b(r),w(r)),">\n\t\t\t\t\t<Icon className=").concat(t(y(r)),' name="').concat(e.iconEnd,'" size="24" />\n\t\t\t\t</span>'),"\n\t\t</button>\n\t")}var x=function(){function e(){this.config={content:[],theme:{},variants:{},plugins:[]}}return e.prototype.setBoxShadow=function(e){return this.config.theme.boxShadow=e,this},e.prototype.setColors=function(e){return this.config.theme.colors=e,this},e.prototype.setBorderRadius=function(e){return this.config.theme.borderRadius=e,this},e.prototype.setExtend=function(e){return this.config.theme.extend=e,this},e.prototype.setContent=function(e){return this.config.content=e,this},e.prototype.setTheme=function(e){return this.config.theme=e,this},e.prototype.setVariants=function(e){return this.config.variants=e,this},e.prototype.addPlugin=function(e){return this.config.plugins.push(e),this},e.prototype.getConfig=function(){return this.config},e.prototype.setConfig=function(e){return this.config=e,this},e.prototype.build=function(){return p({},this.config)},e.prototype.setFontFamily=function(e){return this.config.theme.fontFamily=e,this},e.prototype.setScreens=function(e){return this.config.theme.screens=e,this},e.prototype.setSpacing=function(e){return this.config.theme.spacing=e,this},e.prototype.setPrefix=function(e){return this.config.prefix=e,this},e.prototype.setImportant=function(e){return this.config.important=e,this},e.prototype.setDarkMode=function(e){return this.config.darkMode=e,this},e.prototype.addUtilities=function(e){return this.config.plugins||(this.config.plugins=[]),this.config.plugins.push((function(r){(0,r.addUtilities)(e)})),this},e}(),W={".title-1":{fontSize:"1.75rem",lineHeight:1.1428571428571428,letterSpacing:"-0.07500000298023224rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"2.125rem",lineHeight:1.1764705882352942,letterSpacing:"-0.10000000149011612rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"2.5rem",lineHeight:1.2,letterSpacing:"-0.125rem"}},".title-2":{fontSize:"1.5rem",lineHeight:1.1666666666666667,letterSpacing:"-0.0625rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1.75rem",lineHeight:1.1428571428571428,letterSpacing:"-0.07500000298023224rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"2.125rem",lineHeight:1.1764705882352942,letterSpacing:"-0.10000000149011612rem"}},".title-3":{fontSize:"1.125rem",lineHeight:1.2222222222222223,letterSpacing:"-0.0625rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1.5rem",lineHeight:1.1666666666666667,letterSpacing:"-0.0625rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1.75rem",lineHeight:1.1428571428571428,letterSpacing:"-0.07500000298023224rem"}},".title-4":{fontSize:"1.0625rem",lineHeight:1.1764705882352942,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1.125rem",lineHeight:1.2222222222222223,letterSpacing:"-0.0625rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1.5rem",lineHeight:1.1666666666666667,letterSpacing:"-0.0625rem"}},".title-5":{fontSize:"1.0625rem",lineHeight:1.1764705882352942,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1.0625rem",lineHeight:1.1764705882352942,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1.125rem",lineHeight:1.2222222222222223,letterSpacing:"-0.0625rem"}},".heading-1":{fontSize:"1.25rem",lineHeight:1.2,letterSpacing:"-0.0625rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1.5rem",lineHeight:1.1666666666666667,letterSpacing:"-0.0625rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"2rem",lineHeight:1.125,letterSpacing:"-0.0625rem"}},".heading-2":{fontSize:"1.125rem",lineHeight:1.2222222222222223,letterSpacing:"-0.02500000037252903rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1.25rem",lineHeight:1.2,letterSpacing:"-0.05000000074505806rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1.25rem",lineHeight:1.2,letterSpacing:"-0.05000000074505806rem"}},".heading-3":{fontSize:"1.0625rem",lineHeight:1.1764705882352942,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1.0625rem",lineHeight:1.1764705882352942,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1.125rem",lineHeight:1.2222222222222223,letterSpacing:"-0.02500000037252903rem"}},".heading-4":{fontSize:"1rem",lineHeight:1.25,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1rem",lineHeight:1.25,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1rem",lineHeight:1.25,letterSpacing:"0rem"}},".heading-5":{fontSize:"0.875rem",lineHeight:1.2142857142857142,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"0.875rem",lineHeight:1.2142857142857142,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"0.875rem",lineHeight:1.2142857142857142,letterSpacing:"0rem"}},".display-1":{fontSize:"3rem",lineHeight:1.2083333333333333,letterSpacing:"-0.10000000149011612rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"4rem",lineHeight:1.1875,letterSpacing:"-0.125rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"4.375rem",lineHeight:1.2,letterSpacing:"-0.125rem"}},".display-2":{fontSize:"2.5rem",lineHeight:1.2,letterSpacing:"-0.07500000298023224rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"3.625rem",lineHeight:1.206896551724138,letterSpacing:"-0.10000000149011612rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"4rem",lineHeight:1.1875,letterSpacing:"-0.16249999403953552rem"}},".display-3":{fontSize:"2.125rem",lineHeight:1.1764705882352942,letterSpacing:"-0.0625rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"3.25rem",lineHeight:1.1923076923076923,letterSpacing:"-0.0625rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"3.625rem",lineHeight:1.206896551724138,letterSpacing:"-0.07500000298023224rem"}},".display-4":{fontSize:"2rem",lineHeight:1.125,letterSpacing:"-0.0625rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"3rem",lineHeight:1.2083333333333333,letterSpacing:"-0.0625rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"3.25rem",lineHeight:1.1923076923076923,letterSpacing:"-0.0625rem"}},".display-5":{fontSize:"1.75rem",lineHeight:1.1428571428571428,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"2.5rem",lineHeight:1.2,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"3rem",lineHeight:1.2083333333333333,letterSpacing:"-0.0625rem"}},".body-50":{fontSize:"0.625rem",lineHeight:1.4,letterSpacing:"0.05000000074505806rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"0.625rem",lineHeight:1.4,letterSpacing:"0.05000000074505806rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"0.625rem",lineHeight:1.4,letterSpacing:"0.05000000074505806rem"}},".body-100":{fontSize:"0.6875rem",lineHeight:1.3636363636363635,letterSpacing:"0.05000000074505806rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"0.6875rem",lineHeight:1.3636363636363635,letterSpacing:"0.05000000074505806rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"0.6875rem",lineHeight:1.3636363636363635,letterSpacing:"0.05000000074505806rem"}},".body-200":{fontSize:"0.75rem",lineHeight:1.4166666666666667,letterSpacing:"0.05000000074505806rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"0.75rem",lineHeight:1.4166666666666667,letterSpacing:"0.05000000074505806rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"0.75rem",lineHeight:1.4166666666666667,letterSpacing:"0.02500000037252903rem"}},".body-300":{fontSize:"0.8125rem",lineHeight:1.3846153846153846,letterSpacing:"0.02500000037252903rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"0.8125rem",lineHeight:1.3846153846153846,letterSpacing:"0.02500000037252903rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"0.8125rem",lineHeight:1.3846153846153846,letterSpacing:"0.02500000037252903rem"}},".body-400":{fontSize:"0.875rem",lineHeight:1.4285714285714286,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"0.875rem",lineHeight:1.4285714285714286,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"0.875rem",lineHeight:1.4285714285714286,letterSpacing:"0rem"}},".body-500":{fontSize:"0.875rem",lineHeight:1.2857142857142858,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"0.875rem",lineHeight:1.4285714285714286,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"0.9375rem",lineHeight:1.4666666666666666,letterSpacing:"0rem"}},".body-600":{fontSize:"0.875rem",lineHeight:1.4285714285714286,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"0.9375rem",lineHeight:1.4666666666666666,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1rem",lineHeight:1.375,letterSpacing:"0rem"}},".body-700":{fontSize:"0.9375rem",lineHeight:1.4666666666666666,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1rem",lineHeight:1.375,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1.0625rem",lineHeight:1.411764705882353,letterSpacing:"0rem"}},".body-800":{fontSize:"1rem",lineHeight:1.375,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1.0625rem",lineHeight:1.411764705882353,letterSpacing:"0rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1.125rem",lineHeight:1.4444444444444444,letterSpacing:"-0.02500000037252903rem"}},".body-900":{fontSize:"1.0625rem",lineHeight:1.411764705882353,letterSpacing:"0rem","@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)":{fontSize:"1.125rem",lineHeight:1.4444444444444444,letterSpacing:"-0.02500000037252903rem"},"@media screen and (min-width: 64.0625rem)":{fontSize:"1.25rem",lineHeight:1.4,letterSpacing:"-0.05000000074505806rem"}},".control-50":{fontSize:"0.625rem",lineHeight:1.2,letterSpacing:"0.05000000074505806rem"},".control-100":{fontSize:"0.6875rem",lineHeight:1.4545454545454546,letterSpacing:"0.05000000074505806rem"},".control-200":{fontSize:"0.75rem",lineHeight:1.3333333333333333,letterSpacing:"0.02500000037252903rem"},".control-300":{fontSize:"0.8125rem",lineHeight:1.2307692307692308,letterSpacing:"0.02500000037252903rem"},".control-400":{fontSize:"0.875rem",lineHeight:1.4285714285714286,letterSpacing:"0rem"},".control-500":{fontSize:"0.9375rem",lineHeight:1.3333333333333333,letterSpacing:"0rem"},".control-600":{fontSize:"1rem",lineHeight:1.25,letterSpacing:"0rem"},".control-700":{fontSize:"1.0625rem",lineHeight:1.411764705882353,letterSpacing:"0rem"},".control-800":{fontSize:"1.125rem",lineHeight:1.3333333333333333,letterSpacing:"-0.02500000037252903rem"},".control-850":{fontSize:"1.25rem",lineHeight:1.4,letterSpacing:"-0.05000000074505806rem"},".control-900":{fontSize:"1.5rem",lineHeight:1.3333333333333333,letterSpacing:"-0.0625rem"},".control-950":{fontSize:"1.75rem",lineHeight:1.2857142857142858,letterSpacing:"-0.07500000298023224rem"},".control-1000":{fontSize:"2rem",lineHeight:1.25,letterSpacing:"-0.10000000149011612rem"}},E=function(e){return(0,e.addUtilities)(W)},N={":root":{"--rounded-200":"0rem","--rounded-300":"0rem","--rounded-400":"0rem","--rounded-500":"0rem","--rounded-600":"0rem","--rounded-full":"37.5rem","--rounded-none":"0rem"},".theme-rounded-none":{"--rounded-200":"0rem","--rounded-300":"0rem","--rounded-400":"0rem","--rounded-500":"0rem","--rounded-600":"0rem","--rounded-full":"37.5rem","--rounded-none":"0rem"},".theme-rounded":{"--rounded-200":"1.625rem","--rounded-300":"1.625rem","--rounded-400":"1.625rem","--rounded-500":"1.625rem","--rounded-600":"1.625rem","--rounded-full":"37.5rem","--rounded-none":"0rem"},".theme-rounded-smooth":{"--rounded-200":"0.25rem","--rounded-300":"0.375rem","--rounded-400":"0.5rem","--rounded-500":"0.625rem","--rounded-600":"0.75rem","--rounded-full":"37.5rem","--rounded-none":"0rem"}},R=function(e){(0,e.addComponents)(N)},C={200:"var(--rounded-200)",300:"var(--rounded-300)",400:"var(--rounded-400)",500:"var(--rounded-500)",600:"var(--rounded-600)",full:"var(--rounded-full)",none:"var(--rounded-none)"},I={elevation1:"0rem 0.125rem 0.25rem -0.125rem rgb(var(--extended-shadow) / 0.2), 0rem 0rem 0.0625rem 0rem rgb(var(--extended-shadow) / 0.15), 0rem 0.0625rem 0.375rem -0.0625rem rgb(var(--extended-shadow) / 0.1)",elevation2:"0rem 0.25rem 0.375rem -0.25rem rgb(var(--extended-shadow) / 0.2), 0rem 0rem 0.0625rem 0rem rgb(var(--extended-shadow) / 0.15), 0rem 0.25rem 0.5rem -0.25rem rgb(var(--extended-shadow) / 0.1)",elevation3:"0rem 0.5rem 0.75rem -0.5rem rgb(var(--extended-shadow) / 0.2), 0rem 0rem 0.0625rem 0rem rgb(var(--extended-shadow) / 0.15), 0rem 0.375rem 1.125rem -0.375rem rgb(var(--extended-shadow) / 0.1)",elevation4:"0rem 0.75rem 1.5rem -0.75rem rgb(var(--extended-shadow) / 0.2), 0rem 0rem 0.0625rem 0rem rgb(var(--extended-shadow) / 0.15), 0rem 0.5rem 1.625rem -0.5rem rgb(var(--extended-shadow) / 0.1)"},P={"primary-core":"rgb(var(--primary-core ) / <alpha-value>)","primary-chroma":"rgb(var(--primary-chroma) / <alpha-value>)","primary-dim":"rgb(var(--primary-dim) / <alpha-value>)","primary-on":"rgb(var(--primary-on) / <alpha-value>)","primary-on-dim":"rgb(var(--primary-on-dim) / <alpha-value>)","primary-container-core":"rgb(var(--primary-container-core) / <alpha-value>)","primary-container-chroma":"rgb(var(--primary-container-chroma) / <alpha-value>)","primary-container-dim":"rgb(var(--primary-container-dim) / <alpha-value>)","primary-container-on":"rgb(var(--primary-container-on) / <alpha-value>)","primary-container-on-highest":"rgb(var(--primary-container-on-highest) / <alpha-value>)","primary-container-on-high":"rgb(var(--primary-container-on-high) / <alpha-value>)","primary-container-on-low":"rgb(var(--primary-container-on-low) / <alpha-value>)","primary-container-on-lowest":"rgb(var(--primary-container-on-lowest) / <alpha-value>)","secondary-core":"rgb(var(--secondary-core) / <alpha-value>)","secondary-chroma":"rgb(var(--secondary-chroma) / <alpha-value>)","secondary-dim":"rgb(var(--secondary-dim) / <alpha-value>)","secondary-on":"rgb(var(--secondary-on) / <alpha-value>)","secondary-on-dim":"rgb(var(--secondary-on-dim) / <alpha-value>)","secondary-container-core":"rgb(var(--secondary-container-core) / <alpha-value>)","secondary-container-chroma":"rgb(var(--secondary-container-chroma) / <alpha-value>)","secondary-container-dim":"rgb(var(--secondary-container-dim) / <alpha-value>)","secondary-container-on":"rgb(var(--secondary-container-on) / <alpha-value>)","secondary-container-on-highest":"rgb(var(--secondary-container-on-highest) / <alpha-value>)","secondary-container-on-high":"rgb(var(--secondary-container-on-high) / <alpha-value>)","secondary-container-on-low":"rgb(var(--secondary-container-on-low) / <alpha-value>)","secondary-container-on-lowest":"rgb(var(--secondary-container-on-lowest) / <alpha-value>)","tertiary-core":"rgb(var(--tertiary-core) / <alpha-value>)","tertiary-chroma":"rgb(var(--tertiary-chroma) / <alpha-value>)","tertiary-dim":"rgb(var(--tertiary-dim) / <alpha-value>)","tertiary-on":"rgb(var(--tertiary-on) / <alpha-value>)","tertiary-on-dim":"rgb(var(--tertiary-on-dim) / <alpha-value>)","tertiary-container-core":"rgb(var(--tertiary-container-core) / <alpha-value>)","tertiary-container-chroma":"rgb(var(--tertiary-container-chroma) / <alpha-value>)","tertiary-container-dim":"rgb(var(--tertiary-container-dim) / <alpha-value>)","tertiary-container-on":"rgb(var(--tertiary-container-on) / <alpha-value>)","tertiary-container-on-highest":"rgb(var(--tertiary-container-on-highest) / <alpha-value>)","tertiary-container-on-high":"rgb(var(--tertiary-container-on-high) / <alpha-value>)","tertiary-container-on-low":"rgb(var(--tertiary-container-on-low) / <alpha-value>)","tertiary-container-on-lowest":"rgb(var(--tertiary-container-on-lowest) / <alpha-value>)","addition-core":"rgb(var(--addition-core) / <alpha-value>)","addition-chroma":"rgb(var(--addition-chroma) / <alpha-value>)","addition-dim":"rgb(var(--addition-dim) / <alpha-value>)","addition-on":"rgb(var(--addition-on) / <alpha-value>)","addition-on-dim":"rgb(var(--addition-on-dim) / <alpha-value>)","addition-container-core":"rgb(var(--addition-container-core) / <alpha-value>)","addition-container-chroma":"rgb(var(--addition-container-chroma) / <alpha-value>)","addition-container-dim":"rgb(var(--addition-container-dim) / <alpha-value>)","addition-container-on":"rgb(var(--addition-container-on) / <alpha-value>)","addition-container-on-highest":"rgb(var(--addition-container-on-highest) / <alpha-value>)","addition-container-on-high":"rgb(var(--addition-container-on-high) / <alpha-value>)","addition-container-on-low":"rgb(var(--addition-container-on-low) / <alpha-value>)","addition-container-on-lowest":"rgb(var(--addition-container-on-lowest) / <alpha-value>)","success-core":"rgb(var(--success-core) / <alpha-value>)","success-chroma":"rgb(var(--success-chroma) / <alpha-value>)","success-dim":"rgb(var(--success-dim) / <alpha-value>)","success-on":"rgb(var(--success-on) / <alpha-value>)","success-on-dim":"rgb(var(--success-on-dim) / <alpha-value>)","success-container-core":"rgb(var(--success-container-core) / <alpha-value>)","success-container-chroma":"rgb(var(--success-container-chroma) / <alpha-value>)","success-container-dim":"rgb(var(--success-container-dim) / <alpha-value>)","success-container-on":"rgb(var(--success-container-on) / <alpha-value>)","success-container-on-highest":"rgb(var(--success-container-on-highest) / <alpha-value>)","success-container-on-high":"rgb(var(--success-container-on-high) / <alpha-value>)","success-container-on-low":"rgb(var(--success-container-on-low) / <alpha-value>)","success-container-on-lowest":"rgb(var(--success-container-on-lowest) / <alpha-value>)","error-core":"rgb(var(--error-core) / <alpha-value>)","error-chroma":"rgb(var(--error-chroma) / <alpha-value>)","error-dim":"rgb(var(--error-dim) / <alpha-value>)","error-on":"rgb(var(--error-on) / <alpha-value>)","error-on-dim":"rgb(var(--error-on-dim) / <alpha-value>)","error-container-core":"rgb(var(--error-container-core) / <alpha-value>)","error-container-chroma":"rgb(var(--error-container-chroma) / <alpha-value>)","error-container-dim":"rgb(var(--error-container-dim) / <alpha-value>)","error-container-on":"rgb(var(--error-container-on) / <alpha-value>)","error-container-on-highest":"rgb(var(--error-container-on-highest) / <alpha-value>)","error-container-on-high":"rgb(var(--error-container-on-high) / <alpha-value>)","error-container-on-low":"rgb(var(--error-container-on-low) / <alpha-value>)","error-container-on-lowest":"rgb(var(--error-container-on-lowest) / <alpha-value>)","surface-bright":"rgb(var(--surface-bright) / <alpha-value>)","surface-surface":"rgb(var(--surface-surface) / <alpha-value>)","surface-dim":"rgb(var(--surface-dim) / <alpha-value>)","surface-container-lowest":"rgb(var(--surface-container-lowest) / <alpha-value>)","surface-container-low":"rgb(var(--surface-container-low) / <alpha-value>)","surface-container":"rgb(var(--surface-container) / <alpha-value>)","surface-container-high":"rgb(var(--surface-container-high) / <alpha-value>)","surface-container-highest":"rgb(var(--surface-container-highest) / <alpha-value>)","surface-chromatic-start":"rgb(var(--surface-chromatic-start) / <alpha-value>)","surface-chromatic-mid-start":"rgb(var(--surface-chromatic-mid-start) / <alpha-value>)","surface-chromatic-mid-end":"rgb(var(--surface-chromatic-mid-end) / <alpha-value>)","surface-chromatic-end":"rgb(var(--surface-chromatic-end) / <alpha-value>)","surface-on-highest":"rgb(var(--surface-on-highest) / <alpha-value>)","surface-on-high":"rgb(var(--surface-on-high) / <alpha-value>)","surface-on":"rgb(var(--surface-on) / <alpha-value>)","surface-on-low":"rgb(var(--surface-on-low) / <alpha-value>)","surface-on-lowest":"rgb(var(--surface-on-lowest) / <alpha-value>)","surface-on-accent":"rgb(var(--surface-on-accent) / <alpha-value>)","surface-transparent":"rgb(var(--surface-transparent) / 0)","inverse-surface-bright":"rgb(var(--inverse-surface-bright) / <alpha-value>)","inverse-surface-surface":"rgb(var(--inverse-surface-surface) / <alpha-value>)","inverse-surface-dim":"rgb(var(--inverse-surface-dim) / <alpha-value>)","inverse-surface-container-lowest":"rgb(var(--inverse-surface-container-lowest) / <alpha-value>)","inverse-surface-container-low":"rgb(var(--inverse-surface-container-low) / <alpha-value>)","inverse-surface-container":"rgb(var(--inverse-surface-container) / <alpha-value>)","inverse-surface-container-high":"rgb(var(--inverse-surface-container-high) / <alpha-value>)","inverse-surface-container-highest":"rgb(var(--inverse-surface-container-highest) / <alpha-value>)","inverse-surface-chromatic-start":"rgb(var(--inverse-surface-chromatic-start) / <alpha-value>)","inverse-surface-chromatic-mid-start":"rgb(var(--inverse-surface-chromatic-mid-start) / <alpha-value>)","inverse-surface-chromatic-mid-end":"rgb(var(--inverse-surface-chromatic-mid-end) / <alpha-value>)","inverse-surface-chromatic-end":"rgb(var(--inverse-surface-chromatic-end) / <alpha-value>)","inverse-surface-on-highest":"rgb(var(--inverse-surface-on-highest) / <alpha-value>)","inverse-surface-on-high":"rgb(var(--inverse-surface-on-high) / <alpha-value>)","inverse-surface-on":"rgb(var(--inverse-surface-on) / <alpha-value>)","inverse-surface-on-low":"rgb(var(--inverse-surface-on-low) / <alpha-value>)","inverse-surface-on-lowest":"rgb(var(--inverse-surface-on-lowest) / <alpha-value>)","inverse-surface-on-accent":"rgb(var(--inverse-surface-on-accent) / <alpha-value>)",white:"rgb(255 255 255 / <alpha-value>)","extended-shadow":"rgb(var(--extended-shadow) / <alpha-value>)"},k=function(e){var r=new x;return r.setColors(P),r.setBorderRadius(C),r.setBoxShadow(I),r.addPlugin(E),r.addPlugin(R),e(r),r.build()};export{g as Button,i as Icon,k as createTailwindConfig,H as makeButton};
