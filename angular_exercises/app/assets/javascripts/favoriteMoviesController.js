movies.controller('favoriteMoviesController', function($scope) {
  $scope.favoriteMovies = [{name: "Titanic"}, {name: "Jurassic Park 3"}, {name:"Star Wars: Episode 1"}];

  $scope.removeFavorite = function(index){
    $scope.favoriteMovies.splice(index,1);
  };
});

