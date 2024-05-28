import { atualizarTarefa } from './../../store/tarefa.action';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../../models/tarefa.model';
import { TarefaState } from '../../store/tarefa.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectorSelecionaTarefa } from '../../store/tarefa.seletors';
import { removerTarefa } from '../../store/tarefa.action';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './show-tarefas.component.html',
  styleUrl: './show-tarefas.component.css'
})
export class ShowTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [{id: '1', descricao: 'Descrição 1'},];
  tasks$!: Observable<TarefaState>;
  tarefaParaAtualizar!: Tarefa;
  nomeTarefa!: string;

  constructor(private store: Store<{tarefas: TarefaState}>) { }

  ngOnInit(): void {
    this.tasks$ = this.store.select(selectorSelecionaTarefa);
    this.tasks$.subscribe((task) => {
      this.tarefas = task.tarefas;
    });
  }

  removeTarefa(id: string) {
    this.store.dispatch(removerTarefa({id: id}));
  }

  selecionarIndexTarefa(index: number) {
    this.tarefaParaAtualizar = this.tarefas[index];
  }

  atualizarTarefa() {
    const tarefa: Tarefa = {
      id: this.tarefaParaAtualizar.id,
      descricao: this.nomeTarefa
    };
    this.store.dispatch(atualizarTarefa({tarefa: tarefa}));
    this.nomeTarefa = '';
  }
}
