angular.module('YiZhibo.live', ['ionic'])
  .controller('LiveCtrl', function($scope, $ionicLoading) {
    $ionicLoading.show({
      template: 'Loading...'
    });

    var query = new AV.Query(Game);
    query.find({
      success: function(res) {
        // Do something with the returned AV.Object values
        console.log(res);
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  });
