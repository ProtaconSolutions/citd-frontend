import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  code$: Observable<any>;
  control: FormControl = new FormControl();
  userInput: string;

  constructor() { }

  ngOnInit() {
    this.code$ = this.control.valueChanges
      .map((userInput) => {
        console.log(userInput);

        return userInput;
      })
      .debounceTime(100)
      .map((userInput) => {
        this.userInput = userInput;

        // Send userInput to backend
      })
    ;

    this.code$.subscribe();
  }
}
