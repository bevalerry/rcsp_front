import { useClassNames } from 'shared/lib/useClassNames'
import cls from './Footer.module.scss'
import { Options } from 'widgets/Options/Options'

export const Footer = ({ className }) => {
    return (
        <div className={useClassNames(cls.footer, [cls[className]])}>
            <h4>&copy; Revvo 2024 by Nikitina Valeria</h4>
            <Options/>
        </div>
    )
}