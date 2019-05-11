export class Inventory {
    inventory_id: number;
    fk_equipment_id: number;
    fk_employee_id: number;
    fk_room_id: number;
    date_created: string;
    last_update: string;

    constructor(id: number, fk_eq_id: number, fk_em_id: number, fk_r_id: number, created: string, last: string){
        this.inventory_id = id;
        this.fk_equipment_id = fk_eq_id;
        this.fk_employee_id = fk_em_id;
        this.fk_room_id = fk_r_id;
        this.date_created = created;
        this.last_update = last;
    }
}
