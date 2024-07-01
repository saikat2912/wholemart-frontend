import './home.css'
import Register from '../Register/Register';
import Login from '../Login/Login';
const Home =()=>{
    const backgroundImageStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/cover.png'})`,
        opacity:0.5,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };
    return(
        <>
        <div class="container">
        <div class="left-side" style={backgroundImageStyle}>

        </div>
        <div class="right-side">
            <div className='logo'>
                <img src='/images/logonb.png' style={{height:'40px',width:'250px',marginLeft:'-450px'}}></img>
            </div>
            <div className='user-box' style={{marginTop:'50px'}}>
            <Login/>
            </div>
        </div>
    </div>
        </>
    )
}

export default Home;