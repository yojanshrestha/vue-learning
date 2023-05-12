import Assignment from './Assignment.js'
export default {
    components:{
        'assignment':  Assignment
    },
    'template': `
                <section v-show="filteredAssignments.length">
                    <h2>{{title}} <span>({{filteredAssignments.length}})</span></h2>
            
                    <div>
                        <button v-for="tag in tags"
                         @click="currentTag = tag" 
                         class="btn-normal"
                         :class="{'btn-blue' : currentTag == tag }"
                         >{{tag}}</button>
                    </div>
                    <ul>
                        <assignment v-for="assignment in filteredAssignments"
                            :assignment="assignment" :key="assignment.id"/>
                    </ul>
                </section>`,

    data(){
      return {
          currentTag: 'all'
      }
    },
    props:{
        assignments: Array,
        title: String,
    },
    computed:{
        tags(){
            return ['all', ...new Set(this.assignments.map(a=>a.tag)) ]
        },
        filteredAssignments(){
            return this.currentTag =='all' ? this.assignments : this.assignments.filter( a=>a.tag === this.currentTag)
        }
    }

}