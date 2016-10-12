/*
 * CinetPay JavaScript Button
 * JavaScript integration for cinetpay's payment
 * @version 1.0.0 - 2016-08-17
 * @author CinetPay
 */
if ("undefined" == typeof CINETPAY || !CINETPAY) var CINETPAY = {};
CINETPAY.apps = CINETPAY.apps || {},
    function (a) {
        "use strict";

        if (!Array.isArray) {
            Array.isArray = function (arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }

        var constants = Object.freeze({
            "URI_CASH_DESK_PROD": "secure.cinetpay.com",
            "URI_CASH_DESK_DEV": "secure.sandbox.cinetpay.com",
            "URI_GET_SIGNATURE_PROD": "api.cinetpay.com/v2/?method=getSignatureByPost",
            "URI_GET_SIGNATURE_DEV": "api.sandbox.cinetpay.com/v2/?method=getSignatureByPost",
            "URI_CHECK_PAY_STATUS_PROD": "api.cinetpay.com/v2/?method=checkPayStatus",
            "URI_CHECK_PAY_STATUS_DEV": "api.sandbox.cinetpay.com/v2/?method=checkPayStatus"
        });

        var use_ssl = false;
        var use_sandbox = false;

        function IDGenerator() {

            this.length = 14;
            this.timestamp = +new Date;

            var _getRandomInt = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            this.generate = function () {
                var ts = this.timestamp.toString();
                var parts = ts.split("").reverse();
                var id = "";

                for (var i = 0; i < this.length; ++i) {
                    var index = _getRandomInt(0, parts.length - 1);
                    id += parts[index];
                }

                return id;
            }


        }

        function initConfig() {
            var elements = a.getElementById("cinetpay-form");
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].name == 'live') {
                    var myenv = elements[i].value;
                    break;
                }
            }

            if (myenv == "yes") {
                use_sandbox = false;
                use_ssl = true;
            } else {
                use_sandbox = true;
            }

            var http_prefixe = (use_ssl) ? 'https://' : 'http://';
            var constantsUri = Object.freeze({
                "cashDeskUri": http_prefixe + getCashDeskHost(use_sandbox),
                "signatureUri": http_prefixe + getSignatureHost(use_sandbox),
                "checkPayStatusUri": http_prefixe + getCheckPayStatusHost(use_sandbox)
            });

            var myform = a.getElementById("cinetpay-form");
            myform.action = constantsUri.cashDeskUri;

            return constantsUri;
        }

        function getCashDeskHost(use_sandbox) {
            if (use_sandbox)
                return constants.URI_CASH_DESK_DEV;
            else
                return constants.URI_CASH_DESK_PROD;
        }

        function getSignatureHost(use_sandbox) {
            if (use_sandbox)
                return constants.URI_GET_SIGNATURE_DEV;
            else
                return constants.URI_GET_SIGNATURE_PROD;
        }

        function getCheckPayStatusHost(use_sandbox) {
            if (use_sandbox)
                return constants.URI_CHECK_PAY_STATUS_DEV;
            else
                return constants.URI_CHECK_PAY_STATUS_PROD;
        }

        function postData(constantsUri) {
            var elements = a.getElementById("cinetpay-form");
            var formData = new FormData();
            for (var i = 0; i < elements.length; i++) {
                /*
                 if(elements[i].name == 'cpm_trans_id' && (elements[i].value == '' || elements[i].value == 'undefined')){
                 var generator = new IDGenerator();
                 elements[i].value = generator.generate();
                 }
                 */

                formData.append(elements[i].name, elements[i].value);
            }

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    for (var i = 0; i < elements.length; i++) {
                        if (elements[i].name == 'signature') {
                            var jsonContent = JSON.parse(xmlHttp.responseText);
                            if (jsonContent.hasOwnProperty('status')) {
                                alert("Code:" + jsonContent.status.code + "\n Message:" + jsonContent.status.message);
                            } else {
                                elements[i].value = jsonContent;
                                break;
                            }
                        }
                    }

                }
            }
            xmlHttp.open("post", constantsUri.signatureUri);
            xmlHttp.send(formData);

        }

        function b() {
            var b, c, d, e;
            a.getElementById("cinetpay-button") || (b = "", c = a.createElement("style"), d = ".cinetpay-button", e = d + " button", b += d + " { white-space: nowrap; }", b += d + " .field-error {  border: 1px solid #FF0000; }", b += d + " .hide { display: none; }", b += d + " .error-box { background: #FFFFFF; border: 1px solid #DADADA; border-radius: 5px; padding: 8px; display: inline-block; }", b += e + ' { white-space: nowrap; overflow: hidden; border-radius: 13px; font-family: "Arial", bold, italic; font-weight: bold; font-style: italic; border: 1px solid #2ECC71; color: #000000; background: #2ECC71; position: relative; text-shadow: 0 1px 0 rgba(255,255,255,.5); cursor: pointer; z-index: 0; }', b += e + ':before { content: " "; position: absolute; width: 100%; height: 100%; border-radius: 11px; top: 0; left: 0; background: #2ECC71; background: -webkit-linear-gradient(top, #28B463 0%,#28B463 80%,#FFF8FC 100%); background: -moz-linear-gradient(top, #28B463 0%,#28B463 80%,#FFF8FC 100%); background: -ms-linear-gradient(top, #28B463 0%,#28B463 80%,#FFF8FC 100%); background: linear-gradient(top, #28B463 0%,#28B463 80%,#FFF8FC 100%); z-index: -2; }', b += e + ':after { content: " "; position: absolute; width: 98%; height: 60%; border-radius: 40px 40px 38px 38px; top: 0; left: 0; background: -webkit-linear-gradient(top, #fefefe 0%, #28B463 100%); background: -moz-linear-gradient(top, #fefefe 0%, #28B463 100%); background: -ms-linear-gradient(top, #fefefe 0%, #28B463 100%); background: linear-gradient(top, #fefefe 0%, #28B463 100%); z-index: -1; -webkit-transform: translateX(1%);-moz-transform: translateX(1%); -ms-transform: translateX(1%); transform: translateX(1%); }', b += e + ".small { padding: 3px 15px; font-size: 12px; }", b += e + ".large { padding: 4px 19px; font-size: 14px; }", c.type = "text/css", c.id = "cinetpay-button", c.styleSheet ? c.styleSheet.cssText = b : c.appendChild(a.createTextNode(b)), a.getElementsByTagName("head")[0].appendChild(c))
        }

        function c(b, c) {
            var e, f, g, h, k, l, m, o, p, q, r, s, t, u, v, w = a.createElement("form"),
                x = a.createElement("button"),
                y = a.createElement("input"),
                z = a.createElement("p"),
                A = a.createElement("label"),
                B = a.createElement("input"),
                C = a.createElement("select"),
                D = a.createElement("option"),
                E = b.items,
                F = [],
                G = {};
            w.method = "post", w.id = "cinetpay-form", w.className = "cinetpay-button", w.target = "_top";
            var H = a.createElement("div");
            H.className = "hide", H.id = "errorBox", w.appendChild(H), B.type = "text", B.className = "cinetpay-input", z.className = "cinetpay-group", A.className = "cinetpay-label", C.className = "cinetpay-select", y.type = "hidden", l = E.size && E.size.value || "large", m = E.lc && E.lc.value || "fr_FR", o = n[m] || n.en_US, p = o[c], b.items.text && (p = b.items.text.value, b.remove("text"));
            for (k in E) e = E[k], e.hasOptions ? F.push(e) : e.isEditable ? (h = B.cloneNode(!0), h.name = e.key, h.value = e.value, g = A.cloneNode(!0), v = i.config.labels[e.key] || o[e.key] || e.key, g.htmlFor = e.key, g.appendChild(a.createTextNode(v)), g.appendChild(h), f = z.cloneNode(!0), f.appendChild(g), w.appendChild(f)) : (h = f = y.cloneNode(!0), h.name = e.key, h.value = e.value, w.appendChild(f));
            F = d(F);
            for (k in F)
                if (e = F[k], F[k].hasOptions) {
                    if (G = e.value, G.options.length > 1) {
                        h = y.cloneNode(!0), h.name = "on" + e.displayOrder, h.value = G.label, q = C.cloneNode(!0), q.name = "os" + e.displayOrder;
                        for (s in G.options)
                            if (t = G.options[s], "string" == typeof t) r = D.cloneNode(!0), r.value = t, r.appendChild(a.createTextNode(t)), q.appendChild(r);
                            else
                                for (u in t) r = D.cloneNode(!0), r.value = u, r.appendChild(a.createTextNode(t[u])), q.appendChild(r);
                        g = A.cloneNode(!0), v = G.label || e.key, g.htmlFor = e.key, g.appendChild(a.createTextNode(v)), g.appendChild(q), g.appendChild(h)
                    } else g = A.cloneNode(!0), v = G.label || e.key, g.htmlFor = e.key, g.appendChild(a.createTextNode(v)), h = y.cloneNode(!0), h.name = "on" + e.displayOrder, h.value = G.label, g.appendChild(h), h = B.cloneNode(!0), h.name = "os" + e.displayOrder, h.value = G.options[0] || "", h.setAttribute("data-label", G.label), g.appendChild(h);
                    f = z.cloneNode(!0), f.appendChild(g), w.appendChild(f)
                }
            try {
                x.type = "submit"
            } catch (I) {
                x.setAttribute("type", "submit")
            }
            return x.className = "cinetpay-button " + l, x.appendChild(a.createTextNode(p)), w.appendChild(x), w
        }

        function d(a) {
            return a.sort(function (a, b) {
                return a.displayOrder - b.displayOrder
            }), a
        }

        function e(b, c) {
            var d, e, f = j.replace("{env}", b.items.env.value),
                g = a.createElement("img"),
                h = f + "?",
                i = 13,
                l = b.items;
            c = c && c.value || 250;
            for (e in l) d = l[e], h += d.key + "=" + encodeURIComponent(d.value) + "&";
            return h = encodeURIComponent(h), g.src = k.replace("{env}", b.items.env.value).replace("{url}", h).replace("{pattern}", i).replace("{size}", c), g
        }

        function f(a) {
            var b, c, d, e, f, h = {},
                i = [];
            if (b = a.attributes)
                for (f = 0, e = b.length; e > f; f++) c = b[f], (d = c.name.match(/^data-option([0-9])([a-z]+)([0-9])?/i)) ? i.push({
                    name: "option." + d[1] + "." + d[2] + (d[3] ? "." + d[3] : ""),
                    value: c.value
                }) : (d = c.name.match(/^data-([a-z0-9_]+)(-editable)?/i)) && (h[d[1]] = {
                    value: c.value,
                    isEditable: !!d[2]
                });
            return g(i, h), h
        }

        function g(a, b) {
            var c, d, e, f, g, h = {};
            for (j = 0; j < a.length; j++)
                for (c = a[j], d = c.name, e = d.split("."), f = e.shift(), g = h; f;) g[f] || (g[f] = {}), e.length || (g[f] = c.value), g = g[f], f = e.shift();
            var i, j, k, l, m = {},
                n = {},
                o = [],
                p = {},
                q = Object.prototype.hasOwnProperty;
            for (i in h)
                if (q.call(h, i)) {
                    l = h[i];
                    for (j in l) {
                        b["option_" + j] = {
                            value: {
                                options: "",
                                label: l[j].name
                            },
                            hasOptions: !0,
                            displayOrder: parseInt(j, 10)
                        }, m = l[j].select, n = l[j].price, o = [];
                        for (k in m) p = {}, n ? (p[m[k]] = m[k] + " " + n[k], o.push(p)) : o.push(m[k]);
                        b["option_" + j].value.options = o
                    }
                }
        }

        function h() {
            this.items = {}, this.add = function (a, b, c, d, e) {
                this.items[a] = {
                    key: a,
                    value: b,
                    isEditable: c,
                    hasOptions: d,
                    displayOrder: e
                }
            }, this.remove = function (a) {
                delete this.items[a]
            }
        }

        var i = {},
            j = "http://{env}.cinetpay.com",
            k = "http://{env}.cinetpay.com/qrcode?data={url}&pattern={pattern}&height={size}",
            l = "JavaScriptButton_{type}",
            m = {
                designation: "cpm_designation",
                trans_id: "cpm_trans_id",
                language: "cpm_language",
                currency: "cpm_currency",
                amount: "cpm_amount",
                site_id: "cpm_site_id",
                payment_config: "cpm_payment_config",
                page_action: "cpm_page_action",
                version: "cpm_version",
                custom: "cpm_custom",
                callback: "notify_url",
                return_page: "return_url",
                cancel_page: "cancel_url",
                golive: "live",
                button_id: "hosted_button_id"
            },
            n = {
                en_GB: {
                    buynow: "Buy Now",
                    donate: "Donate",
                    paynow: "Pay Now"
                },
                fr_FR: {
                    buynow: "Acheter",
                    donate: "Faire un don",
                    paynow: "Payer maintenant"
                }
            };

        if (CINETPAY.apps.ButtonFactory || (i.config = {
                labels: {}
            }, i.buttons = {
                buynow: 0,
                donate: 0,
                qr: 0
            }, i.create = function (a, d, f, g) {
                var now = new Date,
                    iso_format = now.toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/)
                var today = iso_format[1] + ' ' + iso_format[2];
                var i, j, k, n, o = new h;
                if (!a) return !1;
                for (j in d) n = d[j], o.add(m[j] || j, n.value, n.isEditable, n.hasOptions, n.displayOrder);
                return f = f || "buynow", o.add("apikey", a), o.add("signature", ""), o.add("cpm_trans_date", today), o.add("origine", l.replace(/\{type\}/, f)), o.add("env", ""), "qr" === f ? (i = e(o, o.items.size), o.remove("size")) : i = c(o, f), b(), this.buttons[f] += 1, g && g.appendChild(i), i
            }, CINETPAY.apps.ButtonFactory = i), "undefined" != typeof a) {
            var o, p, q, r, s, t, u = CINETPAY.apps.ButtonFactory,
                v = a.getElementsByTagName("script");
            for (s = 0, t = v.length; t > s; s++) o = v[s], o && o.src && (p = o && f(o), q = p && p.button && p.button.value, r = o.src.split("?apikey=")[1], r && (u.create(r, p, q, o.parentNode), o.parentNode.removeChild(o)))

            //On initialise les variables
            var myUriConst = initConfig();
            //On calcul la signature via Ajax
            postData(myUriConst);
        }
    }(document), "object" == typeof module && "object" == typeof module.exports && (module.exports = CINETPAY);