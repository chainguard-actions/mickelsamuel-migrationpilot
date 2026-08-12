var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/debug.js
var require_debug = __commonJS({
  "node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/debug.js"(exports, module) {
    var messages = [];
    var level = 0;
    var debug = (msg, min) => {
      if (level >= min) {
        messages.push(msg);
      }
    };
    debug.WARN = 1;
    debug.INFO = 2;
    debug.DEBUG = 3;
    debug.reset = () => {
      messages = [];
    };
    debug.setDebugLevel = (v) => {
      level = v;
    };
    debug.warn = (msg) => debug(msg, debug.WARN);
    debug.info = (msg) => debug(msg, debug.INFO);
    debug.debug = (msg) => debug(msg, debug.DEBUG);
    debug.debugMessages = () => messages;
    module.exports = debug;
  }
});

// node_modules/.pnpm/ansi-regex@5.0.1/node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "node_modules/.pnpm/ansi-regex@5.0.1/node_modules/ansi-regex/index.js"(exports, module) {
    "use strict";
    module.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// node_modules/.pnpm/strip-ansi@6.0.1/node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS({
  "node_modules/.pnpm/strip-ansi@6.0.1/node_modules/strip-ansi/index.js"(exports, module) {
    "use strict";
    var ansiRegex = require_ansi_regex();
    module.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
  }
});

// node_modules/.pnpm/is-fullwidth-code-point@3.0.0/node_modules/is-fullwidth-code-point/index.js
var require_is_fullwidth_code_point = __commonJS({
  "node_modules/.pnpm/is-fullwidth-code-point@3.0.0/node_modules/is-fullwidth-code-point/index.js"(exports, module) {
    "use strict";
    var isFullwidthCodePoint = (codePoint) => {
      if (Number.isNaN(codePoint)) {
        return false;
      }
      if (codePoint >= 4352 && (codePoint <= 4447 || // Hangul Jamo
      codePoint === 9001 || // LEFT-POINTING ANGLE BRACKET
      codePoint === 9002 || // RIGHT-POINTING ANGLE BRACKET
      // CJK Radicals Supplement .. Enclosed CJK Letters and Months
      11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
      12880 <= codePoint && codePoint <= 19903 || // CJK Unified Ideographs .. Yi Radicals
      19968 <= codePoint && codePoint <= 42182 || // Hangul Jamo Extended-A
      43360 <= codePoint && codePoint <= 43388 || // Hangul Syllables
      44032 <= codePoint && codePoint <= 55203 || // CJK Compatibility Ideographs
      63744 <= codePoint && codePoint <= 64255 || // Vertical Forms
      65040 <= codePoint && codePoint <= 65049 || // CJK Compatibility Forms .. Small Form Variants
      65072 <= codePoint && codePoint <= 65131 || // Halfwidth and Fullwidth Forms
      65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || // Kana Supplement
      110592 <= codePoint && codePoint <= 110593 || // Enclosed Ideographic Supplement
      127488 <= codePoint && codePoint <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
      131072 <= codePoint && codePoint <= 262141)) {
        return true;
      }
      return false;
    };
    module.exports = isFullwidthCodePoint;
    module.exports.default = isFullwidthCodePoint;
  }
});

// node_modules/.pnpm/emoji-regex@8.0.0/node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "node_modules/.pnpm/emoji-regex@8.0.0/node_modules/emoji-regex/index.js"(exports, module) {
    "use strict";
    module.exports = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
  }
});

// node_modules/.pnpm/string-width@4.2.3/node_modules/string-width/index.js
var require_string_width = __commonJS({
  "node_modules/.pnpm/string-width@4.2.3/node_modules/string-width/index.js"(exports, module) {
    "use strict";
    var stripAnsi = require_strip_ansi();
    var isFullwidthCodePoint = require_is_fullwidth_code_point();
    var emojiRegex = require_emoji_regex();
    var stringWidth = (string) => {
      if (typeof string !== "string" || string.length === 0) {
        return 0;
      }
      string = stripAnsi(string);
      if (string.length === 0) {
        return 0;
      }
      string = string.replace(emojiRegex(), "  ");
      let width = 0;
      for (let i = 0; i < string.length; i++) {
        const code = string.codePointAt(i);
        if (code <= 31 || code >= 127 && code <= 159) {
          continue;
        }
        if (code >= 768 && code <= 879) {
          continue;
        }
        if (code > 65535) {
          i++;
        }
        width += isFullwidthCodePoint(code) ? 2 : 1;
      }
      return width;
    };
    module.exports = stringWidth;
    module.exports.default = stringWidth;
  }
});

// node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/utils.js"(exports, module) {
    var stringWidth = require_string_width();
    function codeRegex(capture) {
      return capture ? /\u001b\[((?:\d*;){0,5}\d*)m/g : /\u001b\[(?:\d*;){0,5}\d*m/g;
    }
    function strlen(str) {
      let code = codeRegex();
      let stripped = ("" + str).replace(code, "");
      let split = stripped.split("\n");
      return split.reduce(function(memo, s) {
        return stringWidth(s) > memo ? stringWidth(s) : memo;
      }, 0);
    }
    function repeat(str, times) {
      return Array(times + 1).join(str);
    }
    function pad(str, len, pad2, dir) {
      let length = strlen(str);
      if (len + 1 >= length) {
        let padlen = len - length;
        switch (dir) {
          case "right": {
            str = repeat(pad2, padlen) + str;
            break;
          }
          case "center": {
            let right = Math.ceil(padlen / 2);
            let left = padlen - right;
            str = repeat(pad2, left) + str + repeat(pad2, right);
            break;
          }
          default: {
            str = str + repeat(pad2, padlen);
            break;
          }
        }
      }
      return str;
    }
    var codeCache = {};
    function addToCodeCache(name, on, off) {
      on = "\x1B[" + on + "m";
      off = "\x1B[" + off + "m";
      codeCache[on] = { set: name, to: true };
      codeCache[off] = { set: name, to: false };
      codeCache[name] = { on, off };
    }
    addToCodeCache("bold", 1, 22);
    addToCodeCache("italics", 3, 23);
    addToCodeCache("underline", 4, 24);
    addToCodeCache("inverse", 7, 27);
    addToCodeCache("strikethrough", 9, 29);
    function updateState(state, controlChars) {
      let controlCode = controlChars[1] ? parseInt(controlChars[1].split(";")[0]) : 0;
      if (controlCode >= 30 && controlCode <= 39 || controlCode >= 90 && controlCode <= 97) {
        state.lastForegroundAdded = controlChars[0];
        return;
      }
      if (controlCode >= 40 && controlCode <= 49 || controlCode >= 100 && controlCode <= 107) {
        state.lastBackgroundAdded = controlChars[0];
        return;
      }
      if (controlCode === 0) {
        for (let i in state) {
          if (Object.prototype.hasOwnProperty.call(state, i)) {
            delete state[i];
          }
        }
        return;
      }
      let info = codeCache[controlChars[0]];
      if (info) {
        state[info.set] = info.to;
      }
    }
    function readState(line) {
      let code = codeRegex(true);
      let controlChars = code.exec(line);
      let state = {};
      while (controlChars !== null) {
        updateState(state, controlChars);
        controlChars = code.exec(line);
      }
      return state;
    }
    function unwindState(state, ret) {
      let lastBackgroundAdded = state.lastBackgroundAdded;
      let lastForegroundAdded = state.lastForegroundAdded;
      delete state.lastBackgroundAdded;
      delete state.lastForegroundAdded;
      Object.keys(state).forEach(function(key) {
        if (state[key]) {
          ret += codeCache[key].off;
        }
      });
      if (lastBackgroundAdded && lastBackgroundAdded != "\x1B[49m") {
        ret += "\x1B[49m";
      }
      if (lastForegroundAdded && lastForegroundAdded != "\x1B[39m") {
        ret += "\x1B[39m";
      }
      return ret;
    }
    function rewindState(state, ret) {
      let lastBackgroundAdded = state.lastBackgroundAdded;
      let lastForegroundAdded = state.lastForegroundAdded;
      delete state.lastBackgroundAdded;
      delete state.lastForegroundAdded;
      Object.keys(state).forEach(function(key) {
        if (state[key]) {
          ret = codeCache[key].on + ret;
        }
      });
      if (lastBackgroundAdded && lastBackgroundAdded != "\x1B[49m") {
        ret = lastBackgroundAdded + ret;
      }
      if (lastForegroundAdded && lastForegroundAdded != "\x1B[39m") {
        ret = lastForegroundAdded + ret;
      }
      return ret;
    }
    function truncateWidth(str, desiredLength) {
      if (str.length === strlen(str)) {
        return str.substr(0, desiredLength);
      }
      while (strlen(str) > desiredLength) {
        str = str.slice(0, -1);
      }
      return str;
    }
    function truncateWidthWithAnsi(str, desiredLength) {
      let code = codeRegex(true);
      let split = str.split(codeRegex());
      let splitIndex = 0;
      let retLen = 0;
      let ret = "";
      let myArray;
      let state = {};
      while (retLen < desiredLength) {
        myArray = code.exec(str);
        let toAdd = split[splitIndex];
        splitIndex++;
        if (retLen + strlen(toAdd) > desiredLength) {
          toAdd = truncateWidth(toAdd, desiredLength - retLen);
        }
        ret += toAdd;
        retLen += strlen(toAdd);
        if (retLen < desiredLength) {
          if (!myArray) {
            break;
          }
          ret += myArray[0];
          updateState(state, myArray);
        }
      }
      return unwindState(state, ret);
    }
    function truncate2(str, desiredLength, truncateChar) {
      truncateChar = truncateChar || "\u2026";
      let lengthOfStr = strlen(str);
      if (lengthOfStr <= desiredLength) {
        return str;
      }
      desiredLength -= strlen(truncateChar);
      let ret = truncateWidthWithAnsi(str, desiredLength);
      ret += truncateChar;
      const hrefTag = "\x1B]8;;\x07";
      if (str.includes(hrefTag) && !ret.includes(hrefTag)) {
        ret += hrefTag;
      }
      return ret;
    }
    function defaultOptions() {
      return {
        chars: {
          top: "\u2500",
          "top-mid": "\u252C",
          "top-left": "\u250C",
          "top-right": "\u2510",
          bottom: "\u2500",
          "bottom-mid": "\u2534",
          "bottom-left": "\u2514",
          "bottom-right": "\u2518",
          left: "\u2502",
          "left-mid": "\u251C",
          mid: "\u2500",
          "mid-mid": "\u253C",
          right: "\u2502",
          "right-mid": "\u2524",
          middle: "\u2502"
        },
        truncate: "\u2026",
        colWidths: [],
        rowHeights: [],
        colAligns: [],
        rowAligns: [],
        style: {
          "padding-left": 1,
          "padding-right": 1,
          head: ["red"],
          border: ["grey"],
          compact: false
        },
        head: []
      };
    }
    function mergeOptions(options, defaults) {
      options = options || {};
      defaults = defaults || defaultOptions();
      let ret = Object.assign({}, defaults, options);
      ret.chars = Object.assign({}, defaults.chars, options.chars);
      ret.style = Object.assign({}, defaults.style, options.style);
      return ret;
    }
    function wordWrap(maxLength, input) {
      let lines = [];
      let split = input.split(/(\s+)/g);
      let line = [];
      let lineLength = 0;
      let whitespace;
      for (let i = 0; i < split.length; i += 2) {
        let word = split[i];
        let newLength = lineLength + strlen(word);
        if (lineLength > 0 && whitespace) {
          newLength += whitespace.length;
        }
        if (newLength > maxLength) {
          if (lineLength !== 0) {
            lines.push(line.join(""));
          }
          line = [word];
          lineLength = strlen(word);
        } else {
          line.push(whitespace || "", word);
          lineLength = newLength;
        }
        whitespace = split[i + 1];
      }
      if (lineLength) {
        lines.push(line.join(""));
      }
      return lines;
    }
    function textWrap(maxLength, input) {
      let lines = [];
      let line = "";
      function pushLine(str, ws) {
        if (line.length && ws) line += ws;
        line += str;
        while (line.length > maxLength) {
          lines.push(line.slice(0, maxLength));
          line = line.slice(maxLength);
        }
      }
      let split = input.split(/(\s+)/g);
      for (let i = 0; i < split.length; i += 2) {
        pushLine(split[i], i && split[i - 1]);
      }
      if (line.length) lines.push(line);
      return lines;
    }
    function multiLineWordWrap(maxLength, input, wrapOnWordBoundary = true) {
      let output = [];
      input = input.split("\n");
      const handler = wrapOnWordBoundary ? wordWrap : textWrap;
      for (let i = 0; i < input.length; i++) {
        output.push.apply(output, handler(maxLength, input[i]));
      }
      return output;
    }
    function colorizeLines(input) {
      let state = {};
      let output = [];
      for (let i = 0; i < input.length; i++) {
        let line = rewindState(state, input[i]);
        state = readState(line);
        let temp = Object.assign({}, state);
        output.push(unwindState(temp, line));
      }
      return output;
    }
    function hyperlink(url, text) {
      const OSC = "\x1B]";
      const BEL = "\x07";
      const SEP = ";";
      return [OSC, "8", SEP, SEP, url || text, BEL, text, OSC, "8", SEP, SEP, BEL].join("");
    }
    module.exports = {
      strlen,
      repeat,
      pad,
      truncate: truncate2,
      mergeOptions,
      wordWrap: multiLineWordWrap,
      colorizeLines,
      hyperlink
    };
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/styles.js
var require_styles = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/styles.js"(exports, module) {
    var styles3 = {};
    module["exports"] = styles3;
    var codes = {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29],
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39],
      grey: [90, 39],
      brightRed: [91, 39],
      brightGreen: [92, 39],
      brightYellow: [93, 39],
      brightBlue: [94, 39],
      brightMagenta: [95, 39],
      brightCyan: [96, 39],
      brightWhite: [97, 39],
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgGray: [100, 49],
      bgGrey: [100, 49],
      bgBrightRed: [101, 49],
      bgBrightGreen: [102, 49],
      bgBrightYellow: [103, 49],
      bgBrightBlue: [104, 49],
      bgBrightMagenta: [105, 49],
      bgBrightCyan: [106, 49],
      bgBrightWhite: [107, 49],
      // legacy styles for colors pre v1.0.0
      blackBG: [40, 49],
      redBG: [41, 49],
      greenBG: [42, 49],
      yellowBG: [43, 49],
      blueBG: [44, 49],
      magentaBG: [45, 49],
      cyanBG: [46, 49],
      whiteBG: [47, 49]
    };
    Object.keys(codes).forEach(function(key) {
      var val = codes[key];
      var style = styles3[key] = [];
      style.open = "\x1B[" + val[0] + "m";
      style.close = "\x1B[" + val[1] + "m";
    });
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/system/has-flag.js
var require_has_flag = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/system/has-flag.js"(exports, module) {
    "use strict";
    module.exports = function(flag, argv) {
      argv = argv || process.argv;
      var terminatorPos = argv.indexOf("--");
      var prefix = /^-{1,2}/.test(flag) ? "" : "--";
      var pos = argv.indexOf(prefix + flag);
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/system/supports-colors.js
var require_supports_colors = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/system/supports-colors.js"(exports, module) {
    "use strict";
    var os2 = __require("os");
    var hasFlag2 = require_has_flag();
    var env2 = process.env;
    var forceColor = void 0;
    if (hasFlag2("no-color") || hasFlag2("no-colors") || hasFlag2("color=false")) {
      forceColor = false;
    } else if (hasFlag2("color") || hasFlag2("colors") || hasFlag2("color=true") || hasFlag2("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env2) {
      forceColor = env2.FORCE_COLOR.length === 0 || parseInt(env2.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel2(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor2(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag2("color=16m") || hasFlag2("color=full") || hasFlag2("color=truecolor")) {
        return 3;
      }
      if (hasFlag2("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      var min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        var osRelease = os2.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env2) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(sign) {
          return sign in env2;
        }) || env2.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env2) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env2.TEAMCITY_VERSION) ? 1 : 0;
      }
      if ("TERM_PROGRAM" in env2) {
        var version = parseInt((env2.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env2.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Hyper":
            return 3;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env2.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env2.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env2) {
        return 1;
      }
      if (env2.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      var level = supportsColor2(stream);
      return translateLevel2(level);
    }
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/custom/trap.js
var require_trap = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/custom/trap.js"(exports, module) {
    module["exports"] = function runTheTrap(text, options) {
      var result = "";
      text = text || "Run the trap, drop the bass";
      text = text.split("");
      var trap = {
        a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
        b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
        c: ["\xA9", "\u023B", "\u03FE"],
        d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
        e: [
          "\xCB",
          "\u0115",
          "\u018E",
          "\u0258",
          "\u03A3",
          "\u03BE",
          "\u04BC",
          "\u0A6C"
        ],
        f: ["\u04FA"],
        g: ["\u0262"],
        h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
        i: ["\u0F0F"],
        j: ["\u0134"],
        k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
        l: ["\u0139"],
        m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
        n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
        o: [
          "\xD8",
          "\xF5",
          "\xF8",
          "\u01FE",
          "\u0298",
          "\u047A",
          "\u05DD",
          "\u06DD",
          "\u0E4F"
        ],
        p: ["\u01F7", "\u048E"],
        q: ["\u09CD"],
        r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
        s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
        t: ["\u0141", "\u0166", "\u0373"],
        u: ["\u01B1", "\u054D"],
        v: ["\u05D8"],
        w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
        x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
        y: ["\xA5", "\u04B0", "\u04CB"],
        z: ["\u01B5", "\u0240"]
      };
      text.forEach(function(c) {
        c = c.toLowerCase();
        var chars = trap[c] || [" "];
        var rand = Math.floor(Math.random() * chars.length);
        if (typeof trap[c] !== "undefined") {
          result += trap[c][rand];
        } else {
          result += c;
        }
      });
      return result;
    };
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/custom/zalgo.js
var require_zalgo = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/custom/zalgo.js"(exports, module) {
    module["exports"] = function zalgo(text, options) {
      text = text || "   he is here   ";
      var soul = {
        "up": [
          "\u030D",
          "\u030E",
          "\u0304",
          "\u0305",
          "\u033F",
          "\u0311",
          "\u0306",
          "\u0310",
          "\u0352",
          "\u0357",
          "\u0351",
          "\u0307",
          "\u0308",
          "\u030A",
          "\u0342",
          "\u0313",
          "\u0308",
          "\u034A",
          "\u034B",
          "\u034C",
          "\u0303",
          "\u0302",
          "\u030C",
          "\u0350",
          "\u0300",
          "\u0301",
          "\u030B",
          "\u030F",
          "\u0312",
          "\u0313",
          "\u0314",
          "\u033D",
          "\u0309",
          "\u0363",
          "\u0364",
          "\u0365",
          "\u0366",
          "\u0367",
          "\u0368",
          "\u0369",
          "\u036A",
          "\u036B",
          "\u036C",
          "\u036D",
          "\u036E",
          "\u036F",
          "\u033E",
          "\u035B",
          "\u0346",
          "\u031A"
        ],
        "down": [
          "\u0316",
          "\u0317",
          "\u0318",
          "\u0319",
          "\u031C",
          "\u031D",
          "\u031E",
          "\u031F",
          "\u0320",
          "\u0324",
          "\u0325",
          "\u0326",
          "\u0329",
          "\u032A",
          "\u032B",
          "\u032C",
          "\u032D",
          "\u032E",
          "\u032F",
          "\u0330",
          "\u0331",
          "\u0332",
          "\u0333",
          "\u0339",
          "\u033A",
          "\u033B",
          "\u033C",
          "\u0345",
          "\u0347",
          "\u0348",
          "\u0349",
          "\u034D",
          "\u034E",
          "\u0353",
          "\u0354",
          "\u0355",
          "\u0356",
          "\u0359",
          "\u035A",
          "\u0323"
        ],
        "mid": [
          "\u0315",
          "\u031B",
          "\u0300",
          "\u0301",
          "\u0358",
          "\u0321",
          "\u0322",
          "\u0327",
          "\u0328",
          "\u0334",
          "\u0335",
          "\u0336",
          "\u035C",
          "\u035D",
          "\u035E",
          "\u035F",
          "\u0360",
          "\u0362",
          "\u0338",
          "\u0337",
          "\u0361",
          " \u0489"
        ]
      };
      var all = [].concat(soul.up, soul.down, soul.mid);
      function randomNumber(range) {
        var r = Math.floor(Math.random() * range);
        return r;
      }
      function isChar(character) {
        var bool = false;
        all.filter(function(i) {
          bool = i === character;
        });
        return bool;
      }
      function heComes(text2, options2) {
        var result = "";
        var counts;
        var l;
        options2 = options2 || {};
        options2["up"] = typeof options2["up"] !== "undefined" ? options2["up"] : true;
        options2["mid"] = typeof options2["mid"] !== "undefined" ? options2["mid"] : true;
        options2["down"] = typeof options2["down"] !== "undefined" ? options2["down"] : true;
        options2["size"] = typeof options2["size"] !== "undefined" ? options2["size"] : "maxi";
        text2 = text2.split("");
        for (l in text2) {
          if (isChar(l)) {
            continue;
          }
          result = result + text2[l];
          counts = { "up": 0, "down": 0, "mid": 0 };
          switch (options2.size) {
            case "mini":
              counts.up = randomNumber(8);
              counts.mid = randomNumber(2);
              counts.down = randomNumber(8);
              break;
            case "maxi":
              counts.up = randomNumber(16) + 3;
              counts.mid = randomNumber(4) + 1;
              counts.down = randomNumber(64) + 3;
              break;
            default:
              counts.up = randomNumber(8) + 1;
              counts.mid = randomNumber(6) / 2;
              counts.down = randomNumber(8) + 1;
              break;
          }
          var arr = ["up", "mid", "down"];
          for (var d in arr) {
            var index = arr[d];
            for (var i = 0; i <= counts[index]; i++) {
              if (options2[index]) {
                result = result + soul[index][randomNumber(soul[index].length)];
              }
            }
          }
        }
        return result;
      }
      return heComes(text, options);
    };
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/maps/america.js
var require_america = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/maps/america.js"(exports, module) {
    module["exports"] = function(colors) {
      return function(letter, i, exploded) {
        if (letter === " ") return letter;
        switch (i % 3) {
          case 0:
            return colors.red(letter);
          case 1:
            return colors.white(letter);
          case 2:
            return colors.blue(letter);
        }
      };
    };
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/maps/zebra.js
var require_zebra = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/maps/zebra.js"(exports, module) {
    module["exports"] = function(colors) {
      return function(letter, i, exploded) {
        return i % 2 === 0 ? letter : colors.inverse(letter);
      };
    };
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/maps/rainbow.js
var require_rainbow = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/maps/rainbow.js"(exports, module) {
    module["exports"] = function(colors) {
      var rainbowColors = ["red", "yellow", "green", "blue", "magenta"];
      return function(letter, i, exploded) {
        if (letter === " ") {
          return letter;
        } else {
          return colors[rainbowColors[i++ % rainbowColors.length]](letter);
        }
      };
    };
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/maps/random.js
var require_random = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/maps/random.js"(exports, module) {
    module["exports"] = function(colors) {
      var available = [
        "underline",
        "inverse",
        "grey",
        "yellow",
        "red",
        "green",
        "blue",
        "white",
        "cyan",
        "magenta",
        "brightYellow",
        "brightRed",
        "brightGreen",
        "brightBlue",
        "brightWhite",
        "brightCyan",
        "brightMagenta"
      ];
      return function(letter, i, exploded) {
        return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 2))]](letter);
      };
    };
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/colors.js
var require_colors = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/lib/colors.js"(exports, module) {
    var colors = {};
    module["exports"] = colors;
    colors.themes = {};
    var util = __require("util");
    var ansiStyles2 = colors.styles = require_styles();
    var defineProps = Object.defineProperties;
    var newLineRegex = new RegExp(/[\r\n]+/g);
    colors.supportsColor = require_supports_colors().supportsColor;
    if (typeof colors.enabled === "undefined") {
      colors.enabled = colors.supportsColor() !== false;
    }
    colors.enable = function() {
      colors.enabled = true;
    };
    colors.disable = function() {
      colors.enabled = false;
    };
    colors.stripColors = colors.strip = function(str) {
      return ("" + str).replace(/\x1B\[\d+m/g, "");
    };
    var stylize = colors.stylize = function stylize2(str, style) {
      if (!colors.enabled) {
        return str + "";
      }
      var styleMap = ansiStyles2[style];
      if (!styleMap && style in colors) {
        return colors[style](str);
      }
      return styleMap.open + str + styleMap.close;
    };
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    var escapeStringRegexp = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
    function build(_styles) {
      var builder = function builder2() {
        return applyStyle2.apply(builder2, arguments);
      };
      builder._styles = _styles;
      builder.__proto__ = proto2;
      return builder;
    }
    var styles3 = (function() {
      var ret = {};
      ansiStyles2.grey = ansiStyles2.gray;
      Object.keys(ansiStyles2).forEach(function(key) {
        ansiStyles2[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles2[key].close), "g");
        ret[key] = {
          get: function() {
            return build(this._styles.concat(key));
          }
        };
      });
      return ret;
    })();
    var proto2 = defineProps(function colors2() {
    }, styles3);
    function applyStyle2() {
      var args = Array.prototype.slice.call(arguments);
      var str = args.map(function(arg) {
        if (arg != null && arg.constructor === String) {
          return arg;
        } else {
          return util.inspect(arg);
        }
      }).join(" ");
      if (!colors.enabled || !str) {
        return str;
      }
      var newLinesPresent = str.indexOf("\n") != -1;
      var nestedStyles = this._styles;
      var i = nestedStyles.length;
      while (i--) {
        var code = ansiStyles2[nestedStyles[i]];
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        if (newLinesPresent) {
          str = str.replace(newLineRegex, function(match) {
            return code.close + match + code.open;
          });
        }
      }
      return str;
    }
    colors.setTheme = function(theme) {
      if (typeof theme === "string") {
        console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
        return;
      }
      for (var style in theme) {
        (function(style2) {
          colors[style2] = function(str) {
            if (typeof theme[style2] === "object") {
              var out = str;
              for (var i in theme[style2]) {
                out = colors[theme[style2][i]](out);
              }
              return out;
            }
            return colors[theme[style2]](str);
          };
        })(style);
      }
    };
    function init() {
      var ret = {};
      Object.keys(styles3).forEach(function(name) {
        ret[name] = {
          get: function() {
            return build([name]);
          }
        };
      });
      return ret;
    }
    var sequencer = function sequencer2(map2, str) {
      var exploded = str.split("");
      exploded = exploded.map(map2);
      return exploded.join("");
    };
    colors.trap = require_trap();
    colors.zalgo = require_zalgo();
    colors.maps = {};
    colors.maps.america = require_america()(colors);
    colors.maps.zebra = require_zebra()(colors);
    colors.maps.rainbow = require_rainbow()(colors);
    colors.maps.random = require_random()(colors);
    for (map in colors.maps) {
      (function(map2) {
        colors[map2] = function(str) {
          return sequencer(colors.maps[map2], str);
        };
      })(map);
    }
    var map;
    defineProps(colors, init());
  }
});

// node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/safe.js
var require_safe = __commonJS({
  "node_modules/.pnpm/@colors+colors@1.5.0/node_modules/@colors/colors/safe.js"(exports, module) {
    var colors = require_colors();
    module["exports"] = colors;
  }
});

// node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/cell.js
var require_cell = __commonJS({
  "node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/cell.js"(exports, module) {
    var { info, debug } = require_debug();
    var utils = require_utils();
    var Cell = class _Cell {
      /**
       * A representation of a cell within the table.
       * Implementations must have `init` and `draw` methods,
       * as well as `colSpan`, `rowSpan`, `desiredHeight` and `desiredWidth` properties.
       * @param options
       * @constructor
       */
      constructor(options) {
        this.setOptions(options);
        this.x = null;
        this.y = null;
      }
      setOptions(options) {
        if (["boolean", "number", "bigint", "string"].indexOf(typeof options) !== -1) {
          options = { content: "" + options };
        }
        options = options || {};
        this.options = options;
        let content = options.content;
        if (["boolean", "number", "bigint", "string"].indexOf(typeof content) !== -1) {
          this.content = String(content);
        } else if (!content) {
          this.content = this.options.href || "";
        } else {
          throw new Error("Content needs to be a primitive, got: " + typeof content);
        }
        this.colSpan = options.colSpan || 1;
        this.rowSpan = options.rowSpan || 1;
        if (this.options.href) {
          Object.defineProperty(this, "href", {
            get() {
              return this.options.href;
            }
          });
        }
      }
      mergeTableOptions(tableOptions, cells) {
        this.cells = cells;
        let optionsChars = this.options.chars || {};
        let tableChars = tableOptions.chars;
        let chars = this.chars = {};
        CHAR_NAMES.forEach(function(name) {
          setOption(optionsChars, tableChars, name, chars);
        });
        this.truncate = this.options.truncate || tableOptions.truncate;
        let style = this.options.style = this.options.style || {};
        let tableStyle = tableOptions.style;
        setOption(style, tableStyle, "padding-left", this);
        setOption(style, tableStyle, "padding-right", this);
        this.head = style.head || tableStyle.head;
        this.border = style.border || tableStyle.border;
        this.fixedWidth = tableOptions.colWidths[this.x];
        this.lines = this.computeLines(tableOptions);
        this.desiredWidth = utils.strlen(this.content) + this.paddingLeft + this.paddingRight;
        this.desiredHeight = this.lines.length;
      }
      computeLines(tableOptions) {
        const tableWordWrap = tableOptions.wordWrap || tableOptions.textWrap;
        const { wordWrap = tableWordWrap } = this.options;
        if (this.fixedWidth && wordWrap) {
          this.fixedWidth -= this.paddingLeft + this.paddingRight;
          if (this.colSpan) {
            let i = 1;
            while (i < this.colSpan) {
              this.fixedWidth += tableOptions.colWidths[this.x + i];
              i++;
            }
          }
          const { wrapOnWordBoundary: tableWrapOnWordBoundary = true } = tableOptions;
          const { wrapOnWordBoundary = tableWrapOnWordBoundary } = this.options;
          return this.wrapLines(utils.wordWrap(this.fixedWidth, this.content, wrapOnWordBoundary));
        }
        return this.wrapLines(this.content.split("\n"));
      }
      wrapLines(computedLines) {
        const lines = utils.colorizeLines(computedLines);
        if (this.href) {
          return lines.map((line) => utils.hyperlink(this.href, line));
        }
        return lines;
      }
      /**
       * Initializes the Cells data structure.
       *
       * @param tableOptions - A fully populated set of tableOptions.
       * In addition to the standard default values, tableOptions must have fully populated the
       * `colWidths` and `rowWidths` arrays. Those arrays must have lengths equal to the number
       * of columns or rows (respectively) in this table, and each array item must be a Number.
       *
       */
      init(tableOptions) {
        let x = this.x;
        let y = this.y;
        this.widths = tableOptions.colWidths.slice(x, x + this.colSpan);
        this.heights = tableOptions.rowHeights.slice(y, y + this.rowSpan);
        this.width = this.widths.reduce(sumPlusOne, -1);
        this.height = this.heights.reduce(sumPlusOne, -1);
        this.hAlign = this.options.hAlign || tableOptions.colAligns[x];
        this.vAlign = this.options.vAlign || tableOptions.rowAligns[y];
        this.drawRight = x + this.colSpan == tableOptions.colWidths.length;
      }
      /**
       * Draws the given line of the cell.
       * This default implementation defers to methods `drawTop`, `drawBottom`, `drawLine` and `drawEmpty`.
       * @param lineNum - can be `top`, `bottom` or a numerical line number.
       * @param spanningCell - will be a number if being called from a RowSpanCell, and will represent how
       * many rows below it's being called from. Otherwise it's undefined.
       * @returns {String} The representation of this line.
       */
      draw(lineNum, spanningCell) {
        if (lineNum == "top") return this.drawTop(this.drawRight);
        if (lineNum == "bottom") return this.drawBottom(this.drawRight);
        let content = utils.truncate(this.content, 10, this.truncate);
        if (!lineNum) {
          info(`${this.y}-${this.x}: ${this.rowSpan - lineNum}x${this.colSpan} Cell ${content}`);
        } else {
        }
        let padLen = Math.max(this.height - this.lines.length, 0);
        let padTop;
        switch (this.vAlign) {
          case "center":
            padTop = Math.ceil(padLen / 2);
            break;
          case "bottom":
            padTop = padLen;
            break;
          default:
            padTop = 0;
        }
        if (lineNum < padTop || lineNum >= padTop + this.lines.length) {
          return this.drawEmpty(this.drawRight, spanningCell);
        }
        let forceTruncation = this.lines.length > this.height && lineNum + 1 >= this.height;
        return this.drawLine(lineNum - padTop, this.drawRight, forceTruncation, spanningCell);
      }
      /**
       * Renders the top line of the cell.
       * @param drawRight - true if this method should render the right edge of the cell.
       * @returns {String}
       */
      drawTop(drawRight) {
        let content = [];
        if (this.cells) {
          this.widths.forEach(function(width, index) {
            content.push(this._topLeftChar(index));
            content.push(utils.repeat(this.chars[this.y == 0 ? "top" : "mid"], width));
          }, this);
        } else {
          content.push(this._topLeftChar(0));
          content.push(utils.repeat(this.chars[this.y == 0 ? "top" : "mid"], this.width));
        }
        if (drawRight) {
          content.push(this.chars[this.y == 0 ? "topRight" : "rightMid"]);
        }
        return this.wrapWithStyleColors("border", content.join(""));
      }
      _topLeftChar(offset) {
        let x = this.x + offset;
        let leftChar;
        if (this.y == 0) {
          leftChar = x == 0 ? "topLeft" : offset == 0 ? "topMid" : "top";
        } else {
          if (x == 0) {
            leftChar = "leftMid";
          } else {
            leftChar = offset == 0 ? "midMid" : "bottomMid";
            if (this.cells) {
              let spanAbove = this.cells[this.y - 1][x] instanceof _Cell.ColSpanCell;
              if (spanAbove) {
                leftChar = offset == 0 ? "topMid" : "mid";
              }
              if (offset == 0) {
                let i = 1;
                while (this.cells[this.y][x - i] instanceof _Cell.ColSpanCell) {
                  i++;
                }
                if (this.cells[this.y][x - i] instanceof _Cell.RowSpanCell) {
                  leftChar = "leftMid";
                }
              }
            }
          }
        }
        return this.chars[leftChar];
      }
      wrapWithStyleColors(styleProperty, content) {
        if (this[styleProperty] && this[styleProperty].length) {
          try {
            let colors = require_safe();
            for (let i = this[styleProperty].length - 1; i >= 0; i--) {
              colors = colors[this[styleProperty][i]];
            }
            return colors(content);
          } catch (e) {
            return content;
          }
        } else {
          return content;
        }
      }
      /**
       * Renders a line of text.
       * @param lineNum - Which line of text to render. This is not necessarily the line within the cell.
       * There may be top-padding above the first line of text.
       * @param drawRight - true if this method should render the right edge of the cell.
       * @param forceTruncationSymbol - `true` if the rendered text should end with the truncation symbol even
       * if the text fits. This is used when the cell is vertically truncated. If `false` the text should
       * only include the truncation symbol if the text will not fit horizontally within the cell width.
       * @param spanningCell - a number of if being called from a RowSpanCell. (how many rows below). otherwise undefined.
       * @returns {String}
       */
      drawLine(lineNum, drawRight, forceTruncationSymbol, spanningCell) {
        let left = this.chars[this.x == 0 ? "left" : "middle"];
        if (this.x && spanningCell && this.cells) {
          let cellLeft = this.cells[this.y + spanningCell][this.x - 1];
          while (cellLeft instanceof ColSpanCell) {
            cellLeft = this.cells[cellLeft.y][cellLeft.x - 1];
          }
          if (!(cellLeft instanceof RowSpanCell)) {
            left = this.chars["rightMid"];
          }
        }
        let leftPadding = utils.repeat(" ", this.paddingLeft);
        let right = drawRight ? this.chars["right"] : "";
        let rightPadding = utils.repeat(" ", this.paddingRight);
        let line = this.lines[lineNum];
        let len = this.width - (this.paddingLeft + this.paddingRight);
        if (forceTruncationSymbol) line += this.truncate || "\u2026";
        let content = utils.truncate(line, len, this.truncate);
        content = utils.pad(content, len, " ", this.hAlign);
        content = leftPadding + content + rightPadding;
        return this.stylizeLine(left, content, right);
      }
      stylizeLine(left, content, right) {
        left = this.wrapWithStyleColors("border", left);
        right = this.wrapWithStyleColors("border", right);
        if (this.y === 0) {
          content = this.wrapWithStyleColors("head", content);
        }
        return left + content + right;
      }
      /**
       * Renders the bottom line of the cell.
       * @param drawRight - true if this method should render the right edge of the cell.
       * @returns {String}
       */
      drawBottom(drawRight) {
        let left = this.chars[this.x == 0 ? "bottomLeft" : "bottomMid"];
        let content = utils.repeat(this.chars.bottom, this.width);
        let right = drawRight ? this.chars["bottomRight"] : "";
        return this.wrapWithStyleColors("border", left + content + right);
      }
      /**
       * Renders a blank line of text within the cell. Used for top and/or bottom padding.
       * @param drawRight - true if this method should render the right edge of the cell.
       * @param spanningCell - a number of if being called from a RowSpanCell. (how many rows below). otherwise undefined.
       * @returns {String}
       */
      drawEmpty(drawRight, spanningCell) {
        let left = this.chars[this.x == 0 ? "left" : "middle"];
        if (this.x && spanningCell && this.cells) {
          let cellLeft = this.cells[this.y + spanningCell][this.x - 1];
          while (cellLeft instanceof ColSpanCell) {
            cellLeft = this.cells[cellLeft.y][cellLeft.x - 1];
          }
          if (!(cellLeft instanceof RowSpanCell)) {
            left = this.chars["rightMid"];
          }
        }
        let right = drawRight ? this.chars["right"] : "";
        let content = utils.repeat(" ", this.width);
        return this.stylizeLine(left, content, right);
      }
    };
    var ColSpanCell = class {
      /**
       * A Cell that doesn't do anything. It just draws empty lines.
       * Used as a placeholder in column spanning.
       * @constructor
       */
      constructor() {
      }
      draw(lineNum) {
        if (typeof lineNum === "number") {
          debug(`${this.y}-${this.x}: 1x1 ColSpanCell`);
        }
        return "";
      }
      init() {
      }
      mergeTableOptions() {
      }
    };
    var RowSpanCell = class {
      /**
       * A placeholder Cell for a Cell that spans multiple rows.
       * It delegates rendering to the original cell, but adds the appropriate offset.
       * @param originalCell
       * @constructor
       */
      constructor(originalCell) {
        this.originalCell = originalCell;
      }
      init(tableOptions) {
        let y = this.y;
        let originalY = this.originalCell.y;
        this.cellOffset = y - originalY;
        this.offset = findDimension(tableOptions.rowHeights, originalY, this.cellOffset);
      }
      draw(lineNum) {
        if (lineNum == "top") {
          return this.originalCell.draw(this.offset, this.cellOffset);
        }
        if (lineNum == "bottom") {
          return this.originalCell.draw("bottom");
        }
        debug(`${this.y}-${this.x}: 1x${this.colSpan} RowSpanCell for ${this.originalCell.content}`);
        return this.originalCell.draw(this.offset + 1 + lineNum);
      }
      mergeTableOptions() {
      }
    };
    function firstDefined(...args) {
      return args.filter((v) => v !== void 0 && v !== null).shift();
    }
    function setOption(objA, objB, nameB, targetObj) {
      let nameA = nameB.split("-");
      if (nameA.length > 1) {
        nameA[1] = nameA[1].charAt(0).toUpperCase() + nameA[1].substr(1);
        nameA = nameA.join("");
        targetObj[nameA] = firstDefined(objA[nameA], objA[nameB], objB[nameA], objB[nameB]);
      } else {
        targetObj[nameB] = firstDefined(objA[nameB], objB[nameB]);
      }
    }
    function findDimension(dimensionTable, startingIndex, span) {
      let ret = dimensionTable[startingIndex];
      for (let i = 1; i < span; i++) {
        ret += 1 + dimensionTable[startingIndex + i];
      }
      return ret;
    }
    function sumPlusOne(a, b) {
      return a + b + 1;
    }
    var CHAR_NAMES = [
      "top",
      "top-mid",
      "top-left",
      "top-right",
      "bottom",
      "bottom-mid",
      "bottom-left",
      "bottom-right",
      "left",
      "left-mid",
      "mid",
      "mid-mid",
      "right",
      "right-mid",
      "middle"
    ];
    module.exports = Cell;
    module.exports.ColSpanCell = ColSpanCell;
    module.exports.RowSpanCell = RowSpanCell;
  }
});

// node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/layout-manager.js
var require_layout_manager = __commonJS({
  "node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/layout-manager.js"(exports, module) {
    var { warn, debug } = require_debug();
    var Cell = require_cell();
    var { ColSpanCell, RowSpanCell } = Cell;
    (function() {
      function next(alloc, col) {
        if (alloc[col] > 0) {
          return next(alloc, col + 1);
        }
        return col;
      }
      function layoutTable(table) {
        let alloc = {};
        table.forEach(function(row, rowIndex) {
          let col = 0;
          row.forEach(function(cell) {
            cell.y = rowIndex;
            cell.x = rowIndex ? next(alloc, col) : col;
            const rowSpan = cell.rowSpan || 1;
            const colSpan = cell.colSpan || 1;
            if (rowSpan > 1) {
              for (let cs = 0; cs < colSpan; cs++) {
                alloc[cell.x + cs] = rowSpan;
              }
            }
            col = cell.x + colSpan;
          });
          Object.keys(alloc).forEach((idx) => {
            alloc[idx]--;
            if (alloc[idx] < 1) delete alloc[idx];
          });
        });
      }
      function maxWidth(table) {
        let mw = 0;
        table.forEach(function(row) {
          row.forEach(function(cell) {
            mw = Math.max(mw, cell.x + (cell.colSpan || 1));
          });
        });
        return mw;
      }
      function maxHeight(table) {
        return table.length;
      }
      function cellsConflict(cell1, cell2) {
        let yMin1 = cell1.y;
        let yMax1 = cell1.y - 1 + (cell1.rowSpan || 1);
        let yMin2 = cell2.y;
        let yMax2 = cell2.y - 1 + (cell2.rowSpan || 1);
        let yConflict = !(yMin1 > yMax2 || yMin2 > yMax1);
        let xMin1 = cell1.x;
        let xMax1 = cell1.x - 1 + (cell1.colSpan || 1);
        let xMin2 = cell2.x;
        let xMax2 = cell2.x - 1 + (cell2.colSpan || 1);
        let xConflict = !(xMin1 > xMax2 || xMin2 > xMax1);
        return yConflict && xConflict;
      }
      function conflictExists(rows, x, y) {
        let i_max = Math.min(rows.length - 1, y);
        let cell = { x, y };
        for (let i = 0; i <= i_max; i++) {
          let row = rows[i];
          for (let j = 0; j < row.length; j++) {
            if (cellsConflict(cell, row[j])) {
              return true;
            }
          }
        }
        return false;
      }
      function allBlank(rows, y, xMin, xMax) {
        for (let x = xMin; x < xMax; x++) {
          if (conflictExists(rows, x, y)) {
            return false;
          }
        }
        return true;
      }
      function addRowSpanCells(table) {
        table.forEach(function(row, rowIndex) {
          row.forEach(function(cell) {
            for (let i = 1; i < cell.rowSpan; i++) {
              let rowSpanCell = new RowSpanCell(cell);
              rowSpanCell.x = cell.x;
              rowSpanCell.y = cell.y + i;
              rowSpanCell.colSpan = cell.colSpan;
              insertCell(rowSpanCell, table[rowIndex + i]);
            }
          });
        });
      }
      function addColSpanCells(cellRows) {
        for (let rowIndex = cellRows.length - 1; rowIndex >= 0; rowIndex--) {
          let cellColumns = cellRows[rowIndex];
          for (let columnIndex = 0; columnIndex < cellColumns.length; columnIndex++) {
            let cell = cellColumns[columnIndex];
            for (let k = 1; k < cell.colSpan; k++) {
              let colSpanCell = new ColSpanCell();
              colSpanCell.x = cell.x + k;
              colSpanCell.y = cell.y;
              cellColumns.splice(columnIndex + 1, 0, colSpanCell);
            }
          }
        }
      }
      function insertCell(cell, row) {
        let x = 0;
        while (x < row.length && row[x].x < cell.x) {
          x++;
        }
        row.splice(x, 0, cell);
      }
      function fillInTable(table) {
        let h_max = maxHeight(table);
        let w_max = maxWidth(table);
        debug(`Max rows: ${h_max}; Max cols: ${w_max}`);
        for (let y = 0; y < h_max; y++) {
          for (let x = 0; x < w_max; x++) {
            if (!conflictExists(table, x, y)) {
              let opts = { x, y, colSpan: 1, rowSpan: 1 };
              x++;
              while (x < w_max && !conflictExists(table, x, y)) {
                opts.colSpan++;
                x++;
              }
              let y2 = y + 1;
              while (y2 < h_max && allBlank(table, y2, opts.x, opts.x + opts.colSpan)) {
                opts.rowSpan++;
                y2++;
              }
              let cell = new Cell(opts);
              cell.x = opts.x;
              cell.y = opts.y;
              warn(`Missing cell at ${cell.y}-${cell.x}.`);
              insertCell(cell, table[y]);
            }
          }
        }
      }
      function generateCells(rows) {
        return rows.map(function(row) {
          if (!Array.isArray(row)) {
            let key = Object.keys(row)[0];
            row = row[key];
            if (Array.isArray(row)) {
              row = row.slice();
              row.unshift(key);
            } else {
              row = [key, row];
            }
          }
          return row.map(function(cell) {
            return new Cell(cell);
          });
        });
      }
      function makeTableLayout(rows) {
        let cellRows = generateCells(rows);
        layoutTable(cellRows);
        fillInTable(cellRows);
        addRowSpanCells(cellRows);
        addColSpanCells(cellRows);
        return cellRows;
      }
      module.exports = {
        makeTableLayout,
        layoutTable,
        addRowSpanCells,
        maxWidth,
        fillInTable,
        computeWidths: makeComputeWidths("colSpan", "desiredWidth", "x", 1),
        computeHeights: makeComputeWidths("rowSpan", "desiredHeight", "y", 1)
      };
    })();
    function makeComputeWidths(colSpan, desiredWidth, x, forcedMin) {
      return function(vals, table) {
        let result = [];
        let spanners = [];
        let auto = {};
        table.forEach(function(row) {
          row.forEach(function(cell) {
            if ((cell[colSpan] || 1) > 1) {
              spanners.push(cell);
            } else {
              result[cell[x]] = Math.max(result[cell[x]] || 0, cell[desiredWidth] || 0, forcedMin);
            }
          });
        });
        vals.forEach(function(val, index) {
          if (typeof val === "number") {
            result[index] = val;
          }
        });
        for (let k = spanners.length - 1; k >= 0; k--) {
          let cell = spanners[k];
          let span = cell[colSpan];
          let col = cell[x];
          let existingWidth = result[col];
          let editableCols = typeof vals[col] === "number" ? 0 : 1;
          if (typeof existingWidth === "number") {
            for (let i = 1; i < span; i++) {
              existingWidth += 1 + result[col + i];
              if (typeof vals[col + i] !== "number") {
                editableCols++;
              }
            }
          } else {
            existingWidth = desiredWidth === "desiredWidth" ? cell.desiredWidth - 1 : 1;
            if (!auto[col] || auto[col] < existingWidth) {
              auto[col] = existingWidth;
            }
          }
          if (cell[desiredWidth] > existingWidth) {
            let i = 0;
            while (editableCols > 0 && cell[desiredWidth] > existingWidth) {
              if (typeof vals[col + i] !== "number") {
                let dif = Math.round((cell[desiredWidth] - existingWidth) / editableCols);
                existingWidth += dif;
                result[col + i] += dif;
                editableCols--;
              }
              i++;
            }
          }
        }
        Object.assign(vals, result, auto);
        for (let j = 0; j < vals.length; j++) {
          vals[j] = Math.max(forcedMin, vals[j] || 0);
        }
      };
    }
  }
});

// node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/table.js
var require_table = __commonJS({
  "node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/src/table.js"(exports, module) {
    var debug = require_debug();
    var utils = require_utils();
    var tableLayout = require_layout_manager();
    var Table2 = class extends Array {
      constructor(opts) {
        super();
        const options = utils.mergeOptions(opts);
        Object.defineProperty(this, "options", {
          value: options,
          enumerable: options.debug
        });
        if (options.debug) {
          switch (typeof options.debug) {
            case "boolean":
              debug.setDebugLevel(debug.WARN);
              break;
            case "number":
              debug.setDebugLevel(options.debug);
              break;
            case "string":
              debug.setDebugLevel(parseInt(options.debug, 10));
              break;
            default:
              debug.setDebugLevel(debug.WARN);
              debug.warn(`Debug option is expected to be boolean, number, or string. Received a ${typeof options.debug}`);
          }
          Object.defineProperty(this, "messages", {
            get() {
              return debug.debugMessages();
            }
          });
        }
      }
      toString() {
        let array = this;
        let headersPresent = this.options.head && this.options.head.length;
        if (headersPresent) {
          array = [this.options.head];
          if (this.length) {
            array.push.apply(array, this);
          }
        } else {
          this.options.style.head = [];
        }
        let cells = tableLayout.makeTableLayout(array);
        cells.forEach(function(row) {
          row.forEach(function(cell) {
            cell.mergeTableOptions(this.options, cells);
          }, this);
        }, this);
        tableLayout.computeWidths(this.options.colWidths, cells);
        tableLayout.computeHeights(this.options.rowHeights, cells);
        cells.forEach(function(row) {
          row.forEach(function(cell) {
            cell.init(this.options);
          }, this);
        }, this);
        let result = [];
        for (let rowIndex = 0; rowIndex < cells.length; rowIndex++) {
          let row = cells[rowIndex];
          let heightOfRow = this.options.rowHeights[rowIndex];
          if (rowIndex === 0 || !this.options.style.compact || rowIndex == 1 && headersPresent) {
            doDraw(row, "top", result);
          }
          for (let lineNum = 0; lineNum < heightOfRow; lineNum++) {
            doDraw(row, lineNum, result);
          }
          if (rowIndex + 1 == cells.length) {
            doDraw(row, "bottom", result);
          }
        }
        return result.join("\n");
      }
      get width() {
        let str = this.toString().split("\n");
        return str[0].length;
      }
    };
    Table2.reset = () => debug.reset();
    function doDraw(row, lineNum, result) {
      let line = [];
      row.forEach(function(cell) {
        line.push(cell.draw(lineNum));
      });
      let str = line.join("");
      if (str.length) result.push(str);
    }
    module.exports = Table2;
  }
});

// node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/index.js
var require_cli_table3 = __commonJS({
  "node_modules/.pnpm/cli-table3@0.6.5/node_modules/cli-table3/index.js"(exports, module) {
    module.exports = require_table();
  }
});

// src/parser/parse.ts
import { parse as pgParse } from "libpg-query";
async function parseMigration(sql) {
  try {
    const result = await pgParse(sql);
    const statements = result.stmts.map((s) => {
      const loc = s.stmt_location ?? 0;
      const len = s.stmt_len ?? sql.length - loc;
      return {
        stmt: s.stmt,
        stmtLocation: loc,
        stmtLen: len,
        originalSql: sql.slice(loc, loc + len).trim()
      };
    });
    return { statements, errors: [] };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      statements: [],
      errors: [{ message }]
    };
  }
}

// src/parser/extract.ts
function extractTargets(stmt) {
  const targets = [];
  if (hasKey(stmt, "AlterTableStmt")) {
    const alter = stmt.AlterTableStmt;
    const tableName = alter.relation?.relname;
    const schemaName = alter.relation?.schemaname;
    if (tableName) {
      const columns = extractColumnsFromAlter(alter);
      targets.push({ tableName, schemaName, columns, operation: "ALTER TABLE" });
    }
  }
  if (hasKey(stmt, "IndexStmt")) {
    const idx = stmt.IndexStmt;
    const tableName = idx.relation?.relname;
    const schemaName = idx.relation?.schemaname;
    if (tableName) {
      targets.push({
        tableName,
        schemaName,
        operation: idx.concurrent ? "CREATE INDEX CONCURRENTLY" : "CREATE INDEX"
      });
    }
  }
  if (hasKey(stmt, "CreateStmt")) {
    const create = stmt.CreateStmt;
    const tableName = create.relation?.relname;
    const schemaName = create.relation?.schemaname;
    if (tableName) {
      targets.push({ tableName, schemaName, operation: "CREATE TABLE" });
    }
  }
  if (hasKey(stmt, "DropStmt")) {
    const drop = stmt.DropStmt;
    if (drop.objects) {
      for (const obj of drop.objects) {
        const parts = extractNameFromDropObject(obj);
        if (parts) {
          targets.push({ ...parts, operation: "DROP" });
        }
      }
    }
  }
  if (hasKey(stmt, "VacuumStmt")) {
    const vacuum = stmt.VacuumStmt;
    if (vacuum.rels) {
      for (const rel of vacuum.rels) {
        const relation = rel.relation;
        if (relation?.relname) {
          targets.push({
            tableName: relation.relname,
            schemaName: relation.schemaname,
            operation: "VACUUM"
          });
        }
      }
    }
  }
  if (hasKey(stmt, "RefreshMatViewStmt")) {
    const refresh = stmt.RefreshMatViewStmt;
    const tableName = refresh.relation?.relname;
    const schemaName = refresh.relation?.schemaname;
    if (tableName) {
      targets.push({
        tableName,
        schemaName,
        operation: refresh.concurrent ? "REFRESH MATERIALIZED VIEW CONCURRENTLY" : "REFRESH MATERIALIZED VIEW"
      });
    }
  }
  if (hasKey(stmt, "TruncateStmt")) {
    const truncate2 = stmt.TruncateStmt;
    if (truncate2.relations) {
      for (const rel of truncate2.relations) {
        const tableName = rel.RangeVar?.relname ?? rel.relname;
        if (tableName) {
          targets.push({
            tableName,
            schemaName: rel.RangeVar?.schemaname ?? rel.schemaname,
            operation: "TRUNCATE"
          });
        }
      }
    }
  }
  return targets;
}
function hasKey(obj, key) {
  return key in obj && obj[key] != null;
}
function extractColumnsFromAlter(alter) {
  const columns = [];
  if (alter.cmds) {
    for (const cmd of alter.cmds) {
      const name = cmd.AlterTableCmd?.name;
      if (name) {
        columns.push(name);
        continue;
      }
      const def = cmd.AlterTableCmd?.def;
      const colname = def?.ColumnDef?.colname;
      if (colname) columns.push(colname);
    }
  }
  return columns;
}
function extractNameFromDropObject(obj) {
  if (Array.isArray(obj)) {
    const parts = obj.filter((item) => item != null && typeof item === "object" && "str" in item).map((item) => item.str);
    if (parts.length === 1 && parts[0]) return { tableName: parts[0] };
    if (parts.length === 2 && parts[0] && parts[1]) return { schemaName: parts[0], tableName: parts[1] };
  }
  if (obj && typeof obj === "object" && "List" in obj) {
    const list = obj.List;
    return extractNameFromDropObject(list.items);
  }
  return null;
}

// src/locks/classify.ts
var AT_AddColumn = "AT_AddColumn";
var AT_DropColumn = "AT_DropColumn";
var AT_AlterColumnType = "AT_AlterColumnType";
var AT_SetNotNull = "AT_SetNotNull";
var AT_AddConstraint = "AT_AddConstraint";
var AT_ValidateConstraint = "AT_ValidateConstraint";
var AT_DropConstraint = "AT_DropConstraint";
function classifyLock(stmt, pgVersion = 17) {
  if ("IndexStmt" in stmt) {
    const idx = stmt.IndexStmt;
    if (idx.concurrent) {
      return { lockType: "SHARE UPDATE EXCLUSIVE", blocksReads: false, blocksWrites: false, longHeld: false };
    }
    return { lockType: "SHARE", blocksReads: false, blocksWrites: true, longHeld: true };
  }
  if ("AlterTableStmt" in stmt) {
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds || alter.cmds.length === 0) {
      return defaultAccessExclusive();
    }
    let worstLock = { lockType: "ACCESS SHARE", blocksReads: false, blocksWrites: false, longHeld: false };
    for (const cmd of alter.cmds) {
      const sub = cmd.AlterTableCmd;
      const lock = classifyAlterSubcommand(sub.subtype, sub.def, pgVersion);
      if (lockSeverity(lock) > lockSeverity(worstLock)) {
        worstLock = lock;
      }
    }
    return worstLock;
  }
  if ("VacuumStmt" in stmt) {
    const vacuum = stmt.VacuumStmt;
    const isFull = vacuum.options?.some((opt) => opt.DefElem?.defname === "full");
    if (isFull) {
      return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: true };
    }
    return { lockType: "SHARE UPDATE EXCLUSIVE", blocksReads: false, blocksWrites: false, longHeld: false };
  }
  if ("VariableSetStmt" in stmt || "VariableShowStmt" in stmt) {
    return { lockType: "ACCESS SHARE", blocksReads: false, blocksWrites: false, longHeld: false };
  }
  if ("TransactionStmt" in stmt) {
    return { lockType: "ACCESS SHARE", blocksReads: false, blocksWrites: false, longHeld: false };
  }
  if ("CreateStmt" in stmt) {
    return { lockType: "ACCESS EXCLUSIVE", blocksReads: false, blocksWrites: false, longHeld: false };
  }
  if ("DropStmt" in stmt) {
    const drop = stmt.DropStmt;
    if (drop.concurrent) {
      return { lockType: "SHARE UPDATE EXCLUSIVE", blocksReads: false, blocksWrites: false, longHeld: false };
    }
    return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: false };
  }
  if ("ReindexStmt" in stmt) {
    const reindex = stmt.ReindexStmt;
    if (reindex.concurrent) {
      return { lockType: "SHARE UPDATE EXCLUSIVE", blocksReads: false, blocksWrites: false, longHeld: false };
    }
    return { lockType: "SHARE", blocksReads: false, blocksWrites: true, longHeld: true };
  }
  if ("ClusterStmt" in stmt) {
    return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: true };
  }
  if ("RefreshMatViewStmt" in stmt) {
    const refresh = stmt.RefreshMatViewStmt;
    if (refresh.concurrent) {
      return { lockType: "SHARE UPDATE EXCLUSIVE", blocksReads: false, blocksWrites: false, longHeld: false };
    }
    return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: true };
  }
  if ("TruncateStmt" in stmt) {
    return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: false };
  }
  if ("DropdbStmt" in stmt) {
    return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: false };
  }
  if ("CreateDomainStmt" in stmt || "AlterDomainStmt" in stmt) {
    return { lockType: "SHARE ROW EXCLUSIVE", blocksReads: false, blocksWrites: true, longHeld: false };
  }
  return defaultAccessExclusive();
}
function classifyAlterSubcommand(subtype, def, pgVersion) {
  switch (subtype) {
    case AT_AddColumn: {
      const hasDefault = def && hasColumnDefault(def);
      const isVolatile = hasDefault ? isVolatileDefault(def) : false;
      const longHeld = hasDefault ? pgVersion < 11 || isVolatile : false;
      return {
        lockType: "ACCESS EXCLUSIVE",
        blocksReads: true,
        blocksWrites: true,
        longHeld
      };
    }
    case AT_DropColumn:
      return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: false };
    case AT_AlterColumnType:
      return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: true };
    case AT_SetNotNull:
      return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: true };
    case AT_AddConstraint: {
      const isNotValid = def && isConstraintNotValid(def);
      if (isNotValid) {
        return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: false };
      }
      return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: true };
    }
    case AT_ValidateConstraint:
      return { lockType: "SHARE UPDATE EXCLUSIVE", blocksReads: false, blocksWrites: false, longHeld: false };
    case AT_DropConstraint:
      return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: false };
    default:
      return defaultAccessExclusive();
  }
}
function hasColumnDefault(def) {
  const colDef = def.ColumnDef;
  if (!colDef?.constraints) return false;
  return colDef.constraints.some((c) => c.Constraint?.contype === "CONSTR_DEFAULT");
}
function isVolatileDefault(def) {
  const json = JSON.stringify(def).toLowerCase();
  return /\b(now|random|nextval|clock_timestamp|statement_timestamp|timeofday|txid_current|gen_random_uuid|uuid_generate)\b/.test(json);
}
function isConstraintNotValid(def) {
  const constraint = def.Constraint;
  return constraint?.skip_validation === true;
}
function defaultAccessExclusive() {
  return { lockType: "ACCESS EXCLUSIVE", blocksReads: true, blocksWrites: true, longHeld: false };
}
function lockSeverity(lock) {
  const levels = {
    "ACCESS SHARE": 0,
    "ROW EXCLUSIVE": 1,
    "SHARE UPDATE EXCLUSIVE": 2,
    "SHARE": 3,
    "SHARE ROW EXCLUSIVE": 4,
    "ACCESS EXCLUSIVE": 5
  };
  const base = levels[lock.lockType];
  return lock.longHeld ? base + 10 : base;
}

// src/rules/MP001-concurrent-index.ts
var requireConcurrentIndex = {
  id: "MP001",
  name: "require-concurrent-index-creation",
  severity: "critical",
  description: "CREATE INDEX without CONCURRENTLY blocks all writes on the target table for the entire duration of index creation.",
  whyItMatters: "Without CONCURRENTLY, PostgreSQL takes an ACCESS EXCLUSIVE lock on the table, blocking all reads and writes for the entire duration of index creation. On tables with millions of rows, this can mean minutes of complete downtime.",
  docsUrl: "https://migrationpilot.dev/rules/mp001",
  check(stmt, ctx) {
    if (!("IndexStmt" in stmt)) return null;
    const idx = stmt.IndexStmt;
    if (idx.concurrent) return null;
    const tableName = idx.relation?.relname ?? "unknown";
    const indexName = idx.idxname ?? "";
    const safeAlternative = ctx.originalSql.replace(/CREATE\s+INDEX/i, "CREATE INDEX CONCURRENTLY").replace(/^\s*BEGIN\s*;?\s*/i, "-- NOTE: CONCURRENTLY cannot run inside a transaction block\n");
    return {
      ruleId: "MP001",
      ruleName: "require-concurrent-index-creation",
      severity: "critical",
      message: `CREATE INDEX${indexName ? ` "${indexName}"` : ""} without CONCURRENTLY will lock all writes on "${tableName}" for the entire duration of index creation.`,
      line: ctx.line,
      safeAlternative
    };
  }
};

// src/rules/MP002-check-not-null.ts
var AT_SetNotNull2 = "AT_SetNotNull";
var requireCheckNotNull = {
  id: "MP002",
  name: "require-check-not-null-pattern",
  severity: "critical",
  description: "ALTER TABLE ... SET NOT NULL requires a full table scan to validate. Use the CHECK constraint pattern instead for large tables.",
  whyItMatters: "SET NOT NULL requires a full table scan while holding an ACCESS EXCLUSIVE lock. The CHECK constraint + VALIDATE pattern splits this into a brief lock for adding the constraint and a longer scan under a weaker lock that allows reads and writes.",
  docsUrl: "https://migrationpilot.dev/rules/mp002",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_SetNotNull2) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const columnName = cmd.AlterTableCmd.name ?? "unknown";
      const hasCheck = hasPrecedingCheckConstraint(ctx, tableName, columnName);
      if (hasCheck && ctx.pgVersion >= 12) continue;
      const safeAlternative = generateSafeNotNull(tableName, columnName, ctx.pgVersion);
      return {
        ruleId: "MP002",
        ruleName: "require-check-not-null-pattern",
        severity: "critical",
        message: `SET NOT NULL on "${tableName}"."${columnName}" requires a full table scan under ACCESS EXCLUSIVE lock. Use the CHECK constraint pattern for zero-downtime.`,
        line: ctx.line,
        safeAlternative
      };
    }
    return null;
  }
};
function hasPrecedingCheckConstraint(ctx, tableName, columnName) {
  for (let i = 0; i < ctx.statementIndex; i++) {
    const entry = ctx.allStatements[i];
    if (!entry) continue;
    const prevStmt = entry.stmt;
    if (!("AlterTableStmt" in prevStmt)) continue;
    const alter = prevStmt.AlterTableStmt;
    if (alter.relation?.relname !== tableName) continue;
    if (!alter.cmds) continue;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== "AT_AddConstraint") continue;
      const constraint = cmd.AlterTableCmd.def?.Constraint;
      if (!constraint) continue;
      const exprStr = JSON.stringify(constraint.raw_expr ?? "").toLowerCase();
      if (constraint.contype === "CONSTR_CHECK" && exprStr.includes(columnName.toLowerCase())) {
        return true;
      }
    }
  }
  return false;
}
function generateSafeNotNull(tableName, columnName, pgVersion) {
  if (pgVersion >= 18) {
    return `-- PG 18+ approach: SET NOT NULL NOT VALID + VALIDATE NOT NULL
-- Step 1: Mark column NOT NULL without scanning (instant, brief lock)
ALTER TABLE ${tableName} ALTER COLUMN ${columnName} SET NOT NULL NOT VALID;

-- Step 2: Validate separately (SHARE UPDATE EXCLUSIVE \u2014 allows reads + writes)
ALTER TABLE ${tableName} VALIDATE NOT NULL ${columnName};`;
  }
  return `-- Step 1: Add CHECK constraint (brief ACCESS EXCLUSIVE lock, no table scan)
ALTER TABLE ${tableName} ADD CONSTRAINT ${tableName}_${columnName}_not_null
  CHECK (${columnName} IS NOT NULL) NOT VALID;

-- Step 2: Validate constraint (SHARE UPDATE EXCLUSIVE \u2014 allows reads + writes)
ALTER TABLE ${tableName} VALIDATE CONSTRAINT ${tableName}_${columnName}_not_null;

-- Step 3: Set NOT NULL using validated constraint (PG 12+, instant \u2014 uses existing CHECK)
ALTER TABLE ${tableName} ALTER COLUMN ${columnName} SET NOT NULL;

-- Step 4: Clean up the CHECK constraint
ALTER TABLE ${tableName} DROP CONSTRAINT ${tableName}_${columnName}_not_null;`;
}

// src/rules/MP003-volatile-default.ts
var AT_AddColumn2 = "AT_AddColumn";
var VOLATILE_FUNCTIONS = [
  "now",
  "random",
  "nextval",
  "clock_timestamp",
  "statement_timestamp",
  "timeofday",
  "txid_current",
  "gen_random_uuid",
  "uuid_generate_v4",
  "uuid_generate_v1"
];
var volatileDefaultRewrite = {
  id: "MP003",
  name: "volatile-default-table-rewrite",
  severity: "critical",
  description: "ADD COLUMN with a volatile DEFAULT (e.g., now(), random()) causes a full table rewrite on PG < 11, and still evaluates per-row on PG 11+.",
  whyItMatters: "On PostgreSQL 10 and earlier, a volatile default triggers a full table rewrite under ACCESS EXCLUSIVE lock. Even on PG 11+, volatile defaults evaluate per-row at read time, which can cause unexpected behavior for existing rows.",
  docsUrl: "https://migrationpilot.dev/rules/mp003",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_AddColumn2) continue;
      if (!cmd.AlterTableCmd.def) continue;
      const defJson = JSON.stringify(cmd.AlterTableCmd.def).toLowerCase();
      const hasDefault = defJson.includes("constr_default");
      if (!hasDefault) continue;
      const volatileMatch = VOLATILE_FUNCTIONS.find((fn) => defJson.includes(fn));
      if (!volatileMatch) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      if (ctx.pgVersion < 11) {
        return {
          ruleId: "MP003",
          ruleName: "volatile-default-table-rewrite",
          severity: "critical",
          message: `ADD COLUMN with volatile default "${volatileMatch}()" on "${tableName}" causes a full table rewrite on PostgreSQL ${ctx.pgVersion}. This locks the table under ACCESS EXCLUSIVE for the entire rewrite duration.`,
          line: ctx.line,
          safeAlternative: `-- Add column without default, then backfill in batches:
ALTER TABLE ${tableName} ADD COLUMN new_column <type>;
-- Backfill in batches of 10,000:
UPDATE ${tableName} SET new_column = ${volatileMatch}() WHERE id IN (SELECT id FROM ${tableName} WHERE new_column IS NULL LIMIT 10000);`
        };
      }
      return {
        ruleId: "MP003",
        ruleName: "volatile-default-table-rewrite",
        severity: "warning",
        message: `ADD COLUMN with volatile default "${volatileMatch}()" on "${tableName}". On PG ${ctx.pgVersion}, this evaluates per-row at read time (no rewrite), but may cause unexpected behavior for existing rows.`,
        line: ctx.line,
        safeAlternative: `-- PG ${ctx.pgVersion}: No table rewrite, but volatile defaults evaluate per-row on read.
-- If you need a fixed value for existing rows, add column without default then backfill:
ALTER TABLE ${tableName} ADD COLUMN new_column <type>;
UPDATE ${tableName} SET new_column = ${volatileMatch}() WHERE new_column IS NULL;
ALTER TABLE ${tableName} ALTER COLUMN new_column SET DEFAULT ${volatileMatch}();`
      };
    }
    return null;
  }
};

// src/rules/MP004-lock-timeout.ts
var requireLockTimeout = {
  id: "MP004",
  name: "require-lock-timeout",
  severity: "critical",
  description: "DDL operations should set lock_timeout to prevent blocking the lock queue indefinitely.",
  whyItMatters: "Without lock_timeout, if the table is locked by another query, your DDL waits indefinitely. All subsequent queries pile up behind it in the lock queue, causing cascading timeouts across your application. GoCardless enforces a 750ms lock_timeout for this reason.",
  docsUrl: "https://migrationpilot.dev/rules/mp004",
  check(stmt, ctx) {
    if (ctx.lock.lockType !== "ACCESS EXCLUSIVE" && ctx.lock.lockType !== "SHARE") {
      return null;
    }
    if ("VariableSetStmt" in stmt) return null;
    if ("VariableShowStmt" in stmt) return null;
    if ("TransactionStmt" in stmt) return null;
    if ("CreateStmt" in stmt) return null;
    const hasLockTimeout = hasPrecedingLockTimeout(ctx);
    if (hasLockTimeout) return null;
    return {
      ruleId: "MP004",
      ruleName: "require-lock-timeout",
      severity: "critical",
      message: `DDL statement acquires ${ctx.lock.lockType} lock without a preceding SET lock_timeout. Without a timeout, this statement could block the lock queue indefinitely if it can't acquire the lock, causing cascading query failures.`,
      line: ctx.line,
      safeAlternative: `-- Set a timeout so DDL fails fast instead of blocking the queue
SET lock_timeout = '5s';
${ctx.originalSql}
RESET lock_timeout;`
    };
  }
};
function hasPrecedingLockTimeout(ctx) {
  for (let i = 0; i < ctx.statementIndex; i++) {
    const entry = ctx.allStatements[i];
    if (!entry) continue;
    const prevStmt = entry.stmt;
    if ("VariableSetStmt" in prevStmt) {
      const varSet = prevStmt.VariableSetStmt;
      if (varSet.name === "lock_timeout") return true;
    }
    const sql = entry.originalSql.toLowerCase();
    if (sql.includes("lock_timeout")) return true;
  }
  return false;
}

// src/rules/MP005-not-valid-fk.ts
var AT_AddConstraint2 = "AT_AddConstraint";
var requireNotValidFK = {
  id: "MP005",
  name: "require-not-valid-foreign-key",
  severity: "critical",
  description: "Adding a FK constraint without NOT VALID scans the entire table under ACCESS EXCLUSIVE lock.",
  whyItMatters: "Adding a foreign key validates all existing rows while holding an ACCESS EXCLUSIVE lock. NOT VALID skips validation during creation, then VALIDATE CONSTRAINT checks rows with a SHARE UPDATE EXCLUSIVE lock that allows reads and writes.",
  docsUrl: "https://migrationpilot.dev/rules/mp005",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_AddConstraint2) continue;
      const constraint = cmd.AlterTableCmd.def?.Constraint;
      if (!constraint) continue;
      if (constraint.contype !== "CONSTR_FOREIGN") continue;
      if (constraint.skip_validation) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const constraintName = constraint.conname ?? "unnamed_fk";
      const refTable = constraint.pktable?.relname ?? "unknown";
      return {
        ruleId: "MP005",
        ruleName: "require-not-valid-foreign-key",
        severity: "critical",
        message: `FK constraint "${constraintName}" on "${tableName}" \u2192 "${refTable}" without NOT VALID. This scans the entire table under ACCESS EXCLUSIVE lock, blocking all reads and writes.`,
        line: ctx.line,
        safeAlternative: `-- Step 1: Add FK with NOT VALID (brief lock, no scan)
ALTER TABLE ${tableName} ADD CONSTRAINT ${constraintName}
  FOREIGN KEY (...) REFERENCES ${refTable} (...) NOT VALID;

-- Step 2: Validate separately (SHARE UPDATE EXCLUSIVE \u2014 allows reads + writes)
ALTER TABLE ${tableName} VALIDATE CONSTRAINT ${constraintName};`
      };
    }
    return null;
  }
};

// src/rules/MP006-vacuum-full.ts
var noVacuumFull = {
  id: "MP006",
  name: "no-vacuum-full",
  severity: "critical",
  description: "VACUUM FULL rewrites the entire table under ACCESS EXCLUSIVE lock, blocking all reads and writes.",
  whyItMatters: "VACUUM FULL rewrites the entire table to a new file, holding an ACCESS EXCLUSIVE lock for the full duration. On large tables this can take hours. Use regular VACUUM or pg_repack for online table compaction instead.",
  docsUrl: "https://migrationpilot.dev/rules/mp006",
  check(stmt, ctx) {
    if (!("VacuumStmt" in stmt)) return null;
    const vacuum = stmt.VacuumStmt;
    const isFull = vacuum.options?.some((opt) => opt.DefElem?.defname === "full");
    if (!isFull) return null;
    const tableName = vacuum.rels?.[0]?.VacuumRelation?.relation?.relname ?? "unknown";
    return {
      ruleId: "MP006",
      ruleName: "no-vacuum-full",
      severity: "critical",
      message: `VACUUM FULL on "${tableName}" rewrites the entire table under ACCESS EXCLUSIVE lock. This blocks ALL reads and writes for the entire duration.`,
      line: ctx.line,
      safeAlternative: `-- Use pg_repack instead (no ACCESS EXCLUSIVE lock during rewrite):
-- Install: CREATE EXTENSION pg_repack;
-- Run: pg_repack --table ${tableName} --no-superuser-check`
    };
  }
};

// src/rules/MP007-column-type-change.ts
var AT_AlterColumnType2 = "AT_AlterColumnType";
var noColumnTypeChange = {
  id: "MP007",
  name: "no-column-type-change",
  severity: "critical",
  description: "ALTER COLUMN TYPE rewrites the entire table under ACCESS EXCLUSIVE lock. Use the expand-contract pattern instead.",
  whyItMatters: "Changing a column type rewrites every row in the table while holding an ACCESS EXCLUSIVE lock that blocks all reads and writes. On large tables this can take hours, causing extended downtime.",
  docsUrl: "https://migrationpilot.dev/rules/mp007",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_AlterColumnType2) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const columnName = cmd.AlterTableCmd.name ?? "unknown";
      return {
        ruleId: "MP007",
        ruleName: "no-column-type-change",
        severity: "critical",
        message: `ALTER COLUMN TYPE on "${tableName}"."${columnName}" rewrites the entire table under ACCESS EXCLUSIVE lock, blocking all reads and writes.`,
        line: ctx.line,
        safeAlternative: `-- Use the expand-contract pattern:
-- Step 1: Add new column with desired type
ALTER TABLE ${tableName} ADD COLUMN ${columnName}_new <new_type>;

-- Step 2: Backfill in batches
UPDATE ${tableName} SET ${columnName}_new = ${columnName}::<new_type>
  WHERE id IN (SELECT id FROM ${tableName} WHERE ${columnName}_new IS NULL LIMIT 10000);

-- Step 3: Create trigger to sync writes (during backfill)
-- Step 4: Swap columns (brief lock)
-- Step 5: Drop old column`
      };
    }
    return null;
  }
};

// src/rules/helpers.ts
function isInsideTransaction(ctx) {
  for (let i = ctx.statementIndex - 1; i >= 0; i--) {
    const entry = ctx.allStatements[i];
    if (!entry) continue;
    const sql = entry.originalSql.toLowerCase().trim();
    if (sql === "begin" || sql === "begin transaction" || sql.startsWith("begin;")) return true;
    if (sql === "commit" || sql === "rollback" || sql.startsWith("commit;")) return false;
  }
  return false;
}
function isDDL(stmt) {
  const ddlKeys = [
    "AlterTableStmt",
    "IndexStmt",
    "CreateStmt",
    "DropStmt",
    "RenameStmt",
    "VacuumStmt",
    "ClusterStmt",
    "ReindexStmt",
    "RefreshMatViewStmt",
    "TruncateStmt",
    "DropdbStmt",
    "CreateDomainStmt",
    "AlterDomainStmt"
  ];
  return ddlKeys.some((key) => key in stmt);
}

// src/rules/MP008-multi-ddl-transaction.ts
var noMultiDdlTransaction = {
  id: "MP008",
  name: "no-multi-ddl-transaction",
  severity: "critical",
  description: "Multiple DDL statements in a single transaction compound lock duration. Each DDL should run in its own transaction.",
  whyItMatters: "When multiple DDL statements run in one transaction, all locks are held until COMMIT. This multiplies the downtime window \u2014 the total lock time is the sum of all DDL operations, not just the longest one.",
  docsUrl: "https://migrationpilot.dev/rules/mp008",
  check(stmt, ctx) {
    if (ctx.statementIndex === 0) return null;
    if (!isInsideTransaction(ctx)) return null;
    if (!isDDL(stmt)) return null;
    const prevDDLIndex = findPrecedingDDLInTransaction(ctx);
    if (prevDDLIndex === -1) return null;
    return {
      ruleId: "MP008",
      ruleName: "no-multi-ddl-transaction",
      severity: "critical",
      message: `Multiple DDL statements in a single transaction. Locks are held for the ENTIRE transaction \u2014 the combined duration of all DDL operations. Run each DDL in its own transaction.`,
      line: ctx.line
    };
  }
};
function findPrecedingDDLInTransaction(ctx) {
  for (let i = ctx.statementIndex - 1; i >= 0; i--) {
    const entry = ctx.allStatements[i];
    if (!entry) continue;
    const sql = entry.originalSql.toLowerCase().trim();
    if (sql === "begin" || sql === "begin transaction") return -1;
    if (isDDL(entry.stmt)) return i;
  }
  return -1;
}

// src/rules/MP009-drop-index-concurrently.ts
var requireDropIndexConcurrently = {
  id: "MP009",
  name: "require-drop-index-concurrently",
  severity: "warning",
  description: "DROP INDEX without CONCURRENTLY acquires ACCESS EXCLUSIVE lock, blocking all reads and writes.",
  whyItMatters: "DROP INDEX without CONCURRENTLY takes an ACCESS EXCLUSIVE lock on the table, blocking all reads and writes until the index is fully dropped. DROP INDEX CONCURRENTLY avoids this by using a multi-phase approach.",
  docsUrl: "https://migrationpilot.dev/rules/mp009",
  check(stmt, ctx) {
    if (!("DropStmt" in stmt)) return null;
    const drop = stmt.DropStmt;
    if (drop.removeType !== "OBJECT_INDEX") return null;
    if (drop.concurrent) return null;
    const indexName = extractIndexName(drop.objects);
    return {
      ruleId: "MP009",
      ruleName: "require-drop-index-concurrently",
      severity: "warning",
      message: `DROP INDEX${indexName ? ` "${indexName}"` : ""} without CONCURRENTLY acquires ACCESS EXCLUSIVE lock, blocking all reads and writes on the table.`,
      line: ctx.line,
      safeAlternative: ctx.originalSql.replace(/DROP\s+INDEX/i, "DROP INDEX CONCURRENTLY")
    };
  }
};
function extractIndexName(objects) {
  if (!objects || objects.length === 0) return null;
  const obj = objects[0];
  if (obj && typeof obj === "object" && "List" in obj) {
    const list = obj.List;
    const parts = list.items?.filter((i) => i.String?.sval).map((i) => i.String.sval);
    return parts?.join(".") ?? null;
  }
  return null;
}

// src/rules/MP010-rename-column.ts
var noRenameColumn = {
  id: "MP010",
  name: "no-rename-column",
  severity: "warning",
  description: "RENAME COLUMN breaks application queries referencing the old column name. Prefer adding a new column and migrating data.",
  whyItMatters: "Renaming a column takes an ACCESS EXCLUSIVE lock and instantly breaks every application query, view, and function referencing the old name. Use the expand-contract pattern: add a new column, migrate data, update code, then drop the old column.",
  docsUrl: "https://migrationpilot.dev/rules/mp010",
  check(stmt, ctx) {
    if (!("RenameStmt" in stmt)) return null;
    const rename = stmt.RenameStmt;
    if (rename.renameType !== "OBJECT_COLUMN") return null;
    const tableName = rename.relation?.relname ?? "unknown";
    const oldName = rename.subname ?? "unknown";
    const newName = rename.newname ?? "unknown";
    return {
      ruleId: "MP010",
      ruleName: "no-rename-column",
      severity: "warning",
      message: `Renaming column "${oldName}" to "${newName}" on "${tableName}" will break any application queries or views referencing the old column name.`,
      line: ctx.line,
      safeAlternative: `-- Step 1: Add new column
ALTER TABLE ${tableName} ADD COLUMN ${newName} <same_type>;

-- Step 2: Backfill data (in batches for large tables)
UPDATE ${tableName} SET ${newName} = ${oldName} WHERE ${newName} IS NULL;

-- Step 3: Update application code to use "${newName}"
-- Step 4: Stop writing to "${oldName}"
-- Step 5: Drop old column (after verifying no reads)
ALTER TABLE ${tableName} DROP COLUMN ${oldName};`
    };
  }
};

// src/rules/MP011-unbatched-backfill.ts
var unbatchedBackfill = {
  id: "MP011",
  name: "unbatched-data-backfill",
  severity: "warning",
  description: "UPDATE without a WHERE clause or LIMIT pattern rewrites the entire table in a single transaction, generating massive WAL and holding locks.",
  whyItMatters: "A full-table UPDATE generates massive WAL, bloats the table, and holds a ROW EXCLUSIVE lock for the entire duration. On tables with millions of rows, this can take hours and cause replication lag, disk pressure, and degraded performance.",
  docsUrl: "https://migrationpilot.dev/rules/mp011",
  check(stmt, ctx) {
    if (!("UpdateStmt" in stmt)) return null;
    const update = stmt.UpdateStmt;
    if (update.whereClause) return null;
    const tableName = update.relation?.relname ?? "unknown";
    return {
      ruleId: "MP011",
      ruleName: "unbatched-data-backfill",
      severity: "warning",
      message: `UPDATE on "${tableName}" without a WHERE clause rewrites every row in a single transaction. For large tables, this generates massive WAL, can bloat the table, and holds ROW EXCLUSIVE lock for the entire duration.`,
      line: ctx.line,
      safeAlternative: `-- Backfill in batches to reduce lock duration and WAL volume:
DO $$
DECLARE
  batch_size INT := 10000;
  rows_updated INT;
BEGIN
  LOOP
    UPDATE ${tableName}
    SET <column> = <value>
    WHERE <column> IS NULL  -- or your condition
    AND ctid IN (
      SELECT ctid FROM ${tableName}
      WHERE <column> IS NULL
      LIMIT batch_size
      FOR UPDATE SKIP LOCKED
    );
    GET DIAGNOSTICS rows_updated = ROW_COUNT;
    EXIT WHEN rows_updated = 0;
    COMMIT;
    PERFORM pg_sleep(0.1);  -- Brief pause to let other queries through
  END LOOP;
END $$;`
    };
  }
};

// src/rules/MP012-enum-add-value.ts
var noEnumAddInTransaction = {
  id: "MP012",
  name: "no-enum-add-value-in-transaction",
  severity: "warning",
  description: "ALTER TYPE ... ADD VALUE cannot run inside a transaction block on PG < 12. Even on PG 12+, enum modifications take ACCESS EXCLUSIVE on the type.",
  whyItMatters: "On PostgreSQL versions before 12, ALTER TYPE ADD VALUE inside a transaction raises a runtime error, failing your migration entirely. On PG 12+ it works but takes an ACCESS EXCLUSIVE lock on the type, which can block concurrent queries.",
  docsUrl: "https://migrationpilot.dev/rules/mp012",
  check(stmt, ctx) {
    if (!("AlterEnumStmt" in stmt)) return null;
    const alterEnum = stmt.AlterEnumStmt;
    const inTransaction = isInsideTransaction(ctx);
    const typeName = alterEnum.typeName?.filter((t) => t.String?.sval).map((t) => t.String.sval).join(".") ?? "unknown";
    const newValue = alterEnum.newVal ?? "unknown";
    if (inTransaction && ctx.pgVersion < 12) {
      return {
        ruleId: "MP012",
        ruleName: "no-enum-add-value-in-transaction",
        severity: "warning",
        message: `ALTER TYPE "${typeName}" ADD VALUE '${newValue}' inside a transaction block will fail on PostgreSQL ${ctx.pgVersion}. This is only supported in PG 12+.`,
        line: ctx.line,
        safeAlternative: `-- Run outside a transaction block:
ALTER TYPE ${typeName} ADD VALUE '${newValue}';`
      };
    }
    if (inTransaction && ctx.pgVersion >= 12) {
      return {
        ruleId: "MP012",
        ruleName: "no-enum-add-value-in-transaction",
        severity: "warning",
        message: `ALTER TYPE "${typeName}" ADD VALUE '${newValue}' in a transaction. On PG 12+ this works but takes ACCESS EXCLUSIVE on the enum type. Consider running outside the transaction to minimize lock duration.`,
        line: ctx.line
      };
    }
    return null;
  }
};

// src/rules/MP013-high-traffic-ddl.ts
var HIGH_TRAFFIC_THRESHOLD = 1e4;
var highTrafficTableDDL = {
  id: "MP013",
  name: "high-traffic-table-ddl",
  severity: "warning",
  description: "DDL on a table with high query traffic. Lock acquisition may be slow and cause cascading timeouts.",
  whyItMatters: "Running DDL on tables with high query volume amplifies the blast radius. Even brief locks cause significant query queuing when thousands of queries per second hit the table, leading to cascading timeouts across dependent services.",
  docsUrl: "https://migrationpilot.dev/rules/mp013",
  check(stmt, ctx) {
    if (!ctx.affectedQueries || ctx.affectedQueries.length === 0) return null;
    if (!isDDL2(stmt)) return null;
    if (ctx.lock.lockType === "ACCESS SHARE") return null;
    const totalCalls = ctx.affectedQueries.reduce((sum, q) => sum + q.calls, 0);
    if (totalCalls < HIGH_TRAFFIC_THRESHOLD) return null;
    const topQuery = ctx.affectedQueries[0];
    if (!topQuery) return null;
    const services = [...new Set(ctx.affectedQueries.map((q) => q.serviceName).filter(Boolean))];
    return {
      ruleId: "MP013",
      ruleName: "high-traffic-table-ddl",
      severity: "warning",
      message: `DDL acquires ${ctx.lock.lockType} lock on a table with ${totalCalls.toLocaleString()} queries${services.length > 0 ? ` from ${services.join(", ")}` : ""}. Top query: "${topQuery.normalizedQuery.slice(0, 60)}..." (${topQuery.calls.toLocaleString()} calls, ${topQuery.meanExecTime.toFixed(1)}ms avg).`,
      line: ctx.line,
      safeAlternative: `-- Set a short lock_timeout to fail fast instead of blocking queries:
SET lock_timeout = '3s';
${ctx.originalSql}
RESET lock_timeout;

-- Consider running during low-traffic hours.
-- If lock acquisition fails, retry with exponential backoff.`
    };
  }
};
function isDDL2(stmt) {
  const ddlKeys = [
    "AlterTableStmt",
    "IndexStmt",
    "CreateStmt",
    "DropStmt",
    "RenameStmt",
    "VacuumStmt",
    "ClusterStmt",
    "ReindexStmt"
  ];
  return ddlKeys.some((key) => key in stmt);
}

// src/rules/MP014-large-table-ddl.ts
var LARGE_TABLE_ROWS = 1e6;
var largeTableDDL = {
  id: "MP014",
  name: "large-table-ddl",
  severity: "warning",
  description: "DDL with long-held locks on a table with over 1M rows. Lock duration will scale with table size.",
  whyItMatters: "DDL operations on large tables take proportionally longer. Lock duration scales with row count and table size \u2014 what takes seconds on a small table can take minutes or hours on a table with millions of rows.",
  docsUrl: "https://migrationpilot.dev/rules/mp014",
  check(_stmt, ctx) {
    if (!ctx.tableStats) return null;
    if (!ctx.lock.longHeld) return null;
    if (ctx.tableStats.rowCount < LARGE_TABLE_ROWS) return null;
    const rows = ctx.tableStats.rowCount.toLocaleString();
    const size = formatBytes(ctx.tableStats.totalBytes);
    const indexes = ctx.tableStats.indexCount;
    return {
      ruleId: "MP014",
      ruleName: "large-table-ddl",
      severity: "warning",
      message: `Long-held ${ctx.lock.lockType} on a table with ${rows} rows (${size}, ${indexes} indexes). Lock duration will scale with table size${ctx.lock.blocksReads ? ", blocking ALL reads and writes" : ", blocking writes"}.`,
      line: ctx.line,
      safeAlternative: `-- For large tables, consider:
-- 1. Set a lock_timeout to fail fast:
SET lock_timeout = '5s';
${ctx.originalSql}
RESET lock_timeout;

-- 2. Run during maintenance windows
-- 3. If this is an index creation, ensure CONCURRENTLY is used
-- 4. For column additions with defaults, consider adding without default then backfilling`
    };
  }
};
function formatBytes(bytes) {
  if (bytes >= 1e12) return `${(bytes / 1e12).toFixed(1)} TB`;
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(1)} GB`;
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(1)} MB`;
  if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(1)} KB`;
  return `${bytes} B`;
}

// src/rules/MP015-add-column-with-default.ts
var noAddColumnSerial = {
  id: "MP015",
  name: "no-add-column-serial",
  severity: "warning",
  description: "ADD COLUMN with SERIAL/BIGSERIAL creates implicit sequence and may rewrite table.",
  whyItMatters: "SERIAL/BIGSERIAL creates an implicit sequence and DEFAULT, which on PG versions before 11 causes a full table rewrite. Use GENERATED ALWAYS AS IDENTITY or manually create the sequence to avoid the rewrite.",
  docsUrl: "https://migrationpilot.dev/rules/mp015",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    const tableName = alter.relation?.relname || alter.relname || "unknown";
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      const atCmd = cmd.AlterTableCmd;
      if (!atCmd || atCmd.subtype !== "AT_AddColumn") continue;
      const colDef = atCmd.def?.ColumnDef;
      if (!colDef?.typeName?.names) continue;
      const typeNames = colDef.typeName.names.filter((n) => n.String?.sval).map((n) => n.String.sval.toLowerCase());
      const isSerial = typeNames.some(
        (t) => t === "serial" || t === "bigserial" || t === "smallserial" || t === "serial4" || t === "serial8" || t === "serial2"
      );
      if (isSerial) {
        const typeName = typeNames.find((t) => t.startsWith("serial") || t.startsWith("bigserial") || t.startsWith("smallserial")) || "serial";
        const intType = typeName.includes("big") ? "bigint" : typeName.includes("small") ? "smallint" : "integer";
        return {
          ruleId: "MP015",
          ruleName: "no-add-column-serial",
          severity: "warning",
          message: `ADD COLUMN "${colDef.colname}" with ${typeName.toUpperCase()} on "${tableName}" creates an implicit sequence and may cause table rewrite.`,
          line: ctx.line,
          safeAlternative: ctx.pgVersion >= 10 ? `-- PG 10+: Use GENERATED ALWAYS AS IDENTITY instead of SERIAL:
ALTER TABLE ${tableName} ADD COLUMN ${colDef.colname} ${intType} GENERATED ALWAYS AS IDENTITY;` : `-- Step 1: Add column without default
ALTER TABLE ${tableName} ADD COLUMN ${colDef.colname} ${intType};
-- Step 2: Create sequence
CREATE SEQUENCE ${tableName}_${colDef.colname}_seq OWNED BY ${tableName}.${colDef.colname};
-- Step 3: Set default (non-blocking on PG 11+)
ALTER TABLE ${tableName} ALTER COLUMN ${colDef.colname} SET DEFAULT nextval('${tableName}_${colDef.colname}_seq');`
        };
      }
    }
    return null;
  }
};

// src/rules/MP016-require-fk-index.ts
var AT_AddConstraint3 = "AT_AddConstraint";
var requireFKIndex = {
  id: "MP016",
  name: "require-index-on-fk",
  severity: "warning",
  description: "Foreign key columns should have an index to avoid sequential scans on cascading updates/deletes.",
  whyItMatters: "Without an index on foreign key columns, PostgreSQL performs sequential scans during cascading deletes and updates. On large tables, this causes long-held SHARE locks on the parent table and severely degraded write performance.",
  docsUrl: "https://migrationpilot.dev/rules/mp016",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    const tableName = alter.relation?.relname || "unknown";
    for (const cmd of alter.cmds) {
      const atCmd = cmd.AlterTableCmd;
      if (atCmd.subtype !== AT_AddConstraint3) continue;
      const constraint = atCmd.def?.Constraint;
      if (!constraint || constraint.contype !== "CONSTR_FOREIGN") continue;
      const fkCols = constraint.fk_attrs?.filter((a) => a.String?.sval).map((a) => a.String.sval) ?? [];
      if (fkCols.length === 0) continue;
      const hasIndex = ctx.allStatements.some((s) => {
        if (!("IndexStmt" in s.stmt)) return false;
        const indexStmt = s.stmt.IndexStmt;
        if (indexStmt.relation?.relname !== tableName) return false;
        const indexedCols = indexStmt.indexParams?.map((p) => p.IndexElem?.name).filter(Boolean) ?? [];
        return fkCols.every((c) => indexedCols.includes(c));
      });
      if (hasIndex) continue;
      const colList = fkCols.join(", ");
      const constraintName = constraint.conname ?? "unnamed_fk";
      const refTable = constraint.pktable?.relname ?? "unknown";
      const indexName = `idx_${tableName}_${fkCols.join("_")}`;
      return {
        ruleId: "MP016",
        ruleName: "require-index-on-fk",
        severity: "warning",
        message: `FK constraint "${constraintName}" on "${tableName}"(${colList}) \u2192 "${refTable}" has no matching index. Without an index, cascading updates/deletes cause sequential scans.`,
        line: ctx.line,
        safeAlternative: `-- Create index on FK columns (CONCURRENTLY to avoid blocking)
CREATE INDEX CONCURRENTLY ${indexName} ON ${tableName} (${colList});`
      };
    }
    return null;
  }
};

// src/rules/MP017-no-drop-column.ts
var noDropColumn = {
  id: "MP017",
  name: "no-drop-column",
  severity: "warning",
  description: "DROP COLUMN takes ACCESS EXCLUSIVE lock and may break running application code.",
  whyItMatters: "DROP COLUMN takes an ACCESS EXCLUSIVE lock and instantly breaks any application code still selecting or inserting that column. Always remove all code references in a prior deploy before dropping the column.",
  docsUrl: "https://migrationpilot.dev/rules/mp017",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    const tableName = alter.relation?.relname || "unknown";
    for (const cmd of alter.cmds) {
      const atCmd = cmd.AlterTableCmd;
      if (!atCmd || atCmd.subtype !== "AT_DropColumn") continue;
      const columnName = atCmd.name || "unknown";
      return {
        ruleId: "MP017",
        ruleName: "no-drop-column",
        severity: "warning",
        message: `DROP COLUMN "${columnName}" on "${tableName}" takes ACCESS EXCLUSIVE lock. Running application code referencing this column will break immediately.`,
        line: ctx.line,
        safeAlternative: `-- Safe multi-deploy approach:
-- Deploy 1: Remove all application code references to "${columnName}"
-- Deploy 2: Drop the column with a short lock timeout
SET lock_timeout = '5s';
ALTER TABLE ${tableName} DROP COLUMN ${columnName};
RESET lock_timeout;`
      };
    }
    return null;
  }
};

// src/rules/MP018-no-force-not-null.ts
var noForceNotNull = {
  id: "MP018",
  name: "no-force-set-not-null",
  severity: "warning",
  description: "SET NOT NULL without a pre-existing CHECK constraint scans the entire table under ACCESS EXCLUSIVE lock.",
  whyItMatters: "SET NOT NULL scans every row to verify no NULLs while holding an ACCESS EXCLUSIVE lock. On PostgreSQL 12+, adding a CHECK (col IS NOT NULL) NOT VALID constraint first, validating it, then SET NOT NULL makes the final step instant.",
  docsUrl: "https://migrationpilot.dev/rules/mp018",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    const tableName = alter.relation?.relname || "unknown";
    for (const cmd of alter.cmds) {
      const atCmd = cmd.AlterTableCmd;
      if (!atCmd || atCmd.subtype !== "AT_SetNotNull") continue;
      if (ctx.pgVersion >= 12) {
        const colName = atCmd.name || "";
        const hasCheckConstraint = ctx.allStatements.some((s, idx) => {
          if (idx >= ctx.statementIndex) return false;
          if (!("AlterTableStmt" in s.stmt)) return false;
          const prevAlter = s.stmt.AlterTableStmt;
          if (prevAlter.relation?.relname !== tableName) return false;
          return prevAlter.cmds?.some((c) => {
            const pc = c.AlterTableCmd;
            if (!pc || pc.subtype !== "AT_AddConstraint") return false;
            const constraint = pc.def?.Constraint;
            if (!constraint || constraint.contype !== "CONSTR_CHECK") return false;
            const prevSql = s.originalSql.toLowerCase();
            return prevSql.includes(colName.toLowerCase()) && prevSql.includes("is not null");
          }) ?? false;
        });
        if (hasCheckConstraint) continue;
      }
      const columnName = atCmd.name || "unknown";
      return {
        ruleId: "MP018",
        ruleName: "no-force-set-not-null",
        severity: "warning",
        message: `SET NOT NULL on "${tableName}"."${columnName}" scans the entire table under ACCESS EXCLUSIVE lock to verify no NULLs.`,
        line: ctx.line,
        safeAlternative: ctx.pgVersion >= 18 ? `-- PG 18+ approach: SET NOT NULL NOT VALID + VALIDATE NOT NULL
-- Step 1: Mark column NOT NULL without scanning (instant, brief lock)
ALTER TABLE ${tableName} ALTER COLUMN ${columnName} SET NOT NULL NOT VALID;

-- Step 2: Validate separately (SHARE UPDATE EXCLUSIVE \u2014 allows reads + writes)
ALTER TABLE ${tableName} VALIDATE NOT NULL ${columnName};` : ctx.pgVersion >= 12 ? `-- PG 12+ safe approach:
-- Step 1: Add CHECK constraint NOT VALID (instant, no scan)
ALTER TABLE ${tableName} ADD CONSTRAINT ${tableName}_${columnName}_not_null
  CHECK (${columnName} IS NOT NULL) NOT VALID;

-- Step 2: Validate separately (SHARE UPDATE EXCLUSIVE \u2014 allows reads + writes)
ALTER TABLE ${tableName} VALIDATE CONSTRAINT ${tableName}_${columnName}_not_null;

-- Step 3: SET NOT NULL is now instant (PG sees the validated CHECK)
ALTER TABLE ${tableName} ALTER COLUMN ${columnName} SET NOT NULL;` : `-- Set a short lock_timeout to fail fast
SET lock_timeout = '5s';
ALTER TABLE ${tableName} ALTER COLUMN ${columnName} SET NOT NULL;
RESET lock_timeout;`
      };
    }
    return null;
  }
};

// src/rules/MP019-exclusive-lock-connections.ts
var HIGH_CONNECTIONS_THRESHOLD = 20;
var noExclusiveLockHighConnections = {
  id: "MP019",
  name: "no-exclusive-lock-high-connections",
  severity: "warning",
  description: "ACCESS EXCLUSIVE lock on a table with many active connections causes cascading timeouts.",
  whyItMatters: "Taking an ACCESS EXCLUSIVE lock when many connections are active means all those connections will queue waiting for the lock. This causes cascading timeouts, connection pool exhaustion, and can take down dependent services.",
  docsUrl: "https://migrationpilot.dev/rules/mp019",
  check(stmt, ctx) {
    if (ctx.activeConnections === void 0) return null;
    if (ctx.activeConnections < HIGH_CONNECTIONS_THRESHOLD) return null;
    if (ctx.lock.lockType !== "ACCESS EXCLUSIVE") return null;
    if ("CreateStmt" in stmt) return null;
    const tableName = getTableName(stmt);
    return {
      ruleId: "MP019",
      ruleName: "no-exclusive-lock-high-connections",
      severity: "warning",
      message: `ACCESS EXCLUSIVE lock on "${tableName}" while ${ctx.activeConnections} active connections exist. All ${ctx.activeConnections} connections will queue, causing cascading timeouts.`,
      line: ctx.line,
      safeAlternative: `-- Run during a low-traffic window and use a short lock_timeout:
SET lock_timeout = '3s';
${ctx.originalSql}
RESET lock_timeout;

-- If lock acquisition fails, retry with exponential backoff.
-- Consider: is there a non-locking alternative? (e.g., CONCURRENTLY for indexes)`
    };
  }
};
function getTableName(stmt) {
  if ("AlterTableStmt" in stmt) {
    const alter = stmt.AlterTableStmt;
    return alter.relation?.relname || "unknown";
  }
  if ("IndexStmt" in stmt) {
    const idx = stmt.IndexStmt;
    return idx.relation?.relname || "unknown";
  }
  if ("DropStmt" in stmt) {
    return "unknown";
  }
  if ("RenameStmt" in stmt) {
    const rename = stmt.RenameStmt;
    return rename.relation?.relname || "unknown";
  }
  return "unknown";
}

// src/rules/MP020-require-statement-timeout.ts
var requireStatementTimeout = {
  id: "MP020",
  name: "require-statement-timeout",
  severity: "warning",
  description: "Long-running DDL should have a statement_timeout to prevent holding locks indefinitely.",
  whyItMatters: "Without statement_timeout, a DDL operation that encounters unexpected conditions (bloated table, heavy WAL, slow I/O) can hold locks for hours, turning a routine migration into a full outage.",
  docsUrl: "https://migrationpilot.dev/rules/mp020",
  check(stmt, ctx) {
    if (!isLongRunningCandidate(stmt, ctx)) return null;
    const hasTimeout = hasPrecedingStatementTimeout(ctx);
    if (hasTimeout) return null;
    return {
      ruleId: "MP020",
      ruleName: "require-statement-timeout",
      severity: "warning",
      message: `Long-running DDL without a preceding SET statement_timeout. This operation could hold locks for an extended time if it runs longer than expected.`,
      line: ctx.line,
      safeAlternative: `-- Set a timeout so the operation is killed if it runs too long
SET statement_timeout = '30s';
${ctx.originalSql}
RESET statement_timeout;`
    };
  }
};
function isLongRunningCandidate(stmt, ctx) {
  if ("VacuumStmt" in stmt) {
    const vacuum = stmt.VacuumStmt;
    const isFull = vacuum.options?.some(
      (o) => o.DefElem?.defname === "full"
    );
    if (isFull) return true;
  }
  if ("ClusterStmt" in stmt) return true;
  if ("ReindexStmt" in stmt) return true;
  if ("IndexStmt" in stmt) {
    const idx = stmt.IndexStmt;
    if (!idx.concurrent) return true;
  }
  if ("AlterTableStmt" in stmt) {
    const alter = stmt.AlterTableStmt;
    const hasValidate = alter.cmds?.some(
      (c) => c.AlterTableCmd?.subtype === "AT_ValidateConstraint"
    );
    if (hasValidate) return true;
    const hasSetNotNull = alter.cmds?.some(
      (c) => c.AlterTableCmd?.subtype === "AT_SetNotNull"
    );
    if (hasSetNotNull) return true;
  }
  if (ctx.lock.lockType === "ACCESS EXCLUSIVE" || ctx.lock.lockType === "SHARE") {
    if ("AlterTableStmt" in stmt) {
      const alter = stmt.AlterTableStmt;
      const hasTypeChange = alter.cmds?.some(
        (c) => c.AlterTableCmd?.subtype === "AT_AlterColumnType"
      );
      if (hasTypeChange) return true;
    }
  }
  return false;
}
function hasPrecedingStatementTimeout(ctx) {
  for (let i = 0; i < ctx.statementIndex; i++) {
    const entry = ctx.allStatements[i];
    if (!entry) continue;
    const prevStmt = entry.stmt;
    if ("VariableSetStmt" in prevStmt) {
      const varSet = prevStmt.VariableSetStmt;
      if (varSet.name === "statement_timeout") return true;
    }
    const sql = entry.originalSql.toLowerCase();
    if (sql.includes("statement_timeout")) return true;
  }
  return false;
}

// src/rules/MP021-concurrent-reindex.ts
var requireConcurrentReindex = {
  id: "MP021",
  name: "require-concurrent-reindex",
  severity: "warning",
  description: "REINDEX without CONCURRENTLY acquires ACCESS EXCLUSIVE lock (table) or SHARE lock (index), blocking queries. Use REINDEX CONCURRENTLY on PG 12+.",
  whyItMatters: "REINDEX without CONCURRENTLY acquires ACCESS EXCLUSIVE (table) or SHARE (index) locks, blocking all queries for the duration. REINDEX CONCURRENTLY (PG 12+) builds the new index without blocking reads or writes.",
  docsUrl: "https://migrationpilot.dev/rules/mp021",
  check(stmt, ctx) {
    if (!("ReindexStmt" in stmt)) return null;
    const reindex = stmt.ReindexStmt;
    if (ctx.pgVersion < 12) return null;
    if (reindex.kind === "REINDEX_OBJECT_SYSTEM") return null;
    const isConcurrent = reindex.params?.some(
      (p) => p.DefElem?.defname === "concurrently"
    ) ?? false;
    if (isConcurrent) return null;
    const target = reindex.relation?.relname ?? reindex.name ?? "unknown";
    const kindLabel = reindex.kind?.replace("REINDEX_OBJECT_", "").toLowerCase() ?? "object";
    return {
      ruleId: "MP021",
      ruleName: "require-concurrent-reindex",
      severity: "warning",
      message: `REINDEX ${kindLabel.toUpperCase()} "${target}" without CONCURRENTLY blocks all writes (or reads for tables). On PostgreSQL ${ctx.pgVersion}, use REINDEX CONCURRENTLY instead.`,
      line: ctx.line,
      safeAlternative: ctx.originalSql.replace(
        /REINDEX\s+(TABLE|INDEX|SCHEMA|DATABASE)/i,
        "REINDEX $1 CONCURRENTLY"
      )
    };
  }
};

// src/rules/MP022-drop-cascade.ts
var noDropCascade = {
  id: "MP022",
  name: "no-drop-cascade",
  severity: "warning",
  description: "DROP ... CASCADE silently drops all dependent objects (views, foreign keys, policies). Always drop dependents explicitly.",
  whyItMatters: "CASCADE silently drops all dependent objects \u2014 views, foreign keys, policies, and triggers \u2014 without listing them. You may unintentionally destroy critical production objects that other services depend on.",
  docsUrl: "https://migrationpilot.dev/rules/mp022",
  check(stmt, ctx) {
    if (!("DropStmt" in stmt)) return null;
    const drop = stmt.DropStmt;
    if (drop.behavior !== "DROP_CASCADE") return null;
    const objectType = drop.removeType?.replace("OBJECT_", "").toLowerCase() ?? "object";
    const objectName = extractObjectName(drop);
    return {
      ruleId: "MP022",
      ruleName: "no-drop-cascade",
      severity: "warning",
      message: `DROP ${objectType.toUpperCase()}${objectName ? ` "${objectName}"` : ""} CASCADE will silently drop all dependent objects (views, foreign keys, policies, triggers). Drop dependents explicitly instead.`,
      line: ctx.line,
      safeAlternative: `-- First check dependent objects:
-- SELECT deptype, classid::regclass, objid, objsubid
--   FROM pg_depend
--   WHERE refobjid = '${objectName || "<object>"}'::regclass;
-- Then drop dependents explicitly before the target:
${ctx.originalSql.replace(/\s+CASCADE\s*;?\s*$/i, ";")}`
    };
  }
};
function extractObjectName(drop) {
  if (!drop.objects || drop.objects.length === 0) return null;
  const obj = drop.objects[0];
  if ("List" in obj) {
    const list = obj.List;
    const parts = list.items?.filter((i) => i.String?.sval).map((i) => i.String.sval);
    return parts?.join(".") ?? null;
  }
  if ("TypeName" in obj) {
    const tn = obj.TypeName;
    const parts = tn.names?.filter((n) => n.String?.sval).map((n) => n.String.sval);
    return parts?.join(".") ?? null;
  }
  return null;
}

// src/rules/MP023-require-if-not-exists.ts
var requireIfNotExists = {
  id: "MP023",
  name: "require-if-not-exists",
  severity: "warning",
  description: "CREATE TABLE/INDEX without IF NOT EXISTS will fail if the object already exists, making migrations non-idempotent.",
  whyItMatters: 'Without IF NOT EXISTS, re-running a migration fails with "relation already exists". Idempotent migrations are safer for retry and rollback scenarios, and required by many deployment pipelines.',
  docsUrl: "https://migrationpilot.dev/rules/mp023",
  check(stmt, ctx) {
    if ("CreateStmt" in stmt) {
      const create = stmt.CreateStmt;
      if (create.relation?.relpersistence === "t") return null;
      if (create.if_not_exists) return null;
      const tableName = create.relation?.relname ?? "unknown";
      return {
        ruleId: "MP023",
        ruleName: "require-if-not-exists",
        severity: "warning",
        message: `CREATE TABLE "${tableName}" without IF NOT EXISTS will fail if the table already exists. Use IF NOT EXISTS for idempotent migrations.`,
        line: ctx.line,
        safeAlternative: ctx.originalSql.replace(
          /CREATE\s+TABLE\s+/i,
          "CREATE TABLE IF NOT EXISTS "
        )
      };
    }
    if ("IndexStmt" in stmt) {
      const idx = stmt.IndexStmt;
      if (idx.if_not_exists) return null;
      const indexName = idx.idxname ?? "unknown";
      let safeAlt;
      if (idx.unique && idx.concurrent) {
        safeAlt = ctx.originalSql.replace(/CREATE\s+UNIQUE\s+INDEX\s+CONCURRENTLY\s+/i, "CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS ");
      } else if (idx.unique) {
        safeAlt = ctx.originalSql.replace(/CREATE\s+UNIQUE\s+INDEX\s+/i, "CREATE UNIQUE INDEX IF NOT EXISTS ");
      } else if (idx.concurrent) {
        safeAlt = ctx.originalSql.replace(/CREATE\s+INDEX\s+CONCURRENTLY\s+/i, "CREATE INDEX CONCURRENTLY IF NOT EXISTS ");
      } else {
        safeAlt = ctx.originalSql.replace(/CREATE\s+INDEX\s+/i, "CREATE INDEX IF NOT EXISTS ");
      }
      return {
        ruleId: "MP023",
        ruleName: "require-if-not-exists",
        severity: "warning",
        message: `CREATE INDEX "${indexName}" without IF NOT EXISTS will fail if the index already exists. Use IF NOT EXISTS for idempotent migrations.`,
        line: ctx.line,
        safeAlternative: safeAlt
      };
    }
    return null;
  }
};

// src/rules/MP024-no-enum-value-removal.ts
var noEnumValueRemoval = {
  id: "MP024",
  name: "no-enum-value-removal",
  severity: "warning",
  description: "DROP TYPE destroys the enum and all columns using it. PostgreSQL has no ALTER TYPE ... DROP VALUE \u2014 removing enum values requires a full type recreation.",
  whyItMatters: "Dropping an enum type destroys the type and fails if any columns reference it. PostgreSQL cannot remove individual enum values \u2014 you must recreate the type and migrate all columns, which requires an ACCESS EXCLUSIVE lock per table.",
  docsUrl: "https://migrationpilot.dev/rules/mp024",
  check(stmt, ctx) {
    if (!("DropStmt" in stmt)) return null;
    const drop = stmt.DropStmt;
    if (drop.removeType !== "OBJECT_TYPE") return null;
    const typeName = extractTypeName(drop.objects);
    return {
      ruleId: "MP024",
      ruleName: "no-enum-value-removal",
      severity: "warning",
      message: `DROP TYPE${typeName ? ` "${typeName}"` : ""} will destroy the type and fail if any columns use it. PostgreSQL cannot remove individual enum values \u2014 the type must be recreated.`,
      line: ctx.line,
      safeAlternative: `-- Safe enum recreation pattern:
-- 1. Create the new type:
--    CREATE TYPE ${typeName || "<type>"}_new AS ENUM ('value1', 'value2');
-- 2. Migrate columns (ACCESS EXCLUSIVE lock, rewrites table):
--    ALTER TABLE <table> ALTER COLUMN <col>
--      TYPE ${typeName || "<type>"}_new USING <col>::text::${typeName || "<type>"}_new;
-- 3. Drop the old type:
--    DROP TYPE ${typeName || "<type>"};
-- 4. Rename:
--    ALTER TYPE ${typeName || "<type>"}_new RENAME TO ${typeName || "<type>"};`
    };
  }
};
function extractTypeName(objects) {
  if (!objects || objects.length === 0) return null;
  const obj = objects[0];
  if ("TypeName" in obj) {
    const tn = obj.TypeName;
    const parts = tn.names?.filter((n) => n.String?.sval).map((n) => n.String.sval);
    return parts?.join(".") ?? null;
  }
  return null;
}

// src/rules/MP025-concurrent-in-transaction.ts
var banConcurrentInTransaction = {
  id: "MP025",
  name: "ban-concurrent-in-transaction",
  severity: "critical",
  description: "CONCURRENTLY operations (CREATE INDEX, DROP INDEX, REINDEX) cannot run inside a transaction block. PostgreSQL will raise an ERROR at runtime.",
  whyItMatters: "CONCURRENTLY operations cannot run inside a transaction block \u2014 PostgreSQL will raise a runtime ERROR, causing the entire migration to fail. Many migration frameworks wrap operations in transactions by default, making this a common trap.",
  docsUrl: "https://migrationpilot.dev/rules/mp025",
  check(stmt, ctx) {
    const isConcurrent = checkConcurrent(stmt);
    if (!isConcurrent) return null;
    if (!isInsideTransaction(ctx)) return null;
    return {
      ruleId: "MP025",
      ruleName: "ban-concurrent-in-transaction",
      severity: "critical",
      message: `CONCURRENTLY operations cannot run inside a transaction block. PostgreSQL will raise: "ERROR: CREATE INDEX CONCURRENTLY cannot run inside a transaction block". Remove the surrounding BEGIN/COMMIT.`,
      line: ctx.line,
      safeAlternative: `-- Remove the surrounding transaction block:
-- CONCURRENTLY operations manage their own locking.
${ctx.originalSql}`
    };
  }
};
function checkConcurrent(stmt) {
  if ("IndexStmt" in stmt) {
    const idx = stmt.IndexStmt;
    return idx.concurrent === true;
  }
  if ("DropStmt" in stmt) {
    const drop = stmt.DropStmt;
    return drop.concurrent === true;
  }
  if ("ReindexStmt" in stmt) {
    const reindex = stmt.ReindexStmt;
    return reindex.params?.some((p) => p.DefElem?.defname === "concurrently") ?? false;
  }
  return false;
}

// src/rules/MP026-ban-drop-table.ts
var banDropTable = {
  id: "MP026",
  name: "ban-drop-table",
  severity: "critical",
  description: "DROP TABLE permanently removes the table and all its data. Use with extreme caution in production.",
  whyItMatters: "DROP TABLE is irreversible \u2014 it permanently deletes the table, all rows, indexes, constraints, triggers, and policies. In production, this means instant data loss. Prefer renaming the table first, keeping it as a backup, then dropping later after confirming no dependencies.",
  docsUrl: "https://migrationpilot.dev/rules/mp026",
  check(stmt, ctx) {
    if (!("DropStmt" in stmt)) return null;
    const drop = stmt.DropStmt;
    if (drop.removeType !== "OBJECT_TABLE") return null;
    const tableName = extractTableName(drop);
    return {
      ruleId: "MP026",
      ruleName: "ban-drop-table",
      severity: "critical",
      message: `DROP TABLE "${tableName}" permanently removes the table and all its data. This is irreversible and takes an ACCESS EXCLUSIVE lock.`,
      line: ctx.line,
      safeAlternative: `-- Step 1: Rename the table (keeps data as backup)
ALTER TABLE ${tableName} RENAME TO ${tableName}_deprecated;

-- Step 2: After confirming no application depends on it, drop later
-- DROP TABLE ${tableName}_deprecated;`
    };
  }
};
function extractTableName(drop) {
  if (!drop.objects || drop.objects.length === 0) return "unknown";
  const obj = drop.objects[0];
  if ("List" in obj) {
    const list = obj.List;
    const parts = list.items?.filter((i) => i.String?.sval).map((i) => i.String.sval);
    return parts?.join(".") ?? "unknown";
  }
  return "unknown";
}

// src/rules/MP027-disallowed-unique-constraint.ts
var AT_AddConstraint4 = "AT_AddConstraint";
var disallowedUniqueConstraint = {
  id: "MP027",
  name: "disallowed-unique-constraint",
  severity: "critical",
  description: "Adding a UNIQUE constraint directly scans the entire table under ACCESS EXCLUSIVE lock. Create the index concurrently first, then add the constraint USING INDEX.",
  whyItMatters: "ALTER TABLE ADD CONSTRAINT UNIQUE builds a unique index while holding ACCESS EXCLUSIVE lock, blocking all reads and writes for the entire scan. Instead, create the unique index concurrently (non-blocking), then attach it as a constraint with USING INDEX.",
  docsUrl: "https://migrationpilot.dev/rules/mp027",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_AddConstraint4) continue;
      const constraint = cmd.AlterTableCmd.def?.Constraint;
      if (!constraint) continue;
      if (constraint.contype !== "CONSTR_UNIQUE") continue;
      if (constraint.indexname) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const constraintName = constraint.conname ?? "unnamed_unique";
      return {
        ruleId: "MP027",
        ruleName: "disallowed-unique-constraint",
        severity: "critical",
        message: `Adding UNIQUE constraint "${constraintName}" on "${tableName}" scans the entire table under ACCESS EXCLUSIVE lock. Create the index concurrently first, then use USING INDEX.`,
        line: ctx.line,
        safeAlternative: `-- Step 1: Create the unique index concurrently (non-blocking)
CREATE UNIQUE INDEX CONCURRENTLY ${constraintName}_idx ON ${tableName} (...);

-- Step 2: Add the constraint using the pre-built index (instant)
ALTER TABLE ${tableName} ADD CONSTRAINT ${constraintName} UNIQUE USING INDEX ${constraintName}_idx;`
      };
    }
    return null;
  }
};

// src/rules/MP028-no-rename-table.ts
var noRenameTable = {
  id: "MP028",
  name: "no-rename-table",
  severity: "warning",
  description: "Renaming a table breaks all application queries, views, and foreign keys referencing the old name.",
  whyItMatters: "Renaming a table takes an ACCESS EXCLUSIVE lock and instantly breaks every application query, view, function, foreign key, and trigger referencing the old name. Unlike renaming a column, there is no pg_attribute fallback. Use the create-copy-swap pattern for zero-downtime renames.",
  docsUrl: "https://migrationpilot.dev/rules/mp028",
  check(stmt, ctx) {
    if (!("RenameStmt" in stmt)) return null;
    const rename = stmt.RenameStmt;
    if (rename.renameType !== "OBJECT_TABLE") return null;
    const oldName = rename.relation?.relname ?? "unknown";
    const newName = rename.newname ?? "unknown";
    return {
      ruleId: "MP028",
      ruleName: "no-rename-table",
      severity: "warning",
      message: `Renaming table "${oldName}" to "${newName}" will break all application queries, views, and foreign keys referencing the old name.`,
      line: ctx.line,
      safeAlternative: `-- Step 1: Create a view with the old name pointing to the new table
-- (or use the expand-contract pattern):
-- CREATE VIEW ${oldName} AS SELECT * FROM ${newName};

-- Step 2: Update application code to use "${newName}"
-- Step 3: Drop the compatibility view after all code is updated
-- DROP VIEW ${oldName};`
    };
  }
};

// src/rules/MP029-ban-drop-not-null.ts
var AT_DropNotNull = "AT_DropNotNull";
var banDropNotNull = {
  id: "MP029",
  name: "ban-drop-not-null",
  severity: "warning",
  description: "Dropping NOT NULL allows NULL values in a previously non-nullable column. This may break application code that assumes the column is always populated.",
  whyItMatters: "Dropping a NOT NULL constraint allows NULL values to be inserted into a column that was previously guaranteed non-null. Application code, ORMs, and downstream systems may crash or return incorrect results when encountering unexpected NULLs.",
  docsUrl: "https://migrationpilot.dev/rules/mp029",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_DropNotNull) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const columnName = cmd.AlterTableCmd.name ?? "unknown";
      return {
        ruleId: "MP029",
        ruleName: "ban-drop-not-null",
        severity: "warning",
        message: `Dropping NOT NULL on "${tableName}"."${columnName}" allows NULL values. Application code that assumes this column is always populated may break.`,
        line: ctx.line,
        safeAlternative: `-- Verify that all application code handles NULL values for "${columnName}" before dropping NOT NULL.
-- Consider adding a default value instead:
-- ALTER TABLE ${tableName} ALTER COLUMN ${columnName} SET DEFAULT <value>;`
      };
    }
    return null;
  }
};

// src/rules/MP030-require-not-valid-check.ts
var AT_AddConstraint5 = "AT_AddConstraint";
var requireNotValidCheck = {
  id: "MP030",
  name: "require-not-valid-check",
  severity: "critical",
  description: "Adding a CHECK constraint without NOT VALID scans the entire table under ACCESS EXCLUSIVE lock. Add with NOT VALID first, then VALIDATE separately.",
  whyItMatters: "ALTER TABLE ADD CONSTRAINT CHECK validates all existing rows while holding an ACCESS EXCLUSIVE lock, blocking all reads and writes. NOT VALID skips the scan during creation (instant), then VALIDATE CONSTRAINT checks rows under a less restrictive lock that allows concurrent reads and writes.",
  docsUrl: "https://migrationpilot.dev/rules/mp030",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_AddConstraint5) continue;
      const constraint = cmd.AlterTableCmd.def?.Constraint;
      if (!constraint) continue;
      if (constraint.contype !== "CONSTR_CHECK") continue;
      if (constraint.skip_validation) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const constraintName = constraint.conname ?? "unnamed_check";
      return {
        ruleId: "MP030",
        ruleName: "require-not-valid-check",
        severity: "critical",
        message: `CHECK constraint "${constraintName}" on "${tableName}" without NOT VALID scans the entire table under ACCESS EXCLUSIVE lock, blocking all reads and writes.`,
        line: ctx.line,
        safeAlternative: `-- Step 1: Add CHECK with NOT VALID (instant, no scan)
ALTER TABLE ${tableName} ADD CONSTRAINT ${constraintName} CHECK (...) NOT VALID;

-- Step 2: Validate separately (SHARE UPDATE EXCLUSIVE \u2014 allows reads + writes)
ALTER TABLE ${tableName} VALIDATE CONSTRAINT ${constraintName};`
      };
    }
    return null;
  }
};

// src/rules/MP031-ban-exclusion-constraint.ts
var AT_AddConstraint6 = "AT_AddConstraint";
var banExclusionConstraint = {
  id: "MP031",
  name: "ban-exclusion-constraint",
  severity: "critical",
  description: "Adding an EXCLUSION constraint builds a GiST index and scans the entire table under ACCESS EXCLUSIVE lock. This cannot use NOT VALID.",
  whyItMatters: "EXCLUSION constraints require a GiST index, which is built inline while holding ACCESS EXCLUSIVE lock. Unlike CHECK or FK constraints, exclusion constraints have no NOT VALID option \u2014 the full table scan and index build happen atomically, blocking all reads and writes for the entire duration.",
  docsUrl: "https://migrationpilot.dev/rules/mp031",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_AddConstraint6) continue;
      const constraint = cmd.AlterTableCmd.def?.Constraint;
      if (!constraint) continue;
      if (constraint.contype !== "CONSTR_EXCLUSION") continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const constraintName = constraint.conname ?? "unnamed_exclusion";
      return {
        ruleId: "MP031",
        ruleName: "ban-exclusion-constraint",
        severity: "critical",
        message: `EXCLUSION constraint "${constraintName}" on "${tableName}" builds a GiST index under ACCESS EXCLUSIVE lock. This cannot use NOT VALID and blocks all reads and writes for the full scan.`,
        line: ctx.line,
        safeAlternative: `-- Exclusion constraints cannot be added without locking.
-- Consider these alternatives:
-- 1. Add during a maintenance window
-- 2. Create the table with the exclusion constraint from the start
-- 3. Use application-level uniqueness checking with advisory locks`
      };
    }
    return null;
  }
};

// src/rules/MP032-ban-cluster.ts
var banCluster = {
  id: "MP032",
  name: "ban-cluster",
  severity: "critical",
  description: "CLUSTER rewrites the entire table under ACCESS EXCLUSIVE lock to match an index ordering. Use pg_repack instead.",
  whyItMatters: "CLUSTER physically reorders all rows in the table to match an index, requiring a full table rewrite under ACCESS EXCLUSIVE lock. On large tables this can take hours, blocking all reads and writes. Use pg_repack for online table reorganization without blocking.",
  docsUrl: "https://migrationpilot.dev/rules/mp032",
  check(stmt, ctx) {
    if (!("ClusterStmt" in stmt)) return null;
    const cluster = stmt.ClusterStmt;
    const tableName = cluster.relation?.relname ?? "unknown";
    const indexName = cluster.indexname;
    return {
      ruleId: "MP032",
      ruleName: "ban-cluster",
      severity: "critical",
      message: `CLUSTER on "${tableName}"${indexName ? ` USING "${indexName}"` : ""} rewrites the entire table under ACCESS EXCLUSIVE lock. This blocks ALL reads and writes for the entire duration.`,
      line: ctx.line,
      safeAlternative: `-- Use pg_repack for online table reorganization (no ACCESS EXCLUSIVE lock):
-- Install: CREATE EXTENSION pg_repack;
-- Run: pg_repack --table ${tableName}${indexName ? ` --order-by ${indexName}` : ""} --no-superuser-check`
    };
  }
};

// src/rules/MP033-concurrent-refresh-matview.ts
var requireConcurrentRefreshMatview = {
  id: "MP033",
  name: "require-concurrent-refresh-matview",
  severity: "warning",
  description: "REFRESH MATERIALIZED VIEW without CONCURRENTLY takes ACCESS EXCLUSIVE lock, blocking all reads. Use CONCURRENTLY to allow reads during refresh.",
  whyItMatters: "REFRESH MATERIALIZED VIEW without CONCURRENTLY takes an ACCESS EXCLUSIVE lock for the entire refresh duration, blocking all queries against the view. REFRESH CONCURRENTLY allows reads to continue using the old data while the new data is being computed. Requires a UNIQUE index on the materialized view.",
  docsUrl: "https://migrationpilot.dev/rules/mp033",
  check(stmt, ctx) {
    if (!("RefreshMatViewStmt" in stmt)) return null;
    const refresh = stmt.RefreshMatViewStmt;
    if (refresh.concurrent) return null;
    if (refresh.skipData) return null;
    const viewName = refresh.relation?.relname ?? "unknown";
    return {
      ruleId: "MP033",
      ruleName: "require-concurrent-refresh-matview",
      severity: "warning",
      message: `REFRESH MATERIALIZED VIEW "${viewName}" without CONCURRENTLY takes ACCESS EXCLUSIVE lock, blocking all reads for the entire refresh duration.`,
      line: ctx.line,
      safeAlternative: `-- Use CONCURRENTLY to allow reads during refresh (requires a UNIQUE index):
REFRESH MATERIALIZED VIEW CONCURRENTLY ${viewName};`
    };
  }
};

// src/rules/MP034-ban-drop-database.ts
var banDropDatabase = {
  id: "MP034",
  name: "ban-drop-database",
  severity: "critical",
  description: "DROP DATABASE permanently destroys the entire database. This should never appear in a migration file.",
  whyItMatters: "DROP DATABASE permanently and irreversibly destroys the entire database including all tables, data, indexes, and extensions. If this statement appears in a migration file, it almost certainly indicates an error. There is no undo.",
  docsUrl: "https://migrationpilot.dev/rules/mp034",
  check(stmt, ctx) {
    if (!("DropdbStmt" in stmt)) return null;
    const dropdb = stmt.DropdbStmt;
    const dbName = dropdb.dbname ?? "unknown";
    return {
      ruleId: "MP034",
      ruleName: "ban-drop-database",
      severity: "critical",
      message: `DROP DATABASE "${dbName}" permanently destroys the entire database. This should never appear in a migration file.`,
      line: ctx.line,
      safeAlternative: `-- DROP DATABASE should never be in a migration file.
-- If you need to reset a database, use a separate administrative script.`
    };
  }
};

// src/rules/MP035-ban-drop-schema.ts
var banDropSchema = {
  id: "MP035",
  name: "ban-drop-schema",
  severity: "critical",
  description: "DROP SCHEMA permanently removes the schema and potentially all objects within it. Use with extreme caution.",
  whyItMatters: "DROP SCHEMA removes the schema and \u2014 with CASCADE \u2014 all tables, views, functions, and types it contains. Even without CASCADE it takes an ACCESS EXCLUSIVE lock. Dropped schemas cannot be recovered without a backup restore.",
  docsUrl: "https://migrationpilot.dev/rules/mp035",
  check(stmt, ctx) {
    if (!("DropStmt" in stmt)) return null;
    const drop = stmt.DropStmt;
    if (drop.removeType !== "OBJECT_SCHEMA") return null;
    const schemaName = extractSchemaName(drop);
    const isCascade = drop.behavior === "DROP_CASCADE";
    return {
      ruleId: "MP035",
      ruleName: "ban-drop-schema",
      severity: "critical",
      message: `DROP SCHEMA "${schemaName}"${isCascade ? " CASCADE" : ""} permanently removes the schema${isCascade ? " and ALL objects within it" : ""}. This is irreversible without a backup.`,
      line: ctx.line,
      safeAlternative: `-- Verify the schema is empty and unused before dropping:
-- SELECT * FROM information_schema.tables WHERE table_schema = '${schemaName}';
-- SELECT * FROM information_schema.routines WHERE routine_schema = '${schemaName}';`
    };
  }
};
function extractSchemaName(drop) {
  if (!drop.objects || drop.objects.length === 0) return "unknown";
  const obj = drop.objects[0];
  if (typeof obj === "string") return obj;
  if (obj && typeof obj === "object" && "String" in obj) {
    return obj.String.sval;
  }
  if (Array.isArray(obj)) {
    const first = obj[0];
    if (first && typeof first === "object" && "String" in first) {
      return first.String.sval;
    }
  }
  return "unknown";
}

// src/rules/MP036-ban-truncate-cascade.ts
var banTruncateCascade = {
  id: "MP036",
  name: "ban-truncate-cascade",
  severity: "critical",
  description: "TRUNCATE CASCADE silently truncates all tables with foreign key references to the target. This can destroy data across many tables.",
  whyItMatters: "TRUNCATE CASCADE removes all rows not only from the target table but from every table that references it via foreign keys, recursively. This can silently wipe data from dozens of tables. Always truncate specific tables explicitly.",
  docsUrl: "https://migrationpilot.dev/rules/mp036",
  check(stmt, ctx) {
    if (!("TruncateStmt" in stmt)) return null;
    const truncate2 = stmt.TruncateStmt;
    if (truncate2.behavior !== "DROP_CASCADE") return null;
    const tableNames = truncate2.relations?.map((r) => r.RangeVar?.relname).filter((n) => !!n) ?? [];
    const tableList = tableNames.length > 0 ? tableNames.join(", ") : "unknown";
    return {
      ruleId: "MP036",
      ruleName: "ban-truncate-cascade",
      severity: "critical",
      message: `TRUNCATE ${tableList} CASCADE silently truncates all tables with foreign key references. This can destroy data across many related tables.`,
      line: ctx.line,
      safeAlternative: `-- Truncate specific tables explicitly in dependency order:
-- TRUNCATE ${tableList};
-- Or use DELETE with WHERE clauses for safer, auditable data removal.`
    };
  }
};

// src/rules/MP037-prefer-text-over-varchar.ts
var preferTextOverVarchar = {
  id: "MP037",
  name: "prefer-text-over-varchar",
  severity: "warning",
  description: "VARCHAR(n) offers no performance benefit over TEXT in PostgreSQL and makes future schema changes harder.",
  whyItMatters: "In PostgreSQL, VARCHAR(n) and TEXT have identical performance \u2014 both use the same varlena storage. VARCHAR(n) only adds a length check constraint that makes future length changes require a table rewrite (on PG < 17) or at minimum a constraint adjustment. Use TEXT with a CHECK constraint if you need length validation.",
  docsUrl: "https://migrationpilot.dev/rules/mp037",
  check(stmt, ctx) {
    if ("CreateStmt" in stmt) {
      const create = stmt.CreateStmt;
      if (!create.tableElts) return null;
      for (const elt of create.tableElts) {
        if (!elt.ColumnDef) continue;
        const result = checkColumnType(elt.ColumnDef, create.relation?.relname ?? "unknown", ctx);
        if (result) return result;
      }
    }
    if ("AlterTableStmt" in stmt) {
      const alter = stmt.AlterTableStmt;
      if (!alter.cmds) return null;
      for (const cmd of alter.cmds) {
        if (cmd.AlterTableCmd.subtype !== "AT_AddColumn") continue;
        const colDef = cmd.AlterTableCmd.def?.ColumnDef;
        if (!colDef) continue;
        const result = checkColumnType(colDef, alter.relation?.relname ?? "unknown", ctx);
        if (result) return result;
      }
    }
    return null;
  }
};
function checkColumnType(colDef, tableName, ctx) {
  const typeNames = colDef.typeName?.names?.map((n) => n.String?.sval).filter((n) => !!n) ?? [];
  const isVarchar = typeNames.some((n) => n === "varchar" || n === "character varying");
  if (!isVarchar) return null;
  const colName = colDef.colname ?? "unknown";
  return {
    ruleId: "MP037",
    ruleName: "prefer-text-over-varchar",
    severity: "warning",
    message: `Column "${colName}" on "${tableName}" uses VARCHAR. In PostgreSQL, TEXT has identical performance. Use TEXT with a CHECK constraint if you need length validation.`,
    line: ctx.line,
    safeAlternative: `-- Use TEXT instead of VARCHAR:
-- "${colName}" TEXT
-- If you need a max length, add a CHECK constraint:
-- "${colName}" TEXT CHECK (length("${colName}") <= <max_length>)`
  };
}

// src/rules/MP038-prefer-bigint-over-int.ts
var preferBigintOverInt = {
  id: "MP038",
  name: "prefer-bigint-over-int",
  severity: "warning",
  description: "Primary key and foreign key columns using INT (4 bytes, max 2.1B) can overflow on high-traffic tables. Use BIGINT (8 bytes) instead.",
  whyItMatters: "INT primary keys overflow at ~2.1 billion rows. Migrating from INT to BIGINT on a large table requires a full table rewrite under ACCESS EXCLUSIVE lock, which can take hours. Starting with BIGINT avoids this expensive migration and costs only 4 extra bytes per row.",
  docsUrl: "https://migrationpilot.dev/rules/mp038",
  check(stmt, ctx) {
    if (!("CreateStmt" in stmt)) return null;
    const create = stmt.CreateStmt;
    if (create.relation?.relpersistence === "t") return null;
    if (!create.tableElts) return null;
    for (const elt of create.tableElts) {
      if (!elt.ColumnDef) continue;
      const colDef = elt.ColumnDef;
      const hasPkOrFk = colDef.constraints?.some((c) => {
        const contype = c.Constraint?.contype;
        return contype === "CONSTR_PRIMARY" || contype === "CONSTR_FOREIGN";
      });
      if (!hasPkOrFk) continue;
      const typeNames = colDef.typeName?.names?.map((n) => n.String?.sval).filter((n) => !!n) ?? [];
      const isSmallInt = typeNames.some((n) => n === "int4" || n === "int2" || n === "integer" || n === "smallint");
      if (!isSmallInt) continue;
      const colName = colDef.colname ?? "unknown";
      const tableName = create.relation?.relname ?? "unknown";
      return {
        ruleId: "MP038",
        ruleName: "prefer-bigint-over-int",
        severity: "warning",
        message: `Primary/foreign key column "${colName}" on "${tableName}" uses INT (max ~2.1B). Use BIGINT to avoid expensive future type migration.`,
        line: ctx.line,
        safeAlternative: `-- Use BIGINT for primary/foreign key columns:
-- "${colName}" BIGINT PRIMARY KEY`
      };
    }
    return null;
  }
};

// src/rules/MP039-prefer-identity-over-serial.ts
var preferIdentityOverSerial = {
  id: "MP039",
  name: "prefer-identity-over-serial",
  severity: "warning",
  description: "SERIAL/BIGSERIAL creates an implicit sequence with ownership quirks. Use GENERATED ALWAYS AS IDENTITY (PG 10+) instead.",
  whyItMatters: "SERIAL is a legacy shorthand that creates a separate sequence with confusing ownership semantics \u2014 dropping the column does not drop the sequence, and permissions are not automatically granted. GENERATED ALWAYS AS IDENTITY (PG 10+) is SQL-standard, has cleaner ownership, and is the recommended approach.",
  docsUrl: "https://migrationpilot.dev/rules/mp039",
  check(stmt, ctx) {
    if (ctx.pgVersion < 10) return null;
    if (!("CreateStmt" in stmt)) return null;
    const create = stmt.CreateStmt;
    if (!create.tableElts) return null;
    for (const elt of create.tableElts) {
      if (!elt.ColumnDef) continue;
      const colDef = elt.ColumnDef;
      const typeNames = colDef.typeName?.names?.map((n) => n.String?.sval).filter((n) => !!n) ?? [];
      const isSerial = typeNames.some(
        (n) => n === "serial" || n === "bigserial" || n === "smallserial" || n === "serial4" || n === "serial8" || n === "serial2"
      );
      if (!isSerial) continue;
      const colName = colDef.colname ?? "unknown";
      const tableName = create.relation?.relname ?? "unknown";
      const serialType = typeNames.find((n) => n.startsWith("serial") || n.startsWith("big") || n.startsWith("small")) ?? "serial";
      return {
        ruleId: "MP039",
        ruleName: "prefer-identity-over-serial",
        severity: "warning",
        message: `Column "${colName}" on "${tableName}" uses ${serialType.toUpperCase()}. Use GENERATED ALWAYS AS IDENTITY instead (PG 10+, SQL-standard, cleaner ownership).`,
        line: ctx.line,
        safeAlternative: `-- Use IDENTITY instead of SERIAL:
-- "${colName}" BIGINT GENERATED ALWAYS AS IDENTITY`
      };
    }
    return null;
  }
};

// src/rules/MP040-prefer-timestamptz.ts
var preferTimestamptz = {
  id: "MP040",
  name: "prefer-timestamptz",
  severity: "warning",
  description: "TIMESTAMP WITHOUT TIME ZONE loses timezone information, causing bugs when servers or users span time zones. Use TIMESTAMPTZ instead.",
  whyItMatters: "TIMESTAMP WITHOUT TIME ZONE stores the literal wall-clock time with no timezone context. When servers move between zones, or users are in different timezones, this causes silent data corruption. TIMESTAMPTZ stores instants in UTC and converts on display, which is almost always what you want.",
  docsUrl: "https://migrationpilot.dev/rules/mp040",
  check(stmt, ctx) {
    if ("CreateStmt" in stmt) {
      const create = stmt.CreateStmt;
      if (!create.tableElts) return null;
      for (const elt of create.tableElts) {
        if (!elt.ColumnDef) continue;
        const result = checkTimestamp(elt.ColumnDef, create.relation?.relname ?? "unknown", ctx);
        if (result) return result;
      }
    }
    if ("AlterTableStmt" in stmt) {
      const alter = stmt.AlterTableStmt;
      if (!alter.cmds) return null;
      for (const cmd of alter.cmds) {
        if (cmd.AlterTableCmd.subtype !== "AT_AddColumn") continue;
        const colDef = cmd.AlterTableCmd.def?.ColumnDef;
        if (!colDef) continue;
        const result = checkTimestamp(colDef, alter.relation?.relname ?? "unknown", ctx);
        if (result) return result;
      }
    }
    return null;
  }
};
function checkTimestamp(colDef, tableName, ctx) {
  const typeNames = colDef.typeName?.names?.map((n) => n.String?.sval).filter((n) => !!n) ?? [];
  const isTimestampWithoutTz = typeNames.some((n) => n === "timestamp") && !typeNames.some((n) => n === "timestamptz");
  if (!isTimestampWithoutTz) return null;
  const colName = colDef.colname ?? "unknown";
  return {
    ruleId: "MP040",
    ruleName: "prefer-timestamptz",
    severity: "warning",
    message: `Column "${colName}" on "${tableName}" uses TIMESTAMP WITHOUT TIME ZONE. Use TIMESTAMPTZ to avoid timezone-related bugs.`,
    line: ctx.line,
    safeAlternative: `-- Use TIMESTAMPTZ instead:
-- "${colName}" TIMESTAMPTZ`
  };
}

// src/rules/MP041-ban-char-field.ts
var banCharField = {
  id: "MP041",
  name: "ban-char-field",
  severity: "warning",
  description: "CHAR(n) pads values with spaces, wasting storage and causing subtle bugs in comparisons. Use TEXT or VARCHAR instead.",
  whyItMatters: "CHAR(n) blank-pads values to the specified length, wasting storage and causing confusing behavior in string comparisons and LIKE queries. It offers no performance advantage over TEXT in PostgreSQL. Use TEXT (or VARCHAR if you must have a length limit).",
  docsUrl: "https://migrationpilot.dev/rules/mp041",
  check(stmt, ctx) {
    if ("CreateStmt" in stmt) {
      const create = stmt.CreateStmt;
      if (!create.tableElts) return null;
      for (const elt of create.tableElts) {
        if (!elt.ColumnDef) continue;
        const result = checkCharType(elt.ColumnDef, create.relation?.relname ?? "unknown", ctx);
        if (result) return result;
      }
    }
    if ("AlterTableStmt" in stmt) {
      const alter = stmt.AlterTableStmt;
      if (!alter.cmds) return null;
      for (const cmd of alter.cmds) {
        if (cmd.AlterTableCmd.subtype !== "AT_AddColumn") continue;
        const colDef = cmd.AlterTableCmd.def?.ColumnDef;
        if (!colDef) continue;
        const result = checkCharType(colDef, alter.relation?.relname ?? "unknown", ctx);
        if (result) return result;
      }
    }
    return null;
  }
};
function checkCharType(colDef, tableName, ctx) {
  const typeNames = colDef.typeName?.names?.map((n) => n.String?.sval).filter((n) => !!n) ?? [];
  const isChar = typeNames.some((n) => n === "bpchar" || n === "char") && !typeNames.some((n) => n === "varying");
  if (!isChar) return null;
  const colName = colDef.colname ?? "unknown";
  return {
    ruleId: "MP041",
    ruleName: "ban-char-field",
    severity: "warning",
    message: `Column "${colName}" on "${tableName}" uses CHAR(n), which blank-pads values and wastes storage. Use TEXT instead.`,
    line: ctx.line,
    safeAlternative: `-- Use TEXT instead of CHAR(n):
-- "${colName}" TEXT`
  };
}

// src/rules/MP042-require-index-name.ts
var requireIndexName = {
  id: "MP042",
  name: "require-index-name",
  severity: "warning",
  description: "CREATE INDEX without an explicit name generates auto-names that are hard to reference in future migrations and monitoring.",
  whyItMatters: 'PostgreSQL auto-generates index names like "users_email_idx" but the naming is fragile and can collide. Explicit index names make future migrations clearer (DROP INDEX, REINDEX), improve monitoring (pg_stat_user_indexes), and are required for UNIQUE ... USING INDEX patterns.',
  docsUrl: "https://migrationpilot.dev/rules/mp042",
  check(stmt, ctx) {
    if (!("IndexStmt" in stmt)) return null;
    const idx = stmt.IndexStmt;
    if (idx.idxname) return null;
    const tableName = idx.relation?.relname ?? "unknown";
    return {
      ruleId: "MP042",
      ruleName: "require-index-name",
      severity: "warning",
      message: `CREATE INDEX on "${tableName}" without an explicit name. Auto-generated names are fragile and hard to reference in future migrations.`,
      line: ctx.line,
      safeAlternative: `-- Add an explicit index name:
-- CREATE INDEX idx_${tableName}_<column> ON ${tableName} (...);`
    };
  }
};

// src/rules/MP043-ban-domain-constraint.ts
var banDomainConstraint = {
  id: "MP043",
  name: "ban-domain-constraint",
  severity: "warning",
  description: "Adding or modifying domain constraints validates against ALL columns using that domain, potentially scanning many tables.",
  whyItMatters: "Domain constraints are validated against every column in every table that uses the domain type. Adding a CHECK constraint to a domain can trigger full table scans across many tables simultaneously. Use CHECK constraints on individual columns instead.",
  docsUrl: "https://migrationpilot.dev/rules/mp043",
  check(stmt, ctx) {
    if ("CreateDomainStmt" in stmt) {
      const domain = stmt.CreateDomainStmt;
      const hasCheck = domain.constraints?.some((c) => c.Constraint?.contype === "CONSTR_CHECK");
      if (!hasCheck) return null;
      const domainName = domain.domainname?.map((n) => n.String?.sval).filter((n) => !!n).join(".") ?? "unknown";
      return {
        ruleId: "MP043",
        ruleName: "ban-domain-constraint",
        severity: "warning",
        message: `CREATE DOMAIN "${domainName}" with CHECK constraint. Future columns using this domain will be validated against this constraint, and modifying it later requires scanning all tables using the domain.`,
        line: ctx.line,
        safeAlternative: `-- Consider using CHECK constraints on individual columns instead of domain constraints.
-- This gives you more control over validation and avoids cross-table scans when modifying constraints.`
      };
    }
    if ("AlterDomainStmt" in stmt) {
      const alterDomain = stmt.AlterDomainStmt;
      if (alterDomain.subtype !== "T") return null;
      const domainName = alterDomain.typeName?.map((n) => n.String?.sval).filter((n) => !!n).join(".") ?? "unknown";
      return {
        ruleId: "MP043",
        ruleName: "ban-domain-constraint",
        severity: "warning",
        message: `ALTER DOMAIN "${domainName}" ADD CONSTRAINT validates against ALL columns using this domain, potentially scanning many tables.`,
        line: ctx.line,
        safeAlternative: `-- Adding domain constraints scans all tables using the domain.
-- Use NOT VALID if supported, or add CHECK constraints on individual columns instead.`
      };
    }
    return null;
  }
};

// src/rules/MP044-no-data-loss-type-narrowing.ts
var AT_AlterColumnType3 = "AT_AlterColumnType";
var noDataLossTypeNarrowing = {
  id: "MP044",
  name: "no-data-loss-type-narrowing",
  severity: "warning",
  description: "Changing a column to a narrower type can cause data loss or errors if existing values exceed the new type range.",
  whyItMatters: "Narrowing a column type (e.g., BIGINT \u2192 INT, TEXT \u2192 VARCHAR(50)) will fail if any existing row has a value that does not fit the new type. Even if it succeeds today, future inserts may fail unexpectedly. The change also requires a full table rewrite under ACCESS EXCLUSIVE lock.",
  docsUrl: "https://migrationpilot.dev/rules/mp044",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_AlterColumnType3) continue;
      const colDef = cmd.AlterTableCmd.def?.ColumnDef;
      if (!colDef?.typeName?.names) continue;
      const newTypeNames = colDef.typeName.names.map((n) => n.String?.sval).filter((n) => !!n);
      const isNarrowType = newTypeNames.some(
        (n) => ["int2", "smallint", "int4", "integer", "float4", "real"].includes(n)
      );
      if (!isNarrowType) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const colName = cmd.AlterTableCmd.name ?? "unknown";
      const newType = newTypeNames.filter((n) => n !== "pg_catalog").join(" ");
      return {
        ruleId: "MP044",
        ruleName: "no-data-loss-type-narrowing",
        severity: "warning",
        message: `Changing "${colName}" on "${tableName}" to ${newType.toUpperCase()} may cause data loss if existing values exceed the new type range. This also requires a full table rewrite.`,
        line: ctx.line,
        safeAlternative: `-- Verify no data exceeds the new type range before changing:
-- SELECT COUNT(*) FROM ${tableName} WHERE "${colName}" > <max_value_of_new_type>;
-- Consider adding a CHECK constraint instead of narrowing the type.`
      };
    }
    return null;
  }
};

// src/rules/MP045-require-primary-key.ts
var requirePrimaryKey = {
  id: "MP045",
  name: "require-primary-key",
  severity: "warning",
  description: "Tables without a primary key cannot be efficiently replicated and make row identification ambiguous.",
  whyItMatters: "Tables without a primary key cannot use logical replication (a requirement for zero-downtime upgrades), make UPDATE/DELETE operations ambiguous, prevent efficient foreign key references, and break many ORMs. Add a primary key to every table.",
  docsUrl: "https://migrationpilot.dev/rules/mp045",
  check(stmt, ctx) {
    if (!("CreateStmt" in stmt)) return null;
    const create = stmt.CreateStmt;
    if (create.relation?.relpersistence === "t") return null;
    if (create.inhRelations && create.inhRelations.length > 0) return null;
    if (!create.tableElts) return null;
    const hasPkInColumns = create.tableElts.some((elt) => {
      return elt.ColumnDef?.constraints?.some(
        (c) => c.Constraint?.contype === "CONSTR_PRIMARY"
      );
    });
    const hasPkInTable = create.tableElts.some((elt) => {
      return elt.Constraint?.contype === "CONSTR_PRIMARY";
    });
    if (hasPkInColumns || hasPkInTable) return null;
    const tableName = create.relation?.relname ?? "unknown";
    return {
      ruleId: "MP045",
      ruleName: "require-primary-key",
      severity: "warning",
      message: `CREATE TABLE "${tableName}" without a primary key. Tables without a PK cannot use logical replication and make row identification ambiguous.`,
      line: ctx.line,
      safeAlternative: `-- Add a primary key column:
-- CREATE TABLE ${tableName} (
--   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   ...
-- );`
    };
  }
};

// src/rules/MP046-concurrent-detach-partition.ts
var AT_DetachPartition = "AT_DetachPartition";
var requireConcurrentDetachPartition = {
  id: "MP046",
  name: "require-concurrent-detach-partition",
  severity: "critical",
  description: "DETACH PARTITION without CONCURRENTLY takes ACCESS EXCLUSIVE lock on the parent, blocking all queries. Use CONCURRENTLY on PG 14+.",
  whyItMatters: "DETACH PARTITION without CONCURRENTLY takes an ACCESS EXCLUSIVE lock on the parent table, blocking all reads and writes until the operation completes. DETACH PARTITION CONCURRENTLY (PG 14+) uses a two-phase approach that only briefly locks the parent.",
  docsUrl: "https://migrationpilot.dev/rules/mp046",
  check(stmt, ctx) {
    if (ctx.pgVersion < 14) return null;
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_DetachPartition) continue;
      const partCmd = cmd.AlterTableCmd.def?.PartitionCmd;
      if (partCmd?.concurrent) continue;
      const parentTable = alter.relation?.relname ?? "unknown";
      const partName = partCmd?.name?.relname ?? cmd.AlterTableCmd.name ?? "unknown";
      return {
        ruleId: "MP046",
        ruleName: "require-concurrent-detach-partition",
        severity: "critical",
        message: `DETACH PARTITION "${partName}" from "${parentTable}" without CONCURRENTLY takes ACCESS EXCLUSIVE lock on the parent, blocking all queries.`,
        line: ctx.line,
        safeAlternative: `-- Use CONCURRENTLY to avoid blocking (PG 14+):
ALTER TABLE ${parentTable} DETACH PARTITION ${partName} CONCURRENTLY;`
      };
    }
    return null;
  }
};

// src/rules/MP047-ban-set-logged-unlogged.ts
var AT_SetLogged = "AT_SetLogged";
var AT_SetUnLogged = "AT_SetUnLogged";
var banSetLoggedUnlogged = {
  id: "MP047",
  name: "ban-set-logged-unlogged",
  severity: "critical",
  description: "SET LOGGED/UNLOGGED rewrites the entire table under ACCESS EXCLUSIVE lock. This blocks all reads and writes for the duration.",
  whyItMatters: "Changing a table between LOGGED and UNLOGGED requires a full table rewrite while holding ACCESS EXCLUSIVE lock. On large tables this can take hours, blocking all queries. UNLOGGED tables also do not survive crash recovery \u2014 all data is lost on restart.",
  docsUrl: "https://migrationpilot.dev/rules/mp047",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      const subtype = cmd.AlterTableCmd.subtype;
      if (subtype !== AT_SetLogged && subtype !== AT_SetUnLogged) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const direction = subtype === AT_SetLogged ? "LOGGED" : "UNLOGGED";
      return {
        ruleId: "MP047",
        ruleName: "ban-set-logged-unlogged",
        severity: "critical",
        message: `SET ${direction} on "${tableName}" rewrites the entire table under ACCESS EXCLUSIVE lock. This blocks all reads and writes for the full duration.${direction === "UNLOGGED" ? " UNLOGGED tables lose all data on crash." : ""}`,
        line: ctx.line,
        safeAlternative: `-- Changing LOGGED/UNLOGGED requires a full table rewrite.
-- Consider performing this during a maintenance window.
-- For LOGGED\u2192UNLOGGED: ensure you have backups, data will be lost on crash.
-- For UNLOGGED\u2192LOGGED: consider creating a new LOGGED table and migrating data.`
      };
    }
    return null;
  }
};

// src/rules/MP048-alter-default-volatile.ts
var AT_ColumnDefault = "AT_ColumnDefault";
var banAlterDefaultVolatile = {
  id: "MP048",
  name: "ban-alter-default-volatile-existing",
  severity: "warning",
  description: "Setting a volatile default (now(), random(), gen_random_uuid()) on an existing column has no effect on existing rows, which may cause confusion.",
  whyItMatters: "ALTER TABLE ALTER COLUMN SET DEFAULT only affects future INSERTs \u2014 existing rows are NOT updated. Setting a volatile function like now() or gen_random_uuid() as default may give the false impression that existing NULLs will be filled. You likely need a backfill UPDATE as well.",
  docsUrl: "https://migrationpilot.dev/rules/mp048",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmd of alter.cmds) {
      if (cmd.AlterTableCmd.subtype !== AT_ColumnDefault) continue;
      const defJson = JSON.stringify(cmd.AlterTableCmd.def ?? {}).toLowerCase();
      const volatileFunctions = [
        "now",
        "random",
        "gen_random_uuid",
        "uuid_generate_v4",
        "clock_timestamp",
        "statement_timestamp",
        "timeofday",
        "txid_current",
        "nextval"
      ];
      const isVolatile = volatileFunctions.some((fn) => defJson.includes(fn));
      if (!isVolatile) continue;
      const tableName = alter.relation?.relname ?? "unknown";
      const colName = cmd.AlterTableCmd.name ?? "unknown";
      return {
        ruleId: "MP048",
        ruleName: "ban-alter-default-volatile-existing",
        severity: "warning",
        message: `Setting volatile default on "${tableName}"."${colName}" only affects future INSERTs. Existing rows will NOT be updated. You may need a backfill UPDATE.`,
        line: ctx.line,
        safeAlternative: `-- SET DEFAULT only affects new rows. To backfill existing rows:
-- 1. ALTER TABLE ${tableName} ALTER COLUMN ${colName} SET DEFAULT <volatile_fn>;
-- 2. UPDATE ${tableName} SET ${colName} = DEFAULT WHERE ${colName} IS NULL;
-- (Run the UPDATE in batches for large tables)`
      };
    }
    return null;
  }
};

// src/rules/MP049-partition-key-in-pk.ts
var requirePartitionKeyInPK = {
  id: "MP049",
  name: "require-partition-key-in-pk",
  severity: "critical",
  description: "Partitioned table primary key must include all partition key columns. PostgreSQL will reject it otherwise.",
  whyItMatters: "PostgreSQL requires that the primary key (and all unique constraints) on a partitioned table include all partition key columns. If omitted, the CREATE TABLE will fail at runtime. This ensures uniqueness can be enforced per-partition.",
  docsUrl: "https://migrationpilot.dev/rules/mp049",
  check(stmt, ctx) {
    if (!("CreateStmt" in stmt)) return null;
    const create = stmt.CreateStmt;
    if (!create.partspec?.partParams || create.partspec.partParams.length === 0) return null;
    if (!create.tableElts) return null;
    const partitionKeys = create.partspec.partParams.map((p) => p.PartitionElem?.name).filter((n) => !!n);
    if (partitionKeys.length === 0) return null;
    const pkColumns = [];
    let hasPK = false;
    for (const elt of create.tableElts) {
      if (elt.ColumnDef?.constraints) {
        for (const c of elt.ColumnDef.constraints) {
          if (c.Constraint?.contype === "CONSTR_PRIMARY") {
            hasPK = true;
            if (elt.ColumnDef.colname) pkColumns.push(elt.ColumnDef.colname);
          }
        }
      }
      if (elt.Constraint?.contype === "CONSTR_PRIMARY") {
        hasPK = true;
        if (elt.Constraint.keys) {
          for (const k of elt.Constraint.keys) {
            const col = k.String?.sval;
            if (col) pkColumns.push(col);
          }
        }
      }
    }
    if (!hasPK) return null;
    const missingKeys = partitionKeys.filter((k) => !pkColumns.includes(k));
    if (missingKeys.length === 0) return null;
    const tableName = create.relation?.relname ?? "unknown";
    return {
      ruleId: "MP049",
      ruleName: "require-partition-key-in-pk",
      severity: "critical",
      message: `Partitioned table "${tableName}" primary key does not include partition key column(s): ${missingKeys.join(", ")}. PostgreSQL requires all partition key columns in the primary key.`,
      line: ctx.line,
      safeAlternative: `-- Include partition key columns in the primary key:
-- PRIMARY KEY (id, ${missingKeys.join(", ")})`
    };
  }
};

// src/rules/MP050-prefer-hnsw-over-ivfflat.ts
var preferHnswOverIvfflat = {
  id: "MP050",
  name: "prefer-hnsw-over-ivfflat",
  severity: "warning",
  description: "IVFFlat indexes require training data and periodic reindexing. HNSW provides better recall and does not need retraining.",
  whyItMatters: "pgvector IVFFlat indexes need enough representative data at creation time to build good clusters. As data distribution changes, recall degrades and you must REINDEX. HNSW indexes build incrementally, have consistently better recall, and never need retraining. Prefer HNSW unless you have a specific reason to use IVFFlat.",
  docsUrl: "https://migrationpilot.dev/rules/mp050",
  check(stmt, ctx) {
    if (!("IndexStmt" in stmt)) return null;
    const idx = stmt.IndexStmt;
    if (idx.accessMethod !== "ivfflat") return null;
    const indexName = idx.idxname ?? "unnamed";
    const tableName = idx.relation?.relname ?? "unknown";
    return {
      ruleId: "MP050",
      ruleName: "prefer-hnsw-over-ivfflat",
      severity: "warning",
      message: `Index "${indexName}" on "${tableName}" uses IVFFlat. HNSW provides better recall without needing training data or periodic reindexing.`,
      line: ctx.line,
      safeAlternative: `-- Use HNSW instead of IVFFlat for better recall:
-- CREATE INDEX ${indexName} ON ${tableName} USING hnsw (embedding vector_cosine_ops);`
    };
  }
};

// src/rules/MP051-require-spatial-index.ts
var SPATIAL_TYPES = /* @__PURE__ */ new Set([
  "geometry",
  "geography",
  "point",
  "line",
  "lseg",
  "box",
  "path",
  "polygon",
  "circle"
]);
var requireSpatialIndex = {
  id: "MP051",
  name: "require-spatial-index",
  severity: "warning",
  description: "Spatial/geometry columns without a GIST or SP-GIST index will cause full sequential scans on spatial queries.",
  whyItMatters: "PostGIS geometry and geography columns need a GIST or SP-GIST index for efficient spatial queries (ST_Contains, ST_DWithin, etc.). Without one, every spatial query triggers a full sequential scan. Adding the index at table creation time avoids the need for a later lock-heavy ALTER.",
  docsUrl: "https://migrationpilot.dev/rules/mp051",
  check(stmt, ctx) {
    if (!("CreateStmt" in stmt)) return null;
    const create = stmt.CreateStmt;
    if (!create.tableElts) return null;
    const spatialColumns = [];
    for (const elt of create.tableElts) {
      if (!elt.ColumnDef?.typeName?.names) continue;
      const typeNames = elt.ColumnDef.typeName.names.map((n) => n.String?.sval).filter((n) => !!n);
      const hasSpatialType = typeNames.some((t) => SPATIAL_TYPES.has(t.toLowerCase()));
      if (hasSpatialType && elt.ColumnDef.colname) {
        spatialColumns.push(elt.ColumnDef.colname);
      }
    }
    if (spatialColumns.length === 0) return null;
    for (let i = ctx.statementIndex + 1; i < ctx.allStatements.length; i++) {
      const nextStmt = ctx.allStatements[i];
      if (!nextStmt) continue;
      const sql = nextStmt.originalSql.toUpperCase();
      if ((sql.includes("USING GIST") || sql.includes("USING SPGIST")) && spatialColumns.some((c) => nextStmt.originalSql.includes(c))) {
        return null;
      }
    }
    const tableName = create.relation?.relname ?? "unknown";
    return {
      ruleId: "MP051",
      ruleName: "require-spatial-index",
      severity: "warning",
      message: `Table "${tableName}" has spatial column(s) (${spatialColumns.join(", ")}) without a GIST index. Spatial queries will require full sequential scans.`,
      line: ctx.line,
      safeAlternative: `-- Add a GIST index for efficient spatial queries:
CREATE INDEX CONCURRENTLY idx_${tableName}_${spatialColumns[0]} ON ${tableName} USING GIST (${spatialColumns[0]});`
    };
  }
};

// src/rules/MP052-warn-dependent-objects.ts
var warnDependentObjects = {
  id: "MP052",
  name: "warn-dependent-objects",
  severity: "warning",
  description: "DROP COLUMN, RENAME COLUMN, or ALTER COLUMN TYPE may silently break views, functions, and triggers that reference the column.",
  whyItMatters: "Views, functions, and triggers that reference a column will fail at query time \u2014 not at migration time \u2014 when the column is dropped, renamed, or its type is changed. PostgreSQL does not automatically update these dependent objects. This is the most common cause of post-deployment failures that static analysis cannot fully resolve without a database connection.",
  docsUrl: "https://migrationpilot.dev/rules/mp052",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    const table = alter.relation?.relname ?? "unknown";
    for (const cmd of alter.cmds) {
      const subtype = cmd.AlterTableCmd.subtype;
      const colName = cmd.AlterTableCmd.name ?? "unknown";
      if (subtype === "AT_DropColumn") {
        return {
          ruleId: "MP052",
          ruleName: "warn-dependent-objects",
          severity: "warning",
          message: `Dropping column "${colName}" from "${table}" may break views, functions, or triggers that reference it. Check dependencies before deploying.`,
          line: ctx.line,
          safeAlternative: `-- Check for dependent objects before dropping:
SELECT dependent_ns.nspname || '.' || dependent_view.relname AS dependent_object,
       dependent_view.relkind
FROM pg_depend
JOIN pg_rewrite ON pg_depend.objid = pg_rewrite.oid
JOIN pg_class AS dependent_view ON pg_rewrite.ev_class = dependent_view.oid
JOIN pg_namespace AS dependent_ns ON dependent_view.relnamespace = dependent_ns.oid
JOIN pg_class AS source_table ON pg_depend.refobjid = source_table.oid
JOIN pg_attribute ON pg_depend.refobjid = pg_attribute.attrelid AND pg_depend.refobjsubid = pg_attribute.attnum
WHERE source_table.relname = '${table}' AND pg_attribute.attname = '${colName}';`
        };
      }
      if (subtype === "AT_AlterColumnType") {
        return {
          ruleId: "MP052",
          ruleName: "warn-dependent-objects",
          severity: "warning",
          message: `Changing type of column "${colName}" on "${table}" may break views, functions, or triggers that reference it with the old type.`,
          line: ctx.line,
          safeAlternative: `-- Verify no views/functions depend on the old column type before altering.`
        };
      }
    }
    if ("RenameStmt" in stmt) {
      const rename = stmt.RenameStmt;
      if (rename.renameType === 7) {
        const tbl = rename.relation?.relname ?? "unknown";
        const oldName = rename.subname ?? "unknown";
        const newName = rename.newname ?? "unknown";
        return {
          ruleId: "MP052",
          ruleName: "warn-dependent-objects",
          severity: "warning",
          message: `Renaming column "${oldName}" to "${newName}" on "${tbl}" may break views, functions, or triggers that reference the old name.`,
          line: ctx.line,
          safeAlternative: `-- Check for dependent objects before renaming. Consider a multi-step migration:
-- 1. Add new column, 2. Backfill, 3. Update dependents, 4. Drop old column.`
        };
      }
    }
    return null;
  }
};

// src/rules/MP053-ban-uncommitted-transaction.ts
var banUncommittedTransaction = {
  id: "MP053",
  name: "ban-uncommitted-transaction",
  severity: "critical",
  description: "Migration file contains BEGIN without a matching COMMIT, which will leave a dangling open transaction.",
  whyItMatters: "A migration with BEGIN but no COMMIT will either fail (if the migration runner auto-commits) or leave an open transaction that holds locks indefinitely. Conversely, a COMMIT without a preceding BEGIN is a no-op but indicates a structural problem. Always match BEGIN with COMMIT or ROLLBACK.",
  docsUrl: "https://migrationpilot.dev/rules/mp053",
  check(_stmt, ctx) {
    if (ctx.statementIndex !== ctx.allStatements.length - 1) return null;
    let depth = 0;
    for (let i = 0; i <= ctx.statementIndex; i++) {
      const entry = ctx.allStatements[i];
      if (!entry) continue;
      const s = entry.originalSql.toLowerCase().trim();
      if (s === "begin" || s === "begin transaction" || s.startsWith("begin;")) {
        depth++;
      } else if (s === "commit" || s === "rollback" || s.startsWith("commit;") || s.startsWith("rollback;")) {
        depth--;
      }
    }
    if (depth > 0) {
      return {
        ruleId: "MP053",
        ruleName: "ban-uncommitted-transaction",
        severity: "critical",
        message: "Migration file contains BEGIN without a matching COMMIT or ROLLBACK. This will leave an open transaction that holds locks indefinitely.",
        line: ctx.line,
        safeAlternative: "-- Add COMMIT at the end of the migration:\nCOMMIT;"
      };
    }
    return null;
  }
};

// src/rules/MP054-alter-type-add-value-in-transaction.ts
var alterTypeAddValueInTransaction = {
  id: "MP054",
  name: "alter-type-add-value-in-transaction",
  severity: "critical",
  description: "ALTER TYPE ... ADD VALUE in the same transaction as a statement referencing the new value will fail on PG < 12, and on PG 12+ the new value is not visible until COMMIT.",
  whyItMatters: 'On PostgreSQL < 12, ALTER TYPE ADD VALUE cannot run inside a transaction at all. On PG 12+, it can run in a transaction but the new enum value is not visible to other statements in the same transaction \u2014 any INSERT or UPDATE referencing the new value will fail with "unsafe use of new value." Prisma, TypeORM, and Alembic frequently generate migrations that trigger this.',
  docsUrl: "https://migrationpilot.dev/rules/mp054",
  check(_stmt, ctx) {
    const sql = ctx.originalSql.toLowerCase().trim();
    const isInsertOrUpdate = sql.startsWith("insert") || sql.startsWith("update");
    if (!isInsertOrUpdate) return null;
    let inTransaction = false;
    const addedValues = [];
    for (let i = 0; i < ctx.statementIndex; i++) {
      const entry = ctx.allStatements[i];
      if (!entry) continue;
      const s = entry.originalSql.toLowerCase().trim();
      if (s === "begin" || s === "begin transaction" || s.startsWith("begin;")) {
        inTransaction = true;
        addedValues.length = 0;
      } else if (s === "commit" || s === "rollback" || s.startsWith("commit;") || s.startsWith("rollback;")) {
        inTransaction = false;
        addedValues.length = 0;
      }
      if (inTransaction && "AlterEnumStmt" in entry.stmt) {
        const alterEnum = entry.stmt.AlterEnumStmt;
        const typeName = alterEnum.typeName?.filter((t) => t.String?.sval).map((t) => t.String.sval).join(".") ?? "unknown";
        const value = alterEnum.newVal ?? "unknown";
        addedValues.push({ typeName, value, line: i + 1 });
      }
    }
    if (inTransaction && addedValues.length > 0) {
      const first = addedValues[0];
      return {
        ruleId: "MP054",
        ruleName: "alter-type-add-value-in-transaction",
        severity: "critical",
        message: `INSERT/UPDATE in the same transaction as ALTER TYPE "${first.typeName}" ADD VALUE '${first.value}'. The new enum value is not visible until COMMIT, so this statement will fail.`,
        line: ctx.line,
        safeAlternative: `-- Split into separate transactions:
-- Transaction 1: ALTER TYPE ${first.typeName} ADD VALUE '${first.value}';
-- Transaction 2 (after COMMIT): ${ctx.originalSql.trim().slice(0, 60)}...`
      };
    }
    return null;
  }
};

// src/rules/MP055-drop-pk-replica-identity.ts
var dropPkReplicaIdentity = {
  id: "MP055",
  name: "drop-pk-replica-identity-break",
  severity: "critical",
  description: "Dropping a primary key breaks logical replication unless REPLICA IDENTITY is explicitly set.",
  whyItMatters: 'The default replica identity IS the primary key. When you drop a PK without setting REPLICA IDENTITY FULL or USING INDEX, all subsequent UPDATE and DELETE operations fail on logical replication subscribers (Supabase, Neon, AWS RDS read replicas, Debezium CDC). The publisher succeeds but the subscriber errors with "cannot delete from table because it does not have a replica identity."',
  docsUrl: "https://migrationpilot.dev/rules/mp055",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    const table = alter.relation?.relname ?? "unknown";
    for (const cmd of alter.cmds) {
      const subtype = cmd.AlterTableCmd.subtype;
      const name = cmd.AlterTableCmd.name ?? "";
      if (subtype !== "AT_DropConstraint") continue;
      if (!name.endsWith("_pkey") && !name.toLowerCase().includes("pk")) continue;
      const hasReplicaIdentity = ctx.allStatements.some((s) => {
        const sql = s.originalSql.toLowerCase();
        return sql.includes("replica identity") && sql.includes(table.toLowerCase());
      });
      if (hasReplicaIdentity) continue;
      return {
        ruleId: "MP055",
        ruleName: "drop-pk-replica-identity-break",
        severity: "critical",
        message: `Dropping primary key constraint "${name}" on "${table}" without setting REPLICA IDENTITY. This breaks logical replication (Supabase, Neon, RDS read replicas, CDC pipelines).`,
        line: ctx.line,
        safeAlternative: `-- Before dropping the PK, set replica identity:
ALTER TABLE ${table} REPLICA IDENTITY FULL;
-- Or create a unique index and use it:
-- CREATE UNIQUE INDEX CONCURRENTLY idx_${table}_new_pk ON ${table} (id);
-- ALTER TABLE ${table} REPLICA IDENTITY USING INDEX idx_${table}_new_pk;`
      };
    }
    return null;
  }
};

// src/rules/MP056-gin-index-jsonb.ts
var ginIndexJsonb = {
  id: "MP056",
  name: "gin-index-on-jsonb-without-expression",
  severity: "warning",
  description: "A plain GIN index on a JSONB column only supports containment operators (@>, ?, ?|, ?&), not the common ->> extraction operator used by ORMs.",
  whyItMatters: "A GIN index with default jsonb_ops on a bare JSONB column does NOT speed up queries using ->> or ->. Most ORMs (Prisma, TypeORM, Knex) generate WHERE metadata->>'key' = 'value' queries, which will still do a sequential scan. Use an expression B-tree index on the specific path instead, or use jsonb_path_ops if you only use @> containment queries.",
  docsUrl: "https://migrationpilot.dev/rules/mp056",
  check(stmt, ctx) {
    if (!("IndexStmt" in stmt)) return null;
    const index = stmt.IndexStmt;
    if (index.accessMethod?.toLowerCase() !== "gin") return null;
    const table = index.relation?.relname ?? "unknown";
    const idxName = index.idxname ?? "unnamed";
    const params = index.indexParams ?? [];
    const bareColumns = params.filter(
      (p) => p.IndexElem?.name && !p.IndexElem?.expr
    );
    if (bareColumns.length === 0) return null;
    const sql = ctx.originalSql.toLowerCase();
    if (sql.includes("jsonb_path_ops")) return null;
    const colNames = bareColumns.map((p) => p.IndexElem.name).join(", ");
    return {
      ruleId: "MP056",
      ruleName: "gin-index-on-jsonb-without-expression",
      severity: "warning",
      message: `GIN index "${idxName}" on "${table}"(${colNames}) uses bare column reference. This index won't speed up ->> or -> queries \u2014 only @>, ?, ?|, ?& containment operators.`,
      line: ctx.line,
      safeAlternative: `-- For ->> queries, use an expression B-tree index instead:
-- CREATE INDEX CONCURRENTLY ${idxName} ON ${table} ((${colNames}->>'key'));
-- For @> containment queries, add jsonb_path_ops:
-- CREATE INDEX CONCURRENTLY ${idxName} ON ${table} USING GIN (${colNames} jsonb_path_ops);`
    };
  }
};

// src/rules/MP057-rls-without-policy.ts
var rlsWithoutPolicy = {
  id: "MP057",
  name: "rls-enabled-without-policy",
  severity: "critical",
  description: "ENABLE ROW LEVEL SECURITY without a matching CREATE POLICY silently blocks all access for non-superuser roles.",
  whyItMatters: "When RLS is enabled with zero policies, the default behavior is a complete deny \u2014 all queries from non-superuser roles return zero rows. No error is raised. SELECT * FROM table returns empty. This silently breaks applications in a way that looks like an empty table rather than a permission error. Supabase documents this as the leading cause of data exposure/lockout incidents.",
  docsUrl: "https://migrationpilot.dev/rules/mp057",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    const table = alter.relation?.relname ?? "unknown";
    const enablesRls = alter.cmds.some(
      (cmd) => cmd.AlterTableCmd.subtype === "AT_EnableRowSecurity"
    );
    if (!enablesRls) return null;
    const hasPolicy = ctx.allStatements.some((s) => {
      const sql = s.originalSql.toLowerCase();
      return sql.includes("create policy") && sql.includes(table.toLowerCase());
    });
    if (hasPolicy) return null;
    return {
      ruleId: "MP057",
      ruleName: "rls-enabled-without-policy",
      severity: "critical",
      message: `ENABLE ROW LEVEL SECURITY on "${table}" without a matching CREATE POLICY. With no policies, all non-superuser queries return zero rows \u2014 silently breaking the application.`,
      line: ctx.line,
      safeAlternative: `-- Always create at least one policy when enabling RLS:
ALTER TABLE ${table} ENABLE ROW LEVEL SECURITY;
CREATE POLICY ${table}_select ON ${table} FOR SELECT USING (true);
-- Then add restrictive policies as needed.`
    };
  }
};

// src/rules/MP058-multi-alter-table.ts
var multiAlterTable = {
  id: "MP058",
  name: "multi-alter-table-same-table",
  severity: "warning",
  description: "Multiple separate ALTER TABLE statements on the same table acquire the lock multiple times. Combine them into a single statement.",
  whyItMatters: "Each ALTER TABLE acquires ACCESS EXCLUSIVE lock independently. Multiple separate ALTER TABLE statements on the same table means multiple lock/unlock cycles, each going through the lock queue. Long-running queries must finish before each lock acquisition. Combining subcommands into a single ALTER TABLE reduces the blocking window from N separate lock cycles to one.",
  docsUrl: "https://migrationpilot.dev/rules/mp058",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    const table = alter.relation?.relname ?? "unknown";
    for (let i = 0; i < ctx.statementIndex; i++) {
      const prev = ctx.allStatements[i];
      if (!prev) continue;
      if ("AlterTableStmt" in prev.stmt) {
        const prevAlter = prev.stmt.AlterTableStmt;
        if (prevAlter.relation?.relname === table) {
          return null;
        }
      }
    }
    let count = 0;
    const lines = [];
    for (let i = 0; i < ctx.allStatements.length; i++) {
      const s = ctx.allStatements[i];
      if (!s) continue;
      if ("AlterTableStmt" in s.stmt) {
        const a = s.stmt.AlterTableStmt;
        if (a.relation?.relname === table) {
          count++;
          lines.push(i + 1);
        }
      }
    }
    if (count <= 1) return null;
    return {
      ruleId: "MP058",
      ruleName: "multi-alter-table-same-table",
      severity: "warning",
      message: `${count} separate ALTER TABLE statements on "${table}". Each acquires ACCESS EXCLUSIVE lock independently. Combine into a single ALTER TABLE with multiple subcommands to reduce lock acquisitions from ${count} to 1.`,
      line: ctx.line,
      safeAlternative: `-- Combine into a single statement:
-- ALTER TABLE ${table}
--   ADD COLUMN ...,
--   ALTER COLUMN ...,
--   ADD CONSTRAINT ...;`
    };
  }
};

// src/rules/MP059-sequence-not-reset.ts
var sequenceNotReset = {
  id: "MP059",
  name: "sequence-not-reset-after-data-migration",
  severity: "warning",
  description: "INSERT with explicit integer IDs without a subsequent setval() or ALTER SEQUENCE RESTART may cause duplicate key errors on the next auto-generated insert.",
  whyItMatters: 'When you seed data or migrate rows with explicit integer IDs, the sequence counter is not automatically updated. The next auto-generated INSERT picks a low ID that already exists, causing "duplicate key violates unique constraint." This is one of the most common post-migration production errors, documented extensively in Django, Rails, Supabase, and Prisma issue trackers.',
  docsUrl: "https://migrationpilot.dev/rules/mp059",
  check(_stmt, ctx) {
    const sql = ctx.originalSql.trim();
    const sqlLower = sql.toLowerCase();
    if (!sqlLower.startsWith("insert")) return null;
    const valuesMatch = sql.match(/VALUES\s*\(\s*(\d+)\s*[,)]/i);
    if (!valuesMatch) return null;
    const tableMatch = sql.match(/INSERT\s+INTO\s+(\S+)/i);
    if (!tableMatch) return null;
    const table = tableMatch[1].replace(/"/g, "");
    const hasSequenceReset = ctx.allStatements.some((s) => {
      const stmtSql = s.originalSql.toLowerCase();
      return stmtSql.includes("setval") && stmtSql.includes(table.toLowerCase()) || stmtSql.includes("alter sequence") && stmtSql.includes("restart");
    });
    if (hasSequenceReset) return null;
    return {
      ruleId: "MP059",
      ruleName: "sequence-not-reset-after-data-migration",
      severity: "warning",
      message: `INSERT INTO "${table}" with explicit integer IDs without resetting the sequence. The next auto-generated ID may conflict with existing rows.`,
      line: ctx.line,
      safeAlternative: `-- Reset the sequence after inserting with explicit IDs:
SELECT setval(pg_get_serial_sequence('${table}', 'id'), COALESCE(MAX(id), 1)) FROM ${table};`
    };
  }
};

// src/rules/MP060-alter-type-rename-value.ts
var alterTypeRenameValue = {
  id: "MP060",
  name: "alter-type-rename-value",
  severity: "critical",
  description: "ALTER TYPE ... RENAME VALUE is not replicated via logical replication, silently causing enum mismatches on subscribers.",
  whyItMatters: "RENAME VALUE modifies the pg_enum catalog entry in-place. Logical replication does not replicate catalog changes, so subscribers (Neon branches, Supabase read replicas, RDS logical replicas, Debezium CDC) retain the old value name. Any row containing the renamed value that arrives via replication will fail to decode. The only safe alternative is to add a new value, migrate data, then drop the old one.",
  docsUrl: "https://migrationpilot.dev/rules/mp060",
  check(stmt, _ctx) {
    if (!("AlterEnumStmt" in stmt)) return null;
    const alterEnum = stmt.AlterEnumStmt;
    const sql = _ctx.originalSql.toLowerCase();
    if (!sql.includes("rename value")) return null;
    const typeName = alterEnum.typeName?.filter((t) => t.String?.sval).map((t) => t.String.sval).join(".") ?? "unknown";
    return {
      ruleId: "MP060",
      ruleName: "alter-type-rename-value",
      severity: "critical",
      message: `ALTER TYPE "${typeName}" RENAME VALUE is not replicated via logical replication. This silently causes enum mismatches on subscribers (Neon, Supabase, RDS replicas, CDC pipelines).`,
      line: _ctx.line,
      safeAlternative: `-- Instead of RENAME VALUE, use add-migrate-drop:
-- 1. ALTER TYPE ${typeName} ADD VALUE 'new_name';
-- 2. UPDATE table SET col = 'new_name' WHERE col = 'old_name';
-- 3. -- Drop old value requires recreating the type (complex but safe)`
    };
  }
};

// src/rules/MP061-suboptimal-column-order.ts
var FIXED_SIZE_TYPES = /* @__PURE__ */ new Set([
  "bool",
  "boolean",
  "int2",
  "smallint",
  "int4",
  "integer",
  "int",
  "int8",
  "bigint",
  "float4",
  "real",
  "float8",
  "double precision",
  "numeric",
  "decimal",
  "date",
  "time",
  "timetz",
  "timestamp",
  "timestamptz",
  "interval",
  "uuid",
  "oid",
  "money",
  "inet",
  "cidr",
  "macaddr",
  "macaddr8",
  "point",
  "line",
  "lseg",
  "box",
  "path",
  "polygon",
  "circle"
]);
function isFixedSize(typeName) {
  return FIXED_SIZE_TYPES.has(typeName.toLowerCase());
}
function extractTypeName2(typeNames) {
  if (!Array.isArray(typeNames)) return "";
  const parts = typeNames.filter(
    (n) => n != null && typeof n === "object" && "String" in n
  ).map((n) => n.String.sval);
  const name = parts[parts.length - 1];
  return name ? name.toLowerCase() : "";
}
var suboptimalColumnOrder = {
  id: "MP061",
  name: "suboptimal-column-order",
  severity: "warning",
  description: "CREATE TABLE has variable-length columns before fixed-size columns, wasting alignment padding.",
  whyItMatters: "PostgreSQL stores columns in declaration order. Fixed-size types (int, bigint, timestamp, uuid) before variable-length types (text, jsonb, bytea) reduces alignment padding waste \u2014 saving 4-16 bytes per row on tables with mixed types.",
  docsUrl: "https://migrationpilot.dev/rules/mp061",
  check(stmt) {
    const create = stmt.CreateStmt;
    if (!create?.tableElts || !create.relation?.relname) return null;
    const columns = create.tableElts.filter(
      (e) => e.ColumnDef != null && e.ColumnDef.colname != null
    ).map((e) => ({
      name: e.ColumnDef.colname,
      typeName: extractTypeName2(e.ColumnDef.typeName?.names),
      fixed: isFixedSize(extractTypeName2(e.ColumnDef.typeName?.names))
    }));
    if (columns.length < 3) return null;
    let lastVarIdx = -1;
    let firstFixedAfterVar = -1;
    for (let i = 0; i < columns.length; i++) {
      const col = columns[i];
      if (!col) continue;
      if (!col.fixed && col.typeName !== "") {
        lastVarIdx = i;
      }
      if (col.fixed && lastVarIdx >= 0 && firstFixedAfterVar < 0) {
        firstFixedAfterVar = i;
      }
    }
    if (firstFixedAfterVar < 0) return null;
    const varCols = columns.filter((c) => !c.fixed && c.typeName !== "").map((c) => c.name);
    const fixedCols = columns.filter((c) => c.fixed).map((c) => c.name);
    if (varCols.length === 0 || fixedCols.length === 0) return null;
    return {
      ruleId: "MP061",
      ruleName: "suboptimal-column-order",
      severity: "warning",
      message: `Table "${create.relation.relname}": place fixed-size columns (${fixedCols.join(", ")}) before variable-length columns (${varCols.join(", ")}) to reduce alignment padding.`,
      line: 1,
      statement: ""
    };
  }
};

// src/rules/MP062-ban-add-generated-stored.ts
var banAddGeneratedStored = {
  id: "MP062",
  name: "ban-add-generated-stored-column",
  severity: "critical",
  description: "Adding a stored generated column causes a full table rewrite under ACCESS EXCLUSIVE lock.",
  whyItMatters: "ALTER TABLE ADD COLUMN with GENERATED ALWAYS AS ... STORED rewrites every row to compute and store the expression. On tables with millions of rows, this holds an ACCESS EXCLUSIVE lock for the entire rewrite \u2014 blocking all reads and writes.",
  docsUrl: "https://migrationpilot.dev/rules/mp062",
  check(stmt) {
    const alter = stmt.AlterTableStmt;
    if (!alter?.cmds || !alter.relation?.relname) return null;
    for (const cmdWrapper of alter.cmds) {
      const cmd = cmdWrapper.AlterTableCmd;
      if (!cmd || cmd.subtype !== "AT_AddColumn") continue;
      const colDef = cmd.def?.ColumnDef;
      if (!colDef?.colname) continue;
      const hasStoredGenerated = colDef.constraints?.some(
        (c) => c.Constraint?.contype === "CONSTR_GENERATED"
      );
      if (hasStoredGenerated) {
        return {
          ruleId: "MP062",
          ruleName: "ban-add-generated-stored-column",
          severity: "critical",
          message: `Adding stored generated column "${colDef.colname}" to "${alter.relation.relname}" causes a full table rewrite. Use a regular column with a trigger, or a virtual generated column (PG 17+).`,
          line: 1,
          statement: ""
        };
      }
    }
    return null;
  }
};

// src/rules/MP063-warn-do-block-ddl.ts
var DDL_PATTERNS = [
  /\bALTER\s+TABLE\b/i,
  /\bCREATE\s+INDEX\b/i,
  /\bCREATE\s+TABLE\b/i,
  /\bDROP\s+TABLE\b/i,
  /\bDROP\s+INDEX\b/i,
  /\bDROP\s+COLUMN\b/i,
  /\bADD\s+COLUMN\b/i,
  /\bADD\s+CONSTRAINT\b/i,
  /\bDROP\s+CONSTRAINT\b/i,
  /\bRENAME\b/i,
  /\bTRUNCATE\b/i
];
function extractDoBody(stmt) {
  const doStmt = stmt.DoStmt;
  if (!doStmt?.args) return null;
  for (const arg of doStmt.args) {
    if (arg.DefElem?.defname === "as") {
      return arg.DefElem.arg?.String?.sval ?? null;
    }
  }
  return null;
}
var warnDoBlockDdl = {
  id: "MP063",
  name: "warn-do-block-ddl",
  severity: "warning",
  description: "DO block contains DDL that bypasses static analysis \u2014 lock impact cannot be determined.",
  whyItMatters: "PL/pgSQL DO blocks execute arbitrary code that cannot be analyzed by SQL linters. DDL inside DO blocks (ALTER TABLE, CREATE INDEX, DROP) acquires the same locks as direct SQL, but the operations are invisible to static analysis. Extract DDL from DO blocks into direct SQL statements for full safety analysis.",
  docsUrl: "https://migrationpilot.dev/rules/mp063",
  check(stmt) {
    const body = extractDoBody(stmt);
    if (!body) return null;
    const foundDdl = [];
    for (const pattern of DDL_PATTERNS) {
      if (pattern.test(body)) {
        const match = body.match(pattern);
        if (match) foundDdl.push(match[0].trim());
      }
    }
    if (foundDdl.length === 0) return null;
    const unique = [...new Set(foundDdl.map((d) => d.toUpperCase()))];
    return {
      ruleId: "MP063",
      ruleName: "warn-do-block-ddl",
      severity: "warning",
      message: `DO block contains DDL (${unique.join(", ")}) that cannot be statically analyzed for lock safety. Extract DDL into direct SQL statements.`,
      line: 1,
      statement: ""
    };
  }
};

// src/rules/MP064-ban-disable-trigger.ts
var banDisableTrigger = {
  id: "MP064",
  name: "ban-disable-trigger",
  severity: "critical",
  description: "DISABLE TRIGGER breaks replication, audit logs, and FK enforcement.",
  whyItMatters: "ALTER TABLE DISABLE TRIGGER ALL/USER turns off all triggers on the table. This breaks logical replication (which uses triggers internally), disables audit logging triggers, and bypasses foreign key enforcement. If the session crashes before re-enabling triggers, they remain disabled permanently.",
  docsUrl: "https://migrationpilot.dev/rules/mp064",
  check(stmt) {
    const alter = stmt.AlterTableStmt;
    if (!alter?.cmds || !alter.relation?.relname) return null;
    for (const cmdWrapper of alter.cmds) {
      const cmd = cmdWrapper.AlterTableCmd;
      if (!cmd) continue;
      if (cmd.subtype === "AT_DisableTrigAll" || cmd.subtype === "AT_DisableTrigUser") {
        const scope = cmd.subtype === "AT_DisableTrigAll" ? "ALL" : "USER";
        return {
          ruleId: "MP064",
          ruleName: "ban-disable-trigger",
          severity: "critical",
          message: `DISABLE TRIGGER ${scope} on "${alter.relation.relname}" breaks replication, audit logs, and FK enforcement. Use targeted trigger disabling or restructure the migration.`,
          line: 1,
          statement: ""
        };
      }
    }
    return null;
  }
};

// src/rules/MP065-ban-lock-table.ts
var LOCK_MODE_NAMES = {
  1: "ACCESS SHARE",
  2: "ROW SHARE",
  3: "ROW EXCLUSIVE",
  4: "SHARE UPDATE EXCLUSIVE",
  5: "SHARE",
  6: "SHARE ROW EXCLUSIVE",
  7: "EXCLUSIVE",
  8: "ACCESS EXCLUSIVE"
};
var banLockTable = {
  id: "MP065",
  name: "ban-lock-table",
  severity: "critical",
  description: "Explicit LOCK TABLE in migrations blocks queries and can cause deadlocks.",
  whyItMatters: "LOCK TABLE acquires an explicit lock that can block reads and writes. PostgreSQL DDL statements automatically acquire the correct lock \u2014 explicit LOCK TABLE is rarely needed and often indicates a flawed migration strategy. High lock modes (EXCLUSIVE, ACCESS EXCLUSIVE) block all other operations.",
  docsUrl: "https://migrationpilot.dev/rules/mp065",
  check(stmt) {
    const lockStmt = stmt.LockStmt;
    if (!lockStmt?.relations) return null;
    const tables = lockStmt.relations.map((r) => r.RangeVar?.relname).filter(Boolean).join(", ");
    const mode = lockStmt.mode !== void 0 ? LOCK_MODE_NAMES[lockStmt.mode] ?? `mode ${lockStmt.mode}` : "ACCESS EXCLUSIVE";
    return {
      ruleId: "MP065",
      ruleName: "ban-lock-table",
      severity: "critical",
      message: `Explicit LOCK TABLE on ${tables || "table"} in ${mode} mode. PostgreSQL DDL acquires locks automatically \u2014 remove the explicit lock or restructure the migration.`,
      line: 1,
      statement: ""
    };
  }
};

// src/rules/MP066-warn-autovacuum-disabled.ts
function checkOptions(options) {
  if (!options) return false;
  return options.some((opt) => {
    const elem = opt.DefElem;
    return elem?.defname === "autovacuum_enabled" && elem?.arg?.String?.sval === "false";
  });
}
var warnAutovacuumDisabled = {
  id: "MP066",
  name: "warn-autovacuum-disabled",
  severity: "warning",
  description: "Disabling autovacuum causes table bloat and risks transaction ID wraparound.",
  whyItMatters: "Autovacuum prevents table bloat by reclaiming dead tuples, and prevents transaction ID wraparound \u2014 which can freeze the entire database. Disabling autovacuum is occasionally justified for temporary bulk-load staging tables, but is dangerous for any table that serves production traffic.",
  docsUrl: "https://migrationpilot.dev/rules/mp066",
  check(stmt) {
    const create = stmt.CreateStmt;
    if (create?.relation?.relname && checkOptions(create.options)) {
      return {
        ruleId: "MP066",
        ruleName: "warn-autovacuum-disabled",
        severity: "warning",
        message: `Table "${create.relation.relname}" has autovacuum disabled. This causes table bloat and risks transaction ID wraparound. Re-enable autovacuum after bulk loading.`,
        line: 1,
        statement: ""
      };
    }
    const alter = stmt.AlterTableStmt;
    if (!alter?.cmds || !alter.relation?.relname) return null;
    for (const cmdWrapper of alter.cmds) {
      const cmd = cmdWrapper.AlterTableCmd;
      if (cmd?.subtype !== "AT_SetRelOptions") continue;
      const items = cmd.def?.List?.items;
      if (checkOptions(items)) {
        return {
          ruleId: "MP066",
          ruleName: "warn-autovacuum-disabled",
          severity: "warning",
          message: `Autovacuum disabled on "${alter.relation.relname}". This causes table bloat and risks transaction ID wraparound. Re-enable autovacuum after bulk loading.`,
          line: 1,
          statement: ""
        };
      }
    }
    return null;
  }
};

// src/rules/MP067-warn-backfill-no-batching.ts
var warnBackfillNoBatching = {
  id: "MP067",
  name: "warn-backfill-no-batching",
  severity: "warning",
  description: "DELETE without a WHERE clause removes every row in a single transaction, generating massive WAL and holding locks.",
  whyItMatters: "A full-table DELETE generates a WAL entry for every row, bloats the table with dead tuples, and holds a ROW EXCLUSIVE lock for the entire duration. On tables with millions of rows, this can take hours, cause replication lag, and exhaust disk space. Use batched deletes or TRUNCATE instead.",
  docsUrl: "https://migrationpilot.dev/rules/mp067",
  check(stmt, ctx) {
    if (!("DeleteStmt" in stmt)) return null;
    const del = stmt.DeleteStmt;
    if (del.whereClause) return null;
    const tableName = del.relation?.relname ?? "unknown";
    return {
      ruleId: "MP067",
      ruleName: "warn-backfill-no-batching",
      severity: "warning",
      message: `DELETE on "${tableName}" without a WHERE clause removes every row in a single transaction. Use TRUNCATE for full deletes or batch with WHERE + LIMIT.`,
      line: ctx.line,
      safeAlternative: `-- For full table delete, use TRUNCATE (much faster, minimal WAL):
TRUNCATE ${tableName};

-- For partial deletes, batch to reduce lock duration:
DELETE FROM ${tableName} WHERE ctid IN (
  SELECT ctid FROM ${tableName} LIMIT 10000
);`
    };
  }
};

// src/rules/MP068-warn-integer-pk-capacity.ts
var warnIntegerPkCapacity = {
  id: "MP068",
  name: "warn-integer-pk-capacity",
  severity: "warning",
  description: "Sequence uses integer type (max ~2.1B). Use bigint to avoid expensive future migration.",
  whyItMatters: 'Integer sequences overflow at ~2.1 billion (int4) or ~32,000 (int2). When a sequence overflows, all INSERTs fail with a "nextval: reached maximum value" error. Migrating from integer to bigint on a live sequence requires rewriting the dependent column under ACCESS EXCLUSIVE lock. Buildkite, Mailchimp, and others have reported major outages from this.',
  docsUrl: "https://migrationpilot.dev/rules/mp068",
  check(stmt, ctx) {
    const createSeq = stmt.CreateSeqStmt;
    if (createSeq?.sequence?.relname) {
      const seqName = createSeq.sequence.relname;
      const options = createSeq.options ?? [];
      for (const opt of options) {
        const elem = opt.DefElem;
        if (elem?.defname !== "as") continue;
        const typeNames = elem.arg?.TypeName?.names?.map((n) => n.String?.sval).filter((n) => !!n) ?? [];
        const isSmallType = typeNames.some(
          (n) => n === "int4" || n === "int2" || n === "integer" || n === "smallint"
        );
        if (isSmallType) {
          return {
            ruleId: "MP068",
            ruleName: "warn-integer-pk-capacity",
            severity: "warning",
            message: `Sequence "${seqName}" uses integer type (max ~2.1B). Use BIGINT to prevent overflow and avoid expensive future migration.`,
            line: ctx.line,
            safeAlternative: `-- Use bigint for sequences to prevent overflow:
CREATE SEQUENCE ${seqName} AS bigint;`
          };
        }
      }
    }
    return null;
  }
};

// src/rules/MP069-warn-fk-lock-both-tables.ts
var warnFkLockBothTables = {
  id: "MP069",
  name: "warn-fk-lock-both-tables",
  severity: "warning",
  description: "Adding a foreign key locks BOTH the source and referenced table simultaneously.",
  whyItMatters: "ALTER TABLE ADD CONSTRAINT ... FOREIGN KEY acquires SHARE ROW EXCLUSIVE lock on both the table with the FK column AND the referenced table. This blocks writes to both tables simultaneously, doubling the blast radius. If either table is high-traffic, the lock wait can cascade to all queries on both tables.",
  docsUrl: "https://migrationpilot.dev/rules/mp069",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    for (const cmdWrapper of alter.cmds) {
      const cmd = cmdWrapper.AlterTableCmd;
      if (!cmd || cmd.subtype !== "AT_AddConstraint") continue;
      const constraint = cmd.def?.Constraint;
      if (!constraint || constraint.contype !== "CONSTR_FOREIGN") continue;
      const sourceTable = alter.relation?.relname ?? "unknown";
      const refTable = constraint.pktable?.relname ?? "unknown";
      const constraintName = constraint.conname ?? "fk";
      return {
        ruleId: "MP069",
        ruleName: "warn-fk-lock-both-tables",
        severity: "warning",
        message: `FK "${constraintName}" locks both "${sourceTable}" AND "${refTable}" simultaneously (SHARE ROW EXCLUSIVE). Set lock_timeout on both tables to fail fast.`,
        line: ctx.line,
        safeAlternative: `-- Set a short lock_timeout to prevent cascading locks:
SET lock_timeout = '3s';
ALTER TABLE ${sourceTable} ADD CONSTRAINT ${constraintName}
  FOREIGN KEY (...) REFERENCES ${refTable} (...) NOT VALID;
RESET lock_timeout;

-- Then validate separately (weaker lock):
ALTER TABLE ${sourceTable} VALIDATE CONSTRAINT ${constraintName};`
      };
    }
    return null;
  }
};

// src/rules/MP070-warn-concurrent-index-invalid.ts
var warnConcurrentIndexInvalid = {
  id: "MP070",
  name: "warn-concurrent-index-invalid",
  severity: "warning",
  description: "CREATE INDEX CONCURRENTLY can leave an invalid index on failure. Add DROP INDEX IF EXISTS before retrying.",
  whyItMatters: 'If CREATE INDEX CONCURRENTLY fails (due to deadlock, unique violation, or timeout), it leaves behind an INVALID index that is never used for queries but still slows down writes. Retrying without first dropping the invalid index fails with "relation already exists". Always precede CONCURRENTLY index creation with DROP INDEX IF EXISTS to handle retries safely.',
  docsUrl: "https://migrationpilot.dev/rules/mp070",
  check(stmt, ctx) {
    if (!("IndexStmt" in stmt)) return null;
    const idx = stmt.IndexStmt;
    if (!idx.concurrent || !idx.idxname) return null;
    if (idx.if_not_exists) return null;
    const indexName = idx.idxname;
    const tableName = idx.relation?.relname ?? "unknown";
    const hasDropBefore = ctx.allStatements.some((s, i) => {
      if (i >= ctx.statementIndex) return false;
      const sql = s.originalSql.toLowerCase();
      return sql.includes("drop index") && sql.includes("if exists") && sql.includes(indexName.toLowerCase());
    });
    if (hasDropBefore) return null;
    return {
      ruleId: "MP070",
      ruleName: "warn-concurrent-index-invalid",
      severity: "warning",
      message: `CREATE INDEX CONCURRENTLY "${indexName}" on "${tableName}" without a preceding DROP INDEX IF EXISTS. If this fails and is retried, the stale invalid index will block creation.`,
      line: ctx.line,
      safeAlternative: `-- Drop any stale invalid index before creating:
DROP INDEX IF EXISTS ${indexName};
CREATE INDEX CONCURRENTLY ${indexName} ON ${tableName} (...);`
    };
  }
};

// src/rules/MP071-ban-rename-in-use-column.ts
var banRenameInUseColumn = {
  id: "MP071",
  name: "ban-rename-in-use-column",
  severity: "warning",
  description: "Renaming a column breaks views, functions, and triggers that reference the old name. Use add-copy-drop pattern instead.",
  whyItMatters: "PostgreSQL does not automatically update views, functions, triggers, or policies when a column is renamed. All dependent objects continue referencing the old name and fail at query time. The safe alternative is the add-copy-drop pattern: add a new column, backfill data, update all dependents, then drop the old column in a separate migration.",
  docsUrl: "https://migrationpilot.dev/rules/mp071",
  check(stmt, ctx) {
    if (!("RenameStmt" in stmt)) return null;
    const rename = stmt.RenameStmt;
    if (rename.renameType !== "OBJECT_COLUMN" && rename.renameType !== 7) return null;
    const table = rename.relation?.relname ?? "unknown";
    const oldName = rename.subname ?? "unknown";
    const newName = rename.newname ?? "unknown";
    const updatesViews = ctx.allStatements.some((s) => {
      const sql = s.originalSql.toLowerCase();
      return (sql.includes("create or replace view") || sql.includes("create or replace function")) && sql.includes(newName.toLowerCase());
    });
    if (updatesViews) return null;
    return {
      ruleId: "MP071",
      ruleName: "ban-rename-in-use-column",
      severity: "warning",
      message: `Renaming "${oldName}" to "${newName}" on "${table}" will break any views, functions, or triggers referencing the old name. Use the add-copy-drop pattern instead.`,
      line: ctx.line,
      safeAlternative: `-- Safe add-copy-drop pattern:
-- Step 1: Add new column
ALTER TABLE ${table} ADD COLUMN ${newName} <type>;

-- Step 2: Backfill data (batched for large tables)
UPDATE ${table} SET ${newName} = ${oldName} WHERE ${newName} IS NULL;

-- Step 3: Update all views, functions, triggers to use "${newName}"

-- Step 4: Drop old column in a separate migration
ALTER TABLE ${table} DROP COLUMN ${oldName};`
    };
  }
};

// src/rules/MP072-warn-partition-default-scan.ts
var warnPartitionDefaultScan = {
  id: "MP072",
  name: "warn-partition-default-scan",
  severity: "warning",
  description: "ATTACH PARTITION scans the DEFAULT partition under ACCESS EXCLUSIVE lock to check for overlapping rows.",
  whyItMatters: "When attaching a new partition, PostgreSQL must verify that no rows in the DEFAULT partition belong to the new partition range. This requires scanning the entire DEFAULT partition while holding an ACCESS EXCLUSIVE lock on it. If the default partition is large, this scan blocks all reads and writes for its entire duration.",
  docsUrl: "https://migrationpilot.dev/rules/mp072",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    const parentTable = alter.relation?.relname ?? "unknown";
    for (const cmdWrapper of alter.cmds) {
      const cmd = cmdWrapper.AlterTableCmd;
      if (!cmd || cmd.subtype !== "AT_AttachPartition") continue;
      const partName = cmd.def?.PartitionCmd?.name?.relname ?? "unknown";
      return {
        ruleId: "MP072",
        ruleName: "warn-partition-default-scan",
        severity: "warning",
        message: `ATTACH PARTITION "${partName}" to "${parentTable}" scans the DEFAULT partition under ACCESS EXCLUSIVE lock. Ensure the default partition is small or empty.`,
        line: ctx.line,
        safeAlternative: `-- Before attaching, move rows from default partition to avoid a long scan:
-- 1. Create the new partition detached first
-- 2. Move matching rows from DEFAULT to new partition
-- 3. Then attach:
SET lock_timeout = '5s';
ALTER TABLE ${parentTable} ATTACH PARTITION ${partName} FOR VALUES ...;
RESET lock_timeout;`
      };
    }
    return null;
  }
};

// src/rules/MP073-ban-superuser-role.ts
var banSuperuserRole = {
  id: "MP073",
  name: "ban-superuser-role",
  severity: "critical",
  description: "Migration uses superuser-only operations. Migrations should run with minimal privileges.",
  whyItMatters: "Running migrations as SUPERUSER is a security risk: a malicious or buggy migration can modify system catalogs, bypass RLS, and damage the cluster. Managed database services (RDS, Cloud SQL, Neon, Supabase) do not grant SUPERUSER access, so these operations will fail in production. Design migrations to work with the minimum required privileges.",
  docsUrl: "https://migrationpilot.dev/rules/mp073",
  check(stmt, ctx) {
    if ("AlterSystemStmt" in stmt) {
      return {
        ruleId: "MP073",
        ruleName: "ban-superuser-role",
        severity: "critical",
        message: "ALTER SYSTEM requires SUPERUSER privileges and modifies postgresql.conf. Use ALTER DATABASE ... SET for per-database settings instead.",
        line: ctx.line,
        safeAlternative: `-- Use per-database settings instead of system-wide:
ALTER DATABASE mydb SET <parameter> = '<value>';`
      };
    }
    const createRole = stmt.CreateRoleStmt;
    if (createRole?.role) {
      if (hasSuperuserOption(createRole.options)) {
        return {
          ruleId: "MP073",
          ruleName: "ban-superuser-role",
          severity: "critical",
          message: `CREATE ROLE "${createRole.role}" WITH SUPERUSER. Migrations should not create superuser roles. Use specific GRANT statements instead.`,
          line: ctx.line,
          safeAlternative: `-- Grant only the specific privileges needed:
CREATE ROLE ${createRole.role};
GRANT CREATE ON DATABASE mydb TO ${createRole.role};`
        };
      }
    }
    const alterRole = stmt.AlterRoleStmt;
    if (alterRole?.role?.rolename) {
      if (hasSuperuserOption(alterRole.options)) {
        return {
          ruleId: "MP073",
          ruleName: "ban-superuser-role",
          severity: "critical",
          message: `ALTER ROLE "${alterRole.role.rolename}" SUPERUSER. Migrations should not grant superuser. Use specific GRANT statements instead.`,
          line: ctx.line
        };
      }
    }
    return null;
  }
};
function hasSuperuserOption(options) {
  if (!options) return false;
  return options.some((opt) => {
    const elem = opt.DefElem;
    if (elem?.defname !== "superuser") return false;
    if (!elem.arg) return true;
    if (elem.arg.Boolean?.boolval === true) return true;
    if (elem.arg.Integer?.ival === 1) return true;
    return false;
  });
}

// src/rules/MP074-require-deferrable-fk.ts
var requireDeferrableFk = {
  id: "MP074",
  name: "require-deferrable-fk",
  severity: "warning",
  description: "FK constraints should be DEFERRABLE to support safe bulk operations and avoid ordering issues.",
  whyItMatters: "Non-deferrable foreign keys are checked per-row during INSERT/UPDATE, requiring careful insertion order. With DEFERRABLE INITIALLY DEFERRED, FK checks happen at COMMIT time, allowing bulk inserts, circular references, and data migrations to proceed without ordering constraints. This is especially important for tables that reference each other.",
  docsUrl: "https://migrationpilot.dev/rules/mp074",
  check(stmt, ctx) {
    if ("AlterTableStmt" in stmt) {
      const alter = stmt.AlterTableStmt;
      if (!alter.cmds) return null;
      for (const cmdWrapper of alter.cmds) {
        const cmd = cmdWrapper.AlterTableCmd;
        if (!cmd || cmd.subtype !== "AT_AddConstraint") continue;
        const constraint = cmd.def?.Constraint;
        if (!constraint || constraint.contype !== "CONSTR_FOREIGN") continue;
        if (constraint.deferrable) continue;
        const table = alter.relation?.relname ?? "unknown";
        const name = constraint.conname ?? "unnamed_fk";
        const ref = constraint.pktable?.relname ?? "unknown";
        return {
          ruleId: "MP074",
          ruleName: "require-deferrable-fk",
          severity: "warning",
          message: `FK "${name}" on "${table}" \u2192 "${ref}" is not DEFERRABLE. This forces row-by-row checking during bulk operations.`,
          line: ctx.line,
          safeAlternative: `ALTER TABLE ${table} ADD CONSTRAINT ${name}
  FOREIGN KEY (...) REFERENCES ${ref} (...)
  DEFERRABLE INITIALLY DEFERRED NOT VALID;`
        };
      }
    }
    if ("CreateStmt" in stmt) {
      const create = stmt.CreateStmt;
      if (!create.tableElts) return null;
      const table = create.relation?.relname ?? "unknown";
      for (const elt of create.tableElts) {
        if (elt.Constraint?.contype === "CONSTR_FOREIGN" && !elt.Constraint.deferrable) {
          const name = elt.Constraint.conname ?? "unnamed_fk";
          const ref = elt.Constraint.pktable?.relname ?? "unknown";
          return {
            ruleId: "MP074",
            ruleName: "require-deferrable-fk",
            severity: "warning",
            message: `FK "${name}" on "${table}" \u2192 "${ref}" is not DEFERRABLE. Add DEFERRABLE INITIALLY DEFERRED for safe bulk operations.`,
            line: ctx.line
          };
        }
        if (elt.ColumnDef?.constraints) {
          for (const c of elt.ColumnDef.constraints) {
            if (c.Constraint?.contype === "CONSTR_FOREIGN" && !c.Constraint.deferrable) {
              const ref = c.Constraint.pktable?.relname ?? "unknown";
              return {
                ruleId: "MP074",
                ruleName: "require-deferrable-fk",
                severity: "warning",
                message: `FK on "${table}"."${elt.ColumnDef.colname}" \u2192 "${ref}" is not DEFERRABLE. Add DEFERRABLE for safe bulk operations.`,
                line: ctx.line
              };
            }
          }
        }
      }
    }
    return null;
  }
};

// src/rules/MP075-warn-toast-bloat-risk.ts
var TOAST_FUNCTION_PATTERNS = [
  "jsonb_set",
  "jsonb_build_object",
  "jsonb_build_array",
  "jsonb_strip_nulls",
  "jsonb_insert",
  "json_build_object",
  "json_build_array",
  "to_jsonb",
  "to_json",
  "array_to_json",
  "row_to_json",
  "encode",
  "decode",
  "convert_to"
];
var TOAST_COLUMN_PATTERNS = [
  "metadata",
  "payload",
  "body",
  "content",
  "data",
  "config",
  "settings",
  "preferences",
  "properties",
  "attributes",
  "extra",
  "details",
  "description",
  "notes",
  "raw_data",
  "json_data"
];
var warnToastBloatRisk = {
  id: "MP075",
  name: "warn-toast-bloat-risk",
  severity: "warning",
  description: "UPDATE on TOAST-eligible columns (TEXT/JSONB/BYTEA) causes storage bloat until VACUUM runs.",
  whyItMatters: "When you UPDATE a row with TOAST-stored columns, PostgreSQL creates new TOAST chunks and marks old chunks as dead. Dead chunks are only reclaimed by VACUUM. Bulk updates on TOAST-heavy columns can cause tables to grow many times their logical size, degrading query performance and exhausting disk space.",
  docsUrl: "https://migrationpilot.dev/rules/mp075",
  check(stmt, ctx) {
    if (!("UpdateStmt" in stmt)) return null;
    const update = stmt.UpdateStmt;
    const sql = ctx.originalSql.toLowerCase();
    const tableName = update.relation?.relname ?? "unknown";
    const hasToastFunction = TOAST_FUNCTION_PATTERNS.some((fn) => sql.includes(fn));
    const hasToastColumn = TOAST_COLUMN_PATTERNS.some((col) => {
      const setPattern = new RegExp(`set\\s+.*\\b${col}\\b\\s*=`, "i");
      return setPattern.test(ctx.originalSql);
    });
    if (!hasToastFunction && !hasToastColumn) return null;
    const pattern = hasToastFunction ? "JSONB/JSON function calls" : "TOAST-eligible column modifications";
    return {
      ruleId: "MP075",
      ruleName: "warn-toast-bloat-risk",
      severity: "warning",
      message: `UPDATE on "${tableName}" with ${pattern}. TOAST chunk rewrites cause table bloat until VACUUM runs. Run VACUUM after bulk updates.`,
      line: ctx.line,
      safeAlternative: `-- After bulk TOAST-column updates, reclaim space:
${ctx.originalSql}

-- Run VACUUM to reclaim dead TOAST chunks:
VACUUM (VERBOSE) ${tableName};`
    };
  }
};

// src/rules/MP076-warn-xid-consuming-retry.ts
var warnXidConsumingRetry = {
  id: "MP076",
  name: "warn-xid-consuming-retry",
  severity: "warning",
  description: "SAVEPOINT creates subtransactions that consume XIDs and accelerate wraparound risk.",
  whyItMatters: "Each SAVEPOINT allocates a new transaction ID (XID). In retry loops, every SAVEPOINT/ROLLBACK TO consumes another XID without the previous one being freed. On systems processing millions of transactions, subtransaction XID consumption can push the database toward XID wraparound \u2014 which forces a complete database freeze for maintenance. PostgreSQL 14+ improved subtransaction handling, but the XID cost remains.",
  docsUrl: "https://migrationpilot.dev/rules/mp076",
  check(stmt, ctx) {
    const txn = stmt.TransactionStmt;
    if (!txn) return null;
    if (txn.kind !== "TRANS_STMT_SAVEPOINT" && txn.kind !== 3) return null;
    const name = txn.savepoint_name ?? "unnamed";
    return {
      ruleId: "MP076",
      ruleName: "warn-xid-consuming-retry",
      severity: "warning",
      message: `SAVEPOINT "${name}" creates a subtransaction that consumes a separate XID. In retry loops, this accelerates XID wraparound risk.`,
      line: ctx.line,
      safeAlternative: `-- Consider restructuring to avoid subtransactions:
-- 1. Use separate transactions instead of SAVEPOINT/ROLLBACK TO
-- 2. Use advisory locks for coordination instead of subtransactions
-- 3. If retries are needed, retry the entire transaction, not a subtransaction`
    };
  }
};

// src/rules/MP077-prefer-lz4-toast-compression.ts
var preferLz4ToastCompression = {
  id: "MP077",
  name: "prefer-lz4-toast-compression",
  severity: "warning",
  description: "Use lz4 TOAST compression instead of pglz on PostgreSQL 14+ for better performance.",
  whyItMatters: "PostgreSQL 14 introduced lz4 as an alternative TOAST compression method. lz4 is 3-5x faster for both compression and decompression compared to the default pglz, with only slightly worse compression ratios. For JSONB, TEXT, and BYTEA columns with frequent reads/writes, lz4 significantly reduces CPU overhead.",
  docsUrl: "https://migrationpilot.dev/rules/mp077",
  check(stmt, ctx) {
    if (ctx.pgVersion < 14) return null;
    if ("AlterTableStmt" in stmt) {
      const alter = stmt.AlterTableStmt;
      if (!alter.cmds) return null;
      const table = alter.relation?.relname ?? "unknown";
      for (const cmdWrapper of alter.cmds) {
        const cmd = cmdWrapper.AlterTableCmd;
        if (!cmd || cmd.subtype !== "AT_SetCompression") continue;
        const compression = cmd.def?.String?.sval?.toLowerCase();
        if (compression !== "pglz") continue;
        const column = cmd.name ?? "unknown";
        return {
          ruleId: "MP077",
          ruleName: "prefer-lz4-toast-compression",
          severity: "warning",
          message: `Column "${column}" on "${table}" uses pglz compression. Use lz4 on PG 14+ for 3-5x faster compression/decompression.`,
          line: ctx.line,
          safeAlternative: `ALTER TABLE ${table} ALTER COLUMN ${column} SET COMPRESSION lz4;`
        };
      }
    }
    if ("VariableSetStmt" in stmt) {
      const setStmt = stmt.VariableSetStmt;
      if (setStmt.name?.toLowerCase() === "default_toast_compression") {
        const val = setStmt.args?.[0]?.String?.sval?.toLowerCase();
        if (val === "pglz") {
          return {
            ruleId: "MP077",
            ruleName: "prefer-lz4-toast-compression",
            severity: "warning",
            message: "Setting default_toast_compression to pglz. Use lz4 on PG 14+ for better performance.",
            line: ctx.line,
            safeAlternative: `SET default_toast_compression = 'lz4';`
          };
        }
      }
    }
    return null;
  }
};

// src/rules/MP078-warn-extension-version-pin.ts
var warnExtensionVersionPin = {
  id: "MP078",
  name: "warn-extension-version-pin",
  severity: "warning",
  description: "CREATE EXTENSION without VERSION clause. Pin the version for reproducible migrations.",
  whyItMatters: "Without a VERSION clause, CREATE EXTENSION installs the server's default version, which can differ between development, staging, and production environments. This makes migrations non-reproducible and can cause subtle behavior differences. Pinning the version ensures consistent behavior across all environments.",
  docsUrl: "https://migrationpilot.dev/rules/mp078",
  check(stmt, ctx) {
    const ext = stmt.CreateExtensionStmt;
    if (!ext?.extname) return null;
    const extName = ext.extname;
    const hasVersion = ext.options?.some(
      (opt) => opt.DefElem?.defname === "new_version"
    );
    if (hasVersion) return null;
    return {
      ruleId: "MP078",
      ruleName: "warn-extension-version-pin",
      severity: "warning",
      message: `CREATE EXTENSION "${extName}" without VERSION clause. Pin the version for reproducible migrations across environments.`,
      line: ctx.line,
      safeAlternative: `CREATE EXTENSION ${ext.if_not_exists ? "IF NOT EXISTS " : ""}"${extName}" VERSION '1.0';`
    };
  }
};

// src/rules/MP079-warn-rls-policy-completeness.ts
var RLS_OPERATIONS = ["select", "insert", "update", "delete"];
var warnRlsPolicyCompleteness = {
  id: "MP079",
  name: "warn-rls-policy-completeness",
  severity: "warning",
  description: "RLS policies should cover all operations (SELECT, INSERT, UPDATE, DELETE) to avoid silent access denial.",
  whyItMatters: "When RLS is enabled, any operation without a policy is silently denied \u2014 queries return zero rows instead of raising an error. If you create a SELECT policy but forget INSERT, all inserts silently fail (or error on PG 15+). Always create policies for all operations or use a permissive ALL policy as a baseline.",
  docsUrl: "https://migrationpilot.dev/rules/mp079",
  check(stmt, ctx) {
    if (!("AlterTableStmt" in stmt)) return null;
    const alter = stmt.AlterTableStmt;
    if (!alter.cmds) return null;
    const table = alter.relation?.relname ?? "unknown";
    const enablesRls = alter.cmds.some(
      (cmd) => cmd.AlterTableCmd?.subtype === "AT_EnableRowSecurity"
    );
    if (!enablesRls) return null;
    const coveredOps = /* @__PURE__ */ new Set();
    for (const s of ctx.allStatements) {
      const sql = s.originalSql.toLowerCase();
      if (!sql.includes("create policy") || !sql.includes(table.toLowerCase())) continue;
      if (sql.includes(" for all ") || /\bfor\s+all\b/.test(sql)) {
        return null;
      }
      for (const op of RLS_OPERATIONS) {
        if (sql.includes(` for ${op} `) || sql.includes(` for ${op};`) || new RegExp(`\\bfor\\s+${op}\\b`).test(sql)) {
          coveredOps.add(op);
        }
      }
    }
    if (coveredOps.size === 0) return null;
    const missingOps = RLS_OPERATIONS.filter((op) => !coveredOps.has(op));
    if (missingOps.length === 0) return null;
    return {
      ruleId: "MP079",
      ruleName: "warn-rls-policy-completeness",
      severity: "warning",
      message: `RLS on "${table}" has policies for ${[...coveredOps].join(", ")} but missing ${missingOps.join(", ")}. Uncovered operations will be silently denied.`,
      line: ctx.line,
      safeAlternative: missingOps.map(
        (op) => `CREATE POLICY ${table}_${op} ON ${table} FOR ${op.toUpperCase()} USING (true);`
      ).join("\n")
    };
  }
};

// src/rules/MP080-ban-data-in-migration.ts
var banDataInMigration = {
  id: "MP080",
  name: "ban-data-in-migration",
  severity: "warning",
  description: "Data manipulation (INSERT/UPDATE/DELETE) in a DDL migration file. Separate schema and data changes.",
  whyItMatters: "Mixing DDL (schema changes) and DML (data changes) in the same migration makes rollback harder, increases lock duration, and violates separation of concerns. If the DDL portion fails, the data changes may have already been applied. Data migrations should be in separate files with explicit rollback strategies and batching for large datasets.",
  docsUrl: "https://migrationpilot.dev/rules/mp080",
  check(stmt, ctx) {
    const isDml = "InsertStmt" in stmt || "UpdateStmt" in stmt || "DeleteStmt" in stmt;
    if (!isDml) return null;
    const hasDdl = ctx.allStatements.some((s) => isDDL(s.stmt));
    if (!hasDdl) return null;
    let dmlType = "DML";
    let tableName = "unknown";
    if ("InsertStmt" in stmt) {
      dmlType = "INSERT";
      const insert = stmt.InsertStmt;
      tableName = insert.relation?.relname ?? "unknown";
    } else if ("UpdateStmt" in stmt) {
      dmlType = "UPDATE";
      const update = stmt.UpdateStmt;
      tableName = update.relation?.relname ?? "unknown";
    } else if ("DeleteStmt" in stmt) {
      dmlType = "DELETE";
      const del = stmt.DeleteStmt;
      tableName = del.relation?.relname ?? "unknown";
    }
    return {
      ruleId: "MP080",
      ruleName: "ban-data-in-migration",
      severity: "warning",
      message: `${dmlType} on "${tableName}" in a DDL migration file. Separate schema changes and data changes into different migration files.`,
      line: ctx.line,
      safeAlternative: `-- Move data manipulation to a separate migration file:
-- migrations/003_schema_change.sql (DDL only)
-- migrations/004_data_backfill.sql  (DML only, with batching)`
    };
  }
};

// src/rules/disable.ts
function parseDisableDirectives(sql) {
  const directives = [];
  const lines = sql.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line === void 0) continue;
    const lineNum = i + 1;
    const inlineMatch = line.match(/--\s*migrationpilot-disable(-file)?\s*(.*?)$/i);
    if (inlineMatch) {
      const isFile = !!inlineMatch[1];
      const ruleStr = (inlineMatch[2] ?? "").trim();
      directives.push({
        type: isFile ? "file" : "statement",
        ruleIds: parseRuleIds(ruleStr),
        line: lineNum
      });
    }
    const blockMatch = line.match(/\/\*\s*migrationpilot-disable(-file)?\s*(.*?)\*\//i);
    if (blockMatch) {
      const isFile = !!blockMatch[1];
      const ruleStr = (blockMatch[2] ?? "").trim();
      directives.push({
        type: isFile ? "file" : "statement",
        ruleIds: parseRuleIds(ruleStr),
        line: lineNum
      });
    }
  }
  return directives;
}
function parseRuleIds(str) {
  if (!str || str.trim() === "") return "all";
  return str.split(/[,\s]+/).map((s) => s.trim().toUpperCase()).filter((s) => /^MP\d{3}$/.test(s));
}
function filterDisabledViolations(violations, directives, statementLines) {
  if (directives.length === 0) return violations;
  const fileDisabled = /* @__PURE__ */ new Set();
  let fileDisableAll = false;
  for (const d of directives) {
    if (d.type === "file") {
      if (d.ruleIds === "all") {
        fileDisableAll = true;
      } else {
        for (const id of d.ruleIds) fileDisabled.add(id);
      }
    }
  }
  if (fileDisableAll) return [];
  const stmtDisableMap = /* @__PURE__ */ new Map();
  for (const d of directives) {
    if (d.type !== "statement") continue;
    const nextStmtLine = statementLines.find((l) => l >= d.line);
    if (!nextStmtLine) continue;
    const existing = stmtDisableMap.get(nextStmtLine);
    if (existing === "all" || d.ruleIds === "all") {
      stmtDisableMap.set(nextStmtLine, "all");
    } else {
      const set = existing ?? /* @__PURE__ */ new Set();
      for (const id of d.ruleIds) set.add(id);
      stmtDisableMap.set(nextStmtLine, set);
    }
  }
  return violations.filter((v) => {
    if (fileDisabled.has(v.ruleId)) return false;
    const stmtDisable = stmtDisableMap.get(v.line);
    if (!stmtDisable) return true;
    if (stmtDisable === "all") return false;
    return !stmtDisable.has(v.ruleId);
  });
}

// src/rules/engine.ts
function runRules(rules, statements, pgVersion, productionContext, fullSql) {
  const violations = [];
  for (let i = 0; i < statements.length; i++) {
    const entry = statements[i];
    if (!entry) continue;
    const { stmt, originalSql, line, lock } = entry;
    let tableStats;
    let affectedQueries;
    let activeConnections;
    if (productionContext) {
      const targets = extractTargets(stmt);
      const tableName = targets[0]?.tableName;
      if (tableName) {
        tableStats = productionContext.tableStats.get(tableName);
        const queries = productionContext.affectedQueries.get(tableName);
        if (queries && queries.length > 0) affectedQueries = queries;
        const conns = productionContext.activeConnections.get(tableName);
        if (conns && conns > 0) activeConnections = conns;
      }
    }
    const context = {
      originalSql,
      line,
      pgVersion,
      lock,
      allStatements: statements,
      statementIndex: i,
      tableStats,
      affectedQueries,
      activeConnections
    };
    for (const rule of rules) {
      const violation = rule.check(stmt, context);
      if (violation) {
        violations.push(violation);
      }
    }
  }
  const sorted = violations.sort((a, b) => a.line - b.line);
  if (fullSql) {
    const directives = parseDisableDirectives(fullSql);
    if (directives.length > 0) {
      const statementLines = statements.map((s) => s.line);
      return filterDisabledViolations(sorted, directives, statementLines);
    }
  }
  return sorted;
}

// src/rules/index.ts
var PRO_RULE_IDS = /* @__PURE__ */ new Set(["MP013", "MP014", "MP019"]);
var allRules = [
  requireConcurrentIndex,
  requireCheckNotNull,
  volatileDefaultRewrite,
  requireLockTimeout,
  requireNotValidFK,
  noVacuumFull,
  noColumnTypeChange,
  noMultiDdlTransaction,
  requireDropIndexConcurrently,
  noRenameColumn,
  unbatchedBackfill,
  noEnumAddInTransaction,
  highTrafficTableDDL,
  largeTableDDL,
  noAddColumnSerial,
  requireFKIndex,
  noDropColumn,
  noForceNotNull,
  noExclusiveLockHighConnections,
  requireStatementTimeout,
  requireConcurrentReindex,
  noDropCascade,
  requireIfNotExists,
  noEnumValueRemoval,
  banConcurrentInTransaction,
  banDropTable,
  disallowedUniqueConstraint,
  noRenameTable,
  banDropNotNull,
  requireNotValidCheck,
  banExclusionConstraint,
  banCluster,
  requireConcurrentRefreshMatview,
  banDropDatabase,
  banDropSchema,
  banTruncateCascade,
  preferTextOverVarchar,
  preferBigintOverInt,
  preferIdentityOverSerial,
  preferTimestamptz,
  banCharField,
  requireIndexName,
  banDomainConstraint,
  noDataLossTypeNarrowing,
  requirePrimaryKey,
  requireConcurrentDetachPartition,
  banSetLoggedUnlogged,
  banAlterDefaultVolatile,
  requirePartitionKeyInPK,
  preferHnswOverIvfflat,
  requireSpatialIndex,
  warnDependentObjects,
  banUncommittedTransaction,
  alterTypeAddValueInTransaction,
  dropPkReplicaIdentity,
  ginIndexJsonb,
  rlsWithoutPolicy,
  multiAlterTable,
  sequenceNotReset,
  alterTypeRenameValue,
  suboptimalColumnOrder,
  banAddGeneratedStored,
  warnDoBlockDdl,
  banDisableTrigger,
  banLockTable,
  warnAutovacuumDisabled,
  warnBackfillNoBatching,
  warnIntegerPkCapacity,
  warnFkLockBothTables,
  warnConcurrentIndexInvalid,
  banRenameInUseColumn,
  warnPartitionDefaultScan,
  banSuperuserRole,
  requireDeferrableFk,
  warnToastBloatRisk,
  warnXidConsumingRetry,
  preferLz4ToastCompression,
  warnExtensionVersionPin,
  warnRlsPolicyCompleteness,
  banDataInMigration
];
var freeRules = allRules.filter((r) => !PRO_RULE_IDS.has(r.id));

// src/scoring/score.ts
function calculateRisk(lock, tableStats, affectedQueries) {
  const factors = [];
  const lockScore = scoreLock(lock);
  factors.push({
    name: "Lock Severity",
    weight: 40,
    value: lockScore,
    detail: `${lock.lockType}${lock.longHeld ? " (long-held)" : ""}`
  });
  if (tableStats) {
    const sizeScore = scoreTableSize(tableStats.rowCount);
    factors.push({
      name: "Table Size",
      weight: 30,
      value: sizeScore,
      detail: `${tableStats.rowCount.toLocaleString()} rows (${formatBytes2(tableStats.totalBytes)})`
    });
  }
  if (affectedQueries && affectedQueries.length > 0) {
    const totalCalls = affectedQueries.reduce((sum, q) => sum + q.calls, 0);
    const freqScore = scoreQueryFrequency(totalCalls);
    const services = [...new Set(affectedQueries.map((q) => q.serviceName).filter(Boolean))];
    factors.push({
      name: "Query Frequency",
      weight: 30,
      value: freqScore,
      detail: `${affectedQueries.length} queries, ${totalCalls.toLocaleString()} calls${services.length > 0 ? ` across ${services.join(", ")}` : ""}`
    });
  }
  const totalScore = factors.reduce((sum, f) => sum + f.value, 0);
  const level = totalScore >= 50 ? "RED" : totalScore >= 25 ? "YELLOW" : "GREEN";
  return { level, score: totalScore, factors };
}
function scoreLock(lock) {
  const base = {
    "ACCESS SHARE": 0,
    "ROW EXCLUSIVE": 5,
    "SHARE UPDATE EXCLUSIVE": 10,
    "SHARE": 15,
    "SHARE ROW EXCLUSIVE": 20,
    "ACCESS EXCLUSIVE": 25
  };
  let score = base[lock.lockType] ?? 0;
  if (lock.longHeld) score += 15;
  if (lock.blocksReads && lock.blocksWrites) score = Math.max(score, 30);
  return Math.min(score, 40);
}
function scoreTableSize(rowCount) {
  if (rowCount > 1e7) return 30;
  if (rowCount > 1e6) return 20;
  if (rowCount > 1e5) return 10;
  if (rowCount > 1e4) return 5;
  return 0;
}
function scoreQueryFrequency(totalCalls) {
  if (totalCalls > 1e5) return 30;
  if (totalCalls > 1e4) return 20;
  if (totalCalls > 1e3) return 10;
  if (totalCalls > 100) return 5;
  return 0;
}
function formatBytes2(bytes) {
  if (bytes >= 1e12) return `${(bytes / 1e12).toFixed(1)} TB`;
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(1)} GB`;
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(1)} MB`;
  if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(1)} KB`;
  return `${bytes} B`;
}

// src/analysis/analyze.ts
var AnalysisError = class extends Error {
  file;
  parseErrors;
  constructor(file, parseErrors) {
    super(`Parse errors in ${file}: ${parseErrors.join("; ")}`);
    this.name = "AnalysisError";
    this.file = file;
    this.parseErrors = parseErrors;
  }
};
async function analyzeSQL(sql, filePath, pgVersion, rules, prodCtx) {
  const parsed = await parseMigration(sql);
  if (parsed.errors.length > 0) {
    throw new AnalysisError(filePath, parsed.errors.map((e) => e.message));
  }
  const statementsWithLocks = parsed.statements.map((s) => {
    const lock = classifyLock(s.stmt, pgVersion);
    const line = sql.slice(0, s.stmtLocation).split("\n").length;
    return { ...s, lock, line };
  });
  const violations = runRules(rules, statementsWithLocks, pgVersion, prodCtx, sql);
  const statementResults = statementsWithLocks.map((s) => {
    const stmtViolations = violations.filter((v) => v.line === s.line);
    const targets = extractTargets(s.stmt);
    const tableName = targets[0]?.tableName;
    const tableStats = tableName ? prodCtx?.tableStats.get(tableName) : void 0;
    const affectedQueries = tableName ? prodCtx?.affectedQueries.get(tableName) : void 0;
    const risk = calculateRisk(s.lock, tableStats, affectedQueries);
    return {
      sql: s.originalSql,
      lock: s.lock,
      risk,
      violations: stmtViolations
    };
  });
  const worstStatement = statementResults.reduce(
    (worst, s) => s.risk.score > worst.risk.score ? s : worst,
    statementResults[0] ?? { risk: calculateRisk({ lockType: "ACCESS SHARE", blocksReads: false, blocksWrites: false, longHeld: false }) }
  );
  return {
    file: filePath,
    statements: statementResults,
    overallRisk: worstStatement.risk,
    violations
  };
}

// node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/vendor/supports-color/index.js
import process2 from "node:process";
import os from "node:os";
import tty from "node:tty";
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : process2.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = process2;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (process2.platform === "win32") {
    const osRelease = os.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if (["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((key) => key in env)) {
      return 3;
    }
    if (["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if (env.TERM === "xterm-ghostty") {
    return 3;
  }
  if (env.TERM === "wezterm") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: tty.isatty(1) }),
  stderr: createSupportsColor({ isTTY: tty.isatty(2) })
};
var supports_color_default = supportsColor;

// node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}

// node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
var GENERATOR = /* @__PURE__ */ Symbol("GENERATOR");
var STYLER = /* @__PURE__ */ Symbol("STYLER");
var IS_EMPTY = /* @__PURE__ */ Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles2 = /* @__PURE__ */ Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
var chalkFactory = (options) => {
  const chalk2 = (...strings) => strings.join(" ");
  applyOptions(chalk2, options);
  Object.setPrototypeOf(chalk2, createChalk.prototype);
  return chalk2;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles2[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles2.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level, type, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles2[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles2[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {
}, {
  ...styles2,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level) {
      this[GENERATOR].level = level;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self, string) => {
  if (self.level <= 0 || !string) {
    return self[IS_EMPTY] ? "" : string;
  }
  let styler = self[STYLER];
  if (styler === void 0) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== void 0) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf("\n");
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles2);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
var source_default = chalk;

// src/output/cli.ts
var import_cli_table3 = __toESM(require_cli_table3(), 1);
function formatCliOutput(analysis, options) {
  const lines = [];
  const criticals = analysis.violations.filter((v) => v.severity === "critical");
  const warnings = analysis.violations.filter((v) => v.severity === "warning");
  const ruleMap = options?.rules ? new Map(options.rules.map((r) => [r.id, r])) : void 0;
  lines.push("");
  const riskBadge = formatRiskBadge(analysis.overallRisk.level);
  const statusIcon = criticals.length > 0 ? source_default.red("\u2717") : warnings.length > 0 ? source_default.yellow("\u26A0") : source_default.green("\u2713");
  lines.push(`  ${statusIcon} ${source_default.bold("MigrationPilot")} ${source_default.dim("\u2014")} ${riskBadge} ${source_default.dim(`Score: ${analysis.overallRisk.score}/100`)}`);
  lines.push(`  ${source_default.dim(analysis.file)}`);
  lines.push(source_default.dim("  \u2500".repeat(30)));
  const statsLine = [
    `${source_default.bold(String(analysis.statements.length))} statement${analysis.statements.length !== 1 ? "s" : ""}`
  ];
  if (criticals.length > 0) {
    statsLine.push(`${source_default.red.bold(String(criticals.length))} critical`);
  }
  if (warnings.length > 0) {
    statsLine.push(`${source_default.yellow.bold(String(warnings.length))} warning${warnings.length !== 1 ? "s" : ""}`);
  }
  if (criticals.length === 0 && warnings.length === 0) {
    statsLine.push(source_default.green("0 violations"));
  }
  lines.push(`  ${statsLine.join(source_default.dim(" \xB7 "))}`);
  lines.push("");
  if (analysis.statements.length > 0) {
    const table = new import_cli_table3.default({
      head: ["#", "Statement", "Lock Type", "Risk", "Long?"].map((h) => source_default.dim(h)),
      style: { head: [], border: [] },
      colWidths: [5, 50, 25, 8, 7],
      wordWrap: true
    });
    for (let i = 0; i < analysis.statements.length; i++) {
      const s = analysis.statements[i];
      if (!s) continue;
      const sqlPreview = truncate(s.sql.replace(/\s+/g, " ").trim(), 45);
      table.push([
        String(i + 1),
        sqlPreview,
        formatLockType(s.lock.lockType),
        formatRiskBadge(s.risk.level),
        s.lock.longHeld ? source_default.red("YES") : source_default.green("no")
      ]);
    }
    lines.push(table.toString());
    lines.push("");
  }
  if (analysis.violations.length > 0) {
    lines.push(source_default.bold("  Violations:"));
    lines.push("");
    for (const v of analysis.violations) {
      const icon = v.severity === "critical" ? source_default.red("  \u2717") : source_default.yellow("  \u26A0");
      const tag = v.severity === "critical" ? source_default.red.bold(` [${v.ruleId}] CRITICAL`) : source_default.yellow.bold(` [${v.ruleId}] WARNING`);
      lines.push(`${icon}${tag}${v.line ? source_default.dim(` (line ${v.line})`) : ""}`);
      lines.push(`    ${v.message}`);
      if (v.safeAlternative) {
        lines.push("");
        lines.push(source_default.green("    Safe alternative:"));
        for (const altLine of v.safeAlternative.split("\n")) {
          lines.push(source_default.dim(`    ${altLine}`));
        }
      }
      if (ruleMap) {
        const rule = ruleMap.get(v.ruleId);
        if (rule?.whyItMatters) {
          lines.push("");
          lines.push(`    ${source_default.cyan("Why:")} ${source_default.dim(rule.whyItMatters)}`);
        }
        if (rule?.docsUrl) {
          lines.push(`    ${source_default.cyan("Docs:")} ${source_default.blue(rule.docsUrl)}`);
        }
      }
      lines.push("");
    }
  } else {
    lines.push(source_default.green("  \u2713 No violations found \u2014 migration is safe"));
    lines.push("");
  }
  if (analysis.overallRisk.factors.length > 0) {
    lines.push(source_default.dim("  Risk Factors:"));
    for (const f of analysis.overallRisk.factors) {
      const bar = formatBar(f.value, f.weight);
      lines.push(source_default.dim(`    ${f.name.padEnd(20)} ${bar} ${f.value}/${f.weight} \u2014 ${f.detail}`));
    }
    lines.push("");
  }
  if (options?.timing) {
    const { ruleCount, elapsedMs } = options.timing;
    const timeStr = elapsedMs < 1e3 ? `${Math.round(elapsedMs)}ms` : `${(elapsedMs / 1e3).toFixed(2)}s`;
    lines.push(source_default.dim("  \u2500".repeat(30)));
    lines.push(`  ${source_default.dim(`${ruleCount} rules checked in ${timeStr}`)}`);
    lines.push("");
  }
  return lines.join("\n");
}
function formatRiskBadge(level) {
  switch (level) {
    case "RED":
      return source_default.bgRed.white.bold(" RED ");
    case "YELLOW":
      return source_default.bgYellow.black.bold(" YELLOW ");
    case "GREEN":
      return source_default.bgGreen.black.bold(" GREEN ");
  }
}
function formatLockType(lockType) {
  switch (lockType) {
    case "ACCESS EXCLUSIVE":
      return source_default.red(lockType);
    case "SHARE":
      return source_default.yellow(lockType);
    case "SHARE UPDATE EXCLUSIVE":
      return source_default.cyan("SHARE UPD EXCL");
    case "ROW EXCLUSIVE":
      return source_default.blue(lockType);
    case "ACCESS SHARE":
      return source_default.green(lockType);
    default:
      return lockType;
  }
}
function formatBar(value, max) {
  const filled = Math.round(value / max * 10);
  const empty = 10 - filled;
  const color = value / max > 0.7 ? source_default.red : value / max > 0.4 ? source_default.yellow : source_default.green;
  return color("\u2588".repeat(filled)) + source_default.dim("\u2591".repeat(empty));
}
function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

// src/output/json.ts
var SCHEMA_URL = "https://migrationpilot.dev/schemas/report-v1.json";
var SCHEMA_VERSION = "1.4.0";
function formatJson(analysis, rules) {
  return JSON.stringify(buildJsonReport(analysis, rules), null, 2);
}
function formatJsonMulti(results, rules) {
  const reports = results.map((r) => buildJsonReport(r, rules));
  const worstLevel = reports.reduce(
    (worst, r) => riskOrdinal(r.riskLevel) > riskOrdinal(worst) ? r.riskLevel : worst,
    "GREEN"
  );
  const multi = {
    $schema: SCHEMA_URL,
    version: SCHEMA_VERSION,
    files: reports,
    overallRiskLevel: worstLevel,
    totalViolations: reports.reduce((sum, r) => sum + r.summary.totalViolations, 0)
  };
  return JSON.stringify(multi, null, 2);
}
function buildJsonReport(analysis, rules) {
  const ruleMap = /* @__PURE__ */ new Map();
  if (rules) {
    for (const r of rules) ruleMap.set(r.id, r);
  }
  const criticalCount = analysis.violations.filter((v) => v.severity === "critical").length;
  const warningCount = analysis.violations.filter((v) => v.severity === "warning").length;
  return {
    $schema: SCHEMA_URL,
    version: SCHEMA_VERSION,
    file: analysis.file,
    riskLevel: analysis.overallRisk.level,
    riskScore: analysis.overallRisk.score,
    riskFactors: analysis.overallRisk.factors.map((f) => ({
      name: f.name,
      value: f.value,
      weight: f.weight,
      detail: f.detail
    })),
    statements: analysis.statements.map((s) => ({
      sql: s.sql,
      lockType: s.lock.lockType,
      blocksReads: s.lock.blocksReads,
      blocksWrites: s.lock.blocksWrites,
      riskLevel: s.risk.level,
      riskScore: s.risk.score
    })),
    violations: analysis.violations.map((v) => {
      const rule = ruleMap.get(v.ruleId);
      return {
        ruleId: v.ruleId,
        ruleName: v.ruleName,
        severity: v.severity,
        message: v.message,
        line: v.line,
        ...v.safeAlternative && { safeAlternative: v.safeAlternative },
        ...rule?.whyItMatters && { whyItMatters: rule.whyItMatters },
        ...rule?.docsUrl && { docsUrl: rule.docsUrl }
      };
    }),
    summary: {
      totalStatements: analysis.statements.length,
      totalViolations: analysis.violations.length,
      criticalCount,
      warningCount
    }
  };
}
function riskOrdinal(level) {
  return level === "RED" ? 2 : level === "YELLOW" ? 1 : 0;
}

// src/output/sarif.ts
function buildSarifLog(violations, file, rules, toolVersion = "1.4.0") {
  const ruleDescriptors = rules.map((r) => ({
    id: r.id,
    name: r.name,
    shortDescription: { text: r.description },
    defaultConfiguration: { level: mapSeverity(r.severity) },
    helpUri: `https://migrationpilot.dev/rules/${r.id.toLowerCase()}`
  }));
  const ruleIndex = new Map(rules.map((r, i) => [r.id, i]));
  const results = violations.map((v) => {
    const result = {
      ruleId: v.ruleId,
      ruleIndex: ruleIndex.get(v.ruleId) ?? 0,
      level: mapSeverity(v.severity),
      message: { text: v.message },
      locations: [{
        physicalLocation: {
          artifactLocation: { uri: normalizeUri(file) },
          region: { startLine: v.line, startColumn: 1 }
        }
      }]
    };
    if (v.safeAlternative) {
      result.fixes = [{
        description: { text: `Safe alternative for ${v.ruleId}` },
        artifactChanges: [{
          artifactLocation: { uri: normalizeUri(file) },
          replacements: [{
            deletedRegion: { startLine: v.line },
            insertedContent: { text: v.safeAlternative }
          }]
        }]
      }];
    }
    return result;
  });
  return {
    version: "2.1.0",
    $schema: "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/main/sarif-2.1/schema/sarif-schema-2.1.0.json",
    runs: [{
      tool: {
        driver: {
          name: "MigrationPilot",
          version: toolVersion,
          informationUri: "https://migrationpilot.dev",
          rules: ruleDescriptors
        }
      },
      results
    }]
  };
}
function formatSarif(violations, file, rules, toolVersion) {
  return JSON.stringify(buildSarifLog(violations, file, rules, toolVersion), null, 2);
}
function mapSeverity(severity) {
  return severity === "critical" ? "error" : "warning";
}
function normalizeUri(filePath) {
  return filePath.replace(/\\/g, "/").replace(/^\.\//, "");
}

// src/output/markdown.ts
function formatMarkdown(analysis, rules) {
  const ruleMap = rules ? new Map(rules.map((r) => [r.id, r])) : void 0;
  const lines = [];
  const criticals = analysis.violations.filter((v) => v.severity === "critical");
  const warnings = analysis.violations.filter((v) => v.severity === "warning");
  lines.push("# Migration Safety Report");
  lines.push("");
  lines.push(`**File**: \`${analysis.file}\`  `);
  lines.push(`**Risk Level**: ${analysis.overallRisk.level} (score: ${analysis.overallRisk.score}/100)  `);
  const parts = [`**Statements**: ${analysis.statements.length}`];
  if (criticals.length > 0) parts.push(`**Critical**: ${criticals.length}`);
  if (warnings.length > 0) parts.push(`**Warnings**: ${warnings.length}`);
  if (criticals.length === 0 && warnings.length === 0) parts.push("**Violations**: 0");
  lines.push(parts.join(" | "));
  lines.push("");
  if (analysis.statements.length > 0) {
    lines.push("---");
    lines.push("");
    lines.push("## DDL Operations");
    lines.push("");
    lines.push("| # | Statement | Lock Type | Blocks | Long Held | Risk |");
    lines.push("|---|-----------|-----------|--------|-----------|------|");
    for (let i = 0; i < analysis.statements.length; i++) {
      const s = analysis.statements[i];
      if (!s) continue;
      const sqlPreview = s.sql.replace(/\s+/g, " ").trim();
      const truncated = sqlPreview.length > 60 ? sqlPreview.slice(0, 57) + "..." : sqlPreview;
      const blocks = s.lock.blocksReads && s.lock.blocksWrites ? "R+W" : s.lock.blocksWrites ? "Writes" : s.lock.blocksReads ? "Reads" : "None";
      lines.push(`| ${i + 1} | \`${truncated}\` | ${s.lock.lockType} | ${blocks} | ${s.lock.longHeld ? "Yes" : "No"} | ${s.risk.level} |`);
    }
    lines.push("");
  }
  if (analysis.violations.length > 0) {
    lines.push("## Violations");
    lines.push("");
    for (const v of analysis.violations) {
      const icon = v.severity === "critical" ? "\u{1F534}" : "\u{1F7E1}";
      lines.push(`### ${icon} ${v.severity.toUpperCase()}: ${v.ruleId} (line ${v.line})`);
      lines.push("");
      lines.push(v.message);
      lines.push("");
      if (ruleMap) {
        const rule = ruleMap.get(v.ruleId);
        if (rule?.whyItMatters) {
          lines.push(`> **Why:** ${rule.whyItMatters}`);
          lines.push("");
        }
        if (rule?.docsUrl) {
          lines.push(`[Documentation](${rule.docsUrl})`);
          lines.push("");
        }
      }
      if (v.safeAlternative) {
        lines.push("**Safe alternative:**");
        lines.push("");
        lines.push("```sql");
        lines.push(v.safeAlternative);
        lines.push("```");
        lines.push("");
      }
    }
  } else {
    lines.push("## Result");
    lines.push("");
    lines.push("\u2705 No violations found \u2014 migration is safe.");
    lines.push("");
  }
  if (analysis.overallRisk.factors.length > 0) {
    lines.push("## Risk Factors");
    lines.push("");
    lines.push("| Factor | Score | Detail |");
    lines.push("|--------|------:|--------|");
    for (const f of analysis.overallRisk.factors) {
      lines.push(`| ${f.name} | ${f.value}/${f.weight} | ${f.detail} |`);
    }
    lines.push("");
  }
  lines.push("---");
  lines.push("");
  lines.push("*Generated by [MigrationPilot](https://migrationpilot.dev)*");
  return lines.join("\n");
}

// src/output/pr-comment.ts
function buildPRComment(analysis, rules) {
  const emoji = analysis.overallRisk.level === "RED" ? "\u{1F534}" : analysis.overallRisk.level === "YELLOW" ? "\u{1F7E1}" : "\u{1F7E2}";
  const ruleMap = rules ? new Map(rules.map((r) => [r.id, r])) : void 0;
  const lines = [];
  lines.push(`## ${emoji} MigrationPilot \u2014 Migration Safety Report`);
  lines.push("");
  lines.push(`**Risk Level**: **${analysis.overallRisk.level}** (score: ${analysis.overallRisk.score}/100)`);
  lines.push("");
  if (analysis.statements.length > 0) {
    lines.push("### DDL Operations");
    lines.push("");
    lines.push("| # | Statement | Lock Type | Blocks R/W | Long? | Risk |");
    lines.push("|---|-----------|-----------|:---:|:---:|:---:|");
    for (let i = 0; i < analysis.statements.length; i++) {
      const s = analysis.statements[i];
      if (!s) continue;
      const sqlPreview = s.sql.length > 55 ? `\`${s.sql.slice(0, 52)}...\`` : `\`${s.sql}\``;
      const blocksRW = s.lock.blocksReads && s.lock.blocksWrites ? "\u{1F534} R+W" : s.lock.blocksWrites ? "\u{1F7E1} W" : "\u{1F7E2} \u2014";
      const longHeld = s.lock.longHeld ? "\u26A0\uFE0F Yes" : "\u2705 No";
      lines.push(`| ${i + 1} | ${sqlPreview} | ${s.lock.lockType} | ${blocksRW} | ${longHeld} | ${riskEmoji(s.risk.level)} |`);
    }
    lines.push("");
  }
  if (analysis.violations.length > 0) {
    lines.push("### Safety Violations");
    lines.push("");
    for (const v of analysis.violations) {
      const icon = v.severity === "critical" ? "\u{1F6A8}" : "\u26A0\uFE0F";
      lines.push(`- ${icon} **${v.severity.toUpperCase()}** [\`${v.ruleId}\`]: ${v.message}`);
      if (ruleMap) {
        const rule = ruleMap.get(v.ruleId);
        if (rule?.whyItMatters) {
          lines.push(`  > **Why:** ${rule.whyItMatters}`);
        }
      }
    }
    lines.push("");
    const withAlt = analysis.violations.find((v) => v.safeAlternative);
    if (withAlt) {
      lines.push("<details>");
      lines.push(`<summary>\u{1F4A1} Suggested safe alternative for ${withAlt.ruleId}</summary>`);
      lines.push("");
      lines.push("```sql");
      lines.push(withAlt.safeAlternative);
      lines.push("```");
      lines.push("</details>");
      lines.push("");
    }
  }
  if (analysis.affectedQueries && analysis.affectedQueries.length > 0) {
    lines.push("### Affected Queries (from pg_stat_statements)");
    lines.push("");
    lines.push("| Query | Calls/hr | Avg Time | Service |");
    lines.push("|-------|----------|----------|---------|");
    for (const q of analysis.affectedQueries.slice(0, 10)) {
      const queryPreview = q.normalizedQuery.length > 45 ? `\`${q.normalizedQuery.slice(0, 42)}...\`` : `\`${q.normalizedQuery}\``;
      lines.push(`| ${queryPreview} | ${q.calls.toLocaleString()} | ${q.meanExecTime.toFixed(1)}ms | ${q.serviceName ?? "unknown"} |`);
    }
    if (analysis.affectedQueries.length > 10) {
      lines.push(`| ... and ${analysis.affectedQueries.length - 10} more | | | |`);
    }
    lines.push("");
  }
  if (analysis.overallRisk.factors.length > 0) {
    lines.push("<details>");
    lines.push("<summary>\u{1F4CA} Risk Score Breakdown</summary>");
    lines.push("");
    lines.push("| Factor | Score | Detail |");
    lines.push("|--------|:-----:|--------|");
    for (const f of analysis.overallRisk.factors) {
      lines.push(`| ${f.name} | ${f.value}/${f.weight} | ${f.detail} |`);
    }
    lines.push("");
    lines.push("</details>");
    lines.push("");
  }
  lines.push("---");
  lines.push('<sub>Generated by <a href="https://migrationpilot.dev">MigrationPilot</a>');
  if (!analysis.affectedQueries) {
    const hasCriticalViolations = analysis.violations.some((v) => v.severity === "critical");
    if (hasCriticalViolations) {
      lines.push(' \xB7 <a href="https://migrationpilot.dev/pricing">Try Pro free for 14 days</a> \u2014 see which production queries this migration will affect');
    } else {
      lines.push(' \xB7 <a href="https://migrationpilot.dev/pricing">Upgrade to Pro</a> for production context: table sizes, affected queries, service dependencies');
    }
  }
  lines.push("</sub>");
  return lines.join("\n");
}
function riskEmoji(level) {
  switch (level) {
    case "RED":
      return "\u{1F534}";
    case "YELLOW":
      return "\u{1F7E1}";
    case "GREEN":
      return "\u{1F7E2}";
    default:
      return "\u26AA";
  }
}

// src/fixer/fix.ts
var FIXABLE_RULES = /* @__PURE__ */ new Set(["MP001", "MP004", "MP009", "MP020", "MP021", "MP023", "MP030", "MP033", "MP037", "MP040", "MP041", "MP046"]);
function autoFix(sql, violations) {
  const fixable = violations.filter((v) => FIXABLE_RULES.has(v.ruleId));
  const unfixable = violations.filter((v) => !FIXABLE_RULES.has(v.ruleId));
  if (fixable.length === 0) {
    return { fixedSql: sql, fixedCount: 0, unfixable };
  }
  const violationsByLine = /* @__PURE__ */ new Map();
  for (const v of fixable) {
    const existing = violationsByLine.get(v.line) || [];
    existing.push(v);
    violationsByLine.set(v.line, existing);
  }
  const lines = sql.split("\n");
  const outputLines = [];
  let hasLockTimeout = false;
  let hasStatementTimeout = false;
  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const currentLineStr = lines[i];
    if (currentLineStr === void 0) continue;
    const lineViolations = violationsByLine.get(lineNum);
    if (!lineViolations || lineViolations.length === 0) {
      const lower = currentLineStr.toLowerCase();
      if (lower.includes("lock_timeout")) hasLockTimeout = true;
      if (lower.includes("statement_timeout")) hasStatementTimeout = true;
      outputLines.push(currentLineStr);
      continue;
    }
    let currentLine = currentLineStr;
    const prependLines = [];
    for (const v of lineViolations) {
      switch (v.ruleId) {
        case "MP001":
          currentLine = fixMP001(currentLine);
          break;
        case "MP004":
          if (!hasLockTimeout) {
            prependLines.push("SET lock_timeout = '5s';");
            hasLockTimeout = true;
          }
          break;
        case "MP009":
          currentLine = fixMP009(currentLine);
          break;
        case "MP020":
          if (!hasStatementTimeout) {
            prependLines.push("SET statement_timeout = '30s';");
            hasStatementTimeout = true;
          }
          break;
        case "MP030":
          currentLine = fixMP030(currentLine);
          break;
        case "MP021":
          currentLine = fixMP021(currentLine);
          break;
        case "MP023":
          currentLine = fixMP023(currentLine);
          break;
        case "MP033":
          currentLine = fixMP033(currentLine);
          break;
        case "MP037":
          currentLine = fixMP037(currentLine);
          break;
        case "MP040":
          currentLine = fixMP040(currentLine);
          break;
        case "MP041":
          currentLine = fixMP041(currentLine);
          break;
        case "MP046":
          currentLine = fixMP046(currentLine);
          break;
      }
    }
    outputLines.push(...prependLines, currentLine);
  }
  return {
    fixedSql: outputLines.join("\n"),
    fixedCount: fixable.length,
    unfixable
  };
}
function isFixable(ruleId) {
  return FIXABLE_RULES.has(ruleId);
}
function fixMP001(line) {
  if (/create\s+index\s+concurrently/i.test(line)) return line;
  return line.replace(
    /CREATE\s+UNIQUE\s+INDEX\s+/i,
    "CREATE UNIQUE INDEX CONCURRENTLY "
  ).replace(
    /CREATE\s+INDEX\s+/i,
    "CREATE INDEX CONCURRENTLY "
  );
}
function fixMP009(line) {
  if (/drop\s+index\s+concurrently/i.test(line)) return line;
  if (/DROP\s+INDEX\s+IF\s+EXISTS\s+/i.test(line)) {
    return line.replace(
      /DROP\s+INDEX\s+IF\s+EXISTS\s+/i,
      "DROP INDEX CONCURRENTLY IF EXISTS "
    );
  }
  return line.replace(
    /DROP\s+INDEX\s+/i,
    "DROP INDEX CONCURRENTLY "
  );
}
function fixMP030(line) {
  if (/not\s+valid/i.test(line)) return line;
  return line.replace(/\)\s*;?\s*$/, ") NOT VALID;");
}
function fixMP021(line) {
  if (/concurrently/i.test(line)) return line;
  return line.replace(
    /REINDEX\s+(TABLE|INDEX|SCHEMA|DATABASE)\s+/i,
    "REINDEX $1 CONCURRENTLY "
  );
}
function fixMP023(line) {
  if (/if\s+not\s+exists/i.test(line)) return line;
  if (/CREATE\s+UNIQUE\s+INDEX\s+CONCURRENTLY\s+/i.test(line)) {
    return line.replace(
      /CREATE\s+UNIQUE\s+INDEX\s+CONCURRENTLY\s+/i,
      "CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS "
    );
  }
  if (/CREATE\s+INDEX\s+CONCURRENTLY\s+/i.test(line)) {
    return line.replace(
      /CREATE\s+INDEX\s+CONCURRENTLY\s+/i,
      "CREATE INDEX CONCURRENTLY IF NOT EXISTS "
    );
  }
  if (/CREATE\s+UNIQUE\s+INDEX\s+/i.test(line)) {
    return line.replace(
      /CREATE\s+UNIQUE\s+INDEX\s+/i,
      "CREATE UNIQUE INDEX IF NOT EXISTS "
    );
  }
  if (/CREATE\s+INDEX\s+/i.test(line)) {
    return line.replace(
      /CREATE\s+INDEX\s+/i,
      "CREATE INDEX IF NOT EXISTS "
    );
  }
  return line.replace(
    /CREATE\s+TABLE\s+/i,
    "CREATE TABLE IF NOT EXISTS "
  );
}
function fixMP033(line) {
  if (/concurrently/i.test(line)) return line;
  return line.replace(
    /REFRESH\s+MATERIALIZED\s+VIEW\s+/i,
    "REFRESH MATERIALIZED VIEW CONCURRENTLY "
  );
}
function fixMP037(line) {
  return line.replace(/CHARACTER\s+VARYING\s*\(\s*\d+\s*\)/gi, "TEXT").replace(/VARCHAR\s*\(\s*\d+\s*\)/gi, "TEXT");
}
function fixMP040(line) {
  return line.replace(/TIMESTAMP\s+WITHOUT\s+TIME\s+ZONE/gi, "TIMESTAMPTZ").replace(/\bTIMESTAMP\b(?!\s*TZ|\s*WITH|\s*WITHOUT)/gi, "TIMESTAMPTZ");
}
function fixMP041(line) {
  return line.replace(/CHARACTER\s*\(\s*\d+\s*\)(?!\s+VARYING)/gi, "TEXT").replace(/\bCHAR\s*\(\s*\d+\s*\)/gi, "TEXT");
}
function fixMP046(line) {
  if (/concurrently/i.test(line)) return line;
  return line.replace(
    /DETACH\s+PARTITION\s+/i,
    "DETACH PARTITION CONCURRENTLY "
  );
}

// src/generator/rollback.ts
function generateRollback(stmts) {
  const statements = [];
  const warnings = [];
  for (let i = stmts.length - 1; i >= 0; i--) {
    const parsed = stmts[i];
    if (!parsed) continue;
    const { stmt, originalSql } = parsed;
    const result = reverseStatement(stmt, originalSql);
    if (result) {
      statements.push(result);
    } else {
      const upper = originalSql.toUpperCase().trim();
      if (/^(SET |RESET |BEGIN|COMMIT|ROLLBACK)/.test(upper)) continue;
      warnings.push(`Cannot auto-reverse: ${originalSql.slice(0, 80)}${originalSql.length > 80 ? "..." : ""}`);
    }
  }
  return { statements, warnings };
}
function reverseStatement(stmt, originalSql) {
  if ("CreateStmt" in stmt) {
    return reverseCreateTable(stmt);
  }
  if ("IndexStmt" in stmt) {
    return reverseCreateIndex(stmt, originalSql);
  }
  if ("DropStmt" in stmt) {
    return reverseDropStmt(stmt, originalSql);
  }
  if ("AlterTableStmt" in stmt) {
    return reverseAlterTable(stmt, originalSql);
  }
  if ("RenameStmt" in stmt) {
    return reverseRename(stmt, originalSql);
  }
  if ("CreateTrigStmt" in stmt) {
    return reverseCreateTrigger(stmt);
  }
  if ("AlterEnumStmt" in stmt) {
    return reverseAlterEnum(originalSql);
  }
  if ("CreateExtensionStmt" in stmt) {
    return reverseCreateExtension(stmt);
  }
  if ("CreateSchemaStmt" in stmt) {
    return reverseCreateSchema(stmt);
  }
  if ("CreateSeqStmt" in stmt) {
    return reverseCreateSequence(stmt);
  }
  if ("ViewStmt" in stmt) {
    return reverseCreateView(stmt);
  }
  return null;
}
function reverseCreateTable(stmt) {
  const create = stmt.CreateStmt;
  const table = qualifiedName(create.relation?.schemaname, create.relation?.relname);
  if (!table) return null;
  return {
    sql: `DROP TABLE IF EXISTS ${table};`,
    originalDescription: `CREATE TABLE ${table}`
  };
}
function reverseCreateIndex(stmt, originalSql) {
  const idx = stmt.IndexStmt;
  const name = idx.idxname;
  if (!name) {
    const match = originalSql.match(/CREATE\s+(?:UNIQUE\s+)?INDEX\s+(?:CONCURRENTLY\s+)?(?:IF\s+NOT\s+EXISTS\s+)?(\w+)/i);
    if (match?.[1]) {
      const concurrent2 = idx.concurrent ? " CONCURRENTLY" : "";
      return {
        sql: `DROP INDEX${concurrent2} IF EXISTS ${match[1]};`,
        originalDescription: `CREATE INDEX ${match[1]}`
      };
    }
    return null;
  }
  const concurrent = idx.concurrent ? " CONCURRENTLY" : "";
  return {
    sql: `DROP INDEX${concurrent} IF EXISTS ${name};`,
    originalDescription: `CREATE INDEX ${name}`
  };
}
function reverseDropStmt(_stmt, originalSql) {
  const upper = originalSql.toUpperCase();
  if (upper.includes("IF EXISTS")) {
    return {
      sql: `-- WARNING: Cannot auto-generate CREATE for dropped object.
-- Original: ${originalSql.trim()}`,
      originalDescription: originalSql.slice(0, 60)
    };
  }
  return {
    sql: `-- WARNING: Cannot auto-generate CREATE for dropped object.
-- Original: ${originalSql.trim()}`,
    originalDescription: originalSql.slice(0, 60)
  };
}
function reverseAlterTable(stmt, originalSql) {
  const alter = stmt.AlterTableStmt;
  const table = qualifiedName(alter.relation?.schemaname, alter.relation?.relname);
  if (!table) return null;
  const cmd = alter.cmds?.[0]?.AlterTableCmd;
  if (!cmd) return null;
  const subtype = String(cmd.subtype);
  switch (subtype) {
    case "AT_AddColumn": {
      const colDef = cmd.def;
      const col = colDef?.ColumnDef?.colname ?? cmd.name;
      if (col) {
        return {
          sql: `ALTER TABLE ${table} DROP COLUMN IF EXISTS ${col};`,
          originalDescription: `ADD COLUMN ${col} on ${table}`
        };
      }
      break;
    }
    case "AT_DropColumn": {
      const col = cmd.name;
      return {
        sql: `-- WARNING: Cannot auto-recreate dropped column.
-- Original: ALTER TABLE ${table} DROP COLUMN ${col ?? "unknown"};`,
        originalDescription: `DROP COLUMN ${col ?? "unknown"} on ${table}`
      };
    }
    case "AT_SetNotNull": {
      const col = cmd.name;
      if (col) {
        return {
          sql: `ALTER TABLE ${table} ALTER COLUMN ${col} DROP NOT NULL;`,
          originalDescription: `SET NOT NULL on ${table}.${col}`
        };
      }
      break;
    }
    case "AT_DropNotNull": {
      const col = cmd.name;
      if (col) {
        return {
          sql: `ALTER TABLE ${table} ALTER COLUMN ${col} SET NOT NULL;`,
          originalDescription: `DROP NOT NULL on ${table}.${col}`
        };
      }
      break;
    }
    case "AT_ColumnDefault": {
      const col = cmd.name;
      if (col) {
        if (cmd.def) {
          return {
            sql: `ALTER TABLE ${table} ALTER COLUMN ${col} DROP DEFAULT;`,
            originalDescription: `SET DEFAULT on ${table}.${col}`
          };
        }
        return {
          sql: `-- WARNING: Cannot auto-restore original DEFAULT value.
-- Original: ALTER TABLE ${table} ALTER COLUMN ${col} DROP DEFAULT;`,
          originalDescription: `DROP DEFAULT on ${table}.${col}`
        };
      }
      break;
    }
    case "AT_AddConstraint": {
      const nameMatch = originalSql.match(/ADD\s+CONSTRAINT\s+(\w+)/i);
      const constraintName = nameMatch?.[1];
      if (constraintName) {
        return {
          sql: `ALTER TABLE ${table} DROP CONSTRAINT IF EXISTS ${constraintName};`,
          originalDescription: `ADD CONSTRAINT ${constraintName} on ${table}`
        };
      }
      break;
    }
    case "AT_DropConstraint": {
      const constraintName = cmd.name;
      return {
        sql: `-- WARNING: Cannot auto-recreate dropped constraint.
-- Original: ALTER TABLE ${table} DROP CONSTRAINT ${constraintName ?? "unknown"};`,
        originalDescription: `DROP CONSTRAINT ${constraintName ?? "unknown"} on ${table}`
      };
    }
    case "AT_AlterColumnType": {
      const col = cmd.name;
      return {
        sql: `-- WARNING: Cannot auto-reverse column type change (original type unknown).
-- Original: ALTER TABLE ${table} ALTER COLUMN ${col ?? "unknown"} TYPE ...;`,
        originalDescription: `ALTER COLUMN TYPE on ${table}.${col ?? "unknown"}`
      };
    }
  }
  const upper = originalSql.toUpperCase();
  if (upper.includes("ENABLE ROW LEVEL SECURITY")) {
    return {
      sql: `ALTER TABLE ${table} DISABLE ROW LEVEL SECURITY;`,
      originalDescription: `ENABLE ROW LEVEL SECURITY on ${table}`
    };
  }
  if (upper.includes("DISABLE ROW LEVEL SECURITY")) {
    return {
      sql: `ALTER TABLE ${table} ENABLE ROW LEVEL SECURITY;`,
      originalDescription: `DISABLE ROW LEVEL SECURITY on ${table}`
    };
  }
  return null;
}
function reverseRename(stmt, originalSql) {
  const rename = stmt.RenameStmt;
  const newName = rename.newname;
  const oldName = rename.subname ?? rename.relation?.relname;
  if (!newName) return null;
  const upper = originalSql.toUpperCase();
  if (upper.includes("RENAME TO") && !upper.includes("RENAME COLUMN")) {
    const schema = rename.relation?.schemaname;
    const qualOld = qualifiedName(schema, oldName);
    return {
      sql: `ALTER TABLE ${qualifiedName(schema, newName)} RENAME TO ${oldName};`,
      originalDescription: `RENAME TABLE ${qualOld ?? oldName} \u2192 ${newName}`
    };
  }
  if (upper.includes("RENAME COLUMN") || rename.subname && rename.newname) {
    const table = qualifiedName(rename.relation?.schemaname, rename.relation?.relname);
    if (table) {
      return {
        sql: `ALTER TABLE ${table} RENAME COLUMN ${newName} TO ${oldName};`,
        originalDescription: `RENAME COLUMN ${oldName} \u2192 ${newName} on ${table}`
      };
    }
  }
  return null;
}
function reverseCreateTrigger(stmt) {
  const trigger = stmt.CreateTrigStmt;
  const name = trigger.trigname;
  const table = qualifiedName(trigger.relation?.schemaname, trigger.relation?.relname);
  if (!name || !table) return null;
  return {
    sql: `DROP TRIGGER IF EXISTS ${name} ON ${table};`,
    originalDescription: `CREATE TRIGGER ${name} on ${table}`
  };
}
function reverseAlterEnum(originalSql) {
  const upper = originalSql.toUpperCase();
  if (upper.includes("ADD VALUE")) {
    return {
      sql: `-- WARNING: PostgreSQL does not support removing enum values.
-- Original: ${originalSql.trim()}
-- Manual intervention required: create new type without the value, migrate data, drop old type.`,
      originalDescription: "ALTER TYPE ADD VALUE"
    };
  }
  if (upper.includes("RENAME VALUE")) {
    const match = originalSql.match(/RENAME\s+VALUE\s+'([^']+)'\s+TO\s+'([^']+)'/i);
    if (match?.[1] && match[2]) {
      const typeName = originalSql.match(/ALTER\s+TYPE\s+(\w+)/i)?.[1] ?? "type_name";
      return {
        sql: `ALTER TYPE ${typeName} RENAME VALUE '${match[2]}' TO '${match[1]}';`,
        originalDescription: `RENAME VALUE '${match[1]}' \u2192 '${match[2]}'`
      };
    }
  }
  return null;
}
function reverseCreateExtension(stmt) {
  const ext = stmt.CreateExtensionStmt;
  if (!ext.extname) return null;
  return {
    sql: `DROP EXTENSION IF EXISTS ${ext.extname};`,
    originalDescription: `CREATE EXTENSION ${ext.extname}`
  };
}
function reverseCreateSchema(stmt) {
  const schema = stmt.CreateSchemaStmt;
  if (!schema.schemaname) return null;
  return {
    sql: `DROP SCHEMA IF EXISTS ${schema.schemaname};`,
    originalDescription: `CREATE SCHEMA ${schema.schemaname}`
  };
}
function reverseCreateSequence(stmt) {
  const seq = stmt.CreateSeqStmt;
  const name = qualifiedName(seq.sequence?.schemaname, seq.sequence?.relname);
  if (!name) return null;
  return {
    sql: `DROP SEQUENCE IF EXISTS ${name};`,
    originalDescription: `CREATE SEQUENCE ${name}`
  };
}
function reverseCreateView(stmt) {
  const view = stmt.ViewStmt;
  const name = qualifiedName(view.view?.schemaname, view.view?.relname);
  if (!name) return null;
  return {
    sql: `DROP VIEW IF EXISTS ${name};`,
    originalDescription: `CREATE VIEW ${name}`
  };
}
function qualifiedName(schema, name) {
  if (!name) return null;
  return schema ? `${schema}.${name}` : name;
}
function formatRollbackSql(result) {
  const lines = [];
  lines.push("-- Rollback migration generated by MigrationPilot");
  lines.push(`-- Generated: ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`);
  lines.push("");
  if (result.warnings.length > 0) {
    lines.push("-- WARNINGS:");
    for (const w of result.warnings) {
      lines.push(`--   ${w}`);
    }
    lines.push("");
  }
  for (const stmt of result.statements) {
    lines.push(`-- Undo: ${stmt.originalDescription}`);
    lines.push(stmt.sql);
    lines.push("");
  }
  return lines.join("\n");
}

// src/frameworks/detect.ts
import { stat, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
async function detectFrameworks(dir) {
  const results = [];
  const detectors = [
    detectFlyway(dir),
    detectLiquibase(dir),
    detectAlembic(dir),
    detectDjango(dir),
    detectKnex(dir),
    detectPrisma(dir),
    detectTypeORM(dir),
    detectDrizzle(dir),
    detectSequelize(dir),
    detectGoose(dir),
    detectDbmate(dir),
    detectSqitch(dir),
    detectRails(dir),
    detectEcto(dir)
  ];
  const detected = await Promise.all(detectors);
  for (const d of detected) {
    if (d) results.push(d);
  }
  const order = { high: 0, medium: 1, low: 2 };
  results.sort((a, b) => order[a.confidence] - order[b.confidence]);
  return results;
}
async function detectFlyway(dir) {
  if (await exists(join(dir, "flyway.conf")) || await exists(join(dir, "flyway.toml"))) {
    return {
      name: "Flyway",
      id: "flyway",
      confidence: "high",
      migrationPath: "sql",
      filePattern: "sql/V*.sql",
      evidence: "flyway.conf or flyway.toml found"
    };
  }
  const sqlDir = join(dir, "sql");
  if (await exists(sqlDir) && await hasMatchingFiles(sqlDir, /^V\d/)) {
    return {
      name: "Flyway",
      id: "flyway",
      confidence: "medium",
      migrationPath: "sql",
      filePattern: "sql/V*.sql",
      evidence: "sql/ directory with V*.sql files"
    };
  }
  const dbMigDir = join(dir, "db", "migration");
  if (await exists(dbMigDir) && await hasMatchingFiles(dbMigDir, /^V\d/)) {
    return {
      name: "Flyway",
      id: "flyway",
      confidence: "medium",
      migrationPath: "db/migration",
      filePattern: "db/migration/V*.sql",
      evidence: "db/migration/ directory with V*.sql files"
    };
  }
  return null;
}
async function detectLiquibase(dir) {
  if (await exists(join(dir, "liquibase.properties"))) {
    return {
      name: "Liquibase",
      id: "liquibase",
      confidence: "high",
      migrationPath: "migrations",
      filePattern: "migrations/**/*.sql",
      evidence: "liquibase.properties found"
    };
  }
  const changelogPatterns = ["db.changelog-master.xml", "db.changelog-master.yaml", "db.changelog-master.sql"];
  for (const p of changelogPatterns) {
    if (await exists(join(dir, p))) {
      return {
        name: "Liquibase",
        id: "liquibase",
        confidence: "high",
        filePattern: "**/*.sql",
        evidence: `${p} found`
      };
    }
  }
  return null;
}
async function detectAlembic(dir) {
  if (await exists(join(dir, "alembic.ini"))) {
    return {
      name: "Alembic (SQLAlchemy)",
      id: "alembic",
      confidence: "high",
      migrationPath: "alembic/versions",
      filePattern: "alembic/versions/*.sql",
      evidence: "alembic.ini found"
    };
  }
  if (await exists(join(dir, "alembic", "versions"))) {
    return {
      name: "Alembic (SQLAlchemy)",
      id: "alembic",
      confidence: "medium",
      migrationPath: "alembic/versions",
      filePattern: "alembic/versions/*.sql",
      evidence: "alembic/versions/ directory found"
    };
  }
  return null;
}
async function detectDjango(dir) {
  if (await exists(join(dir, "manage.py"))) {
    try {
      const entries = await readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && await exists(join(dir, entry.name, "migrations"))) {
          return {
            name: "Django",
            id: "django",
            confidence: "high",
            migrationPath: `${entry.name}/migrations`,
            filePattern: "**/migrations/*.sql",
            evidence: `manage.py + ${entry.name}/migrations/ found`
          };
        }
      }
    } catch {
    }
  }
  return null;
}
async function detectKnex(dir) {
  const knexfiles = ["knexfile.js", "knexfile.ts", "knexfile.mjs"];
  for (const f of knexfiles) {
    if (await exists(join(dir, f))) {
      return {
        name: "Knex.js",
        id: "knex",
        confidence: "high",
        migrationPath: "migrations",
        filePattern: "migrations/*.sql",
        evidence: `${f} found`
      };
    }
  }
  if (await exists(join(dir, "migrations")) && await hasMatchingFiles(join(dir, "migrations"), /^\d{14}/)) {
    return {
      name: "Knex.js",
      id: "knex",
      confidence: "low",
      migrationPath: "migrations",
      filePattern: "migrations/*.sql",
      evidence: "migrations/ with timestamp-named files"
    };
  }
  return null;
}
async function detectPrisma(dir) {
  if (await exists(join(dir, "prisma", "schema.prisma"))) {
    return {
      name: "Prisma",
      id: "prisma",
      confidence: "high",
      migrationPath: "prisma/migrations",
      filePattern: "prisma/migrations/**/migration.sql",
      evidence: "prisma/schema.prisma found"
    };
  }
  if (await exists(join(dir, "prisma", "migrations"))) {
    return {
      name: "Prisma",
      id: "prisma",
      confidence: "medium",
      migrationPath: "prisma/migrations",
      filePattern: "prisma/migrations/**/migration.sql",
      evidence: "prisma/migrations/ directory found"
    };
  }
  return null;
}
async function detectTypeORM(dir) {
  const configs = ["ormconfig.json", "ormconfig.js", "ormconfig.ts"];
  for (const f of configs) {
    if (await exists(join(dir, f))) {
      return {
        name: "TypeORM",
        id: "typeorm",
        confidence: "high",
        migrationPath: "src/migrations",
        filePattern: "src/migrations/*.ts",
        evidence: `${f} found`
      };
    }
  }
  const pkg = await readPackageJson(dir);
  if (pkg && (pkg.dependencies?.typeorm || pkg.devDependencies?.typeorm)) {
    return {
      name: "TypeORM",
      id: "typeorm",
      confidence: "medium",
      migrationPath: "src/migrations",
      filePattern: "src/migrations/*.ts",
      evidence: "typeorm in package.json dependencies"
    };
  }
  return null;
}
async function detectDrizzle(dir) {
  const configs = ["drizzle.config.ts", "drizzle.config.js"];
  for (const f of configs) {
    if (await exists(join(dir, f))) {
      return {
        name: "Drizzle",
        id: "drizzle",
        confidence: "high",
        migrationPath: "drizzle",
        filePattern: "drizzle/*.sql",
        evidence: `${f} found`
      };
    }
  }
  if (await exists(join(dir, "drizzle")) && await hasMatchingFiles(join(dir, "drizzle"), /\.sql$/)) {
    return {
      name: "Drizzle",
      id: "drizzle",
      confidence: "medium",
      migrationPath: "drizzle",
      filePattern: "drizzle/*.sql",
      evidence: "drizzle/ directory with .sql files"
    };
  }
  return null;
}
async function detectSequelize(dir) {
  if (await exists(join(dir, ".sequelizerc"))) {
    return {
      name: "Sequelize",
      id: "sequelize",
      confidence: "high",
      migrationPath: "migrations",
      filePattern: "migrations/*.js",
      evidence: ".sequelizerc found"
    };
  }
  const pkg = await readPackageJson(dir);
  if (pkg && (pkg.dependencies?.sequelize || pkg.devDependencies?.sequelize)) {
    if (await exists(join(dir, "migrations"))) {
      return {
        name: "Sequelize",
        id: "sequelize",
        confidence: "medium",
        migrationPath: "migrations",
        filePattern: "migrations/*.js",
        evidence: "sequelize in package.json + migrations/ directory"
      };
    }
  }
  return null;
}
async function detectGoose(dir) {
  const dirs = ["db/migrations", "migrations"];
  for (const d of dirs) {
    const fullPath = join(dir, d);
    if (await exists(fullPath) && await hasMatchingFiles(fullPath, /^\d{14}.*\.sql$/)) {
      if (await exists(join(dir, "go.mod"))) {
        return {
          name: "goose",
          id: "goose",
          confidence: "medium",
          migrationPath: d,
          filePattern: `${d}/*.sql`,
          evidence: `go.mod + ${d}/ with numbered .sql files`
        };
      }
    }
  }
  return null;
}
async function detectDbmate(dir) {
  if (await exists(join(dir, "db", "migrations")) && await exists(join(dir, ".env"))) {
    const envContent = await safeReadFile(join(dir, ".env"));
    if (envContent && envContent.includes("DATABASE_URL")) {
      if (await hasMatchingFiles(join(dir, "db", "migrations"), /^\d{14}/)) {
        return {
          name: "dbmate",
          id: "dbmate",
          confidence: "low",
          migrationPath: "db/migrations",
          filePattern: "db/migrations/*.sql",
          evidence: "db/migrations/ with timestamp files + .env with DATABASE_URL"
        };
      }
    }
  }
  return null;
}
async function detectSqitch(dir) {
  if (await exists(join(dir, "sqitch.plan"))) {
    return {
      name: "Sqitch",
      id: "sqitch",
      confidence: "high",
      migrationPath: "deploy",
      filePattern: "deploy/*.sql",
      evidence: "sqitch.plan found"
    };
  }
  return null;
}
async function detectRails(dir) {
  if (await exists(join(dir, "Gemfile")) && await exists(join(dir, "db", "migrate"))) {
    return {
      name: "Rails ActiveRecord",
      id: "rails",
      confidence: "high",
      migrationPath: "db/migrate",
      filePattern: "db/migrate/*.rb",
      evidence: "Gemfile + db/migrate/ found"
    };
  }
  return null;
}
async function detectEcto(dir) {
  if (await exists(join(dir, "mix.exs")) && await exists(join(dir, "priv", "repo", "migrations"))) {
    return {
      name: "Ecto (Elixir)",
      id: "ecto",
      confidence: "high",
      migrationPath: "priv/repo/migrations",
      filePattern: "priv/repo/migrations/*.exs",
      evidence: "mix.exs + priv/repo/migrations/ found"
    };
  }
  return null;
}
async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}
async function hasMatchingFiles(dir, pattern) {
  try {
    const entries = await readdir(dir);
    return entries.some((e) => pattern.test(e));
  } catch {
    return false;
  }
}
async function readPackageJson(dir) {
  try {
    const content = await readFile(join(dir, "package.json"), "utf-8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}
async function safeReadFile(path) {
  try {
    return await readFile(path, "utf-8");
  } catch {
    return null;
  }
}

// src/config/load.ts
import { readFile as readFile2 } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { parse as parseYaml } from "yaml";
var CONFIG_FILES = [
  ".migrationpilotrc.yml",
  ".migrationpilotrc.yaml",
  "migrationpilot.config.yml",
  "migrationpilot.config.yaml"
];
var ALL_RULE_IDS = Array.from({ length: 80 }, (_, i) => `MP${String(i + 1).padStart(3, "0")}`);
var PRESETS = {
  "migrationpilot:recommended": {
    failOn: "critical",
    rules: {}
  },
  "migrationpilot:strict": {
    failOn: "warning",
    rules: Object.fromEntries(
      ALL_RULE_IDS.map((id) => [id, { severity: "critical" }])
    )
  },
  "migrationpilot:ci": {
    failOn: "critical",
    rules: {},
    ignore: []
  },
  "migrationpilot:startup": {
    failOn: "critical",
    rules: {
      MP037: false,
      MP038: false,
      MP039: false,
      MP040: false,
      MP041: false,
      MP042: false,
      MP045: false,
      MP048: false,
      MP061: false,
      MP068: false,
      MP074: false,
      MP075: false,
      MP076: false,
      MP077: false,
      MP078: false,
      MP079: false
    }
  },
  "migrationpilot:enterprise": {
    failOn: "warning",
    rules: {
      MP017: { severity: "critical" },
      MP022: { severity: "critical" },
      MP028: { severity: "critical" },
      MP029: { severity: "critical" },
      MP044: { severity: "critical" },
      MP052: { severity: "critical" },
      MP067: { severity: "critical" },
      MP071: { severity: "critical" },
      MP080: { severity: "critical" }
    },
    thresholds: { highTrafficQueries: 5e3, largeTableRows: 5e5 },
    auditLog: { enabled: true }
  }
};
function resolvePreset(name) {
  return PRESETS[name] ?? null;
}
var DEFAULT_CONFIG = {
  pgVersion: 17,
  failOn: "critical",
  rules: {},
  thresholds: {
    highTrafficQueries: 1e4,
    largeTableRows: 1e6,
    redScore: 50,
    yellowScore: 25
  },
  ignore: []
};
async function loadConfig(startDir) {
  const dir = startDir || process.cwd();
  const warnings = [];
  const result = await findAndLoadConfig(dir, warnings);
  if (!result) {
    return { config: { ...DEFAULT_CONFIG }, warnings };
  }
  let base = DEFAULT_CONFIG;
  if (result.config.extends) {
    const preset = resolvePreset(result.config.extends);
    if (preset) {
      base = mergeConfig(DEFAULT_CONFIG, preset);
    }
  }
  return {
    config: mergeConfig(base, result.config),
    configPath: result.path,
    warnings
  };
}
async function findAndLoadConfig(dir, warnings) {
  let current = resolve(dir);
  const root = dirname(current) === current ? current : void 0;
  for (let i = 0; i < 20; i++) {
    for (const filename of CONFIG_FILES) {
      const filePath = resolve(current, filename);
      try {
        const content = await readFile2(filePath, "utf-8");
        const parsed = parseYaml(content);
        if (parsed && typeof parsed === "object") {
          return { config: validateConfig(parsed, warnings), path: filePath };
        }
      } catch {
      }
    }
    try {
      const pkgPath = resolve(current, "package.json");
      const content = await readFile2(pkgPath, "utf-8");
      const pkg = JSON.parse(content);
      if (pkg.migrationpilot && typeof pkg.migrationpilot === "object") {
        return {
          config: validateConfig(pkg.migrationpilot, warnings),
          path: pkgPath
        };
      }
    } catch {
    }
    const parent = dirname(current);
    if (parent === current || parent === root) break;
    current = parent;
  }
  return null;
}
var KNOWN_KEYS = /* @__PURE__ */ new Set([
  "extends",
  "pgVersion",
  "failOn",
  "migrationPath",
  "rules",
  "plugins",
  "thresholds",
  "ignore",
  "auditLog",
  "team",
  "policy"
]);
function validateConfig(raw, warnings) {
  if (warnings) {
    for (const key of Object.keys(raw)) {
      if (!KNOWN_KEYS.has(key)) {
        warnings.push(`Unknown config key "${key}" \u2014 will be ignored. Valid keys: ${[...KNOWN_KEYS].join(", ")}`);
      }
    }
  }
  const config = {};
  if (typeof raw.extends === "string" && raw.extends.length > 0) {
    const validPresets = ["migrationpilot:recommended", "migrationpilot:strict", "migrationpilot:ci", "migrationpilot:startup", "migrationpilot:enterprise"];
    if (validPresets.includes(raw.extends)) {
      config.extends = raw.extends;
    } else if (warnings) {
      warnings.push(`Unknown preset "${raw.extends}" \u2014 valid presets: ${validPresets.join(", ")}`);
    }
  }
  if (typeof raw.pgVersion === "number" && raw.pgVersion >= 9 && raw.pgVersion <= 20) {
    config.pgVersion = raw.pgVersion;
  }
  if (raw.failOn && ["critical", "warning", "never"].includes(raw.failOn)) {
    config.failOn = raw.failOn;
  }
  if (typeof raw.migrationPath === "string") {
    config.migrationPath = raw.migrationPath;
  }
  if (raw.rules && typeof raw.rules === "object") {
    config.rules = {};
    for (const [ruleId, ruleConfig] of Object.entries(raw.rules)) {
      if (typeof ruleConfig === "boolean") {
        config.rules[ruleId] = ruleConfig;
      } else if (typeof ruleConfig === "object" && ruleConfig !== null) {
        const rc = {};
        if (typeof ruleConfig.enabled === "boolean") rc.enabled = ruleConfig.enabled;
        if (ruleConfig.severity === "critical" || ruleConfig.severity === "warning") rc.severity = ruleConfig.severity;
        if (typeof ruleConfig.threshold === "number") rc.threshold = ruleConfig.threshold;
        config.rules[ruleId] = rc;
      }
    }
  }
  if (raw.thresholds && typeof raw.thresholds === "object") {
    config.thresholds = {};
    const t = raw.thresholds;
    if (typeof t.highTrafficQueries === "number") config.thresholds.highTrafficQueries = t.highTrafficQueries;
    if (typeof t.largeTableRows === "number") config.thresholds.largeTableRows = t.largeTableRows;
    if (typeof t.redScore === "number") config.thresholds.redScore = t.redScore;
    if (typeof t.yellowScore === "number") config.thresholds.yellowScore = t.yellowScore;
  }
  if (Array.isArray(raw.plugins)) {
    config.plugins = raw.plugins.filter((p) => typeof p === "string");
  }
  if (Array.isArray(raw.ignore)) {
    config.ignore = raw.ignore.filter((p) => typeof p === "string");
  }
  if (raw.auditLog && typeof raw.auditLog === "object") {
    config.auditLog = {};
    if (typeof raw.auditLog.enabled === "boolean") config.auditLog.enabled = raw.auditLog.enabled;
    if (typeof raw.auditLog.path === "string") config.auditLog.path = raw.auditLog.path;
  }
  if (raw.team && typeof raw.team === "object") {
    config.team = {};
    if (typeof raw.team.org === "string") config.team.org = raw.team.org;
    if (typeof raw.team.configUrl === "string") {
      if (raw.team.configUrl.startsWith("https://")) {
        config.team.configUrl = raw.team.configUrl;
      } else if (warnings) {
        warnings.push("team.configUrl must use HTTPS \u2014 ignoring insecure URL");
      }
    }
    if (typeof raw.team.maxSeats === "number") config.team.maxSeats = raw.team.maxSeats;
    if (typeof raw.team.adminEmail === "string") config.team.adminEmail = raw.team.adminEmail;
    if (Array.isArray(raw.team.requireApproval)) {
      config.team.requireApproval = raw.team.requireApproval.filter((p) => typeof p === "string");
    }
  }
  if (raw.policy && typeof raw.policy === "object") {
    config.policy = {};
    if (Array.isArray(raw.policy.requiredRules)) {
      config.policy.requiredRules = raw.policy.requiredRules.filter((p) => typeof p === "string");
    }
    if (raw.policy.severityFloor === "critical" || raw.policy.severityFloor === "warning") {
      config.policy.severityFloor = raw.policy.severityFloor;
    }
    if (Array.isArray(raw.policy.blockedPatterns)) {
      config.policy.blockedPatterns = raw.policy.blockedPatterns.filter((p) => typeof p === "string");
    }
    if (Array.isArray(raw.policy.requireReviewPatterns)) {
      config.policy.requireReviewPatterns = raw.policy.requireReviewPatterns.filter((p) => typeof p === "string");
    }
  }
  return config;
}
function mergeConfig(base, override) {
  return {
    pgVersion: override.pgVersion ?? base.pgVersion,
    failOn: override.failOn ?? base.failOn,
    migrationPath: override.migrationPath ?? base.migrationPath,
    rules: { ...base.rules, ...override.rules },
    plugins: [...base.plugins ?? [], ...override.plugins ?? []],
    thresholds: { ...base.thresholds, ...override.thresholds },
    ignore: override.ignore ?? base.ignore,
    auditLog: override.auditLog ?? base.auditLog,
    team: override.team ?? base.team,
    policy: override.policy ?? base.policy
  };
}
function resolveRuleConfig(ruleId, defaultSeverity, config) {
  const ruleConfig = config.rules?.[ruleId];
  if (ruleConfig === false) {
    return { enabled: false, severity: defaultSeverity };
  }
  if (ruleConfig === true || ruleConfig === void 0) {
    return { enabled: true, severity: defaultSeverity };
  }
  return {
    enabled: ruleConfig.enabled !== false,
    severity: ruleConfig.severity ?? defaultSeverity,
    threshold: ruleConfig.threshold
  };
}

// src/plugins/loader.ts
import { resolve as resolve2, isAbsolute } from "node:path";
import { pathToFileURL } from "node:url";
async function loadPlugins(pluginPaths, cwd) {
  const rules = [];
  const errors = [];
  const workDir = cwd ?? process.cwd();
  for (const pluginPath of pluginPaths) {
    try {
      const resolved = resolvePluginPath(pluginPath, workDir);
      const mod = await importPlugin(resolved);
      if (!mod || !Array.isArray(mod.rules)) {
        errors.push(`Plugin "${pluginPath}" does not export a valid { rules: [...] } object`);
        continue;
      }
      for (const rule of mod.rules) {
        const validated = validatePluginRule(rule, pluginPath);
        if (validated.error) {
          errors.push(validated.error);
          continue;
        }
        if (validated.rule) {
          rules.push(validated.rule);
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      errors.push(`Failed to load plugin "${pluginPath}": ${msg}`);
    }
  }
  return { rules, errors };
}
function resolvePluginPath(pluginPath, cwd) {
  if (pluginPath.startsWith("./") || pluginPath.startsWith("../")) {
    return resolve2(cwd, pluginPath);
  }
  if (isAbsolute(pluginPath)) {
    return pluginPath;
  }
  return resolve2(cwd, "node_modules", pluginPath);
}
async function importPlugin(resolvedPath) {
  try {
    const fileUrl = pathToFileURL(resolvedPath).href;
    const mod = await import(fileUrl);
    return mod.default ?? mod;
  } catch {
    try {
      const mod = __require(resolvedPath);
      return mod.default ?? mod;
    } catch {
      throw new Error(`Could not import module (tried ESM and CJS)`);
    }
  }
}
function validatePluginRule(raw, pluginPath) {
  if (!raw || typeof raw !== "object") {
    return { error: `Plugin "${pluginPath}" contains an invalid rule entry` };
  }
  const r = raw;
  if (typeof r.id !== "string" || r.id.length === 0) {
    return { error: `Plugin "${pluginPath}" contains a rule without an id` };
  }
  if (r.id.startsWith("MP") && /^MP\d{3}$/.test(r.id)) {
    return { error: `Plugin "${pluginPath}" rule "${r.id}" uses reserved MP prefix` };
  }
  if (typeof r.check !== "function") {
    return { error: `Plugin "${pluginPath}" rule "${r.id}" is missing a check() function` };
  }
  const severity = r.severity === "critical" || r.severity === "warning" ? r.severity : "warning";
  const rule = {
    id: r.id,
    name: typeof r.name === "string" ? r.name : r.id,
    severity,
    description: typeof r.description === "string" ? r.description : "",
    whyItMatters: typeof r.whyItMatters === "string" ? r.whyItMatters : "",
    docsUrl: typeof r.docsUrl === "string" ? r.docsUrl : "",
    check: r.check
  };
  return { rule };
}

// src/schema/simulate.ts
function simulateSchema(sqlStatements) {
  const state = {
    tables: /* @__PURE__ */ new Map(),
    indexes: /* @__PURE__ */ new Map(),
    constraints: /* @__PURE__ */ new Map(),
    sequences: /* @__PURE__ */ new Map()
  };
  for (const sql of sqlStatements) {
    applyStatements(state, sql);
  }
  return state;
}
function applyStatements(state, sql) {
  let result;
  try {
    result = parseSqlSync(sql);
  } catch {
    return;
  }
  for (const s of result.stmts) {
    const stmt = s.stmt;
    applyStatement(state, stmt);
  }
}
function parseSqlSync(sql) {
  const stmts = [];
  const statements = splitStatements(sql);
  for (const raw of statements) {
    const trimmed = raw.trim();
    if (!trimmed) continue;
    const stmt = classifyStatement(trimmed);
    if (stmt) {
      stmts.push({ stmt });
    }
  }
  return { stmts };
}
function splitStatements(sql) {
  const results = [];
  let current = "";
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let inDollarQuote = false;
  let dollarTag = "";
  for (let i = 0; i < sql.length; i++) {
    const ch = sql[i];
    const next = sql[i + 1];
    if (inDollarQuote) {
      current += ch;
      if (ch === "$" && sql.slice(i).startsWith(dollarTag)) {
        current += sql.slice(i + 1, i + dollarTag.length);
        i += dollarTag.length - 1;
        inDollarQuote = false;
      }
      continue;
    }
    if (ch === "$" && !inSingleQuote && !inDoubleQuote) {
      const tagMatch = sql.slice(i).match(/^(\$[^$]*\$)/);
      if (tagMatch?.[1]) {
        dollarTag = tagMatch[1];
        inDollarQuote = true;
        current += ch;
        continue;
      }
    }
    if (ch === "'" && !inDoubleQuote) {
      inSingleQuote = !inSingleQuote;
      current += ch;
      continue;
    }
    if (ch === '"' && !inSingleQuote) {
      inDoubleQuote = !inDoubleQuote;
      current += ch;
      continue;
    }
    if (ch === "-" && next === "-" && !inSingleQuote && !inDoubleQuote) {
      const eol = sql.indexOf("\n", i);
      if (eol === -1) break;
      i = eol;
      continue;
    }
    if (ch === ";" && !inSingleQuote && !inDoubleQuote) {
      results.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  if (current.trim()) {
    results.push(current);
  }
  return results;
}
function classifyStatement(sql) {
  const upper = sql.toUpperCase().replace(/\s+/g, " ").trim();
  if (upper.startsWith("CREATE TABLE")) {
    return { _syntheticCreateTable: sql };
  }
  if (upper.startsWith("ALTER TABLE")) {
    return { _syntheticAlterTable: sql };
  }
  if (upper.startsWith("CREATE INDEX") || upper.startsWith("CREATE UNIQUE INDEX")) {
    return { _syntheticCreateIndex: sql };
  }
  if (upper.startsWith("DROP TABLE")) {
    return { _syntheticDropTable: sql };
  }
  if (upper.startsWith("DROP INDEX")) {
    return { _syntheticDropIndex: sql };
  }
  if (upper.startsWith("CREATE SEQUENCE")) {
    return { _syntheticCreateSequence: sql };
  }
  if (upper.startsWith("DROP SEQUENCE")) {
    return { _syntheticDropSequence: sql };
  }
  return null;
}
function applyStatement(state, stmt) {
  if ("_syntheticCreateTable" in stmt) {
    applyCreateTable(state, stmt._syntheticCreateTable);
  } else if ("_syntheticAlterTable" in stmt) {
    applyAlterTable(state, stmt._syntheticAlterTable);
  } else if ("_syntheticCreateIndex" in stmt) {
    applyCreateIndex(state, stmt._syntheticCreateIndex);
  } else if ("_syntheticDropTable" in stmt) {
    applyDropTable(state, stmt._syntheticDropTable);
  } else if ("_syntheticDropIndex" in stmt) {
    applyDropIndex(state, stmt._syntheticDropIndex);
  } else if ("_syntheticCreateSequence" in stmt) {
    applyCreateSequence(state, stmt._syntheticCreateSequence);
  } else if ("_syntheticDropSequence" in stmt) {
    applyDropSequence(state, stmt._syntheticDropSequence);
  }
}
function applyCreateTable(state, sql) {
  const nameMatch = sql.match(
    /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?(?:(\w+)\.)?(\w+)\s*\(/i
  );
  if (!nameMatch) return;
  const schema = nameMatch[1];
  const tableName = nameMatch[2];
  const key = schema ? `${schema}.${tableName}` : tableName;
  const parenStart = sql.indexOf("(");
  const parenEnd = findMatchingParen(sql, parenStart);
  if (parenStart === -1 || parenEnd === -1) return;
  const body = sql.slice(parenStart + 1, parenEnd);
  const columns = parseColumnDefinitions(body);
  const constraints = parseTableConstraints(body, tableName);
  state.tables.set(key, { name: tableName, columns, schema });
  for (const constraint of constraints) {
    state.constraints.set(constraint.name, constraint);
  }
}
function findMatchingParen(sql, start) {
  if (start === -1) return -1;
  let depth = 0;
  let inQuote = false;
  let quoteChar = "";
  for (let i = start; i < sql.length; i++) {
    const ch = sql[i];
    if (inQuote) {
      if (ch === quoteChar) inQuote = false;
      continue;
    }
    if (ch === "'" || ch === '"') {
      inQuote = true;
      quoteChar = ch;
      continue;
    }
    if (ch === "(") depth++;
    if (ch === ")") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}
function parseColumnDefinitions(body) {
  const columns = [];
  const parts = splitColumnDefs(body);
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const upperTrimmed = trimmed.toUpperCase();
    if (upperTrimmed.startsWith("PRIMARY KEY") || upperTrimmed.startsWith("UNIQUE") || upperTrimmed.startsWith("CHECK") || upperTrimmed.startsWith("FOREIGN KEY") || upperTrimmed.startsWith("EXCLUDE") || upperTrimmed.startsWith("CONSTRAINT")) {
      continue;
    }
    const colMatch = trimmed.match(/^"?(\w+)"?\s+(.+)/i);
    if (!colMatch) continue;
    const name = colMatch[1];
    const rest = colMatch[2];
    const typeMatch = rest.match(
      /^((?:character\s+varying|double\s+precision|time(?:stamp)?\s+(?:with|without)\s+time\s+zone|\w+)(?:\s*\([^)]*\))?)/i
    );
    const type = typeMatch ? typeMatch[1].trim() : rest.split(/\s/)[0] ?? "unknown";
    const upperRest = rest.toUpperCase();
    const nullable = !upperRest.includes("NOT NULL");
    const hasDefault = upperRest.includes("DEFAULT");
    columns.push({ name, type, nullable, hasDefault });
  }
  return columns;
}
function splitColumnDefs(body) {
  const parts = [];
  let current = "";
  let depth = 0;
  for (const ch of body) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      parts.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  if (current.trim()) parts.push(current);
  return parts;
}
function parseTableConstraints(body, tableName) {
  const constraints = [];
  const parts = splitColumnDefs(body);
  for (const part of parts) {
    const trimmed = part.trim();
    const upper = trimmed.toUpperCase();
    let constraintName = "";
    let workingStr = trimmed;
    const nameMatch = trimmed.match(/^CONSTRAINT\s+"?(\w+)"?\s+(.+)/i);
    if (nameMatch) {
      constraintName = nameMatch[1];
      workingStr = nameMatch[2];
    }
    const upperWork = workingStr.toUpperCase();
    if (upperWork.startsWith("PRIMARY KEY")) {
      const cols = extractParenColumns(workingStr);
      if (!constraintName) constraintName = `${tableName}_pkey`;
      constraints.push({ name: constraintName, table: tableName, type: "PRIMARY KEY", columns: cols });
    } else if (upperWork.startsWith("UNIQUE")) {
      const cols = extractParenColumns(workingStr);
      if (!constraintName) constraintName = `${tableName}_${cols.join("_")}_key`;
      constraints.push({ name: constraintName, table: tableName, type: "UNIQUE", columns: cols });
    } else if (upperWork.startsWith("FOREIGN KEY")) {
      const cols = extractParenColumns(workingStr);
      if (!constraintName) constraintName = `${tableName}_${cols.join("_")}_fkey`;
      constraints.push({ name: constraintName, table: tableName, type: "FOREIGN KEY", columns: cols });
    } else if (upperWork.startsWith("CHECK")) {
      if (!constraintName) constraintName = `${tableName}_check`;
      constraints.push({ name: constraintName, table: tableName, type: "CHECK", columns: [] });
    }
    if (!upper.startsWith("PRIMARY KEY") && !upper.startsWith("UNIQUE") && !upper.startsWith("CONSTRAINT")) {
      const colMatch = trimmed.match(/^"?(\w+)"?\s+/i);
      if (colMatch) {
        const colName = colMatch[1];
        if (upper.includes("PRIMARY KEY")) {
          const pkName = `${tableName}_pkey`;
          constraints.push({ name: pkName, table: tableName, type: "PRIMARY KEY", columns: [colName] });
        }
        if (upper.includes(" UNIQUE") || upper.startsWith("UNIQUE")) {
          const uqName = `${tableName}_${colName}_key`;
          constraints.push({ name: uqName, table: tableName, type: "UNIQUE", columns: [colName] });
        }
      }
    }
  }
  return constraints;
}
function extractParenColumns(str) {
  const match = str.match(/\(([^)]+)\)/);
  if (!match) return [];
  return match[1].split(",").map((c) => c.trim().replace(/"/g, "")).filter(Boolean);
}
function applyAlterTable(state, sql) {
  const nameMatch = sql.match(
    /ALTER\s+TABLE\s+(?:IF\s+EXISTS\s+)?(?:ONLY\s+)?(?:(\w+)\.)?(\w+)/i
  );
  if (!nameMatch) return;
  const schema = nameMatch[1];
  const tableName = nameMatch[2];
  const key = schema ? `${schema}.${tableName}` : tableName;
  const table = state.tables.get(key);
  if (!table) return;
  const upper = sql.toUpperCase();
  const addColMatch = sql.match(
    /ADD\s+(?:COLUMN\s+)?(?:IF\s+NOT\s+EXISTS\s+)?"?(\w+)"?\s+(\S+)/i
  );
  if (addColMatch && upper.includes("ADD")) {
    const colName = addColMatch[1];
    const colType = addColMatch[2];
    const nullable = !upper.includes("NOT NULL");
    const hasDefault = upper.includes("DEFAULT");
    if (!table.columns.find((c) => c.name === colName)) {
      table.columns.push({ name: colName, type: colType, nullable, hasDefault });
    }
  }
  const dropColMatch = sql.match(
    /DROP\s+(?:COLUMN\s+)?(?:IF\s+EXISTS\s+)?"?(\w+)"?/i
  );
  if (dropColMatch && upper.includes("DROP") && !upper.includes("DROP TABLE")) {
    const colName = dropColMatch[1];
    table.columns = table.columns.filter((c) => c.name !== colName);
  }
  const setNotNullMatch = sql.match(
    /ALTER\s+(?:COLUMN\s+)?"?(\w+)"?\s+SET\s+NOT\s+NULL/i
  );
  if (setNotNullMatch) {
    const colName = setNotNullMatch[1];
    const col = table.columns.find((c) => c.name === colName);
    if (col) col.nullable = false;
  }
  const dropNotNullMatch = sql.match(
    /ALTER\s+(?:COLUMN\s+)?"?(\w+)"?\s+DROP\s+NOT\s+NULL/i
  );
  if (dropNotNullMatch) {
    const colName = dropNotNullMatch[1];
    const col = table.columns.find((c) => c.name === colName);
    if (col) col.nullable = true;
  }
  const setDefaultMatch = sql.match(
    /ALTER\s+(?:COLUMN\s+)?"?(\w+)"?\s+SET\s+DEFAULT/i
  );
  if (setDefaultMatch) {
    const colName = setDefaultMatch[1];
    const col = table.columns.find((c) => c.name === colName);
    if (col) col.hasDefault = true;
  }
  const dropDefaultMatch = sql.match(
    /ALTER\s+(?:COLUMN\s+)?"?(\w+)"?\s+DROP\s+DEFAULT/i
  );
  if (dropDefaultMatch) {
    const colName = dropDefaultMatch[1];
    const col = table.columns.find((c) => c.name === colName);
    if (col) col.hasDefault = false;
  }
  const typeMatch = sql.match(
    /ALTER\s+(?:COLUMN\s+)?"?(\w+)"?\s+(?:SET\s+DATA\s+)?TYPE\s+(\S+)/i
  );
  if (typeMatch) {
    const colName = typeMatch[1];
    const newType = typeMatch[2];
    const col = table.columns.find((c) => c.name === colName);
    if (col) col.type = newType;
  }
  const addConstraintMatch = sql.match(
    /ADD\s+CONSTRAINT\s+"?(\w+)"?\s+(PRIMARY\s+KEY|UNIQUE|CHECK|FOREIGN\s+KEY|EXCLUDE)/i
  );
  if (addConstraintMatch) {
    const cName = addConstraintMatch[1];
    const cType = addConstraintMatch[2].replace(/\s+/g, " ").toUpperCase();
    const cols = extractParenColumns(sql.slice(sql.indexOf(addConstraintMatch[0])));
    state.constraints.set(cName, { name: cName, table: tableName, type: cType, columns: cols });
  }
  const dropConstraintMatch = sql.match(
    /DROP\s+CONSTRAINT\s+(?:IF\s+EXISTS\s+)?"?(\w+)"?/i
  );
  if (dropConstraintMatch) {
    const cName = dropConstraintMatch[1];
    state.constraints.delete(cName);
  }
  const renameTableMatch = sql.match(/RENAME\s+TO\s+"?(\w+)"?/i);
  if (renameTableMatch && !upper.includes("RENAME COLUMN") && !upper.includes("RENAME CONSTRAINT")) {
    const newName = renameTableMatch[1];
    const newKey = schema ? `${schema}.${newName}` : newName;
    state.tables.delete(key);
    table.name = newName;
    state.tables.set(newKey, table);
  }
  const renameColMatch = sql.match(
    /RENAME\s+(?:COLUMN\s+)?"?(\w+)"?\s+TO\s+"?(\w+)"?/i
  );
  if (renameColMatch && upper.includes("RENAME")) {
    const oldName = renameColMatch[1];
    const newName = renameColMatch[2];
    const col = table.columns.find((c) => c.name === oldName);
    if (col) col.name = newName;
  }
}
function applyCreateIndex(state, sql) {
  const indexMatch = sql.match(
    /CREATE\s+(UNIQUE\s+)?INDEX\s+(CONCURRENTLY\s+)?(?:IF\s+NOT\s+EXISTS\s+)?"?(\w+)"?\s+ON\s+(?:(\w+)\.)?(\w+)\s*(?:USING\s+\w+\s*)?\(([^)]+)\)/i
  );
  if (!indexMatch) return;
  const unique = !!indexMatch[1];
  const concurrent = !!indexMatch[2];
  const indexName = indexMatch[3];
  const tableName = indexMatch[5] ?? indexMatch[4];
  const columns = indexMatch[6].split(",").map((c) => c.trim().replace(/"/g, "").split(/\s/)[0] ?? "").filter(Boolean);
  state.indexes.set(indexName, {
    name: indexName,
    table: tableName,
    columns,
    unique,
    concurrent
  });
}
function applyDropTable(state, sql) {
  const dropMatch = sql.match(
    /DROP\s+TABLE\s+(?:IF\s+EXISTS\s+)?(?:(\w+)\.)?(\w+)/i
  );
  if (!dropMatch) return;
  const schema = dropMatch[1];
  const tableName = dropMatch[2];
  const key = schema ? `${schema}.${tableName}` : tableName;
  state.tables.delete(key);
  for (const [name, idx] of state.indexes) {
    if (idx.table === tableName) state.indexes.delete(name);
  }
  for (const [name, con] of state.constraints) {
    if (con.table === tableName) state.constraints.delete(name);
  }
}
function applyDropIndex(state, sql) {
  const dropMatch = sql.match(
    /DROP\s+INDEX\s+(CONCURRENTLY\s+)?(?:IF\s+EXISTS\s+)?"?(?:\w+\.)?"?(\w+)"?/i
  );
  if (!dropMatch) return;
  const indexName = dropMatch[2];
  state.indexes.delete(indexName);
}
function applyCreateSequence(state, sql) {
  const seqMatch = sql.match(
    /CREATE\s+SEQUENCE\s+(?:IF\s+NOT\s+EXISTS\s+)?(?:(\w+)\.)?(\w+)/i
  );
  if (!seqMatch) return;
  const seqName = seqMatch[2] ?? seqMatch[1];
  const upper = sql.toUpperCase();
  let dataType = "bigint";
  if (upper.includes("AS SMALLINT")) dataType = "smallint";
  else if (upper.includes("AS INTEGER")) dataType = "integer";
  else if (upper.includes("AS BIGINT")) dataType = "bigint";
  const ownedMatch = sql.match(/OWNED\s+BY\s+(\S+)/i);
  const ownedBy = ownedMatch?.[1]?.replace(/"/g, "");
  state.sequences.set(seqName, { name: seqName, dataType, ownedBy });
}
function applyDropSequence(state, sql) {
  const dropMatch = sql.match(
    /DROP\s+SEQUENCE\s+(?:IF\s+EXISTS\s+)?(?:(\w+)\.)?(\w+)/i
  );
  if (!dropMatch) return;
  const seqName = dropMatch[2] ?? dropMatch[1];
  state.sequences.delete(seqName);
}
async function simulateSchemaAsync(sqlStatements) {
  return simulateSchema(sqlStatements);
}

// src/graph/dependencies.ts
import { parse as pgParse2 } from "libpg-query";
async function buildDependencyGraph(files) {
  const fileData = await Promise.all(
    files.map(async (f) => {
      const { created, referenced } = await extractTableOperations(f.sql);
      return { path: f.path, created, referenced };
    })
  );
  const tableCreators = /* @__PURE__ */ new Map();
  for (const fd of fileData) {
    for (const table of fd.created) {
      if (!tableCreators.has(table)) {
        tableCreators.set(table, fd.path);
      }
    }
  }
  const nodes = fileData.map((fd) => ({
    file: fd.path,
    tables: [.../* @__PURE__ */ new Set([...fd.created, ...fd.referenced])],
    dependsOn: [],
    dependedBy: []
  }));
  const nodeMap = /* @__PURE__ */ new Map();
  for (const node of nodes) {
    nodeMap.set(node.file, node);
  }
  for (const fd of fileData) {
    const node = nodeMap.get(fd.path);
    if (!node) continue;
    for (const table of fd.referenced) {
      const creator = tableCreators.get(table);
      if (creator && creator !== fd.path) {
        if (!node.dependsOn.includes(creator)) {
          node.dependsOn.push(creator);
        }
        const creatorNode = nodeMap.get(creator);
        if (creatorNode && !creatorNode.dependedBy.includes(fd.path)) {
          creatorNode.dependedBy.push(fd.path);
        }
      }
    }
  }
  const cycles = detectCycles(nodes, nodeMap);
  const orphans = nodes.filter((n) => n.dependsOn.length === 0 && n.dependedBy.length === 0).map((n) => n.file);
  return { nodes, cycles, orphans };
}
async function extractTableOperations(sql) {
  const created = [];
  const referenced = [];
  try {
    const result = await pgParse2(sql);
    for (const s of result.stmts) {
      const stmt = s.stmt;
      processStmtForTables(stmt, created, referenced);
    }
  } catch {
    extractTablesFromRegex(sql, created, referenced);
  }
  return {
    created: [...new Set(created)],
    referenced: [...new Set(referenced.filter((t) => !created.includes(t)))]
  };
}
function processStmtForTables(stmt, created, referenced) {
  if (hasKey2(stmt, "CreateStmt")) {
    const node = stmt.CreateStmt;
    if (node.relation?.relname) {
      created.push(node.relation.relname);
    }
  }
  if (hasKey2(stmt, "AlterTableStmt")) {
    const node = stmt.AlterTableStmt;
    if (node.relation?.relname) {
      referenced.push(node.relation.relname);
    }
  }
  if (hasKey2(stmt, "DropStmt")) {
    const drop = stmt.DropStmt;
    if (drop.objects) {
      for (const obj of drop.objects) {
        const name = extractNameFromObject(obj);
        if (name) referenced.push(name);
      }
    }
  }
  if (hasKey2(stmt, "IndexStmt")) {
    const idx = stmt.IndexStmt;
    if (idx.relation?.relname) {
      referenced.push(idx.relation.relname);
    }
  }
  if (hasKey2(stmt, "InsertStmt")) {
    const insert = stmt.InsertStmt;
    if (insert.relation?.relname) {
      referenced.push(insert.relation.relname);
    }
  }
  if (hasKey2(stmt, "CreateTrigStmt")) {
    const trig = stmt.CreateTrigStmt;
    if (trig.relation?.relname) {
      referenced.push(trig.relation.relname);
    }
  }
}
function extractTablesFromRegex(sql, created, referenced) {
  const createRegex = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?(?:\w+\.)?(\w+)/gi;
  let match;
  while ((match = createRegex.exec(sql)) !== null) {
    if (match[1]) created.push(match[1]);
  }
  const alterRegex = /ALTER\s+TABLE\s+(?:IF\s+EXISTS\s+)?(?:ONLY\s+)?(?:\w+\.)?(\w+)/gi;
  while ((match = alterRegex.exec(sql)) !== null) {
    if (match[1]) referenced.push(match[1]);
  }
  const dropRegex = /DROP\s+TABLE\s+(?:IF\s+EXISTS\s+)?(?:\w+\.)?(\w+)/gi;
  while ((match = dropRegex.exec(sql)) !== null) {
    if (match[1]) referenced.push(match[1]);
  }
  const indexRegex = /CREATE\s+(?:UNIQUE\s+)?INDEX\s+.*?\s+ON\s+(?:\w+\.)?(\w+)/gi;
  while ((match = indexRegex.exec(sql)) !== null) {
    if (match[1]) referenced.push(match[1]);
  }
  const fkRegex = /REFERENCES\s+(?:\w+\.)?(\w+)/gi;
  while ((match = fkRegex.exec(sql)) !== null) {
    if (match[1]) referenced.push(match[1]);
  }
}
function extractNameFromObject(obj) {
  if (Array.isArray(obj)) {
    const parts = obj.filter(
      (item) => item != null && typeof item === "object" && "str" in item
    ).map((item) => item.str);
    return parts[parts.length - 1] ?? null;
  }
  if (obj && typeof obj === "object" && "List" in obj) {
    const list = obj.List;
    return extractNameFromObject(list.items);
  }
  return null;
}
function detectCycles(nodes, nodeMap) {
  const cycles = [];
  const visited = /* @__PURE__ */ new Set();
  const inStack = /* @__PURE__ */ new Set();
  const stack = [];
  function dfs(file) {
    if (inStack.has(file)) {
      const cycleStart = stack.indexOf(file);
      if (cycleStart !== -1) {
        const cycle = stack.slice(cycleStart);
        cycle.push(file);
        cycles.push(cycle);
      }
      return;
    }
    if (visited.has(file)) return;
    visited.add(file);
    inStack.add(file);
    stack.push(file);
    const node = nodeMap.get(file);
    if (node) {
      for (const dep of node.dependsOn) {
        dfs(dep);
      }
    }
    stack.pop();
    inStack.delete(file);
  }
  for (const node of nodes) {
    dfs(node.file);
  }
  return cycles;
}
function hasKey2(obj, key) {
  return key in obj && obj[key] != null;
}

// src/prediction/duration.ts
function predictDuration(sql, tableStats) {
  const statements = splitStatements2(sql);
  const estimates = [];
  for (const stmt of statements) {
    const trimmed = stmt.trim();
    if (!trimmed) continue;
    const estimate = estimateStatement(trimmed, tableStats);
    if (estimate) {
      estimates.push(estimate);
    }
  }
  return estimates;
}
function estimateStatement(sql, stats) {
  const upper = sql.toUpperCase().replace(/\s+/g, " ").trim();
  if (upper.startsWith("CREATE INDEX") || upper.startsWith("CREATE UNIQUE INDEX")) {
    return estimateCreateIndex(sql, upper, stats);
  }
  if (upper.startsWith("ALTER TABLE")) {
    return estimateAlterTable(sql, upper, stats);
  }
  if (upper.startsWith("DROP INDEX")) {
    return estimateDropIndex(sql, upper);
  }
  if (upper.startsWith("DROP TABLE")) {
    return estimateDropTable(sql);
  }
  if (upper.startsWith("CREATE TABLE")) {
    return estimateCreateTable(sql);
  }
  if (upper.startsWith("VACUUM")) {
    return estimateVacuum(sql, upper, stats);
  }
  if (upper.startsWith("REINDEX")) {
    return estimateReindex(sql, upper, stats);
  }
  if (upper.startsWith("TRUNCATE")) {
    return estimateTruncate(sql);
  }
  if (upper.startsWith("CREATE SEQUENCE") || upper.startsWith("DROP SEQUENCE")) {
    return {
      statement: sql,
      operation: upper.startsWith("CREATE") ? "CREATE SEQUENCE" : "DROP SEQUENCE",
      estimatedDuration: "< 1s",
      confidence: "high",
      factors: ["Metadata-only operation"]
    };
  }
  return null;
}
function estimateCreateIndex(sql, upper, stats) {
  const concurrent = upper.includes("CONCURRENTLY");
  const unique = upper.includes("UNIQUE");
  const operation = `CREATE${unique ? " UNIQUE" : ""} INDEX${concurrent ? " CONCURRENTLY" : ""}`;
  const factors = [];
  if (concurrent) {
    factors.push("CONCURRENTLY adds ~2x overhead (two table scans)");
  }
  if (!stats) {
    factors.push("No table stats provided \u2014 estimate based on general heuristics");
    return {
      statement: sql,
      operation,
      estimatedDuration: concurrent ? "1s-5min" : "< 1s-2min",
      confidence: "low",
      factors
    };
  }
  const millions = stats.rowCount / 1e6;
  factors.push(`Table has ${formatRowCount(stats.rowCount)} rows`);
  if (stats.sizeBytes > 0) {
    factors.push(`Table size: ${formatBytes3(stats.sizeBytes)}`);
  }
  const baseSeconds = Math.max(0.1, millions * 1);
  const adjustedSeconds = concurrent ? baseSeconds * 2 : baseSeconds;
  if (stats.indexCount > 3) {
    factors.push(`${stats.indexCount} existing indexes may cause I/O contention`);
  }
  return {
    statement: sql,
    operation,
    estimatedDuration: formatDuration(adjustedSeconds),
    confidence: stats.rowCount > 0 ? "medium" : "high",
    factors
  };
}
function estimateAlterTable(sql, upper, stats) {
  const factors = [];
  if (upper.includes("ADD COLUMN") || upper.includes("ADD") && !upper.includes("ADD CONSTRAINT")) {
    const hasDefault = upper.includes("DEFAULT");
    const hasNotNull = upper.includes("NOT NULL");
    if (!hasDefault && !hasNotNull) {
      factors.push("ADD COLUMN without DEFAULT is metadata-only on PG 11+");
      return {
        statement: sql,
        operation: "ALTER TABLE ADD COLUMN",
        estimatedDuration: "< 1s",
        confidence: "high",
        factors
      };
    }
    if (hasDefault && !hasNotNull) {
      factors.push("ADD COLUMN with DEFAULT is metadata-only on PG 11+");
      factors.push("On PG < 11, requires full table rewrite");
      if (stats) {
        factors.push(`Table has ${formatRowCount(stats.rowCount)} rows`);
        const millions = stats.rowCount / 1e6;
        const seconds = millions * 10;
        return {
          statement: sql,
          operation: "ALTER TABLE ADD COLUMN (with DEFAULT)",
          estimatedDuration: `< 1s (PG 11+) / ${formatDuration(seconds)} (PG < 11)`,
          confidence: "medium",
          factors
        };
      }
      return {
        statement: sql,
        operation: "ALTER TABLE ADD COLUMN (with DEFAULT)",
        estimatedDuration: "< 1s (PG 11+) / varies (PG < 11)",
        confidence: "low",
        factors
      };
    }
    if (hasNotNull && hasDefault) {
      factors.push("ADD COLUMN with NOT NULL + DEFAULT requires ACCESS EXCLUSIVE lock");
      factors.push("Metadata-only on PG 11+, table rewrite on PG < 11");
      return {
        statement: sql,
        operation: "ALTER TABLE ADD COLUMN (NOT NULL + DEFAULT)",
        estimatedDuration: "< 1s (PG 11+) / varies (PG < 11)",
        confidence: "medium",
        factors
      };
    }
  }
  if (upper.includes("TYPE") && (upper.includes("ALTER COLUMN") || upper.includes("ALTER "))) {
    factors.push("Changing column type requires full table rewrite");
    if (stats) {
      factors.push(`Table has ${formatRowCount(stats.rowCount)} rows`);
      const millions = stats.rowCount / 1e6;
      const seconds = Math.max(1, millions * 10);
      return {
        statement: sql,
        operation: "ALTER TABLE ALTER COLUMN TYPE",
        estimatedDuration: formatDuration(seconds),
        confidence: "medium",
        factors
      };
    }
    return {
      statement: sql,
      operation: "ALTER TABLE ALTER COLUMN TYPE",
      estimatedDuration: "1s-1h+",
      confidence: "low",
      factors
    };
  }
  if (upper.includes("SET NOT NULL")) {
    factors.push("SET NOT NULL requires full table scan to validate on PG < 12");
    factors.push("On PG 12+, can be done instantly with pre-existing CHECK constraint");
    if (stats) {
      factors.push(`Table has ${formatRowCount(stats.rowCount)} rows`);
      const millions = stats.rowCount / 1e6;
      const seconds = Math.max(0.5, millions * 5);
      return {
        statement: sql,
        operation: "ALTER TABLE SET NOT NULL",
        estimatedDuration: formatDuration(seconds),
        confidence: "medium",
        factors
      };
    }
    return {
      statement: sql,
      operation: "ALTER TABLE SET NOT NULL",
      estimatedDuration: "< 1s-5min",
      confidence: "low",
      factors
    };
  }
  if (upper.includes("DROP COLUMN") || upper.includes("DROP ")) {
    factors.push("DROP COLUMN is a metadata-only operation (column is hidden, not removed)");
    return {
      statement: sql,
      operation: "ALTER TABLE DROP COLUMN",
      estimatedDuration: "< 1s",
      confidence: "high",
      factors
    };
  }
  if (upper.includes("ADD CONSTRAINT")) {
    if (upper.includes("NOT VALID")) {
      factors.push("NOT VALID skips validation \u2014 metadata-only");
      return {
        statement: sql,
        operation: "ALTER TABLE ADD CONSTRAINT (NOT VALID)",
        estimatedDuration: "< 1s",
        confidence: "high",
        factors
      };
    }
    factors.push("Adding a validated constraint requires full table scan");
    if (stats) {
      factors.push(`Table has ${formatRowCount(stats.rowCount)} rows`);
      const millions = stats.rowCount / 1e6;
      const seconds = Math.max(0.5, millions * 3);
      return {
        statement: sql,
        operation: "ALTER TABLE ADD CONSTRAINT",
        estimatedDuration: formatDuration(seconds),
        confidence: "medium",
        factors
      };
    }
    return {
      statement: sql,
      operation: "ALTER TABLE ADD CONSTRAINT",
      estimatedDuration: "< 1s-5min",
      confidence: "low",
      factors
    };
  }
  if (upper.includes("DROP CONSTRAINT")) {
    factors.push("Dropping a constraint is metadata-only");
    return {
      statement: sql,
      operation: "ALTER TABLE DROP CONSTRAINT",
      estimatedDuration: "< 1s",
      confidence: "high",
      factors
    };
  }
  return {
    statement: sql,
    operation: "ALTER TABLE",
    estimatedDuration: "< 1s-varies",
    confidence: "low",
    factors: ["Unrecognized ALTER TABLE variant \u2014 manual review recommended"]
  };
}
function estimateDropIndex(sql, upper) {
  const concurrent = upper.includes("CONCURRENTLY");
  if (concurrent) {
    return {
      statement: sql,
      operation: "DROP INDEX CONCURRENTLY",
      estimatedDuration: "1-5s",
      confidence: "medium",
      factors: ["CONCURRENTLY avoids ACCESS EXCLUSIVE lock but takes longer"]
    };
  }
  return {
    statement: sql,
    operation: "DROP INDEX",
    estimatedDuration: "< 1s",
    confidence: "high",
    factors: ["Metadata-only operation under ACCESS EXCLUSIVE lock"]
  };
}
function estimateDropTable(sql) {
  return {
    statement: sql,
    operation: "DROP TABLE",
    estimatedDuration: "< 1s",
    confidence: "high",
    factors: ["Metadata-only operation; storage is reclaimed asynchronously"]
  };
}
function estimateCreateTable(sql) {
  return {
    statement: sql,
    operation: "CREATE TABLE",
    estimatedDuration: "< 1s",
    confidence: "high",
    factors: ["Creating an empty table is a metadata-only operation"]
  };
}
function estimateVacuum(sql, upper, stats) {
  const isFull = upper.includes("FULL");
  const factors = [];
  if (isFull) {
    factors.push("VACUUM FULL rewrites the entire table and requires ACCESS EXCLUSIVE lock");
    if (stats) {
      factors.push(`Table has ${formatRowCount(stats.rowCount)} rows`);
      const millions = stats.rowCount / 1e6;
      const seconds = Math.max(1, millions * 30);
      return {
        statement: sql,
        operation: "VACUUM FULL",
        estimatedDuration: formatDuration(seconds),
        confidence: "medium",
        factors
      };
    }
    return {
      statement: sql,
      operation: "VACUUM FULL",
      estimatedDuration: "1s-1h+",
      confidence: "low",
      factors
    };
  }
  factors.push("Regular VACUUM does not hold exclusive locks");
  return {
    statement: sql,
    operation: "VACUUM",
    estimatedDuration: "1-30s",
    confidence: "low",
    factors
  };
}
function estimateReindex(sql, upper, stats) {
  const concurrent = upper.includes("CONCURRENTLY");
  const factors = [];
  if (concurrent) {
    factors.push("CONCURRENTLY avoids locking but takes ~2x longer");
  }
  if (stats) {
    factors.push(`Table has ${formatRowCount(stats.rowCount)} rows`);
    const millions = stats.rowCount / 1e6;
    const seconds = Math.max(0.5, millions * (concurrent ? 2 : 1));
    return {
      statement: sql,
      operation: `REINDEX${concurrent ? " CONCURRENTLY" : ""}`,
      estimatedDuration: formatDuration(seconds),
      confidence: "medium",
      factors
    };
  }
  return {
    statement: sql,
    operation: `REINDEX${concurrent ? " CONCURRENTLY" : ""}`,
    estimatedDuration: concurrent ? "1s-5min" : "< 1s-2min",
    confidence: "low",
    factors: [...factors, "No table stats \u2014 estimate is approximate"]
  };
}
function estimateTruncate(sql) {
  return {
    statement: sql,
    operation: "TRUNCATE",
    estimatedDuration: "< 1s",
    confidence: "high",
    factors: ["TRUNCATE is near-instant but requires ACCESS EXCLUSIVE lock"]
  };
}
function splitStatements2(sql) {
  const results = [];
  let current = "";
  let inQuote = false;
  let quoteChar = "";
  for (const ch of sql) {
    if (inQuote) {
      current += ch;
      if (ch === quoteChar) inQuote = false;
      continue;
    }
    if (ch === "'" || ch === '"') {
      inQuote = true;
      quoteChar = ch;
      current += ch;
      continue;
    }
    if (ch === ";") {
      if (current.trim()) results.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  if (current.trim()) results.push(current);
  return results;
}
function formatDuration(seconds) {
  if (seconds < 1) return "< 1s";
  if (seconds < 5) return "1-5s";
  if (seconds < 30) return "5-30s";
  if (seconds < 120) return "30s-2min";
  if (seconds < 900) return "2-15min";
  if (seconds < 3600) return "15min-1h";
  return "1h+";
}
function formatRowCount(count) {
  if (count >= 1e9) return `${(count / 1e9).toFixed(1)}B`;
  if (count >= 1e6) return `${(count / 1e6).toFixed(1)}M`;
  if (count >= 1e3) return `${(count / 1e3).toFixed(1)}K`;
  return String(count);
}
function formatBytes3(bytes) {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

// src/lockqueue/simulate.ts
var LOCK_HIERARCHY = [
  "ACCESS SHARE",
  "ROW SHARE",
  "ROW EXCLUSIVE",
  "SHARE UPDATE EXCLUSIVE",
  "SHARE",
  "SHARE ROW EXCLUSIVE",
  "EXCLUSIVE",
  "ACCESS EXCLUSIVE"
];
var LOCK_CONFLICTS = {
  "ACCESS SHARE": [],
  "ROW SHARE": [
    "ACCESS EXCLUSIVE"
  ],
  "ROW EXCLUSIVE": [
    "SHARE",
    "SHARE ROW EXCLUSIVE",
    "EXCLUSIVE",
    "ACCESS EXCLUSIVE"
  ],
  "SHARE UPDATE EXCLUSIVE": [
    "SHARE UPDATE EXCLUSIVE",
    "SHARE",
    "SHARE ROW EXCLUSIVE",
    "EXCLUSIVE",
    "ACCESS EXCLUSIVE"
  ],
  "SHARE": [
    "ROW EXCLUSIVE",
    "SHARE UPDATE EXCLUSIVE",
    "SHARE ROW EXCLUSIVE",
    "EXCLUSIVE",
    "ACCESS EXCLUSIVE"
  ],
  "SHARE ROW EXCLUSIVE": [
    "ROW EXCLUSIVE",
    "SHARE UPDATE EXCLUSIVE",
    "SHARE",
    "SHARE ROW EXCLUSIVE",
    "EXCLUSIVE",
    "ACCESS EXCLUSIVE"
  ],
  "EXCLUSIVE": [
    "ROW SHARE",
    "ROW EXCLUSIVE",
    "SHARE UPDATE EXCLUSIVE",
    "SHARE",
    "SHARE ROW EXCLUSIVE",
    "EXCLUSIVE",
    "ACCESS EXCLUSIVE"
  ],
  "ACCESS EXCLUSIVE": [
    "ACCESS SHARE",
    "ROW SHARE",
    "ROW EXCLUSIVE",
    "SHARE UPDATE EXCLUSIVE",
    "SHARE",
    "SHARE ROW EXCLUSIVE",
    "EXCLUSIVE",
    "ACCESS EXCLUSIVE"
  ]
};
var LOCK_TO_OPERATIONS = {
  "ACCESS SHARE": ["SELECT"],
  "ROW SHARE": ["SELECT FOR UPDATE", "SELECT FOR SHARE"],
  "ROW EXCLUSIVE": ["INSERT", "UPDATE", "DELETE"],
  "SHARE UPDATE EXCLUSIVE": ["VACUUM", "ANALYZE", "CREATE INDEX CONCURRENTLY"],
  "SHARE": ["CREATE INDEX"],
  "SHARE ROW EXCLUSIVE": ["CREATE TRIGGER", "ALTER TABLE (some forms)"],
  "EXCLUSIVE": ["REFRESH MATERIALIZED VIEW CONCURRENTLY"],
  "ACCESS EXCLUSIVE": [
    "ALTER TABLE",
    "DROP TABLE",
    "TRUNCATE",
    "REINDEX",
    "VACUUM FULL",
    "REFRESH MATERIALIZED VIEW"
  ]
};
function simulateLockQueue(sql, opts) {
  const activeConnections = opts?.activeConnections ?? 50;
  const avgQueryDuration = opts?.avgQueryDuration ?? 100;
  const statements = splitStatements3(sql);
  const results = [];
  for (const stmt of statements) {
    const trimmed = stmt.trim();
    if (!trimmed) continue;
    const result = simulateStatement(trimmed, activeConnections, avgQueryDuration);
    if (result) {
      results.push(result);
    }
  }
  return results;
}
function simulateStatement(sql, activeConnections, avgQueryDuration) {
  const upper = sql.toUpperCase().replace(/\s+/g, " ").trim();
  const lockType = classifyLockType(upper);
  if (!lockType) return null;
  const blockedLocks = LOCK_CONFLICTS[lockType] ?? [];
  const blockedOps = mapLocksToOperations(blockedLocks);
  const recommendations = generateRecommendations(upper, lockType, activeConnections);
  const maxQueueTime = estimateQueueTime(lockType, activeConnections, avgQueryDuration);
  return {
    ddlLockType: lockType,
    blockedOperations: blockedOps,
    maxQueueTime,
    recommendations
  };
}
function classifyLockType(upper) {
  if (upper.includes("CREATE") && upper.includes("INDEX") && upper.includes("CONCURRENTLY")) {
    return "SHARE UPDATE EXCLUSIVE";
  }
  if (upper.startsWith("CREATE INDEX") || upper.startsWith("CREATE UNIQUE INDEX")) {
    return "SHARE";
  }
  if (upper.includes("DROP INDEX") && upper.includes("CONCURRENTLY")) {
    return "ACCESS EXCLUSIVE";
  }
  if (upper.startsWith("DROP INDEX")) {
    return "ACCESS EXCLUSIVE";
  }
  if (upper.startsWith("ALTER TABLE")) {
    if (upper.includes("VALIDATE CONSTRAINT")) {
      return "SHARE UPDATE EXCLUSIVE";
    }
    if (upper.includes("ADD CONSTRAINT") && upper.includes("NOT VALID")) {
      return "SHARE UPDATE EXCLUSIVE";
    }
    if (upper.includes("SET STATISTICS")) {
      return "SHARE UPDATE EXCLUSIVE";
    }
    return "ACCESS EXCLUSIVE";
  }
  if (upper.startsWith("DROP TABLE")) {
    return "ACCESS EXCLUSIVE";
  }
  if (upper.startsWith("TRUNCATE")) {
    return "ACCESS EXCLUSIVE";
  }
  if (upper.startsWith("VACUUM") && upper.includes("FULL")) {
    return "ACCESS EXCLUSIVE";
  }
  if (upper.startsWith("VACUUM")) {
    return "SHARE UPDATE EXCLUSIVE";
  }
  if (upper.startsWith("REINDEX")) {
    if (upper.includes("CONCURRENTLY")) {
      return "SHARE UPDATE EXCLUSIVE";
    }
    return "ACCESS EXCLUSIVE";
  }
  if (upper.includes("REFRESH MATERIALIZED VIEW")) {
    if (upper.includes("CONCURRENTLY")) {
      return "EXCLUSIVE";
    }
    return "ACCESS EXCLUSIVE";
  }
  if (upper.startsWith("CREATE TABLE")) {
    return "ACCESS EXCLUSIVE";
  }
  if (upper.startsWith("CREATE TRIGGER") || upper.startsWith("CREATE OR REPLACE TRIGGER")) {
    return "SHARE ROW EXCLUSIVE";
  }
  return null;
}
function mapLocksToOperations(blockedLocks) {
  const ops = /* @__PURE__ */ new Set();
  for (const lock of blockedLocks) {
    const lockOps = LOCK_TO_OPERATIONS[lock];
    if (lockOps) {
      for (const op of lockOps) {
        ops.add(op);
      }
    }
  }
  return [...ops];
}
function estimateQueueTime(lockType, activeConnections, avgQueryDuration) {
  const lockIndex = LOCK_HIERARCHY.indexOf(lockType);
  if (lockIndex === -1) return "unknown";
  const blockFraction = lockIndex / (LOCK_HIERARCHY.length - 1);
  const queuedConnections = Math.ceil(activeConnections * blockFraction);
  const estimatedMs = queuedConnections * avgQueryDuration;
  if (estimatedMs < 100) return "< 100ms";
  if (estimatedMs < 1e3) return `~${Math.round(estimatedMs)}ms`;
  if (estimatedMs < 5e3) return `~${(estimatedMs / 1e3).toFixed(1)}s`;
  if (estimatedMs < 6e4) return `~${Math.round(estimatedMs / 1e3)}s`;
  return `~${Math.round(estimatedMs / 6e4)}min`;
}
function generateRecommendations(upper, lockType, activeConnections) {
  const recs = [];
  if (lockType === "ACCESS EXCLUSIVE") {
    recs.push("Set lock_timeout to prevent indefinite blocking (e.g., SET lock_timeout = '5s')");
    if (upper.startsWith("CREATE INDEX") && !upper.includes("CONCURRENTLY")) {
      recs.push("Use CREATE INDEX CONCURRENTLY to avoid blocking writes");
    }
    if (upper.startsWith("DROP INDEX") && !upper.includes("CONCURRENTLY")) {
      recs.push("Use DROP INDEX CONCURRENTLY to avoid blocking reads");
    }
    if (upper.includes("VACUUM FULL")) {
      recs.push("Consider pg_repack instead of VACUUM FULL for lower lock impact");
    }
    if (upper.startsWith("REINDEX") && !upper.includes("CONCURRENTLY")) {
      recs.push("Use REINDEX CONCURRENTLY (PG 12+) to avoid blocking queries");
    }
    if (activeConnections > 100) {
      recs.push(`High connection count (${activeConnections}) \u2014 consider running during low-traffic window`);
    }
    if (upper.startsWith("ALTER TABLE")) {
      recs.push("Consider breaking multi-step ALTER TABLE into separate statements with retry logic");
    }
  }
  if (lockType === "SHARE") {
    recs.push("This lock blocks INSERT/UPDATE/DELETE but allows SELECT");
    if (upper.startsWith("CREATE INDEX")) {
      recs.push("Use CREATE INDEX CONCURRENTLY to allow writes during index creation");
    }
  }
  if (lockType === "SHARE UPDATE EXCLUSIVE") {
    recs.push("This lock allows most operations \u2014 minimal impact on read/write traffic");
  }
  if (activeConnections > 200 && lockType !== "SHARE UPDATE EXCLUSIVE") {
    recs.push("With 200+ connections, use statement_timeout to prevent long-running DDL from snowballing");
  }
  return recs;
}
function splitStatements3(sql) {
  const results = [];
  let current = "";
  let inQuote = false;
  let quoteChar = "";
  for (const ch of sql) {
    if (inQuote) {
      current += ch;
      if (ch === quoteChar) inQuote = false;
      continue;
    }
    if (ch === "'" || ch === '"') {
      inQuote = true;
      quoteChar = ch;
      current += ch;
      continue;
    }
    if (ch === ";") {
      if (current.trim()) results.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  if (current.trim()) results.push(current);
  return results;
}

// src/templates/expand-contract.ts
function generateTemplate(operation, opts) {
  switch (operation) {
    case "rename-column":
      return generateRenameColumn(opts);
    case "change-type":
      return generateChangeType(opts);
    case "split-table":
      return generateSplitTable(opts);
    case "add-not-null":
      return generateAddNotNull(opts);
    case "remove-column":
      return generateRemoveColumn(opts);
  }
}
function generateRenameColumn(opts) {
  const { table, column = "old_column", newName = "new_column" } = opts;
  return {
    name: `Rename column ${table}.${column} to ${newName}`,
    description: [
      `Safely renames "${column}" to "${newName}" on table "${table}" without downtime.`,
      "Phase 1 adds the new column and a trigger to keep both in sync.",
      "Phase 2 backfills existing rows in batches.",
      "Phase 3 drops the old column and trigger once all application code uses the new name."
    ].join(" "),
    expand: [
      `-- Phase 1: Expand \u2014 Add new column and sync trigger`,
      `-- Deploy this BEFORE updating application code.`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `-- Add new column (nullable, no default \u2014 instant on PG 11+)`,
      `ALTER TABLE ${table} ADD COLUMN ${newName} TEXT;`,
      ``,
      `-- Create trigger to keep new column in sync with old column`,
      `CREATE OR REPLACE FUNCTION ${table}_sync_${column}_to_${newName}()`,
      `RETURNS TRIGGER AS $$`,
      `BEGIN`,
      `  NEW.${newName} := NEW.${column};`,
      `  RETURN NEW;`,
      `END;`,
      `$$ LANGUAGE plpgsql;`,
      ``,
      `CREATE TRIGGER trg_sync_${column}_to_${newName}`,
      `  BEFORE INSERT OR UPDATE ON ${table}`,
      `  FOR EACH ROW`,
      `  EXECUTE FUNCTION ${table}_sync_${column}_to_${newName}();`
    ].join("\n"),
    migrate: [
      `-- Phase 2: Migrate \u2014 Backfill existing data in batches`,
      `-- Run this after deploying the expand phase.`,
      ``,
      `SET statement_timeout = '0';  -- Batch updates may take a while`,
      ``,
      `DO $$`,
      `DECLARE`,
      `  batch_size INT := 10000;`,
      `  rows_updated INT;`,
      `BEGIN`,
      `  LOOP`,
      `    UPDATE ${table}`,
      `    SET ${newName} = ${column}`,
      `    WHERE ${newName} IS NULL`,
      `      AND ctid IN (`,
      `        SELECT ctid FROM ${table}`,
      `        WHERE ${newName} IS NULL`,
      `        LIMIT batch_size`,
      `      );`,
      ``,
      `    GET DIAGNOSTICS rows_updated = ROW_COUNT;`,
      `    EXIT WHEN rows_updated = 0;`,
      ``,
      `    -- Brief pause to let other queries through`,
      `    PERFORM pg_sleep(0.1);`,
      ``,
      `    RAISE NOTICE 'Backfilled % rows', rows_updated;`,
      `  END LOOP;`,
      `END $$;`
    ].join("\n"),
    contract: [
      `-- Phase 3: Contract \u2014 Remove old column and sync trigger`,
      `-- Deploy this AFTER all application code uses the new column name.`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `-- Drop the sync trigger`,
      `DROP TRIGGER IF EXISTS trg_sync_${column}_to_${newName} ON ${table};`,
      `DROP FUNCTION IF EXISTS ${table}_sync_${column}_to_${newName}();`,
      ``,
      `-- Drop old column`,
      `ALTER TABLE ${table} DROP COLUMN IF EXISTS ${column};`
    ].join("\n")
  };
}
function generateChangeType(opts) {
  const { table, column = "target_column", newType = "bigint" } = opts;
  const tempColumn = `${column}_new`;
  return {
    name: `Change type of ${table}.${column} to ${newType}`,
    description: [
      `Safely changes the type of "${column}" from its current type to "${newType}" on table "${table}".`,
      "Phase 1 adds a new column with the target type and a sync trigger.",
      "Phase 2 backfills the new column by casting existing values in batches.",
      "Phase 3 swaps the columns and drops the old one."
    ].join(" "),
    expand: [
      `-- Phase 1: Expand \u2014 Add new column with target type`,
      `-- Deploy this BEFORE updating application code.`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `-- Add new column with target type`,
      `ALTER TABLE ${table} ADD COLUMN ${tempColumn} ${newType};`,
      ``,
      `-- Create trigger to keep new column in sync`,
      `CREATE OR REPLACE FUNCTION ${table}_sync_${column}_type()`,
      `RETURNS TRIGGER AS $$`,
      `BEGIN`,
      `  NEW.${tempColumn} := NEW.${column}::${newType};`,
      `  RETURN NEW;`,
      `END;`,
      `$$ LANGUAGE plpgsql;`,
      ``,
      `CREATE TRIGGER trg_sync_${column}_type`,
      `  BEFORE INSERT OR UPDATE ON ${table}`,
      `  FOR EACH ROW`,
      `  EXECUTE FUNCTION ${table}_sync_${column}_type();`
    ].join("\n"),
    migrate: [
      `-- Phase 2: Migrate \u2014 Backfill with type cast in batches`,
      `-- Run this after deploying the expand phase.`,
      ``,
      `SET statement_timeout = '0';`,
      ``,
      `DO $$`,
      `DECLARE`,
      `  batch_size INT := 10000;`,
      `  rows_updated INT;`,
      `BEGIN`,
      `  LOOP`,
      `    UPDATE ${table}`,
      `    SET ${tempColumn} = ${column}::${newType}`,
      `    WHERE ${tempColumn} IS NULL`,
      `      AND ${column} IS NOT NULL`,
      `      AND ctid IN (`,
      `        SELECT ctid FROM ${table}`,
      `        WHERE ${tempColumn} IS NULL AND ${column} IS NOT NULL`,
      `        LIMIT batch_size`,
      `      );`,
      ``,
      `    GET DIAGNOSTICS rows_updated = ROW_COUNT;`,
      `    EXIT WHEN rows_updated = 0;`,
      ``,
      `    PERFORM pg_sleep(0.1);`,
      `    RAISE NOTICE 'Backfilled % rows', rows_updated;`,
      `  END LOOP;`,
      `END $$;`
    ].join("\n"),
    contract: [
      `-- Phase 3: Contract \u2014 Swap columns and clean up`,
      `-- Deploy this AFTER all application code reads from the new column.`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `-- Drop the sync trigger`,
      `DROP TRIGGER IF EXISTS trg_sync_${column}_type ON ${table};`,
      `DROP FUNCTION IF EXISTS ${table}_sync_${column}_type();`,
      ``,
      `-- Drop old column and rename new one`,
      `ALTER TABLE ${table} DROP COLUMN ${column};`,
      `ALTER TABLE ${table} RENAME COLUMN ${tempColumn} TO ${column};`
    ].join("\n")
  };
}
function generateSplitTable(opts) {
  const { table, column = "data" } = opts;
  const newTable = `${table}_${column}`;
  return {
    name: `Split column ${table}.${column} into ${newTable}`,
    description: [
      `Safely splits "${column}" from table "${table}" into a new table "${newTable}".`,
      "Phase 1 creates the new table and a trigger to keep it populated.",
      "Phase 2 backfills the new table from existing rows.",
      "Phase 3 drops the original column once all queries use the new table."
    ].join(" "),
    expand: [
      `-- Phase 1: Expand \u2014 Create new table and sync trigger`,
      `-- Deploy this BEFORE updating application code.`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `-- Create the new table`,
      `CREATE TABLE IF NOT EXISTS ${newTable} (`,
      `  ${table}_id BIGINT PRIMARY KEY REFERENCES ${table}(id) ON DELETE CASCADE,`,
      `  ${column} TEXT`,
      `);`,
      ``,
      `-- Create trigger to auto-populate new table on insert/update`,
      `CREATE OR REPLACE FUNCTION ${table}_sync_${column}_split()`,
      `RETURNS TRIGGER AS $$`,
      `BEGIN`,
      `  INSERT INTO ${newTable} (${table}_id, ${column})`,
      `  VALUES (NEW.id, NEW.${column})`,
      `  ON CONFLICT (${table}_id)`,
      `  DO UPDATE SET ${column} = EXCLUDED.${column};`,
      `  RETURN NEW;`,
      `END;`,
      `$$ LANGUAGE plpgsql;`,
      ``,
      `CREATE TRIGGER trg_sync_${column}_split`,
      `  AFTER INSERT OR UPDATE ON ${table}`,
      `  FOR EACH ROW`,
      `  EXECUTE FUNCTION ${table}_sync_${column}_split();`
    ].join("\n"),
    migrate: [
      `-- Phase 2: Migrate \u2014 Backfill new table in batches`,
      `-- Run this after deploying the expand phase.`,
      ``,
      `SET statement_timeout = '0';`,
      ``,
      `DO $$`,
      `DECLARE`,
      `  batch_size INT := 10000;`,
      `  rows_inserted INT;`,
      `  last_id BIGINT := 0;`,
      `BEGIN`,
      `  LOOP`,
      `    INSERT INTO ${newTable} (${table}_id, ${column})`,
      `    SELECT id, ${column}`,
      `    FROM ${table}`,
      `    WHERE id > last_id`,
      `    ORDER BY id`,
      `    LIMIT batch_size`,
      `    ON CONFLICT (${table}_id) DO NOTHING;`,
      ``,
      `    GET DIAGNOSTICS rows_inserted = ROW_COUNT;`,
      `    EXIT WHEN rows_inserted = 0;`,
      ``,
      `    SELECT MAX(${table}_id) INTO last_id FROM ${newTable} WHERE ${table}_id > last_id;`,
      ``,
      `    PERFORM pg_sleep(0.1);`,
      `    RAISE NOTICE 'Migrated % rows (last_id=%)', rows_inserted, last_id;`,
      `  END LOOP;`,
      `END $$;`
    ].join("\n"),
    contract: [
      `-- Phase 3: Contract \u2014 Remove original column and trigger`,
      `-- Deploy this AFTER all application code reads from the new table.`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `-- Drop the sync trigger`,
      `DROP TRIGGER IF EXISTS trg_sync_${column}_split ON ${table};`,
      `DROP FUNCTION IF EXISTS ${table}_sync_${column}_split();`,
      ``,
      `-- Drop the original column`,
      `ALTER TABLE ${table} DROP COLUMN IF EXISTS ${column};`
    ].join("\n")
  };
}
function generateAddNotNull(opts) {
  const { table, column = "target_column" } = opts;
  return {
    name: `Add NOT NULL constraint to ${table}.${column}`,
    description: [
      `Safely adds a NOT NULL constraint to "${column}" on table "${table}".`,
      "Phase 1 adds a CHECK constraint with NOT VALID to avoid a full table scan lock.",
      "Phase 2 validates the constraint (requires SHARE UPDATE EXCLUSIVE, not ACCESS EXCLUSIVE).",
      "Phase 3 sets NOT NULL using the validated constraint (instant on PG 12+) and cleans up."
    ].join(" "),
    expand: [
      `-- Phase 1: Expand \u2014 Add NOT VALID check constraint`,
      `-- This only acquires a brief ACCESS EXCLUSIVE lock (no table scan).`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `ALTER TABLE ${table}`,
      `  ADD CONSTRAINT ${table}_${column}_not_null`,
      `  CHECK (${column} IS NOT NULL)`,
      `  NOT VALID;`
    ].join("\n"),
    migrate: [
      `-- Phase 2: Migrate \u2014 Validate the constraint`,
      `-- This acquires SHARE UPDATE EXCLUSIVE (allows reads AND writes).`,
      `-- It performs a full table scan but does not block normal operations.`,
      ``,
      `SET statement_timeout = '0';  -- Validation may take time on large tables`,
      ``,
      `ALTER TABLE ${table}`,
      `  VALIDATE CONSTRAINT ${table}_${column}_not_null;`
    ].join("\n"),
    contract: [
      `-- Phase 3: Contract \u2014 Set NOT NULL and remove check constraint`,
      `-- On PG 12+, SET NOT NULL is instant when a valid CHECK exists.`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `-- Set NOT NULL (instant with validated CHECK constraint on PG 12+)`,
      `ALTER TABLE ${table}`,
      `  ALTER COLUMN ${column} SET NOT NULL;`,
      ``,
      `-- Remove the now-redundant CHECK constraint`,
      `ALTER TABLE ${table}`,
      `  DROP CONSTRAINT ${table}_${column}_not_null;`
    ].join("\n")
  };
}
function generateRemoveColumn(opts) {
  const { table, column = "target_column" } = opts;
  return {
    name: `Remove column ${table}.${column}`,
    description: [
      `Safely removes "${column}" from table "${table}" without downtime.`,
      "Phase 1 makes the column nullable and drops its default so new writes ignore it.",
      "Phase 2 updates application code to stop reading/writing the column (no SQL needed).",
      "Phase 3 drops the column from the table."
    ].join(" "),
    expand: [
      `-- Phase 1: Expand \u2014 Make column optional`,
      `-- Deploy this BEFORE updating application code.`,
      `-- This ensures existing queries don't fail if the column has a NOT NULL constraint.`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `-- Remove NOT NULL constraint (if present)`,
      `ALTER TABLE ${table}`,
      `  ALTER COLUMN ${column} DROP NOT NULL;`,
      ``,
      `-- Remove default value (if present) so new rows don't populate it`,
      `ALTER TABLE ${table}`,
      `  ALTER COLUMN ${column} DROP DEFAULT;`
    ].join("\n"),
    migrate: [
      `-- Phase 2: Migrate \u2014 Update application code`,
      `-- No SQL needed in this phase.`,
      `--`,
      `-- 1. Update all SELECT queries to stop reading "${column}".`,
      `-- 2. Update all INSERT/UPDATE queries to stop writing "${column}".`,
      `-- 3. Deploy the application changes.`,
      `-- 4. Monitor for any errors related to the column.`,
      `-- 5. Wait for at least one full deployment cycle before proceeding.`,
      ``,
      `-- Optional: Set column to NULL for all rows to reclaim TOAST storage`,
      `-- (Only needed if the column contains large values)`,
      `/*`,
      `DO $$`,
      `DECLARE`,
      `  batch_size INT := 10000;`,
      `  rows_updated INT;`,
      `BEGIN`,
      `  LOOP`,
      `    UPDATE ${table}`,
      `    SET ${column} = NULL`,
      `    WHERE ${column} IS NOT NULL`,
      `      AND ctid IN (`,
      `        SELECT ctid FROM ${table}`,
      `        WHERE ${column} IS NOT NULL`,
      `        LIMIT batch_size`,
      `      );`,
      ``,
      `    GET DIAGNOSTICS rows_updated = ROW_COUNT;`,
      `    EXIT WHEN rows_updated = 0;`,
      ``,
      `    PERFORM pg_sleep(0.1);`,
      `    RAISE NOTICE 'Nullified % rows', rows_updated;`,
      `  END LOOP;`,
      `END $$;`,
      `*/`
    ].join("\n"),
    contract: [
      `-- Phase 3: Contract \u2014 Drop the column`,
      `-- Deploy this AFTER confirming no application code references the column.`,
      ``,
      `SET lock_timeout = '5s';`,
      `SET statement_timeout = '30s';`,
      ``,
      `ALTER TABLE ${table} DROP COLUMN IF EXISTS ${column};`
    ].join("\n")
  };
}

// src/cascade/analyze.ts
import pg from "pg";
import { parse as pgParse3 } from "libpg-query";
var { Pool } = pg;
var MAX_DEPTH = 10;
async function analyzeCascade(sql, dbUrl) {
  const affectedTables = await extractAffectedTables(sql);
  if (affectedTables.length === 0) {
    return [];
  }
  if (dbUrl) {
    return analyzeCascadeFromDb(affectedTables, dbUrl);
  }
  return analyzeCascadeFromSql(sql, affectedTables);
}
async function analyzeCascadeFromDb(tables, dbUrl) {
  const pool = new Pool({
    connectionString: dbUrl,
    max: 1,
    connectionTimeoutMillis: 5e3,
    idleTimeoutMillis: 5e3,
    statement_timeout: 1e4
  });
  try {
    const allTriggers = await fetchTriggers(pool);
    const results = [];
    for (const table of tables) {
      const visited = /* @__PURE__ */ new Set();
      const cascading = [];
      const directTriggers = allTriggers.filter((t) => t.targetTable === table);
      walkCascade(table, allTriggers, visited, cascading, 0);
      const depth = cascading.length > 0 ? Math.min(visited.size, MAX_DEPTH) : 0;
      const warning = buildWarning(table, directTriggers, cascading, depth);
      results.push({
        table,
        triggers: directTriggers,
        cascadingTables: cascading,
        depth,
        warning
      });
    }
    return results;
  } finally {
    await pool.end();
  }
}
async function fetchTriggers(pool) {
  const result = await pool.query(`
    SELECT
      t.tgname,
      CASE
        WHEN t.tgtype & 4 > 0 THEN 'INSERT'
        WHEN t.tgtype & 8 > 0 THEN 'DELETE'
        WHEN t.tgtype & 16 > 0 THEN 'UPDATE'
        WHEN t.tgtype & 32 > 0 THEN 'TRUNCATE'
        ELSE 'UNKNOWN'
      END AS event,
      CASE
        WHEN t.tgtype & 2 > 0 THEN 'BEFORE'
        WHEN t.tgtype & 66 > 0 THEN 'INSTEAD OF'
        ELSE 'AFTER'
      END AS timing,
      c.relname AS table_name
    FROM pg_trigger t
    JOIN pg_class c ON c.oid = t.tgrelid
    WHERE NOT t.tgisinternal
  `);
  return result.rows.map((r) => ({
    name: r.tgname,
    event: r.event,
    timing: r.timing,
    targetTable: r.table_name
  }));
}
function walkCascade(table, triggers, visited, cascading, depth) {
  if (depth >= MAX_DEPTH) return;
  if (visited.has(table)) return;
  visited.add(table);
  const tableTriggers = triggers.filter((t) => t.targetTable === table);
  for (const trigger of tableTriggers) {
    const referenced = triggers.filter((t) => t.name === trigger.name && t.targetTable !== table).map((t) => t.targetTable);
    for (const ref of referenced) {
      if (!visited.has(ref)) {
        cascading.push(ref);
        walkCascade(ref, triggers, visited, cascading, depth + 1);
      }
    }
  }
}
async function analyzeCascadeFromSql(sql, affectedTables) {
  const triggers = extractTriggersFromSql(sql);
  const results = [];
  for (const table of affectedTables) {
    const directTriggers = triggers.filter((t) => t.targetTable === table);
    const cascading = [];
    const visited = /* @__PURE__ */ new Set();
    walkStaticCascade(table, triggers, visited, cascading, 0);
    const depth = cascading.length > 0 ? Math.min(visited.size, MAX_DEPTH) : 0;
    const warning = buildWarning(table, directTriggers, cascading, depth);
    results.push({
      table,
      triggers: directTriggers,
      cascadingTables: cascading,
      depth,
      warning
    });
  }
  return results;
}
function walkStaticCascade(table, triggers, visited, cascading, depth) {
  if (depth >= MAX_DEPTH) return;
  if (visited.has(table)) return;
  visited.add(table);
  const tableTriggers = triggers.filter((t) => t.targetTable === table);
  if (tableTriggers.length === 0) return;
  const related = triggers.filter(
    (t) => t.targetTable !== table && !visited.has(t.targetTable)
  );
  for (const rel of related) {
    cascading.push(rel.targetTable);
    walkStaticCascade(rel.targetTable, triggers, visited, cascading, depth + 1);
  }
}
function extractTriggersFromSql(sql) {
  const triggers = [];
  const triggerRegex = /CREATE\s+(?:OR\s+REPLACE\s+)?(?:CONSTRAINT\s+)?TRIGGER\s+(\w+)\s+(BEFORE|AFTER|INSTEAD\s+OF)\s+(INSERT|UPDATE|DELETE|TRUNCATE)(?:\s+OR\s+(?:INSERT|UPDATE|DELETE|TRUNCATE))*\s+ON\s+(?:(\w+)\.)?(\w+)/gi;
  let match;
  while ((match = triggerRegex.exec(sql)) !== null) {
    const name = match[1] ?? "";
    const timing = (match[2] ?? "").replace(/\s+/g, " ").toUpperCase();
    const event = (match[3] ?? "").toUpperCase();
    const targetTable = match[5] ?? match[4] ?? "";
    if (name && targetTable) {
      triggers.push({ name, event, timing, targetTable });
    }
  }
  return triggers;
}
async function extractAffectedTables(sql) {
  const tables = /* @__PURE__ */ new Set();
  try {
    const result = await pgParse3(sql);
    for (const s of result.stmts) {
      const stmt = s.stmt;
      const tableName = extractTableFromStmt(stmt);
      if (tableName) tables.add(tableName);
    }
  } catch {
    const tableRegex = /(?:ALTER\s+TABLE|DROP\s+TABLE|TRUNCATE)\s+(?:IF\s+EXISTS\s+)?(?:ONLY\s+)?(?:(\w+)\.)?(\w+)/gi;
    let match;
    while ((match = tableRegex.exec(sql)) !== null) {
      const name = match[2] ?? match[1];
      if (name) tables.add(name);
    }
  }
  return [...tables];
}
function extractTableFromStmt(stmt) {
  for (const key of ["AlterTableStmt", "CreateStmt", "DropStmt"]) {
    if (key in stmt && stmt[key] != null) {
      const node = stmt[key];
      if (node.relation?.relname) return node.relation.relname;
    }
  }
  if ("TruncateStmt" in stmt && stmt.TruncateStmt != null) {
    const trunc = stmt.TruncateStmt;
    const first = trunc.relations?.[0];
    if (first?.RangeVar?.relname) return first.RangeVar.relname;
  }
  return null;
}
function buildWarning(table, triggers, cascading, depth) {
  if (triggers.length === 0) {
    return `No triggers found on table "${table}".`;
  }
  const parts = [];
  parts.push(
    `Table "${table}" has ${triggers.length} trigger(s): ${triggers.map((t) => t.name).join(", ")}.`
  );
  if (cascading.length > 0) {
    parts.push(
      `Cascade chain reaches ${cascading.length} additional table(s): ${cascading.join(", ")} (depth: ${depth}).`
    );
    parts.push(
      "DDL operations on this table may have side effects on cascading tables."
    );
  }
  if (depth >= MAX_DEPTH) {
    parts.push(
      `WARNING: Cascade depth reached maximum limit (${MAX_DEPTH}). There may be deeper chains.`
    );
  }
  return parts.join(" ");
}

// src/sequence/monitor.ts
import pg2 from "pg";
var { Pool: Pool2 } = pg2;
function analyzeSequenceFromSql(sql) {
  const results = [];
  const seqRegex = /CREATE\s+SEQUENCE\s+(?:IF\s+NOT\s+EXISTS\s+)?(?:(\w+)\.)?(\w+)([^;]*)/gi;
  let match;
  while ((match = seqRegex.exec(sql)) !== null) {
    const name = match[2] ?? match[1] ?? "";
    const body = match[3] ?? "";
    const upper = body.toUpperCase();
    let dataType = "bigint";
    if (upper.includes("AS SMALLINT")) {
      dataType = "smallint";
    } else if (upper.includes("AS INTEGER") || upper.includes("AS INT ") || upper.includes("AS INT;")) {
      dataType = "integer";
    }
    let risk;
    if (dataType === "smallint") {
      risk = "high";
    } else if (dataType === "integer") {
      risk = "medium";
    } else {
      risk = "low";
    }
    if (name) {
      results.push({ name, dataType, risk });
    }
  }
  const serialRegex = /(\w+)\s+(SERIAL|SMALLSERIAL|BIGSERIAL)\b/gi;
  while ((match = serialRegex.exec(sql)) !== null) {
    const colName = match[1] ?? "";
    const serialType = (match[2] ?? "").toUpperCase();
    let dataType;
    let risk;
    if (serialType === "SMALLSERIAL") {
      dataType = "smallint";
      risk = "high";
    } else if (serialType === "SERIAL") {
      dataType = "integer";
      risk = "medium";
    } else {
      dataType = "bigint";
      risk = "low";
    }
    results.push({
      name: `${colName}_seq (implicit)`,
      dataType,
      risk
    });
  }
  return results;
}

// src/output/suggestions.ts
function generateSuggestions(violations, file) {
  const suggestions = [];
  const ruleIds = new Set(violations.map((v) => v.ruleId));
  const fixableRules = /* @__PURE__ */ new Set([
    "MP001",
    "MP004",
    "MP009",
    "MP020",
    "MP021",
    "MP023",
    "MP030",
    "MP033",
    "MP037",
    "MP040",
    "MP041",
    "MP046"
  ]);
  const fixable = violations.filter((v) => fixableRules.has(v.ruleId));
  if (fixable.length > 0 && file) {
    suggestions.push({
      label: `${fixable.length} violation${fixable.length !== 1 ? "s" : ""} can be auto-fixed`,
      command: `migrationpilot analyze ${file} --fix`
    });
  }
  if (fixable.length > 0 && file) {
    suggestions.push({
      label: "Preview fixes without modifying the file",
      command: `migrationpilot analyze ${file} --fix --dry-run`
    });
  }
  if (violations.length > 0) {
    const firstRule = violations[0].ruleId;
    suggestions.push({
      label: "Learn more about a specific rule",
      command: `migrationpilot explain ${firstRule}`
    });
  }
  if (violations.length > 0) {
    const ruleList = [...ruleIds].slice(0, 3).join(",");
    suggestions.push({
      label: "Exclude rules from analysis",
      command: `migrationpilot analyze ${file ?? "<file>"} --exclude ${ruleList}`
    });
  }
  if (violations.length > 0) {
    suggestions.push({
      label: "Disable a rule for a specific statement",
      hint: `Add a comment above the SQL: -- migrationpilot-disable ${violations[0].ruleId}`
    });
  }
  if (violations.length > 3) {
    suggestions.push({
      label: "Create a config file to customize rules",
      command: "migrationpilot init"
    });
  }
  return formatSuggestions(suggestions.slice(0, 4));
}
function formatSuggestions(suggestions) {
  if (suggestions.length === 0) return [];
  const lines = [];
  lines.push("");
  lines.push(source_default.cyan.bold("Next steps:"));
  for (const s of suggestions) {
    if (s.command) {
      lines.push(`  ${source_default.dim("\u2192")} ${s.label}: ${source_default.green(s.command)}`);
    } else if (s.hint) {
      lines.push(`  ${source_default.dim("\u2192")} ${s.label}`);
      lines.push(`    ${source_default.dim(s.hint)}`);
    }
  }
  return lines;
}
function formatRichError(violation, sql) {
  const lines = [];
  const severity = violation.severity === "critical" ? source_default.red.bold("error") : source_default.yellow.bold("warning");
  const ruleRef = source_default.dim(`[${violation.ruleId}]`);
  lines.push(`${severity}${ruleRef}: ${violation.message}`);
  if (sql) {
    const sqlLines = sql.split("\n");
    const lineIdx = Math.max(0, violation.line - 1);
    const targetLine = sqlLines[lineIdx];
    if (targetLine) {
      const lineNum = String(violation.line).padStart(4);
      lines.push(source_default.dim(`  ${" ".repeat(lineNum.length)} |`));
      lines.push(`  ${source_default.cyan(lineNum)} ${source_default.dim("|")} ${targetLine}`);
      lines.push(source_default.dim(`  ${" ".repeat(lineNum.length)} |`) + source_default.red(` ${"~".repeat(Math.min(targetLine.length, 60))}`));
    }
  }
  if (violation.safeAlternative) {
    lines.push(`  ${source_default.dim("=")} ${source_default.green("help")}: ${violation.safeAlternative.split("\n")[0]}`);
  }
  return lines;
}

// src/team/manage.ts
import { readFile as readFile3, writeFile, mkdir } from "node:fs/promises";
import { join as join2 } from "node:path";
import { homedir } from "node:os";
import { createHash } from "node:crypto";
var TEAM_DIR = join2(homedir(), ".migrationpilot", "team");
var MEMBERS_FILE = join2(TEAM_DIR, "members.json");
var ACTIVITY_FILE = join2(TEAM_DIR, "activity.jsonl");
function getCurrentUsername() {
  return process.env.GIT_AUTHOR_NAME || process.env.USER || process.env.USERNAME || "unknown";
}
function getMachineId() {
  const hostname2 = process.env.COMPUTERNAME || process.env.HOSTNAME || "unknown";
  const user = getCurrentUsername();
  return createHash("sha256").update(`${hostname2}:${user}`).digest("hex").slice(0, 16);
}
async function readMembers() {
  try {
    const raw = await readFile3(MEMBERS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
async function writeMembers(members) {
  try {
    await mkdir(TEAM_DIR, { recursive: true });
    await writeFile(MEMBERS_FILE, JSON.stringify(members, null, 2));
  } catch {
  }
}
async function registerTeamMember(maxSeats) {
  const members = await readMembers();
  const username = getCurrentUsername();
  const machineId = getMachineId();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const existing = members.find((m) => m.machineId === machineId);
  if (existing) {
    existing.lastSeen = now;
    existing.analysisCount++;
    existing.username = username;
    await writeMembers(members);
    return { members, isNewSeat: false, seatLimitExceeded: false };
  }
  const isNewSeat = true;
  const seatLimitExceeded = members.length >= maxSeats;
  const newMember = {
    username,
    machineId,
    firstSeen: now,
    lastSeen: now,
    analysisCount: 1
  };
  members.push(newMember);
  await writeMembers(members);
  return { members, isNewSeat, seatLimitExceeded };
}
async function readRecentActivity(limit = 20) {
  try {
    const raw = await readFile3(ACTIVITY_FILE, "utf-8");
    const lines = raw.trim().split("\n").filter(Boolean);
    return lines.slice(-limit).map((line) => JSON.parse(line)).reverse();
  } catch {
    return [];
  }
}
async function getTeamStatus(config) {
  const members = await readMembers();
  const recentActivity = await readRecentActivity();
  const maxSeats = config.maxSeats ?? 25;
  return {
    org: config.org,
    seats: {
      used: members.length,
      max: maxSeats,
      remaining: Math.max(0, maxSeats - members.length)
    },
    members,
    recentActivity
  };
}
function requiresApproval(sql, requireApproval) {
  const upperSql = sql.toUpperCase();
  const matched = requireApproval.filter((op) => upperSql.includes(op.toUpperCase()));
  return {
    required: matched.length > 0,
    operations: matched
  };
}
function formatTeamStatus(status) {
  const lines = [];
  lines.push(`Organization: ${status.org}`);
  lines.push(`Seats: ${status.seats.used}/${status.seats.max} (${status.seats.remaining} remaining)`);
  lines.push("");
  if (status.members.length > 0) {
    lines.push("Team Members:");
    for (const member of status.members) {
      const lastSeen = new Date(member.lastSeen).toLocaleDateString();
      lines.push(`  ${member.username} \u2014 ${member.analysisCount} analyses, last active ${lastSeen}`);
    }
    lines.push("");
  }
  if (status.recentActivity.length > 0) {
    lines.push("Recent Activity:");
    for (const activity of status.recentActivity.slice(0, 10)) {
      const time = new Date(activity.timestamp).toLocaleString();
      const violations = activity.violationCount !== void 0 ? `, ${activity.violationCount} violations` : "";
      lines.push(`  [${time}] ${activity.username}: ${activity.command}${activity.file ? ` ${activity.file}` : ""}${violations}`);
    }
  }
  return lines.join("\n");
}

// src/policy/enforce.ts
function checkBlockedPatterns(sql, blockedPatterns) {
  const violations = [];
  const upperSql = sql.toUpperCase();
  for (const pattern of blockedPatterns) {
    if (upperSql.includes(pattern.toUpperCase())) {
      violations.push({
        type: "blocked_pattern",
        message: `Organization policy blocks "${pattern}" operations. Contact your team admin for an exception.`,
        pattern
      });
    }
  }
  return violations;
}
function checkReviewPatterns(sql, reviewPatterns) {
  const violations = [];
  const upperSql = sql.toUpperCase();
  for (const pattern of reviewPatterns) {
    if (upperSql.includes(pattern.toUpperCase())) {
      violations.push({
        type: "requires_review",
        message: `Organization policy requires team review for "${pattern}" operations.`,
        pattern
      });
    }
  }
  return violations;
}
function checkRequiredRules(ruleConfig, requiredRules) {
  const violations = [];
  for (const ruleId of requiredRules) {
    const config = ruleConfig[ruleId];
    if (config === false) {
      violations.push({
        type: "disabled_required_rule",
        message: `Rule ${ruleId} is required by organization policy and cannot be disabled.`,
        ruleId
      });
    } else if (typeof config === "object" && config.enabled === false) {
      violations.push({
        type: "disabled_required_rule",
        message: `Rule ${ruleId} is required by organization policy and cannot be disabled.`,
        ruleId
      });
    }
  }
  return violations;
}
function checkSeverityFloor(ruleConfig, severityFloor) {
  const violations = [];
  const severityRank = {
    "critical": 2,
    "warning": 1
  };
  const floorRank = severityRank[severityFloor] ?? 0;
  for (const [ruleId, config] of Object.entries(ruleConfig)) {
    if (typeof config === "object" && config.severity) {
      const configRank = severityRank[config.severity] ?? 0;
      if (configRank < floorRank) {
        violations.push({
          type: "severity_downgrade",
          message: `Rule ${ruleId} severity "${config.severity}" is below the organization minimum "${severityFloor}".`,
          ruleId
        });
      }
    }
  }
  return violations;
}
function enforcePolicy(policy, sql, ruleConfig) {
  const violations = [];
  if (policy.blockedPatterns?.length) {
    violations.push(...checkBlockedPatterns(sql, policy.blockedPatterns));
  }
  if (policy.requireReviewPatterns?.length) {
    violations.push(...checkReviewPatterns(sql, policy.requireReviewPatterns));
  }
  if (policy.requiredRules?.length) {
    violations.push(...checkRequiredRules(ruleConfig, policy.requiredRules));
  }
  if (policy.severityFloor) {
    violations.push(...checkSeverityFloor(ruleConfig, policy.severityFloor));
  }
  return violations;
}
function applyPolicy(policy, ruleConfig) {
  const result = { ...ruleConfig };
  if (policy.requiredRules) {
    for (const ruleId of policy.requiredRules) {
      const config = result[ruleId];
      if (config === false) {
        result[ruleId] = true;
      } else if (typeof config === "object" && config.enabled === false) {
        result[ruleId] = { ...config, enabled: true };
      }
    }
  }
  if (policy.severityFloor) {
    const severityRank = {
      "critical": 2,
      "warning": 1
    };
    const floorRank = severityRank[policy.severityFloor] ?? 0;
    for (const [ruleId, config] of Object.entries(result)) {
      if (typeof config === "object" && config.severity) {
        const configRank = severityRank[config.severity] ?? 0;
        if (configRank < floorRank) {
          result[ruleId] = { ...config, severity: policy.severityFloor };
        }
      }
    }
  }
  return result;
}
function formatPolicyViolations(violations) {
  const lines = [];
  const blocked = violations.filter((v) => v.type === "blocked_pattern");
  const required = violations.filter((v) => v.type === "disabled_required_rule");
  const severity = violations.filter((v) => v.type === "severity_downgrade");
  const review = violations.filter((v) => v.type === "requires_review");
  if (blocked.length > 0) {
    lines.push("Policy: Blocked operations detected");
    for (const v of blocked) {
      lines.push(`  ${v.message}`);
    }
  }
  if (required.length > 0) {
    lines.push("Policy: Required rules were disabled");
    for (const v of required) {
      lines.push(`  ${v.message}`);
    }
  }
  if (severity.length > 0) {
    lines.push("Policy: Severity floor violations");
    for (const v of severity) {
      lines.push(`  ${v.message}`);
    }
  }
  if (review.length > 0) {
    lines.push("Policy: Team review required");
    for (const v of review) {
      lines.push(`  ${v.message}`);
    }
  }
  return lines;
}

// src/auth/sso.ts
import { readFile as readFile4, writeFile as writeFile2, mkdir as mkdir2 } from "node:fs/promises";
import { join as join3 } from "node:path";
import { homedir as homedir2, hostname } from "node:os";
import { randomBytes, createCipheriv, createDecipheriv, scryptSync, createHash as createHash2 } from "node:crypto";
var AUTH_DIR = join3(homedir2(), ".migrationpilot");
var AUTH_FILE = join3(AUTH_DIR, "auth.json");
function deriveEncryptionKey() {
  const machineId = createHash2("sha256").update(`${hostname()}:${homedir2()}`).digest("hex");
  return scryptSync(machineId, "migrationpilot-auth-v1", 32);
}
function decryptToken(ciphertext) {
  try {
    if (!ciphertext.startsWith("v1:")) {
      return ciphertext;
    }
    const parts = ciphertext.split(":");
    if (parts.length !== 4) return null;
    const key = deriveEncryptionKey();
    const iv = Buffer.from(parts[1], "hex");
    const tag = Buffer.from(parts[2], "hex");
    const encrypted = Buffer.from(parts[3], "hex");
    const decipher = createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(tag);
    return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString("utf-8");
  } catch {
    return null;
  }
}
async function getAuthToken() {
  try {
    const raw = await readFile4(AUTH_FILE, "utf-8");
    const decrypted = decryptToken(raw.trim());
    if (!decrypted) return null;
    const token = JSON.parse(decrypted);
    if (new Date(token.expiresAt) < /* @__PURE__ */ new Date()) {
      return null;
    }
    return token;
  } catch {
    return null;
  }
}
async function isAuthenticated() {
  const token = await getAuthToken();
  return token !== null;
}
async function getOrgInfo() {
  const token = await getAuthToken();
  if (!token) return null;
  return {
    orgId: token.orgId,
    orgName: token.orgName,
    email: token.email
  };
}
export {
  AnalysisError,
  freeRules as allRules,
  analyzeCascade,
  analyzeSQL,
  analyzeSequenceFromSql,
  applyPolicy,
  autoFix,
  buildDependencyGraph,
  buildPRComment,
  buildSarifLog,
  calculateRisk,
  checkBlockedPatterns,
  checkRequiredRules,
  classifyLock,
  detectFrameworks,
  enforcePolicy,
  extractTargets,
  formatCliOutput,
  formatJson,
  formatJsonMulti,
  formatMarkdown,
  formatPolicyViolations,
  formatRichError,
  formatRollbackSql,
  formatSarif,
  formatTeamStatus,
  freeRules,
  generateRollback,
  generateSuggestions,
  generateTemplate,
  getAuthToken,
  getOrgInfo,
  getTeamStatus,
  isAuthenticated,
  isFixable,
  loadConfig,
  loadPlugins,
  parseMigration,
  predictDuration,
  registerTeamMember,
  requiresApproval,
  resolveRuleConfig,
  runRules,
  simulateLockQueue,
  simulateSchema,
  simulateSchemaAsync
};
