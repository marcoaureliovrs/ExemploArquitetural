import React from 'react';
import {
    FlatList,
} from 'react-native';
import ListItem from './item-provider';
import PropTypes from 'prop-types';

const SampleList = props => {

    renderItem = ({ item }) => (
        <ListItem
            object={item}
            isEditable={isEditable}
            navigateTo={onPressObject}
            onDeleteItem={onDeleteItem}
            shimmerEfect={props.shimmerEfect} />
    );

    const { data, onPressObject, isEditable, onRefresh, refreshing, onDeleteItem, shimmerEfect } = props;
    return (
        <FlatList
            data={data}
            keyboardShouldPersistTaps="always"
            onRefresh={onRefresh}
            refreshing={refreshing}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
}

SampleList.propTypes = {
    data: PropTypes.array,
    onPressObject: PropTypes.func, 
    shimmerEfect: PropTypes.bool,
    isEditable: PropTypes.bool, 
    onRefresh: PropTypes.func,
    refreshing: PropTypes.bool, 
    onDeleteItem: PropTypes.func
}


export default SampleList;