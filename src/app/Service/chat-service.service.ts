import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../message';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient,) { }


  /**
   * Permet d'envoyer un nouveau message aupres de l'API
   *
   */
  send(message: Message) {
    return this.http.post('http://localhost:3500/api/chat_messages', message);

  }

  /**
   * Permet d'obtenir les X derniers messages classés dans le bon ordre
   *
   */
  getHistory(): Observable<Message[]> {
    return this.http.get('http://localhost:3500/api/chat_messages').pipe(
      map(data => data['hydra:member'].reverse())
    )
  }


}

