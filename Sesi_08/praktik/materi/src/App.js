import ExternalCSS from './components/ExternalCSS';
import ExternalModuleCSS from './components/ExternalModuleCSS';
import ExternalObjectVariableCSS from './components/ExternalObjectVariableCSS';
import InlineCSS from './components/InlineCSS';
import ObjectVariableCSS from './components/ObjectVariableCSS';
import StyledComponents from './components/StyledComponents';

const App = () => {
  return (
    <div className="App">
      <InlineCSS />
      <ObjectVariableCSS />
      <ExternalCSS />
      <ExternalModuleCSS />
      <ExternalObjectVariableCSS />
      <StyledComponents />
    </div>
  );
}

export default App;
