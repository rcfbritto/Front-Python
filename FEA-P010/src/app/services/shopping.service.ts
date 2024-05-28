import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  itensNoCarrinho: Item[] = [];

  constructor() { }

  adicionarItemAoCarrinho(item: Item) {
    this.itensNoCarrinho.push(item);
  }

  removerItemDoCarrinho(item: Item) {
    this.itensNoCarrinho = this.itensNoCarrinho.filter(i => i.id !== item.id);
  }

  getItensNoCarrinho(): Item[] {
    return this.itensNoCarrinho;
  }
}
