'use strict';

angular.module('app', []);

angular.module('app')
.controller('TodoCtrl', function ($scope) {
  $scope.todos = ['Get paper', 'Mail rent check', 'Call mom'];

  $scope.addTodo = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = '';
  }
});
