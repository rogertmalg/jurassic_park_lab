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

Park.prototype.findStarDino = function () {
    let starDino = this.dinoCollection[0];
    for (const dino of this.dinoCollection) {
        if ( dino.guestsAttractedPerDay > starDino.guestsAttractedPerDay) {
            starDino = dino;
        }
    }
    
}



  module.exports = Park;