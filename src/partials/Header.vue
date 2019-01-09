<template>
    <ch-navbar class="is-fixed-top is-dark">

    </ch-navbar>
</template>

<script>
import ChNavbar from '../ch-components/components/Navbar.vue'

export default {
    components: {
        ChNavbar
    }
}
</script>

<style lang="scss">
.navbar-brand,
.navbar-start,
.navbar-end {
    svg.svg-inline--fa {
        margin-right: 0.5em;
    }
}
</style>
