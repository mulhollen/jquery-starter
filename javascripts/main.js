"use strict";


// check it out these two things give the same thing

    // vanilla js
    var topArticle = document.getElementById("top-article");
    console.log("top article", topArticle);

    // jquery 
    var article = $("#top-article");
    console.log("jquery #top-article", article[0]);


var allButtons = document.getElementsByTagName("button");
 console.log("allButtons by TagName", allButtons);
//rememeber this returns an array
var jbutton = $("button");
    console.log("jbutton", jbutton, jbutton.html());


$(".article--main").each((arrayIndex, currentElement) => {
    // console.log("article--main", arrayIndex,$(currentElement).html());
    $(currentElement).html("hello world");
});


var umbreallaElement = $("h1[umbrella='open']");
console.log("umbrella text: ", umbreallaElement.html());

// Handling events

// if the text is hide songs .hide() with slow animation and change the text to show songs - else do the opposite
$("#destroyer").click((evt) => {
    if ($("#destroyer").text() == 'Hide Songs') {
        $(".song-container").hide("slow");
        $("#destroyer").text('Show Songs');
    } else {
        $(".song-container").show("fast");
        $("#destroyer").text('Hide Songs');
    }
});



function functionIWantjQueryToExecute(songList) {
    console.log("who is this", songList);

    if (songList.songs) {
        for (var i = 0; i < songList.songs.length; i++) {
            var currentSong = songList.songs[i];
            $("#list-of-songs").append(`<h1>${currentSong.title}</h1>`);
            $("#list-of-songs").append(`<div>Performed by ${currentSong.artist}</div>`);
            $("#list-of-songs").append(`<div>On the album <strong>${currentSong.album}</strong></div>`);
        }
    }
}


// basically what we did previously grabbing json data but easier because NSS
function makeAPICall(url) {
    return $.ajax({
        url: url,
        dataType: "json"
    });
}

makeAPICall('javascripts/songs.json')
    .then((resolve) => {
        console.log("makeCallResolve", resolve);
        functionIWantjQueryToExecute(resolve);
    },
    (reject) => {
        console.log("SOMETHING WENT REALLY WRONG");
    });