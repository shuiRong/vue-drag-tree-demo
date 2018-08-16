<template>
  <div class='main'>
    <a href="https://github.com/shuiRong/vue-drag-tree">
      <img style="position: absolute; top: 0; right: 0; border: 0;" src="../assets/fork.png">
    </a>
    <div class='howtouse'>
      <div class='senMain'>
        vue-drag-tree
      </div>
    </div>
    <div class='container'>
      <div class='treeSelf'>
        <vue-drag-tree :data='data' :allowDrag='allowDrag' :allowDrop='allowDrop' :defaultText='"New Node"' @current-clicked='curNodeClicked' @drag="dragHandler" @drag-enter="dragEnterHandler" @drag-leave="dragLeaveHandler" @drag-over="dragOverHandler" @drag-end="dragEndHandler" @drop="dropHandler"></vue-drag-tree>
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
      data: [
        {
          name: 'Node 0-0',
          id: 0,
          children: [
            {
              name: 'Node 1-1',
              id: 3,
              children: [
                {
                  name: 'Node 2-1',
                  id: 4,
                  children: []
                },
                {
                  name: 'Node 2-2',
                  id: 10,
                  children: []
                }
              ]
            },
            {
              name: 'Node 1-2',
              id: 13,
              children: []
            }
          ]
        },
        {
          name: 'Node 0-1',
          id: 14,
          children: []
        }
      ]
    }
  },
  computed: {
    formatData() {
      return JSON.stringify(this.data, null, 2)
    }
  },
  methods: {
    allowDrag(model, component) {
      return true
    },
    allowDrop(model, component) {
      return true
    },
    curNodeClicked(model, component) {
      // 当前被点击节点的model和其所在组件.
      // console.log('curNodeClicked', model, component);
    },
    dragHandler(model, component, e) {
      // console.log('dragHandler: ', model, component, e);
    },
    dragEnterHandler(model, component, e) {
      // console.log('dragEnterHandler: ', model, component, e);
    },
    dragLeaveHandler(model, component, e) {
      // console.log('dragLeaveHandler: ', model, component, e);
    },
    dragOverHandler(model, component, e) {
      // console.log('dragOverHandler: ', model, component, e);
    },
    dragEndHandler(model, component, e) {
      // console.log('dragEndHandler: ', model, component, e);
    },
    dropHandler(model, component, e) {
      // console.log('dropHandler: ', model, component, e);
    }
  }
}
</script>

<style scoped>
@import url(../assets/font.css);

.main {
  display: flex;
  flex-direction: column;
  font-size: 35px;
  align-items: center;
}
.sentence {
  background: #d3dce6;
  margin-top: 2rem;
  width: 50%;
  padding: 1rem;
  font-size: 25px;
}
.senMain {
  background: white;
  padding: 1rem;
  color: #8492a6;
}
.lang {
  font-size: 20px;
  color: #8492a6;
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
  border: 3px solid #e5e9f2;
  color: white;
  width: 40%;
  text-align: left;
  padding: 1rem;
}
.showSec {
  border: 3px solid #e5e9f2;
  width: 40%;
  text-align: left;
  padding: 1rem;
  font-size: 15px;
}
.howtouse {
  text-align: center;
  width: 30%;
  background: #e5e9f2;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 50px;
  font-weight: bold;
}
.howtouse > div {
  font-family: 'Tangerine';
  font-size: 5rem;
}
.getstart > div {
  background: #d3dce6;
  padding: 0.5rem 1rem;
}
.getstart > p {
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
