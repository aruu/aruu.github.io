# aruu.github.io

## Structure
This website is composed of two components: the main code (HTML, CSS, JavaScript) hosted on GitHub with the corresponding github.io URL being nice enough to share around, and the assets (images, other) hosted on Firebase. How this is done is having a false website deployed on Firebase, where everything redirects to the github.io URL except for the assets. Motivation is similar to [this person's post](http://blog.davidebbo.com/2014/11/using-issues-for-github-pages-screenshots.html), because there are downsides (IMO) to GitHub's [image](https://help.github.com/articles/about-anonymized-image-urls/) [hosting](https://stackoverflow.com/questions/18360714/official-image-host-for-github-projects). However, I end up with a better workflow because I don't need to create links for each individual resource, nor do I have to modify the HTML when an asset is updated.

## Results
So what's the result of going through this extra effort?
1. My git history doesn't become bloated with updates to binary files.
2. The Firebase mirror of the app always redirects, so I only need to deploy when I update assets, and no one will see the outdated version.
3. The GitHub mirror still remains the official version with a nicer URL.
4. I can stage my new assets locally without the need to deploy to a server to test.
5. My assets can just be dropped into a folder then deployed in one line, no need to individually retrieve links for each resource. Updating is just as easy with no change to the HTML.
