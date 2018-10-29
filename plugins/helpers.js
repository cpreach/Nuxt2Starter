import Vue from 'vue'

export default ({ store }) => {
    Vue.mixin({
        methods: {
            // Scroll to a certain element
            scrollTo: function(element) {
                if (process.browser) {
                    document.querySelector(element).scrollIntoView({
                        behavior: 'smooth'
                    })
                }
            },
            goToPage: function(page) {
                this.$router.push({name: page})
            },
            resetStore: function() {
                store.commit('resetStore')
            }
        }
    })
}
