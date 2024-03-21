import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
export type Task = {
  done: boolean;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  template: `
      <h1 class="text-blue-500 bg-gray-200 py-4 text-xl text-center">
        Another cool todolist :> 
      </h1>
      <ul>
        <li *ngFor="let task of tasks">
          <button [class.line-through]="task.done" (click)="toggleDoneStatus(task)">
            {{ task.name }}
          </button>
        </li>
        </ul>
  `,
})
export class AppComponent {
  title = 'project-menagment-app';

  tasks = [
    {
      name: "Task1",
      done: false,
    },
    {
      name: "Task2",
      done: true,
    },
  ];
  toggleDoneStatus(task: Task) {
    task.done = !task.done

  }
}
