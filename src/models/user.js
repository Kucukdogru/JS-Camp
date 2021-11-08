export default class User {
    // Yeni bir User oluşturduğumuzda (let user = new User() ) constructor çalışır
    // constructor() {
    //     console.log("User oluştu");
    // }

    constructor(id, firstName, lastName, city) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city
    }
}