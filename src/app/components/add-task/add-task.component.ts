import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  date: string = '';
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.date,
      reminder: this.reminder,
    };

    //todo: emit event

    this.text = '';
    this.date = '';
    this.reminder = false;
  }
}
