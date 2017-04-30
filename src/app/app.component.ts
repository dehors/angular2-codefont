import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';
	subtitle = 'msg from another component';
	name = 'Juan';
	url = 'https://angular.io/resources/images/logos/angular/angular.png';
	alto = 50;
	ancho = 50;
	message_ = 'hi';
	messageModel = 'menssage databinding';
	sales = 0;

	changeMessage(){
		this.message_ = 'bye';
	}
	onChange(valor){
		console.log(valor);
		this.messageModel = this.messageModel+'.';
	}
	showData(valor){
		this.sales = valor;
		console.log(valor);
	}
}