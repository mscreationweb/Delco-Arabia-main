import Link from "next/link"


export default function Blog() {
    return (
        <>
            {/*Blog Two Start*/}
            <section className="blog-two" style={{marginBottom:'60px',marginTop:'30px'}}>
                <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Our Services
                    </span>
                    </div>
                    <h2 className="section-title__title">
                    We offer a wide range of services to support your projects, including
                    </h2>
                </div>
                <div className="row">
                    {/*Blog Two Single Start*/}
                    {/* 1 */}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src="./assets/images/allimgs/service/6.webp" alt="" />
                        </div>
                        {/* <div className="blog-two__date">
                            <p>
                            06
                            <br />
                            </p>
                        </div> */}
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Specialized In Oil & Gas, Marine, Industrial Material
                            And Mechanical Fabrication Works
                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                     {/* 1 */}

                     {/* 2*/}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInLeft"
                    data-wow-delay="100ms"
                    >



                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src="./assets/images/allimgs/service/1.webp" alt="" />
                        </div>
                        {/* <div className="blog-two__date">
                            <p>
                            01
                            <br />
                            </p>
                        </div> */}
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Manpower Supply General
                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* 2 */}


                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    {/* 3 */}
                    <div className="col-xl-6 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src="./assets/images/allimgs/service/Specializednew.webp" alt="" />
                        </div>
                        {/* <div className="blog-two__date">
                            <p>
                            02
                            <br />
                            </p>
                        </div> */}
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Specialized Crew Supply

                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* 3 */}
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    {/* 4 */}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src="./assets/images/allimgs/service/Equipmentnew.webp" alt="" />
                        </div>
                       
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Specialized Equipment Supply

                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* 4 */}
                    {/*Blog Two Single End*/}
                </div>





                <div className="row">
                    {/*Blog Two Single Start*/}
                    {/* 5 */}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInLeft"
                    data-wow-delay="100ms"
                    >
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src="./assets/images/allimgs/service/4.webp" alt="" />
                        </div>
                       
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/services">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Equipment Rental Services

                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* 5 */}
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    {/* 6 */}
                    <div className="col-xl-6 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src="./assets/images/allimgs/service/5.webp" alt="" />
                        </div>
                        
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Vehicle Rental Services

                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                     {/* 6 */}
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                   
                    {/*Blog Two Single End*/}
                    {/* <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src="./assets/images/allimgs/service/HVAC.webp" alt="" />
                        </div>
                       
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                           
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            HVAC Services

                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div> */}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src="./assets/images/allimgs/service/Material.webp" alt="" />
                        </div>
                        {/* <div className="blog-two__date">
                            <p>
                            06
                            <br />
                            <span>Apr</span>
                            </p>
                        </div> */}
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Material Supply
                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>


                </div>
            </section>
            {/*Blog Two End*/}
        </>


    )
}
