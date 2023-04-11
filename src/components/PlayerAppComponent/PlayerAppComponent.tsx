import YouTube, { YouTubeProps } from 'react-youtube';
interface ITubeProps {
    url: string;
}
const PlayerAppComponent = ({url}:ITubeProps) => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
      }
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        },
      };
    return (<YouTube videoId={url} opts={opts} onReady={onPlayerReady} />)
}
export default PlayerAppComponent