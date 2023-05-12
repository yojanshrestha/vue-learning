export default {
    'template': `
        <div>
            <button v-for="tag in tags"
                 @click="$emit('change',tag)" 
                 class="btn-normal"
                 :class="{'btn-blue' : currentTag == tag }"
                 >{{tag}}
             </button>
        </div>
    `,

    props:{
        intialTags: Array,
        currentTag: String
    },
    computed: {
        tags(){
            return ['all', ...new Set(this.intialTags) ]
        }
    }

}