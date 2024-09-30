import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { Repo } from '../../models/Repo';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [NgIf],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss'
})
export class GithubComponent {
  userId: string = '';
  repos: Repo[] = [];
  constructor(route: ActivatedRoute, private githubService: GithubService) {
    route.params.subscribe(user => {
      this.userId = user['id'];
      this.getRepos();
    });
  }

  getRepos() {
    this.githubService.getUserRepo(this.userId).subscribe(repos => {
      this.repos = repos;
    });
  }

}
