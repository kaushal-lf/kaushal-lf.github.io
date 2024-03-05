// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"b3anl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _constants = require("./constants");
var _utils = require("./utils");
var _doodler = require("./Doodler");
var _doodlerDefault = parcelHelpers.interopDefault(_doodler);
var _platform = require("./Platform");
var _platformDefault = parcelHelpers.interopDefault(_platform);
var _likRight2XPng = require("../assets/sprites/lik-right@2x.png");
var _likRight2XPngDefault = parcelHelpers.interopDefault(_likRight2XPng);
var _gameTiles2XPng = require("../assets/sprites/game-tiles@2x.png");
var _gameTiles2XPngDefault = parcelHelpers.interopDefault(_gameTiles2XPng);
var _input = require("./input");
var _jumpArcadeMp3 = require("../assets/sounds/jump-arcade.mp3");
var _jumpArcadeMp3Default = parcelHelpers.interopDefault(_jumpArcadeMp3);
var _startWav = require("../assets/sounds/start.wav");
var _startWavDefault = parcelHelpers.interopDefault(_startWav);
var _lomiseMp3 = require("../assets/sounds/lomise.mp3");
var _lomiseMp3Default = parcelHelpers.interopDefault(_lomiseMp3);
var _padaMp3 = require("../assets/sounds/pada.mp3");
var _padaMp3Default = parcelHelpers.interopDefault(_padaMp3);
/**
 * index.js
 * Main entry file
 *
 */ class App {
    constructor(){
        // Initalize canvas
        this.setCanvas();
        this.writeText();
    }
    /**
   * write the initial text on the screen
   *
   */ writeText = ()=>{
        // Write initial Texts
        this.ctx.font = "36px sans-serif";
        this.ctx.fillStyle = "green";
        this.ctx.fillText("DOODLE JUMP", (0, _constants.CANVAS_WIDTH) / 3.5, (0, _constants.CANVAS_HEIGHT) - 600);
        this.ctx.font = "28px sans-serif";
        this.ctx.fillText("Crank ya` Sound", (0, _constants.CANVAS_WIDTH) / 3.5, (0, _constants.CANVAS_HEIGHT) - 500);
        this.ctx.fillText("for best experience", (0, _constants.CANVAS_WIDTH) / 3.7, (0, _constants.CANVAS_HEIGHT) - 460);
        this.ctx.font = "21px sans-serif";
        this.ctx.fillText("p - pause / resume game", (0, _constants.CANVAS_WIDTH) / 7, (0, _constants.CANVAS_HEIGHT) - 390);
        this.ctx.fillText("a - move left", (0, _constants.CANVAS_WIDTH) / 7, (0, _constants.CANVAS_HEIGHT) - 350);
        this.ctx.fillText("d - move right", (0, _constants.CANVAS_WIDTH) / 7, (0, _constants.CANVAS_HEIGHT) - 310);
        this.ctx.fillText("Press space to start game", (0, _constants.CANVAS_WIDTH) / 3.5, (0, _constants.CANVAS_HEIGHT) - 190);
    };
    /**
   * initialize our game
   *
   */ initializeGame = ()=>{
        // Game Variables
        this.scores = {
            current: 0,
            max: 0
        };
        this.gameOver = false;
        this.paused = false;
        // Create and load sounds
        this.loadSounds();
        // create doodle
        this.createDoodle();
        // create platforms
        this.createPlatforms();
        this.startSound.play();
        // Start the game loop
        this.animate();
    };
    /**
   * set the canvas width and height
   *
   */ setCanvas = ()=>{
        this.canvas = document.getElementById("canvas");
        if ((0, _constants.CANVAS_WIDTH) >= (0, _constants.CANVAS_WIDTH)) this.canvas.width = (0, _constants.CANVAS_WIDTH);
        else this.canvas.width = (0, _constants.CANVAS_WIDTH);
        this.canvas.height = (0, _constants.CANVAS_HEIGHT);
        this.ctx = this.canvas.getContext("2d");
    };
    /**
   * control pause and resume game
   *
   */ togglePause = ()=>{
        this.paused = !this.paused;
    };
    /**
   * Create the doodler character
   *
   */ createDoodle = ()=>{
        const x = (0, _constants.CANVAS_WIDTH) / 2 - (0, _constants.DOODLER_WIDTH); // span at center
        const y = (0, _constants.CANVAS_HEIGHT) * 7 / 8 - (0, _constants.DOODLER_HEIGHT); // span lil above bottom
        const dx = (0, _constants.DOODLER_VELOCITY_X);
        const dy = (0, _constants.DOODLER_VELOCITY_Y);
        this.doodler = new (0, _doodlerDefault.default)(x, y, dx, dy, (0, _constants.DOODLER_WIDTH), (0, _constants.DOODLER_HEIGHT), (0, _likRight2XPngDefault.default));
    };
    /**
   * Create platform such as tiles
   * and push it into the array
   *
   */ createPlatforms = ()=>{
        this.platforms = [];
        const platformImg = new Image();
        platformImg.src = (0, _gameTiles2XPngDefault.default);
        const x = (0, _constants.CANVAS_WIDTH) / 2 - (0, _constants.DOODLER_WIDTH);
        // ensure there is always a platform below
        const y = (0, _constants.CANVAS_HEIGHT) * 7 / 8 - (0, _constants.DOODLER_HEIGHT);
        const width = (0, _constants.PLATFORM_WIDTH);
        const height = (0, _constants.PLATFORM_HEIGHT);
        const platform = new (0, _platformDefault.default)(x, y, width, height, platformImg.src, (0, _constants.GREEN));
        this.platforms.push(platform);
        for(let i = 0; i < 8; i++){
            const x = Math.floor(Math.random() * ((0, _constants.CANVAS_WIDTH) * 3 / 4));
            const y = (0, _constants.CANVAS_HEIGHT) - 75 * i - 300;
            const width = (0, _constants.PLATFORM_WIDTH);
            const height = (0, _constants.PLATFORM_HEIGHT);
            // create platform from the given values and push it into the array
            this.createPlat(x, y, width, height, platformImg.src, (0, _constants.GREEN));
        }
    };
    /**
   * create the sounds
   */ loadSounds = ()=>{
        this.jumpSound = new Audio((0, _jumpArcadeMp3Default.default));
        this.startSound = new Audio((0, _startWavDefault.default));
        this.gameOverSound = new Audio((0, _padaMp3Default.default));
        this.crackSound = new Audio((0, _lomiseMp3Default.default));
        this.gameOverPlayed = false;
    };
    /**
   * start the game when space is pressed
   * then remove the event listener
   * @param {KeyboardEvent} event keyboard event
   */ startGame = (event)=>{
        if (event.code === "Space" && !this.gameOver) {
            // Remove the space bar event listener
            document.removeEventListener("keydown", this.startGame);
            // Initialize the game
            this.initializeGame();
        }
    };
    /**
   * create platform from the given values and push it into the array
   *
   * @param {number} x - x position of the tile
   * @param {number} y - y position of the tile
   * @param {number} width - width of the tile
   * @param {number} height - height of the tile
   * @param {number} image - image src
   * @param {string} type - type of tile
   */ createPlat = (x, y, width, height, image, type)=>{
        const platform = new (0, _platformDefault.default)(x, y, width, height, image, type);
        this.platforms.push(platform);
    };
    /**
   * generate new platforms
   * as we go up
   *
   * The probability of generating
   * a broken tile is 10 in 100
   *
   */ newPlatform = ()=>{
        const x = Math.floor(Math.random() * (0, _constants.CANVAS_WIDTH) * 3 / 4); //(0-1) * boardWidth*3/4
        const y = this.platforms[this.platforms.length - 1].y - 70;
        const width = (0, _constants.PLATFORM_WIDTH);
        const height = (0, _constants.PLATFORM_HEIGHT);
        const image = new Image();
        image.src = (0, _gameTiles2XPngDefault.default);
        // The type of tile is green by default
        let typeTile = (0, _constants.GREEN);
        // generate the probability for broken tile as 10 in 100
        const brokenTile = (0, _utils.generateProbability)(0.1);
        if (brokenTile) typeTile = (0, _constants.BROKEN);
        // create the platform
        this.createPlat(x, y, width, height, image.src, typeTile);
    };
    handleInput = ()=>{
        if ((0, _input.keys).P) this.togglePause();
    };
    /**
   * draw
   *
   */ draw = ()=>{};
    /**
   * update our elements on the canvas
   *
   */ update = ()=>{
        this.draw();
        this.platforms.forEach((platform)=>platform.draw(this.ctx));
        this.platforms.forEach((platform)=>{
            // Clear platforms and add new platform
            while(this.platforms.length > 0 && this.platforms[0].y >= (0, _constants.CANVAS_HEIGHT))this.platforms.shift(); // remove the first platform
            if (this.platforms[this.platforms.length - 1].y >= 0) this.newPlatform();
            this.checkCollision();
        });
        // Move platform down
        if (this.doodler.dy < 0 && this.doodler.y < (0, _constants.CANVAS_HEIGHT) / 2) {
            this.doodler.y = (0, _constants.CANVAS_HEIGHT) / 2;
            this.platforms.forEach((platform)=>{
                platform.y -= this.doodler.dy; //slide platform down
            });
        }
        // Draw the score text outside the platform loop
        this.updateScore();
        this.ctx.fillStyle = "black";
        this.ctx.font = "16px sans-serif";
        this.ctx.fillText(this.scores.current, 5, 24);
        this.checkGameOver();
        // Draw the doodler after drawing the platforms
        this.doodler.update(this.ctx, this.platforms);
        // Call handleInput to check for user input
        this.handleInput();
    };
    /**
   * update the total score when user is going up
   *
   */ updateScore = ()=>{
        const points = 50 * Math.floor(Math.random() * 2);
        if (this.doodler.dy < 0) {
            this.scores.max += points;
            if (this.scores.current < this.scores.max) this.scores.current = this.scores.max; // Fix the typo here
        } else if (this.doodler.dy >= 0) this.scores.max -= points;
    };
    /**
   * Check for collision with platforms and stop vertical movement if collision occurs
   *
   */ checkCollision = ()=>{
        this.platforms.forEach((platform)=>{
            if ((0, _utils.detectCollision)(this.doodler, platform) && this.doodler.dy >= 0 && platform.type === (0, _constants.BROKEN)) {
                // Doodler stepped on the broken tile
                //1. Play the crack sound
                if (platform.active) this.crackSound.play();
                // 2. Change the tile type to deactive
                platform.active = false;
                // 2. do nothing - doodler should fall
                return;
            }
            if ((0, _utils.detectCollision)(this.doodler, platform) && this.doodler.dy >= 0) {
                this.jumpSound.play();
                // Collision detected, stop vertical movement
                this.doodler.dy = this.doodler.initialVelocity;
                // Adjust the y position to be just above the platform
                this.doodler.y = platform.y - this.doodler.height;
            }
        });
    };
    /**
   * check if the game is over
   * and write text
   *
   */ checkGameOver = ()=>{
        if (!this.paused && this.doodler.y > (0, _constants.CANVAS_HEIGHT)) {
            this.gameOver = true;
            if (!this.gameOverPlayed) {
                this.gameOverSound.play();
                this.gameOverPlayed = true;
            }
            this.ctx.font = "21px sans-serif";
            this.ctx.fillStyle = "green";
            this.ctx.fillText("Game Over: Press 'Space' to Restart", (0, _constants.CANVAS_WIDTH) / 4, (0, _constants.CANVAS_HEIGHT) * 7 / 8);
            if ((0, _input.keys).Space) // Restart the game
            this.resetGame();
        }
    };
    /**
   * restart the game
   */ resetGame = ()=>{
        // Reset Game Variables
        this.scores = {
            current: 0,
            max: 0
        };
        this.gameOver = false;
        this.gameOverPlayed = false;
        this.startSound.play();
        // create doodle
        this.createDoodle();
        // create platforms
        this.createPlatforms();
    };
    /**
   * run animation in loop
   * to keep updating the game
   *
   */ animate = ()=>{
        requestAnimationFrame(this.animate);
        this.checkGameOver();
        if (!(0, _input.keys).P || !this.paused) {
            this.ctx.clearRect(0, 0, (0, _constants.CANVAS_WIDTH), (0, _constants.CANVAS_HEIGHT));
            this.update();
        }
    };
}
const app = new App();
// app.animate();
document.addEventListener("keydown", app.startGame);

},{"./constants":"itKcQ","./Doodler":"ditxV","../assets/sprites/lik-right@2x.png":"dFGDn","./input":"8nlno","./Platform":"1BV2Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../assets/sprites/game-tiles@2x.png":"d1tHv","./utils":"72Dku","../assets/sounds/jump-arcade.mp3":"6ZRat","../assets/sounds/start.wav":"Yi32J","../assets/sounds/lomise.mp3":"740IT","../assets/sounds/pada.mp3":"8gOSC"}],"itKcQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CANVAS_WIDTH", ()=>CANVAS_WIDTH);
parcelHelpers.export(exports, "CANVAS_HEIGHT", ()=>CANVAS_HEIGHT);
parcelHelpers.export(exports, "DOODLER_WIDTH", ()=>DOODLER_WIDTH);
parcelHelpers.export(exports, "DOODLER_HEIGHT", ()=>DOODLER_HEIGHT);
parcelHelpers.export(exports, "DOODLER_VELOCITY_X", ()=>DOODLER_VELOCITY_X);
parcelHelpers.export(exports, "DOODLER_VELOCITY_Y", ()=>DOODLER_VELOCITY_Y);
parcelHelpers.export(exports, "DOODLER_INITIAL_VELOCITY_Y", ()=>DOODLER_INITIAL_VELOCITY_Y);
parcelHelpers.export(exports, "GRAVITY", ()=>GRAVITY);
parcelHelpers.export(exports, "PLATFORM_WIDTH", ()=>PLATFORM_WIDTH);
parcelHelpers.export(exports, "PLATFORM_HEIGHT", ()=>PLATFORM_HEIGHT);
parcelHelpers.export(exports, "GREEN", ()=>GREEN);
parcelHelpers.export(exports, "BROKEN", ()=>BROKEN);
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = window.innerHeight;
const DOODLER_WIDTH = 70;
const DOODLER_HEIGHT = 70;
const DOODLER_VELOCITY_X = 4;
const DOODLER_VELOCITY_Y = -2;
const DOODLER_INITIAL_VELOCITY_Y = -14; // starting velocity
const GRAVITY = 0.4;
const PLATFORM_WIDTH = 100;
const PLATFORM_HEIGHT = 30;
const GREEN = "green";
const BROKEN = "broken";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ditxV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _input = require("./input");
var _likLeft2XPng = require("../assets/sprites/lik-left@2x.png");
var _likLeft2XPngDefault = parcelHelpers.interopDefault(_likLeft2XPng);
var _likRight2XPng = require("../assets/sprites/lik-right@2x.png");
var _likRight2XPngDefault = parcelHelpers.interopDefault(_likRight2XPng);
var _constants = require("./constants");
/**
 * Doodle character that
 * jumps on the screen
 */ class Doodler {
    /**
   * Instantiate a doodler on provided
   * positon and dimenison
   *
   * @param {number} x x position of the doodler
   * @param {number} y y position of the doodler
   * @param {number} dx veloicty at x
   * @param {number} dy velocity at y
   * @param {number} width  width of the doodler
   * @param {number} height height of the doodler
   * @param {string} image source image of the doodle
   */ constructor(x, y, dx, dy, width, height, image){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = image;
        this.imageLoaded = false;
        this.initialVelocity = (0, _constants.DOODLER_INITIAL_VELOCITY_Y);
        this.image.addEventListener("load", ()=>{
            this.imageLoaded = true;
        });
    }
    /**
   *
   * @param {CanvasRenderingContext2D} ctx - canvas context
   */ draw = (ctx)=>{
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
    /**
   *
   * @param {CanvasRenderingContext2D} ctx - canvas context
   */ update = (ctx)=>{
        // this.dy = this.initialVelocity;
        this.move();
        // this.dy += GRAVITY;
        this.dy += (0, _constants.GRAVITY);
        this.y += this.dy;
        this.draw(ctx);
    };
    /**
   * move the doodler using keyboard controls
   */ move = ()=>{
        if ((0, _input.keys).A || (0, _input.keys).ArrowLeft) {
            this.image.src = (0, _likLeft2XPngDefault.default);
            this.x -= this.dx;
        }
        if ((0, _input.keys).D || (0, _input.keys).ArrowRight) {
            this.image.src = (0, _likRight2XPngDefault.default);
            this.x += this.dx;
        }
        if (this.x > (0, _constants.CANVAS_WIDTH)) this.x = 0;
        else if (this.x + this.width < 0) this.x = (0, _constants.CANVAS_WIDTH);
    };
}
// const doodler = new Doodler(CANVAS_WIDTH / 2, CANVAS_HEIGHT * 7 / 8 - this.height, 46, 46);
exports.default = Doodler;

},{"./input":"8nlno","../assets/sprites/lik-left@2x.png":"hRDiD","../assets/sprites/lik-right@2x.png":"dFGDn","./constants":"itKcQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8nlno":[function(require,module,exports) {
/**
 * Our key actions
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keys", ()=>keys);
const keys = {
    A: false,
    D: false,
    W: false,
    S: false,
    P: false,
    Space: false,
    ArrowLeft: false,
    ArrowRight: false
};
/**
 * set boolean to true if key press is detected
 *
 * @param {KeyboardEvent} e keyboard event object
 */ window.onkeydown = (e)=>{
    console.log(e.code);
    switch(e.code){
        case "KeyA":
            keys.A = true;
            break;
        case "KeyD":
            keys.D = true;
            break;
        case "KeyS":
            keys.S = true;
            break;
        case "KeyW":
            keys.W = true;
            break;
        case "Space":
            keys.Space = true;
            break;
        case "KeyP":
            keys.P = !keys.P;
            break;
        case "ArrowLeft":
            keys.ArrowLeft = true;
            break;
        case "ArrowRight":
            keys.ArrowRight = true;
            break;
    }
};
/**
 * set boolean to true if key press is detected
 *
 * @param {KeyboardEvent} e keyboard event object
 */ window.onkeyup = (e)=>{
    switch(e.code){
        case "KeyA":
            keys.A = false;
            break;
        case "KeyD":
            keys.D = false;
            break;
        case "KeyS":
            keys.S = false;
            break;
        case "KeyW":
            keys.W = false;
            break;
        case "Space":
            keys.Space = false;
            break;
        case "ArrowLeft":
            keys.ArrowLeft = false;
            break;
        case "ArrowRight":
            keys.ArrowRight = false;
            break;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRDiD":[function(require,module,exports) {
module.exports = require("e4d5ee41ea61c125").getBundleURL("g05j8") + "lik-left@2x.ce112e0b.png" + "?" + Date.now();

},{"e4d5ee41ea61c125":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"dFGDn":[function(require,module,exports) {
module.exports = require("f5b253186f5e4b51").getBundleURL("g05j8") + "lik-right@2x.a9b3a703.png" + "?" + Date.now();

},{"f5b253186f5e4b51":"lgJ39"}],"1BV2Z":[function(require,module,exports) {
/**
 * Platforms and obstacles
 * in our doodle game
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./constants");
var _utils = require("./utils");
class Platform {
    /**
   * Instantiate platform class
   *
   * @param {number} x x position
   * @param {number} y y position
   * @param {number} width width of the platform
   * @param {number} height height of the platform
   * @param {string} image source of the image
   * @param {string} type type of tile
   */ constructor(x, y, width, height, image, type = (0, _constants.GREEN)){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = image;
        this.imageLoaded = false;
        this.type = type;
        this.active = true;
        this.image.addEventListener("load", ()=>{
            this.imageLoaded = true;
        });
    }
    /**
   *
   * @param {CanvasRenderingContext2D} ctx - canvas context
   */ draw = (ctx)=>{
        if (this.active) ctx.drawImage(this.image, (0, _utils.platforms)[this.type].active.sx, (0, _utils.platforms)[this.type].active.sy, (0, _utils.platforms)[this.type].active.sw, (0, _utils.platforms)[this.type].active.sh, this.x, this.y, this.width, this.height);
        else if (!this.active) ctx.drawImage(this.image, (0, _utils.platforms)[this.type].deactive.sx, (0, _utils.platforms)[this.type].deactive.sy, (0, _utils.platforms)[this.type].deactive.sw, (0, _utils.platforms)[this.type].deactive.sh, this.x, this.y, this.width, this.height);
    };
}
exports.default = Platform;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./constants":"itKcQ","./utils":"72Dku"}],"72Dku":[function(require,module,exports) {
/**
 * detect collision between two
 * rectangular objects
 *
 * @param {Object} a Object a
 * @param {Object} b  Object b
 * @returns
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectCollision", ()=>detectCollision);
/**
 * return boolean if generated probability is met
 *
 * @param {number} probability - probability number from 0 to 1
 * @returns boolean
 */ parcelHelpers.export(exports, "generateProbability", ()=>generateProbability);
parcelHelpers.export(exports, "platforms", ()=>platforms);
function detectCollision(a, b) {
    return a.x + a.width / 2 < b.x + b.width && //a's top left corner doesn't reach b's top right corner
    a.x + a.width / 2 > b.x && //a's top right corner passes b's top left corner
    a.y < b.y && //a's top left corner doesn't reach b's bottom left corner
    a.y + a.height > b.y //a's bottom left corner passes b's top left corner
    ;
}
function generateProbability(probability = 0.5) {
    if (probability < 0 || probability > 1) throw new Error("Probability must be between 0 and 1.");
    return Math.random() < probability;
}
const platforms = {
    green: {
        active: {
            sx: 0,
            sy: 0,
            sw: 124,
            sh: 32
        }
    },
    broken: {
        active: {
            sx: 0,
            sy: 146,
            sw: 123,
            sh: 31
        },
        deactive: {
            sx: 0,
            sy: 299,
            sw: 123,
            sh: 64
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1tHv":[function(require,module,exports) {
module.exports = require("d8635d821b0b756e").getBundleURL("g05j8") + "game-tiles@2x.1ce94ceb.png" + "?" + Date.now();

},{"d8635d821b0b756e":"lgJ39"}],"6ZRat":[function(require,module,exports) {
module.exports = require("9d674ae226473e0a").getBundleURL("g05j8") + "jump-arcade.24bc2623.mp3" + "?" + Date.now();

},{"9d674ae226473e0a":"lgJ39"}],"Yi32J":[function(require,module,exports) {
module.exports = require("f1ea7e181b5cb0a6").getBundleURL("g05j8") + "start.70ecba15.wav" + "?" + Date.now();

},{"f1ea7e181b5cb0a6":"lgJ39"}],"740IT":[function(require,module,exports) {
module.exports = require("c4de6e2344f10c03").getBundleURL("g05j8") + "lomise.c3ea351c.mp3" + "?" + Date.now();

},{"c4de6e2344f10c03":"lgJ39"}],"8gOSC":[function(require,module,exports) {
module.exports = require("529ab39b5238de81").getBundleURL("g05j8") + "pada.6f4fe5fc.mp3" + "?" + Date.now();

},{"529ab39b5238de81":"lgJ39"}]},["b3anl","ebWYT"], "ebWYT", "parcelRequire816b")

//# sourceMappingURL=index.739bf03c.js.map
