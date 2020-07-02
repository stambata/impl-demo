module.exports = function standard() {
    return {
        'standard.entity.action1'() {
            return {
                module: 'standard',
                method: 'standard.entity.action1'
            };
        },
        'standard.entity.action2'() {
            return {
                module: 'standard',
                method: 'standard.entity.action2'
            };
        }
    };
};
