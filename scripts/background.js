var redirectURLS = ['opera://startpage', 'browser://startpage', 'chrome://startpage'];

chrome.tabs.onCreated.addListener(function(tab)
{

	for (var i = 0; i < redirectURLS.length; i++)
	{
		if(tab.url.startsWith(redirectURLS[i]))
		{
			var iurl="../startpage.html";
			chrome.tabs.update(null, {url:iurl});
		}


	};
	//
	// chrome.storage.local.get('newtabpage',function(e)
	// {
	//
	// 	if(e.newtabpage !== undefined)
	// 	{
	//
	// 		for (var i = 0; i < redirectURLS.length; i++)
	// 		{
	// 			if(e.newtabpage.startsWith(redirectURLS[i]))
	// 			{
	// 					return; // user has set a default startpage as their URL
	// 			}
	//
	// 		}
	//
	//
	// 		if(e.newtabpage.indexOf(':') == -1)
	// 		{
	// 			e.newtabpage = 'http://'+e.newtabpage;
	// 		}
	//
	// 		chrome.tabs.create({url:e.newtabpage});
	//
	// 	}
	// 	else
	// 	{
	//
	// 		chrome.tabs.create({url:"settings.htm"});
	//
	// 	}
	//
	// 	chrome.tabs.remove(tab.id);
	});
