import { Template } from 'meteor/templating';
import ModalBoxes from 'meteor/lylak:modal-boxes';

import './modal-two.html';

Template.Modal_two.events({
    'click a.btn': function (e) {
        e.preventDefault();
        const modalTemplate = e.target.getAttribute("href").substr(1);
        ModalBoxes.open({
            modal: modalTemplate,
            className: 'modals-group',
            myData: 'myData for ' + modalTemplate
        });
    }
});
