/*
* File: app.ts
* Author: Nagy Áron
* Copyright: 2026, Nagy Áron
* Group: Szoft II-N
* Date: 2026-09-30
* Github: https://github.com/lopnifox/
* Licenc: MIT
*/


import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gula');
}
