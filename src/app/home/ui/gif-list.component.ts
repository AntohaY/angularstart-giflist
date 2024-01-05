import { Component, Input, inject } from '@angular/core';
import { Gif } from '../../shared/interfaces';
import { GifPlayerComponent } from './gif-player.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { WINDOW } from '../../shared/utils/injection-tokens';

@Component({
    selector: 'app-gif-list',
    standalone: true,
    template: `
        @for (gif of gifs; track gif.permalink) {
            <div>
                <app-gif-player
                    [src]="gif.src"
                    [thumbnail]="gif.thumbnail"
                ></app-gif-player>
                <mat-toolbar class="gif-toolbar" color="primary">
                    <span>{{ gif.title }}</span>
                    <span class="toolbar-spacer"></span>
                    <button
                        mat-icon-button
                        (click)="window.open('https://reddit.com/' + gif.permalink)"
                    >
                        <mat-icon>comment</mat-icon>
                    </button>
                </mat-toolbar>
            </div>
        } @empty {
            <p>Can't find any gifs</p>
        }
    `,
    imports: [GifPlayerComponent, MatToolbarModule, MatIconModule],
    styles: [
        `
          div {
            margin: 1rem;
            filter: drop-shadow(0px 0px 6px #0e0c1ba8);
          }

          .gif-toolbar {
            white-space: break-spaces;
            justify-content: space-between;
            padding: 3rem;
          }
    
          p {
            font-size: 2em;
            width: 100%;
            text-align: center;
            margin-top: 4rem;
          }
        `,
      ],
})

export class GifListComponent {
    @Input({  required: true }) gifs!: Gif[];

    window = inject(WINDOW);
}