module.exports = function custom() {
    return {
        'standard.entity.action1'(msg, $meta) {
            return super[$meta.method](msg);
        },
        'standard.entity.action2'() {
            return {
                module: 'custom',
                method: 'standard.entity.action2'
            };
        }
    };
};
