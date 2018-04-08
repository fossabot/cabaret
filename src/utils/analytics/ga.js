function(e, t, n) {
  "use strict";
  var o = n("./node_modules/react-ga/src/index.js"),
    r = n.n(o),
    i = n("./app/config.js");
  r.a.initialize(i.a.ga, {
    debug: !1
  });
  var s = function (e) {
    r.a.set({
      page: e
    }), r.a.pageview(e)
  },
    a = function (e) {
      r.a.modalview(e)
    };
  t.a = {
    pageView: s,
    modalView: a
  }
},