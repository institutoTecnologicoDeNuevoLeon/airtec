//cspell:disable 
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";


export default function CustomerDrawerLayout(props: any) {


    return (
        <View className="flex-1" >

            <DrawerContentScrollView {...props}>
                {/* header */}
                <View>
                    <Image
                        source={require('../../assets/images/itnllogo.png')}
                        style={{ width: 300, height: 150, borderRadius: 30, marginBottom: 20 }}
                    />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>


            {/* footer */}
            <View style={{
                borderTopColor: '#dde3fe',
                borderTopWidth: 1,
                padding: 20,
                paddingBottom: 20,
            }}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}