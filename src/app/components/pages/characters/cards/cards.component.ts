
import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Character } from '@app/shared/interfaces/data.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
  @Input() character: Character;  

}
