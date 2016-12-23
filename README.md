# Micon

Micon, The iconic windows 10 font and CSS toolkit.<br>
this icon exracted as _segmdl2.ttf_ in windows 10 and converted too css toolkit based on _Font Awesome_. Micon icons that can instantly be customized -- size, color, drop shadow, and anything that can be done with the power of CSS.<br>

Online Demo and Documents: <http://xtoolkit.github.io/Micon/>

## Get started

### linked in html

Follow these steps to use Micon:

1. Download last Micon version release from [Github](https://github.com/xtoolkit/Micon/releases)
2. Copy the entire `micon-repo/dist` directory into your project
3. In the `<head>` of your html, reference the location to your **micon.min.css**.<br>
  --example:<br>
  `<link rel="stylesheet" href="path/to/micon-repo/dist/css/micon.min.css">`--
4. Check out the [example](http://xtoolkit.github.io/Micon/examples/) to start using Micon!.

### use icons in html

example: `<i class="mi mi-Home"></i>`

## Build Instructions (for make custom font)

This repo already comes with all the files built and ready to go, but can also build the fonts from the source. Requires **nodeJs**.

Follow these steps to build custom font:

1. install requires Dependencies (_gulp, gulp-consolidate, gulp-iconfont, gulp-rename, loadash_) with down command.<br>
  `$ npm install`
2. customize your icons from `/icons/`. if add icon add in `name_db.json`. example: `["svgfilename":["svgfilename","aliasname"]]`
3. config `gulpfile.js` for your fontname, fontversion, class and etc.
4. customize your css template `/templates/style-template.css`. (default use Font-Awesome template)
5. build your font with down command<br>
  `$ npm start`
6. you can see demo your font in `/dist/html-demo-your_fontname.html`

## Versioning

Micon will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

`<major>.<minor>.<fpatch>`

And constructed with the following guidelines:

- major -> Breaking backward compatibility bumps the major
- minor -> Bug fixes, New additions
- fpatch -> Version of _segmdl2.ttf_

For more information on SemVer, please visit <http://semver.org>.

### Next version

Next Micon font version release when **RedSton2** font version release.

### Change Logs

#### Version 2.0.155 (23/12/2016)

- add **GulpJs** for create custom font
- add **brand** icons
- add **woff2** and **otf** standard font
- add html-demo-micon.html for simple portable view icons.
- update style template
- fix some font view probrom

#### Version 1.0.155 (16/08/2016)

- update icons **version** => 155 **(RedStone)**
- rename icons **name** with [official MDL2 icons name](https://msdn.microsoft.com/en-us/windows/uwp/style/segoe-ui-symbol-font)
- remove **woff2** and **otf** font
- fixed icon **animation** problem
- fixed icon **height** problem
- create [**Change logs**](http://xtoolkit.github.io/Micon/changelogs/) page

#### Version 0.9.136 (12/09/2015)

- initial build

## License

Ionicons is licensed under the [MIT license](http://opensource.org/licenses/MIT).

## Contact

E-mail: <arshen@outlook.com><br>
Telegram: [@Arshen](https://telegram.me/Arshen)
