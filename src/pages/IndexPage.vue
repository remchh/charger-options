<template>
  <q-page class="flex flex-center q-pa-md">
    <div>
      <h3>Look for the best charger for your Phone!</h3>
    </div>
    <q-card class="my-card">
      <img src="https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80">

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
