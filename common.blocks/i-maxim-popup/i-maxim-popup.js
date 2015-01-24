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
        provide(function(data, isBemJson){
            if (!BEM.blocks['maxim-popup'].popup)
            {
                var bemJson = {
                    block: 'maxim-popup',
                    mods: {visible: true},
                    js: {outClose: true}
                };
                if (isBemJson)
                    bemJson.content = data;
                var html =  $(BH.apply(bemJson));
                $('body').append(html);
                BEMDOM.init(html);
            }
            else
            {
                var content = data;
                if (isBemJson)
                    var content = $(BH.apply(data));
                BEM.blocks['maxim-popup'].popup.show();
                BEM.blocks['maxim-popup'].popup.setContent(content);
            }
        });
    });
