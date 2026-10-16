import {AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Atmosphere, BLUE, clamp, SceneLabel} from '../components/Atmosphere';
const Word = ({text, index, detail}: {text: string; index: string; detail: string}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const s = spring({frame: f, fps, config: {damping: 22, stiffness: 110, mass: 0.8}});
  return <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: interpolate(f, [0, fps * 0.23, fps * 1.36, fps * 1.67], [0, 1, 1, 0], clamp), translate: `0 ${interpolate(s, [0, 1], [48, 0])}px`, scale: 0.93 + s * 0.07}}>
    <SceneLabel>ENGINEERED FOR WHAT’S NEXT / {index}</SceneLabel>
    <div style={{fontSize: 164, fontWeight: 900, letterSpacing: -6, textShadow: '0 0 65px #00baff55'}}>{text}<span style={{color: BLUE}}>.</span></div>
    <div style={{fontSize: 25, letterSpacing: 5, marginTop: 30, color: '#a7c6d5'}}>{detail}</div>
    <div style={{height: 2, width: 650 * s, marginTop: 55, background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)`}}/>
  </AbsoluteFill>;
};
export const Capabilities = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif'}}><Atmosphere streaks/>
    <Sequence name="SPEED" durationInFrames={1.7 * fps} premountFor={fps}><Word text="SPEED" index="01" detail="MOMENTUM WITHOUT LIMITS"/></Sequence>
    <Sequence name="PRECISION" from={1.7 * fps} durationInFrames={1.7 * fps} premountFor={fps}><Word text="PRECISION" index="02" detail="EVERY DETAIL. EVERY ADVANTAGE."/></Sequence>
    <Sequence name="TECHNOLOGY" from={3.4 * fps} durationInFrames={1.6 * fps} premountFor={fps}><Word text="TECHNOLOGY" index="03" detail="BUILT TO MOVE YOU FORWARD"/></Sequence>
  </AbsoluteFill>;
};
