import { Component } from '@angular/core';
import {CommunicationService} from "../../../services/communication.service";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgIf,
    DatePipe
  ],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent {

  editor = ClassicEditor;
  data: any = `<p>Hello, world!</p>`;

  config : any= {
    toolbar: [
      'undo',
      'redo',
      '|',
      'heading',
      'fontFamily',
      'fontSize',
      '|',
      'bold',
      'italic',
      'underline',
      'fontColor',
      'fontBackgroundColor',
      'highlight',
      '|',
      'link',
      'CKFinder',
      'imageUpload',
      'mediaEmbed',
      '|',
      'alignment',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'insertTable',
      'blockQuote',
      'specialCharacters'
    ],
    language: 'id',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
  }

  noticeForm: FormGroup;
  noticeList: any[];
  userTypeList: any[];
  cloneUserTypeList: any[];
  tempUserTypes: any[] = [];
  isUpdatable = false;
  p:number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private communicationService: CommunicationService, private roleAndPermissionService: RolesAndPermissionService) {
    this.noticeForm = new FormGroup({
      id: new FormControl(null),
      subject: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
    });
    this.communicationService.getNoticeListListener().subscribe((response) => {
      this.noticeList = response;
    });
    this.noticeList = this.communicationService.getNoticeList();

    this.communicationService.getUserTypeListListener().subscribe((response) => {
      this.userTypeList = response;
      this.cloneUserTypeList = cloneDeep(this.userTypeList);
    });
    this.userTypeList = this.communicationService.getUserTypeList();
    if(this.userTypeList.length > 0){
      this.cloneUserTypeList = cloneDeep(this.userTypeList);
    }

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'NOTICE').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'NOTICE').permission;
    }

  }

  importUserTypes(data, event){
    let userTypes;
    if(event.target.checked){
      userTypes = [
        {"id": data.id, "name": data.name}
      ];
      // @ts-ignore
      this.tempUserTypes.push(userTypes[0]);
    }else{
      // @ts-ignore
      let index = this.tempUserTypes.findIndex(x => x.id === data.id)
      this.tempUserTypes.splice(index,1);
    }
  }

  editNotice(data){
    let received_data = data.mailed_to_id.split(',');

    this.userTypeList.forEach(function (value){
      received_data.forEach(function (value2){
        if(value.id === parseInt(value2)){
          value.checked = true;
        }
      })
    })
    this.tempUserTypes = this.userTypeList.filter(x => x.checked == true);

    this.noticeForm.patchValue(data);
    this.isUpdatable = true;
  }

  updateNotice(){
    let arr;
    arr = [
      {
        id: this.noticeForm.value.id,
        subject: this.noticeForm.value.subject,
        body: this.noticeForm.value.body,
        mail_to : this.tempUserTypes
      }
    ];
    this.communicationService.updateNotice(arr[0]).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Notice Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.isUpdatable = false;
    this.tempUserTypes = [];
    this.noticeForm.reset();
    this.userTypeList= cloneDeep(this.cloneUserTypeList);
    // this.userTypeList.forEach(function (value){
    //   value.checked = false;
    // })
  }

  saveNotice(){
    let arr;
    arr = [
        {
          subject: this.noticeForm.value.subject,
          body: this.noticeForm.value.body,
          mail_to : this.tempUserTypes
      }
    ];
    this.communicationService.saveNotices(arr[0]).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Notice Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.noticeForm.reset();
        this.userTypeList= cloneDeep(this.cloneUserTypeList);
        this.tempUserTypes = [];
      }
    });
  }

  deleteNotice(data){

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.communicationService.deleteNotice(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Notice Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });
  }

}
