import hallo from './second'
import './styles/style.css'
import * as $ from 'jquery'
import './styles/style.scss'



$('.inner img').attr('src','./assets/webpack.png')
const showMessage=(message)=>console.log(message)
showMessage('First message')
hallo()
