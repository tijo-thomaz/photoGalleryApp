import React from "react";
import {
    View
} from "react-native";
import Styles from '../../Styles'
const GridRow = ({adjustedMargin,renderItem,itemWidth,itemPaddingHorizontal,items,itemsPerRow}) => {
    return (
        <View style = {[ Styles.row, { marginBottom: adjustedMargin } ]}>
        { items.map(item => renderItem(item, itemWidth, itemPaddingHorizontal)) }
        { itemsPerRow - items.length > 0 && <View style={{ width: itemWidth * (itemsPerRow - items.length)}} />}
    </View>
    );
};
export default GridRow;