import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarLeasingCalculatorComponent } from '../components/car-leasing-calculator/car-leasing-calculator.component';



@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [RouterOutlet, CarLeasingCalculatorComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
