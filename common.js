function fixRelativeLinks() {
	if (document.URL.match("file://")) return;
	var elements = document.getElementsByClassName("asset");

  for (var i=0; i<elements.length; i++) {
  	var attributes = elements[i].attributes;

	  for (var j=0; j<attributes.length; j++) {

	  	if (attributes[j].name === "src" || attributes[j].name === "href") {
	  		var old = attributes[j].value;
	  		attributes[j].value = old.replace(/assets\//, "https://aruu-b21e7.firebaseapp.com/assets/");
	  	}

	  }

  }
}