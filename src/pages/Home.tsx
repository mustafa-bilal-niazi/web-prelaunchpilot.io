import yourImage1 from '../assets/images/pilothero1.png';
import yourImage2 from '../assets/images/pilothero2.png';

export default function Home(){
    return (
        <>
            <div style={{
                display: 'flex',
                backgroundSize: 'cover',
                backgroundPosition: '110% 74px',
                height: '500px',
                width: '100%',
            }}>
                <div className='container1'>
                    <div className='l1 '>Save thousands of hours in time and research</div>
                    <div className='l2'>Let Predictive AI Help</div>
                    <div className='l3'>Dynamic text </div>
                    <button className='l4' type='button'>Find your business goal</button>
                </div>

                <div className='container1'>
                    <div style={{
                        backgroundImage: `url(${yourImage1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                width: '100%',
                marginTop: '250px',
            }}>
                <div className='container'>
                    <div style={{
                        backgroundImage: `url(${yourImage2})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}>
                    </div>
                </div>
                <div className="container">
                    <div style={{
                        marginTop: '50px',
                        marginBottom: '20px',
                        color: 'blue',
                        fontSize: '43px',
                        fontWeight: 'bold',
                        
                    }}>
                        What We Do
                    </div>
                    <div className='l1 '>
                        Prelaunch Pilot uses predictive artificial intelligence to simulate new product or service launches using real-world scenarios to help find and identify new potential customers and untapped market segments. With Prelaunch Pilot, companies can use data to help quickly prove their concepts, test their assumptions, and confirm a market fit before they spend too much time and resources on low-performing business ideas.
                    </div>
                </div>
            </div>

        </>
    )
}