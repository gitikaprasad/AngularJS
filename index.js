import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyBodlcsDWcYbrEVRUVWerp-s9EGoUyezno';




class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({videos}); //if the key and property value has the same name, replace videos:videos as videos
    });
  }

  render()
  {
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}




ReactDOM.render(<App />,document.querySelector('.container'));
