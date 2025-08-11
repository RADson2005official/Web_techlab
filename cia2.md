
**MAHARASHTRA - Regular TY Exam May 2025**
**Subject: Web Technology (IT313)**
**exam type: CIA2
**Answer Sheet**

---

**Q.1 Attempt All**

**A. What is CMS? Explain the different advantages of CMS.** (4 Marks)

**Answer:**

**CMS (Content Management System):**
A Content Management System (CMS) is a software application or a set of related programs used to create, manage, and modify digital content without requiring specialized technical knowledge. It typically provides a user-friendly interface for content creation, editing, and publishing.

**Advantages of CMS:**
1.  **Ease of Use:** Allows non-technical users to manage website content easily through intuitive interfaces (e.g., WYSIWYG editors).
2.  **Collaboration:** Multiple users can work on content simultaneously with defined roles and permissions (e.g., author, editor, administrator).
3.  **SEO-Friendly Features:** Many CMS platforms offer built-in tools or plugins for search engine optimization, like managing meta tags, sitemaps, and URL structures.
4.  **Pre-designed Templates & Themes:** Offers a wide variety of templates and themes, enabling quick website design and customization.
5.  **Extensibility:** Functionality can be extended through plugins, modules, or extensions for features like e-commerce, forums, contact forms, etc.
6.  **Content Scheduling & Version Control:** Allows scheduling content publication and often includes version history to revert to previous versions.
7.  **Cost-Effective:** Many CMS options are open-source (e.g., WordPress, Joomla, Drupal), reducing initial development costs.

---

**B. Explain the different steps for the installation of Wordpress.** (4 Marks)

**Answer:**

**Steps for WordPress Installation:**

1.  **Download WordPress:**
    *   Go to the official WordPress website (wordpress.org) and download the latest version as a ZIP file.

2.  **Create a Database & User:**
    *   Access your web hosting control panel (e.g., cPanel) or use a tool like phpMyAdmin.
    *   Create a new MySQL/MariaDB database.
    *   Create a new database user and assign a strong password.
    *   Grant this user all privileges on the newly created database. Note down the database name, username, and password.

3.  **Upload WordPress Files:**
    *   Extract the downloaded WordPress ZIP file on your local computer.
    *   Upload the extracted WordPress files and folders to your web server's root directory (e.g., `public_html` or `htdocs`) or a subdirectory if installing there. This can be done using an FTP client (like FileZilla) or the File Manager in your hosting control panel.

4.  **Configure `wp-config.php`:**
    *   Navigate to the WordPress directory on your server.
    *   Locate `wp-config-sample.php`, rename it to `wp-config.php`.
    *   Open `wp-config.php` in a text editor and update the following database details:
        *   `DB_NAME`: Your database name.
        *   `DB_USER`: Your database username.
        *   `DB_PASSWORD`: Your database user password.
        *   `DB_HOST`: Usually `localhost`, but check with your host.
    *   You can also set unique security keys.

5.  **Run the Installation Script:**
    *   Open your web browser and navigate to your domain (or the subdirectory where you uploaded WordPress).
    *   The WordPress installation script will start automatically (e.g., `yourdomain.com/wp-admin/install.php`).

6.  **Provide Site Information:**
    *   Follow the on-screen prompts:
        *   **Site Title:** The name of your website.
        *   **Username:** Your desired admin username (avoid "admin").
        *   **Password:** A strong password for the admin account.
        *   **Your Email:** For admin notifications.
        *   **Search engine visibility:** Choose whether to discourage search engines from indexing (can be changed later).

7.  **Complete Installation & Login:**
    *   Click "Install WordPress."
    *   Once done, you'll see a success message. You can then log in to your WordPress admin dashboard using the username and password you created.

---

**Q.2 Attempt All**

**A. Use HTML to design Registration form with name, mobile, email and address. Read and display name, mobile, email and address of html using Httpservlet.** (5 Marks)

**Answer:**

**1. HTML Registration Form (`register.html`):**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
</head>
<body>
    <h2>User Registration</h2>
    <form action="RegisterServlet" method="post">
        Name: <input type="text" name="userName" required><br><br>
        Mobile: <input type="text" name="userMobile" required pattern="[0-9]{10}"><br><br>
        Email: <input type="email" name="userEmail" required><br><br>
        Address: <textarea name="userAddress" rows="4" cols="30" required></textarea><br><br>
        <input type="submit" value="Register">
    </form>
</body>
</html>
```

**2. `web.xml` (Deployment Descriptor for Servlet Mapping):**
```xml
<web-app>
    <servlet>
        <servlet-name>RegisterServlet</servlet-name>
        <servlet-class>com.example.RegisterServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>RegisterServlet</servlet-name>
        <url-pattern>/RegisterServlet</url-pattern>
    </servlet-mapping>
</web-app>
```
*(Place in `WEB-INF` folder)*

**3. `RegisterServlet.java` (HTTPServlet):**
```java
package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        // Read form parameters
        String name = request.getParameter("userName");
        String mobile = request.getParameter("userMobile");
        String email = request.getParameter("userEmail");
        String address = request.getParameter("userAddress");

        // Display received data
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Registration Details</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h2>Registered User Details:</h2>");
        out.println("<p><strong>Name:</strong> " + name + "</p>");
        out.println("<p><strong>Mobile:</strong> " + mobile + "</p>");
        out.println("<p><strong>Email:</strong> " + email + "</p>");
        out.println("<p><strong>Address:</strong> " + address + "</p>");
        out.println("</body>");
        out.println("</html>");
        out.close();
    }
}
```
*(Compile and place `RegisterServlet.class` in `WEB-INF/classes/com/example/` folder)*

---

**B. Use JDBC to display the employee details like emp_id, emp_name and emp_salary from MySQL database using Httpservlet.** (5 Marks)

**Answer:**

**Assumptions:**
*   MySQL database named `companydb`.
*   Table named `employees` with columns `emp_id` (INT), `emp_name` (VARCHAR), `emp_salary` (DECIMAL).
*   MySQL JDBC driver JAR is in `WEB-INF/lib`.

**1. `web.xml` (Deployment Descriptor for Servlet Mapping):**
```xml
<web-app>
    <servlet>
        <servlet-name>EmployeeServlet</servlet-name>
        <servlet-class>com.example.EmployeeServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>EmployeeServlet</servlet-name>
        <url-pattern>/ViewEmployees</url-pattern>
    </servlet-mapping>
</web-app>
```
*(Place in `WEB-INF` folder)*

**2. `EmployeeServlet.java` (HTTPServlet):**
```java
package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class EmployeeServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        String jdbcUrl = "jdbc:mysql://localhost:3306/companydb";
        String dbUser = "root"; // Replace with your DB username
        String dbPassword = "password"; // Replace with your DB password
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        out.println("<!DOCTYPE html><html><head><title>Employee Details</title></head><body>");
        out.println("<h2>Employee Details:</h2>");
        out.println("<table border='1'><tr><th>ID</th><th>Name</th><th>Salary</th></tr>");

        try {
            // 1. Load the JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Establish connection
            conn = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword);

            // 3. Create statement
            stmt = conn.createStatement();

            // 4. Execute query
            String sql = "SELECT emp_id, emp_name, emp_salary FROM employees";
            rs = stmt.executeQuery(sql);

            // 5. Process ResultSet
            while (rs.next()) {
                int id = rs.getInt("emp_id");
                String name = rs.getString("emp_name");
                double salary = rs.getDouble("emp_salary");
                out.println("<tr><td>" + id + "</td><td>" + name + "</td><td>" + salary + "</td></tr>");
            }
        } catch (Exception e) {
            out.println("<tr><td colspan='3'>Error: " + e.getMessage() + "</td></tr>");
            e.printStackTrace(out); // For debugging, prints stack trace to browser
        } finally {
            // 6. Close resources
            out.println("</table></body></html>");
            try { if (rs != null) rs.close(); } catch (Exception e) {}
            try { if (stmt != null) stmt.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
            out.close();
        }
    }
}
```
*(Compile and place `EmployeeServlet.class` in `WEB-INF/classes/com/example/` folder. Access via `/ViewEmployees` URL)*

---

**Q.3 Attempt All (As per Image 2)**

**A. Design a program in JSP to perform multiplication of two numbers using JSP declarative tag. Write the directory structure of JSP program.** (6 Marks)

**Answer:**

**1. `multiply.jsp`:**
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>JSP Multiplication</title>
</head>
<body>
    <h2>Multiplication of Two Numbers using JSP Declarative Tag</h2>

    <%!
        // JSP Declarative Tag to define a method
        public int multiplyNumbers(int num1, int num2) {
            return num1 * num2;
        }
    %>

    <form method="post">
        Enter Number 1: <input type="text" name="num1"><br><br>
        Enter Number 2: <input type="text" name="num2"><br><br>
        <input type="submit" value="Multiply">
    </form>

    <%
        String strNum1 = request.getParameter("num1");
        String strNum2 = request.getParameter("num2");

        if (strNum1 != null && strNum2 != null && !strNum1.isEmpty() && !strNum2.isEmpty()) {
            try {
                int number1 = Integer.parseInt(strNum1);
                int number2 = Integer.parseInt(strNum2);
                int result = multiplyNumbers(number1, number2); // Calling the declared method
    %>
                <h3>Result: <%= number1 %> * <%= number2 %> = <%= result %></h3>
    <%
            } catch (NumberFormatException e) {
    %>
                <p style="color:red;">Please enter valid integer numbers.</p>
    <%
            }
        }
    %>
</body>
</html>
```

**2. Directory Structure of JSP Program:**
A typical directory structure for a web application containing this JSP would be:

```
WebAppName/
|-- multiply.jsp
|-- WEB-INF/
|   |-- web.xml  (Deployment Descriptor - can be minimal or auto-generated for simple JSPs)
|   |-- classes/ (For compiled Java classes, if any servlets are used)
|   |-- lib/     (For JAR files like database drivers, etc.)
|-- index.html (Optional: an entry page that might link to multiply.jsp)
```
For this specific problem, `multiply.jsp` is the core. `web.xml` is generally present but might not need specific configuration for a standalone JSP unless advanced features or servlet interactions are involved.

---

**B. Use struts MVC to display product_id, product_name and product_price provided by the input page.** (6 Marks)

**Answer:**

**Assumptions:** Struts 1.x framework.

**1. Input JSP (`inputProduct.jsp`):**
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<!DOCTYPE html>
<html>
<head><title>Input Product Details</title></head>
<body>
    <h2>Enter Product Details</h2>
    <html:form action="/displayProduct">
        Product ID: <html:text property="productId" /><br/>
        Product Name: <html:text property="productName" /><br/>
        Product Price: <html:text property="productPrice" /><br/>
        <html:submit value="Display Product" />
    </html:form>
</body>
</html>
```

**2. ActionForm Bean (`ProductForm.java`):**
(Place in `src/com/example/form/` or similar, then compiled to `WEB-INF/classes/com/example/form/`)
```java
package com.example.form;

import org.apache.struts.action.ActionForm;
// import org.apache.struts.action.ActionMapping; // For validate()
// import javax.servlet.http.HttpServletRequest; // For validate()

public class ProductForm extends ActionForm {
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

    // Optional: public ActionErrors validate(ActionMapping mapping, HttpServletRequest request) { ... }
}
```

**3. Action Class (`DisplayProductAction.java`):**
(Place in `src/com/example/action/` or similar, then compiled to `WEB-INF/classes/com/example/action/`)
```java
package com.example.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import com.example.form.ProductForm;

public class DisplayProductAction extends Action {
    public ActionForward execute(ActionMapping mapping, ActionForm form,
                                 HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        ProductForm productForm = (ProductForm) form;

        // Data is already in productForm from the input page.
        // For a real app, you might do business logic here.
        // Here, we just forward to the display page.
        // The form bean will be available in the request scope for the display JSP.

        return mapping.findForward("success");
    }
}
```

**4. Display JSP (`displayProduct.jsp`):**
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %> <%-- Optional, if using html tags --%>
<!DOCTYPE html>
<html>
<head><title>Product Details</title></head>
<body>
    <h2>Displayed Product Details</h2>
    <p>Product ID: <bean:write name="productForm" property="productId" /></p>
    <p>Product Name: <bean:write name="productForm" property="productName" /></p>
    <p>Product Price: <bean:write name="productForm" property="productPrice" /></p>

    <p><html:link page="/inputProduct.jsp">Enter Another Product</html:link></p>
</body>
</html>
```

**5. Struts Configuration (`struts-config.xml`):**
(Place in `WEB-INF` folder)
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE struts-config PUBLIC
          "-//Apache Software Foundation//DTD Struts Configuration 1.3//EN"
          "http://struts.apache.org/dtds/struts-config_1_3.dtd">
<struts-config>
    <form-beans>
        <form-bean name="productForm" type="com.example.form.ProductForm" />
    </form-beans>

    <action-mappings>
        <action path="/displayProduct"
                type="com.example.action.DisplayProductAction"
                name="productForm"
                scope="request"
                input="/inputProduct.jsp">
            <forward name="success" path="/displayProduct.jsp" />
        </action>
    </action-mappings>

    <!-- Optional: Message resources for internationalization -->
    <!-- <message-resources parameter="com.example.ApplicationResources"/> -->
</struts-config>
```

**Directory Structure for Struts Application:**
```
WebAppName/
|-- inputProduct.jsp
|-- displayProduct.jsp
|-- WEB-INF/
|   |-- classes/
|   |   |-- com/
|   |   |   |-- example/
|   |   |   |   |-- action/
|   |   |   |   |   |-- DisplayProductAction.class
|   |   |   |   |-- form/
|   |   |   |   |   |-- ProductForm.class
|   |-- lib/      (Contains struts.jar and other dependency JARs)
|   |-- struts-config.xml
|   |-- web.xml   (Configured with ActionServlet)
```
**`web.xml` also needs to be configured for Struts ActionServlet:**
```xml
<web-app>
    <servlet>
        <servlet-name>action</servlet-name>
        <servlet-class>org.apache.struts.action.ActionServlet</servlet-class>
        <init-param>
            <param-name>config</param-name>
            <param-value>/WEB-INF/struts-config.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>action</servlet-name>
        <url-pattern>*.do</url-pattern> <!-- or /displayProduct if only one action path -->
    </servlet-mapping>
    <!-- ... other configurations ... -->
</web-app>
```
*(Note: If using `*.do` mapping, form action in `inputProduct.jsp` would be `/displayProduct.do`)*

---
**End of Answer Sheet**
