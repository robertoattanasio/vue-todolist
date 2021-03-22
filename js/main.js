var app = new Vue({
    el: "#root",
    data: {
        insertItem: '',
        toDoList: ['fare la spesa', 'fare il bucato', 'andare in palestra', 'studiare per l\'esercitazione'],
    },

    methods: {
        removeItem(indexItem) {
            this.toDoList.splice(indexItem, 1);
        },

        pushItem(insertItem) {
            // CHECK: se il valore è una stringa vuota o già esistente non viene aggiunto.
            if (this.insertItem == '') {
                alert('Non è possibile inserire valori vuoti.');
            } else if (this.toDoList.includes(insertItem.toLowerCase())) {
                alert('Non è possibile inserire un valore esistente.');
            } else {
                this.toDoList.push(insertItem.toLowerCase());
            }
        }
    },

    created: function() {
        // Tasto Enter che invia il contenuto dell'input field
        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 13) {
                this.pushItem(this.insertItem);
            }
        })
    }
});