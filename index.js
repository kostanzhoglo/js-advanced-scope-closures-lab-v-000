function produceDrivingRange(blockRange) {
  return function(pickUpBlock, dropOffBlock) {
    let pickUp = parseInt(pickUpBlock);
    let dropOff = parseInt(dropOffBlock);
    let distance = Math.abs(pickUp - dropOff);
    let withinRange = blockRange - distance;

    if (withinRange >= 0) {
      return `within range by ${withinRange}`
    } else {
      return `${Math.abs(withinRange)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipDecimal) {
  return function(mealTotal) {
    return mealTotal * tipDecimal;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  }
}
