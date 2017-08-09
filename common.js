function fixRelativeLinks() {
	if (document.URL.match("file://")) return;
	var elements = document.getElementsByClassName("asset");

  for (var i=0; i<elements.length; i++) {
  	var attributes = elements[i].attributes;

	  for (var j=0; j<attributes.length; j++) {
  		var old = attributes[j].value;

	  	if (old.match(/assets\//) && attributes[j].name !== "id") {
	  		attributes[j].value = old.replace(/assets\//, "https://aruu-b21e7.firebaseapp.com/assets/");
	  	}

	  }

  }
}