import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColumnComponent } from './components/canban/column.component';
import { CardComponent } from './components/canban/card.component';
import { DragulaModule } from 'ng2-dragula';
import { Ng2DragDropModule } from 'ng2-drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DragulaModule,
    Ng2DragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
