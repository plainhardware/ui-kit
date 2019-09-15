import React, {ReactChild } from 'react';

export const Button = ({ children, onClick, }: { children: ReactChild; onClick: (event: React.MouseEvent<HTMLElement>) => void; }) => (
    <button onClick={onClick} type="button">
        {children}
    </button>
);
Button.displayName = 'Button';

export default Button;