import { Template } from 'meteor/templating';
import ModalBoxes from 'meteor/lylak:modal-boxes';

import './hello.html';

Template.hello.events({
    'click a.btn[href^="#"]': function (e) {
        e.preventDefault();
        const modalTemplate = e.target.getAttribute("href").substr(1);
        ModalBoxes.open({
            template: modalTemplate,
            className: 'modals-group',
            animation: {
                enter: 'in',
                leave: 'out',
            },
            data: {
                myData: 'myData ' + modalTemplate
            }
        });
    }
});
