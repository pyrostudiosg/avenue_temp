import React, { useEffect, useRef } from 'react';
import '@google/model-viewer';

const ARScene = () => {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const enterARMode = async () => {
      // Wait for the model to load before entering AR mode
      await modelViewer.updateComplete;
      // Trigger the AR mode
      modelViewer.activateAR();
    };

    if (modelViewer) {
      enterARMode();
    }
  }, []);

  return (
    <div>
      <model-viewer
        ref={modelViewerRef}
        src="/teaser.usdz"
        alt="A 3D model"
        ios-src="/teaser.usdz"
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '100vh' }}
      ></model-viewer>
    </div>
  );
};

export default ARScene;
