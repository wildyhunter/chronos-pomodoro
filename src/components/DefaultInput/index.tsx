import React from 'react';

type Props = {
    id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type }: Props) {
    return (
        <>
            <label htmlFor={id}>task</label>
            <input type={type} id={id} placeholder="new task" />
        </>
    );
}
