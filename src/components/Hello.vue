<template>
    <div class='main'>
        <div class='howtouse'>
            <div class='senMain'>
                vue-drag-tree
            </div>
        </div>
        <div class='container'>
            <div class='treeSelf'>
                <vue-drag-tree :model='data'></vue-drag-tree>
            </div>
            <div class='showSec'>
                <tree-view :data="data" :options="{maxDepth: 4}"></tree-view>
            </div>
        </div>
        <div class='sentence'>
            <div class='senMain'>
                <div class='lang'>
                    <span @click='en = true'>
                        EN
                    </span>
                    /
                    <span @click='en = false'>
                        中文
                    </span>
                </div>
                <ul>
                    <template v-if='en'>
                        <li>
                            You can drag and drop the tree node, even between two different levels
                        </li>
                        <li>Double click on an item to turn it into a folder</li>
                        <li>
                            Project is beased on
                            <a href='https://jsfiddle.net/yyx990803/3p0j5sgy/?utm_source=website&utm_medium=embed&utm_campaign=3p0j5sgy' target='_blanket'>A Sample of Vue.js</a>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            你可以拖拉节点，交换两个节点的位置。当然，交换也会反映到Data里
                        </li>
                        <li>双击节点，把节点转换成"文件夹"</li>
                        <li>
                            项目基于
                            <a href='https://jsfiddle.net/yyx990803/3p0j5sgy/?utm_source=website&utm_medium=embed&utm_campaign=3p0j5sgy' target='_blanket'>A Sample of Vue.js</a>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class='sentence'>
            <div class='senMain getstart'>
                <h3>Getting Start</h3>
                <h4>Install</h4>
                <div>
                    npm install vue-drag-tree --save
                </div>
                <h4>Usage</h4>
                <p>main.js</p>
                <div>
                    import Vue from 'vue'
                    <br> import VueDragTree from 'vue-drag-tree'
                    <br>
                    <br> Vue.component('vue-drag-tree', VueDragTree)
                </div>
                <p>
                    <a href='https://github.com/shuiRong/vue-drag-tree' target='_blanket'>more...</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hello',
    data() {
        return {
            en: false,
            data: {
                name: 'Root',
                id: 0,
                children: [{
                    name: 'Node 1-1',
                    id: 3,
                    children: [{
                        name: 'Node 2-1',
                        id: 4,
                        children: [{
                            name: 'Node 3-1',
                            id: 5,
                            children: [],
                        }]
                    }, {
                        name: 'Node 2-2',
                        id: 10,
                        children: [{
                            name: 'Node 3-2',
                            id: 11,
                            children: [],
                        }, {
                            name: 'Node 3-3',
                            id: 12,
                            children: [],
                        }]
                    }]
                }, {
                    name: 'Node 1-2',
                    id: 13,
                    children: [],
                }, {
                    name: 'Node 1-3',
                    id: 14,
                    children: [],
                }]
            },
        }
    },
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    font-size: 35px;
    align-items: center;
}


.sentence {
    background: #BA68C8;
    margin-top: 2rem;
    width: 50%;
    padding: 1rem;
    font-size: 25px;
}

.senMain {
    background: #7B1FA2;
    padding: 1rem;
    color: white;
}

.lang {
    font-size: 20px;
    color: #CE93D8;
    font-weight: bold;
}

ul {
    margin-left: 1rem;
}

.container {
    width: 60%;
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    padding: 0 5rem;
}

.treeSelf {
    background: #BA68C8;
    color: white;
    width: 40%;
    text-align: left;
    padding: 1rem;
}

.showSec {
    width: 40%;
    text-align: left;
    background: #BA68C8;
    padding: 1rem;
}

.howtouse {
    text-align: center;
    width: 30%;
    background: #BA68C8;
    margin-top: 1rem;
    padding: 1rem;
    font-size: 50px;
    font-weight: bold;
}

.getstart>div {
    background: #BA68C8;
    padding: 0.5rem 1rem;
}

.getstart>p {
    margin: 0.5rem 0;
}

a {
    color: white;
}
</style>

<style>
.tree-view-item-key {
    font-size: 20px;
    color: black;
}

.tree-view-item-value {
    font-size: 20px;
    font-weight: bold;
    color: white;
}
</style>
