import React, { useState } from 'react';
import styled from 'styled-components';

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 280px;
    box-shadow: 0 3px 10px 0 #aaa;
    cursor: pointer;
    position: relative;
`;

const CoverImage = styled.img`
    object-fit: cover;
    height: 362px;
`;

const MovieName = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: black;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-transform: capitalize;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const FavoriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: ${props => (props.isFavorite ? '#FF0000' : '#AAA')};

  &:hover {
    fill: #FF0000;
  }
`;

const MovieComponent = (props) => {
    const { Title, Year, imdbID, Type, Poster } = props.movie;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);

    };

    return (
        <MovieContainer onClick={() => props.onMovieSelect(imdbID)}>
            <CoverImage src={Poster} />
            <MovieName>{Title}</MovieName>
            <InfoColumn>
                <span>Year: {Year}</span>
                <span>Type: {Type}</span>
            </InfoColumn>
            <FavoriteIcon isFavorite={isFavorite} onClick={handleFavoriteClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                        fill={isFavorite ? '#FF0000' : '#AAA'}
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                </svg>
            </FavoriteIcon>
        </MovieContainer>
    );
};

export default MovieComponent;
