var app = new Vue({
    el: '#myDomains',

    data: {
        newItem: "",
        itemList: [{
            text: "nicoledominguez.com",
            registrar: "Namecheap"
        }],
        showAddModal: false,
        registrarName: ""
    },

    methods: {
        addItem: function() {
            var task = this.newItem.trim();
            var registrar = this.registrarName.trim();

            if (task) { //if task is not an empty string
                this.itemList.push({
                    text: task,
                    registrar: registrar
                });

                this.newItem = "";
                this.registrarName = "";
                this.showAddModal = false;
            }
        },

        toggleModal: function(){
            this.showAddModal = !this.showAddModal,
            this.copy = "Add new domain"
        }
    }
});
