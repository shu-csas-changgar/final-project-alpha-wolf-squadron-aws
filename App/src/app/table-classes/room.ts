export class Room {
    room_id: number;
    room: string;
    floor: number;
    fk_office_id: number;
    date_created: string;
    last_update: string;

    constructor(id: number, room: string, floor: number, fk_id: number, created: string, last: string){
        this.room_id = id;
        this.room = room;
        this.floor = floor;
        this.fk_office_id = fk_id;
        this.date_created = created;
        this.last_update = last;
    }
}
