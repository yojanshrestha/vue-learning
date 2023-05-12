import Assignment from './Assignment.js'
export default {
    components:{
        'assignment':  Assignment
    },
    'template': `
                <section v-show="assignments.length">
                    <h2>{{title}}</h2>
            
                    <ul>
                        <assignment v-for="assignment in assignments"
                            :assignment="assignment" :key="assignment.id"/>
                    </ul>
                </section>`,

    props:{
        assignments: Array,
        title: String
    }

}