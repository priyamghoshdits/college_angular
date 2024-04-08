import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService, Menu } from '../../services/nav.service';
import {environment} from "../../../../environments/environment";
import {CommonService} from "../../../services/common.service";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../../../services/error.service";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  private BASE_API_URL = environment.BASE_API_URL;
  public FILE_URL = environment.FILE_URL;

  public menuItems: Menu[] | any;
  public url: any;
  public fileurl: any;
  menuManagement : any[];
  sessionList: any[];

  user : { id, first_name, middle_name, last_name, user_type_id, user_type_name,email, image, token};

  constructor(private router: Router, public navServices: NavService
              , private commonService: CommonService
              ,private  http: HttpClient, private sessionService: SessionService) {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user){
      this.url = this.FILE_URL + '/user_image/' + this.user.image;
    }

    this.sessionService.getSessionListener().subscribe((response) => {
      this.sessionList = response;
    });
    this.sessionList = this.sessionService.getSessionList();

    this.http.get(this.BASE_API_URL + '/getMenuManagement').subscribe((response: any) =>{

      // console.log(menuManagement.find(x => x.id == 1));
      if(response.success == 1){
        let menuManagement = response.data;

        this.navServices.items.subscribe(menuItems => {
          this.menuItems = menuItems
          let x;
          this.menuItems.forEach(function (value){
            for (let j = 0; j < menuManagement.length; j++) {
              if(value.title === menuManagement[j].name){
                value.hidden = (menuManagement[j].permission == 0);
              }else{
                if(value.children) {
                  for (let i = 0; i < value.children.length; i++) {
                    if (menuManagement[j].name === value.children[i].title) {
                      value.children[i].hidden = (menuManagement[j].permission == 0);
                    }
                  }
                }
              }
            }
          });

          this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              menuItems.filter(items => {
                    if (items.path === event.url)
                      this.setNavActive(items)
                    if (!items.children) return false
                    items.children.filter(subItems => {
                      if (subItems.path === event.url)
                        this.setNavActive(subItems)
                      if (!subItems.children) return false
                      subItems.children.filter(subSubItems => {
                        if (subSubItems.path === event.url)
                          this.setNavActive(subSubItems)
                      })
                      return
                    })
                    return
                  }
              )
            }
          })
        })
      }

    });

  }

  // Active Nave state
  setNavActive(item:any) {
    this.menuItems.filter((menuItem:any) => {
      if (menuItem != item)
        menuItem.active = false
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true
      if (menuItem.children) {
        menuItem.children.filter((submenuItems:any) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true
            submenuItems.active = true
          }
        })
      }
    })
  }

  // Click Toggle menu
  toggletNavActive(item:any) {
    if (!item.active) {
      this.menuItems.forEach((a:any) => {
        if (this.menuItems.includes(item))
          a.active = false
        if (!a.children) return false
        a.children.forEach((b:any) => {
          if (a.children.includes(item)) {
            b.active = false
          }
        })
        return
      });
    }
    item.active = !item.active
  }

  onErrorImg(){

  }

  //Fileupload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    console.log(this.user);
    let file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", this.user.id);
    formData.append("file_name", file['name']);
    this.commonService.uploadProfilePicture(formData).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        localStorage.removeItem('user');
        // @ts-ignore
        localStorage.setItem("user", JSON.stringify(response.data));
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
          this.url = reader.result;
        }
      }
    });
  }

  

}
