/**
 * @module post-form
 */

modules.define(
    'post-form',
    ['i-bem__dom', 'jquery', 'dom', 'button','bh'],
    function(provide, BEMDOM, $, dom, Button, BH, popup) {
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var httpRegex = new RegExp(expression);
        /**
         * @exports
         * @class post-form
         * @bem
         */
        provide(BEMDOM.decl({ block : this.name}, /** @lends post-form.prototype */{
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
                        this.ignoredLinks = [];
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
            _onCardClose: function(e, data){
                this.ignoredLinks.push(this.additional.link);
                this.additional.link = null;
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
                this.lastRelink = Date.now()+1000;
            },
            relinking: function(text){
                var link = text.match(httpRegex) || [];
                var url = null;
                for (var i=0; link.length>i; i++){
                    if (this.ignoredLinks.indexOf(link[i])<0)
                    {
                        url = link[i];
                        break;
                    }
                }
                if (!url)
                    return;
                this.additional.link = url;
                this.setMod('processing', true);
                $.ajax({
                    url: this.params.controller,
                    data: {
                        url: url,
                        action: 'urlInfo'
                    },
                    dataType: 'jsonp',
                    type: 'get',
                    success: (function(data){
                        //this.spin.setMod('visible', false);
                        modules.require(['bh'], (function(BH){
                            var $el = $(BH.apply({block: 'material-card', data: data }));
                            var matCard = $el.bem('material-card');
                            $(this.elem('additional')[0]).append($el);
                            matCard.on('cardClose', this._onCardClose, this);
                        }).bind(this));
                    }).bind(this),
                    error: (function(){
                        //this.spin.setMod('visible', false);
                        //var error = this.findBlockInside('error');
                        //error.setMod('visible', true);
                        this.ignoredLinks.push(this.additional.link);
                        //error.domElem.text('Не удалось достать данные по ссылке '+link);
                        this.additional.link = false;
                    }).bind(this)
                });
                //this.spin.setMod('visible', true);
            }
        },{
            live: function(){
                this.liveInitOnBlockInsideEvent('click', 'button', this.onButtonClick);
                return false;
                //return this.__base.apply(this, arguments);
            },
            onButtonClick: function(e){
                console.log(e.target.params.func);
                switch(e.target.params.func){
                    case 'video':
                        modules.require(['i-maxim-popup'], function(popup){
                            popup({
                                block: 'white-form',
                                content: [{
                                    block: 'post-video-form',
                                    js: {controller: 'http://localhost:4444/addPost'}
                                }]
                            }, true);
                        });
                        break;
                    case 'image':
                        break;
                    case 'post':
                        break;
                }
            }
        }));
    });
