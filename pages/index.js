import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import {MicrophoneIcon, SearchIcon, ViewGridIcon} from "@heroicons/react/solid"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/*Header*/}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

        <Avatar url='https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg'/>
          
        </div>
      </header>



      {/*Body*/}
      <form>
        <Image
          src='https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input type="text" className="focus:outline-none" />
          <MicrophoneIcon className="h-5"/>
        </div>

      </form>



      {/*Footer*/}



    </div>
  )
}
