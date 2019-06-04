$(document).ready(function() {
  $("button.meow").click(function() {
    $("ul#dog").prepend("<li>BARK!</li>")
  });
  $("button.bark").click(function() {
    $("ul#cat").prepend("<li>MEOW!</li>")
  });
});
