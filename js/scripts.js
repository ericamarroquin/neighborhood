function mrRoboger(number) {
  let roboArray = [];
  for (let i = 0; i < number + 1; i++) {
    if (i.toString().includes(3)) {
      roboArray.push("Won't you be my neighbor?");
    } else {
      roboArray.push(i);
    }
  }
  return roboArray;
}