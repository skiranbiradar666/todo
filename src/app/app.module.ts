import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule } from '@angular/material/snack-bar';


import { AppComponent } from './app.component';
import { TodoComponent } from './shared/components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
