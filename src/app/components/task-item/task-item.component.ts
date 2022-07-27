import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Output() removeTaskEvent: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminderEvent: EventEmitter<Task> = new EventEmitter();

  @Input() task!: Task;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  removeTask(task: Task) {
    this.removeTaskEvent.emit(task);
  }

  onToggleReminder(task: Task) {
    this.toggleReminderEvent.emit(task);
  }
}
