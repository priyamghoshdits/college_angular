
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

var body = document.getElementsByTagName("body")[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private BASE_API_URL = environment.BASE_API_URL;
  public menuItems: Menu[];
  public FILE_URL = environment.FILE_URL;
  public url: any;
  passwordResetForm: FormGroup;
  public items: Menu[];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public openNav: boolean = false
  public right_sidebar: boolean = false
  public text: string;
  user : { id, first_name, middle_name, last_name, user_type_id, user_type_name,email, image, token};
  public elem:any;
  public isOpenMobile: boolean = false
  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(
    public navServices: NavService,
    public router: Router,
    private  http: HttpClient,
    config: NgbModalConfig, private modalService: NgbModal,
    @Inject(DOCUMENT) private document: any,
    private translate: TranslateService) {

    this.passwordResetForm = new FormGroup({
      // old_password: new FormControl(null, [Validators.required]),
      new_password: new FormControl(null, [Validators.required]),
      confirm_password: new FormControl(null, [Validators.required]),
    });

    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user){
      this.url = this.FILE_URL + '/user_image/' + this.user.image;
    }
  }


  ngOnDestroy() {
    this.removeFix();
  }


  right_side_bar() {
    this.right_sidebar = !this.right_sidebar
    this.rightSidebarEvent.emit(this.right_sidebar)
  }

  collapseSidebar() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  public changeLanguage(lang:any) {
    this.translate.use(lang)
  }

  searchTerm(term: any) {
    term ? this.addFix() : this.removeFix();
    if (!term) return this.menuItems = [];
    let items :any = [];
    term = term.toLowerCase();
    this.items.filter((menuItems:any) => {
      if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
        items.push(menuItems);
      }
      if (!menuItems.children) return false
      menuItems.children.filter((subItems:any) => {
        if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = menuItems.icon
          items.push(subItems);
        }
        if (!subItems.children) return false
        subItems.children.filter((suSubItems:any) => {
          if (suSubItems.title.toLowerCase().includes(term)) {
            suSubItems.icon = menuItems.icon
            items.push(suSubItems);
          }
        })

        return
      })
      this.checkSearchResultEmpty(items)
      this.menuItems = items
      return
    });
    return
  }

  checkSearchResultEmpty(items:any) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    body.classList.add("offcanvas");
  }

  removeFix() {
    this.searchResult = false;
    body.classList.remove("offcanvas");
    this.text = "";
  }
  ngOnInit() {
    this.elem = document.documentElement;
    this.navServices.items.subscribe(menuItems => {
      this.items = menuItems
    });
  }

  SignOut(){
    this.http.get(this.BASE_API_URL + '/logout',).subscribe((response: any) =>{
    });
    localStorage.removeItem('user');
    this.router.navigate(["/auth/login"]);
    window.location.reload();
  }

  toggleFullScreen() {
    this.navServices.fullScreen = !this.navServices.fullScreen;
    if (this.navServices.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  openSm(content) {
    this.modalService.open(content, { size: 'md' });
  }

  updatePassword(){
    if(this.passwordResetForm.value.new_password != this.passwordResetForm.value.confirm_password){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Confirm password not matched",
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    this.http.post(this.BASE_API_URL + '/resetPassword', this.passwordResetForm.value).subscribe((response: any) =>{
      if(response.success == 1){
        this.passwordResetForm.reset();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Password Updated",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  }
}
