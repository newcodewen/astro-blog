import type { SVGAttributes } from 'react'

const LogoSvg = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='text-primary'
      {...props}
    >
      <rect width='32' height='32' rx='8' fill='currentColor' fillOpacity='0.1' />
      <path
        d='M10 11L7 16L10 21'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 11L25 16L22 21'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 9L15 23'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default LogoSvg
