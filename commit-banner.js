// code to make the commit banner work

const commitBanner = document.getElementById('commit-banner');
const url = 'https://api.github.com/users/aruu/events/public';
fetch(url)
.then((resp) => resp.json())
.then(function(events) {
	let i, event;
	for (i=0; i<events.length; i++) {
		if ("PushEvent" === events[i].type) {
			event = events[i];
			break;
		}
	}

	let url2 = event.payload.commits[0].url;
	fetch(url2)
	.then((resp) => resp.json())
	.then(function(commit) {
	  let p = document.createElement("P"),
	  		a = document.createElement("a"),
	  		t = document.createTextNode("Most recent public commit: ");
	  a.href = commit.html_url;
	  a.innerHTML = commit.html_url;
	  a.style.fontSize = "14px";
	  p.appendChild(t);
	  p.appendChild(a);
	  commitBanner.appendChild(p);
	  return commit.html_url;
	})
	.catch(function(error) {
	  console.log(error);
	});

  return;
})
.catch(function(error) {
  console.log(error);
});
