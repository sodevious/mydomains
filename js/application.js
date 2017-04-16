
var Child = {
    template: '<div class="modal-mask">A custom component!</div>'
}


new Vue({
  el: '#myDomains',
  
  data: {
    newTask: "",
    taskList: [],
    showAddModal: false 
  },
  
  components: {
   'add-modal': Child
 },

  //This is where we will hold the methods we want to use in our application
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
    }
  }  
  
});

