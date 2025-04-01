import React from 'react'

function Youtube() {
    return (
        <div className="flex justify-center mt-6">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/videoseries?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&rel=0"
            title="YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
}

export default Youtube
