import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      <h2>Heavy Loaders Slow</h2>
      <p>This component takes 3 seconds to load.</p>
      <p class="{{ cssClass }}">Heavy Loaders Slow</p>
    </section>
  `,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true })
  public cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('cargado!');
  }
}
