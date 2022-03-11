import { Component, NgZone } from '@angular/core';
import { subscribers } from '@rxjs-insights/console';
import {
  asapScheduler,
  filter,
  interval,
  map,
  Observable,
  of,
  scheduled,
  share,
  switchMap,
  take,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly ngZone: NgZone) {}

  runSimple() {
    const subscription = of(1, 2, 3)
      .pipe(
        map((x) => x * x),
        filter((x) => x % 2 !== 0)
      )
      .subscribe();
    subscribers(subscription);
  }

  runComplex() {
    const subscription = zip([of(1, 2, 3), of('a', 'b', 'c')])
      .pipe(
        switchMap(([num, str]) => {
          return new Observable((observer) => {
            for (let i = 0; i < num; i++) {
              observer.next(str);
            }
            observer.complete();
          });
        })
      )
      .subscribe();
    subscribers(subscription);
  }

  runAsync() {
    const subscription = interval(100).pipe(take(10)).subscribe();
    subscribers(subscription);
  }

  runAsyncOutsideAngular() {
    this.ngZone.runOutsideAngular(() => this.runAsync());
  }

  runShared() {
    const shared = scheduled([1, 2, 3], asapScheduler).pipe(share());
    shared.pipe(map((x) => 1 / x)).subscribe();
    shared.pipe(map((x) => x / 3)).subscribe();
    subscribers(shared);
  }
}
