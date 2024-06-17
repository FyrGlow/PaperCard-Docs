function init() {
	(_canvas = document.getElementById("canvas")),
		(_layers = document.getElementById("layers")),
		(_preview = document.getElementById("preview")),
		(_url = document.getElementById("url")),
		// (_gForm = document.getElementById("google-form")),
		(_galleryUrl = document.getElementById("url-gallery")),
		(_code = document.getElementById("code")),
		(_craft = document.getElementById("craft")),
		(_savedCont = document.getElementById("saved")),
		(_savedGallery = document.getElementById("saved-gallery")),
		(_total = document.getElementById("total")),
		(_layers.firstElementChild.onclick = function (a) {
			layerHandler(a);
		}),
		new Sortable(document.getElementById("layers"), {
			draggable: ".dragable",
			handle: ".layer-drag",
			onUpdate: function () {
				updSortableLayers();
			},
		}),
		supports_html5_storage()
			? (loadLocal(), setUrlGallery())
			: _savedCont.classList.add("off"),
		readUrl();
}

function newPattern(a, b) {
	if (
		!(
			"undefined" == typeof a ||
			"undefined" == typeof b ||
			_patterns.indexOf(a) > 39 ||
			"base" == a
		)
	) {
		var c, d, a;
		(c = document.createElement("i")),
			c.setAttribute("pattern", a),
			c.setAttribute("color", b),
			_canvas.appendChild(c),
			(d = document.createElement("div")),
			(d.className = "layer visable dragable"),
			(d.innerHTML +=
				'<div class="layer-color"></div><div class="layer-pattern"><div class="layer-hover" data-html2canvas-ignore="true"><div class="layer-color-container"><div class="toolbar-color black" title="black"></div><div class="toolbar-color dark_gray" title="dark_gray"></div><div class="toolbar-color gray" title="gray"></div><div class="toolbar-color white" title="white"></div><div class="toolbar-color pink" title="pink"></div><div class="toolbar-color magenta" title="magenta"></div><div class="toolbar-color purple" title="purple"></div><div class="toolbar-color blue" title="blue"></div><div class="toolbar-color cyan" title="cyan"></div><div class="toolbar-color light_blue" title="light_blue"></div><div class="toolbar-color green" title="green"></div><div class="toolbar-color lime" title="lime"></div><div class="toolbar-color yellow" title="yellow"></div><div class="toolbar-color orange" title="orange"></div><div class="toolbar-color brown" title="brown"></div><div class="toolbar-color red" title="red"></div></div><div class="layer-pattern-container"><div class="tbc"><i class="toolbar-pattern" pattern="gra" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="gru" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="bri" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="hh" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="hhb" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="vh" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="vhr" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="ts" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="bs" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="ls" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="rs" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="ld" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="rud" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="lud" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="rd" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="cr" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="dls" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="drs" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="sc" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="cs" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="ms" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="tl" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="bl" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="tr" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="br" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="tt" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="bt" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="mr" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="mc" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="bts" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="tts" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="ss" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="bo" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="cbo" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="flo" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="cre" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="sku" color="15"></i></div><div class="tbc"><i class="toolbar-pattern" pattern="moj" color="15"></i></div></div></div></div><div class="layer-craft"></div><div class="layer-del"></div><div class="layer-drag"></div><div class="layer-move"><div class="layer-up"></div><div class="layer-down"></div></div><div class="layer-visable sel"></div>'),
			(c = document.createElement("i")),
			c.setAttribute("pattern", a),
			c.setAttribute("color", b),
			c.classList.add("toolbar-pattern"),
			d.getElementsByClassName("layer-pattern")[0].appendChild(c),
			d
				.getElementsByClassName("layer-color")[0]
				.classList.add(_colorsInv[b]),
			(d.getElementsByClassName("layer-color")[0].title = _colorsInv[b]);
		var e = d.getElementsByTagName("i");
		for (i = 0; i < e.length; i++) e[i].setAttribute("color", b);
		d
			.getElementsByClassName("layer-craft")[0]
			.appendChild(craftPattern(a, b)),
			_layers.appendChild(d),
			(_layers.lastElementChild.onclick = function (a) {
				layerHandler(a);
			}),
			layerMoveRedraw();
	}
}

function updateLayer(a, b, c) {
	var d,
		e = Array.prototype.indexOf.call(_layers.children, c);
	"" === a && (a = _canvas.children[e].getAttribute("pattern")),
		"" === b
			? (b = _canvas.children[e].getAttribute("color"))
			: "string" == typeof b &&
			  (b.length < 3 ? (crl = parseInt(b, 10)) : (b = _colors[b])),
		_canvas.children[e].setAttribute("pattern", a),
		_canvas.children[e].setAttribute("color", b),
		(c.getElementsByClassName("layer-color")[0].className =
			"layer-color " + _colorsInv[b]),
		(c.getElementsByClassName("layer-color")[0].title = _colorsInv[b]),
		(d = c.getElementsByClassName("layer-craft")[0]),
		(d.innerHTML = ""),
		d.appendChild(craftPattern(a, b));
	var f = c.getElementsByTagName("i");
	if (f[f.length - 1].getAttribute("color") != b)
		for (i = 0; i < f.length; i++) f[i].setAttribute("color", b);
	f[f.length - 1].setAttribute("pattern", a);
}

function updSortableLayers() {
	for (var a = 1; a < _layers.children.length; a++)
		updateLayer(
			_layers.children[a]
				.getElementsByClassName("layer-pattern")[0]
				.lastElementChild.getAttribute("pattern"),
			_layers.children[a]
				.getElementsByClassName("layer-pattern")[0]
				.lastElementChild.getAttribute("color"),
			_layers.children[a]
		),
			_layers.children[a].classList.contains("visable")
				? _canvas.children[a].classList.remove("hidden")
				: _canvas.children[a].classList.add("hidden");
	layerMoveRedraw(), updateOutput();
}

function patternsHandler(a) {
	if ("I" == a.target.tagName) {
		var b = a.target.getAttribute("pattern"),
			c = _colors[_color];
		newPattern(b, c), (_preview.innerHTML = ""), updateOutput();
	} else if ("I" == a.target.children[0].tagName) {
		var b = a.target.children[0].getAttribute("pattern"),
			c = _colors[_color];
		newPattern(b, c), (_preview.innerHTML = ""), updateOutput();
	}
}

function showPreview(a) {
	if ("I" == a.target.tagName) {
		var b = a.target.getAttribute("pattern"),
			c = _colors[_color];
		(img = document.createElement("i")),
			img.setAttribute("pattern", b),
			img.setAttribute("color", c),
			_preview.appendChild(img);
	} else if ("I" == a.target.children[0].tagName) {
		var b = a.target.children[0].getAttribute("pattern"),
			c = _colors[_color];
		(img = document.createElement("i")),
			img.setAttribute("pattern", b),
			img.setAttribute("color", c),
			_preview.appendChild(img);
	}
}

function hidePreview(a) {
	_preview.innerHTML = "";
}

function colorsHandler(a) {
	var b;
	if ("toolbar-color" == a.target.classList[0]) {
		for (b = 0; b < a.target.parentNode.childElementCount; b++)
			a.target.parentNode.children[b].classList.remove("sel");
		a.target.classList.add("sel"), (_color = a.target.classList[1]);
		var c = document
			.getElementById("toolbar-patterns")
			.getElementsByTagName("i");
		for (b = 0; b < c.length; b++)
			c[b].setAttribute("color", _colors[_color]);
	}
}

function layerHandler(a) {
	var b, c, d;
	switch (a.target.classList[0]) {
		case "toolbar-color":
			(c = a.target.parentNode.parentNode.parentNode.parentNode),
				(d = a.target.classList[1]),
				updateLayer("", d, c);
			break;
		case "toolbar-pattern":
			(c =
				a.target.parentNode.parentNode.parentNode.parentNode
					.parentNode),
				"layer-hover" != a.target.parentNode &&
					updateLayer(a.target.getAttribute("pattern"), "", c);
			break;
		case "layer-del":
			(c = a.target.parentNode),
				(b = Array.prototype.indexOf.call(_layers.children, c)),
				_layers.removeChild(_layers.children[b]),
				_canvas.removeChild(_canvas.children[b]),
				layerMoveRedraw();
			break;
		case "layer-up":
			(c = a.target.parentNode.parentNode),
				(b = Array.prototype.indexOf.call(_layers.children, c)),
				b > 1 &&
					(_layers.children[b].parentNode.insertBefore(
						_layers.children[b],
						_layers.children[b - 1]
					),
					_canvas.children[b].parentNode.insertBefore(
						_canvas.children[b],
						_canvas.children[b - 1]
					),
					layerMoveRedraw());
			break;
		case "layer-down":
			(c = a.target.parentNode.parentNode),
				(b = Array.prototype.indexOf.call(_layers.children, c)),
				b < _layers.children.length - 1 &&
					(_layers.children[b + 1].parentNode.insertBefore(
						_layers.children[b + 1],
						_layers.children[b]
					),
					_canvas.children[b + 1].parentNode.insertBefore(
						_canvas.children[b + 1],
						_canvas.children[b]
					),
					layerMoveRedraw());
			break;
		case "layer-visable":
			(c = a.target.parentNode),
				(b = Array.prototype.indexOf.call(_layers.children, c)),
				a.target.classList.toggle("sel"),
				_canvas.children[b].classList.toggle("hidden"),
				c.classList.toggle("visable");
	}
	updateOutput();
}

function layerMoveRedraw() {
	var a = _layers.getElementsByClassName("layer-move");
	if (a.length > 1)
		for (i = 0; i < a.length; i++)
			i < a.length - 1 && a[i + 1].children[0].classList.remove("hidden"),
				i > 0 && a[i - 1].children[1].classList.remove("hidden");
	a.length > 0 &&
		(a[0].children[0].classList.add("hidden"),
		a[a.length - 1].children[1].classList.add("hidden"));
}

function getNBT() {
	var a = {};
	(a.Base = _canvas.children[0].getAttribute("color")), (a.Patterns = []);
	for (var b = 1; b < _canvas.children.length; b++)
		_canvas.children[b].classList.contains("hidden") ||
			a.Patterns.push({
				Pattern: _canvas.children[b].getAttribute("pattern"),
				Color: _canvas.children[b].getAttribute("color"),
			});
	return a;
}

function jsonOutput(a) {
	var b;
	_jsonMode = a;
	var c = getNBT();
	switch (_jsonMode) {
		case 0:
			b =
				"/give @p minecraft:banner 1 0 " +
				JSON.stringify({
					BlockEntityTag: c,
				});
			break;
		case 1:
			b =
				"/setblock ~ ~1 ~ minecraft:standing_banner 0 replace " +
				JSON.stringify(c);
			break;
		case 2:
			b =
				"/replaceitem entity @p slot.armor.head minecraft:banner 1 0 " +
				JSON.stringify({
					BlockEntityTag: c,
				});
			break;
		case 3:
			b = JSON.stringify(
				{
					BlockEntityTag: c,
				},
				"",
				1
			);
	}
	(b = b.replace(/"/g, "")), (_code.value = b);
}

function jsonInput() {
	var i,
		elem,
		val = document.getElementById("code").value;
	val = val.replace(/[\r\n\s\t]+?/g, "");
	var rgx = /{(.*)}/g;
	(val = rgx.exec(val)[0]), (val = val.toLowerCase());
	var obj = eval("(" + val + ")");
	for (
		"undefined" != typeof obj.blockentitytag && (obj = obj.blockentitytag),
			void 0 == obj.base && (obj.base = 15),
			clearAll(),
			updateLayer("base", obj.base, _layers.firstElementChild),
			i = 0;
		i < obj.patterns.length;
		i++
	)
		newPattern(obj.patterns[i].pattern, obj.patterns[i].color);
	updateOutput();
}

function clearAll() {
	for (var a = 1; a < _canvas.children.length; a++)
		a--,
			_canvas.removeChild(_canvas.children[1]),
			_layers.removeChild(_layers.children[1]);
	updateLayer("base", 15, _layers.firstElementChild), updateOutput();
}

function updateTip() {
	for (
		var a = _layers.getElementsByClassName("visable"), b = 1;
		b < _layers.children.length;
		b++
	)
		_layers.children[b].classList.remove("tip");
	void 0 !== a[7] && a[7].classList.add("tip");
}

function updateTotals() {
	var a,
		b,
		c,
		d,
		e,
		f,
		g = "";
	for (_totals = {}, a = _canvas.children, e = 0; e < a.length; e++)
		for (
			d = a[e].getAttribute("pattern"),
				b = _crafting[d],
				c = a[e].getAttribute("color"),
				k = 0;
			k < b.length;
			k++
		)
			("bri" != d &&
				"flo" != d &&
				"moj" != d &&
				"cbo" != d &&
				"cre" != d &&
				"sku" != d) ||
				0 != c ||
				(black = !0),
				"" != b[k] &&
					"bn" != b[k] &&
					(1 == b[k]
						? "base" == d
							? (_totals["~" + _colorsInv[c]] =
									(_totals["~" + _colorsInv[c]] || 0) + 1)
							: black ||
							  (_totals[_colorsInv[c]] =
									(_totals[_colorsInv[c]] || 0) + 1)
						: (_totals[b[k]] = (_totals[b[k]] || 0) + 1)),
				(black = !1);
	for (e in _totals)
		(f = document.createElement("div")),
			(f.className =
				"~" == e[0]
					? e.substr(1) + " crafting-item craft-base"
					: e + " crafting-item"),
			(g +=
				"<div><span>" +
				_totals[e] +
				"</span>" +
				f.outerHTML +
				"</div>");
	_total.innerHTML = g;
}

function updateOutput() {
	var a,
		b = "",
		c = getNBT();
	if (
		(updateTip(),
		updateTotals(),
		"undefined" != typeof _jsonMode && jsonOutput(_jsonMode),
		(b += encPair(c.Base, "base")),
		c.Patterns.length > 0)
	) {
		for (a = 0; a < c.Patterns.length; a++)
			b += encPair(c.Patterns[a].Color, c.Patterns[a].Pattern);
		(_url.value =
			window.location.protocol +
			"//" +
			window.location.hostname +
			window.location.pathname +
			"?=" +
			b),
            // _gForm.href = "https://docs.google.com/forms/d/e/1FAIpQLSfFO9W1gSNo9XrJP-FUeufb3qP2U9lfxDAB9N8169tvLXWo_A/viewform?usp=pp_url&entry.290666757=" + _url.value,
			window.history.pushState &&
				window.history.pushState(
					null,
					null,
					window.location.pathname + "?=" + b
				);
	} else
		(_url.value = ""),
			(b = ""),
			window.history.pushState &&
				window.history.pushState(null, null, window.location.pathname);
}

function setUrlGallery() {
	if (supports_html5_storage() && null != localStorage.getObject("bn")) {
		var a,
			b,
			c = "",
			b = localStorage.getObject("bn");
		if (b.length > 0) {
			for (a = 0; a < b.length; a++)
				if (b[a].Patterns.length > 0) {
					c += encPair(b[a].Base, "base");
					for (var d = 0; d < b[a].Patterns.length; d++)
						c += encPair(
							b[a].Patterns[d].Color,
							b[a].Patterns[d].Pattern
						);
					a != b.length - 1 && (c += "_");
				}
			_galleryUrl.value =
				window.location.protocol +
				"//" +
				window.location.hostname +
				window.location.pathname +
				"?=" +
				c;
		} else _galleryUrl.value = "";
	}
}

function readUrl() {
	var a,
		b,
		c,
		d = window.location.search,
		e = {};
	if (d.length < 3)
		return void updateLayer("base", 15, _layers.firstElementChild);
	if (((d = d.substr(2)), (a = d.split("_")), a[0].indexOf(".") !== -1))
		for (b = 0; b < a.length; b++) {
			for (a[b] = a[b].split("."), c = 0; c < a[b].length; c++)
				a[b][c] = a[b][c].split("-");
			a[b][0][1] = "base";
		}
	else
		for (b = 0; b < a.length; b++)
			for (a[b] = a[b].match(/.{2}/g), c = 0; c < a[b].length; c++)
				a[b][c] = decPair(a[b][c]);
	for (
		_savedTemp = a,
			e.base = a[0][0][0],
			e.patterns = a[0],
			updateLayer("base", e.base, _layers.firstElementChild),
			b = 1;
		b < a[0].length;
		b++
	)
		newPattern(a[0][b][1], a[0][b][0]);
	if (a.length > 0) {
		(document.getElementById("saved-gallery-container").className = "");
		for (var b = 0; b < a.length; b++) {
			var f = document.createElement("div");
			f.className = "saved-unit";
			var g = document.createElement("i");
			(g.className = "toolbar-pattern"),
				g.setAttribute("pattern", "base"),
				g.setAttribute("color", a[b][0][0]),
				f.appendChild(g);
			for (var c = 0; c < a[b].length; c++) {
				var g = document.createElement("i");
				(g.className = "toolbar-pattern"),
					g.setAttribute("pattern", a[b][c][1]),
					g.setAttribute("color", a[b][c][0]),
					f.appendChild(g);
			}
			_savedGallery.appendChild(f);
		}
	}
	updateTip(), updateTotals();
}

function chaosInt(a, b) {
	return Math.floor(Math.random() * (b + 1 - a)) + a;
}

function random() {
	var a;
	clearAll();
	var b = chaosInt(0, 15);
	updateLayer("base", b, _layers.firstElementChild);
	var c = document
		.getElementById("toolbar-patterns")
		.getElementsByTagName("i");
	for (a = 0; a < 6; a++)
		newPattern(
			c[chaosInt(0, c.length - 1)].getAttribute("pattern"),
			chaosInt(0, 15)
		);
	updateOutput();
}

function craftPattern(a, b) {
	var c, d;
	if ("undefined" != typeof _crafting[a]) {
		var e = _crafting[a].slice();
		"number" == typeof b && (b = _colorsInv[b]),
			b.length < 3 && (b = _colorsInv[b]);
		for (var f = 0; f < e.length; f++)
			1 == e[f] &&
				(!(
					e.indexOf("brick") > -1 ||
					e.indexOf("vine") > -1 ||
					e.indexOf("creeper") > -1 ||
					e.indexOf("wither") > -1 ||
					e.indexOf("flower") > -1 ||
					e.indexOf("apple") > -1
				) ||
				("black" != b && "0" != b)
					? (e[f] = b)
					: (e[f] = ""));
		(c = document.createElement("div")), (c.className = "crafting-table");
		for (var f = 0; f < e.length; f++)
			(d = document.createElement("div")),
				(d.className = "base" == a ? "crafting-item craft-base" : "crafting-item"),
				"" != e[f] && d.classList.add(e[f]),
				c.appendChild(d);
		return c;
	}
}

function savedGalleryHandler(a) {
	if ("toolbar-pattern" == a.target.className) {
		(index = Array.prototype.indexOf.call(
			_savedGallery.children,
			a.target.parentNode
		)),
			clearAll(),
			updateLayer(
				"base",
				_savedTemp[index][0][0],
				_layers.firstElementChild
			);
		for (var b = 1; b < _savedTemp[index].length; b++)
			newPattern(_savedTemp[index][b][1], _savedTemp[index][b][0]);
		updateOutput();
	}
}

function loadLocal() {
	if (null != localStorage.getObject("bn")) {
		_saved = localStorage.getObject("bn");
		for (var a = 0; a < _saved.length; a++) newSaved(_saved[a]);
		"on" == localStorage.compact &&
			(document.getElementById("bcompact").classList.add("on"),
			document
				.getElementById("bcompact")
				.parentNode.classList.add("compact")),
			"on" == localStorage.bannerAnimation &&
				(document.getElementById("bannerAnimation").classList.add("on"),
				document
					.getElementsByClassName("canvas-container")[0]
					.classList.add("bannerAnimation"));
	}
}

function newSaved(a) {
	var b = document.createElement("div");
	(b.className = "saved-unit"),
		(b.innerHTML =
			'<div class="saved-unit-tool"><div class="saved-unit-del"></div></div>');
	var c = document.createElement("i");
	(c.className = "toolbar-pattern"),
		c.setAttribute("pattern", "base"),
		c.setAttribute("color", a.Base),
		b.appendChild(c);
	for (var d = 0; d < a.Patterns.length; d++)
		(c = document.createElement("i")),
			(c.className = "toolbar-pattern"),
			c.setAttribute("pattern", a.Patterns[d].Pattern),
			c.setAttribute("color", a.Patterns[d].Color),
			b.appendChild(c);
	_savedCont.insertBefore(b, document.getElementById("saved-add"));
}

function addLocal(a) {
	var b = "undefined" != typeof a ? a : getNBT();
	_saved.push(b), localStorage.setObject("bn", _saved), newSaved(b);
}

function delLocal(a) {
	_saved.splice(a, 1),
		localStorage.setObject("bn", _saved),
		_savedCont.removeChild(_savedCont.children[a]);
}

function savedHandler(a) {
	var b;
	switch (a.target.className) {
		case "saved-add":
			addLocal();
			break;
		case "saved-unit-del":
			delLocal(
				Array.prototype.indexOf.call(
					_savedCont.children,
					a.target.parentNode.parentNode
				)
			);
			break;
		case "toolbar-pattern":
			(index = Array.prototype.indexOf.call(
				_savedCont.children,
				a.target.parentNode
			)),
				clearAll(),
				updateLayer(
					"base",
					_saved[index].Base,
					_layers.firstElementChild
				);
			for (var b = 0; b < _saved[index].Patterns.length; b++)
				newPattern(
					_saved[index].Patterns[b].Pattern,
					_saved[index].Patterns[b].Color
				);
			break;
		case "saved-addall":
			for (obj = [], b = 0; b < _savedTemp.length; b++)
				for (
					obj.push({
						Base: _savedTemp[b][0][0],
						Patterns: [],
					}),
						k = 1;
					k < _savedTemp[b].length;
					k++
				)
					obj[b].Patterns.push({
						Color: _savedTemp[b][k][0],
						Pattern: _savedTemp[b][k][1],
					});
			for (b = 0; b < obj.length; b++) addLocal(obj[b]);
	}
	setUrlGallery(), updateOutput();
}

function clearSaved() {
	var a = confirm("Are you sure you want to clear all saved?");
	a &&
		((_saved = []),
		localStorage.setObject("bn", _saved),
		(_savedCont.innerHTML =
			'<div class="saved-add" id="saved-add">+</div>'));
            var myModalEl = document.getElementById('shareBanner');
            var shareModal = bootstrap.Modal.getInstance(myModalEl);
            shareModal.hide();
}

function exportChest(a) {
	var b, c, d, e;
	if (
		((e = "/setblock ~0 ~1 ~0 minecraft:chest 0 replace {Items:["),
		0 == a && 1 == supports_html5_storage())
	) {
		if (
			localStorage.getObject("bn").length < 1 ||
			null == localStorage.getObject("bn")
		)
			return;
		d = localStorage.getObject("bn");
		for (var b = 0; b < d.length; b++)
			e +=
				"{id:minecraft:banner,Count:1,Slot:" +
				b +
				",tag:{BlockEntityTag:" +
				JSON.stringify(d[b]) +
				"}},";
		e += "]}";
	} else {
		for (d = [], b = 0; b < _savedTemp.length; b++)
			for (
				d.push({
					Base: _savedTemp[b][0][0],
					Patterns: [],
				}),
					c = 1;
				c < _savedTemp[b].length;
				c++
			)
				d[b].Patterns.push({
					Color: _savedTemp[b][c][0],
					Pattern: _savedTemp[b][c][1],
				});
		for (var b = 0; b < d.length; b++)
			e +=
				"{id:minecraft:banner,Count:1,Slot:" +
				b +
				",tag:{BlockEntityTag:" +
				JSON.stringify(d[b]) +
				"}},";
		e += "]}";
	}
	(e = e.replace(/"/g, "")),
		prompt(
			"Your chest code is below. Copy this to a command block and activate it!",
			e
		);
}

function encPair(a, b) {
	b = _patterns.indexOf(b);
	var c = ((b >> 6) << 4) | (15 & a),
		d = 63 & b;
	return base64dict[c] + base64dict[d];
}

function decPair(a) {
	var b = base64dict.indexOf(a.charAt(0)),
		c = base64dict.indexOf(a.charAt(1)),
		d = 15 & b,
		e = _patterns[((b >> 4) << 6) | c];
	return [d, e];
}

function compact(a) {
	a.target.classList.contains("on")
		? (a.target.parentNode.classList.remove("compact"),
		  a.target.classList.remove("on"),
		  supports_html5_storage() && (localStorage.compact = "off"))
		: (a.target.parentNode.classList.add("compact"),
		  a.target.classList.add("on"),
		  supports_html5_storage() && (localStorage.compact = "on"));
}

function bannerAnimation(a) {
	a.target.classList.contains("on")
		? (document
				.getElementsByClassName("canvas-container")[0]
				.classList.remove("bannerAnimation"),
		  a.target.classList.remove("on"),
		  supports_html5_storage() && (localStorage.bannerAnimation = "off"))
		: (document
				.getElementsByClassName("canvas-container")[0]
				.classList.add("bannerAnimation"),
		  a.target.classList.add("on"),
		  supports_html5_storage() && (localStorage.bannerAnimation = "on"));
}

function supports_html5_storage() {
	try {
		return "localStorage" in window && null !== window.localStorage;
	} catch (a) {
		return !1;
	}
}

var _canvas,
	_layers,
	_preview,
	_url,
	_code,
	_craft,
	_jsonMode,
	_saved,
	_savedTemp,
	_total,
	_totals;
(_saved = []), (_savedTemp = []), (_totals = {});
var base64dict =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/",
	_color = "black",
	_patterns = [
		"base",
		"bl",
		"bo",
		"br",
		"bri",
		"bs",
		"bt",
		"bts",
		"cbo",
		"cr",
		"cre",
		"cs",
		"dls",
		"drs",
		"flo",
		"gra",
		"hh",
		"ld",
		"ls",
		"mc",
		"moj",
		"mr",
		"ms",
		"rd",
		"rs",
		"sc",
		"sku",
		"ss",
		"tl",
		"tr",
		"ts",
		"tt",
		"tts",
		"vh",
		"lud",
		"rud",
		"gru",
		"hhb",
		"vhr",
	],
	_colors = {
		black: 0,
		red: 1,
		green: 2,
		brown: 3,
		blue: 4,
		purple: 5,
		cyan: 6,
		gray: 7,
		dark_gray: 8,
		pink: 9,
		lime: 10,
		yellow: 11,
		light_blue: 12,
		magenta: 13,
		orange: 14,
		white: 15,
	},
	_colorsInv = [
		"black",
		"red",
		"green",
		"brown",
		"blue",
		"purple",
		"cyan",
		"gray",
		"dark_gray",
		"pink",
		"lime",
		"yellow",
		"light_blue",
		"magenta",
		"orange",
		"white",
	],
	_crafting = {
		base: [1, 1, 1, 1, 1, 1, "", "stick", ""],
		gra: [1, "bn", 1, "", 1, "", "", 1, ""],
		bri: ["", "", "", "", "bn", 1, "", "brick", ""],
		hh: [1, 1, 1, 1, 1, 1, "", "bn", ""],
		vh: [1, 1, "", 1, 1, "bn", 1, 1, ""],
		ts: [1, 1, 1, "", "bn", "", "", "", ""],
		bs: ["", "", "", "", "bn", "", 1, 1, 1],
		ls: [1, "", "", 1, "bn", "", 1, "", ""],
		rs: ["", "", 1, "", "bn", 1, "", "", 1],
		ld: [1, 1, "", 1, "", "", "", "bn", ""],
		rud: ["", 1, 1, "", "", 1, "", "bn", ""],
		dls: ["", "", 1, "", 1, "", 1, "bn", ""],
		drs: [1, "", "", "", 1, "", "", "bn", 1],
		cr: [1, "", 1, "", 1, "", 1, "bn", 1],
		sc: ["", 1, "", 1, 1, 1, "bn", 1, ""],
		cs: ["", 1, "", "", 1, "bn", "", 1, ""],
		ms: ["", "", "", 1, 1, 1, "", "bn", ""],
		tl: [1, "", "", "", "", "", "", "bn", ""],
		bl: ["", "", "", "", "", "", 1, "bn", ""],
		tr: ["", "", 1, "", "", "", "", "bn", ""],
		br: ["", "", "", "", "", "", "", "bn", 1],
		tt: [1, "bn", 1, "", 1, "", "", "", ""],
		bt: ["", "", "", "", 1, "", 1, "bn", 1],
		mr: ["", 1, "", 1, "bn", 1, "", 1, ""],
		mc: ["", "", "", "", 1, "", "", "bn", ""],
		bts: ["", "", "", 1, "bn", 1, "", 1, ""],
		tts: ["", 1, "", 1, "bn", 1, "", "", ""],
		ss: [1, "", 1, 1, "bn", 1, "", "", ""],
		bo: [1, 1, 1, 1, "bn", 1, 1, 1, 1],
		cbo: ["", "", "", "", "vine", 1, "", "bn", ""],
		flo: ["", "", "", "", "bn", 1, "", "flower", ""],
		cre: ["", "", "", "", "bn", 1, "", "creeper", ""],
		sku: ["", "", "", "", "bn", 1, "", "wither", ""],
		moj: ["", "", "", "", "bn", 1, "", "apple", ""],
		lud: ["", "bn", "", 1, "", "", 1, 1, ""],
		rd: ["", "bn", "", "", "", 1, "", 1, 1],
		gru: ["", 1, "", "", 1, "", 1, "bn", 1],
		hhb: ["", "bn", "", 1, 1, 1, 1, 1, 1],
		vhr: ["", 1, 1, "bn", 1, 1, "", 1, 1],
	};
(base = "base"),
	(bl = "bl"),
	(bo = "bo"),
	(br = "br"),
	(bri = "bri"),
	(bs = "bs"),
	(bt = "bt"),
	(bts = "bts"),
	(cbo = "cbo"),
	(cr = "cr"),
	(cre = "cre"),
	(cs = "cs"),
	(dls = "dls"),
	(drs = "drs"),
	(flo = "flo"),
	(gra = "gra"),
	(hh = "hh"),
	(ld = "ld"),
	(ls = "ls"),
	(mc = "mc"),
	(moj = "moj"),
	(mr = "mr"),
	(ms = "ms"),
	(rd = "rd"),
	(rs = "rs"),
	(sc = "sc"),
	(sku = "sku"),
	(ss = "ss"),
	(tl = "tl"),
	(tr = "tr"),
	(ts = "ts"),
	(tt = "tt"),
	(tts = "tts"),
	(vh = "vh"),
	(lud = "lud"),
	(rud = "rud"),
	(gru = "gru"),
	(hhb = "hhb"),
	(vhr = "vhr"),
	$(function () {
		init(), updateOutput();
	});
var _scrlazy = "";
supports_html5_storage() &&
	((Storage.prototype.setObject = function (a, b) {
		this.setItem(a, JSON.stringify(b));
	}),
	(Storage.prototype.getObject = function (a) {
		var b = this.getItem(a);
		return b && JSON.parse(b);
	})),
	(function (a) {
		"use strict";
		"function" == typeof define && define.amd
			? define(a)
			: "undefined" != typeof module &&
			  "undefined" != typeof module.exports
			? (module.exports = a())
			: (window.Sortable = a());
	})(function () {
		"use strict";

		function a(a, c) {
			(this.el = a),
				(this.options = c = c || {}),
				(c.group = c.group || Math.random()),
				(c.store = c.store || null),
				(c.handle = c.handle || null),
				(c.draggable =
					c.draggable ||
					(a.children[0] && a.children[0].nodeName) ||
					(/[uo]l/i.test(a.nodeName) ? "li" : "*")),
				(c.ghostClass = c.ghostClass || "sortable-ghost"),
				(c.ignore = c.ignore || "a, img"),
				"onAdd onUpdate onRemove onStart onEnd"
					.split(" ")
					.forEach(function (a) {
						c[a] = b(this, c[a] || E);
					}),
				(a[x] = c.group);
			for (var d in this)
				"_" === d.charAt(0) && (this[d] = b(this, this[d]));
			e(a, "add", c.onAdd),
				e(a, "update", c.onUpdate),
				e(a, "remove", c.onRemove),
				e(a, "start", c.onStart),
				e(a, "stop", c.onEnd),
				e(a, "mousedown", this._onTapStart),
				e(a, "touchstart", this._onTapStart),
				B && e(a, "selectstart", this._onTapStart),
				e(a, "dragover", this._onDragOver),
				e(a, "dragenter", this._onDragOver),
				G.push(this._onDragOver),
				c.store && this.sort(c.store.get(this));
		}

		function b(a, b) {
			var c = F.call(arguments, 2);
			return b.bind
				? b.bind.apply(b, [a].concat(c))
				: function () {
						return b.apply(a, c.concat(F.call(arguments)));
				  };
		}

		function c(a, b, c) {
			if ("*" === b) return a;
			if (a) {
				(c = c || z), (b = b.split("."));
				var d = b.shift().toUpperCase(),
					e = new RegExp("\\s(" + b.join("|") + ")\\s", "g");
				do
					if (
						!(
							("" !== d && a.nodeName != d) ||
							(b.length &&
								((" " + a.className + " ").match(e) || [])
									.length != b.length)
						)
					)
						return a;
				while (a !== c && (a = a.parentNode));
			}
			return null;
		}

		function d(a) {
			(a.dataTransfer.dropEffect = "move"), a.preventDefault();
		}

		function e(a, b, c) {
			a.addEventListener(b, c, !1);
		}

		function f(a, b, c) {
			a.removeEventListener(b, c, !1);
		}

		function g(a, b, c) {
			if (a)
				if (a.classList) a.classList[c ? "add" : "remove"](b);
				else {
					var d = (" " + a.className + " ")
						.replace(/\s+/g, " ")
						.replace(" " + b + " ", "");
					a.className = d + (c ? " " + b : "");
				}
		}

		function h(a, b, c) {
			if (a && a.style) {
				if (void 0 === c)
					return (
						z.defaultView && z.defaultView.getComputedStyle
							? (c = z.defaultView.getComputedStyle(a, ""))
							: a.currentStyle && (c = a.currentStyle),
						void 0 === b ? c : c[b]
					);
				a.style[b] = c + ("string" == typeof c ? "" : "px");
			}
		}

		function i(a, b, c) {
			if (a) {
				var d = a.getElementsByTagName(b),
					e = 0,
					f = d.length;
				if (c) for (; e < f; e++) c(d[e], e);
				return d;
			}
			return [];
		}

		function j(a) {
			return (a.draggable = !1);
		}

		function k() {
			C = !1;
		}

		function l(a, b) {
			var c = a.lastElementChild.getBoundingClientRect();
			return b.clientY - (c.top + c.height) > 5;
		}

		function m(a) {
			for (
				var b = a.innerHTML + a.className + a.src, c = b.length, d = 0;
				c--;

			)
				d += b.charCodeAt(c);
			return d.toString(36);
		}
		var n,
			o,
			p,
			q,
			r,
			s,
			t,
			u,
			v,
			w,
			x = "Sortable" + new Date().getTime(),
			y = window,
			z = y.document,
			A = y.parseInt,
			B = !!z.createElement("div").dragDrop,
			C = !1,
			D = function (a, b) {
				var c = z.createEvent("Event");
				return c.initEvent(a, !0, !0), (c.item = b), c;
			},
			E = function () {},
			F = [].slice,
			G = [];
		return (
			(a.prototype = {
				constructor: a,
				_applyEffects: function () {
					g(n, this.options.ghostClass, !0);
				},
				_onTapStart: function (a) {
					var b = a.touches && a.touches[0],
						f = (b || a).target,
						g = this.options,
						h = this.el;
					if (
						(g.handle && (f = c(f, g.handle, h)),
						(f = c(f, g.draggable, h)),
						f &&
							"selectstart" == a.type &&
							"A" != f.tagName &&
							"IMG" != f.tagName &&
							f.dragDrop(),
						f && !n && f.parentNode === h)
					) {
						(v = a),
							(p = this.el),
							(n = f),
							(q = n.nextSibling),
							(u = this.options.group),
							(n.draggable = !0),
							g.ignore.split(",").forEach(function (a) {
								i(f, a.trim(), j);
							}),
							b &&
								((v = {
									target: f,
									clientX: b.clientX,
									clientY: b.clientY,
								}),
								this._onDragStart(v, !0),
								a.preventDefault()),
							e(z, "mouseup", this._onDrop),
							e(z, "touchend", this._onDrop),
							e(z, "touchcancel", this._onDrop),
							e(this.el, "dragstart", this._onDragStart),
							e(this.el, "dragend", this._onDrop),
							e(z, "dragover", d);
						try {
							z.selection
								? z.selection.empty()
								: window.getSelection().removeAllRanges();
						} catch (k) {}
						n.dispatchEvent(D("start", n));
					}
				},
				_emulateDragOver: function () {
					if (w) {
						h(o, "display", "none");
						var a = z.elementFromPoint(w.clientX, w.clientY),
							b = a,
							c = this.options.group,
							d = G.length;
						if (b)
							do {
								if (b[x] === c) {
									for (; d--; )
										G[d]({
											clientX: w.clientX,
											clientY: w.clientY,
											target: a,
											rootEl: b,
										});
									break;
								}
								a = b;
							} while ((b = b.parentNode));
						h(o, "display", "");
					}
				},
				_onTouchMove: function (a) {
					if (v) {
						var b = a.touches[0],
							c = b.clientX - v.clientX,
							d = b.clientY - v.clientY,
							e = "translate3d(" + c + "px," + d + "px,0)";
						(w = b),
							h(o, "webkitTransform", e),
							h(o, "mozTransform", e),
							h(o, "msTransform", e),
							h(o, "transform", e),
							a.preventDefault();
					}
				},
				_onDragStart: function (a, b) {
					var c = a.dataTransfer;
					if ((this._offUpEvents(), b)) {
						var d,
							f = n.getBoundingClientRect(),
							g = h(n);
						(o = n.cloneNode(!0)),
							h(o, "top", f.top - A(g.marginTop, 10)),
							h(o, "left", f.left - A(g.marginLeft, 10)),
							h(o, "width", f.width),
							h(o, "height", f.height),
							h(o, "opacity", "0.8"),
							h(o, "position", "fixed"),
							h(o, "zIndex", "100000"),
							p.appendChild(o),
							(d = o.getBoundingClientRect()),
							h(o, "width", 2 * f.width - d.width),
							h(o, "height", 2 * f.height - d.height),
							e(z, "touchmove", this._onTouchMove),
							e(z, "touchend", this._onDrop),
							e(z, "touchcancel", this._onDrop),
							(this._loopId = setInterval(
								this._emulateDragOver,
								150
							));
					} else
						(c.effectAllowed = "move"),
							c.setData("Text", n.textContent),
							e(z, "drop", this._onDrop);
					setTimeout(this._applyEffects);
				},
				_onDragOver: function (a) {
					if (
						!C &&
						u === this.options.group &&
						(void 0 === a.rootEl || a.rootEl === this.el)
					) {
						var b = this.el,
							d = c(a.target, this.options.draggable, b);
						if (
							0 === b.children.length ||
							b.children[0] === o ||
							(b === a.target && l(b, a))
						)
							b.appendChild(n);
						else if (d && d !== n && void 0 !== d.parentNode[x]) {
							r !== d &&
								((r = d),
								(s = h(d)),
								(t = d.getBoundingClientRect()));
							var e,
								f = t,
								g = f.right - f.left,
								i = f.bottom - f.top,
								j = /left|right|inline/.test(
									s.cssFloat + s.display
								),
								m = d.offsetWidth > n.offsetWidth,
								p = d.offsetHeight > n.offsetHeight,
								q =
									(j
										? (a.clientX - f.left) / g
										: (a.clientY - f.top) / i) > 0.5,
								v = d.nextElementSibling;
							(C = !0),
								setTimeout(k, 30),
								(e = j
									? (d.previousElementSibling === n && !m) ||
									  (q && m)
									: (v !== n && !p) || (q && p)),
								e && !v
									? (b.appendChild(n),
									  layerMoveRedraw(),
									  updateTip())
									: (d.parentNode.insertBefore(n, e ? v : d),
									  layerMoveRedraw(),
									  updateTip());
						}
					}
				},
				_offUpEvents: function () {
					f(z, "mouseup", this._onDrop),
						f(z, "touchmove", this._onTouchMove),
						f(z, "touchend", this._onDrop),
						f(z, "touchcancel", this._onDrop);
				},
				_onDrop: function (a) {
					clearInterval(this._loopId),
						f(z, "drop", this._onDrop),
						f(z, "dragover", d),
						f(this.el, "dragend", this._onDrop),
						f(this.el, "dragstart", this._onDragStart),
						f(this.el, "selectstart", this._onTapStart),
						this._offUpEvents(),
						a &&
							(a.preventDefault(),
							a.stopPropagation(),
							o && o.parentNode.removeChild(o),
							n &&
								(j(n),
								g(n, this.options.ghostClass, !1),
								p.contains(n)
									? n.nextSibling !== q &&
									  n.dispatchEvent(D("update", n))
									: (p.dispatchEvent(D("remove", n)),
									  n.dispatchEvent(D("add", n))),
								n.dispatchEvent(D("stop", n))),
							(p = n = o = q = v = w = r = s = u = null),
							this.options.store && this.options.store.set(this));
				},
				toArray: function () {
					for (
						var a,
							b = [],
							c = this.el.children,
							d = 0,
							e = c.length;
						d < e;
						d++
					)
						(a = c[d]), b.push(a.getAttribute("data-id") || m(a));
					return b;
				},
				sort: function (a) {
					var b = {},
						c = this.el;
					this.toArray().forEach(function (a, d) {
						b[a] = c.children[d];
					}),
						a.forEach(function (a) {
							b[a] && (c.removeChild(b[a]), c.appendChild(b[a]));
						});
				},
				destroy: function () {
					var a = this.el,
						b = this.options;
					f(a, "add", b.onAdd),
						f(a, "update", b.onUpdate),
						f(a, "remove", b.onRemove),
						f(a, "start", b.onStart),
						f(a, "stop", b.onEnd),
						f(a, "mousedown", this._onTapStart),
						f(a, "touchstart", this._onTapStart),
						f(a, "selectstart", this._onTapStart),
						f(a, "dragover", this._onDragOver),
						f(a, "dragenter", this._onDragOver),
						Array.prototype.forEach.call(
							a.querySelectorAll("[draggable]"),
							function (a) {
								a.removeAttribute("draggable");
							}
						),
						G.splice(G.indexOf(this._onDragOver), 1),
						this._onDrop(),
						(this.el = null);
				},
			}),
			(a.utils = {
				on: e,
				off: f,
				css: h,
				find: i,
				bind: b,
				closest: c,
				toggleClass: g,
			}),
			(a.version = "0.4.2"),
			a
		);
	});
