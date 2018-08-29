import React, { Component } from 'react';
import { StyleSheet, View, Text, DrawerLayoutAndroid, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


export default class Drawerlayout extends Component {
    state={
        data:'',
    }
    list = require('./catagoryData.json')
    static navigationOptions = ({ navigation }) => ({
        title: 'DrawerLayoutAndroid',
        headerTitleStyle: {
            textAlign: 'left',
            alignSelf: 'center',
            fontSize: 20,
            color: 'white',
            flex: 1
        },
        headerTintColor: 'white',
        headerStyle: {
            height: 55,
            backgroundColor: '#5D7ED3',
        },
        headerLeft: (
            <TouchableOpacity onPress={() => {
                if (_this._isOpen) {
                    _this.closeDrawer()
                } else
                    _this.openDrawer()
            }
            }>
                <View>
                    <Image
                        style={{ width: 30, height: 30, marginLeft: 10 }}
                        source={require('/home/user/React-native-Projects/NavigationDrawer/menu_icon.png')}
                    />
                </View>
            </TouchableOpacity>),

        headerRight: (<View />)
    });

    _this;
    _isOpen = false;


    componentDidMount() {
        _this = this;

    }

    openDrawer() {
        this.DrawerLayoutRef.openDrawer();
        this._isOpen = !this._isOpen

    }

    closeDrawer() {
        this.DrawerLayoutRef.closeDrawer();
        this._isOpen = !this._isOpen
    }

    render() {
        var navigationView = (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ width: 50, margin: 10, height: 50, borderRadius: 50 }}
                        source={{ uri: 'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png' }}
                    />
                    <Text style={{ marginTop: 30, fontFamily: 'courier', color: '#000' }}>Hello User..</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                    }}>
                        <Text style={styles.textStyle}>catagory</Text>
                    </TouchableOpacity>

                    <Text style={styles.textStyle}>My Orders</Text>
                    <Text style={styles.textStyle}>Address</Text>
                </View>
            </View>
        )
        
        return (
            <DrawerLayoutAndroid
                ref={ref => (this.DrawerLayoutRef = ref)}
                drawerWidth={200}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>

                <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
                    <FlatList
                        data={this.list}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => {

                               if(item.hasOwnProperty('subCategory')){
                                this.list=item.subCategory
                               this.setState({data:'new'})
                               }
                               else{
                                   this.props.navigation.navigate('Drawerlayout')
                               }
                            }}>
                                <Text style={styles.textStyle}>{item.Name}</Text>
                            </TouchableOpacity>}
                    />
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textStyle: {
        padding: 10,
        fontSize: 24,
        color: '#4a4a4a',
        borderWidth: 0.3,
        borderColor: '#ccc'
    },
});
const MyApp = createDrawerNavigator({
    Drawerlayout: {
        screen: Drawerlayout,
    },

});
