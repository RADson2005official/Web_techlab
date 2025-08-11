
**SANJIVANI COLLEGE OF ENGINEERING**
**End-Semester Examination**
**Academic Year: 2024-2025**
**Course: Web Technology (CO3103)**
**CS-TY (2022 Pattern, Semester-V)**
**Answer Sheet**

---

**Que. 1**

**a) It is required to design a registration form which will accept name of the student and branch. There are 3 options for the branch (Computer, Mechanical and Civil). The student should be able to select appropriate branch. The form should contain submit and clear button. When user click on submit button, then form data should be submitted to reg1.php file. Write HTML code for creating a samr form.** (5 Marks)

**Answer:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
</head>
<body>
    <h2>Student Registration Form</h2>
    <form action="reg1.php" method="post">
        <label for="studentName">Student Name:</label><br>
        <input type="text" id="studentName" name="studentName" required><br><br>

        <label for="branch">Branch:</label><br>
        <select id="branch" name="branch" required>
            <option value="">--Select Branch--</option>
            <option value="Computer">Computer</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
        </select><br><br>

        <input type="submit" value="Submit">
        <input type="reset" value="Clear">
    </form>
</body>
</html>
```

**b) It is required to have a web page (/sres/coe/coi.html) which should contain 3 links. First link for /sres/coe/target1.html. Second link is for /sres/target2.html while third link is for /sres/coe/kop/target3.html. Write suitable HTML code.** (5 Marks)

**Answer:**
File: `/sres/coe/coi.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>COI Links Page</title>
</head>
<body>
    <h1>Main Links Page (coi.html)</h1>
    <p>Please find the links below:</p>
    <ul>
        <li><a href="target1.html">Link to Target 1</a></li>
        <li><a href="../target2.html">Link to Target 2</a></li> <!-- Assuming target2.html is in /sres/ -->
        <!-- Or if target2.html is in /sres/coe/ then href="target2.html" -->
        <!-- The question says /sres/target2.html, coi.html is in /sres/coe/. So, ../target2.html relative to coi.html if target2 is at /sres.
             If target2.html is meant to be in /sres/coe/, it would be <a href="target2.html">.
             Given the structure, /sres/target2.html from /sres/coe/coi.html is one level up and then into target2.html.
             If target2.html is *literally* at /sres/target2.html and coi.html is at /sres/coe/coi.html, then the path from coi.html would be "../target2.html".
             I will assume the paths are relative from the root or as specified.
             The most straightforward interpretation of the path "/sres/target2.html" is an absolute path from the domain root.
             For a portable solution often relative paths are used in exams unless absolute server paths are stressed.
             Let's use relative paths assuming a typical local directory structure for sres/coe/ etc.
        -->
        <li><a href="target1.html">Link to Target 1 (/sres/coe/target1.html)</a></li>
        <li><a href="../target2.html">Link to Target 2 (/sres/target2.html)</a></li>
        <li><a href="kop/target3.html">Link to Target 3 (/sres/coe/kop/target3.html)</a></li>
    </ul>
</body>
</html>
```
**Note on paths for b):**
*   For `target1.html`: If `coi.html` and `target1.html` are in the same `/sres/coe/` directory, the link is `href="target1.html"`.
*   For `target2.html`: If `coi.html` is in `/sres/coe/` and `target2.html` is in `/sres/`, the relative path from `coi.html` is `href="../target2.html"`.
*   For `target3.html`: If `coi.html` is in `/sres/coe/` and `target3.html` is in `/sres/coe/kop/`, the relative path from `coi.html` is `href="kop/target3.html"`.
The solution uses these relative paths.

---

**Que. 2**

**a) Design a simple web page that embeds both a video and an audio file using HTML5 elements. Ensure that the video has controls enabled and is set to autoplay, and the audio has controls as well but does not autoplay.** (5 Marks)
*(Note: The question states "video has controls enabled and is set to autoplay", then "the audio has controls as well but does not autoplay". There might be a slight contradiction, as typically autoplay is often restricted by browsers. I will write the code as requested, but add a note about autoplay restrictions).*

**Answer:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Multimedia Page</title>
</head>
<body>
    <h1>HTML5 Multimedia</h1>

    <h2>Video Player</h2>
    <!-- The question states "video has controls enabled and is set to autoplay" -->
    <!-- Note: Modern browsers often restrict autoplay for media with sound.
         It might require 'muted' attribute for autoplay to work reliably, or specific user interaction. -->
    <video width="640" height="360" controls autoplay>
        <source src="sample_video.mp4" type="video/mp4">
        <source src="sample_video.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>

    <h2>Audio Player</h2>
    <!-- The question states "the audio has controls as well but does not autoplay" -->
    <audio controls>
        <source src="sample_audio.mp3" type="audio/mpeg">
        <source src="sample_audio.ogg" type="audio/ogg">
        Your browser does not support the audio element.
    </audio>

    <p><strong>Note:</strong> Replace "sample_video.mp4", "sample_video.webm", "sample_audio.mp3", and "sample_audio.ogg" with actual paths to your media files.</p>
</body>
</html>
```

**b) Explain significance of SVG images. Write HTML code to create a circle having center at (100,100) and radius 50.** (5 Marks)

**Answer:**
**Significance of SVG (Scalable Vector Graphics) Images:**
1.  **Scalability:** SVGs are vector-based, meaning they can be scaled up or down to any size without losing quality or becoming pixelated. This is ideal for responsive web design.
2.  **Resolution Independence:** They look sharp on any display, including high-resolution (Retina) screens.
3.  **Small File Sizes:** For simple graphics and illustrations, SVGs can often have smaller file sizes compared to raster formats (like JPG, PNG) especially for graphics with fewer details.
4.  **Editable & Animatable:** SVG code is XML-based, meaning it can be edited with a text editor or graphics software. Its elements can be easily animated using CSS or JavaScript.
5.  **Accessibility & SEO:** Text within SVGs is real text, making it accessible to screen readers and indexable by search engines.
6.  **Styling:** SVGs can be styled with CSS, allowing for dynamic changes to fill colors, strokes, opacity, etc.
7.  **Interactivity:** JavaScript can be used to interact with SVG elements, enabling complex user interactions.

**HTML code to create an SVG circle:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>SVG Circle</title>
</head>
<body>
    <h1>SVG Circle Example</h1>
    <svg width="250" height="250">
        <circle cx="100" cy="100" r="50" stroke="black" stroke-width="2" fill="blue" />
        <!--
            cx: x-coordinate of the center of the circle.
            cy: y-coordinate of the center of the circle.
            r: radius of the circle.
            stroke: color of the circle's outline.
            stroke-width: width of the circle's outline.
            fill: color inside the circle.
        -->
    </svg>
</body>
</html>
```

---

**Que. 3**

**a) Write CSS code to make following changes:** (5 Marks)
**I) Set color of all h1 heading to "red".**
**II)Set the font weight of all paragraphs (<p>) to bold.**
**III)Set the background color of the <footer> element to darkgray.**
**IV)Set the margin of all <article> elements that have the class highlight to 20px.**
**V)Apply a solid border with a width of 1px, color red, and style solid to all <div> elements that are direct children of the class container.**

**Answer:**
```css
/* I) Set color of all h1 heading to "red". */
h1 {
    color: red;
}

/* II) Set the font weight of all paragraphs (<p>) to bold. */
p {
    font-weight: bold;
}

/* III) Set the background color of the <footer> element to darkgray. */
footer {
    background-color: darkgray;
}

/* IV) Set the margin of all <article> elements that have the class highlight to 20px. */
article.highlight {
    margin: 20px;
}

/* V) Apply a solid border with a width of 1px, color red, and style solid
      to all <div> elements that are direct children of the class container. */
.container > div {
    border: 1px solid red; /* 'solid' is part of the shorthand 'border' property */
}
```

**b) Use HTML to design a form for accepting workshop registration details (name, mobile number, email id, college name) from participants and validate email id using Java Script.** (5 Marks)

**Answer:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Workshop Registration</title>
    <script>
        function validateForm() {
            let email = document.getElementById("email").value;
            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                alert("Please enter a valid email ID.");
                return false; // Prevent form submission
            }
            return true; // Allow form submission
        }
    </script>
</head>
<body>
    <h2>Workshop Registration</h2>
    <form name="registrationForm" action="submit_registration.php" onsubmit="return validateForm()" method="post">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="participantName" required><br><br>

        <label for="mobile">Mobile Number:</label><br>
        <input type="tel" id="mobile" name="mobileNumber" required pattern="[0-9]{10}"><br><br>

        <label for="email">Email ID:</label><br>
        <input type="text" id="email" name="emailId" required><br><br>

        <label for="college">College Name:</label><br>
        <input type="text" id="college" name="collegeName" required><br><br>

        <input type="submit" value="Register">
    </form>
</body>
</html>
```

---

**OR (Alternative to Q.3)**

**Que. 4**

**a) Design a CSS class for a button that has a blue background, white text, font size 20px and rounded corners. Write CSS code in an external CSS file and link it to the HTML document.** (5 Marks)

**Answer:**

**1. External CSS File (`styles.css`):**
```css
/* styles.css */
.custom-button {
    background-color: blue;
    color: white;
    font-size: 20px;
    border-radius: 8px; /* Adjust for desired roundness */
    padding: 10px 20px; /* Add some padding for better appearance */
    border: none; /* Remove default border */
    cursor: pointer; /* Indicate it's clickable */
    text-align: center;
}

.custom-button:hover {
    background-color: darkblue; /* Optional: darker shade on hover */
}
```

**2. HTML Document (`button_page.html`):**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Custom Button Page</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Page with Custom Button</h1>
    <button class="custom-button">Click Me</button>
    <br><br>
    <a href="#" class="custom-button">Link as Button</a>
</body>
</html>
```

**b) Design a web page that accepts the original price and discount percentage from the user and calculates the final price after discount. Use JavaScript to display the result.** (5 Marks)

**Answer:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Discount Calculator</title>
    <script>
        function calculateFinalPrice() {
            // Get input values
            let originalPrice = parseFloat(document.getElementById("originalPrice").value);
            let discountPercentage = parseFloat(document.getElementById("discountPercentage").value);
            let resultElement = document.getElementById("result");

            // Validate inputs
            if (isNaN(originalPrice) || originalPrice < 0) {
                resultElement.innerHTML = "<p style='color:red;'>Please enter a valid original price.</p>";
                return;
            }
            if (isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) {
                resultElement.innerHTML = "<p style='color:red;'>Please enter a valid discount percentage (0-100).</p>";
                return;
            }

            // Calculate discount amount and final price
            let discountAmount = (originalPrice * discountPercentage) / 100;
            let finalPrice = originalPrice - discountAmount;

            // Display the result
            resultElement.innerHTML = "<p>Original Price: $" + originalPrice.toFixed(2) + "</p>" +
                                      "<p>Discount Percentage: " + discountPercentage.toFixed(2) + "%</p>" +
                                      "<p>Discount Amount: $" + discountAmount.toFixed(2) + "</p>" +
                                      "<h3>Final Price after Discount: $" + finalPrice.toFixed(2) + "</h3>";
        }
    </script>
</head>
<body>
    <h2>Discount Calculator</h2>

    <label for="originalPrice">Original Price ($):</label>
    <input type="number" id="originalPrice" step="0.01" required><br><br>

    <label for="discountPercentage">Discount Percentage (%):</label>
    <input type="number" id="discountPercentage" step="0.01" required><br><br>

    <button onclick="calculateFinalPrice()">Calculate Final Price</button>

    <div id="result" style="margin-top: 20px;">
        <!-- Result will be displayed here -->
    </div>
</body>
</html>
```

---
*(Continuing with Q5 to Q12 in subsequent focused blocks if needed, or assuming this structure is clear and will be followed for the rest)*
I'll provide answers for a few more questions to show continuity.

---

**Que. 5**

**a) Draw and explain MVC architecture of AngularJS.** (4 Marks)

**Answer:**
**MVC Architecture in AngularJS:**

**Diagram:**
```
      +-------------------+     Updates     +-------------------+
      |       View        |<----------------|       Model       |
      | (HTML, Directives)|---------------->| (Data, JavaScript |
      +-------------------+   Notifies UI   |      Objects)     |
             ^      |         (via $scope)  +-------------------+
             |      |                                 ^
    User     |      | User Actions                    | Business Logic
 Interactions|      | (e.g., ng-click)                | Manipulates
             v      |                                 |
      +-------------------+                           |
      |    Controller     |---------------------------+
      |  (JavaScript Func)|   Updates Model based
      +-------------------+   on View & Business Logic
```

**Explanation:**

*   **Model:**
    *   Represents the data and business logic of the application.
    *   In AngularJS, the model is typically plain JavaScript objects.
    *   It does not directly interact with the View. The `$scope` object acts as a bridge. When data in the `$scope` (which can be considered part of the Model or a ViewModel) changes, it reflects in the View, and vice-versa (with two-way data binding).
    *   It's responsible for managing the application's data state.

*   **View:**
    *   This is what the user sees – the HTML DOM (Document Object Model).
    *   It displays the data from the Model and sends user actions (like clicks, input) to the Controller.
    *   AngularJS extends HTML with directives (e.g., `ng-model`, `ng-bind`, `ng-repeat`) that declaratively define how the Model data should be projected onto the View.
    *   It observes the Model for changes and updates itself.

*   **Controller:**
    *   Responsible for handling user input from the View and interacting with the Model.
    *   It's a JavaScript function that defines the application's behavior.
    *   It sets up the initial state of the `$scope` object and adds behavior (methods) to it.
    *   The Controller links the Model to the View via the `$scope`. It doesn't manipulate the DOM directly (which is a key principle in AngularJS – keep controllers lean and focused on business logic and scope setup).

*   **$scope (Special Component/Glue):** While not strictly part of the classic MVC, `$scope` in AngularJS is crucial. It acts as the "glue" between the Controller and the View. The View "watches" for changes on the `$scope` properties to update itself, and directives in the View can update `$scope` properties (e.g., `ng-model`).

AngularJS's implementation of MVC (often referred to as MVVM - Model-View-ViewModel or MVW - Model-View-Whatever) facilitates a separation of concerns, making the application more organized, testable, and maintainable.

**b) Write code using AngularJS to perform arithmetic operations (Addition, subtraction, multiplication and division). Create a required HTML form to accept the two numbers and display the results in the paragraph elements.** (6 Marks)

**Answer:**
```html
<!DOCTYPE html>
<html ng-app="arithmeticApp">
<head>
    <title>AngularJS Arithmetic Operations</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script>
        var app = angular.module('arithmeticApp', []);
        app.controller('arithmeticCtrl', function($scope) {
            $scope.num1 = 0;
            $scope.num2 = 0;
            $scope.additionResult = 0;
            $scope.subtractionResult = 0;
            $scope.multiplicationResult = 0;
            $scope.divisionResult = 0;
            $scope.divisionError = "";

            $scope.calculate = function() {
                let n1 = parseFloat($scope.num1);
                let n2 = parseFloat($scope.num2);

                if (isNaN(n1) || isNaN(n2)) {
                    alert("Please enter valid numbers.");
                    return;
                }

                $scope.additionResult = n1 + n2;
                $scope.subtractionResult = n1 - n2;
                $scope.multiplicationResult = n1 * n2;

                if (n2 === 0) {
                    $scope.divisionResult = "N/A";
                    $scope.divisionError = "Cannot divide by zero.";
                } else {
                    $scope.divisionResult = n1 / n2;
                    $scope.divisionError = "";
                }
            };
        });
    </script>
</head>
<body ng-controller="arithmeticCtrl">
    <h2>AngularJS Arithmetic Calculator</h2>
    <form name="arithmeticForm">
        <label for="num1">Number 1:</label>
        <input type="number" id="num1" ng-model="num1" ng-change="calculate()"><br><br>

        <label for="num2">Number 2:</label>
        <input type="number" id="num2" ng-model="num2" ng-change="calculate()"><br><br>

        <!-- Optional: A button to explicitly calculate if ng-change is not desired for real-time update -->
        <!-- <button ng-click="calculate()">Calculate</button> -->
    </form>

    <h3>Results:</h3>
    <p>Number 1: {{num1}}</p>
    <p>Number 2: {{num2}}</p>
    <p>Addition ({{num1}} + {{num2}}): <span id="addRes">{{additionResult}}</span></p>
    <p>Subtraction ({{num1}} - {{num2}}): <span id="subRes">{{subtractionResult}}</span></p>
    <p>Multiplication ({{num1}} * {{num2}}): <span id="mulRes">{{multiplicationResult}}</span></p>
    <p>Division ({{num1}} / {{num2}}): <span id="divRes">{{divisionResult}}</span> <span style="color:red;">{{divisionError}}</span></p>
</body>
</html>
```

---

**Que. 6**
**OR (Alternative to Q.5)**

**a) What is use of filters in AngularJS? Explain lowercase and uppercase filter with the help of suitable code.** (4 Marks)

**Answer:**
**Use of Filters in AngularJS:**
Filters in AngularJS are used to format data displayed to the user in the view. They can be applied to expressions within templates (HTML) to transform data before it is rendered. Filters do not change the original data in the model, only its presentation. They are invoked using the pipe `|` character within an expression.

**Common uses include:**
*   Formatting dates, numbers, and currency.
*   Converting text case (e.g., uppercase, lowercase).
*   Filtering arrays to display a subset of items.
*   Ordering items in an array.
*   Creating custom formatting logic.

**Lowercase and Uppercase Filters:**

1.  **`lowercase` filter:** Converts a string to all lowercase.
2.  **`uppercase` filter:** Converts a string to all uppercase.

**Suitable Code Example:**
```html
<!DOCTYPE html>
<html ng-app="filterApp">
<head>
    <title>AngularJS Case Filters</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script>
        var app = angular.module('filterApp', []);
        app.controller('filterCtrl', function($scope) {
            $scope.greeting = "Hello AngularJS World!";
            $scope.userName = "JohnDoe";
        });
    </script>
</head>
<body ng-controller="filterCtrl">
    <h2>AngularJS Case Filters Example</h2>

    <label for="nameInput">Enter Text:</label>
    <input type="text" id="nameInput" ng-model="inputText" placeholder="Type something"><br><br>

    <p>Original Greeting: {{ greeting }}</p>
    <p>Greeting in Lowercase: {{ greeting | lowercase }}</p>
    <p>Greeting in Uppercase: {{ greeting | uppercase }}</p>
    <hr>
    <p>Username: {{ userName }}</p>
    <p>Username in Lowercase: {{ userName | lowercase }}</p>
    <p>Username in Uppercase: {{ userName | uppercase }}</p>
    <hr>
    <p ng-show="inputText">Input Text Original: {{ inputText }}</p>
    <p ng-show="inputText">Input Text Lowercase: {{ inputText | lowercase }}</p>
    <p ng-show="inputText">Input Text Uppercase: {{ inputText | uppercase }}</p>

</body>
</html>
```

**b) Explain the concept of two-way data binding in AngularJS. Use the ng-bind directive to bind a variable from the controller to an HTML element. Provide an example where changing the variable in the controller updates the view automatically.** (6 Marks)
*(Note: The question asks to "Use the ng-bind directive... Provide an example where changing the variable in the controller updates the view automatically." `ng-bind` is for one-way binding from controller to view. For demonstrating automatic update from controller to view, `ng-bind` is suitable. If it meant to also show view-to-controller, `ng-model` would be the prime example for two-way binding. I will address two-way binding conceptually and then use `ng-bind` as requested, explaining its role in reflecting model changes.)*

**Answer:**
**Concept of Two-Way Data Binding in AngularJS:**
Two-way data binding is a core feature of AngularJS that provides automatic synchronization of data between the Model (JavaScript objects in the controller's scope) and the View (HTML).

*   **Model to View:** When data in the Model changes, the View automatically updates to reflect these changes.
*   **View to Model:** When the user interacts with an input element in the View (e.g., types into a textbox), the corresponding data in the Model is automatically updated.

This eliminates the need for developers to write boilerplate JavaScript code to manually update the View when the Model changes, or to listen for DOM events to update the Model when the user interacts with the View. AngularJS handles this synchronization seamlessly using directives like `ng-model` for input elements. The `$scope` object acts as the intermediary.

**`ng-bind` Directive:**
The `ng-bind` directive is primarily for **one-way data binding from the controller's scope (Model) to the View**. It binds the content of an HTML element to the value of an expression. If the value of the expression in the scope changes, the content of the HTML element updates automatically. It's generally preferred over `{{ }}` (interpolation) if the expression content might briefly show as raw template before AngularJS compiles.

**Example (using `ng-bind` and showing controller update to view):**
```html
<!DOCTYPE html>
<html ng-app="bindingApp">
<head>
    <title>AngularJS ng-bind Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script>
        var app = angular.module('bindingApp', []);
        app.controller('bindingCtrl', function($scope, $timeout) {
            $scope.message = "Initial message from controller.";

            // Simulate changing the variable in the controller after some time
            $timeout(function() {
                $scope.message = "Message updated by controller automatically!";
            }, 3000); // Update after 3 seconds

            $scope.manualUpdate = function() {
                $scope.message = "Message updated on button click at " + new Date().toLocaleTimeString();
            };
        });
    </script>
</head>
<body ng-controller="bindingCtrl">
    <h2>AngularJS Data Binding Example</h2>

    <p><strong>Using ng-bind:</strong> <span ng-bind="message"></span></p>
    <p><strong>Using interpolation (for comparison):</strong> {{ message }}</p>

    <button ng-click="manualUpdate()">Update Message Manually</button>

    <p style="margin-top:20px;">
        <em>The message above will first show "Initial message...". After 3 seconds, it will automatically change to "Message updated by controller automatically!". Clicking the button will also update it. This demonstrates how changes in the <code>$scope.message</code> variable in the controller automatically reflect in the view where <code>ng-bind="message"</code> is used.</em>
    </p>
</body>
</html>
```
**Explanation of the Example:**
1.  The `bindingCtrl` controller initializes `$scope.message`.
2.  The `<span ng-bind="message"></span>` element's content is bound to `$scope.message`.
3.  The `$timeout` service is used to simulate an asynchronous update to `$scope.message` in the controller after 3 seconds.
4.  When `$scope.message` is changed by the `$timeout` function or the `manualUpdate` function, the content of the `<span>` element (and the paragraph using interpolation) automatically updates in the View without any manual DOM manipulation. This demonstrates the Model-to-View part of data binding, for which `ng-bind` is suitable.

*(For true two-way binding demonstration (View-to-Model and Model-to-View), `ng-model` on an input element would be used: `<input type="text" ng-model="message">`. Changes in the input field would update `$scope.message`, and changes to `$scope.message` in the controller would update the input field's value.)*

---
Okay, Professor! Let's continue with the model answers for Q7 through Q12 for the Web Technology (CO3103) End-Semester Examination.

---

**Que. 7**

**a) Design a React component with a "Like" button and a "Dislike" button. Clicking either button should update a state value and display the current count of likes and dislikes.** (5 Marks)

**Answer:**
```javascript
// LikeDislikeComponent.js
import React, { useState } from 'react';

function LikeDislikeComponent() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => {
        setLikes(prevLikes => prevLikes + 1);
    };

    const handleDislike = () => {
        setDislikes(prevDislikes => prevDislikes + 1);
    };

    return (
        <div>
            <h2>Like/Dislike Counter</h2>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike} style={{ marginLeft: '10px' }}>Dislike</button>
            <p>Likes: {likes}</p>
            <p>Dislikes: {dislikes}</p>
        </div>
    );
}

export default LikeDislikeComponent;

// How to use it in another component (e.g., App.js)
// import React from 'react';
// import LikeDislikeComponent from './LikeDislikeComponent';
//
// function App() {
//   return (
//     <div className="App">
//       <LikeDislikeComponent />
//     </div>
//   );
// }
// export default App;
```
**Explanation:**
*   `useState` hook is used to manage `likes` and `dislikes` state variables, initialized to 0.
*   `handleLike` function increments the `likes` count.
*   `handleDislike` function increments the `dislikes` count.
*   The component renders two buttons and paragraphs to display the current counts.

**b) How would you manage component communication between a parent and child component using props? Write suitable code to explain use of props.** (5 Marks)

**Answer:**
Component communication using props in React primarily flows in one direction: from parent to child.

**Parent to Child Communication:**
Parents pass data to child components via attributes in JSX, which become `props` (an object) in the child component.

**Child to Parent Communication:**
To send data or trigger actions from child to parent, the parent passes a callback function as a prop to the child. The child then calls this function when a specific event occurs, optionally passing data as arguments to the callback.

**Suitable Code Example:**

**1. Parent Component (`ParentComponent.js`):**
```javascript
// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [messageFromChild, setMessageFromChild] = useState("");
    const parentData = "Hello from Parent!";

    // Callback function to be passed to child
    const handleChildData = (dataFromChild) => {
        setMessageFromChild(dataFromChild);
        console.log("Data received from child:", dataFromChild);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Data to send to child: {parentData}</p>
            <ChildComponent
                dataForChild={parentData}
                onSendDataToParent={handleChildData}
            />
            {messageFromChild && <p>Message from child: {messageFromChild}</p>}
        </div>
    );
}

export default ParentComponent;
```

**2. Child Component (`ChildComponent.js`):**
```javascript
// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
    // Accessing data from parent
    const dataReceived = props.dataForChild;
    const childMessage = "Hi Parent, this is child!";

    const sendData = () => {
        // Calling the callback function passed from parent
        if (props.onSendDataToParent) {
            props.onSendDataToParent(childMessage);
        }
    };

    return (
        <div style={{ border: '1px solid blue', padding: '10px', marginTop: '10px' }}>
            <h3>Child Component</h3>
            <p>Data received from parent: {dataReceived}</p>
            <button onClick={sendData}>Send Data to Parent</button>
        </div>
    );
}

export default ChildComponent;
```
**Explanation:**
*   **Parent to Child:** `ParentComponent` passes `parentData` as a prop named `dataForChild` to `ChildComponent`. `ChildComponent` accesses it via `props.dataForChild`.
*   **Child to Parent:** `ParentComponent` passes the `handleChildData` function as a prop named `onSendDataToParent` to `ChildComponent`. When the button in `ChildComponent` is clicked, it calls `props.onSendDataToParent()`, passing `childMessage` back to the parent, which then updates its state.

---
**OR (Alternative to Q.7)**

**Que. 8**

**a) What is a component in React? Design React functional component which will render the name of engineering college along with list of departments available in that college.** (5 Marks)

**Answer:**
**Component in React:**
A component in React is an independent, reusable piece of UI (User Interface). Components are like JavaScript functions or classes that accept inputs (called "props") and return React elements describing what should appear on the screen. They allow you to split the UI into smaller, manageable parts. There are two main types: Functional Components (using functions) and Class Components (using ES6 classes). Functional components with hooks are now the more common way to write components.

**React Functional Component Example:**
```javascript
// CollegeInfo.js
import React from 'react';

function CollegeInfo() {
    const collegeName = "Sanjivani College of Engineering, Kopargaon";
    const departments = [
        "Computer Engineering",
        "Information Technology",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electronics and Telecommunication Engineering",
        "Electrical Engineering"
    ];

    return (
        <div>
            <h1>{collegeName}</h1>
            <h2>Departments Available:</h2>
            <ul>
                {departments.map((dept, index) => (
                    <li key={index}>{dept}</li>
                ))}
            </ul>
        </div>
    );
}

export default CollegeInfo;

// How to use it (e.g., in App.js):
// import React from 'react';
// import CollegeInfo from './CollegeInfo';
//
// function App() {
//   return (
//     <div className="App">
//       <CollegeInfo />
//     </div>
//   );
// }
// export default App;
```

**b) Demonstrate how to handle events in a functional component. Create a simple button that increments a counter when clicked.** (5 Marks)

**Answer:**
```javascript
// EventCounter.js
import React, { useState } from 'react';

function EventCounter() {
    // useState hook to manage the counter state
    const [count, setCount] = useState(0);

    // Event handler function
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1); // Update state based on previous state
    };

    return (
        <div>
            <h2>Counter Example</h2>
            <p>Current Count: {count}</p>
            {/* Event handling: onClick calls handleIncrement */}
            <button onClick={handleIncrement}>Increment Count</button>
        </div>
    );
}

export default EventCounter;

// How to use it (e.g., in App.js):
// import React from 'react';
// import EventCounter from './EventCounter';
//
// function App() {
//   return (
//     <div className="App">
//       <EventCounter />
//     </div>
//   );
// }
// export default App;
```
**Explanation:**
1.  **`useState` Hook:** Initializes a state variable `count` to `0` and provides a function `setCount` to update it.
2.  **Event Handler (`handleIncrement`):** This function is called when the button is clicked. It uses `setCount` to increment the `count`.
3.  **`onClick` Attribute:** The button element has an `onClick` attribute that is set to the `handleIncrement` function. This attaches the event listener. When the button is clicked, React calls `handleIncrement`.

---

**Que. 9**

**a) Design HTML form for accepting username, password. Also design a Servlet which reads this form data.** (5 Marks)

**Answer:**

**1. HTML Form (`login.html`):**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Login Form</title>
</head><body>
    <h2>User Login</h2>
    <form action="LoginReaderServlet" method="post">
        Username: <input type="text" name="username" required><br><br>
        Password: <input type="password" name="password" required><br><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>
```

**2. Servlet (`LoginReaderServlet.java`):**
```java
// Assuming package com.example;
package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet; // Or use web.xml for mapping
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LoginReaderServlet") // Servlet 3.0+ annotation for mapping
public class LoginReaderServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        // Read form data
        String username = request.getParameter("username");
        String password = request.getParameter("password"); // Be cautious with handling passwords

        out.println("<!DOCTYPE html>");
        out.println("<html><head><title>Login Data Received</title></head><body>");
        out.println("<h2>Login Data Submitted:</h2>");
        out.println("<p>Username: " + username + "</p>");
        // For security, never display the password back to the client in a real application.
        // This is just to demonstrate reading it.
        out.println("<p>Password (read but not displayed for security): [********]</p>");
        out.println("<p>Servlet has received username: " + username + "</p>");
        out.println("</body></html>");
        out.close();
    }
}
// If not using @WebServlet, configure in web.xml:
/*
<web-app>
    <servlet>
        <servlet-name>LoginReader</servlet-name>
        <servlet-class>com.example.LoginReaderServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>LoginReader</servlet-name>
        <url-pattern>/LoginReaderServlet</url-pattern>
    </servlet-mapping>
</web-app>
*/
```

**b) Explain Session management in Servlet. Write a Java Servlet that creates an HttpSession, stores a user's username in the session, and then retrieves and displays the username on a subsequent request.** (5 Marks)

**Answer:**
**Session Management in Servlets:**
Session management refers to the process of tracking a user's interactions with a web application across multiple HTTP requests. Since HTTP is a stateless protocol, each request is independent. Sessions provide a way to maintain state (store user-specific data) for the duration of a user's visit.

Servlets manage sessions using the `HttpSession` interface. Common mechanisms include:
1.  **Cookies:** The server sends a unique session ID as a cookie to the client's browser. The browser sends this cookie back with each subsequent request, allowing the server to identify the session.
2.  **URL Rewriting:** The session ID is appended to URLs if cookies are disabled.
3.  **Hidden Form Fields:** Session ID can be embedded in hidden fields in forms (less common for general session tracking).

**Java Servlet Example:**

**Servlet 1: Store Username in Session (`StoreInSessionServlet.java`)**
```java
// Assuming package com.example;
package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/storeSession")
public class StoreInSessionServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        // Get username from request parameter (e.g., from a login form or URL)
        String username = request.getParameter("username");
        if (username == null || username.trim().isEmpty()) {
            username = "GuestUser"; // Default if no username provided
        }

        // 1. Get the current session or create one if it doesn't exist
        HttpSession session = request.getSession(true); // true: create if not exists

        // 2. Store the username
```
---

**Que. 9 (Continued)**

**b) Explain Session management in Servlet. Write a Java Servlet that creates an HttpSession, stores a user's username in the session, and then retrieves and displays the username on a subsequent request.** (5 Marks)

**Answer (Continued from previous response):**

**Java Servlet Example:**

**Servlet 1: Store Username in Session (`StoreInSessionServlet.java`)**
```java
// Assuming package com.example;
package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/storeSession")
public class StoreInSessionServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        // Get username from request parameter (e.g., from a login form or URL)
        String username = request.getParameter("username");
        if (username == null || username.trim().isEmpty()) {
            username = "GuestUser"; // Default if no username provided
        }

        // 1. Get the current session or create one if it doesn't exist
        HttpSession session = request.getSession(true); // true: create if not exists

        // 2. Store the username as an attribute in the session
        session.setAttribute("loggedInUser", username);

        out.println("<!DOCTYPE html><html><head><title>Session Store</title></head><body>");
        out.println("<h2>Username Stored in Session</h2>");
        out.println("<p>Username '" + username + "' has been stored in your session.</p>");
        out.println("<p>Session ID: " + session.getId() + "</p>");
        out.println("<p><a href='retrieveSession'>Click here to retrieve username on next request</a></p>");
        out.println("</body></html>");
        out.close();
    }
}
```

**Servlet 2: Retrieve Username from Session (`RetrieveFromSessionServlet.java`)**
```java
// Assuming package com.example;
package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/retrieveSession")
public class RetrieveFromSessionServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        out.println("<!DOCTYPE html><html><head><title>Session Retrieve</title></head><body>");
        out.println("<h2>Retrieving Username from Session</h2>");

        // 1. Get the current session (do not create if it doesn't exist for retrieval)
        HttpSession session = request.getSession(false); // false: do not create if not exists

        if (session != null) {
            // 2. Retrieve the username attribute from the session
            String username = (String) session.getAttribute("loggedInUser");

            if (username != null) {
                out.println("<p>Welcome back, " + username + "!</p>");
                out.println("<p>Your username was retrieved from the session.</p>");
            } else {
                out.println("<p>No username found in the session. Perhaps it was not set or has expired.</p>");
            }
            out.println("<p>Session ID: " + session.getId() + "</p>");
        } else {
            out.println("<p>No active session found. Please visit the <a href='storeSession?username=YourName'>store page</a> first.</p>");
        }
        out.println("</body></html>");
        out.close();
    }
}
```
**Explanation:**
1.  **`StoreInSessionServlet`**:
    *   Accepts a `username` request parameter (e.g., `/storeSession?username=JohnDoe`).
    *   `request.getSession(true)` gets the current `HttpSession` or creates a new one if none exists.
    *   `session.setAttribute("loggedInUser", username)` stores the username in the session object.
2.  **`RetrieveFromSessionServlet`**:
    *   `request.getSession(false)` gets the current `HttpSession` only if one already exists. It returns `null` if no session is associated with the request.
    *   `session.getAttribute("loggedInUser")` retrieves the stored username.
    *   This demonstrates that data stored in one request can be accessed in subsequent requests from the same user (browser).

---
**OR (Alternative to Q.9)**

**Que. 10**

**a) Develop a Servlet to print "Hello World" on the web page. Explain the class, method, objects used in this Servlet code.** (5 Marks)

**Answer:**

**Servlet Code (`HelloWorldServlet.java`):**
```java
// Assuming package com.example;
package com.example;

import java.io.IOException; // For I/O exceptions
import java.io.PrintWriter; // To send text output to the client

import javax.servlet.ServletException; // For servlet-specific exceptions
import javax.servlet.annotation.WebServlet; // For URL mapping (Servlet 3.0+)
import javax.servlet.http.HttpServlet; // Base class for HTTP servlets
import javax.servlet.http.HttpServletRequest; // Represents the client's request
import javax.servlet.http.HttpServletResponse; // Represents the server's response

@WebServlet("/hello") // Maps this servlet to the URL /hello
public class HelloWorldServlet extends HttpServlet {

    // Overriding the doGet method to handle GET requests
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // 1. Set the content type of the response
        response.setContentType("text/html;charset=UTF-8");

        // 2. Get a PrintWriter object to send text data to the client
        PrintWriter out = response.getWriter();

        // 3. Write the HTML response
        try {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Hello World Servlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Hello World!</h1>"); // The main message
            out.println("<p>This message is generated by a Java Servlet.</p>");
            out.println("</body>");
            out.println("</html>");
        } finally {
            // 4. Close the PrintWriter (important to ensure data is sent)
            if (out != null) {
                out.close();
            }
        }
    }
}
```

**Explanation of Class, Methods, and Objects:**

*   **Class:**
    *   `HelloWorldServlet`: This is our custom servlet class.
    *   `extends HttpServlet`: It inherits from `javax.servlet.http.HttpServlet`. This base class provides the framework for handling HTTP-specific requests (like GET, POST).

*   **Methods:**
    *   `doGet(HttpServletRequest request, HttpServletResponse response)`:
        *   This method is overridden from the `HttpServlet` class.
        *   It is called by the servlet container (e.g., Tomcat) when the servlet receives an HTTP GET request that matches its URL mapping (`/hello`).
        *   `throws ServletException, IOException`: Indicates that the method can throw these exceptions, which the container will handle.
    *   `response.setContentType("text/html;charset=UTF-8")`:
        *   A method of the `HttpServletResponse` object.
        *   Sets the MIME type of the response being sent to the client, indicating it's an HTML document using UTF-8 character encoding.
    *   `response.getWriter()`:
        *   A method of the `HttpServletResponse` object.
        *   Returns a `PrintWriter` object that can be used to send character text (like HTML) to the client.
    *   `out.println(...)`:
        *   A method of the `PrintWriter` object (`out`).
        *   Writes a string of text to the output stream, followed by a newline character (though for HTML, the newline often doesn't affect rendering significantly).
    *   `out.close()`:
        *   A method of the `PrintWriter` object.
        *   Closes the print stream and flushes any buffered output to the client. It's crucial to close the writer.

*   **Objects:**
    *   `request`: An instance of `javax.servlet.http.HttpServletRequest`.
        *   It represents the HTTP request made by the client (browser).
        *   It contains information about the request, such as parameters, headers, and the client's IP address. (Not heavily used in this simple "Hello World" example, but essential for more complex servlets).
    *   `response`: An instance of `javax.servlet.http.HttpServletResponse`.
        *   It represents the HTTP response that the servlet will send back to the client.
        *   The servlet uses this object to set response headers (like content type) and to get the output stream for sending the response body.
    *   `out`: An instance of `java.io.PrintWriter`.
        *   Obtained from `response.getWriter()`.
        *   This object is used as a conduit to write the HTML content of the web page back to the client.

*   **Annotation:**
    *   `@WebServlet("/hello")`: This is a Servlet 3.0+ annotation that provides a convenient way to declare a servlet and map it to a URL pattern without needing to configure it in the `web.xml` deployment descriptor.

**b) Design a Servlet that accepts student information (id, name, and marks) through an HTML form. Write Servlet code using JDBC to insert data into a database. Assume that the Servlet HTML form is already designed, and write only the Servlet code for processing the form data and inserting it into the database using JDBC.** (5 Marks)

**Answer:**

**Assumptions:**
*   An HTML form exists that `POST`s data to this servlet with fields named `studentId`, `studentName`, and `studentMarks`.
*   A MySQL database named `schooldb` exists.
*   A table named `students` exists with columns: `id` (VARCHAR or INT), `name` (VARCHAR), `marks` (INT or DECIMAL).
*   MySQL JDBC driver JAR is in the web application's `WEB-INF/lib` folder.

**Servlet Code (`AddStudentServlet.java`):**
```java
// Assuming package com.example;
package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/addStudent")
public class AddStudentServlet extends HttpServlet {

    // Database connection details (Consider externalizing these in a real app)
    private static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    private static final String DB_URL = "jdbc:mysql://localhost:3306/schooldb?useSSL=false&serverTimezone=UTC";
    private static final String DB_USER = "your_db_user"; // Replace with your DB username
    private static final String DB_PASSWORD = "your_db_password"; // Replace with your DB password

    @Override
    public void init() throws ServletException {
        try {
            // Load the JDBC driver once when the servlet is initialized
            Class.forName(JDBC_DRIVER);
        } catch (ClassNotFoundException e) {
            throw new ServletException("JDBC Driver not found", e);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        // 1. Get student information from the request (form data)
        String studentId = request.getParameter("studentId");
        String studentName = request.getParameter("studentName");
        String marksStr = request.getParameter("studentMarks");
        int studentMarks = 0;

        // Basic validation and conversion for marks
        if (marksStr != null && !marksStr.trim().isEmpty()) {
            try {
                studentMarks = Integer.parseInt(marksStr);
            } catch (NumberFormatException e) {
                out.println("<h3>Error: Invalid marks format. Please enter a number.</h3>");
                out.println("<a href='add_student_form.html'>Go Back</a>"); // Assume form is add_student_form.html
                return;
            }
        } else {
            out.println("<h3>Error: Marks cannot be empty.</h3>");
            out.println("<a href='add_student_form.html'>Go Back</a>");
            return;
        }

        Connection conn = null;
        PreparedStatement pstmt = null;

        out.println("<!DOCTYPE html><html><head><title>Add Student Result</title></head><body>");

        try {
            // 2. Establish database connection
            conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            conn.setAutoCommit(false); // Optional: for transaction management

            // 3. Create SQL INSERT statement using PreparedStatement
            String sql = "INSERT INTO students (id, name, marks) VALUES (?, ?, ?)";
            pstmt = conn.prepareStatement(sql);

            // 4. Set the parameter values
            pstmt.setString(1, studentId);
            pstmt.setString(2, studentName);
            pstmt.setInt(3, studentMarks);

            // 5. Execute the update
            int rowsAffected = pstmt.executeUpdate();

            if (rowsAffected > 0) {
                conn.commit(); // Commit transaction if autoCommit is false
                out.println("<h2>Student Data Inserted Successfully!</h2>");
                out.println("<p>ID: " + studentId + "</p>");
                out.println("<p>Name: " + studentName + "</p>");
                out.println("<p>Marks: " + studentMarks + "</p>");
            } else {
                conn.rollback(); // Rollback if something went wrong and autoCommit is false
                out.println("<h2>Error: Failed to insert student data. No rows affected.</h2>");
            }

        } catch (SQLException se) {
            // Handle errors for JDBC
            out.println("<h2>Database Error:</h2>");
            out.println("<p>" + se.getMessage() + "</p>");
            se.printStackTrace(out); // For debugging - prints stack trace to browser
            if (conn != null) {
                try {
                    conn.rollback(); // Rollback on error
                } catch (SQLException sqlEx) {
                    sqlEx.printStackTrace(out);
                }
            }
        } catch (Exception e) {
            // Handle other errors
            out.println("<h2>An unexpected error occurred:</h2>");
            out.println("<p>" + e.getMessage() + "</p>");
            e.printStackTrace(out);
        } finally {
            // 6. Close resources in a finally block
            try {
                if (pstmt != null) pstmt.close();
            } catch (SQLException se2) { /* ignored */ }
            try {
                if (conn != null) conn.close();
            } catch (SQLException se) {
                se.printStackTrace(out);
            }
            out.println("<br><a href='add_student_form.html'>Add Another Student</a>"); // Link back to form
            out.println("</body></html>");
            out.close();
        }
    }
}
```
**Note:**
*   Replace `your_db_user` and `your_db_password` with actual database credentials.
*   The HTML form should have input fields named `studentId`, `studentName`, and `studentMarks` and its action should point to `/addStudent`.
*   Error handling and resource closing are important.
*   Using `PreparedStatement` helps prevent SQL injection vulnerabilities.
*   The `init()` method is used to load the JDBC driver once.

---

**Que. 11**

**a) Explain the significance of Spring boot starter.** (4 Marks)

**Answer:**
**Significance of Spring Boot Starters:**

Spring Boot Starters are a set of convenient dependency descriptors that you can include in your application. The main significance of starters is to **simplify dependency management and auto-configuration** for Spring applications.

1.  **Simplified Dependency Management:**
    *   Starters bundle a collection of related dependencies (JARs) that are commonly used together for a specific functionality (e.g., web development, data JPA, security).
    *   Instead of manually adding multiple individual dependencies and worrying about version compatibility, you just include a single starter POM (e.g., `spring-boot-starter-web`).
    *   This reduces the `pom.xml` (for Maven) or `build.gradle` (for Gradle) file size and complexity.

2.  **Auto-Configuration:**
    *   Spring Boot uses starters to trigger auto-configuration. When a starter is present on the classpath, Spring Boot automatically configures the beans and settings required for that functionality.
    *   For example, if `spring-boot-starter-web` is included, Spring Boot auto-configures an embedded web server (like Tomcat), Spring MVC, Jackson for JSON processing, etc., with sensible defaults.
    *   This "opinionated default configuration" drastically reduces the amount of boilerplate configuration code developers need to write.

3.  **Production-Ready Features:**
    *   Starters often bring in dependencies that provide production-ready features like health checks, metrics, and externalized configuration, which are available through other starters like `spring-boot-starter-actuator`.

4.  **Opinionated but Overridable:**
    *   While starters provide opinionated defaults, Spring Boot allows developers to easily override these defaults if specific customizations are needed.

5.  **Reduced Development Time:**
    *   By handling dependency management and auto-configuration, starters allow developers to get started quickly and focus more on writing business logic rather than application setup and configuration.

**Examples of common starters:**
*   `spring-boot-starter-web`: For building web applications, including RESTful APIs using Spring MVC.
*   `spring-boot-starter-data-jpa`: For using Spring Data JPA with Hibernate.
*   `spring-boot-starter-security`: For adding Spring Security.
*   `spring-boot-starter-test`: For testing Spring Boot applications.
*   `spring-boot-starter-thymeleaf`: For using Thymeleaf templating engine.

In essence, Spring Boot Starters make it significantly easier and faster to build robust, production-grade Spring applications.

**b) Design a Spring Boot application that enables the creation of "Product" entities by accepting product details such as product ID and product name from the front end and storing them in a database. Provide relevant code snippets to showcase the implementation (excluding frontend code).** (6 Marks)

**Answer:**

**Assumptions:**
*   Using Spring Data JPA with an H2 in-memory database for simplicity (can be changed to MySQL, PostgreSQL, etc. with configuration).
*   REST controller to accept product details.

**1. `pom.xml` (Maven Dependencies - relevant parts):**
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope> <!-- In-memory database for example -->
    </dependency>
    <!-- Lombok for boilerplate code reduction (optional but common) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
```

**2. `application.properties` (src/main/resources/):**
```properties
# Spring Datasource (H2 in-memory example)
spring.datasource.url=jdbc:h2:mem:productdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# JPA/Hibernate settings
spring.jpa.hibernate.ddl-auto=update # Creates/updates schema on startup
spring.jpa.show-sql=true # Show SQL queries in console (for debugging)

# To enable H2 console (optional for viewing DB)
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

**3. Product Entity (`Product.java`):**```java
package com.example.productapp.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
// import javax.persistence.GeneratedValue; // If ID is auto-generated
// import javax.persistence.GenerationType;
import lombok.Data; // From Lombok (optional)
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data // Lombok: Generates getters, setters, toString, equals, hashCode
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    // If product ID is manually provided from frontend:
    private String productId;

    // If productId should be auto-generated by database:
    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY) // or AUTO, SEQUENCE
    // private Long id;
    // private String externalProductId; // If you still need a business ID

    private String productName;

    // Constructors, getters, setters would be here if not using Lombok
}
```

**4. Product Repository (`ProductRepository.java`):**
```java
package com.example.productapp.repository;

import com.example.productapp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> { // String is the type of @Id
    // JpaRepository provides CRUD methods like save(), findById(), findAll(), deleteById() etc.
    // Custom query methods can be added here if needed.
}
```

**5. Product Service (Optional, but good practice - `ProductService.java`):**
```java
package com.example.productapp.service;

import com.example.productapp.entity.Product;
import com.example.productapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product createProduct(Product product) {
        // Additional business logic can go here before saving
        return productRepository.save(product);
    }

    // Other service methods like getProductById, getAllProducts, etc.
}
```

**6. Product REST Controller (`ProductController.java`):**
```java
package com.example.productapp.controller;

import com.example.productapp.entity.Product;
import com.example.productapp.service.ProductService; // Using the service
// import com.example.productapp.repository.ProductRepository; // Or directly use repository for simpler cases
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products") // Base path for product-related endpoints
public class ProductController {

    @Autowired
    private ProductService productService;

    // Using repository directly (alternative for simple cases, less recommended for complex apps)
    // @Autowired
    // private ProductRepository productRepository;

    // Endpoint to create a new product
    // Expects a JSON body like: {"productId": "P101", "productName": "Laptop"}
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        try {
            Product createdProduct = productService.createProduct(product);
            // Product createdProduct = productRepository.save(product); // If using repository directly
            return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            // Basic error handling
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Other endpoints like GET /api/products, GET /api/products/{id}, PUT, DELETE can be added here.
}
```

**7. Main Application Class (`ProductappApplication.java`):**
```java
package com.example.productapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // Combines @Configuration, @EnableAutoConfiguration, @ComponentScan
public class ProductappApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductappApplication.class, args);
    }
}
```
**To test (e.g., using Postman or curl):**
*   Run the Spring Boot application.
*   Send a `POST` request to `http://localhost:8080/api/products` with a JSON body:
    ```json
    {
        "productId": "P001",
        "productName": "Awesome Gadget"
    }
    ```
*   The response should be the created product with HTTP status 201 CREATED. The data will be stored in the H2 database.

---
**OR (Alternative to Q.11)**

**Que. 12**

**a) Discuss the benefits of using Spring Boot's dependency management system and how it simplifies the management of project dependencies.** (4 Marks)

**Answer:**
Spring Boot's dependency management system, primarily leveraged through its "starters" and the `spring-boot-dependencies` Bill of Materials (BOM), offers significant benefits:

1.  **Simplified Dependency Declaration:**
    *   Instead of declaring numerous individual Spring module dependencies (and their transitive dependencies) with specific versions, developers declare high-level "starters" (e.g., `spring-boot-starter-web`).
    *   This drastically reduces the size and complexity of the `pom.xml` (Maven) or `build.gradle` (Gradle) file.

2.  **Managed and Compatible Versions:**
    *   The `spring-boot-dependencies` BOM (Bill of Materials) is implicitly or explicitly imported. This BOM defines a curated list of dependencies and their compatible versions that are known to work well together.
    *   Spring Boot manages the versions of these dependencies. Developers generally don't need to specify versions for most Spring libraries and many common third-party libraries, reducing the risk of version conflicts.

3.  **Transitive Dependency Resolution:**
    *   Starters pull in necessary transitive dependencies. For example, `spring-boot-starter-web` brings in Spring MVC, an embedded server (like Tomcat), Jackson (for JSON), validation libraries, etc., all with compatible versions. Developers don't need to track these down individually.

4.  **Reduced Risk of Version Conflicts:**
    *   By relying on Spring Boot's managed versions, the likelihood of encountering `NoSuchMethodError`, `ClassNotFoundException`, or other linkage errors due to incompatible library versions is significantly minimized.

5.  **Easy Upgrades:**
    *   Upgrading the Spring Boot version (e.g., by changing the parent POM version or the BOM version) often upgrades the entire stack of managed dependencies to new, compatible versions. This simplifies the process of keeping the application up-to-date.

6.  **Convention over Configuration:**
    *   The dependency management system works hand-in-hand with Spring Boot's auto-configuration. The presence of certain dependencies (brought in by starters) triggers specific auto-configurations, reducing manual setup.

7.  **Flexibility to Override:**
    *   While Spring Boot manages versions, developers still have the flexibility to override a specific dependency's version if needed, by explicitly declaring it in their project's build file.

**How it simplifies:**
Essentially, developers can focus on *what* functionality they need (e.g., "I need to build a web application") by including the appropriate starter, rather than worrying about *how* to assemble the correct set of underlying libraries and their compatible versions. Spring Boot takes on the burden of curating and managing these dependencies, leading to faster project setup, more stable builds, and easier maintenance.

**b) Design suitable request handling methods in Rest-controller class to illustrate the use of @GetMapping and @PostMapping annotations.** (6 Marks)

**Answer:**

**Assumptions:**
*   A simple `Item` class for data representation.
*   The controller manages a list of items in memory for demonstration (in a real app, this would interact with a service/repository).

**1. Item Data Class (`Item.java`):**
```java
package com.example.demorest.model;

import lombok.Data; // Optional: from Lombok
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    private long id;
    private String name;
    private String description;
}
```

**2. Rest Controller (`ItemController.java`):**
```java
package com.example.demorest.controller;

import com.example.demorest.model.Item;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/items") // Base path for all requests to this controller
public class ItemController {

    // In-memory list to store items for demonstration purposes
    private final List<Item> itemList = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(); // For generating unique IDs

    public ItemController() {
        // Pre-populate with some data for GET examples
        itemList.add(new Item(counter.incrementAndGet(), "Laptop", "High-performance laptop"));
        itemList.add(new Item(counter.incrementAndGet(), "Mouse", "Wireless optical mouse"));
    }

    /**
     * Illustrates @GetMapping to retrieve all items.
     * Handles HTTP GET requests to /api/items
     *
     * @return A list of all items.
     */
    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        if (itemList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Or return an empty list
        }
        return new ResponseEntity<>(itemList, HttpStatus.OK);
    }

    /**
     * Illustrates @GetMapping with a path variable to retrieve a specific item by ID.
     * Handles HTTP GET requests to /api/items/{id}
     * e.g., /api/items/1
     *
     * @param id The ID of the item to retrieve.
     * @return The item if found, or 404 Not Found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable("id") long id) {
        Optional<Item> itemData = itemList.stream()
                                          .filter(item -> item.getId() == id)
                                          .findFirst();

        // Using functional style for ResponseEntity
        return itemData.map(item -> new ResponseEntity<>(item, HttpStatus.OK))
                       .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Illustrates @GetMapping with request parameters for filtering items.
     * Handles HTTP GET requests to /api/items/search?name=Laptop
     *
     * @param name The name to filter items by (optional).
     * @return A list of items matching the filter criteria.
     */
    @GetMapping("/search")
    public ResponseEntity<List<Item>> searchItemsByName(@RequestParam(required = false) String name) {
        if (name == null || name.trim().isEmpty()) {
            return new ResponseEntity<>(itemList, HttpStatus.OK); // Return all if no name query
        }
        List<Item> filteredItems = itemList.stream()
                .filter(item -> item.getName().toLowerCase().contains(name.toLowerCase()))
                .collect(Collectors.toList());

        if (filteredItems.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(filteredItems, HttpStatus.OK);
    }


    /**
     * Illustrates @PostMapping to create a new item.
     * Handles HTTP POST requests to /api/items
     * Expects an Item object in the request body (JSON).
     *
     * @param item The item object from the request body.
     * @return The created item with an assigned ID and HTTP status 201 Created.
     */
    @PostMapping
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        try {
            // In a real app, ID might be auto-generated by the database
            // For this example, we assign a new ID.
            Item newItem = new Item(
                    counter.incrementAndGet(),
                    item.getName(),
                    item.getDescription()
            );
            itemList.add(newItem);
            return new ResponseEntity<>(newItem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
```
**Explanation:**

*   **`@RestController`**: Marks this class as a REST controller where every method returns a domain object instead of a view. It's a convenience annotation that combines `@Controller` and `@ResponseBody`.
*   **`@RequestMapping("/api/items")`**: Maps HTTP requests with the base path `/api/items` to handler methods in this controller.

*   **`@GetMapping`**:
    *   `@GetMapping` (without a path): Mapped to `GET /api/items`. `getAllItems()` retrieves all items.
    *   `@GetMapping("/{id}")`: Mapped to `GET /api/items/{itemId}` (e.g., `/api/items/1`). `getItemById()` uses `@PathVariable` to extract `id` from the URL.
    *   `@GetMapping("/search")`: Mapped to `GET /api/items/search`. `searchItemsByName()` uses `@RequestParam` to get the `name` query parameter (e.g., `/api/items/search?name=Laptop`).

*   **`@PostMapping`**:
    *   Mapped to `POST /api/items`. `createItem()` handles the creation of a new item.
    *   `@RequestBody`: Indicates that the method parameter `item` should be populated with the value of the HTTP request body (typically JSON or XML converted to an `Item` object).

*   **`ResponseEntity<T>`**:
    *   Used to represent the entire HTTP response. It allows you to control the status code, headers, and the body of the response.
    *   Examples: `HttpStatus.OK` (200), `HttpStatus.CREATED` (201), `HttpStatus.NOT_FOUND` (404), `HttpStatus.NO_CONTENT` (204).

**To Test:**
*   **GET All:** Send GET to `http://localhost:8080/api/items`
*   **GET by ID:** Send GET to `http://localhost:8080/api/items/1`
*   **GET Search by Name:** Send GET to `http://localhost:8080/api/items/search?name=Laptop`
*   **POST Create:** Send POST to `http://localhost:8080/api/items` with JSON body:
    ```json
    {
        "name": "Keyboard",
        "description": "Mechanical gaming keyboard"
    }
    ```

---
This completes the model answers for all questions from Q1 to Q12.
