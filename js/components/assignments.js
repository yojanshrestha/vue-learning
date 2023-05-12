import AssignmentList from './AssignmentList.js'

export default {
    components: {
        'assignmentList': AssignmentList
    },
    'template': `
                <assignmentList title="In-Progress Assignments" :assignments="filters.inProgress"/>
                <assignmentList title="Complete Assignments" :assignments="filters.completed"/>
            `,

    data() {
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1},
                {name: 'Read Chapter 4', complete: false, id: 2},
                {name: 'Turn in homework', complete: false, id: 3}
            ]
        }
    },

    computed: {
        // completedAssignment() {
        //     return this.assignments.filter(a => a.complete)
        // },
        // inProgressAssignment() {
        //     return this.assignments.filter(a => !a.complete)
        // },

        filters(){
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            };
        }
    }
}