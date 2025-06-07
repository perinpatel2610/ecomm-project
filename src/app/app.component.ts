import { Component } from '@angular/core';
import { SellerService } from './services/seller.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecomm-project';

  constructor(public dialog: MatDialog) {}

  
  
}
