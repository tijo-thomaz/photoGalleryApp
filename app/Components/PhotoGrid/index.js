import React, { Component } from 'react';
import {
    Dimensions,
    ListView,
} from 'react-native';
import GridRow from './GridRow'
import {RowBuilder } from '../../Utility'
class PhotoGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: new ListView.DataSource({
                rowHasChanged: (r1, r2) => { r1 !== r2; }
            }),
        }
    }
    render() {
        let rows = RowBuilder(this.props.data, this.props.itemsPerRow);
        return (
            <ListView
                { ...this.props}
                dataSource = { this.state.data.cloneWithRows(rows) }
                renderRow = { this.renderRow }
                style = {{ flex: 1 }} />
        );
    }
    renderRow=(items)=> {
        let deviceWidth = Dimensions.get('window').width;
        let itemsPerRow = this.props.itemsPerRow;
        let itemWidth = Math.floor( (deviceWidth) / itemsPerRow );
        let adjustedMargin = this.props.itemPaddingHorizontal * 2;
        return (
          <GridRow 
          adjustedMargin={adjustedMargin}
          renderItem={this.props.renderItem}
          itemWidth={itemWidth}
          itemPaddingHorizontal={this.props.itemPaddingHorizontal}
          items={items}
          itemsPerRow={itemsPerRow}
          width={deviceWidth}
          />
        );
    }

}
export default PhotoGrid;