---
layout: page
title: Cheatsheet
permalink: /cheatsheet/
description: The iconic font and CSS toolkit
---
{::options parse_block_html="true"/}

<div class="iconst">
</div>
<div class="importi pemu">
<div class="contact">
### Important

- Print this page to PDF for the complete set of vectors. Or to use on the desktop, install `{{site.font.name}}.otf`, set it as the font in your application, and copy and paste the icons (not the unicode) directly from this page into your designs.

</div>
</div>
<div class="nbox">
<div class="iconst cheatsheet">
<input class="livefilter" type="text" value="" placeholder="live Search icons..." />
### Icons list
<ul id="icons">
{% for icons in site.data.db %}
<li><a href="{{ '/icon/' | prepend: site.baseurl }}{{icons[0]}}/" title="{{icons[0]}}"><span class="mi mi-{{icons[0]}}"></span><span class="ulatitle">{{icons[0]}} [&amp;#x{{icons[1].unicode}};]</span></a></li>{% endfor %}
</ul>
</div>
</div>
