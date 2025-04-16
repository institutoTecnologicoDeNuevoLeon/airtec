// cspell:disable 
import { View, Text } from 'react-native';
import React from 'react';

const AqiUsCard = () => {
    return (
        <View style={{ backgroundColor: 'rgba(125, 133, 151, 0.6)', borderRadius: 20,
            borderColor: 'black', borderWidth: .5,   
         }}>

            {[
                { color: '#13c710', range: '   0 – 50', label: 'Bueno' },
                { color: '#fdf00b', range: ' 51 – 100', label: 'Moderado' },
                { color: '#f1660b', range: '101 – 150', label: 'Dañino para sensibles' },
                { color: '#ea1222', range: '151 – 200', label: 'No saludable' },
                { color: '#8468e1', range: '201 – 300', label: 'Muy dañino (Casi peligroso)' },
                { color: '#393939', range: '301 – 500', label: 'Peligroso' },
            ].map((item, index) => (
                <View
                    key={index}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 16,
                    }}>
                    <View
                        style={{ width: 20, height: 20, backgroundColor: item.color, borderRadius: 10,
                            marginRight: 12, borderColor: 'black', borderWidth: 1,}}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text 
                            style={{ width: 80, borderLeftColor: 'black', borderLeftWidth: 1, paddingLeft: 7 }}>
                                {item.range}
                        </Text>
                        <Text 
                            style= {{borderLeftColor: 'black', borderLeftWidth: 1, paddingLeft: 10}}>
                                {item.label}
                        </Text>
                    </View>
                </View>
            ))}

        </View>
    );
};

export default AqiUsCard;
