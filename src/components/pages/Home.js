import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection'
import Cards from '../Cards'


function Home () {
    return (
        <>
        <HeroSection />
        <Cards />
        </>
    )
}
// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> Welcome to the home page!!!</h1>
//             </div>
//         );
//     }
// }

export default Home;