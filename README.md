# vue-simple-snackbar

[![Build](https://travis-ci.org/ericmdantas/vue-simple-snackbar.svg?branch=master)](https://travis-ci.org/ericmdantas/vue-simple-snackbar)

### Install

```shell
$ npm i --save vue-simple-snackbar
```

### Usage

```js
// app.vue

<template>
    <div>   
        <SimpleSnackbar />
    </div>
</template>

<script>
import Vue from 'vue'
import VueSimpleSnackbar from 'vue-simple-snackbar'

Vue.use(VueSimpleSnackbar)

export default {
    mounted() {
        setTimeout(() => {
            this.$snackbar.show({
                message: 'Hooray!',
                primaryAction: {
                    description: `I'm a button`,
                    action: () => alert('hello'),
                },
            })
        }, 1000)
    }
}
</script>
```

### Methods

```js
this.$snackbar.show({
    message: 'Hooray!',
    primaryAction: {
        description: `I'm a button`,
        action: () => alert('hello')
    }
})

this.$snackbar.hide()
```

### License

MIT