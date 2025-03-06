import React, { useState } from "react";
import "./Chatbot.css";

const keywordResponses = {
  mercury: {
    response: "Closest planet to the Sun. Smallest planet in the Solar System. No atmosphere, extreme temperatures. No moons.",
    tamilVoice: "மெர்குரி சூரியனுக்கு மிக அருகிலுள்ள மற்றும் மிகச் சிறிய கிரகம் ஆகும். இதற்கு வளிமண்டலம் இல்லை, அதனால் அதில் மிக அதிக வெப்பநிலை வேறுபாடுகள் உள்ளன.",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/837_messenger_orbit_image_of_mercury.jpg"
  },
  venus: {
    response: "Similar in size to Earth. Thick atmosphere causes a greenhouse effect. Hottest planet in the Solar System. No moons.",
    tamilVoice: "வீனஸ் பூமியின் அளவிற்கு சமமானது. இதன் தடித்த வளிமண்டலம் வீட்பிறை விளைவை ஏற்படுத்துகிறது. இது சூரியக் குடும்பத்தில் மிக அதிக வெப்பமுள்ள கிரகம் ஆகும்.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"
  },
  jupiter: {
    response: "Largest planet in the Solar System. Has the Great Red Spot, a giant storm. 79 known moons, including Ganymede.",
    tamilVoice: "ஜூப்பிட்டர் எங்கள் சூரியக் குடும்பத்தின் மிகப்பெரிய கிரகம் ஆகும். இதில் 'பெரிய சிவப்பு புள்ளி' எனப்படும் பெரும் புயல் உள்ளது. 79 நிலாக்கள் உள்ளன, அதில் கணிமீட் மிகப்பெரியது.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
  },
  saturn: {
    response: "Famous for its rings. Second-largest planet. 83 known moons, including Titan.",
    tamilVoice: "சனிக் கிரகம் அதன் வளையங்களுக்காக பிரபலமானது. இது இரண்டாவது மிகப்பெரிய கிரகம் ஆகும். 83 நிலாக்கள் உள்ளன, இதில் டைடான் மிகப்பெரியது.",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/7689_PIA21328.jpg"
  },
  uranus: {
    response: "Rotates on its side. Ice giant composed mostly of water, ammonia, and methane. 27 moons, including Titania and Oberon.",
    tamilVoice: "யுரேனஸ் தனது பக்கமாக சுழல்கிறது. இது ஒரு பனிப் பெரிய கிரகம் ஆகும், இது முக்கியமாக தண்ணீர், அமோனியா, மீத்தேன் ஆகியவற்றால் ஆனது. 27 நிலாக்கள் உள்ளன.",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/811_Uranus-Voyager2.jpg"
  },
  neptune: {
    response: "Farthest planet from the Sun. Has the strongest winds. 14 moons, including Triton.",
    tamilVoice: "நெப்டியூன் என்பது சூரியனுக்கு மிகவும் தொலைவில் உள்ள கிரகம். இதில் மிக வேகமான காற்று வீசுகிறது. 14 நிலாக்கள் உள்ளன, இதில் டிரைட்டான் முக்கியமானது.",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/786_PIA01492.jpg"
  },
  titan: {
    response: "Saturn's largest moon. Thick atmosphere and liquid methane lakes.",
    tamilVoice: "டைடான் சனிக் கிரகத்தின் மிகப்பெரிய நிலா ஆகும். இதில் தடித்த வளிமண்டலம் மற்றும் திரவ மீத்தேன் ஏரிகள் உள்ளன.",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/905_PIA20016.jpg"
  },
  moon: {
    response: "Earth's only natural satellite. Controls tides and has a thin exosphere.",
    tamilVoice: "நிலா புவியின் ஒரே இயற்கை நிலாக் கோள் ஆகும். இது கடல்சார்ந்த அலைகளை கட்டுப்படுத்துகிறது மற்றும் மெல்லிய வெளிவளிமண்டலம் கொண்டுள்ளது.",
    image: "https://www.nasa.gov/sites/default/files/thumbnails/image/moon-mosaic.jpg"
  },
  phobos: {
    response: "One of Mars' two moons. Small, irregularly shaped, possibly a captured asteroid.",
    tamilVoice: "போபோஸ் என்பது மார்ஸின் இரண்டு நிலாக்களில் ஒன்றாகும். இது சிறியதாகவும், ஒழுங்கற்ற வடிவத்துடனும், ஒரு பிடிக்கப்பட்ட ஆஸ்டராய்டாக இருக்கலாம்.",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/707_PIA10369.jpg"
  },
  deimos: {
    response: "Mars' smaller moon. Likely a captured asteroid.",
    tamilVoice: "டைமோஸ் என்பது மார்ஸின் மிகச் சிறிய நிலா ஆகும். இது பிடிக்கப்பட்ட ஆஸ்டராய்டாக இருக்கலாம்.",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/708_PIA00089.jpg"
  },
  europa: {
    response: "One of Jupiter's largest moons. Has a subsurface ocean and potential for life.",
    tamilVoice: "யூரோப்பா என்பது ஜூப்பிட்டரின் மிகப்பெரிய நிலாக்களில் ஒன்றாகும். இதில் ஒரு அடிநிலை பெருங்கடல் உள்ளது மற்றும் உயிரினங்கள் வாழக்கூடிய வாய்ப்பு உள்ளது.",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/302_PIA19048.jpg"
  },
  ganymede: {
    response: "Largest moon in the Solar System. Has a magnetic field and ice-covered surface.",
    tamilVoice: "கணிமீட் சூரியக் குடும்பத்தில் மிகப்பெரிய நிலா ஆகும். இதில் காந்தப் புலம் மற்றும் பனியால் மூடப்பட்ட மேற்பரப்பு உள்ளது.",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/724_Ganymede-Galileo.jpg"
  }
};

export default function Chatbot() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [image, setImage] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleQuery = () => {
    const keyword = query.toLowerCase().trim();
    if (keywordResponses[keyword]) {
      setResponse(keywordResponses[keyword].response);
      setImage(keywordResponses[keyword].image);
      speakTamil(keywordResponses[keyword].tamilVoice);
    } else {
      setResponse("Sorry, I couldn't find that.");
    }
  };

  const speakTamil = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "ta-IN";
      setIsSpeaking(true);
      speech.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="chatbot-container">
    <h2>Space Chatbot</h2>
    <div className="chatbox">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about planets, stars, or space missions..."
        className="chat-input"
      />
      <button onClick={handleQuery} className="chat-button">Ask</button>
    </div>

    {response && (
      <div className="response-box">
        <p>{response}</p>
        {image && <img src={image} alt="space" className="chat-image" />}
      </div>
    )}

    <button onClick={() => speakTamil(response)} disabled={!response || isSpeaking} className="speak-button">
      🔊 Hear in English
    </button>
  </div>
);
}
