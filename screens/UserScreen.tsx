import { FC } from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import { Icategory } from "../inteface";


const UserScreen:FC<Icategory>=({navigation})=>{
function openDrawerHandler(){
navigation.toggleDrawer();
}
return (
    <View>
        <Text>
    <Text>This is the "User "</Text> screen!
    </Text>
    <Button title="Open Drawer" onPress={openDrawerHandler}/>
    </View>
);


}

export default UserScreen;