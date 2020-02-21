import { TodoItem } from '../interfaces/todo-item';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
  <div>
  <input type="checkbox"
         class="todo-checkbox"
         (click)="completeItem()"/>
         <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
  {{ item.title }}
</span>
</div>
    <button class="btn btn-purple" (click)="removeItem()">
      remove
    </button>
  </div>
`,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  // put this method below ngOnInit
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }
  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.item);
  }
}
