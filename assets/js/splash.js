var logger = (function () {
    var o = null,
      n = {
        enableLogger: function () {
          null != o && (window.console.log = o);
        },
        disableLogger: function () {
          (o = console.log), (window.console.log = function () {});
        },
      };
    return n;
  })();
  
  $(document).ready(function () {
    logger.disableLogger();
  });
  
  $("#zTwo")
    .delay(800)
    .queue(function (next) {
      $(this).css("transform", "rotate(90deg)");
      next();
    });
  
  $("#splashScreen")
    .delay(1000)
    .queue(function (next) {
      $(this).css("top", "-100vh");
      $(this).css("opacity", "0.6");
      next();
    });
  