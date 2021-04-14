import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                    <nav>
                        <a routerLink=""></a>
                        <a routerLink="/profile"></a>
                    </nav>
                    <router-outlet></router-outlet>
                    </div>`
})
export class AppComponent {}
