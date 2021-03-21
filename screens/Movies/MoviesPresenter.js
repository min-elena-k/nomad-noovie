import React from 'react';
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";

const {width, height } = Dimensions.get("screen");

const Container = styled.View`
    flex: 1;
    background-color: black;
`;

const Header = styled.View`
    width: 100%;
    height: ${width};
`;

const Section = styled.View`
    background-color: red;
    height: ${height / 3}px;
`;

const Text = styled.Text``;

const MoviesPresenter = ({ loading }) => {
    return (
        <Container>
            {loading ? null : (
            <Header>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    <Section>
                        <Text>Hello</Text>
                    </Section>
                    <Section>
                        <Text>Hello</Text>
                    </Section>
                    <Section>
                        <Text>Hello</Text>
                    </Section>
                </Swiper>
            </Header>
            )}
        </Container>
    );
};

export default MoviesPresenter;