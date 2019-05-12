export class Lease {
    lease_id: number; 
    start_date: String;
    end_date: String;
    date_created: String;
    last_update: String;

    constructor(id:number, sdate: String, edate: String, created: String, updated: String){
        this.lease_id= id;
        this.start_date = sdate;
        this.end_date = edate;
        this.date_created = created;
        this.last_update = updated;
    }
}
