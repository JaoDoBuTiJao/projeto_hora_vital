import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonThumbnail } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { timeOutline, calendar} from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonLabel,  IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonThumbnail, IonIcon],
})
export class Tab3Page {
  constructor() {
    addIcons({timeOutline, calendar});
  }
}
