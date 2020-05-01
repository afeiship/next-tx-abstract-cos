(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxTxAbstractCos = require('../src/next-tx-abstract-cos');
  var config = require('./config.json');
  var nxCos = new NxTxAbstractCos(config);

  describe('NxTxAbstractCos.methods', function() {
    test('init', function() {
      console.log(nxCos);
    });
  });
})();
