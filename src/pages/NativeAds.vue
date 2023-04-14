<template>
  <div>
    <h4 class="text-center">See our recommendations ⬇️</h4>
    <!-- <div :id=id>
    </div> -->
    <div id='amzn-assoc-ad-fb33a7fe-fbee-4bf4-9032-5777eee05da5'> 
    </div>
  </div>
</template>


<script type="text/javascript">
import { defineComponent } from 'vue'
import postscribe from 'postscribe'

/*let id = 'amzn-assoc-ad-fb33a7fe-fbee-4bf4-9032-5777eee05da5'
let post = '<script defer async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=fb33a7fe-fbee-4bf4-9032-5777eee05da5"><\/script>'*/

export default defineComponent({
  name: 'NativeAds',
  name: 'Ads-Example',
  mounted: function () {
    /*postscribe(`#${id}`, `${post}`)*/
    postscribe('#amzn-assoc-ad-fb33a7fe-fbee-4bf4-9032-5777eee05da5', '<script defer async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=fb33a7fe-fbee-4bf4-9032-5777eee05da5"><\/script>')
  }

})

</script>


