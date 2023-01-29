import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine John he give of rich he. They age and draw mrs like. Improving end distrusts may instantly washousehold applauded.'
  },
  {
    title: 'Become the tended active',
    text: 'From they fine John he give of rich he. They age and draw mrs like. Improving end distrusts may instantly washousehold applauded.'
  },
  {
    title: 'Message or am nothing',
    text: 'From they fine John he give of rich he. They age and draw mrs like. Improving end distrusts may instantly washousehold applauded.'
  },
  {
    title: 'Really boy law county',
    text: 'From they fine John he give of rich he. They age and draw mrs like. Improving end distrusts may instantly washousehold applauded.'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The future is now and you just need to realize it. Step into future today & make it happen.</h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features