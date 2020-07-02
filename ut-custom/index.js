module.exports = () => function utCustom() {
    return {
        orchestrator: () => [
            require('./api/script')
        ]
    };
};
