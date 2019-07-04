
import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { listRepos } from '../store/reducers';
import Styles from '../Styles'
import PhotoGrid from '../Components/PhotoGrid'
import Header from '../Components/Header'
import Modal from '../Components/Modal'

class GalleryHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageuri: '',
      ModalVisibleStatus: false,
    };
    this.state = { items: [] };
  }
  componentDidMount() {
    this.props.listRepos();
  }
  renderHeader() {
    return <View style={{ padding: 16, fontSize: 20, color: 'white', backgroundColor: 'purple' }}>
     <Header title={'Image Gallery'} />
    </View>;
  }
  ShowModalFunction = (visible, imageURL) => {
    this.setState({
      ModalVisibleStatus: visible,
      imageuri: imageURL,
    });
  }

  renderItem = (item, itemSize, itemPaddingHorizontal) => {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
        <TouchableOpacity
          key={item.id}
          style={{
            width: itemSize,
            height: itemSize,
            paddingHorizontal: itemPaddingHorizontal,
          }}
          onPress={() => {
            this.ShowModalFunction(true, item.src);
          }}>
          <Image   
            resizeMode="cover"
            style={{ flex: 1 }}
           source={{ uri: item.src !== `` ? item.src : `https://randomuser.me/api/portraits/city/8.jpg` }} />
        </TouchableOpacity>
      </View>

    );
  }

  render() {
    if (this.state.ModalVisibleStatus) {
      return (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={this.state.ModalVisibleStatus}
          ShowModalFunction={this.ShowModalFunction}
          imageuri={this.state.imageuri}
          ModalVisibleStatus={this.state.ModalVisibleStatus}
        />
      );
    } else {
      return (
        <View style={Styles.containerStyle}>
          {this.renderHeader()}
          <PhotoGrid
            data={this.props.repos}
            itemsPerRow={3}
            itemMargin={1}
            itemPaddingHorizontal={1}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
  }
}
const mapStateToProps = state => {
  console.log(state)
  let storedRepositories = state.repos.length !== 0 ? state.repos.results.map(repo => {
    let urlstr = repo.picture.large
    let spltstr = urlstr.split('/')
    spltstr.pop()
    var joined = spltstr.join('/')
    return joined;
  }) : [];
  let items = Array.apply(null, Array(60)).map((v, i) => {
    let newImg = i + 1 + '.jpg'
    let url = storedRepositories[0] ? storedRepositories[0] + '/' + newImg : ``
    return { id: i, src: url };
  });
  return {
    repos: items
  };
};
const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryHome);