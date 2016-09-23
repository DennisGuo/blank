var _0 = "";
if (typeof(gb_ImageUrl) != "undefined") {
    _0 = gb_ImageUrl
} else {
    var _1 = window.location.href;
    _1 = _1.substr(0, _1.lastIndexOf("/") + 1);
    _0 = _1 + "images/"
}
var _2 = _0 + "iw_nw.png";
var _3 = _0 + "iw_n.png";
var _4 = _0 + "iw_ne.png";
var _5 = _0 + "iw_w.png";
var _6 = _0 + "iw_c.png";
var _7 = _0 + "iw_e.png";
var _8 = _0 + "iw_sw.png";
var _9 = _0 + "markerTransparent.png";
var _10 = _0 + "iw_s.png";
var _11 = _0 + "iw_tap.png";
var _12 = _0 + "iw_se.png";
var _13 = _0 + "iws_nw.png";
var _14 = _0 + "iws_n.png";
var _15 = _0 + "iws_ne.png";
var Th = _0 + "iws_w.png";
var Gg = _0 + "iws_c.png";
var Og = _0 + "iws_e.png";
var Qg = _0 + "iws_sw.png";
var qf = _0 + "iws_s.png";
var Eg = _0 + "iws_tap.png";
var qf = _0 + "iws_s.png";
var Lg = _0 + "iws_se.png";
var Di = _0 + "close.gif";

function IEBrowser(d, c, b) {
    this.type = d;
    this.version = c;
    this.os = b
};
var _16 = new IEBrowser(0, 7, null);
var _17 = navigator.userAgent.toLowerCase();
if (_17.indexOf("opera") != -1) {
    _16.type = 4
} else {
    if (_17.indexOf("msie") != -1 && document.all) {
        _16.type = 1;
        var IEVer = /msie/.test(_17) ? parseFloat(_17.match(/msie ([\d.]+)/)[1]) : false;
        _16.version = IEVer
    } else {
        if (_17.indexOf("safari") != -1) {
            _16.type = 3;
            if (_17.indexOf("safari/125") != -1) {
                _16.version = 1
            }
        } else {
            if (_17.indexOf("mozilla") != -1) {
                _16.type = 2
            }
        }
    }
}
if (_17.indexOf("x11;") != -1) {
    _16.os = 1
};

function convert2Px(b) {
    return b + "px"
};

function setClass(c, b) {
    if (c.className) {
        c.className += " " + b
    } else {
        c.className = b
    }
};

function _18() {
    return false
}
function voidFunc(b) {
    return null
}
function toStringSize(b, c) {
    var d = b + "";
    while (d.length < c) {
        d = "0" + d
    }
    return d
}
function bindingDoc(f) {
    try {
        if (typeof ActiveXObject != "undefined" && typeof GetObject != "undefined") {
            var d = new ActiveXObject("Microsoft.XMLDOM");
            d.loadXML(f);
            return d
        } else {
            if (typeof DOMParser != "undefined") {
                return (new DOMParser()).parseFromString(f, "text/xml")
            } else {
                return voidFunc(f)
            }
        }
    } catch (c) {}
    try {
        return voidFunc(f)
    } catch (c) {
        return document.createElement("div")
    }
}
function RemoveChildren(b) {
    if (typeof b == "undefined" || b == null) return;
    while (b.hasChildNodes()) {
        b.removeChild(b.lastChild)
    }
}
function setCursor(g, f) {
    try {
        g.style.cursor = f
    } catch (c) {
        if (f == "pointer") {
            setCursor(g, "hand")
        }
    }
}
function RemoveImg(b) {
    if (b && b.parentNode) {
        b.parentNode.removeChild(b)
    }
}
var _19 = {
    _20: null,
    _21: [],
    Initialise: function() {
        if (this._20 == null) {
            this._20 = [];
            this.addUnloadFunc(this.cleanUp);
            _19.add(window, "unload", this.unload)
        }
    },
    add: function(f, d, c, b) {
        this.Initialise();
        if (typeof f == "string") {
            f = document.getElementById(f)
        }
        if (f == null || c == null) {
            return false
        }
        if (f.addEventListener) {
            f.addEventListener(d, c, b);
            this._20.push({
                obj: f,
                type: d,
                fn: c,
                useCapture: b
            });
            return true
        }
        if (f.attachEvent && f.attachEvent("on" + d, c)) {
            this._20.push({
                obj: f,
                type: d,
                fn: c,
                useCapture: false
            });
            return true
        }
        return false
    },
    remove: function(g, f, d) {
        for (var c = this._20.length - 1; c > -1; c--) {
            var b = this._20[c];
            if (g == b.obj && f == b.type && d == b.fn) {
                this._20.splice(c, 1);
                if (g.removeEventListener) {
                    g.removeEventListener(b.type, b.fn, b.useCapture)
                } else {
                    if (g.detachEvent) {
                        g.detachEvent("on" + b.type, b.fn)
                    } else {
                        g["on" + b.type] = null
                    }
                }
                break
            }
        }
    },
    removeNode: function(d) {
        for (var c = this._20.length - 1; c > -1; c--) {
            var b = this._20[c];
            if (d == b.obj) {
                this._20.splice(c, 1);
                if (b.obj.removeEventListener) {
                    b.obj.removeEventListener(b.type, b.fn, b.useCapture)
                } else {
                    if (b.obj.detachEvent) {
                        b.obj.detachEvent("on" + b.type, b.fn)
                    } else {
                        b.obj["on" + b.type] = null
                    }
                }
            }
        }
    },
    cleanUp: function() {
        window.status = "Clear Event Buffer...";
        for (var i = 0; i < _19._20.length; i++) {
            window.status = "Clear Event Buffer..." + i;
            with(_19._20[i]) {
                if (obj.removeEventListener) {
                    obj.removeEventListener(type, fn, useCapture)
                } else {
                    if (obj.detachEvent) {
                        obj.detachEvent("on" + type, fn)
                    } else {
                        obj["on" + type] = null
                    }
                }
            }
        }
        _19._20 = null
    },
    unload: function() {
        var b = _19._21.length;
        for (var c = 0; c < b; c++) {
            _19._21[c]()
        }
    },
    addUnloadFunc: function(b) {
        this._21.push(b)
    },
    showEvent: function() {
        for (var c = this._20.length - 1; c > -1; c--) {
            var b = this._20[c];
            alert(b.type + ":" + b.fn + ":" + b.useCapture)
        }
    }
};
var _22 = new Object();

function GB_xa(b, c) {
    this.id = b;
    this.ticketClass = c
};
GB_xa.prototype.isValid = function() {
    return _22[this.ticketClass] == this.id
};
GB_xa.create = function(b) {
    if (!b) {
        b = "_23"
    }
    if (!_22[b]) {
        _22[b] = 1
    } else {
        _22[b]++
    }
    return new GB_xa(_22[b], b)
};
GB_xa.invalidateAll = function() {
    for (var d in _22) {
        try {
            _22[d]++
        } catch (c) {}
    }
};
GB_xa.invalidate = function(b) {
    _22[b]++
};

function GB_V(b) {
    this.stylesheet = b
};
GB_V.prototype.transformToHTML = function(b, c) {
    var d = "";
    c.className = "InfoClass";
    if (typeof Monitor != "undefined" && b instanceof Monitor) {
        d = b.toHTML();
        c.innerHTML = d
    } else {
        if (typeof b == "string") {
            d = b;
            c.innerHTML = d
        } else {
            if (typeof b == "object") {
                RemoveChildren(c);
                c.appendChild(b)
            } else {
                alert("no type")
            }
        }
    }
};
GB_V.cache_ = new Object();
GB_V.create = function(b) {
    return new GB_V(b)
};
GB_V.getCached = function(b) {
    return GB_V.cache_[b]
};
GB_V.cache = function(c, b) {
    GB_V.cache_[c] = b
};
GB_V.asynchronousTransform = function(d, j, c, g, h) {
    var b = GB_V.getCached(c);
    var f = bindingDoc("");
    var b = GB_V.create(f);
    b.transformToHTML(d, j);
    GB_V.cache(c, b);
    if (g) {
        g()
    } else {
        alert("no function")
    }
    return
};

function GBPoint(b, f) {
    if (arguments.length == 1 && typeof arguments[0] == "string") {
        var c = arguments[0];
        var d = c.split(",");
        this.x = parseFloat(d[0]);
        this.y = parseFloat(d[1])
    } else {
        if (typeof b == "string") {
            this.x = parseFloat(b)
        } else {
            this.x = b
        }
        if (typeof f == "string") {
            this.y = parseFloat(f)
        } else {
            this.y = f
        }
    }
    this.screenX;
    this.screenY;
    this.mileage = -1;
    this.coordSequence = this.x + "," + this.y
}
GBPoint.prototype.countMileage = function(c) {
    var b = this.distanceFrom(c) + c.mileage;
    this.mileage = b
};
GBPoint.prototype.toString = function() {
    return this.x + "," + this.y
};
GBPoint.prototype.equals = function(c) {
    try {
        if (!c) {
            return false
        }
        return this.x == c.x && this.y == c.y
    } catch (b) {}
};
GBPoint.prototype.distanceFrom = function(d) {
    var c = this.x - d.x;
    var b = this.y - d.y;
    return Math.sqrt(c * c + b * b)
};
GBPoint.prototype.getCenter = function(b) {
    if (!b) {
        return this
    }
    return new GBPoint((this.x + b.x) / 2, (this.y + b.y) / 2)
};
GBPoint.prototype.getCoordSequence = function() {
    return this.coordSequence
};
GBPoint.prototype.getGeometryType = function() {
    return "point"
};

function Shaderer() {};
Shaderer.create = function(c, d, b, h, n, l, j, m, g) {
    var k;
    if (!g) {
        k = document.createElement("IMG");
        if (c) {
            k.src = c
        }
    } else {
        k = g(c, j, m)
    }
    if (d && b) {
        k.style.width = convert2Px(d);
        k.style.height = convert2Px(b);
        k.width = d;
        k.height = b
    }
    if (n || (h || (n == 0 || h == 0))) {
        k.style.position = "absolute";
        k.style.left = convert2Px(h);
        k.style.top = convert2Px(n)
    }
    if (l || l == 0) {
        k.style.zIndex = l
    } {
        k.unselectable = "on";
        k.onselectstart = _18
    }
    k.style.border = "0";
    k.oncontextmenu = _18;
    if (m) {
        setClass(k, m)
    }
    return k
};

function divCreator() {}
divCreator.count = 0;
divCreator.createElement = function(j, c, h) {
    if (_16.type == 1 && _16.version >= 7) {
        return divCreator.createElement8(j, c, h)
    }
    return divCreator.createElement6(j, c, h)
};
divCreator.createElement6 = function(j, c, h) {
    if (typeof arguments.callee.hasFilters == "undefined") {
        var b = document.createElement("DIV");
        arguments.callee.hasFilters = typeof b.style.filter != "undefined"
    }
    var d;
    if (arguments.callee.hasFilters) {
        if (!h) {
            h = document
        }
        var g = h.PNG_cache;
        if (g && g.childNodes.length > 0) {
            d = g.removeChild(g.lastChild)
        } else {
            d = h.createElement("DIV");
            divCreator.destroyBeforeUnload(d)
        }
        if (!d.loader) {
            d.loader = h.createElement("img");
            d.loader.style.visibility = "hidden";
            d.loader.onload = function() {
                if (!d.cleared) {
                    d.style.filter = divCreator.alphaImageLoader(this.src, true)
                }
            }
        }
    } else {
        d = document.createElement("img")
    }
    divCreator.setImage(d, j, c);
    return d
};
divCreator.createElement8 = function(j, c, h) {
    var d = document.createElement("img");
    divCreator.setImage(d, j, c);
    return d
};
divCreator.create = function(k, c, j, f, d, b, h, g) {
    return Shaderer.create(k, c, j, f, d, b, h, g, divCreator.createElement)
};
divCreator.alphaImageLoader = function(g, f) {
    var j = "DXImageTransform.Microsoft.AlphaImageLoader";
    var h = ",sizingMethod=" + (f ? "crop" : "scale");
    return "progid:" + j + '(src="' + g + '"' + h + ")"
};
divCreator.remove = function(d, c) {
    if (d.nodeName == "DIV") {
        if (!c.PNG_cache) {
            c.PNG_cache = c.createElement("div");
            c.PNG_cache.style.display = "none";
            c.body.appendChild(c.PNG_cache)
        }
        c.PNG_cache.appendChild(d);
        divCreator.clearImage(d)
    } else {
        RemoveImg(d)
    }
};
divCreator.setImage = function(f, d, g) {
    if (f.tagName == "DIV") {
        f.cleared = false;
        f.loader.ieCrop = g || false;
        f.loader.src = d
    } else {
        f.src = d
    }
};
divCreator.clearImage = function(d, c) {
    if (d.tagName == "DIV") {
        d.cleared = true;
        d.style.filter = ""
    } else {
        d.src = c
    }
};
divCreator.destroyBeforeUnload = function(b) {
    if (!divCreator.cleanupQueue) {
        divCreator.cleanupQueue = [];
        _19.addUnloadFunc(divCreator.onUnload)
    }
    divCreator.cleanupQueue.push(b)
};
divCreator.onUnload = function() {
    window.defaultStatus = "";
    for (var b = 0; b < divCreator.cleanupQueue.length; ++b) {
        divCreator.destroyImage(divCreator.cleanupQueue[b])
    }
};
divCreator.destroyImage = function(b) {
    if (b.loader) {
        b.loader.onload = null;
        b.loader = null
    }
};

function GBIcon(c, d, l, k, j, f, h, g, b) {
    this.name = c;
    this.width = d || 30;
    this.height = l || 30;
    this.topOffset = 0;
    this.leftOffset = 0;
    this.image = null;
    this.pointCoord = k;
    this.infoTipCoord = j;
    this.shadowTipCoord = f;
    this.shadowURL = h;
    this.shadowWidth = g;
    this.imageMapArray = b || []
};

function GBIconInfo(c, b) {
    this.image = c;
    this.iconClass = b
};

function GBInfoObj(g, f, b, c, d) {
    this.id = g;
    this.point = f;
    this.icon = b;
    this.infoStyle = c;
    this.xml = d
};

function GBInfoWind(d, b, c, f) {
    this.oncloseclick = d;
    this.createWindow(c);
    this.createShadow(f); {
        this.maskPng = null
    }
    this.createContentArea();
    this.createCloseButton();
    document.getElementById(b).appendChild(this.windowDiv);
    document.getElementById(b).appendChild(this.shadowDiv);
    this.setSize(208, 69);
    this.hide();
    this.fixedSize = false;
    this.fixedWidth = 0;
    this.fixedHeight = 0
};
GBInfoWind.prototype.createWindow = function(b) {
    this.window = new Object();
    this.window.nw = divCreator.create(_2, 25, 25, 0, 0, 0, false);
    this.window.n = divCreator.create(_3, 640, 25, this.window.nw.width, 0, 0, true);
    this.window.ne = divCreator.create(_4, 25, 25, 0, 0, 0, false);
    this.window.w = divCreator.create(_5, 25, 640, 0, this.window.nw.height, 0, true);
    this.window.c = divCreator.create(_6, 640, 640, this.window.w.width, this.window.n.height, 0, true);
    this.window.e = divCreator.create(_7, 25, 640, 0, this.window.ne.height, 0, true);
    this.window.sw = divCreator.create(_8, 25, 96, 0, 0, 0, false);
    this.window.s1 = divCreator.create(_10, 640, 96, this.window.sw.width, 0, 0, true);
    this.window.pointer = divCreator.create(_11, 98, 96, 0, 0, 0, false);
    this.window.s2 = divCreator.create(_10, 640, 96, 0, 0, 0, true);
    this.window.se = divCreator.create(_12, 25, 96, 0, 0, 0, false);
    this.window.nw.onmousedown = this.onMouseDown;
    this.window.n.onmousedown = this.onMouseDown;
    this.window.ne.onmousedown = this.onMouseDown;
    this.window.w.onmousedown = this.onMouseDown;
    this.window.c.onmousedown = this.onMouseDown;
    this.window.e.onmousedown = this.onMouseDown;
    this.window.sw.onmousedown = this.eventHandler("onCloseMouseDown");
    this.window.s1.onmousedown = this.eventHandler("onCloseMouseDown");
    this.window.pointer.onmousedown = this.eventHandler("onCloseMouseDown");
    this.window.s2.onmousedown = this.eventHandler("onCloseMouseDown");
    this.window.se.onmousedown = this.eventHandler("onCloseMouseDown");
    this.windowDiv = window.document.createElement("div");
    this.windowDiv.style.position = "absolute";
    this.windowDiv.style.left = "-1000px";
    this.windowDiv.style.top = "-500px";
    this.windowDiv.style.zIndex = b;
    setClass(this.windowDiv, "noprint");
    this.windowDiv.appendChild(this.window.nw);
    this.windowDiv.appendChild(this.window.n);
    this.windowDiv.appendChild(this.window.ne);
    this.windowDiv.appendChild(this.window.w);
    this.windowDiv.appendChild(this.window.c);
    this.windowDiv.appendChild(this.window.e);
    this.windowDiv.appendChild(this.window.sw);
    this.windowDiv.appendChild(this.window.s1);
    this.windowDiv.appendChild(this.window.pointer);
    this.windowDiv.appendChild(this.window.s2);
    this.windowDiv.appendChild(this.window.se)
};
GBInfoWind.prototype.setContentSize = function(c, b) {
    this.setSize(c - (this.window.w.width - 15) * 2, b - (this.window.n.height - 15) * 2)
};
GBInfoWind.prototype.setSize = function(c, b) {
    if (c < 0) {
        c = 0
    }
    if (b < 0) {
        b = 0
    }
    this.width = c;
    this.height = b;
    this.setWindowSize(c, b);
    this.setShadowSize(c, b);
    if (this.hasMask()) {
        this.setMaskSize()
    }
    this.closeButton.style.left = this.getTotalWidth() - this.closeButton.width - 10 - 1 + "px";
    this.closeButton.style.top = "10px"
};
GBInfoWind.prototype.getWindowHeight = function() {
    return this.window.c.height + 2 * this.window.n.height
};
GBInfoWind.prototype.getTotalHeight = function() {
    return this.height + this.window.pointer.height + this.window.n.height
};
GBInfoWind.prototype.getTotalHeightAboveGround = function() {
    return this.getTotalHeight() + (this.iconClass.pointCoord.y - this.iconClass.infoTipCoord.y)
};
GBInfoWind.prototype.getTotalShadowHeight = function() {
    return Math.floor(this.height / 4) + this.shadow.pointer.height + this.shadow.nw.height
};
GBInfoWind.prototype.getTotalWidth = function() {
    return this.width + this.window.w.width + this.window.e.width
};
GBInfoWind.prototype.getOffsetLeft = function() {
    return this.windowDiv.offsetLeft
};
GBInfoWind.prototype.getOffsetTop = function() {
    return this.windowDiv.offsetTop
};
GBInfoWind.prototype.setWindowSize = function(f, b) {
    this.window.n.style.width = f + "px";
    this.window.e.style.height = b + "px";
    this.window.c.style.width = f + "px";
    this.window.c.style.height = b + "px";
    this.window.w.style.height = b + "px";
    var d = this.calculatePointerOffset(f);
    this.window.s1.style.width = d + "px";
    this.window.pointer.style.left = d + this.window.sw.width + "px";
    this.window.s2.style.left = d + this.window.pointer.width + this.window.sw.width + "px";
    this.window.s2.style.width = f - d - this.window.pointer.width + "px";
    var g = f + this.window.w.width + "px";
    this.window.ne.style.left = g;
    this.window.e.style.left = g;
    this.window.se.style.left = g;
    var c = b + this.window.n.height + "px";
    this.window.sw.style.top = c;
    this.window.s1.style.top = c;
    this.window.pointer.style.top = c;
    this.window.s2.style.top = c;
    this.window.se.style.top = c
};
GBInfoWind.prototype.setShadowSize = function(d, c) {
    d -= 15;
    var h = Math.floor(c / 4);
    var j = d + this.shadow.nw.width;
    var o = this.calculatePointerOffset(d) - 41;
    var l = h + this.shadow.n.height + "px";
    var n = h + this.shadow.nw.height;
    this.shadow.s1Div.style.width = Math.max(o, 0) + "px";
    this.shadow.pointer.style.left = o + this.shadow.sw.width + "px";
    this.shadow.s2Div.style.left = o + this.shadow.pointer.width + this.shadow.sw.width + "px";
    this.shadow.s2Div.style.width = d - o - this.shadow.pointer.width + "px";
    this.shadow.sw.style.top = l;
    this.shadow.s1Div.style.top = l;
    this.shadow.pointer.style.top = l;
    this.shadow.s2Div.style.top = l;
    this.shadow.se.style.top = l;
    this.shadow.se.style.left = j + "px";
    var q = this.shadow.nw.height;
    var b = Math.floor(c / 2);
    this.shadow.wDiv.style.height = h + "px";
    this.shadow.wDiv.style.left = q + "px";
    this.shadow.wDiv.style.width = b + "px";
    this.shadow.w.style.left = h - this.shadow.w.width + 80 + "px";
    var g = this.shadow.nw.height + d + 70;
    this.shadow.eDiv.style.height = h + "px";
    this.shadow.eDiv.style.left = g + "px";
    this.shadow.eDiv.style.width = c + "px";
    this.shadow.e.style.left = h - this.shadow.w.width + 80 + "px";
    var f = q + b;
    this.shadow.cDiv.style.width = g - f + "px";
    this.shadow.cDiv.style.height = h + "px";
    this.shadow.cDiv.style.left = f + "px";
    this.shadow.nw.style.left = n + "px";
    this.shadow.nDiv.style.width = d - 30 + "px";
    this.shadow.nDiv.style.left = n + this.shadow.nw.width + "px";
    this.shadow.ne.style.left = j + n - 30 + "px"
};
GBInfoWind.prototype.setMaskSize = function() {
    this.maskPng.style.width = this.getTotalWidth() + "px";
    this.maskPng.style.height = this.getTotalHeight() + "px";
    var f = this.getTotalWidth();
    var b = this.getWindowHeight();
    var d = this.getTotalHeight();
    var j = this.window.pointer.offsetLeft;
    var g = j + this.window.pointer.width;
    var c = j + 53;
    var k = j + 4;
    var h = ",";
    var l = this.getMaskMap();
    var m = l.firstChild;
    m.setAttribute("coords", "0,0,0," + b + h + c + h + b + h + k + h + d + h + g + h + b + h + f + h + b + h + f + ",0")
};
GBInfoWind.prototype.hide = function() {
    if (this.windowDiv) {
        this.windowDiv.style.display = "none"
    }
    this.shadowDiv.style.display = "none"
};
GBInfoWind.prototype.show = function() {
    this.windowDiv.style.display = "";
    this.shadowDiv.style.display = "";
    this.windowDiv.style.visibility = "visible";
    this.shadowDiv.style.visibility = "visible";
    this.contentArea.style.visibility = "visible"
};
GBInfoWind.prototype.isVisible = function() {
    return this.windowDiv.style.display != "none"
};
GBInfoWind.prototype.positionAt = function(h, g, f) {
    var c = this.calculatePointerOffset(this.width) + this.window.w.width + 5;
    var j = this.height + this.window.n.height + this.window.s1.height;
    this.left = h - c;
    this.top = g - j;
    this.left += f.infoTipCoord.x - f.pointCoord.x;
    this.top += f.infoTipCoord.y - f.pointCoord.y;
    this.windowDiv.style.left = this.left + "px";
    this.windowDiv.style.top = this.top + "px";
    var b = 0;
    var d = this.getTotalHeight() - this.getTotalShadowHeight();
    b += f.shadowTipCoord.x - f.infoTipCoord.x;
    d += f.shadowTipCoord.y - f.infoTipCoord.y;
    this.shadowDiv.style.left = this.left + b + "px";
    this.shadowDiv.style.top = this.top + d + "px"
};
GBInfoWind.prototype.calculatePointerOffset = function(b) {
    return Math.floor(b / 4)
};
GBInfoWind.prototype.createCroppingDiv = function(c) {
    var b = window.document.createElement("div");
    b.style.overflow = "hidden";
    b.style.position = "absolute";
    b.style.width = c.width + "px";
    b.style.height = c.height + "px";
    b.style.left = c.style.left;
    b.style.top = c.style.top;
    b.style.zIndex = c.style.zIndex;
    c.style.left = "0px";
    c.style.top = "0px";
    b.appendChild(c);
    return b
};
GBInfoWind.prototype.createShadow = function(b) {
    this.shadow = new Object();
    this.shadow.nw = divCreator.create(_13, 70, 30, 0, 0, 0, false);
    this.shadow.n = divCreator.create(_14, 640, 30, this.shadow.nw.width, 0, 0, false);
    this.shadow.ne = divCreator.create(_15, 70, 30, 0, 0, 0, false);
    this.shadow.w = divCreator.create(Th, 360, 280, 0, this.shadow.nw.height, 0, false);
    this.shadow.c = divCreator.create(Gg, 640, 640, this.shadow.w.width, this.shadow.n.height, 0, false);
    this.shadow.e = divCreator.create(Og, 360, 280, 0, this.shadow.ne.height, 0, false);
    this.shadow.sw = divCreator.create(Qg, 70, 60, 0, 0, 0, false);
    this.shadow.s1 = divCreator.create(qf, 320, 60, this.shadow.sw.width, 0, 0, false);
    this.shadow.pointer = divCreator.create(Eg, 140, 60, 0, 0, 0, false);
    this.shadow.s2 = divCreator.create(qf, 320, 60, 0, 0, 0, false);
    this.shadow.se = divCreator.create(Lg, 70, 60, 0, 0, 0, false);
    this.shadow.nDiv = this.createCroppingDiv(this.shadow.n);
    this.shadow.wDiv = this.createCroppingDiv(this.shadow.w);
    this.shadow.eDiv = this.createCroppingDiv(this.shadow.e);
    this.shadow.s1Div = this.createCroppingDiv(this.shadow.s1);
    this.shadow.s2Div = this.createCroppingDiv(this.shadow.s2);
    this.shadow.cDiv = this.createCroppingDiv(this.shadow.c);
    this.shadowDiv = window.document.createElement("div");
    this.shadowDiv.style.position = "absolute";
    this.shadowDiv.style.left = "-1000px";
    this.shadowDiv.style.top = "-500px";
    this.shadowDiv.style.zIndex = 0;
    this.shadowDiv.style.zIndex = b;
    setClass(this.shadowDiv, "noprint");
    this.shadowDiv.appendChild(this.shadow.nw);
    this.shadowDiv.appendChild(this.shadow.nDiv);
    this.shadowDiv.appendChild(this.shadow.ne);
    this.shadowDiv.appendChild(this.shadow.wDiv);
    this.shadowDiv.appendChild(this.shadow.cDiv);
    this.shadowDiv.appendChild(this.shadow.eDiv);
    this.shadowDiv.appendChild(this.shadow.sw);
    this.shadowDiv.appendChild(this.shadow.s1Div);
    this.shadowDiv.appendChild(this.shadow.pointer);
    this.shadowDiv.appendChild(this.shadow.s2Div);
    this.shadowDiv.appendChild(this.shadow.se);
    this.shadowDiv.onmousedown = this.eventHandler("onCloseMouseDown")
};
GBInfoWind.prototype.hasMask = function() {
    return this.maskPng != null
};
GBInfoWind.prototype.getMaskMap = function() {
    return document.getElementById(this.maskMapId)
};
var cf = 0;
GBInfoWind.prototype.createMask = function() {
    var c = document.createElement("map");
    this.maskMapId = "iwMap" + cf;
    c.setAttribute("id", this.maskMapId);
    c.setAttribute("name", this.maskMapId);
    cf++;
    this.windowDiv.appendChild(c);
    var d = document.createElement("area");
    d.setAttribute("shape", "poly");
    d.setAttribute("coords", "");
    d.setAttribute("href", "");
    d.onclick = _18;
    d.onmousedown = this.onmousedown;
    c.appendChild(d);
    for (var b = 0; b < 10; b++) {
        var d = document.createElement("area");
        d.setAttribute("shape", "poly");
        d.setAttribute("coords", "");
        d.setAttribute("href", "PolylineDrawer");
        d.onclick = _18;
        c.appendChild(d)
    }
    this.maskPng = divCreator.create(_24, 0, 0, 0, 0, 0, false);
    this.windowDiv.appendChild(this.maskPng);
    this.maskPng.setAttribute("usemap", "#" + this.maskMapId);
    this.nextMaskArea = 1
};
GBInfoWind.prototype.addAreaToMaskMap = function(b, d) {
    if (this.hasMask()) {
        var c = this.getMaskMap();
        if (this.nextMaskArea < c.childNodes.length) {
            var f = c.childNodes[this.nextMaskArea];
            f.setAttribute("coords", b.join(","));
            f.onmousedown = d;
            this.nextMaskArea++
        }
    }
};
GBInfoWind.prototype.clearMaskMap = function() {
    if (this.hasMask()) {
        var c = this.getMaskMap();
        for (var b = 1; b < c.childNodes.length; b++) {
            var d = c.childNodes[b];
            d.setAttribute("coords", "");
            d.onmousedown = null
        }
        this.nextMaskArea = 1
    }
};
GBInfoWind.prototype.getMaskLeft = function() {
    return this.windowDiv.offsetLeft
};
GBInfoWind.prototype.getMaskTop = function() {
    return this.windowDiv.offsetTop
};
GBInfoWind.prototype.createContentArea = function() {
    var b = null;
    var c = 15;
    b = window.document.createElement("DIV");
    b.style.position = "absolute";
    b.style.left = convert2Px(c);
    b.style.top = convert2Px(c);
    b.style.zIndex = 0;
    b.id = "contentArea";
    setCursor(b, "auto");
    b.onmousedown = this.onMouseDown;
    this.windowDiv.appendChild(b);
    this.contentArea = b;
    this.contentArea.onmousedown = this.onMouseDown;
    b = window.document.createElement("DIV");
    b.style.position = "absolute";
    b.style.left = convert2Px(-screen.width);
    b.style.top = convert2Px(-screen.height);
    b.style.width = convert2Px(screen.width);
    b.style.height = convert2Px(screen.height);
    b.style.visibility = "hidden";
    this.offscreenContainer = b;
    window.document.body.appendChild(b);
    b.id = "offscreenContainer";
    b = window.document.createElement("DIV");
    b.style.position = "absolute";
    b.style.left = convert2Px(c);
    b.style.top = convert2Px(c);
    b.style.zIndex = 0;
    setCursor(b, "auto");
    this.offscreenArea = b;
    b.id = "offscreenArea";
    this.offscreenArea.onmousedown = this.onMouseDown;
    this.offscreenContainer.appendChild(this.offscreenArea)
};
GBInfoWind.prototype.prepareOffscreen = function(b) {
    if (this.windowDiv.style.display == "none") {
        this.windowDiv.style.display = "";
        this.shadowDiv.style.display = "";
        this.windowDiv.style.visibility = "hidden";
        this.shadowDiv.style.visibility = "hidden";
        this.contentArea.style.visibility = "hidden";
        this.offscreenArea.style.visibility = "hidden"
    }
    if (b) {
        this.offscreenContainer.style.width = convert2Px(b)
    }
};
GBInfoWind.prototype.clearOffscreenArea = function() {
    RemoveChildren(this.offscreenArea)
};
GBInfoWind.prototype.flipOffscreenAndSize = function() {
    var c = Math.max(this.offscreenArea.offsetWidth, 200);
    var b = Math.max(this.offscreenArea.offsetHeight, 85);
    this.flipOffscreenArea(c, b);
    if (this.fixedSize == false) this.setContentSize(c + 15, b);
    else {
        c = Math.max(c, this.fixedWidth);
        b = Math.max(b, this.fixedHeight);
        this.setContentSize(c + 15, b)
    }
};
GBInfoWind.prototype.sizeToContent = function() {
    EzLog.write("Offset width: " + this.contentArea.offsetWidth);
    EzLog.write("Offset height: " + this.contentArea.offsetHeight);
    this.setContentSize(Math.max(this.contentArea.offsetWidth, 183), this.contentArea.offsetHeight)
};
GBInfoWind.prototype.flipOffscreenArea = function(c, b) {
    this.offscreenContainer.removeChild(this.offscreenArea);
    this.windowDiv.removeChild(this.contentArea);
    var d = this.offscreenArea;
    this.offscreenArea = this.contentArea;
    this.contentArea = d;
    this.offscreenContainer.appendChild(this.offscreenArea);
    this.windowDiv.appendChild(this.contentArea);
    if (c && b) {
        this.contentArea.style.width = convert2Px(c);
        this.contentArea.style.height = convert2Px(b)
    }
    this.offscreenArea.style.width = "auto";
    this.offscreenArea.style.height = "auto";
    this.offscreenArea.style.visibility = "visible";
    this.clearOffscreenArea()
};
GBInfoWind.prototype.onMouseDown = function(c) {
    {
        window.event.cancelBubble = true
    }
};
GBInfoWind.prototype.createCloseButton = function() {
    this.closeButton = Shaderer.create(Di, 14, 13, null, null, 4, null, null);
    this.closeButton.style.position = "absolute";
    setCursor(this.closeButton, "pointer");
    this.closeButton.onmousedown = this.eventHandler("onCloseMouseDown");
    this.windowDiv.appendChild(this.closeButton)
};
GBInfoWind.prototype.onCloseMouseDown = function(c) {
    window.event.cancelBubble = true;
    if (this.oncloseclick) {
        this.oncloseclick(c)
    }
};
GBInfoWind.prototype.eventHandler = function(c) {
    var b = this;
    return function(d) {
        if (!d) {
            d = window.event
        }
        if (d && !d.target) {
            d.target = d.srcElement
        }
        b[c](d)
    }
};
GBInfoWind.prototype.setFixedStyle = function(c) {
    this.fixedSize = c
};
GBInfoWind.prototype.setFixedSize = function(c, d) {
    this.fixedWidth = c;
    this.fixedHeight = d
};

function AddGBEvent(d, c, b) {
    _19.add(d, c, b)
}
function RemoveGBEvent(d, c, b) {
    _19.remove(d, c, b)
}
if (typeof deconcept == "undefined") var deconcept = {};
if (typeof deconcept.util == "undefined") deconcept.util = {};
if (typeof deconcept.SWFObjectUtil == "undefined") deconcept.SWFObjectUtil = {};
deconcept.SWFObject = function(a, b, w, h, d, c, e, f, g, i) {
    if (!document.getElementById) {
        return
    }
    this.DETECT_KEY = i ? i : 'detectflash';
    this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
    this.params = {};
    this.variables = {};
    this.attributes = [];
    if (a) {
        this.setAttribute('swf', a)
    }
    if (b) {
        this.setAttribute('id', b)
    }
    if (w) {
        this.setAttribute('width', w)
    }
    if (h) {
        this.setAttribute('height', h)
    }
    if (d) {
        this.setAttribute('version', new deconcept.PlayerVersion(d.toString().split(".")))
    }
    this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion();
    if (!window.opera && document.all && this.installedVer.major > 7) {
        if (!deconcept.unloadSet) {
            deconcept.SWFObjectUtil.prepUnload = function() {
                __flash_unloadHandler = function() {};
                __flash_savedUnloadHandler = function() {};
                window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs)
            };
            window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload);
            deconcept.unloadSet = true
        }
    }
    if (c) {
        this.addParam('bgcolor', c)
    }
    var q = e ? e : 'high';
    this.addParam('quality', q);
    this.setAttribute('useExpressInstall', false);
    this.setAttribute('doExpressInstall', false);
    var j = (f) ? f : window.location;
    this.setAttribute('xiRedirectUrl', j);
    this.setAttribute('redirectUrl', '');
    if (g) {
        this.setAttribute('redirectUrl', g)
    }
};
deconcept.SWFObject.prototype = {
    useExpressInstall: function(a) {
        this.xiSWFPath = !a ? "expressinstall.swf" : a;
        this.setAttribute('useExpressInstall', true)
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    getAttribute: function(a) {
        return this.attributes[a] || ""
    },
    addParam: function(a, b) {
        this.params[a] = b
    },
    getParams: function() {
        return this.params
    },
    addVariable: function(a, b) {
        this.variables[a] = b
    },
    getVariable: function(a) {
        return this.variables[a] || ""
    },
    getVariables: function() {
        return this.variables
    },
    getVariablePairs: function() {
        var a = [];
        var b;
        var c = this.getVariables();
        for (b in c) {
            a[a.length] = b + "=" + c[b]
        }
        return a
    },
    getSWFHTML: function() {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "PlugIn");
                this.setAttribute('swf', this.xiSWFPath)
            }
            a = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute('swf') + '" width="' + this.getAttribute('width') + '" height="' + this.getAttribute('height') + '" style="' + (this.getAttribute('style') || "") + '"';
            a += ' id="' + this.getAttribute('id') + '" name="' + this.getAttribute('id') + '" ';
            var b = this.getParams();
            for (var c in b) {
                a += [c] + '="' + b[c] + '" '
            }
            var pairs = this.getVariablePairs().join("&");
            if (pairs.length > 0) {
                a += 'flashvars="' + pairs + '"'
            }
            a += '/>'
        } else {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "ActiveX");
                this.setAttribute('swf', this.xiSWFPath)
            }
            a = '<object id="' + this.getAttribute('id') + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute('width') + '" height="' + this.getAttribute('height') + '" style="' + (this.getAttribute('style') || "") + '">';
            a += '<param name="movie" value="' + this.getAttribute('swf') + '" />';
            var b = this.getParams();
            for (var c in b) {
                a += '<param name="' + c + '" value="' + b[c] + '" />'
            }
            var pairs = this.getVariablePairs().join("&");
            if (pairs.length > 0) {
                a += '<param name="flashvars" value="' + pairs + '" />'
            }
            a += "</object>"
        }
        return a
    },
    write: function(a) {
        if (this.getAttribute('useExpressInstall')) {
            var b = new deconcept.PlayerVersion([6, 0, 65]);
            if (this.installedVer.versionIsValid(b) && !this.installedVer.versionIsValid(this.getAttribute('version'))) {
                this.setAttribute('doExpressInstall', true);
                this.addVariable("MMredirectURL", escape(this.getAttribute('xiRedirectUrl')));
                document.title = document.title.slice(0, 47) + " - Flash Player Installation";
                this.addVariable("MMdoctitle", document.title)
            }
        }
        if (this.skipDetect || this.getAttribute('doExpressInstall') || this.installedVer.versionIsValid(this.getAttribute('version'))) {
            var n = (typeof a == 'string') ? document.getElementById(a) : a;
            n.innerHTML = this.getSWFHTML();
            return true
        } else {
            if (this.getAttribute('redirectUrl') != "") {
                document.location.replace(this.getAttribute('redirectUrl'))
            }
        }
        return false
    }
};
deconcept.SWFObjectUtil.getPlayerVersion = function() {
    var a = new deconcept.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var x = navigator.plugins["Shockwave Flash"];
        if (x && x.description) {
            a = new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."))
        }
    } else if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) {
        var b = 1;
        var c = 3;
        while (b) {
            try {
                c++;
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + c);
                a = new deconcept.PlayerVersion([c, 0, 0])
            } catch (e) {
                b = null
            }
        }
    } else {
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
        } catch (e) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                a = new deconcept.PlayerVersion([6, 0, 21]);
                b.AllowScriptAccess = "always"
            } catch (e) {
                if (a.major == 6) {
                    return a
                }
            }
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {}
        }
        if (b != null) {
            a = new deconcept.PlayerVersion(b.GetVariable("$version").split(" ")[1].split(","))
        }
    }
    return a
};
deconcept.PlayerVersion = function(a) {
    this.major = a[0] != null ? parseInt(a[0]) : 0;
    this.minor = a[1] != null ? parseInt(a[1]) : 0;
    this.rev = a[2] != null ? parseInt(a[2]) : 0
};
deconcept.PlayerVersion.prototype.versionIsValid = function(a) {
    if (this.major < a.major) return false;
    if (this.major > a.major) return true;
    if (this.minor < a.minor) return false;
    if (this.minor > a.minor) return true;
    if (this.rev < a.rev) return false;
    return true
};
deconcept.util = {
    getRequestParameter: function(a) {
        var q = document.location.search || document.location.hash;
        if (a == null) {
            return q
        }
        if (q) {
            var b = q.substring(1).split("&");
            for (var i = 0; i < b.length; i++) {
                if (b[i].substring(0, b[i].indexOf("=")) == a) {
                    return b[i].substring((b[i].indexOf("=") + 1))
                }
            }
        }
        return ""
    }
};
deconcept.SWFObjectUtil.cleanupSWFs = function() {
    var a = document.getElementsByTagName("OBJECT");
    for (var i = a.length - 1; i >= 0; i--) {
        a[i].style.display = 'none';
        for (var x in a[i]) {
            if (typeof a[i][x] == 'function') {
                a[i][x] = function() {}
            }
        }
    }
};
if (!document.getElementById && document.all) {
    document.getElementById = function(a) {
        return document.all[a]
    }
}
var getQueryParamValue = deconcept.util.getRequestParameter;
var FlashObject = deconcept.SWFObject;
var SWFObject = deconcept.SWFObject;
var GHash = function() {
        this._25 = new Object()
    };

function Hash$add(a, b) {
    if (!a) return;
    if (typeof(b) === 'undefined') return;
    this._25[a] = b
}
function Hash$addRange(h) {
    if (!h || !h._25) return;
    for (var a in h._25) {
        var value = h._25[a];
        this.add(a, value)
    }
}
function Hash$remove(a) {
    if (!a) return null;
    var b = this._25[a];
    delete this._25[a];
    return b
}
function Hash$removeAt(a) {
    if (isNaN(a)) return null;
    var i = 0;
    for (var b in this._25) {
        if (i == a) {
            return this.remove(b)
        }
        i++
    }
    return null
}
function Hash$removeRange(a, b) {
    if (isNaN(a) || isNaN(b)) return null;
    if (a > b) return null;
    var i = 0;
    var h = new GHash();
    for (var c in this._25) {
        if (i >= a && i <= b) {
            h.add(c, this.remove(c))
        } else if (i > b) {
            break
        }
        i++
    }
    return h
}
function Hash$getCount() {
    var i = 0;
    for (var a in this._25) i++;
    return i
}
function Hash$find(a) {
    if (!a) return null;
    return this._25[a]
}
function Hash$forEach(a, b) {
    var i = 0;
    for (var c in this._25) {
        var value = this._25[c];
        if (typeof(value) !== 'undefined') {
            var r = a.call(b, c, value, i, this);
            if (r == 'break') break;
            i++
        }
    }
}
function Hash$getKeys() {
    var a = new Array();
    for (var b in this._25) {
        a.push(b)
    }
    return a
}
function Hash$getValues() {
    var a = new Array();
    for (var b in this._25) {
        a.push(this._25[b])
    }
    return a
}
GHash.prototype = {
    _25: null,
    add: Hash$add,
    addRange: Hash$addRange,
    remove: Hash$remove,
    removeAt: Hash$removeAt,
    removeRange: Hash$removeRange,
    getCount: Hash$getCount,
    find: Hash$find,
    forEach: Hash$forEach,
    getKeys: Hash$getKeys,
    getValues: Hash$getValues
};
GHash.__typeName = 'Hash';

function GMEIncludeScript(A) {
    document.write("<" + "script src=\"" + A + "\"" + " type=\"text/javascript\"> <" + "/script>")
}
function GgetScriptSrc(s) {
    var a = "";
    var b = document.getElementsByTagName("script").length;
    for (var i = 0; i < b; i++) {
        a = document.getElementsByTagName("script")[i].src;
        if (a.indexOf(s) != -1) {
            a = a.substr(0, a.indexOf(s));
            break
        }
    }
    return a
}
var ME_baseURL = GgetScriptSrc("MapExpress.js");
var eventReceiverList = new Array();

function registEventReceiver(B) {
    for (var A = 0; A < eventReceiverList.length; A++) if (eventReceiverList[A].receiver.id == B.id) return false;
    var C = new Object();
    C.receiver = B;
    eventReceiverList.push(C);
    return true
}
function unregistEventReceiver(B) {
    for (var A = 0; A < eventReceiverList.length; A++) if (eventReceiverList[A].receiver.id == B.id) {
        eventReceiverList.splice(A);
        return true
    }
    return false
}
function globalDispatchEvent(B, D) {
    var C = D.split(",")[0];
    for (var A = 0; A < eventReceiverList.length; A++) {
        if (eventReceiverList[A].receiver.id == C) {
            var E = new Object();
            E.args = D;
            eventReceiverList[A].receiver.dispatchMEvent(B, E);
            return true
        }
    }
    return false
}
function offset(a) {
    if (!a) a = this;
    var x = a.offsetLeft;
    var y = a.offsetTop;
    while (a = a.offsetParent) {
        x += a.offsetLeft;
        y += a.offsetTop
    }
    return {
        left: x,
        top: y
    }
}
function offset2(a) {
    if (!a) a = this;
    var x = a.offsetLeft;
    var y = a.offsetTop;
    return {
        left: x,
        top: y
    }
}
function GDispatchEvent(B, D) {
    for (var A = 0; A < eventReceiverList.length; A++) {
        var E = new Object();
        E.args = D;
        eventReceiverList[A].receiver.dispatchMEvent(B, E);
        return true
    }
    return false
}
function GEventControl() {
    this.eventList = new Array()
}
GEventControl.prototype.id = null;
GEventControl.prototype.eventList = null;
GEventControl.prototype.eventCode = null;
GEventControl.prototype.addEventListener = function(E, D, B) {
    for (var A = 0; A < this.eventList.length; A++) if (this.eventList[A].functionName == D && this.eventList[A].eventType == E && this.eventList[A].object == B) return false;
    var C = new Object();
    C.eventType = E;
    C.functionName = D;
    C.object = B;
    this.eventList[this.eventList.length] = C;
    return true
};
GEventControl.prototype.removeEventListener = function(D, C, B) {
    for (var A = 0; A < this.eventList.length; A++) if (this.eventList[A].eventType == D && this.eventList[A].functionName == C && this.eventList[A].object == B) {
        this.eventList.splice(A, 1);
        return true
    }
    return false
};
GEventControl.prototype.removeEventListenerByType = function(D) {
    for (var A = 0; A < this.eventList.length; A++) if (this.eventList[A].eventType == D) {
        this.eventList.splice(A, 1);
        return true
    }
    return false
};
GEventControl.prototype.removeAllEventListeners = function() {
    this.eventList = new Array();
    this.addEventListener("onOverlayChange", this.onOverlayChange, this)
};
GEventControl.prototype.dispatchMEvent = function(E, D) {
    if (!D) D = new Object();
    D.target = this;
    D.type = E;
    for (var B = 0; B < this.eventList.length; B++) if (this.eventList[B].eventType == E) {
        var C = this.eventList[B].functionName,
            A = (this.eventList[B].object) ? this.eventList[B].object : C;
        C.call(A, D)
    }
};

function GSuspendedCallList() {
    this.base = GEventControl;
    this.base();
    this.callList = new Array()
}
GSuspendedCallList.prototype = new GEventControl();
GSuspendedCallList.prototype.callList = null;
GSuspendedCallList.prototype.addCall = function(A, B) {
    this.callList.push({
        functionName: A,
        args: B
    })
};
GSuspendedCallList.prototype.clearCallList = function() {
    this.callList = new Array()
};
GSuspendedCallList.prototype.flushCallList = function() {
    for (var A = 0; A < this.callList.length; A++) {
        var B = this.callList[A];
        if (B.args == null) B.args = new Array();
        this[B.functionName].apply(this, B.args)
    }
    this.clearCallList()
};

function GMapOptions() {}
GMapOptions.prototype.mapView = null;
GMapOptions.prototype.zoomLevel = null;
GMapOptions.prototype.center = null;
GMapOptions.prototype.rotation = 0;
GMapOptions.prototype.fixOverlap = true;
GMapOptions.prototype.miniMap = false;
GMapOptions.prototype.mapAdaptiveMode = 0;
GMapOptions.prototype.maxLevel = null;
GMapOptions.prototype.minLevel = null;
GMapOptions.prototype.mapType = null;
GMapOptions.prototype.hawkViewMapType = null;
GMapOptions.prototype.bgPicURL = null;
GMapOptions.prototype.mapServer = null;
GMapOptions.prototype.mapProj = "+proj=merc";
GMapOptions.prototype.mapExtent = null;
GMapOptions.prototype.expire = null;
GMapOptions.prototype.key = null;
GMapOptions.prototype.jbcom = false;
GMapOptions.prototype.offset = false;
GMapOptions.prototype.navibar = "navinew.swf";
GMapOptions.prototype.movestyle = 0;
GMapOptions.prototype.movespeed = "0.5,0,0";
GMapOptions.prototype.mousewheel = 0;
GMapOptions.prototype.mapspeed = 0;
GMapOptions.prototype.mouseWheelCenter = 1;
GMapOptions.prototype.optionLevelFrom = -1;
GMapOptions.prototype.optionLevelTo = -1;
GMapOptions.prototype.optionURL = "";
GMapOptions.prototype.setMiniMap = function(A) {
    this.miniMap = A
};
GMapOptions.prototype.getMiniMap = function() {
    return this.miniMap
};
GMapOptions.prototype.setMapView = function(A) {
    this.mapView = A
};
GMapOptions.prototype.getMapView = function() {
    return this.mapView
};
GMapOptions.prototype.setZoomLevel = function(A) {
    if (A > 0 && A < 18) this.zoomLevel = A
};
GMapOptions.prototype.getZoomLevel = function() {
    return this.zoomLevel
};
GMapOptions.prototype.setCenter = function(A) {
    this.center = A
};
GMapOptions.prototype.getCenter = function() {
    return this.center
};
GMapOptions.prototype.setHawkViewMapType = function(A) {
    this.hawkViewMapType = A
};
GMapOptions.prototype.getHawkViewMapType = function() {
    return this.hawkViewMapType
};
GMapOptions.prototype.setMapType = function(A) {
    this.mapType = A
};
GMapOptions.prototype.getMapType = function() {
    return this.mapType
};
GMapOptions.prototype.setMinLvel = function(A) {
    this.minLevel = A
};
GMapOptions.prototype.getMinLvel = function() {
    return this.minLevel
};
GMapOptions.prototype.setMaxLvel = function(A) {
    this.maxLevel = A
};
GMapOptions.prototype.getMaxLvel = function() {
    return this.maxLevel
};
var GMapViews = {};
GMapViews.MAP = "GT_MAP_VECTOR";
GMapViews.SATELLITE = "GT_MAP_SATELLITE";
GMapViews.HYBRID = "GT_MAP_Hybrid";
GMapViews.GOOGLECN = "mapabc to google";
GMapViews.MAPSERVER = "GT_MAPSERVER";
GMapViews.WMSSERVER = "GT_MAPWMS";
GMapViews.CUSTOMSERVER = "GT_CUSTOMSERVER";
GMapViews.EZMAPSERVER = "GT_EZMAP";
GMapViews.GBMAPSERVER = "GT_GBMAP";
GMapViews.TDMAPSERVER = "GT_TDMAP";

function GProjected() {}
GProjected.prototype.GetXY = function(a, b) {};
GProjected.prototype.GetLonAndLat = function(x, y) {};

function GMercatorPrj(a, b, c, d) {
    this.base = GProjected;
    this.base();
    this.Lon0 = a * this.dblDF;
    this.Lat0 = b * this.dblDF;
    this.false_east = c;
    this.false_north = d;
    if (a >= 0) this.CheckLine = -(180 - a);
    else this.CheckLine = 180 + a;
    this.k0 = Math.cos(this.Lat0) / Math.pow((1 - Math.pow(this.e, 2) * Math.pow(Math.sin(this.Lat0), 2)), 0.5)
}
GMercatorPrj.prototype = new GProjected();
GMercatorPrj.prototype.a = 6378137;
GMercatorPrj.prototype.f = 1 / 298.257223563;
GMercatorPrj.prototype.e = Math.sqrt(2 * (1 / 298.257223563) - (1 / 298.257223563) * (1 / 298.257223563));
GMercatorPrj.prototype.PI = 3.141592653589793238;
GMercatorPrj.prototype.dblDF = 3.141592653589793238 / 180;
GMercatorPrj.prototype.longaxle = 6378137;
GMercatorPrj.prototype.GetXY = function(a, b) {
    var c = new Array();
    var d;
    if (a < this.CheckLine) {
        d = (360 + parseFloat(a)) * this.dblDF
    } else {
        d = a * this.dblDF
    }
    var e = b * this.dblDF;
    c[0] = this.false_east + this.a * this.k0 * (d - this.Lon0);
    c[1] = this.false_north + this.a * this.k0 * Math.log(Math.tan(this.PI / 4 + e / 2) * Math.pow((1 - this.e * Math.sin(e)) / (1 + this.e * Math.sin(e)), this.e / 2));
    return c
};
GMercatorPrj.prototype.GetLonAndLat = function(x, y) {
    var a = new Array();
    var t = Math.pow(2.7182818, (this.false_north - y) / (this.a * this.k0));
    var X = this.PI / 2 - 2 * Math.atan(t);
    var b = (Math.pow(this.e, 2) / 2 + 5 * Math.pow(this.e, 4) / 24 + Math.pow(this.e, 6) / 12 + 13 * Math.pow(this.e, 8) / 360) * Math.sin(2 * X);
    var c = (7 * Math.pow(this.e, 4) / 48 + 29 * Math.pow(this.e, 6) / 240 + 811 * Math.pow(this.e, 8) / 11520) * Math.sin(4 * X);
    var d = (7 * Math.pow(this.e, 6) / 120 + 81 * Math.pow(this.e, 8) / 1120) * Math.sin(6 * X);
    var e = (4279 * Math.pow(this.e, 8) / 161280) * Math.sin(8 * X);
    a[0] = (X + b + c + d + e) / this.dblDF;
    a[1] = (((x - this.false_east) / (this.a * this.k0)) + this.Lon0) / this.dblDF;
    if (a[1] > 180) a[1] = a[1] - 360;
    return a
};

function GLatLon(B, A) {
    this.base = GPoint;
    this.base();
    if (arguments.length == 2) {
        this.lat = B;
        this.lon = A
    }
    if (arguments.length == 3) {
        this.lat = B;
        this.lon = A;
        this.projected = arguments[2]
    } else if (arguments.length == 1) if (arguments[0].indexOf(",") > -1) {
        var C = arguments[0].split(",");
        this.lon = C[0];
        this.lat = C[1]
    }
    var a = GLatLon.Projected.GetXY(this.lon, this.lat);
    this.point_X = a[0];
    this.point_Y = a[1]
}
GLatLon.prototype = new GPoint();
GLatLon.prototype.lat = null;
GLatLon.prototype.lon = null;
GLatLon.Projected = new GMercatorPrj(113, 33, 0, 0);

function GPoint(B, A) {
    if (arguments.length == 2) {
        this.point_X = B;
        this.point_Y = A
    } else if (arguments.length == 1) if (arguments[0].indexOf(",") > -1) {
        var C = arguments[0].split(",");
        this.point_Y = C[0];
        this.point_X = C[1]
    }
}
GPoint.prototype.point_X = null;
GPoint.prototype.point_Y = null;

function GSize(a, b) {
    this.width = a;
    this.height = b
}
function GBounds(a) {
    if (arguments.length == 1) {
        this.minY = a.lowLeftY;
        this.minX = a.lowLeftX;
        this.maxY = a.upRightY;
        this.maxX = a.upRightX;
        this.rate = a.rate
    } else {
        this.minX = arguments[0];
        this.minY = arguments[1];
        this.maxX = arguments[2];
        this.maxY = arguments[3]
    }
}
GBounds.prototype.min = function() {
    return new GPoint(this.minX, this.minY)
};
GBounds.prototype.max = function() {
    return new GPoint(this.maxX, this.maxY)
};
GBounds.prototype.toString = function() {
    return "" + this.min().point_X + "," + this.min().point_Y + "," + this.max().point_X + "," + this.max().point_Y + ""
};
GBounds.prototype.containsBounds = function(a) {
    var b = this;
    return b.minY < a.minY && b.maxY > a.maxY && b.minX < a.minX && b.maxX > a.maxX
};
GBounds.prototype.extend = function(a) {
    var b = this;
    b.minY = Math.min(b.minY, a.point_Y);
    b.maxY = Math.max(b.maxY, a.point_Y);
    b.minX = Math.min(b.minX, a.point_X);
    b.maxX = Math.max(b.maxX, a.point_X)
};
GBounds.intersection = function(a, b) {
    var c;
    c.topLeftLng = Math.max(a.minY, b.minY);
    c.bottomRightLng = Math.min(a.maxY, b.maxY);
    c.topLeftLat = Math.max(a.minX, b.minX);
    c.bottomRightLat = Math.min(a.maxX, b.maxX);
    return new GBounds(c)
};

function GMapServer() {}
GMapServer.prototype.address = null;
GMapServer.prototype.file = null;
GMapServer.prototype.name = null;
GMapServer.prototype.type = null;

function GTimestamp() {
    var a = new Date();
    return Date.parse(a) + a.getMilliseconds()
}
GMap.EVENT_MAP_INITIALIZED = "onMapInited";
GMap.EVENT_MAP_ZOOMED = "onMapZoomed";
GMap.EVENT_MAP_MOVED = "onMapMoved";
GMap.EVENT_MAP_DBCLICK = "onMapDoubleClick";
GMap.EVENT_MAP_EXCEPTION = "onThowException";
GMap.EVENT_POINT_CLICKED = "onPressPoint";
GMap.EVENT_POLYLINE_CLICKED = "onPressLine";
GMap.EVENT_POLYGON_CLICKED = "onPressPolygon";
GMap.EVENT_POINT_TIP_INPUTED = "onPointTipInput";
GMap.EVENT_MAP_MOUSEIN = "onMouseComeIn";
GMap.EVENT_MAP_MOUSEOUT = "onMouseLeaveOut";
GMap.EVENT_CUSTOM_POINT_MOUSE_OVER = "onMouseOverSimplePoint";
GMap.EVENT_POINT_DRAWN = "onPointDrawn";
GMap.EVENT_POLYLINE_DRAWN = "onLineDrawn";
GMap.EVENT_RECT_DRAWN = "onRectDrawn";
GMap.EVENT_POLYGON_DRAWN = "onPolygonDrawn";
GMap.EVENT_CIRCLE_DRAWN = "onCircleDrawn";
GMap.EVENT_REGULARPOLYGON_DRAWN = "onRegularPolygonDrawn";
GMap.EVENT_GET_MAP_BOUNDS = "onGetMapBoundCallback";
GMap.EVENT_GET_MAP_CENTER = "onGetMapCenterCallback";
GMap.EVENT_GET_COORD_MAP_TO_SCREEN = "onGetXYByLonLatCallBack";
GMap.EVENT_GEOMETRY_CREATED = "onGeometryCreated";
GMap.EVENT_GEOMETRY_CHANGED = "onGeometryChanged";
GMap.EVENT_GEOMETRY_REMOVED = "onGeometryRemoved";
GMap.EVENT_EXPORT_MAP_DATA = "onExportMapData";
GMap.EVENT_EXPORT_GEOMETRY_DATA = "onExportGeometryData";
GMap.EVENT_ON_GEOMETRY_CLICK = "onGeometryClick";
GMap.EVENT_MAP_CLICK = "onMapClick";
GMap.EVENT_MYTIP_CLOSED = "onTipClosed";
GMap.EVENT_POPUP_MENU_CLICK = "onPopupMenuClick";
GMap.EVENT_DRAWMODE = "edit";
GMap.EVENT_BROWSEMODE = "browse";
GMap.ErrorMessage = function(e) {
    alert(e)
};
MEMapObj = null;
var _26 = null;

function GMap(a, b) {
    _26 = a;
    MEMapObj = this;
    this.base = GSuspendedCallList;
    this.base();
    GMap.instanceCount++;
    if (b && b.mapId) this.id = b.mapId;
    else this.id = "geo" + GMap.instanceCount;
    registEventReceiver(this);
    var c = new SWFObject(ME_baseURL + "MapExpress.swf?" + GTimestamp(), this.id, "100%", "100%", "8", "#FFFFFF");
    c.useExpressInstall(ME_baseURL + "expressinstall.swf");
    c.setAttribute("xiRedirectUrl", "http://www.digitalearth.cn");
    c.addVariable("flashMapId", this.id);
    var d = new GPoint(0, 0),
        e = 5,
        f = 0,
        g;
    var h = 0;
    var i = 1;
    var j = -1;
    var k = -1;
    var l = "";
    if (b) {
        if (b.center) d = b.center;
        if (b.zoomLevel || b.zoomLevel == 0) e = b.zoomLevel;
        if (b.rotation) f = b.rotation;
        if (b.bgPicURL) g = b.bgPicURL;
        if (b.miniMap == true || b.miniMap == false) this.miniMap = b.miniMap;
        if (b.maxLevel) this.maxLevel = b.maxLevel;
        if (b.minLevel) this.minLevel = b.minLevel;
        if (b.mapServer) {
            this.mapServer = b.mapServer
        }
        if (b.mapExtent) this.mapExtent = b.mapExtent;
        if (b.expire) this.expire = b.expire;
        if (b.key) this.key = b.key;
        if (b.mapProj) this.mapProj = b.mapProj;
        if (b.mapInterval) this.mapInterval = b.mapInterval;
        if (b.offset) this.setoff = b.offset;
        if (b.mapProxy) this.mapProxy = b.mapProxy;
        if (b.mapCluster) this.mapCluster = b.mapCluster;
        if (b.navibar) this.navibar = ME_baseURL + b.navibar;
        if (b.debug) this.debug = b.debug;
        if (b.movestyle != null) this.movestyle = b.movestyle;
        if (b.movespeed != null) this.movespeed = b.movespeed;
        if (b.mousewheel != null) this.mousewheelType = b.mousewheel;
        if (b.mapspeed != null) h = b.mapspeed;
        if (b.mouseWheelCenter != null) i = b.mouseWheelCenter;
        if (b.optionLevelFrom != null) j = b.optionLevelFrom;
        if (b.optionLevelTo != null) k = b.optionLevelTo;
        if (b.optionURL != null) l = b.optionURL
    }
    c.addVariable("bgPicURL", g);
    c.addVariable("rot", f);
    c.addVariable("lon", d.point_Y);
    c.addVariable("lat", d.point_X);
    c.addVariable("level", e);
    c.addVariable("miniMap", this.miniMap);
    c.addVariable("maxLevel", this.maxLevel);
    c.addVariable("minLevel", this.minLevel);
    c.addVariable("expire", this.expire);
    c.addVariable("key", this.key);
    c.addVariable("mapExtent", this.mapExtent);
    c.addVariable("mapProj", this.mapProj);
    c.addVariable("mapServerName", this.mapServer.name);
    c.addVariable("mapServerAdress", escape(this.mapServer.address));
    c.addVariable("mapServerFile", this.mapServer.file);
    c.addVariable("mapServerType", this.mapServer.type);
    c.addVariable("mapInterval", this.mapInterval);
    c.addVariable("mapProxy", this.mapProxy);
    c.addVariable("mapCluster", this.mapCluster);
    c.addVariable("navibar", this.navibar);
    c.addVariable("debug", this.debug);
    c.addVariable("movestyle", this.movestyle);
    c.addVariable("movespeed", this.movespeed);
    c.addVariable("mousewheel", this.mousewheelType);
    c.addVariable("mapspeed", h);
    c.addVariable("mouseCenter", i);
    c.addVariable("optionLevelFrom", j);
    c.addVariable("optionLevelTo", k);
    c.addVariable("optionURL", l);
    if (b.fixOverlap) {
        c.addParam("wmode", "opaque")
    } else {
        c.addParam("wmode", "window")
    }
    if (b.jbcom == true) {
        c.addParam("wmode", "window")
    }
    this.flwidth = document.getElementById(_26).offsetWidth;
    this.flhei = document.getElementById(_26).offsetHeight;
    c.addParam("allowFullScreen", "true");
    c.addParam("allowScriptAccess", "always");
    c.write(a);
    this.flashProxy = document.getElementById(this.id);
    eval("window." + this.id + "=this.flashProxy");
    this.addEventListener(GMap.EVENT_MAP_INITIALIZED, this.innerMapInitialized, this);
    this.addEventListener("onOverlayChange", this.onOverlayChange, this);
    this.infoWindow = new GBInfoWind(this.eventHandler("onInfoCloseClick"), _26, 5000, 2000);
    this.gshowid = "";
    this.onshowinfowindow = null;
    this.addEventListener("showinfowindow", this.showinfowindow, this);
    this.addEventListener("endOverlayAnimation", this.endOverlayAnimation, this);
    this.addEventListener('onFixedOverlayUp', this.onFixedOverlayUp, this);
    this.addEventListener("midOverlayAnimation", this.midOverlayAnimation, this);
    if (this.mousewheelType == 1) this.addMouseWheel();
    this.infoMessage = new Object()
}
GMap.prototype = new GSuspendedCallList();
GMap.instanceCount = 0;
GMap.prototype.initialized = false;
GMap.prototype.flashProxy = null;
GMap.prototype.zoomLevel = 0;
GMap.prototype.center = new GPoint();
GMap.prototype.miniMap = false;
GMap.prototype.dragEnabled = true;
GMap.prototype.maxLevel = 19;
GMap.prototype.minLevel = 0;
GMap.prototype.mapType = GMapViews.MAP;
GMap.prototype.hawkViewMapType = GMapViews.MAP;
GMap.prototype.mapServer = new GMapServer();
GMap.prototype.mapExtent = null;
GMap.prototype.expire = "-311859200|-1900481884|2051383329";
GMap.prototype.key = "geobeans";
GMap.prototype.mapProj = "+proj=merc";
GMap.prototype.mapInterval = 0.2;
GMap.prototype.mapProxy = "";
GMap.prototype.mapCluster = "";
GMap.prototype.mousewheelType = 0;
GMap.prototype.Hash = new GHash();
GMap.prototype.Mode = GMap.EVENT_BROWSEMODE;
GMap.prototype.isInitialized = function() {
    if (this.initialized) return true;
    else return false
};
GMap.prototype.canCall = function(B, A) {
    if (this.isInitialized()) {
        return true
    } else {
        this.addCall(B, A);
        return false
    }
};
GMap.prototype.enableDragging = function() {
    if (!this.canCall("enableDragging", arguments)) return;
    this.flashProxy.enableDragging();
    this.dragEnabled = true
};
GMap.prototype.disableDragging = function() {
    if (!this.canCall("disableDragging", arguments)) return;
    this.flashProxy.disableDragging();
    this.dragEnabled = false
};
GMap.prototype.draggingEnabled = function() {
    if (!this.canCall("draggingEnabled", arguments)) return;
    return this.flashProxy.draggingEnabled()
};
GMap.prototype.enableInfoWindow = function() {
    if (!this.canCall("enableInfoWindow", arguments)) return;
    this.flashProxy.enableInfoWindow()
};
GMap.prototype.disableInfoWindow = function() {
    if (!this.canCall("disableInfoWindow", arguments)) return;
    this.flashProxy.disableInfoWindow()
};
GMap.prototype.infoWindowEnabled = function() {
    if (!this.canCall("infoWindowEnabled", arguments)) return;
    return this.flashProxy.infoWindowEnabled()
};
GMap.prototype.enableDoubleClickZoom = function() {
    if (!this.canCall("enableDoubleClickZoom", arguments)) return;
    this.flashProxy.enableDoubleClickZoom()
};
GMap.prototype.disableDoubleClickZoom = function() {
    if (!this.canCall("disableDoubleClickZoom", arguments)) return;
    this.flashProxy.disableDoubleClickZoom()
};
GMap.prototype.doubleClickZoomEnabled = function() {
    if (!this.canCall("doubleClickZoomEnabled", arguments)) return;
    return this.flashProxy.doubleClickZoomEnabled()
};
GMap.prototype.enableScrollWheelZoom = function() {
    if (!this.canCall("enableScrollWheelZoom", arguments)) return;
    this.flashProxy.enableScrollWheelZoom()
};
GMap.prototype.disableScrollWheelZoom = function() {
    if (!this.canCall("disableScrollWheelZoom", arguments)) return;
    this.flashProxy.disableScrollWheelZoom()
};
GMap.prototype.scrollWheelZoomEnabled = function() {
    if (!this.canCall("scrollWheelZoomEnabled", arguments)) return;
    return this.flashProxy.scrollWheelZoomEnabled()
};
GMap.prototype.setZoomLevel = function(a) {
    if (!this.canCall("setZoomLevel", arguments)) return;
    this.flashProxy.setZoomLevel(a)
};
GMap.prototype.getZoomLevel = function() {
    if (!this.canCall("getZoomLevel", arguments)) return;
    return this.flashProxy.getLevel()
};
GMap.prototype.applyFunction = function(A, B, C) {
    return function() {
        return B.apply(A, C)
    }
};
GMap.prototype.setCenter = function(a) {
    if (!this.canCall("setCenter", arguments)) return;
    this.flashProxy.setCenterByLatLng(a)
};
GMap.prototype.getCenter = function() {
    if (!this.canCall("getCenter", arguments)) return;
    return new GPoint(this.flashProxy.getCenter().point_X, this.flashProxy.getCenter().point_Y)
};
GMap.prototype.setZoomAndCenter = function(a, b) {
    if (!this.canCall("setZoomAndCenter", arguments)) return;
    this.flashProxy.setZoomAndCenter(a, b)
};
GMap.prototype.panto = function(a, b, c) {
    if (!this.canCall("panto", arguments)) return;
    this.flashProxy.panto(a, b, c)
};
GMap.prototype.slide = function(a) {
    if (!this.canCall("slide", arguments)) return;
    this.flashProxy.slide(a)
};
GMap.prototype.showHawkView = function(a) {
    if (!this.canCall("showHawkView", arguments)) return;
    this.flashProxy.showHawkView(a)
};
GMap.prototype.getOverlay = function(a) {
    if (this.Mode != GMap.EVENT_BROWSEMODE) {}
    if (!this.canCall("getOverlay", arguments)) return;
    if (a == "undefined" || a == null) return;
    if (typeof this.Hash.find(a) != "undefined") {
        var b = this.Hash.find(a).len;
        var c;
        var d;
        var i;
        var e = "";
        switch (this.Hash.find(a).type) {
        case GOverlay.TYPE_POLYGON:
            e += "MULTIPOLYGON(";
            for (i = 0; i < b; i++) {
                if (i == 0) {
                    c = this.flashProxy.getOverlay(a + "_____" + i)
                }
                d = (this.flashProxy.getOverlay(a + "_____" + i).wkt);
                e += d.substring(7) + ","
            }
            e = e.substring(0, e.length - 1);
            e += ")";
            break;
        case GOverlay.TYPE_POLYLINE:
            e += "MULTILINESTRING(";
            for (i = 0; i < b; i++) {
                if (i == 0) {
                    c = this.flashProxy.getOverlay(a + "_____" + i)
                }
                d = (this.flashProxy.getOverlay(a + "_____" + i).wkt);
                e += d.substring(10) + ","
            }
            e = e.substring(0, e.length - 1);
            e += ")";
            break
        }
        c.wkt = e;
        return c
    }
    return this.flashProxy.getOverlay(a)
};
GMap.prototype.setMapType = function(a) {
    if (!this.canCall("setMapType", arguments)) return;
    this.flashProxy.setMapType(a)
};
GMap.prototype.getMapType = function() {
    if (!this.canCall("getMapType", arguments)) return;
    return this.flashProxy.getMapType()
};
GMap.prototype.setCopyright = function(a, b) {
    if (!this.canCall("setCopyright", arguments)) return
};
GMap.prototype.setMaxLevel = function(a) {
    if (!this.canCall("setMaxLevel", arguments)) return;
    this.flashProxy.setMaxLevel(a)
};
GMap.prototype.getMaxLevel = function() {
    if (!this.canCall("getmaxLevel", arguments)) return;
    return this.flashProxy.getMaxLevel()
};
GMap.prototype.setMinLevel = function(a) {
    if (!this.canCall("setMinLevel", arguments)) return;
    this.flashProxy.setMinLevel(a)
};
GMap.prototype.getMinLevel = function() {
    if (!this.canCall("getMinLevel", arguments)) return;
    return this.flashProxy.getMinLevel()
};
GMap.prototype.showFullScreenBt = function(a) {
    if (!this.canCall("showFullScreenBt", arguments)) return;
    this.flashProxy.showFullScreenBt(a)
};
GMap.prototype.showNavigater = function(a) {
    if (!this.canCall("showNavigater", arguments)) return;
    this.flashProxy.showNavigater(a)
};
GMap.prototype.setHawkViewMapType = function(a) {
    if (!this.canCall("setHawkViewMapType", arguments)) return;
    this.flashProxy.setHawkViewMapType(a)
};
GMap.prototype.getBounds = function() {
    if (!this.canCall("getBounds", arguments)) return;
    return new GBounds(this.flashProxy.getBounds())
};
GMap.prototype.getSize = function() {
    if (!this.canCall("getSize", arguments)) return;
    return new GSize(this.flashProxy.getSize().width, this.flashProxy.getSize().height)
};
GMap.prototype.startMeasuringDistance = function() {
    if (!this.canCall("startMeasuringDistance", arguments)) return;
    this.flashProxy.startMeasuringDistance()
};
GMap.prototype.clearMeasuringDistanceOverlays = function() {
    if (!this.canCall("clearMeasuringDistanceOverlays", arguments)) return;
    this.flashProxy.clearMeasuringDistanceOverlays()
};
GMap.prototype.moveMarker = function(a, b) {
    if (!this.canCall("moveMarker", arguments)) return;
    this.flashProxy.moveMarker(a, b)
};
GMap.prototype.moveInfowindow = function(a) {
    if (!this.canCall("moveInfowindow", arguments)) return;
    this.flashProxy.moveInfowindow(a)
};
GMap.prototype.showCenterPointer = function(a) {
    if (!this.canCall("showCenterPointer", arguments)) return;
    this.flashProxy.showCenterPointer(a)
};
GMap.prototype.showHawkViewCenterPointer = function(a) {
    if (!this.canCall("showHawkViewCenterPointer", arguments)) return;
    this.flashProxy.showHawkViewCenterPointer(a)
};
GMap.prototype.showCopyright = function(a) {
    if (!this.canCall("showCopyright", arguments)) return;
    this.flashProxy.showCopyright(a)
};
GMap.prototype.showGeoScale = function(a) {
    if (!this.canCall("showGeoScale", arguments)) return;
    this.flashProxy.showGeoScale(a)
};
GMap.prototype.setMapAlpha = function(a) {
    if (!this.canCall("setMapAlpha", arguments)) return;
    this.flashProxy.setMapAlpha(a)
};
GMap.prototype.setHawkViewMapAlpha = function(a) {
    if (!this.canCall("setHawkViewMapAlpha", arguments)) return;
    this.flashProxy.setHawkViewMapAlpha(a)
};
GMap.prototype.setCustomServer = function(a) {
    if (!this.canCall("setCustomServer", arguments)) return;
    this.flashProxy.setCustomServer(a.address, a.file, a.name, a.type)
};
GMap.prototype.forceEndOverlayEditing = function() {
    if (!this.canCall("forceEndOverlayEditing", arguments)) return;
    this.flashProxy.forceEndOverlayEditing()
};
GMap.prototype.getOverlayIDs = function() {
    if (!this.canCall("getOverlayIDs", arguments)) return;
    if (this.Mode != GMap.EVENT_BROWSEMODE) {}
    var c = this.flashProxy.getOverlayIDs();
    var d = new Array();
    this.Hash.forEach(function(a, b, i, h) {
        for (var j = 0; j < c.length; j++) {
            if (c[j].indexOf(a + "_____") != -1) {
                c[j] = ""
            }
        }
        c.push(a)
    }, null);
    for (var k = 0; k < c.length; k++) {
        if (c[k] == "") {
            continue
        }
        d.push(c[k])
    }
    return d
};
GMap.prototype.startedMeasuringArea = function(a) {
    if (!this.canCall("startedMeasuringArea", arguments)) return;
    this.flashProxy.startedMeasuringArea(a)
};
GMap.prototype.clearMeasuringAreaOverlays = function() {
    if (!this.canCall("clearMeasuringAreaOverlays", arguments)) return;
    this.flashProxy.clearMeasuringAreaOverlays()
};
GMap.prototype.setOverlayOnMapVisible = function(a, b) {
    if (!this.canCall("setOverlayOnMapVisible", arguments)) return;
    this.flashProxy.setOverlayOnMapVisible(a, b)
};
GMap.prototype.getOverlayOnMapVisible = function(a) {
    if (!this.canCall("getOverlayOnMapVisible", arguments)) return;
    return this.flashProxy.getOverlayOnMapVisible(a)
};
GMap.prototype.setOverlayEditable = function(a, b) {
    if (!this.canCall("setOverlayEditable", arguments)) return;
    if (this.Mode != GMap.EVENT_DRAWMODE) {}
    if (b == true) {
        var c = this.getOverlay(a);
        if (c) {
            var d = c.wkt;
            var e = c.style;
            var i, j;
            var f = new Array();
            var g = new Array();
            var h = new Array();
            var k = new Array();
            var l = new Object();
            var m = 0;
            var n;
            switch (c.type) {
            case GOverlay.TYPE_POLYGON:
                this.removeOverlay(a);
                if (d.substring(0, 7) == "POLYGON") {
                    f = d.substring(9, d.length - 2).split(",");
                    for (i = 0; i < f.length; i++) {
                        g = f[i].split(" ");
                        h[i] = new GPoint(g[0], g[1])
                    }
                    var o = new GPolygonOverlay(h, e, a);
                    this.addOverlay(o);
                    this.flashProxy.setOverlayEditable(a, true)
                } else {
                    n = d.substring(14, d.length - 2).split("),(");
                    m = n.length;
                    l.len = m;
                    l.type = GOverlay.TYPE_POLYGON;
                    this.Hash.add(a, l);
                    for (j = 0; j < m; j++) {
                        f = n[j].replace("(", "").replace(")", "").split(",");
                        for (i = 0; i < f.length; i++) {
                            g = f[i].split(" ");
                            h[i] = new GPoint(g[0], g[1])
                        }
                        var o = new GPolygonOverlay(h, e, a + "_____" + j);
                        this.addOverlay(o);
                        this.flashProxy.setOverlayEditable(a + "_____" + j, true)
                    }
                }
                break;
            case GOverlay.TYPE_POLYLINE:
                this.removeOverlay(a);
                if (d.substring(0, 10) == "LINESTRING") {
                    f = d.substring(11, d.length - 1).split(",");
                    for (i = 0; i < f.length; i++) {
                        g = f[i].split(" ");
                        h[i] = new GPoint(g[0], g[1])
                    }
                    var q = new GPolylineOverlay(h, e, a);
                    this.addOverlay(q);
                    this.flashProxy.setOverlayEditable(a, true)
                } else {
                    n = d.substring(17, d.length - 2).split("),(");
                    m = n.length;
                    l.len = m;
                    l.type = GOverlay.TYPE_POLYLINE;
                    this.Hash.add(a, l);
                    for (j = 0; j < m; j++) {
                        f = n[j].split(",");
                        for (i = 0; i < f.length; i++) {
                            g = f[i].split(" ");
                            h[i] = new GPoint(g[0], g[1])
                        }
                        var q = new GPolylineOverlay(h, e, a + "_____" + j);
                        this.addOverlay(q);
                        this.flashProxy.setOverlayEditable(a + "_____" + j, true)
                    }
                }
                break;
            default:
                this.flashProxy.setOverlayEditable(a, true)
            }
        }
    } else {
        if (typeof this.Hash.find(a) != "undefined") {
            var s = this.Hash.find(a).len;
            for (var i = 0; i < s; i++) {
                this.flashProxy.setOverlayEditable(a + "_____" + i, b)
            }
        }
        this.flashProxy.setOverlayEditable(a, b)
    }
};
GMap.prototype.resetStyle = function(a, b, c) {
    if (!this.canCall("resetStyle", arguments)) return;
    if (typeof this.Hash.find(a) != "undefined") {
        var d = this.Hash.find(a).len;
        for (var i = 0; i < d; i++) {
            this.flashProxy.resetOverlayStyle(a + "_____" + i, b)
        }
        return
    }
    this.flashProxy.resetOverlayStyle(a, b)
};
GMap.prototype.setOverlayRotation = function(a, b) {
    if (!this.canCall("setOverlayRotation", arguments)) return;
    var c;
    if (b <= 360 && 0 <= b) {
        if (b <= 180) {
            c = b
        } else {
            c = -(b - 180)
        }
    } else {
        alert("Make sure the angle between the range of 0-360");
        return
    }
    this.flashProxy.setOverlayRotation(a, b)
};
GMap.prototype.getOverlayRotation = function(a) {
    if (!this.canCall("getOverlayRotation", arguments)) return;
    var b;
    b = this.flashProxy.getOverlayRotation(a);
    if (b <= 360 && 0 <= b) {
        return b
    } else {
        if (b < 0) {
            b = b + 360;
            return b
        } else {
            b = b - 360;
            return b
        }
    }
};
GMap.prototype.setMouseImg = function(a, b, c) {
    if (!this.canCall("setMouseImg", arguments)) return;
    this.flashProxy.setMouseImg(a, b, c)
};
GMap.prototype.boxZoomOut = function() {
    if (!this.canCall("boxZoomOut", arguments)) return;
    var a = new GOverlay();
    var b = new GStyle();
    this.startDrawOverlay("boxZoomOut_" + a.id, GMap.OVERLAY_TYPE_RECT_ZOOMOUT, false, b, true, this.onBoxZoomOut)
};
GMap.prototype.onBoxZoomOut = function(a) {
    var b = a.args.split(",")[1];
    if (b.indexOf("boxZoomOut_") != -1) {
        var c, d, e, f;
        var g, h, i;
        i = Math.abs(this.getBounds().minY - this.getBounds().maxY);
        h = Math.abs(this.getBounds().minX - this.getBounds().maxX);
        c = this.flashProxy.getOverlay(b).topLeft;
        d = this.flashProxy.getOverlay(b).bottomRight;
        f = Math.abs(d.point_Y - c.point_Y);
        e = Math.abs(d.point_X - c.point_X);
        var g = Math.min(Math.floor((i / f) / 2), Math.floor((h / e) / 2));
        var k = (d.point_Y + c.point_Y) / 2;
        var l = (d.point_X + c.point_X) / 2;
        if (11 < g || g < 1) {
            g = 1
        }
        this.setZoomAndCenter(new GPoint(l, k), this.getZoomLevel() - g);
        this.removeOverlay(b)
    } else {
        return
    }
};
GMap.prototype.boxZoomIn = function() {
    if (!this.canCall("boxZoomIn", arguments)) return;
    var a = new GOverlay();
    var b = new GStyle();
    this.startDrawOverlay("boxZoomIn_" + a.id, GMap.OVERLAY_TYPE_RECT_ZOOMIN, false, b, true, this.onBoxZoomIn)
};
GMap.prototype.onBoxZoomIn = function(a) {
    var b = a.args.split(",")[1];
    if (b.indexOf("boxZoomIn_") != -1) {
        var c, d, e, f;
        var g, h, i;
        i = Math.abs(this.getBounds().minY - this.getBounds().maxY);
        h = Math.abs(this.getBounds().minX - this.getBounds().maxX);
        c = this.flashProxy.getOverlay(b).topLeft;
        d = this.flashProxy.getOverlay(b).bottomRight;
        f = Math.abs(d.point_Y - c.point_Y);
        e = Math.abs(d.point_X - c.point_X);
        var g = Math.min(Math.floor((i / f) / 2), Math.floor((h / e) / 2));
        var k = (d.point_Y + c.point_Y) / 2;
        var l = (d.point_X + c.point_X) / 2;
        if (11 < g || g < 1) {
            g = 1
        }
        this.setZoomAndCenter(new GPoint(l, k), this.getZoomLevel() + g);
        this.removeOverlay(b)
    } else {
        return
    }
};
GMap.prototype.getBoxBound = function(a) {
    if (!this.canCall("getBoxBound", arguments)) return;
    var b = new GOverlay();
    var c = new GStyle();
    this.startDrawOverlay("BoxBound_" + b.id, GMap.OVERLAY_TYPE_RECT, false, c, true);
    this.addEventListener("onOverlayCreated", this.onBoxBound, this);
    this.removeEventListenerByType("GMAP_EVENT_BOUNDBACK");
    this.addEventListener("GMAP_EVENT_BOUNDBACK", a, this)
};
GMap.prototype.onBoxBound = function(a) {
    var b = a.args.split(",")[1];
    if (b.indexOf("BoxBound_") != -1) {
        var c, d;
        c = this.flashProxy.getOverlay(b).topLeft;
        d = this.flashProxy.getOverlay(b).bottomRight;
        this.removeOverlay(b);
        var e = new GBounds(c.point_X, d.point_Y, d.point_X, c.point_Y);
        GDispatchEvent("GMAP_EVENT_BOUNDBACK", e)
    } else {
        return
    }
};
GMap.prototype.setActiveLayer = function(a) {
    if (!this.canCall("setActiveLayer", arguments)) return;
    this.flashProxy.setActiveLayer(a)
};
GMap.prototype.setBackGround = function(a) {
    if (!this.canCall("setBackGround", arguments)) return;
    this.flashProxy.setBackGround(a)
};
GMap.prototype.setTopPosition = function(a) {
    if (!this.canCall("setTopPosition", arguments)) return;
    this.flashProxy.setTopPosition(a)
};
GMap.prototype.showInfoWindow = function(a, b) {
    this.setTopPosition(a);
    if (!this.canCall("showInfoWindow", arguments)) return;
    this.flashProxy.showInfoWindow(a, b, true)
};
GMap.prototype.setOverlayCenter = function(a, b) {
    this.setTopPosition(a);
    if (!this.canCall("setOverlayCenter", arguments)) return;
    this.flashProxy.showInfoWindow(a, true, b)
};
GMap.prototype.closeInfowindow = function() {
    if (!this.canCall("closeInfowindow", arguments)) return;
    this.flashProxy.closeInfowindow()
};
GMap.prototype.showIcon = function(a, b, c) {
    if (!this.canCall("showIcon", arguments)) return;
    this.flashProxy.showIcon(a, b, c)
};
GMap.prototype.setOverlayBlink = function(a, b) {
    if (!this.canCall("setOverlayBlink", arguments)) return;
    var c = 0;
    if (b != null) c = b;
    this.flashProxy.setOverlayBlink(a, c * 2)
};
GMap.prototype.stopOverlayBlink = function(a) {
    if (!this.canCall("stopOverlayBlink", arguments)) return;
    this.flashProxy.stopOverlayBlink(a)
};
GMap.prototype.stopAllBlink = function() {
    if (!this.canCall("stopAllBlink", arguments)) return;
    this.flashProxy.stopAllBlink()
};
GMap.prototype.setBgColor = function(a) {
    if (!this.canCall("setBgColor", arguments)) return;
    this.flashProxy.setBgColor(a)
};
GMap.prototype.showSmallNav = function(a) {
    if (!this.canCall("showSmallNav", arguments)) return;
    this.flashProxy.showSmallNav(a)
};
GMap.prototype.moveNavigater = function(x, y) {
    if (!this.canCall("moveNavigater", arguments)) return;
    this.flashProxy.moveNavigater(x, y)
};
GMap.prototype.setLiveMapLayer = function(a) {
    if (!this.canCall("setLiveMapLayer", arguments)) return;
    this.flashProxy.setLiveMapLayer(a)
};
GMap.prototype.cancelLiveMap = function() {
    if (!this.canCall("cancelLiveMap", arguments)) return;
    this.flashProxy.cancelLiveMap()
};
GMap.prototype.addIcon = function(a) {
    if (!this.canCall("addIcon", arguments)) return;
    this.flashProxy.addIcon(a)
};
GMap.prototype.addIcons = function(a, b, c) {
    if (!this.canCall("addIcons", arguments)) return;
    this.flashProxy.addIcons(a, b, c)
};
GMap.prototype.removeIcon = function(a) {
    if (!this.canCall("removeIcon", arguments)) return;
    this.flashProxy.removeIcon(a)
};
GMap.prototype.removeAllIcon = function() {
    if (!this.canCall("removeAllIcon", arguments)) return;
    this.flashProxy.removeAllIcon()
};
GMap.prototype.moveIcon = function(a, b) {
    if (!this.canCall("moveIcon", arguments)) return;
    this.flashProxy.moveIcon(a, b)
};
GMap.prototype.showMagnifier = function(a) {
    if (!this.canCall("showMagnifier", arguments)) return;
    this.flashProxy.showMagnifier(a)
};
GMap.prototype.addMagnifier = function(a) {
    if (!this.canCall("addMagnifier", arguments)) return;
    this.flashProxy.addMagnifier(a)
};
GMap.prototype.removeMagnifier = function() {
    if (!this.canCall("removeMagnifier", arguments)) return;
    this.flashProxy.removeMagnifier()
};
GMap.prototype.getContainerXY = function(a, b) {
    if (!this.canCall("getContainerXY", arguments)) return;
    return this.flashProxy.getContainerXY(a, b)
};
GMap.prototype.getLatLonXY = function(a, b) {
    if (!this.canCall("getLatLonXY", arguments)) return;
    return this.flashProxy.getLatLonXY(a, b)
};
GMap.prototype.startDrawMode = function() {
    this.Mode = GMap.EVENT_DRAWMODE;
    var a;
    a = this.flashProxy.getOverlayIDs();
    if (a == "") {
        return
    } else {
        for (var i = 0; i < a.length; i++) {
            this.setOverlayEditable(a[i], true)
        }
    }
};
GMap.prototype.startBrowseMode = function() {
    if (this.Mode == GMap.EVENT_BROWSEMODE) return;
    var a = this.flashProxy.getOverlayIDs();
    if (a == "") {
        return
    } else {
        for (var i = 0; i < a.length; i++) {
            this.setOverlayEditable(a[i], false)
        }
    }
    this.Mode = GMap.EVENT_BROWSEMODE
};
GMap.prototype.startDrawOverlay = function(a, b, c, d, e, f) {
    if (!this.canCall("startDrawOverlay", arguments)) return null;
    if (a.indexOf("boxZoom") == -1) {
        if (this.Mode != GMap.EVENT_DRAWMODE) {}
    }
    this.flashProxy.startDrawOverlay(a, b, c, d, e);
    if (f != null) {
        this.addEventListener('onOverlayCreated', this.onOverlayCreated, this);
        this.afterOverlayCreated = f
    }
};
GMap.prototype.startDrawCircle = function(a, b, c) {
    if (!this.canCall("startDrawOverlay", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("circle_" + d.id, GMap.OVERLAY_TYPE_CIRCLE, a, b, true, c)
};
GMap.prototype.startDrawRect = function(a, b, c) {
    if (!this.canCall("startDrawRect", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("rect_" + d.id, GMap.OVERLAY_TYPE_RECT, a, b, true, c)
};
GMap.prototype.startDrawRAPolygon = function(a, b, c) {
    if (!this.canCall("startDrawRightAngleRect", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("raPolygon_" + d.id, GMap.OVERLAY_TYPE_RIGHTANGLEPOLYGON, a, b, true, c)
};
GMap.prototype.startDrawEllipse = function(a, b, c) {
    if (!this.canCall("startDrawEllipse", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("ellipse_" + d.id, GMap.OVERLAY_TYPE_Ellipse, a, b, true, c)
};
GMap.prototype.startDrawPolygon = function(a, b, c) {
    if (!this.canCall("startDrawPolygon", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("polygon_" + d.id, GMap.OVERLAY_TYPE_POLYGON, a, b, true, c)
};
GMap.prototype.startDrawPolyline = function(a, b, c) {
    if (!this.canCall("startDrawPolyline", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("polyline_" + d.id, GMap.OVERLAY_TYPE_POLYLINE, a, b, true, c)
};
GMap.prototype.startDrawMarker = function(a, b, c) {
    if (!this.canCall("startDrawMarker", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("marker_" + d.id, GMap.OVERLAY_TYPE_MARKER, a, b, true, c)
};
GMap.prototype.startDrawIcon = function(a, b, c) {
    if (!this.canCall("startDrawIcon", arguments)) return;
    var d = new GIcon();
    this.startDrawOverlay("gicon_" + d.id, "GICON", a, b, true, c)
};
GMap.prototype.innerMapInitialized = function(C) {
    this.initialized = true;
    this.showHawkView(this.miniMap);
    this.flushCallList();
    globalDispatchEvent("onMapFinished", this.id)
};
GMap.prototype.onOverlayChange = function(c) {
    this.Hash.forEach(function(a, b, i, h) {
        if ((c.args.split(',')[1]).indexOf(a + "_____") != -1) {
            c.args = c.args.split(',')[0] + "," + a
        }
    }, null);
    globalDispatchEvent("onOverlayUpdate", c.args)
};
GMap.prototype.onOverlayCreated = function(a) {
    if (this.afterOverlayCreated) this.afterOverlayCreated(a);
    this.afterOverlayCreated = null;
    this.removeEventListener('onOverlayCreated', onOverlayCreated)
};

function onloaded() {
    if (isFF > 0) document.body.addEventListener("DOMMouseScroll", mousewheel, false);
    else document.body.onmousewheel = mousewheel
}
var isFF = navigator.userAgent.toLowerCase().indexOf('firefox');
var mousewheel = function(a) {
        var a = a ? a : window.event;
        var c = a.srcElement;
        if (!c) {
            c = a.target
        }
        if (c.classid == "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000") {
            return false
        }
        if (c.type == "application/x-shockwave-flash") {
            if (isFF > 0) {
                a.preventDefault();
                a.stopPropagation()
            } else {
                return false
            }
        }
    };
GMap.OVERLAY_TYPE_MARKER = "overly_marker_20080527";
GMap.OVERLAY_TYPE_POLYLINE = "overly_polyline_20080527";
GMap.OVERLAY_TYPE_POLYGON = "overly_polygon_20080527";
GMap.OVERLAY_TYPE_CIRCLE = "overly_round_20080820";
GMap.OVERLAY_TYPE_Ellipse = "overly_ELLIPSE_20080820";
GMap.OVERLAY_TYPE_RECT = "overly_RECT_20080820";
GMap.OVERLAY_TYPE_RIGHTANGLEPOLYGON = "overly_RIGHTANGLEPOLYGON_20100511";
GMap.OVERLAY_TYPE_RECT_ZOOMOUT = "overly_RECT_ZOOMOUT_20080820";
GMap.OVERLAY_TYPE_RECT_ZOOMIN = "overly_RECT_ZOOMIN_20080820";
GMap.OVERLAY_TYPE_REGULARPOLYGON = "overly_REGULAR_POLYGON_20080820";
GMap.OVERLAY_TYPE_TAG = "overly_TAG_20081216";
GMap.OVERLAY_TYPE_BEZIER = "overly_BEZIER_20101102";
GMap.OVERLAY_TYPE_POLYLINE_CURVE = "overly_POLYLINE_CURVE_20101102";
GMap.OVERLAY_TYPE_ENCIRCLEMENT = "overly_ENCIRCLEMENT_20110110";
GMap.OVERLAY_TYPE_CURVE_ARROW = "overly_CURVE_ARROW_20101104";
GMap.OVERLAY_TYPE_HAS_TAIL_CURVE_ARROW = "overly_HAS_TAIL_CURVE_ARROW_20101114";
GMap.OVERLAY_TYPE_CIRCLE2 = "overly_CIRCLE_20101128";
GMap.OVERLAY_TYPE_LINE_ARROW = "overly_LINE_ARROW_20101026";
GMap.OVERLAY_TYPE_DOUBLE_ARROW = "overly_DOUBLE_ARROW_20101026";
GMap.OVERLAY_TYPE_THREE_POINT_ARROW = "overly_THREE_POINT_ARROW_20101027";
GMap.FXG_SYMBOL = "overly_FXG_SYMBOL_20101208";
GMap.PIC_SYMBOL = "overly_PIC_SYMBOL_20110116";
GMap.CIRCLE_UNION = "overly_CIRCLE_UNION_20110304";
GMap.prototype.addOverlay = function(A, B) {
    if (A.length == 0) return;
    if (!this.canCall("addOverlay", arguments)) return;
    if (A.isWKT == true) {
        this.addOverlayByWKT(A);
        return
    }
    switch (A.type) {
    case GMap.OVERLAY_TYPE_MARKER:
        this.addMarker(A, B);
        break;
    case GMap.OVERLAY_TYPE_POLYLINE:
        this.addPolyline(A, B);
        break;
    case GMap.OVERLAY_TYPE_RECT:
        this.addRect(A);
        break;
    case GMap.OVERLAY_TYPE_POLYGON:
        this.addPolygon(A, B);
        break;
    case GMap.OVERLAY_TYPE_CIRCLE:
        this.addCircle(A);
        break;
    case GMap.OVERLAY_TYPE_Ellipse:
        this.addEllipse(A);
        break;
    case GMap.OVERLAY_TYPE_REGULARPOLYGON:
        this.addRegularPolygon(A);
        break;
    case GMap.OVERLAY_TYPE_TAG:
        this.addTag(A);
        break;
    case GOverlay.TYPE_PIECHART:
        this.addPieChart(A);
        break;
    case GOverlay.TYPE_BARCHART:
        this.addBarChart(A);
        break;
    case GOverlay.TYPE_RIGHTANGLEPOLYGON:
        this.addRAPolygon(A);
        break;
    case GOverlay.TYPE_CIRCLE_UNION:
        this.addCircleUnion(A);
        break;
    case GOverlay.TYPE_RADAR:
        this.addRadar(A);
        break
    }
};
GMap.prototype.addOverlayByWKT = function(a) {
    if (!this.canCall("addOverlayByWKT", a)) return;
    this.flashProxy.addOverlayByWKT(a)
};
GMap.prototype.addMarker = function(a) {
    if (!this.canCall("addMarker", a)) return;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addPolyline = function(a) {
    if (!this.canCall("addPolyline", a)) return;
    var b = new Array();
    for (var i = 0; i < a.points.length; i++) {
        b[i] = a.points[i]
    }
    a.points = b;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addRAPolygon = function(a) {
    if (!this.canCall("addRAPolygon", a)) return;
    var b = new Array();
    for (var i = 0; i < a.points.length; i++) {
        b[i] = a.points[i]
    }
    a.points = b;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addPolygon = function(a) {
    if (!this.canCall("addPolygon", a)) return;
    var b = new Array();
    for (var i = 0; i < a.points.length; i++) {
        b[i] = a.points[i]
    }
    a.points = b;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addRect = function(a) {
    if (!this.canCall("addRect", a)) return;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addCircle = function(a) {
    if (!this.canCall("addCircle", a)) return;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addRadar = function(a) {
    if (!this.canCall("addCircle", a)) return;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addEllipse = function(a) {
    if (!this.canCall("addEllipse", a)) return;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addRegularPolygon = function(a) {
    if (!this.canCall("addRegularPolygon", a)) return;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addTag = function(a) {
    if (!this.canCall("addTag", a)) return;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addPieChart = function(a) {
    if (!this.canCall("addPieChart", a)) return;
    if (a.legend != null) {
        var b = new Array();
        for (var i = 0; i < a.legend.length; i++) {
            b[i] = a.legend[i]
        }
        a.legend = b
    } else {}
    var c = new Array();
    for (var i = 0; i < a.pieData.length; i++) {
        c[i] = a.pieData[i]
    }
    a.pieData = c;
    if (a.legendColor != null) {
        var d = new Array();
        for (var i = 0; i < a.legendColor.length; i++) {
            d[i] = a.legendColor[i]
        }
        a.legendColor = d
    }
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addBarChart = function(a) {
    if (!this.canCall("addBarChart", a)) return;
    var b = new Array();
    for (var i = 0; i < a.xAxis.length; i++) {
        b[i] = a.xAxis[i]
    }
    a.xAxis = b;
    if (a.legendColor != null) {
        var c = new Array();
        for (var i = 0; i < a.legendColor.length; i++) {
            c[i] = a.legendColor[i]
        }
        a.legendColor = c
    }
    if (a.legend != null) {
        var d = new Array();
        for (var i = 0; i < a.legend.length; i++) {
            d[i] = a.legend[i]
        }
        a.legend = d
    }
    var e = new Array();
    e = eval(a.barData);
    a.barData = e;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.addCircleUnion = function(a) {
    if (!this.canCall("addCircleUnion", a)) return;
    this.flashProxy.addOverlay(a)
};
GMap.prototype.removeOverlay = function(a) {
    if (!this.canCall("removeOverlay", arguments)) return;
    if (a == "undefined" || a == null) return;
    if (typeof this.Hash.find(a) != "undefined") {
        var b = this.Hash.find(a).len;
        for (var i = 0; i < b; i++) {
            this.flashProxy.removeOverlay(a + "_____" + i)
        }
        this.Hash.remove(a)
    }
    this.flashProxy.removeOverlay(a);
    if (a == this.gshowid) {
        this.closeInfoWindow()
    }
};
GMap.prototype.removeAllOverlay = function() {
    if (!this.canCall("removeAllOverlay", arguments)) return;
    this.flashProxy.removeAllOverlay();
    this.Hash = new GHash();
    this.closeInfoWindow()
};
GMap.prototype.addLineBuffer = function(a, b, d, e, f, h) {
    var g = b.split(",");
    var i = new Array();
    for (var c = 0; c < g.length; c++) {
        var j = parseFloat(g[c]);
        var k = parseFloat(g[c + 1]);
        var l = new GPoint(j, k);
        i.push(l);
        c++
    }
    var m = new GStyle();
    m.lineColor = d;
    m.dashed = false;
    m.lineOpacity = e;
    m.showInfoWindow = false;
    var n = new GPolylineOverlay(i, m, a, f, h * 2);
    n.editable = false;
    var o = n.getMBR();
    this.addOverlay(n)
};
GMap.prototype.addPointBuffer = function(a, b, c, d, e, f) {
    var g = b.split(",");
    var h = new Array();
    var i = parseFloat(g[0]);
    var j = parseFloat(g[1]);
    var k = new GPoint(i, j);
    var l = new GStyle();
    l.lineColor = c;
    l.dashed = false;
    l.lineOpacity = d;
    l.showInfoWindow = false;
    var m = new GCircleOverlay(k, f, l, a, e);
    this.addOverlay(m)
};
GMap.prototype.addPolygonBuffer = function(a, b, d, e, f, h) {
    var g = b.split(",");
    var i = new Array();
    for (var c = 0; c < g.length; c++) {
        var j = parseFloat(g[c]);
        var k = parseFloat(g[c + 1]);
        var l = new GPoint(j, k);
        i.push(l);
        c++
    }
    var m = new GStyle();
    m.lineColor = d;
    m.dashed = false;
    m.lineOpacity = e;
    m.showInfoWindow = false;
    var n = new GPolylineOverlay(i, m, a, f, h);
    n.editable = false;
    var o = n.getMBR();
    this.addOverlay(n)
};
GMap.prototype.eventHandler = function(c) {
    var b = this;
    return function(d) {
        if (!d) {
            d = window.event
        }
        if (d && !d.target) {
            d.target = d.srcElement
        }
        b[c](d)
    }
};
GMap.prototype.openInfoWindow = function(j, h, d, g) {
    var c = new GBIcon("eleInfo", 150, 150, new GBPoint(10, 10), new GBPoint(10, 10), new GBPoint(10, 10), "ffff", 30, null);
    var f = new GBIconInfo("", c);
    var b = "";
    this.pWinInfo = new GBInfoObj("china", new GBPoint(j, h), f, "size=44", d);
    this.pWinInfo.bIsVisable = true;
    if (typeof g == "object") {
        this.curOverlay = g
    } else {
        if (typeof g == "undefined" || g) {
            this.bIsInScreen = true
        }
    }
    this.showInfoWindow2(this.pWinInfo)
};
GMap.prototype.showInfoWindow2 = function(c) {
    if (c == null) {
        return
    }
    if (!c.infoStyle) {
        return
    }
    this.openLocation = c;
    var b = new GBPoint(c.point.x, c.point.y);
    this.infoWindow.point = c.point;
    this.infoWindow.iconClass = c.icon.iconClass;
    var d = this;
    var f = function() {
            d.showSizedInfoWindow(b.x, b.y, c.icon.iconClass)
        };
    GB_V.asynchronousTransform(c.xml, this.infoWindow.offscreenArea, c.infoStyle, f, null)
};
GMap.prototype.addInfoWindow = function() {
    if (this.addinfo == false) {
        document.getElementById(id).appendChild(this.infoWindow.windowDiv);
        document.getElementById(id).appendChild(this.infoWindow.shadowDiv);
        this.addinfo = true
    }
};
GMap.prototype.showSizedInfoWindow = function(h, g, f) {
    GB_xa.invalidate("infoWindowOffscreen");
    var d = GB_xa.create("infoWindowOffscreen");
    this.infoWindow.prepareOffscreen();
    var c = this;
    var b = function() {
            if (d.isValid()) {
                c.infoWindow.flipOffscreenAndSize();
                c.infoWindow.positionAt(h, g, f);
                c.infoWindow.show();
                if (typeof c.bIsInScreen == "undefined" || c.bIsInScreen) {}
                if (c.onInfoWindowLoad) {
                    c.onInfoWindowLoad();
                    c.onInfoWindowLoad = null
                }
            }
        };
    window.setTimeout(b, 0)
};
GMap.prototype.onInfoCloseClick = function(c) {
    this.closeInfoWindow()
};
GMap.prototype.closeInfoWindow = function() {
    {
        this.infoWindow.hide();
        this.flashProxy.closeDIVWin();
        if (this.oninfowindowclose) {
            this.oninfowindowclose()
        }
    }
};
GMap.prototype.shutInfoWindow = function() {
    this.infoWindow.hide()
};
GMap.prototype.setInfoWindowPos = function(h, g) {
    var f = this.infoWindow.iconClass;
    this.infoWindow.positionAt(h, g, f)
};
GMap.prototype.setInfoWindowSize = function(h, g) {
    this.infoWindow.setFixedSize(h, g)
};
GMap.prototype.setInfoWindowFixed = function(h) {
    this.infoWindow.setFixedStyle(h)
};
GMap.prototype.showinfowindow = function(event) {
    if (this.onshowinfowindow == null) {
        var obj;
        if (this.setoff == true) obj = offset(document.getElementById(_26));
        else obj = offset2(document.getElementById(_26));
        var strTrans = event.args;
        var idx1 = strTrans.indexOf(',');
        var markid = strTrans.substring(0, idx1);
        if (markid == "wmsshutdown") {
            this.shutInfoWindow();
            this.setInfoWinFlag(false);
            return
        }
        var idx2 = strTrans.indexOf(',', idx1 + 1);
        var strx = strTrans.substring(idx1 + 1, idx2);
        var x = parseInt(strx) + obj.left;
        var idx3 = strTrans.indexOf(',', idx2 + 1);
        strx = strTrans.substring(idx2 + 1, idx3);
        var y = parseInt(strx) + obj.top;
        var idx4 = strTrans.indexOf(',', idx3 + 1);
        strx = strTrans.substring(idx3 + 1, idx4);
        var showwin = parseInt(strx);
        var idx5 = strTrans.indexOf(',', idx4 + 1);
        var strFixedWin = parseInt(strTrans.substring(idx4 + 1, idx5));
        idx1 = strTrans.indexOf(',', idx5 + 1);
        var strWidth = parseInt(strTrans.substring(idx5 + 1, idx1));
        idx2 = strTrans.indexOf(',', idx1 + 1);
        var strHeight = parseInt(strTrans.substring(idx1 + 1, idx2));
        if (showwin == 1) {
            this.gshowid = markid;
            var strMsg = strTrans.substring(idx2 + 1);
            if (strFixedWin == 1) {
                this.setInfoWindowFixed(true);
                this.setInfoWindowSize(strWidth, strHeight)
            } else this.setInfoWindowFixed(false);
            this.openInfoWindow(x, y, strMsg, true);
            if (this.onInfoOpened) this.onInfoOpened()
        } else if (markid == this.gshowid) {
            this.setInfoWindowPos(x, y)
        }
    } else {
        this.onshowinfowindow(event)
    }
};
GMap.prototype.setCustomInfoWin = function(d) {
    this.onshowinfowindow = d
};
GMap.prototype.startAnimation = function(a, b, c, d, e) {
    if (!this.canCall("startAnimation", arguments)) return;
    return this.flashProxy.startAnimation(a, b, c, d, e)
};
GMap.prototype.pauseAnimation = function(a) {
    if (!this.canCall("pauseAnimation", arguments)) return;
    return this.flashProxy.pauseAnimation(a)
};
GMap.prototype.resumeAnimation = function(a) {
    if (!this.canCall("resumeAnimation", arguments)) return;
    return this.flashProxy.resumeAnimation(a)
};
GMap.prototype.centerAtMBR = function(a, b, c, d) {
    if (!this.canCall("centerAtMBR", arguments)) return;
    return this.flashProxy.centerAtMBR(b, a, d, c, this.flwidth, this.flhei)
};
GMap.prototype.setSize = function(w, h) {
    this.flwidth = w;
    this.flhei = h
};

function GFontStyle() {}
GFontStyle.prototype.bgColor = 0x000000;
GFontStyle.prototype.showBgColor = false;
GFontStyle.prototype.fontColor = "56ABF1";
GFontStyle.prototype.font = 'Verdana';
GFontStyle.prototype.fontSize = 20;
GFontStyle.prototype.border = 60;
GFontStyle.prototype.borderColor = 40;
GFontStyle.prototype.offsetX = 0;
GFontStyle.prototype.offsetY = 0;

function GStyle() {
    this.fixedStyle = "0"
}
GStyle.prototype.lineColor = 0x006699;
GStyle.prototype.lineOpacity = 100;
GStyle.prototype.fillColor = 0x006699;
GStyle.prototype.lineSize = 2;
GStyle.prototype.fillOpacity = 50;
GStyle.prototype.infoWinHtml = "";
GStyle.prototype.infoTitle = "";
GStyle.prototype.offsetX = 5;
GStyle.prototype.offsetY = 5;
GStyle.prototype.iconSrc = "";
GStyle.prototype.imageInfo = "";
GStyle.prototype.infoWinType = "DIV";
GStyle.prototype.infoWinSwfSrc = "";
GStyle.prototype.infoWinWidth = 200;
GStyle.prototype.infoWinHeight = 150;
GStyle.prototype.dashed = false;
GStyle.prototype.label = "";
GStyle.prototype.maxShownLevel = 0;
GStyle.prototype.showInfoWindow = true;
GStyle.prototype.bgColor = 0xffffff;
GStyle.prototype.showBgColor = false;
GStyle.prototype.fontColor = "56ABF1";
GStyle.prototype.font = 'Verdana';
GStyle.prototype.fontSize = 20;
GStyle.prototype.tagWidth = 60;
GStyle.prototype.tagHeight = 40;
GStyle.prototype.border = false;
GStyle.prototype.borderColor = 0x658938;
GStyle.prototype.fillType = "no_fill_20101114";
GStyle.prototype.setFixedStyle = function(c) {
    if (c == true) this.fixedStyle = "1";
    else this.fixedStyle = "0"
};
GStyle.prototype.setFixedSize = function(c, d) {
    this.infoWinWidth = c;
    this.infoWinHeight = d
};

function GInfoWinOption() {
    this.title = "";
    this.content = "";
    this.borderColor = 23733;
    this.titleFontColor = 16777215;
    this.contentFontColor = 19089;
    this.fillColor = 16777215;
    this.titleFillColor = 23733;
    this.tipWidth = 300;
    this.tipHeight = 175
}
function GMenuItem() {
    this.menuText = null;
    this.functionName = null;
    this.id = null
}
GMap.prototype.addMenuItems = function(a) {
    if (a.length == 0) {
        return null
    }
    if (!this.canCall("addMenuItems", arguments)) {
        return
    } else {
        for (var i = 0; i < a.length; i++) {
            var b = new Object();
            var c = a[i].functionName;
            var d = a[i].menuText;
            var e = a[i].id;
            this.flashProxy.addMenuItem(d, c, e)
        }
    }
};
GMap.prototype.removeMenuItem = function(a) {
    if (!this.isInitialized()) {
        return null
    }
    try {
        alert(a);
        this.flashProxy.removeMenuItem(a)
    } catch (err) {
        return -1
    }
};

function GOverlay(A) {
    this.base = GSuspendedCallList;
    this.base();
    GOverlay.instanceCount++;
    if (A) this.id = A;
    else this.id = GOverlay.instanceCount
}
GOverlay.prototype = new GSuspendedCallList();
GOverlay.TYPE_MARKER = "overly_marker_20080527";
GOverlay.TYPE_POLYLINE = "overly_polyline_20080527";
GOverlay.TYPE_POLYGON = "overly_polygon_20080527";
GOverlay.TYPE_RECT = "overly_RECT_20080820";
GOverlay.TYPE_RIGHTANGLEPOLYGON = "overly_RIGHTANGLEPOLYGON_20100511";
GOverlay.TYPE_CIRCLE = "overly_round_20080820";
GOverlay.TYPE_Ellipse = "overly_ELLIPSE_20080820";
GOverlay.TYPE_REGULARPOLYGON = "overly_REGULAR_POLYGON_20080820";
GOverlay.TYPE_TAG = "overly_TAG_20081216";
GOverlay.TYPE_PIECHART = "overly_PIECHART_20081216";
GOverlay.TYPE_BARCHART = "overly_BARCHART_20081216";
GOverlay.TYPE_CIRCLE_UNION = "overly_CIRCLE_UNION_20110304";
GOverlay.TYPE_RADAR = "overly_radar_20120316";
GOverlay.prototype.type = null;
GOverlay.instanceCount = 0;
GOverlay.prototype.clickEvent = null;
GOverlay.prototype.isWKT = false;

function GMarker(a, b, c, d, e) {
    this.base = GOverlay;
    this.base(d);
    this.type = GOverlay.TYPE_MARKER;
    this.pos = a;
    if (typeof this.pos == "string") this.isWKT = true;
    this.style = c;
    if (b) this.style.label = b;
    if (e) this.divid = e
}
GMarker.prototype = new GOverlay();
GMarker.prototype.pos = null;
GMarker.prototype.style = null;
GMarker.prototype.label = null;

function GPolylineOverlay(C, A, B, a, b) {
    this.base = GOverlay;
    this.base(B);
    this.points = C;
    this.type = GOverlay.TYPE_POLYLINE;
    if (A) this.style = A;
    else this.style = new GStyle();
    if (a) this.unit = a;
    else this.unit = "-1";
    this.bufferwidth = 0;
    if (b) this.bufferwidth = b;
    if (typeof this.points == "string") this.isWKT = true
}
GPolylineOverlay.prototype = new GOverlay();
GPolylineOverlay.prototype.points = null;
GPolylineOverlay.prototype.style = null;
GPolylineOverlay.prototype.getMBR = function() {
    var c = this.points[0];
    var f = new GBounds(c.x, c.y, c.x, c.y);
    for (var b = 0; b < this.points.length; b++) {
        var d = this.points[b];
        f.extend(d)
    }
    return f
};

function GPolygonOverlay(C, A, B) {
    this.base = GOverlay;
    this.base(B);
    this.points = C;
    this.type = GOverlay.TYPE_POLYGON;
    if (A) this.style = A;
    else this.style = new GStyle();
    if (typeof this.points == "string") this.isWKT = true
}
GPolygonOverlay.prototype = new GOverlay();
GPolygonOverlay.prototype.points = null;
GPolygonOverlay.prototype.style = null;

function GCircleUnionOverlay(C, D, A, B) {
    this.base = GOverlay;
    this.base(B);
    this.centerArr = C;
    this.radiusArr = D;
    this.type = GOverlay.TYPE_CIRCLE_UNION;
    if (A) this.style = A;
    else this.style = new GStyle()
}
GCircleUnionOverlay.prototype = new GOverlay();
GCircleUnionOverlay.prototype.points = null;
GCircleUnionOverlay.prototype.style = null;

function GRAPolygonOverlay(C, A, B) {
    this.base = GOverlay;
    this.base(B);
    this.points = C;
    this.type = GOverlay.TYPE_RIGHTANGLEPOLYGON;
    if (A) this.style = A;
    else this.style = new GStyle()
}
GRAPolygonOverlay.prototype = new GOverlay();
GRAPolygonOverlay.prototype.points = null;
GRAPolygonOverlay.prototype.style = null;

function GCircleOverlay(C, A, B, D, a) {
    this.base = GOverlay;
    this.base(D);
    this.center = C;
    this.radius = A;
    this.type = GOverlay.TYPE_CIRCLE;
    if (B) this.style = B;
    else this.style = new GStyle();
    if (a) this.unit = a
}
GCircleOverlay.prototype = new GOverlay();
GCircleOverlay.prototype.style = null;
GCircleOverlay.prototype.center = null;
GCircleOverlay.prototype.radius = null;

function GRectOverlay(A, C, B, D) {
    this.base = GOverlay;
    this.base(D);
    this.topLeft = A;
    this.bottomRight = C;
    this.type = GOverlay.TYPE_RECT;
    if (B) this.style = B;
    else this.style = new GStyle()
}
GRectOverlay.prototype = new GOverlay();
GRectOverlay.prototype.style = null;
GRectOverlay.prototype.topLeft = null;
GRectOverlay.prototype.bottomRight = null;

function GEllipseOverlay(A, C, B, D) {
    this.base = GOverlay;
    this.base(D);
    this.topLeft = A;
    this.bottomRight = C;
    this.type = GOverlay.TYPE_Ellipse;
    if (B) this.style = B;
    else this.style = new GStyle()
}
GEllipseOverlay.prototype = new GOverlay();
GEllipseOverlay.prototype.style = null;
GEllipseOverlay.prototype.topLeft = null;
GEllipseOverlay.prototype.bottomRight = null;

function GRegularPolygonOverlay(C, A, B, D) {
    this.base = GOverlay;
    this.base(D);
    this.center = C;
    this.radius = A;
    this.type = GOverlay.TYPE_REGULARPOLYGON;
    if (B) this.style = B;
    else this.style = new GStyle()
}
GRegularPolygonOverlay.prototype = new GOverlay();
GRegularPolygonOverlay.prototype.style = null;
GRegularPolygonOverlay.prototype.center = null;
GRegularPolygonOverlay.prototype.radius = null;

function GTag(a, b, c, d) {
    this.base = GOverlay;
    this.base(d);
    this.type = GOverlay.TYPE_TAG;
    this.pos = a;
    this.style = c;
    if (b) this.style.label = b
}
GTag.prototype = new GOverlay();
GTag.prototype.pos = null;
GTag.prototype.style = null;
GTag.prototype.label = null;

function GPieChart(a, b, c, d) {
    this.base = GOverlay;
    this.base(d);
    this.type = GOverlay.TYPE_PIECHART;
    this.pos = a;
    this.style = c;
    this.title = b
}
GPieChart.prototype = new GOverlay();
GPieChart.prototype.pos = null;
GPieChart.prototype.style = null;
GPieChart.prototype.title = null;
GPieChart.prototype.legend = null;
GPieChart.prototype.pieData = null;
GPieChart.prototype.radius = null;
GPieChart.prototype.httpLink = null;
GPieChart.prototype.legendColor = null;
GPieChart.prototype.showLegend = true;

function GBarChart(a, b, c, d) {
    this.base = GOverlay;
    this.base(d);
    this.type = GOverlay.TYPE_BARCHART;
    this.pos = a;
    this.style = c;
    this.title = b
}
GBarChart.prototype = new GOverlay();
GBarChart.prototype.pos = null;
GBarChart.prototype.style = null;
GBarChart.prototype.title = null;
GBarChart.prototype.legend = null;
GBarChart.prototype.barData = null;
GBarChart.prototype.xAxis = null;
GBarChart.prototype.httpLink = null;
GBarChart.prototype.legendColor = null;
GBarChart.prototype.showLegend = true;
GIcon.instanceCount = 0;

function GIcon(a, b, c) {
    GIcon.instanceCount++;
    if (c) {
        this.id = c
    } else {
        this.id = GIcon.instanceCount
    }
    this.pos = a;
    this.style = b
}
GIcon.prototype.pos = null;
GIcon.prototype.style = null;
GIcon.prototype.id = null;
var g_jbcom = null;
var onmissingStageTimer = null;
var onMapZoomedTimer = null;
var onMapZooming = false;
var resizeTimer = null;
var onfocusTimer = null;
var jbsetfocusTimer = null;
var g_jbcodestr = null;
var GFillType = {};
GFillType.NO_FILL = "no_fill_20101114";
GFillType.SOLID_FILL = "solid_fill_20101114";
GFillType.HORIZONTAL_FILL = "horizontal_fill_20101114";
GFillType.VERTICAL_FILL = "vertical_fill_20101114";
GFillType.GRID_FILL = "grid_fill_20101114";
GFillType.DIAGONAL_FILL = "diagonal_fill_20101114";
GFillType.REVERSE_DIAGONAL_FILL = "reverse_diagonal_fill_20101114";
GFillType.DIAGONAL_GRID_FILL = "diagonal_grid_fill_20101114";
GFillType.LINEAR_GRADIENT_FILL = "linear_gradient_fill_20101203";
GFillType.RADIAL_GRADIENT_FILL = "radial_gradient_fill_20101203";
var GArrowTailStyle = {};
GArrowTailStyle.NO_TAIL = "NO_TAIL_20101109";
GArrowTailStyle.LINE_TAIL = "LINE_TAIL_20101109";
GArrowTailStyle.ANGLE_TAIL = "ANGLE_TAIL_20101114";
var GProjType = {};
GProjType.MERC_PROJECT = " proj=merc";
GProjType.LONLAT_PROJECT = " proj=longlat";
var GradientDictionary = {};
GradientDictionary.THERMAL = "THERMAL";
GradientDictionary.RAINBOW = "RAINBOW";
GradientDictionary.RED_WHITE_BLUE = "RED_WHITE_BLUE";

function GHotMapOverlay(C, D, A, B, a) {
    this.base = GOverlay;
    this.base(B);
    this.radius = D;
    this.centerArr = C;
    this.radiusArr = a;
    this.type = GOverlay.TYPE_CIRCLE_UNION;
    if (A) this.style = A;
    else this.style = new GStyle()
}
GHotMapOverlay.prototype = new GOverlay();
GHotMapOverlay.prototype.points = null;
GHotMapOverlay.prototype.style = null;

function add_zero(a) {
    if (a < 10) return "0" + a;
    else return a
}
function getTimeStr() {
    var a = new Date();
    return "" + a.getYear() + add_zero(a.getMonth() + 1) + add_zero(a.getDate()) + add_zero(a.getHours()) + add_zero(a.getMinutes()) + add_zero(a.getSeconds())
}
function OnDraw() {
    if (g_jbcom != null && g_jsjbCom.mapobj != null) {
        var a = g_jsjbCom.mapobj.getBounds();
        g_jbcom.SetExtent(a.minX, a.minY, a.maxX, a.maxY, a.rate);
        g_jbcom.OnDraw(0)
    }
}
function OnZoomDraw() {
    g_jbcom.OnDraw(0);
    onMapZooming = false
}
function on_Resize() {
    if (resizeTimer) window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout("OnDraw()", 100)
}
function on_Focus() {
    if (onfocusTimer) window.clearTimeout(onfocusTimer);
    onfocusTimer = window.setTimeout("OnDraw()", 100)
}
var g_isJBinited = false;

function GJbCom(a) {
    this.mapobj = a;
    this.offx = 0;
    this.offy = 0;
    this.width = 0;
    this.height = 0
}
GJbCom.prototype.AddJB = function() {
    this.mapobj.disableDragging();
    this.mapobj.disableDoubleClickZoom();
    g_jbcom.Operation = 1;
    g_jbcom.AddMilSymbol()
};
GJbCom.prototype.AddJbByTypeId = function(a, b) {
    this.mapobj.disableDragging();
    this.mapobj.disableDoubleClickZoom();
    g_jbcom.AddMilSymbol2(a, b)
};
GJbCom.prototype.ConfigPlay = function() {
    this.mapobj.disableDragging();
    this.mapobj.disableDoubleClickZoom();
    g_jbcom.ConfigPlay()
};
GJbCom.prototype.SetOperationJB = function(a) {
    if (a == -1) {
        this.mapobj.enableDragging();
        this.mapobj.enableDoubleClickZoom();
        g_jbcom.Operation = 0
    } else if (a == 5) {
        this.mapobj.disableDragging();
        g_jbcom.Operation = 5
    } else if (a == 3) {
        g_jbcom.Operation = 3;
        g_jbcom.DeleteMilSymbols()
    } else if (a == 2) {
        this.mapobj.disableDragging();
        g_jbcom.Operation = 2;
        g_jbcom.EditMilSymbol()
    } else if (a == 4) {
        this.mapobj.disableDragging();
        this.mapobj.disableDoubleClickZoom();
        g_jbcom.Operation = 4
    } else if (a == 6) {
        this.mapobj.disableDragging();
        this.mapobj.disableDoubleClickZoom();
        g_jbcom.Operation = 6
    } else if (a == 7) {
        this.mapobj.disableDragging();
        this.mapobj.disableDoubleClickZoom();
        g_jbcom.Operation = 7
    } else if (a == 8) {
        this.mapobj.disableDragging();
        g_jbcom.Operation = 8
    } else if (a == 9) {
        this.mapobj.disableDragging();
        g_jbcom.Operation = 9
    } else if (a == 10) {
        this.mapobj.disableDragging();
        g_jbcom.Operation = 10
    }
};
GJbCom.prototype.PlayMilSymbol = function() {
    if (g_jbcom != null) g_jbcom.PlayMilSymbol()
};
GJbCom.prototype.StartPlay = function() {
    if (g_jbcom != null) g_jbcom.StartPlay()
};
GJbCom.prototype.StopPlay = function() {
    if (g_jbcom != null) g_jbcom.StopPlay()
};
GJbCom.prototype.PauseJBPlay = function() {
    if (g_jbcom != null) g_jbcom.PauseJBPlay(0)
};
GJbCom.prototype.ContinueJBPlay = function() {
    if (g_jbcom != null) g_jbcom.ContinueJBPlay(0)
};
GJbCom.prototype.undo = function() {
    if (g_jbcom != null) g_jbcom.UndoDelete()
};
GJbCom.prototype.redo = function() {
    if (g_jbcom != null) g_jbcom.redo()
};
GJbCom.prototype.SaveJBToFile = function(a) {
    if (g_jbcom != null) g_jbcom.SaveToFile(a)
};
GJbCom.prototype.ReadJBFromFile = function(a) {
    if (g_jbcom != null) g_jbcom.OpenLayerFromFile(a)
};
GJbCom.prototype.DeleteAllSymbols = function() {
    if (g_jbcom != null) g_jbcom.DeleteAllSymbols()
};
GJbCom.prototype.SaveJBToStr = function() {
    var a = "";
    if (g_jbcom != null) {
        a = g_jbcom.SaveJBToStr()
    }
    return a
};
GJbCom.prototype.ReadJBFromStr = function(a) {
    if (g_jbcom != null) {
        g_jbcom.ReadStrToJB(a)
    }
};
GJbCom.prototype.RedrawJB = function() {
    if (onmissingStageTimer) window.clearTimeout(onmissingStageTimer);
    onmissingStageTimer = window.setTimeout("OnDraw()", 100)
};
GJbCom.prototype.SetOffset = function(a, b) {
    this.offx = a;
    this.offy = b
};
GJbCom.prototype.SetSize = function(a, b) {
    this.width = a;
    this.height = b
};
GJbCom.prototype.GetJb = function() {
    return g_jbcom
};
GJbCom.prototype.EditJBProperty = function(a) {
    var b = parseInt((a.split(','))[5]);
    var c = parseInt((a.split(','))[6]);
    var x = b + this.offx;
    var y = c + this.offy;
    g_jbcom.EditMilSymbolAttr(x, y)
};
GJbCom.prototype.SelectSymbol = function(a) {
    if (jbsetfocusTimer != null) window.clearTimeout(jbsetfocusTimer);
    g_jbcodestr = a;
    jbsetfocusTimer = window.setTimeout("SetJBSymbolSelected()", 100)
};
GJbCom.prototype.ClearJBPlayTree = function() {
    g_jbcom.AddSpeed()
};

function SetJBSymbolSelected() {
    if (jbsetfocusTimer != null) window.clearTimeout(jbsetfocusTimer);
    jbsetfocusTimer = null;
    g_jbcom.SetSymbolSelected(g_jbcodestr, 1)
};
var g_jsjbCom;
GMap.prototype.initjb = function(a) {
    if (g_isJBinited == false) {
        g_jbcom = a;
        this.flashProxy.addJbCom();
        this.addEventListener("onStageMouseDown", this.onStageMouseDown, this);
        this.addEventListener("onStageMouseMove", this.onStageMouseMove, this);
        this.addEventListener("onStageMouseUp", this.onStageMouseUp, this);
        this.addEventListener("onMoveEnd", this.onMoveEnd, this);
        this.addEventListener("onMapZoomed", this.onMapZoomed, this);
        this.addEventListener("missingStage", this.missingStage, this);
        this.addEventListener("onStageMouseDoubleDown", this.onStageMouseDoubleDown, this);
        g_jbcom.InitMilSymData(0, "");
        var b = this.getBounds();
        g_jbcom.SetExtent(b.minX, b.minY, b.maxX, b.maxY, b.rate);
        window.onresize = on_Resize;
        window.onblur = on_Focus;
        window.onfocus = on_Focus;
        g_isJBinited = true;
        g_jsjbCom = new GJbCom(this)
    }
    if (g_jbcom != null && g_isJBinited == true && g_jbcom.IsInFlash() == 1) {
        var c = offset(document.getElementById(_26));
        g_jsjbCom.SetOffset(c.left, c.top);
        g_jsjbCom.SetSize(this.flashProxy.offsetWidth, this.flashProxy.offsetHeight);
        g_jbcom.SetViewClip(c.left, c.top, this.flashProxy.offsetWidth, this.flashProxy.offsetHeight)
    }
    return g_jsjbCom
};
GMap.prototype.destroyjb = function() {
    if (g_isJBinited == true) {
        this.flashProxy.removeJbCom();
        this.removeEventListener("onStageMouseDown", this.onStageMouseDown, this);
        this.removeEventListener("onStageMouseMove", this.onStageMouseMove, this);
        this.removeEventListener("onStageMouseUp", this.onStageMouseUp, this);
        this.removeEventListener("onMoveEnd", this.onMoveEnd, this);
        this.removeEventListener("onMapZoomed", this.onMapZoomed, this);
        this.removeEventListener("missingStage", this.missingStage, this);
        this.removeEventListener("onStageMouseDoubleDown", this.onStageMouseDoubleDown, this);
        window.onresize = null;
        window.onblur = null;
        window.onfocus = null;
        g_isJBinited = false
    }
};
GMap.prototype.onStageMouseDown = function(a) {
    var x = parseInt((a.args.split(','))[0]) + g_jsjbCom.offx;
    var y = parseInt((a.args.split(','))[1]) + g_jsjbCom.offy;
    switch (g_jbcom.Operation) {
    case 1:
        g_jbcom.DesignMilSymbol(0x0201, x, y);
        break;
    case 2:
        g_jbcom.DesignMilSymbol(0x0201, x, y);
        break;
    case 5:
        g_jbcom.PickOneMilSymbol(x, y);
        break;
    case 6:
        g_jbcom.PickMilSymbols(0x0201, x, y, 1);
        break;
    case 7:
        g_jbcom.PickMilSymbols(0x0201, x, y, 2);
        break;
    case 9:
        g_jbcom.PasteMilSymbols(x, y);
        break;
    case 10:
        g_jbcom.MoveMilSymbols(x, y);
        break
    }
};
GMap.prototype.onStageMouseMove = function(a) {
    var x = parseInt((a.args.split(','))[0]) + g_jsjbCom.offx;
    var y = parseInt((a.args.split(','))[1]) + g_jsjbCom.offy;
    switch (g_jbcom.Operation) {
    case 1:
        g_jbcom.DesignMilSymbol(0x0200, x, y);
        break;
    case 2:
        g_jbcom.DesignMilSymbol(0x0200, x, y);
        break;
    case 6:
        g_jbcom.PickMilSymbols(0x0200, x, y, 1);
        break;
    case 7:
        g_jbcom.PickMilSymbols(0x0200, x, y, 2);
        break
    }
};
GMap.prototype.onStageMouseUp = function(a) {
    var x = parseInt((a.args.split(','))[0]) + g_jsjbCom.offx;
    var y = parseInt((a.args.split(','))[1]) + g_jsjbCom.offy;
    switch (g_jbcom.Operation) {
    case 1:
        g_jbcom.DesignMilSymbol(0x0202, x, y);
        break;
    case 2:
        g_jbcom.DesignMilSymbol(0x0202, x, y);
        break;
    case 6:
        g_jbcom.PickMilSymbols(0x0202, x, y, 1);
        break;
    case 7:
        g_jbcom.PickMilSymbols(0x0202, x, y, 2);
        break
    }
};
GMap.prototype.onStageMouseDoubleDown = function(a) {
    var x = parseInt((a.args.split(','))[0]) + g_jsjbCom.offx;
    var y = parseInt((a.args.split(','))[1]) + g_jsjbCom.offy;
    switch (g_jbcom.Operation) {
    case 1:
        g_jbcom.DesignMilSymbol(0x0203, x, y);
        break;
    case 4:
        g_jbcom.EditMilSymbolAttr(x, y);
        break
    }
};
GMap.prototype.missingStage = function(a) {
    if (onmissingStageTimer) window.clearTimeout(onmissingStageTimer);
    onmissingStageTimer = window.setTimeout("OnDraw()", 100)
};
GMap.prototype.onMoveEnd = function(a) {
    if (!onMapZooming) {
        if (onmissingStageTimer) window.clearTimeout(onmissingStageTimer);
        onmissingStageTimer = window.setTimeout("OnDraw()", 100)
    }
};
GMap.prototype.onMapZoomed = function(a) {
    onMapZooming = true;
    var b = mapObj.getBounds();
    g_jbcom.SetExtent(b.minX, b.minY, b.maxX, b.maxY, b.rate);
    if (onMapZoomedTimer) window.clearTimeout(onMapZoomedTimer);
    onMapZoomedTimer = window.setTimeout("OnZoomDraw()", 2000)
};
GMap.prototype.onFinished = function(a) {
    if (g_jbcom != null) {
        g_jbcom.InitMilSymData(0, "");
        var b = this.getBounds();
        g_jbcom.SetExtent(b.minX, b.minY, b.maxX, b.maxY, b.rate)
    }
};

function PointInPolygon(a, b) {
    if (b.length <= 2) {
        return false
    }
    var c = 0;
    var d = b[b.length - 1].x;
    var e = b[b.length - 1].y;
    var f;
    var g;
    for (var i = 0; i < b.length; d = f, e = g, i++) {
        f = b[i].x;
        g = b[i].y;
        if (g == e) {
            continue
        }
        var h;
        if (f < d) {
            if (a.x >= d) {
                continue
            }
            h = f
        } else {
            if (a.x >= f) {
                continue
            }
            h = d
        }
        var j;
        var k;
        if (g < e) {
            if ((a.y < g) || (a.y >= e)) {
                continue
            }
            if (a.x < h) {
                c++;
                continue
            }
            j = a.x - f;
            k = a.y - g
        } else {
            if ((a.y < e) || (a.y >= g)) {
                continue
            }
            if (a.x < h) {
                c++;
                continue
            }
            j = a.x - d;
            k = a.y - e
        }
        if (j < (k / (e - g) * (d - f))) {
            c++
        }
    }
    return ((c & 1) != 0)
};
GMap.prototype.isInsidePolygon = function(a, b) {
    if (!this.canCall("shapeInRegion", arguments)) return false;
    return this.flashProxy.shapeInRegion(a, b)
};
GMap.prototype.getVersion = function() {
    if (!this.canCall("getVersion", arguments)) return false;
    return this.flashProxy.getVersion() + " jsver=1.1.1"
};
GMap.prototype.addLargePolygon = function(a, b, c, d) {
    if (!this.canCall("addLargePolygon", arguments)) return false;
    return this.flashProxy.addLargePolygon(a, b, c, d, 0)
};
GMap.prototype.addCaijiPolygon = function(a, b, c, d) {
    if (!this.canCall("addLargePolygon", arguments)) return false;
    return this.flashProxy.addLargePolygon(a, b, c, d, 1)
};
GMap.prototype.convertData = function(a) {
    if (!this.canCall("addLargePolygon", arguments)) return false;
    return this.flashProxy.addLargePolygon("-1", a, "-1", null)
};
GMap.prototype.addThematicMapByXML = function(a, b) {
    if (!this.canCall("addThematicMapByXML", arguments)) return false;
    return this.flashProxy.addThematicMapByXML(a, b)
};
GMap.prototype.setWMSMapLayer = function(a, b) {
    if (!this.canCall("setLiveMapLayer", arguments)) return;
    var c = null;
    if (b != null) c = "<theme><type>wms</type><imgurl>" + a + "</imgurl><trans>" + b + "</trans></theme>";
    else c = "<theme><type>wms</type><imgurl>" + a + "</imgurl></theme>";
    this.flashProxy.setLiveMapLayer(c)
};
GMap.prototype.addMapByThematicSvr = function(a, b, c, d) {
    if (!this.canCall("setLiveMapLayer", arguments)) return;
    var e = "<theme><type>0</type><bbox>" + a + "</bbox><imgurl>" + b + "</imgurl><info>" + c + "</info><queryurl>" + d + "</queryurl></theme>";
    this.flashProxy.setLiveMapLayer(e)
};
GMap.prototype.startDrawBezier = function(a, b, c) {
    if (!this.canCall("startDrawPolygon", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("bezier_" + d.id, GMap.OVERLAY_TYPE_BEZIER, a, b, true, c)
};
GMap.prototype.startDrawCurve = function(a, b, c) {
    if (!this.canCall("startDrawPolygon", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("polylineCurve_" + d.id, GMap.OVERLAY_TYPE_POLYLINE_CURVE, a, b, true, c)
};
GMap.prototype.startDrawEncirclement = function(a, b, c) {
    if (!this.canCall("startDrawPolygon", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("encircle_" + d.id, GMap.OVERLAY_TYPE_ENCIRCLEMENT, a, b, true, c)
};
GMap.prototype.startDrawLineArrow = function(a, b, c) {
    if (!this.canCall("startDrawPolygon", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("lineArrow_" + d.id, GMap.OVERLAY_TYPE_LINE_ARROW, a, b, true, c)
};
GMap.prototype.startDrawDoubleArrow = function(a, b, c) {
    if (!this.canCall("startDrawPolygon", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("doubleArrow_" + d.id, GMap.OVERLAY_TYPE_DOUBLE_ARROW, a, b, true, c)
};
GMap.prototype.startDrawCurveArrow = function(a, b, c) {
    if (!this.canCall("startDrawPolygon", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("curveArrow_" + d.id, GMap.OVERLAY_TYPE_CURVE_ARROW, a, b, true, c)
};
GMap.prototype.startDrawThreePointArrow = function(a, b, c) {
    if (!this.canCall("startDrawPolygon", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("threePointArrow_" + d.id, GMap.OVERLAY_TYPE_THREE_POINT_ARROW, a, b, true, c)
};
GMap.prototype.startDrawHasTailCurveArrow = function(a, b, c) {
    if (!this.canCall("startDrawPolygon", arguments)) return;
    var d = new GOverlay();
    this.startDrawOverlay("hasTailCurveArrow_" + d.id, GMap.OVERLAY_TYPE_HAS_TAIL_CURVE_ARROW, a, b, true, c)
};
var overendHash = new GHash();
GMap.prototype.setEndAnimationCallback = function(a, b) {
    if (b != null) {
        this.flashProxy.setEndAnimationCallback(a, 1, 0);
        overendHash.add(a, b)
    }
};
GMap.prototype.endOverlayAnimation = function(a) {
    var b = a.args;
    var c = overendHash.find(b);
    if (c != null) {
        c(b);
        overendHash.remove(b);
        midfuncHash.remove(b)
    }
};
var midfuncHash = new GHash();
GMap.prototype.setMidAnimationCallback = function(a, b) {
    if (b != null) {
        this.flashProxy.setEndAnimationCallback(a, 1, 1);
        midfuncHash.add(a, b)
    }
};
GMap.prototype.midOverlayAnimation = function(a) {
    var b = a.args;
    var c = a.args.split(',')[0];
    var d = midfuncHash.find(c);
    if (d != null) {
        d(b)
    }
};
GMap.prototype.addFixedMark = function(a, b, c, d, e, f) {
    if (!this.canCall("addFixedMark", arguments)) return;
    var g = this.flashProxy.addFixedMark(a, b, c, d, e, 0);
    if (f != null) {
        overendHash.add(a, f)
    }
    return g
};
GMap.prototype.onFixedOverlayUp = function(a) {
    var b = a.args;
    var c = b.indexOf(',');
    var d = b.substring(c + 1);
    var e = overendHash.find(d);
    if (e != null) {
        e(d)
    }
};
GMap.prototype.removeFixedMark = function(a) {
    if (!this.canCall("removeFixedMark", arguments)) return;
    overendHash.remove(a);
    return this.flashProxy.removeFixedMark(a)
};
GMap.prototype.addLegend = function(a, b, c, d, e, f) {
    if (!this.canCall("addFixedMark", arguments)) return;
    return this.flashProxy.addFixedMark(a, b, d, e, c, 1, f)
};
GMap.prototype.startDrawFxgSymbol = function(a, b, c, d, e) {
    if (!this.canCall("startDrawOverlay", arguments)) return;
    var f = getTimeStr();
    var g = new GOverlay(f);
    var s = c.symbolType;
    if (s == ".pxg") {
        b.strParam = "<strParam>";
        b.strParam += "<fxgSymbolURL>" + c.symbolUrl + "</fxgSymbolURL>";
        b.strParam += "<label>" + c.symbolLabel + "</label>";
        b.strParam += "</strParam>";
        this.startDrawOverlay("pt_" + g.id, GMap.FXG_SYMBOL, a, b, true, e)
    } else if (s == ".png" || s == ".gif" || s == ".jpg" || s == ".swf") {
        b.strParam = "<strParam>";
        b.strParam += "<picSymbolURL>" + c.symbolUrl + "</picSymbolURL>";
        b.strParam += "<label>" + c.symbolLabel + "</label>";
        b.strParam += "</strParam>";
        this.startDrawOverlay("img_" + g.id, GMap.PIC_SYMBOL, a, b, true, e)
    } else if (s == ".xml") {
        b.strParam = "<strParam>";
        b.strParam += "<linearSymbolURL>" + c.symbolUrl + "</linearSymbolURL>";
        b.strParam += "<label>" + c.symbolLabel + "</label>";
        b.strParam += d;
        b.strParam += "</strParam>";
        this.startDrawOverlay("ln_" + g.id, "overly_POLYLINE_SYMBOL_20110105", a, b, true, e)
    } else if (s == ".cut") {
        b.strParam = "<strParam>";
        b.strParam += "<polylineSymbolType>" + c.symbolFCall + "</polylineSymbolType>";
        b.strParam += "<label>" + c.symbolLabel + "</label>";
        b.strParam += d;
        b.strParam += "</strParam>";
        this.startDrawOverlay("poly_" + g.id, "overly_POLYLINE_SYMBOL_20110105", a, b, true, e)
    }
};
GMap.prototype.redrawAllOverlays = function(a) {
    if (!this.canCall("resetOverlayStyle", arguments)) return;
    if (a == null) this.flashProxy.addThematicMapByXML("-100", null);
    else if (a == false) this.flashProxy.addThematicMapByXML("-101", null);
    else if (a == true) this.flashProxy.addThematicMapByXML("-102", null)
};
GMap.prototype.redrawOverlayId = function(a) {
    if (!this.canCall("resetOverlayStyle", arguments)) return;
    this.flashProxy.addThematicMapByXML("-102", a)
};

function GPS() {}
GPS.prototype.isDrawPt = true;
GPS.prototype.isDrawLine = true;
GPS.prototype.redrawFlag = true;
GPS.prototype.isShowLabel = false;
GPS.prototype.isPtFill = true;
GPS.prototype.isPtAdjust = false;
GPS.prototype.isPtShowLabel = false;
GPS.prototype.isPtShowArrow = false;
GPS.prototype.maxpts = 50;
GPS.prototype.lineStyle = null;
GPS.prototype.ptColor = 0xFF0000;
GPS.prototype.ptFillColor = 0x0000FF;
GPS.prototype.ptSize = 3;
GPS.prototype.ptType = 0;

function GPSPoint() {}
GPSPoint.prototype.id = "";
GPSPoint.prototype.label = "";
GPSPoint.prototype.tipInfo = "";
GPSPoint.prototype.point = "0,0";
GPSPoint.prototype.order = 0;
GPSPoint.prototype.isOnline = true;
GPSPoint.prototype.course = -1000;
GMap.prototype.resetGPSStyle = function(a, b) {
    var c = 2;
    var d = 0;
    if (b.isDrawPt == true) d = 1;
    if (b.isDrawLine == true) d = d | 2;
    if (b.isShowLabel == true) d = d | 4;
    if (b.isPtFill == true) d = d | 8;
    if (b.isPtAdjust == true) d = d | 16;
    if (b.isPtShowLabel == true) d = d | 32;
    if (b.isPtShowArrow == true) d = d | 64;
    var e = "" + d + "," + b.maxpts + "," + b.ptColor + "," + b.ptFillColor + "," + b.ptSize;
    this.flashProxy.resetOverlayStyle(a, e, c, "", "")
};
GMap.prototype.changeGPSMaxPts = function(a, b) {
    if (!this.canCall("resetGPSStyle", arguments)) return 0;
    var c = 3;
    this.flashProxy.resetOverlayStyle(a, "" + b, c, "", "")
};
GMap.prototype.addGPSPointToLine = function(a) {
    if (!this.canCall("resetOverlayStyle", arguments)) return;
    var b = 11;
    strParam = a.point + "," + a.order + ",";
    if (a.isOnline) strParam = strParam + "1";
    else strParam = strParam + "0";
    if (a.course != -1000) strParam = strParam + "," + a.course;
    this.flashProxy.resetOverlayStyle(a.id, strParam, b, a.label, a.tipInfo)
};
GMap.prototype.isGPSLineExist = function(a) {
    if (this.getOverlay(a) == null) return false;
    else return true
};
GMap.prototype.createGPSLine = function(a, b) {
    if (!this.canCall("resetOverlayStyle", arguments)) return;
    if (b.lineStyle != null) {
        b.lineStyle.iconSrc = "GPS";
        var c = new GPolylineOverlay([], b.lineStyle, a);
        this.addOverlay(c);
        this.resetGPSStyle(a, b)
    }
};
GMap.prototype.initGPSImage = function(a) {
    this.addThematicMapByXML("-200", a)
};
GMap.prototype.fly = function(a, b, c, d) {
    if (!this.canCall("fly", arguments)) return;
    this.flashProxy.fly(a, b, c, d)
};
GMap.prototype.getDistance = function(a, b) {
    if (!this.canCall("getDistance", arguments)) return 0;
    return this.flashProxy.getDistance(a, b)
};
GMap.prototype.isPtInCircle = function(a, b, c) {
    if (!this.canCall("getDistance", arguments)) return false;
    var h = this.getDistance(a, b);
    if (h < c) return true;
    return false
};
GMap.prototype.getLatLonDistance = function(a, b, c, d) {
    var e = 0.017453292519943295;
    var h = (d - b) * e;
    var g = (c - a) * e;
    var f = Math.sin(0.5 * g) * Math.sin(0.5 * g) + Math.cos(a * e) * Math.cos(c * e) * (Math.sin(0.5 * h) * Math.sin(0.5 * h));
    f = Math.abs(f);
    var m = 2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f));
    var k = m * 6371008.77141506;
    k = Math.ceil(k);
    return k
};
GMap.prototype.printMap = function() {
    if (!this.canCall("printMap", arguments)) return;
    this.flashProxy.printMap(null)
};
GMap.prototype.addPolygonBuffer = function(a, b, d, e, f, h) {
    var g = b.split(",");
    var i = new Array();
    for (var c = 0; c < g.length; c++) {
        var j = parseFloat(g[c]);
        var k = parseFloat(g[c + 1]);
        var l = new GPoint(j, k);
        i.push(l);
        c++
    }
    var m = new GStyle();
    m.lineColor = d;
    m.dashed = false;
    m.lineOpacity = e;
    m.showInfoWindow = false;
    var n = new GPolylineOverlay(i, m, a, f, h * 2);
    n.editable = false;
    var o = n.getMBR();
    this.addOverlay(n)
};
var _27 = 0.017453292519943295;
GMap.prototype.CalculateCoordinate = function(g) {
    var f;
    var c = g.point_Y * _27;
    var h = Math.sin(c);
    var d = g.point_X * _27;
    var b = 0.081819190842622 * h;
    var f = (1 - 0.00669437999014138) * (h / (1 - b * b) - (1 / (2 * 0.081819190842622)) * Math.log((1 - b) / (1 + b)));
    var a = new Object();
    a.x = 6378137 * f / 2;
    a.y = 6378137 * d;
    return a
};
GMap.prototype.CalculateArea = function(b) {
    var g = b.length;
    var f = 0;
    var h = b[0];
    h = this.CalculateCoordinate(h);
    for (var d = 1; d < g; d++) {
        pt1 = b[d];
        pt1 = this.CalculateCoordinate(pt1);
        f += (pt1.x - h.x) * (pt1.y + h.y) / 2;
        h = pt1
    }
    return Math.abs(f)
};
GMap.prototype.GetArea = function(b) {
    var a = new Array();
    a.push(b[0]);
    a.push(b[0]);
    var g = b.length;
    for (var k = 0; k < g; k++) {
        a.push(b[k])
    }
    a.push(b[0]);
    var c = this.CalculateArea(a);
    return c
};
GMap.prototype.SaveAllSymbols = function() {
    if (!this.canCall("setJBOperation", arguments)) return "";
    return this.flashProxy.setJBOperation("SAVETOSTR", "")
};
GMap.prototype.testFunc = function(a) {
    if (!this.canCall("testFunc", arguments)) return "";
    return this.flashProxy.testFunc(a)
};
GMap.prototype.centerByOverlay = function(a) {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(3001, a)
};
GMap.prototype.isPtInPolygon = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return false;
    var c = this.flashProxy.setOperation(2001, a, b);
    if (c == "0") return false;
    else return true
};
GMap.prototype.isMultiPtInPolygon = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return false;
    var c = this.flashProxy.setOperation(2004, a, b);
    return c
};
GMap.prototype.isMultiPtInCircle = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return false;
    var c = this.flashProxy.setOperation(2005, a, b);
    return c
};
GMap.prototype.isMultiPtInCircleByID = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return false;
    var c = this.flashProxy.setOperation(2006, a, b);
    return c
};
GMap.prototype.isPtInShape = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return false;
    var c = this.flashProxy.setOperation(2002, a, b);
    if (c == "0") return false;
    else return true;
    return c
};
GMap.prototype.GetAreaById = function(a) {
    if (!this.canCall("setOperation", arguments)) return false;
    var b = this.flashProxy.setOperation(2003, a);
    return parseFloat(b)
};
GMap.prototype.isPtInPolylineBuf = function(a, b, c) {
    if (!this.canCall("setOperation", arguments)) return false;
    var d = this.flashProxy.setOperation(4001, a + "," + c, b);
    return d
};
GMap.prototype.isPtInPolygonBuf = function(a, b, c) {
    if (!this.canCall("setOperation", arguments)) return false;
    var d = this.flashProxy.setOperation(4002, a + "," + c, b);
    return d
};
GMap.prototype.changeMapProj = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(1001, a, b)
};
GMap.prototype.openInfoWindowInPos = function(x, y, a) {
    var b = this.getContainerXY(x, y);
    var c;
    if (this.setoff == true) c = offset(document.getElementById(_26));
    else c = offset2(document.getElementById(_26));
    this.openInfoWindow(b.x + c.left, b.y + c.top, a);
    this.setInfoWinFlag(true)
};
GMap.prototype.SaveJBToStr = function() {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5001, "")
};
GMap.prototype.SaveSymbolById = function(a) {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5012, a)
};
GMap.prototype.LoadSymbol = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5013, a, b)
};
GMap.prototype.SaveJBPlayinfoToStr = function() {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5002, "")
};
GMap.prototype.ReadJBFromStr = function(a) {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5003, a)
};
GMap.prototype.ReadJBPlayinfoFromStr = function(a) {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5004, a)
};
GMap.prototype.StartPlay = function() {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5005, "")
};
GMap.prototype.StopPlay = function() {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5006, "")
};
GMap.prototype.ResumePlay = function() {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5007, "")
};
GMap.prototype.PausePlay = function() {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5008, "")
};
GMap.prototype.DeleteAllSymbols = function() {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5009, "")
};
GMap.prototype.DeletePlayinfo = function() {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(5010, "")
};
GMap.prototype.getPixelDist = function(a) {
    if (!this.canCall("setOperation", arguments)) return 0;
    var b = this.flashProxy.setOperation(2010, "" + a);
    return parseFloat(b)
};
GMap.prototype.setInfoWinFlag = function(a) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(6000, "" + a)
};
GMap.prototype.copySymbol = function() {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(5011, "copySymbol")
};
GMap.prototype.pasteSymbol = function() {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(5011, "pasteSymbol")
};
GMap.prototype.symbolProp = function() {
    if (!this.canCall("setOperation", arguments)) return 0;
    return this.flashProxy.setOperation(5011, "symbolProp")
};
GMap.prototype.animateProp = function() {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(5011, "animateProp")
};
GMap.prototype.centerAtData = function(a, b) {
    if (b == null) b = "19";
    if (!this.canCall("setOperation", arguments)) return 0;
    return this.flashProxy.setOperation(3002, a, b)
};
GMap.prototype.setOvelayGlow = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(3003, a, b)
};
GMap.prototype.connectServer = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(6100, a, "" + b)
};
GMap.prototype.disconnectServer = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(6200, a, "" + b)
};
GMap.prototype.sendSocketInfo = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(6101, a, b)
};
GMap.prototype.setRadarFormat = function(a, b, c, d) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(6102, a, b + "," + c + "," + d)
};
GMap.prototype.setMapOperation = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(6300, a, b)
};
GMap.prototype.HideSymbolMenu = function() {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(1020, "false")
};
GMap.prototype.SetInfoWinCallBack = function(a, b) {
    this.onInfoOpened = a;
    this.oninfowindowclose = b
};
GMap.prototype.createLayer = function(a) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(7000, a)
};
GMap.prototype.removeLayer = function(a) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(7001, a)
};
GMap.prototype.setLayerVisible = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(7002, a, "" + b)
};
GMap.prototype.addShapeToLayer = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(7003, a, b)
};
GMap.prototype.removeShapeFromLayer = function(a, b, c) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(7004, a, b)
};
GMap.prototype.removeShapeFromLayer = function(a, b, c) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(7004, a, b)
};
GMap.prototype.addSymbolToMap = function(a, b, c, d) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(8001, a, b + "[#$]" + c + "[#$]" + d)
};
GMap.prototype.execMethod = function(a, b) {
    eval(a + "('" + b + "')")
};
GMap.prototype.flyto = function(a, b, c) {
    if (!this.canCall("setZoomAndCenter", arguments)) return;
    this.flashProxy.flyto(a, b, c)
};
GMap.prototype.reactive = function() {
    this.flashProxy = document.getElementById(this.id);
    eval("window." + this.id + "=this.flashProxy")
};
GMap.prototype.eventSupported = function(a, b) {
    b = b || document.createElement("div");
    a = "on" + a;
    var c = (a in b);
    if (b.setAttribute && !c) {
        b.setAttribute(a, "return;");
        c = typeof b[a] === "function"
    }
    b = null;
    return c
};
GMap.prototype.addMouseWheel = function() {
    var b = this;
    var a = this.eventSupported("mousewheel") ? "mousewheel" : "DOMMouseScroll";
    var d = document.getElementById(_26);
    if (d.addEventListener) {
        d.addEventListener(a, function(c) {
            b.mouseWheelHandler(c)
        }, this)
    } else if (d.attachEvent) {
        d.attachEvent("on" + a, function(c) {
            b.mouseWheelHandler(c)
        })
    }
};
GMap.prototype.removeMouseWheel = function() {};
GMap.prototype.mouseWheelHandler = function(a) {
    var b = this.getZoomLevel();
    if (a.wheelDelta > 0) {
        b++
    } else {
        b--
    }
    this.setZoomLevel(b);
    if (a && a.preventDefault) {
        a.preventDefault()
    }
    if (a && a.stopPropagation) {
        a.stopPropagation()
    } else {
        window.event.cancelBubble = true;
        window.event.returnValue = false
    }
};

function GDrawObj(a, b, c, d) {
    this.symbolUrl = a;
    this.symbolType = b;
    this.symbolLabel = c;
    this.symbolFCall = d
}
GDrawObj.prototype.symbolUrl = null;
GDrawObj.prototype.symbolType = null;
GDrawObj.prototype.symbolLabel = null;
GDrawObj.prototype.symbolFCall = null;

function GQueryObject() {}
GQueryObject.prototype.alwaysreturnshape = true;
GQueryObject.prototype.featurelimit = 0;
GQueryObject.prototype.beginrecord = 0;
GQueryObject.prototype.columns = "";
GQueryObject.prototype.relation = "overlap";
GQueryObject.prototype.buffersize = 0;
GQueryObject.prototype.bufferunit = "meter";
GQueryObject.prototype.geotype = "polygon";
GQueryObject.prototype.geoshape = "";
GQueryObject.prototype.orderby = "";
GQueryObject.prototype.useProxy = false;
GQueryObject.prototype.otype = null;
GQueryObject.prototype.where = "";
GQueryObject.prototype.tableName = "";
GQueryObject.prototype.fields = new Array();
GQueryObject.prototype.fieldsValue = new Array();
GQueryObject.prototype.isSpatialFilter = false;
GQueryObject.prototype.toAddXML = function() {
    var a = "";
    a = a + '<?xml version="1.0" encoding="GBK"?>';
    a = a + '<EASYXML version="1.1" xmlns="http://mapservice.easymap.com">';
    a = a + '<REQUEST><EXECUTE>';
    a = a + '<INSERT objectname="' + this.tableName + '">';
    a = a + '<FIELDS>';
    for (var b = 0; b < this.fields.length; b++) {
        a = a + '<FIELD name="' + this.fields[b] + '" value="' + this.fieldsValue[b] + '" />'
    }
    a = a + '</FIELDS>';
    a = a + '</INSERT>';
    a = a + '</EXECUTE>';
    a = a + '</REQUEST>';
    a = a + '</EASYXML>';
    return a
};
GQueryObject.prototype.toDelXML = function() {
    var a = "";
    a = a + '<?xml version="1.0" encoding="GBK"?>';
    a = a + '<EASYXML version="1.1" xmlns="http://mapservice.easymap.com">';
    a = a + '<REQUEST><EXECUTE>';
    a = a + '<DELETE objectname="' + this.tableName + '">';
    if (this.useProxy == true) a = a + '<WHERECLAUSE>' + encodeURI(this.where) + '</WHERECLAUSE>';
    else a = a + '<WHERECLAUSE>' + this.where + '</WHERECLAUSE>';
    a = a + ' </DELETE>';
    a = a + '</EXECUTE>';
    a = a + '</REQUEST>';
    a = a + '</EASYXML>';
    return a
};
GQueryObject.prototype.toUpdateXML = function() {
    var a = "";
    a = a + '<?xml version="1.0" encoding="GBK"?>';
    a = a + '<EASYXML version="1.1" xmlns="http://mapservice.easymap.com">';
    a = a + '<REQUEST><EXECUTE>';
    a = a + '<UPDATE objectname="' + this.tableName + '">';
    a = a + '<FIELDS>';
    for (var b = 0; b < this.fields.length; b++) {
        a = a + '<FIELD name="' + this.fields[b] + '" value="' + this.fieldsValue[b] + '" />'
    }
    a = a + '</FIELDS>';
    if (this.useProxy == true) a = a + '<WHERECLAUSE>' + encodeURI(this.where) + '</WHERECLAUSE>';
    else a = a + '<WHERECLAUSE>' + this.where + '</WHERECLAUSE>';
    a = a + '</UPDATE >';
    a = a + '</EXECUTE>';
    a = a + '</REQUEST>';
    a = a + '</EASYXML>';
    return a
};
GQueryObject.prototype.toSelectXML = function() {
    var a = "";
    a = a + '<?xml version="1.0" encoding="GBK"?>';
    a = a + '<EASYXML version="1.1" xmlns="http://mapservice.easymap.com">';
    a = a + '<REQUEST><EXECUTE>';
    a = a + '<SELECT alwaysreturnshape="' + this.alwaysreturnshape + '" featurelimit="' + this.featurelimit + '" beginrecord="' + this.beginrecord + '" objectname="' + this.tableName + '">';
    a = a + '<COLUMNSCLAUSE>' + this.columns + '</COLUMNSCLAUSE>';
    if (this.useProxy == true) a = a + '<WHERECLAUSE>' + encodeURI(this.where) + '</WHERECLAUSE>';
    else a = a + '<WHERECLAUSE>' + this.where + '</WHERECLAUSE>';
    a = a + '<SPATIALFILTERS>';
    if (this.isSpatialFilter == true) {
        var b = '<SPATIALFILTER relation="' + this.relation + '"  buffersize="' + this.buffersize + '" bufferunit="' + this.bufferunit + '">';
        b = b + '<SHAPE geotype="' + this.geotype + '">';
        b = b + this.geoshape + '</SHAPE></SPATIALFILTER>';
        a = a + b
    }
    a = a + '</SPATIALFILTERS>';
    a = a + '<ORDERBYCLAUSE>' + this.orderby + '</ORDERBYCLAUSE>';
    a = a + '</SELECT>';
    a = a + '</EXECUTE>';
    a = a + '</REQUEST>';
    a = a + '</EASYXML>';
    return a
};
GQueryObject.prototype.toxml = function() {
    var a = "";
    var b = this.otype;
    if (b == "add") {
        a = this.toAddXML()
    } else if (b == "delete") {
        a = this.toDelXML()
    } else if (b == "update") {
        a = this.toUpdateXML()
    } else if (b == "select") {
        a = this.toSelectXML()
    }
    return a
};

function GQueryResult() {}
GQueryResult.prototype.display = "auto";
GQueryResult.prototype.style = new GStyle();
GQueryResult.prototype.result = "none";
GQueryResult.prototype.type = "point";
GQueryResult.prototype.prjType = "latlon";
GQueryResult.prototype.adjust = false;
GQueryResult.prototype.prefix = "";
GQueryResult.prototype.otype = null;
GQueryResult.prototype.codepage = false;
GQueryResult.prototype.useProxy = false;
GQueryResult.prototype.tipFormat = "NOTIP";
GQueryResult.prototype.labelFormat = "NOTIP";
GQueryResult.prototype.alwaysShowLabel = false;
GQueryResult.prototype.showBuffer = false;
GQueryResult.prototype.bufferColor = "0xff0000";
GQueryResult.prototype.bufferOpacity = "30";
GQueryResult.prototype.staticRes = "xxx";
GMap.prototype.exec_ = function(a, b, c, d) {
    b.useProxy = c.useProxy;
    var e = b.toxml();
    if (!this.canCall("queryService", arguments)) return;
    if (d != null) {
        this.addEventListener('OnQueryEnd', this.OnQueryEnd, this);
        this.afterQuery = d
    }
    this.flashProxy.queryService(a, e, c)
};
GMap.prototype.queryServiceArray = function(a, b, c, d) {
    if (!this.canCall("queryServiceArray", arguments)) return;
    if (d != null) {
        this.addEventListener('OnQueryEnd', this.OnQueryEnd, this);
        this.afterQuery = d
    }
    var e = new Array();
    for (var i = 0; i < b.length; i++) {
        var f = b[i];
        f.useProxy = c[i].useProxy;
        var g = f.toxml();
        e.push(g)
    }
    this.flashProxy.queryServiceArray(a, e, c)
};
GMap.prototype.getQueryArrayResult = function() {
    if (!this.canCall("queryServiceArray", arguments)) return;
    return this.flashProxy.getQueryArrayResult()
};
GMap.prototype.queryProperty = function(a, b, c, d) {
    c.otype = "select";
    b.otype = "select";
    this.exec_(a, b, c, d)
};
GMap.prototype.OnQueryEnd = function(a) {
    if (this.afterQuery) {
        var s = a.args.split(",");
        s.shift();
        var b = s.join(",");
        this.afterQuery(b)
    }
    this.afterQuery = null;
    this.removeEventListener('OnQueryEnd', this.OnQueryEnd)
};
GMap.prototype.queryByCircle = function(h, i, j, k, l) {
    var b = this;
    k.otype = "select";
    j.otype = "select";
    this.startDrawCircle(false, h, function(a) {
        var c = (a.args.split(','))[1];
        var d = b.getOverlay(c);
        var e = d.radius;
        var f = d.center.point_X;
        var g = d.center.point_Y;
        j.isSpatialFilter = true;
        j.buffersize = e;
        j.bufferunit = "meter";
        j.geotype = "point";
        j.geoshape = f + "," + g;
        b.exec_(i, j, k, l)
    })
};
GMap.prototype.queryByRect = function(i, j, k, l, m) {
    var b = this;
    l.otype = "select";
    k.otype = "select";
    this.startDrawRect(false, i, function(a) {
        var c = (a.args.split(','))[1];
        var d = b.getOverlay(c);
        var e = d.topLeft.point_X;
        var f = d.topLeft.point_Y;
        var g = d.bottomRight.point_X;
        var h = d.bottomRight.point_Y;
        k.isSpatialFilter = true;
        k.geotype = "polygon";
        k.geoshape = e + "," + f + "," + g + "," + f + "," + g + "," + h + "," + e + "," + h;
        b.exec_(j, k, l, m)
    })
};
GMap.prototype.queryByPolygon = function(g, h, j, k, l) {
    var b = this;
    k.otype = "select";
    j.otype = "select";
    this.startDrawPolygon(false, g, function(a) {
        var c = (a.args.split(','))[1];
        var d = b.getOverlay(c);
        var e = d.points;
        j.isSpatialFilter = true;
        j.geotype = "polygon";
        var f = "";
        for (var i = 0; i < d.points.length - 1; i++) {
            f = f + e[i].point_X + "," + e[i].point_Y + ","
        }
        if (d.points.length - 1 > 0) f = f + e[d.points.length - 1].point_X + "," + e[d.points.length - 1].point_Y;
        f = f + "," + e[0].point_X + "," + e[0].point_Y;
        j.geoshape = f;
        if (k.showBuffer == true && j.buffersize > 0) {
            b.addLineBuffer(c + "_28", f, k.bufferColor, k.bufferOpacity, j.bufferunit, j.buffersize)
        }
        b.exec_(h, j, k, l)
    })
};
GMap.prototype.queryByLine = function(g, h, j, k, l) {
    var b = this;
    k.otype = "select";
    j.otype = "select";
    this.startDrawPolyline(false, g, function(a) {
        var c = (a.args.split(','))[1];
        var d = b.getOverlay(c);
        var e = d.points;
        j.isSpatialFilter = true;
        j.geotype = "polyline";
        var f = "";
        for (var i = 0; i < d.points.length - 1; i++) {
            f = f + e[i].point_X + "," + e[i].point_Y + ","
        }
        if (d.points.length - 1 > 0) f = f + e[d.points.length - 1].point_X + "," + e[d.points.length - 1].point_Y;
        j.geoshape = f;
        if (k.showBuffer == true && j.buffersize > 0) {
            b.addLineBuffer(c + "_28", f, k.bufferColor, k.bufferOpacity, j.bufferunit, j.buffersize)
        }
        b.exec_(h, j, k, l)
    })
};
GMap.prototype.addShape = function(a, b, c, d) {
    c.otype = "add";
    b.otype = "add";
    c.display == "none";
    this.exec_(a, b, c, d)
};
GMap.prototype.updateShape = function(a, b, c, d) {
    c.otype = "update";
    b.otype = "update";
    this.exec_(a, b, c, d)
};
GMap.prototype.delShape = function(a, b, c, d) {
    c.otype = "delete";
    b.otype = "delete";
    this.exec_(a, b, c, d)
};
GMap.prototype.loadGeobeansXML = function(a, b) {
    alert("deprecated,no supported, use loadXML now")
};
GMap.prototype.loadXML = function(a, b, c) {
    if (!this.canCall("loadGeobeansXML", arguments)) return;
    this.flashProxy.loadGeobeansXML(a, b, c)
};
GMap.prototype.swapLayer = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(8100, a, b)
};

function getWindowSize() {
    var b = new GBPoint(0, 0);
    if (window.self && self.innerWidth) {
        b.x = self.innerWidth;
        b.y = self.innerHeight;
        return b
    }
    if (document.documentElement && document.documentElement.clientHeight) {
        b.x = document.documentElement.clientWidth;
        b.y = document.documentElement.clientHeight;
        return b
    }
    b.x = document.body.clientWidth;
    b.y = document.body.clientHeight;
    return b
};
var NowMercator = new GMercatorPrj(113, 33, 0, 0);

function CalculateMercatorXY(a, b) {
    var c = NowMercator.GetXY(a, b);
    return c
}
function CalculateMercatorLonLat(x, y) {
    var a = NowMercator.GetLonAndLat(x, y);
    return a
}
function GRadarOverlay(C, A, B, D, a) {
    this.base = GOverlay;
    this.base(D);
    this.center = C;
    this.radius = A;
    this.type = GOverlay.TYPE_RADAR;
    if (B) this.style = B;
    else this.style = new GStyle();
    if (a) this.unit = a
}
GRadarOverlay.prototype = new GOverlay();
GRadarOverlay.prototype.style = null;
GRadarOverlay.prototype.center = null;
GRadarOverlay.prototype.radius = null;
GRadarOverlay.prototype.startAngle = null;
GRadarOverlay.prototype.endAngle = null;
GMap.prototype.getPolygonCenter = function(a) {
    var p = new GBPoint(0, 0);
    var s = new GBPoint(0, 0);
    var b, c = 0,
        d = 0,
        e = 0;
    p.x = a[0].point_X;
    p.y = a[0].point_Y;
    for (var i = 1; i <= a.length; ++i) {
        if (i == a.length) {
            s.x = a[0].point_X;
            s.y = a[0].point_Y
        } else {
            s.x = a[i].point_X;
            s.y = a[i].point_Y
        }
        b = (p.x * s.y - s.x * p.y);
        c += b / 2;
        d += (p.x + s.x) * b;
        e += (p.y + s.y) * b;
        p.x = s.x;
        p.y = s.y
    }
    s.x = d / (6 * c);
    s.y = e / (6 * c);
    return s
};
GMap.prototype.getPolygonCenter2 = function(a) {
    var b, c, d, e;
    b = a[0].point_X;
    d = a[0].point_X;
    c = a[0].point_Y;
    e = a[0].point_Y;
    var s = new GBPoint(0, 0);
    for (var i = 1; i < a.length; ++i) {
        if (b > a[i].point_X) b = a[i].point_X;
        if (d < a[i].point_X) d = a[i].point_X;
        if (c > a[i].point_Y) c = a[i].point_Y;
        if (e < a[i].point_Y) e = a[i].point_Y
    }
    s.x = (b + d) / 2;
    s.y = (c + e) / 2;
    return s
};
GMap.prototype.getPosFromDist = function(a, b, c, d) {
    var e = new GMercatorPrj(116, 40, 0, 0);
    var f = e.GetXY(a, b);
    f[0] = f[0] + c * Math.cos(d * Math.PI / 180);
    f[1] = f[1] + c * Math.sin(d * Math.PI / 180);
    return e.GetLonAndLat(f[0], f[1])
};
GMap.FAST = 1;
GMap.NORMAL = 0;
GMap.HTMLINFOWIN = "html info window";
GMap.DIVINFOWIN = "DIV";
GMap.EDITSHAPE = "edit";
GMap.NONE = "none";
GMap.SELECTSHAPE = "select";
GMap.prototype.setMapSpeed = function(a) {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(1100, "" + a, "")
};
GMap.prototype.setSockReceive = function(a) {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(1110, "" + a, "")
};
GMap.prototype.getLatLon = function(x, y) {
    var a = NowMercator.GetLonAndLat(x, y);
    return a
};
GMap.prototype.getXY = function(a, b) {
    var c = NowMercator.GetXY(a, b);
    return c
};
GMap.prototype.setMainMonitor = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(4005, a, "" + b)
};
GMap.prototype.queryOverlayByCircle = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(4008, a, "" + b)
};
GMap.prototype.playMusic = function(a) {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(9000, "PLAY", a)
};
GMap.prototype.stopMusic = function() {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(9000, "STOP", "")
};
GMap.prototype.pauseMusic = function() {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(9000, "PAUSE", "")
};
GMap.prototype.resumeMusic = function() {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(9000, "RESUME", "")
};
GMap.prototype.setOverlayErrorInfo = function(a) {
    this.infoMessage["ERR_OVER"] = a
};
GMap.prototype.ShowFixedMark = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(9100, a, "" + b)
};
GMap.prototype.cancelDraw = function() {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(9101, "")
};
GMap.prototype.removeIdInLayer = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(9200, a, b)
};
GMap.prototype.showIdInLayer = function(a, b, c) {
    if (!this.canCall("setOperation", arguments)) return false;
    if (c == true) return this.flashProxy.setOperation(9201, a, b);
    else return this.flashProxy.setOperation(9202, a, b)
};
GMap.prototype.registerObject = function(a) {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(6101, "REG=" + a + ",END", 0)
};
GMap.prototype.unRegisterObject = function(a) {
    if (!this.canCall("setOperation", arguments)) return false;
    return this.flashProxy.setOperation(6101, "UNR=" + a + ",END", 0)
};
GMap.prototype.startDrawPolylineNew = function(a, b, c) {
    if (!this.canCall("startDrawPolylineNew", arguments)) return;
    var d = new GOverlay();
    var e = "polyline_" + d.id;
    this.flashProxy.startDrawPolylineNew(e, a, b);
    if (c != null) {
        this.addEventListener('onOverlayCreated', this.onOverlayCreated, this);
        this.afterOverlayCreated = c
    }
};
GMap.prototype.gotoCenter = function(a, b) {
    if (!this.canCall("gotoCenter", arguments)) return;
    this.flashProxy.gotoCenter(a, b)
};
GMap.prototype.cancelEdit = function() {
    if (!this.canCall("setOperation", arguments)) return;
    this.flashProxy.setOperation(9300, "cancel", 0)
};
GMap.prototype.drawHeatMap = function(a, b, c, d) {
    if (!this.canCall("setLiveMapLayer", arguments)) return;
    var e = "<theme><type>0</type><bbox>" + a + "</bbox><imgurl>" + b + "</imgurl><info>" + c + "</info><queryurl>" + d + "</queryurl></theme>";
    this.flashProxy.setLiveMapLayer(e)
};
GMap.prototype.loadPolyLineJson = function(a, b, c) {
    if (!this.canCall("loadGeobeansXML", arguments)) return;
    b.style.strParam = "polyline_000";
    this.flashProxy.loadGeobeansXML(a, b, c)
};
GMap.prototype.loadPolygonJson = function(a, b, c) {
    if (!this.canCall("loadGeobeansXML", arguments)) return;
    b.style.strParam = "polygon_000";
    this.flashProxy.loadGeobeansXML(a, b, c)
};
GMap.prototype.addImageToMap = function(a, b, c, d, e) {
    if (!this.canCall("setLiveMapLayer", arguments)) return;
    var f = "<theme><type>0</type><imageid>" + a + "</imageid><bbox>" + b + "</bbox><imgurl>" + c + "</imgurl><info>" + d + "</info><queryurl>" + e + "</queryurl></theme>";
    this.flashProxy.setLiveMapLayer(f)
};
String.prototype.replaceAll = function(a, b, c) {
    if (!RegExp.prototype.isPrototypeOf(a)) {
        return this.replace(new RegExp(a, (c ? "gi" : "g")), b)
    } else {
        return this.replace(a, b)
    }
};

function StringBuffer() {
    this.content = new Array()
};
StringBuffer.prototype.append = function(a) {
    this.content.push(a)
};
StringBuffer.prototype.toString = function() {
    return this.content.join("")
};
GMap.prototype.WFSDebug = false;
var GQueryType = {};
GQueryType.FEATUREID = "FEATUREID";
GQueryType.FIELDS = "FIELDS";
GQueryType.BBOX = "BBOX";
GQueryType.BODY = "BODY";
GQueryType.POINTROUND = "POINTROUND";
GQueryType.POLYGONROUND = "POLYGONROUND";
GQueryType.LINESTRING = "LINESTRING";
GQueryType.POLYGON = "POLYGON";
GQueryType.CIRCLE = "CIRCLE";
GQueryType.BUFFER = "BUFFER";
GQueryType.ADD = "Add";
GQueryType.UPDATE = "Update";
GQueryType.DELETE = "Delete";
GQueryType.COUNT = "Count";
var GQueryOptionEnum = {};
GQueryOptionEnum.PropertyIsEqualTo = "PropertyIsEqualTo";
GQueryOptionEnum.PropertyIsLike = "PropertyIsLike";
GQueryOptionEnum.PropertyIsLessThan = "PropertyIsLessThan";
GQueryOptionEnum.PropertyIsGreaterThan = "PropertyIsGreaterThan";
GQueryOptionEnum.PropertyIsLessThanOrEqualTo = "PropertyIsLessThanOrEqualTo";
GQueryOptionEnum.PropertyIsGreaterThanOrEqualTo = "PropertyIsGreaterThanOrEqualTo";
GQueryOptionEnum.PropertyIsBetween = "PropertyIsBetween";
GQueryOptionEnum.PropertyIsNull = "PropertyIsNull";
GQueryOptionEnum.SpatialFilter = "SpatialFilter";

function GWFSService() {};
GWFSService.prototype.host = null;
GWFSService.prototype.port = 80;
GWFSService.prototype.serviceType = "wfs";
GWFSService.prototype.serviceName = "";
GWFSService.prototype.wfsServiceVersion = "1.1.0";
GWFSService.prototype.service = "WFS";
GWFSService.prototype.serviceRequest = "GetMap";
GWFSService.prototype.serviceFormat = "image/png";
GWFSService.prototype.toUrl = function() {
    var a = null;
    if (this.host != null && this.serviceName != null) {
        if (this.serviceType == "wfs") {
            if (this.port != 80) a = "http://" + this.host + ":" + this.port + "/" + this.serviceName + "/" + this.serviceType + "?";
            else a = "http://" + this.host + "/" + this.serviceName + "/" + this.serviceType + "?"
        }
    }
    return a
};

function GQueryOption() {};
GQueryOption.prototype.propertyName = "";
GQueryOption.prototype.literal = "";
GQueryOption.prototype.optionType = "";
GQueryOption.prototype.toString = function() {
    var a = "";
    if (GQueryOptionEnum.IsEqualTo == this.optionType) a = "<ogc:" + this.optionType + " wildCard='*'>";
    else a = "<ogc:" + this.optionType + ">";
    a += "<ogc:PropertyName>" + this.propertyName + "</ogc:PropertyName>";
    if (GQueryOptionEnum.PropertyIsNull != this.optionType) a += "<ogc:Literal>" + this.literal + "</ogc:Literal>";
    a += "</ogc:" + this.optionType + ">";
    return a
};
var GQueryFactorEnum = {};
GQueryFactorEnum.AND = "AND";
GQueryFactorEnum.OR = "OR";

function GQueryFactor() {
    this.factorList = new Array();
    this.optionList = new Array();
    this.factorType = GQueryFactorEnum.AND
};
GQueryFactor.prototype.addOption = function(a) {
    this.optionList.push(a)
};
GQueryFactor.prototype.addFactor = function(a) {
    this.factorList.push(a)
};
GQueryFactor.prototype.toOptString = function() {
    var a = "";
    for (var i = 0; i < this.optionList.length; i++) {
        a = a + this.optionList[i].toString() + ";"
    }
    return a
};

function GWFSQueryObject() {
    this.m_filtArray = new Array();
    this.m_fields = new Array();
    this.m_fieldValues = new Array();
    this.intersect = false
};
GWFSQueryObject.prototype.m_strIDs = new Array();
GWFSQueryObject.prototype.m_queryType = GQueryType.FIELDS;
GWFSQueryObject.prototype.maxFeatures = -1;
GWFSQueryObject.prototype.m_orderByField = "";
GWFSQueryObject.prototype.layerId = "";
GWFSQueryObject.prototype.layerName = "";
GWFSQueryObject.prototype.m_offset = 0;
GWFSQueryObject.prototype.aroundWidth = 0;
GWFSQueryObject.prototype.wktPoint = "";
GWFSQueryObject.prototype.m_queryFactor;
GWFSQueryObject.prototype.m_fieldBBox = new Array();
GWFSQueryObject.prototype.queryMethod = "GET";
GWFSQueryObject.prototype.queryid = "";
GWFSQueryObject.prototype.removeShape = true;
GWFSQueryObject.prototype.setTableName = function(a) {
    this.m_tableName = a
};
GWFSQueryObject.prototype.setQueryType = function(a) {
    this.m_queryType = a
};
GWFSQueryObject.prototype.setFields = function(a) {
    this.m_fields = [];
    this.m_fields = a.split(",")
};
GWFSQueryObject.prototype.setFieldsValues = function(a) {
    this.m_fieldValues = [];
    this.m_fieldValues = a.split(",")
};
GWFSQueryObject.prototype.setFieldsValue = function(a, b) {
    this.m_fieldValues[a] = b
};
GWFSQueryObject.prototype.addFieldAndValue = function(a, b) {
    this.m_fields.push(a);
    this.m_fieldValues.push(b)
};
GWFSQueryObject.prototype.setIDs = function(a) {
    this.m_strIDs = [];
    this.m_strIDs = a.split(",")
};
GWFSQueryObject.prototype.setBBox = function(a) {
    this.m_fieldBBox = [];
    this.m_fieldBBox = a.split(",");
    if (this.m_fieldBBox[2] < this.m_fieldBBox[0]) {
        var b = this.m_fieldBBox[0];
        this.m_fieldBBox[0] = this.m_fieldBBox[2];
        this.m_fieldBBox[2] = b
    }
    if (this.m_fieldBBox[3] < this.m_fieldBBox[1]) {
        var c = this.m_fieldBBox[1];
        this.m_fieldBBox[1] = this.m_fieldBBox[3];
        this.m_fieldBBox[3] = c
    }
};
GWFSQueryObject.prototype.addSubType = function(a) {
    this.m_filtArray.push(a)
};
GWFSQueryObject.prototype.toAddXML = function() {
    var a = '<Insert>';
    a = a + '<' + this.m_tableName + '>';
    for (var b = 0; b < this.m_fields.length; b++) {
        a = a + '<' + this.m_fields[b] + '>' + this.m_fieldValues[b] + '</' + this.m_fields[b] + '>'
    }
    a = a + '</' + this.m_tableName + '>';
    a = a + '</Insert>';
    return a
};
GWFSQueryObject.prototype.toDelXML = function() {
    var a = '<Delete typeName="' + this.m_tableName + '">';
    a += "<ogc:Filter>";
    a += this.getPropertySeachXml(this.m_queryFactor);
    a += "</ogc:Filter>";
    a = a + '</Delete>';
    return a
};
GWFSQueryObject.prototype.toUpdateXML = function() {
    xmlReq = '<Update typeName="' + this.m_tableName + '">';
    for (var a = 0; a < this.m_fields.length; a++) {
        xmlReq = xmlReq + '<Property><Name>' + this.m_fields[a] + '</Name><Value>' + this.m_fieldValues[a] + '</Value></Property>'
    }
    xmlReq += "<ogc:Filter>";
    xmlReq += this.getPropertySeachXml(this.m_queryFactor);
    xmlReq += "</ogc:Filter>";
    xmlReq = xmlReq + '</Update>';
    return xmlReq
};
GWFSQueryObject.prototype.toSelectXML = function() {};
GWFSQueryObject.prototype.toxml = function(a) {
    var b = a;
    var c = this.m_queryType;
    if (c == GQueryType.ADD) {
        b = b + this.toAddXML()
    } else if (c == GQueryType.DELETE) {
        b = b + this.toDelXML()
    } else if (c == GQueryType.UPDATE) {
        b = b + this.toUpdateXML()
    } else if (c == "select") {
        b = b + this.toSelectXML()
    }
    return b
};
GWFSQueryObject.prototype.wfsUrl = function(a) {
    var b;
    if (this.m_orderByField.length > 3) b = "SERVICE=" + a.service + "&VERSION=" + a.wfsServiceVersion + "&REQUEST=" + a.serviceRequest + "&TYPENAME=" + this.m_tableName + "&FORMAT=" + a.serviceFormat + "&OFFSET=" + this.m_offset + "&MAXFEATURES=" + this.maxFeatures + "&ORDERBY=" + this.m_orderByField;
    else b = "SERVICE=" + a.service + "&VERSION=" + a.wfsServiceVersion + "&REQUEST=" + a.serviceRequest + "&TYPENAME=" + this.m_tableName + "&FORMAT=" + a.serviceFormat + "&OFFSET=" + this.m_offset + "&MAXFEATURES=" + this.maxFeatures;
    return b
};
GWFSQueryObject.prototype.getPropertySeachXml = function(queryFactor) {
    if (queryFactor == null) return "";
    var strFactors = "";
    strFactors += "<ogc:" + queryFactor.factorType + ">";
    var iLen = queryFactor.factorList.length;
    if (iLen == 0) {
        var jLen = queryFactor.optionList.length;
        if (jLen == 1) strFactors = "";
        for (var iIndex = 0; iIndex < jLen; iIndex++) {
            var queryopt = queryFactor.optionList[iIndex];
            if (queryopt.optionType == GQueryOptionEnum.SpatialFilter) {
                strFactors += this.toFilterXml(queryopt.literal)
            } else {
                strFactors += "<ogc:" + queryopt.optionType + ">";
                strFactors += "<ogc:PropertyName>" + queryopt.propertyName + "</ogc:PropertyName>";
                strFactors += "<ogc:Literal>" + queryopt.literal + "</ogc:Literal>";
                strFactors += "</ogc:" + queryopt.optionType + ">"
            }
        }
        if (jLen == 1) return strFactors
    } else if (iLen > 0) {
        for (var jIndex = 0; jIndex < iLen; jIndex++) {
            var newqueryFact = queryFactor.factorList[jIndex];
            strFactors += this.getPropertySeachXml(newqueryFact)
        }
    }
    strFactors += "</ogc:" + queryFactor.factorType + " >";
    return strFactors
};
GWFSQueryObject.prototype.getUrlReq = function(a) {
    var b = "";
    var c = "";
    var d = this.m_fields;
    var e = d.length;
    if (e > 0) {
        for (var j = 0; j < e; j++) {
            c += d[j] + ","
        }
        c = c.substring(0, c.length - 1)
    }
    b += a.toUrl();
    b += "SERVICE=" + a.service + "&VERSION=" + a.wfsServiceVersion + "&FIELDS=" + c + "&FORMAT=" + a.serviceFormat + "&OFFSET=" + this.m_offset + "&MAXFEATURES=" + this.maxFeatures;
    if (this.m_orderByField.length > 3) b += "&ORDERBY=" + this.m_orderByField;
    return b
};
GWFSQueryObject.prototype.getIdentifyUrlReq = function(a) {
    var b = "";
    var c = "";
    var d = this.m_strIDs;
    var e = "";
    var f = this.m_fields;
    var g = f.length;
    if (g > 0) {
        for (var j = 0; j < g; j++) {
            e += f[j] + ","
        }
        e = e.substring(0, e.length - 1)
    }
    var h = d.length;
    if (h > 0) {
        for (var i = 0; i < h; i++) {
            var s = d[i];
            var k = parseInt(s);
            if (s != null) {
                c += this.m_tableName + '.' + k + ','
            }
        }
        c = c.substring(0, c.length - 1)
    } else {
        return ""
    }
    b += a.toUrl();
    b += this.wfsUrl(a) + "&FEATUREID=" + c + "&FIELDS=" + e;
    return b
};
GWFSQueryObject.prototype.getRectUrlReq = function(a) {
    var b = "";
    var c = "";
    var d = "";
    var e = this.m_fieldBBox;
    var f = this.m_fields;
    if (f.length > 0) {
        for (var j = 0; j < f.length; j++) {
            d += f[j] + ","
        }
        d = d.substring(0, d.length - 1)
    } else {
        d = ""
    }
    if (e.length > 0) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            var g = parseFloat(s);
            if (s != null) {
                c += g + ","
            }
        }
        c = c.substring(0, c.length - 1)
    } else {
        c = ""
    }
    b += a.toUrl();
    b += this.wfsUrl(a) + "&BBOX=" + c + "&FIELDS=" + d;
    return b
};
GWFSQueryObject.prototype.getPropertyUrlReq = function(a) {
    var b = "";
    var c = "";
    var d = this.m_fields;
    if (d.length > 0) {
        for (var j = 0; j < d.length; j++) {
            var s = d[j];
            if (s != null) {
                c += s + ","
            }
        }
        c = c.substring(0, c.length - 1)
    } else {
        return null
    }
    b += a.toUrl();
    b += this.wfsUrl(a) + "&FIELDS=" + c;
    return b
};
GWFSQueryObject.prototype.getFilterUrlReq = function(a) {
    var b = "";
    var c = "";
    var d = this.m_fields;
    var e = d.length;
    if (e > 0) {
        for (var j = 0; j < e; j++) {
            var s = d[j];
            if (s != null) c += s + ","
        }
        c = c.substring(0, c.length - 1)
    }
    b += a.toUrl();
    b += "SERVICE=" + a.service + "&VERSION=" + a.wfsServiceVersion + "&FIELDS=" + c + "&FORMAT=" + a.serviceFormat + "&OFFSET=" + this.m_offset + "&MAXFEATURES=" + this.maxFeatures + "&ORDERBY=" + this.m_orderByField;
    return b
};
GWFSQueryObject.prototype.toUrl = function(a) {
    var b = "";
    if (this.m_queryType == GQueryType.FEATUREID) {
        b = this.getIdentifyUrlReq(a)
    } else if (this.m_queryType == GQueryType.BBOX) {
        b = this.getRectUrlReq(a)
    } else if (this.m_queryType == GQueryType.FIELDS) {
        b = this.getPropertyUrlReq(a)
    } else if (this.m_queryType == GQueryType.BODY) {
        b = this.getFilterUrlReq(a)
    } else {
        b = this.getUrlReq(a)
    }
    return b
};
GWFSQueryObject.prototype.toQueryXml = function(a) {
    var b = new StringBuffer();
    var c = "<?xml version=\"1.0\" encoding=\"GBK\"?>";
    if (this.m_queryType == GQueryType.BUFFER) {
        b.append("<Execute service=\"WPS\" version=\"0.9.0\" store=\"true\" status=\"false\" xmlns:ows=\"http://www.opengeospatial.net/ows\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.opengeospatial.net/wps/Execute.xsd\">");
        b.append("<ows:Identifier>Buffer</ows:Identifier>");
        b.append("<DataInputs>");
        b.append("<Input>");
        b.append("<Geometry type='wkt'>POINT(" + this.wktPoint + ")</Geometry>");
        b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
        b.append("</Input>");
        b.append("</DataInputs>");
        b.append("</Execute>");
        c += b.toString()
    } else if (this.m_queryType == GQueryType.COUNT) {
        c += "<ogc:Filter>";
        c += this.getPropertySeachXml(this.m_queryFactor);
        c += "</ogc:Filter>"
    } else {
        c += "<GetFeature>";
        if (this.m_queryType == GQueryType.BODY) {
            c += "<Query typeName=\"" + this.m_tableName + "\">";
            c += "<ogc:Filter>";
            c += this.getPropertySeachXml(this.m_queryFactor);
            c += "</ogc:Filter>";
            c += "</Query>"
        } else if (this.m_queryType == GQueryType.POINTROUND) {
            b.append("<Query typeName=\"" + this.m_tableName + "\" maxFeatures=\"" + this.maxFeatures + "\">");
            b.append("<ogc:Filter>");
            b.append("<ogc:DIntersects>");
            b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
            b.append("<Geometry type=\"WKT\">POINT(" + this.wktPoint + ")</Geometry>");
            b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
            b.append("</ogc:DIntersects>");
            b.append("</ogc:Filter>");
            b.append("</Query>");
            c += b.toString()
        } else if (this.m_queryType == GQueryType.POLYGONROUND) {
            b.append("<Query typeName=\"" + this.m_tableName + "\" maxFeatures=\"" + this.maxFeatures + "\">");
            b.append("<ogc:Filter>");
            b.append("<ogc:DIntersects>");
            b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
            b.append("<Geometry type=\"WKT\">POLYGON((" + this.wktPoint + "))</Geometry>");
            b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
            b.append("</ogc:DIntersects>");
            b.append("</ogc:Filter>");
            b.append("</Query>");
            c += b.toString()
        } else if (this.m_queryType == GQueryType.LINESTRING) {
            b.append("<Query typeName=\"" + this.m_tableName + "\" maxFeatures=\"" + this.maxFeatures + "\">");
            b.append("<ogc:Filter>");
            b.append("<ogc:DIntersects>");
            b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
            b.append("<Geometry type=\"WKT\">LINESTRING(" + this.wktPoint + ")</Geometry>");
            b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
            b.append("</ogc:DIntersects>");
            b.append("</ogc:Filter>");
            b.append("</Query>");
            c += b.toString()
        } else if (this.m_queryType == GQueryType.POLYGON) {
            b.append("<Query typeName=\"" + this.m_tableName + "\" maxFeatures=\"" + this.maxFeatures + "\">");
            b.append("<ogc:Filter>");
            if (this.aroundWidth == 0) {
                b.append("<Within>")
            } else {
                b.append("<DWithin>")
            }
            b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
            b.append("<Geometry type=\"WKT\">POLYGON((" + this.wktPoint + "))</Geometry>");
            if (this.aroundWidth > 0) b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
            if (this.aroundWidth == 0) {
                b.append("</Within>")
            } else {
                b.append("</DWithin>")
            }
            b.append("</ogc:Filter>");
            b.append("</Query>");
            c += b.toString()
        } else if (this.m_queryType == GQueryType.CIRCLE) {
            b.append("<Query typeName=\"" + this.m_tableName + "\" maxFeatures=\"" + this.maxFeatures + "\">");
            b.append("<ogc:Filter>");
            b.append("<ogc:DWithin>");
            b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
            b.append("<Geometry type=\"WKT\">POINT(" + this.wktPoint + ")</Geometry>");
            b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
            b.append("</ogc:DWithin>");
            b.append("</ogc:Filter>");
            b.append("</Query>");
            c += b.toString()
        }
        c += "</GetFeature>"
    }
    return c
};
GWFSQueryObject.prototype.toFilterXml = function(a) {
    var b = new StringBuffer();
    var c = "";
    if (a == GQueryType.BODY) {
        c += this.getPropertySeachXml(this.m_queryFactor)
    } else if (a == GQueryType.POINTROUND) {
        b.append("<ogc:DIntersects>");
        b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
        b.append("<Geometry type=\"WKT\">POINT(" + this.wktPoint + ")</Geometry>");
        b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
        b.append("</ogc:DIntersects>");
        c += b.toString()
    } else if (a == GQueryType.POLYGONROUND) {
        b.append("<ogc:DIntersects>");
        b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
        b.append("<Geometry type=\"WKT\">POLYGON((" + this.wktPoint + "))</Geometry>");
        b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
        b.append("</ogc:DIntersects>")
    } else if (a == GQueryType.LINESTRING) {
        b.append("<ogc:DIntersects>");
        b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
        b.append("<Geometry type=\"WKT\">LINESTRING(" + this.wktPoint + ")</Geometry>");
        b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
        b.append("</ogc:DIntersects>");
        c += b.toString()
    } else if (a == GQueryType.POLYGON) {
        b.append("<DWithin>");
        b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
        b.append("<Geometry type=\"WKT\">POLYGON((" + this.wktPoint + "))</Geometry>");
        b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
        b.append("</DWithin>");
        c += b.toString()
    } else if (a == GQueryType.CIRCLE) {
        b.append("<ogc:DWithin>");
        b.append("<ogc:PropertyName>GEOMETRY</ogc:PropertyName>");
        b.append("<Geometry type=\"WKT\">POINT(" + this.wktPoint + ")</Geometry>");
        b.append("<Distance uom=\"meter\">" + this.aroundWidth + "</Distance>");
        b.append("</ogc:DWithin>");
        c += b.toString()
    } else if (a == GQueryType.BBOX) {
        b.append("<wfs:BBOX>");
        b.append("<wfs:PropertyName>shape</wfs:PropertyName>");
        b.append("<gml:Envelope xmlns:gml='http://www.opengis.net/gml'>");
        b.append("<gml:lowerCorner>" + this.m_fieldBBox[0] + "  " + this.m_fieldBBox[1] + "</gml:lowerCorner>");
        b.append("<gml:upperCorner>" + this.m_fieldBBox[0] + "  " + this.m_fieldBBox[1] + "</gml:upperCorner>");
        b.append("</gml:Envelope>");
        b.append("</wfs:BBOX>");
        c += b.toString()
    }
    return c
};
GMap.prototype.afterWFSQuery = new Array();
GMap.prototype.WFSQuery = function(a, b, c, d) {
    b.useProxy = c.useProxy;
    c.format = a.serviceFormat;
    c.queryid = b.queryid;
    var e = b.toUrl(a);
    if (e != null && e.length > 1) {
        var f = "";
        if (b.m_queryType == GQueryType.FEATUREID || b.m_queryType == GQueryType.BBOX || b.m_queryType == GQueryType.FIELDS) {
            b.queryMethod = "GET"
        } else {
            b.queryMethod = "POST";
            f = b.toQueryXml(a);
            e = e + "&BODY=" + f;
            if (b.intersect == true) {
                e = e.replaceAll('DWithin', 'DIntersects', false)
            }
        }
        if (this.WFSDebug == true) alert(e);
        if (!this.canCall("queryWFSService", arguments)) return;
        if (d != null) {
            this.addEventListener('OnWFSQueryEnd', this.OnWFSQueryEnd, this);
            this.afterWFSQuery[b.queryid] = d
        }
        this.flashProxy.queryWFSService(e, c, b.queryMethod)
    }
};
GMap.prototype.WFSQueryCount = function(a, b, c, d) {
    b.useProxy = c.useProxy;
    c.format = a.serviceFormat;
    c.queryid = b.queryid;
    var e = b.toUrl(a) + "&REQUEST=" + a.serviceRequest + "&TYPENAME=" + b.m_tableName;
    if (e != null && e.length > 1) {
        var f = "";
        b.queryMethod = "POST";
        f = b.toQueryXml(a);
        e = e + "&FILTER=" + f;
        if (b.intersect == true) {
            e = e.replaceAll('DWithin', 'DIntersects', false)
        }
        if (this.WFSDebug == true) alert(e);
        if (!this.canCall("queryWFSService", arguments)) return;
        if (d != null) {
            this.addEventListener('OnWFSQueryEnd', this.OnWFSQueryEnd, this);
            this.afterWFSQuery[b.queryid] = d
        }
        this.flashProxy.queryWFSService(e, c, b.queryMethod)
    }
};
GMap.prototype.WFSExecute = function(a, b, c, d) {
    b.useProxy = c.useProxy;
    c.format = a.serviceFormat;
    c.queryid = b.queryid;
    var e = a.toUrl();
    var f = "";
    if (e != null && e.length > 1) {
        b.queryMethod = "POST";
        strXml = b.toxml("VERSION=1.1.0&SERVICE=WFS&REQUEST=Transaction&BODY=<?xml version='1.0' encoding='GBK'?><Transaction>");
        e = e + "&BODY=" + strXml + "</Transaction>";
        if (this.WFSDebug == true) alert(e);
        if (!this.canCall("queryWFSService", arguments)) return;
        if (d != null) {
            this.addEventListener('OnWFSQueryEnd', this.OnWFSQueryEnd, this);
            this.afterWFSQuery[b.queryid] = d
        }
        this.flashProxy.queryWFSService(e, c, b.queryMethod)
    }
};
GMap.prototype.WFSExecuteBatch = function(a, b, c, d) {
    c.format = a.serviceFormat;
    var e = a.toUrl();
    c.queryid = b[0].queryid;
    if (e != null && e.length > 1) {
        var f = "VERSION=1.1.0&SERVICE=WFS&REQUEST=Transaction&BODY=<?xml version='1.0' encoding='GBK'?><Transaction>";
        for (var i = 0; i < b.length; i++) {
            f = f + b[i].toxml("")
        }
        e = e + f + "</Transaction>";
        if (!this.canCall("queryWFSService", arguments)) return;
        if (d != null) {
            this.addEventListener('OnWFSQueryEnd', this.OnWFSQueryEnd, this);
            this.afterWFSQuery[c.queryid] = d
        }
        this.flashProxy.queryWFSService(e, c, "POST")
    }
};
GMap.prototype.WFSQueryByCircle = function(h, i, j, k, l) {
    var b = this;
    this.startDrawCircle(false, i, function(a) {
        var c = (a.args.split(','))[1];
        var d = b.getOverlay(c);
        var e = d.radius;
        var f = d.center.point_X;
        var g = d.center.point_Y;
        j.aroundWidth = e;
        j.wktPoint = f + " " + g;
        b.WFSQuery(h, j, k, l);
        if (j.removeShape == true) b.removeOverlay(c)
    })
};
GMap.prototype.WFSQueryByRect = function(i, j, k, l, m) {
    var b = this;
    this.startDrawRect(false, j, function(a) {
        var c = (a.args.split(','))[1];
        var d = b.getOverlay(c);
        var e = d.topLeft.point_X;
        var f = d.topLeft.point_Y;
        var g = d.bottomRight.point_X;
        var h = d.bottomRight.point_Y;
        k.setQueryType(GQueryType.BBOX);
        k.setBBox(e + "," + f + "," + g + "," + h);
        b.WFSQuery(i, k, l, m);
        if (k.removeShape == true) b.removeOverlay(c)
    })
};
GMap.prototype.WFSQueryByPolygon = function(h, j, k, l, m, n) {
    var b = this;
    this.startDrawPolygon(false, j, function(a) {
        var c = (a.args.split(','))[1];
        var d = b.getOverlay(c);
        var e = d.points;
        var f = "";
        var g = "";
        for (var i = 0; i < e.length - 1; i++) {
            f = f + e[i].point_X + "," + e[i].point_Y + ",";
            g = g + e[i].point_X + " " + e[i].point_Y + ","
        }
        if (d.points.length - 1 > 0) {
            f = f + e[e.length - 1].point_X + "," + e[e.length - 1].point_Y;
            g = g + e[e.length - 1].point_X + " " + e[e.length - 1].point_Y
        }
        f = f + "," + e[0].point_X + "," + e[0].point_Y;
        g = g + "," + e[0].point_X + " " + e[0].point_Y;
        k.wktPoint = g;
        k.setQueryType(GQueryType.POLYGON);
        if (k.aroundWidth > 0) {
            b.addLineBuffer(c + "_28", f, n.fillColor, n.fillOpacity, "meter", k.aroundWidth)
        }
        b.WFSQuery(h, k, l, m);
        if (k.removeShape == true) b.removeOverlay(c)
    })
};
GMap.prototype.WFSQueryByLine = function(h, j, k, l, m, n) {
    var b = this;
    this.startDrawPolyline(false, j, function(a) {
        var c = (a.args.split(','))[1];
        var d = b.getOverlay(c);
        var e = d.points;
        var f = "";
        var g = "";
        for (var i = 0; i < e.length - 1; i++) {
            f = f + e[i].point_X + "," + e[i].point_Y + ",";
            g = g + e[i].point_X + " " + e[i].point_Y + ","
        }
        if (e.length - 1 > 0) {
            f = f + e[e.length - 1].point_X + "," + e[e.length - 1].point_Y;
            g = g + e[e.length - 1].point_X + " " + e[e.length - 1].point_Y
        }
        k.wktPoint = g;
        k.setQueryType(GQueryType.LINESTRING);
        if (k.aroundWidth > 0) {
            b.addLineBuffer(c + "_28", f, n.fillColor, n.fillOpacity, "meter", k.aroundWidth)
        }
        b.WFSQuery(h, k, l, m);
        if (k.removeShape == true) b.removeOverlay(c)
    })
};
GMap.prototype.WFSQueryServiceArray = function(a, b, c, d) {
    if (!this.canCall("queryWFSServiceArray", arguments)) return;
    if (d != null) {
        this.addEventListener('OnQueryArrayEnd', this.OnQueryArrayEnd, this);
        this.afterQuery = d
    }
    var e = new Array();
    for (var i = 0; i < b.length; i++) {
        var f = b[i];
        var g = f.toUrl(a);
        var h = "";
        if (f.m_queryType == GQueryType.FEATUREID || f.m_queryType == GQueryType.BBOX || f.m_queryType == GQueryType.FIELDS) {
            f.queryMethod = "GET"
        } else {
            f.queryMethod = "POST";
            h = f.toQueryXml(a);
            g = g + "&BODY=" + h;
            if (f.intersect == true) {
                g = g.replaceAll('DWithin', 'DIntersects', false)
            }
        }
        c[i].format = a.serviceFormat;
        e.push(g)
    }
    this.flashProxy.queryWFSServiceArray(e, c)
};
GMap.prototype.WFSAddPointShape = function(d, e, f, g, h) {
    var b = this;
    this.startDrawMarker(false, e, function(a) {
        var c = (a.args.split(','))[1];
        b.WFSAddShapeByID(d, c, f, g, h)
    })
};
GMap.prototype.WFSAddLineShape = function(d, e, f, g, h) {
    var b = this;
    this.startDrawPolyline(false, e, function(a) {
        var c = (a.args.split(','))[1];
        b.WFSAddShapeByID(d, c, f, g, h)
    })
};
GMap.prototype.WFSAddPolyShape = function(d, e, f, g, h) {
    var b = this;
    this.startDrawPolygon(false, e, function(a) {
        var c = (a.args.split(','))[1];
        b.WFSAddShapeByID(d, c, f, g, h)
    })
};
GMap.prototype.WFSAddShapeByID = function(wfs, overid, queryObj, queryRes, queryBack) {
    var overlayobj = this.getOverlay(overid);
    var pt = "";
    if (overlayobj.type == GMap.OVERLAY_TYPE_MARKER) {
        pt = "POINT(" + overlayobj.pos.point_X + " " + overlayobj.pos.point_Y + ")"
    } else if (overlayobj.type == GMap.OVERLAY_TYPE_POLYGON || overlayobj.type == GMap.OVERLAY_TYPE_POLYLINE) {
        var ptx = overlayobj.points;
        var polygonstrWkt = "";
        for (var i = 0; i < ptx.length - 1; i++) {
            polygonstrWkt = polygonstrWkt + ptx[i].point_X + " " + ptx[i].point_Y + ","
        }
        if (ptx.length - 1 > 0) {
            polygonstrWkt = polygonstrWkt + ptx[ptx.length - 1].point_X + " " + ptx[ptx.length - 1].point_Y
        }
        if (overlayobj.type == GMap.OVERLAY_TYPE_POLYGON) pt = "POLYGON((" + polygonstrWkt + "))";
        if (overlayobj.type == GMap.OVERLAY_TYPE_POLYLINE) pt = "LINESTRING(" + polygonstrWkt + ")"
    }
    if (pt.length > 3) {
        queryObj.addFieldAndValue("GEOMETRY", pt);
        this.WFSExecute(wfs, queryObj, queryRes, queryBack)
    }
};
GMap.prototype.InitUTMProj = function(a, b, c) {
    if (!this.canCall("initUtmProj", arguments)) return;
    this.flashProxy.initUtmProj(a, b, c)
};
GMap.prototype.LatlonToUTM = function(a, b) {
    if (!this.canCall("convertLatLonUtm", arguments)) return null;
    return this.flashProxy.convertLatLonUtm(a, b, 1)
};
GMap.prototype.UTMToLatlon = function(x, y) {
    if (!this.canCall("convertLatLonUtm", arguments)) return null;
    return this.flashProxy.convertLatLonUtm(x, y, 0)
};
GMap.prototype.OnWFSQueryEnd = function(a) {
    var s = a.args.split(",");
    s.shift();
    var b = s.shift();
    var c = s.join(",");
    var d = this.afterWFSQuery[b];
    d(c);
    delete this.afterWFSQuery[b];
    this.removeEventListener('OnWFSQueryEnd', this.OnWFSQueryEnd)
};
GMap.prototype.OnQueryArrayEnd = function(a) {
    if (this.afterQuery) {
        var s = a.args.split(",");
        s.shift();
        var b = s.join(",");
        this.afterQuery(b)
    }
    this.afterQuery = null;
    this.removeEventListener('OnQueryArrayEnd', this.OnQueryArrayEnd)
};
GMap.prototype.GetAngle = function(a, b, c, e, f) {
    var d = 0;
    var g = 0;
    var h = 0;
    if (f == 1) {
        g = c - a;
        h = e - b
    }
    if (f == 0) {
        var i = CalculateMercatorXY(b, a);
        var j = CalculateMercatorXY(e, c);
        g = j[0] - i[0];
        h = j[1] - i[1]
    }
    var k = Math.atan2(h, g) * 180 / Math.PI;
    if (k <= 90) k = 90 - k;
    else if (k > 90) k = 450 - k;
    return k
};
GMap.prototype.calculateTmpPoint = function(a) {
    if (a.length == 0) return null;
    var b;
    var c;
    var d;
    var e;
    var f = a[0].point_X;
    var g = a[0].point_X;
    var h = a[0].point_Y;
    var j = a[0].point_Y;
    var k;
    var l;
    for (var i = 1; i < a.length; i++) {
        if (a[i].point_X > g) {
            g = a[i].point_X;
            c = i
        }
        if (a[i].point_X < f) {
            f = a[i].point_X;
            b = i
        }
        if (a[i].point_Y > j) {
            j = a[i].point_Y;
            e = i
        }
        if (a[i].point_Y < h) {
            h = a[i].point_Y;
            d = i
        }
    }
    if (j - h < g - f) {
        k = (a[b].point_X + a[c].point_X) / 2;
        l = (a[b].point_Y + a[c].point_Y) / 2
    } else {
        k = (a[d].point_X + a[e].point_X) / 2;
        l = (a[d].point_Y + a[e].point_Y) / 2
    }
    return new GPoint(k, l)
};
GMap.prototype.calculateBarycentre = function(a) {
    var b = 0;
    var c = 0;
    for (var i = 0; i < a.length; i++) {
        b += a[i].point_X;
        c += a[i].point_Y
    }
    b = b / a.length;
    c = c / a.length;
    return new GPoint(b, c)
};
GMap.prototype.calculateCrossoverPoint = function(c, d, e, f) {
    var a = (d.point_Y - c.point_Y) / (d.point_X - c.point_X);
    var b = (f.point_Y - e.point_Y) / (f.point_X - e.point_X);
    var x = (a * c.point_X - b * e.point_X - c.point_Y + e.point_Y) / (a - b);
    var y = a * x - a * c.point_X + c.point_Y;
    return new GPoint(x, y)
};
GMap.prototype.isInnerPoint = function(p, a) {
    var b = 0;
    var c = a[0].point_X;
    for (var i = 1; i < a.length; i++) {
        if (a[i].point_X < c) {
            c = a[i].point_X
        }
    }
    var d = new GPoint(c, p.point_Y);
    for (var i = 0; i < a.length - 1; i++) {
        var e = calculateCrossoverPoint(p, d, a[i], a[i + 1]);
        if ((e.point_X - p.point_X) * (e.point_X - d.point_X) <= 0 && (e.point_Y - p.point_Y) * (e.point_Y - d.point_Y) <= 0 && (e.point_X - a[i].point_X) * (e.point_X - a[i + 1].point_X) <= 0 && (e.point_Y - a[i].point_Y) * (e.point_Y - a[i + 1].point_Y) <= 0) {
            b++
        }
    }
    return b % 2 == 0 ? false : true
};
GMap.prototype.calculateInnerPoint = function(a) {
    var b = new Array();
    var c = this.calculateTmpPoint(a);
    var d = this.calculateBarycentre(a);
    if (this.isInnerPoint(d, a)) {
        return d
    } else {
        for (var i = 0; i < a.length - 1; i++) {
            var e = a[i];
            var f = a[i + 1];
            var g = this.calculateCrossoverPoint(c, d, e, f);
            if ((g.point_X - e.point_X) * (g.point_X - f.point_X) <= 0 && (g.point_Y - e.point_Y) * (g.point_Y - f.point_Y) <= 0) {
                b.push(g)
            }
        }
        var h = (b[0].point_X + b[1].point_X) / 2;
        var j = (b[0].point_Y + b[1].point_Y) / 2;
        return new GPoint(h, j)
    }
};

function MoveObject(a) {
    this.objectid = a
}
MoveObject.prototype.objectid = "";
MoveObject.prototype.label = "";
MoveObject.prototype.tipInfo = "";
MoveObject.prototype.point = "0,0";
MoveObject.prototype.speed = 0;
MoveObject.prototype.rotate = 0;
MoveObject.prototype.lineColor = 0;
MoveObject.prototype.fillColor = 0;
MoveObject.prototype.length = 100;
GMap.prototype.addPtLayer = function(a, b, c, d, e, f, g, h) {
    if (!this.canCall("addPtLayer", arguments)) return 0;
    this.flashProxy.addPtLayer(a, b, c, d, e, f, g, 0, null, null, null, h)
};
GMap.prototype.addShipLayer = function(a, b, c, d, e, f, g, h, i, j, k) {
    if (!this.canCall("addPtLayer", arguments)) return 0;
    this.flashProxy.addPtLayer(a, b, c, d, e, f, g, 1, h, i, j, k)
};
GMap.prototype.addImgObjectLayer = function(a, b, c, d, e, f, g, h, i, j) {
    if (!this.canCall("addPtLayer", arguments)) return 0;
    this.flashProxy.addPtLayer(a, b, c, d, e, f, g, 2, h, i, null, j)
};
GMap.prototype.changeMoveObjects = function(a, b) {
    if (!this.canCall("moveMarker", arguments)) return;
    this.flashProxy.moveMarker(a, b)
};
GMap.prototype.deleteMoveObjects = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return 0;
    this.flashProxy.setOperation(7010, a, b)
};
GMap.prototype.getObjectsFromLayer = function(a) {
    if (!this.canCall("setOperation", arguments)) return 0;
    return this.flashProxy.setOperation(7011, a, "")
};
GMap.prototype.getObjFromLayer = function(a, b) {
    if (!this.canCall("setOperation", arguments)) return 0;
    return this.flashProxy.setOperation(7012, a, b)
};
GMap.prototype.loadHeatArea = function(a, b, c) {
    if (!this.canCall("setLiveMapLayer", arguments)) return;
    var d = "<theme><type>10</type><imgurl>" + a + "</imgurl><fillclr>" + b + "</fillclr><fillalpha>" + c + "</fillalpha></theme>";
    this.flashProxy.setLiveMapLayer(d)
};
GMap.prototype.removeHeatArea = function() {
    if (!this.canCall("cancelLiveMap", arguments)) return;
    this.flashProxy.cancelLiveMap()
};
var timeline_radius = 20;
var timeline_connname = null;
var timeline_callback = null;
var pp = 0;
var timeline_servlet = "http://192.168.192.152:8010/myapp/dataservlet";
var timeline_strRegion = "����";
var timeline_sDate = "2012-07-02";
var timeline_eDate = "2012-07-13";
var timeline_stype = "10";
var timeline_length = 300;
var timeline_array = new Array();

function time_addFeature(a) {
    var b = new GStyle();
    b.fillColor = 0xff0000;
    b.fillOpacity = 100;
    b.lineColor = a.lineColor;
    b.lineSize = 0;
    b.lineOpacity = a.lineOpacity;
    b.infoWinHtml = a.infoWinHtml;
    var c = new GCircleOverlay(new GPoint(a.lon, a.lat), timeline_radius, b, a.objid, "pixel");
    mapObj.addOverlay(c);
    timeline_array.push(a);
    timeline_length = timeline_array.length
};

function time_removeOverlays() {
    mapObj.removeAllOverlay();
    timeline_array = [];
    timeline_length = 0
};

function time_setTimeLineConn(a) {
    timeline_connname = a
};
GMap.prototype.showTimeLine = function(a) {
    if (!this.canCall("showTimeLine", arguments)) return;
    this.flashProxy.showTimeLine(a)
};
GMap.prototype.setTimeLine = function(a, b, c, d, e) {
    if (!this.canCall("setTimeLine", arguments)) return;
    timeline_servlet = a;
    timeline_strRegion = b;
    timeline_sDate = c;
    timeline_eDate = d;
    timeline_stype = e;
    this.flashProxy.setTimeLine(timeline_connname, a, b, c, d, e, timeline_callback)
};
GMap.prototype.setTimeLineRadius = function(r) {
    timeline_radius = r
};
GMap.prototype.setTimeLineCallback = function(c) {
    timeline_callback = c
};
GMap.prototype.mine_exit = function(c) {
    if (!this.canCall("setOperation", arguments)) return "";
    return this.flashProxy.setOperation(8100, "", "")
};
var mine_type = 1;

function mine_setType(a) {
    mine_type = a
}
function mine_getType() {
    var a = new Object();
    a.type = mine_type;
    a.servlet = timeline_servlet;
    a.strRegion = timeline_strRegion;
    a.sDate = timeline_sDate;
    a.eDate = timeline_eDate;
    a.stype = timeline_stype;
    a.len = timeline_length;
    return a
}
function mine_drawFeatures(a) {
    mapObj.removeAllOverlay();
    var b = a.split(",");
    for (var i = 0; i < timeline_array.length; i++) {
        var c = timeline_array[i];
        var d = new GStyle();
        d.fillColor = getFillColor(b[i]);
        d.fillOpacity = 100;
        d.lineColor = c.lineColor;
        d.lineOpacity = c.lineOpacity;
        d.infoWinHtml = c.infoWinHtml;
        var e = new GCircleOverlay(new GPoint(c.lon, c.lat), timeline_radius, d, c.objid, "pixel");
        mapObj.addOverlay(e)
    }
}
function getFillColor(a) {
    if (a == 0) return 0xff0000;
    else if (a == 1) return 0x00ff00;
    else if (a == 2) return 0x0000ff;
    else if (a == 3) return 0xFFFF00;
    else if (a == 4) return 0xFF00FF;
    else if (a == 5) return 0x00FFFF;
    else if (a == 6) return 0xFE2E2E;
    else return 0x888888
}
function statiMiningResult(a) {
    var b = new Array();
    var i, j, c = 0;
    var d = false;
    var e = a.split(",");
    for (i = 0; i < timeline_array.length; i++) {
        d = false;
        var f = parseInt(e[i]);
        var g = timeline_array[i];
        g.cluster = f;
        if (-1 == f) continue;
        for (j = 0; j < b.length; j++) {
            if (b[j][0] == f) {
                b[j][2] = (g.lat + b[j][2] * b[j][1]) / (b[j][1] + 1);
                b[j][3] = (g.lon + b[j][3] * b[j][1]) / (b[j][1] + 1);
                b[j][1] += 1;
                d = true;
                break
            }
        }
        if (!d) {
            b[j] = new Array();
            b[j][0] = f;
            b[j][1] = 1;
            b[j][2] = g.lat;
            b[j][3] = g.lon
        }
    }
    drawMinigReslut(b)
}
function drawMinigReslut(a) {
    mapObj.removeAllOverlay();
    var b = new GStyle();
    b.lineColor = 0x0000FF;
    b.lineOpacity = 0;
    b.lineSize = 0;
    b.fillColor = 0x999999;
    b.fillOpacity = 100;
    for (var j = 0; j < timeline_array.length; j++) {
        var c = timeline_array[j];
        if (-1 == parseInt(c.cluster)) {
            var d = new GCircleOverlay(new GPoint(c.lon, c.lat), timeline_radius * 0.5, b, "idff" + j, "pixel");
            mapObj.addOverlay(d)
        }
    }
    var e = new GStyle();
    e.fontSize = 14;
    e.fontColor = '0xFFFFFF';
    e.offsetX = 0;
    e.offsetY = 0;
    var f = null;
    b.lineColor = 0x0000FF;
    b.lineOpacity = 0;
    b.lineSize = 0;
    b.fillColor = 0xFF0000;
    b.fillOpacity = 100;
    for (var i = 0; i < a.length; i++) {
        var c = timeline_array[i];
        var d = new GCircleOverlay(new GPoint(a[i][3], a[i][2]), calculateSize(a[i][1]), b, "iddd" + i, "pixel");
        mapObj.addOverlay(d);
        var e = new GStyle();
        e.fontSize = 16;
        e.fontColor = 'ffffff';
        e.infoWinHtml = 'helloeee';
        e.font = 'Verdana';
        e.offsetX = -2;
        e.offsetY = 2;
        var l = new GTag(new GPoint(a[i][3], a[i][2]), '' + i, e, 'tag1' + i);
        mapObj.addOverlay(l)
    }
}
function calculateSize(a) {
    if (a < 2) return 1 * timeline_radius;
    return (1 + Math.log(a) / Math.log(10)) * timeline_radius
}