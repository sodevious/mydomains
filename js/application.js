
var Child = {
    template: '<div class="app-new">A custom component!</div>'
}


new Vue({
  el: '#myDomains',
  
  data: {
    newTask: "",
    taskList: [],
    showAddModal: false,
    isActive: false
  },
  
  components: {
   'add-modal': Child
 },

  methods: {
    addTask: function() {
      //trim() is used to remove whitespace from both ends of a string
      var task = this.newTask.trim();
      //if task is not an empty string
      if (task) {
        //Push an object containing the task to the taskList array
        this.taskList.push({
          text: task
        });
        //Reset newTask to an empty string so the input field is cleared
        this.newTask = "";
      }
  },
  toggleModal: function(){
       this.showAddModal = !this.showAddModal,
       this.isActive = !this.isActive
   }

  }  
  
});

