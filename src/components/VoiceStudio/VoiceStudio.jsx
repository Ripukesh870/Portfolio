import { useState } from "react";

import "../../css/VoiceStudio.css";

import HeroSection from "./HeroSection";
import ModeSelector from "./ModeSelector";
import CharacterSection from "./CharacterSection";
import SettingsSection from "./SettingsSection";
import TextToVoice from "./TextToVoice";
import VoiceClone from "./VoiceClone";
import GenerateButton from "./GenerateButton";
import AudioPlayer from "./AudioPlayer";


const VoiceStudio = () => {

  // text-to-voice OR voice-clone
  const [mode, setMode] = useState("text");

  // selected character
  const [selectedVoice, setSelectedVoice] = useState(null);

  // generated audio
  const [audioUrl, setAudioUrl] = useState("");

  return (

    <div className="container-fluid py-5 mt-5">

      <HeroSection />

      <ModeSelector
        mode={mode}
        setMode={setMode}
      />

      <CharacterSection
        selectedVoice={selectedVoice}
        setSelectedVoice={setSelectedVoice}
      />

      <SettingsSection />

      {

        mode === "text"

        ?

        <TextToVoice />

        :

        <VoiceClone />

      }

      <GenerateButton
        mode={mode}
        selectedVoice={selectedVoice}
        setAudioUrl={setAudioUrl}
      />

      <AudioPlayer
        audioUrl={audioUrl}
      />

    </div>

  );

};

export default VoiceStudio;