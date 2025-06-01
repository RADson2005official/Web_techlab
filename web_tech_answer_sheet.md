# Web Technology Exam Answer Sheet
## BTL 3 Apply Level Questions

### Question 1
**a) Explain the different types of web application.**

**Types of Web Applications:**

1. **Static Web Applications**
   - Fixed content, HTML/CSS files
   - No server-side processing
   - Example: Portfolio websites

2. **Dynamic Web Applications**
   - Content changes based on user interaction
   - Server-side scripting (PHP, JSP)
   - Database connectivity

3. **E-commerce Applications**
   - Online shopping functionality
   - Payment gateway integration
   - User authentication, cart management

4. **Portal Web Applications**
   - Multiple services in one platform
   - User dashboards, content management
   - Example: Government portals

5. **Content Management Systems**
   - User-friendly content editing
   - Template-based design
   - Example: WordPress, Drupal

**b) What is web architecture? Explain the phases of website development.**

**Web Architecture:** The structural design of web applications including client-server model, database integration, and component interaction.

**Website Development Phases:**

1. **Planning Phase**
   - Requirement analysis
   - Project scope definition
   - Technology selection

2. **Design Phase**
   - UI/UX design
   - Database design
   - System architecture

3. **Development Phase**
   - Frontend development
   - Backend development
   - Database implementation

4. **Testing Phase**
   - Unit testing
   - Integration testing
   - User acceptance testing

5. **Deployment Phase**
   - Server setup
   - Domain configuration
   - Go-live process

6. **Maintenance Phase**
   - Bug fixes
   - Updates and enhancements
   - Performance monitoring

### Question 2
**a) What is Search Engine? Explain the different component of Search Engine.**

**Search Engine:** A software system designed to search and retrieve information from the World Wide Web based on user queries.

**Components of Search Engine:**

1. **Web Crawler (Spider)**
   - Automatically browses web pages
   - Follows links to discover new content
   - Updates index regularly

2. **Indexer**
   - Processes crawled web pages
   - Creates searchable index
   - Stores keywords and metadata

3. **Search Interface**
   - User query input system
   - Search box and filters
   - Results display mechanism

4. **Ranking Algorithm**
   - Determines result relevance
   - Page ranking based on multiple factors
   - Quality and authority assessment

5. **Database**
   - Stores indexed web pages
   - Maintains search results
   - User query history

**b) What is Browser? Explain the different features of web servers.**

**Browser:** A software application used to access and display web pages from the internet.

**Web Server Features:**

1. **HTTP Protocol Support**
   - Handles HTTP requests/responses
   - Supports HTTPS for security
   - Multiple HTTP methods (GET, POST, PUT, DELETE)

2. **Static Content Delivery**
   - Serves HTML, CSS, JavaScript files
   - Image and media file handling
   - Fast file transfer capabilities

3. **Dynamic Content Processing**
   - Server-side scripting support (PHP, JSP)
   - Database connectivity
   - Real-time content generation

4. **Security Features**
   - SSL/TLS encryption
   - Authentication mechanisms
   - Access control and permissions

5. **Performance Optimization**
   - Caching mechanisms
   - Load balancing
   - Compression support

6. **Logging and Monitoring**
   - Access logs
   - Error tracking
   - Performance metrics

### Question 3
**a) Apply external JavaScript to display welcome message on webpage using HTML onclick event.**

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Welcome Message</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Welcome Page</h1>
    <button onclick="showWelcome()">Click for Welcome Message</button>
    <div id="message"></div>
</body>
</html>
```

**script.js:**
```javascript
function showWelcome() {
    document.getElementById("message").innerHTML = 
        "<h2 style='color: blue;'>Welcome to Our Website!</h2>";
}
```

**b) Use JavaScript Object to store employee id, name, salary and display it on webpage.**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Employee Details</title>
</head>
<body>
    <h2>Employee Information</h2>
    <button onclick="displayEmployee()">Show Employee Details</button>
    <div id="empDetails"></div>

    <script>
        // JavaScript Object for employee
        var employee = {
            id: 101,
            name: "John Smith",
            salary: 50000,
            
            displayInfo: function() {
                return "ID: " + this.id + "<br>" +
                       "Name: " + this.name + "<br>" +
                       "Salary: $" + this.salary;
            }
        };

        function displayEmployee() {
            document.getElementById("empDetails").innerHTML = employee.displayInfo();
        }
    </script>
</body>
</html>
```

### Question 4
**a) Write a program in JavaScript and HTML to accept two numbers from user and display multiplication of it using alert window.**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Multiplication Calculator</title>
</head>
<body>
    <h2>Multiplication Calculator</h2>
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <button onclick="multiply()">Calculate</button>

    <script>
        function multiply() {
            var number1 = parseInt(document.getElementById("num1").value);
            var number2 = parseInt(document.getElementById("num2").value);
            
            if(isNaN(number1) || isNaN(number2)) {
                alert("Please enter valid numbers!");
                return;
            }
            
            var result = number1 * number2;
            alert("Result: " + number1 + " × " + number2 + " = " + result);
        }
    </script>
</body>
</html>
```

**b) Use jQuery to hide the paragraph on HTML using button.**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hide Paragraph with jQuery</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <h2>jQuery Hide Example</h2>
    <p id="myParagraph">This paragraph will be hidden when you click the button below.</p>
    <button id="hideBtn">Hide Paragraph</button>
    <button id="showBtn">Show Paragraph</button>

    <script>
        $(document).ready(function() {
            $("#hideBtn").click(function() {
                $("#myParagraph").hide();
            });
            
            $("#showBtn").click(function() {
                $("#myParagraph").show();
            });
        });
    </script>
</body>
</html>
```

### Question 5
**a) Write a program in PHP to create login form and store the username and password in session and retrieve it on other form.**

**login.php:**
```php
<?php
session_start();

if($_POST['submit']) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;
    
    header("Location: welcome.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head><title>Login Form</title></head>
<body>
    <h2>Login Form</h2>
    <form method="post" action="">
        Username: <input type="text" name="username" required><br><br>
        Password: <input type="password" name="password" required><br><br>
        <input type="submit" name="submit" value="Login">
    </form>
</body>
</html>
```

**welcome.php:**
```php
<?php
session_start();

if(!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head><title>Welcome Page</title></head>
<body>
    <h2>Welcome Page</h2>
    <p>Username: <?php echo $_SESSION['username']; ?></p>
    <p>Password: <?php echo $_SESSION['password']; ?></p>
    <a href="logout.php">Logout</a>
</body>
</html>
```

**logout.php:**
```php
<?php
session_start();
session_destroy();
header("Location: login.php");
?>
```

**b) Use PHP and MySQL connectivity to store the book details like book_id, book_name, author, price and quantity into database table ebookshop.**

```php
<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ebookshop";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Process form submission
if($_POST['submit']) {
    $book_id = $_POST['book_id'];
    $book_name = $_POST['book_name'];
    $author = $_POST['author'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    
    $sql = "INSERT INTO books (book_id, book_name, author, price, quantity) 
            VALUES ('$book_id', '$book_name', '$author', '$price', '$quantity')";
    
    if (mysqli_query($conn, $sql)) {
        echo "<p style='color:green'>Book details stored successfully!</p>";
    } else {
        echo "<p style='color:red'>Error: " . mysqli_error($conn) . "</p>";
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head><title>Book Entry Form</title></head>
<body>
    <h2>Add Book Details</h2>
    <form method="post" action="">
        Book ID: <input type="text" name="book_id" required><br><br>
        Book Name: <input type="text" name="book_name" required><br><br>
        Author: <input type="text" name="author" required><br><br>
        Price: <input type="number" step="0.01" name="price" required><br><br>
        Quantity: <input type="number" name="quantity" required><br><br>
        <input type="submit" name="submit" value="Add Book">
    </form>
</body>
</html>
```

**Database Table Creation:**
```sql
CREATE TABLE books (
    book_id VARCHAR(10) PRIMARY KEY,
    book_name VARCHAR(100) NOT NULL,
    author VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL
);
```

### Question 6
**a) Write a program in PHP using MySQL to update the student's details like roll_no, name, email and marks into the database table student_details.**

```php
<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "school";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Fetch existing student data for editing
if(isset($_GET['roll_no'])) {
    $roll_no = $_GET['roll_no'];
    $result = mysqli_query($conn, "SELECT * FROM student_details WHERE roll_no = '$roll_no'");
    $student = mysqli_fetch_assoc($result);
}

// Process form submission for update
if($_POST['update']) {
    $roll_no = $_POST['roll_no'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $marks = $_POST['marks'];
    
    $sql = "UPDATE student_details SET 
            name = '$name', 
            email = '$email', 
            marks = '$marks' 
            WHERE roll_no = '$roll_no'";
    
    if (mysqli_query($conn, $sql)) {
        echo "<p style='color:green'>Student details updated successfully!</p>";
    } else {
        echo "<p style='color:red'>Error: " . mysqli_error($conn) . "</p>";
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head><title>Update Student Details</title></head>
<body>
    <h2>Update Student Information</h2>
    <form method="post" action="">
        Roll No: <input type="text" name="roll_no" value="<?php echo isset($student) ? $student['roll_no'] : ''; ?>" readonly><br><br>
        Name: <input type="text" name="name" value="<?php echo isset($student) ? $student['name'] : ''; ?>" required><br><br>
        Email: <input type="email" name="email" value="<?php echo isset($student) ? $student['email'] : ''; ?>" required><br><br>
        Marks: <input type="number" name="marks" value="<?php echo isset($student) ? $student['marks'] : ''; ?>" required><br><br>
        <input type="submit" name="update" value="Update Student">
    </form>
    
    <!-- Display all students -->
    <h3>All Students:</h3>
    <?php
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    $result = mysqli_query($conn, "SELECT * FROM student_details");
    
    echo "<table border='1'>";
    echo "<tr><th>Roll No</th><th>Name</th><th>Email</th><th>Marks</th><th>Action</th></tr>";
    
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row['roll_no'] . "</td>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['email'] . "</td>";
        echo "<td>" . $row['marks'] . "</td>";
        echo "<td><a href='?roll_no=" . $row['roll_no'] . "'>Edit</a></td>";
        echo "</tr>";
    }
    echo "</table>";
    
    mysqli_close($conn);
    ?>
</body>
</html>
```

**Database Table Creation:**
```sql
CREATE TABLE student_details (
    roll_no VARCHAR(10) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    marks INT NOT NULL
);
```

---
**Note:** All answers are designed for BTL 3 Apply level, focusing on practical implementation with minimal yet complete code examples suitable for written examination.

### Question 6
**b) Use multidimensional array in PHP to store book title, editor and author of three different books and display it using for loop.**

```php
<?php
$books = array(
    array("PHP Basics", "John Editor", "Alice Author"),
    array("Web Development", "Mary Editor", "Bob Author"), 
    array("Database Design", "Tom Editor", "Carol Author")
);

for($i = 0; $i < count($books); $i++) {
    echo "Book " . ($i+1) . ":<br>";
    echo "Title: " . $books[$i][0] . "<br>";
    echo "Editor: " . $books[$i][1] . "<br>";
    echo "Author: " . $books[$i][2] . "<br><br>";
}
?>
```

### Question 7
**a) What is CMS? Explain the features of Content Management System.**

**CMS (Content Management System):** A software application that allows users to create, manage, and modify digital content without requiring technical knowledge.

**Features:**
- User-friendly interface for content creation
- Template-based design system
- User role management and permissions
- SEO optimization tools
- Plugin/extension support
- Media management capabilities
- Version control and content scheduling
- Multi-user collaboration

**b) Explain the following terms with respect to WordPress:**
**a) File and Directory structure**
- wp-content/ - themes, plugins, uploads
- wp-admin/ - admin dashboard files
- wp-includes/ - core WordPress files
- wp-config.php - configuration file
- index.php - main entry point

**b) WordPress in Enterprise**
- Scalable content management
- Multi-site management
- Advanced user roles
- Enterprise-level security
- Custom development capabilities
- Integration with business systems

### Question 8
**a) Explain the directory structure of WordPress.**

```
WordPress Root/
├── wp-admin/          (Administration files)
├── wp-content/        (Themes, plugins, uploads)
│   ├── themes/
│   ├── plugins/
│   └── uploads/
├── wp-includes/       (Core WordPress files)
├── wp-config.php      (Configuration file)
├── index.php          (Main entry point)
├── .htaccess          (URL rewriting rules)
└── wp-load.php        (Bootstrap file)
```

**b) What is WordPress? Explain the features of WordPress.**

**WordPress:** Open-source CMS written in PHP, primarily used for creating websites and blogs.

**Features:**
- Easy installation and setup
- Responsive themes
- Plugin architecture
- Built-in SEO features
- Multi-user support
- Media management
- Comment system
- RSS feed generation
- Customizable permalinks

### Question 9
**a) Create a servlet by implementing the Servlet interface to display "Hello Servlet" message on webpage. Write the deployment descriptor web.xml file.**

**HelloServlet.java:**
```java
import java.io.*;
import javax.servlet.*;

public class HelloServlet implements Servlet {
    ServletConfig config;
    
    public void init(ServletConfig config) {
        this.config = config;
    }
    
    public void service(ServletRequest req, ServletResponse res) 
        throws ServletException, IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h1>Hello Servlet</h1>");
    }
    
    public void destroy() {}
    public ServletConfig getServletConfig() { return config; }
    public String getServletInfo() { return "Hello Servlet"; }
}
```

**web.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app>
    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>HelloServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
</web-app>
```

**b) Use JDBC to display book details like book_id, book_name and book_author from MySQL database using HttpServlet.**

```java
import java.io.*;
import javax.servlet.http.*;
import java.sql.*;

public class BookServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res) 
        throws ServletException, IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/library", "root", "password");
            
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM books");
            
            out.println("<table border='1'>");
            out.println("<tr><th>Book ID</th><th>Book Name</th><th>Author</th></tr>");
            
            while(rs.next()) {
                out.println("<tr>");
                out.println("<td>" + rs.getInt("book_id") + "</td>");
                out.println("<td>" + rs.getString("book_name") + "</td>");
                out.println("<td>" + rs.getString("book_author") + "</td>");
                out.println("</tr>");
            }
            out.println("</table>");
            con.close();
        } catch(Exception e) {
            out.println("Error: " + e);
        }
    }
}
```

### Question 10
**a) Design Login form with username and password in html, Read and display username and password of html using HttpServlet.**

**login.html:**
```html
<!DOCTYPE html>
<html>
<head><title>Login Form</title></head>
<body>
    <form action="LoginServlet" method="post">
        Username: <input type="text" name="username"><br><br>
        Password: <input type="password" name="password"><br><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>
```

**LoginServlet.java:**
```java
import java.io.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {
    public void doPost(HttpServletRequest req, HttpServletResponse res) 
        throws ServletException, IOException {
        
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        
        out.println("<h2>Login Details:</h2>");
        out.println("Username: " + username + "<br>");
        out.println("Password: " + password);
    }
}
```

**b) Write a program using HttpServlet to create cookies and display name, value on webpage.**

```java
import java.io.*;
import javax.servlet.http.*;

public class CookieServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res) 
        throws ServletException, IOException {
        
        // Create cookies
        Cookie c1 = new Cookie("username", "john");
        Cookie c2 = new Cookie("theme", "dark");
        
        res.addCookie(c1);
        res.addCookie(c2);
        
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        
        // Display cookies
        Cookie[] cookies = req.getCookies();
        out.println("<h2>Cookie Details:</h2>");
        
        if(cookies != null) {
            for(Cookie cookie : cookies) {
                out.println("Name: " + cookie.getName() + 
                           ", Value: " + cookie.getValue() + "<br>");
            }
        }
    }
}
```

### Question 11
**a) Apply Model-View-Controller paradigm to display login successful and login error messages using JSP.**

**LoginController.java:**
```java
import java.io.*;
import javax.servlet.http.*;

public class LoginController extends HttpServlet {
    public void doPost(HttpServletRequest req, HttpServletResponse res) 
        throws ServletException, IOException {
        
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        
        if("admin".equals(username) && "admin123".equals(password)) {
            req.setAttribute("message", "Login Successful");
            req.getRequestDispatcher("success.jsp").forward(req, res);
        } else {
            req.setAttribute("message", "Login Failed");
            req.getRequestDispatcher("error.jsp").forward(req, res);
        }
    }
}
```

**success.jsp:**
```jsp
<%@ page language="java" %>
<html>
<body>
    <h2 style="color:green">${message}</h2>
    <p>Welcome to the dashboard!</p>
</body>
</html>
```

**error.jsp:**
```jsp
<%@ page language="java" %>
<html>
<body>
    <h2 style="color:red">${message}</h2>
    <a href="login.html">Try Again</a>
</body>
</html>
```

**b) Write a program in JSP to find the square of the given number using JSP declaration tag. Write the directory structure of JSP program.**

**square.jsp:**
```jsp
<%@ page language="java" %>
<%!
    public int findSquare(int num) {
        return num * num;
    }
%>
<html>
<body>
    <h2>Square Calculator</h2>
    <%
        int number = 5;
        int result = findSquare(number);
    %>
    <p>Square of <%= number %> is <%= result %></p>
</body>
</html>
```

**Directory Structure:**
```
WebApp/
├── WEB-INF/
│   ├── web.xml
│   ├── classes/
│   └── lib/
├── square.jsp
├── login.html
└── index.html
```

### Question 12
**a) Use struts MVC to display product_id, product_name and product_price provided by the input page.**

**Product.java (Model):**
```java
public class Product {
    private String productId;
    private String productName;
    private double productPrice;
    
    // Getters and Setters
    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }
    
    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }
    
    public double getProductPrice() { return productPrice; }
    public void setProductPrice(double productPrice) { this.productPrice = productPrice; }
}
```

**ProductAction.java:**
```java
import com.opensymphony.xwork2.ActionSupport;

public class ProductAction extends ActionSupport {
    private Product product = new Product();
    
    public String execute() {
        return "success";
    }
    
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
}
```

**struts.xml:**
```xml
<struts>
    <package name="product" extends="struts-default">
        <action name="showProduct" class="ProductAction">
            <result name="success">/display.jsp</result>
        </action>
    </package>
</struts>
```

**display.jsp:**
```jsp
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<body>
    <h2>Product Details</h2>
    <p>Product ID: <s:property value="product.productId"/></p>
    <p>Product Name: <s:property value="product.productName"/></p>
    <p>Product Price: <s:property value="product.productPrice"/></p>
</body>
</html>
```

**b) Write a program in JSP to perform multiplication of two numbers using JSP declarative tag. Write the directory structure of JSP program.**

**multiplication.jsp:**
```jsp
<%@ page language="java" %>
<%!
    public int multiply(int a, int b) {
        return a * b;
    }
%>
<html>
<body>
    <h2>Multiplication Calculator</h2>
    <%
        int num1 = 8;
        int num2 = 6;
        int result = multiply(num1, num2);
    %>
    <p><%= num1 %> × <%= num2 %> = <%= result %></p>
</body>
</html>
```

**JSP Directory Structure:**
```
WebApplication/
├── WEB-INF/
│   ├── web.xml
│   ├── classes/
│   │   └── (compiled servlets)
│   ├── lib/
│   │   └── (JAR files)
│   └── src/
├── multiplication.jsp
├── META-INF/
└── index.html
```

---

