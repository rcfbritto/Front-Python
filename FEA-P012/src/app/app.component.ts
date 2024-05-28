import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTarefaComponent } from './components/input-tarefa/input-tarefa.component';
import { ShowTarefasComponent } from './components/show-tarefas/show-tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTarefaComponent, ShowTarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEA-P012';
}
