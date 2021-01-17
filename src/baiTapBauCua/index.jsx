
import React, { Component } from 'react'

import { connect } from "react-redux";
import DatCuoc from './DatCuoc';
import Play from './Play';

class BaiTapBauCua extends Component {



    handleChange = () => {
        const { game } = this.props

        let newRadom = []
        for (let i = 0; i < 3; i++) {
            let item = game[Math.floor(Math.random() * (game.length))]
            newRadom.push(item)
        }


        this.props.play(newRadom)

    }




    render() {
        const { diem, game, datCuoc, tienThuong, radom } = this.props



        return (
            <div className='bg-secondary text-center '>
                <h3 className='text-center text-danger mb-4' >Bài Tập Bầu Cua CYBERSOFT</h3>

                <span className=' text-light p-3 bg-warning border border-dark'> Tiền Thưởng: <span className='text-success'>  {diem}</span>  </span>
                <div className='text-center pb-5'>
                    <div className='row mt-4'>
                        <div className="col-6">
                            <div className='row h-75'>
                                {game.map((item) => {
                                    return (
                                        <div className='col-4 text-center'>
                                            <DatCuoc
                                                item={item}
                                                datCuoc={datCuoc}
                                                tienThuong={tienThuong}
                                                key={item.id}

                                            />
                                        </div>

                                    )
                                })}
                            </div>
                        </div>


                        <div className="col-2 text-center mt-4">

                            {radom.map((item) => {
                                return (
                                    <Play
                                        item={item}
                                    />

                                )
                            })}
                            <button className='btn btn-success mt-2 p-3 ' onClick={() => this.handleChange()} >Xốc</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tienThuong: state.bauCuaReducer.tienThuong,
        diem: state.bauCuaReducer.diem,
        game: state.bauCuaReducer.game,
        datCuoc: state.bauCuaReducer.datCuoc,
        radom: state.bauCuaReducer.radom,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {

        play: (item) => {
            const action = {
                type: 'PLAY',
                value: item
            };
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBauCua) 