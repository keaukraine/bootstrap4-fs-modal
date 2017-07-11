# Bootstrap Mobile FullScreen Modal
A simple way to improve UX of Bootstrap modals on mobile phones.

Regular Bootstrap modals (with a lot of content) on mobile devices can cause additional scrolling to get to the bottom buttons of modal.

Fullscreen modal provides more native user experience on mobile phones, here is side-by-side comparison of regular and fullscreen modals:

![Regular Bootstrap Modal on Phone](http://i.imgur.com/Calp2Rb.gif)
![Fullscreen Bootstrap Modal on Phone](http://i.imgur.com/uIWVS1Q.gif)

Fullscreen modal does not affect modals in large viewports, and applies these styles only on mobile devices.

Live demo page is here - https://keaukraine.github.io/bootstrap-fs-modal/

## How to Use

You can obtain plugin either from GitHub or from npm, package name is `bootstrap-fs-modal`.

First, include CSS and JS from `dist` folder:

```html
<link href="dist/css/fs-modal.min.css" rel="stylesheet">
...
<script src="dist/js/fs-modal.min.js"></script>
```

Then, you have to add CSS class `modal-fullscreen` to modals which you want to work full-screen.

For buttons to appear as icons, you will need to make a liitle modification of HTML. Plugin processes all buttons in footer except the ones with `data-dismiss="modal"` attribute (close button, which will be always added automatically), and adds them with or without icon depending on presence of `data-glyphicon` attribute. If this attribute is set, it will add button with glyphicon provided in this attribute. If `data-glyphicon` is not set or empty, it will place text button instead. Plugin will try to apply short text by looking for short button text in `data-mobile-text` attribute and falling back to button text if attribute is not set.

Example:

```html
<div class="modal fade modal-fullscreen" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel">
...
<div class="modal-footer">
  <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> <!-- will be skipped -->
  <button type="button" class="btn btn-default" data-glyphicon="glyphicon-refresh">Reload Data</button> <!-- icon button -->
  <button type="button" class="btn btn-default btn-primary" data-glyphicon="glyphicon-ok">Save</button> <!-- icon button -->
  <button type="button" id="btnTestRefreshTextButtons" class="btn btn-default" data-mobile-text="Reload">Reload Data</button> <!-- text button with short text -->
  <button type="button" id="btnTestSaveTextButtons" class="btn btn-default btn-primary">Save</button> <!-- text button with default text -->
</div>

```

That's all you need. JS automatically tracks `show.bs.modal` events and duplicates all buttons with `data-glyphicon` attribute to modal header, wiring `click` events to original buttons.


## Used Libraries
* Twitter Bootstrap used under the MIT License https://github.com/twbs/bootstrap/blob/master/LICENSE
* jQuery used under the MIT license https://jquery.org/license/


## License

**The MIT License**

Copyright (c) 2017 Oleksandr Popov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
