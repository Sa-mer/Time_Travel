import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://github.com/Samer-Gassouma">Primary link</Link>
    <Link secondary href="https://github.com/Samer-Gassouma">
      Secondary link
    </Link>
  </StoryContainer>
);
