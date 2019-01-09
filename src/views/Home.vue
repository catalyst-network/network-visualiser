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
                <th>Node Id</th>
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
                <th>Node Id</th>
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
                <td>895e3c0431b5eb6579e89498275d99821a7279f3bfb00cb9f5eae7b04ab35d3f</td>
                <td>Testnet</td>
                <td>AC</td>
                <td>0.0.1</td>
                <td>172.0.10.12</td>
                <td>42069</td>
                <td>SA3pRFbZEe353SgebHdGl</td>
            </tr>
            <tr>
                <td>895e3c0431b5eb6579e89498275d99821a7279f3bfb00cb9f5eae7b04ab35d3f</td>
                <td>Testnet</td>
                <td>AC</td>
                <td>0.0.1</td>
                <td>172.0.10.12</td>
                <td>42069</td>
                <td>SA3pRFbZEe353SgebHdGl</td>
            </tr>
            <tr>
                <td>895e3c0431b5eb6579e89498275d99821a7279f3bfb00cb9f5eae7b04ab35d3f</td>
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
        this.$options.sockets.node_announce = (data) => {
            console.log(data)
        }
    },

    sockets: {
        connect() {
            console.log('socket connected')
        },
        customEmit(val) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
    }
}
</script>

<style lang="scss">
</style>
