export default {
    'template': `
        <div :class="{
                'panel':true,
                'panel-gray': theme == 'gray'
                }">
             <h2 v-if="$slots.heading">
                <slot name="heading"/>
            </h2>
            <div>
                <slot/>
            </div>
            <div v-if="$slots.footer">
                <slot name="footer"/>
            </div>
        </div>
    `,
    props:{
        theme: String
    }
}