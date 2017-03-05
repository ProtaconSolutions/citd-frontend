/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryComponent } from './entry.component';
import { Ng2Webstorage, LocalStorageService } from 'ng2-webstorage';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('/src/app/game/entry/entry.component.ts', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;

  beforeEach(async(() => {
    const fakeLocalStorageService = {
      store: (nick: string) => nick,
    };

    const fakeRouter = {
      navigate: (url: string) => url,
    };

    TestBed.configureTestingModule({
      declarations: [
        EntryComponent,
      ],
      imports: [
        FormsModule,
        Ng2Webstorage,
      ],
      providers: [
        {
          provide: LocalStorageService,
          useValue: fakeLocalStorageService,
        },
        {
          provide: Router,
          useValue: fakeRouter,
        },
      ]
    })
    .compileComponents()
    .then(() => { });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
