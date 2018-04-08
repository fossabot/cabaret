function(e, t, n) {
  "use strict";
  var o = n("./node_modules/react-ga/src/index.js"),
    r = n.n(o),
    i = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      r.a.event({
        category: "Grid",
        action: e,
        label: t,
        value: n
      })
    },
    s = {
      setFilter: function (e, t) {
        i("Filter set", e, t)
      },
      openDetail: function (e) {
        i("Profile opened", e)
      }
    };
  t.a = s
},