import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HeaderPage from './components/common/headerPage';
import MainPage from './components/mainPage';
import AboutPage from './components/aboutPage';
import CoursesPage from './components/coursesPage';
import CoursePage from './components/coursePage';
import PageNotFound from './components/pageNotFound';

export default function App(props) {
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <HeaderPage />
            <Switch>
                <Redirect from="/about-old" to="/about" />
                <Route exact path="/" component={MainPage} />
                <Route path="/course/:id" component={CoursePage} />
                <Route path="/course" component={CoursePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

