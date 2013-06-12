(function() {
  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<nav></nav>\n<div class='github'>\n  <a href='https://github.com/anthonybrown/blog'>\n    <img alt='Fork me on GitHub' src='https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png'>\n  </a>\n</div>\n<article></article>");
        return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
      };
      return render.call(context);
    };
  });

}).call(this);
