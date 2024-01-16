import React, { useState, useRef } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

function Test() {
    const RecordView = () => (
        <div>
          <ReactMediaRecorder
            audio
            render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
              <div>
                <p>{status}</p>
                <button onClick={startRecording}>Start Recording</button>
                <button onClick={stopRecording}>Stop Recording</button>
                <video src={mediaBlobUrl} controls autoPlay loop />
              </div>
            )}
          />
        </div>
      );
  return (
    <>
        <RecordView/>
    </>
      
  );
}

export default Test;
