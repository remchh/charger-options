<template>
  <q-page class="flex flex-center q-pa-md">
    <div>
      <h3 class="q-mt-md">Look for the best charger for your Phone!</h3>
    </div>

    <q-card class="my-card q-mb-xl">

      <q-img
          :src="cellData.img"
        >
       <!-- <template v-slot:default>
  
            <img src='https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg'>
 
        </template> -->
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
            <q-icon color="red" name="power" />
          </q-item-section>

          <q-item-section>
            <q-item-label>20W</q-item-label>
            <q-item-label caption>Max wired watts supported</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="wifi" />
          </q-item-section>

          <q-item-section>
            <q-item-label>15W</q-item-label>
            <q-item-label caption>Max wireless watts supported</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})

</script>

<script setup>
const props = defineProps({
  cellData:Object
})

</script>
