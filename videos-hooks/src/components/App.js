import React, {useState, useEffect} from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {

    /*const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('buildings');
    }, []);

    const onTermSubmit = async term => {
        const response = await youtube.get('/search' , {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };*/

    const [videos, search] = useVideos('buildings');
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onVideoSelect = video => {
        setSelectedVideo(video);
    };

    useEffect(() => {
        setSelectedVideo(videos[0]);        
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default App;