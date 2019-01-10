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
        <table class="table" width="100%" v-if="nodes.length > 0">
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
            <tr v-for="(node, nodeIdHash) in nodes" v-bind:key="nodeIdHash">
                <td>{{ node.nodeIdHash }}</td>
                <td>Testnet</td>
                <td>{{ node.nodeId.client }}</td>
                <td>{{ node.nodeId.clientVersion }}</td>
                <td>{{ node.nodeId.ip }}</td>
                <td>{{ node.nodeId.port }}</td>
                <td>{{ node.nodeId.pubKey }}</td>
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
            subtitle: 'Network Visualiser',
            nodes: [],
        }
    },

    components: {
        ChHero
    },

    created() {
        this.$options.sockets.node_announce = (data) => {
            this.nodes.push(JSON.parse(data))
            console.log(this.nodes)
        }
    },

    sockets: {
        connect() {
            console.log('socket connected')
        },
        customEmit(val) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
    },

    computed: {
        getNodes() {
            console.log(this.$store.state.nodes)
            return this.$store.state.nodes
        },
    },    
}
</script>

<style lang="scss">
</style>
