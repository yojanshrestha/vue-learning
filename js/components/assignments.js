import AssignmentList from './AssignmentList.js'

export default {
    components: {
        'assignmentList': AssignmentList
    },
    'template': `
                <assignmentList title="In-Progress Assignments" :assignments="filters.inProgress"/>
                <assignmentList title="Complete Assignments" :assignments="filters.completed"/>
                
                <form @submit.prevent="add">
                    <input type="text" v-model="newAssignment" placeholder="New Assignment ..."/>
                    <button type="submit">Add</button>
                </form>
            `,

    data() {
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1},
                {name: 'Read Chapter 4', complete: false, id: 2},
                {name: 'Turn in homework', complete: false, id: 3}
            ],
            newAssignment: ''
        }
    },

    computed: {
        // completedAssignment() {
        //     return this.assignments.filter(a => a.complete)
        // },
        // inProgressAssignment() {
        //     return this.assignments.filter(a => !a.complete)
        // },

        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            };
        }
    },

    methods: {
        add(e) {
            // alert('add:: '+ this.newAssignment );
            this.assignments.push({
                name: this.newAssignment, complete: false, id: this.assignments.length +1
            });
            this.newAssignment = '';
        }
    }
}