const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;

  beforeEach(function () {

    park = new Park("Jurassic World", 35);
    dino1 = new Dinosaur('T-rex', 'carnivore', 50);
    dino2 = new Dinosaur('Triceratops', 'herbivore', 35);
    dino3 = new Dinosaur('Mosasaurus', 'carnivore', 70);
    dino4 = new Dinosaur('Ankylosaurus', 'herbivore', 20)

  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic World');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 35);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, []);

  });

  it('should be able to add a dinosaur to its collection', function () {
      park.add(dino1);
      const actual = park.dinoCollection;
      assert.deepStrictEqual(actual, [dino1]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
      park.add(dino1);
      park.add(dino2);
      park.remove(dino1);
      const actual = park.dinoCollection;
      assert.deepStrictEqual(actual, [dino2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
