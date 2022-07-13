<template>
    <div>
        Hello Yall: 
        <component :is="component"/>
    </div>
</template>
<script>

let component = {
    computed: {
        nested() {
            return {
                value: 'Hello world',
            }
        }
    },
    template: '<pre>{{nested.value}}</pre>',
}

export default {
    data() {
        return {
            component,
        }
    }
}
</script>