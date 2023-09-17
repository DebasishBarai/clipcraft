import Image from "next/image"
import mode_svg from '../../public/mode.svg'

const TopBar = () => {
    return (
        <div className='h-fit flex flex-row justify-end'>
            <Image src = {mode_svg} alt = 'toggle mode'/>
        </div>
    )
}

export default TopBar