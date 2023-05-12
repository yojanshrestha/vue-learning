export default {
    'template': `
        <form @submit.prevent="addAssignment">
            <input type="text" v-model="newAssignment" placeholder="New Assignment ..."/>
            <button type="submit">Add</button>
        </form>
    `,

    data(){
        return {
            newAssignment: ''
        }
    },

    methods: {
        addAssignment() {
            // alert('add:: '+ this.newAssignment );
            this.$emit('addNew', this.newAssignment);
            this.newAssignment = '';
        }
    }
}