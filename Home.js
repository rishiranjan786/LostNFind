import React, { useEffect, useState, useRef } from 'react';
// import Navbar from './Layouts/Navbar.js'
import Foot from '../Layouts/Foot';
import Layout from '../Layouts/Layout';
import { Link } from 'react-router-dom';
import '../css/HomeStyle.css';
import Datetime from '../Datetime'

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
    const [products, setProducts] = React.useState([]);
    const [allcategory, setAllcategory] = React.useState([]);
    const [request, setRequest] = React.useState([]);
    const [response, setResponse] = React.useState([]);
    const [finded, setFinded] = React.useState([]);
    const [highlightproduct, setHighlightproduct] = React.useState([]);
    const [visible, setVisible] = React.useState(8);

    const [sliderNumber, setsliderNumber] = React.useState([0]);


    const handleResize = () => {
        if (window.innerWidth < 768) {
            setsliderNumber(3)
        }
        else if (window.innerWidth > 768 && window.innerWidth < 1000) {
            setsliderNumber(4)
        }
        else {
            setsliderNumber(5)
        }
    }

    // const params= useParams();
    // const [swiperRef, setSwiperRef] = useState(null);

    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };

    // let appendNumber = 4;
    // let prependNumber = 1;

    // const prepend2 = () => {
    //     swiperRef.prependSlide([
    //         '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    //         '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    //     ]);
    // };

    // const prepend = () => {
    //     swiperRef.prependSlide(
    //         '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    //     );
    // };

    // const append = () => {
    //     swiperRef.appendSlide(
    //         '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    //     );
    // };

    // const append2 = () => {
    //     swiperRef.appendSlide([
    //         '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    //         '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    //     ]);
    // };

    useEffect(() => {
        getProducts();
        getAllcategory();
        getRequest();
        getResponse();
        getFinded();
        getHighlightproduct();

        window.addEventListener('resize', handleResize)
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products')
        // {
        //     headers: {
        //         authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        //     }
        // });
        result = await result.json();
        console.log(result);
        setProducts(result);
    }

    const getAllcategory = async () => {
        let result = await fetch('http://localhost:5000/allcategory');

        result = await result.json();
        setAllcategory(result);
    }

    const getRequest = async () => {
        let result = await fetch('http://localhost:5000/request');

        result = await result.json();
        setRequest(result);
    }

    const getResponse = async () => {
        let result = await fetch('http://localhost:5000/response');

        result = await result.json();
        setResponse(result);
    }

    const getFinded = async () => {
        let result = await fetch('http://localhost:5000/finded');

        result = await result.json();
        setFinded(result);
    }

    const getHighlightproduct = async () => {
        let result = await fetch('http://localhost:5000/highlightproduct');

        result = await result.json();
        setHighlightproduct(result)
    }
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    return (
        <Layout>
            <div className="maincontent">
                <header>
                    {/* <!-- header top --> */}
                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <Swiper
                                    // spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 9500,
                                        disableOnInteraction: false,
                                    }}
                                    // pagination={{
                                    //     clickable: true,
                                    // }}
                                    navigation={false}
                                    modules={[Autoplay, Navigation]}
                                    // modules={[Autoplay, Pagination, Navigation]}
                                    // onAutoplayTimeLeft={onAutoplayTimeLeft}
                                    className="mySwiper"
                                    style={{ position: 'static', height: '20vh', marginTop: '-1.5vh' }}
                                >
                                    {highlightproduct.length > 0 ? highlightproduct.map((item, index) =>
                                        <div className="column-33 card">
                                            {/* <SwiperSlide className='hlswiperslider' key={index}> */}
                                            <SwiperSlide className='advslider' key={index}>
                                                <Link to={"/productdetails/" + item._id}>
                                                    <div className="news" style={{ borderRadius: '2vh', border: '2px solid blue' }}>
                                                        <div className="news-images" style={{ background: 'white', borderRadius: '1vh' }}>
                                                            <div className="overlay" style={{ borderRadius: '2vh' }}>
                                                                {/* <img src={item.productpic1} alt='photo' className="advresize" style={{ height: '18vh', width: '100vw' }} /> */}
                                                                <div className="advresize" style={{ backgroundImage: `url(${"/images/adlogo.jpg"})`, height: '18vh', width: '100%' }}></div>
                                                            </div>
                                                            <div className="headline" style={{ position: 'absolute', marginLeft: '2.5vh', marginTop: '-5.5vh' }}>{item.category}: {item.productname}</div>
                                                        </div>

                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                        </div>
                                    )
                                        : <div className="main-headline" style={{ backgroundImage: `url(${"/images/img1.jpg"})` }}>
                                            <div className="headline" >Lorem ipsum dolor sit amet.</div>
                                        </div>
                                    }
                                </Swiper>
                                {/* <div className="column-30">
                                    <div className="logo1">
                                        <a to="#"><img src="/images/logo1.png" alt="logo" className="responsive-img" /></a>
                                    </div>
                                </div>
                                <div className="column-70">
                                    <div className="logo2">
                                        <a to="#"><img src="/images/logo2.jpg" alt="advertisement" className="responsive-img" /></a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- navigation --> */}

                    <div className="nav-wrapper">
                        <nav className="othernav">
                            {/* {allcategory.length > 0 ? allcategory.map((item, index) => */}
                            <div className="subothernav">

                                {/* <ul>
                                <li><Link to="/selectcat/:id">Gadgets</Link></li>
                                <li><Link to="#">Documents</Link></li>
                                <li><Link to="#">Human</Link></li>
                                <li><Link to="#">Blood</Link></li>
                                <li><Link to="#">Others</Link></li>
                                {/* <li><a to="#">Sports</a></li> */}
                                {/* <li><a to="#">Audio & Video</a></li> *
                            </ul> */}


                                <ul>
                                    {/* <li><Link to={"/selectcat/" + item.category}>{item.category}</Link></li> */}
                                    <li id='onli'><Link to="/home/gadgets">Gadgets</Link></li>
                                    <li id='onli'><Link to="/home/documents">Documents</Link></li>
                                    <li id='onli'><Link to="/home/human">Human</Link></li>
                                    <li id='onli'><Link to="/home/blood">Blood</Link></li>
                                    <li id='onli'><Link to="/home/others">Others</Link></li>
                                    <li id='onli'><Link to="/home/khoya">Khoya</Link></li>
                                    <li id='onli'><Link to="/home/paya">Paya</Link></li>
                                    <li id='onli'><Link to="/home/finded">Finded</Link></li>

                                    {/* <li><a to="#">Sports</a></li> */}
                                    {/* <li><a to="#">Audio & Video</a></li> */}
                                </ul>

                            </div>
                            {/* ) : <h6>Record not found</h6>
                        } */}
                        </nav>
                    </div>


                    {/* <!-- breaking news --> */}
                    <div className="breaking-news">
                        <div className="container">
                            <div className="row">
                                <div className="column-22">
                                    <div className="update-left">UPDATES</div>
                                </div>
                                <div className="column-81">
                                    <div className="update-right" >
                                        <marquee style={{ position: 'static' }}>Recent Update is just Scrolling and I watching parliament YouTube channel's Tutorial</marquee>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- content --> */}
                <div className="content ptb-25">
                    {/* <!-- headlines --> */}
                    <div className="container">
                        <div className="row">
                            <div className="column-60">
                                <Swiper
                                    // spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 9500,
                                        disableOnInteraction: false,
                                    }}
                                    // pagination={{
                                    //     clickable: true,
                                    // }}
                                    navigation={false}
                                    modules={[Autoplay, Navigation]}
                                    // modules={[Autoplay, Pagination, Navigation]}
                                    // onAutoplayTimeLeft={onAutoplayTimeLeft}
                                    className="mySwiper"
                                    style={{ position: 'static' }}
                                >
                                    {highlightproduct.length > 0 ? highlightproduct.map((item, index) =>
                                        <div className="column-33 card">
                                            <SwiperSlide className='hlswiperslider' key={index}>
                                                <Link to={"/productdetails/" + item._id}>
                                                    <div className="news" style={{ borderRadius: '2vh', border: '2px solid blue' }}>
                                                        <div className="news-images" style={{ background: 'white', borderRadius: '2vh' }}>
                                                            <div className="overlay" style={{ borderRadius: '3vh' }}>
                                                                <img src={item.productpic1} alt='photo' className="hresize" style={{}} />
                                                            </div>
                                                            <div className="headline" style={{ position: 'absolute', marginLeft: '2.5vh', marginTop: '-5.5vh' }}>{item.category}: {item.productname}</div>
                                                        </div>

                                                    </div>
                                                </Link>
                                            </SwiperSlide>

                                        </div>

                                        // <div className="column-33 card">
                                        //     <div className="news">
                                        //         <div className="hlbox">
                                        //             <div className="hloverlay" style={{background: `linear-gradient(to bottom, blue, yellow, white)`,display:'flex', justifyContent:'center',alignItems:'center'}}>
                                        //                 <SwiperSlide  className='hlswiperslider' key={index}>
                                        //                     <Link to={"/productdetails/" + item._id}>
                                        //                         <img src={item.productpic} alt='photo' className="hlresize" style={{height:'50vh', width:'45vw'}}/>
                                        //                         {/* <h6><a to="#">{item.category}: {item.productname}</a></h6> */}
                                        //                     </Link>
                                        //                 </SwiperSlide>
                                        //             </div>
                                        //         </div>
                                        //     </div>
                                        // {/* <div className="hlbox"> */}
                                        // {/* <div className="main-headline" style={{ backgroundImage: `url(${item.productpic})`,position:'static' }}> */}
                                        // {/* <img src={item.productpic} alt='photo' className="hlresize" />  */}
                                        // {/* <div className="headline" style={{position:'static'}}>{item.productname}</div> */}
                                        // {/* </div> */}
                                        // {/* </div> */}

                                        // </div>
                                    )
                                        : <div className="main-headline" style={{ backgroundImage: `url(${"/images/img1.jpg"})` }}>
                                            <div className="headline" >Lorem ipsum dolor sit amet.</div>
                                        </div>
                                    }
                                </Swiper>
                                {/* <div className="autoplay-progress" slot="container-end">
                                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                                            <circle cx="24" cy="24" r="20"></circle>
                                        </svg>
                                        <span ref={progressContent}></span>
                                    </div> */}

                            </div>
                            <div className="column-40">
                                <div className="side-headline">

                                    {/* <!-- SIDE NEWS 01 --> */}
                                    <div className="side-news">
                                        <div className="row">
                                            <div className="column-40">
                                                <div className="side-news-image" style={{ backgroundImage: `url(${"/images/i5.jpg"})` }}></div>
                                            </div>
                                            <div className="column-60">
                                                <div className="side-news-data">
                                                    <h2>Lorem ipsum dolor adipisicing.</h2>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit recusandae dolore dignissimos!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- SIDE NEWS 02 --> */}
                                    <div className="side-news">
                                        <div className="row">
                                            <div className="column-40">
                                                <div className="side-news-image" style={{ backgroundImage: `url(${'/images/i6.jpg'})` }}></div>
                                            </div>
                                            <div className="column-60">
                                                <div className="side-news-data">
                                                    <h2>Lorem ipsum dolor sit.</h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima cum porro placeat!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- SIDE NEWS 03 --> */}
                                    <div className="side-news">
                                        <div className="row">
                                            <div className="column-40">
                                                <div className="side-news-image" style={{ backgroundImage: `url(${'/images/i7.jpg'})` }}></div>
                                            </div>
                                            <div className="column-60">
                                                <div className="side-news-data">
                                                    <h2>Lorem ipsum dolor sit amet. Lorem, ipsum.</h2>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit recusandae dolore dignissimos!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container ptb-25">
                        <div className="row">
                            {/* <div className=""> */}
                            {/* <!-- trending news --> */}
                            <div className="sec-title">Lost N Find on Trending</div>
                            {/* <div className="row"> */}
                            {products.length > 0 ? products.slice(0, visible).map((item, index) =>
                                <div className="column-33 card">
                                    <Link to={"/productdetails/" + item._id}>
                                        <div className="news">
                                            <div className="news-image">
                                                <div className="overlay">
                                                    <img src={item.productpic1} alt='photo' className="resize" />
                                                </div>
                                            </div>
                                            <div className="card-content" >
                                                <h4><a to="#">{item.category}: {item.productname}</a></h4>

                                                {/* <ul className="category">
                                                            <li>National</li>
                                                            <li>International</li>
                                                        </ul> */}
                                                <div className="productcomment">
                                                    <p>{item.comment}</p>
                                                </div>
                                                <div className="cardfooter">
                                                    <h6>{item.state}, {item.vtc}, {item.nearby}</h6>
                                                    {/* , {item.vtc}, {item.nearby} */}
                                                    <h6><Datetime /></h6>
                                                </div>
                                                {/* <Link to={"/userdetails/" + item.userid} className="read-more">Get User Details &rarr;</Link> */}
                                                {/* <Link to={"/pdetail/" + item._id} className="read-more">Get Product Details &rarr;</Link> */}
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            )
                                : <h2>No Record Found..</h2>
                            }

                            {/* <div className="column-33">
                                        <div className="news">
                                            <div className="news-image" style={{ backgroundImage: `url(${'/images/i9.jpg'})` }}></div>
                                            <h2><a to="#">Lorem ipsum dolor</a></h2>
                                            <ul className="category">
                                                <li>National</li>
                                                <li>International</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium odio a omnis labore incidunt illo! Nesciunt enim fugiat libero quibusdam cum.</p>
                                            <a to="#" className="read-more">Read More &rarr;</a>
                                        </div>
                                    </div>
                                    <div className="column-33">
                                        <div className="news">
                                            <div className="news-image" style={{ backgroundImage: `url(${'/images/i10.jpg'})` }}></div>
                                            <h2><a to="#">Lorem ipsum dolor</a></h2>
                                            <ul className="category">
                                                <li>National</li>
                                                <li>International</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium odio a omnis labore incidunt illo! Nesciunt enim fugiat libero quibusdam cum.</p>
                                            <a to="#" className="read-more">Read More &rarr;</a>
                                        </div>
                                    </div>
                                    <div className="column-33">
                                        <div className="news">
                                            <div className="news-image" style={{ backgroundImage: `url(${'/images/i11.jpg'})` }}></div>
                                            <h2><a to="#">Lorem ipsum dolor</a></h2>
                                            <ul className="category">
                                                <li>National</li>
                                                <li>International</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium odio a omnis labore incidunt illo! Nesciunt enim fugiat libero quibusdam cum.</p>
                                            <a to="#" className="read-more">Read More &rarr;</a>
                                        </div>
                                    </div>
                                    <div className="column-33">
                                        <div className="news">
                                            <div className="news-image" style={{ backgroundImage: `url(${'/images/i12.jpg'})` }}></div>
                                            <h2><a to="#">Lorem ipsum dolor</a></h2>
                                            <ul className="category">
                                                <li>National</li>
                                                <li>International</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium odio a omnis labore incidunt illo! Nesciunt enim fugiat libero quibusdam cum.</p>
                                            <a to="#" className="read-more">Read More &rarr;</a>
                                        </div>
                                    </div>
                                    <div className="column-33">
                                        <div className="news">
                                            <div className="news-image" style={{ backgroundImage: `url(${'/images/i13.jpg'})` }}></div>
                                            <h2><a to="#">Lorem ipsum dolor</a></h2>
                                            <ul className="category">
                                                <li>National</li>
                                                <li>International</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium odio a omnis labore incidunt illo! Nesciunt enim fugiat libero quibusdam cum.</p>
                                            <a to="#" className="read-more">Read More &rarr;</a>
                                        </div>
                                    </div> */}
                            {/* </div> */}
                            <button className='loadmorebtn' onClick={showMoreItems}>Load More</button>
                            {/* </div> */}
                            {/* <div className="column-30">
                                {/* <!-- sidebar --> 
                                <div className="sidebar">
                                    <div className="sidebar-widget">
                                        <div className="sec-title">Category</div>
                                        <ul>
                                            <li><a to="#">National</a></li>
                                            <li><a to="#">International</a></li>
                                            <li><a to="#">Entertainment</a></li>
                                            <li><a to="#">Sports</a></li>
                                            <li><a to="#">Video & Audio</a></li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-widget">
                                        <div className="sec-title">Recent News</div>
                                        <ul>
                                            <li><a to="#">National Recent News for parliament News Theme</a></li>
                                            <li><a to="#">International Recent News for parliament News Theme</a></li>
                                            <li><a to="#">Entertainment Recent News for parliament News Theme</a></li>
                                            <li><a to="#">Sports Recent News for parliament News Theme</a></li>
                                            <li><a to="#">Video & Audio Recent News for parliament News Theme</a></li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-widget">
                                        <a to="#"><img src="/images/logo2.jpg" alt="advertisement" className="responsive-image" /></a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* <!-- section 01 --> */}

                    <div className="container slideptb-25 ">
                        <div className="row">
                            {/* <div className="news-section"> */}
                            <div className="sec-title">Lost</div>
                            <Swiper
                                // effect={'coverflow'}
                                // onSwiper={setSwiperRef}
                                slidesPerView={sliderNumber}
                                // centeredSlides={true}
                                // spaceBetween={30}
                                // pagination={{
                                // type: 'fraction', 
                                // }} 

                                navigation={true}
                                modules={[Pagination, Navigation, FreeMode]}
                                className="mySwipers"
                                freeMode={true}
                                // effect={'coverflow'}
                                // grabCursor={false}//false

                                coverflowEffect={{
                                    modifier: 1,
                                    // slideShadows: false,//false
                                }}
                            >
                                <div className="slide-wrapper">
                                    {request.length > 0 ? request.map((item, index) =>
                                        <SwiperSlide style={{ background: 'transparent' }} className='swiperslide' key={index}>

                                            <div className="column-3 card">
                                                <Link to={"/productdetails/" + item._id}>
                                                    <div className="news">
                                                        <div className="news-images">
                                                            <div className="overlays">
                                                                <img src={item.productpic1} alt='photo' className="resizer" />
                                                            </div>
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><a to="#">{item.category}: {item.productname}</a></h5>
                                                            <div className="productcomment">
                                                                <p>{item.comment}</p>
                                                            </div>
                                                            <div className="cardfooter">
                                                                <h6>{item.state}, {item.vtc}, {item.nearby}</h6>
                                                                <h6><Datetime /></h6>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                        </SwiperSlide>
                                    )
                                        : <h2>No Record Found..</h2>
                                    }
                                </div>
                            </Swiper>

                            {/* <div className="slidebox">
                                <div className="slide-wrapper">
                                    {request.length > 0 ? request.map((item, index) =>
                                        <div className="column-3 slidecard">
                                            <Link to={"/productdetails/" + item._id}>
                                                <div className="news">
                                                    <div className="news-images">
                                                        <div className="overlays">
                                                            <img src={item.productpic1} alt='photo' className="resizer" />
                                                        </div>
                                                    </div>
                                                    <div className="card-content">
                                                        <h5><a to="#">{item.category}: {item.productname}</a></h5>
                                                        <div className="productcomment">
                                                            <p>{item.comment}</p>
                                                        </div>
                                                        <div className="cardfooter">
                                                            <h6>{item.state}, {item.vtc}, {item.nearby}</h6>
                                                            <h6><Datetime /></h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                        : <h2>No Record Found..</h2>
                                    }
                                </div>
                            </div> */}



                            {/* <p className="append-buttons">
                                    <button onClick={() => prepend2()} className="prepend-2-slides">
                                        Prepend 2 Slides
                                    </button>
                                    <button onClick={() => prepend()} className="prepend-slide">
                                        Prepend Slide
                                    </button>
                                    <button onClick={() => append()} className="append-slide">
                                        Append Slide
                                    </button>
                                    <button onClick={() => append2()} className="append-2-slides">
                                        Append 2 Slides
                                    </button>
                                </p> */}



                            {/* {request.length > 0 ? request.map((item, index) =>
                                    <div className="column-33 card">
                                        <Link to={"/productdetails/" + item._id}>
                                            <div className="news">
                                                <div className="news-image">
                                                    <div className="overlay">
                                                        <img src={item.productpic} alt='photo' className="resize" />
                                                    </div>
                                                </div>
                                                <div className="card-content" >
                                                    <h4><a to="#">{item.category}: {item.productname}</a></h4>

                                                    {/* <ul className="category">
                                                            <li>National</li>
                                                            <li>International</li>
                                                        </ul> *
                                                    <div className="productcomment">
                                                        <p>{item.comment}</p>
                                                    </div>
                                                    <div className="cardfooter">
                                                        <h6>{item.state}, {item.vtc}, {item.nearby}</h6>
                                                        <h6><Datetime /></h6>
                                                    </div>
                                                    {/* <Link to={"/userdetails/" + item.userid} className="read-more">Get User Details &rarr;</Link> *
                                                    {/* <Link to={"/pdetail/" + item._id} className="read-more">Get Product Details &rarr;</Link> *
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                )
                                    : <h2>No Record Found..</h2>
                                } */}
                            {/* <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i14.jpg'})` }}></div>
                                        <h2><a to="#">Sweet Creative Work</a></h2>
                                    </div> */}
                            {/* </div> */}
                            {/* <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i15.jpg'})` }}></div>
                                        <h2><a to="#">Sweet Creative Work</a></h2>
                                    </div>
                                </div>
                                <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i16.jpg'})` }}></div>
                                        <h2><a to="#">Sweet Creative Work</a></h2>
                                    </div>
                                </div>
                                <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i17.jpg'})` }}></div>
                                        <h2><a to="#">Sweet Creative Work</a></h2>
                                    </div>
                                </div>
                                <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i18.jpg'})` }}></div>
                                        <h2><a to="#">Sweet Creative Work</a></h2>
                                    </div>
                                </div> */}
                        </div>
                        {/* </div> */}
                    </div>


                    {/* <!-- section 02 --> */}
                    <div className="container slideptb-25">
                        {/* <div className="news-section"> */}
                        <div className="row">
                            <div className="sec-title">Find</div>
                            {/* <div className="row"> */}

                            <Swiper
                                // effect={'coverflow'}
                                // onSwiper={setSwiperRef}
                                slidesPerView={sliderNumber}
                                // centeredSlides={true}
                                // spaceBetween={30}
                                freeMode={true}
                                // pagination={{
                                //     // type: 'fraction',
                                // }}

                                navigation={true}
                                modules={[Pagination, Navigation, FreeMode]}
                                className="mySwipers"
                                // effect={'coverflow'}
                                // grabCursor={false}//false

                                coverflowEffect={{
                                    modifier: 1,
                                    // slideShadows: false,//false
                                }}
                            >
                                {response.length > 0 ? response.map((item, index) =>
                                    <SwiperSlide style={{ background: 'transparent' }} className='swiperslide' key={index}>
                                        {/* <div className="row"> */}
                                        <div className="column-3 card">
                                            <Link to={"/productdetails/" + item._id}>
                                                <div className="news">
                                                    <div className="news-images">
                                                        <div className="overlays">
                                                            <img src={item.productpic1} alt='photo' className="resizer" />
                                                        </div>
                                                    </div>
                                                    <div className="card-content">
                                                        <h5><a to="#">{item.category}: {item.productname}</a></h5>
                                                        <div className="productcomment">
                                                            <p>{item.comment}</p>
                                                        </div>
                                                        <div className="cardfooter">
                                                            <h6>{item.state}, {item.vtc}, {item.nearby}</h6>
                                                            <h6><Datetime /></h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* </div> */}
                                    </SwiperSlide>
                                )
                                    : <h2>No Record Found..</h2>
                                }
                            </Swiper>
                            {/* <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i19.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div> */}
                            {/* <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i12.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div>
                                <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i11.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div>
                                <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i20.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div>
                                <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i21.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div> */}
                            {/* </div> */}
                        </div>
                    </div>


                    {/* <!-- section 03 --> */}
                    <div className="container slideptb-25">
                        {/* <div className="news-section"> */}
                        <div className="row">
                            <div className="sec-title">Finded</div>
                            {/* <div className="row"> */}
                            <Swiper
                                // effect={'coverflow'}
                                // onSwiper={setSwiperRef}
                                slidesPerView={sliderNumber}
                                // centeredSlides={true}
                                // spaceBetween={30}
                                freeMode={true}
                                // pagination={{
                                //     // type: 'fraction',
                                // }}

                                navigation={true}
                                modules={[Pagination, Navigation, FreeMode]}
                                className="mySwipers"
                                // effect={'coverflow'}
                                // grabCursor={false}//false

                                coverflowEffect={{
                                    modifier: 1,
                                    // slideShadows: false,//false
                                }}
                            >
                                {finded.length > 0 ? finded.map((item, index) =>
                                    <SwiperSlide style={{ background: 'transparent' }} className='swiperslide' key={index}>
                                        {/* <div className="row"> */}
                                        <div className="column-3 card">
                                            <Link to={"/productdetails/" + item._id}>
                                                <div className="news">
                                                    <div className="news-images">
                                                        <div className="overlays">
                                                            <img src={item.productpic1} alt='photo' className="resizer" />
                                                        </div>
                                                    </div>
                                                    <div className="card-content">
                                                        <h5><a to="#">{item.category}: {item.productname}</a></h5>
                                                        <div className="productcomment">
                                                            <p>{item.comment}</p>
                                                        </div>
                                                        <div className="cardfooter">
                                                            <h6>{item.state}, {item.vtc}, {item.nearby}</h6>
                                                            <h6><Datetime /></h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* </div> */}
                                    </SwiperSlide>
                                )
                                    : <h2>No Record Found..</h2>
                                }
                            </Swiper>
                            {/* <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i19.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div> */}
                            {/* <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i12.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div>
                                <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i11.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div>
                                <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i20.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div>
                                <div className="column-20">
                                    <div className="news">
                                        <div className="news-image" style={{ backgroundImage: `url(${'/images/i21.jpg'})` }}></div>
                                        <h2><a to="#">Nesciunt enim fugiat libero</a></h2>
                                    </div>
                                </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- footer --> */}
                {/* <footer>
                    <div className="container ptb-25">
                        <div className="row">
                            <div className="column-30">
                                {/* <!-- logo and social --> *
                                <div className="footer-logo">
                                    <img src="/images/slogo0.jpg" alt="" className="responsive-image" />
                                </div>
                                <ul className="footer-social">
                                    <li><a to="#"><img src="/images/slogo1.jpg" alt="twiter" /></a></li>
                                    <li><a to="#"><img src="/images/slogo2.jpg" alt="facebook" /></a></li>
                                    <li><a to="#"><img src="/images/slogo3.jpg" alt="instagram" /></a></li>
                                    <li><a to="#"><img src="/images/slogo4.jpg" alt="youtube" /></a></li>
                                </ul>
                                <address>
                                    PATNA CITY, PATNA, BIHAR - 800008
                                </address>
                            </div>
                            <div className="column-20">
                                {/* <!-- category --> *
                                <div className="sec-title">Category</div>
                                <ul className="footer-cat">
                                    <li><a to="#">National</a></li>
                                    <li><a to="#">International</a></li>
                                    <li><a to="#">Entertainment</a></li>
                                    <li><a to="#">Sports</a></li>
                                    <li><a to="#">Video & Audio</a></li>
                                </ul>
                            </div>
                            <div className="column-20">
                                {/* <!-- recent news --> *
                                <div className="sec-title">Trending News</div>
                                <ul className="footer-cat">
                                    <li><a to="#">National Recent News for parliament News Theme</a></li>
                                    <li><a to="#">International Recent News for parliament News Theme</a></li>
                                    <li><a to="#">Entertainment Recent News for parliament News Theme</a></li>
                                    <li><a to="#">Sports Recent News for parliament News Theme</a></li>
                                    <li><a to="#">Video & Audio Recent News for parliament News Theme</a></li>
                                </ul>
                            </div>
                            <div className="column-30">
                                {/* <!-- photo gallery --> *
                                <div className="sec-title">Photo Gallery</div>
                                <ul className="footer-gallery">
                                    <li className="column-33"><img src="/images/i5.jpg" alt="Image not found" /></li>
                                    <li className="column-33"><img src="/images/i6.jpg" alt="Image not found" /></li>
                                    <li className="column-33"><img src="/images/i15.jpg" alt="Image not found" /></li>
                                    <li className="column-33"><img src="/images/i8.jpg" alt="Image not found" /></li>
                                    <li className="column-33"><img src="/images/i9.jpg" alt="Image not found" /></li>
                                    <li className="column-33"><img src="/images/i10.jpg" alt="Image not found" /></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p style={{fontSize:'2.5vh', marginTop: '2vh'}}><a to="#">www.parliamentnews.com</a> NEWS WEBSITE &copy; 2021</p>
                        <p style={{fontSize:'2.5vh', marginTop: '2vh'}}><Link to="/about">ABOUT</Link>  |  <Link to="/contact">CONTACT US</Link>  |  <Link to="/policy">PRIVACY POLICY</Link></p>
                    </div>*/}

            </div>
            <Foot />
        </Layout>

    )
}
export default Home;