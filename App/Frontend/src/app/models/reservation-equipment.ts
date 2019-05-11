export class ReservationEquipment {
    fk_reservable_equipment_id: number;
    fk_reservation_id: number;
    date_created: String;
    last_update: String;

    constructor(RE_ID:number, R_ID:number, created:String, updated:String){
        this.fk_reservable_equipment_id = RE_ID;
        this.fk_reservation_id = R_ID;
        this.date_created= created;
        this.last_update = updated;
    }
}
