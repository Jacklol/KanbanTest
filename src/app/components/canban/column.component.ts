import { Input, Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'column',
  template: `
 
  <div class="container"> 
  <button (click)="addColumn()" class='button green  medium'>Add Column</button>
  <input [(ngModel)]="columnName" placeholder="enter name" />
    <div class="row"> 
      <div class="col column"  *ngFor="let column of columns">
      column {{column.name}}
      <button (click)="deleteColumn(column)"  class='button red small' >del</button>
      <button (click)="editColumn(column)" class='button black small'>edit</button>
      <div  *ngIf="redactColumn==column">
      <span>name</span>
      <input [(ngModel)]="column.name"  placeholder="enter name" />
      <button (click)= "onClose()"  class='button black small'>ok</button>
    </div>
      <card [column]="column.cards"></card>
    </div>
    </div>
  </div>
  `,
  styleUrls: ["./css/column.component.css"]
})
export class ColumnComponent {
  columnName = "";
  columnActive;
  redactColumn;
  itemName = ""
  columns = [];
  addColumn() {
    this.columns.push({
      "name": this.columnName,
      "cards": []
    }
    )
    console.log(this.columns);
  }
  editColumn(col) {
    this.redactColumn = col;
  }
  deleteColumn(col) {
    var pos = this.columns.indexOf(col);
    this.columns.splice(pos, 1);
  }
  onClose() {
    this.redactColumn = false;

  }
  ngOnInit() {

  }

}
