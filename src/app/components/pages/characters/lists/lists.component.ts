
import { Component} from '@angular/core';
import { DataService } from '@shared/services/data.service';

@Component({
  selector: 'app-lists',
  template: `
  <section class="character__list">
    <app-cards 
      *ngFor="let character of characters$ | async" [character]="character" >
    </app-cards>
</section>
  `,
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
 characters$ = this.dataSvc.characters$;

  constructor(
    private dataSvc: DataService) { }
}
