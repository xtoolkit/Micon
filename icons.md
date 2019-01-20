---
layout: page
title: Icons
permalink: /icons/
description: The iconic font and CSS toolkit
---
{::options parse_block_html="true"/}

<div class="iconst">
</div>
<div class="importi pemu">
<div class="contact">
### Important

- If you use **Firefox** and you have problem to see icons, go to **Options > Advenced > General > Browsing** and uncheck **Use hardware acceleration when available**.
- You asked, **Micon** delivers with new icons in new version. Want to request new icons? No we can't! because Micon icon's extracted of segmdl2.ttf font. Need vectors or want to use on the desktop? Check the [Cheatsheet]({{ '/cheatsheet/' | prepend: site.baseurl }}).
- After you get up and running, you can place Micon icons just about anywhere with the `<i>` tag. Some examples appreciatively re-used from the [Bootstrap documentation](http://getbootstrap.com/).
- If icons work great with the `{{site.font.prefix}}-spin` class. Check out the spinning icons example
</ul>
</div>
</div>
<div class="nbox">
<div class="iconst">
<input class="livefilter" type="text" value="" placeholder="live Search icons..." />
### Icons list
<ul id="icons">
{% for icons in site.data.db %}
<li><a href="{{ '/icon/' | prepend: site.baseurl }}{{icons[0]}}/" title="{{icons[0]}}"><span class="{{site.font.prefix}} {{site.font.prefix}}-{{icons[0]}}"></span><span class="ulatitle">{{icons[0]}}</span></a></li>{% endfor %}
{% for icons in site.data.db %}{% for prop in icons %}{% for prop2 in prop %}{% if prop2[0] == 'alias' %}{% for aitem in prop2[1]%}
<li><a href="{{ '/icon/' | prepend: site.baseurl }}{{icons[0]}}/" title="{{aitem}}"><span class="{{site.font.prefix}} {{site.font.prefix}}-{{aitem}}"></span><span class="ulatitle">{{aitem}} (alias)</span></a></li>{% endfor %}{% endif %}{% endfor %}{% endfor %}{% endfor %}
</ul>
</div>
</div>
