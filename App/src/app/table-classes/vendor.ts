export class Vendor {
    vendor_id: number;
    name: string;
    phone: string;
    email: string;
    fk_address_id: number;
    date_created: string;
    last_update: string;

    constructor(id: number, name: string, phone: string, email: string, fk_id: number, created: string, last: string){
        this.vendor_id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.fk_address_id = fk_id;
        this.date_created = created;
        this.last_update = last;
    }
}
