import { Component, OnInit } from '@angular/core';

import { VisualConfiguration } from 'src/app/models/visualconfig';
import { VisualConfigurationService } from 'src/app/services/visualconfig.service';

@Component({
  selector: 'app-visual-config',
  templateUrl: './visual-config-list.component.html',
  styleUrls: ['./visual-config-list.component.css']
})
export class VisualConfigListComponent implements OnInit {
  listConfigs: VisualConfiguration[] = [];

  constructor(private _visualConfigService: VisualConfigurationService) { }

  ngOnInit(): void {
    this.getAllConfigs();
  }

  getAllConfigs() {
    this._visualConfigService.getAllConfigs().subscribe(data => {
      console.log(data);
      this.listConfigs = data;
    }, error => {
      console.log(error);
    })
  }
}
