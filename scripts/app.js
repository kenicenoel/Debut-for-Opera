$(document).ready(function()
{
  var src;
  var url="http://bing.com/search?q=";
  var engine;
  var provider;
  var murl = "http://outlook.com/";
  var placeholderText;
  var text;

  // Make images not rightclickable
  $('img').bind('contextmenu', function(e)
  {
    return false;
});

  // Load the user saved background, footer text and search engine
  chrome.storage.sync.get('backgroundSrc', function(options)
        {

              if(options.backgroundSrc)
              {

                src= options.backgroundSrc;
                $('body').css('background','url('+src+')');
                $('body').css('background-size','cover');


             }

        });


        chrome.storage.sync.get('searchEngine', function(options)
              {

                    if(options.searchEngine)
                    {

                      engine= options.searchEngine;
                      if(engine == "bing")
                      {
                        url="http://bing.com/search?q=";
                          $('#searchIcon').attr('src', '../images/bing.png');
                      }

                      else if (engine == "google")
                      {
                        url="http://google.com/search?q=";
                        $('#searchIcon').attr('src', '../images/google.jpg');
                        $('#search').attr('placeholder', 'Search with Google');
                      }

                      else if (engine == "duckduckgo")
                      {
                        url="https://duckduckgo.com/?q=";
                        $('#searchIcon').attr('src', '../images/duckduckgo.jpg');
                        $('#search').attr('placeholder', 'Search with DuckDuckGo');
                      }

                      else if (engine == "yahoo")
                      {
                        url="https://search.yahoo.com/search?p=";
                        $('#searchIcon').attr('src', '../images/yahoo.png');
                        $('#search').attr('placeholder', 'Search with Yahoo');
                      }



                   }

              });


              chrome.storage.sync.get('mail', function(options)
                    {

                          if(options.mail)
                          {

                            provider= options.mail;
                            if(provider == "outlook")
                            {
                              murl="http://outlook.com/";
                              $('#mail').data('powertip', 'Outlook');

                            }

                            else if (provider == "gmail")
                            {
                              murl="http://mail.google.com/";
                              $('#mail').data('powertip', 'Gmail');

                            }


                            else if (provider == "yahoo")
                            {
                              murl="http://mail.yahoo.com/";
                              $('#mail').data('powertip', 'Yahoo Mail');

                            }



                         }

                    });

              chrome.storage.sync.get('footerText', function(options)
                    {

                          if(options.footerText)
                          {

                            text= options.footerText;
                            $('#footer').text(text);

                         }

                    });






      // When the user presses the enter key, search
      $(document).keypress(function(event)
      {
        var keypress = event.which;
        var query=$("#search").val();
        if(keypress == 13 && query!="")
          {
            var query=$("#search").val();

            window.location.replace(url+query);
          }


      });

      // These functions are run when the items on the startpage are clicked

      $("#icon").click(function() // when the search button is clicked
      {
        var query=$("#search").val();
        // var url="http://bing.com/search?q=";
        window.location.replace(url+query);
      });

      $("#mail").click(function()  //when the mail icon is clicked
      {
        var iurl=murl;

      chrome.tabs.update(null, {url:iurl});
      });

      $("#faves").click(function()  //when the heart icon is clicked
      {
        var iurl="chrome://bookmarks";

      chrome.tabs.update(null, {url:iurl});
      });

        $("#download").click(function() //when the arrow icon is clicked
        {
          var iurl="chrome://downloads/";
          chrome.tabs.update(null, {url:iurl});
        });

      $("#store").click(function()  //when the chrome icon is clicked
      {
        var iurl="https://addons.opera.com/extensions/?ref=menu";
        chrome.tabs.update(null, {url:iurl});
      });




      $("#settings").click(function() //when the arrow icon is clicked
      {
        var iurl="options.html";
        chrome.tabs.update(null, {url:iurl});
        //chrome.tabs.create({url:'options.html'});
      });


// Uses the jQuery powerTip plugin

      $('.tasks').powerTip
      ({
	        placement: 'n' // north tooltip position

      });


            $('#settings').powerTip
            ({
      	        placement: 'w' // west tooltip position
            });



   });
