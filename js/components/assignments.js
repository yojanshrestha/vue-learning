import AssignmentList from './AssignmentList.js'
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    'template': `
                <assignment-list title="In-Progress Assignments" :assignments="filters.inProgress">
                    <assignment-create @addNew="add"/>
                </assignment-list>
                
<!--                showComplete is emited to parent since this can be used to hide parent element as well if any.-->
                <assignment-list v-show="showCompleted"
                    can-toggle
                    @toggleClose="showCompleted = !showCompleted"
                    title="Complete Assignments" 
                    :assignments="filters.completed"/>
                
                
            `,

    data() {
        return {
            assignments: [],
            showCompleted: true,
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            })
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
        add(newAssignment) {
            this.assignments.push({
                name: newAssignment, complete: false, id: this.assignments.length +1
            });
        }
    }
}