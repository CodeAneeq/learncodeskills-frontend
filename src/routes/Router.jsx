import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import  Loader  from "../components/loader/Loader";

const LoginPage = lazy(() => import("../pages/auth/Login"));
const SignUpPage = lazy(() => import("../pages/auth/signup")); // change
const ForgetPasswordPage = lazy(() => import("../pages/auth/ForgetPassword"));
const VerifyOtpPage = lazy(() => import("../pages/auth/OtpVerify"));
const ResetPasswordPage = lazy(() => import("../pages/auth/ResetPassword"));
const HomePage = lazy(() => import("../pages/home/Home"));
const StudentProfile = lazy(() => import("../pages/profile/student/StudentProfile"));
const ErrorPage = lazy(() => import("../pages/error/NotFound"));
const InstructorProfile = lazy(() => import("../pages/profile/instructor/InstructorProfile"));
const CourseDetailsPage = lazy(() => import("../pages/course/courseDetails/CourseDetails"));
const CourseLecturePage = lazy(() => import("../pages/course/courseLecture/CourseLecture"));
const CourseFilterPage = lazy(() => import("../pages/course/courseFilter/CourseFilter"));
const BuyCourse = lazy(() => import("../pages/course/buyCourse/BuyCourse"));
const MyLearning = lazy(() => import("../pages/myLearning/MyLearning"));
const OrderSuccessPage = lazy(() => import("../pages/orderNotice/OrderSuccess"));
const OrderFailedPage = lazy(() => import("../pages/orderNotice/OrderFailed"));
const AddCoursePage = lazy(() => import("../pages/instructor/addCourse/AddCourse"));
const AddLecturePage = lazy(() => import("../pages/instructor/addLecture/AddLecture"));
const DashboardPage = lazy(() => import("../pages/instructor/dashboard/Dashboard"));
const DraftCoursesPage = lazy(() => import("../pages/instructor/draftCourses/DraftCourses"));
const EditCoursePage = lazy(() => import("../pages/instructor/editCourse/EditCourse"));
const InstructorCoursesPage = lazy(() => import("../pages/instructor/instructorCourses/InstructorCourses"));
const PublishedCoursesPage = lazy(() => import("../pages/instructor/publishedCourses/PublishedCourses"));


export const publicRoutes = createBrowserRouter([
    {
        path: '/auth/login',
        element: <Suspense fallback={<Loader></Loader>}><LoginPage/></Suspense>
    },
    {
        path: '/auth/sign-up',
        element: <Suspense fallback={<Loader></Loader>}><SignUpPage/></Suspense>
    },
    {
        path: '/auth/forgot-password',
        element: <Suspense fallback={<Loader></Loader>}><ForgetPasswordPage/></Suspense>
    },
    {
        path: '/auth/verify-otp',
        element: <Suspense fallback={<Loader></Loader>}><VerifyOtpPage/></Suspense>
    },
    {
        path: '/auth/reset-password',
        element: <Suspense fallback={<Loader></Loader>}><ResetPasswordPage/></Suspense>
    },
    {
        path: '/',
        element: <Suspense fallback={<Loader></Loader>}><HomePage/></Suspense>
    },
    {
        path: '*',
        element: <Suspense fallback={<Loader></Loader>}><ErrorPage/></Suspense>
    },
    {
        path: '/course-details/:id',
        element: <Suspense fallback={<Loader></Loader>}><CourseDetailsPage/></Suspense>
    },
     {
        path: '/course-lecture/:id',
        element: <Suspense fallback={<Loader></Loader>}><CourseLecturePage/></Suspense>
    },
    {
        path: '/course-filter',
        element: <Suspense fallback={<Loader></Loader>}><CourseFilterPage/></Suspense>
    },
])

export const privateRoutes = createBrowserRouter([
     {
        path: '/',
        element: <Suspense fallback={<Loader></Loader>}><HomePage/></Suspense>
    },
    {
        path: "/profile/student",
        element: <Suspense fallback={<Loader></Loader>}><StudentProfile/></Suspense>
    },
    {
        path: '*',
        element: <Suspense fallback={<Loader></Loader>}><ErrorPage/></Suspense>
    },
    {
        path: '/course-details/:id',
        element: <Suspense fallback={<Loader></Loader>}><CourseDetailsPage/></Suspense>
    },
    {
        path: '/course-lecture/:id',
        element: <Suspense fallback={<Loader></Loader>}><CourseLecturePage/></Suspense>
    },
    {
        path: '/course-filter',
        element: <Suspense fallback={<Loader></Loader>}><CourseFilterPage/></Suspense>
    },
    {
        path: '/buy-course',
        element: <Suspense fallback={<Loader></Loader>}><BuyCourse/></Suspense>
    },
    {
        path: '/my-learning',
        element: <Suspense fallback={<Loader></Loader>}><MyLearning/></Suspense>
    },
    {
        path: '/order-failed',
        element: <Suspense fallback={<Loader></Loader>}><OrderFailedPage/></Suspense>
    },
    {
        path: '/order-success',
        element: <Suspense fallback={<Loader></Loader>}><OrderSuccessPage/></Suspense>
    },
])

export const instructorRoutes = createBrowserRouter([
     {
        path: '/',
        element: <Suspense fallback={<Loader></Loader>}><HomePage/></Suspense>
    },
    {
        path: "/profile/instructor",
        element: <Suspense fallback={<Loader></Loader>}><InstructorProfile/></Suspense>
    },
    {
        path: '*',
        element: <Suspense fallback={<Loader></Loader>}><ErrorPage/></Suspense>
    },
    {
        path: '/instructor/add-course',
        element: <Suspense fallback={<Loader></Loader>}><AddCoursePage/></Suspense>
    },
    {
        path: '/instructor/add-lecture',
        element: <Suspense fallback={<Loader></Loader>}><AddLecturePage/></Suspense>
    },
    {
        path: '/instructor/dashboard',
        element: <Suspense fallback={<Loader></Loader>}><DashboardPage/></Suspense>
    },
    {
        path: '/instructor/draft-courses',
        element: <Suspense fallback={<Loader></Loader>}><DraftCoursesPage/></Suspense>
    },
    {
        path: '/instructor/edit-course/:id',
        element: <Suspense fallback={<Loader></Loader>}><EditCoursePage/></Suspense>
    },
    {
        path: '/instructor/instructor-courses',
        element: <Suspense fallback={<Loader></Loader>}><InstructorCoursesPage/></Suspense>
    },
    {
        path: '/instructor/published-courses',
        element: <Suspense fallback={<Loader></Loader>}><PublishedCoursesPage/></Suspense>
    },
])