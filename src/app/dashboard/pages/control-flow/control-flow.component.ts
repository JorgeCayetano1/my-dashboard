import { Component, signal } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>([
    'Angular',
    'Vue',
    'Svelte',
    'Qwik',
    'React',
  ]);

  public frameworks2 = signal<string[]>([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
