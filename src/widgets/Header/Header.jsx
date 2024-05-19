import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import cls from './Header.module.scss'
import { useClassNames } from 'shared/lib/useClassNames'
import { AuthButtons } from 'features/AuthButtons/AuthButtons'
import { SearchBox } from 'features/SearchBox/SearchBox'
import { LogoBox } from 'features/LogoBox/LogoBox'
import { selectUserData } from 'shared/config/store/reducers/AuthSlice'
import { Link } from 'react-router-dom'
import { adminRoutesPaths } from 'app/providers/routesProvider/config/routerConfig'

export const Header = ({ className }) => {
    const authorization = useSelector(selectUserData)

    return (
        <div className={useClassNames(cls.header, [cls[className]])}>
            <div className={cls.navshortcut}>
                <LogoBox/>
                <hr />
                {
                    authorization !== null &&
                    (authorization.role === 'admin' ||
                    authorization.role === 'moderator') &&
                    <span className={cls.adminlinks}>
                        {Object.keys(adminRoutesPaths).map(route => 
                            <Link key={route} to={adminRoutesPaths[route]}><h3>{route}</h3></Link>
                        )}
                    </span>
                }
            </div>
            <AuthButtons authorized={authorization === null}/>
            <SearchBox/>
        </div>
    )
}