<template>
    <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6>
            <div class="text-xs-center">
                <vuetify-logo />
            </div>
            <v-card>
                <v-btn color="primary" flat nuxt to="/hello">
                    Go to Hello World!!!!
                </v-btn>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import VuetifyLogo from '~/components/VuetifyLogo.vue';

export default {
    components: {
        VuetifyLogo
    }
};
</script>
