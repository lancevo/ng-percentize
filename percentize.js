angular.module('ng-percentize',[]).filter('percentize', function () {
  return function percentize(percent, digits) {
    if (isNaN(percent)) {
      return '';
    }
    if (typeof digits === 'undefined') {
      digits = 2;
    }
    percent = percent * 100;
    var integer = parseInt(percent, 10).toLocaleString(),
        decimal = (percent % 1).toFixed(digits).replace('0','');
    return integer + decimal;
  };
});
