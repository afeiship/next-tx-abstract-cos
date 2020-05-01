/*!
 * name: @feizheng/next-tx-abstract-cos
 * description: Basic cos class for next.
 * homepage: https://github.com/afeiship/next-tx-abstract-cos
 * version: 1.0.0
 * date: 2020-05-01T00:46:51.546Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var COS = require('cos-nodejs-sdk-v5');
  var Promise = require('bluebird');
  var DEFAULT_OPTIONS = {
    SecretId: 'COS_SECRETID',
    SecretKey: 'COS_SECRETKEY'
  };

  var NxTxAbstractCos = nx.declare('nx.TxAbstractCos', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        this.cos = new COS(this.options);
        Promise.promisifyAll(this.cos, { context: this.cos });
      },
      parseOptions: function (inOptions) {
        if (!inOptions) return;
        var appId = this.options.id;
        var bucket = inOptions.Bucket;
        bucket && (inOptions.Bucket = bucket.includes(appId) ? bucket : bucket + '-' + appId);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxTxAbstractCos;
  }
})();

//# sourceMappingURL=next-tx-abstract-cos.js.map
