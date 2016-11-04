import { Component, OnInit } from '@angular/core';
import { TaskService, ITask, GameStatus } from "../../shared/services/task/task.service";

@Component({
  selector: 'app-result-list',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class ResultTaskComponent implements OnInit {
  public task : ITask;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.task = {
      name: 'test',
      players: [{
        name: "Pete pelaja",
        status: GameStatus.InProgress,
        tests: [
          {
            result: true,
            failedText: null
          },
          {
            result: false,
            failedText: "Hää hää"
          }]
      }]
    };

    this.taskService.getTasks().subscribe(channel => {
      this.task = <ITask> channel.Data;
    })
  }
}
