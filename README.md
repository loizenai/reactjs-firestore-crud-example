https://loizenai.com/reactjs-crud-firestore-example-firebase-tutorial/

# Reactjs CRUD Firestore example – Firebase Tutorial

![Reactjs CRUD Firestore example – Firebase Tutorial](https://loizenai.com/wp-content/uploads/2020/12/Reactjs-crud-firestore-example.png)

Firestore is a NoSQL document database built for automatic scaling, high performance, and ease of application development. It supports offline mode so our app will work fine (write, read, listen to, and query data) whether device has internet connection or not, it automatically fetches changes from our database to Firebase Server. So In the tutorial, I introduce an example “Reactjs CRUD Firestore example”.

– I draw a fullstack overview diagram architecture from Reactjs frontend to Firestore.
– I illustrate details about react-firestore CRUD operations.
– I implement Reactjs application to do CRUD request (Post/Get/Put/Delete) to Firebase Firestore.

## Overvier Architecture Diagram – Reactjs CRUD Firestore

![Overvier Architecture Diagram – Reactjs CRUD Firestore](https://loizenai.com/wp-content/uploads/2020/12/Reactjs-Firebase-Realtime-Database-CRUD-Overview-Architecture-Diagram-2.png)

Reactjs CRUD Application is designed with 2 main layers:

– React.js components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
– Firestore Service is used by above React Components to fetch (Post/Put/Get/Delete) data to Firestore.

Reactjs CRUD Application defines 5 components:

- Home.js is used serve as the landing page for your app.
- AppNavbar.js is used to establish a common UI feature between components.
- CustomerList.js is used to show all customers in the web-page
- CustomerEdit.js is used to modify the existed customer
- App.js uses React Router to navigate between components.

## Integrative Project Goal between Reactjs CRUD Firestore

Reactjs Home page:

![Reactjs Home page](https://loizenai.com/wp-content/uploads/2020/12/Project-Goal-Home-Page-1.png)

Reactjs add data:

![Reactjs add data](https://loizenai.com/wp-content/uploads/2020/12/Project-Goal-Reactjs-Add-a-Customer-through-Nodejs-RestAPI-1.png)

![React Firebase CRUD Example – Adding customers](https://loizenai.com/wp-content/uploads/2020/12/React-Firebase-CRUD-Example-Adding-customers.png)

Reactjs List all data:

![Reactjs List all data](https://loizenai.com/wp-content/uploads/2020/12/Reactjs-application-show-list-data-after-update-a-customer.png)

Reactjs update data:

![Reactjs update data](https://loizenai.com/wp-content/uploads/2020/12/Project-Goal-Reactjs-Update-Customer-to-Firebase-2.png)

![React Firebase Update customer](https://loizenai.com/wp-content/uploads/2020/12/React-Firebase-Update-customer.png)

Reactjs delete a customer with id=2, check the Customer List after deleting:

![Reactjs delete a customer](https://loizenai.com/wp-content/uploads/2020/12/Reactjs-show-list-customers-after-doing-CRUD-operations-4.png)


Check Firestore after do CRUD operations:

![Check Firestore after do CRUD operations](https://loizenai.com/wp-content/uploads/2020/12/React-Firestore-delete-a-customer.png)

## Related post

- [Reactjs Node.js MySQL CRUD Example](https://loizenai.com/reactjs-nodejs-crud-mysql/)
- [Reactjs Jwt SpringBoot Token Authentication Example – React.js Spring Security Login](https://loizenai.com/jwt-springboot-reactjs-token-authentication-example/)
- [Reactjs Nodejs MongoDB CRUD Example – MERN Stack Application](https://loizenai.com/reactjs-nodejs-mongodb-crud/)
