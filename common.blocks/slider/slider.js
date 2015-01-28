/**
 * @module slider
 */

modules.define(
    'slider',
    ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {
        /**
         * @exports
         * @class slider
         * @bem
         */
        provide(BEMDOM.decl({ block : this.name}, /** @lends slider.prototype */{
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this.__self.sliders.push(this);
                        if (this.__self.window.width() <= 768)
                            this.setMod('touch', true);
                        this.liveBindTo('left-arrow', 'click', _onLeftClick.bind(this));
                        this.liveBindTo('right-arrow', 'click', _onRightClick.bind(this));
                        this.lists = this.elem('list').domElem.children();
                        var bItem = this.lists.eq(0);
                        if (this.params.width)
                            this.elementWidth = this.params.width;
                        else
                            this.elementWidth = bItem.width();
                        this.curPosition = 1;
                        var lItem = this.list.last();
                        //add safe position
                        lItem.prependTo(this.list);
                        bItem.appendTo(this.list);
                        if (!this.params.animation)
                            this.params.animation = 'slide';
                        //set elem width
                        this.elem('wrap').domElem.width(this.elementWidth);
                        this.elem('list').domElem.css({left: (-1)*this.elementWidth });
                        this.setMod('animation', this.params.animation);
                    }
                },
                'touch' : {
                    'true' : function() {

                    },
                    '' : function(){

                    }
                }
            },
            _onLeftClick: function(){
                this.curPosition--;
                if (this.curPosition < 0)
                    this.curPosition = this.list.length - 1;
                this.gotoPosition(this.curPositon);
            },
            _onRightClick: function(){
                this.curPosition++;
                if (this.curPositon>=this.list.length)
                    this.curPosition = 0;
                this.gotoPosition(this.curPositon);
            },
            gotoPosition: function(position){
                this.elem('list').domElem.css({left: (-1)*(position+1)*this.elementWidth });
            }
        },{
            live: function(){
                this.window = $(window);
                this.window.resize(this._onResize.bind(this));
                return false;
            },
            _onResize: function(){
                if (this.window.width() > 768)
                    for (var i=0;i<this.sliders.length;i++)
                        this.sliders[i].delMod('touch');
                else
                    for (var i=0;i<this.sliders.length;i++)
                        this.sliders[i].setMod('touch', true);
            }
        }));
    });
