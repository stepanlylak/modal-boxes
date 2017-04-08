import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

const animationEnd = function whichAnimationEvent() {

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
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
};

const addClass = function(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else if (!hasClass(el, className)) {
        el.className += ' ' + className;
    }
    return el;
};

const removeClass = function(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else if (hasClass(el, className)) {
        const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className=el.className.replace(reg, ' ');
    }
    return el;
};

let _ModalBoxesConfig = {};

const _ModalBoxesInit = function() {
    if(!_ModalBoxesConfig.template) return false;

    Template[_ModalBoxesConfig.template].events({
        'click [data-modal-boxes="close"]'() {
            ModalBoxes.close();
        }
    });

    ModalBoxes.mb = {};
    if(_ModalBoxesConfig.animation) {
        ModalBoxes.animation = _.defaults(_ModalBoxesConfig.animation, {
            default: true,
            classes: {
                enter: 'in',
                leave: 'out'
            }
        });
    }

    ModalBoxes.open = function(options) {
        if(!options && !options.modal) return false;

        if(options.animation) {
            if(options.animation.enter && options.animation.leave){
                this.mb.anim = {
                    enter: options.animation.enter,
                    leave: options.animation.leave
                };
            }
            if(options.animation === true) {
                this.mb.anim = this.animation.classes;
            }
        } else {
            if(options.animation !== false &&  this.animation && this.animation.default) {
                this.mb.anim = this.animation.classes;
            }
        }
        
        if(options.onClose && _.isFunction(options.onClose)) {
            this.mb.onClose = options.onClose;
        }

        this.mb.data = _.extend({className: options.className, animation: this.mb.anim, template: options.template}, options.data);

        if(this.mb.view && this.mb.view.dataVar) {
            this.mb.view.dataVar.set(this.mb.data);
        } else {
            this.mb.view = Blaze.renderWithData(Template[_ModalBoxesConfig.template], this.mb.data, document.body);
            if(this.mb.anim && this.mb.anim.enter) {
                const enter = this.mb.anim.enter;
                addClass(this.mb.view.firstNode(), enter).addEventListener(animationEnd, function() {
                    removeClass(this, enter);
                });
            }
        }
    };

    ModalBoxes.close = function(data) {
        if(!this.mb.view) return false;
        const mb = this.mb, $view = mb.view.firstNode();
        if(mb.onClose && _.isFunction(mb.onClose)) {
            mb.onClose(data);
        }
        this.mb = {};
        if(mb.anim && mb.anim.leave) {
            addClass($view, mb.anim.leave).addEventListener(animationEnd, () => {
                Blaze.remove(mb.view);
            });
        } else {
            Blaze.remove(mb.view);
        }
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
