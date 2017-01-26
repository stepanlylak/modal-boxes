import { Template } from 'meteor/templating';
import ModalBoxes from 'meteor/lylak:modal-boxes';

import './modal-one.html';

Template.Modal_one.events({
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
