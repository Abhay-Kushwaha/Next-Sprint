# Next Js Practice

I will be walking through a simple Next Js project to practice my skills.

-axios: to make API calls.
-bcryptjs: to hash passwords/tokens.
-jsonwebtoken: to generate tokens, secure cookies from server side.
-nodemailer: to send emails.
-mongoose: to interact with MongoDB, wrapper around MongoDB driver.
-react-hot-toast: to display toast messages.

Database Confuguartion and Connection

SignUp: generate token, save user to database, redirect to login page.
Login: verify user, match token, redirect to profile.
Logout: delete token, redirect to login page.

Cookies: to store user data securely.
Session: to store user data securely.
JWT: to store user data securely.

middleware: For Protecting Pages, to handle authentication, authorization.
1) if try to visit public route with token, it will redirect to profile page.
2) if try to visit private route without token, it will redirect to login page.

Getting data from token and Display it on profile.