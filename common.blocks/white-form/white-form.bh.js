module.exports = function(bh) {
    bh.match('white-form', function(ctx, json) {
        ctx.tag('form');
    });
};
