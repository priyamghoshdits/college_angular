import { Component, OnInit } from '@angular/core';
import { ErpSettingService } from 'src/app/services/erp-setting.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  erpSettings: any;

  constructor(private erpService: ErpSettingService) {
    this.erpService.erpSettingListener().subscribe((data: any) => {
      this.erpSettings = data;
    });

    this.erpSettings = this.erpService.getErpSetting();
  }

  ngOnInit() { }

}
