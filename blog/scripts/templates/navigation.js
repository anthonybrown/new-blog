(function() {
  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<header>\n  <h1>Anthony Brown </h1>\n  <p>JavaScript developer, and a huge Ruby fan!</p>\n  <a class='ss-icon' href='https://github.com/anthonybrown'>&#xF671;</a>\n  <a class='ss-icon' href='https://twitter.com/pixelBender67'>&#xF611;</a>\n  <a class='ss-icon' href='skype:tonyb6778.sonic?userinfo'>&#xF6A0;</a>\n</header>\n<div class='bb-items'></div>");
        return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
      };
      return render.call(context);
    };
  });

}).call(this);
