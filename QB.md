Okay, Professor! Based on the syllabus documents provided (IT318 Web Technology Laboratory, including the assignment list, and the PowerPoint slides), I've prepared a new question bank with answers covering similar concepts but with different scenarios. This should help students prepare more broadly.

The questions are framed keeping the "Apply" level (Bloom's Taxonomy Level 3) in mind.

---

**Web Technology Laboratory (IT318) - Additional Question Bank**

---

**Section 1: HTML, CSS & Client-Side Scripting (JavaScript, AngularJS)**

**Q1. HTML & CSS Application**
**(a) Design an HTML page for a simple blog post layout. The page should include:**
    *   A main heading for the blog post title.
    *   A paragraph for the author's name and publication date.
    *   Several paragraphs for the blog content.
    *   An image relevant to the blog post.
    *   A comments section with a heading and a simple form (name, comment textarea, submit button).
**(b) Write External CSS to style the blog post page with the following specifications:**
    *   The main heading should be centered and have a specific font family (e.g., Arial).
    *   The author/date paragraph should be italicized and have a smaller font size.
    *   The blog content paragraphs should have a line height of 1.6.
    *   The image should be centered and have a maximum width of 80%.
    *   The comments section form inputs should have a light gray border.

**Answer:**

**(a) `blog_post.html`:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Blog Post</title>
    <link rel="stylesheet" href="blog_style.css">
</head>
<body>
    <article>
        <header>
            <h1>Understanding Modern Web Design</h1>
            <p class="author-info">By Jane Doe - Published on June 1, 2025</p>
        </header>

        <img src="sample_image.jpg" alt="Web Design Abstract Image">

        <section class="blog-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section class="comments-section">
            <h2>Comments</h2>
            <form action="#" method="post">
                <div>
                    <label for="commentName">Name:</label><br>
                    <input type="text" id="commentName" name="commentName" required>
                </div>
                <div>
                    <label for="commentText">Comment:</label><br>
                    <textarea id="commentText" name="commentText" rows="4" required></textarea>
                </div>
                <button type="submit">Submit Comment</button>
            </form>
        </section>
    </article>
</body>
</html>
```

**(b) `blog_style.css`:**
```css
body {
    font-family: Georgia, serif;
    margin: 20px;
    color: #333;
}

article header h1 {
    text-align: center;
    font-family: Arial, sans-serif;
    color: #2c3e50;
}

.author-info {
    font-style: italic;
    font-size: 0.9em;
    text-align: center;
    color: #7f8c8d;
}

article img {
    display: block;
    margin: 20px auto;
    max-width: 80%;
    height: auto;
    border-radius: 5px;
}

.blog-content p {
    line-height: 1.6;
    text-align: justify;
}

.comments-section {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #eee;
}

.comments-section h2 {
    font-family: Arial, sans-serif;
}

.comments-section form div {
    margin-bottom: 10px;
}

.comments-section input[type="text"],
.comments-section textarea {
    width: calc(100% - 22px); /* Adjust for padding and border */
    padding: 10px;
    border: 1px solid #ccc; /* Light gray border */
    border-radius: 4px;
}

.comments-section button {
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.comments-section button:hover {
    background-color: #2980b9;
}
```
*(Note: `sample_image.jpg` should exist for the image to display).*

---

**Q2. JavaScript DOM Manipulation and Validation**
**(a) Create an HTML page with an image and two buttons: "Increase Size" and "Decrease Size". Write JavaScript functions to increase and decrease the displayed image's width by 10 pixels respectively on each button click. Ensure the width does not go below 50px or above 500px.**
**(b) Add a text input field for "Username" and a submit button. Write a JavaScript validation function that on submit, checks if the username field is empty or contains less than 5 characters. If it is, display an alert message and prevent form submission.**

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Image and Form</title>
    <style>
        #myImage { transition: width 0.3s ease; }
    </style>
</head>
<body>
    <h2>Image Resizer</h2>
    <img id="myImage" src="sample_icon.png" alt="Sample Icon" width="200"> <br><br>
    <button onclick="increaseImageSize()">Increase Size</button>
    <button onclick="decreaseImageSize()">Decrease Size</button>

    <hr>
    <h2>Username Validation</h2>
    <form id="myForm" onsubmit="return validateUsername()">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <input type="submit" value="Submit">
    </form>

    <script>
        const myImage = document.getElementById('myImage');
        const minWidth = 50;
        const maxWidth = 500;

        function increaseImageSize() {
            let currentWidth = myImage.width;
            if (currentWidth < maxWidth) {
                myImage.width = currentWidth + 10;
            } else {
                alert("Maximum image size reached (500px).");
            }
        }

        function decreaseImageSize() {
            let currentWidth = myImage.width;
            if (currentWidth > minWidth) {
                myImage.width = currentWidth - 10;
            } else {
                alert("Minimum image size reached (50px).");
            }
        }

        function validateUsername() {
            const usernameInput = document.getElementById('username');
            const username = usernameInput.value.trim();

            if (username === "") {
                alert("Username field cannot be empty.");
                usernameInput.focus();
                return false; // Prevent form submission
            }
            if (username.length < 5) {
                alert("Username must be at least 5 characters long.");
                usernameInput.focus();
                return false; // Prevent form submission
            }
            alert("Username is valid! Form would submit."); // For demonstration
            return true; // Allow form submission (or false to prevent for demo)
        }
    </script>
</body>
</html>
```*(Note: `sample_icon.png` should exist for the image to display).*

---

**Q3. AngularJS Application**
**Create an AngularJS application that displays a list of tasks. The user should be able to add a new task to the list using an input field and a button. Also, allow users to remove a task by clicking on it.**

**Answer:**```html
<!DOCTYPE html>
<html ng-app="todoApp">
<head>
    <title>AngularJS To-Do List</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <style>
        .task-item { cursor: pointer; margin: 5px 0; padding: 5px; background-color: #f9f9f9; border: 1px solid #eee;}
        .task-item:hover { background-color: #f0f0f0; text-decoration: line-through; color: red;}
    </style>
    <script>
        var app = angular.module('todoApp', []);
        app.controller('todoCtrl', function($scope) {
            $scope.tasks = [
                { text: 'Learn AngularJS basics', done: false },
                { text: 'Build a sample To-Do app', done: false }
            ];
            $scope.newTaskText = '';

            $scope.addTask = function() {
                if ($scope.newTaskText) {
                    $scope.tasks.push({ text: $scope.newTaskText, done: false });
                    $scope.newTaskText = ''; // Clear the input field
                } else {
                    alert("Task cannot be empty!");
                }
            };

            $scope.removeTask = function(taskToRemove) {
                var index = $scope.tasks.indexOf(taskToRemove);
                if (index > -1) {
                    $scope.tasks.splice(index, 1);
                }
            };
        });
    </script>
</head>
<body ng-controller="todoCtrl">
    <h2>My To-Do List</h2>

    <form ng-submit="addTask()">
        <input type="text" ng-model="newTaskText" placeholder="Enter new task" size="30">
        <button type="submit">Add Task</button>
    </form>

    <p ng-if="tasks.length === 0">No tasks yet! Add one above.</p>
    <ul>
        <li ng-repeat="task in tasks" ng-click="removeTask(task)" class="task-item" title="Click to remove">
            {{ task.text }}
        </li>
    </ul>
</body>
</html>
```

---

**Section 2: Server-Side Technologies (Servlets, JSP, PHP & MySQL)**

**Q4. Servlet for Dynamic Content Generation**
**Write a Servlet that generates a simple dynamic greeting message based on the time of day. If the current time is before 12 PM, it should say "Good Morning, [Username]!"; between 12 PM and 6 PM "Good Afternoon, [Username]!"; and after 6 PM "Good Evening, [Username]!". The username should be passed as a request parameter.**

**Answer:**
```java
// GreetingServlet.java
// Assuming package com.example;
package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Calendar;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/greetUser")
public class GreetingServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");
        if (username == null || username.trim().isEmpty()) {
            username = "Guest";
        }

        Calendar cal = Calendar.getInstance();
        int hourOfDay = cal.get(Calendar.HOUR_OF_DAY);
        String greeting;

        if (hourOfDay < 12) {
            greeting = "Good Morning";
        } else if (hourOfDay < 18) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }

        out.println("<!DOCTYPE html>");
        out.println("<html><head><title>Dynamic Greeting</title></head><body>");
        out.println("<h1>" + greeting + ", " + username + "!</h1>");
        out.println("<p>Current server time was used to determine the greeting.</p>");
        out.println("</body></html>");
        out.close();
    }
}
```
**To test:** Access via URL like `/greetUser?username=YourName`

---

**Q5. JSP for Database Interaction**
**Create a JSP page that connects to a MySQL database (assume a table `products` with columns `product_id` (INT), `product_name` (VARCHAR), `price` (DECIMAL)). The JSP should retrieve all products whose price is greater than a value entered by the user in an HTML form (on the same page or a preceding page) and display them in an HTML table.**

**Answer:**
```jsp
<%-- products_by_price.jsp --%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*, java.util.*" %>
<!DOCTYPE html>
<html>
<head>
    <title>Products by Price</title>
    <style> table, th, td { border: 1px solid black; border-collapse: collapse; padding: 5px; } </style>
</head>
<body>
    <h2>Filter Products by Minimum Price</h2>
    <form method="get">
        Minimum Price: <input type="number" name="min_price" step="0.01" 
                               value="<%= request.getParameter("min_price") != null ? request.getParameter("min_price") : "" %>" required>
        <input type="submit" value="Show Products">
    </form>
    <hr>

<%
    String minPriceStr = request.getParameter("min_price");
    if (minPriceStr != null && !minPriceStr.isEmpty()) {
        double minPrice = 0;
        try {
            minPrice = Double.parseDouble(minPriceStr);
        } catch (NumberFormatException e) {
            out.println("<p style='color:red;'>Invalid price entered.</p>");
            return; // Stop further processing
        }

        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        String jdbcUrl = "jdbc:mysql://localhost:3306/your_database_name"; // Replace with your DB name
        String dbUser = "your_db_user"; // Replace
        String dbPassword = "your_db_password"; // Replace

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword);

            String sql = "SELECT product_id, product_name, price FROM products WHERE price > ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setDouble(1, minPrice);
            rs = pstmt.executeQuery();

            if (!rs.isBeforeFirst()) { // Check if ResultSet is empty
                out.println("<p>No products found above the price of $" + String.format("%.2f", minPrice) + ".</p>");
            } else {
%>
    <h3>Products with Price > $<%= String.format("%.2f", minPrice) %></h3>
    <table>
        <tr><th>Product ID</th><th>Product Name</th><th>Price</th></tr>
<%
                while (rs.next()) {
%>
        <tr>
            <td><%= rs.getInt("product_id") %></td>
            <td><%= rs.getString("product_name") %></td>
            <td><%= String.format("%.2f", rs.getDouble("price")) %></td>
        </tr>
<%
                }
%>
    </table>
<%
            } // End of else (ResultSet not empty)
        } catch (Exception e) {
            out.println("<p style='color:red;'>Database Error: " + e.getMessage() + "</p>");
            e.printStackTrace(out);
        } finally {
            if (rs != null) try { rs.close(); } catch (SQLException ignore) {}
            if (pstmt != null) try { pstmt.close(); } catch (SQLException ignore) {}
            if (conn != null) try { conn.close(); } catch (SQLException ignore) {}
        }
    } // End of if (minPriceStr is not null)
%>
</body>
</html>
```

---

**Q6. PHP and MySQL for a Simple CRUD Operation (Delete)**
**Assume you have a `users` table in MySQL (`user_id` INT PK, `username` VARCHAR, `email` VARCHAR). Write a PHP script that:**
    *   Displays all users from the `users` table in an HTML table.
    *   Each row should have a "Delete" link/button next to it.
    *   When the "Delete" link/button is clicked for a specific user, that user's record should be deleted from the database, and the page should refresh to show the updated list.

**Answer:**
```php
<?php
// user_management.php

// Database connection details
$servername = "localhost";
$username_db = "your_db_user"; // Replace
$password_db = "your_db_password"; // Replace
$dbname = "your_database_name"; // Replace

// Create connection
$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle delete request
if (isset($_GET['delete_id'])) {
    $userIdToDelete = intval($_GET['delete_id']); // Sanitize input
    $deleteSql = "DELETE FROM users WHERE user_id = ?";
    $stmt = $conn->prepare($deleteSql);
    $stmt->bind_param("i", $userIdToDelete);
    if ($stmt->execute()) {
        echo "<p style='color:green;'>User deleted successfully.</p>";
    } else {
        echo "<p style='color:red;'>Error deleting user: " . $stmt->error . "</p>";
    }
    $stmt->close();
    // Redirect to the same page to refresh the list (optional, can also just re-fetch)
    // header("Location: user_management.php"); 
    // exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Management</title>
    <style> table, th, td { border: 1px solid black; border-collapse: collapse; padding: 8px; } </style>
</head>
<body>
    <h2>User List</h2>
    <table>
        <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
        <?php
        $sql = "SELECT user_id, username, email FROM users";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . htmlspecialchars($row["user_id"]) . "</td>";
                echo "<td>" . htmlspecialchars($row["username"]) . "</td>";
                echo "<td>" . htmlspecialchars($row["email"]) . "</td>";
                echo "<td><a href='user_management.php?delete_id=" . $row["user_id"] . "' onclick='return confirm(\"Are you sure you want to delete this user?\");'>Delete</a></td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No users found</td></tr>";
        }
        ?>
    </table>
    <?php $conn->close(); ?>
</body>
</html>
```

---

**Section 3: Frameworks & Advanced Concepts**

**Q7. Struts Framework Concept**
**Explain the role of the `ActionForm` bean and the `Action` class in the Struts 1.x framework. How do they interact to handle a user request? Provide a conceptual outline (no full code needed).**

**Answer:**
In the Struts 1.x framework:

*   **`ActionForm` Bean:**
    *   **Role:** An `ActionForm` bean (a JavaBean that extends `org.apache.struts.action.ActionForm`) is used to capture and validate user input from an HTML form.
    *   **Functionality:** When a user submits a form, Struts automatically populates an instance of the `ActionForm` associated with that form using the request parameters. The names of the form fields in HTML typically match the property names in the `ActionForm` bean.
    *   It often contains a `validate()` method that Struts calls to perform server-side validation of the form data. If validation fails, Struts can automatically forward the user back to the input page with error messages.
    *   It essentially acts as a data transfer object (DTO) between the View (HTML form) and the Controller (`Action` class).

*   **`Action` Class:**
    *   **Role:** An `Action` class (a class that extends `org.apache.struts.action.Action`) acts as the Controller component in the MVC pattern. It handles the user's request, interacts with the Model (business logic/backend services), and determines the next View to be displayed.
    *   **Functionality:** The Struts controller servlet (`ActionServlet`) receives the request, identifies the appropriate `Action` class to handle it based on `struts-config.xml` mappings, and then invokes the `execute()` method of that `Action` class.
    *   The `execute()` method receives the populated `ActionForm` bean as an argument, along with `HttpServletRequest`, `HttpServletResponse`, and an `ActionMapping` object.

*   **Interaction:**
    1.  User submits an HTML form.
    2.  The `ActionServlet` (Struts Controller) receives the request.
    3.  Struts creates/reuses an instance of the `ActionForm` bean configured for this request and populates its properties with the submitted form data.
    4.  Struts calls the `validate()` method of the `ActionForm` (if defined).
        *   If validation fails, Struts typically forwards the request back to the input page (as specified in `struts-config.xml`) to display error messages. The `ActionForm` bean, with its current data and errors, is made available to this page.
    5.  If validation succeeds (or no validation is performed), Struts calls the `execute()` method of the corresponding `Action` class.
    6.  The `Action` class's `execute()` method receives the populated and validated `ActionForm` bean. It can access the user's input data from this bean.
    7.  The `Action` class performs business logic, potentially interacting with backend services or databases using the data from the `ActionForm`.
    8.  Based on the outcome of the business logic, the `Action` class returns an `ActionForward` object. This object tells Struts which View (e.g., a JSP page) to display next. Data needed by the next View can be placed in request or session scope by the `Action` class.

This separation ensures that form data handling and validation are encapsulated in the `ActionForm`, while request processing logic is in the `Action` class.

---

**Q8. WordPress: Theme Customization**
**Explain two common ways a WordPress user can customize the appearance of their website theme without directly editing core theme PHP files. What is the purpose of a child theme in this context?**

**Answer:**
Two common ways to customize a WordPress theme's appearance without editing core theme PHP files are:

1.  **Using the WordPress Customizer:**
    *   **Explanation:** The WordPress Customizer (Appearance > Customize in the admin dashboard) provides a live preview interface for making changes to the theme's appearance. The options available depend on what the theme developer has enabled.
    *   **Common Customizations:**
        *   **Site Identity:** Changing the site title, tagline, logo, and site icon (favicon).
        *   **Colors:** Modifying header text color, background color, accent colors.
        *   **Typography:** Selecting different fonts and font sizes for headings and body text.
        *   **Header/Footer:** Customizing header image, layout, or footer widgets/copyright text.
        *   **Menus:** Creating and assigning navigation menus to theme locations.
        *   **Widgets:** Adding, removing, and configuring widgets in sidebars, footers, and other widgetized areas.
        *   **Homepage Settings:** Choosing whether the homepage displays latest posts or a static page.
        *   **Additional CSS:** Most themes offer a section in the Customizer to add custom CSS rules for fine-grained styling adjustments. These CSS changes are saved separately and override theme styles.

2.  **Using Theme Options Panel (if provided by the theme):**
    *   **Explanation:** Many premium themes, and some advanced free themes, come with their own dedicated "Theme Options" panel, usually found under "Appearance" or as a top-level menu item in the WordPress admin. This panel offers more extensive customization options specific to that theme, often beyond what's available in the standard Customizer.
    *   **Common Customizations:** These can be more extensive, such as specific layout controls for different page types, advanced color pickers for various elements, font selection from a wider range (e.g., Google Fonts integration), social media integration settings, custom script/code insertion areas, and more.

**Purpose of a Child Theme:**
A child theme in WordPress is a theme that inherits the functionality, features, and styling of another theme, called the parent theme. The primary purpose of a child theme in the context of customization is:

*   **Safe Updates:** It allows you to make modifications (like editing `style.css` or theme template files like `header.php`, `footer.php`, or adding custom functions in `functions.php`) without altering the parent theme's files directly. When the parent theme is updated, your customizations in the child theme are preserved and are not overwritten. If you modify the parent theme directly, any updates to that theme would wipe out your changes.
*   **Organized Customizations:** It keeps all your custom code (CSS, PHP, JavaScript) separate and organized in the child theme's folder, making it easier to manage and troubleshoot.
*   **Extend Functionality:** You can add new templates or modify existing ones from the parent theme by copying the respective file to the child theme and then editing it there. WordPress will use the child theme's version of the file.
*   **Learning & Development:** It's a good way to learn how themes work by starting with a solid parent theme and gradually modifying parts of it.

Essentially, a child theme is the recommended way to make significant structural or code-based customizations to a WordPress theme while ensuring those customizations are maintainable and update-proof. For minor CSS changes, the "Additional CSS" section in the Customizer is often sufficient.

---
This covers some different scenarios while still aligning with the core topics of your syllabus.
