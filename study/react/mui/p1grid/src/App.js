import BasicGrid from './components_grid/BasicGrid';
import FullWidthGrid from './components_grid/FullWidthGrid';
import SpacingGrid from './components_grid/SpacingGrid';
import RowAndColumnSpacing from './components_grid/RowAndColumnSpacing';
import ResponsiveGrid from './components_grid/ResponsiveGrid';
import AutoGrid from './components_grid/AutoGrid';
import ComplexGrid from './components_grid/ComplexGrid';
import NestedGrid from './components_grid/NestedGrid';
import ColumnsGrid from './components_grid/ColumnsGrid';
import AutoGridNoWrap from './components_grid/AutoGridNoWrap';
import ButtonAppBar from './components_appbar/ButtonAppBar';

function App() {
  return (
    <div className="App">
      {/* <BasicGrid />
      <FullWidthGrid />
      <SpacingGrid />
      <RowAndColumnSpacing />
      <ResponsiveGrid />
      <AutoGrid /> */}
      {/* <ComplexGrid title="그대들은 어떻게 살아갈것인가" 
      desc="보고 싶은데 재미 없다고 해서 고민되는 영화" 
      room="1" price="18,000" imgurl="https://img.movist.com/?img=/x00/05/92/77_p1.jpg" />
      <ComplexGrid title="그대들은 왜 사는가" 
      desc="있는 줄 알았는데 없는 영화" 
      room="3" price="15,000" imgurl="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788970634319.jpg" />
      <ComplexGrid title="엑소시스트" 
      desc="보고 싶었는데 가까운 상영관 없는 50년 전통의 영화" 
      room="2" price="17,000" imgurl="https://img.movist.com/?img=/x00/05/85/22_p1.jpg" /> */}
      {/* <NestedGrid />
      <ColumnsGrid />
      <AutoGridNoWrap /> */}
      <ButtonAppBar />
    </div>
  );
}

export default App;
