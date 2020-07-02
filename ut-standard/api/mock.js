module.exports = function mock() {
    return {
        'standard.entity.action1'() {
            return {
                module: 'mock',
                method: 'standard.entity.action1'
            };
        },
        'standard.entity.action2'() {
            return {
                module: 'mock',
                method: 'standard.entity.action2'
            };
        }
    };
};
