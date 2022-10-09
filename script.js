"use strict";
let discount = +prompt(
  "Выберите пиццу (1 - фирменная, 2 - с курицей и ананасом, 3 - четыре сыра, 4 - пеперони):"
);
let count = +prompt("Введите количество пицц:");

function orderingPizza(t = 1, n = 1) {
  let order = "";
  switch (t) {
    case 1:
      order = "фирменнная";
      break;
    case 2:
      order = "с курицей и ананасом";
      break;
    case 3:
      order = "четыре сыра";
      break;
    case 4:
      order = "пеперони";
      break;

    default:
      alert("Извините, произошла ошибка.");
      break;
  }
  return "Ваш заказ:" + "<br>" + "Пицца: " + order + "<br>" + "Количество: " + n + " шт.";
}

document.write(orderingPizza(discount, count));
