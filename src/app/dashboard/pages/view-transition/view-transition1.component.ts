import { Component } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 1"></app-title>
    <section class="flex justify-start">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1;"
      />

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2;"
      ></div>
    </section>
  `,
})
export default class ViewTransitionComponent {}
