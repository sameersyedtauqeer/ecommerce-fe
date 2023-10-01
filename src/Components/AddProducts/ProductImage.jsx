import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useDropzone } from 'react-dropzone';
import gallery from "../../assets/Images/gallery-icon.png";
import { useDispatch, useSelector } from 'react-redux';
import { addProductImage, addSampleImages } from '../../Redux/Slices/productSlice';
import { postData, postProductData } from '../../ApiConstant/api'
import { toast } from 'react-toastify'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: '5px',
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    overflow: 'hidden',
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    borderRadius: "5px",
    height: '100%'
};

const ProductImage = (props) => {
    const [sampleImages, setSampleImages] = useState([])
    const { productInfo, productImages } = useSelector((state) => state.product)
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();

    const [thumbnail, setThumbnail] = useState()

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            console.log('acceptedFiles', acceptedFiles)
            setSampleImages(acceptedFiles)

            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);


    const handle = (e) => {
        e.preventDefault();

        const images = {
            coverImage: thumbnail,
            sampleImage: files
        }
        dispatch(addProductImage(images))
        dispatch(addSampleImages(sampleImages))
        // props.tabs("finish")
        saveData()

    }

    const saveData = () => {
        const form = new FormData();
        console.log('productInfo.size', productInfo.size)
        form.append('title', productInfo.title)

        form.append('description', productInfo.description)

        form.append('category', productInfo.category)

        form.append('price', productInfo.price)

        form.append('brand', productInfo.brand)

        productInfo.size.forEach((val, i) => {
            form.append(`size[${i}]`, val)
        })

        productInfo.color.forEach((val, i) => {
            form.append(`color[${i}]`, val)
        })


        form.append('coverImage', thumbnail)

        sampleImages.map(sampleImage => {
            form.append('sampleImages[]', sampleImage)
        })

        postProductData("products", form)
            .then((res) => {
                if (res?.status) {
                    toast.success(res?.message);
                    props.tabs("finish")
                }
                console.log(res)
            })
    }


    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="card p-4 border-0 shadow-sm">

                        <div className="col-md-12">
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className='fw-600 s-14'>Thumbnail</Form.Label>
                                <Form.Control onChange={(e) => setThumbnail(e.target.files[0])} type="file" accept="image/png, image/gif, image/jpeg" />
                            </Form.Group>
                        </div>

                        <div className="col-md-12">

                            <label htmlFor="" className='fw-600 s-14'>Upload main images here</label>

                            <div {...getRootProps({ className: 'dropzone' })} className='dropzone text-center border border-2'>
                                <input {...getInputProps()} />
                                <img src={gallery} width={80} height={80} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                            <aside style={thumbsContainer}>
                                {thumbs}
                            </aside>
                        </div>

                        <div className="col-auto text-end">
                            <button className='btn btn-primary' onClick={handle}>
                                submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductImage