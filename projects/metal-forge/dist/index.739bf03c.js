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
var _game = require("./Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
// Load DOM
const menuScreen = document.querySelector("#menu");
const gameOverScreen = document.querySelector("#over");
const canvasScreen = document.querySelector("canvas");
const playBtn = document.querySelector("#play-btn");
// Hide elements
canvasScreen.style.display = "none";
gameOverScreen.style.display = "none";
/**
 * handle game over
 *
 */ function handleGameOver() {
    // Display the game over screen
    menuScreen.style.display = "none";
    canvasScreen.style.display = "none";
    gameOverScreen.style.display = "flex";
}
/**
 * handle play
 */ function play() {
    menuScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    canvasScreen.style.display = "block";
    const game = new (0, _gameDefault.default)();
    game.animate(0, handleGameOver);
}
/**
 * add play event listeners
 */ addEventListener("keydown", ({ code })=>{
    if (code === "Space") play();
});
playBtn.addEventListener("click", play);

},{"./Game":"2kEUM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kEUM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _platformPng = require("../assets/platform.png");
var _platformPngDefault = parcelHelpers.interopDefault(_platformPng);
var _player = require("./entities/Player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _utils = require("./utils");
var _platform = require("./entities/Platform");
var _platformDefault = parcelHelpers.interopDefault(_platform);
var _constants = require("./constants");
var _enemy = require("./entities/Enemy");
var _explosion = require("./entities/Explosion");
var _spriteStates = require("./sprites/spriteStates");
var _audio = require("./Audio");
var _audioDefault = parcelHelpers.interopDefault(_audio);
// Get canvas and canvas object
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = (0, _constants.CANVAS_WIDTH);
canvas.height = (0, _constants.CANVAS_HEIGHT);
// track key strokes
let keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
};
let lastTime = 0;
class Game {
    /**
   * Initialize our game by
   * generating platforms, enemies,
   * setting up event listeners, and tracking states
   * in our game
   *
   */ constructor(){
        this.player = new (0, _playerDefault.default)();
        this.platforms = [];
        this.enemies = [];
        // generate entities
        this.generatePlatforms();
        this.generateTroops();
        this.generateTowers();
        // setup listener
        this.setupEventListener();
        // Game variables
        this.scrollOffset = 0;
        this.enemyInterval = 1000;
        this.gameOver = false;
        this.score = 0;
        this.maxMoved = 0;
        this.gameTime = 0;
        this.lives = 3;
        this.explosions = [];
        this.enemySpawnIntervalId = null;
        this.texts = {
            waveIncomingText: false,
            startText: true
        };
        setTimeout(()=>{
            this.texts.startText = false;
        }, 2000);
        this.audio = new (0, _audioDefault.default)();
        this.audio.playBackgroundMusic();
        this.isPaused = false;
    }
    /**
   * Toggle game pause
   *
   */ togglePause() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) this.pauseGame();
        else this.resumeGame();
    }
    /**
   * pause the game
   */ pauseGame() {
        clearInterval(this.enemySpawnIntervalId);
        this.audio.stopBackgroundMusic();
    }
    /**
   * resume the game by resetting the enemy varaible
   *
   */ resumeGame() {
        this.enemySpawnIntervalId = setInterval(()=>{
            const chance = Math.random() < 0.4;
            for(let i = 0; i < 10; i++)if (chance) this.addZombie(i);
            else this.addAngler1();
        }, 1000 * (this.scrollOffset > 18500 ? 5 : 10));
        this.audio.playBackgroundMusic();
    }
    /**
   * generate platforms in our game
   *
   */ generatePlatforms = ()=>{
        (0, _utils.platformPositions).forEach((position)=>{
            this.platforms.push(new (0, _platformDefault.default)({
                x: position.x,
                y: position.y,
                image: (0, _utils.createImage)((0, _platformPngDefault.default))
            }));
        });
    };
    /**
   * generate troops in our game
   *
   */ generateTroops = ()=>{
        (0, _utils.troopEnemies).forEach((enemy)=>{
            this.enemies.push(new (0, _enemy.Troop)({
                x: enemy.x,
                y: enemy.y
            }));
        });
    };
    /**
   * add zombies into the game
   * @param {number} i index of the zombie
   */ addZombie = (i)=>{
        let x, y;
        if (this.scrollOffset > 19000) {
            x = this.player.position.x + i * 40;
            y = this.player.position.y + 40;
        } else {
            x = this.player.position.x + i * 100;
            y = this.player.position.y + i * 100;
        }
        this.audio.playZombieSound();
        this.enemies.push(new (0, _enemy.Zombie)({
            x,
            y
        }));
    };
    /**
   * Generate enemy towers
   *
   */ generateTowers = ()=>{
        (0, _utils.towerEnemies).forEach((enemy)=>{
            this.enemies.push(new (0, _enemy.Tower)({
                x: enemy.x,
                y: enemy.y
            }));
        });
    };
    /**
   * move the platform as player moves through
   * the platform
   *
   * @returns undefined
   */ handlePlatformMovement = ()=>{
        if (keys.right.pressed && this.scrollOffset >= 19500) return;
        if (keys.right.pressed && this.player.position.x < 400) this.player.velocity.x = this.player.speed;
        else if (keys.left.pressed && this.player.position.x > 100 || keys.left.pressed && this.scrollOffset === 0 && this.player.position.x > 0) this.player.velocity.x = -this.player.speed;
        else {
            this.player.velocity.x = 0;
            if (keys.right.pressed) {
                this.scrollOffset += this.player.speed;
                if (this.scrollOffset > this.maxMoved) this.maxMoved = this.scrollOffset;
                if (this.maxMoved >= 18500) this.texts.waveIncomingText = true;
                this.platforms.forEach((platform)=>platform.position.x -= this.player.speed);
                this.enemies.forEach((enemy)=>enemy.position.x -= this.player.speed);
            } else if (keys.left.pressed && this.scrollOffset > 0) {
                this.scrollOffset -= this.player.speed;
                this.platforms.forEach((platform)=>platform.position.x += this.player.speed * 0.66);
                this.enemies.forEach((enemy)=>enemy.position.x += this.player.speed * 0.66);
            }
        }
    };
    /**
   * draw our game canvas
   */ draw = ()=>{
        // draw platforms
        this.platforms.forEach((platform)=>{
            platform.draw(c);
        });
        // show the statistics in oru game
        this.showGameStats();
        // Show enemy wave text
        c.save();
        if (this.texts.waveIncomingText) this.displayMessage("Huge Wave Incoming!", (0, _constants.CANVAS_WIDTH) / 3.5, (0, _constants.CANVAS_HEIGHT) / 2, 5000);
        if (this.texts.startText) this.displayMessage("Go Player Go!", (0, _constants.CANVAS_WIDTH) / 3, (0, _constants.CANVAS_HEIGHT) / 2, 5000);
        c.restore();
    };
    /**
   * Show the game score and other metrics
   *
   */ showGameStats = ()=>{
        c.save();
        // Score
        c.font = "64px Metal Mania";
        c.fillStyle = "white";
        c.shadowOffsetX = 4;
        c.shadowOffsetY = 4;
        c.shadowColor = "black";
        c.fillText(this.score.toString().padStart(4, "0"), (0, _constants.CANVAS_WIDTH) - 140, 70);
        c.fillText(`Health: ${this.player.health}`, 20, 70);
        c.fillText(`Lives: ${this.lives}`, 20, 140);
        // Game Time
        c.font = "72px Metal Mania";
        c.fillText((0, _utils.formatTime)(this.gameTime).padStart(3, "0"), (0, _constants.CANVAS_WIDTH) / 2 - 36, 80);
        c.restore();
    };
    /**
   * display the given message into our canvas
   *
   * @param {string} text message text
   * @param {number} x x position
   * @param {number} y y position
   * @param {number} time timeout time
   */ displayMessage = (text, x, y, time)=>{
        c.font = "100px Metal Mania";
        c.fillStyle = "white";
        c.shadowOffsetX = 4;
        c.shadowOffsetY = 4;
        c.shadowColor = "black";
        c.fillText(text, x, y);
        c.restore();
        setTimeout(()=>{
            this.clearMessage();
            this.texts.waveIncomingText = false;
        }, time);
    };
    /**
   * clear the message from canvas
   *
   */ clearMessage = ()=>{
        c.clearRect(0, 0, (0, _constants.CANVAS_WIDTH), (0, _constants.CANVAS_HEIGHT));
        this.draw();
    };
    /**
   * update our canvas over time
   *
   * @param {number} deltatime delta time
   */ update = (deltatime)=>{
        if (!this.gameOver) this.gameTime += deltatime;
        this.draw();
        // update the player
        this.player.update(c, Date.now());
        // update the explosions
        this.explosions.forEach((explosion)=>explosion.update(c, deltatime));
        this.explosions = this.explosions.filter((explosion)=>explosion.active);
        // update enemy and bullets
        this.enemies.forEach((enemy)=>{
            const currentTime = Date.now();
            enemy.update(c, currentTime);
            if ((0, _utils.checkCollision)(this.player, enemy)) this.player.health -= 5;
            enemy?.bullets?.forEach((bullet)=>{
                if ((0, _utils.checkCollision)(bullet, this.player)) {
                    this.player.health -= bullet.damage;
                    bullet.active = false;
                }
            });
            // update player bullets
            this.player.bullets.forEach((bullet)=>{
                if ((0, _utils.checkCollision)(bullet, enemy)) {
                    enemy.health -= bullet.damage;
                    bullet.active = false;
                    if (enemy.health <= 0) {
                        enemy.active = false;
                        this.addExplosion(enemy);
                        if (!this.gameOver) this.score += enemy.score;
                    }
                }
            });
        });
        // filter dead enemies
        this.enemies = this.enemies.filter((enemy)=>enemy.active);
        if (!this.gameOver) // Call addAngler1 every 5 seconds
        {
            if (!this.enemySpawnIntervalId) this.enemySpawnIntervalId = setInterval(()=>{
                const chance = Math.random() < 0.4;
                for(let i = 0; i < 10; i++)if (chance) this.addZombie(i);
                else this.addAngler1();
            }, 1000 * (this.scrollOffset > 18500 ? 5 : 10));
        }
        this.platformCollisionDetection();
    };
    /**
   * listen to the keystrokes in our game
   *
   */ setupEventListener = ()=>{
        let keysPressed = {};
        // Handle keydown event
        addEventListener("keydown", ({ code })=>{
            keysPressed[code] = true;
            switch(code){
                case "ArrowLeft":
                    keys.left.pressed = true;
                    this.player.state = (0, _spriteStates.playerStates).run;
                    this.player.direction = -1;
                    break;
                case "ArrowRight":
                    keys.right.pressed = true;
                    this.player.state = (0, _spriteStates.playerStates).run;
                    this.player.direction = 1;
                    break;
                case "KeyZ":
                    break;
                case "KeyX":
                    if (!this.player.isJumping) {
                        this.player.velocity.y -= 30;
                        this.player.isJumping = true;
                    }
                    break;
                case "KeyP":
                    this.togglePause();
                    break;
            }
        });
        // Handle Keyup event
        addEventListener("keyup", ({ code })=>{
            keysPressed[code] = false;
            switch(code){
                case "ArrowLeft":
                    keys.left.pressed = false;
                    this.player.state = (0, _spriteStates.playerStates).idle;
                    break;
                case "ArrowRight":
                    keys.right.pressed = false;
                    this.player.state = (0, _spriteStates.playerStates).idle;
                    break;
                case "KeyX":
                    if (!this.player.isJumping) {
                        this.player.velocity.y -= 30;
                        this.player.isJumping = true;
                    }
                    break;
                case "KeyZ":
                    this.audio.playShootSound();
                    if (keysPressed["ArrowUp"]) this.player.verticalDirection = true;
                    else this.player.verticalDirection = false;
                    this.player.shootTop(Date.now()); // Pass the current time
                    break;
            }
        });
    };
    /**
   * detect collision between platform and player and
   * the enemy
   *
   */ platformCollisionDetection = ()=>{
        this.platforms.forEach((platform)=>{
            // Vertical Collision
            if (this.player.position.y + this.player.height <= platform.position.y && this.player.position.y + this.player.height + this.player.velocity.y >= platform.position.y && this.player.position.x + this.player.width >= platform.position.x && this.player.position.x <= platform.position.x + platform.width) {
                this.player.velocity.y = 0;
                this.player.isJumping = false;
            }
            // Horizontal Collision on the left side of the platform
            if (this.player.position.y + this.player.height > platform.position.y && this.player.position.y < platform.position.y + platform.height && this.player.position.x < platform.position.x + platform.width && this.player.position.x + this.player.width > platform.position.x) {
                this.player.velocity.x = 0;
                this.player.position.x = platform.position.x - this.player.width;
            }
            // Horizontal Collision on the right side of the platform
            if (this.player.position.y + this.player.height > platform.position.y && this.player.position.y < platform.position.y + platform.height && this.player.position.x < platform.position.x + platform.width && this.player.position.x + this.player.width > platform.position.x) {
                this.player.velocity.x = 0;
                this.player.position.x = platform.position.x + platform.width;
            }
            this.enemies.forEach((enemy)=>{
                if ((0, _utils.checkCollision)(enemy, platform)) {
                    if (enemy instanceof (0, _enemy.Zombie)) enemy.position.y = platform.position.y - enemy.height;
                }
            });
        });
    };
    /**
   * handle win scenario
   *
   */ handleWin = ()=>{
        if (this.player.score >= 5000) this.onGameOver();
    };
    /**
   * reset our players life
   *
   */ resetLife = ()=>{
        this.lives--;
        this.player.health = 400;
        this.player.position.x = 100;
        this.player.position.y = 100;
    };
    /**
   * handle lose scenario
   *
   */ handleLose = ()=>{
        if (this.lives <= 0) {
            this.gameOver = true;
            clearInterval(this.enemySpawnIntervalId);
            this.onGameOver();
        }
        // Player falls into the death pit
        if (this.player.position.y > (0, _constants.CANVAS_HEIGHT) || this.player.health <= 0) this.resetLife();
    };
    /**
   *
   * @param {number} timestamp
   * @param {function} onGameOver handler when game is over
   * @returns
   */ animate = (timestamp, onGameOver)=>{
        if (onGameOver) this.onGameOver = onGameOver;
        if (this.isPaused) {
            // If the game is paused, don't proceed with the animation
            requestAnimationFrame(this.animate);
            return;
        }
        const deltatime = timestamp - lastTime;
        lastTime = timestamp;
        requestAnimationFrame(this.animate);
        c.clearRect(0, 0, (0, _constants.CANVAS_WIDTH), (0, _constants.CANVAS_HEIGHT));
        this.update(deltatime);
        // Draw enemy
        this.enemies.forEach((enemy)=>enemy.update(c));
        this.enemies = this.enemies.filter((enemy)=>enemy.active);
        this.handlePlatformMovement();
        this.handleWin();
        // Handle player loses
        this.handleLose();
        this.enemies.forEach((enemy)=>{
            if (enemy.position.y + enemy.height > (0, _constants.CANVAS_HEIGHT)) enemy.active = false;
        });
    };
    /**
   * Add angler enemy in our game
   *
   */ addAngler1 = ()=>{
        this.audio.playHeliSound();
        this.enemies.push(new (0, _enemy.Angler1)({
            x: (0, _constants.CANVAS_WIDTH),
            y: this.player.position.y
        }));
    };
    /**
   * add the explosion effect
   *
   * @param {object} enemy our enemy object
   */ addExplosion = (enemy)=>{
        if (Math.random() < 0.6) // Smoke explosion
        this.explosions.push(new (0, _explosion.SmokeExplosion)({
            x: enemy.position.x,
            y: enemy.position.y - enemy.height / 2
        }));
        else // Fire explosion
        this.explosions.push(new (0, _explosion.FireExplosion)({
            x: enemy.position.x,
            y: enemy.position.y - enemy.height / 2
        }));
    };
}
exports.default = Game;

},{"../assets/platform.png":"aHnYj","./entities/Player":"8Zx20","./utils":"72Dku","./entities/Platform":"6comE","./constants":"itKcQ","./entities/Enemy":"5gssC","./entities/Explosion":"bjGes","./sprites/spriteStates":"iucLS","./Audio":"hRb6A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHnYj":[function(require,module,exports) {
module.exports = require("d539d45dda8cfc55").getBundleURL("g05j8") + "platform.7a40102d.png" + "?" + Date.now();

},{"d539d45dda8cfc55":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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

},{}],"8Zx20":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../constants");
var _spriteAnimation = require("../sprites/SpriteAnimation");
var _spriteAnimationDefault = parcelHelpers.interopDefault(_spriteAnimation);
var _bullet = require("./Bullet");
var _bulletDefault = parcelHelpers.interopDefault(_bullet);
// Load Sprite Images
var _idle1Png = require("../../assets/hero/idle_1.png");
var _idle1PngDefault = parcelHelpers.interopDefault(_idle1Png);
var _idle2Png = require("../../assets/hero/idle_2.png");
var _idle2PngDefault = parcelHelpers.interopDefault(_idle2Png);
var _idle3Png = require("../../assets/hero/idle_3.png");
var _idle3PngDefault = parcelHelpers.interopDefault(_idle3Png);
var _run1Png = require("../../assets/hero/run_1.png");
var _run1PngDefault = parcelHelpers.interopDefault(_run1Png);
var _run2Png = require("../../assets/hero/run_2.png");
var _run2PngDefault = parcelHelpers.interopDefault(_run2Png);
var _run3Png = require("../../assets/hero/run_3.png");
var _run3PngDefault = parcelHelpers.interopDefault(_run3Png);
var _run4Png = require("../../assets/hero/run_4.png");
var _run4PngDefault = parcelHelpers.interopDefault(_run4Png);
var _spriteStates = require("../sprites/spriteStates");
class Player {
    /**
   * define positions, dimension, characterisitics
   * for our player
   */ constructor(){
        this.position = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.width = 100;
        this.height = 100;
        this.speed = 10;
        this.frames = 0;
        this.bullets = [];
        // bullet cooldown
        this.cooldown = 500;
        this.lastShotTime = 0;
        // player current state
        this.state = (0, _spriteStates.playerStates).idle;
        this.direction = 1; // shoot right - either 1 or -1
        this.verticalDirection = false;
        this.isJumping = false;
        this.health = 400;
        this.createAnimations(); // run animation
    }
    /**
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */ draw(c) {
        const animation = this.animations.find((animation)=>{
            return animation.isFor(this.state);
        });
        const image = animation.getImage();
        c.save(); // Save the current transformation state
        if (this.direction === -1) // Flip the canvas horizontally if the player is facing left
        c.scale(-1, 1);
        c.drawImage(image, this.direction === -1 ? -this.position.x - this.width : this.position.x, this.position.y, this.width, this.height);
        c.restore(); // Restore the transformation state
    }
    /**
   * update our player overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   * @param {number} currentTime current time
   */ update(c, currentTime) {
        this.frames++;
        this.draw(c);
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        // Apply gravity effect
        if (this.position.y + this.height + this.velocity.y <= (0, _constants.CANVAS_HEIGHT)) this.velocity.y += (0, _constants.GRAVITY);
        // handle bullet updates
        // Update the bullets and check cooldown
        this.bullets.forEach((bullet)=>bullet.update(c));
        this.bullets = this.bullets.filter((bullet)=>bullet.active);
        // Check cooldown before allowing a new bullet to be shot
        const timeSinceLastShot = currentTime - this.lastShotTime;
        if (timeSinceLastShot >= this.cooldown) // Allow shooting
        this.canShoot = true;
        else // Cooldown still active, cannot shoot
        this.canShoot = false;
    }
    /**
   * shooting mechanism for our player
   *
   * @param {number} currentTime current time
   */ shootTop(currentTime) {
        if (this.canShoot) {
            let x, y;
            if (this.direction === -1) x = this.position.x;
            else x = this.position.x + this.width;
            if (this.verticalDirection) {
                x = this.position.x + this.width / 4;
                y = this.position.y;
            } else y = this.position.y + this.height / 2;
            this.bullets.push(new (0, _bulletDefault.default)({
                x,
                y,
                direction: this.direction,
                verticalDirection: this.verticalDirection,
                damage: 100,
                color: "pink",
                speed: 20
            }));
            this.lastShotTime = currentTime;
            // Set canShoot to false to enforce cooldown
            this.canShoot = false;
        }
    }
    /**
   * Create the animation frames
   *
   */ createAnimations = ()=>{
        this.idleAnimation = new (0, _spriteAnimationDefault.default)([
            (0, _idle1PngDefault.default),
            (0, _idle2PngDefault.default),
            (0, _idle3PngDefault.default),
            (0, _idle3PngDefault.default)
        ], 8, (0, _spriteStates.playerStates).idle);
        this.runAnimation = new (0, _spriteAnimationDefault.default)([
            (0, _run1PngDefault.default),
            (0, _run2PngDefault.default),
            (0, _run3PngDefault.default),
            (0, _run4PngDefault.default)
        ], 8, (0, _spriteStates.playerStates).run);
        this.animations = [
            this.idleAnimation,
            this.runAnimation
        ];
    };
}
exports.default = Player;

},{"../constants":"itKcQ","../sprites/SpriteAnimation":"aWMT4","./Bullet":"b6lpe","../../assets/hero/idle_1.png":"bfXHH","../../assets/hero/idle_2.png":"42Kr6","../../assets/hero/idle_3.png":"4bAnx","../../assets/hero/run_1.png":"h2yU8","../../assets/hero/run_2.png":"5LxdW","../../assets/hero/run_3.png":"3nCZ4","../../assets/hero/run_4.png":"5dS4X","../sprites/spriteStates":"iucLS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itKcQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CANVAS_WIDTH", ()=>CANVAS_WIDTH);
parcelHelpers.export(exports, "CANVAS_HEIGHT", ()=>CANVAS_HEIGHT);
parcelHelpers.export(exports, "GRAVITY", ()=>GRAVITY);
const CANVAS_WIDTH = innerWidth;
const CANVAS_HEIGHT = innerHeight;
const GRAVITY = 1.5;

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

},{}],"aWMT4":[function(require,module,exports) {
/**
 * animation for our sprite
 *
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
class SpriteAnimation {
    images = [];
    /**
   *
   * @param {string[]} arrayImage array of images frames
   * @param {number} timerCount speed of frames
   * @param {string} state current state of our animation
   * @param {boolean} stopAtEnd should stop at end
   */ constructor(arrayImage, timerCount, state, stopAtEnd){
        for(let i = 0; i < arrayImage.length; i++){
            const image = (0, _utils.createImage)(arrayImage[i]);
            this.images.push(image);
        }
        this.timerCount = timerCount;
        this.timerCountDefault = this.timerCount;
        this.imageIndex = 0;
        this.state = state;
        this.stopAtEnd = stopAtEnd;
    }
    /**
   * check if the passed arguments matches with the current state
   *
   * @param {string} state current state of the frame
   * @returns boolean
   */ isFor(state) {
        return this.state === state;
    }
    /**
   * reset the image index
   *
   */ reset() {
        this.imageIndex = 0;
    }
    /**
   * get the current image index
   *
   * @returns string
   */ getImage() {
        this.setImageIndex();
        return this.images[this.imageIndex];
    }
    /**
   * sets the image index
   */ setImageIndex() {
        this.timerCount--;
        if (this.timerCount <= 0 && !this.shouldStop()) {
            this.timerCount = this.timerCountDefault;
            this.imageIndex++;
            if (this.imageIndex >= this.images.length) this.imageIndex = 0;
        }
    }
    /**
   * if the animation should stop
   * @returns boolean
   */ shouldStop() {
        return this.stopAtEnd && this.imageIndex === this.images.length - 1;
    }
}
exports.default = SpriteAnimation;

},{"../utils":"72Dku","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72Dku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * get Image HTMLDOM from the given img src
 *
 * @param {string} imageSrc src of the image
 * @returns HTMLImageElement
 */ parcelHelpers.export(exports, "createImage", ()=>createImage);
/**
 * check collision between two rectangles
 *
 * @param {object} rect1 object 1
 * @param {object} rect2 object 2
 * @returns boolean
 */ parcelHelpers.export(exports, "checkCollision", ()=>checkCollision);
/**
 * format the time
 *
 * @param {number} time
 * @returns number
 */ parcelHelpers.export(exports, "formatTime", ()=>formatTime);
/**
 * get random number from min and max range
 *
 * @param {number} min min value
 * @param {number} max max value
 * @returns number
 */ parcelHelpers.export(exports, "getRandomNumber", ()=>getRandomNumber);
/**
 * check if the element is visible on the canvas
 *
 * @param {object} element target element
 * @returns boolean
 */ parcelHelpers.export(exports, "isElementVisible", ()=>isElementVisible);
parcelHelpers.export(exports, "platformPositions", ()=>platformPositions);
parcelHelpers.export(exports, "troopEnemies", ()=>troopEnemies);
parcelHelpers.export(exports, "towerEnemies", ()=>towerEnemies);
var _constants = require("./constants");
function createImage(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    return image;
}
function checkCollision(rect1, rect2) {
    return rect1.position.x < rect2.position.x + rect2.width && rect1.position.x + rect1.width > rect2.position.x && rect1.position.y < rect2.position.y + rect2.height && rect1.position.y + rect1.height > rect2.position.y;
}
function formatTime(time) {
    return (time * 0.001).toFixed(0);
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isElementVisible(element) {
    // Check if the enemy's position is within the visible part of the screen
    return element.position.x + element.width > 0 && element.position.x < window.innerWidth && element.position.y + element.height > 0 && element.position.y < window.innerHeight;
}
const platformPositions = [
    {
        x: -1,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 300,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 600,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    // Pank top
    {
        x: 400,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    // platorm
    {
        x: 900,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    // space
    {
        x: 1500,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 1800,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 2100,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 2400,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 2700,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 3000,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 3300,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    // Elevation top
    {
        x: 3900,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    // Elevation top
    {
        x: 4200,
        y: (0, _constants.CANVAS_HEIGHT) - 520
    },
    {
        x: 4500,
        y: (0, _constants.CANVAS_HEIGHT) - 520
    },
    {
        x: 4800,
        y: (0, _constants.CANVAS_HEIGHT) - 520
    },
    {
        x: 5100,
        y: (0, _constants.CANVAS_HEIGHT) - 520
    },
    {
        x: 5400,
        y: (0, _constants.CANVAS_HEIGHT) - 520
    },
    {
        x: 5700,
        y: (0, _constants.CANVAS_HEIGHT) - 520
    },
    {
        x: 6000,
        y: (0, _constants.CANVAS_HEIGHT) - 520
    },
    // Drop the player
    {
        x: 6300,
        y: (0, _constants.CANVAS_HEIGHT) - 200
    },
    // Drop the player
    {
        x: 6700,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 7000,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 7300,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 7600,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 7900,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 8200,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 8500,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    // Death pit
    // Platform
    {
        x: 8800,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 9100,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 9400,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 9700,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 10000,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 10300,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 10600,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    // Elevation planks
    {
        x: 10600,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 10600,
        y: (0, _constants.CANVAS_HEIGHT) - 530
    },
    {
        x: 10600,
        y: (0, _constants.CANVAS_HEIGHT) - 740
    },
    {
        x: 11200,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 11200,
        y: (0, _constants.CANVAS_HEIGHT) - 530
    },
    {
        x: 11200,
        y: (0, _constants.CANVAS_HEIGHT) - 740
    },
    // platforms
    {
        x: 10900,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 11200,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 11500,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 11800,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 12100,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    // Elevation
    {
        x: 12600,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    {
        x: 12900,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    {
        x: 13200,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    {
        x: 13500,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    {
        x: 13800,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    {
        x: 14100,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    {
        x: 14400,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    {
        x: 14700,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    {
        x: 15000,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    {
        x: 15300,
        y: (0, _constants.CANVAS_HEIGHT) - 330
    },
    // Drop the player
    {
        x: 15600,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 16100,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 16400,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 16800,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    // Death pit
    // Platforms
    {
        x: 17100,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 17500,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 17900,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 18000,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    {
        x: 18300,
        y: (0, _constants.CANVAS_HEIGHT) - 100
    },
    // Elevation
    {
        x: 18700,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 19000,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 19300,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 19600,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 19900,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 20200,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 20600,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    },
    {
        x: 20900,
        y: (0, _constants.CANVAS_HEIGHT) - 320
    }
];
const troopEnemies = [
    {
        x: 1000,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 2100,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 2720,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 4900,
        y: (0, _constants.CANVAS_HEIGHT) - 520 - 130
    },
    {
        x: 5000,
        y: (0, _constants.CANVAS_HEIGHT) - 520 - 130
    },
    {
        x: 5600,
        y: (0, _constants.CANVAS_HEIGHT) - 520 - 130
    },
    {
        x: 7000,
        y: (0, _constants.CANVAS_HEIGHT) - 320 - 130
    },
    {
        x: 8000,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 8800,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 9800,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 10800,
        y: (0, _constants.CANVAS_HEIGHT) - 320 - 130
    },
    {
        x: 10800,
        y: (0, _constants.CANVAS_HEIGHT) - 520 - 130
    },
    {
        x: 10800,
        y: (0, _constants.CANVAS_HEIGHT) - 720 - 130
    },
    {
        x: 10900,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 11200,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 12100,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 16100,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 16400,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 17100,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 18000,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 130
    },
    {
        x: 19000,
        y: (0, _constants.CANVAS_HEIGHT) - 320 - 130
    },
    {
        x: 19300,
        y: (0, _constants.CANVAS_HEIGHT) - 320 - 130
    }
];
const towerEnemies = [
    {
        x: 4400,
        y: (0, _constants.CANVAS_HEIGHT) - 520 - 140
    },
    {
        x: 4700,
        y: (0, _constants.CANVAS_HEIGHT) - 520 - 140
    },
    {
        x: 7500,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 140
    },
    {
        x: 9100,
        y: (0, _constants.CANVAS_HEIGHT) - 320 - 140
    },
    {
        x: 9400,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 140
    },
    {
        x: 11500,
        y: (0, _constants.CANVAS_HEIGHT) - 100 - 140
    },
    {
        x: 12600,
        y: (0, _constants.CANVAS_HEIGHT) - 330 - 140
    },
    {
        x: 13200,
        y: (0, _constants.CANVAS_HEIGHT) - 330 - 140
    },
    {
        x: 15000,
        y: (0, _constants.CANVAS_HEIGHT) - 330 - 140
    },
    {
        x: 15300,
        y: (0, _constants.CANVAS_HEIGHT) - 330 - 140
    },
    {
        x: 12600,
        y: (0, _constants.CANVAS_HEIGHT) - 330 - 140
    },
    {
        x: 12900,
        y: (0, _constants.CANVAS_HEIGHT) - 330 - 140
    },
    {
        x: 13200,
        y: (0, _constants.CANVAS_HEIGHT) - 330 - 140
    }
];

},{"./constants":"itKcQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6lpe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../constants");
class Bullet {
    /**
   *
   * @param {number} x x position
   * @param {number} y y position
   * @param {number} direction direction across teh x axis
   * @param {boolean} verticalDirection if the bullet should go vertical
   * @param {string} color color of the bullet
   */ constructor({ x, y, direction = 1, verticalDirection = false, damage = 5, color, speed = 10 }){
        this.position = {
            x,
            y
        };
        // speed of our bullet
        this.speed = speed;
        this.active = true;
        this.damage = damage;
        this.color = color;
        this.width = 20;
        this.height = 20;
        this.direction = direction;
        this.verticalDirection = verticalDirection;
    }
    /**
   * update our bullet
   *
   * @param {CanvasRenderingContext2D} c context of our canvas
   */ update(c) {
        this.draw(c);
        // dont go vertical direction
        if (!this.verticalDirection) this.position.x += this.speed * this.direction;
        else this.position.y -= this.speed;
        // remove bullet if off canvas
        if (this.position.x > (0, _constants.CANVAS_WIDTH) || this.position.y > (0, _constants.CANVAS_HEIGHT) || this.position.y < 0 || this.position.x < 0) this.active = false;
    }
    /**
   * draw our bullet on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of our canvas
   */ draw(c) {
        c.beginPath();
        c.arc(this.position.x + this.width, this.position.y, 8, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
    }
}
exports.default = Bullet;

},{"../constants":"itKcQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfXHH":[function(require,module,exports) {
module.exports = require("86e7196247bda970").getBundleURL("g05j8") + "idle_1.cb578799.png" + "?" + Date.now();

},{"86e7196247bda970":"lgJ39"}],"42Kr6":[function(require,module,exports) {
module.exports = require("1f7abc6ceff4a717").getBundleURL("g05j8") + "idle_2.8e6e60c6.png" + "?" + Date.now();

},{"1f7abc6ceff4a717":"lgJ39"}],"4bAnx":[function(require,module,exports) {
module.exports = require("8c7cfc53dd3bd8dc").getBundleURL("g05j8") + "idle_3.0fa156a4.png" + "?" + Date.now();

},{"8c7cfc53dd3bd8dc":"lgJ39"}],"h2yU8":[function(require,module,exports) {
module.exports = require("5f752010582b0ab8").getBundleURL("g05j8") + "run_1.4ea19509.png" + "?" + Date.now();

},{"5f752010582b0ab8":"lgJ39"}],"5LxdW":[function(require,module,exports) {
module.exports = require("12ba24ad5ec8ca80").getBundleURL("g05j8") + "run_2.a5341a51.png" + "?" + Date.now();

},{"12ba24ad5ec8ca80":"lgJ39"}],"3nCZ4":[function(require,module,exports) {
module.exports = require("ef098f2b1501fbf1").getBundleURL("g05j8") + "run_3.105b7981.png" + "?" + Date.now();

},{"ef098f2b1501fbf1":"lgJ39"}],"5dS4X":[function(require,module,exports) {
module.exports = require("c8d54b980e1f486c").getBundleURL("g05j8") + "run_4.1be03ab0.png" + "?" + Date.now();

},{"c8d54b980e1f486c":"lgJ39"}],"iucLS":[function(require,module,exports) {
/**
 * states of our entities in the game
 *
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zombieStates", ()=>zombieStates);
parcelHelpers.export(exports, "towerStates", ()=>towerStates);
parcelHelpers.export(exports, "troopStates", ()=>troopStates);
parcelHelpers.export(exports, "playerStates", ()=>playerStates);
const zombieStates = {
    idle: "idle"
};
const towerStates = {
    idle: "idle"
};
const troopStates = {
    idle: "idle"
};
const playerStates = {
    idle: "idle",
    run: "run"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6comE":[function(require,module,exports) {
/**
 * Our platforms in the game
 *
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Platform {
    /**
   * dimenison of our platform
   *
   * @param {number} x x position
   * @param {number} y y position
   */ constructor({ x, y, image }){
        this.position = {
            x,
            y
        };
        this.image = image;
        this.width = 400;
        this.height = 100;
    }
    /**
   * draw image on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */ draw(c) {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}
exports.default = Platform;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gssC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Angler1", ()=>Angler1);
parcelHelpers.export(exports, "Troop", ()=>Troop);
parcelHelpers.export(exports, "Zombie", ()=>Zombie);
parcelHelpers.export(exports, "Tower", ()=>Tower);
var _utils = require("../utils");
var _angler1Png = require("../../assets/angler1.png");
var _angler1PngDefault = parcelHelpers.interopDefault(_angler1Png);
var _bullet = require("./Bullet");
var _bulletDefault = parcelHelpers.interopDefault(_bullet);
var _constantsJs = require("../constants.js");
var _spriteStatesJs = require("../sprites/spriteStates.js");
var _idle1Png = require("../../assets/zombie/Idle (1).png");
var _idle1PngDefault = parcelHelpers.interopDefault(_idle1Png);
var _idlePng = require("../../assets/tower/idle.png");
var _idlePngDefault = parcelHelpers.interopDefault(_idlePng);
var _idle1Png1 = require("../../assets/troop/idle1.png");
var _idle1PngDefault1 = parcelHelpers.interopDefault(_idle1Png1);
var _audioJs = require("../Audio.js");
var _audioJsDefault = parcelHelpers.interopDefault(_audioJs);
class Enemy {
    /**
   * base class for our enemy
   *
   * @param {number} x position
   * @param {number} y position
   */ constructor({ x, y }){
        this.position = {
            x,
            y
        };
        this.active = true;
        this.direction = -1;
        // audio for the enemy
        this.audio = new (0, _audioJsDefault.default)();
    }
    /**
   * draw enemy on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   * @returns undefined
   */ draw(c) {
        if (!c) return;
    }
}
class Angler1 extends Enemy {
    /**
   * Angler 1 enemy
   * This enemy can fly and arrives at
   * random intervals. Probably one of the strongest enemy
   * in our game
   *
   * @param {number} x position
   * @param {number} y position
   */ constructor({ x, y }){
        super({
            x,
            y
        });
        this.health = 100;
        this.speedX = Math.random() * -4.5 - 1.5;
        this.speed = 10;
        // initialize frame
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;
        // create image for our angler1
        this.image = (0, _utils.createImage)((0, _angler1PngDefault.default));
        this.frame = (0, _utils.getRandomNumber)(0, 2);
        this.width = 228;
        this.height = 169;
        this.score = 15;
    }
    /**
   * draw enemy on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */ draw(c) {
        super.draw(c);
        c.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
    }
    /**
   * update our angler1 overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   */ update(c) {
        this.draw(c);
        this.position.x += this.speedX;
        if (this.position.x + this.width < 0) this.active = false;
        // Sprite animation
        if (this.frameX < this.maxFrame) this.frameX++;
        else this.frameX = 0;
    }
}
class Troop extends Enemy {
    /**
   * troop enemy
   *
   * @param {number} x position
   * @param {number} y position
   */ constructor({ x, y }){
        super({
            x,
            y
        });
        // width and height of our troop
        this.width = 240;
        this.height = 160;
        this.active = true;
        this.speed = 10;
        this.bullets = [];
        this.cooldown = 2000; // Set the initial cooldown time (in milliseconds)
        this.lastShotTime = 0; // Record the time of the last shot
        this.health = 100;
        this.score = 5;
    }
    /**
   * draw enemy on the canvas
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   */ draw(c) {
        c.drawImage((0, _utils.createImage)((0, _idle1PngDefault1.default)), this.position.x, this.position.y, this.width, this.height);
    }
    /**
   * update enemy overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   * @param {number} currentTime current time
   */ update(c, currentTime) {
        this.draw(c);
        this.handleShooting(currentTime);
        // Handle bullet updates
        this.bullets.forEach((bullet)=>bullet.update(c));
        this.bullets = this.bullets.filter((bullet)=>bullet.active);
    }
    /**
   * handle the shooting logic of our enemy
   *
   * @param {number} currentTime current time
   */ handleShooting(currentTime) {
        // Check if enough time has passed since the last shot
        if (currentTime - this.lastShotTime > this.cooldown && (0, _utils.isElementVisible)(this)) {
            this.state = (0, _spriteStatesJs.troopStates).attack; // Update the state to "attack"
            this.shoot();
            this.audio.playShootSound();
            this.lastShotTime = currentTime; // Update the last shot time
        } else this.state = (0, _spriteStatesJs.troopStates).idle; // Set the state to "idle" when not shooting
    }
    /**
   * shoot mechanism for our enemy
   *
   */ shoot() {
        this.bullets.push(new (0, _bulletDefault.default)({
            x: this.position.x,
            y: this.position.y + this.height / 2,
            direction: this.direction,
            damage: 5,
            color: "red"
        }));
    }
}
class Zombie extends Enemy {
    /**
   * zombie enemy
   *
   * @param {number} x position
   * @param {number} y position
   */ constructor({ x, y }){
        super({
            x,
            y
        });
        this.width = 140;
        this.height = 140;
        this.active = true;
        this.speed = 10;
        this.health = 100;
        this.score = 5;
    }
    /**
   * draw enemy on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */ draw(c) {
        c.drawImage((0, _utils.createImage)((0, _idle1PngDefault.default)), this.position.x, this.position.y, this.width, this.height);
    }
    /**
   * update enemy overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   */ update(c) {
        this.draw(c);
        if (this.position.y + this.height < (0, _constantsJs.CANVAS_HEIGHT)) this.position.y += (0, _constantsJs.GRAVITY) + 2;
    }
}
class Tower extends Enemy {
    /**
   * Tower enemy
   *
   * @param {number} x position
   * @param {number} y position
   */ constructor({ x, y }){
        super({
            x,
            y
        });
        this.width = 100;
        this.height = 140;
        this.active = true;
        this.speed = 10;
        this.bullets = [];
        this.cooldown = 2000; // Set the initial cooldown time (in milliseconds)
        this.lastShotTime = 0; // Record the time of the last shot
        this.health = 120;
        this.score = 10;
    }
    /**
   * draw our enemy on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */ draw(c) {
        c.drawImage((0, _utils.createImage)((0, _idlePngDefault.default)), this.position.x, this.position.y, this.width, this.height);
    }
    /**
   * update enemy overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   * @param {number} currentTime current time
   */ update(c, currentTime) {
        this.draw(c);
        this.handleShooting(currentTime);
        // Handle bullet updates
        this.bullets.forEach((bullet)=>bullet.update(c));
        this.bullets = this.bullets.filter((bullet)=>bullet.active);
    }
    /**
   * handle the shooting logic of our enemy
   *
   * @param {number} currentTime current time
   */ handleShooting(currentTime) {
        // Check if enough time has passed since the last shot
        if (currentTime - this.lastShotTime > this.cooldown && (0, _utils.isElementVisible)(this)) {
            this.audio.playShootSound();
            this.shoot();
            this.lastShotTime = currentTime; // Update the last shot time
        }
    }
    /**
   * shoot mechanism for our troop
   */ shoot() {
        this.bullets.push(new (0, _bulletDefault.default)({
            x: this.position.x + this.width,
            y: this.position.y + this.height / 2,
            direction: this.direction,
            damage: 5,
            color: "red"
        }));
    }
}

},{"../utils":"72Dku","../../assets/angler1.png":"kdude","./Bullet":"b6lpe","../constants.js":"itKcQ","../sprites/spriteStates.js":"iucLS","../../assets/zombie/Idle (1).png":"aQTKj","../../assets/tower/idle.png":"lgPrR","../../assets/troop/idle1.png":"d6kwH","../Audio.js":"hRb6A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kdude":[function(require,module,exports) {
module.exports = require("7aa2e51d2a475870").getBundleURL("g05j8") + "angler1.18f1bd59.png" + "?" + Date.now();

},{"7aa2e51d2a475870":"lgJ39"}],"aQTKj":[function(require,module,exports) {
module.exports = require("725ec78019f08094").getBundleURL("g05j8") + "Idle (1).bd1414b9.png" + "?" + Date.now();

},{"725ec78019f08094":"lgJ39"}],"lgPrR":[function(require,module,exports) {
module.exports = require("75bcc5e6bb5e6ebb").getBundleURL("g05j8") + "idle.dd91b37f.png" + "?" + Date.now();

},{"75bcc5e6bb5e6ebb":"lgJ39"}],"d6kwH":[function(require,module,exports) {
module.exports = require("511091312835c062").getBundleURL("g05j8") + "idle1.fdfaeb81.png" + "?" + Date.now();

},{"511091312835c062":"lgJ39"}],"hRb6A":[function(require,module,exports) {
/**
 * Manage audio in our game
 *
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Audio {
    /**
   * get the audio DOM
   *
   */ constructor(){
        this.backgroundMusic = document.querySelector("#bg-music");
        this.shootSound = document.querySelector("#shoot-music");
        this.zombieSound = document.querySelector("#zombie-music");
        this.enemyDeadSound = document.querySelector("#enemy-dead-music");
        this.heliMusic = document.querySelector("#heli-music");
    // Add more audio elements for other sounds as needed
    }
    /**
   * play bg music
   *
   */ playBackgroundMusic() {
        this.backgroundMusic.play();
    }
    /**
   * stop bg music
   *
   */ stopBackgroundMusic() {
        this.backgroundMusic.pause();
    }
    /**
   * play shoot sound
   *
   */ playShootSound() {
        this.shootSound.play();
    }
    /**
   * play zombie sound
   *
   */ playZombieSound() {
        this.zombieSound.play();
    }
    /**
   * play heli sound
   *
   */ playHeliSound = ()=>{
        this.heliMusic.play();
    };
}
exports.default = Audio;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjGes":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SmokeExplosion", ()=>SmokeExplosion);
parcelHelpers.export(exports, "FireExplosion", ()=>FireExplosion);
var _utils = require("../utils");
var _smokeExplosionPng = require("../../assets/smokeExplosion.png");
var _smokeExplosionPngDefault = parcelHelpers.interopDefault(_smokeExplosionPng);
var _fireExplosionPng = require("../../assets/fireExplosion.png");
var _fireExplosionPngDefault = parcelHelpers.interopDefault(_fireExplosionPng);
class Explosion {
    /**
   * dimension of our explosion
   *
   * @param {number} x x position
   * @param {number} y y position
   */ constructor({ x, y }){
        this.position = {
            x,
            y
        };
        // frames for our explosion
        this.frameX = 0;
        this.fps = 15;
        this.maxFrame = 8;
        this.spriteHeight = 200;
        this.timer = 0;
        this.interval = 1000 / this.fps;
        this.active = true;
    }
    /**
   * update our canvas overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   * @param {number} deltatime delta time
   */ update(c, deltatime) {
        this.draw(c);
        if (this.timer > this.interval) {
            this.frameX++;
            this.timer = 0;
        } else this.timer += deltatime;
        // if exceeds the frame deactivate
        if (this.frameX > this.maxFrame) this.active = false;
    }
    /**
   * draw image on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx canvas
   */ draw = (c)=>{
        c.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.position.x, this.position.y, this.width, this.height);
    };
}
class SmokeExplosion extends Explosion {
    /**
   * dimension of our smoke explosion
   *
   * @param {number} x x position
   * @param {number} y y position
   */ constructor({ x, y }){
        super({
            x,
            y
        });
        this.image = (0, _utils.createImage)((0, _smokeExplosionPngDefault.default));
        this.spriteWidth = 200;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
    }
}
class FireExplosion extends Explosion {
    /**
   * dimension of our fire explosion
   *
   * @param {number} x x position
   * @param {number} y y position
   */ constructor({ x, y }){
        super({
            x,
            y
        });
        this.image = (0, _utils.createImage)((0, _fireExplosionPngDefault.default));
        this.spriteWidth = 200;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
    }
}

},{"../utils":"72Dku","../../assets/smokeExplosion.png":"7UUku","../../assets/fireExplosion.png":"6eRzm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7UUku":[function(require,module,exports) {
module.exports = require("c5774b671a9bff2").getBundleURL("g05j8") + "smokeExplosion.100bf498.png" + "?" + Date.now();

},{"c5774b671a9bff2":"lgJ39"}],"6eRzm":[function(require,module,exports) {
module.exports = require("2efd3c86ed8a3c5e").getBundleURL("g05j8") + "fireExplosion.6fad7a22.png" + "?" + Date.now();

},{"2efd3c86ed8a3c5e":"lgJ39"}]},["b3anl","ebWYT"], "ebWYT", "parcelRequire1144")

//# sourceMappingURL=index.739bf03c.js.map
