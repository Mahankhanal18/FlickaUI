import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, marginHorizontal: 20, flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => navigation.navigate('My Collection')} style={styles.menuItem}>
                <View style={styles.menuItemIcon}>
                    <MaterialIcons name="video-collection" size={20} color="black" />
                </View>
                <Text style={styles.menuItemText}>My Collections</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Creators')} style={styles.menuItem}>
                <View style={styles.menuItemIcon}>
                    <Ionicons name="settings-sharp" size={20} color="black" />
                </View>
                <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemIcon: {
        marginRight: 10,
    },
    menuItemText: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular'
    },
};

export default Menu;
