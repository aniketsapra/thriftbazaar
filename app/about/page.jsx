'use client'
import transition from "@app/transition";

const About = () =>  {
  return (
    <div>
      <div>
      <p className="paratext">
        Thrift Bazaar, headquartered in Delhi, is a dynamic online marketplace reminiscent of OLX, where users not only sell their pre-loved items but also explore a diverse range of secondhand goods from fellow users. The platform's intuitive design and extensive category selection empower users to engage in sustainable consumer practices by promoting item reuse and reducing waste.<br></br>

        From fashion and accessories to electronics, home decor, books, and beyond, Thrift Bazaar offers an expansive array of affordable options. Sellers benefit by decluttering their spaces while earning extra income, and buyers can uncover unique treasures while minimizing their environmental impact. <br></br>

        Thrift Bazaar's community-driven ethos fosters a sense of connection among users who share a commitment to sustainable living and responsible consumption. By participating in this virtual bazaar, individuals contribute to a greener future and help build a more circular economy. Join Thrift Bazaar today to explore great deals, discover hidden gems, and play a part in shaping a more eco-conscious society!<br></br>
      </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 font-poppinsfont text-gray-500">
        <div className="grid place-items-center p-5 lg:place-items-end">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.23912121666!2d77.1873940058174!3d28.575474211131702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2807715052f%3A0x19fc64a776e628ad!2sSarojini%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110023!5e0!3m2!1sen!2sin!4v1712840610879!5m2!1sen!2sin" width="400" height="400" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="grid place-items-center p-5 lg:place-items-start lg:mt-28">
          Address: Sarojni Nagar,<br></br> 
          Sarojni Nagar Metro Station Pink Link<br></br>
          PH: +91 9953166850<br></br>
          E-mail: aniketsapra2000@gmail.com<br></br>
        </div>
      </div>
    </div>
  )
}

export default transition(About);
