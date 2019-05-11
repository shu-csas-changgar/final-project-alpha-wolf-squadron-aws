export class City {
    city_id: number;
    city: string;
    fk_country_id: number;
    date_created: string;
    last_update: string;

    constructor(id: number, city: string, fk_id: number, created: string, last: string){
        this.city_id = id;
        this.city = city;
        this.fk_country_id = fk_id;
        this.date_created = created;
        this.last_update = last;
    }
}
