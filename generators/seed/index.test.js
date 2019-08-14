const path = require('path');
const sinon = require('sinon');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const { getCurrentYYYYMMDDHHmmsString } = require('../../helpers/date');

describe('iic2513:seed', () => {
  const seedName = 'test-seed';
  let clock;

  before(() => {
    const now = new Date();
    clock = sinon.stub(Date, 'now').returns(now);
  });

  after(() => clock.restore());

  context('when option --create is present', () => {
    it('creates seed file', async () => {
      const dateString = getCurrentYYYYMMDDHHmmsString();
      await helpers.run(__dirname)
        .withOptions({ create: true })
        .withArguments([seedName]);

      const filePath = path.join('seeds', `${dateString}-${seedName}.js`);
      assert.file(filePath);
      assert.fileContent(filePath, 'up: (queryInterface, Sequelize) => {');
    });
  });

  context('when option --destroy is present', () => {
    let runDirectory;

    before(async () => {
      runDirectory = await helpers.run(__dirname)
        .withOptions({ create: true })
        .withArguments([seedName]);
    });

    it('deletes the seed file', async () => {
      const dateString = getCurrentYYYYMMDDHHmmsString();
      await helpers.run(__dirname)
        .inDir(runDirectory)
        .withOptions({ destroy: true })
        .withArguments([seedName]);

      return assert.noFile(path.join(runDirectory, 'seeds', `${dateString}-${seedName}.js`));
    });
  });
});
