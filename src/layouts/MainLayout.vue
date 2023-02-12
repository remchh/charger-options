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

     <!-- <q-page-container>
      <router-view v-slot="{ Component }" :cellData="cellData">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view> 
    </q-page-container> -->

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
        <!-- :disable="disable" -->
        <div class="q-gutter-y-md column" style="width: 250px; max-width: 100%">
          <q-input
            v-model="text"
            @keyup.enter="getResults(index)"
            :disable="disable" 
            class="q-ml-md"
            placeholder="Search here"
            dark
            dense
            standout
          >
            <template v-slot:append>
              <q-icon
                v-if="text === ''"
                @click="getResults(index)"
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
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<!--PARENT COMPONENT-->
<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const disable = ref(true)
const rightDrawerOpen = ref(false)
const text = ref('')

const toggleRightDrawer = () => {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }

let index = ref(0)
let cellData = ref({})

function validateText(text) {
    let wordCount = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            wordCount++
        }
    }
    return wordCount >= 1
}

const getResults = async(index) => {
  console.log('results frontend')
  try {
    const isValid = validateText(text.value)
    console.log(isValid)
    if (isValid === true) {
      const search = await axios(`http://localhost:8000/search/${text.value}`)

      let searchURL = search.data[index].url
      text.value = ''
      const response = await axios(`http://localhost:8000/device/${searchURL}`)
      cellData.value = {
        img: response.data.img,
        title: response.data.title,
        bat: response.data.spec_detail[11].specs[0].value,
        charge: response.data.spec_detail[11].specs[1].value,
        name: search.data[1].name,
        url: search.data[1].url,
        data: search.data
      }

      console.log(searchURL)
      console.log(typeof(searchURL))
      console.log(text.value)
      console.log(search.data)
      console.log(cellData.value.img)
      console.log(cellData.value.title)
      console.log(cellData.value.bat)
      console.log(cellData.value.charge)
      
      
    } else {
      $q.notify({
        icon: 'warning',
        progress: true,
        color: 'negative',
        message: 'Please be more specific 😀',
        position: 'center',
      })
      text.value = ''
      disable.value = !disable.value
    }
      disable.value = !disable.value
  
  }catch(err) {
    console.log(err)
  }
}

const emitter = inject('emitter')
emitter.on('pass-index', async(index) => {   // *Listen* for event
      console.log('myevent received!', `index: ${index}`)
        try {
        
          let searchURL = cellData.value.data[index].url

          const response = await axios(`http://localhost:8000/device/${searchURL}`)
          cellData.value = {
            img: response.data.img,
            title: response.data.title,
            bat: response.data.spec_detail[11].specs[0].value,
            charge: response.data.spec_detail[11].specs[1].value,
            name: '',
            url: '',
            data: ''
          }
        }catch(err) {
          console.log(err)
        }
      
    })
emitter.on('pass-value', () => {
  disable.value = !disable.value
})
emitter.on('pass-value-ondeactivated', () => {
  disable.value=true
})
emitter.on('pass-value-updated', () => {
  disable.value=true
})


</script>
