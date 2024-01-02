import { Component, inject } from '@angular/core';
import { GifListComponent } from './ui/gif-list.component';
import { RedditService } from '../shared/data-access/reddit.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <app-gif-list
        infiniteScroll
        (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
        [gifs]="redditService.gifs()"
        class="grid-container"
    />
  `,
  imports: [GifListComponent, InfiniteScrollModule]
})
export default class HomeComponent {
    redditService = inject(RedditService);
}