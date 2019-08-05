const assert = require('yeoman-assert');
const fs = require('fs');
const helpers = require('yeoman-test');
const path = require('path');

describe('iic2513:app', () => {
  it('generates a project', () => helpers.run(path.join(__dirname, '..', 'app'))
    .then(() => {
      const fileList = fs.readdirSync(path.join(__dirname, 'templates'));
      assert.file(fileList);
    }));
});
