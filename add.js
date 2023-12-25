let carModel = prompt("Avtomobilinizin modelini daxil edin.");
let road = prompt("Yolun uzunluğunu daxil edin.");
let gasoline = prompt("Yanacağın litrini daxil edin.");
 
function carData(model, way, gasoline) {
    return {
    model : model,
    way : way,
    gasoline : gasoline,
    }
}
const result = carData("Avtomobilin modeli" + " " + carModel, "Yolun uzunluğu" + " " + road, "Yanacağın litri" + " " + gasoline)

console.log(result);
