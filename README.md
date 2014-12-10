ng-percentize
=============

angular filter percentage

[Demo](http://jsfiddle.net/lvo811/eu79o9tm/)


Usage:

```js
{{ 0.156 | percentize }}%  //  15.60%   -- default is set to 2 decimal

{{ 0.1994 | percentize: 3 }} // 19.940
```

Import
```js
angular.module('sample', ['ng-percentize'])

```
