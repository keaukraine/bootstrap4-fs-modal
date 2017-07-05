# Bootstrap Mobile FullScreen Modal
A simple way to improve UX of Bootstrap modals on mobile phones.

Regular Bootstrap modals (with a lot of content) on mobile devices can cause additional scrolling to get to the bottom buttons of modal.

Fullscreen modal provides more native user experience on mobile phones, here is side-by-side comparison of regular and fullscreen modals:

![Regular Bootstrap Modal on Phone](http://i.imgur.com/Calp2Rb.gif)
![Fullscreen Bootstrap Modal on Phone](http://i.imgur.com/uIWVS1Q.gif)

Fullscreen modal does not affect modals in large viewports, and applies these styles only on mobile devices.

Live demo page is here - https://keaukraine.github.io/bootstrap-fs-modal/

## How to Use

First, include CSS and JS from `dist` folder:

```html
<link href="dist/css/fs-modal.min.css" rel="stylesheet">
...
<script src="dist/js/fs-modal.min.js"></script>
```

The only modification to HTML layout is for buttons to appear in header of mobile fullscreen modal, you have to specify icon which will be used for button. This is a name of glyphicon provided using `data-glyphicon` attribute. No need to specify this attribute for *Close* button, it will be automatically added to the left of header.

Example:

```html
<div class="modal-footer">
  <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
  <button type="button" class="btn btn-default" data-glyphicon="glyphicon-refresh">Reload Data</button>
  <button type="button" class="btn btn-default btn-primary" data-glyphicon="glyphicon-ok">Save</button>
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
