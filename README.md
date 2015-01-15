core-angular
============

AngularJS modules for working with CoreJS

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