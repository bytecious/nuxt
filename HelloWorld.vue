<style lang="scss">
.hello-title {
    text-transform: uppercase;
}
</style>

<template>
    <div>
        <h1 class="hello-title" :style="{ color: randomColor }">{{ text }}</h1>
        <button @click="randomizeColor()">Randomize</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'Hello World!!',
            randomColor: '#FFFFFF'
        };
    },

    mounted() {},

    methods: {
        randomizeColor() {
            this.randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
};
</script>
