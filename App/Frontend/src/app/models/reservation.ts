export class Reservation {
    reservation_id:number;
    start_time: String;
    end_time: String;
    fk_employee_id: number;
    date_created: String;
    last_update: String;

    constructor(id:number, stime:String, etime:String, fk_E_id: number,created:String, updated: String){
        this.reservation_id = id;
        this.start_time = stime;
        this.end_time = etime;
        this.fk_employee_id = fk_E_id;
        this.date_created = created;
        this.last_update = updated;
    }
}
