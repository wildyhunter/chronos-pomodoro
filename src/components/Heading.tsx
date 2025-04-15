import StyleSheet from './Heading.module.css'

type Props = {
    children: React.ReactNode
}

export function Heading({children}: Props){
    return(
        <h1 className={StyleSheet.heading}>{children}</h1>
    )
}