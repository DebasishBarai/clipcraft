import Image from "next/image"
import mode_svg from '../../public/mode.svg'

const TopBar = () => {
    return (
        <div className='h-fit flex flex-row justify-end items-center'>
            <button className='bg-blue-900 p-4 text-xl text-white rounded-xl'>SignIn</button>
            <Image src = {mode_svg} alt = 'toggle mode'/>
        </div>
    )
}

export default TopBar