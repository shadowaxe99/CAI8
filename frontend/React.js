// frontend/React.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInfluencers } from '../actions/influencerActions';

const App = () => {
  const influencers = useSelector((state) => state.influencers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfluencers());
  }, [dispatch]);

  return (
    <div>
      <h1>AI Agent Talent Agency</h1>
      <h2>Influencers:</h2>
      {influencers.map((influencer) => (
        <div key={influencer.id}>
          <h3>{influencer.name}</h3>
          <p>{influencer.niche}</p>
          <p>{influencer.audienceSize}</p>
          <p>{influencer.engagementMetrics}</p>
        </div>
      ))}
    </div>
  );
};

export default App;