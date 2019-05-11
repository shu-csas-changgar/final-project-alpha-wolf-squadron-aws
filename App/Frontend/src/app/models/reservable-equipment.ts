export class ReservableEquipment {
    reservable_equipment_id: Number;
    status: number;
    fk_inventory_id: number;
    date_created: String;
    last_update: String;

    constructor(id: number, status:number, fkinvID: number, created:String, updated: String){
        this.reservable_equipment_id= id;
        this.status=status;
        this.fk_inventory_id=fkinvID;
        this.date_created = created;
        this.last_update = updated;
    }
}