import styled, {createGlobalStyle} from 'styled-components';
import {Layout} from 'antd';
import FilesTree from './tree/filesTree';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: plum;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

const StyledLayout = styled(Layout)`
  background-color: rgba(11, 73, 16, 0.31);
  font-weight: bold;
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle/>
      <StyledLayout>
        <FilesTree/>
      </StyledLayout>
    </>
  );
}

export default App;
