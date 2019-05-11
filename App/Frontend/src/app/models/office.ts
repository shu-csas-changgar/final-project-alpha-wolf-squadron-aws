export class Office {
    office_id: number;
    office: string;
    phone_number: string;
    equipment_contact: string;
    fk_address_id: number;
    date_created: string;
    last_update: string;

    constructor(id: number, office: string, pnumber: string, econtact: string, fk_id: number, created: string, last: string){
        this.office_id = id;
        this.office = office;
        this.phone_number = pnumber;
        this.equipment_contact = econtact;
        this.fk_address_id = fk_id;
        this.date_created = created;
        this.last_update = last;
    }
}
