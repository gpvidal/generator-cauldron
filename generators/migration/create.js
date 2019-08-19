const Generator = require('yeoman-generator');
const { getCurrentYYYYMMDDHHmmsString } = require('../../helpers/date');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    /*
     * Arguments
     */

    this.argument('name', {
      desc: "Migration's name",
      required: true,
      type: String,
    });
  }

  writting() {
    const { name } = this.options;
    const dateString = getCurrentYYYYMMDDHHmmsString();
    this.fs.copy(
      this.templatePath('skeleton.js'),
      this.destinationPath('src', 'migrations', `${dateString}-${name}.js`),
    );
  }
};
