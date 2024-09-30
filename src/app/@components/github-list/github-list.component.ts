import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/user';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-github-list',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterLink, RouterLinkActive, UserItemComponent],
  templateUrl: './github-list.component.html',
  styleUrl: './github-list.component.scss',
  providers: [GithubService]
})
export class GithubListComponent implements OnInit {
  users: User[] = [];
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser().subscribe(users => {
      this.users = users;
    });
  }
  
}
