import { DataService } from '@shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  template: `
  <section class="container">
    <ul class=".episodes__list">
        <li *ngFor="let episode of episodes$ | async">
            {{ episode.episode}}- {{episode.name}}

        </li>
    </ul>
</section>
  `,
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {
episodes$ = this.dataSvc.episodes$;
  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
  }

}
