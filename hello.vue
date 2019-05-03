<template>
    <v-layout>
        <v-flex text-xs-center>
            <hello-world />
        </v-flex>
    </v-layout>
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue';

export default {
    components: {
        HelloWorld
    }
};
</script>
