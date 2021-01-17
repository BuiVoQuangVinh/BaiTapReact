const initialState = {

    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]

    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    },

    total: 85
}

const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE': {
            const total = (action.value.salad * state.menu.salad
                + action.value.cheese * state.menu.cheese
                + action.value.beef * state.menu.beef);


  

            return { ...state, burger: action.value, total }
        }

        default:
            return { ...state };
    }
}

export default burgerReducer;