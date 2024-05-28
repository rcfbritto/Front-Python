import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTarefaComponent } from './components/input-tarefa/input-tarefa.component';
import { ShowTarefasComponent } from './components/show-tarefas/show-tarefas.component';
import { Observable } from 'rxjs';
import { TarefaState } from './store/tarefa.reducer';
import { Store } from '@ngrx/store';
import { selectorSelecionaTarefa } from './store/tarefa.seletors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, InputTarefaComponent, ShowTarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEA-P011';
  tarefas$: Observable<TarefaState>;

  constructor(private store: Store<{ tarefas: TarefaState }>) {
    this.tarefas$ = store.select(selectorSelecionaTarefa);
  }
}
