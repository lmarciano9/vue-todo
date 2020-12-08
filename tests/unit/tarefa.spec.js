import { expect } from 'chai'
import { mutations } from '../../src/store/modules/tarefa'

const tasks = [
    {id: '1', title: 'Pintar o muro',       date: '2020-12-07T16:30:00.000Z', description: 'Teste'},
    {id: '2', title: 'Comprar pão',         date: '2020-12-08T18:50:00.000Z', description: 'Teste'},
    {id: '3', title: 'Comprar frutas',      date: '2020-12-07T14:33:00.000Z', description: 'Teste'},
    {id: '4', title: 'Limpar o banheiro',   date: '2020-12-08T20:35:00.000Z', description: 'Teste'},
]

describe('Vuex/Tarefas', () => {

    it('FILTER_TASKS | As tarefas são filtradas corretamente por título', () => {
        /* Estado inicial da store */
        const state = {
            tasks: tasks,
            filteredTasks: []
        }
        
        /* Filtro que irá ser aplicado */
        const filter = {
            title: 'comprar',
            date: null
        }

        /* Executar o filtro */
        mutations.FILTER_TASKS(state, filter)

        /* Extrair resultados */
        const resultIDs = state.filteredTasks.map(e => e.id)
        const expectedIDs = ['2', '3']

        /* Somente 2 e 3 devem passar */
        expect(resultIDs).to.eql(expectedIDs)
    })

    it('FILTER_TASKS | As tarefas são filtradas corretamente por data', () => {
        /* Estado inicial da store */
        const state = {
            tasks: tasks,
            filteredTasks: []
        }
        
        /* Filtro que irá ser aplicado */
        const filter = {
            title: '',
            date: new Date('2020-12-08T22:36:51.111Z')
        }

        /* Executar o filtro */
        mutations.FILTER_TASKS(state, filter)

        /* Extrair resultados */
        const resultIDs = state.filteredTasks.map(e => e.id)
        const expectedIDs = ['2', '4']

        /* Somente 2 e 3 devem passar */
        expect(resultIDs).to.eql(expectedIDs)
    })

    it('FILTER_TASKS | As tarefas são filtradas corretamente por título e data', () => {
        /* Estado inicial da store */
        const state = {
            tasks: tasks,
            filteredTasks: []
        }
        
        /* Filtro que irá ser aplicado */
        const filter = {
            title: 'compra',
            date: new Date('2020-12-08T22:36:51.111Z')
        }

        /* Executar o filtro */
        mutations.FILTER_TASKS(state, filter)

        /* Extrair resultados */
        const resultIDs = state.filteredTasks.map(e => e.id)
        const expectedIDs = ['2']

        /* Somente 2 e 3 devem passar */
        expect(resultIDs).to.eql(expectedIDs)
    })

    it('LOAD_TASK | Uma tarefa com ID específico é carregada corretamente', () => {
        /* Estado inicial da store */
        const state = {
            tasks: tasks,
            taskForm: {}
        }

        /* Tarefa esperada */
        const expectedTask = tasks[0]
        /* Transformar em objeto Date */
        expectedTask.date = new Date(expectedTask.date)

        /* Carregar tarefa com ID 1 */
        mutations.LOAD_TASK(state, '1')

        expect(state.taskForm).to.deep.equal(expectedTask)
    })

    it('LOAD_TASK | Uma tarefa com ID inexistente não é carregada', () => {
        /* Estado inicial da store */
        const state = {
            tasks: tasks,
            taskForm: {}
        }

        /* Carregar tarefa com ID que não existe */
        mutations.LOAD_TASK(state, 'A')

        /* O objeto da store continuará no mesmo estado */
        expect(state.taskForm).to.deep.equal({})
    })

    it('REMOVE_TASK | Uma tarefa é removida corretamente', () => {
        /* Estado inicial da store */
        const state = {tasks}

        /* Referência da tarefa removida */
        const removedTask = tasks.find(t => t.id == '4')

        /* Remover ID 4 */
        mutations.REMOVE_TASK(state, '4')

        /* A tarefa removida não se encontra */
        expect(state.tasks, 'A tarefa não foi removida').to.not.include(removedTask)
    })

    it('SAVE_TASK | Uma nova tarefa é inclusa corretamente', () => {
        /* Tarefa preenchida */
        const taskForm = {
            title: 'Teste de Inclusão',
            date: new Date('2020-12-05T22:36:51.111Z'),
            description: 'Teste'
        }

        /* Estado da store após o preenchimento */
        const state = {tasks, taskForm}

        /* Salvar tarefa */
        mutations.SAVE_TASK(state)

        /* O ID foi colocado */
        expect(state.taskForm.id, 'Não foi atribuído um ID a tarefa').to.not.be.undefined

        /* A tarefa se encontra na lista */
        expect(state.tasks, 'A tarefa não foi incluída na lista').to.include(state.taskForm)
    })

    it('SAVE_TASK | Uma tarefa existente é modificada corretamente', () => {
        /* Tarefa do ID 1 modificada */
        const taskForm = {
            id: '1',
            title: 'Pintar o muro do vizinho',
            date: new Date('2020-12-04T16:30:00.000Z'),
            description: 'Usar tinta vermelha'
        }

        /* Estado da store após o preenchimento */
        const state = {tasks, taskForm}

        /* Salvar tarefa */
        mutations.SAVE_TASK(state)

        /* A tarefa se encontra na lista */
        expect(state.tasks, 'A tarefa não foi modificada na lista').to.include(state.taskForm)
    })

})