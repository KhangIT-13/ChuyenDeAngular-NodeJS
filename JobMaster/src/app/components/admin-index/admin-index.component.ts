import { Component } from '@angular/core';
import { PublishListComponent } from '../publish-list/publish-list.component';
import { ApplicationListComponent } from '../application-list/application-list.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-admin-index',
  standalone: true,
  imports: [PublishListComponent, ApplicationListComponent, UserListComponent],
  templateUrl: './admin-index.component.html',
  styleUrl: './admin-index.component.css'
})
export class AdminIndexComponent {

}
