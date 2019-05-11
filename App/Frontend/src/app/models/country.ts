export class Country {
    country_id: number;
    country: String;
    date_created: String;
    last_update: String;

    constructor(id: number, country: string, created: string, last: string){
        this.country = country;
        this.country_id = id;
        this.date_created = created;
        this.last_update = last;
    }

}
