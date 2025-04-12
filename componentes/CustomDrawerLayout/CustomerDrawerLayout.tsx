import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";


export default function CustomerDrawerLayout(props: any) {


    return (
    <View className="flex-1" >
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
    </View>
    )
}