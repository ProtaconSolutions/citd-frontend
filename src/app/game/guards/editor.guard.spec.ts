import { TestBed, inject} from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';

import { EditorGuard } from './editor.guard';

class StubLocalStorageService {
  private data = {};

  store(key: string, value: any): void {
    this.data[key] = value;
  }

  retrieve(key: string): any {
    return this.data[key];
  }
}

describe('Guard: /src/app/game/guards/editor.guard.ts', () => {
  const route: any = {};
  const state: any = {};

  beforeEach(() => {
    const fakeRouter = {
      navigate: (url: string) => url,
    };

    TestBed.configureTestingModule({
      providers: [
        EditorGuard,
        {
          provide: LocalStorageService,
          useClass: StubLocalStorageService,
        },
        {
          provide: Router,
          useValue: fakeRouter,
        },
      ],
    });
  });

  it('should return true if nick in local storage', inject(
    [EditorGuard, LocalStorageService],
    (guard: EditorGuard, storage: LocalStorageService) => {
      storage.store('nick', 'foo');

      expect(guard.canActivate(route, state)).toBeTruthy();
    })
  );

  it('should return false if nick is not in local storage', inject(
    [EditorGuard],
    (guard: EditorGuard) => {
      expect(guard.canActivate(route, state)).not.toBeTruthy();
    })
  );

  it('should redirect user if nick is not in local storage', inject(
    [EditorGuard, Router],
    (guard: EditorGuard, router: Router) => {
      spyOn(router, 'navigate');

      guard.canActivate(route, state);

      expect(router.navigate).toHaveBeenCalledWith(['/game/entry']);
    })
  );
});
