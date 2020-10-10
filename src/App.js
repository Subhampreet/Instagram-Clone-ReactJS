import React from 'react';
import './App.css';
import Post from './Post';
import Story from './Story';
import SearchIcon from '@material-ui/icons/Search';


function App() {
  return (
    <div className="App">

      <div className="app__header">
        <img className="app__headerImage" src="/images/logo.png"  alt="instagram" />

        <div className="searchForm">
                <form>
                    <SearchIcon className="searchIcon" fontSize="small" />
                    <input type="text" id="filter" placeholder="Search" />
                </form>
        </div>

      </div>

      <Story />

      <Post username="_subhampreet" caption="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae " imageUrl="/images/img1.jpg" />
      
      <Post username="_sritam" caption="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae "  imageUrl="https://www.mattbadenoch.com/wp-content/uploads/2017/12/india-street-photography-best-of-34.jpg" />

      <Post username="_sritam" caption="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae "  imageUrl="https://cdn.vox-cdn.com/thumbor/u3JDwn8EOLfd0Gn509pJ6QBDdpM=/0x0:2040x1360/1200x675/filters:focal(702x515:1028x841)/cdn.vox-cdn.com/uploads/chorus_image/image/63347486/jbareham_190930_0958_joker_0003.11.jpg" />



    </div>
  );
}

export default App;
