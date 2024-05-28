import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TarefaState } from '../../store/tarefa.reducer';
import { Tarefa } from '../../../models/tarefa.model';
import { adicionarTarefa } from '../../store/tarefa.action';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-tarefa.component.html',
  styleUrl: './input-tarefa.component.css'
})
export class InputTarefaComponent {
  newTask = "";

  constructor(private store: Store<TarefaState>) { }

  addTask() {
    const newTarefa: Tarefa = {
      id: this.generateId(),
      descricao: this.newTask
    }

    this.store.dispatch(adicionarTarefa({ tarefa: newTarefa }));
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
