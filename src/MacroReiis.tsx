import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {fade} from '@remotion/transitions/fade';
import {Opening} from './scenes/Opening';
import {Capabilities} from './scenes/Capabilities';
import {Brand} from './scenes/Brand';
import {clamp} from './components/Atmosphere';
export const MacroReiis = () => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  return <AbsoluteFill style={{background: '#000', color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif'}}>
    {/* Transition overlaps: 4.3 + 5 + 6.3 - 0.6 = 15 seconds. */}
    <TransitionSeries>
      <TransitionSeries.Sequence name="The future starts now" durationInFrames={4.3 * fps} premountFor={fps}><Opening/></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={linearTiming({durationInFrames: 0.3 * fps})}/>
      <TransitionSeries.Sequence name="Speed / Precision / Technology" durationInFrames={5 * fps} premountFor={fps}><Capabilities/></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 0.3 * fps})}/>
      <TransitionSeries.Sequence name="Macro Reiis" durationInFrames={6.3 * fps} premountFor={fps}><Brand/></TransitionSeries.Sequence>
    </TransitionSeries>
    <AbsoluteFill style={{background: '#000', opacity: interpolate(f, [14.2 * fps, 15 * fps - 1], [0, 1], clamp)}}/>
  </AbsoluteFill>;
};
