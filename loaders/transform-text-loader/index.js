const { getOptions } = require('loader-utils');

function replaceHello(source) {
    const options = getOptions(this);

    const { string, regex } = options;

    const replaceWithOption = source.replace(regex, string);

    return `export default ${ JSON.stringify(replaceWithOption) }`;
}

module.exports = replaceHello;