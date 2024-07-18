(() => {
  var e = {
      359: (e, t, n) => {
        const r = n(432),
          o = function (e, t, n) {
            return !(
              !e ||
              (t && 0 === e.toString().trim().length) ||
              (n && isNaN(+e))
            );
          },
          u = function (e, t) {
            return `User ID: ${e} created an article titled ${t}`;
          };
        e.exports = {
          getUserInputs: function () {
            return {
              useridInput: document.querySelector("input#userid"),
              titleInput: document.querySelector("input#title"),
              articleInput: document.querySelector("textarea#article"),
            };
          },
          validateInput: o,
          generateResult: u,
          createElement: function (e, t, n = null) {
            const r = document.createElement(e);
            return n && r.classList.add(n), (r.textContent = t), r;
          },
          checkAndGenerate: async function (e, t, n) {
            if (!o(e, !0, !0) || !o(t, !0, !1) || !o(n, !0, !1)) return !1;
            const c = await r({ title: t, body: n, userId: e }),
              { userId: s, title: i } = c;
            return u(s, i);
          },
        };
      },
      432: (e, t, n) => {
        const r = n(300);
        e.exports = async function (e) {
          const t = await r("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(e),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          });
          return await t.json();
        };
      },
      300: (e, t) => {
        "use strict";
        var n = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== n) return n;
          throw new Error("unable to locate global object");
        })();
        (e.exports = t = n.fetch),
          n.fetch && (t.default = n.fetch.bind(n)),
          (t.Headers = n.Headers),
          (t.Request = n.Request),
          (t.Response = n.Response);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var u = (t[r] = { exports: {} });
    return e[r](u, u.exports, n), u.exports;
  }
  (() => {
    const { createElement: e, getUserInputs: t, checkAndGenerate: r } = n(359),
      o =
        (n(432),
        async () => {
          const { useridInput: n, titleInput: o, articleInput: u } = t(),
            c = await r(n.value, o.value, u.value),
            s = e("p", c);
          document.querySelector(".article-list").appendChild(s);
        });
    document.querySelector("#addNewPostBtn").addEventListener("click", o);
  })();
})();
