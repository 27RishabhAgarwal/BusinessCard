const VideoBackground = () => {
    return (
        <div className="video-background">
        <video autoPlay muted loop playsInline>
            <source src="./assets/background.mp4" type="video/mp4" />
        </video>
        </div>
    );
}

export default VideoBackground;