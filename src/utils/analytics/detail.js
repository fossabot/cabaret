function(e, t, n) {
  "use strict";
  var o = n("./node_modules/react-ga/src/index.js"),
    r = n.n(o),
    i = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      r.a.event({
        category: "Profile Detail",
        action: e,
        label: t,
        value: n
      })
    },
    s = {
      toggleFavorite: function (e) {
        i("Favorite Profile", e)
      },
      share: function () {
        i("Share Profile")
      },
      requestInfo: function () {
        i("Personal Info Requested")
      },
      block: function () {
        i("User Blocked")
      },
      report: function (e) {
        i("User Reported", e)
      }
    };
  t.a = s
},