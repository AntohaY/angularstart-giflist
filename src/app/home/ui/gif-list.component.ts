import { Component, Input } from '@angular/core';
import { Gif } from '../../shared/interfaces';
import { GifPlayerComponent } from './gif-player.component';

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
            </div>
        }
    `,
    imports: [GifPlayerComponent]
})

export class GifListComponent {
    @Input({  required: true }) gifs!: Gif[];
}