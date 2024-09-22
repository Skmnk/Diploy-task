import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Feature from './components/Feature';
import ShortDescription from './components/ShortDescription';
import ConnectStore from './components/ConnectStore';
import TalkToSales from './components/TalkToSlaes';
import icon1 from './components/images/icon1.svg'
import icon2 from './components/images/icon2.svg'
import icon3 from './components/images/icon3.svg'
import work1 from './components/images/work1.webp'
import work2 from './components/images/work2.webp'
import work3 from './components/images/work3.webp'
import HowItWorks from './components/HowItWorks';
import FeatureList from './components/FeatureList';
import HowItWorksList from './components/HowItWorksList';
import Footer from './components/Footer';
import StartSelling from './components/StartSelling';
import Loader from './components/Loader'

function App() {

  const [loading, setLoading] = useState(true);

  const handleLoaderFinish = () => {
    setLoading(false);
  };


  const worksData = [
    {
      iconSrc: work1,
      title: 'CREATE',
      description:'Custom products',
      descriptionText:'Easily add your design to a wide range of products using our free tools'
    },
    {
      iconSrc: work2,
      title: 'SELL',
      description:'On your terms',
      descriptionText:'You choose the products,sale price and where to sell '
    },
    {
      iconSrc: work3,
      title: 'WE HANDLE',
      description:'fulfillment',
      descriptionText:'Once an order is placed, we automatically handle all the printing and delivery logistics'
    }
  ]
  const featureData = [
    {
      iconSrc: icon1,
      title: 'Higher Profits',
      description: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.'
    },
    {
      iconSrc: icon2,
      title: 'Robust Scaling',
      description: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.'
    },
    {
      iconSrc: icon3,
      title: 'Best Selection',
      description: 'With 900+ products and top quality brands, you can choose the best products for your business.'
    }
  ];
  return (
    <div className="App">
      
      {loading ? (
        <Loader onFinish={handleLoaderFinish} />
      ) : (
        <>
          <Header />
          <Main />
          <FeatureList features={featureData} />
          <ShortDescription />
          <HowItWorksList datas={worksData} />
          <ConnectStore />
          <TalkToSales />
          <StartSelling />
          <Footer />
        </>
      )}

    </div>
  );
}

export default App;
