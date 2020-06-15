<template>
    <div id="app" class="mt-5">
        <b-container fluid>
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

<style lang="css">
    body {
        background-color: #333;
        color: white;
    }
    h1{
        text-align: center;
        margin: 30px 0px;
    }
    h2{
        margin: 15px 0px 15px 50px;
    }
    .boxInfo {
        background-color: #555;
        color: white;
    }
</style>