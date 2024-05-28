import { Component, OnInit, computed, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Item } from '../../models/item.model';
import { ShoppingService } from '../../services/shopping.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-carrinho-compras',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './carrinho-compras.component.html',
  styleUrl: './carrinho-compras.component.css'
})
export class CarrinhoComprasComponent implements OnInit {
  itensNoCarrinho: Item[] = []

  constructor(private shoppingService: ShoppingService) { }

  listaItens = signal(this.itensNoCarrinho);

  ngOnInit(): void {
    this.itensNoCarrinho = this.shoppingService.getItensNoCarrinho();
    this.listaItens.set(this.itensNoCarrinho);
  }

  removerItemDoCarrinho(item: Item) {
    this.shoppingService.removerItemDoCarrinho(item);
    this.listaItens.set(this.shoppingService.getItensNoCarrinho()); 
  }

  precoTotal = computed(() => {
    return this.listaItens().reduce((acc, item) => acc + (item.price), 0);
  });
}
