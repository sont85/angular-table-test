
var app = angular.module('heimdall', ['ui.router']);
// app.factory("http", function(){
//
// });

app.config(function(){

})

app.controller("MainCtrl", function($http, $scope) {
  $http.get("http://localhost:3000/data").success(function(data) {
    $scope.data = data;
    $scope.headings = Object.keys(data[0])
  }).catch(function(error) {
    console.error(error);
  });

  $scope.dim = function(index, $event) {
    $scope.isDim = !$scope.isDim;
    $scope.selectedRow = index;
    var table = document.getElementById("table");
    if ($scope.isDim) {
      table.style.opacity = 0.5;
    } else {
      table.style.opacity = 1;
    }
  };


});
