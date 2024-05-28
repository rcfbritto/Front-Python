import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent {

  listaProdutos: Item[] = [
    {
      id: 1,
      name: 'Suporte de Notebook',
      price: 30.00,
      quantity: 10,
      imgURL: 'https://m.media-amazon.com/images/I/61ZqTo-kwpL._AC_SX679_.jpg'
    },
    {
      id: 2,
      name: 'Teclado e Mouse sem fio - Dell',
      price: 120.00,
      quantity: 5,
      imgURL: 'https://m.media-amazon.com/images/I/51IPtedWrsL._AC_SX679_.jpg'
    },
    {
      id: 3,
      name: 'Tab S9+ Grafite',
      price: 4000.00,
      quantity: 2,
      imgURL: 'https://m.media-amazon.com/images/I/51-jsWYkWIL.__AC_SX300_SY300_QL70_ML2_.jpg'
    },
    {
      id: 4,
      name: 'Headset Gamer AOC',
      price: 79.00,
      quantity: 3,
      imgURL: 'https://m.media-amazon.com/images/I/51n7xO1YlOL._AC_SX679_.jpg'
    },
    {
      id: 5,
      name: 'Microsoft Office 365 Personal',
      price: 139.90,
      quantity: 1,
      imgURL: 'https://m.media-amazon.com/images/I/61c2fmVAAbL._AC_SX679_.jpg'
    }
  ]

  constructor(private shoppingService: ShoppingService) {}

  adicionarItemAoCarrinho(item: Item) {
    this.shoppingService.adicionarItemAoCarrinho(item);
  }

}
