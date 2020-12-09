import firebase from '../util/firebase';

const db = firebase.collection("/customers");
let customers = [];

class FirebaseService {
  
  addCustomer = (customer) => {
    db.add(customer);
  };

  getAll() {
    return db;
  }

  get(key) {
    return db.doc(key);
  }

  update(key, value) {
    return db.doc(key).update(value)
  }

  delete(key) {
    return db.doc(key).delete();
  }
}

export default new FirebaseService();