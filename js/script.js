var app = new Vue({
    el: '#root',
    data: {
        newTodo:'',
        list:[
            'fare la spesa',
            'fare il bucato',
            'fare i compiti'
        ],
    },
    methods: {
        // per aggiungere un nuovo elemento alla lista
        addNewTodo(){
            if(this.newTodo.length > 0){
                this.list.push(this.newTodo);
                this.newTodo = '';
            }
        },
        // per rimuovere l'elemento selezionato tramite l'icona 'x' 
        removeTodo(index){
            this.list.splice(index,1);
        },
    },
})