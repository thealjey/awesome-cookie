/**
 * @author Eugene Kuzmenko
 * @description A tiny script that takes care of all the cookie related problems in JavaScript
 * @license MIT
 */
var Cookie = (function (d) {
  var r = /=|;/, p = ';path=/' + (/\d+\.\d+\.\d+\.\d+/.test(d.domain) ? '' : ';domain=.' + location.host);
  function set(n, v, t) {
    var e = new Date;
    t && e.setDate(e.getDate() + t);
    d.cookie = [n, '=', v, ';expires=', e.toUTCString(), p].join('');
  }
  return {
    get: function (n) { return (n = (d.cookie + ';').match(new RegExp(n + '=.*;'))) && n[0].split(r)[1] },
    set: set,
    remove: function (n) { set(n, '', -1) }
  };
}(document));