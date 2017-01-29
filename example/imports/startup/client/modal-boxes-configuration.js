import { Template } from 'meteor/templating';
import ModalBoxes from 'meteor/lylak:modal-boxes';

import '../../ui/components/modal-boxes/modal-boxes.html';


ModalBoxes.config({
    template: 'Modal_boxes',
    // animation: {
        // default: true,
        // classes: {
        //     enter: 'fadeIn',
        //     leave: 'fadeOut'
        // }
    // }
});
