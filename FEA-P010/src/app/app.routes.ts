import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { CarrinhoComprasComponent } from './components/carrinho-compras/carrinho-compras.component';

export const routes: Routes = [
    { path: 'produtos', component: ListaProdutosComponent },
    { path: 'carrinho', component: CarrinhoComprasComponent },
    { path: '', redirectTo: '/produtos', pathMatch: 'full' }
];
