const { empty } = require('./validation');

describe('Validation Helpers', () => {
  describe('.empty', () => {
    context('when value is empty', () => {
      it('returns true', () => empty(''));
    });

    context('when value is not empty', () => {
      it('returns false', () => !empty('test'));
    });
  });
});
