import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Atmosphere, BLUE, clamp} from '../components/Atmosphere';
export const Brand = () => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const s = spring({frame: f, fps, config: {damping: 200}, durationInFrames: fps * 1.2});
  const sweep = interpolate(f, [fps * 1.3, fps * 3.8], [-35, 135], clamp);
  return <AbsoluteFill style={{color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif'}}><Atmosphere/>
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', opacity: s, scale: 0.95 + s * 0.05}}>
      <svg width="96" height="86" viewBox="0 0 120 100" style={{marginBottom: 40, filter: 'drop-shadow(0 0 18px #00baff99)'}}><path d="M10 85V15L60 65L110 15V85M35 85V65M85 85V65" fill="none" stroke={BLUE} strokeWidth="5"/></svg>
      <div style={{position: 'relative', fontSize: 160, fontWeight: 900, letterSpacing: -7, lineHeight: 1.15}}>
        <span>MACRO <span style={{color: BLUE, textShadow: '0 0 60px #00baff44'}}>REIIS</span></span>
        <span aria-hidden style={{position: 'absolute', inset: 0, color: 'transparent', backgroundImage: `linear-gradient(110deg, transparent ${sweep - 14}%, #c9f4ff ${sweep}%, transparent ${sweep + 14}%)`, backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>MACRO REIIS</span>
      </div>
      <div style={{height: 2, width: 790, marginTop: 30, background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)`}}/>
      <div style={{marginTop: 38, fontSize: 37, letterSpacing: 2, color: '#c4d6df', opacity: interpolate(f, [fps * 0.6, fps * 1.6], [0, 1], clamp), translate: `0 ${interpolate(f, [fps * 0.6, fps * 1.6], [20, 0], clamp)}px`}}>Technology That Makes a Difference</div>
    </AbsoluteFill>
  </AbsoluteFill>;
};
