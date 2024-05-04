const app = new Vue({
    el:"#app",
    data:{
        tarefas:[
            {title:'Revisar capítulo 5', describe:'Revisar e fazer anotações detalhadas sobre o capítulo 5 do livro para o próximo exame',id:Math.random(), done:false},
            {title:'Pesquisar artigos',describe:'Realizar uma pesquisa abrangente de artigos acadêmicos relacionados ao tema do projeto de pesquisa',id:Math.random(), done:false},
        ],
        erro:{msg:' [Erro]: não e posivel adicionar uma tarefa vazia',done:false},

        title : '',
        descrition:'',
        

    },
    //metodos da aplicação
    methods: {
        //marca como concluido, pegando o parametro do checkbox de cada tarefa
        toggle(tarefa){
            tarefa.done = !tarefa.done
        },

        // adc e um função disparada por um botão que pega como parametro o title e o descrition que esta nos inpuyt text e descrition e cria um objeto onde o push adciona ao array principal,
        //no caso o TAREFA\s
        adc(title,descrition){
            if(title || descrition != ""){
                this.tarefas.push({title:title,describe:descrition,id:Math.random(), done:false})
                this.title = ''
                this.descrition =''
                this.erro.done = false
            }
            else{
                this.erro.done = true
                
            }
        },

        deletar(tarefa){
            //esssa função serve para PESQUISAR e deletar um item/objeto expecifico do arrai

            //função buscar os objetos e devolve um novo aray na var (pos)
            pos = this.tarefas.map(function(e) { return e.id })
            //aqui vai falar quala a posição do array e armazenar na var (lugar)
            lugar = pos.indexOf(tarefa.id)

            //aqui vai deletar o item com base na posição passada pela var(lugar), e o 1 e o tendo de itens que vai ser deletado apos o Lugar qua no caso e um
            this.tarefas.splice(lugar,1)
        }

    }
})