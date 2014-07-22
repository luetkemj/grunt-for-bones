# Grunt for Bones

## Get Started
1. Download [Bones](http://themble.com/bones/)
2. Add [Gruntfile.js](https://raw.githubusercontent.com/luetkemj/grunt-for-bones/master/Gruntfile.js) and [package.json](https://raw.githubusercontent.com/luetkemj/grunt-for-bones/master/package.json) to bones at root.
3. cd to bones
4. npm install
5. add to footer.php just before the closing body tag

```	
<script src="//localhost:35729/livereload.js"></script> 
```

6. grunt sync
7. check terminal for scripts to add to footer.php
8. grunt watch
9. make happy!

### Requirements
* [SASS](http://sass-lang.com/)
* [Compass](http://compass-style.org/)
* [Susy](http://susydocs.oddbird.net/en/latest/install/)
* [Breakpoint](http://breakpoint-sass.com/)


### Planned
* clean out some stuff I don't use or need to rewrite (the sass structure primarily) with https://www.npmjs.org/package/grunt-remove or  https://github.com/gruntjs/grunt-contrib-clean
* rewrite and structure a better sass directory
* pull it down with https://github.com/twolfson/grunt-curl or a contrib version of the same if I can find it
* bundler for environment setup?
* bower?
* upstream fork of bones?
* some other obscure things that sounds like I know what I'm talking about?
* one click wonder
* wizards