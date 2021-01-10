
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

const json = {
    "name": {
      "myKey":"myValue",
      "myKey1":"myValue1"
    },
    "items": "array"
  }
  
  const json2 = {
    "name": {
      "myKey":"myValue",
      "myKey1":"myValue1"
    },
    "items": [{"name": "SS1"}]
  }
  
  check(json2)
  
  function check(json) {
    let keys = Object.keys(json);
    for(let i = 0; i < keys.length; i++) {
      let value = json[keys[i]]
      console.log(value);
      
    }
  }
  
  
  
  
  
  
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