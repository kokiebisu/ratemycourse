if (process.env.NODE_ENV === 'production') {
  return;
} else {
  module.exports = require('./dev');
}
