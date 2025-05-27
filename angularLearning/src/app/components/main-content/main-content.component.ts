import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { count } from 'rxjs';

@Component({
  selector: 'app-main-content',
  imports: [FormsModule, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

  displayCountry: string = "";
  bootstrapFormClass: string = "form-select";
  bootstrapBtnClass: string = "btn btn-success mt-5";
  displaySomething: string = "";
  isCardVisible: boolean = false;
  countryDetails: { flag: string, description: string, name: string } | null = null;

  countries: Record<string, { flag: string; description: string; name: string }>  = {
    "America": {
      flag: "https://flagcdn.com/w320/us.png",
      description: "The United States is known for its diverse culture and technological advancements.",
      name: "America"
    },
    "Russia": {
      flag: "https://flagcdn.com/w320/ru.png",
      description: "Russia is the largest country in the world by land area.",
      name: "Russia"
    },
    "India": {
      flag: "https://flagcdn.com/w320/in.png",
      description: "India is known for its rich history, culture, and the Taj Mahal.",
      name: "India"
    },
    "China": {
      flag: "https://flagcdn.com/w320/cn.png",
      description: "China has the world's largest population and a rapidly growing economy.",
      name: "China"
    }
  };

  spanClicked() {
    if (this.displayCountry && this.countries[this.displayCountry]) {
      this.isCardVisible = true;
      this.displaySomething = "Welcome to " + this.displayCountry;
      this.countryDetails = this.countries[this.displayCountry];
    }
  }
}
