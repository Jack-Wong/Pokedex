import React from 'react';
import { withRouter } from 'react-router';

class ToyIndexItem extends React.Component {
  constructor(props){
    super(props);
  };

  handleClick(router, url){
    return (event) => {
      event.preventDefault();
      router.push(url);
    };
  };

  render(){
    const { toy, router } = this.props;
    return(
      <li onClick={this.handleClick(router, '/pokemon/' + toy.pokemon_id + '/toy/' + toy.id)}>
        <img src={toy.image_url} alt={toy.name}/>
        <span>{toy.name}</span>
      </li>
    );
  };
};

export default withRouter(ToyIndexItem);
