/* eslint no-console: 0, no-process-exit: 0 */

const inspect = promise => promise.then(console.dir).catch(console.error);

async function run() {
    const {
        serviceBus: {
            publicApi: {
                importMethod
            }
        }
    } = await require('ut-run').run({
        version: require('./package.json').version,
        root: __dirname,
        resolve: require.resolve
    });

    console.log('\ncalling methods...\n');

    await inspect(importMethod('standard.entity.action1')({}));
    await inspect(importMethod('standard.entity.action2')({}));

    process.exit(0);
}

run();
