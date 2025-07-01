# Next Js Practice
I will be walking through a simple Next Js project to practice my skills.

- axios: to make API calls.
- bcryptjs: to hash passwords/tokens.
- jsonwebtoken: to generate tokens, secure cookies from server side.
- nodemailer: to send emails.
- mailtrap: to test emails.
- mongoose: to interact with MongoDB, wrapper around MongoDB driver.
- react-hot-toast: to display toast messages.


## Steps
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

MailTrap Provider with Nodemailer to send the verification like for verifying user


## env format:
```
MONGO_URL= 
TOKEN_SECRET= 
domain=https://localhost:3000
MailTrapUser=
MailTrapToken=
```

## Notes on Next.JS:
- [ ] for dynamic routing, getting params and slug (destructure and await)
- [...path] for catching nested dynamic route, destructure params and await and destructure filepath {filepath.join("/)}
- [[...path]] for Optiional catch all route nested dynamic route, destructure params and await and destructure filepath {filepath?.join("/)}........CAN NOT use at root (/)
- ( ) for Folder but no routing, used for Route Grouping 
- set title in metadata, %s to catch the string and cana also set default value, set absolute for overwriting the title
- notfound() function to block perticular page, not-found.js for custom page
- RE for getting only number "/^\d+$/"
- use "_foldername" for creating Private folder, can also use %5F for _ symbol
- generateStaticParams(){ return [{},{},{}]} to generate static pages at build time, used for SSG(Server Side Generation) for frequent visiting pages
- ISR (Increamental Site Regeneration)
- !important for overriding CSS
- .module.css and import {styles} from "../" for using styles in CSS Module
- npm i --save-dev sass for SCSS 