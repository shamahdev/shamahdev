import clsx from 'clsx'
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<{
  className?: string
  maxWidth?: string
  attributes?: ComponentPropsWithoutRef<'div'>
}>

const Container: FC<ContainerProps> = (props) => {
  const { className: containerClass, maxWidth, children, attributes } = props
  return (
    <section className={clsx(`flex w-full justify-center`, containerClass)}>
      <div
        className="w-full"
        style={{ maxWidth: maxWidth || '1280px' }}
        {...attributes}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
