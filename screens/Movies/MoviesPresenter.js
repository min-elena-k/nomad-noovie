import React from 'react';
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Slide from '../../components/Movie/Slide';
import Title from '../../components/Title';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4 }px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying }) => (
  <ScrollView
    style={{
      backgroundColor: "black"
    }}
    contentContainerStyle={{
      flex: 1,
      justifyContent: loading ? "center" : "flex-start"
    }}
  >
    {nowPlaying.length == 0 ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3} >
            {nowPlaying.map(movie => (
              <Slide 
                key={movie.id} 
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path} />
            ))}
          </Swiper>
          <Container>
            <Title title={"Popular Movies"}/>
          </Container>
        </SliderContainer>
      </>
    )}
  </ScrollView>
)
