import React, { Component } from "react";

export default class Filter extends Component {
    render () {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    Order {" "}
                    <select value={this.props.size} onChange={this.props.sortProducts}>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                Pizaa Variety {" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="Margherita">Margherita</option>
                    <option value="Double Cheese Margherita">Double Cheese Margherita</option>
                    <option value="Farm Hose">Farm Hose</option>
                    <option value="Peppy Paneer">Peppy Paneer</option>
                    <option value="Maxican Gren Wave">Maxican Gren Wave</option>
                    <option value="Deluxe veggie">Deluxe veggie</option>
                    <option value="Veg Extravaganza">Veg Extravaganza</option>
                    <option value="Cheese & Corn">Cheese & Corn</option>
                </select>
                </div>
                <div className="filter-size">
                Add Crusts {" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="Hand Tossed">Hand Tossed</option>
                    <option value="Normal">Normal</option>
                    <option value="Cheese Brust">Cheese Brust</option>
                </select>
                </div>
                <div className="filter-size">
                Add Topppings {" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="Paneer">Paneer</option>
                    <option value="Corn">Corn</option>
                    <option value="Capsicum">Capsicum</option>
                </select>
                </div>

            </div>
        )
    }
}