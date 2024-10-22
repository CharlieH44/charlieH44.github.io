let valueOne = 0
slotValueOne.innerText = valueOne
function spin() {
  valueOne = Math.floor(Math.random()*10)
  slotValueOne.innerText = valueOne
}

spin()
