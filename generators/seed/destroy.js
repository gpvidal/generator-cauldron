const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    /*
     * Arguments
     */

    this.argument('name', {
      desc: "Seeds's name",
      required: true,
      type: String,
    });
  }

  writting() {
    this.fs.delete(this.destinationPath('src', 'seeds', `*-${this.options.name}.js`));
  }
};
