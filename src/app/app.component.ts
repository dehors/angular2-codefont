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
	show = true;
	debt = 100;
	city = 'Quito';
	users = [
		{id:1, name:'a',lastname:'d'},
		{id:2, name:'b',lastname:'e'},
		{id:3, name:'c',lastname:'f'}
	];
	color = true;
	tfuente = "x-large";

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
	Add(){
		let user = {id:4, name:'g',lastname:'h'};
		this.users.push(user);
	}
	delete(user){
		let index = this.users.indexOf(user);
		this.users.splice(index,1);
	}
	setClass(){
		let clases = {
			colorText: this.color,
			Borde: this.color
		}
		return clases;
	}
	ActiveClass(){
		this.color = !this.color;
	}
	setStyles(){
		let styles = {
			'font-style':'italic',
			'font-weight':'bold',
			'font-size':'20px'
		}
		return styles;
	}
}