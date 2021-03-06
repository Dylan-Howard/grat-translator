var app = angular.module('translator', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope) {

    $scope.translation = '';

    $scope.history = [
      {english: 'great', grat: 'grat'},
      {english: 'time', grat: 'tim'},
      {english: 'lots', grat: 'los'},
      {english: 'of', grat: 'avi'}
    ];

    $scope.favorites = [
      {english: 'trick or treat', grat: 'chic o creat'},
      {english: 'makeup', grat: 'mac up'},
      {english: 'face', grat: 'fas'}
    ];

    $scope.translate = function() {
      // console.log(doTranslation($scope.english));
      $scope.translation = doTranslation($scope.english);
      for(var i = 0; i < $scope.favorites.length; i++) {
        if($scope.favorites[i].english.toLowerCase() === $scope.english.toLowerCase()) {
          $('#favorite').find('.bot').addClass('active');
          return;
        } else {
          $('#favorite').find('.bot').removeClass('active');
        }
      }
    }

    $scope.toggleFavorite = function() {
      for(var i = 0; i < $scope.favorites.length; i++) {
        if($scope.english.toLowerCase() === $scope.favorites[i].english.toLowerCase()) {
          console.log('removing item');
          $scope.favorites.splice(i,1);
          $('#favorite').find('.bot').toggleClass('active');
          return;
        }
      }
      console.log('adding item');
      $scope.addItem('favorites');
    }

    $scope.addItem = function(list) {
      console.log($scope.translation);
      if(list === 'history') {
        $scope.history.push(
          {english: $scope.english, grat: $scope.translation}
        );
      } else {
        $('#favorite').find('.bot').toggleClass('active');
        $scope.favorites.push(
          {english: $scope.english, grat: $scope.translation}
        );
      }
    }

    $scope.removeItem = function(item, list) {
      if(list === 'history') {
        var index = $scope.history.indexOf(item);
        $scope.history.splice(index, 1);
      } else {
        var index = $scope.favorites.indexOf(item);
        $scope.favorites.splice(index, 1);
      }
    }
}]);
