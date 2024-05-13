import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type {
  User,
  UserResponse,
  UsersResponse,
} from '@app/interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: true,
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.getUsers();
  }

  getUsers() {
    this.#state.set({
      ...this.#state(),
      loading: true,
    });

    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .subscribe((res) => {
        this.#state.set({
          users: res.data,
          loading: false,
        });
      });
  }

  getUsersById(id: string) {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(2000),
        map((res) => res.data)
      );
  }
}
