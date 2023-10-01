import React from 'react'
import intro1 from "../../assets/Images/intro1.svg";
import intro2 from "../../assets/Images/intro2.svg";
import intro3 from "../../assets/Images/intro3.svg";
import intro4 from "../../assets/Images/intro4.svg";


const Achivement = () => {
    return (
        <>
            <section className='intro'>
                <div className='container mt-5 '>
                    <div className='row text-center'>
                        <div className='col-md-3 text-center pt-5 pb-5'>
                            <img src={intro1} alt="" />
                            <h1 className='text-white fw-600 pt-4 s-48'>750+</h1>
                            <h4 className='text-white pt-3 fw-600'>Happy customers</h4>

                        </div>

                        <div className='col-md-3 text-center pt-5 pb-5'>
                            <img src={intro2} alt="" />
                            <h1 className='text-white fw-600 pt-4 s-48'>20+</h1>
                            <h4 className='text-white pt-3  fw-600'>Professionals</h4>

                        </div>

                        <div className='col-md-3 text-center pt-5 pb-5'>
                            <img src={intro3} alt="" />
                            <h1 className='text-white fw-600 pt-4 s-48'>850+</h1>
                            <h4 className='text-white pt-3  fw-600'>Adopted Pets</h4>

                        </div>

                        <div className='col-md-3 text-center pt-5 pb-5 '>
                            <img src={intro4} alt="" />
                            <h1 className='text-white fw-600 pt-4 s-48'>74+</h1>
                            <h4 className='text-white pt-3  fw-600'>Awards</h4>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Achivement