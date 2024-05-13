import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@app/shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-option.component.html',
})
export default class DeferOptionComponent {}
