console.log(module.paths);
// Nodejs module define
function Module(id, parent) {
    this.id = id;
    this.exports = {};
    this.parent = parent;
    if (parent && parent.children) {
        parent.children.push(this);
    }

    this.filename = null;
    this.loaded = false;
    this.children = [];
}

// Native extension for .json
Module._extensions['.json'] = function (module, filename) {
    var content = NativeModule.require('fs').readFileSync(filename, 'utf-8');
    try {
        module.exports = JSON.parse(stripBOM(content));
    } catch (err) {
        err.message = filename + ': ' + err.message;
        throw err;
    }
};