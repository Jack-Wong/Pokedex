import React from 'react';

class ToyDetail extends React.Component{
  constructor(props){
    super(props)
  };

  render(){
    const { toy } = this.props;
    return(
      <section className="toy-detail">
        <ul>
          <li><h3>{toy.name}</h3></li>
          <li>Happiness: {toy.happiness}</li>
          <li>Price: ${toy.price}</li>
        </ul>
      </section>
    );
  };
};

export default ToyDetail;
