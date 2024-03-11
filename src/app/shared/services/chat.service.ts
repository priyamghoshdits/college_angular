import { Injectable } from '@angular/core';
import { ChatDB } from '../../shared/data/chat/chat';
import { ChatUsers, chat } from '../../shared/model/chat.model';
import {Observable, Subject, Subscriber} from 'rxjs';
import {map, filter, scan, catchError, tap} from 'rxjs/operators';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../../services/error.service";

var today = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private BASE_API_URL = environment.BASE_API_URL;

  public observer: Subscriber<{}>;
  public chat: any[] = []
  public users: any[] = []

  usersSubject = new Subject<any[]>();

  getUsersListener(){
    return this.usersSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getChat').subscribe((response: any) =>{
      this.chat = response.data;
      this.users = response.users;
      this.usersSubject.next([...this.users]);
    });
  }

  getUpdatedMessages(){
    this.http.get(this.BASE_API_URL + '/getChat').subscribe((response: any) =>{
      this.chat = response.data;
      this.users = response.users;
      this.usersSubject.next([...this.users]);
    });
  }

  // Get User Data
  public getUsers(): Observable<ChatUsers[]> {
    const users = new Observable(observer => {
      observer.next(this.users);
      observer.complete();
    });
    return <Observable<ChatUsers[]>>users;
  }

  // Get cuurent user
  public getCurrentUser() {
    return this.usersSubject.pipe(map(users => {
      return users.find((item) => {
        return item.authenticate === 1;
      });
    }));
    // return this.getUsers().pipe(map(users => {
    //   return users.find((item) => {
    //     return item.authenticate === 1;
    //   });
    // }));
  }

  // chat to user
  public chatToUser(id: number) {
    // return this.usersSubject.pipe(map(users => {
    //   return users.find((item) => {
    //     return item.id === id;
    //   });
    // }));
    return this.getUsers().pipe(map(users => {
      return users.find((item) => {
        return item.id === id;
      });
    }));
  }

  // Get users chat
  public getUserChat(): Observable<chat[]> {
    const chat = new Observable(observer => {
      observer.next(this.chat);
      observer.complete();
    });
    return <Observable<chat[]>>chat;
  }

  // Get chat History
  public getChatHistory(id: number) {
    return this.getUserChat().pipe(map(users => {
      return users.find((item) => {
        return item.id === id;
      });
    }));
  }

  // Send Message to user
  public sendMessage(chat:any) {
    this.http.post(this.BASE_API_URL + '/saveChat',chat).subscribe((response: any) =>{
      if(response.success == 1){
        this.chat.filter(chats => {
          if (chats.id == chat.receiver) {
            chats.message.push({ sender: chat.sender, time: today.toLowerCase(), text: chat.message })
            setTimeout(function () {
              document.querySelector(".chat-history")!.scrollBy({ top: 200, behavior: 'smooth' });
            }, 10)
            // this.responseMessage(chat)
          }
        })
      }
    });
  }

  public responseMessage(chat:any) {

    this.chat.filter(chats => {
      if (chats.id == chat.receiver) {
        setTimeout(() => {
          chats.message.push({ sender: chat.receiver, time: today.toLowerCase(), text: 'Hey This is ' + chat.receiver_name + ', Sorry I busy right now, I will text you later' })
        }, 2000);
        setTimeout(function () {
          document.querySelector(".chat-history")!.scrollBy({ top: 200, behavior: 'smooth' });
        }, 2310)
      }
    })
  }

}
