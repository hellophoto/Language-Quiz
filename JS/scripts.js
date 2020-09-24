$(document).ready(function() {
  $("form#whichLanguage").event.preventDefault(); {

    const color= $("select#color").val();
    const activity= $("select#activity").val();
    const food= $("select#food").val();
    const animal= $("select#animal").val();
    const travel= $("select#travel").val();
    let language

    if (color === "Blue") {
      language = "CSharp";
      $("#Rust, #Javascript, #Swift").hide();
      $("#CSharp").show();
    }
    else if (food === "Pasta") {
      language = "Rust";
      $("#CSharp, #Swift, #Javascript").hide();
      $("#Rust").show();
    }
    else if (animal === "Dolphin" && travel === "Hawaii") {
      language = "Swift";
      $("#CSharp, #Rust, #Javscript").hide();
      $("#Swift").show();
    }
    else if (activity === "Traveling") {
      language = "Javascript";
      $("#CSharp, #Rust, #Swift").hide();
      $("#Javascript").show();
    }
    else {
      language = "Swift";
      $("#Javascript, #CSharp, #Ruby").hide();
      $("#Swift").show();
    }
    $("#language").text(language);
    $("#yourMatch").show();
    $("whichLanguage").hide();
    $("p").hide();
  }
})
