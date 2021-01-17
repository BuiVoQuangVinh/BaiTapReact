import React, { Component } from 'react'

export default class Play extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className='mb-2'>
              
                <img src={item.img} alt=""
                    className='w-50'
                />
            </div>
        )
    }
}


