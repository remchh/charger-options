<template>
  <div class="column justify-between">
    <h4 class="text-center">See our recommendations ⬇️</h4>

    <!-- <div class='column justify-evenly' >
      <div id='info'></div>
      <div id='image'></div>
    </div> -->

    <div id="amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb"></div>

  </div>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NativeAds',
  name: 'Ads-Example',
})


</script>

<script setup>  
import { watchEffect, nextTick, ref, inject } from 'vue'
import postscribe from 'postscribe'

const props = defineProps({
  cellData:String
})

watchEffect(() => {
  console.log(props.cellData)
})

const emitter = inject('emitter')
emitter.on('pass-name', (name) => {
  console.log(name)
})

watchEffect(() => {
  console.log(typeof(props.cellData))

  nextTick(() => {
    let codeApple = ref('9687a0fe-f6ba-4710-9bc5-7c3067df8aeb')
    let codeSamsung = ref('585fbb2c-bea9-4e35-b167-3d6025a582ec')
    let codeGeneral = ref('')
    if(props.cellData.includes('Apple')){
      codeGeneral.value = codeApple.value
      console.log('APPLE')
      } else if (props.cellData.includes('Samsung')){
      codeGeneral.value = codeSamsung.value
      console.log('SAMSUNG')
    } 
    
    console.log('Inside Tick:',codeGeneral.value)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<script defer async src='//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${codeGeneral.value}'><\/script>"`)
  })
})
















</script>


