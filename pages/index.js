import SideBySide from '../app/components/SideBySide';
import TripleGrid from '../app/components/TripleGrid';
import HomeHero from '../app/components/HomeHero';

export default () =>

<div style={{ margin: '0 7vw' }}>
<HomeHero />
  <p>Huh</p>
  <SideBySide />
  <TripleGrid />
  <SideBySide right />
</div>
