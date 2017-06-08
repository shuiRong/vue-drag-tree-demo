<template>
    <div class='main'>
        <div class='container'>
            <div class='treeSelf'>
                <item :model='treeData'></item>
            </div>
            <div class='showSec'>
                <tree-view :data="treeData" :options="{maxDepth: 3}"></tree-view>
            </div>
        </div>
        <div id='sentence'>
            <p>
                <strong>
                    (You can drag and drop the tree node, even between two different levels)
                </strong>
            </p>
            <p>(You can double click on an item to turn it into a folder)</p>
            <p>(It has not a nice style, I know,have not much time.)</p>
            <p>(I am appreciated for any PR.)</p>
            <p>
                (This is project is beased on
                <a href='https://jsfiddle.net/yyx990803/3p0j5sgy/?utm_source=website&utm_medium=embed&utm_campaign=3p0j5sgy' target='_blanket'>A Sample of Vue.js</a>)
            </p>
        </div>
    </div>
</template>

<script>
import TreeCom from '@/components/TreeCom'
import { mapState } from 'vuex'

export default {
    name: 'Hello',
    computed: mapState([
        'treeData',
    ]),
    components: {
        item: TreeCom,
    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    font-size: 35px;
}

.container {
    display: flex;
    margin: 1rem;
    justify-content: space-between;
    padding: 0 5rem;
}

.treeSelf {
    background: black;
    color: white;
    width: 40%;
    text-align: left;
    padding: 1rem;
}

.showSec {
    width: 40%;
    text-align: left;
    background: #F9FAFC;
    padding: 1rem;
}

#sentence {
    color: black;
    text-align: center;
}
</style>
