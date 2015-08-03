require(["gitbook", "jquery"], function(gitbook, $) {
    gitbook.events.bind("page.change", function() {
      var colors = ['red', 'green', 'blue'];
      $(".mole").css(
        'background-color', colors[Math.floor(Math.random() * 3)]
      );
    });
});
