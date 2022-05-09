const App = {
data(){
 return{
     title: "Notes",
     placeholderString: "Write something here...",
     inputValue: '',
     notes: ["Note1","Note2","Note154"]
  }
 },
methods: {

inputChangeHandler(event) {
    this.inputValue = event.target.value
},
addNewNote(){
    this.notes.push( this.inputValue)
    this.inputValue = ''
}
 }

}

Vue.createApp(App).mount('#app')