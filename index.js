module.exports = require('angular/angular');
try {
  delete global.angular;
} catch (e) {
  // do nothing on error.
}
