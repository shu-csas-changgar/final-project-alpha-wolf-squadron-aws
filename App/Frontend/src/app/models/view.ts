export class View {
    equipment_id: number;
    name: String;
    type: String;
    active: number;
    lease_id: number;
    vendor: String;
    employee_id: number;
    room_id: number;

    constructor(id: number, name: String, type: String, active: number, lease_id: number, vendor: String, e_id: number, r_id: number){
        this.equipment_id = id;
        this.name = name;
        this.type = type;
        this.active = active;
        this.lease_id = lease_id;
        this.vendor = vendor;
        this.employee_id = e_id;
        this.room_id = r_id;
    }

}
