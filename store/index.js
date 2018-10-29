import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            mobileNavIsOpen: false
        }),
        mutations: {
            toggleMobileNav(state) {
                state.mobileNavIsOpen = !state.mobileNavIsOpen
            }
        }
    })
}

export default createStore
