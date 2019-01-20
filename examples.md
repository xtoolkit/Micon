---
layout: page
title: Examples
permalink: /examples/
description: Lots of easy ways to use Micon
---
{::options parse_block_html="true"/}

<div class="iconst">
### Basic Icons

<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}}"></i> {{site.font.prefix}}-{{site.defined.icons.example.basic}} :
``` html
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}}"></i>
```
</div>
<div class="importi pemu">
<div class="contact">
### note

- You can place Micon icons just about anywhere using the CSS Prefix `{{site.font.prefix}}` and the icon's name. Micon is designed to be used with inline elements (we like the `<i>` tag for brevity, but using a `<span>` is more semantically correct).
- If you change the font-size of the icon's container, the icon gets bigger. Same things goes for color, drop shadow, and anything else that gets inherited using CSS.

</div>
</div>
<div class="iconst">
### Larger Icons

<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-lg"></i> {{site.font.prefix}}-lg :
``` html
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-lg"></i>
```
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-2x"></i> {{site.font.prefix}}-2x :
``` html
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-2x"></i>
```
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-3x"></i> {{site.font.prefix}}-3x :
``` html
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-3x"></i>
```
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-4x"></i> {{site.font.prefix}}-4x :
``` html
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-4x"></i>
```
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-5x"></i> {{site.font.prefix}}-5x :
``` html
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-5x"></i>
```
</div>
<div class="importi pemu">
<div class="contact">
### note

- To increase icon sizes relative to their container, use the `{{site.font.prefix}}-lg` (33% increase), `{{site.font.prefix}}-2x`, `{{site.font.prefix}}-3x`, `{{site.font.prefix}}-4x`, or `{{site.font.prefix}}-5x` classes.
- If your icons are getting chopped off on top and bottom, make sure you have sufficient line-height.

</div>
</div>
<div class="iconst">
### Fixed Width Icons

<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-fw"></i> {{site.font.prefix}}-fw :
``` html
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-fw"></i>
```
</div>
<div class="importi pemu">
<div class="contact">
### note

- Use `{{site.font.prefix}}-fw` to set icons at a fixed width. Great to use when different icon widths throw off alignment. Especially useful in things like nav lists & list groups.

</div>
</div>
<div class="iconst">
### List Icons
<div class="fixrg">
<ul class="{{site.font.prefix}}-ul">
  <li><i class="{{site.font.prefix}}-li {{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}}"></i>List icons</li>
  <li><i class="{{site.font.prefix}}-li {{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.list[0]}}"></i>can be used</li>
  <li><i class="{{site.font.prefix}}-li {{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.list[1]}} {{site.font.prefix}}-spin"></i>as bullets</li>
  <li><i class="{{site.font.prefix}}-li {{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.list[2]}}"></i>in lists</li>
</ul>
``` html
<ul class="{{site.font.prefix}}-ul">
  <li><i class="{{site.font.prefix}}-li {{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}}"></i>List icons</li>
  <li><i class="{{site.font.prefix}}-li {{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.list[0]}}"></i>can be used</li>
  <li><i class="{{site.font.prefix}}-li {{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.list[1]}} {{site.font.prefix}}-spin"></i>as bullets</li>
  <li><i class="{{site.font.prefix}}-li {{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.list[2]}}"></i>in lists</li>
</ul>
```
</div>
</div>
<div class="importi pemu">
<div class="contact">
### note

- Use `{{site.font.prefix}}-ul` and `{{site.font.prefix}}-li` to easily replace default bullets in unordered lists.

</div>
</div>
<div class="iconst">
### Animated Icons
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-spin"></i> <i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.animate[0]}} {{site.font.prefix}}-pulse"></i> <i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.animate[1]}} {{site.font.prefix}}-spin"></i>:
``` html
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.basic}} {{site.font.prefix}}-spin"></i>
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.animate[0]}} {{site.font.prefix}}-pulse"></i>
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.animate[1]}} {{site.font.prefix}}-spin"></i>
```
</div>
<div class="importi pemu">
<div class="contact">
### note
- Use the `{{site.font.prefix}}-spin` class to get any icon to rotate, and use `{{site.font.prefix}}-pulse` to have it rotate with 8 steps. Works well with `{{site.font.prefix}}-{{site.defined.icons.example.basic}}`, `{{site.font.prefix}}-refresh`, and more.
- CSS3 animations aren't supported in IE8 - IE9.
- Some browsers on some platforms have issues with animated icons resulting in a jittery wobbling effect.

</div>
</div>
<div class="iconst">
### Rotated & Flipped
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}}"></i> normal

<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-rotate-90"></i> {{site.font.prefix}}-rotate-90

<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-rotate-180"></i> {{site.font.prefix}}-rotate-180

<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-rotate-270"></i> {{site.font.prefix}}-rotate-270

<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-flip-horizontal"></i> {{site.font.prefix}}-flip-horizontal

<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-flip-vertical"></i> icon-flip-vertical :
``` html
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}}"></i> normal
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-rotate-90"></i> {{site.font.prefix}}-rotate-90
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-rotate-180"></i> {{site.font.prefix}}-rotate-180
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-rotate-270"></i> {{site.font.prefix}}-rotate-270
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-flip-horizontal"></i> {{site.font.prefix}}-flip-horizontal
<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.flip}} {{site.font.prefix}}-flip-vertical"></i> icon-flip-vertical
```
</div>
<div class="importi pemu">
<div class="contact">
### note
- To arbitrarily rotate and flip icons, use the `{{site.font.prefix}}-rotate-*` and `{{site.font.prefix}}-flip-*` classes.

</div>
</div>
<div class="iconst">
### Stacked Icons
<span class="{{site.font.prefix}}-stack {{site.font.prefix}}-lg"><i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.stack[0]}} {{site.font.prefix}}-stack-1x"></i><i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.stack[1]}} {{site.font.prefix}}-stack-2x text-danger"></i></span> {{site.font.prefix}}-{{site.defined.icons.example.stack[1]}} on {{site.font.prefix}}-{{site.defined.icons.example.stack[0]}} :

``` html
<span class="{{site.font.prefix}}-stack {{site.font.prefix}}-lg">
	<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.stack[0]}} {{site.font.prefix}}-stack-1x"></i>
	<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.stack[1]}} {{site.font.prefix}}-stack-2x text-danger"></i>
</span>
```

OR

<span class="{{site.font.prefix}}-stack {{site.font.prefix}}-lg"><i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.stack2[0]}} {{site.font.prefix}}-stack-1x  text-danger"></i><i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.stack2[1]}} {{site.font.prefix}}-stack-1x"></i></span> {{site.font.prefix}}-{{site.defined.icons.example.stack2[1]}} on {{site.font.prefix}}-{{site.defined.icons.example.stack2[0]}} :
``` html
<span class="{{site.font.prefix}}-stack {{site.font.prefix}}-lg">
	<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.stack2[0]}} {{site.font.prefix}}-stack-1x  text-danger"></i>
	<i class="{{site.font.prefix}} {{site.font.prefix}}-{{site.defined.icons.example.stack2[1]}} {{site.font.prefix}}-stack-1x"></i>
</span>
```
</div>
<div class="importi pemu">
<div class="contact">
### note
- To stack multiple icons, use the `{{site.font.prefix}}-stack` class on the parent, the `{{site.font.prefix}}-stack-1x` for the regularly sized icon, and `{{site.font.prefix}}-stack-2x` for the larger icon. `{{site.font.prefix}}-inverse` can be used as an alternative icon color. You can even throw larger icon classes on the parent to get further control of sizing.

</div>
</div>
<div class="iconst">
<br>
</div>
