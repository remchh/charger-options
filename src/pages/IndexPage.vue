<template>
  <q-page class="flex flex-center q-pa-md">
    <div>
      <h3 class="q-mt-md text-weight-bold">Look for the best charger for your Phone!</h3>
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
      <div class='flex flex-center'>
        <h4 class="text-center"> Is not your phone model? See more options below:</h4>
        <div
            v-for="(item, index) in cellData.data"
            :key="item[index]"
            class='btn q-ma-sm'
          >
          <q-btn
            :loading="loading"
            @click="simulateProgress(3)"
            color="teal-8"
            size="lg"
            style="width: 250px"
          >
            {{ item.name }}
            <!--{{ cellData.data[0].name }}-->
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
    </template>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})

</script>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  cellData:Object
})

const loading = ref(false)
const  simulateProgress  = () => {
      // we set loading state
      loading.value = true

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value = false
      }, 3000)
    }
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 275px
</style>