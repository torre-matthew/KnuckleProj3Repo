import React from "react";

$(document).on("click", "#reviews", function() {
    var item = $(this).attr("data-item");
    console.log(item);

     var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + item + "&type=video&videoCaption=closedCaption&maxResults=10&key=AIzaSyAson-jfu7sHopOIhJ3NGOqJI-khuXm4-M";
    //"https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCsTcErHg8oDvUnTzoqsYeNw&maxResults=10&key=AIzaSyAson-jfu7sHopOIhJ3NGOqJI-khuXm4-M"
    // $("#resultSpace").empty();
    
       $.ajax({
           url: queryURL,
           method: "GET"
         })
    
         // After the data from the AJAX request comes back
           .then(function(response) {
               console.log("youtube res", response);
               $("#resultSpace").hide();
    
               var resultsArray = response.items;
               if (resultsArray.length > 0) {   //execute if there is at last 1 result

                var resultsBtn = $("<button>").attr("id", "walmart").text("Go Back to Items");
                $("#reviewSpace").append(resultsBtn);
                   for (var i = 0; i < 5; i++) {
                       var newDiv = $("<div class='video'><br/><hr/>");
    
                       var videoTitle = $("<h4>" + resultsArray[i].snippet.title + "</h4>");
                       newDiv.append(videoTitle);
    
                       var videoDescription = $("<p> Description: " + resultsArray[i].snippet.description + "</p>");
                       newDiv.append(videoDescription);
    
                       var videoThumbnail = resultsArray[i].snippet.thumbnails.default.url;
                       var videoImage = $("<img src ='" + videoThumbnail + "' alt = 'video'> <br/><br/>");
                       newDiv.append(videoImage);
    
                       var vidId = resultsArray[i].id.videoId;
                       var vidIdFullLink = "https://www.youtube.com/watch?v="+vidId;
    
                       //dynamically creating "save" and "view" buttons for each search result
    
                       newDiv.append("<button id='yTLink'><a href='"+ vidIdFullLink+"'" + "target='_blank'>View</a></button>");
                    
                       $("#reviewSpace").append(newDiv);
                   }
                   
                   $("#reviewSpace").show();
               }

            
           });
});
