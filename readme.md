# Bones Grunt Boilerplate

> An attempt to create a simple boilerplate grunt setup for my
favorite wordpress starter theme Bones.

## Get Started
1. Download [Bones](http://themble.com/bones/)
2. Add Gruntfile.js and package.json to bones at root.
3. cd to bones
4. npm install
5. grunt compass
6. grunt
7. add to footer just before the closing body tag
	```	
	<script src="//localhost:35729/livereload.js"></script> 
	```

### Requirements
* [sass](http://sass-lang.com/)
* [compass](http://compass-style.org/)
* [Susy](http://susydocs.oddbird.net/en/latest/install/)
* [Breakpoint](http://breakpoint-sass.com/)


### Planned
* clean out some stuff I don't use or need to rewrite (the sass structure primarily) with https://www.npmjs.org/package/grunt-remove or  https://github.com/gruntjs/grunt-contrib-clean
* rewrite and structure a better sass directory
* pull it down with https://github.com/twolfson/grunt-curl or a contrib version of the same if I can find it