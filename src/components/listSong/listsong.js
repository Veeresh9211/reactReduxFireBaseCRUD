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
                    <div className="col-md-1">
                        #
                    </div>
                    <div className="col-md-3">
                        Name
                    </div>
                    <div className="col-md-3">
                        content
                    </div>
                    <div className="col-md-3">
                        Author
                    </div>
                    <div className="col-md-2">
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
        songs: state.songR.posts,
        loaderVal: state.songR.loader
    }
}
export default connect(mapStateToProps,{GetSongData})(ListSong);