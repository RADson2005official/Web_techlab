Okay, Professor! Here is the model answer sheet for the third question paper image you've provided. I'll ensure the answers align with the specified Bloom's Taxonomy levels (Understand and Apply) and maintain a concise format suitable for a written exam.

---
**Answer Sheet**
**Exam Type: Re-CIA1
**Course: Web Technology**

---

**Q.1 Attempt All (Blooms Taxonomy: Understand)**

**A. What is web architecture? Explain the phases of website development.** (5 Marks)

**Answer:**

**Web Architecture:**
Web architecture refers to the conceptual structure and logical organization of a website or web application. It defines how different components such as the client (browser), server (web server, application server, database server), network, and data interact with each other to deliver content and functionality to users. It encompasses the selection of technologies, protocols, and patterns used to build and operate the web system, focusing on aspects like performance, scalability, security, and maintainability.

**Phases of Website Development (Website Development Life Cycle - WDLC):**

1.  **Planning & Information Gathering:**
    *   **Activities:** Understanding client requirements, defining website goals and target audience, scope definition, budget estimation, creating a sitemap, and technology stack consideration.
    *   **Outcome:** A clear project plan, functional specifications, and sitemap.

2.  **Design (UI/UX):**
    *   **Activities:** Creating wireframes, mockups, and prototypes. Designing the visual layout, user interface (UI), and user experience (UX). Defining branding elements like color schemes and typography.
    *   **Outcome:** Approved design mockups and style guides.

3.  **Development (Coding):**
    *   **Activities:** Writing the actual code for the website.
        *   **Front-end development:** Creating the client-side interface using HTML, CSS, and JavaScript.
        *   **Back-end development:** Building server-side logic, database interactions, and APIs using languages like PHP, Python, Java, Node.js, etc., and integrating with databases (e.g., MySQL).
        *   **Content Management System (CMS) setup/customization** if applicable.
    *   **Outcome:** A functional website according to the design and specifications.

4.  **Testing & Quality Assurance (QA):**
    *   **Activities:** Testing for functionality, usability, compatibility (across browsers and devices), performance, and security. Identifying and fixing bugs.
    *   **Outcome:** A stable, bug-free website ready for deployment.

5.  **Deployment:**
    *   **Activities:** Transferring the website files to a live web server. Configuring the server environment, domain name, and database connections. Performing final checks.
    *   **Outcome:** The website is live and accessible to users on the internet.

6.  **Maintenance & Updates:**
    *   **Activities:** Ongoing support, monitoring website performance, updating content, applying security patches, fixing new bugs, and adding new features based on user feedback or evolving requirements.
    *   **Outcome:** A secure, up-to-date, and well-performing website.

---

**B. What is Website? Explain the Web Architecture with client side and server side technologies.** (5 Marks)

**Answer:**

**Website:**
A website is a collection of interlinked web pages and related content (such as images, videos, and other digital assets) that is identified by a common domain name and published on at least one web server. Websites are typically accessed via a network, such as the Internet or a private local area network, through a web browser. They can serve various purposes, such as providing information, offering services, facilitating e-commerce, or enabling social interaction.

**Web Architecture with Client-Side and Server-Side Technologies:**

Web architecture typically follows a multi-tier model, commonly a client-server model.

1.  **Client-Side (Presentation Tier):**
    *   **Role:** This is what the user interacts with directly in their web browser. It's responsible for presenting data to the user and collecting user input.
    *   **Technologies:**
        *   **HTML (HyperText Markup Language):** Defines the structure and content of web pages.
        *   **CSS (Cascading Style Sheets):** Controls the presentation, layout, and styling of HTML content.
        *   **JavaScript:** Enables dynamic content, interactivity, client-side validation, and manipulation of the HTML DOM (Document Object Model).
        *   **Frameworks/Libraries (e.g., React, Angular, Vue.js, jQuery):** Provide pre-written code and tools to simplify and accelerate client-side development.
    *   **Interaction:** The client (browser) sends requests to the server for web pages or data, and then renders the server's response.

2.  **Server-Side (Application Logic & Data Tier):**
    *   **Role:** This resides on the web server(s) and is responsible for processing client requests, executing business logic, interacting with databases, and generating responses (often dynamic HTML, XML, or JSON) to be sent back to the client.
    *   **Technologies:**
        *   **Web Server Software (e.g., Apache, Nginx, IIS):** Manages HTTP requests from clients and serves static files or passes dynamic requests to application servers.
        *   **Server-Side Programming Languages (e.g., PHP, Python (Django/Flask), Java (Spring), Ruby (Rails), Node.js (Express.js), C# (.NET)):** Used to write the application logic, handle data processing, and interact with databases.
        *   **Databases (e.g., MySQL, PostgreSQL, MongoDB, SQL Server, Oracle):** Store and manage the application's data.
        *   **APIs (Application Programming Interfaces):** Allow different software components (e.g., client and server, or different microservices) to communicate.
        *   **Application Servers (e.g., Tomcat for Java, Gunicorn for Python):** Provide the runtime environment for server-side applications.
    *   **Interaction:** Receives requests from the client, processes them (e.g., queries a database, performs calculations), and sends back a response.

*(A simple diagram could show: User -> Browser (Client-Side: HTML, CSS, JS) -> Internet -> Web Server (Server-Side: PHP/Python/Java, Database) -> Internet -> Browser)*

---

**Q.2 Attempt All (Blooms Taxonomy: Apply)**

**A. Write a program in HTML and javascript to display cube of a given number.** (5 Marks)

**Answer:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculate Cube</title>
    <script>
        function calculateCube() {
            // Get the number from the input field
            var numberInput = document.getElementById("numberInput").value;

            // Convert the input to a number
            var number = parseFloat(numberInput);

            // Check if the input is a valid number
            if (isNaN(number)) {
                document.getElementById("result").innerHTML = "Please enter a valid number.";
            } else {
                // Calculate the cube
                var cube = number * number * number;
                // var cube = Math.pow(number, 3); // Alternative using Math.pow()

                // Display the result
                document.getElementById("result").innerHTML = "The cube of " + number + " is: " + cube;
            }
        }
    </script>
</head>
<body>
    <h2>Calculate Cube of a Number</h2>
    <label for="numberInput">Enter a number:</label>
    <input type="text" id="numberInput">
    <button onclick="calculateCube()">Calculate Cube</button>
    <p id="result"></p>
</body>
</html>
```
**Explanation:**
1.  **HTML Structure:** An input field (`numberInput`) for the user to enter a number, a button to trigger the calculation, and a paragraph (`result`) to display the output.
2.  **JavaScript Function `calculateCube()`:**
    *   Retrieves the value from the `numberInput` field.
    *   Uses `parseFloat()` to convert the input string to a floating-point number.
    *   `isNaN()` checks if the conversion resulted in a valid number.
    *   Calculates the cube by multiplying the number by itself twice (or using `Math.pow(number, 3)`).
    *   Updates the `innerHTML` of the `result` paragraph to display the calculated cube or an error message.

---

**B. Write a program to accept two numbers from user and display addition using AngularJS.** (5 Marks)

**Answer:**

```html
<!DOCTYPE html>
<html ng-app="additionApp">
<head>
    <title>AngularJS Addition</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script>
        // 1. Create an AngularJS module
        var app = angular.module("additionApp", []);

        // 2. Create an AngularJS controller
        app.controller("additionController", function($scope) {
            $scope.num1 = 0;
            $scope.num2 = 0;
            $scope.sum = 0;

            $scope.calculateSum = function() {
                // AngularJS handles type conversion for ng-model with type="number"
                // but explicit conversion is safer if input type isn't strictly number.
                var n1 = parseFloat($scope.num1);
                var n2 = parseFloat($scope.num2);

                if (!isNaN(n1) && !isNaN(n2)) {
                    $scope.sum = n1 + n2;
                } else {
                    $scope.sum = "Invalid input";
                }
            };
        });
    </script>
</head>
<body ng-controller="additionController">
    <h2>Addition of Two Numbers using AngularJS</h2>

    <div>
        <label>Enter Number 1: </label>
        <input type="number" ng-model="num1" ng-change="calculateSum()">
    </div>
    <br>
    <div>
        <label>Enter Number 2: </label>
        <input type="number" ng-model="num2" ng-change="calculateSum()">
    </div>
    <br>
    <div>
        <h3>Sum: {{ sum }}</h3>
    </div>

    <!-- Alternative: Calculate sum directly in the expression if simple enough -->
    <!-- <h3>Sum (Direct Expression): {{ (num1 || 0) + (num2 || 0) }}</h3> -->

</body>
</html>
```
**Explanation:**
1.  **`ng-app="additionApp"`:** Initializes an AngularJS application named `additionApp`.
2.  **AngularJS Script:**
    *   The AngularJS library is included from a CDN.
    *   `angular.module("additionApp", [])` defines the application module.
    *   `app.controller("additionController", ...)` defines a controller.
    *   `$scope.num1`, `$scope.num2`, and `$scope.sum` are model variables bound to the view.
    *   `$scope.calculateSum` is a function that calculates the sum of `num1` and `num2` and stores it in `$scope.sum`.
3.  **`ng-controller="additionController"`:** Attaches the controller to the `<body>` element.
4.  **`ng-model="num1"` and `ng-model="num2"`:** Two-way data binding between the input fields and the `$scope.num1` and `$scope.num2` variables.
5.  **`ng-change="calculateSum()"`:** Calls the `calculateSum` function whenever the value in the input fields changes.
6.  **`{{ sum }}`:** An AngularJS expression that displays the value of `$scope.sum`.

---

**Q.3 Attempt All (Blooms Taxonomy: Apply)**

**A. Write a program in PHP using MYSQL to display student record like roll_no, name, mobile, email and address in tabular form.** (5 Marks)

**Answer:**

**Assumptions:**
*   MySQL database named (e.g.) `schooldb`.
*   Table named `students` with columns: `roll_no` (INT/VARCHAR, Primary Key), `name` (VARCHAR), `mobile` (VARCHAR), `email` (VARCHAR), `address` (TEXT).
*   This example uses MySQLi.

```php
<!DOCTYPE html>
<html>
<head>
    <title>Student Records</title>
    <style>
        table { width: 80%; border-collapse: collapse; margin: 20px auto; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h2>Student Records</h2>

    <?php
    // Database connection parameters
    $servername = "localhost"; // or your DB server address
    $username = "root";        // your DB username
    $password = "";            // your DB password
    $dbname = "schooldb";      // your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("<p style='color:red;'>Connection failed: " . $conn->connect_error . "</p>");
    }

    $sql = "SELECT roll_no, name, mobile, email, address FROM students";
    $result = $conn->query($sql);

    if ($result === false) {
        echo "<p style='color:red;'>Error executing query: " . htmlspecialchars($conn->error) . "</p>";
    } elseif ($result->num_rows > 0) {
        echo "<table>";
        echo "<tr><th>Roll No</th><th>Name</th><th>Mobile</th><th>Email</th><th>Address</th></tr>";
        // Output data of each row
        while($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . htmlspecialchars($row["roll_no"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["name"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["mobile"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["email"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["address"]) . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "<p>No student records found.</p>";
    }

    // Close connection
    $conn->close();
    ?>
</body>
</html>
```
**Explanation:**
1.  **Database Connection:** Establishes connection to MySQL using `mysqli`.
2.  **SQL Query:** A `SELECT` query fetches `roll_no`, `name`, `mobile`, `email`, and `address` from the `students` table.
3.  **Execute Query & Fetch Results:**
    *   `$conn->query($sql)` executes the query.
    *   `$result->num_rows > 0` checks if any records were returned.
    *   `$result->fetch_assoc()` fetches one row at a time as an associative array.
4.  **Display in Table:** The data is formatted into an HTML table. `htmlspecialchars()` is used to prevent XSS vulnerabilities when displaying data.
5.  **Error Handling & Closing:** Basic error checking for connection and query execution. The connection is closed.

---

**B. Sort the given numbers using inbuilt sorting functions of PHP in ascending, decending and without changing indices. 7, 3, 9, 1, 8** (5 Marks)

**Answer:**

```php
<?php
header('Content-Type: text/plain'); // To display output clearly

$numbers = [7, 3, 9, 1, 8]; // Given numbers

// --- 1. Ascending Order (re-indexes keys) ---
echo "Original Array:\n";
print_r($numbers);

$asc_numbers = $numbers; // Create a copy to sort
sort($asc_numbers);
echo "\nSorted in Ascending Order (sort() - keys re-indexed):\n";
print_r($asc_numbers);

// --- 2. Descending Order (re-indexes keys) ---
$desc_numbers = $numbers; // Create a copy
rsort($desc_numbers);
echo "\nSorted in Descending Order (rsort() - keys re-indexed):\n";
print_r($desc_numbers);

// --- 3. "Without changing indices" (maintaining key-value association) ---
// For numerically indexed arrays like this, 'maintaining indices' means
// the original index (0, 1, 2, 3, 4) stays associated with its value after sorting values.
// This is primarily for associative arrays, but asort/arsort can be shown.

// Original array with its implicit numeric keys:
// [0] => 7
// [1] => 3
// [2] => 9
// [3] => 1
// [4] => 8

echo "\n--- Sorting while attempting to maintain key-value association ---\n";
$numbers_assoc_asc = $numbers; // Create a copy
asort($numbers_assoc_asc); // Sorts array by values, maintaining key association
echo "\nSorted in Ascending Order by value, maintaining keys (asort()):\n";
print_r($numbers_assoc_asc);
// Output will be:
// Array
// (
//     [3] => 1
//     [1] => 3
//     [0] => 7
//     [4] => 8
//     [2] => 9
// )

$numbers_assoc_desc = $numbers; // Create a copy
arsort($numbers_assoc_desc); // Sorts array in reverse order by values, maintaining key association
echo "\nSorted in Descending Order by value, maintaining keys (arsort()):\n";
print_r($numbers_assoc_desc);
// Output will be:
// Array
// (
//     [2] => 9
//     [4] => 8
//     [0] => 7
//     [1] => 3
//     [3] => 1
// )

echo "\nNote: For a simple numerically indexed array, 'without changing indices' typically refers to using functions like asort() or arsort(), which preserve the original key associated with each value after sorting based on values. If the keys were meaningful (e.g., associative array keys), this becomes more apparent. For simple numeric arrays like [7,3,9,1,8], the keys are 0,1,2,3,4.\n";

?>
```
**Explanation:**
*   **`$numbers =;`**: The initial array of numbers.
*   **Ascending Sort (`sort()`):**
    *   `sort($asc_numbers);` sorts the array elements from lowest to highest.
    *   **Important:** `sort()` re-indexes the array, so the keys will be 0, 1, 2, 3, 4 regardless of their original positions.
*   **Descending Sort (`rsort()`):**
    *   `rsort($desc_numbers);` sorts the array elements from highest to lowest.
    *   **Important:** `rsort()` also re-indexes the array.
*   **Sorting "Without Changing Indices" (Maintaining Key-Value Association):**
    *   This phrase is most meaningful for associative arrays where keys are explicit strings or numbers. For simple numerically indexed arrays, it means the value at original index `i` moves, but its association with that original index `i` is preserved if we use functions like `asort()` or `arsort()`.
    *   **`asort($numbers_assoc_asc);`**: Sorts an array by its **values** in ascending order, maintaining the original **key-value** associations. The output shows the original keys `(3, 1, 0, 4, 2)` associated with their sorted values.
    *   **`arsort($numbers_assoc_desc);`**: Sorts an array by its **values** in descending order, maintaining the original **key-value** associations.

For the given simple numeric array, `sort()` and `rsort()` are the direct answers for ascending/descending. `asort()` and `arsort()` demonstrate how PHP handles sorting while preserving key associations, which addresses the "without changing indices" part by showing how values are sorted while their original keys follow them.

---
**End of Answer Sheet**
