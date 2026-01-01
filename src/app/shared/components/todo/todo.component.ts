import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo';
import { SnackbarService } from '../../services/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoInput') todoInput!:ElementRef
 todoData:Array<Itodo> = todoArr
  constructor(private snack:SnackbarService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

   addTodo(){  
    const todoValue = this.todoInput.nativeElement.value;
    const newTodo:Itodo = {
      id:Date.now().toString(),
      title: todoValue,
    }

    this.snack.showSuccess("Todo Added Successfully");
    this.todoData.push(newTodo);
    this.todoInput.nativeElement.value = '';
    }
    

    onTodoRemove(id:string){
     let matConfig = new MatDialogConfig()
     matConfig.disableClose = true
     matConfig.width = "500px"
     let matDialogRef = this.matDialog.open(GetConfirmComponent,matConfig)
     matDialogRef.afterClosed()
      .subscribe(res=>{
       if(res){
        let getIndex = this.todoData.findIndex(todo=>todo.id === id)
        this.todoData.splice(getIndex,1)
        this.snack.showSuccess(`The todo item with id ${id} is removed successfully!!!`)
       }
      })
    }

  }

