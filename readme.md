# Grunt for Bones

## Get Started
1. Download [Bones](http://themble.com/bones/)
2. Add [Gruntfile.js](https://raw.githubusercontent.com/luetkemj/grunt-for-bones/master/Gruntfile.js) and [package.json](https://raw.githubusercontent.com/luetkemj/grunt-for-bones/master/package.json) and [bower.json](https://raw.githubusercontent.com/luetkemj/grunt-for-bones/master/bower.json) to bones at root.
3. cd to bones
4. npm install
5. bower install
6. grunt init
6. add to footer.php just before the closing body tag

```
<script src="//localhost:35729/livereload.js"></script>
```
7. grunt dev
8. add to footer.php just before closing body tag the code that the terminal spits back out at you. should look like
```
<script type='text/javascript' id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.2.7.6.js'><\/script>".replace("HOST", location.hostname));
//]]></script>
```
6. refresh browser
9. make happy!
10. grunt build when ready to push to production. creates a build folder of minimized everything. send that to your server and breathe easy.

### Requirements
* [SASS](http://sass-lang.com/)
* [Susy](http://susydocs.oddbird.net/en/latest/install/)
* [Breakpoint](http://breakpoint-sass.com/)

### Dev Notes
To get Susy and Breakpoint working you need to include them in scss/style.scss. Add the following @imports and susy config above all other @imports in that file.

```scss
@import "../../bower_components/susy/sass/susy";
@import "../../bower_components/breakpoint-sass/stylesheets/breakpoint";

$susy: (
  columns: 12,
  gutters: (2/3),
  math: fluid,
  output: float,
  gutter-position: after,
  grid-padding: 2em,
  debug: (
    image: hide,
    color: rgba(#66f, .25),
    output: background,
    toggle: overlay,
  ),
);

$wrapper-width: 1600px;
```

Bones has media queries in seperate files that it includes later. This is neat but Susy does not work out of the box in those files. You will need to individually include Susy in each file if you want access to Susy stuff.

Alternately you can just use breakpoint and add your media queries inline. Grunt will parse the style sheet and move all queries to the bottom of a single minified style sheet. You can then ignore/remove bones default way of handling media queries.
