import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../../Redux/Slices/cartSlice';
import BreadcrumScreen from '../breadcrum/BreadcrumScreen';

const FavProductsScreen = () => {

    const dispatch = useDispatch();

    const { favItemsList, checkFav } = useSelector((state) => state.favItems)

    console.log("favItemsList  === ", favItemsList)
    console.log("checkFav  === ", checkFav)

    const handleCart = (item) => {
        dispatch(addToCart(item))
    }


    return (
        <>
            <section>
                <BreadcrumScreen url="Favourite Products" />
            </section>
            <div className="container">


                <div className="row my-5">
                    <div className="col-md-12">
                        <h3 className='fw-700 text-danger s-22 '>
                            Favourite Products
                        </h3>
                        <div className="row">
                            {favItemsList.map((item) => (
                                <div className="col-md-3 py-3">
                                    <Card className='border-0 shadow h-100'>

                                        <Link className='text-dark' to={`/product-details/${item.id}`}>
                                            < Card.Img variant="top" className='p-3' height={150} src={item.image} style={{ objectFit: "contain" }} />
                                            <Card.Body className='h-100'>
                                                <Card.Title className='text-danger fw-600 s-18'>
                                                    {item.title.length > 10 ?
                                                        `${item.title.substring(0, 10)}...` : item.description
                                                    }
                                                </Card.Title>
                                                <Card.Text className='s-14'>
                                                    {/* {`${item.description.substring(0, 100)}...`} */}

                                                    {item.description.length > 100 ?
                                                        `${item.description.substring(0, 100)}...` : item.description
                                                    }
                                                    <p className='fw-600 text-danger mb-0 mt-3'>
                                                        <span>Rs: </span>
                                                        {item.price}
                                                    </p>
                                                </Card.Text>

                                            </Card.Body>
                                        </Link>

                                        <Card.Footer className='border-0 bg-transparent'>

                                            <Button onClick={() => handleCart(item)} variant="danger" className=' fw-700'>Add</Button>
                                        </Card.Footer>

                                    </Card>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavProductsScreen