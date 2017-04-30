import { Injectable } from '@angular/core';
import { Cliente } from './cliente';


@Injectable()

export class ClientesService{
	getClientes():Cliente[]{
		let clientes = [
			{ id:1,name:'Maria' },
			{ id:2,name:'Carlos' }
		]
		return clientes;
	}
	getClienteId(id:number): Cliente[]{
		let clientes = this.getClientes();
		let cliente = clientes.filter(item => item.id == id);
		return cliente;
	}
}