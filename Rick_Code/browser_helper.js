let url;
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  url = tabs[0].url;
  // use `url` here inside the callback because it's asynchronous!
});
$(function(){
  $.ajax({
      url: '../image_extraction.py',
      type: 'post',
      data: "https://www.bbc.com/news"
  }).done(function(data){
      console.log(data);
  }).fail(function(){
      console.log('failed');
  });
});