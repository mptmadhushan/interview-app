import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useReactMediaRecorder } from "react-media-recorder";
const VideoRoc = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const [audioQuestion, setAudioQuestion] = useState(
    "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
  );
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const [isPlay, setIsPlay] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [crowd, setCrowd] = React.useState(null);

  const [questions, setRespo] = React.useState([
    {
      name: "John1",
      age: 30,
      id: 1,
    },
    {
      name: "John2",
      age: 30,
      id: 1,
    },
    {
      name: "John3",
      age: 30,
      id: 1,
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [mood, setMood] = useState(null);
  const PlayNextQuestion = () => {
    console.log("meadia", mediaBlobUrl.blob);
    console.log("🚀 ~ file: VideoRoc.js ~ line 31 ~ PlayNextQuestion ~ blob");
    const file = new File([mediaBlobUrl], "reqav", { type: "audio/wav" });
    // console.log("🚀 ~ file: index.js ~ line 84 ~ .then ~ file", wav);
    // const file = new File([mediaBlobUrl], 'untitled')
    console.log(file);
    const formData = new FormData();
    formData.append("audio", {
      uri: mediaBlobUrl,
      type: "audio/wav",
      name: "test.wav",
    });
    //  formData.append("audio", file,type: 'audio/wav',
    //  name: 'test.wav',);
    formData.append("Qid", 43);

    axios
      .post("http://34.201.245.161:5000/Evaluation/600", formData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // setRespo(res.data.detail);
      });
  };
  const audioElm = useRef();
  const MINUTE_MS = 6000;

  useEffect(() => {
    getQuiz();
    const interval = setInterval(() => {
      capture();
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, []);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "File name", { type: "image/png" });
        console.log("🚀 ~ file: index.js ~ line 84 ~ .then ~ file", file);
        setSelectedFile(file);
        handleSubmission(file);
      });
  }, [webcamRef]);
  const getQuiz = () => {
    axios
      .post("http://34.201.245.161:5000/CV", {
        jobtype: "parttime",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.calcey);
        setRespo(res.data.calcey);
      });
  };
  const handleSubmission = (file) => {
    const formData = new FormData();

    formData.append("FaceImage", file);
    // formData.append("image", selectedFile);

    axios.post("http://34.201.245.161:5000/emotion", formData).then((res) => {
      console.log(res);
      console.log(res.data);
      setMood(res.data);
    });
  };
  // const handleStartCaptureClick = React.useCallback(() => {
  //   setCapturing(true);
  //   mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
  //     mimeType: "video/webm",
  //   });
  //   mediaRecorderRef.current.addEventListener(
  //     "dataavailable",
  //     handleDataAvailable
  //   );
  //   mediaRecorderRef.current.start();
  // }, [webcamRef, setCapturing, mediaRecorderRef]);

  // const handleDataAvailable = React.useCallback(
  //   ({ data }) => {
  //     if (data.size > 0) {
  //       setRecordedChunks((prev) => prev.concat(data));
  //     }
  //   },
  //   [setRecordedChunks]
  // );

  // const handleStopCaptureClick = React.useCallback(() => {
  //   mediaRecorderRef.current.stop();
  //   setCapturing(false);
  // }, [mediaRecorderRef, webcamRef, setCapturing]);

  // const handleDownload = React.useCallback(() => {
  //   if (recordedChunks.length) {
  //     const blob = new Blob(recordedChunks, {
  //       type: "video/webm",
  //     });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     document.body.appendChild(a);
  //     a.style = "display: none";
  //     a.href = url;
  //     a.download = "react-webcam-stream-capture.webm";
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     setRecordedChunks([]);
  //   }
  // }, [recordedChunks]);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    // const formData = new FormData();

    // formData.append("AudioFile", selectedFile);

    // axios
    //   .post(
    //     "http://ec2-54-242-87-59.compute-1.amazonaws.com:5010/techEvaluation/3",
    //     formData
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //     setRespo(res.data);
    //   });
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const items = {};
      localStorage.setItem("tech", JSON.stringify(items));
      // setShowScore(true);
    }
  };
  return (
    <>
     {questions&&<p> {questions[currentQuestion].Question}</p>}
    {questions&& <audio src={"http://34.201.245.161:5000/Qaudios/1.wav"} ref={audioElm} />}
      <Webcam ref={webcamRef} width="250px" />
     {mood&& <p>Emotion : {mood.emotion}</p>}
     {mood&& <p>Probability : {mood.probability}</p>}

      {/* {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )} */}
      
      <div className="flex-grow-0 py-3 px-4 border-top">
        <div className="text-center align-items-center py-1">
          <div>
            <p>{status}</p>
            {/* <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button> */}
            {/* <video src={mediaBlobUrl} controls autoPlay loop /> */}
          
            <button
              className="btn btn-success btn-sm me-1 px-2 mx-2"
              onClick={startRecording}
            >
              <i className="feather-lg" data-feather="play"></i>{" "}
              <span className="align-middle"> Start</span>
            </button> <button
              className="btn btn-danger btn-sm me-1 px-2 mx-2"
              onClick={stopRecording}
            >
              <i className="feather-lg" data-feather="play"></i>{" "}
              <span className="align-middle"> Stop</span>
            </button>
            <button
              className="btn btn-primary border btn-sm px-2 mx-2"
              onClick={handleAnswerOptionClick}
            >
              <i className="feather-lg" data-feather="pause"></i>
              <span className="align-middle"> Next</span>{" "}
            </button>
            <a className="btn btn-info border btn-sm px-2 mx-2" href="/summery">
              <i className="feather-lg" data-feather="pause"></i>
              <span className="align-middle"> Summery</span>{" "}
            </a>
            {isPlay && (
              <span>
                <i class="bx bxs-music bx-burst fs-4 ms-2 text-primary"></i>
              </span>
            )}
          </div>
          <div className="mt-3">
            <div class="mb-3">
              <label
                for="exampleFormControlTextarea1 "
                class="form-label fw-bold"
              >
                Type Your Answer here
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoRoc;
