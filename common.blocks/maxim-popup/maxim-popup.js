/**
 * @module maxim-popup
 */

modules.define(
    'maxim-popup',
    ['i-bem', 'i-bem__dom', 'jquery', 'dom','bh'],
    function(provide, BEM, BEMDOM, $, dom, BH) {
        /**
         * @exports
         * @class maxim-popup
         * @augments control
         * @bem
         */
        provide(BEMDOM.decl({ block : this.name}, /** @lends maxim-popup.prototype */{
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this.on(this.domElem, 'closePopup', this.close, this);
                        this.bindOutClick = this.outClickCheck.bind(this);
                        this.container = $('.maxim-popup__center').eq(0);
                        this.container.on('click', this.intoClickCheck);
                        $('body').on('click', this.bindOutClick);
                    }
                },
                'visible' : {
                    'true': function(){
                        $('body').on('click', this.bindOutClick);
                    },
                    '' : function(){
                        $('body').off('click', this.bindOutClick);
                    }
                }
            },
            setContent: function(content){
                BEMDOM.update(this.container, content);
            },
            intoClickCheck: function(e){
                e.originalEvent.isPopup = true;
            },
            outClickCheck: function(e){
                if (!e.originalEvent.isPopup && this.params.outClose)
                    this.close();
            },
            show: function(){
                this.setMod('visible', true);
            },
            close: function(){
                this.delMod('visible');
            }
        }));
    });
