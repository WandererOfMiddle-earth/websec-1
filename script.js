let previous_output = "";

function button(event) {
    let a = document.getElementById("input_1").value;
    let b = document.getElementById("input_2").value;
    let op = document.getElementById("operation").value;
    let c = null;
    let current_output = null;

    a = parseFloat(a);
    b = parseFloat(b);
    current_output = a + "" + op + "" + b + "" + "=";

    if (isNaN(a) || isNaN(b)) {
        current_output = "Invalid input!";
        c = "";
    }
    else
        switch (op) {
            case "+":
                c = a + b;
                break;
            case "-":
                c = a - b;
                break;
            case "*":
                c = a * b;
                break;
            case "/":
                if (b === 0) {
                    current_output = "Division by zero!";
                    c = "";
                }
                else
                    c = a / b;
                break;
        }

    current_output += c;
    document.getElementById("output").value = previous_output + "\n" + current_output;
    previous_output = current_output;
}