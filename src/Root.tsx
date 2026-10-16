import {Composition, Folder} from 'remotion';
import {MacroReiis} from './MacroReiis';
import {Opening} from './scenes/Opening';
import {Capabilities} from './scenes/Capabilities';
import {Brand} from './scenes/Brand';
export const RemotionRoot = () => <>
  <Composition id="MacroReiis" component={MacroReiis} width={1920} height={1080} fps={30} durationInFrames={450}/>
  <Folder name="Scenes">
    <Composition id="Opening" component={Opening} width={1920} height={1080} fps={30} durationInFrames={129}/>
    <Composition id="Capabilities" component={Capabilities} width={1920} height={1080} fps={30} durationInFrames={150}/>
    <Composition id="Brand" component={Brand} width={1920} height={1080} fps={30} durationInFrames={189}/>
  </Folder>
</>;
