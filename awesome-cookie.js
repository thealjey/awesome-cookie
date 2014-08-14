/**
 * @author Eugene Kuzmenko
 * @description A tiny script that takes care of all the cookie related problems in JavaScript
 * @license MIT
 */
var Cookie = (function () {
  var r = /=|;/, p = ';path=/' + (/\d+\.\d+\.\d+\.\d+/.test(document.domain) ? '' : ';domain=.' + location.host);
  function set(n, v, d) {
    var e = new Date;
    d && e.setDate(e.getDate() + d);
    document.cookie = [n, '=', v, ';expires=', e.toUTCString(), p].join('');
  }
  return {
    get: function (n) { return (n = (document.cookie + ';').match(new RegExp(n + '=.*;'))) && n[0].split(r)[1] },
    set: set,
    remove: function (n) { set(n, '', -1) }
  };
}());