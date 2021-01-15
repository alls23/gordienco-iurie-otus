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
};

const jsonTest1 = {
  "name": "asd",
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
        },
        {
          "name": 7
        },
        {
          "name": 8
        }
      ]
    },
    {
      "name": 9
    },
    {
      "name": 10
    }
  ]
};

const jsonTest2 = {
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
        },
        {
          "name": 7
        },
        {
          "name": 8
        }
      ]
    },
    {
      "name": 9
    },
    {
      "name": 10
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

const testData = [originalJson, jsonTest1, jsonTest2];

const VERTICAL_RIGHT = '├── ';
const FIRST_CHILD = '└── ';
const CHILD = '│ └── ';

testData.forEach(element => {
  printTree(element);
  console.log('================================');
});

function printTree(json, whitesapce = '', lvl = 0) {
  const {name, items} = json;
  if(items && name && lvl > 0) {
    console.log(whitesapce + '├── ' + name);
    items.forEach(element => {
      if(!element.items) console.log(whitesapce + '│ └── ' + element.name);
      printTree(element, whitesapce + '     ', lvl+1);
    });    
  } else if(items) {
    console.log(name.toString());
    items.forEach(element => {
      printTree(element, whitesapce, lvl+1);
    }); 
   } else if (lvl <= 1) {
     console.log('└── ' + name.toString())
   }
};