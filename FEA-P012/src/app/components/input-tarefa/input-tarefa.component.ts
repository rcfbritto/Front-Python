import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tarefaStore } from '../../store/tarefa.store';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-input-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-tarefa.component.html',
  styleUrl: './input-tarefa.component.css'
})
export class InputTarefaComponent {
  newTask = '';
  public readonly tarefaStore = inject(tarefaStore);

  constructor() {}

  addTask() {
    const tarefa: Tarefa = {
      id: this.generateId(),
      descricao: this.newTask
    }
    this.tarefaStore.adicionarTarefa(tarefa);
    this.newTask = '';
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
