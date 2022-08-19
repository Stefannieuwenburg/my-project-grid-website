import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
  --primary:#ddd;
  --dark:#333;
  --light:#fff;
  --shadow:0 1px 5px rgba(104,104,104,0.8)
  --hover:'green';
  --Red:'red';
  --Orange:'orange';
  --Yellow:'yellow';
  --Olive:'olive';
  --Green:'green';
  --Teal:'teal';
  --Blue:'blue';
  --Violet:'violet';
  --Purple:'purple';
  --Pink:'pink';
  --Brown:'brown';
  --Grey:'grey';
  --Black:'black';
  --shadow:0 1px 5px rgba(104,104,104,0.8)
}
html{
  box-sizing: border-box;
  font-family:Arial, Helvetica, sans-serif;
  color:var(--dark);
}
body{
  background: linear-gradient(to right,#43494f, #4f6352);
  margin: 10px;
}
`;

export default GlobalStyle;


