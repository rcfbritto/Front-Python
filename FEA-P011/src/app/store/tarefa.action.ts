import { createAction, props } from "@ngrx/store";
import { Tarefa } from "../../models/tarefa.model";

export const adicionarTarefa = createAction(
    '[Tarefa] Adicionar Tarefa',
    props<{ tarefa: Tarefa }>()
);

export const removerTarefa = createAction(
    '[Tarefa] Remover Tarefa',
    props<{ id: string }>()
);

export const atualizarTarefa = createAction(
    '[Tarefa] Atualizar Tarefa',
    props<{ tarefa: Tarefa }>()
);
