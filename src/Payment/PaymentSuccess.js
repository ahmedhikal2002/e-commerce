import React from 'react'
import Success from"../assets/Success.gif";
import { Link } from 'react-router-dom';
function PaymentSuccess() {
  return (
    <section className='pb-10 h-[400px]'>
      <div className='container'>
        <div className='flex justify-center items-start  max-w-full]'>
            <div>
                <div className='pl-[37px]'>
                    <img src={Success} alt='success'/>
                </div>
                <div className='text-center'>
                    <h2 className='text-[24px] font-bold my-5'>Payment Successful !</h2>
                   <div className='flex gap-5'>
                   <Link className='btn bg-primary-400' to='/'>Go To Home</Link>
                    <Link className='btn bg-primary-400 'to='/orders' > You Orders</Link>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentSuccess