<template>
    <button type="button" class="btn btn-success" @click="window.location.href = link">
        Visualizar Projeto
        <i class="fas fa-external-link-square-alt ml-2"></i>
    </button>
</template>

<script>
export default {
    name: 'visualizar',
    props: {
        link: {
            type: String,
            default: '#'
        }
    },
    data() {
        return {
            window
        }
    }
}
</script>