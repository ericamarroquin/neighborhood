//Business Logic

function mrRoboger(number,name) {
  let roboArray = [];
  for (let i = 0; i < number + 1; i++) {
    if (i.toString().includes(3)) {
      roboArray.push("Won't you be my neighbor, " + name + "?");
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

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("#numberInput").val());
    const nameInput = $("#nameInput").val();
    const roboOutput = mrRoboger(numberInput,nameInput);
    $("#output").text(roboOutput.join(" "));
    $("#backwards").show();
    $("#backwards").click(function(event) {
      event.preventDefault();
      const backwardsRoboOutput = mrRoboger(numberInput,nameInput).reverse();
      $("#backwardsOutput").text(backwardsRoboOutput.join(" "));
    })
  })
})