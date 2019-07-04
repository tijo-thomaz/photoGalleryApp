
import {
    StyleSheet,
} from 'react-native';

export default Styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 20,
    },
    fullImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '98%',
        resizeMode: 'contain',
    },
    modelStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    closeButtonStyle: {
        width: 25,
        height: 25,
        top: 9,
        right: 9,
        position: 'absolute',
    },
    editButtonStyle: {
        width: 25,
        height: 25,
        bottom: 50,
        right: 9,
        position: 'absolute',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    sheet: { flexDirection: 'row', height: "100%", backgroundColor: '#efeff4' },
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DCDCDC",
        borderRadius: 4,
        borderColor: "#C0C0C0",
        borderWidth: 2,
        marginHorizontal: 60,
        marginVertical: 120
      },
      description: {
        padding: 20,
        fontSize: 18
      }
});