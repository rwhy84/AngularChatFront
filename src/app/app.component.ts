import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';
import {ChatServiceService} from '../app/Service/chat-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    author: new FormControl(''),
    content: new FormControl(''),
  });

  title: 'Angular Chat';

  message: Message[] = [];

  ngAfterViewInit(){
    setInterval(() => {
      this.chatService.getHistory().subscribe(message => this.message = message); // api call
   }, 500);
  }

  ngOnInit() {


    this.chatService.getHistory().subscribe(message => this.message = message);
  }

  constructor(private http: HttpClient, private chatService: ChatServiceService) {

  }

  handleSubmit() {

    const message = this.form.value;

    this.chatService.send(message).subscribe(() => {
      // TODO: Ca a marché
    }, () => {
      // TOTO: Ca a foiré
    })







}
  }


