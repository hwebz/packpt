<template>
    <h3>{{ (isWorking ? workingTitle : restingTitle) | lowercase }}</h3>
</template>

<script>
    export default {
        data() {
            return {
                workingTitle: 'Work!',
                restingTitle: 'Rest!'
            }
        },
        props: ['isWorking']
    }
</script>