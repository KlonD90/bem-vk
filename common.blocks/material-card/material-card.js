/**
 * @module post-form
 */

modules.define(
    'material-card',
    ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {
        /**
         * @exports
         * @class post-form
         * @bem
         */
        provide(BEMDOM.decl({ block : this.name}, /** @lends post-form.prototype */{
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        if (this.params.data.images){
                            //var $slider = $('.slider');
                            this.
                        }
                        this.findBlockInside('button').on('click',this._onClickClose, this);
                    }
                }
            },
            _onClickClose: function(){
                this.emit('cardClose');
                BEMDOM.destruct(this.domElem);
            }
        }));
    });
