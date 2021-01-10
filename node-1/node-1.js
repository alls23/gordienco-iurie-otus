const originalJson = {
  "name": 1,
  "items": [
    {
      "name": 2,
      "items": [
        {
          "name": 3
        },
        {
          "name": 4
        }
      ]
    },
    {
      "name": 5,
      "items": [
        {
          "name": 6
        }
      ]
    }
  ]
}

// Создание NPM пакета для показа дерева
// Цель: Написать функцию для показа древовидной структуры.
// Можно выполнять одну из двух предложенных примеров задач.
// Написать функцию для показа древовидной структуры.
// Можно выполнять одну из двух предложенных примеров задач.

// 1. Пример данных:
// {
// "name": 1,
// "items": [{
// "name": 2,
// "items": [{ "name": 3 }, { "name": 4 }]
// }, {
// "name": 5,
// "items": [{ "name": 6 }]
// }]
// }

// Пример запуска программы:
// npm start

// 1
// ├── 2
// │ └── 3
// │ └── 4
// ├── 5
// │ └── 6

printTree(originalJson)

function printTree(json, prefix = '') {
  const {name, items} = json;
  if(items && name !== 1) {
    console.log(prefix + '├── ' + name);
    items.forEach(element => {
      if(!element.items) console.log(prefix + '│ └── ' + element.name);
      printTree(element, prefix + '     ');
    });    
  } else if(items) {
    console.log(name.toString());
    items.forEach(element => {
      printTree(element);
    }); 
  }
};