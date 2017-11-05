# Bootstrap Mobile FullScreen Modal
A simple way to improve UX of Bootstrap 4 modals on mobile phones.

Regular Bootstrap modals (with a lot of content) on mobile devices can cause additional vertical scrolling in order to get to the header and footer of modal.

Fullscreen modal provides more native user experience on mobile phones, here is side-by-side comparison of regular and fullscreen modals:

![Regular Bootstrap 4 Modal on Phone](https://i.imgur.com/cjo0RQN.gif)
![Fullscreen Bootstrap 4 Modal on Phone](https://i.imgur.com/Hx0zp9w.gif)

Fullscreen modal applies these styles only on mobile devices. It also applies max-height to modals on devices with large screens to prevent scrolling of page to reach buttons in modal footer.

Live demo page is here - https://keaukraine.github.io/bootstrap4-fs-modal/

## How to Use

You can obtain plugin either from GitHub or from npm, package name is `bootstrap-fs-modal`.

First, include CSS and JS from `dist` folder:

```html
<link href="dist/css/fs-modal.min.css" rel="stylesheet">
...
<script src="dist/js/fs-modal.min.js"></script>
```

Then, you have to add CSS class `modal-fullscreen` to modals which you want to work full-screen.

Plugin can create either text or icon buttons.
For buttons to appear as icons, you will need to make a little modification of HTML. Plugin processes all buttons in footer except the ones with `data-dismiss="modal"` attribute (close button, which will be always added automatically), and adds them either as text or as icon button. Icon for button can be either Glyphicon of Font Awesome icon and is set by `data-glyphicon` or `data-faicon` attribute. If one of these attributes is set, it will add button with provided icon. If icon attribute is not set or empty, it will create text button instead. Plugin will try to apply short text by looking for short button text in `data-mobile-text` attribute and falling back to button text if attribute is not set.

Example:

```html
<div class="modal fade modal-fullscreen" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel">
...
<div class="modal-footer">
  <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> <!-- will be skipped -->
  <button type="button" class="btn btn-default" data-glyphicon="glyphicon-refresh">Reload Data</button> <!-- Glyphicon button -->
  <button type="button" id="btnTestSettingsFAButtons" class="btn btn-default" data-faicon="fa-cog">Settings</button> <!-- Font Awesome icon button -->
  <button type="button" id="btnTestRefreshTextButtons" class="btn btn-default" data-mobile-text="Reload">Reload Data</button> <!-- text button with short text -->
  <button type="button" id="btnTestSaveTextButtons" class="btn btn-default btn-primary">Save</button> <!-- text button with default text -->
</div>
```

That's all you need. JS automatically tracks `show.bs.modal` events and duplicates all buttons to modal header, wiring `click` events to original buttons.


## Used Libraries
* Twitter Bootstrap used under the MIT License https://github.com/twbs/bootstrap/blob/master/LICENSE
* jQuery used under the MIT license https://jquery.org/license/


## License

**The MIT License**

Copyright (c) 2017 Oleksandr Popov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
