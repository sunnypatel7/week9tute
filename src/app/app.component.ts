import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "week 9 angular";
  name: string;
  price: number;
  unit: number;
  date: Date;
  data = [];
  item = {
    name: this.name,
    price: this.price,
    unit: this.unit,
    date: this.date
  };
  newItem() {
    console.log(this.item);
    this.data.push({
      name: this.item.name,
      price: this.item.price,
      unit: this.item.unit,
      date: this.item.date
    });
  }

  clearItems() {
    this.data = [];
  }
}
