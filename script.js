"use strict";
let discount = +prompt(
  "Выберите пиццу (1 - фирменная, 2 - с курицей и ананасом, 3 - четыре сыра, 4 - пеперони):"
);
let count = +prompt("Введите количество пицц:");

function orderingPizza(t = 1, n = 1) {
  let order = "";
  let price = 0;
  let sum = 0;
  switch (t) {
    case 1:
      order = "фирменнная";
      price = 50;
      sum += price;
      break;
    case 2:
      order = "с курицей и ананасом";
      price = 70;
      sum += price;
      break;
    case 3:
      order = "четыре сыра";
      price = 50;
      sum += price;
      break;
    case 4:
      order = "пеперони";
      price = 65;
      sum += price;
      break;

    default:
      alert("Извините, произошла ошибка.");
      break;
  }
  return "Ваш заказ:" + "<br>" + "Пицца: " + order + "<br>" + "Количество: " + n + " шт." + '<br>' + 'Стоимоить заказа: ' + sum + ' грн.';
}

document.write(orderingPizza(discount, count));
