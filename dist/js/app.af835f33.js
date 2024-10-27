(function () {
  "use strict";
  var t = {
      333: function (t, e, n) {
        var r = n(751),
          o = n(641);
        function i(t, e, n, r, i, c) {
          const a = (0, o.g2)("Home");
          return (
            (0, o.uX)(),
            (0, o.CE)(
              o.FK,
              null,
              [
                e[0] || (e[0] = (0, o.Lk)("h1", null, "Flockly", -1)),
                (0, o.bF)(a, { msg: "Welcome to Your Vue.js App" }),
              ],
              64,
            )
          );
        }
        var c = n(33);
        const a = { id: "main" },
          s = ["src"],
          l = { class: "info" };
        function u(t, e, n, r, i, u) {
          const f = (0, o.g2)("vue-feather");
          return (
            (0, o.uX)(),
            (0, o.CE)("div", a, [
              ((0, o.uX)(!0),
              (0, o.CE)(
                o.FK,
                null,
                (0, o.pI)(
                  i.posts,
                  (t) => (
                    (0, o.uX)(),
                    (0, o.CE)("div", { class: "card", key: t.id }, [
                      (0, o.Lk)(
                        "img",
                        { src: t.img.url, alt: "", class: "cardImg" },
                        null,
                        8,
                        s,
                      ),
                      (0, o.Lk)("div", l, [
                        (0, o.bF)(
                          f,
                          {
                            type: "star",
                            class: "like",
                            onClick: (e) => u.likePost(t),
                          },
                          null,
                          8,
                          ["onClick"],
                        ),
                        (0, o.Lk)("p", null, (0, c.v_)(t.likes) + " stars", 1),
                      ]),
                    ])
                  ),
                ),
                128,
              )),
            ])
          );
        }
        var f = n(335);
        const d = "https://skilled-desk-bda231d19c.strapiapp.com/api",
          p = async () => {
            try {
              const t = await f.A.get(`${d}/posts?populate=img`);
              return t.data;
            } catch (t) {
              throw (console.error("Error fetching data from Strapi:", t), t);
            }
          },
          v = async (t, e) => {
            try {
              const n = await f.A.put(`${d}/posts/${t}`, {
                data: { likes: e + 1 },
              });
              return n.data;
            } catch (n) {
              throw (console.error("Error updating like in Strapi:", n), n);
            }
          };
        var m = {
            data() {
              return { posts: [] };
            },
            name: "HomeComponent",
            props: { msg: String },
            async mounted() {
              try {
                let t = await p();
                (this.posts = t.data.sort(
                  (t, e) => new Date(e.createdAt) - new Date(t.createdAt),
                )),
                  console.log(this.posts),
                  this.$nextTick(() => {
                    this.changeFillOnHover();
                  });
              } catch (t) {
                console.error("Failed to fetch posts:", t);
              }
            },
            methods: {
              changeFillOnHover() {
                const t = document.querySelectorAll(".like");
                t.forEach((t) => {
                  t.addEventListener("mouseenter", () => {
                    const e = t.querySelector("svg");
                    e && (e.style.fill = "#7a6263");
                  }),
                    t.addEventListener("mouseleave", () => {
                      const e = t.querySelector("svg");
                      e && (e.style.fill = "none");
                    });
                });
              },
              async likePost(t) {
                try {
                  const e = await v(t.documentId, t.likes);
                  e && (t.likes += 1);
                } catch (e) {
                  console.error("Failed to add like:", e);
                }
              },
            },
          },
          h = n(262);
        const y = (0, h.A)(m, [
          ["render", u],
          ["__scopeId", "data-v-c5ec5e16"],
        ]);
        var g = y,
          k = { name: "App", components: { Home: g } };
        const b = (0, h.A)(k, [["render", i]]);
        var w = b,
          O = n(613);
        (0, r.Ef)(w).component(O.A.name, O.A).mount("#app");
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = t),
    (function () {
      var t = [];
      n.O = function (e, r, o, i) {
        if (!r) {
          var c = 1 / 0;
          for (u = 0; u < t.length; u++) {
            (r = t[u][0]), (o = t[u][1]), (i = t[u][2]);
            for (var a = !0, s = 0; s < r.length; s++)
              (!1 & i || c >= i) &&
              Object.keys(n.O).every(function (t) {
                return n.O[t](r[s]);
              })
                ? r.splice(s--, 1)
                : ((a = !1), i < c && (c = i));
            if (a) {
              t.splice(u--, 1);
              var l = o();
              void 0 !== l && (e = l);
            }
          }
          return e;
        }
        i = i || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
        t[u] = [r, o, i];
      };
    })(),
    (function () {
      n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return n.d(e, { a: e }), e;
      };
    })(),
    (function () {
      n.d = function (t, e) {
        for (var r in e)
          n.o(e, r) &&
            !n.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      n.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var t = { 524: 0 };
      n.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, r) {
          var o,
            i,
            c = r[0],
            a = r[1],
            s = r[2],
            l = 0;
          if (
            c.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (o in a) n.o(a, o) && (n.m[o] = a[o]);
            if (s) var u = s(n);
          }
          for (e && e(r); l < c.length; l++)
            (i = c[l]), n.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return n.O(u);
        },
        r = (self["webpackChunkminiproject"] =
          self["webpackChunkminiproject"] || []);
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
    })();
  var r = n.O(void 0, [504], function () {
    return n(333);
  });
  r = n.O(r);
})();
//# sourceMappingURL=app.af835f33.js.map
