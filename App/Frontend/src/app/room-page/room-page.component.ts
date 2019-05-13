import { Component, OnInit } from '@angular/core';
import { RoomService } from '../service/room.service';
import { Room } from '../models/room';
import { FormGroup, FormControl } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [RoomService]
})
export class RoomPageComponent implements OnInit {

  toggleUpdateButton:boolean = false;
  rooms: Room[] = []
  name: String;
  floor: Number;
  fk_office_id: Number;
  id: any;
  constructor(private RoomService: RoomService) { }

  ngOnInit() {
    this.RoomService
    .getRoom()
    .subscribe(rooms => this.rooms = rooms);
  }

  addRoom() {
    const newRoom = {
        room: this.name
    }
    this.RoomService.addRoom(newRoom).subscribe(room => {
      this.rooms.push(room);
      this.RoomService
    .getRoom()
    .subscribe(rooms => this.rooms = rooms);
    });
}
updateRoom() {
  var rooms = this.rooms;
  const newRoom = {
    room: this.name
  }
  const data = {
    roomChange: newRoom,
    idSearch: this.id
  }
  this.RoomService.updateRoom(data).subscribe(room => {
    for(var i = 0; i < rooms.length; i++ ){
      if (rooms[i].room_id == room.room_id){
        rooms[i] = room;
      }
    }
    this.RoomService
    .getRoom()
    .subscribe(rooms => this.rooms = rooms);
    });
    this.toggleUpdateButton = false;
  }
  deleteRoom(id: any) {
    var rooms = this.rooms;
  this.RoomService.deleteRoom(id).subscribe(data =>{
    for(var i = 0; i < rooms.length; i++){
      if(rooms[i].room_id == id){
        rooms.splice(i, 1);
      }
    }
  });
}

updateFillIn(room: Room){
  this.name =room.room;
  this.id = room.room_id;
  this.floor = room.floor;
  this.fk_office_id = room.fk_office_id;
  this.toggleUpdateButton = true;
}
}