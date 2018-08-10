import React from 'react'

import EscortsPageContainer from '../../components/Containers/EscortsPageContainer';

// Mock data
import getProfileData from '../../utils/getProfileData';
const escorts = getProfileData();

const Acompanhantes = () => (
  <EscortsPageContainer escorts={escorts} />
);

export default Acompanhantes;
