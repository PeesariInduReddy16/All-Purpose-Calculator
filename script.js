/* =========================================================
   ALL PURPOSE CALCULATOR
   SMART CALCULATION ENGINE
========================================================= */


/* =========================================================
   CALCULATOR DATA
========================================================= */

const calculators = [

    {
        id: "basic",
        name: "Basic Calculator",
        icon: "＋",
        category: "general",
        description: "Perform everyday arithmetic calculations."
    },

    {
        id: "scientific",
        name: "Scientific Calculator",
        icon: "∑",
        category: "math",
        description: "Solve advanced mathematical calculations."
    },

    {
        id: "financial",
        name: "Financial Calculator",
        icon: "₹",
        category: "finance",
        description: "Calculate simple interest and financial values."
    },

    {
        id: "bmi",
        name: "BMI Calculator",
        icon: "⚖",
        category: "health",
        description: "Calculate Body Mass Index from height and weight."
    },

    {
        id: "age",
        name: "Age Calculator",
        icon: "◷",
        category: "general",
        description: "Calculate your exact age from your birth date."
    },

    {
        id: "percentage",
        name: "Percentage Calculator",
        icon: "%",
        category: "math",
        description: "Calculate percentages quickly and accurately."
    },

    {
        id: "date",
        name: "Date Calculator",
        icon: "31",
        category: "general",
        description: "Find the difference between two dates."
    },

    {
        id: "unit",
        name: "Unit Converter",
        icon: "↔",
        category: "general",
        description: "Convert common length, weight and temperature units."
    },

    {
        id: "currency",
        name: "Currency Calculator",
        icon: "💱",
        category: "finance",
        description: "Convert currencies using an exchange rate."
    },

    {
        id: "gst",
        name: "GST Calculator",
        icon: "GST",
        category: "finance",
        description: "Calculate GST amount and final price."
    },

    {
        id: "tip",
        name: "Tip Calculator",
        icon: "★",
        category: "finance",
        description: "Calculate tips and split bills."
    },

    {
        id: "emi",
        name: "EMI Calculator",
        icon: "EMI",
        category: "finance",
        description: "Calculate monthly loan EMI and total payment."
    },

    {
        id: "programmer",
        name: "Programmer Calculator",
        icon: "</>",
        category: "technical",
        description: "Convert decimal values into binary, octal and hexadecimal."
    },

    {
        id: "graph",
        name: "Graphing Calculator",
        icon: "⌁",
        category: "math",
        description: "Visualize mathematical equations on a graph."
    },

    {
        id: "time",
        name: "Time Calculator",
        icon: "◴",
        category: "general",
        description: "Add hours, minutes and seconds."
    },

    {
        id: "discount",
        name: "Discount Calculator",
        icon: "↓",
        category: "finance",
        description: "Calculate discounts and final selling price."
    },

    {
        id: "tax",
        name: "Tax Calculator",
        icon: "TAX",
        category: "finance",
        description: "Estimate tax amount and final price."
    },

    {
        id: "fraction",
        name: "Fraction Calculator",
        icon: "½",
        category: "math",
        description: "Add, subtract, multiply and divide fractions."
    },

    {
        id: "area",
        name: "Area Calculator",
        icon: "▣",
        category: "math",
        description: "Calculate the area of common geometric shapes."
    },

    {
        id: "volume",
        name: "Volume Calculator",
        icon: "◇",
        category: "math",
        description: "Calculate volume of common 3D shapes."
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const grid =
    document.getElementById("calculatorGrid");

const searchInput =
    document.getElementById("searchInput");

const visibleCount =
    document.getElementById("visibleCount");

const workspaceSection =
    document.getElementById("workspace");

const dashboard =
    document.getElementById("dashboard");

const hero =
    document.querySelector(".hero");

const historySection =
    document.getElementById("history");

const workspaceTitle =
    document.getElementById("workspaceTitle");

const workspaceDescription =
    document.getElementById("workspaceDescription");

const workspaceCategory =
    document.getElementById("workspaceCategory");

const workspaceIcon =
    document.getElementById("workspaceIcon");

const calculatorContent =
    document.getElementById("calculatorContent");

const explanation =
    document.getElementById("explanation");


let activeCategory = "all";


/* =========================================================
   CREATE CALCULATOR CARDS
========================================================= */

function renderCalculators() {

    const search =
        searchInput.value.toLowerCase().trim();

    const filtered = calculators.filter(calc => {

        const categoryMatch =
            activeCategory === "all" ||
            calc.category === activeCategory;

        const searchMatch =
            calc.name.toLowerCase().includes(search) ||
            calc.description.toLowerCase().includes(search);

        return categoryMatch && searchMatch;

    });

    visibleCount.textContent = filtered.length;

    grid.innerHTML = filtered.map((calc, index) => `

        <article
            class="calc-card"
            onclick="openCalculator('${calc.id}')"
        >

            <span class="card-number">
                ${String(index + 1).padStart(2,"0")}
            </span>

            <div class="card-icon">
                ${calc.icon}
            </div>

            <h3>${calc.name}</h3>

            <p>${calc.description}</p>

            <div class="card-arrow">
                ↗
            </div>

        </article>

    `).join("");

}


/* =========================================================
   OPEN DASHBOARD
========================================================= */

function openDashboard() {

    hero.classList.remove("hidden");

    dashboard.classList.remove("hidden");

    historySection.classList.remove("hidden");

    workspaceSection.classList.remove("active");

    setTimeout(() => {

        dashboard.scrollIntoView({
            behavior: "smooth"
        });

    }, 50);

}


/* =========================================================
   OPEN CALCULATOR
========================================================= */

function openCalculator(id) {

    const calc =
        calculators.find(item => item.id === id);

    if (!calc) return;

    workspaceTitle.textContent =
        calc.name;

    workspaceDescription.textContent =
        calc.description;

    workspaceCategory.textContent =
        calc.category.toUpperCase();

    workspaceIcon.textContent =
        calc.icon;

    calculatorContent.innerHTML =
        getCalculatorHTML(id);

    dashboard.classList.add("hidden");

    hero.classList.add("hidden");

    historySection.classList.add("hidden");

    workspaceSection.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CALCULATOR HTML
========================================================= */

function getCalculatorHTML(type) {

    switch(type) {

        case "basic":
            return basicHTML();

        case "scientific":
            return scientificHTML();

        case "financial":
            return financialHTML();

        case "bmi":
            return bmiHTML();

        case "age":
            return ageHTML();

        case "percentage":
            return percentageHTML();

        case "date":
            return dateHTML();

        case "unit":
            return unitHTML();

        case "currency":
            return currencyHTML();

        case "gst":
            return gstHTML();

        case "tip":
            return tipHTML();

        case "emi":
            return emiHTML();

        case "programmer":
            return programmerHTML();

        case "graph":
            return graphHTML();

        case "time":
            return timeHTML();

        case "discount":
            return discountHTML();

        case "tax":
            return taxHTML();

        case "fraction":
            return fractionHTML();

        case "area":
            return areaHTML();

        case "volume":
            return volumeHTML();

        default:
            return "";

    }

}


/* =========================================================
   BASIC
========================================================= */

function basicHTML() {

    return `

        <div class="basic-calculator">

            <div class="basic-display">

                <div
                    class="basic-expression"
                    id="basicExpression"
                >
                </div>

                <div
                    class="basic-result"
                    id="basicResult"
                >
                    0
                </div>

            </div>

            <div class="basic-keys">

                <button onclick="basicClear()">AC</button>
                <button onclick="basicDelete()">⌫</button>
                <button onclick="basicPercent()">%</button>
                <button class="operator"
                    onclick="basicOperator('/')">
                    ÷
                </button>

                <button onclick="basicNumber('7')">7</button>
                <button onclick="basicNumber('8')">8</button>
                <button onclick="basicNumber('9')">9</button>
                <button class="operator"
                    onclick="basicOperator('*')">
                    ×
                </button>

                <button onclick="basicNumber('4')">4</button>
                <button onclick="basicNumber('5')">5</button>
                <button onclick="basicNumber('6')">6</button>
                <button class="operator"
                    onclick="basicOperator('-')">
                    −
                </button>

                <button onclick="basicNumber('1')">1</button>
                <button onclick="basicNumber('2')">2</button>
                <button onclick="basicNumber('3')">3</button>
                <button class="operator"
                    onclick="basicOperator('+')">
                    +
                </button>

                <button onclick="basicNumber('0')">0</button>
                <button onclick="basicNumber('.')">.</button>
                <button onclick="basicPercent()">%</button>
                <button class="equal"
                    onclick="basicCalculate()">
                    =
                </button>

            </div>

        </div>
    `;

}

let basicExpression = "";
let basicCurrent = "0";
let basicOperatorValue = "";
let basicPrevious = "";


function updateBasic() {

    document.getElementById("basicResult").textContent =
        basicCurrent;

    document.getElementById("basicExpression").textContent =
        basicExpression;
}


function basicNumber(number) {

    if (number === "." && basicCurrent.includes(".")) {
        return;
    }

    if (basicCurrent === "0" && number !== ".") {
        basicCurrent = number;
    } else {
        basicCurrent += number;
    }

    updateBasic();
}


function basicOperator(operator) {

    basicPrevious = basicCurrent;

    basicOperatorValue = operator;

    basicExpression =
        `${basicCurrent} ${operator}`;

    basicCurrent = "0";

    updateBasic();
}


function basicCalculate() {

    const a = Number(basicPrevious);
    const b = Number(basicCurrent);

    let result;

    switch(basicOperatorValue) {

        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result =
                b === 0 ? "Undefined" : a / b;
            break;

        default:
            return;

    }

    const expression =
        `${a} ${basicOperatorValue} ${b}`;

    basicExpression =
        `${expression} =`;

    basicCurrent =
        String(roundNumber(result));

    updateBasic();

    showExplanation({

        title: "Basic Arithmetic",

        summary:
            `The calculation ${expression} was evaluated using the selected arithmetic operator.`,

        formula:
            `${a} ${basicOperatorValue} ${b} = ${result}`,

        steps: [
            `First value: ${a}`,
            `Second value: ${b}`,
            `Operator used: ${basicOperatorValue}`,
            `Final result: ${result}`
        ],

        meaning:
            `The final answer is ${result}.`

    });

    saveHistory(
        "Basic Calculator",
        expression,
        result,
        "+"
    );

}


function basicClear() {

    basicCurrent = "0";
    basicPrevious = "";
    basicOperatorValue = "";
    basicExpression = "";

    updateBasic();
}


function basicDelete() {

    basicCurrent =
        basicCurrent.length > 1
            ? basicCurrent.slice(0,-1)
            : "0";

    updateBasic();
}


function basicPercent() {

    basicCurrent =
        String(Number(basicCurrent) / 100);

    updateBasic();
}


/* =========================================================
   SCIENTIFIC
========================================================= */

function scientificHTML() {

    return formHTML([

        ["scientificNumber","Number","number",""],

        ["scientificOperation","Operation","select",
            `
            <option value="sqrt">Square Root</option>
            <option value="square">Square</option>
            <option value="sin">Sine</option>
            <option value="cos">Cosine</option>
            <option value="tan">Tangent</option>
            <option value="log">Logarithm</option>
            `
        ]

    ], "Calculate", "scientificCalculate");

}


function scientificCalculate() {

    const number =
        Number(document.getElementById("scientificNumber").value);

    const operation =
        document.getElementById("scientificOperation").value;

    let result;
    let formula;
    let explanationText;

    switch(operation) {

        case "sqrt":
            result = Math.sqrt(number);
            formula = `√${number} = ${result}`;
            explanationText =
                "The square root is the number that produces the original value when multiplied by itself.";
            break;

        case "square":
            result = number ** 2;
            formula = `${number}² = ${result}`;
            explanationText =
                "Squaring means multiplying the number by itself.";
            break;

        case "sin":
            result = Math.sin(number * Math.PI / 180);
            formula = `sin(${number}°) = ${result}`;
            explanationText =
                "The angle was converted from degrees to radians before applying the sine function.";
            break;

        case "cos":
            result = Math.cos(number * Math.PI / 180);
            formula = `cos(${number}°) = ${result}`;
            explanationText =
                "The cosine of the supplied angle was calculated.";
            break;

        case "tan":
            result = Math.tan(number * Math.PI / 180);
            formula = `tan(${number}°) = ${result}`;
            explanationText =
                "The tangent of the supplied angle was calculated.";
            break;

        case "log":
            result = Math.log10(number);
            formula = `log₁₀(${number}) = ${result}`;
            explanationText =
                "The base-10 logarithm determines the power to which 10 must be raised to obtain the input.";
            break;

    }

    result = roundNumber(result);

    showResult(result);

    showExplanation({

        title: "Scientific Calculation",

        summary: explanationText,

        formula,

        steps: [
            `Input value = ${number}`,
            `Selected operation = ${operation}`,
            `Mathematical operation was applied`,
            `Result = ${result}`
        ],

        meaning:
            `The calculated scientific value is ${result}.`

    });

    saveHistory(
        "Scientific Calculator",
        `${operation}(${number})`,
        result,
        "∑"
    );

}


/* =========================================================
   FINANCIAL
========================================================= */

function financialHTML() {

    return formHTML([

        ["financePrincipal","Principal Amount","number",""],
        ["financeRate","Annual Interest Rate (%)","number",""],
        ["financeYears","Time (Years)","number",""]

    ], "Calculate Interest", "financialCalculate");

}


function financialCalculate() {

    const P =
        Number(document.getElementById("financePrincipal").value);

    const R =
        Number(document.getElementById("financeRate").value);

    const T =
        Number(document.getElementById("financeYears").value);

    const interest =
        P * R * T / 100;

    const total =
        P + interest;

    const result =
        `₹${formatNumber(total)}`;

    showResult(result);

    showExplanation({

        title: "Simple Interest Calculation",

        summary:
            "Simple interest is calculated based on the original principal, annual interest rate and time period.",

        formula:
            "Simple Interest = (P × R × T) / 100",

        steps: [
            `Principal (P) = ₹${formatNumber(P)}`,
            `Rate (R) = ${R}%`,
            `Time (T) = ${T} years`,
            `Interest = ₹${formatNumber(interest)}`,
            `Total Amount = ₹${formatNumber(total)}`
        ],

        meaning:
            `The investment grows by ₹${formatNumber(interest)} in interest, giving a total amount of ₹${formatNumber(total)}.`

    });

    saveHistory(
        "Financial Calculator",
        `₹${P} at ${R}% for ${T} years`,
        result,
        "₹"
    );

}


/* =========================================================
   BMI
========================================================= */

function bmiHTML() {

    return formHTML([

        ["weight","Weight (kg)","number",""],
        ["height","Height (cm)","number",""]

    ], "Calculate BMI", "bmiCalculate");

}


function bmiCalculate() {

    const weight =
        Number(document.getElementById("weight").value);

    const heightCm =
        Number(document.getElementById("height").value);

    const height =
        heightCm / 100;

    const bmi =
        weight / (height * height);

    const result =
        bmi.toFixed(2);

    let category;

    if (bmi < 18.5)
        category = "Below the standard BMI range";

    else if (bmi < 25)
        category = "Within the standard BMI range";

    else if (bmi < 30)
        category = "Above the standard BMI range";

    else
        category = "High BMI range";

    showResult(`${result} — ${category}`);

    showExplanation({

        title: "BMI Calculation",

        summary:
            "BMI is calculated by dividing body weight in kilograms by height in metres squared.",

        formula:
            "BMI = Weight (kg) ÷ Height² (m)",

        steps: [
            `Weight = ${weight} kg`,
            `Height = ${heightCm} cm = ${height.toFixed(2)} m`,
            `Height² = ${(height * height).toFixed(4)}`,
            `BMI = ${weight} ÷ ${(height * height).toFixed(4)}`,
            `BMI = ${result}`
        ],

        meaning:
            `The calculated BMI is ${result}. ${category}.`

    });

    saveHistory(
        "BMI Calculator",
        `${weight} kg / ${heightCm} cm`,
        result,
        "⚖"
    );

}


/* =========================================================
   AGE
========================================================= */

function ageHTML() {

    return formHTML([

        ["birthDate","Date of Birth","date",""]

    ], "Calculate Age", "ageCalculate");

}


function ageCalculate() {

    const birth =
        new Date(
            document.getElementById("birthDate").value
        );

    const today =
        new Date();

    let years =
        today.getFullYear() -
        birth.getFullYear();

    let months =
        today.getMonth() -
        birth.getMonth();

    let days =
        today.getDate() -
        birth.getDate();

    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();

        days += previousMonth;

    }

    if (months < 0) {

        years--;

        months += 12;

    }

    const result =
        `${years} years, ${months} months, ${days} days`;

    showResult(result);

    showExplanation({

        title: "Age Calculation",

        summary:
            "Age is determined by comparing the date of birth with today's date and accounting for completed years, months and days.",

        formula:
            "Age = Current Date − Date of Birth",

        steps: [
            `Birth date = ${birth.toLocaleDateString()}`,
            `Current date = ${today.toLocaleDateString()}`,
            `Completed years = ${years}`,
            `Remaining months = ${months}`,
            `Remaining days = ${days}`
        ],

        meaning:
            `Your calculated age is ${result}.`

    });

    saveHistory(
        "Age Calculator",
        birth.toLocaleDateString(),
        result,
        "◷"
    );

}


/* =========================================================
   PERCENTAGE
========================================================= */

function percentageHTML() {

    return formHTML([

        ["percentValue","Value","number",""],
        ["percentTotal","Total","number",""]

    ], "Calculate Percentage", "percentageCalculate");

}


function percentageCalculate() {

    const value =
        Number(document.getElementById("percentValue").value);

    const total =
        Number(document.getElementById("percentTotal").value);

    const result =
        (value / total) * 100;

    showResult(`${roundNumber(result)}%`);

    showExplanation({

        title: "Percentage Calculation",

        summary:
            "The percentage represents how much the given value contributes to the total value.",

        formula:
            "Percentage = (Value ÷ Total) × 100",

        steps: [
            `Value = ${value}`,
            `Total = ${total}`,
            `${value} ÷ ${total} = ${(value / total).toFixed(4)}`,
            `× 100 = ${roundNumber(result)}%`
        ],

        meaning:
            `${value} represents ${roundNumber(result)}% of ${total}.`

    });

    saveHistory(
        "Percentage Calculator",
        `${value} / ${total}`,
        `${roundNumber(result)}%`,
        "%"
    );

}


/* =========================================================
   DATE
========================================================= */

function dateHTML() {

    return formHTML([

        ["dateStart","Start Date","date",""],
        ["dateEnd","End Date","date",""]

    ], "Find Difference", "dateCalculate");

}


function dateCalculate() {

    const start =
        new Date(document.getElementById("dateStart").value);

    const end =
        new Date(document.getElementById("dateEnd").value);

    const milliseconds =
        Math.abs(end - start);

    const days =
        Math.floor(
            milliseconds / (1000 * 60 * 60 * 24)
        );

    showResult(`${days} days`);

    showExplanation({

        title: "Date Difference",

        summary:
            "The difference between the selected dates is calculated in complete days.",

        formula:
            "Days = |End Date − Start Date|",

        steps: [
            `Start date = ${start.toLocaleDateString()}`,
            `End date = ${end.toLocaleDateString()}`,
            `Difference = ${days} days`
        ],

        meaning:
            `There are ${days} days between the selected dates.`

    });

    saveHistory(
        "Date Calculator",
        `${start.toLocaleDateString()} → ${end.toLocaleDateString()}`,
        `${days} days`,
        "31"
    );

}


/* =========================================================
   UNIT
========================================================= */

function unitHTML() {

    return formHTML([

        ["unitValue","Value","number",""],

        ["unitType","Conversion","select",
            `
            <option value="km-mile">Kilometres → Miles</option>
            <option value="mile-km">Miles → Kilometres</option>
            <option value="kg-lb">Kilograms → Pounds</option>
            <option value="lb-kg">Pounds → Kilograms</option>
            <option value="c-f">Celsius → Fahrenheit</option>
            <option value="f-c">Fahrenheit → Celsius</option>
            `
        ]

    ], "Convert", "unitCalculate");

}


function unitCalculate() {

    const value =
        Number(document.getElementById("unitValue").value);

    const type =
        document.getElementById("unitType").value;

    let result;
    let formula;

    switch(type) {

        case "km-mile":
            result = value * 0.621371;
            formula = `${value} km × 0.621371`;
            break;

        case "mile-km":
            result = value * 1.60934;
            formula = `${value} miles × 1.60934`;
            break;

        case "kg-lb":
            result = value * 2.20462;
            formula = `${value} kg × 2.20462`;
            break;

        case "lb-kg":
            result = value / 2.20462;
            formula = `${value} lb ÷ 2.20462`;
            break;

        case "c-f":
            result = value * 9/5 + 32;
            formula = `(${value} × 9/5) + 32`;
            break;

        case "f-c":
            result = (value - 32) * 5/9;
            formula = `(${value} − 32) × 5/9`;
            break;

    }

    result = roundNumber(result);

    showResult(result);

    showExplanation({

        title: "Unit Conversion",

        summary:
            "The input value was multiplied or transformed using the standard conversion factor for the selected units.",

        formula,

        steps: [
            `Input value = ${value}`,
            `Conversion type = ${type}`,
            `Conversion formula applied`,
            `Converted value = ${result}`
        ],

        meaning:
            `The converted value is ${result}.`

    });

    saveHistory(
        "Unit Converter",
        `${value} (${type})`,
        result,
        "↔"
    );

}


/* =========================================================
   CURRENCY
========================================================= */

function currencyHTML() {

    return formHTML([

        ["currencyAmount","Amount","number",""],

        ["exchangeRate","Exchange Rate","number",""],

    ], "Convert Currency", "currencyCalculate");

}


function currencyCalculate() {

    const amount =
        Number(document.getElementById("currencyAmount").value);

    const rate =
        Number(document.getElementById("exchangeRate").value);

    const result =
        amount * rate;

    showResult(result.toFixed(2));

    showExplanation({

        title: "Currency Conversion",

        summary:
            "Currency conversion uses the exchange rate entered by the user.",

        formula:
            "Converted Amount = Original Amount × Exchange Rate",

        steps: [
            `Original amount = ${amount}`,
            `Exchange rate = ${rate}`,
            `${amount} × ${rate} = ${result.toFixed(2)}`
        ],

        meaning:
            `Using the supplied exchange rate, the converted amount is ${result.toFixed(2)}.`

    });

    saveHistory(
        "Currency Calculator",
        `${amount} × ${rate}`,
        result.toFixed(2),
        "💱"
    );

}


/* =========================================================
   GST
========================================================= */

function gstHTML() {

    return formHTML([

        ["gstPrice","Original Price","number",""],
        ["gstRate","GST Rate (%)","number",""]

    ], "Calculate GST", "gstCalculate");

}


function gstCalculate() {

    const price =
        Number(document.getElementById("gstPrice").value);

    const rate =
        Number(document.getElementById("gstRate").value);

    const gst =
        price * rate / 100;

    const total =
        price + gst;

    showResult(`₹${formatNumber(total)}`);

    showExplanation({

        title: "GST Calculation",

        summary:
            "GST is calculated by applying the selected GST percentage to the original price.",

        formula:
            "GST = Original Price × GST Rate ÷ 100",

        steps: [
            `Original price = ₹${formatNumber(price)}`,
            `GST rate = ${rate}%`,
            `GST amount = ₹${formatNumber(gst)}`,
            `Final price = ₹${formatNumber(total)}`
        ],

        meaning:
            `The GST amount is ₹${formatNumber(gst)}, making the final price ₹${formatNumber(total)}.`

    });

    saveHistory(
        "GST Calculator",
        `₹${price} + ${rate}% GST`,
        `₹${formatNumber(total)}`,
        "GST"
    );

}


/* =========================================================
   TIP
========================================================= */

function tipHTML() {

    return formHTML([

        ["tipBill","Bill Amount","number",""],
        ["tipRate","Tip Percentage (%)","number",""],
        ["tipPeople","Number of People","number",""]

    ], "Calculate Tip", "tipCalculate");

}


function tipCalculate() {

    const bill =
        Number(document.getElementById("tipBill").value);

    const rate =
        Number(document.getElementById("tipRate").value);

    const people =
        Number(document.getElementById("tipPeople").value);

    const tip =
        bill * rate / 100;

    const total =
        bill + tip;

    const perPerson =
        total / people;

    showResult(`₹${formatNumber(perPerson)} / person`);

    showExplanation({

        title: "Tip & Bill Split",

        summary:
            "The tip is calculated from the bill amount and then the total bill is divided equally among the specified number of people.",

        formula:
            "Tip = Bill × Tip Rate ÷ 100",

        steps: [
            `Bill = ₹${formatNumber(bill)}`,
            `Tip = ₹${formatNumber(tip)}`,
            `Total = ₹${formatNumber(total)}`,
            `People = ${people}`,
            `Per person = ₹${formatNumber(perPerson)}`
        ],

        meaning:
            `Each person should pay approximately ₹${formatNumber(perPerson)}.`

    });

    saveHistory(
        "Tip Calculator",
        `₹${bill}, ${rate}% tip, ${people} people`,
        `₹${formatNumber(perPerson)}`,
        "★"
    );

}


/* =========================================================
   EMI
========================================================= */

function emiHTML() {

    return formHTML([

        ["emiPrincipal","Loan Amount (₹)","number",""],
        ["emiRate","Annual Interest Rate (%)","number",""],
        ["emiYears","Loan Duration (Years)","number",""]

    ], "Calculate EMI", "emiCalculate");

}


function emiCalculate() {

    const P =
        Number(document.getElementById("emiPrincipal").value);

    const annualRate =
        Number(document.getElementById("emiRate").value);

    const years =
        Number(document.getElementById("emiYears").value);

    const r =
        annualRate / 12 / 100;

    const n =
        years * 12;

    const EMI =
        P * r * Math.pow(1+r,n) /
        (Math.pow(1+r,n)-1);

    const total =
        EMI * n;

    const interest =
        total - P;

    showResult(`₹${formatNumber(EMI)} / month`);

    showExplanation({

        title: "EMI Calculation",

        summary:
            "EMI is the fixed monthly payment required to repay a loan over the selected duration.",

        formula:
            "EMI = P × r × (1+r)ⁿ ÷ ((1+r)ⁿ − 1)",

        steps: [
            `Principal (P) = ₹${formatNumber(P)}`,
            `Monthly interest rate (r) = ${annualRate}% ÷ 12 ÷ 100 = ${r.toFixed(6)}`,
            `Number of monthly payments (n) = ${years} × 12 = ${n}`,
            `Monthly EMI = ₹${formatNumber(EMI)}`,
            `Total payment = ₹${formatNumber(total)}`,
            `Total interest = ₹${formatNumber(interest)}`
        ],

        meaning:
            `You would pay approximately ₹${formatNumber(EMI)} every month. The total interest over the loan period would be approximately ₹${formatNumber(interest)}.`

    });

    saveHistory(
        "EMI Calculator",
        `₹${P} / ${annualRate}% / ${years} years`,
        `₹${formatNumber(EMI)}`,
        "EMI"
    );

}


/* =========================================================
   PROGRAMMER
========================================================= */

function programmerHTML() {

    return formHTML([

        ["programmerNumber","Decimal Number","number",""]

    ], "Convert Number", "programmerCalculate");

}


function programmerCalculate() {

    const number =
        Number(document.getElementById("programmerNumber").value);

    const binary =
        number.toString(2);

    const octal =
        number.toString(8);

    const hex =
        number.toString(16).toUpperCase();

    showResult(`BIN: ${binary}`);

    showExplanation({

        title: "Programmer Number Conversion",

        summary:
            "The decimal number is converted into binary, octal and hexadecimal representations.",

        formula:
            "Decimal → Base 2 / Base 8 / Base 16",

        steps: [
            `Decimal = ${number}`,
            `Binary = ${binary}`,
            `Octal = ${octal}`,
            `Hexadecimal = ${hex}`
        ],

        meaning:
            `The same numeric value can be represented using different number systems.`

    });

    saveHistory(
        "Programmer Calculator",
        `${number} decimal`,
        `BIN ${binary}`,
        "</>"
    );

}


/* =========================================================
   GRAPH
========================================================= */

function graphHTML() {

    return `

        <div class="form-grid">

            <div class="input-group full">

                <label>
                    Equation using x
                </label>

                <input
                    id="graphEquation"
                    value="x*x"
                    placeholder="Example: x*x + 2*x + 1"
                >

            </div>

        </div>

        <button
            class="calculate-btn"
            onclick="graphCalculate()"
        >
            Plot Graph
        </button>

        <div class="result-box">

            <canvas
                id="graphCanvas"
                width="700"
                height="350"
                style="width:100%;height:auto"
            ></canvas>

        </div>

    `;

}


function graphCalculate() {

    const equation =
        document.getElementById("graphEquation").value
        .trim();

    const canvas =
        document.getElementById("graphCanvas");

    const ctx =
        canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    const w = canvas.width;
    const h = canvas.height;

    /* grid */

    ctx.strokeStyle = "rgba(150,150,180,.15)";
    ctx.lineWidth = 1;

    for(let x=0;x<w;x+=35) {

        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,h);
        ctx.stroke();

    }

    for(let y=0;y<h;y+=35) {

        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(w,y);
        ctx.stroke();

    }

    /* axes */

    ctx.strokeStyle = "#7c5cff";
    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(w/2,0);
    ctx.lineTo(w/2,h);

    ctx.moveTo(0,h/2);
    ctx.lineTo(w,h/2);

    ctx.stroke();

    /* graph */

    ctx.beginPath();

    ctx.strokeStyle = "#00d9ff";
    ctx.lineWidth = 3;

    let first = true;

    for(let px=0;px<w;px++) {

        const x =
            (px - w/2) / 35;

        let y;

        try {

            y = safeGraphFunction(
                equation,
                x
            );

        } catch {

            continue;

        }

        const py =
            h/2 - y*35;

        if(
            !Number.isFinite(py) ||
            py < -1000 ||
            py > h+1000
        ) {
            first = true;
            continue;
        }

        if(first) {

            ctx.moveTo(px,py);

            first = false;

        } else {

            ctx.lineTo(px,py);

        }

    }

    ctx.stroke();

    showExplanation({

        title: "Graphing Calculator",

        summary:
            `The equation y = ${equation} was plotted on a coordinate grid.`,

        formula:
            `y = ${equation}`,

        steps: [
            `The x-axis represents input values.`,
            `The equation was evaluated for multiple x values.`,
            `Each calculated y value was mapped onto the graph.`,
            `The resulting points were connected to visualize the function.`
        ],

        meaning:
            "The graph provides a visual representation of how the output changes as x changes."

    });

    saveHistory(
        "Graphing Calculator",
        `y = ${equation}`,
        "Graph plotted",
        "⌁"
    );

}


/*
  Restrict graph expressions to a small mathematical grammar.
  This avoids evaluating arbitrary JavaScript.
*/

function safeGraphFunction(expression, x) {

    let exp =
        expression
        .replace(/\s+/g,"")
        .replace(/\^/g,"**")
        .replace(/x/g,`(${x})`);

    if(
        !/^[0-9+\-*/().x*]+$/.test(
            expression
                .replace(/\s+/g,"")
                .replace(/\^/g,"")
        )
    ) {

        throw new Error("Invalid equation");

    }

    return Function(
        `"use strict"; return (${exp})`
    )();

}


/* =========================================================
   TIME
========================================================= */

function timeHTML() {

    return formHTML([

        ["hours","Hours","number",""],
        ["minutes","Minutes","number",""],
        ["seconds","Seconds","number",""]

    ], "Calculate Time", "timeCalculate");

}


function timeCalculate() {

    const hours =
        Number(document.getElementById("hours").value);

    const minutes =
        Number(document.getElementById("minutes").value);

    const seconds =
        Number(document.getElementById("seconds").value);

    const totalSeconds =
        hours*3600 +
        minutes*60 +
        seconds;

    const resultHours =
        Math.floor(totalSeconds/3600);

    const resultMinutes =
        Math.floor(
            (totalSeconds % 3600)/60
        );

    const resultSeconds =
        totalSeconds % 60;

    const result =
        `${resultHours}h ${resultMinutes}m ${resultSeconds}s`;

    showResult(result);

    showExplanation({

        title: "Time Calculation",

        summary:
            "All supplied time units were converted into seconds, added together and converted back into hours, minutes and seconds.",

        formula:
            "Total Seconds = Hours×3600 + Minutes×60 + Seconds",

        steps: [
            `Hours = ${hours}`,
            `Minutes = ${minutes}`,
            `Seconds = ${seconds}`,
            `Total seconds = ${totalSeconds}`,
            `Final time = ${result}`
        ],

        meaning:
            `The combined duration is ${result}.`

    });

    saveHistory(
        "Time Calculator",
        `${hours}h ${minutes}m ${seconds}s`,
        result,
        "◴"
    );

}


/* =========================================================
   DISCOUNT
========================================================= */

function discountHTML() {

    return formHTML([

        ["discountPrice","Original Price","number",""],
        ["discountRate","Discount (%)","number",""]

    ], "Calculate Discount", "discountCalculate");

}


function discountCalculate() {

    const price =
        Number(document.getElementById("discountPrice").value);

    const rate =
        Number(document.getElementById("discountRate").value);

    const discount =
        price * rate / 100;

    const finalPrice =
        price - discount;

    showResult(`₹${formatNumber(finalPrice)}`);

    showExplanation({

        title: "Discount Calculation",

        summary:
            "The discount amount is calculated as a percentage of the original price and then subtracted from the original price.",

        formula:
            "Discount = Price × Discount% ÷ 100",

        steps: [
            `Original price = ₹${formatNumber(price)}`,
            `Discount rate = ${rate}%`,
            `Discount amount = ₹${formatNumber(discount)}`,
            `Final price = ₹${formatNumber(finalPrice)}`
        ],

        meaning:
            `You save ₹${formatNumber(discount)} and pay ₹${formatNumber(finalPrice)}.`

    });

    saveHistory(
        "Discount Calculator",
        `₹${price} − ${rate}%`,
        `₹${formatNumber(finalPrice)}`,
        "↓"
    );

}


/* =========================================================
   TAX
========================================================= */

function taxHTML() {

    return formHTML([

        ["taxIncome","Amount / Income","number",""],
        ["taxRate","Tax Rate (%)","number",""]

    ], "Calculate Tax", "taxCalculate");

}


function taxCalculate() {

    const income =
        Number(document.getElementById("taxIncome").value);

    const rate =
        Number(document.getElementById("taxRate").value);

    const tax =
        income * rate / 100;

    const afterTax =
        income - tax;

    showResult(`₹${formatNumber(afterTax)}`);

    showExplanation({

        title: "Tax Calculation",

        summary:
            "The estimated tax is calculated by applying the supplied tax percentage to the amount.",

        formula:
            "Tax = Amount × Tax Rate ÷ 100",

        steps: [
            `Amount = ₹${formatNumber(income)}`,
            `Tax rate = ${rate}%`,
            `Estimated tax = ₹${formatNumber(tax)}`,
            `Amount after tax = ₹${formatNumber(afterTax)}`
        ],

        meaning:
            `At the supplied rate, the estimated tax is ₹${formatNumber(tax)}.`

    });

    saveHistory(
        "Tax Calculator",
        `₹${income} at ${rate}%`,
        `₹${formatNumber(afterTax)}`,
        "TAX"
    );

}


/* =========================================================
   FRACTION
========================================================= */

function fractionHTML() {

    return formHTML([

        ["fractionA","First Numerator","number",""],
        ["fractionB","First Denominator","number",""],
        ["fractionC","Second Numerator","number",""],
        ["fractionD","Second Denominator","number",""],

        ["fractionOperation","Operation","select",
            `
            <option value="+">Addition</option>
            <option value="-">Subtraction</option>
            <option value="*">Multiplication</option>
            <option value="/">Division</option>
            `
        ]

    ], "Calculate Fraction", "fractionCalculate");

}


function gcd(a,b) {

    a = Math.abs(a);
    b = Math.abs(b);

    while(b) {

        const temp = b;

        b = a % b;

        a = temp;

    }

    return a;
}


function simplifyFraction(num,den) {

    const divisor =
        gcd(num,den);

    return `${num/divisor}/${den/divisor}`;

}


function fractionCalculate() {

    const a =
        Number(document.getElementById("fractionA").value);

    const b =
        Number(document.getElementById("fractionB").value);

    const c =
        Number(document.getElementById("fractionC").value);

    const d =
        Number(document.getElementById("fractionD").value);

    const op =
        document.getElementById("fractionOperation").value;

    let num;
    let den;

    if(op === "+") {

        num = a*d + c*b;
        den = b*d;

    }

    else if(op === "-") {

        num = a*d - c*b;
        den = b*d;

    }

    else if(op === "*") {

        num = a*c;
        den = b*d;

    }

    else {

        num = a*d;
        den = b*c;

    }

    const result =
        simplifyFraction(num,den);

    showResult(result);

    showExplanation({

        title: "Fraction Calculation",

        summary:
            "Fractions are combined using a common denominator for addition/subtraction or direct numerator-denominator multiplication/division.",

        formula:
            `${a}/${b} ${op} ${c}/${d}`,

        steps: [
            `First fraction = ${a}/${b}`,
            `Second fraction = ${c}/${d}`,
            `Operation = ${op}`,
            `Unreduced result = ${num}/${den}`,
            `Simplified result = ${result}`
        ],

        meaning:
            `The final simplified fraction is ${result}.`

    });

    saveHistory(
        "Fraction Calculator",
        `${a}/${b} ${op} ${c}/${d}`,
        result,
        "½"
    );

}


/* =========================================================
   AREA
========================================================= */

function areaHTML() {

    return formHTML([

        ["areaShape","Shape","select",
            `
            <option value="rectangle">Rectangle</option>
            <option value="square">Square</option>
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
            `
        ],

        ["areaA","Length / Radius","number",""],
        ["areaB","Width / Height","number",""]

    ], "Calculate Area", "areaCalculate");

}


function areaCalculate() {

    const shape =
        document.getElementById("areaShape").value;

    const a =
        Number(document.getElementById("areaA").value);

    const b =
        Number(document.getElementById("areaB").value);

    let result;
    let formula;

    if(shape === "rectangle") {

        result = a*b;

        formula =
            "Area = Length × Width";

    }

    else if(shape === "square") {

        result = a*a;

        formula =
            "Area = Side²";

    }

    else if(shape === "circle") {

        result = Math.PI*a*a;

        formula =
            "Area = πr²";

    }

    else {

        result = .5*a*b;

        formula =
            "Area = ½ × Base × Height";

    }

    result =
        roundNumber(result);

    showResult(`${result} square units`);

    showExplanation({

        title: "Area Calculation",

        summary:
            `The area of the selected ${shape} was calculated using its standard geometric formula.`,

        formula,

        steps: [
            `Shape = ${shape}`,
            `First dimension = ${a}`,
            `Second dimension = ${b}`,
            `Calculated area = ${result} square units`
        ],

        meaning:
            `The area of the ${shape} is ${result} square units.`

    });

    saveHistory(
        "Area Calculator",
        `${shape}: ${a}, ${b}`,
        result,
        "▣"
    );

}


/* =========================================================
   VOLUME
========================================================= */

function volumeHTML() {

    return formHTML([

        ["volumeShape","Shape","select",
            `
            <option value="cube">Cube</option>
            <option value="cuboid">Cuboid</option>
            <option value="cylinder">Cylinder</option>
            <option value="sphere">Sphere</option>
            `
        ],

        ["volumeA","Length / Radius","number",""],
        ["volumeB","Width / Height","number",""],
        ["volumeC","Height","number",""]

    ], "Calculate Volume", "volumeCalculate");

}


function volumeCalculate() {

    const shape =
        document.getElementById("volumeShape").value;

    const a =
        Number(document.getElementById("volumeA").value);

    const b =
        Number(document.getElementById("volumeB").value);

    const c =
        Number(document.getElementById("volumeC").value);

    let result;
    let formula;

    if(shape === "cube") {

        result = a**3;

        formula =
            "Volume = Side³";

    }

    else if(shape === "cuboid") {

        result = a*b*c;

        formula =
            "Volume = Length × Width × Height";

    }

    else if(shape === "cylinder") {

        result =
            Math.PI*a*a*b;

        formula =
            "Volume = πr²h";

    }

    else {

        result =
            (4/3)*Math.PI*a**3;

        formula =
            "Volume = 4/3 × πr³";

    }

    result =
        roundNumber(result);

    showResult(`${result} cubic units`);

    showExplanation({

        title: "Volume Calculation",

        summary:
            `The volume of the selected ${shape} was calculated using its standard geometric formula.`,

        formula,

        steps: [
            `Shape = ${shape}`,
            `Input dimensions = ${a}, ${b}, ${c}`,
            `Formula applied = ${formula}`,
            `Volume = ${result} cubic units`
        ],

        meaning:
            `The volume of the ${shape} is ${result} cubic units.`

    });

    saveHistory(
        "Volume Calculator",
        `${shape}: ${a}, ${b}, ${c}`,
        result,
        "◇"
    );

}


/* =========================================================
   GENERIC FORM
========================================================= */

function formHTML(fields, buttonText, functionName) {

    return `

        <div class="form-grid">

            ${fields.map(field => {

                const [
                    id,
                    label,
                    type,
                    options
                ] = field;

                if(type === "select") {

                    return `

                        <div class="input-group">

                            <label>${label}</label>

                            <select id="${id}">
                                ${options}
                            </select>

                        </div>

                    `;

                }

                return `

                    <div class="input-group">

                        <label>${label}</label>

                        <input
                            id="${id}"
                            type="${type}"
                            placeholder="Enter ${label.toLowerCase()}"
                        >

                    </div>

                `;

            }).join("")}

        </div>

        <button
            class="calculate-btn"
            onclick="${functionName}()"
        >
            ${buttonText}
        </button>

        <div id="dynamicResult"></div>

    `;

}


/* =========================================================
   SHOW RESULT
========================================================= */

function showResult(result) {

    const box =
        document.getElementById("dynamicResult");

    if(!box) return;

    box.innerHTML = `

        <div class="result-box">

            <span class="result-label">
                CALCULATION RESULT
            </span>

            <strong class="result-value">
                ${result}
            </strong>

        </div>

    `;

}


/* =========================================================
   SMART EXPLANATION
========================================================= */

function showExplanation(data) {

    explanation.innerHTML = `

        <div class="explanation-card">

            <div class="explanation-section">

                <h4>✦ What happened?</h4>

                <p>
                    ${data.summary}
                </p>

            </div>


            <div class="explanation-section">

                <h4>Formula</h4>

                <div class="formula">
                    ${data.formula}
                </div>

            </div>


            <div class="explanation-section">

                <h4>Step-by-Step Calculation</h4>

                ${data.steps.map(
                    (step,index) => `

                    <div class="step">

                        <span class="step-number">
                            ${index+1}
                        </span>

                        <span>
                            ${step}
                        </span>

                    </div>

                `).join("")}

            </div>


            <div class="explanation-section">

                <h4>What does the result mean?</h4>

                <p>
                    ${data.meaning}
                </p>

            </div>

        </div>

    `;

}


/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveHistory(
    calculator,
    expression,
    result,
    icon
) {

    let history =
        JSON.parse(
            localStorage.getItem("apcHistory")
        ) || [];

    history.unshift({

        id: Date.now(),

        calculator,

        expression,

        result,

        icon,

        time:
            new Date().toLocaleString()

    });

    /*
      Keep latest 50 calculations
    */

    history =
        history.slice(0,50);

    localStorage.setItem(
        "apcHistory",
        JSON.stringify(history)
    );

    renderHistory();

}


/* =========================================================
   RENDER HISTORY
========================================================= */

function renderHistory() {

    const list =
        document.getElementById("historyList");

    let history =
        JSON.parse(
            localStorage.getItem("apcHistory")
        ) || [];

    document.getElementById(
        "totalCalculations"
    ).textContent =
        history.length;

    const unique =
        new Set(
            history.map(item => item.calculator)
        );

    document.getElementById(
        "calculatorsUsed"
    ).textContent =
        unique.size;

    document.getElementById(
        "latestActivity"
    ).textContent =
        history.length
            ? "Just now"
            : "—";


    if(!history.length) {

        list.innerHTML = `

            <div class="empty-history">

                <div>⌁</div>

                <h3>No calculations yet</h3>

                <p>
                    Your completed calculations will appear here automatically.
                </p>

            </div>

        `;

        return;

    }


    list.innerHTML =
        history.map(item => `

            <div class="history-item">

                <div class="history-main">

                    <div class="history-icon">
                        ${item.icon}
                    </div>

                    <div>

                        <h4>
                            ${item.calculator}
                        </h4>

                        <p>
                            ${item.expression}
                            • ${item.time}
                        </p>

                    </div>

                </div>

                <div class="history-result">
                    ${item.result}
                </div>

                <button
                    class="delete-history"
                    onclick="deleteHistory(${item.id})"
                >
                    ×
                </button>

            </div>

        `).join("");

}


/* =========================================================
   DELETE HISTORY
========================================================= */

function deleteHistory(id) {

    let history =
        JSON.parse(
            localStorage.getItem("apcHistory")
        ) || [];

    history =
        history.filter(
            item => item.id !== id
        );

    localStorage.setItem(
        "apcHistory",
        JSON.stringify(history)
    );

    renderHistory();

}


/* =========================================================
   CLEAR HISTORY
========================================================= */

function clearHistory() {

    localStorage.removeItem(
        "apcHistory"
    );

    renderHistory();

}


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    renderCalculators
);


/* =========================================================
   FILTER
========================================================= */

document.querySelectorAll(".filter")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            document.querySelectorAll(".filter")
            .forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            activeCategory =
                button.dataset.category;

            renderCalculators();

        }
    );

});


/* =========================================================
   KEYBOARD SEARCH
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if(
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            searchInput.focus();

        }

    }
);


/* =========================================================
   THEME
========================================================= */

document
    .getElementById("themeBtn")
    .addEventListener(
        "click",
        () => {

            document.body.classList.toggle("light");

            localStorage.setItem(
                "apcTheme",
                document.body.classList.contains("light")
                    ? "light"
                    : "dark"
            );

        }
    );


if(
    localStorage.getItem("apcTheme") === "light"
) {

    document.body.classList.add("light");

}


/* =========================================================
   HISTORY SCROLL
========================================================= */

function scrollToHistory() {

    document
        .getElementById("history")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   HELPERS
========================================================= */

function roundNumber(value) {

    if(typeof value !== "number")
        return value;

    return Number(
        value.toFixed(8)
    );

}


function formatNumber(value) {

    return Number(value)
        .toLocaleString(
            "en-IN",
            {
                maximumFractionDigits: 2
            }
        );

}


/* =========================================================
   INITIALIZE
========================================================= */

renderCalculators();

renderHistory();
