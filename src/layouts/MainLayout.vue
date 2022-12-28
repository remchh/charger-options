<template>
  <q-layout view="hHh lpR fFf">


      <q-drawer
        v-model="rightDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="500"
        side="right"
        bordered
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item exact clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item exact clickable v-ripple to="/about">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                About
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Support
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Contact 
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view :cellData="cellData"/>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn round dense flat icon="menu" class="q-mr-xs" @click="toggleRightDrawer" />

        <q-space />

        <q-input dark dense standout placeholder="Search here" v-model="text"  class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" @click="getResults"/>
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'


const rightDrawerOpen = ref(false)
const text = ref('')

const toggleRightDrawer = () => {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
let cellData = ref({})
const getResults = async() => {
  console.log('results frontend')
  try {
    const response = await axios('http://localhost:8000/test')
    console.log(response.data.title)
    console.log(response.data.img)
    cellData.value = response.data
    console.log(cellData.value)
    console.log(cellData.value.spec_detail[11].specs[0].value)
    console.log(cellData.value.spec_detail[11].specs[1].value)
  
  }catch(err) {
    console.log(err)
  }
}






</script>
