import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@app/shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {}
