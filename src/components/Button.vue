<template>
    <button :class="[color, size, radius]"  class="test">{{text}}</button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true
            },
            color: {
                type: String,
                validator: function (value) {
                    return [
                        'blue',
                        'green',
                    ].indexOf(value) !== -1
                },
                default: 'xs'
            },
            size: {
                type: String,
                validator: function (value) {
                    return [
                        'xs',
                        'sm',
                    ].indexOf(value) !== -1
                },
                default: ''
            },
            radius: {
                type: String,
                validator: function (value) {
                    return [
                        'block',
                        'round',
                        'circle',
                    ].indexOf(value) !== -1
                },
                default: 'block'
            }
        }
    }
</script>

<style>
    .blue {
        background-color: cornflowerblue;
        color: white;
    }

    .green {
        background-color: darkolivegreen;
        color: white;
    }

    .xs {
        height: 20px;
        width: 40px;
    }

    .sm {
        height: 30px;
        width: 50px;
    }

    .block {
        border-radius: 0;
    }

    .round {
        border-radius: 5px;
    }

    .circle {
        border-radius: 100%;
    }

    .test {

        text-align: center;
        border: none;
        cursor: pointer;
        font-weight: bold;
    }
</style>