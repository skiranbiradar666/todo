import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo';
import { SnackbarService } from '../../services/snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoItem') todoItem !: ElementRef
   isInEditMode:boolean=false
  editId!:string
 todoData:Array<Itodo> = todoArr
  constructor(private _snackbar : MatSnackBar) { }

  ngOnInit(): void {
  }

onEdit(todo:Itodo){
  this.editId = todo.id;
  this.todoItem.nativeElement.value = todo.title
  this.isInEditMode=true
  
  this._snackbar.open(`The todo Item patched successfully` , "close" ,{
    horizontalPosition:'center',
    verticalPosition:'top',
    duration:2000
  })
}

onUpdate(){
  let UPDATE_OBJ: Itodo={
    title : this.todoItem.nativeElement.value,
    id:this.editId
  }
  this.todoItem.nativeElement.value=''
  let GET_INDEX=this.todoData.findIndex(t=>t.id === this.editId)
  this.todoData[GET_INDEX] = UPDATE_OBJ
  this.isInEditMode=false
  
  this._snackbar.open(`The todo Item Updated successfully` , "close" ,{
    horizontalPosition:'center',
    verticalPosition:'top',
    duration:2000
  })

}


}
