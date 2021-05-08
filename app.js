const USERGOAL  =  {
    data(){
        return{
            counter : "Welcome app to do",
            messages : "",
            link : "https://v3.vuejs.org/guide/template-syntax.html#directives"
        }
    },methods: {
        clickMessage(){
            this.messages = "you click message"
                //.split('')
                //.reverse()
                //.join('')
        }
    },beforeMount() {
        alert("Before Mount")
    },created() {
        alert("Created ")
    },beforeCreate() {
        alert("Before Create")
    },mounted() {
        alert("mounted")
    },beforeUpdate() {
        alert("Before Update")
    },updated() {
        alert("Updated")
    },beforeUnmount() {
        alert("Before Unamount")
    },unmounted() {
        alert("Unamounted")
        
    },errorCaptured: (err, vm, info) => {
        alert(info)
    },


}


Vue.createApp(USERGOAL).mount('#userGoal');
Vue.createApp(USERGOAL).onUpdated(() => {
    ('#userGoal1')
}),('#userGoal');



