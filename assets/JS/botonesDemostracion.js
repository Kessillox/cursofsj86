$(document).ready(function () {
  $("#dataTable").load("table.html", function () {
    $("#example").DataTable();
    $("#dataTable").hide();
  });
});
$(document).ready(function () {
  $("#htmlTable").load("table.html");
});
$(document).ready(function () {
  // $('#example').DataTable();
  $("#hide-t").click(function () {
    $("#htmlTable").hide();
  });
  $("#show-dt").click(function () {
    $("#dataTable").show();
  });
});
$(document).ready(function () {
  $("#animate").css("position", "relative");
  $("#animate").click(function () {
    $("#animate").animate({
      left: "+=250px",
      opacity: "0.5",
      height: "150px",
      width: "150px",
    });
  });
});