import './App.css';
import NavigationBar from './components/NavigationBar';
import TextForm from './components/TextForm';

function App() {
  //console.log('Environment:', process.env.NODE_ENV);
  return (
    <>
<NavigationBar title = "TextUtils" aboutText = "About me"/>
<div className="container">
<TextForm heading = "Enter the Text to Analyze"/>
</div>
<div>
<footer className="footer">
  Made by Ashish
</footer>
</div>




    </>
  );
}

export default App;
