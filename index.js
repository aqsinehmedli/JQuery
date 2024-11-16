$("#container #main").css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});

$("#container #main img").css({
    width: "550px",
    height: "350px",
    display: "flex",
    borderRadius: "15px"
})
$("#container #second").css({
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    justifyContent: "center",
    alignItems: "center"
})
$("#container #second .walpaper img").css({
    gap: "30px",
    width: "150px",
    height: "100px"
})
$("h1").css({
    textAlign: "center"
})

$("#container #second .walpaper img").click(function() {
    const newSrc = $(this).attr("src"); 
    $("#container #main img").attr("src", newSrc); 
});

$("#container #main .fas.fa-caret-left").click(function(){
    const images = $("#container #second .walpaper img")
    const currentSrc = $("#container #main img").attr("src")

    let newIndex = images.index(images.filter(`[src="${currentSrc}"]`)) - 1;
    if(newIndex<0)
        newIndex = images.length - 1

    const newSrc = images.eq(newIndex).attr("src")
    $("#container #main img").attr("src",newSrc)
});


$("#container #main .fas.fa-caret-right").click(function(){
    const images = $("#container #second .walpaper img")
    const currentSrc = $("#container #main img").attr("src")

    let newIndex = images.index(images.filter(`[src="${currentSrc}"]`)) + 1;
    if(newIndex>=images.length)
        newIndex = 0

    const newSrc = images.eq(newIndex).attr("src")
    $("#container #main img").attr("src",newSrc)
});