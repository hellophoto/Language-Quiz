$(document).ready(function() {
  $("form#whichLanguage").submit(function(event){

    const color= $("select#color").val();
    const activity= $("select#activity").val();
    const food= $("select#food").val();
    const animal= $("select#animal").val();
    const travel= $("select#travel").val();

    if (color === "Blue") {
      language = "C#";
      $("#Rust, #Javascript,#Swift").hide();
      $("#C#").show();
    }
    else if (food === "Pasta") {
      language = "Rust";
      $("#C#, #Swift, #Javascript").hide();
      $("#Rust").show();
    }
    else if (animal === "Dolphin" && travel === "Hawaii") {
      language = "Swift";
      $("#C#, #Rust, #Javscript").hide();
      $("#Swift").show();
    }
    else if (activity === "Traveling") {
      language = "Javascript";
      $("#C#, #Rust, #Swift").hide();
      $("#Javascript").show();
    }
    else {
      language = "Swift";
      $("#Javascript, #C#, #Ruby").hide();
      $("#Swift").show();
    }
    $("#language").text(language);
    $("#yourMatch").show();
    $("whichLanguage").hide();
    $("h5").hide();

  }
)}
)
