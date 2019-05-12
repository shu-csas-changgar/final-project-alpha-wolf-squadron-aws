import { Component, OnInit } from '@angular/core';
import { RoomService } from '../service/room.service';
import { Room } from '../models/room';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [RoomService]
})
export class RoomPageComponent implements OnInit {

  Roomes: Room[] = []
  constructor(private RoomService: RoomService) { }

  ngOnInit() {
    this.fetchRoom();
  }

  fetchRoom() {
    this.RoomService
    .getRoom()
    .subscribe((data: Room[]) => {
      this.Roomes = data;
    });
  }

}
