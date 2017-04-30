import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'clientes',
	template: `
		{{ titulo }}
		<br />
		<input type="text" [(ngModel)]="sales">
		<button (click)="onClick()">Enviar</button>
		`
})

export class ClienteComponent {
	@Input() titulo: string;
	@Output() showSales = new EventEmitter<number>();
	sales = 0;
	onClick(){
		this.showSales.emit(this.sales);
	}
}