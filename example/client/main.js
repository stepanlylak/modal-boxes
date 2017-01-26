import { Template } from 'meteor/templating';
import ModalBoxes from 'meteor/lylak:modal-boxes';

import '../imports/startup/client/modal-boxes-configuration.js';
import '../imports/ui/components/modal-boxes/modal-one/modal-one.js';
import '../imports/ui/components/modal-boxes/modal-two/modal-two.js';
import '../imports/ui/components/modal-boxes/modal-three/modal-three.js';

Template.hello.events({
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
