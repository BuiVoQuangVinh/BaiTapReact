const initialState = {
    tienThuong: 500,
    diem: 500,
    datCuoc: 0,
    game: [
        { id: 1, img: './img/bau.png', datCuoc: 0 },
        { id: 2, img: './img/ca.png', datCuoc: 0 },
        { id: 3, img: './img/cua.png', datCuoc: 0 },
        { id: 4, img: './img/ga.png', datCuoc: 0 },
        { id: 5, img: './img/nai.png', datCuoc: 0 },
        { id: 6, img: './img/tom.png', datCuoc: 0 },
    ],
    radom: [
        { id: 1, img: './img/ca.png' },
        { id: 2, img: './img/ca.png' },
        { id: 3, img: './img/ca.png' }
    ]
}

const bauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            const cloneGame = [...state.game];
            const cuoc = state.datCuoc;
            let tongDatCuoc = 0;
            const index = cloneGame.findIndex((item) =>
                item.id === action.value.id
            )
            cloneGame[index] = action.value;

            cloneGame.map((item) => {
                return (
                    tongDatCuoc += item.datCuoc
                )
            })
   


            return { ...state, game: cloneGame, diem: (state.diem - tongDatCuoc + cuoc), datCuoc: tongDatCuoc }
        }


        case 'PLAY': {
           



            let tongTienThuong = 0;
            state.game.map((item) => {
                
                let khongXuatHien = true;

                for (let index = 0; index < action.value.length; index++) {
                    if (item.id === action.value[index].id) {
                        khongXuatHien = false;
                        tongTienThuong += (item.datCuoc);
                    }
                }

                if(khongXuatHien){
                    tongTienThuong -= (item.datCuoc);
                }

                return 0;
            })

            // console.log(tongTienThuong)



            return {
                ...state,
                tienThuong:state.tienThuong + tongTienThuong,
                diem: state.tienThuong + tongTienThuong,
                radom: action.value,
                datCuoc: 0,
                game: [
                    { id: 1, img: './img/bau.png', datCuoc: 0 },
                    { id: 2, img: './img/ca.png', datCuoc: 0 },
                    { id: 3, img: './img/cua.png', datCuoc: 0 },
                    { id: 4, img: './img/ga.png', datCuoc: 0 },
                    { id: 5, img: './img/nai.png', datCuoc: 0 },
                    { id: 6, img: './img/tom.png', datCuoc: 0 },
                ],

            }
        }

        default:
            return { ...state }
    }
}

export default bauCuaReducer;