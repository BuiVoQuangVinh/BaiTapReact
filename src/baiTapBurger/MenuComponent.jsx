import React, { Component } from 'react'
import { connect } from 'react-redux'

class MenuComponent extends Component {

    handleChange = (key, qty) => {
        const burgerNew = { ...this.props.burger, [key]: qty }
        this.props.change(burgerNew)
    }

    render() {
        const { burger, total } = this.props;
        const keys = [];
        Object.keys(burger).filter((key) => {
            keys.push(key);
            return 0;
            // return burger[subKey];
        }
        )



        // console.log(burger)

        // console.log(keys)

        return (
            <div>
                <h3>Chọn thực ăn </h3>
                <table className='table'>
                    <thead>
                        <th> Thức ăn </th>
                        <th></th>
                        <th> Giá</th>
                    </thead>
                    <tbody>
                        {
                            keys.map((key) => {


                                return (
                                    <tr>
                                        <td>{key}</td>
                                        <td>
                                            <button
                                                className={"btn btn-danger mr-3 " + (burger[key] < 1 ? 'disabled' : '')}
                                                onClick={() => this.handleChange(key, (burger[key] - 1) < 0 ? 0 : (burger[key] - 1))
                                                }
                                            > - </button>
                                            <button
                                                className='btn btn-success'
                                                onClick={() => this.handleChange(key, burger[key] + 1)}
                                            > + </button>
                                        </td>
                                        <td>
                                            {burger[key]}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <div className='text-center'>
                    <h4 className='text-right' > Tổng tiền:{total} </h4>
                    <button className=' btn btn-primary'
                    onClick={ ()=>this.props.change( {salad:1,cheese:1,beef:1}    )  }
                    >Thanh toán</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        burger: state.burgerReducer.burger,
        total: state.burgerReducer.total,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        change: (value) => {
            const action = {
                type: "CHANGE",
                value: value,
            };

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)




// {/* <tr>
// <td>{key[0]}</td>
// <td>

//     <button
//         className={"btn btn-danger mr-3 " + (burger[key[0]] < 1 ? 'disabled' : '')}

//         onClick={() => this.handleChange(key[0], (burger[key[0]] - 1) < 0 ? 0 : (burger[key[0]] - 1))

//         }
//     >-</button>
//     <button
//         className='btn btn-success'
//         onClick={() => this.handleChange(key[0], burger[key[0]] + 1)}
//     >+</button>
// </td>
// <td>
//     {burger[key[0]]}
// </td>
// </tr>

// <tr>
// <td>{key[1]}</td>
// <td>
//     <button

//         className={"btn btn-danger mr-3 " + (burger[key[1]] < 1 ? 'disabled' : '')}
//         onClick={() => this.handleChange(key[1], (burger[key[1]] - 1) < 0 ? 0 : (burger[key[1]] - 1))}
//     >-</button>
//     <button
//         className='btn btn-success'
//         onClick={() => this.handleChange(key[1], burger[key[1]] + 1)}
//     >+</button>
// </td>
// <td>
//     {burger[key[1]]}
// </td>
// </tr>


// <tr>
// <td>{key[2]}</td>
// <td>
//     <button
//         className={"btn btn-danger mr-3 " + (burger[key[2]] < 1 ? 'disabled' : '')}
//         onClick={() => this.handleChange(key[2], (burger[key[2]] - 1) < 0 ? 0 : (burger[key[2]] - 1))}

//     >-</button>
//     <button
//         className='btn btn-success'
//         onClick={() => this.handleChange(key[2], burger[key[2]] + 1)}
//     >+</button>
// </td>
// <td>
//     {burger[key[2]]}
// </td>
// </tr> */}