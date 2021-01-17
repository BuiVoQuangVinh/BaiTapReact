import React, { Component } from 'react'
import BurgerComponent from './BurgerComponent'
import MenuComponent from './MenuComponent'

export default class BaiTapBurger extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <BurgerComponent />
                    </div>
                    <div className="col-6">
                        <MenuComponent />
                    </div>

                </div>
            </div>
        )
    }
}
