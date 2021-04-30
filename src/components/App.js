import React, { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Loader from 'react-loader-spinner';
import routes from '../routes';
import PublicRoute from './PublickRoute';

import styles from './App.module.css';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);

const RegisterPage = lazy(() =>
  import('../pages/RegisterPage' /* webpackChunkName: "reg-page" */),
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "log-page" */),
);

const ProductsPage = lazy(() =>
  import('../pages/ProductsPage' /* webpackChunkName: "products-page" */),
);

const ProductDetailPage = lazy(() =>
  import(
    '../pages/ProductDetailPage' /* webpackChunkName: "product-detail-page" */
  ),
);

function App () {
  return (
    <div className={styles.appContainer}>
      <NavBar />
      <Suspense
        fallback={
          <Loader
            className={styles.Loader}
            type='Oval'
            color='#777'
            height={280}
            width={280}
          />
        }
      >
        <Switch>
          <PublicRoute exact path={routes.home} component={HomePage} />
          <PublicRoute
            exact
            restricted
            path={routes.register}
            component={RegisterPage}
            redirectTo={routes.home}
          />
          <PublicRoute
            exact
            restricted
            path={routes.login}
            component={LoginPage}
            redirectTo={routes.home}
          />
          <PublicRoute
            path={routes.products}
            component={ProductsPage}
            redirectTo={routes.home}
          />
          <PublicRoute
            path={routes.productDetail}
            component={ProductDetailPage}
            redirectTo={routes.home}
          />

          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
