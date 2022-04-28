import { Component, OnInit } from '@angular/core';

import { identifierName } from '@angular/compiler';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VisualConfiguration } from 'src/app/models/visualconfig';
import { VisualConfigurationService } from 'src/app/services/visualconfig.service';

@Component({
  selector: 'app-visual-config-add',
  templateUrl: './visual-config-add.component.html',
  styleUrls: ['./visual-config-add.component.css']
})
export class VisualConfigAddComponent implements OnInit {

  customer: VisualConfiguration | undefined;
  configForm: FormGroup;
  _id: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _configService: VisualConfigurationService,
              private aRouter: ActivatedRoute) { 
    this.configForm = this.fb.group({
      _id: [],
      customerName: ['', Validators.required],
      colorMode: ['', [Validators.required]],
      fontSize: ['', [Validators.required]],
    });

  this._id = this.aRouter.snapshot.paramMap.get('_id');
  console.log(this._id);
}

  ngOnInit(): void {
  }

  addConfig() {
    const config: VisualConfiguration = {
      _id: this.configForm.get('_id')?.value,
      customerName: this.configForm.get('customerName')?.value,
      colorMode: this.configForm.get('colorMode')?.value,
      fontSize: this.configForm.get('fontSize')?.value,
    }
    
    this._configService.addConfig(config).subscribe(data => {
      this.router.navigate(['/list-customers']);
    }, error => {
      console.log(error);
      this.configForm.reset();
      })
  }

  deleteConfig() {
    if(confirm("Are you sure to delete the configuration?")) {
      if (this._id !== null) {
        this._configService.deleteConfig(this._id).subscribe(data => {
          console.log("Configuration deleted");
        }, error => {
          console.log(error);
        });
      }
    }
    else {
      this.router.navigate(['/visual-config-list', this._id]);
    }
  }

}
