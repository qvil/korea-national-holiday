import styled from "styled-components";

const Div = styled.div`
  background: #f00;
`;

interface ITextProps {
  text?: string;
  children?: any;
}
interface IHomeProps {}

const Text: React.FunctionComponent<ITextProps> = props => {
  const { text, children } = props;

  return (
    <Div>
      {text}
      {children}
    </Div>
  );
};

const Home: React.FunctionComponent<IHomeProps> = props => {
  return (
    <Div>
      Home
      <Text text="Greetings!">Hi</Text>
    </Div>
  );
};

export default Home;
