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
      <router-view />
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

const getResults = async() => {
  console.log('results')
  try {
    const response = await axios('http://localhost:3000/device/apple_iphone_13_pro_max-11089')
    console.log(response)
  }catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

//http://localhost:3000/device/apple_iphone_13_pro_max-11089 /device/:device
//http://localhost:3000/brand/apple-phones-48 /brand/:brand
//http://localhost:3000/search/casio /search/:device
</script>
