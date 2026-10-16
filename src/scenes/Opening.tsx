import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Atmosphere, BLUE, clamp, SceneLabel} from '../components/Atmosphere';
export const Opening = () => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const enter = spring({frame: f, fps, config: {damping: 200}, durationInFrames: fps * 1.6});
  return <AbsoluteFill style={{color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif'}}>
    <Atmosphere />
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', opacity: interpolate(f, [0, fps * 0.8], [0, 1], clamp), scale: 0.87 + enter * 0.13}}>
      <SceneLabel>MACRO REIIS / A NEW ERA</SceneLabel>
      <div style={{fontSize: 132, fontWeight: 900, lineHeight: 1.05, textAlign: 'center', letterSpacing: -4}}>THE FUTURE<br/><span style={{color: BLUE, textShadow: '0 0 55px #00baff66'}}>STARTS NOW</span></div>
      <div style={{height: 3, width: interpolate(f, [fps * 0.5, fps * 2], [0, 440], clamp), background: BLUE, boxShadow: `0 0 25px ${BLUE}`, marginTop: 55}}/>
    </AbsoluteFill>
  </AbsoluteFill>;
};
