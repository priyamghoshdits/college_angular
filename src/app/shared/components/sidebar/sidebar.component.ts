import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Menu, NavService} from '../../services/nav.service';
import {environment} from "../../../../environments/environment";
import {CommonService} from "../../../services/common.service";
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../../services/session.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

    public FILE_URL = environment.FILE_URL;
    public menuItems: Menu[] | any;
    public url: any;
    menuManagement: any[];
    sessionList: any[];
    session_id = null;
    user: { id, first_name, middle_name, last_name, user_type_id, user_type_name, email, image, token };
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private router: Router, public navServices: NavService
        , private commonService: CommonService, private rolesAndPermission: RolesAndPermissionService
        , private http: HttpClient, private sessionService: SessionService) {
        // @ts-ignore
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user) {
            this.url = this.FILE_URL + '/user_image/' + this.user.image;
        }

        // @ts-ignore
        const session_data = JSON.parse(localStorage.getItem('session_id'));
        if (session_data) {
            this.session_id = session_data;
        }

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();

        this.http.get(this.BASE_API_URL + '/getMenuManagement').subscribe((response: any) => {

            if (response.success == 1) {
                let menuManagement = response.data;

                this.navServices.items.subscribe(menuItems => {
                    this.menuItems = menuItems
                    let x;
                    this.menuItems.forEach(function (value) {
                        for (let j = 0; j < menuManagement.length; j++) {
                            if (value.title === menuManagement[j].name) {
                                value.hidden = (menuManagement[j].permission == 0);
                            } else {
                                if (value.children) {
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

    selectSession() {
        localStorage.removeItem("session_id");
        localStorage.setItem("session_id", JSON.stringify(this.session_id));
        window.location.reload();
    }

    // Active Nave state
    setNavActive(item: any) {
        this.menuItems.filter((menuItem: any) => {
            if (menuItem != item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter((submenuItems: any) => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true
                        submenuItems.active = true
                    }
                })
            }
        })
    }

    // Click Toggle menu
    toggletNavActive(item: any) {
        if (!item.active) {
            this.menuItems.forEach((a: any) => {
                if (this.menuItems.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach((b: any) => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                })
                return
            });
        }
        item.active = !item.active
    }

    onErrorImg() {

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
        let file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("user_id", this.user.id);
        formData.append("file_name", file['name']);
        this.commonService.uploadProfilePicture(formData).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
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
