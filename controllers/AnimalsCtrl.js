animalShelter.controller('AnimalsCtrl', function AnimalsCtrl($scope, AnimalShelterFactory) {
    $scope.AnimalShelterFactory = AnimalShelterFactory;
    $scope.animals = AnimalShelterFactory.animals;

    $scope.addAnimal = function () {
        var name = $scope.animalName;
        var type = $scope.animalType;
        console.log(name);
        console.log(type);

        $scope.AnimalShelterFactory.addAnimal(name, type);
        $scope.animalName = null;
        $scope.animalType = null;
    };


});
