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

    this.argument('attributes', {
      desc: "Model's attributes (name:type,name1:type1[...])",
      required: true,
      type: String,
    });
  }

  writting() {
    const { attributes: attributesRaw, name } = this.options;

    const attributes = attributesRaw.trim().split(',').map((attribute) => {
      const splittedAttribute = attribute.split(':');
      return {
        fieldName: splittedAttribute[0],
        dataType: splittedAttribute[1],
      };
    });

    this.fs.copyTpl(
      this.templatePath('model.js'),
      this.destinationPath('src', 'models', `${name}.js`),
      { name, attributes },
    );
  }
};
