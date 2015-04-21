animalShelter.factory('AnimalShelterFactory', function AnimalShelterFactory() {
    var factory = {};
    factory.animals = [];

    factory.addAnimal = function (newName, newType) {
        this.animals.push({name: newName, type: newType, adopted: false});
    };

    factory.adoptAnimal = function(animal) {
        animal.adopted = true;
    };

    factory.countAnimals = function(type) {
        var counter = 0;
        for (var i = 0; i < this.animals.length; i++) {
            if (this.animals[i].type === type) {
                counter++;
            }
        };
        return counter;
    };
    return factory;
});
