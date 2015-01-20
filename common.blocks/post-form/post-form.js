/**
 * @module post-form
 */

modules.define(
    'post-form',
    ['i-bem__dom', 'jquery', 'dom', 'button'],
    function(provide, BEMDOM, $, dom, Button) {
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;
        var httpRegex = new RegExp(expression);
        /**
         * @exports
         * @class post-form
         * @augments control
         * @bem
         */
        provide(BEMDOM.decl({ block : this.name}, /** @lends post-form.prototype */{
            beforeSetMod : {
                'pressed' : {
                    'true' : function() {
                        return !this.hasMod('disabled') || this.hasMod('togglable');
                    }
                },
                'focused' : {
                    '' : function() {
                        return !this._isPointerPressInProgress;
                    }
                }
            },
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        var textarea = this.elem('form')[0];
                        $(textarea).on('keyup paste',this.linkRel.bind(this));
                        this.additional = {
                            link: false,
                            tube: [],
                            images: []
                        };
                        this.additionalElement =this.elem('additional')[0];
                        this.spin = this.findBlockInside('spin');
                    }
                },
                'processing' : {
                    'true' : function() {
                        this.__base.apply(this, arguments);
                        this.hasMod('togglable') || this.delMod('pressed');
                    },
                    '' : function(){

                    }
                },
                'focused' : {
                    'true' : function() {
                        this.__base.apply(this, arguments);
                        this._focusedByPointer || this.setMod('focused-hard');
                    },

                    '' : function() {
                        this.__base.apply(this, arguments);
                        this.delMod('focused-hard');
                    }
                }
            },
            linkRel: function(e){
                var text = e.target.value;
                if (this.lastRelink > Date.now()){
                    if (this.lastRelinkTimer)
                        clearTimeout(this.lastRelinkTimer);
                    this.lastRelinkTimer = setTimeout(
                        (function(){ this.linkRel(e); }).bind(this),
                        2000
                    );
                    return;
                }
                if (!this.additional.link)
                    this.relinking(text);
                this.lastRelink = Date.now()+2000;
            },
            relinking: function(text){
                var link = text.match(httpRegex);
                link = link?link[0]:false;
                if (!link)
                    return;
                this.additional.link = link;
                this.setMod('processing', true);
                $.ajax({
                    url: this.params.controller,
                    data: {
                        url: link,
                        action: 'urlInfo'
                    },
                    dataType: 'json',
                    type: 'post',
                    success: (function(data){
                        this.spin.setMod('visible', false);
                        this.findBlockInside('insert','type','link');
                    }).bind(this),
                    error: (function(){
                        this.spin.setMod('visible', false);
                        this.findBlockInside('error').text('Не удалось достать данные по ссылке '+link);
                    }).bind(this)
                });
                this.spin.setMod('visible', true);
            }
        }));

    });
