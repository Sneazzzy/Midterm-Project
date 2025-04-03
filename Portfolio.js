function temperatureConverter() {
    let input = prompt("Enter temperature in Celsius:");
    
    if (input === null) {
        return;
    }

    let celsius = parseFloat(input);
    
    if (isNaN(celsius)) {
        alert("Invalid input. Please enter a number.");
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    alert(celsius + "°C is equal to " + fahrenheit + "°F");
}


function getLongerWord() {
  let word1 = prompt("Enter the first word: ");
  let word2 = prompt("Enter the second word: ");
  if (word1.length > word2.length) {
      alert("The longer word is: " + word1);
  } else if (word2.length > word1.length) {
      alert("The longer word is: " + word2);
  } else {
      alert("The words are the same length");
  }
}

function knowMyBirthstone() {
    let month = prompt("Enter your birth month (e.g., January, February):");
    let birthstone = getBirthstone(month); 
    if (birthstone) {
        alert("Your birthstone is: " + birthstone);
    } else {
        alert("Invalid month entered.");
    }
}

function knowMyBirthstone() {
    let month = prompt("Enter your birth month (e.g., January, Jan):");

    if (!month) {
        return;
    }

    month = month.toLowerCase().trim();

    switch (month) {
        case "jan": case "january":
            alert("Your birthstone is Garnet.");
            break;
        case "feb": case "february":
            alert("Your birthstone is Amethyst.");
            break;
        case "mar": case "march":
            alert("Your birthstone is Aquamarine.");
            break;
        case "apr": case "april":
            alert("Your birthstone is Diamond.");
            break;
        case "may":
            alert("Your birthstone is Emerald.");
            break;
        case "jun": case "june":
            alert("Your birthstone is Pearl.");
            break;
        case "jul": case "july":
            alert("Your birthstone is Ruby.");
            break;
        case "aug": case "august":
            alert("Your birthstone is Peridot.");
            break;
        case "sep": case "september":
            alert("Your birthstone is Sapphire.");
            break;
        case "oct": case "october":
            alert("Your birthstone is Opal.");
            break;
        case "nov": case "november":
            alert("Your birthstone is Topaz.");
            break;
        case "dec": case "december":
            alert("Your birthstone is Turquoise.");
            break;
        default:
            alert("Invalid month entered.");
    }
}

function basicOperators() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  let operator = prompt("Enter operator (+, -, *, /) or (a, s, m, d):").toLowerCase();

  if (isNaN(num1) || isNaN(num2)) {
      alert("Invalid input. Please enter numbers only.");
      return;
  }

  let result;
  switch (operator) {
      case '+':
      case 'a':
          result = num1 + num2;
          break;
      case '-':
      case 's':
          result = num1 - num2;
          break;
      case '*':
      case 'm':
          result = num1 * num2;
          break;
      case '/':
      case 'd':
          if (num2 === 0) {
              alert("Cannot divide by zero!");
              return;
          }
          result = num1 / num2;
          break;
      default:
          alert("Invalid operator. Use +, -, *, / or a, s, m, d.");
          return;
  }

  alert("Result: " + result);
}

function computeAcceleration() {
  let initial_velocity = parseFloat(prompt("Enter initial velocity (m/s): "));
  let final_velocity = parseFloat(prompt("Enter final velocity (m/s): "));
  let delta_time = parseFloat(prompt("Enter elapsed time (s): "));

  if (isNaN(initial_velocity) || isNaN(final_velocity) || isNaN(delta_time) || delta_time === 0) {
      alert("Invalid input. Please enter numbers, and time cannot be zero.");
      return;
  }

  let acceleration = (final_velocity - initial_velocity) / delta_time;
  alert("The acceleration is: " + acceleration + " m/s²");
}
