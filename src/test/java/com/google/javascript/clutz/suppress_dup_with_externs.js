goog.provide('dup.C');

dup.C = goog.defineClass(null, {
  constructor: function() {},
  /**
   * @export
   * @param {string} a
   * @return {boolean}
   */
   foo: function(a) {return true;}
})

/**
 * @suppress {duplicate}
 * @export
 * @param {string} a
 * @return {boolean}
 */
dup.C.prototype.foo = function(a) {return false;};