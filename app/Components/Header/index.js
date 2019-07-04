import React from 'react';
import { Text, View} from 'react-native';
const Header = ({
    title,
}) => (
        <View style={[{ flexDirection: 'row' }]}>
            <Text style={{ color: 'white' ,fontSize:20}}> {title}</Text>
        </View>

    );

export default Header;
