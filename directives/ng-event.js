angular.module['core-angular'].directive('ngEvent', function() {
    return {
          restrict: 'A'
        , compile: function() {
            return {
                pre: function preLink(scope, iEl, iAttr) {
                    var eventExpArr = iAttr['ngEvent'].replace(/ /g, '').split(',');

                    for( var i = 0, l = eventExpArr.length; i < l; i++ ) {
                        (function(eventArr) {
                            var service;
                            eventArr = eventExpArr[i].match(/^([a-zA-Z0-9.]+)*=*(.+)$/);

                            window[eventArr[2]].listeners.push([ null, function() {
                                var data = CatchEvent();
                                scope[eventArr[1]] = data;
                                scope.$apply();
                            }]);
                        })(eventExpArr[i]);
                    }
                }
                , post: function postLink(scope, iEl, iAttr) {
                }
            }
        }
    }
});