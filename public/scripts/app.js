/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function checkMseconds (ms){
  var currTime = Date.now();
  var elapsed = currTime - ms;
  if(elapsed < 60000){
    return Math.floor(elapsed / 1000) + " seconds ago";
  }else if(elapsed < 3600000 && elapsed >= 60000){
    return Math.floor(elapsed / 60000) + " minutes ago";
  }else if(elapsed < 86400000 && elapsed >= 3600000){
    return Math.floor(elapsed / 3600000) + " hours ago";
  }else if(elapsed < 2592000000 && elapsed >= 86400000){
   return Math.floor(elapsed / 86400000) + " days ago";
  }else if(elapsed >= 2592000000){
    return Math.floor(elapsed / 2592000000) + " months ago";
  }
}

function createTweetElement(obj){
  return [
  "<article class='tweet'>",
    "<header>",
      "<img src='" + obj.user.avatars.regular + "'>",
      "<h2>" + obj.user.name + "</h2>",
      "<span class='acct'>" + obj.user.handle + "</span>",
    "</header>",
    "<p>" + obj.content.text + "</p>",
    "<footer>",
      "<span class='tweetime'>" + checkMseconds(obj.created_at) + "</span>",
      "<i class='fa fa-heart' aria-hidden='true'></i>",
      "<i class='fa fa-retweet' aria-hidden='true'></i>",
      "<i class='fa fa-flag' aria-hidden='true'></i>",
    "</footer>",
  "</article>"
    ].join("");
}

function renderTweets(data){
  for (i in data){
    $('#tweets-container').prepend(createTweetElement(data[i]));
  }
}

function loadTweets(){
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/tweets",
      dataType: "json",
      success: function(data){

          renderTweets(data);



      }
    });
  }
$(document).ready(function(){
  loadTweets();
});

