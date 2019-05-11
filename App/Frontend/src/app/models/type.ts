export class Type {
    type_id: number;
    type: String;
    date_created: String;
    last_updated: String; 

    constructor(id: number, type: String, created: String, updated: String){
        this.type_id = id;
        this.type = type;
        this.date_created = created;
        this.last_updated = updated;
    }
}
