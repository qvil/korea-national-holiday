import styled from "styled-components";
import Header from "../src/components/Header";

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
  const date = new Date();
  const today = `${date.getMonth() + 1}-${date.getDate()}`;
  return (
    <Div>
      <Header today={today} />
      Home
      <Text text="Greetings!">Hi</Text>
      <Button>Button</Button>
    </Div>
  );
};

export default Home;
