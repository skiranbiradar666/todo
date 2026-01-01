import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoInput') todoInput!:ElementRef
 todoData:Array<Itodo> = todoArr
  constructor(private snack:SnackbarService) { }

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
    
    

  }

