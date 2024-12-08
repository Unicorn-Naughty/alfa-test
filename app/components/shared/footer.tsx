import React from 'react';
interface Props {
 className?: string 
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className} >
        <div>
            <p className='text-[25px] uppercase text-center py-[50px]'>footer</p>
        </div>
    </footer>
  )
}
