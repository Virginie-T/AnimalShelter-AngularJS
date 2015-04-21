animalShelter.factory('AnimalShelterFactory', function AnimalShelterFactory() {
    var factory = {};
    factory.animals = [];

    function addAnimal(newName, newType) {
        this.animals.push({name: newName, type: newType, adopted: false});
    };
    return factory;
});
