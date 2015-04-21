animalShelter.controller('AnimalsCtrl', function AnimalsCtrl($scope, AnimalShelterFactory) {
    $scope.AnimalShelterFactory = AnimalShelterFactory;
    $scope.animals = AnimalShelterFactory.animals;

    $scope.addAnimal = function () {
        var name = $scope.animalName;
        var type = $scope.animalType;

        $scope.AnimalShelterFactory.addAnimal(name, type);
        $scope.animalName = null;
        $scope.animalType = null;
    };

    $scope.adoptAnimal = function(animal) {
        $scope.AnimalShelterFactory.adoptAnimal(animal);
    };

    $scope.countNonAdoptedAnimals = function(type) {
        return $scope.AnimalShelterFactory.countNonAdoptedAnimals(type);
    };

    $scope.countAdoptedAnimals = function(type) {
        return $scope.AnimalShelterFactory.countAdoptedAnimals(type);
    };

});
