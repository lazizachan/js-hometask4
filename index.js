// task1
// let daysNumber = prompt("Vvedite nomer dnya");
// switch (daysNumber) {
//   case "1":
//   case "2":
//   case "3":
//   case "4":
//   case "5":
//     console.log("budniy den");
//     break;
//   case "6":
//   case "7":
//     console.log("Vixodnoy den");
//     break;
//   default:
//     console.log("Vvedite pravilnoye chislo nedeli");
// }

// // task2

// let number = prompt("Vvedite lyuboye chislo ot 1 do 10");
// switch (number) {
//   case "1":
//     console.log("konichuha");
//     break;
//   case "2":
//     console.log("Ogenki desuka?");
//     break;
//   case "3":
//     console.log("okanemochidesune");
//     break;
//   case "4":
//     console.log("subarashii");
//     break;
//   case "5":
//     console.log("goukakushimasuyouni");
//     break;
//   case "6":
//     console.log("shuushokushimasuyouni");
//     break;
//   case "7":
//     console.log("hayaku nippon he ikimasuyouni");
//     break;
//   case "8":
//     console.log("Anataha dokushin desuka?");
//     break;
//   case "9":
//     console.log("oikutsu desuka?");
//     break;
//   case "10":
//     console.log("itsu kekkonshimasuka?");
//     break;
//   default:
//     console.log("Vvedite chislo ot 1 do 10");
// }

//  task4

// let chislo = prompt("Vvedite chislo");
// let svoystvo = chislo % 2 == 0 ? "chotnoye" : " nechotnoye  ";
// let otrilipol = chislo < 0 ? "otr" : "pol";
// console.log(svoystvo, otrilipol);

// task3;
let ques1 = prompt("1.Are you married? yes no");
let ans1 = ques1 == "yes" ? "yes" : "no";

let ques2 = prompt("2.sake wo nomitai desuka? yes no");
let ans2 = ques2 == "yes" ? "yes" : "no";

let ques3 = prompt("3.Nippon he ikitai desuka? yes no");
let ans3 = ques3 == "yes" ? "yes" : "no";
let ques4 = prompt("4.America he ikitai desuka? yes no");
let ans4 = ques4 == "no" ? "no" : "yes";
let ques5 = prompt("5.K omarimashitaka? no yes");
let ans5 = ques5 == "no" ? "no" : "yes";
console.log(ans1, ans2, ans3, ans4, ans5);
