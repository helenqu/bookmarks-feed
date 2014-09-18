function onClick(event) {
	chrome.tabs.create({ url: event.srcElement.href });
	return false;
}

function buildBookmarksList(bookmarksList) {
	var popupDiv = document.getElementById('popupdiv');
	var ol = popupDiv.appendChild(document.createElement('ol'));

	for (var ii = 0; ii < bookmarksList.length; ii++) {
		var li = ol.appendChild(document.createElement('li'));
		var a = li.appendChild(document.createElement('a'));
		a.href = bookmarksList[ii].url;
		a.appendChild(document.createTextNode(bookmarksList[ii].title));
		a.addEventListener('click', onClick);
	}
}

chrome.bookmarks.getRecent(10,buildBookmarksList);
