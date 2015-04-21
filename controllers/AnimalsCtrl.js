animalShelter.controller('AnimalsCtrl', function AnimalsCtrl($scope, AnimalShelterFactory) {
    $scope.AnimalShelterFactory = AnimalShelterFactory;
    $scope.animals = AnimalShelterFactory.animals;

    function addAnimal() {
    var name = $scope.animalName;
    var type = $scope.animalType;

    $scope.AnimalShelterFactory.addAnimal(name, type);
    $scope.animalName = null;
    $scope.animalType = null;
};


});
