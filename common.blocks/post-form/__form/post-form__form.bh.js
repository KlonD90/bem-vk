module.exports = function(bh) {
    bh.match('post-form__form', function(ctx, json) {
        ctx.tag('textarea');
    });
};
