let distance = 0;
const olsheu = () =>{
    while (true) {
      let dis = +prompt("kashictic engiz");
      if (dis == 0) {
        break;
      }
      let unit = prompt("olshem birlic engiz m, dm, km");
      if (unit == "m") {
        distance += dis;
      } else if (unit == "dm") {
        distance += dis / 10;
      } else if (unit == "km") {
        distance += dis * 1000;
      }
    }
    return distance
}
console.log(olsheu());




