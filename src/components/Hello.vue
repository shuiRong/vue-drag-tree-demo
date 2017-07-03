<template>
    <div class='main'>
        <a href="https://github.com/shuiRong/vue-drag-tree">
            <img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png">
        </a>
        <div class='howtouse'>
            <div class='senMain'>
                vue-drag-tree
            </div>
        </div>
        <div class='container'>
            <div class='treeSelf'>
                <vue-drag-tree :model='data' :current-highlight='true' :default-text='"新生成接点"' :hover-color='"lightblue"' :highlight-color='"green"'></vue-drag-tree>
            </div>
            <div class='showSec'>
                <pre>{{formatData}}</pre>
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
                            <strong>Double click on an item to turn it into a folder</strong>
                        </li>
                        <li>
                            You can drag and drop the tree node, even between two different levels
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <strong>双击节点，把节点转换成"文件夹"</strong>
                        </li>
                        <li>
                            你可以拖拉节点，交换两个节点的位置。当然，交换也会反映到Data里
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
                        }]
                    }]
                }, {
                    name: 'Node 1-2',
                    id: 13,
                    children: [],
                }]
            },
        }
    },
    computed: {
        formatData() {
            return JSON.stringify(this.data, null, 2)
        }
    },
    methods: {
        assignData(data) {
            this.data = data
        },vue-drag-
        curNodeClicked(model, component) {
            // 当前被点击节点的model和其所在组件.
            console.log('model', model, 'compon', component)
        },
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Tangerine|Open+Sans:300);

.main {
    display: flex;
    flex-direction: column;
    font-size: 35px;
    align-items: center;
}


.sentence {
    background: #D3DCE6;
    margin-top: 2rem;
    width: 50%;
    padding: 1rem;
    font-size: 25px;
}


.senMain {
    background: white;
    padding: 1rem;
    color: #8492A6;
}

.lang {
    font-size: 20px;
    color: #8492A6;
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
    border: 3px solid #E5E9F2;
    color: white;
    width: 40%;
    text-align: left;
    padding: 1rem;
}

.showSec {
    border: 3px solid #E5E9F2;
    width: 40%;
    text-align: left;
    padding: 1rem;
    font-size: 15px;
}

.howtouse {
    text-align: center;
    width: 30%;
    background: #E5E9F2;
    margin-top: 1rem;
    padding: 1rem;
    font-size: 50px;
    font-weight: bold;
}

.howtouse>div {
    font-family: 'Tangerine';
    font-size: 5rem;
}

.getstart>div {
    background: #D3DCE6;
    padding: 0.5rem 1rem;
}

.getstart>p {
    margin: 0.5rem 0;
}

a {
    color: black;
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
