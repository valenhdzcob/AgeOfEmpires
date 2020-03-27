import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgeOfEmpires';

  constructor (public dialog : MatDialog) {

  }

  openDialog(){
    const formconf = new MatDialogConfig();
    
    formconf.disableClose = true;
    formconf.autoFocus = true;
    formconf.width="full-width";

    let dialogR = this.dialog.open(FormComponent, formconf);

    dialogR.afterClosed().subscribe(result =>
      {
        console.log(result);
      })
  }
  
  posts = [];
}
