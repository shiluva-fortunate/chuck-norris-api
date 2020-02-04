import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cell } from 'react-mdl';
import { connect } from 'react-redux'

import { getCat, getJoke } from '../redux/reducers';
import { getData } from '../util';

class Catagories extends Component {
    componentDidMount() {
        const { handleFetchCategories } = this.props;
        handleFetchCategories();
    }

    onCategoryPress(category) {
        const { handleFetchJoke } = this.props;
        handleFetchJoke(category);
    }

    renderCatagories() {
        const { categories } = this.props;
        if (Array.isArray(categories)) {
            return categories.map(categoryName => {
                return (
                    <li
                        onClick={() => this.onCategoryPress(categoryName)}
                        className='list-item'
                        key={categoryName}>
                        {categoryName}
                    </li>)
            });
        }
        return null;
    }

    render() {
        return (
            <Cell col={6}>
                <div className='list-container'>
                    <ul className='list'> {this.renderCatagories()} </ul>
                </div>
            </Cell>
        );
    }
}

Catagories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    handleFetchCategories: PropTypes.func,
    handleFetchJoke: PropTypes.func,
};

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
    handleFetchCategories: () => dispatch(getCat(getData('categories'))),
    handleFetchJoke: category => dispatch(getJoke(getData(`random?category=${category}`))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catagories)