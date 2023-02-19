import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,StyleSheet, Dimensions,ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row, Item} from 'native-base';

export default class PostScreen extends Component{
  
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

	render(){
        const CATEGORY_NAMES  ={
            "79":"'Post1",
            "111":"UWNests",
            "129":"UW-Nests",
            "82":"Post2",
            "83":"Post3",
            "90":"Account",
            "91":"Favorites",
        };
        global.CATEGORY_NAMES=CATEGORY_NAMES;
        const data = this.props.data;
        global.data = data;
       
        return( 
            <View style={{flex:1,flexDirection:'row-reverse',alignItems:'flex-start'}}>
              { data.categories.map((item) => (
                        <Text style={{fontSize:8,paddingRight:4,color:'#ddd',fontFamily:'Montserrat-Bold',fontWeight:'bold'}}
                        key={item}>{CATEGORY_NAMES[item.toString()]}</Text>
             ))
              }
            </View>

        );
   
}

}
