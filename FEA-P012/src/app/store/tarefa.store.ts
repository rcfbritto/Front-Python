import { BehaviorSubject } from 'rxjs';
import { patchState, signalStore, withMethods, withState, } from "@ngrx/signals";
import { Tarefa } from "../models/tarefa.model";

export const tarefaStore = signalStore(
    { providedIn: 'root' },
    withState(
        {
            tarefas: new BehaviorSubject<Tarefa[]> ([
                { id: '1', descricao: 'Aprender Angular com a residencia TIC18 do CEPEDI'},
                { id: '2', descricao: 'Aprender NgRx com a residencia TIC18 do CEPEDI'},
                { id: '3', descricao: 'Aprender Redux com a residencia TIC18 do CEPEDI'},
            ])
        },
    ),
    withMethods(
        (store) => ({
            adicionarTarefa(tarefa: Tarefa) {
                //patchState(store, { tarefas: [...store.tarefas(), tarefa] });
                const novasTarefas = [...store.tarefas().getValue(), tarefa];
                store.tarefas().next(novasTarefas);
            },
            removerTarefa(id: string) {
                //patchState(store, { tarefas: store.tarefas().filter(tarefa => tarefa.id !== id) });
                const novasTarefas = store.tarefas().getValue().filter(tarefa => tarefa.id!== id);
                store.tarefas().next(novasTarefas);
            }
        })
    ),
);