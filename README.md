Olo Marketing Page
==================

Development
------------------
- Built with Scss, [Bourbon](http://bourbon.io/), [Neat](http://neat.bourbon.io/) and [Bitters](http://bitters.bourbon.io/)
- [Middleman project](http://middlemanapp.com/)
- Github pages published with [middleman-gh-pages](https://github.com/neo/middleman-gh-pages)
- After committing on master, use `rake publish` to publish to gh-pages.
- [Github pages link](http://thoughtbot.github.io/olo/)
- Fireworks files with all the assets are in the thoughtbot dropbox folder design > projects > olo

gh-pages link bug
-----------------
Links tend to not work properly when publishing with middleman-gh-pages. This can be remedied by adding `/olo/` before any navbar link.

When you deploy to EC or another webhost, you will have to remove the prefixed /olo/ in front of the navigation links on the main navigation.


