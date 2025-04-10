//cspell:disable 
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const DefinirHora = () => {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <Text className="text-black text-lg mt-3">
            {hora.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})}
        </Text>
    );
};

export default DefinirHora;
