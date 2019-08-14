const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.args = args;

    this.option('create', {
      alias: 'c',
      desc: 'Create a model',
      type: Boolean,
      default: false,
    });

    this.option('destroy', {
      alias: 'd',
      desc: 'Destroy a model',
      type: Boolean,
      default: false,
    });
  }

  initialize() {
    if (this.options.create) {
      this.composeWith(
        require.resolve('./create'),
        { arguments: this.args },
      );
    } else if (this.options.destroy) {
      this.composeWith(
        require.resolve('./destroy'),
        { arguments: this.args },
      );
    }
  }
};
