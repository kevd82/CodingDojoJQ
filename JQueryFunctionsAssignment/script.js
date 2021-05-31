$(document).ready(function () {
    $(".click").click(function () {
        alert("You have triggered an event!")
    })
    $("#hide").click(function () {
        $("#Oron").hide()
    })
    $("#show").click(function () {
        $("#Oron").show()
    })
    $("#toggle").on("click", function () {
        $("#DeathDealer").toggle('slow');
    });
    $("#slideUp").click(function(){
        $("#Brath").slideUp("slow")
    })
    $("#slideDown").click(function () {
        $("#Brath").slideDown("slow")
    })
    $("#slideToggle").on("click", function () {
        $("#Bran").slideToggle('slow');
    });
    $("#fadeOut").click(function (){
        $("#Conan").fadeOut();
    })
    $("#fadeIn").click(function (){
        $("#Conan").fadeIn();
    })
    $(".addClass").click(function (){
        $(".addClass").addClass("click");
    })
    $("#before").click(function (){
        $("#Ruga").before("<p>Sculpted by David Soderquist</p>");
    })
    $("#after").click(function (){
        $("#Ruga").after("<p>Painted by Primeval of Barbaric Splendor</p>");
    })
    $("#append").click(function (){
        $("#append").append("<p>button</p>");
    })
    $("#html").click(function (){
        $("p").html("CROM CARES NOT WHETHER PUNY MORTALS CLICK BUTTONS!");
    })
    $("#attr").click(function (){
        $("#Brath").attr("alt", "Brath The Mighty Stag");
    })
    $("#val").click(function displayVals(){
        var Barbarism_Level = $("#BarbarismLevel").val()
        $("#valtext").html(<b>Barbarism_Level</b>);
    })
    $("#text").click(function displayText (){
        var JQValText = $("#JQVal").text()
        $("#texttext").html(JQValText);
    })
})