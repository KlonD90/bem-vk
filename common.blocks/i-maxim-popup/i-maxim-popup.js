/**
 * @module post-video-form
 */

modules.define(
    'i-maxim-popup',
    ['i-bem', 'i-bem__dom', 'jquery', 'dom','bh', 'maxim-popup'],
    function(provide, BEM, BEMDOM, $, dom, BH, MaximPopup) {
        /**
         * @exports
         * @class post-video-form
         * @augments control
         * @bem
         */
        var curPopup = null;
        provide(function(data, isBemJson, outClose){
            outClose = outClose || true;
            if (!curPopup)
            {
                var bemJson = {
                    block: 'maxim-popup',
                    mods: {visible: true}
                };
                if (isBemJson)
                    bemJson.content = data;
                var html =  $(BH.apply(bemJson));
                $('body').append(html);
                BEMDOM.init(html);
                curPopup = html.bem('maxim-popup');
                curPopup.params.outClose = outClose;
            }
            else
            {
                var content = data;
                if (isBemJson)
                    var content = $(BH.apply(data));
                curPopup.show();
                curPopup.setContent(content);
            }
        });
    });
