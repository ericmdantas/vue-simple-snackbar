# vue-simple-snackbar

[![Build](https://travis-ci.org/ericmdantas/vue-simple-snackbar.svg?branch=master)](https://travis-ci.org/ericmdantas/vue-simple-snackbar)

### Install

```shell
$ npm i --save vue-simple-snackbar
```

### Usage in components

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
            this.$simpleSnackbar.show({
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

### Usage in other files

```js
// my_service.js
import {simpleSnackbar} from 'vue-simple-snackbar'

export default {
    doSomething() {
        simpleSnackbar.show({
            message: 'Hooray!',
            primaryAction: {
                description: `I'm a button`,
                action: () => alert('hello'),
            },
        })
    }
}
```

### Methods

```js
this.$simpleSnackbar.show({
    message: 'Hooray!',
    primaryAction: {
        description: `I'm a button`,
        action: () => alert('hello')
    }
})

this.$simpleSnackbar.hide()
```

### License

MIT