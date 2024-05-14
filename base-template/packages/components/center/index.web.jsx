import 'react';
import { centerStyle } from './styles';
const Center = ({ className, ...props }) => {
    return <div className={centerStyle({ class: className })} {...props}/>;
};
Center.displayName = 'Center';
export { Center };
