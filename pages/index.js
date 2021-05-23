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
      <form className="flex flex-col items-center mt-44 flex-grow">
        <Image
          src='https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5"/>
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Recherche Google</button>

          <button className="btn">J'ai de la chance</button>
        </div>
      </form>



      {/*Footer*/}



    </div>
  )
}
