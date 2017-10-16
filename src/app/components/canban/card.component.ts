import {Input, Component, EventEmitter, Output, OnInit} from '@angular/core';
import {environment } from "../../const";
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'card',
  template: `

<div>
    <input [(ngModel)]="itemName" placeholder="enter text" />
    <button (click)="addCard(column)" class='button green  medium'>add</button>
</div>
  <ul>  
 <li class=" cardx"  *ngFor="let item of column">
    <div *ngIf="redactItem!==item"> 
        {{item.name}}
        {{item.date| date: 'dd/MM/yy HH:mm'}}
        by {{user}}
        <button (click)="edit(item)"  class='button black small'>edit</button>
        <button  (click)="onDelete(item)"  class='button red small'>delete</button>
    </div>
    <div  class="redactItem" *ngIf="redactItem==item">
        <span>text</span>
        <input [(ngModel)]="item.name"  placeholder="enter text" />
        <button (click)= "onClose()"  class='button black small'>ok</button>
    </div>
 </li>
 </ul>
  
  `,
  styleUrls: ["./css/card.component.css"]
})
export class CardComponent {
    droppedItems=[];
    redactItem=false;
    itemName="";
    user:string;
  
    @Input() column: [any];
    edit(item){
        this.redactItem=item;
    }
    onDelete(item){
        var pos = this.column.indexOf(item);
		this.column.splice(pos,1);
    }
    onClose() {
		this.redactItem = false;
		
    }
    addCard(col){
        var pos = this.column.indexOf(col);
        var newDate = new Date();
        this.column.push({
          "name":this.itemName,
          "date":newDate,
        })
        console.log(col);
      }
ngOnInit() {
  
   console.log(environment)
    this.user=environment.user;
  }

}
