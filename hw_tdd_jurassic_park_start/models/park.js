const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
}

Park.prototype.add = function (dino) {
    this.dinoCollection.push(dino);
  }

Park.prototype.remove = function (dino) {
  this.dinoCollection.splice(this.dinoCollection.indexOf(dino), 1);
}



  module.exports = Park;