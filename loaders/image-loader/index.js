const tinify = require('tinify');
const { getOptions, interpolateName } = require('loader-utils');

tinify.key = "vheI2CrjYQupra3ZwvZrmuvdcF8rtHSB";

function tinifyImage(source) {
    const options = getOptions(this);
    const { name, publicPath } = options || {};
    const filename = interpolateName(this, name || "[hash].[ext]", { content: source })
    const callback = this.async();

    tinify.fromBuffer(source).toBuffer((err, resultData) => {
        this.emitFile(filename, resultData);
        const result = JSON.stringify((publicPath || "") + filename);
        callback(err, `module.exports = ${ result }`);
    });
}   

module.exports = tinifyImage;
module.exports.raw = true;