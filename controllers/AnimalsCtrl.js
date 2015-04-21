animalShelter.controller('AnimalsCtrl', function AnimalsCtrl($scope, AnimalShelterFactory) {
    $scope.AnimalShelterFactory = AnimalShelterFactory;
    $scope.animals = AnimalShelterFactory.animals;

    $scope.addAnimal = function () {
        console.log("omg plz");
        var name = $scope.animalName;
        var type = $scope.animalType;

        $scope.AnimalShelterFactory.addAnimal(name, type);
        $scope.animalName = null;
        $scope.animalType = null;
    };


});
