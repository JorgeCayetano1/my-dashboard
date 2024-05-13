import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@app/services/users.service';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  standalone: true,
  imports: [RouterModule, TitleComponent],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}
