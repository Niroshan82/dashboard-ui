import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDashboard,
         faLocation,
         faShop,
         faBox,
         faMoneyBill,
         faChartBar,
         faContactBook,
         faHand,
         faUser
         } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faUser = faUser;

  constructor(private router: Router){

  }

  navigateToUsers(){
    console.log('user component starts');
    this.router.navigate(['/users']);
  }

  navigateToDashboard(){
    console.log('dashboard component starts');
    this.router.navigate(['/dashboard']);
    }

  navigateToShops(){
    console.log('shops component starts');
    this.router.navigate(['/shops']);
    }
}
