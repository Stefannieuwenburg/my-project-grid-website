import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
  --primary:#ddd;
  --dark:#333;
  --light:#fff;
  --red:'#ED553B';
  --orange:'orange';
  --yellow:'#F6D55C';
  --olive:'olive';
  --green:'#3CAEA3';
  --teal:'teal';
  --blue:'#173F5F';
  --violet:'violet';
  --purple:'purple';
  --pink:'pink';
  --brown:'brown';
  --grey:'grey';
  --black:'#000000';
  --shadow:0 1px 5px rgba(104,104,104,0.8)
}
html{
  box-sizing: border-box;
  font-family:Arial, Helvetica, sans-serif;
  color:var(--dark);
}
body{
  background: linear-gradient(to right,#868e96, #595e63);
  margin: 10px;
}
`;

export default GlobalStyle;


