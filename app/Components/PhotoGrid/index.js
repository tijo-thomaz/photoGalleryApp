import React, { Component } from 'react';
import {
    Dimensions,
    FlatList,
    View,
} from 'react-native';
import Styles from '../../Styles'
class PhotoGrid extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({ item }) => (
                    this.renderRow(item)
                )}

                numColumns={3}
                keyExtractor={(item, index) => index}
            />
        );
    }
    renderRow = (item) => {
        let deviceWidth = Dimensions.get('window').width;
        let itemsPerRow = this.props.itemsPerRow;
        let itemWidth = Math.floor((deviceWidth) / itemsPerRow);
        let adjustedMargin = this.props.itemPaddingHorizontal * 2;
        return (
            <View style={[Styles.row, { marginBottom: adjustedMargin }]}>
                {this.props.renderItem(item, itemWidth, this.props.itemPaddingHorizontal)}
            </View>
        );
    }

}
export default PhotoGrid;