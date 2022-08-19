import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { FaChartPie, FaGlobe, FaCog, FaUser } from "react-icons/fa";
import LampBoardImage from "../src/Images/lampboard.jpg";
import img from './Images/laptop.jpg'
// import "./App.css";

const AppContainer = styled.div`
    display: grid;
    grid-gap: 2em;
    margin: 0.1rem 1.0rem;
`;

const Nav = styled.div`
    a {
        display: block;
        text-decoration: none;
        padding: 0.2rem;
        color: var(--light);
        text-align: center;
        text-transform: uppercase;
        font-size: 1.1rem;
        box-shadow: var(--shadow);
        border-radius: 10px;
        border: 3px solid green;
        
    }
    a:hover {
        background: var(--dark);
    }
    ul {
        display: grid;
        grid-gap: 5px;
        list-style: none;
        margin: 0.2rem 5.2rem;
        grid-template-columns: repeat(4, 1fr);
    }
    li {
        font-size: 20px;
        color: #61dafb;
        text-decoration: none;
    }
`;

const Button = styled.button`
    color: whitesmoke;
    background: var(--dark);
    font-size: 1em;
    margin: 1em;
    padding: 0.6rem 1.3rem;
    border: 3px solid green;
    border-radius: 20px;
    &:hover {
        background: var(--dark);
    }
    a {
        text-decoration: none;
    }
`;
const InfoButton = styled.button`
    background: var(--light);
    font-size: 1em;
    margin: 1em;
    padding: 0.6rem 1.3rem;
    border: 3px solid green;
    border-radius: 20px;
    &:hover {
        background: var(--dark);
        
    }
    a {
        text-decoration: none;
    }
    
`;

const TopContainer = styled.section`
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
        "Showcase Showcase TopBoxa"
        "Showcase Showcase TopBoxb";
`;

const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 0;
    color: var(--light);
`;

const Showcase = styled.div`
    grid-area: Showcase;
    min-height: 400px;
    background-image: linear-gradient(
            rgba(0, 0, 0, 0.342),
            rgba(0, 0, 0, 0.342)
        ),
        url(${img});
    background-size: cover;
    background-position: center;
    padding: 3rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    box-shadow: var(--shadow);
`;

const TopBoxa = styled.div`
    grid-area: TopBoxa;
    box-shadow: var(--shadow);
    padding: 1.5rem;
    background: var(--primary);
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 3px solid green;
`;

const TopBoxb = styled.div`
    grid-area: TopBoxb;
    box-shadow: var(--shadow);
    padding: 1.5rem;
    background: var(--primary);
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 3px solid green;
`;

const Paragraph = styled.p`
    font-size: 1.3rem;
    margin-top: 0;
    color: var(--light);
`;

const Price = styled.p`
    font-size: 1.5rem;
`;

const Boxes = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Box = styled.div`
    background: var(--primary);
    text-align: center;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    border: 3px solid green;
    border-radius: 20px;
`;

const ParagraphBox = styled.p`
    text-align: center;
    font-size: 1rem;
    color: var(--dark);
`;
const Info = styled.section`
    background: var(--primary);
    box-shadow: var(--shadow);
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(2, 1fr));
    padding: 2rem;
    border-radius: 20px;
    border: 3px solid green;
`;
const BoxImage = styled.div`
    img {
        border-radius: 20px;
        border: 3px solid green;
    }
`;

const Portfolio = styled.section`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    img {
        width: 100%;
        border-radius: 20px;
        border: 3px solid green;
    }
`;


const FooterCopyricht = styled.p`
    margin-top: 1, 2rem;
    text-align: center;
    color: var(--Gray);
    font-size: 1.2rem;
    margin: 0.2rem;
`;

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <AppContainer>
                {/* Nav section */}
                <Nav>
                    <ul>
                        <li>
                            <a href="#2">Home</a>
                        </li>
                        <li>
                            <a href="#3">About</a>
                        </li>
                        <li>
                            <a href="#4">Service</a>
                        </li>
                        <li>
                            <a href="#5">Contact</a>
                        </li>
                    </ul>
                </Nav>
                {/* Top Container */}
                <TopContainer>
                    <Showcase>
                        <Title>logo </Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem odio non libero, tempore provident unde.
                        </Paragraph>
                        <Button>
                            <a href="#l">Read More</a>
                        </Button>
                    </Showcase>{" "}
                    <TopBoxa>
                        <h4> Membership</h4>
                        <Price>$199/mo</Price>
                        <InfoButton>
                            <a href="#5">buy now</a>
                        </InfoButton>
                    </TopBoxa>
                    <TopBoxb>
                        <h4> Pro Membership</h4>
                        <Price>$299/mo</Price>
                        <InfoButton>
                            <a href="#5">buy now</a>
                        </InfoButton>
                    </TopBoxb>
                </TopContainer>
                {/* Boxes Section */}
                <Boxes>
                    <Box>
                        <FaGlobe size={"30px"} />
                        <h3>Marketing</h3>
                        <ParagraphBox>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non incidunt inventore vitae necessitatibus
                            consequuntur voluptate?
                        </ParagraphBox>
                    </Box>
                    <Box>
                        <FaCog size={"30px"} />
                        <h3>Development</h3>
                        <ParagraphBox>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non incidunt inventore vitae necessitatibus
                            consequuntur voluptate?
                        </ParagraphBox>
                    </Box>
                    <Box>
                        <FaUser size={"30px"} />
                        <h3>Support</h3>
                        <ParagraphBox>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non incidunt inventore vitae necessitatibus
                            consequuntur voluptate?
                        </ParagraphBox>
                    </Box>
                    <Box>
                        <FaChartPie size={"30px"} />
                        <h3>Analytics</h3>
                        <ParagraphBox>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non incidunt inventore vitae necessitatibus
                            consequuntur voluptate?
                        </ParagraphBox>
                    </Box>
                </Boxes>
                {/* info section */}
                <Info>
                    <BoxImage>
                        {" "}
                        <img
                            src={LampBoardImage}
                            width={500}
                            height={300}
                            alt="Image1"
                        />
                    </BoxImage>
                    <div>
                        <h2>Your business on the web</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugit explicabo facilis distinctio nesciunt
                            incidunt, eius, tenetur quo, laboriosam voluptatum
                            aliquid cum hic in vero. Quod reiciendis eum amet
                            nesciunt deserunt?
                        </p>
                        <Button>Learn more</Button>
                    </div>
                </Info>
                {/* portfoilio section */}
                <Portfolio>
                    <img
                        src="http://source.unsplash.com/random/201x200"
                        alt=""
                    />
                    <img
                        src="http://source.unsplash.com/random/202x200"
                        alt=""
                    />
                    <img
                        src="http://source.unsplash.com/random/203x200"
                        alt=""
                    />
                    <img
                        src="http://source.unsplash.com/random/204x200"
                        alt=""
                    />
                    <img
                        src="http://source.unsplash.com/random/205x200"
                        alt=""
                    />
                    <img
                        src="http://source.unsplash.com/random/206x200"
                        alt=""
                    />
                    <img
                        src="http://source.unsplash.com/random/207x200"
                        alt=""
                    />
                    <img
                        src="http://source.unsplash.com/random/208x200"
                        alt=""
                    />
                    <img
                        src="http://source.unsplash.com/random/209x200"
                        alt=""
                    />
                </Portfolio>
                <FooterCopyricht>
                    © Copyright 2022 | Ontwikkeling door Stefan Nieuwenburg
                    Services | Alle rechten voorbehouden.
                </FooterCopyricht>
                {/* Wrapper ends */}
            </AppContainer>
        </Fragment>
    );
}

export default App;
