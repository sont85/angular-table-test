
var app = angular.module('heimdall', ['ui.router']);

app.controller("MainCtrl", function($http, $scope) {
  $http.get("https://lit-retreat-9513.herokuapp.com/data").success(function(data) {
    $scope.data = data;
    $scope.headings = Object.keys(data[0]);
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
