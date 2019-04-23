import { Component, OnInit } from '@angular/core';

import { Article } from '../article'
import { ConfigService} from '../config.service'
import { HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  Article: Article[];

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getConfig();
  }

  getConfig(): void {
    this.configService.getArticle()
      .subscribe(Article => this.Article = Article);
}


}