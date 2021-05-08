var citysearch = document.getElementById("citysearch");

var search = function(e){

    var search
}

console.log(citysearch);
var api5day = "https://api.openweathermap.org/data/2.5/forecast?q=" + citysearch + "&appid=bb55c27a72b025f34bdda7148dc83953";
var currentapi = "https://api.openweathermap.org/data/2.5/weather?q=" + citysearch + "&appid={bb55c27a72b025f34bdda7148dc83953}";

console.log(api5day);
console.log(currentapi);

$(".btn").on("click", function (search) {

    fetch(currentapi).then(function(e) {
        document.getElementById("results");
    })

});