# todo-list

# Project Description -
This project is aimed to create a ready to deploy Live TODO List management system.
It must have all the features mentioned below and it must be deployed on a server
before submission. There should be two separate parts of the application. A Frontend
developed and deployed using the technologies mentioned below and a REST API (with
realtime functionalities) created using the technologies mentioned below.
Frontend Technologies  - HTML5, CSS3, JS, Bootstrap and Angular
Backend Technologies  - NodeJS, ExpressJS and Socket.IO
Database  - MongoDB 


# Features of the Application -
1) User management System -
a) Signup - User should be able to sign up on the platform providing all
details like FirstName, LastName, Email and Mobile number. Country
code for mobile number (like 91 for India) should also be stored. You may
find the country code data on these links
(http://country.io/phone.json,http://country.io/names.json)
b) Login - user should be able to login using the credentials provided at
signup.
c) Forgot password - User should be able to recover password using a link or
code on email. You may use Nodemailer to send emails. (Please use a
dummy gmail account, not your real account).
2) To do list management (single user) -
a) Once user logs into the system, he should see an option to create a ToDo
List
b) User should be able to create, a new empty list, by clicking on a create
button
c) User should be able to add, delete and edit items to the list
d) User should also be able to add sub-todo-items, as child of any item node.
Such that, complete list should take a tree shape, with items and their
child items.
e) User should be able to mark an item as "done" or "open".
f) User should be able to see his old ToDo Lists, once logged in.
3) Friend List -
a) User should also be able to send friend requests, to the users on the
system. Once requests are accepted, the friend should be added in user's
friend list. Friends should be Notified, in real time using notifications.
4) To do List management (multi-user) -
a) Friends should be able to edit, delete, update the list of the user.
b) On every action, all friends should be notified, in real time, of what specific
change is done by which friend. Also the list should be in sync with all
friends, at any time, i.e. all actions should be reflected in real time
