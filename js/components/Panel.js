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
            <div v-if="$slots.footer" style="border-top: 1px dotted black; margin-top:5px; padding-top:5px">
                <slot name="footer"/>
            </div>
        </div>
    `,
    props:{
        theme: String
    }
}