import React from 'react';
import TrackList from '../TrackList/TrackList'
import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
    this.handleNameChange = this.handleNameChange.bind(this)

  }

  handleNameChange(event) {
    let name = event.target.value;
    this.props.onNameChange(name)
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
        <TrackList tracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
};

export default Playlist;
