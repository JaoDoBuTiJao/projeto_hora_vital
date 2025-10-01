import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonThumbnail, IonInput, IonButton, IonCheckbox} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonLabel,  IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonThumbnail, IonIcon, IonInput, IonButton, IonCheckbox],
})
export class Tab2Page {

  constructor() {
    addIcons({ addCircleOutline });
  }

}
