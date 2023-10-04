const distanceConverter = require("./converter.js");
const readline = require("readline");

const readlines = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function converter() {
  const userInput = await askQuestion(
    "Введіть об'єкт у форматі JSON для конвертації (наприклад: {\"distance\": {\"unit\": \"m\", \"value\": 0.5}, \"convertTo\": \"ft\"}): "
  );

  let inputObject;
  try {
    inputObject = JSON.parse(userInput);
  } catch (error) {
    console.error("\n Некоректний формат JSON. Спробуйте ще раз.");
    process.exit(1);
  }

  const { distance, convertTo } = inputObject;
  const { unit, value } = distance;

  if (!unit || !value || !convertTo) {
    console.error("\n Некоректний формат JSON. Спробуйте ввести ще раз.");
    process.exit(1);
  }

  if (isNaN(value)) {
    console.error("\n Некоректне значення. Введіть інше числове значення.");
    process.exit(1);
  }

  let result;
  switch (convertTo) {
    case "m":
      result = distanceConverter.convertToM(value, unit);
      break;
    case "cm":
      result = distanceConverter.convertToCm(value, unit);
      break;
    case "in":
      result = distanceConverter.convertToIn(value, unit);
      break;
    case "ft":
      result = distanceConverter.convertToFt(value, unit);
      break;
    default:
      console.error("\n Непідтримувана одиниця виміру для конвертації.");
      process.exit(1);
  }

  const roundedResult = Math.round(result * 100) / 100;
  console.log(`\n Результат:`);
  console.log(`{"unit": "${convertTo}", "value": ${roundedResult}}`);

  readlines.close();
}

function askQuestion(question) {
  return new Promise((resolve) => {
    readlines.question(question, (answer) => {
      resolve(answer);
    });
  });
}

converter();
