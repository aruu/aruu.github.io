// code to make the commit banner work

const commitBanner = document.getElementById('commit-banner');
const url = 'https://api.github.com/users/aruu/events/public';
fetch(url)
.then((resp) => resp.json())
.then(function(events) {
	var i, event;
	for (i=0; i<events.length; i++) {
		if ("PushEvent" === events[i].type) {
			event = events[i];
			break;
		}
	}
  return event;
})
.then(function(event) {
	var repo_url = event.repo.url,
	 		commmit_url = event.payload.commits[0].url;

	fetch(repo_url)
	.then((resp) => resp.json())
	.then(function(repo) {

		fetch(commmit_url)
		.then((resp) => resp.json())
		.then(function(commit) {
		  let p = document.createElement("p"),
		  		a1 = document.createElement("a"),
		  		a2 = document.createElement("a"),
		  		t1 = document.createTextNode("My most recent commit: ")
		  		t2 = document.createTextNode(" in "),
		  		strong = document.createElement("strong");

		  strong.appendChild(t1);
		  a1.href = commit.html_url;
		  a1.innerHTML = event.payload.commits[0].message;
		  a2.href = repo.html_url;
		  a2.innerHTML = event.repo.name;
		  p.appendChild(strong);
		  p.appendChild(document.createElement("br"));
		  p.appendChild(a1);
		  p.appendChild(t2);
		  p.appendChild(a2);
		  commitBanner.appendChild(p);
		  return;
		})
	})
})
