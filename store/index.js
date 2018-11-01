import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            mobileNavIsOpen: false,
            smallHeader: false,
            footerScrolled: false,
            headerScrolled: false,
            scrolledUp: false,
            loaded: false
        }),
        mutations: {
            toggleMobileNav(state) {
                state.mobileNavIsOpen = !state.mobileNavIsOpen
            },
            setStore(state, payload) {
                state[payload.key] = payload.value
            }
        }
    })
}

export default createStore
