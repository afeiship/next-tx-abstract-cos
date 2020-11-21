(function() {
  const NxTxAbstractCos = require('../src');
  const config = require('./config.json');
  const nxCos = new NxTxAbstractCos(config);

  describe('NxTxAbstractCos.methods', function () {
    test('init', function () {
      console.log(nxCos);
    });
  });
})();
