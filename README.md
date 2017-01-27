# MeteorJs ModalBoxes

Meteor modal boxes with blaze ([example](http://modalboxes.lylak.in.ua))

# **How to use:**

### Add html and css template (for example)
```html
<!-- /imports/ui/components/modal-boxes/modal-boxes.html -->
<template name="Modal_boxes">
  <div class="modal-box in {{className}}">
    <div class="modal-box-backdrop" data-modal-boxes="close"></div>
    <div class="modal-box-body">
      {{> Template.dynamic template=modal}}
    </div>
  </div>
</template>
```
```css
/* /client/main.css */
@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.modal-box{position:fixed;top:0;right:0;left:0;bottom:0;overflow:auto;padding:50px 20px}.modal-box .modal-box-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5)}.modal-box .modal-box-body{position:relative;background-color:#fff;width:100%;max-width:960px;margin:0 auto;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.3);border-radius:2px}.modal-box .modal-box-body .modal-box-header{padding:24px 24px 20px}.modal-box .modal-box-body .modal-box-header+.modal-content{padding-top:0}.modal-box .modal-box-body .modal-box-content{padding:24px}.modal-box .modal-box-body .modal-box-footer{padding:8px}.modal-box.in{animation:fadeIn .2s linear}.modal-box.out{animation:fadeOut .2s linear}
```
### Init ModalBoxes
```js
// /imports/startup/client/modal-boxes-configuration.js
import { Template } from 'meteor/templating';
import ModalBoxes from 'meteor/lylak:modal-boxes';
import '../../ui/components/modal-boxes/modal-boxes.html';
ModalBoxes.config({template: 'Modal_boxes'}); // template for all modal boxes
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
  modal: 'your_template_name',
  className: 'your-modal-class', 
  yourData: data
});

ModalBoxes.close();
```
