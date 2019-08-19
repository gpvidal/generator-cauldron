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

  writting() {
    this.fs.delete(this.destinationPath('src', 'models', `${this.options.name}.js`));

    this.composeWith(
      require.resolve('../migration/destroy'),
      this.options,
    );
  }
};
