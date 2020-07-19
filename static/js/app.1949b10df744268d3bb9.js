webpackJsonp([7], {
  EZaI: function (n, e) {},
  NHnr: function (n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = t("7+uW"),
      r = t("Xxa5"),
      i = t.n(r),
      s = t("exGp"),
      o = t.n(s),
      c = t("v58w"),
      u = {
        data: function () {
          return {
            newArr: []
          }
        },
        created: function () {
          var n = this;
          return o()(i.a.mark(function e() {
            var t;
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, Object(c.a)();
                case 2:
                  t = e.sent, n.newArr = t.slice(0, 5);
                case 4:
                case "end":
                  return e.stop()
              }
            }, e, n)
          }))()
        }
      },
      l = {
        render: function () {
          var n = this,
            e = n.$createElement,
            t = n._self._c || e;
          return t("div", {
            staticClass: "news-header"
          }, [t("div", {
            staticClass: "logo"
          }, [t("router-link", {
            attrs: {
              to: "/"
            }
          }, [t("img", {
            attrs: {
              src: "https://pic.rmb.bdstatic.com/b831597fe933bcf8595a6090a4f3da32.jpeg@wm_2,t_55m+5a625Y+3L+a1gea1queahOaAnee7tA==,fc_ffffff,ff_U2ltSGVp,sz_25,x_16,y_16",
              alt: ""
            }
          })])], 1), n._v(" "), t("nav", [t("ul", n._l(n.newArr, function (e) {
            return t("li", {
              key: e.channelId
            }, [t("router-link", {
              attrs: {
                to: {
                  name: "ChallenNews",
                  params: {
                    id: e.channelId
                  }
                }
              }
            }, [n._v(n._s(e.name))])], 1)
          }), 0)]), n._v(" "), t("div", {
            staticClass: "login"
          }, [t("router-link", {
            attrs: {
              to: "/login"
            }
          }, [n._v("登陆")]), n._v(" "), t("span", [n._v("/")]), n._v(" "), t("router-link", {
            attrs: {
              to: "/reg"
            }
          }, [n._v("注册")])], 1)])
        },
        staticRenderFns: []
      };
    var d = {
        data: function () {
          return {}
        },
        components: {
          NewsHeader: t("VU/8")(u, l, !1, function (n) {
            t("VJJ/")
          }, "data-v-5420b3fa", null).exports
        }
      },
      p = {
        render: function () {
          var n = this.$createElement,
            e = this._self._c || n;
          return e("div", {
            attrs: {
              id: "app"
            }
          }, [e("header", [e("div", {
            staticClass: "container"
          }, [e("NewsHeader")], 1)]), this._v(" "), e("router-view")], 1)
        },
        staticRenderFns: []
      };
    var f = t("VU/8")(d, p, !1, function (n) {
        t("XM1T")
      }, "data-v-09972d8c", null).exports,
      h = (t("m0iu"), t("EZaI"), t("/ocq"));
    a.a.use(h.a);
    var v = new h.a({
      routes: [{
        path: "/",
        component: function () {
          return Promise.all([t.e(0), t.e(1)]).then(t.bind(null, "wUZA"))
        }
      }, {
        path: "/login",
        component: function () {
          return Promise.all([t.e(0), t.e(3)]).then(t.bind(null, "K31e"))
        }
      }, {
        path: "/reg",
        component: function () {
          return Promise.all([t.e(0), t.e(4)]).then(t.bind(null, "RKj2"))
        }
      }, {
        path: "/channel/:id",
        name: "ChallenNews",
        component: function () {
          return t.e(2).then(t.bind(null, "E7pi"))
        }
      }, {
        path: "*",
        component: function () {
          return Promise.all([t.e(0), t.e(5)]).then(t.bind(null, "slNN"))
        }
      }],
      mode: "history"
    });
    new a.a({
      render: function (n) {
        return n(f)
      },
      router: v
    }).$mount("#app")
  },
  "VJJ/": function (n, e) {},
  XM1T: function (n, e) {},
  m0iu: function (n, e) {},
  v58w: function (n, e, t) {
    "use strict";
    var a = t("Xxa5"),
      r = t.n(a),
      i = t("exGp"),
      s = t.n(i),
      o = t("mtWM"),
      c = t.n(o),
      u = "d6a6998fdb9a4c2ea28e72631d5a44af";
    t.d(e, "a", function () {
      return p
    }), t.d(e, "b", function () {
      return f
    });
    var l, d, p = (l = s()(r.a.mark(function n() {
        var e;
        return r.a.wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              return n.next = 2, c.a.get("http://ali-news.showapi.com/channelList", {
                headers: {
                  Authorization: "APPCODE " + u
                }
              });
            case 2:
              return e = n.sent, n.abrupt("return", e.data.showapi_res_body.channelList);
            case 4:
            case "end":
              return n.stop()
          }
        }, n, this)
      })), function () {
        return l.apply(this, arguments)
      }),
      f = (d = s()(r.a.mark(function n(e) {
        var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        return r.a.wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              return n.next = 2, c.a.get("http://ali-news.showapi.com/newsList", {
                headers: {
                  Authorization: "APPCODE " + u
                },
                params: {
                  channelId: e,
                  page: a,
                  maxResult: i,
                  needContent: 1
                }
              });
            case 2:
              return t = n.sent, console.log(t.data), n.abrupt("return", t.data.showapi_res_body.pagebean);
            case 5:
            case "end":
              return n.stop()
          }
        }, n, this)
      })), function (n) {
        return d.apply(this, arguments)
      });
    f("5572a108b3cdc86cf39001ce")
  }
}, ["NHnr"]);
//# sourceMappingURL=app.1949b10df744268d3bb9.js.map
