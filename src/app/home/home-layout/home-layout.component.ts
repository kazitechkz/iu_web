import {Component} from '@angular/core';
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

    protected readonly faChevronUp = faChevronUp;
}
