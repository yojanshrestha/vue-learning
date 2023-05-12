import Assignment from './Assignment.js'
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {Assignment, AssignmentTags},
    'template': `
                <section v-show="filteredAssignments.length">
                    <h2>{{title}} <span>({{filteredAssignments.length}})</span></h2>
                    
                    <assignment-tags v-model:currentTag="currentTag" :intial-tags="assignments.map(a=>a.tag)" />
<!--                    <assignment-tags :current-tag="currentTag" @change="currentTag = $event" :intial-tags="assignments.map(a=>a.tag)" />-->
<!--                    <assignment-tags :current-tag="currentTag" @change="tagClicked" :intial-tags="assignments.map(a=>a.tag)" />-->
                    
                    <ul>
                        <assignment v-for="assignment in filteredAssignments"
                            :assignment="assignment" :key="assignment.id"/>
                    </ul>
                </section>`,

    data() {
        return {
            currentTag: 'all'
        }
    },
    props: {
        assignments: Array,
        title: String,
    },
    computed: {
        filteredAssignments() {
            return this.currentTag == 'all' ? this.assignments : this.assignments.filter(a => a.tag === this.currentTag)
        }
    },
    methods: {
        tagClicked(tag) {
            this.currentTag = tag;
        }
    }

}