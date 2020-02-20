import React from 'react' 
import {render} from 'react-dom' 
import NewsList from './components/newsList'

window.React = React

render(<NewsList />,document.getElementById('react-container'))