export default {
    transformData(state, {
        from,
        to
    }) {
        from = JSON.parse(JSON.stringify(from))
        to = JSON.parse(JSON.stringify(to))

        // copy一个,最后再赋值给state.treeData.这样能保证值的变化都会触发视图刷新(因为JS判断引用类型是否相同是根据内存地址.)
        let treeData = JSON.parse(JSON.stringify(state.treeData))
        let nodeStack = [treeData]
        let status = 0

        // 广度优先遍历,找到涉及数据交换的两个对象.然后交换数据.
        while (!(status === 2)) {
            let item = nodeStack.shift()
            if (item.id == from.id) {
                item.id = to.id
                item.name = to.name
                if (to.children && to.children.length > 0) {
                    item['children'] = to.children
                } else {
                    item.children = []
                }
                status++
                //找到后,跳出当前循环.
                continue;
            }
            if (item.id == to.id) {
                item.id = from.id
                item.name = from.name
                if (from.children && from.children.length > 0) {
                    item['children'] = from.children
                } else {
                    item.children = []
                }
                status++
                //找到后,跳出当前循环.
                continue;
            }
            if (item.children && item.children.length > 0) {
                nodeStack = nodeStack.concat(item.children)
            }
        }
        state.treeData = treeData
    }
}