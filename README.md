# vue-snackbar

```js
// app.vue

<template>
    <div>   
        <snackbar></snackbar>
    </div>
</template>

<script>
import Vue from 'vue'
import VueSnackbar from 'vue-snackbar'

Vue.use(VueSnackbar)

export default {
    mounted() {
        setTimeout(() => {
            this.$snackbar.show({
                message: 'Hooray!',
                primaryAction: {
                    description: `I'm a button`,
                    action: () => alert('hello')
                }
            })
        }, 1000)
    }
}
</script>
```

### Disclaimer

This is a work in progress and as it stands today, it depends on `bootstrap 4.x`.


### License

MIT