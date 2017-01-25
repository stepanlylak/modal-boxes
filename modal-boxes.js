import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

const animationEnd = function whichAnimationEvent(){

    const el = document.createElement('fakeelement'),
        animations = {
            animation      : 'animationend',
            OAnimation    : 'oAnimationEnd',
            MozAnimation  : 'animationend',
            WebkitAnimation: 'webkitAnimationEnd'
        };

    for (let t in animations){
        if (el.style[t] !== undefined){
            return animations[t];
        }
    }
}();

let _ModalBoxesConfig = {};

const _ModalBoxesInit = function() {

    Template[_ModalBoxesConfig.template].events({
        'click [data-modal="close"]'() {
            ModalBoxes.close();
        }
    });

    ModalBoxes.open = function(options) {
        if(!options.modal) return false;

        this.close();
        this.modal = Blaze.renderWithData(Template.Et_modal,options, document.body);
        this.modal.firstNode().addEventListener(animationEnd, function() {
            $(this).removeClass('in');
        });
    };

    ModalBoxes.close = function() {
        if(!this.modal) return false;

        $(this.modal.firstNode()).addClass('out');
        this.modal.firstNode().addEventListener(animationEnd, () => {
            Blaze.remove(this.modal);
            this.modal = null;
        });
    };
};

const ModalBoxes = (function() {
    return {
        config(config) {
            if(!_.isEmpty(_ModalBoxesConfig)) return false;
            _ModalBoxesConfig = config;
            _ModalBoxesInit();
        }
    };
}());

export default ModalBoxes;
