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
  for (i = 0; i < array.length; i++) {
    if (array[i] === "Won't you be my neighbor?") {
      array[i] = "Won't you be my neighbor, " + name + "?";
    }
  }
  return array.join(" ");
}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("#numberInput").val());
    const nameInput = $("#nameInput").val();
    const roboOutput = mrRoboger(numberInput);
    const neighborNameOutput = addNeighborName(roboOutput,nameInput);
    $("#output").text(neighborNameOutput);
    $("#backwards").show();
    $("#backwards").click(function(event) {
      event.preventDefault();
      $("#backwardsOutput").text(neighborNameOutput);
    })
  })
})