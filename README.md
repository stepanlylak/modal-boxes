# MeteorJs ModalBoxes

Meteor modal boxes with blaze

**How to use**

## Add html and css template (for example)
```html
// imports/ui/componets/modal-boxes/modal-boxes.html
<template name="Modal_boxes">
    <div class="modal in {{className}}">
        <div class="modal-backdrop" data-modal="close"></div>
        <div class="modal-body">
            {{> Template.dynamic template=modal}}
        </div>
    </div>
</template>
```
```scss
@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
    padding: 50px 20px;
    .modal-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
    }
    .modal-body {
        position: relative;
        background-color: #fff;
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
        box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3);
        border-radius: 2px;
        .modal-header {
            padding: 24px 24px 20px 24px;
            + .modal-content {
                padding-top: 0;
            }
        }
        .modal-content {
            padding: 24px;
        }
        .modal-footer {
            padding: 8px;
        }
    }
    &.in {
        animation: fadeIn 0.2s linear;
    }
    &.out {
        animation: fadeOut 0.2s linear;
    }
}
```
## Init ModalBoxes
```js
// imports/startup/client/modal-boxes-configuration.js
import 'imports/ui/componets/modal-boxes/modal-boxes.html';
ModalBoxes.config({template: 'Modal_boxes'});
// and import this file to /client/main.js
```
## Use your modal
```js
ModalBoxes.open({
    modal: 'your_template_name',
    className: 'modal-project-edit', 
    your_data_key: data
});

ModalBoxes.close();
```
