import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Playfair Display", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px 60px;

  @media screen and (max-width: 800px){
    padding:10px;
    
  }
}


code {
  font-family: "Playfair Display", serif;
}

a {
  text-decoration: none;
  color: black;
}
`;
