import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopWidgetsComponent } from "../top-widgets/top-widgets.component";
import { SalesByMonthComponent } from "../sales-by-month/sales-by-month.component";
import { SalesByCategoryComponent } from "../sales-by-category/sales-by-category.component";
import { LastFewTransactionsComponent } from "../last-few-transactions/last-few-transactions.component";
import { TopThreeProductsComponent } from "../top-three-products/top-three-products.component";
import { NavigationEnd, Router } from '@angular/router';
import { UsersComponent } from "../users/users.component";
import { ShopsComponent } from "../shops/shops.component";
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TopWidgetsComponent, SalesByMonthComponent, SalesByCategoryComponent, LastFewTransactionsComponent, TopThreeProductsComponent, UsersComponent, ShopsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  isUsersRoute: boolean = false;
  isDashboardRoute: boolean = false;
  isShopsRoute: boolean = false;

  private isUsersRouteSubject = new Subject<boolean>(); 
  isUsersRoute$ = this.isUsersRouteSubject.asObservable();

  private isDashboardRouteSubject = new Subject<boolean>(); 
  isDashboardRoute$ = this.isDashboardRouteSubject.asObservable();

  private isShopsRouteSubject = new Subject<boolean>(); 
  isShopsRoute$ = this.isShopsRouteSubject.asObservable();

  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isUsersRoute = event.url === '/users'; 
        this.isUsersRouteSubject.next(this.isUsersRoute); 

        this.isDashboardRoute = event.url === '/dashboard';
        this.isDashboardRouteSubject.next(this.isDashboardRoute);

        this.isShopsRoute = event.url === '/shops';
        this.isShopsRouteSubject.next(this.isShopsRoute);
      }
    });
  } 
}
