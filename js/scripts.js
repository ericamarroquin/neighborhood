//Business Logic

function mrRoboger(number) {
  let roboArray = [];
  for (let i = 0; i < number + 1; i++) {
    if (i.toString().includes(3)) {
      roboArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      roboArray.push("Boop!");
    } else if (i.toString().includes(1)) {
      roboArray.push("Beep!");
    } else {
      roboArray.push(i);
    }
  }
  return roboArray;
}

//UI Logic

function addNeighborName(array, name) {
  array.forEach(function(element) {
    if (element === "Won't you be my neighbor?") {
      let element = "Won't you be my neighbor," + name + "?";
    }
  })
  return array;
}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("#numberInput").val());
    const roboOutput = mrRoboger(numberInput);
    $("#output").text(roboOutput);
  })
})