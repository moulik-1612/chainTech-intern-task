Usage

Registering an Account:

1) Go to the Registration page via the "Register Yourself" button on the Home page.
2) Enter your name, email, and password, then click "Register".
3) If successful, you'll see an alert confirming your account creation, and you'll be redirected to the Login page.

Logging In:
1) Enter the same email and password used during registration.
2) Click "Login". If the credentials match, a success alert is shown.

Managing Your Account:

1) Navigate to the Manage Account page.
2) View and edit your account details as needed.
3) Click "Save" to update your information in localStorage.
Code Explanation:

Components:

1) HomePage:
Displays navigation buttons to the Registration, Login, and Manage Account pages.

2) Registration:
Contains a form for creating a new account. Validates if an account already exists, and if not, saves the user data to localStorage.

3) Login:
Validates the entered email and password against localStorage data, allowing the user to log in if credentials match.

4) ManageAcc:
Displays the user's saved account information, allowing them to make changes and update the data in localStorage.

5) Routing:

The application uses react-router-dom for navigation with the following routes:

i) /: HomePage
ii) /register: Registration Page
iii) /login: Login Page
iv) /account: Manage Account Page

Contributing:
Contributions are welcome! Please fork the repository and create a pull request with any changes or improvements.

Contact:
If you have any questions or suggestions, feel free to reach out.

Maintainer: Moulik Tiwari
Email: your.mouliktiwari1612@gmail.com