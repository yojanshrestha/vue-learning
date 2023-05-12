export default {
    template: `
                    <button 
                    :class="{
                        'test1':true,
                        'test2':type === 'primary',
                        'test3':type === 'secondary',
                        'is-loading':processing,
                    }"
                    :disabled="processing" 
                    @click="toggle">
                    <slot/>
                    </button>
                `,
    mounted() {
        // alert('hello');
    },
    data() {
        return {
            // 'processing': false
        }
    },
    methods: {
        toggle() {
            alert('toggle');
            // this.processing = !this.processing;
        }
    },

    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    }
}