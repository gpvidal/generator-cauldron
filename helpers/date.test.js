const { expect } = require('chai');
const sinon = require('sinon');
const { getCurrentYYYYMMDDHHmmsString } = require('./date');

describe('Date Helper', () => {
  let clock;

  before(() => {
    const fakeUTCTime = new Date(Date.UTC(2000, 10, 25, 12, 1, 30));
    clock = sinon.useFakeTimers(fakeUTCTime);
  });

  after(() => clock.restore());

  describe('.getCurrentYYYYMMDDHHmmsString', () => {
    it('returns date string in YYYYMMDDHHmms format', () => {
      const generatedDate = getCurrentYYYYMMDDHHmmsString();
      // month, beginning with 0 for January to 11 for December.
      expect(generatedDate).is.equals('20001125120130');
    });
  });
});
