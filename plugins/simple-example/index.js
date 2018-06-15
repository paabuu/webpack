function SimplePlugin() {};

SimplePlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        var fileList = 'In this build:\n\n';
        
        for (var filename in compilation.assets) {
            console.log(filename);
            fileList += ('- ' + filename + '\n');
        }

        compilation.assets['filelist.md'] = {
            source: function() {
                return fileList;
            },
            size: function() {
                return fileList.length;
            }
        };

        callback();
    })
}

module.exports = SimplePlugin;