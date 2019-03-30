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
        <vue-drag-tree :data='data' :allowDrag='allowDrag' :allowDrop='allowDrop' :defaultText='"New Node"' @current-clicked='curNodeClicked' @drag="dragHandler" @drag-enter="dragEnterHandler" @drag-leave="dragLeaveHandler" @drag-over="dragOverHandler" @drag-end="dragEndHandler" @drop="dropHandler" :disableDBClick='false' expand-all></vue-drag-tree>
      </div>
      <div class='showSec'>
        <pre>{{formatData}}</pre>
      </div>
    </div>
    <div class='sentence'>
      <a href='https://github.com/shuiRong/vue-drag-tree' target='_blanket'>View Documentation</a>
    </div>
    <iframe src="https://ghbtns.com/github-btn.html?user=shuiRong&repo=vue-drag-tree&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
    <a href="https://996.icu" target='_blank'><img src="https://img.shields.io/badge/link-996.icu-red.svg"></a>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      en: false,
      data: [
        {
          name: "Node 0-0",
          id: 0,
          children: [
            {
              name: "Node 1-1",
              id: 3,
              children: [
                {
                  name: "Node 2-1",
                  id: 4,
                  children: []
                },
                {
                  name: "Node 2-2",
                  id: 10,
                  children: []
                }
              ]
            },
            {
              name: "Node 1-2",
              id: 13,
              children: []
            }
          ]
        },
        {
          name: "Node 0-1",
          id: 14,
          children: []
        }
      ]
    };
  },
  computed: {
    formatData() {
      return JSON.stringify(this.data, null, 2);
    }
  },
  methods: {
    allowDrag(model, component) {
      return true;
    },
    allowDrop(model, component) {
      return true;
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
};
</script>

<style scoped>
@font-face {
  font-family: "Tangerine";
  src: url("../assets/Tangerine-Regular.ttf");
}

.main {
  display: flex;
  flex-direction: column;
  font-size: 35px;
  align-items: center;
}
.sentence {
  margin: 2rem auto;
  font-size: 25px;
}

a {
  text-decoration: none;
  color: #8492a6;
}
.senMain {
  background: white;
  padding: 1rem;
  color: #8492a6;
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
  font-family: "Tangerine", cursive;
  font-size: 5rem;
}
</style>
