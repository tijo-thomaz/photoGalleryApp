import React from 'react';
import {
    View,
    Modal,Image,TouchableOpacity
} from 'react-native';
import Styles from '../../Styles'
const ModalComponent = ({
    transparent,
    animationType, visible, ShowModalFunction, imageuri, ModalVisibleStatus
}) => (
        <View style={Styles.containerModal}>
            <Modal
                transparent={transparent}
                animationType={animationType}
                visible={visible}
                onRequestClose={() => {
                    ShowModalFunction(!ModalVisibleStatus, '');
                }}>
                    <View style={Styles.modelStyle}>
                        <Image
                            style={Styles.fullImageStyle}
                            source={{ uri: imageuri }}
                        />
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={Styles.closeButtonStyle}
                            onPress={() => {
                                ShowModalFunction(!ModalVisibleStatus, '');
                            }}>
                            <Image
                                source={{
                                    uri:
                                        'http://www.scalsys.com/1pngs/close-png/close_png_288728.png',
                                }}
                                style={{ width: 30, height: 30, marginTop: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
            </Modal>

        </View>


    );

export default ModalComponent;
