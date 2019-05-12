export class Equipment {
    equipment_id: number;
    name: string;
    active: number;
    warranty_end_date: string;
    fk_lease_id: number;
    fk_vendor_id: number;
    fk_type_id: number;
    date_created: string;
    last_update: string;

    constructor(id: number, name: string, active: number, w_e_date: string, fk_l_id: number, fk_v_id: number, fk_t_id: number, created: string, last: string){
        this.equipment_id = id;
        this.name = name;
        this.active = active;
        this.warranty_end_date = w_e_date;
        this.fk_lease_id = fk_l_id;
        this.fk_type_id = fk_t_id;
        this.fk_vendor_id = fk_v_id;
        this.date_created = created;
        this.last_update = last;
    }
}
