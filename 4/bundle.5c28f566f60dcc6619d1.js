(()=>{var e={360:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(537),a=i.n(s),r=i(645),n=i.n(r)()(a());n.push([e.id,".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}\n","",{version:3,sources:["webpack://./src/view/editor-view.css"],names:[],mappings:"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}\n"],sourceRoot:""}]);const c=n},231:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(537),a=i.n(s),r=i(645),n=i.n(r)()(a());n.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n","",{version:3,sources:["webpack://./src/view/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n"],sourceRoot:""}]);const c=n},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",s=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),s&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),s&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,s,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(s)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(n[d]=!0)}for(var o=0;o<e.length;o++){var f=[].concat(e[o]);s&&n[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),i&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=i):f[2]=i),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],i=e[3];if(!i)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(a," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",s="second",a="minute",r="hour",n="day",c="week",d="month",o="quarter",f="year",l="date",p="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}},m=function(e,t,i){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(i)+e},v={s:m,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),s=Math.floor(i/60),a=i%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(a,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var s=12*(i.year()-t.year())+(i.month()-t.month()),a=t.clone().add(s,d),r=i-a<0,n=t.clone().add(s+(r?-1:1),d);return+(-(s+(i-a)/(r?a-n:n-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:f,w:c,d:n,D:l,h:r,m:a,s,ms:i,Q:o}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=h;var g=function(e){return e instanceof S},$=function e(t,i,s){var a;if(!t)return _;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(a=r),i&&(y[r]=i,a=r);var n=t.split("-");if(!a&&n.length>1)return e(n[0])}else{var c=t.name;y[c]=t,a=c}return!s&&a&&(_=a),a||!s&&_},w=function(e,t){if(g(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new S(i)},T=v;T.l=$,T.i=g,T.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(u);if(s){var a=s[2]-1||0,r=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return T},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var i=w(e);return this.startOf(t)<=i&&i<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,i){return T.u(e)?this[t]:this.set(i,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var i=this,o=!!T.u(t)||t,p=T.p(e),u=function(e,t){var s=T.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return o?s:s.endOf(n)},b=function(e,t){return T.w(i.toDate()[e].apply(i.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},h=this.$W,m=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(p){case f:return o?u(1,0):u(31,11);case d:return o?u(1,m):u(0,m+1);case c:var y=this.$locale().weekStart||0,g=(h<y?h+7:h)-y;return u(o?v-g:v+(6-g),m);case n:case l:return b(_+"Hours",0);case r:return b(_+"Minutes",1);case a:return b(_+"Seconds",2);case s:return b(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var c,o=T.p(e),p="set"+(this.$u?"UTC":""),u=(c={},c[n]=p+"Date",c[l]=p+"Date",c[d]=p+"Month",c[f]=p+"FullYear",c[r]=p+"Hours",c[a]=p+"Minutes",c[s]=p+"Seconds",c[i]=p+"Milliseconds",c)[o],b=o===n?this.$D+(t-this.$W):t;if(o===d||o===f){var h=this.clone().set(l,1);h.$d[u](b),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](b);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[T.p(e)]()},m.add=function(i,o){var l,p=this;i=Number(i);var u=T.p(o),b=function(e){var t=w(p);return T.w(t.date(t.date()+Math.round(e*i)),p)};if(u===d)return this.set(d,this.$M+i);if(u===f)return this.set(f,this.$y+i);if(u===n)return b(1);if(u===c)return b(7);var h=(l={},l[a]=e,l[r]=t,l[s]=1e3,l)[u]||1,m=this.$d.getTime()+i*h;return T.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||p;var s=e||"YYYY-MM-DDTHH:mm:ssZ",a=T.z(this),r=this.$H,n=this.$m,c=this.$M,d=i.weekdays,o=i.months,f=i.meridiem,l=function(e,i,a,r){return e&&(e[i]||e(t,s))||a[i].slice(0,r)},u=function(e){return T.s(r%12||12,e,"0")},h=f||function(e,t,i){var s=e<12?"AM":"PM";return i?s.toLowerCase():s};return s.replace(b,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return T.s(t.$y,4,"0");case"M":return c+1;case"MM":return T.s(c+1,2,"0");case"MMM":return l(i.monthsShort,c,o,3);case"MMMM":return l(o,c);case"D":return t.$D;case"DD":return T.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return l(i.weekdaysMin,t.$W,d,2);case"ddd":return l(i.weekdaysShort,t.$W,d,3);case"dddd":return d[t.$W];case"H":return String(r);case"HH":return T.s(r,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return h(r,n,!0);case"A":return h(r,n,!1);case"m":return String(n);case"mm":return T.s(n,2,"0");case"s":return String(t.$s);case"ss":return T.s(t.$s,2,"0");case"SSS":return T.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(i,l,p){var u,b=this,h=T.p(l),m=w(i),v=(m.utcOffset()-this.utcOffset())*e,_=this-m,y=function(){return T.m(b,m)};switch(h){case f:u=y()/12;break;case d:u=y();break;case o:u=y()/3;break;case c:u=(_-v)/6048e5;break;case n:u=(_-v)/864e5;break;case r:u=_/t;break;case a:u=_/e;break;case s:u=_/1e3;break;default:u=_}return p?u:T.a(u)},m.daysInMonth=function(){return this.endOf(d).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),s=$(e,t,!0);return s&&(i.$L=s),i},m.clone=function(){return T.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),M=S.prototype;return w.prototype=M,[["$ms",i],["$s",s],["$m",a],["$H",r],["$W",n],["$M",d],["$y",f],["$D",l]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,S,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=y[_],w.Ls=y,w.p={},w}()},379:e=>{"use strict";var t=[];function i(e){for(var i=-1,s=0;s<t.length;s++)if(t[s].identifier===e){i=s;break}return i}function s(e,s){for(var r={},n=[],c=0;c<e.length;c++){var d=e[c],o=s.base?d[0]+s.base:d[0],f=r[o]||0,l="".concat(o," ").concat(f);r[o]=f+1;var p=i(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var b=a(u,s);s.byIndex=c,t.splice(c,0,{identifier:l,updater:b,references:1})}n.push(l)}return n}function a(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,a){var r=s(e=e||[],a=a||{});return function(e){e=e||[];for(var n=0;n<r.length;n++){var c=i(r[n]);t[c].references--}for(var d=s(e,a),o=0;o<r.length;o++){var f=i(r[o]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}r=d}}},569:e=>{"use strict";var t={};e.exports=function(e,i){var s=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(i)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{"use strict";e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var s="";i.supports&&(s+="@supports (".concat(i.supports,") {")),i.media&&(s+="@media ".concat(i.media," {"));var a=void 0!==i.layer;a&&(s+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),s+=i.css,a&&(s+="}"),i.media&&(s+="}"),i.supports&&(s+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0,(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}}const t=e;var s=i(484),a=i.n(s);function r(e,...t){return e.reduce(((e,i,s)=>`${e}${i}${Array.isArray(t[s])?t[s].join(""):t[s]??""}`),"")}function n(e){return a()(e).format("HH:mm")}function c(e){return a()(e).format("YYYY-MM-DDTHH:mm")}customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return r`
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    `}});customElements.define("filter-view",class extends t{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return r`
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio"
               name="trip-filter" value="everything" checked="">
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
               value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
               value="present">
        <label class="trip-filters__filter-label" for="filter-present">Present</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
               value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>
    `}});customElements.define("add-button-view",class extends t{createHtml(){return r`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return r`
        <!-- <form class="trip-events__trip-sort  trip-sort" action="#" method="get"> -->
        <div class="trip-sort__item  trip-sort__item--day">
            <input checked="" class="trip-sort__input  visually-hidden" id="sort-day" name="trip-sort"
                   type="radio" value="sort-day">
            <label class="trip-sort__btn" for="sort-day">Day</label>
        </div>

        <div class="trip-sort__item  trip-sort__item--event">
            <input class="trip-sort__input  visually-hidden" disabled="" id="sort-event" name="trip-sort"
                   type="radio" value="sort-event">
            <label class="trip-sort__btn" for="sort-event">Event</label>
        </div>

        <div class="trip-sort__item  trip-sort__item--time">
            <input class="trip-sort__input  visually-hidden" id="sort-time" name="trip-sort" type="radio"
                   value="sort-time">
            <label class="trip-sort__btn" for="sort-time">Time</label>
        </div>

        <div class="trip-sort__item  trip-sort__item--price">
            <input class="trip-sort__input  visually-hidden" id="sort-price" name="trip-sort" type="radio"
                   value="sort-price">
            <label class="trip-sort__btn" for="sort-price">Price</label>
        </div>

        <div class="trip-sort__item  trip-sort__item--offer">
            <input class="trip-sort__input  visually-hidden" disabled="" id="sort-offer" name="trip-sort"
                   type="radio" value="sort-offer">
            <label class="trip-sort__btn" for="sort-offer">Offers</label>
        </div>
    `}});var d=i(379),o=i.n(d),f=i(795),l=i.n(f),p=i(569),u=i.n(p),b=i(565),h=i.n(b),m=i(216),v=i.n(m),_=i(589),y=i.n(_),g=i(231),$={};$.styleTagTransform=y(),$.setAttributes=h(),$.insert=u().bind(null,"head"),$.domAPI=l(),$.insertStyleElement=v(),o()(g.Z,$),g.Z&&g.Z.locals&&g.Z.locals;var w=i(360),T={};T.styleTagTransform=y(),T.setAttributes=h(),T.insert=u().bind(null,"head"),T.domAPI=l(),T.insertStyleElement=v(),o()(w.Z,T),w.Z&&w.Z.locals&&w.Z.locals;class S extends t{constructor(){super()}createHtml(){return r`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${this.createTypeFieldHtml()}
          ${this.createDestinationFieldHtml()}
          ${this.createScheduleFieldHtml()}
          ${this.createPriceFieldHtml()}
          ${this.createSubmitButtonHtml()}
          ${this.createResetButtonHtml()}
          ${this.createCloseButtonHtml()}
        </header>

        <section class="event__details">
          ${this.createOfferListHtml()}
          ${this.createDestinationHtml()}
        </section>
      </form>
    `}createTypeFieldHtml(){const{types:e}=this.state,t=e.find((e=>e.isSelected)).value;return r`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            alt="Event ${t} icon"
            class="event__type-icon"
            height="17"
            src="img/icons/${t}.png"
            width="17"
          >
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            ${e.map((e=>r`
              <div class="event__type-item">
                <input
                  class="event__type-input  visually-hidden"
                  id="event-type-${e.value}-1"
                  name="event-type"
                  type="radio"
                  value="${e.value}"
                  ${e.isSelected?"checked":""}
                >
                <label
                  class="event__type-label  event__type-label--${e.value}"
                  for="event-type-${e.value}-1"
                >
                  ${e.value}
                </label>
              </div>
            `))}
          </fieldset>
        </div>
      </div>
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state;return r`
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${e.find((e=>e.isSelected)).value}
        </label>

        <input class="event__input  event__input--destination"
               id="event-destination-1"
               type="text"
               name="event-destination"
               value="${t.find((e=>e.isSelected))?.name}"
               list="destination-list-1"
        >

        <datalist id="destination-list-1">
          ${t.map((e=>r`
            <option value="${e.name}"></option>
          `))}
        </datalist>
      </div>
    `}createScheduleFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return r`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time"
               id="event-start-time-1"
               name="event-start-time"
               type="text"
               value="${e}"
        >
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time"
               id="event-end-time-1"
               name="event-end-time"
               type="text"
               value="${t}"
        >
      </div>
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return r`
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price"
               id="event-price-1"
               type="text"
               name="event-price"
               value="${e}"
        >
      </div>
    `}createSubmitButtonHtml(){return r`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return r`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return r`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}createOfferListHtml(){const{offers:e}=this.state;return e.length<1?"":r`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${e.map((e=>r`
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden"
                     id="${e.id}"
                     name="event-offer"
                     type="checkbox"
                     value="${e.id}"
                     ${e.isSelected?"checked":""}
              >

              <label class="event__offer-label"
                     for="${e.id}"
              >
                <span class="event__offer-title">${e.title}</span>
                +€&nbsp;
                <span class="event__offer-price">${e.price}</span>
              </label>
            </div>
          `))}
        </div>
      </section>
    `}createDestinationHtml(){const e=this.state.destinations.find((e=>e.isSelected));return e?r`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${e.description}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${e.pictures.map((e=>r`
              <img class="event__photo" src="${e.src}" alt="${e.description}">
            `))}
          </div>
        </div>
      </section>
    `:""}}customElements.define("editor-view",S);const M=S;class A extends t{constructor(){super()}createHtml(){return r`
      <div class="event">
        ${this.createStartDataHtml()}
        ${this.createTypeIconHtml()}
        ${this.createDestinationHtml()}
        ${this.createScheduleHtml()}
        ${this.createPriceHtml()}
        ${this.createOfferListHtml()}
        ${this.createFavoriteButtonHtml()}
        ${this.createOpenButtonHtml()}
      </div>
    `}createStartDataHtml(){const{dateFrom:e}=this.state;return r`
      <time class="event__date"
            datetime="${t=e,a()(t).format("YYYY-MM-DD")}">${function(e){return a()(e).format("MMM DD").toUpperCase()}(e)}
      </time>
    `;var t}createTypeIconHtml(){const e=this.state.types.find((e=>e.isSelected)).value;return r`
      <div class="event__type">
        <img class="event__type-icon"
             width="42"
             height="42"
             src="img/icons/${e}.png"
             alt="Event ${e} icon">
      </div>
    `}createDestinationHtml(){const e=this.state.types.find((e=>e.isSelected)).value,t=this.state.destinations.find((e=>e.isSelected))?.name;return r`
      <h3 class="event__title">${e} ${t}</h3>
    `}createScheduleHtml(){const{dateFrom:e,dateTo:t}=this.state;return r`
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time"
                datetime="${c(e)}">${n(e)}
          </time>
          —
          <time class="event__end-time"
                datetime="${c(t)}">${n(t)}
          </time>
        </p>
        <p class="event__duration">${function(e,t){const i=a()(t).diff(a()(e),"minute"),s=Math.floor(i/1440),r=Math.floor((i-24*s*60)/60),n=i%60;return s?`${String(s).padStart(2,"0")}D ${String(r).padStart(2,"0")}H ${String(n).padStart(2,"0")}M`:r?`${String(r).padStart(2,"0")}H ${String(n).padStart(2,"0")}M`:`${String(n).padStart(2,"0")}M`}(e,t)}</p>
      </div>
    `}createPriceHtml(){const{basePrice:e}=this.state;return r`
      <p class="event__price">
        €&nbsp;<span class="event__price-value">${e}</span>
      </p>
    `}createOfferListHtml(){const e=this.state.offers.filter((e=>e.isSelected));return e?r`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${e.map((e=>r`
          <li class="event__offer">
            <span class="event__offer-title">${e.title}</span>
            +€&nbsp;
            <span class="event__offer-price">${e.price}</span>
          </li>
        `))}
      </ul>
    `:""}createFavoriteButtonHtml(){return r`
      <button class="event__favorite-btn event__favorite-btn--active" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path
            d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `}createOpenButtonHtml(){return r`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}}customElements.define("card-view",A);const H=A;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new M:new H;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});const j=class{},x=JSON.parse('[{"id":"93155eed-8161-46c5-b998-6b8cf12155ca","base_price":7126,"date_from":"2023-08-03T21:00:00.531Z","date_to":"2023-08-12T19:00:00.531Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"54e0bf3b-4401-4627-9e12-f61088e8b126","base_price":2596,"date_from":"2023-08-03T21:00:00.531Z","date_to":"2023-08-11T13:00:00.531Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["c787fed3-3749-4745-b1dc-c46d2fc7afc6","67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"d9c1a372-e094-4bd5-a029-e4cc95f95151","base_price":5321,"date_from":"2023-07-29T21:00:00.531Z","date_to":"2023-08-12T01:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":[],"type":"restaurant"},{"id":"b137a347-c394-4716-94f9-2a9d4a3e7ce2","base_price":6212,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-11T23:00:00.532Z","destination":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","is_favorite":false,"offers":["83570f51-33a9-4f08-bddf-169aa9699416","31dab9b4-3a4f-4227-a873-c708181b3e9b"],"type":"drive"},{"id":"94faf0e1-3d5d-40ec-9a44-43358ef7ef75","base_price":7647,"date_from":"2023-08-01T21:00:00.532Z","date_to":"2023-08-12T05:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["6ca7f0d1-f1ca-430f-a78b-d24b3168f55d","9cb63b44-43eb-41f8-a400-f3dae11d3ce7","853ee9fe-8aa5-4a0b-81b8-e32442fc822a","95c84a9e-2205-4d61-b0a4-237d4ef8f511"],"type":"taxi"},{"id":"4da18f5f-9573-4d71-9f14-e0055d1ddfec","base_price":3312,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-12T18:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":true,"offers":["67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"57ca17e9-099c-4eee-8d8b-d75887c9b920","base_price":9767,"date_from":"2023-08-05T21:00:00.532Z","date_to":"2023-08-11T03:00:00.532Z","destination":"f4680965-86bd-4e60-b723-0e81be33a007","is_favorite":true,"offers":["83570f51-33a9-4f08-bddf-169aa9699416","31dab9b4-3a4f-4227-a873-c708181b3e9b"],"type":"drive"},{"id":"88efb917-76c8-451d-bfe0-f5f4fe0a7ec0","base_price":9431,"date_from":"2023-08-03T21:00:00.532Z","date_to":"2023-08-12T05:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":["d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"8519661e-e47f-408d-9193-6a6b463195d5","base_price":4645,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-12T14:00:00.532Z","destination":"e7d7bec7-6321-43bc-8f30-3d20d74bb2bc","is_favorite":false,"offers":["8d626a89-5a23-4849-abf2-623e4f0b174a","d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"819f2c17-a3e3-4830-b40b-a7de33812879","base_price":9163,"date_from":"2023-07-30T21:00:00.532Z","date_to":"2023-08-11T19:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":["d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"4d9afa6b-fe83-45f0-8357-675629bd78fe","base_price":3431,"date_from":"2023-08-01T21:00:00.532Z","date_to":"2023-08-12T20:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":["83570f51-33a9-4f08-bddf-169aa9699416","31dab9b4-3a4f-4227-a873-c708181b3e9b"],"type":"drive"},{"id":"4c78f3aa-0d76-457e-9322-e008569a497f","base_price":7368,"date_from":"2023-08-03T21:00:00.532Z","date_to":"2023-08-11T13:00:00.532Z","destination":"e7d7bec7-6321-43bc-8f30-3d20d74bb2bc","is_favorite":true,"offers":["81056bf4-1de3-4939-bec7-231741c0eae2"],"type":"check-in"},{"id":"33996600-988a-4c57-8c3f-1cc70bcd739d","base_price":2011,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-11T07:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["db89b1f1-c57e-4ab8-91e7-b69abe59f7ee"],"type":"restaurant"},{"id":"56146c0b-76b8-4aa8-8c55-8fbfed92fa09","base_price":452,"date_from":"2023-08-01T21:00:00.532Z","date_to":"2023-08-12T04:00:00.532Z","destination":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","is_favorite":false,"offers":["8d626a89-5a23-4849-abf2-623e4f0b174a","d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"cbcc0a4d-dfa8-4d19-a46c-ca90ef64301c","base_price":7046,"date_from":"2023-08-07T21:00:00.532Z","date_to":"2023-08-11T18:00:00.532Z","destination":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"ff7d2fe6-af4f-4eb9-b11c-9b6985e19e4c","base_price":3274,"date_from":"2023-08-06T21:00:00.532Z","date_to":"2023-08-12T01:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":true,"offers":[],"type":"drive"},{"id":"de6ca0d1-0fb7-4488-8695-792897fab62a","base_price":7421,"date_from":"2023-08-04T21:00:00.532Z","date_to":"2023-08-12T19:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":[],"type":"bus"},{"id":"30664e3f-17c7-454f-89ef-a8aa148281db","base_price":3930,"date_from":"2023-07-31T21:00:00.532Z","date_to":"2023-08-11T23:00:00.532Z","destination":"1e2e5223-9446-4646-b3ec-e1907a95f3ba","is_favorite":true,"offers":["0ce31f25-9760-42c3-a0b5-b9123309b164"],"type":"flight"},{"id":"136de951-2c6e-486a-b382-3b40de267f8d","base_price":7521,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-12T09:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["9b2ed293-0f05-471b-9270-39d018a378d4","7fbc431f-0cd7-4892-bf69-ba3abfc4433f","f6440f21-d18d-40bb-8b9a-a6ca64179cb1","e5731bfd-cdde-4df8-83f7-8fb8b935aa00","81056bf4-1de3-4939-bec7-231741c0eae2"],"type":"check-in"},{"id":"8e043509-99ac-4fc8-950f-e840a76779ba","base_price":2419,"date_from":"2023-08-06T21:00:00.532Z","date_to":"2023-08-12T12:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":[],"type":"train"},{"id":"a14736b0-65d8-4458-88ed-97c479807f46","base_price":7248,"date_from":"2023-07-30T21:00:00.532Z","date_to":"2023-08-11T22:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["c787fed3-3749-4745-b1dc-c46d2fc7afc6","67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"8333244f-4e23-437f-814c-bb93747f1656","base_price":4893,"date_from":"2023-08-05T21:00:00.532Z","date_to":"2023-08-11T20:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":[],"type":"restaurant"},{"id":"1d457cc5-9efc-4c4b-9d28-77bbfd5e2e71","base_price":3525,"date_from":"2023-08-05T21:00:00.565Z","date_to":"2023-08-11T08:00:00.565Z","destination":"430ed559-03ac-43cd-97af-1ac60623b769","is_favorite":true,"offers":["0f73880e-2c26-4618-ac0d-679f3d611a61","8d626a89-5a23-4849-abf2-623e4f0b174a","d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"8c8e7ea1-aae9-4c30-b882-fe0d4e4cd2c8","base_price":4311,"date_from":"2023-08-03T21:00:00.565Z","date_to":"2023-08-11T16:00:00.565Z","destination":"430ed559-03ac-43cd-97af-1ac60623b769","is_favorite":true,"offers":["67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"91a19373-a8b4-4063-8195-87e3e849072f","base_price":7447,"date_from":"2023-07-30T21:00:00.565Z","date_to":"2023-08-12T10:00:00.565Z","destination":"415d5d96-be4d-4473-9c31-a62d2bf3d323","is_favorite":true,"offers":["95c84a9e-2205-4d61-b0a4-237d4ef8f511"],"type":"taxi"}]'),Z=JSON.parse('[{"type":"taxi","offers":[{"id":"c75c7bbc-3f32-45c3-ada8-f7274d979601","title":"Upgrade to a business class","price":92},{"id":"6ca7f0d1-f1ca-430f-a78b-d24b3168f55d","title":"Choose the radio station","price":51},{"id":"9cb63b44-43eb-41f8-a400-f3dae11d3ce7","title":"Choose temperature","price":53},{"id":"853ee9fe-8aa5-4a0b-81b8-e32442fc822a","title":"Drive quickly, I\'m in a hurry","price":169},{"id":"95c84a9e-2205-4d61-b0a4-237d4ef8f511","title":"Drive slowly","price":163}]},{"type":"bus","offers":[{"id":"c787fed3-3749-4745-b1dc-c46d2fc7afc6","title":"Infotainment system","price":94},{"id":"67d873c9-8393-4d9a-af91-0d5e4166f1bf","title":"Order meal","price":132},{"id":"ca9751b7-1856-4e2a-9fde-4df504db9dec","title":"Choose seats","price":167}]},{"type":"train","offers":[{"id":"0f73880e-2c26-4618-ac0d-679f3d611a61","title":"Book a taxi at the arrival point","price":176},{"id":"8d626a89-5a23-4849-abf2-623e4f0b174a","title":"Order a breakfast","price":100},{"id":"d60ccd4d-38da-4838-b42c-500c28896eb9","title":"Wake up at a certain time","price":147}]},{"type":"flight","offers":[{"id":"aae16dfe-fe4f-4b16-9cfa-a4bc3d6c884c","title":"Choose meal","price":149},{"id":"fd17b530-30d2-46e0-b0f1-198acb42c3a8","title":"Choose seats","price":51},{"id":"45ef4dec-385b-4fd2-a50b-1aa952e06d7a","title":"Upgrade to comfort class","price":159},{"id":"cf752849-59a1-46ff-8c1d-cb93b45de4e3","title":"Upgrade to business class","price":163},{"id":"79a535b5-b702-497b-9b89-98a7e867d9dd","title":"Add luggage","price":111},{"id":"0ce31f25-9760-42c3-a0b5-b9123309b164","title":"Business lounge","price":88}]},{"type":"check-in","offers":[{"id":"9b2ed293-0f05-471b-9270-39d018a378d4","title":"Choose the time of check-in","price":40},{"id":"7fbc431f-0cd7-4892-bf69-ba3abfc4433f","title":"Choose the time of check-out","price":110},{"id":"f6440f21-d18d-40bb-8b9a-a6ca64179cb1","title":"Add breakfast","price":195},{"id":"e5731bfd-cdde-4df8-83f7-8fb8b935aa00","title":"Laundry","price":61},{"id":"81056bf4-1de3-4939-bec7-231741c0eae2","title":"Order a meal from the restaurant","price":51}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"4e6408dc-c790-4b8b-a722-246570482666","title":"Choose meal","price":157},{"id":"3d5b8c54-e2c4-471d-ba0b-6b72bd13dad1","title":"Choose seats","price":34},{"id":"110d4d36-8112-4a9e-96c6-c8f384a96ed7","title":"Upgrade to comfort class","price":107},{"id":"972af80d-d8d2-4960-9c25-50b563ed5db6","title":"Upgrade to business class","price":109},{"id":"62405be9-04df-48ff-ae7a-dc28063369cd","title":"Add luggage","price":184},{"id":"4d2dd4cb-cc78-4ed0-a92e-076e228b58ac","title":"Business lounge","price":158}]},{"type":"drive","offers":[{"id":"83570f51-33a9-4f08-bddf-169aa9699416","title":"With automatic transmission","price":128},{"id":"31dab9b4-3a4f-4227-a873-c708181b3e9b","title":"With air conditioning","price":47}]},{"type":"restaurant","offers":[{"id":"7b286829-27a9-4105-81f3-7b54729ddf1a","title":"Choose live music","price":159},{"id":"db89b1f1-c57e-4ab8-91e7-b69abe59f7ee","title":"Choose VIP area","price":119}]}]'),D=JSON.parse('[{"id":"1e2e5223-9446-4646-b3ec-e1907a95f3ba","description":"Valencia - with an embankment of a mighty river as a centre of attraction","name":"Valencia","pictures":[]},{"id":"430ed559-03ac-43cd-97af-1ac60623b769","description":"Hiroshima - is a beautiful city","name":"Hiroshima","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Hiroshima famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/20.jpg","description":"Hiroshima with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/8.jpg","description":"Hiroshima a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Hiroshima with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Hiroshima with a beautiful old town"}]},{"id":"e7d7bec7-6321-43bc-8f30-3d20d74bb2bc","name":"Sochi"},{"id":"1f8e77e4-b185-45a9-b9da-77dac347a39c","description":"Amsterdam - middle-eastern paradise","name":"Amsterdam","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Amsterdam famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Amsterdam middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Amsterdam a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Amsterdam famous for its crowded street markets with the best street food in Asia"}]},{"id":"8fa3a3fb-8205-4da2-8aaa-954159347305","description":"Tokio - with crowded streets","name":"Tokio","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Tokio with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Tokio famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Tokio for those who value comfort and coziness"}]},{"id":"5daad181-4871-4c6f-8953-da0360c6471d","description":"Oslo - for those who value comfort and coziness","name":"Oslo","pictures":[]},{"id":"f4680965-86bd-4e60-b723-0e81be33a007","description":"Madrid - full of of cozy canteens where you can try the best coffee in the Middle East","name":"Madrid","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Madrid a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Madrid middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Madrid full of of cozy canteens where you can try the best coffee in the Middle East"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Madrid middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/14.jpg","description":"Madrid famous for its crowded street markets with the best street food in Asia"}]},{"id":"415d5d96-be4d-4473-9c31-a62d2bf3d323","description":"Chamonix - in a middle of Europe","name":"Chamonix","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/8.jpg","description":"Chamonix famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Chamonix is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Chamonix full of of cozy canteens where you can try the best coffee in the Middle East"},{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Chamonix famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Chamonix famous for its crowded street markets with the best street food in Asia"}]},{"id":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","description":"Venice - in a middle of Europe","name":"Venice","pictures":[]},{"id":"9be7169f-ece9-419d-a926-24acc4ead65e","description":"Berlin - in a middle of Europe","name":"Berlin","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Berlin with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/12.jpg","description":"Berlin famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Berlin a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Berlin with crowded streets"}]}]'),C=class extends j{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dataFrom=new Date(e.date_from),this.dataTo=new Date(e.date_to),this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}},k=class{constructor(e,t){this.view=e,this.model=t,window.queueMicrotask((()=>this.updateView()))}updateView(){}},O=class extends k{constructor(...e){super(...e)}updateView(){this.view.render()}},E=class extends k{constructor(...e){super(...e)}updateView(){this.view.render()}},B=class extends k{constructor(...e){super(...e)}updateView(){this.view.render()}},F=class extends k{constructor(...e){super(...e)}updateView(){this.view.render()}},L=class extends k{constructor(...e){super(...e)}updateView(){const e=this.model.getPoints(),t=this.model.getDestinations(),i=this.model.getOfferGroups(),s=e.map(((e,s)=>{const{offers:a}=i.find((t=>t.type===e.type));return{id:e.id,types:i.map((t=>({value:t.type,isSelected:t.type===e.type}))),destinations:t.map((t=>({...t,isSelected:t.id===e.destinationId}))),dateFrom:e.dataFrom,dateTo:e.dataTo,basePrice:e.basePrice,offers:a.map((t=>({...t,isSelected:e.offerIds?.includes(t.id)}))),isFavorite:e.isFavorite,isEditable:1===s}}));this.view.setState({items:s})}},I=new class extends j{constructor(){super(),this._points=[],this._destinations=[],this._offerGroups=[]}async ready(){this._points=x,this._destinations=D,this._offerGroups=Z}getPoints(){return this._points.map((e=>new C(e)))}getDestinations(){return structuredClone(this._destinations)}getOfferGroups(){return structuredClone(this._offerGroups)}};I.ready().then((()=>{new O(document.querySelector("brief-view"),I),new E(document.querySelector("filter-view"),I),new B(document.querySelector("add-button-view"),I),new F(document.querySelector("sort-view"),I),new L(document.querySelector("list-view"),I)}))})()})();
//# sourceMappingURL=bundle.5c28f566f60dcc6619d1.js.map