import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.sass'],
  animations: [
    trigger('buttonClick', [
      state('clicked', style({
        transform: 'scale(1.1)'
      })),
      transition('* => clicked', [
        animate('200ms ease-out')
      ])
    ])
  ]
})

export class ListasComponent {
  tasks: string[] = [];
  newTask: string = '';
  updatedTasks: { [task: string]: string } = {};
  buttonState: string = '';

  addTask() {
    const confirmed = window.confirm('You add task ?');
    if (confirmed) {
      if (this.newTask) {
        console.log(this.tasks)
        this.tasks.push(this.newTask);
        this.newTask = ""
      }
    }
  }

  removeTask(task: string) {
    console.log(this.tasks)
    const index = this.tasks.indexOf(task)
    const confirmed = window.confirm('You elimined task ?');
    if (confirmed) {
      if (index !== -1) {
        this.tasks.splice(index, 1)
      }
    }
  }

  editTask(task: string, updateTask: string) {
    console.log(this.tasks)
    const index = this.tasks.indexOf(task)
    const confirmed = window.confirm('You edit task ?');
    if (confirmed) {
      if (index !== -1) {
        this.tasks[index] = updateTask
      }
    }
  }
};