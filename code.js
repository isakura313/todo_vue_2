const todoListApp = {
    data() {
        return {
            message: "Купить крекер",
            list: ["Выучить HTML", "Найти кота"]
        }
    },
    methods: {
        addToList(){
            this.list.push(this.message)
        },
        deleteItem(e){
            const index = e.target.getAttribute("data-index");
            this.list.splice(index, 1)
        }
    }
}
Vue.createApp(todoListApp).mount('#todo-list');