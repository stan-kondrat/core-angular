core-angular
============

AngularJS modules for working with Core

##API

###ng-event
Template code

```html
<div ng-event="profile=Profile_Updated">
    <div id="user_name"    >{{profile.user_name}}    </div>
    <div id="user_birthday">{{profile.user_birthday}}</div>
</div>
```

Service code

```javascript
Core.registerEventPoint('Profile_Updated');

angular.module['example'].service('ProfileSrv', function(){
    return {
        updateProfile: function(un, ub) {
            FireEvent(new Profile_Updated({
                  user_name    : un
                , user_birthday: ub
            }))
        }    
    }    
})
```

Controller code

```javascript
angular.module['example'].controller('ProfileCtrl', function(){
    $scope.profile = {};
})
```


###ng-request
Template code

```html
<div ng-request="profile=Profile_GetInfoRequest">
    <div id="user_name"    >{{profile.user_name}}    </div>
    <div id="user_birthday">{{profile.user_birthday}}</div>
</div>
```

Service code

```javascript
Core.registerRequestPoint('Profile_GetInfoRequest');

angular.module['example'].service('ProfileSrv', function(){
    return Core.processObject({
        updateProfile: function() {
            CatchRequest(Profile_GetInfoRequest);
            
            return function(cb, eb) {
                cb({user_name: 'John', user_birthday: '24.11.1987'});
            }
        }    
    })    
})
```

Controller code

```javascript
angular.module['example'].controller('ProfileCtrl', function(){
    $scope.profile = {};
})
```