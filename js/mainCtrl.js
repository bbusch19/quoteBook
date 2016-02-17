var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {
  // localStorage.clear();
  // dataService.retrieveStorage();
  $scope.quotes = dataService.getData();

  $scope.addQuote = function() {
    var quote = buildQuote();
    dataService.addData(quote);
    removeQuote();
  }

  $scope.removeQuote = function() {
    var quoteToRemove = buildQuote();
    dataService.removeData(quoteToRemove, $scope.quotes);
    removeQuote();
  }

  function buildQuote() {
    return {
      text: $scope.text,
      author: $scope.author
    }
  }

  function removeQuote() {
    $scope.text = '';
    $scope.author = '';
  }

  $scope.changeFilter = function() {
      $scope.filterType = $scope.quoteInput;
    }



});
