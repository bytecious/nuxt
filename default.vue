<template>
    <v-app dark class="default-layout">
        <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
        </v-navigation-drawer>
        <v-toolbar :clipped-left="clipped" fixed app>
            <v-toolbar-title v-text="title" />
            <v-spacer />
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
        <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
            <v-list>
                <v-list-tile @click.native="right = !right">
                    <v-list-tile-action>
                        <v-icon color="white" light>compare_arrows</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        Switch drawer (click me)
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
            <v-spacer></v-spacer>
            <ul>
                <li nuxt to="/">
                    <v-btn flat nuxt to="/"><v-icon color="white" light>home</v-icon> Home</v-btn>
                </li>
                <li nuxt to="/hello">
                    <v-btn flat nuxt to="/hello">
                        <v-icon color="white" light>color_lens</v-icon> Hello Component
                    </v-btn>
                </li>
            </ul>
        </v-navigation-drawer>
        <v-footer :fixed="fixed" app>
            <span>Bytecious &copy; {{ currentYear }}</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            currentYear: new Date().getFullYear(),
            title: 'Nuxt + Vue + Vuetify'
        };
    }
};
</script>

<style lang="scss">
.default-layout {
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;

        i {
            margin-right: 22px;
        }
    }
}
</style>
