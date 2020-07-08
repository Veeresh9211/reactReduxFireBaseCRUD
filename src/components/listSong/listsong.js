import React,{Component} from 'react';
import {connect} from 'react-redux'
import SongDetails from '../songDetails/songDetails';
import {GetSongData} from '../../store/actions/songAction';
import DataLoader from '../loader/dataLoader';
class ListSong extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.GetSongData()
    }
    render(){
        let dataLoader = this.props.loaderVal ? <DataLoader/> : "";
        let {songs} =this.props;
        let songDetail = songs.length > 0 && songs.map((song)=>{
            return <SongDetails song={song} key={song.id}/>
        })
        return(
            <div className="container">
                <div className="row postHeader">
                    <div className="col-md-2">
                        Id
                    </div>
                    <div className="col-md-2">
                        Song Name
                    </div>
                    <div className="col-md-3">
                        Film Name
                    </div>
                    <div className="col-md-2">
                        Singer
                    </div>
                    <div className="col-md-2">
                        Year
                    </div>
                    <div className="col-md-1">
                        Actions
                    </div>
                </div>
                {dataLoader}
                {songDetail}
            </div>
        )
      
    }
}
const mapStateToProps = (state)=>{
    debugger
    return{
        songs: state.songR.songs,
        loaderVal: state.songR.loader
    }
}
export default connect(mapStateToProps,{GetSongData})(ListSong);