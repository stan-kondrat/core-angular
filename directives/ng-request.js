angular.module['core-angular'].directive('ngRequest', function() {
        return {
            restrict: 'A'
            , compile: function() {
                return {
                    pre: function preLink(scope, iEl, iAttr) {
                        var
                              request = iAttr['ngRequest'].match(/^([a-zA-Z0-9]+) *= *([^.]+)\.([^.]+)\((.*)\)$/)
                            , service;

                        try {
                            service = iEl.injector().get(request[2]);
                        } catch (e) {
                            throw 'There is no ' + request[2] + ' service. ' + e;
                        }

                        if( request[4] ) {
                            request[4] = (new Function('return ' + request[4] ))();
                        } else {
                            request[4] = null;
                        }

                        FireRequest(new service[request[3]](request[4], function(data) {
                            //scope[request[1]] = data;
                        }));
                    }
                    , post: function postLink(scope, iEl, iAttr, controller) {

                    }
                }
            }
        }
    });