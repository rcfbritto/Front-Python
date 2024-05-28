import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';
import { tarefaStore } from '../../store/tarefa.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-tarefas.component.html',
  styleUrl: './show-tarefas.component.css'
})
export class ShowTarefasComponent implements OnInit, OnDestroy {
  tarefas: Tarefa[] = [];
  tarefas$!: Subscription;
  
  public readonly tarefaStore = inject(tarefaStore);
  
  ngOnInit(): void {
    this.tarefas$ = this.tarefaStore.tarefas().subscribe(tarefas => {
      this.tarefas = tarefas;
    })
  }

  ngOnDestroy(): void {
    this.tarefas$.unsubscribe();
  }
  
  removerTarefa(id: string) {
    this.tarefaStore.removerTarefa(id);
  }
}
