import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-ngx-dropzone',
  templateUrl: './ngx-dropzone.component.html',
  styleUrls: ['./ngx-dropzone.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxDropzoneComponent implements OnInit {

  public files1: File[] = [];
  public files2: File[] = [];

  constructor() { }

  onSelect1(event: NgxDropzoneChangeEvent) {
    if (this.files1.length >= 1) {
      alert("No more files please!")
    } else {
      this.files1.push(...event.addedFiles);
    }
  }

  onRemove1(event: File) {
    this.files1.splice(this.files1.indexOf(event), 1);
  }

  onSelect2(event: NgxDropzoneChangeEvent) {
    this.files2.push(...event.addedFiles);
  }

  onRemove2(event: File) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }

  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public config2: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public config3: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    acceptedFiles: '.pdf'
  };


  public onUploadInit(args: any): void {  }

  public onUploadError(args: any): void {  }

  public onUploadSuccess(args: any): void {  }

  ngOnInit() {
  }

}
