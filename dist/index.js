"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(r,t,e,i){void 0===i&&(i=e);var a=Object.getOwnPropertyDescriptor(t,e);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(r,i,a)}:function(r,t,e,i){void 0===i&&(i=e),r[i]=t[e]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(r,t){Object.defineProperty(r,"default",{enumerable:!0,value:t})}:function(r,t){r.default=t}),__importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var e in r)"default"!==e&&Object.prototype.hasOwnProperty.call(r,e)&&__createBinding(t,r,e);return __setModuleDefault(t,r),t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.britishZ=exports.canadian=exports.british=exports.australian=exports.american=exports.english=void 0;const english=__importStar(require("./english"));exports.english=__importStar(require("./english"));const american=__importStar(require("./american"));exports.american=__importStar(require("./american"));const australian=__importStar(require("./australian"));exports.australian=__importStar(require("./australian"));const british=__importStar(require("./british"));exports.british=__importStar(require("./british"));const canadian=__importStar(require("./canadian"));exports.canadian=__importStar(require("./canadian"));const britishZ=__importStar(require("./britishZ"));exports.britishZ=__importStar(require("./britishZ")),exports.default=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},english),american),australian),british),canadian),britishZ);