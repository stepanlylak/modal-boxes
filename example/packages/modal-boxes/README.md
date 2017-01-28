# MeteorJs ModalBoxes

Meteor modal boxes with blaze ([example](http://modalboxes.lylak.in.ua))

```bash
$ meteor add lylak:modal-boxes
```
[GitHub](https://github.com/StepaLylak/modal-boxes), [AtmosphereJs](https://atmospherejs.com/lylak/modal-boxes)
# **How to use:**

### Add html and css template (for example)
```html
<!-- /imports/ui/components/modal-boxes/modal-boxes.html -->
<template name="Modal_boxes">
  <div class="modal-box {{className}}">
    <div class="modal-box-backdrop" data-modal-boxes="close"></div>
    <div class="modal-box-body">
      {{> Template.dynamic template=template}}
    </div>
  </div>
</template>
```
```css
/* /client/main.css */
@-moz-keyframes mb-backdrop-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes mb-backdrop-in{0%{opacity:0}100%{opacity:1}}@-o-keyframes mb-backdrop-in{0%{opacity:0}100%{opacity:1}}@keyframes mb-backdrop-in{0%{opacity:0}100%{opacity:1}}@-moz-keyframes mb-backdrop-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes mb-backdrop-out{0%{opacity:1}100%{opacity:0}}@-o-keyframes mb-backdrop-out{0%{opacity:1}100%{opacity:0}}@keyframes mb-backdrop-out{0%{opacity:1}100%{opacity:0}}@-moz-keyframes mb-body-in{0%{opacity:0;transform:translateY(30%)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes mb-body-in{0%{opacity:0;transform:translateY(30%)}100%{opacity:1;transform:translateY(0)}}@-o-keyframes mb-body-in{0%{opacity:0;transform:translateY(30%)}100%{opacity:1;transform:translateY(0)}}@keyframes mb-body-in{0%{opacity:0;transform:translateY(30%)}100%{opacity:1;transform:translateY(0)}}@-moz-keyframes mb-body-out{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(30%)}}@-webkit-keyframes mb-body-out{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(30%)}}@-o-keyframes mb-body-out{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(30%)}}@keyframes mb-body-out{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(30%)}}.modal-box{position:fixed;top:0;right:0;left:0;bottom:0;overflow:auto;padding:50px 20px}.modal-box .modal-box-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5)}.modal-box .modal-box-body{position:relative;background-color:#fff;width:100%;max-width:960px;margin:0 auto;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.3);border-radius:2px}.modal-box .modal-box-body .modal-box-header{padding:24px 24px 20px}.modal-box .modal-box-body .modal-box-header+.modal-content{padding-top:0}.modal-box .modal-box-body .modal-box-content{padding:24px}.modal-box .modal-box-body .modal-box-footer{padding:8px}.modal-box.in{animation:mb-backdrop-in .3s linear}.modal-box.in .modal-box-body{animation:mb-body-in .3s linear}.modal-box.out{animation:mb-backdrop-out .3s linear}.modal-box.out .modal-box-body{animation:mb-body-out .3s linear}
```
### Init ModalBoxes
```js
// /imports/startup/client/modal-boxes-configuration.js
import { Template } from 'meteor/templating';
import ModalBoxes from 'meteor/lylak:modal-boxes';
import '../../ui/components/modal-boxes/modal-boxes.html';
ModalBoxes.config({
    template: 'Modal_boxes', // template for all modal boxes
    animation: { // optional
        default: true, // enable animation(default false)
        classes: { // default classes for all modal (can be modified for each modal)
            enter: 'in', // class on animation enter (default 'in')
            leave: 'out' // class on animation leave (default 'out')
        }
    }
});
```
```js
// /client/main.js
...
import '../imports/startup/client/modal-boxes-configuration.js';
...
```
### Use your modal
```js
ModalBoxes.open({
    template: 'your modal body template',
    className: 'your-modal-class(es)',
    animation: { // optional (object or boolean, default false)
        enter: 'in', // class on animation enter (default 'in')
        leave: 'out' // class on animation leave (default 'out')
    },
    data: {
        myData: 'myData'
    }
});

ModalBoxes.close();
```
