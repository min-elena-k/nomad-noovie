import React, { useEffect, useState } from 'react';
import { View, Text, Button } from "react-native";
import { movieApi } from "../api"

export default () => {
    const getData = async () => {
        const [nowPlaying, error] = await movieApi.nowPlaying();
        const [popular, papularError] = await movieApi.popular();
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <View style={{ backgroundColor: "black", flex:1}}>
            <Text>Movies</Text>
        </View>
    )
};