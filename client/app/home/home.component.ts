import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  article = new Article();
  articles: Article[] = [];
  isLoading: boolean; 

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe(
      data => { this.articles = data,
      console.log(this.articles);
    },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

}
