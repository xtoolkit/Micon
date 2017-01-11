# Micon [![Build Status](https://travis-ci.org/xtoolkit/Micon.svg?branch=gh-pages)](https://travis-ci.org/xtoolkit/Micon)

Micon github page

## Build Instructions (for make custom page)

This repo already comes with all the files built and ready to go, but can also build the fonts from the source. Requires **nodeJs**.

Follow these steps to build custom font:

1- install requires Dependencies (_gulp, gulp-consolidate, gulp-iconfont, gulp-rename, loadash_) with down command.<br>

```
$ npm install
```

1- config `config.json`.

2- customize your pages template in `.templates/`. (default use Micon github template)

3- build your font with down command

```
$ npm start
```

6- end, you can see demo your pages in `/www/`
