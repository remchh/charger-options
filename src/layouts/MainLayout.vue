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
        <q-btn
          @click="toggleRightDrawer"
          class="q-mr-xs"
          icon="menu"
          dense
          flat
          round
        />

        <q-space />

        <q-input
          v-model="text"
          @keyup.enter="getResults"
          class="q-ml-md"
          placeholder="Search here"
          dark
          dense
          standout
        >
          <template v-slot:append>
            <q-icon
              v-if="text === ''"
              @click="getResults"
              name="search"
            />
            <q-icon
              v-else
              @click="text = ''"
              class="cursor-pointer"
              name="clear"
            />
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
    const search = await axios(`http://localhost:8000/search/${text.value}`)
    let searchURL = search.data[0].url
    const response = await axios(`http://localhost:8000/device/${searchURL}`)
    cellData.value = {
      img: response.data.img,
      title: response.data.title,
      bat: response.data.spec_detail[11].specs[0].value,
      charge: response.data.spec_detail[11].specs[1].value
    }
    console.log(searchURL)
    console.log(text.value)
    console.log(search.data)
    console.log(cellData.value.img)
    console.log(cellData.value.title)
    console.log(cellData.value.bat)
    console.log(cellData.value.charge)

    text.value = ''
  
  }catch(err) {
    console.log(err)
  }
}






</script>
