export default {
    SOCKET_ADD_ANNOUNCED_NODE(state, node) {
        const nodeItem = {};
        nodeItem[node.nodeIdHash] = node.nodeId;
        state.nodes.push(nodeItem)
    }
};
