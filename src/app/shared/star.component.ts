import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-rating",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class StarRatingComponent implements OnChanges {
    @Input() rating: number =4;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5
    }

    @Output() ratingClicked: EventEmitter<string> =
                    new EventEmitter<string>()
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked.`)
    }
}
