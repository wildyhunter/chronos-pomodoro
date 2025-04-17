import React from 'react';
import styles from './styles.module.css';

type Props = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: Props) {
    return (
        <>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input
                className={styles.input}
                type={type}
                id={id}
                placeholder="new task"
                {...rest}
            />
        </>
    );
}
