import { Component, OnInit } from '@angular/core';
import { RoomService } from '../service/room.service';
import { Room } from '../models/room';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [RoomService]
})
export class RoomPageComponent implements OnInit {

  rooms: Room[] = []
  roomForm = new FormGroup({
    name: new FormControl,
    floor: new FormControl,
    fk_office_id: new FormControl
  })
  constructor(private RoomService: RoomService) { }

  ngOnInit() {
    this.fetchRoom();
  }

  fetchRoom() {
    this.RoomService
    .getRoom()
    .subscribe((data: Room[]) => {
      this.rooms = data;
    });
  }

  createSubmit(){
    console.log(this.roomForm.value)
  }

}
