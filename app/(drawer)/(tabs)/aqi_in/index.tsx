//cspell:disable 
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Pressable, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location'; // 👈 NUEVO

export default function WebTab() {
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [reintentos, setReintentos] = useState(0);
    const [permisoUbicacion, setPermisoUbicacion] = useState(null); // 👈 NUEVO

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync(); // 👈 NUEVO
            setPermisoUbicacion(status === 'granted'); // 👈 NUEVO
        })();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (cargando) {
                setError(true);
                setCargando(false);
            }
        }, 90000);

        return () => clearTimeout(timer);
    }, [reintentos]);

    const handleReload = () => {
        setError(false);
        setCargando(true);
        setReintentos(prev => prev + 1);
    };

    if (permisoUbicacion === false) {
        return (
            <View style={styles.errorContainer}>
                <Ionicons name="location-outline" size={40} color="orange" />
                <Text style={styles.errorText}>La app necesita acceso a tu ubicación para mostrar la calidad del aire de tu zona.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {error ? (
                <View style={styles.errorContainer}>
                    <Ionicons name="alert-circle-outline" size={40} color="red" />
                    <Text style={styles.errorText}>Error al cargar la página.</Text>
                    <Text style={styles.errorText}>Verifica tu conexión a internet o inténtalo más tarde.</Text>
                    <Pressable onPress={handleReload} style={styles.boton}>
                        <Text style={styles.botonTexto}>Reintentar</Text>
                    </Pressable>
                </View>
            ) : (
                <>
                    <WebView
                        key={reintentos}
                        source={{ uri: 'https://www.aqi.in/dashboard/mexico/nuevo-leon' }} // 👈 QUITA "guadalupe"
                        style={{ flex: 1 }}
                        onLoadEnd={() => setCargando(false)}
                        onError={() => {
                            setError(true);
                            setCargando(false);
                        }}
                        geolocationEnabled={true} // 👈 PERMITE USO DE GPS EN WEBVIEW
                    />
                    {cargando && (
                        <View style={styles.loader}>
                            <ActivityIndicator size="large" color="#0a9396" />
                            <Text>Cargando calidad del aire...</Text>
                        </View>
                    )}
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    loader: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.7)',
    },
    errorContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
    },
    errorText: {
        textAlign: 'center', fontSize: 16, color: '#333', marginVertical: 4,
    },
    boton: {
        marginTop: 12, backgroundColor: '#0a9396', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10,
    },
    botonTexto: {
        color: 'white', fontWeight: 'bold',
    }
});
