<template>
    <div>
        <h1>My Vue Web Component</h1>
        <div>My name is {{ name }}</div>
    </div>
</template>

<script>
    export default {
        props: ['name']
    }
</script>