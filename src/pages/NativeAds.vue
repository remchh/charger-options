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

//Receiving props from IndexPage
const props = defineProps({
  cellData:String
})


/*const emitter = inject('emitter')
emitter.on('pass-name', (name) => {
  console.log(name)
})*/


nextTick(() => {
  console.log(props.cellData)
  console.log(typeof(props.cellData))
  let codeApple = ref('9687a0fe-f6ba-4710-9bc5-7c3067df8aeb')
  let codeSamsung = ref('585fbb2c-bea9-4e35-b167-3d6025a582ec')
  let codeGoogle = ref('f9ac7c8d-a57a-400f-8cc2-37dd08e3f2c9')
  let codeXiaomi = ref('7551389b-28b8-431b-87fb-b4d501982dd8')
  let codeOthers = ref('dfeca202-d71b-4df6-8eb3-9f167f7a3618')
  let codeGeneral = ref('')
  if(props.cellData.includes('Apple')){
    codeGeneral.value = codeApple.value
    console.log('APPLE')
    } else if (props.cellData.includes('Samsung')){
    codeGeneral.value = codeSamsung.value
    console.log('SAMSUNG')
  } else if (props.cellData.includes('Pixel')){
    codeGeneral.value = codeGoogle.value
    console.log('GOOGLE')
  } else if (props.cellData.includes('Xiaomi')){
    codeGeneral.value = codeXiaomi.value
    console.log('XIAOMI')
  } else {
    codeGeneral.value = codeOthers.value
    console.log('Others')
  }
  
  console.log('Inside Tick:',codeGeneral.value)
  postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<script defer async src='//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${codeGeneral.value}'><\/script>"`)
})
  


</script>

