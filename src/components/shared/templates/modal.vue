<template>
    <div class="portfolio-modal modal fade" :id="'portfolioModal'+index" tabindex="-1" 
        role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" 
                                    id="portfolioModal1Label">{{title}}</h2>
                                <divider />
                                <slot />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import divider from '../divider.vue'

export default {
    name: 'modal',
    components: {
        divider
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        index: {
            type: Number,
            require: true
        }
    }
}
</script>
