<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col lg="6">
          <Left />
        </b-col>
        <b-col lg="6">
          <Right />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Left from './components/left/left'
import Right from './components/right/right'

export default {
  name: 'app',
  components: {
    Left,
    Right
  }
}
</script>