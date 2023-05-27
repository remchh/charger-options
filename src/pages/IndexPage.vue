<template>
  <q-page class="flex column flex-center q-pa-md">
    <div >
      <h3 class="text-center q-mt-md text-weight-bold">Power up your device with the perfect charger!</h3>
    </div>

    <template v-if="cellData.img">

      <q-card class="my-card q-mb-xl">
        <q-img
            :src="cellData.img"
          >
        </q-img> 

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="smartphone" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ cellData.title }}</q-item-label>
              <q-item-label caption>Phone model</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="battery_charging_full" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ cellData.bat }}</q-item-label>
              <q-item-label caption>Battery information</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="power" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ cellData.charge }}</q-item-label>
              <q-item-label caption>Charge capacity</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <div class="flex flex-center">
        <VueRecaptcha
          
          :sitekey="siteKey"
          @verify="handleSuccess"
          @error="handleError"
          @expired="handleExpire"
          ref="recaptcha"
        ></VueRecaptcha>
      </div>

      <NativeAds :key="componentKey" :cellData="cellData.name"/>

      <div class='flex flex-center column'>
        <h4 class="text-center" v-show="cellData.data !== ''"> Not what you're looking for? See more options below:</h4>
        <div
            v-for="(item, index) in cellData.data"
            :key="index"
            class='btn q-ma-sm'
          >
          <q-btn
            :loading="cellData.data[index].loading"
            @click="passIndex(index); simulateProgress(index);"
            color="teal-8"
            size="lg"
            style="width: 250px"
          >
            {{ item.name }}
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Loading...
            </template>
          </q-btn>
        </div>
      </div>      
    </template>

    <template v-else>
      <q-card class="my-card q-mb-xl">

        <q-img
            src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg"
          >
        </q-img> 

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="smartphone" />
            </q-item-section>

            <q-item-section>
              <q-item-label>iPhone 13</q-item-label>
              <q-item-label caption>Phone model</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="battery_charging_full" />
            </q-item-section>

            <q-item-section>
              <q-item-label>20W</q-item-label>
              <q-item-label caption>Max wired watts supported</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="power" />
            </q-item-section>

            <q-item-section>
              <q-item-label>15W</q-item-label>
              <q-item-label caption>Max wireless watts supported</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <VueRecaptcha
        class="flex flex-center"
        :sitekey="siteKey"
        @verify="handleSuccess"
        @error="handleError"
        @expired="handleExpire"
        ref="recaptcha"
      ></VueRecaptcha>

    </template>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { VueRecaptcha } from 'vue-recaptcha'

export default defineComponent({
  name: 'IndexPage',
  name: 'ReCaptcha',
    components: {
    VueRecaptcha
  }
})
</script>

<!-- CHILD COMPONENT --> 

<script setup>
import { inject, computed, ref, onDeactivated, onBeforeUpdate } from 'vue'
import NativeAds from './NativeAds.vue'

const emitter = inject('emitter')

const componentKey = ref(0)
emitter.on('pass-reset', () =>{
  componentKey.value += 1
})

const forceRerender = () => {
  componentKey.value += 1
}

const props = defineProps({
  cellData:Object
})

const passIndex = (index) => {
  emitter.emit('pass-index', index)
  props.cellData.name = props.cellData.data[index].name
  emitter.emit('pass-name', props.cellData.name)
  forceRerender()
}


const  simulateProgress  = (id) => {
    props.cellData.data[id].loading = true
    // we set loading state
    /*let arr = props.cellData.data
    let eventUrl = props.cellData.data[id].url*/

    /*console.log('id from child', id)
    console.log('array from child', arr)
    console.log('url from child', eventUrl)
    console.log(siteKey)*/

    // simulate a delay
    /*setTimeout(() => {
      // we're done, we reset loading state
      props.cellData.data[id].loading = false
    }, 3000)*/
  }

/*
  RECAPTCHA
*/

const siteKey = computed(() => {
    return process.env.VUE_APP_SITE_KEY
  })
  

const recaptcha = ref(null)
const handleSuccess = () => {
  emitter.emit('pass-value')
  /*console.log('an event ocurred')*/
}
const handleError = () => {
  /*console.log('an error ocurred')*/
}
const handleExpire = () => {
  emitter.emit('pass-value')
  recaptcha.value.reset()
  /*console.log('an expire event ocurred')*/
}
onDeactivated(() => {
  emitter.emit('pass-value-ondeactivated')
  recaptcha.value.reset()
  /*console.log('onDeactivated')*/
})
onBeforeUpdate(() => {
  emitter.emit('pass-value-updated')
  recaptcha.value.reset()
  /*console.log('onBeforeUpdated')*/
})

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 275px
</style>