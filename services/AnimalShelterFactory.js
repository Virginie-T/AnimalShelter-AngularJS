animalShelter.factory('AnimalShelterFactory', function AnimalShelterFactory() {
    var factory = {};
    factory.animals = [];

    factory.addAnimal = function (newName, newType) {
        this.animals.push({name: newName, type: newType, adopted: false});
    };
    return factory;
});
