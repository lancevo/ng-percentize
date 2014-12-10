angular.module('ng-percentize',[]).filter('percentize', function () {
  return function (input, decimal) {
    if (typeof decimal === 'undefined') {
      decimal = 2;
    }
    return isNaN(input) ? '' : (input * 100).toFixed(decimal);
  };
});
