/*
 * From sequelize/cli
 * https://github.com/sequelize/cli/blob/master/src/helpers/path-helper.js
 */

function format(i) {
  return parseInt(i, 10) < 10 ? `0${i}` : i;
}

function getCurrentYYYYMMDDHHmmsString() {
  const date = new Date();
  return [
    date.getUTCFullYear(),
    format(date.getUTCMonth() + 1),
    format(date.getUTCDate()),
    format(date.getUTCHours()),
    format(date.getUTCMinutes()),
    format(date.getUTCSeconds()),
  ].join('');
}

module.exports = {
  getCurrentYYYYMMDDHHmmsString,
};
