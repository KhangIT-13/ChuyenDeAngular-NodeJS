import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgxPaginationModule, FormsModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  page: number = 1; // Trang hiện tại
  itemsPerPage: number = 5; // Số lượng bản ghi mỗi trang
  constructor(
    private userService: UserService,
  ) {}
  ngOnInit(): void {
      this.userService.getAllUsers().subscribe((data) => {
        this.users = data;
      });
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.UserID !== id);
    });
  }
}
