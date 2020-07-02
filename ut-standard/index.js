module.exports = () => function utStandard() {
    return {
        orchestrator: () => [
            require('ut-dispatch-db')(['standard'], ['utStandard.standard']),
            require('./api/script')
        ],
        dev: () => [
            require('./api/mock')
        ]
    };
};
