# Bootstrap Mobile FullScreen Modal
A simple, CSS-only solution to improve UX of Bootstrap 4 modals on mobile phones.

Regular Bootstrap modals (with a lot of content) on mobile devices can cause additional vertical scrolling in order to get to the header and footer of modal.

Fullscreen modal provides more native user experience on mobile phones, with responsive behavior similar to modals in ZURB Foundation. Here is side-by-side comparison of regular and fullscreen modals:

![Regular Bootstrap 4 Modal on Phone](https://i.imgur.com/cjo0RQN.gif)
![Fullscreen Bootstrap 4 Modal on Phone](https://i.imgur.com/Hx0zp9w.gif)

Fullscreen modal applies these styles only on mobile devices. It also applies max-height to modals on devices with large screens to prevent scrolling of page to reach buttons in modal footer.

Live demo page is here - https://keaukraine.github.io/bootstrap4-fs-modal/

## How to Use

You can obtain plugin either from GitHub or from npm, package name is `bootstrap4-fs-modal`.

This plugin is implemented purely in CSS, so all you need is to include CSS from `dist` folder:

```html
<link href="dist/css/bootstrap-fs-modal.min.css" rel="stylesheet">
```

Then, you have two options to make modals use updated styles:
 * add `modal-fullscreen` CSS class to modals which you want to work full-screen.
 * add `bootstrap-fs-modal` CSS class to container element for all modals within this element to receive updated styles.

If your modals have large text buttons you may want to use a fixed bottom modal footer instead of placing buttons in header. In this case you should add `modal-fullscreen-bottom-footer` class either to modal or to container.

Examples (for detailed examples please see source code of demo page *index.html*):

```html
  <div class="modal fade modal-fullscreen" ...>
     ...
  </div>
```

```html
<body class="bootstrap-fs-modal">
    <div class="modal fade" ...>
       ...
    </div>
</body>
```

Plugin places `.modal-footer` at the top of modal and modifies styles of all footer children with `.button` class to look like link buttons. Buttons with `[data-dismiss="modal"]` (used to close modal) will be automatically hidden.

You can use Bootstrap 4 responsive classes to show short text or icons in footer buttons for `xs` and `sm` breakpoints.
Fullscreen modal styles include rules for *Font Awesome* and *Google Material* icons for them to have uniform size and alignment.

```html
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>  <!-- this button will be hidden -->
    <button type="button" id="btnTestRefreshSmall" class="btn btn-default">
        <span class="d-none d-md-inline">Reload Data</span>
        <span class="d-md-none">Reload</span> <!-- will have short text -->
    </button>
    <button type="button"class="btn btn-default">
        <span class="d-none d-md-inline">Reload Data</span>
        <i class="d-md-none fa fa-refresh fa-fw"></i> <!-- this will have FA icon -->
    </button>
    <button type="button"class="btn btn-default">
        <span class="d-none d-md-inline">Details</span>
        <i class="d-md-none material-icons">info</i> <!-- will have Material icon -->
    </button>
</div>
```

## Used Libraries
* Twitter Bootstrap used under the MIT License https://github.com/twbs/bootstrap/blob/master/LICENSE

## License

**The MIT License**

Copyright (c) 2017 Oleksandr Popov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
