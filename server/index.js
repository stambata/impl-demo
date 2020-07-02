module.exports = (...params) => [{
    main: require.resolve('../ut-standard'),
    pkg: require.resolve('../ut-standard/package.json')
}, {
    main: require.resolve('../ut-custom'),
    pkg: require.resolve('../ut-custom/package.json')
}].map(item => [item, ...params]);
