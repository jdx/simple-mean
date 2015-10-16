'use strict';

angular.module('app', []);

angular.module('app')
.controller('TodoCtrl', function ($scope, TodoSvc) {
  $scope.refresh = function () {
    TodoSvc.fetch()
    .then(function (todos) {
      $scope.todos = todos.data;
    });
  }

  $scope.addTodo = function () {
    TodoSvc.add($scope.newTodo);
    $scope.newTodo = {};
    $scope.refresh();
  }

  $scope.refresh();
});

angular.module('app')
.service('TodoSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/todos');
  };

  this.add = function (todo) {
    return $http.post('/api/todos', todo);
  };
});
