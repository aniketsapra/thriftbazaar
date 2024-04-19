'use client'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-black table-fixed">
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 pt-5 place-items-center'>
          <div className='flex justify-center items-center'>
            <Image 
              className="rounded-full"
                src='/assets/invertedlogo.png'
                width={50}
                height={50}
              /><span>
            <h1 className='text-white font-satisfyfont text-4xl font-semibold ml-2'>ThriftBazaar</h1></span>
          </div>
          <div>
          <ul className="flex-row font-poppinsfont pt-5 pb-3">
                <li>
                  <Link href="/" className="foothovertext">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="foothovertext">About</Link>
                </li>
                <li>
                  <Link href="/store" className="foothovertext">Store</Link>
                </li>
              </ul>
          </div>
          <div>
          <ul className='foothovertext flex md:items-center gap-4 pb-3'>
                <li>
                    <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"> 
                        <InstagramIcon className="foothovertext" sx={{ fontSize: 40 }}/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/aniketsapra' target='_blank' rel="noopener noreferrer"> 
                        <GitHubIcon className="foothovertext" sx={{ fontSize: 40 }} />
                    </a>
                </li>
                <li>
                <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer"> 
                        <FacebookIcon className="foothovertext" sx={{ fontSize: 40 }} />
                    </a>
                </li>
                <li>
                <a href='https://www.linkedin.com/in/aniketsapra/' target='_blank' rel="noopener noreferrer"> 
                        <LinkedInIcon className="foothovertext" sx={{ fontSize: 40 }} />
                    </a>
                </li>
                <li>
                <a href='https://www.x.com/' target='_blank' rel="noopener noreferrer"> 
                        <XIcon className="foothovertext" sx={{ fontSize: 40 }} />
                    </a>
                </li>
            </ul>
          </div>
        </div>
        <div>
        <div className='footerline'>
            &copy;ThriftBazaar 2024
          </div>
        </div>
      </div>      
    </footer>
  )
}

export default Footer
