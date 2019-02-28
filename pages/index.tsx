import styled from "styled-components";

const Div = styled.div`
  background: ${({
    theme: {
      color: { primary }
    }
  }) => primary};
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

const Button = styled.button`
  background: ${props => props.theme.color.secondary};
  background: ${({
    theme: {
      color: { secondary }
    }
  }) => secondary};
`;

const Home: React.FunctionComponent<IHomeProps> = props => {
  return (
    <Div>
      Home
      <Text text="Greetings!">Hi</Text>
      <Button>Button</Button>
    </Div>
  );
};

export default Home;
