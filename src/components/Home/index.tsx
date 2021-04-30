import React from 'react';
import {
    Container,
    ContainerCenter,
    Header,
    Body,
    ContainerTitle,
    Title,
    SubTitle,
    Description,
    Square,
    ContainerButton,
    ContainerList,
    Button,
    ButtonArround,
    Line,
    SeachFilter,
    ContainerBodySubTitle,
    ContainerInput,
    ContainerMusic,
    Footer,
    ContainerFooter,
    ButtonOutlineAround,
    ContainerActions,
    ContainerFavorite,
} from './styles';
import { FaSearch, FaHeart, FaPlay, FaPause } from 'react-icons/fa';
import Catalog from '../../components/Catalog';

const Home = () => {
    return (
        <Container>
            <ContainerCenter>
                <Header>
                    <Square />
                    <ContainerTitle>
                        <SubTitle>PlayList</SubTitle>
                        <Title>Nome da Musica</Title>
                        <Description>Created by Nome do Artista. 226 songs, 9 hr 49min</Description>
                    </ContainerTitle>
                </Header>
                <Body>
                    <ContainerButton>
                        <Button>Play</Button>
                        <ButtonArround>...</ButtonArround>
                    </ContainerButton>
                    <ContainerInput>
                        <ButtonOutlineAround>
                            <FaSearch color="#fff" size={18} style={{ marginTop: 8 }} />
                        </ButtonOutlineAround>
                        <SeachFilter
                            placeholder="Filter"
                        >
                        </SeachFilter>
                    </ContainerInput>

                    <ContainerList>
                        <ContainerBodySubTitle>
                            <SubTitle>Title</SubTitle>
                            <SubTitle>Artista</SubTitle>
                        </ContainerBodySubTitle>
                        <Line />
                        <ContainerMusic>
                            <ContainerFavorite>
                                <ButtonOutlineAround>
                                    <FaHeart color="#f70e0e" size={14} style={{ marginTop: 8 }} />
                                </ButtonOutlineAround>
                                <Description>Musica</Description>
                            </ContainerFavorite>
                            <ContainerActions>
                                <Description>Artista</Description>
                                <ButtonOutlineAround>
                                    <FaPlay color="#27ae60" size={14} style={{ marginTop: 8 }} />
                                </ButtonOutlineAround>
                                <ButtonOutlineAround>
                                    <FaPause color="#000" size={14} style={{ marginTop: 8 }} />
                                </ButtonOutlineAround>
                            </ContainerActions>
                        </ContainerMusic>
                        <Line />
                        <ContainerMusic>
                            <ButtonOutlineAround>
                                <FaHeart color="#f70e0e" size={14} style={{ marginTop: 8 }} />
                            </ButtonOutlineAround>
                            <Description>Musica</Description>
                            <Description>Artista</Description>
                            <ButtonOutlineAround>
                                <FaPlay color="#27ae60" size={14} style={{ marginTop: 8 }} />
                            </ButtonOutlineAround>
                            <ButtonOutlineAround>
                                <FaPause color="#000" size={14} style={{ marginTop: 8 }} />
                            </ButtonOutlineAround>
                        </ContainerMusic>
                        <Line />
                        <ContainerMusic>
                            <ButtonOutlineAround>
                                <FaHeart color="#f70e0e" size={14} style={{ marginTop: 8 }} />
                            </ButtonOutlineAround>
                            <Description>Musica</Description>
                            <Description>Artista</Description>
                            <ButtonOutlineAround>
                                <FaPlay color="#27ae60" size={14} style={{ marginTop: 8 }} />
                            </ButtonOutlineAround>
                            <ButtonOutlineAround>
                                <FaPause color="#000" size={14} style={{ marginTop: 8 }} />
                            </ButtonOutlineAround>
                        </ContainerMusic>
                        <Line />
                        <ContainerMusic>
                            <ButtonOutlineAround>
                                <FaHeart color="#f70e0e" size={14} style={{ marginTop: 8 }} />
                            </ButtonOutlineAround>
                            <Description>Musica</Description>
                            <Description>Artista</Description>
                            <ButtonOutlineAround>
                                <FaPlay color="#27ae60" size={14} style={{ marginTop: 8 }} />
                            </ButtonOutlineAround>
                            <ButtonOutlineAround>
                                <FaPause color="#000" size={14} style={{ marginTop: 8 }} />
                            </ButtonOutlineAround>
                        </ContainerMusic>
                        <Line />
                        <Footer>
                            <ContainerFooter >
                                <Description>Terms of use </Description>
                                <Description>Contact & Support</Description>
                            </ContainerFooter>
                        </Footer>


                    </ContainerList>
                </Body>
            </ContainerCenter>
        </Container>

    )
};

export default Home;