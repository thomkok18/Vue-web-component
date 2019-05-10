<template>
    <button :class="[color, size, radius]">{{text}}</button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                validator: function (value) {
                    return [
                        'grey',
                        'blue',
                        'green',
                        'red',
                    ].indexOf(value) !== -1
                },
                default: 'grey'
            },
            size: {
                type: String,
                validator: function (value) {
                    return [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl',
                    ].indexOf(value) !== -1
                },
                default: 'xs'
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

<style scoped>
    /* Basic button css */
    button {
        text-align: center;
        border: none;
        cursor: pointer;
        font-weight: bold;
    }

    button:focus {
        outline: 0;
    }

    /* Grey button */
    .grey {
        background-color: #DDDDDD;
        color: black;
    }

    .grey:hover {
        background-color: #E5E5E5;
    }

    .grey:active {
        background-color: #CCCCCC;
    }

    /* Blue button */
    .blue {
        background-color: cornflowerblue;
        color: white;
    }

    .blue:hover {
        background-color: #6DA2FF;
    }

    .blue:active {
        background-color: #5782CC;
    }

    /* Green button */
    .green {
        background-color: darkolivegreen;
        color: white;
    }

    .green:hover {
        background-color: #6D873C;
    }

    .green:active {
        background-color: #425425;
    }

    /* Red button */
    .red {
        background-color: #D5191D;
        color: white;
    }

    .red:hover {
        background-color: red;
    }

    .red:active {
        background-color: #AF151A;
    }

    /* Size button */
    .xs {
        height: 20px;
        width: 40px;
    }

    .sm {
        height: 30px;
        width: 50px;
    }

    .md {
        height: 40px;
        width: 60px;
    }

    .lg {
        height: 50px;
        width: 70px;
    }

    .xl {
        height: 60px;
        width: 80px;
    }

    /* Button radius */
    .block {
        border-radius: 0;
    }

    .round {
        border-radius: 5px;
    }

    .circle {
        border-radius: 100%;
    }
</style>