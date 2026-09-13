import { cn } from '@/lib/utils'

interface CodeNoorLogoProps {
  className?: string
  inverted?: boolean
}

export function CodeNoorLogo({ className, inverted = false }: CodeNoorLogoProps) {
  return (
    <img
      src={
        inverted
          ? '/logo/code_noor_logo_dark.svg'
          : '/logo/code_noor_logo_light.svg'
      }
      alt="CODE NOOR"
      width={1690}
      height={838}
      className={cn(
        'h-7 w-14 object-cover object-center md:h-8 md:w-16',
        className
      )}
    />
  )
}
