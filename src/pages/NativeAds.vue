<template>
  <div>
    <h4 class="text-center">See our recommendations</h4>
    <div id="amzn-assoc-ad-fb33a7fe-fbee-4bf4-9032-5777eee05da5">
    </div>
    <!-- <div id="amzn-assoc-ad-4a208a57-5f18-43bb-b840-e32e18c3dfe7"> 
    </div> -->
  </div>
</template>


<script type="text/javascript">
import { defineComponent } from 'vue'
import postscribe from 'postscribe'


export default defineComponent({
  name: 'NativeAds',
  name: 'Ads-Example',
  mounted: function () {
    postscribe('#amzn-assoc-ad-fb33a7fe-fbee-4bf4-9032-5777eee05da5', '<script defer async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=fb33a7fe-fbee-4bf4-9032-5777eee05da5"><\/script>')
    /*postscribe('#amzn-assoc-ad-4a208a57-5f18-43bb-b840-e32e18c3dfe7', '<script defer async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=4a208a57-5f18-43bb-b840-e32e18c3dfe7"><\/script>')*/
  }

})

</script>

<script setup>
import { onMounted, onBeforeUpdate } from 'vue'

/*onMounted(() => {
  const script = document.createElement('script')
    script.async = true
    script.src = '//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=fb33a7fe-fbee-4bf4-9032-5777eee05da5'
})*/

</script>

