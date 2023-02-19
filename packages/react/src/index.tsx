import { styled } from './styles';

const Button = styled('button', {
  width: '$3',
  backgroundColor: '$gray500',
  fontSize: '$sm',
});

export function App() {
  return <Button>Hello World</Button>;
}
