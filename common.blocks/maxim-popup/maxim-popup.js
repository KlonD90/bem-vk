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
                        //this.__self.popup = this;
                        //this.liveInitOnBlockInsideEvent('closePopup', this.close);
                        this.on(this.domElem, 'closePopup', this._onClose, this);
                        this.bindOutClick = this.outClickCheck.bind(this);
                        $('body').on('click', this.bindOutClick);
                        this.isInit = true;
                    }
                },
                'visible' : {
                    'true': function(){
                        this.isInit = true;
                        $('body').on('click', this.bindOutClick);
                    },
                    '' : function(){
                        $('body').off('click', this.bindOutClick);
                    }
                }
            },
            _onClose: function(){
                this.delMod('visible');
            },
            setContent: function(content){
                BEMDOM.update(this.domElem, content);
            },
            intoClickCheck: function(e){
                e.originalEvent.isPopup = true;
            },
            outClickCheck: function(e){
                //if (this.isInit)
                if (!e.originalEvent.isPopup && this.params.outClose)
                    this.close();
            },
            show: function(){
                this.setMod('visible', true);
            },
            close: function(){
                this.delMod('visible');
            }
        },{
            popup: null
            //live: true
            //
            //show: function(){
            //    this.setMod('visible', true);
            //},
            //
            //live: function(){
            //    this.liveInitOnEvent('closePopup', this.close);
            //    this.liveBindTo('click', this.intoClickCheck);
            //    $('body').on('click', this.outClickCheck.bind(this));
            //    //this.bindTo('click', this.intoClickCheck);
            //    return true;
            //},
            //close: function(e){
            //    this.setMod('visible', false);
            //},

        }));
    });