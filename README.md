# Micon [![Build Status](https://travis-ci.org/xtoolkit/Micon.svg?branch=master)](https://travis-ci.org/xtoolkit/Micon)

Micon (MDL2 Icons), The iconic windows 10 font and CSS toolkit.<br>
this icon exracted as _segmdl2.ttf_ in windows 10 and converted too css toolkit based on _Font Awesome_. Micon icons that can instantly be customized -- size, color, drop shadow, and anything that can be done with the power of CSS.<br>

Online Demo and Documents: <http://xtoolkit.github.io/Micon/> (Because i am very busy, online Documents not updated for bower and building)

_sry for my bad english_

## Installation

### Quick option: use cdn

You can use cdn. hosted by [github page](https://github.com/xtoolkit/cdn.arshen.ir) and clouded by [Cloudflare](https://www.cloudflare.com/)
example:

``` html
<head>
...
<link rel="stylesheet" href="http://cdn.arshen.ir/micon/3.0.168/dist/micon/css/micon.min.css">
...
</head>
```

### Option one: install with bower

To install via Bower, simply do the following:

```
$ bower install micon --save
```

### Option two: Download repo or builded font

Download last Micon version release from [Github](https://github.com/xtoolkit/Micon/releases)

## Get started

1- Copy the entire `micon-repo/dist/micon/` directory into your project. if you do not use **webbrand icon** in font, use `micon-repo/dist/micon_nb/`

2- In the `<head>` of your html, reference the location to your **micon.min.css**.<br>
example:

``` html
<head>
...
<link rel="stylesheet" href="micon-repo/dist/micon/css/micon.min.css">
...
</head>
```

### use icons in html

example:
``` xml
<i class="mi mi-Home"></i>
OR
<i class="mi">&#xEB6F;</i>
```

## Build Instructions (for make custom font)

This repo already comes with all the files built and ready to go, but can also build the fonts from the source. Requires **nodeJs**.

Follow these steps to build custom font:

1- install requires Dependencies (*gulp, gulp-consolidate, gulp-iconfont, gulp-rename, mustache*) with down command.<br>

```
$ npm install
```

2- customize your icons from `/icons/`.<br>
if add new icon, insert icon name in `db.json`.<br>
example:

``` json
{
    ...,
    "svgfilename": {
        "info": {
            "created": "1.0.155" //font-version
        },
        "alias": [
            "aliasname1",
            "aliasname2"
        ]
    }
}
```

3- customize `config.json` for your font.

4- customize your scss, less and css template in `.templates/`. (default use Font-Awesome template Edited by Micon)

5- build your font with down command

```
$ npm start
```

6- end, you can see demo your font in `/dist/your_fontname/html-demo-your_fontname.html`

### Page Build Instructions (for make custom your font page)

you can build custom your font page (like [Micon github page](http://xtoolkit.github.io/Micon/)) with [this Instructions](https://github.com/xtoolkit/Micon/tree/gh-pages#build-instructions-for-make-custom-page)

## Versioning

Micon will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

`<major>.<minor>.<fpatch>`

And constructed with the following guidelines:

- major -> Breaking backward compatibility bumps the major
- minor -> Bug fixes, New additions
- fpatch -> Version of _segmdl2.ttf_

For more information on SemVer, please visit <http://semver.org>.

### Next version

We are thinking of supporting **react** and **vuejs**

### Change Logs

#### Version 3.0.168 (14/01/2019)

- update mdl2 icons **version** => 168 **(October 2018)**
  - 350 new icon (35 icon untitled)
  - svg icons get larger
- update webbrand icons (268 new icon)
- remove classic create font css
- use **scss compiler** for create font css
- remove **sourcemap** by default
- change *lodash* with **mustache**
- update **scss** and **less** template to **Font-Awesome 5.6.3**
- rename fontname.(scss|less) file to style.(scss|less)
- move font config from *gulpfile.js* to **config.json** file in root
- icons name db file move to icons pack directory (db.json)
- rewrite **gulpfile.js**

#### Version 2.2.155 (05/01/2017)

- fix [#13 issues](https://github.com/xtoolkit/Micon/issues/13/)
- fix less compile problem
- add **sourcemap** for micon and micon_nb

#### Version 2.1.155 (29/12/2016)

- support **bower**
- add **scss** and **less** template
- move templates to .templates
- fix style.css problem

#### Version 2.0.155 (23/12/2016)

- add **GulpJs** for build Micon or Easy create custom font fork Micon icons
- add **webBrand** icons
- add **woff2** and **otf** standard font
- add html-demo-micon.html for simple portable view icons.
- update style template
- fix alias name problem
- fix some font view probrom (etc height of icons)

#### Version 1.0.155 (16/08/2016)

- update icons **version** => 155 **(RedStone)**
- rename icons **name** with [official MDL2 icons name](https://msdn.microsoft.com/en-us/windows/uwp/style/segoe-ui-symbol-font)
- remove **woff2** and **otf** font
- fixed icon **animation** problem
- fixed icon **height** problem
- create [**Change logs**](http://xtoolkit.github.io/Micon/changelogs/) page

#### Version 0.9.136 (12/09/2015)

- initial build
- remove duplicate svg path and use css alias

## License

Micon is licensed under the [MIT license](http://opensource.org/licenses/MIT).

## Contact

E-mail: <arshen@outlook.com><br>
Telegram: [@Arshen](https://telegram.me/Arshen)
