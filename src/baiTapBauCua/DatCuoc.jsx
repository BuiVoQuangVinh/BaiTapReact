import React, { Component } from 'react'
import { connect } from 'react-redux'

class DatCuoc extends Component {

    themTienCuoc = (item, value) => {
        const datCuoc = { ...item, datCuoc: value }
        this.props.cuoc(datCuoc)

    }

    render() {
        const { item, datCuoc, tienThuong } = this.props;
        return (

            <div key={item.id} >
                <img src={item.img} alt=""
                    className='w-100 m-3'
                />
                <span className='p-3 bg-warning'>Cược:
                                        <button className='btn btn-success m-2'
                        onClick={() => this.themTienCuoc(item, datCuoc >= tienThuong ? item.datCuoc : item.datCuoc + 100)}
                        >+</button>
                    {item.datCuoc}
                    <button className='btn btn-danger m-2'
                        onClick={() => this.themTienCuoc(item, item.datCuoc === 0 ? item.datCuoc : item.datCuoc - 100)}
                    >-</button>
                </span>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cuoc: (item) => {
            const action = {
                type: 'DAT_CUOC',
                value: item,
            };
            dispatch(action)
        }

    }
}

export default connect(null, mapDispatchToProps)(DatCuoc)