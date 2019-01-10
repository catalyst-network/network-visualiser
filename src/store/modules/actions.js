export default {
    SOCKET_NODE_ANNOUNCE(context, node) {
        console.log('trace')
        console.log(node)
        context.commit('SOCKET_ADD_ANNOUNCED_NODE', node)
    }
};
