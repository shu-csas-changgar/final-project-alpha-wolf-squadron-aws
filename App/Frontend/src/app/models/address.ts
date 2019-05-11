import { timingSafeEqual } from "crypto";

export class Address {
    address_id: number;
    address: string;
    address2: string;
    district: string;
    postal_code: string;
    fk_city_id: number;
    date_created: string;
    last_update: string;

    constructor(id: number, address: string, address2: string, district: string, pcode: string, fk_id: number, created: string, last: string){
        this.address_id = id;
        this.address = address;
        this.address2 = address2;
        this.district = district;
        this.postal_code = pcode;
        this.fk_city_id = fk_id;
        this.date_created = created;
        this.last_update = last;
    }
}
