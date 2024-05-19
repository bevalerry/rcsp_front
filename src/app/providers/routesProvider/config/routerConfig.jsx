import { CategoriesAdminPage } from "pages/CategoriesAdminPage";
import { ComplaintsAdminPage } from "pages/ComplaintsAdminPage";
import { MainPage } from "pages/MainPage";
import { ProfilePage } from "pages/ProfilePage";
import { RequestsAdminPage } from "pages/RequestsAdminPage";
import { ReviewPage } from "pages/ReviewPage";
import { ReviewsAdminPage } from "pages/ReviewsAdminPage";
import { SearchPage } from "pages/SearchPage";
import { UsersAdminPage } from "pages/UsersAdminPage";

export const routesPaths = {
    main: '/',
    search: "/search",
    review: "/review/:link",
    faq: "/faq",
    profile: "/profile",
    notfound: "*"
}

export const adminRoutesPaths = {
    "Категории": "/categories",
    "Отзывы": "/reviews",
    "Пользователи": "/users",
    "Запросы": "/requests",
    "Жалобы": "/complaints"
}

export const basicRouterConfig = [
    {
        path: routesPaths.main,
        element: <MainPage/>
    },
    {
        path: routesPaths.notfound,
        element: <div/>
    },
    {
        path: routesPaths.profile,
        element: <ProfilePage/>
    },
    {
        path: routesPaths.review,
        element: <ReviewPage/>
    },
    {
        path: routesPaths.search,
        element: <SearchPage/>
    }
]

export const adminRouterConfig = [
    {
        path: adminRoutesPaths["Категории"],
        element: <CategoriesAdminPage/>
    },
    {
        path: adminRoutesPaths["Отзывы"],
        element: <ReviewsAdminPage/>
    },
    {
        path: adminRoutesPaths["Пользователи"],
        element: <UsersAdminPage/>
    },
    {
        path: adminRoutesPaths["Запросы"],
        element: <RequestsAdminPage/>
    },
    {
        path: adminRoutesPaths["Жалобы"],
        element: <ComplaintsAdminPage/>
    }
]


