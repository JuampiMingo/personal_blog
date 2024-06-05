
import { FC } from 'react';


type FooterProps = {
    sign: string
}

const Footer: FC<FooterProps> = ({sign}) => {
    return (
        <>
            <div className='h-1 bg-slate-900'></div>
            <div className=' flex flex-row items-center justify-center min-h-7 bg-slate-300'>
                <h5 className='text-1xl font-semibold'>developed by {sign}</h5>
            </div>
        </>
    )
}

export default Footer;