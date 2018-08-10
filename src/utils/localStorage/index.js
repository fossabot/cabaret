function(e, t, n) {
  "use strict";
  (function (e) {
    var o = (n("./node_modules/localStorage/lib/localStorage.js"), void 0);
    e.process, o = e.window.localStorage;
    var r = "CabareAppUser",
      i = "CabareDeviceId",
      s = "CabareWelcomeTutorialSeen",
      a = "CabareAnnouncementSeen",
      u = {
        setUser: function (e) {
          o.setItem(r, JSON.stringify(e))
        },
        getUser: function () {
          var e = o.getItem(r),
            t = JSON.parse(e);
          return t
        },
        removeUser: function () {
          o.removeItem(r)
        },
        getDeviceId: function () {
          return o.getItem(i)
        },
        setDeviceId: function (e) {
          o.setItem(i, e)
        },
        removeDeviceId: function () {
          o.removeItem(i)
        },
        setWelcomeTutorialSeen: function () {
          o.setItem(s, "seen")
        },
        getWelcomeTutorialState: function () {
          var e = o.getItem(s);
          return e
        },
        setAnnouncementSeen: function () {
          o.setItem(a, "seen")
        },
        getAnnouncementState: function () {
          var e = o.getItem(a);
          return e
        }
      };
    t.a = u
  }).call(t, n("./node_modules/webpack/buildin/global.js"))
},
