import React from 'react';

const TrustedCustomers = () => {
    return (
        <div className='py-10'>
            <div>
                <h1 className='text-center pt-12 trustedText'>Trusted by 2000+ Customers in 80+Countries since 2018</h1>
            </div>
            {/* logo */}
            <section className='mx-48 py-10'>
                <div className='grid grid-cols-5 gap-x-5 gap-y-16'>
                    <div className='trustLogoDiv'>
                        <img className='trustLogo' src="/images/Company logo.png" alt="" />
                    </div>
                    <div className='trustLogoDiv'>
                        <img className='trustLogo' src="/images/Company logo (1).png" alt="" />
                    </div>
                    <div className='trustLogoDiv'>
                        <img className='trustLogo' src="/images/Company logo (2).png" alt="" />
                    </div>
                    <div className='trustLogoDiv'>
                        <img className='trustLogo' src="/images/company logo (3).png" alt="" />
                    </div>
                    <div className='trustLogoDiv'>
                        <img className='trustLogo' src="/images/company logo (4).png" alt="" />
                    </div>
                    <div className='trustLogoDiv '>
                        <img className='trustLogo' src="/images/company logo (5).png" alt="" />
                    </div>
                    <div className='trustLogoDiv'>
                        <img className='trustLogo' src="/images/company logo (6).png" alt="" />
                    </div>
                    <div className='trustLogoDiv'>
                        <img className='trustLogo' src="/images/company logo (7).png" alt="" />
                    </div>
                    <div className='trustLogoDiv'>
                        <img className='trustLogo' src="/images/company logo (8).png" alt="" />
                    </div>
                    <div className='trustLogoDiv'>
                        <img className='trustLogo' src="/images/company logo (9).png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrustedCustomers;