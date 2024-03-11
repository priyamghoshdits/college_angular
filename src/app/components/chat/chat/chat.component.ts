import { Component, OnInit } from '@angular/core';
import { ChatUsers } from '../../../shared/model/chat.model';
import { ChatService } from '../../../shared/services/chat.service';
import {map} from "rxjs/operators";
import {Subscription, timer} from "rxjs";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  
  public openTab : string = "call";
  public users : ChatUsers[] = []
  public searchUsers : ChatUsers[] = []
  public chatUser : any
  public profile : any
  public chats : any
  public chatText : string;
  public error : boolean = false
  public notFound: boolean=false
  public id : any;
  public searchText : string
  interval : any;
  timerSubscription: Subscription;

  constructor(private chatService: ChatService) {   
    // this.chatService.getUsers().subscribe(users => {
    //   this.searchUsers = users
    //   this.users = users
    //     console.log(this.users);
    // })
    this.chatService.getUsersListener().subscribe((response) => {
      this.searchUsers = response;
      this.users = response;
    });
    this.searchUsers = this.chatService.getUserList();
    this.users = this.chatService.getUserList();
    // this.interval = setInterval(()=> { this.chatService.getUpdatedMessages() }, 10000);

    // this.start_interval();

  }

  ngOnInit() {  
    this.userChat(this.id)
    this.getProfile();
    // @ts-ignore
    // this.interval = setInterval(this.getUpdatedChats,2000);

    // this.timerSubscription = timer(0, 1000).pipe(
    //     map(() => {
    //       this.getUpdatedChats(); // load data contains the http request
    //     })
    // ).subscribe();
  }

  // start_interval(){
  //   this.interval = setInterval(()=> { this.chatService.getUpdatedMessages() }, 10000);
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.interval);
  // }


  public tabbed(val) {
  	this.openTab = val
  }

  // Get user Profile
  public getProfile() {
    this.chatService.getCurrentUser().subscribe(userProfile => this.profile = userProfile)
  }

  // User Chat
  public userChat(id:number =1){    
    this.chatService.chatToUser(id).subscribe(chatUser => this.chatUser = chatUser)
    this.chatService.getChatHistory(id).subscribe(chats => this.chats = chats)
  }
  
  // Send Message to User
  public sendMessage(form) {
    // clearInterval(this.interval);
    if(!form.value.message){
      this.error = true
      return false
    }
    this.error = false
    let chat = {
      sender: this.profile.id,
      receiver: this.chatUser.id,
      receiver_name: this.chatUser.name,
      message: form.value.message
    }
    this.chatService.sendMessage(chat) 
    this.chatText = ''
    this.chatUser.seen = 'online'
    this.chatUser.online = true
    // this.start_interval();
    return
  }

  searchTerm(term: any) {
    if(!term) return this.searchUsers = this.users
    term = term.toLowerCase();
    let user:any = []
    this.users.filter((users) => {
      if(users.name.toLowerCase().includes(term)) {
        user.push(users)
      } 
    })
    this.searchUsers = user
    return
  }
}
