$("#addButton").on("click", function(e){
    e.preventDefault();
    var newBurg = {
        burger_name: $("#burger_name").val().trim(),
        devoured: 0
    }

    // console.log("Add Button clicked: " + $("#burger_name").val());
    $.ajax("/api/burgers",{
        method: "POST",
        data: newBurg
    }).then(function(){
        console.log("added the " + newBurg.burger_name);
        location.reload();
    });
});

$(".btn-dark").on("click", function(e){
    e.preventDefault();
    toBeDevoured = $(this).attr("data-id"); 
    console.log($(this).attr("data-id") + " clicked");
    $.ajax("/api/burgers/"+toBeDevoured,{
        method: "PUT",
        data: toBeDevoured
    }).then(function(returned){
        console.log(returned);
        location.reload();
    });
});
