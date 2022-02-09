import {Component} from '@angular/core';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<app-memory-killer *ngIf="killCycle$|async"></app-memory-killer>',
})
export class AppComponent {
  // change 1 to 1000 to slow down the memory killer
  killCycle$ = timer(0, 1).pipe(map(k => k % 2 !== 0));
}

@Component({
  selector: 'app-memory-killer',
  template: `
    <div class="memory-killer">
      <app-memory-killer2></app-memory-killer2>
      <app-memory-killer2></app-memory-killer2>
      <app-memory-killer2></app-memory-killer2>
    </div>
  `,
  styles: [`.memory-killer { display: flex; }`]
})
export class MemoryKillerComponent { }

@Component({
  selector: 'app-memory-killer2',
  template: `
    <div class="memory-killer2">
      <div>Killing your memory</div>
      <div>Killing your memory</div>
      <div>Killing your memory</div>
    </div>
  `,
  styles: [`.memory-killer2 { display: flex; }`],
})
export class MemoryKiller2Component { }
