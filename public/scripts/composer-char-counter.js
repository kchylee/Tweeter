$(document).ready(function(){
  $("textarea[name='text']").on('keydown keypress keyup', function(){
    var contentLength = $(this).val().length;
    if (contentLength > 140){
      $(this).siblings('.counter').attr("style", "color: red;");
    }else{
      $(this).siblings('.counter').attr("style", "color: #244751;");
    }
    var wordCount = $(this).siblings('.counter').text(140 - contentLength);
  });
});
