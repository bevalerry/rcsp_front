import { useClassNames } from 'shared/lib/useClassNames'
import { Button, ButtonThemes } from 'shared/UI/Button/Button'
import { Themes, useTheme } from 'app/providers/themeProvider'
import RequestsIcon from 'shared/assets/icons/RequestsIcon.svg?react'
import LightThemeIcon from 'shared/assets/icons/LightThemeIcon.svg?react'
import DarkThemecIcon from 'shared/assets/icons/DarkThemeIcon.svg?react'
import cls from './Options.module.scss'
import { Suspense, useState } from 'react'
import { Modal } from 'widgets/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { createRequest } from 'shared/config/store/actionCreators/requestActions'
import { selectUserData } from 'shared/config/store/reducers/AuthSlice'
import { Form } from 'entities/Form/Form'

export const Options = ({ className }) => {

    const { theme, handleThemeChange } = useTheme()

    const [modalActive, setModalActive] = useState(false)

    const dispatch = useDispatch()
    
    const authorization = useSelector(selectUserData)
    const userId = authorization && authorization.id

    return (
        <div className={useClassNames(cls.options, [cls[className]])}>
            {modalActive &&
                <Suspense fallback=''>
                    <Modal 
                        closer={() => setModalActive(false)}
                        header={'Оставить заявку'}
                    >
                        <Form
                            fields={[
                                {
                                    type: 'text',
                                    placeholder: 'Заголовок заявки',
                                    upperLabel: 'Заголовок заявки'
                                },
                                {
                                    type: 'textarea',
                                    placeholder: 'Содержание заявки',
                                    upperLabel: 'Содержание заявки'
                                }
                            ]}
                            action={(title, content) => {
                                setModalActive(false)
                                return dispatch(createRequest(title, content, userId))
                            }}
                            buttonText={'Отправить'}
                        />
                    </Modal>
                </Suspense>
            }
            {authorization &&
                <Button action={() => setModalActive(true)} className={ButtonThemes.ALFA}>
                    <RequestsIcon/>
                </Button>
            }
            <Button action={handleThemeChange} className={ButtonThemes.ALFA}>
                {theme === Themes.LIGHT
                    ? <DarkThemecIcon/>
                    : <LightThemeIcon/>
                }
            </Button>
        </div>
    )
}