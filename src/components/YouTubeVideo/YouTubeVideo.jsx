export default function YouTubeVideo({ videoId, color }) {
    return (
      <div style={{maxWidth: '480px',height: '240px', position: 'relative', paddingBottom: '20%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '480px',
            height: '240px',
            border: `6px solid ${color}`,
            borderRadius: '12px'
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
}
  
  