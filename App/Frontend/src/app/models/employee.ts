export class Employee {
    employee_id: number;
    first_name: String;
    last_name: String;
    phone_number: String;
    work_phone_number: String;
    email: String;
    username: String;
    active: number;
    fk_address_id: number;
    fk_room_id: number;
    date_created: String;
    last_update: String;

    constructor(id: number, fname: String, lname: String, pnumber: String, wnumber: String, email:String, uname: String, active: number, fkad: number, fkroom:number, created: String, updated:String) {
        this.employee_id = id;
        this.first_name = fname;
        this.last_name = lname;
        this.phone_number = pnumber;
        this.work_phone_number = wnumber;
        this.email = email;
        this.username = uname;
        this.active = active;
        this.fk_address_id = fkad;
        this.fk_room_id = fkroom;
        this.date_created = created;
        this.last_update = updated;
    }
    
}
