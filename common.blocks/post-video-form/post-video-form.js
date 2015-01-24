/**
 * @module post-video-form
 */

modules.define(
    'post-video-form',
    ['i-bem__dom', 'jquery', 'dom','bh'],
    function(provide, BEMDOM, $, dom, BH) {
        var regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var parseYoutubeId = function(v){
            var match = v.match(regex);
            if (match && match[7]) {
                return match[7];
            } else {
                return false;
            }
        };
        /**
         * @exports
         * @class post-video-form
         * @augments control
         * @bem
         */
        provide(BEMDOM.decl({ block : this.name}, /** @lends post-video-form.prototype */{
            onSetMod : {
                'js' : {
                    'inited' : function() {
                    }
                }
            }
        },{
            live: function(){
                this.liveInitOnBlockInsideEvent('click', 'button', this.onButtonClick);
                this.liveBindTo('keyup', this.onKeys);
                this.liveBindTo('paste', this.onKeys);
                //return this.__base.apply(this, arguments);
            },
            onButtonClick: function(e){
                debugger;
                console.log(e);
            },
            onKeys: function(e){
                var youtubeId = parseYoutubeId(e.target.value);
                if (youtubeId)
                {
                    if (this.youtubeId && this.youtubeId === youtubeId)
                        return;
                    this.youtubeId = youtubeId;
                    this.findBlockInside('spin').setMod('visible', true);
                    $.ajax({
                        url:'http://gdata.youtube.com/feeds/api/videos/'+youtubeId+'?v=2&alt=jsonc&callback=?',
                        dataType : 'jsonp'
                    }).success((function(gdata){
                        try {
                            var image = gdata.data.thumbnail.hqDefault ?
                                gdata.data.thumbnail.hqDefault :
                                gdata.data.thumbnail.sqDefault;
                            if (!image)
                                return;
                            if (!this.init)
                            {
                                var html = $(BH.apply(
                                    [
                                        {
                                            block: 'video-card',
                                            img: image,
                                            title: gdata.data.title
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'islands', size: 'm', view: 'action'},
                                            text: 'Add this video'
                                        }
                                    ]
                                ));
                                $(this.domElem).append(html);
                                BEMDOM.init(html);
                                this.init = true;
                            }
                            else
                            {
                                var card = this.findBlockInside('video-card');
                                var cardDom = $(card.domElem);
                                var newCard = $(BH.apply(
                                    {
                                        block: 'video-card',
                                        img: image,
                                        title: gdata.data.title
                                    }
                                ));
                                cardDom.after(newCard);
                                cardDom.remove();
                                // don't need here because no logic
                                //BEMDOM.init(newCard);
                            }
                            this.findBlockInside('spin').setMod('visible', false);
                        } catch(e){
                            this.findBlockInside('spin').setMod('visible', false);
                        }
                    }).bind(this));

                }
            }
        }));
    });
