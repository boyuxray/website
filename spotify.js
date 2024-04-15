window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById('embed-iframe');
      const options = {
        width: '100%',
        height: '160',
        uri: '0gz4DmAvfQagrZ6mnpFLML'
      };
      const callback = (EmbedController) => {
        document.querySelectorAll('.episode').forEach(
          episode => {
            episode.addEventListener('click', () => {
              EmbedController.loadUri(episode.dataset.spotifyId)
            });
          })
      };
      IFrameAPI.createController(element, options, callback);
    };