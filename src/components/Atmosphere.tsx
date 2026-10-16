import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
export const BLUE = '#00baff';
export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
export const Atmosphere = ({streaks = false}: {streaks?: boolean}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  return <AbsoluteFill style={{background: '#010308', overflow: 'hidden'}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at 50% 70%, #00304c 0%, #000c18 35%, transparent 70%)', opacity: 0.65}} />
    <svg width="1920" height="1080" style={{position: 'absolute'}}>
      <defs><radialGradient id="particle"><stop stopColor="#c5f3ff"/><stop offset="0.2" stopColor={BLUE} stopOpacity="0.8"/><stop offset="1" stopColor={BLUE} stopOpacity="0"/></radialGradient></defs>
      {Array.from({length: 65}, (_, i) => {
        const x = ((i * 367 + 73 + t * (9 + i % 7)) % 2120) - 100;
        const y = ((i * 197 + 91 - t * (12 + i % 9)) % 1280 + 1280) % 1280 - 100;
        return <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 9 : 3.5} fill="url(#particle)" opacity={0.35 + 0.3 * Math.sin(t * 1.2 + i)} />;
      })}
      <ellipse cx="960" cy="920" rx="710" ry="125" fill="none" stroke={BLUE} opacity="0.15"/>
      <path d="M100 921H1820" stroke={BLUE} opacity="0.18"/>
      {streaks && Array.from({length: 7}, (_, i) => {
        const x = ((t * (520 + i * 65) + i * 410) % 2900) - 700;
        return <path key={i} d={`M${x} ${160 + i * 125}h${180 + i * 35}`} stroke={BLUE} strokeWidth={i % 2 + 1} opacity={0.12 + i * 0.035}/>;
      })}
    </svg>
    <AbsoluteFill style={{boxShadow: 'inset 0 0 240px 90px #000000', pointerEvents: 'none'}} />
  </AbsoluteFill>;
};
export const SceneLabel = ({children}: {children: React.ReactNode}) => <div style={{color: BLUE, fontSize: 20, letterSpacing: 7, marginBottom: 38}}>{children}</div>;
