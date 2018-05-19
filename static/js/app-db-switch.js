function db_connection()  {

  var value = $("#connection_db").val();

  switch(value) {
    case "mysql":

      $(".connection-group-switch button").removeClass("active");
      $("#connection_standard").addClass("active");  

      $(".connection-scheme-group").hide();
      $(".connection-standard-group").show();
      $(".connection-ssh-group").hide();

      document.getElementById("connection_scheme").setAttribute("style","visibility:hidden");
      document.getElementById("connection_ssh").setAttribute("style","visibility:hidden");
      console.log(value);
      return;
    case "postgres":

      document.getElementById("connection_scheme").setAttribute("style","visibility:visible;");
      document.getElementById("connection_ssh").setAttribute("style","visibility:visible;");
      console.log(value);
      return;
    // case "mongodb":
    //   $(".connection-scheme-group").hide();
    //   $(".connection-standard-group").show();
    //   $(".connection-ssh-group").show();
    //   console.log(value);
    //   return;
    // case "hbase":
    //   $(".connection-scheme-group").hide();
    //   $(".connection-standard-group").show();
    //   $(".connection-ssh-group").show();
    //   console.log(value);
    //   return;
  }

};
