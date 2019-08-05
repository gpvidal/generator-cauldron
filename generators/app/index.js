const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    // Copy all files
    this.fs.copy(
      this.templatePath(),
      this.destinationPath(),
      { globOptions: { dot: true } },
    );
  }
};
