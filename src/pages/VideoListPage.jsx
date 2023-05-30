import { useState } from 'react';
import { VideoList } from '../components/VideoList';
import { Player } from '../components/Player/Player';
import { Modal } from '../components/Modal';
import { videos } from '../data';

export const VideoListPage = () => {
  const [selectionVideo, setSelectionVideo] = useState(null);

  const selectVideo = link => {
    setSelectionVideo(link);
  };

  const closeModal = () => {
    setSelectionVideo(null);
  };

  return (
    <>
      <h1>Selection Video: {selectionVideo}</h1>
      <VideoList videos={videos} onSelect={selectVideo} />

      {selectionVideo && (
        <Modal onToggleModal={closeModal}>
          <Player url={selectionVideo} />
        </Modal>
      )}
    </>
  );
};
