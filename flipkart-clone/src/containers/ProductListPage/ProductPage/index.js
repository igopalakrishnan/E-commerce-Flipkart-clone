import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card';

/**
* @author
* @function ProductPage
**/

const ProductPage = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;

    useEffect(() => {

        const params = getParams(props.location.search);
        const payload = {
            params
        }
        dispatch(getProductPage(payload));
    }, [])
    return (
        <div style={{ margin: '0 10px' }}>
            <h3>{page.title}</h3>
            <Carousel
                renderThumbs={() => { }}
            >
                {
                    page.banners && page.banners.map((banner, index) =>
                        <a
                            key={index}
                            style={{ display: 'block' }}
                            href={banner.navigateTo}
                        >
                            <img src={banner.img} alt="" />
                        </a>
                    )
                }
            </Carousel>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '10px 0',
                justifyContent: 'center'
            }}>
                {
                    page.products && page.products.map((product, index) => 
                        <Card
                         key={index}
                         style={{
                             width: '400px',
                             height: '200px',
                             margin: '5px'
                         }}
                         >
                            <img style={{
                                width: '50%',
                                height: '100%'
                            }}
                            src={product.img} alt='' />
                            </Card
                            >

                    )
                }
            </div>
        </div>
    )

}

export default ProductPage;