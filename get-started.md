---
layout: page
title: Get Started
permalink: /get-started/
description: Easy ways to get Micon onto your website
---
{::options parse_block_html="true"/}

<div class="quitset pemu">
<div>
Follow these steps to use Micon:
1. Download last Micon version release from [Github](https://github.com/xtoolkit/Micon/releases).
2. Copy the entire **micon-repo/dist/{{site.font.name}}/** directory into your project.
3. In the `<head>` of your html, reference the location to your {{site.font.name}}.min.css.—example:`<link rel="stylesheet" href="micon-repo/dist/{{site.font.name}}/css/{{site.font.name}}.min.css">`
4. Check out the [Example]({{ '/examples/' | prepend: site.baseurl }}) to start using Micon!. Or you can build custom Micon font icon with [Github readme](https://github.com/xtoolkit/Micon#build-instructions-for-make-custom-font) Documents.

</div>
</div>
<div class="importi pemu">
<div class="contact">
### Important

- if you do not use webbrand icon in font use **micon-repo/dist/micon_nb/**
- If you need **IE7** support, you have my condolences. Really. **Micon** doesn't support IE7!
- **IE8** has some issues with `@font-face` when combined with `:before`. Micon uses that combination. If a page is cached, and loaded without the mouse over the window (i.e. hit the refresh button or load something in an iframe) then the page gets rendered before the font loads.
- In order to provide the best possible experience to old and buggy browsers, Micon uses [CSS browser hacks](http://browserhacks.com/) in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive
enhancement.
- These validation warnings don't matter in practice since the non-hacky portion of our CSS does fully validate and the hacky portions don't interfere with the proper functioning of the non-hacky portion, hence why we deliberately ignore these particular warnings.

</div>
</div>
<div class="iconst">
<br>
<br>
</div>
