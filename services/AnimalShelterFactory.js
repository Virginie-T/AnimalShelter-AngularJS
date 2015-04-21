animalShelter.factory('AnimalShelterFactory', function AnimalShelterFactory() {
    var factory = {};
    factory.animals = [];

    factory.addAnimal = function (newName, newType) {
        this.animals.push({name: newName, type: newType, adopted: false});
    };

    factory.adoptAnimal = function(animal) {
        animal.adopted = true;
    };

    factory.countNonAdoptedAnimals = function(type) {
        var counter = 0;
        for (var i = 0; i < this.animals.length; i++) {
            if (this.animals[i].type === type && this.animals[i].adopted === false) {
                counter++;
            }
        };
        return counter;
    };

    factory.countAdoptedAnimals = function(type) {
        var counter = 0;
        for (var i = 0; i < this.animals.length; i++) {
            if (this.animals[i].type === type && this.animals[i].adopted === true) {
                counter++;
            }
        };
        return counter;
    };

    return factory;
});
