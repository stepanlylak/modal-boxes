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

const hasClass = function(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
};

const addClass = function(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
};

const removeClass = function(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
};

let _ModalBoxesConfig = {};

const _ModalBoxesInit = function() {

    Template[_ModalBoxesConfig.template].events({
        'click [data-modal-boxes="close"]'() {
            ModalBoxes.close();
        }
    });

    ModalBoxes.open = function(options) {
        if(!options.modal) return false;

        this.close();
        this.modal = Blaze.renderWithData(Template[_ModalBoxesConfig.template],options, document.body);
        this.modal.firstNode().addEventListener(animationEnd, function() {
            removeClass(this, 'in');
        });
    };

    ModalBoxes.close = function() {
        if(!this.modal) return false;
        const modal = this.modal, $modal = modal.firstNode();
        this.modal = null;
        addClass($modal,'out');
        $modal.addEventListener(animationEnd, () => {
            Blaze.remove(modal);
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
