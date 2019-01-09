export default {
    socket_nodeAnnounce(context, node) {
        console.log(node)
        context.commit('SOCKET_ADD_ANNOUNCED_NODE', node)
    }
};
