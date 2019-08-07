module.exports = (sequelize, DataTypes) => {
  const <%= name %> = sequelize.define('<%= name %>', {
    <%_ attributes.forEach(function(attribute, index) { _%>
    <%= attribute.fieldName %>: DataTypes.<%= attribute.dataType.toUpperCase() %>,
    <%_ }) _%>
  }, {});

  <%= name %>.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return <%= name %>;
};
