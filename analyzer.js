// Store student marks in array
const marks = [78, 85, 62, 90, 55];

// Arrow function to calculate total using reduce()
const calculateTotal = (arr) => 
    arr.reduce((total, mark) => total + mark, 0);

// Arrow function to calculate average
const calculateAverage = (arr) => 
    calculateTotal(arr) / arr.length;

// Optional: Use map() to format marks (demonstration purpose)
const formattedMarks = marks.map((mark, index) => 
    `Subject ${index + 1}: ${mark}`
);

// Perform calculations
const total = calculateTotal(marks);
const average = calculateAverage(marks);

// Determine pass/fail (Pass if average >= 50)
const result = average >= 50 ? "✅ Pass" : "❌ Fail";

// Display output using template literals
const output = `
    <h3>Marks Analysis Result</h3>
    <p><strong>Marks:</strong><br>${formattedMarks.join("<br>")}</p>
    <p><strong>Total Marks:</strong> ${total}</p>
    <p><strong>Average Marks:</strong> ${average.toFixed(2)}</p>
    <p><strong>Result:</strong> ${result}</p>
`;

// Show in browser
document.getElementById("output").innerHTML = output;