<template>
    <div class='calculator'>
        <div class="display">{{current || 0}}</div>
        <div @click="clear" class="btn">C</div>
        <div @click="sign" class="btn">+/-</div>
        <div @click="del" class="btn">Del</div>
        <div @click="divide" class="btn operator">÷</div>
        <div @click="append('7')" class="btn">7</div>
        <div @click="append('8')" class="btn">8</div>
        <div @click="append('9')" class="btn">9</div>
        <div @click="times" class="btn operator">x</div>
        <div @click="append('4')" class="btn">4</div>
        <div @click="append('5')" class="btn">5</div>
        <div @click="append('6')" class="btn">6</div>
        <div @click="minus" class="btn operator">-</div>
        <div @click="append('3')" class="btn">3</div>
        <div @click="append('2')" class="btn">2</div>
        <div @click="append('1')" class="btn">1</div>
        <div @click="add" class="btn operator">+</div>
        <div @click="append('0')" class="btn zero">0</div>
        <div @click="comma" class="btn">,</div>
        <div @click="equal" class="btn operator">=</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                current: '',
            }
        },
        methods: {
            clear() {
                this.current = '';
            },
            sign() {
                if (this.current.charAt(0) === '-') {
                    this.current = this.current.slice(1);
                } else if (this.current.charAt(0) !== '-') {
                    this.current = '-' + this.current
                } else {
                    `${this.current}`;
                }
            },
            del() {
                this.current = this.current.slice(0, -1);
            },
            append(number) {
                this.current = this.current + number;
            },
            comma() {
                let lastValue = this.current.charAt(this.current.length - 1);

                if (!['', '.', '+', '-', '/', '*'].includes(lastValue)) {
                    this.current = this.current + '.';
                } else if (lastValue === '') {
                    this.current = 0 + '.';
                }
            },
            divide() {
                const lastValue = this.current.charAt(this.current.length - 1);

                if (!['', '.', '+', '-', '/', '*'].includes(lastValue)) {
                    this.current = this.current + '/';
                }
            },
            times() {
                const lastValue = this.current.charAt(this.current.length - 1);

                if (!['', '.', '+', '-', '/', '*'].includes(lastValue)) {
                    this.current = this.current + '*';
                }
            },
            minus() {
                const lastValue = this.current.charAt(this.current.length - 1);

                if (!['', '.', '+', '-', '/', '*'].includes(lastValue)) {
                    this.current = this.current + '-';
                }
            },
            add() {
                const lastValue = this.current.charAt(this.current.length - 1);

                if (!['', '.', '+', '-', '/', '*'].includes(lastValue)) {
                    this.current = this.current + '+';
                }
            },
            equal() {
                this.current = eval(this.current).toString();
            }
        }
    }
</script>

<style scoped>
    div {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .calculator {
        text-align: center;
        font-size: 40px;
        display: grid;
        width: 400px;
    }

    .display {
        grid-column: 1 / 5;
        background-color: #333;
        color: white;
    }

    .zero {
        grid-column: 1 / 3;
    }

    .btn {
        background-color: #F2F2F2;
        border: 1px solid #999;
        cursor: pointer;
    }

    .btn:hover {
        background-color: #FFFFFF;
    }

    .btn:active {
        background-color: #DBDBDB;
    }

    .operator {
        background-color: #FF8C00;
        color: white;
    }

    .operator:hover {
        background-color: orange;
    }

    .operator:active {
        background-color: #E28F00;
    }
</style>