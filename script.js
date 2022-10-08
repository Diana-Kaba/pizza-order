"use strict";
let discount = +prompt(
    "Выберите пиццу (1 - с грибами, 2 - с курицей и ананасом, 3 - четыре сыра, 4 - пеперони):"
  );
let count = +prompt('Введите количество пицц:');
let order = '';
function orderingPizza(t, n) {
  switch (discount) {
    case 1:
      order = "с грибами";
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
}

orderingPizza();

document.write('Ваш заказ:' + '<br>' + 'Пицца: ' + order + '<br>' + 'Количество: ' + count + 'шт.');