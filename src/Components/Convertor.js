import './Convertor.css';
import microphone from '../Images/Microphone.png';
import deletebtn from '../Images/deletebtn.png';
import stoplistining from '../Images/stoplistining.png'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Convertor() {

    const startListening = () => SpeechRecognition.startListening({ continuous: true });
    const stopliten = () => SpeechRecognition.stopListening()
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    const handleOnChange = (event) => {

    }
    return (
        <>
            <h2>Voice To Text</h2>
            <textarea className='text' name="text" id="textarea" cols="30" rows="10" placeholder='Speak...' value={transcript} onChange={handleOnChange}></textarea>
            <div className="microbag">
                <img className='micro' onClick={startListening} src={microphone} alt='' />
                <img className='micro' onClick={stopliten} src={stoplistining} alt="" />
                <img className='micro' onClick={resetTranscript} src={deletebtn} alt="" />
                <button className='savebtn'>Save</button>
            </div>

        </>
    )
}
