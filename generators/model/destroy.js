const path = require('path');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    /*
     * Arguments
     */

    this.argument('name', {
      desc: "Model's name",
      required: true,
      type: String,
    });
  }

  end() {
    this.fs.delete(this.destinationPath(path.join('models', `${this.options.name}.js`)));
  }
};
