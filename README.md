# Micon [![Build Status](https://travis-ci.org/xtoolkit/Micon.svg?branch=master)](https://travis-ci.org/xtoolkit/Micon)

Micon, The iconic windows 10 font and CSS toolkit.<br>
this icon exracted as _segmdl2.ttf_ in windows 10 and converted too css toolkit based on _Font Awesome_. Micon icons that can instantly be customized -- size, color, drop shadow, and anything that can be done with the power of CSS.<br>

Online Demo and Documents: <http://xtoolkit.github.io/Micon/> (Because i am very busy, online Documents not updated to 2.0155. as soon as possible update Documents.)

_sry for my bad english_

## Get started

### linked in html

Follow these steps to use Micon:

1- Download last Micon version release from [Github](https://github.com/xtoolkit/Micon/releases)

2- Copy the entire `micon-repo/dist/micon/` directory into your project. if you do not use **webbrand icon** in font use `micon-repo/dist/micon_nb/`

3- In the `<head>` of your html, reference the location to your **micon.min.css**.<br>
example:

``` xml
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
```

## Build Instructions (for make custom font)

This repo already comes with all the files built and ready to go, but can also build the fonts from the source. Requires **nodeJs**.

Follow these steps to build custom font:

1- install requires Dependencies (_gulp, gulp-consolidate, gulp-iconfont, gulp-rename, loadash_) with down command.<br>

```
$ npm install
```

2- customize your icons from `/icons/`.<br>
if add new icon, insert icon name in `name_db.json`.<br>
example:

``` json
{
    ...,
    "svgfilename": [
        "svgfilename",
        "aliasname1",
        "aliasname2",
        ...
    ]
}
```

3- config `gulpfile.js` for your _fontname_, _fontversion_ and etc.

4- customize your css template `/templates/style-template.css`,`/templates/style-min-template.css`. (default use Font-Awesome template Edited by Micon)

5- build your font with down command

```
$ npm start
```

6- end, you can see demo your font in `/dist/your_fontname/html-demo-your_fontname.html`

## Versioning

Micon will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

`<major>.<minor>.<fpatch>`

And constructed with the following guidelines:

- major -> Breaking backward compatibility bumps the major
- minor -> Bug fixes, New additions
- fpatch -> Version of _segmdl2.ttf_

For more information on SemVer, please visit <http://semver.org>.

### Next version

Next Micon font version release, when **RedSton2** font version release.

### Change Logs

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

Ionicons is licensed under the [MIT license](http://opensource.org/licenses/MIT).

## Contact

E-mail: <arshen@outlook.com><br>
Telegram: [@Arshen](https://telegram.me/Arshen)
