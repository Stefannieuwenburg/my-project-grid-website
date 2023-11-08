import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { motion } from "framer-motion"
import { FaChartPie, FaGlobe, FaCog, FaUser } from "react-icons/fa";
import LampBoardImage from "../src/Images/lampboard.jpg";
import img from './Images/laptop.jpg'


const AppContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
`;

const InfoButton = styled.button`
    color: var(--black);
    font-size: 1em;
    margin: 1em;
    padding: 0.6rem 1.3rem;
    border: 3px solid black;
    border-radius: 20px;
    transition: all .5s ease;
    &:hover {
    color: #E38B06;
    transform: traslateY(-3rem);
}
`;

const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 0;
    color: var(--light);
`;

const Showcase = styled.div`
    width: "auto";
    background-image: linear-gradient(
            rgba(0, 0, 0, 0.342),
            rgba(0, 0, 0, 0.342)
        ),
        url(${img});
    background-size: cover;
    background-position: center;
    padding: 1.2rem;
    margin: 1.2rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    box-shadow: var(--dark);
`;

const Paragraph = styled.p`
    font-size: 1.3rem;
    margin-top: 0;
    color: var(--light);
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
    border: 3px solid black;
    border-radius: 20px;
    transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
`;

const ParagraphBox = styled.p`
    text-align: center;
    font-size: 1rem;
    color: var(--dark);
`;
const Info = styled.section`
    background: var(--primary);
    box-shadow: var(--dark);
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(2, 1fr));
    padding: 2rem;
    border-radius: 20px;
    border: 3px solid black;
`;
const BoxImage = styled.div`
    img {
        width:'auto';
        border-radius: 20px;
        border: 3px solid black;
        transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
}
`;

const Portfolio = styled.section`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    img {
        width:'auto';
        border-radius: 20px;
        border: 3px solid black;
        transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
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
                    <Showcase>
                        <Title>logo </Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem odio non libero, tempore provident unde.
                        </Paragraph>
                        <InfoButton>
                            Read More
                        </InfoButton>
                    </Showcase>{" "}
                    
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
                 <motion.div
                        initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}>
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
                        <InfoButton>Learn more</InfoButton>
                    </div>
                    </Info>
                     </motion.div>
                {/* portfoilio section */}
                <motion.div
                        initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}>
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
                    </motion.div>
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
