import { render } from '@testing-library/react';

import Temp from '@/test/Temp';
import defaultProfileImage1 from '@/assets/defaultProfileImage.png';
import defaultProfileImage2 from '../assets/defaultProfileImage.png';

it('true result', () => {
  render(<Temp />);
  console.log(defaultProfileImage2);
  console.log(defaultProfileImage1);
});
