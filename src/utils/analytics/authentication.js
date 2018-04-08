function(e, t, n) {
  "use strict";
  var o = n("./node_modules/react-ga/src/index.js"),
    r = n.n(o),
    i = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      r.a.event({
        category: "Authentication",
        action: e,
        label: t,
        value: n
      })
    },
    s = {
      signIn: function (e) {
        i("Sign In", e)
      },
      signUp: function (e) {
        i("Sign Up", e), window.fbq("track", "CompleteRegistration", {
          content_name: e
        })
      },
      resetPassword: function () {
        i("Reset password")
      },
      openTerms: function () {
        i("Terms of Service", "click")
      },
      openPrivacy: function () {
        i("Privacy Policy", "click")
      }
    };
  t.a = s
},