function validateExpression() {
    const expressionType = document.getElementById("expression-select").value;
    const userInput = prompt("Enter your expression:");
    
    let regex;
    let errorMessage;
  
    switch (expressionType) {
      case "firstname":
        regex = /^[A-Za-z]+$/;
        errorMessage = "First name should only contain letters.";
        break;
      case "lastname":
        regex = /^[A-Za-z]+$/;
        errorMessage = "Last name should only contain letters.";
        break;
      case "email":
        regex = /^(?!\.)[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
        ;
        errorMessage = "Invalid email address.";
        break;
      case "phone":
        regex  =  /^(?:\+?88)?01[3-9]\d{8}$/
        ;
        errorMessage = "Phone number should be 11 digits long.";
        break;
      case "postcode":
        regex = /^\d{4}$/;
        errorMessage = "Invalid postal code.";
        break;
      case "gender":
        regex = /^(Male|Female)$/i;
        errorMessage = "Invalid gender.";
        break;
      default:
        regex = null;
        errorMessage = "Invalid expression type.";
        break;
    }
  
    const isValid = regex ? regex.test(userInput) : false;
    const resultElement = document.getElementById("result");
    resultElement.textContent = isValid ? "Valid" : "Invalid: " + errorMessage;
  }
  