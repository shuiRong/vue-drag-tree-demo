<template>
    <div class='a'>
        <div :id='model.id' @click="toggle" @dblclick="changeType" draggable='true' v-on:dragstart='dragStart' v-on:dragend='dragEnd' v-on:dragover='dragOver' v-on:dragenter='dragEnter' v-on:drop='drop' class='b'>
            {{model.name}}
            <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>
        <div class='c' v-show="open" v-if="isFolder">
            <item v-for="model in model.children" :model="model" :key='model.id'>
            </item>
            <div class='d' @click="addChild">+</div>
            <div class="e" @click="removeChild">-</div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

let count = 1
let id = 1000
let fromData = ''
let toData = ''

export default {
    props: {
        model: Object,
    },
    data: function () {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function () {
            return this.model.children &&
                this.model.children.length
        }
    },
    methods: {
        ...mapMutations([
            'transformData',
        ]),
        toggle: function () {
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        changeType: function () {
            if (!this.isFolder) {
                this.$set(this.model, 'children', [])
                this.addChild()
                this.open = true
            }
        },
        addChild: function () {
            this.model.children.push({
                name: 'new stuff' + count++,
                id: id++
            })
        },
        removeChild: function () {
            this.model.children.pop()
        },
        dragStart(e) {
            fromData = this.model
            e.dataTransfer.effectAllowed = "move";
        },
        dragEnd(e) {
            this.transformData({ from: fromData, to: toData })
        },
        dragOver(e) {
            // console.log('drag-over')
            e.preventDefault()
        },
        dragEnter(e) {
            // console.log('drag-enter')
        },
        drop(e) {
            toData = this.model
        },
    },
    beforeCreate: function () {
        this.$options.components.item = require('./TreeCom')
    }
}
</script>

<style>
.item {
    cursor: pointer;
}

.bold {
    font-weight: bold;
}

ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
}

.b {
    margin: 2px;
}

.c {
    margin-left: 1.3rem;
}

.d,
.e {
    width: 1rem;
}
</style>
