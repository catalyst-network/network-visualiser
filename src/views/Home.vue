<template>
    <!-- Photo by Magnus S on Unsplash -->
    <ch-hero
        class="is-danger is-bold is-medium has-text-centered"
        bg-img-url="../assets/image.png"
    >
        <img
            src="../assets/charcoal-logo.svg"
            width="150"
        >
        <h1 class="title is-1">
            {{ title }}
        </h1>
        <h2 class="subtitle">
            {{ subtitle }}
        </h2>
        <table class="table" width="100%">
            <thead>
            <tr>
                <th>Node Identifier</th>
                <th>Network</th>
                <th>Client</th>
                <th>Version</th>
                <th>Ip</th>
                <th>Port</th>
                <th>Public Key</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>Node Identifier</th>
                <th>Network</th>
                <th>Client</th>
                <th>Version</th>
                <th>Ip</th>
                <th>Port</th>
                <th>Public Key</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>414330310000000000000000000000005cf2a455534133705246625a456533353353676562486447</td>
                <td>Testnet</td>
                <td>AC</td>
                <td>0.0.1</td>
                <td>172.0.10.12</td>
                <td>42069</td>
                <td>SA3pRFbZEe353SgebHdGl</td>
            </tr>
            <tr>
                <td>414330310000000000000000000000005cf2a455534133705246625a456533353353676562486447</td>
                <td>Testnet</td>
                <td>AC</td>
                <td>0.0.1</td>
                <td>172.0.10.12</td>
                <td>42069</td>
                <td>SA3pRFbZEe353SgebHdGl</td>
            </tr>
            <tr>
                <td>414330310000000000000000000000005cf2a455534133705246625a456533353353676562486447</td>
                <td>Testnet</td>
                <td>AC</td>
                <td>0.0.1</td>
                <td>172.0.10.12</td>
                <td>42069</td>
                <td>SA3pRFbZEe353SgebHdGl</td>
            </tr>
            </tbody>
        </table>
    </ch-hero>

</template>

<script>
import ChHero from '../ch-components/layout/Hero.vue'

export default {
    data() {
        return {
            title: 'Catalyst',
            subtitle: 'Network Visualiser'
        }
    },

    components: {
        ChHero
    },

    created() {

    }
}
</script>

<style lang="scss">
</style>
