export class View {
    equipment_id: number;
    name: String;
    type: String;
    active: number;
    fk_lease_id: number;
    vendor: String;
    fk_employee_id: number;
    fk_room_id: number;

    constructor(id: number, name: String, type: String, active: number, lease_id: number, vendor: String, e_id: number, r_id: number){
        this.equipment_id = id;
        this.name = name;
        this.type = type;
        this.active = active;
        this.fk_lease_id = lease_id;
        this.vendor = vendor;
        this.fk_employee_id = e_id;
        this.fk_room_id = r_id;
    }

}
