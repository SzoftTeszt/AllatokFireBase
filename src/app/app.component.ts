import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FireBaseJa';
  constructor (private modalService: NgbModal){  }
  public open(modal:any){
    this.modalService.open(modal)
  }
}
