function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let start = parseInt(startBlock),
        end = parseInt(endBlock),
        distance = Math.abs(end - start),
        difference = blockRange - distance;

    if (difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip
  }
}

function createDriver(){
  let driverId = 1
  return class {
    constructor(name){
      this.id = driverId++
      this.name = name
    }
  }
}
