const equipmentList = ["Laptop", "Projector", "Router", "Ipad", "Keyboard"]

equipmentList.push("Spectranet", "Mouse")
console.log(equipmentList)
const removedItem = equipmentList.shift()
console.log(removedItem)

const message = `Removed item: ${removedItem}\n\nCurrent equipment list: ${equipmentList}\n\n`
console.log(message)

const totalItem = equipmentList.length >= 7 ? "The lab is fully equipped" : "The lab needs more equipment"
console.log(totalItem)