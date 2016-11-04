import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  public nick: string;

  constructor(
    private storage: LocalStorageService,
    private router: Router
  ) { }

  public entry() {
    this.storage.store('nick', this.nick);

    this.router.navigate(['game/editor']);
  }
}
