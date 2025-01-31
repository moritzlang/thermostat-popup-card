/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,s=null,i=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,i),e=s}},n=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},o={},r={},a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,h=new RegExp(`${a}|${l}`),c="$lit$";class d{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,l=0;const{strings:d,values:{length:p}}=t;for(;l<p;){const t=n.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)u(e[t].name,c)&&i++;for(;i-- >0;){const e=d[l],s=g.exec(e)[2],i=s.toLowerCase()+c,n=t.getAttribute(i);t.removeAttribute(i);const o=n.split(h);this.parts.push({type:"attribute",index:r,name:s,strings:o}),l+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const i=t.parentNode,n=e.split(h),o=n.length-1;for(let e=0;e<o;e++){let s,o=n[e];if(""===o)s=m();else{const t=g.exec(o);null!==t&&u(t[2],c)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-c.length)+t[3]),s=document.createTextNode(o)}i.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===n[o]?(i.insertBefore(m(),t),s.push(t)):t.data=n[o],l+=o}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(m(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),l++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const u=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},p=t=>-1!==t.index,m=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class f{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,l=n.nextNode();for(;r<i.length;)if(o=i[r],p(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=` ${a} `;class y{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const o=g.exec(t);e+=null===o?t+(s?_:l):t.substr(0,o.index)+o[1]+o[2]+c+o[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class v extends y{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),i(e,s.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(w(t)||!b(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||w(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}const t=this.__pendingValue;t!==o&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):b(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const s=new f(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new C(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o}}class M extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends x{}let $=!1;try{const t={get capture(){return $=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class N{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=this.__pendingValue,s=this.value,i=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),n=null!=t&&(null==s||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=E(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&($?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new M(t,e.slice(1),s).parts}return"@"===n?[new N(t,e.slice(1),i.eventContext)]:"?"===n?[new P(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function A(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(a);return s=e.keyString.get(i),void 0===s&&(s=new d(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const O=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(t,...e)=>new y(t,e,"html",T),H=(t,...e)=>new v(t,e,"svg",T),F=133;function q(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,F,null,!1);let o=L(i),r=i[o],a=-1,l=0;const h=[];let c=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(h.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-l,o=L(i,o),r=i[o]}h.forEach(t=>t.parentNode.removeChild(t))}const V=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,F,null,!1);for(;s.nextNode();)e++;return e},L=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(p(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Y=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const z=t=>e=>{const s=Y(e.type,t);let i=O.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},O.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(a);if(n=i.keyString.get(o),void 0===n){const s=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(s,t),n=new d(e,s),i.keyString.set(o,n)}return i.stringsArray.set(e.strings,n),n},U=["html","svg"],B=new Set,j=(t,e,s)=>{B.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{U.forEach(e=>{const s=O.get(Y(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),q(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,F,null,!1);let r=L(n),a=0,l=-1;for(;o.nextNode();){for(l++,o.currentNode===s&&(a=V(e),s.parentNode.insertBefore(e,s));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=L(n,r);return}r=L(n,r)}}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),q(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),Z={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J},G=Promise.resolve(!0),X=1,K=4,Q=8,tt=16,et=32,st="finalized";class it extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Z){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(st)||t.finalize(),this[st]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=J){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||W,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||W.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|et,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=Z){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,e){if(this._updateState&Q)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||Z;this._updateState=this._updateState|tt,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~tt}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i._classProperties.get(t)||Z;i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||this._updateState&tt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|K;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&et}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&X}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&X||(this._updateState=this._updateState|X,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}it[st]=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const nt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol();class rt{constructor(t,e){if(e!==ot)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(nt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const at=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof rt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new rt(s,ot)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const lt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,n=e.length;i<n;i++){const n=e[i];Array.isArray(n)?t(n,s):s.push(n)}return s}(t);class ht extends it{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){lt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?nt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ht.finalized=!0,ht.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,o=R.has(e),r=I&&11===e.nodeType&&!!e.host,a=r&&!B.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=R.get(e);void 0===i&&(n(e,e.firstChild),R.set(e,i=new C(Object.assign({templateFactory:A},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:z(i)},s)),a){const t=R.get(l);R.delete(l);const s=t.value instanceof f?t.value.template:void 0;j(i,l,s),n(e,e.firstChild),e.appendChild(l),R.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ct=new WeakMap,dt=(ut=t=>e=>{if(!(e instanceof x)||e instanceof k||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:s}=e,{element:i}=s;ct.has(e)||(i.className=s.strings.join(" "));const{classList:n}=i,o=ct.get(e);for(const e in o)e in t||n.remove(e);for(const e in t){const s=t[e];o&&s===o[e]||n[s?"add":"remove"](e)}ct.set(e,t)},(...e)=>{const s=ut(...e);return t.set(s,!0),s});var ut;function pt(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}async function mt(t,e,s=!1){let i=t;"string"==typeof e&&(e=e.split(/(\$| )/)),""===e[e.length-1]&&e.pop();for(const[t,n]of e.entries())if(n.trim().length){if(!i)return null;i.localName&&i.localName.includes("-")&&await customElements.whenDefined(i.localName),i.updateComplete&&await i.updateComplete,i="$"===n?s&&t==e.length-1?[i.shadowRoot]:i.shadowRoot:s&&t==e.length-1?i.querySelectorAll(n):i.querySelector(n)}return i}function gt(t,e,s=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},s)s.dispatchEvent(t);else{var i=function(){var t=document.querySelector("hc-main");return t=t?(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("hc-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-view")||t.querySelector("hui-panel-view"):(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=document.querySelector("home-assistant"))&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root"))&&t.shadowRoot)&&t.querySelector("ha-app-layout"))&&t.querySelector("#view"))&&t.firstElementChild}();i&&i.dispatchEvent(t)}}let ft=window.cardHelpers;new Promise(async(t,e)=>{ft&&t();const s=async()=>{ft=await window.loadCardHelpers(),window.cardHelpers=ft,t()};window.loadCardHelpers?s():window.addEventListener("load",async()=>{!async function(){if(customElements.get("hui-view"))return!0;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");if(t.hass={panels:[{url_path:"tmp",component_name:"lovelace"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),!customElements.get("ha-panel-lovelace"))return!1;const e=document.createElement("ha-panel-lovelace");e.hass=pt(),void 0===e.hass&&(await new Promise(t=>{window.addEventListener("connection-status",e=>{console.log(e),t()},{once:!0})}),e.hass=pt()),e.panel={config:{mode:null}},e._fetchConfig()}(),window.loadCardHelpers&&s()})});async function _t(){const t=document.querySelector("home-assistant")||document.querySelector("hc-root");gt("hass-more-info",{entityId:"."},t);const e=await async function(t,e,s=!1,i=1e4){return Promise.race([mt(t,e,s),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),i))]).catch(t=>{if(!t.message||"timeout"!==t.message)throw t;return null})}(t,"$ card-tools-popup");e&&e.closeDialog()}var yt={},vt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,wt="[^\\s]+",bt=/\[([^]*?)\]/gm,St=function(){};function xt(t,e){for(var s=[],i=0,n=t.length;i<n;i++)s.push(t[i].substr(0,e));return s}function Ct(t){return function(e,s,i){var n=i[t].indexOf(s.charAt(0).toUpperCase()+s.substr(1).toLowerCase());~n&&(e.month=n)}}function Pt(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var Mt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],kt=["January","February","March","April","May","June","July","August","September","October","November","December"],$t=xt(kt,3),Nt=xt(Mt,3);yt.i18n={dayNamesShort:Nt,dayNames:Mt,monthNamesShort:$t,monthNames:kt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var Et={D:function(t){return t.getDate()},DD:function(t){return Pt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return Pt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return Pt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return Pt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return Pt(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return Pt(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return Pt(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return Pt(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Pt(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return Pt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return Pt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+Pt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},Tt={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+wt,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var s=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?s-1:s)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",St],ddd:[wt,St],MMM:[wt,Ct("monthNamesShort")],MMMM:[wt,Ct("monthNames")],a:[wt,function(t,e,s){var i=e.toLowerCase();i===s.amPm[0]?t.isPm=!1:i===s.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var s,i=(e+"").match(/([+-]|\d\d)/gi);i&&(s=60*i[1]+parseInt(i[2],10),t.timezoneOffset="+"===i[0]?s:-s)}]};Tt.dd=Tt.d,Tt.dddd=Tt.ddd,Tt.DD=Tt.D,Tt.mm=Tt.m,Tt.hh=Tt.H=Tt.HH=Tt.h,Tt.MM=Tt.M,Tt.ss=Tt.s,Tt.A=Tt.a,yt.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},yt.format=function(t,e,s){var i=s||yt.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=yt.masks[e]||e||yt.masks.default;var n=[];return(e=(e=e.replace(bt,(function(t,e){return n.push(e),"@@@"}))).replace(vt,(function(e){return e in Et?Et[e](t,i):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return n.shift()}))},yt.parse=function(t,e,s){var i=s||yt.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=yt.masks[e]||e,t.length>1e3)return null;var n={},o=[],r=[];e=e.replace(bt,(function(t,e){return r.push(e),"@@@"}));var a,l=(a=e,a.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(vt,(function(t){if(Tt[t]){var e=Tt[t];return o.push(e[1]),"("+e[0]+")"}return t}));l=l.replace(/@@@/g,(function(){return r.shift()}));var h=t.match(new RegExp(l,"i"));if(!h)return null;for(var c=1;c<h.length;c++)o[c-1](n,h[c],i);var d,u=new Date;return!0===n.isPm&&null!=n.hour&&12!=+n.hour?n.hour=+n.hour+12:!1===n.isPm&&12==+n.hour&&(n.hour=0),null!=n.timezoneOffset?(n.minute=+(n.minute||0)-+n.timezoneOffset,d=new Date(Date.UTC(n.year||u.getFullYear(),n.month||0,n.day||1,n.hour||0,n.minute||0,n.second||0,n.millisecond||0))):d=new Date(n.year||u.getFullYear(),n.month||0,n.day||1,n.hour||0,n.minute||0,n.second||0,n.millisecond||0),d};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var At=function(t){return void 0===t.attributes.friendly_name?function(t){return t.substr(t.indexOf(".")+1)}(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""};customElements.define("thermostat-popup-card",class extends ht{constructor(){super(),this.hvacModeOrdering={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},this.modeIcons={auto:"hass:calendar-sync",heat_cool:"hass:autorenew",heat:"hass:fire",cool:"hass:snowflake",off:"hass:power",fan_only:"hass:fan",dry:"hass:water-percent"},this.settings=!1,this.settingsCustomCard=!1,this.settingsPosition="bottom",this._compareClimateHvacModes=(t,e)=>this.hvacModeOrdering[t]-this.hvacModeOrdering[e]}static get properties(){return{hass:{},config:{},active:{},_setTemp:{}}}render(){var t=this.config.entity,e=this.hass.states[t],s=(this.config.icon?this.config.icon:e.attributes.icon&&e.attributes.icon,this.config.name||At(this.hass.states[this.config.entity]),e.attributes.current_temperature,e.state in this.modeIcons?e.state:"unknown-mode"),i=this.config.stepSize?this.config.stepSize:e.attributes.target_temp_step?e.attributes.target_temp_step:1,n=!("fullscreen"in this.config)||this.config.fullscreen;if(this.settings="settings"in this.config,this.settingsCustomCard="settingsCard"in this.config,this.settingsPosition="settingsPosition"in this.config?this.config.settingsPosition:"bottom",this.settingsCustomCard&&this.config.settingsCard.cardOptions)if(this.config.settingsCard.cardOptions.entity&&"this"==this.config.settingsCard.cardOptions.entity)this.config.settingsCard.cardOptions.entity=t;else if(this.config.settingsCard.cardOptions.entity_id&&"this"==this.config.settingsCard.cardOptions.entity_id)this.config.settingsCard.cardOptions.entity_id=t;else if(this.config.settingsCard.cardOptions.entities)for(let e in this.config.settingsCard.cardOptions.entities)"this"==this.config.settingsCard.cardOptions.entities[e]&&(this.config.settingsCard.cardOptions.entities[e]=t);return D`
      <div class="${!0===n?"popup-wrapper":""}">
        <div class="${dt({[s]:!0})}" style="display:flex;width:100%;height:100%;">
          <div id="popup" class="popup-inner" @click="${t=>this._close(t)}">
            <div id="controls">
              <div id="slider">
                <custom-round-slider
                  .value=${this._setTemp}
                  .low=${e.attributes.target_temp_low}
                  .high=${e.attributes.target_temp_high}
                  .min=${e.attributes.min_temp}
                  .max=${e.attributes.max_temp}
                  .step=${i}
                  .handleSize=${15}
                  .gradient=${!0}
                  .gradientPoints=${[{point:0,color:"#4fdae4"},{point:10,color:"#2da9d8"},{point:25,color:"#56b557"},{point:50,color:"#f4c807"},{point:70,color:"#faaa00"},{point:100,color:"#f86618"}]}
                  @value-changing=${this._dragEvent}
                  @value-changed=${this._setTemperature}
                ></custom-round-slider>

                <div id="slider-center">
                  <div class="values">
                    <div class="notice">
                      ${this.hass.localize(`component.climate.state._.${e.state}`)}
                    </div>
                    <div class="value">
                      ${this._setTemp?Array.isArray(this._setTemp)?1===i?H`
                                ${this._setTemp[0].toFixed().replace(".",",")}&#176; -
                                ${this._setTemp[1].toFixed().replace(".",",")}&#176;
                                `:H`
                                ${this._setTemp[0].toFixed(1).replace(".",",")}&#176; -
                                ${this._setTemp[1].toFixed(1).replace(".",",")}&#176;
                                `:1===i?H`
                                ${this._setTemp.toFixed().replace(".",",")}&#176;
                                `:H`
                                ${this._setTemp.toFixed(1).replace(".",",")}&#176;
                                `:""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="modes">
              ${(e.attributes.hvac_modes||[]).concat().sort(this._compareClimateHvacModes).map(t=>this._renderIcon(t,s))}
            </div>
            ${this.settings?D`<button class="settings-btn ${this.settingsPosition}${!0===n?" fullscreen":""}" @click="${()=>this._openSettings()}">${this.config.settings.openButton?this.config.settings.openButton:"Settings"}</button>`:D``}
          </div>
          ${this.settings?D`
            <div id="settings" class="settings-inner" @click="${t=>this._close(t)}">
              ${this.settingsCustomCard?D`
                <card-maker nohass data-card="${this.config.settingsCard.type}" data-options="${JSON.stringify(this.config.settingsCard.cardOptions)}" data-style="${this.config.settingsCard.cardStyle?this.config.settingsCard.cardStyle:""}">
                </card-maker>
              `:D`
                  <more-info-controls
                  .dialogElement=${null}
                  .canConfigure=${!1}
                  .hass=${this.hass}
                  .stateObj=${e}
                  style="--paper-slider-knob-color: white !important;
                  --paper-slider-knob-start-color: white !important;
                  --paper-slider-pin-color: white !important;
                  --paper-slider-active-color: white !important;
                  color: white !important;
                  --primary-text-color: white !important;"
                ></more-info-controls>
              `}
              <button class="settings-btn ${this.settingsPosition}${!0===n?" fullscreen":""}" @click="${()=>this._closeSettings()}">${this.config.settings.closeButton?this.config.settings.closeButton:"Close"}</button>
            </div>
          `:D``}
        </div>
      </div>
    `}firstUpdated(){if(this._setTemp=this._getSetTemp(this.hass.states[this.config.entity]),this.settings&&!this.settingsCustomCard){const t=this.shadowRoot.querySelector("more-info-controls").shadowRoot;t.removeChild(t.querySelector("app-toolbar"))}else this.settings&&this.settingsCustomCard&&this.shadowRoot.querySelectorAll("card-maker").forEach(t=>{var e={type:t.dataset.card};e=Object.assign({},e,JSON.parse(t.dataset.options)),t.config=e;let s="";if(t.dataset.style&&(s=t.dataset.style),""!=s){let e=0,i=setInterval((function(){let n=t.children[0];if(n){window.clearInterval(i);var o=document.createElement("style");o.innerHTML=s,n.shadowRoot.appendChild(o)}else 10==++e&&window.clearInterval(i)}),100)}})}_openSettings(){this.shadowRoot.getElementById("popup").classList.add("off"),this.shadowRoot.getElementById("settings").classList.add("on")}_closeSettings(){this.shadowRoot.getElementById("settings").classList.remove("on"),this.shadowRoot.getElementById("popup").classList.remove("off")}_renderIcon(t,e){return this.modeIcons[t]?D`
      <ha-icon-button
        class="${dt({"selected-icon":e===t})}"
        .mode="${t}"
        .icon="${this.modeIcons[t]}"
        @click="${this._handleModeClick}"
        tabindex="0"
      ></ha-icon-button>
    `:D``}_handleModeClick(t){this.hass.callService("climate","set_hvac_mode",{entity_id:this.config.entity,hvac_mode:t.currentTarget.mode})}_getSetTemp(t){return"unavailable"===t.state?this.hass.localize("state.default.unavailable"):t.attributes.target_temp_low&&t.attributes.target_temp_high?[t.attributes.target_temp_low,t.attributes.target_temp_high]:t.attributes.temperature}_close(t){t&&(t.target.className.includes("popup-inner")||t.target.className.includes("settings-inner"))&&_t()}_dragEvent(t){const e=this.hass.states[this.config.entity];t.detail.low?this._setTemp=[t.detail.low,e.attributes.target_temp_high]:t.detail.high?this._setTemp=[e.attributes.target_temp_low,t.detail.high]:this._setTemp=t.detail.value}_setTemperature(t){const e=this.hass.states[this.config.entity];t.detail.low?this.hass.callService("climate","set_temperature",{entity_id:this.config.entity,target_temp_low:t.detail.low,target_temp_high:e.attributes.target_temp_high}):t.detail.high?this.hass.callService("climate","set_temperature",{entity_id:this.config.entity,target_temp_low:e.attributes.target_temp_low,target_temp_high:t.detail.high}):this.hass.callService("climate","set_temperature",{entity_id:this.config.entity,temperature:t.detail.value})}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=t}getCardSize(){return 1}static get styles(){return at`
        :host {
            --auto-color: #3dd553;
            --eco-color: springgreen;
            --cool-color: #2b9af9;
            --heat-color: #fc9426;
            --manual-color: #44739e;
            --off-color: #454548;
            --fan_only-color: #8a8a8a;
            --dry-color: #efbd07;
            --idle-color: #00CC66;
            --unknown-color: #bac;
        }
        .popup-wrapper {
          margin-top:64px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .popup-inner {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-family: 'SF Display';
        }
        .popup-inner.off {
          display:none;
        }
        #settings {
          display:none;
        }
        .settings-inner {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        #settings.on {
          display:flex;
        }
        .settings-btn {
          position:absolute;
          right:30px;
          background-color: #7f8082;
          color: #FFF;
          border: 0;
          padding: 5px 20px;
          border-radius: 10px;
          font-weight: 500;
          cursor: pointer;
        }
        .settings-btn.bottom {
          bottom:15px;
        }
        .settings-btn.top {
          top: 25px;
        }
        .settings-btn.bottom.fullscreen {
          margin:0;
        }
        .fullscreen {
          margin-top:-64px;
        }
        .info {
          display:flex;
          flex-direction:row;
          margin-bottom: 40px;
        }
        .info .temp {
          background-color: #67cd67;
          height: 60px;
          width: 60px;  
          text-align:center;
          line-height:60px;
          border-radius:100%;
          color:#FFF;
          font-size:18px;
        }

        .info .temp.heat_cool {
          background-color: var(--auto-color);
        }
        .info .temp.cool {
          background-color: var(--cool-color);
        }
        .info .temp.heat {
          background-color: var(--heat-color);
        }
        .info .temp.manual {
          background-color: var(--manual-color);
        }
        .info .temp.off {
          background-color: var(--off-color);
        }
        .info .temp.fan_only {
          background-color: var(--fan_only-color);
        }
        .info .temp.eco {
          background-color: var(--eco-color);
        }
        .info .temp.dry {
          background-color: var(--dry-color);
        }
        .info .temp.idle {
          background-color: var(--idle-color);
        }
        .info .temp.unknown-mode {
          background-color: var(--unknown-color);
        }


        .info .right {
          display:flex;
          flex-direction:column;
          margin-left:15px;
          height:60px;
          align-items:center;
          justify-content:center;
        }
        .info .right .name {
          color:#FFF;
          font-size:24px;
        }
        .info .right .action {
          color: #8b8a8f;
          font-size:12px;
        }
        
        /* CONTROLS */
        
        .auto{
          --mode-color: var(--auto-color);
        }
        .heat_cool {
          --mode-color: var(--auto-color);
        }
        .cool {
          --mode-color: var(--cool-color);
        }
        .heat {
          --mode-color: var(--heat-color);
        }
        .manual {
          --mode-color: var(--manual-color);
        }
        .off {
          --mode-color: var(--off-color);
        }
        .fan_only {
          --mode-color: var(--fan_only-color);
        }
        .eco {
          --mode-color: var(--eco-color);
        }
        .dry {
          --mode-color: var(--dry-color);
        }
        .idle {
          --mode-color: var(--idle-color);
        }
        .unknown-mode {
          --mode-color: var(--unknown-color);
        }
        #controls {
          display: flex;
          justify-content: center;
          padding: 16px;
          position: relative;
          width:500px;
        }
        #slider {
          height: 100%;
          width: 100%;
          position: relative;
          max-width: 300px;
          min-width: 250px;
        }
        round-slider {
          --round-slider-path-color: var(--disabled-text-color);
          --round-slider-bar-color: var(--mode-color);
          padding-bottom: 10%;
        }
        #slider-center {
          position: absolute;
          width: calc(100% - 120px);
          height: calc(100% - 120px);
          box-sizing: border-box;
          border-radius: 100%;
          left: 60px;
          top: 65px;
          text-align: center;
          overflow-wrap: break-word;
          pointer-events: none;
        }
        
        .values {
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          height:100%;
          width:100%;
        }
        .values .value {
          color: #FFF;
          font-size: 4em;
          line-height: 4rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.8);
        }
        .values .notice {
          color: #f19629;
          font-size: 1em;
          font-weight: 700;
          text-transform:uppercase;
          margin-bottom: 0.2rem;
        }
        .values .action {
          font-size: 0.7em;
          font-weight: 700;
          text-transform:uppercase;
        }
        
        #modes {
          margin-top: -40px;
        }
        #modes > * {
          color: var(--disabled-text-color);
          cursor: pointer;
          display: inline-block;
        }
        #modes .selected-icon {
          color: var(--mode-color);
        }
        text {
          color: var(--primary-text-color);
        }
    `}});customElements.define("custom-round-slider",class extends ht{constructor(){super(),this.min=0,this.max=100,this.step=1,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.handleZoom=5,this.disabled=!1,this.dragging=!1,this.rtl=!1,this._scale=1,this.gradient=!1,this.gradientPoints=[]}static get properties(){return{value:{type:Number},high:{type:Number},low:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},startAngle:{type:Number},arcLength:{type:Number},handleSize:{type:Number},handleZoom:{type:Number},disabled:{type:Boolean},dragging:{type:Boolean,reflect:!0},rtl:{type:Boolean},_scale:{type:Number},gradient:{type:Boolean},gradientPoints:{type:Array}}}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _enabled(){return!this.disabled&&((null!=this.value||null!=this.high&&null!=this.low)&&((null==this.value||!(this.value>this.max||this.value<this.min))&&((null==this.high||!(this.high>this.max||this.high<this.min))&&(null==this.low||!(this.low>this.max||this.low<this.min)))))}_angleInside(t){let e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}_angle2xy(t){return this.rtl?{x:-Math.cos(t),y:Math.sin(t)}:{x:Math.cos(t),y:Math.sin(t)}}_xy2angle(t,e){return this.rtl&&(t=-t),(Math.atan2(e,t)-this._start+2*Math.PI)%(2*Math.PI)}_value2angle(t){const e=(t-this.min)/(this.max-this.min);return this._start+e*this._len}_angle2value(t){return Math.round((t/this._len*(this.max-this.min)+this.min)/this.step)*this.step}get _boundaries(){const t=this._angle2xy(this._start),e=this._angle2xy(this._end);let s=1;this._angleInside(270)||(s=Math.max(-t.y,-e.y));let i=1;this._angleInside(90)||(i=Math.max(t.y,e.y));let n=1;this._angleInside(180)||(n=Math.max(-t.x,-e.x));let o=1;return this._angleInside(0)||(o=Math.max(t.x,e.x)),{up:s,down:i,left:n,right:o,height:s+i,width:n+o}}dragStart(t){let e=t.target;if(this._rotation&&"focus"!==this._rotation.type)return;if(e.classList.contains("overflow")&&(e=e.nextElementSibling),!e.classList.contains("handle"))return;e.setAttribute("stroke-width",this.handleSize*this._scale+5+this.handleZoom);const s="high"===e.id?this.low:this.min,i="low"===e.id?this.high:this.max;this._rotation={handle:e,min:s,max:i,start:this[e.id],type:t.type},this.dragging=!0}dragEnd(){if(!this._rotation)return;const t=this._rotation.handle;t.setAttribute("stroke-width",this.handleSize*this._scale+5),this._rotation=!1,this.dragging=!1,t.blur();let e=new CustomEvent("value-changed",{detail:{[t.id]:this[t.id]}});this.dispatchEvent(e),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(t){if(!this._rotation)return;if("focus"===this._rotation.type)return;t.preventDefault();const e="touchmove"===t.type?t.touches[0].clientX:t.clientX,s="touchmove"===t.type?t.touches[0].clientY:t.clientY,i=this.shadowRoot.querySelector("svg").getBoundingClientRect(),n=this._boundaries,o=e-(i.left+n.left*i.width/n.width),r=s-(i.top+n.up*i.height/n.height),a=this._xy2angle(o,r),l=this._angle2value(a);this._dragpos(l)}_dragpos(t){if(t<this._rotation.min||t>this._rotation.max)return;const e=this._rotation.handle;this[e.id]=t;let s=new CustomEvent("value-changing",{detail:{[e.id]:t}});this.dispatchEvent(s)}_keyStep(t){if(!this._rotation)return;const e=this._rotation.handle;"ArrowLeft"===t.key&&(this.rtl?this._dragpos(this[e.id]+this.step):this._dragpos(this[e.id]-this.step)),"ArrowRight"===t.key&&(this.rtl?this._dragpos(this[e.id]-this.step):this._dragpos(this[e.id]+this.step))}firstUpdated(){document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),{passive:!1}),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("touchmove",this.drag.bind(this),{passive:!1}),document.addEventListener("keydown",this._keyStep.bind(this))}updated(t){if(this.shadowRoot.querySelector("svg")&&void 0!==this.shadowRoot.querySelector("svg").style.vectorEffect)return;t.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(t=>{if(t.getAttribute("stroke-width"))return;const e=parseFloat(getComputedStyle(t).getPropertyValue("stroke-width"));t.style.strokeWidth=`${e*this._scale}px`});const e=this.shadowRoot.querySelector("svg").getBoundingClientRect(),s=Math.max(e.width,e.height);this._scale=2/s}_renderArc(t,e){const s=e-t;return t=this._angle2xy(t),e=this._angle2xy(e+.001),`\n      M ${t.x} ${t.y}\n      A 1 1,\n        0,\n        ${s>Math.PI?"1":"0"} ${this.rtl?"0":"1"},\n        ${e.x} ${e.y}\n    `}_renderHandle(t){const e=this._value2angle(this[t]),s=this._angle2xy(e);return H`
      <g class="${t} handle">
        <path
          id=${t}
          class="overflow"
          d="
          M ${s.x} ${s.y}
          L ${s.x+.001} ${s.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-linecap="round"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${t}
          class="handle"
          d=${this._renderArc(this._value2angle("low"!=t?this[t]-.35:this[t]+.35),this._value2angle(this[t]))}
          vector-effect="non-scaling-stroke"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          />
        </g>
      `}render(){const t=this._boundaries;return D`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-t.left} ${-t.up} ${t.width} ${t.height}"
        style="margin: 30px;"
        focusable="false"
      >
        ${this.gradient?D`
        
        `:D``}
        <g class="slider">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            ${this.gradientPoints.map(t=>H`<stop offset="${t.point}%" style="stop-color:${t.color};" />`)}
            </linearGradient>
          </defs>
          <path
            class="path" style="${this.gradient?"stroke: url(#gradient);":"stroke: var(--round-slider-path-color, lightgray);"}" 
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
          />
          ${this._enabled?H`
              <path
                class="block"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._start,this._value2angle(null!=this.low?this.low:this.min))}
              />
              <path
                class="block"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._value2angle(null!=this.high?this.high:this.value),this._end)}
              />
              <path
                class="block-dash"
                stroke-dasharray="2, 15"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._start,this._end)}
              />
              <path
                class="bar"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value))}
              />
              
              `:""}
        </g>
        <g class="handles">
        ${this._enabled?null!=this.low?this._reverseOrder?D`${this._renderHandle("high")} ${this._renderHandle("low")}`:D`${this._renderHandle("low")} ${this._renderHandle("high")}`:D`${this._renderHandle("value")}`:""}
        </g>
        
      </svg>
    `}static get styles(){return at`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 30);
        stroke-linecap: var(--round-slider-linecap, butt);
      }
      .path {
      }
      .bar {
        stroke: var(--round-slider-bar-color, transparent);
      }
      .block {
        stroke-width: var(--round-slider-block-path-width, 31);
        stroke: #2c2c2e;
      }
      .block-dash {
        stroke-width: var(--round-slider-dash-width, 20);
        stroke: var(--round-slider-block-dash-color, rgba(244, 244, 255, 0.03));
      }
      g.handles {
        stroke: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));
        stroke-linecap: round;
      }
      g.handle {
        stroke-width: var(--round-slider-dash-width, 20);
        stroke: #FFF;
        stroke-dasharray: 3, 8;
        stroke-linecap: butt;
      }
      .handle:focus {
        outline: unset;
      }
    `}});
