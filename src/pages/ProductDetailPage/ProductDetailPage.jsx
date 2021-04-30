import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import Container from '../../components/Container';
import Rating from '@material-ui/lab/Rating';
import { getLogged } from '../../redux/auth/auth-selector';
import Button from '../../shared-components/Button';
import styles from './ProductDetailPage.module.css';

Axios.defaults.baseURL = 'https://smktesting.herokuapp.com';

const ProductDetailPage = () => {
  const [reviewData, setReviewData] = useState(null);
  const [value, setValue] = useState(1);
  const [userReview, setUserReview] = useState('');
  const location = useLocation();
  const history = useHistory();
  const { img, title, text, id } = location.state;
  const isLogged = useSelector(getLogged);

  const rating =
    reviewData?.reduce((acc, { rate }) => acc + Number(rate), 0) /
    reviewData?.length;

  useEffect(() => {
    const response = async id => await Axios.get(`/api/reviews/${id}`);

    response(id).then(result => {
      setReviewData(result.data);
    });
  }, []);

  const goBack = () => {
    history.push(location?.state?.from);
  };

  const handleChange = event => {
    setUserReview(event.target.value);
  };

  const submitReview = event => {
    event.preventDefault();
    const comment = {
      rate: value,
      text: userReview,
    };

    Axios.post(`/api/reviews/${id}/`, comment);
    setUserReview('');
    setValue(1);
  };

  return (
    <Container>
      <div className={styles.pageTitle}>
        <b className={styles.linkBack} onClick={goBack}>
          &#8592;
          <span className={styles.linkBackTitle}>back to products</span>
        </b>
        <h2>Product details</h2>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.productContainer}>
          <img
            className={styles.img}
            src={`http://smktesting.herokuapp.com/static/${img}`}
            alt='img'
          />
          <h2 className={styles.productTitle}>{title}</h2>

          <Rating name='read-only' value={rating} readOnly />
          <h3 className={styles.descriptionTitle}>Description:</h3>
          <p className={styles.descriptionText}>{text}</p>
        </div>
        <div className={styles.reviewContainer}>
          <h3 className={styles.reviews}>Reviews:</h3>
          {isLogged && (
            <form
              type='submit'
              onSubmit={submitReview}
              className={styles.formContainer}
            >
              <textarea
                className={styles.textArea}
                value={userReview}
                onChange={handleChange}
              ></textarea>
              <Rating
                name='simple-controlled'
                value={value}
                onChange={(_event, newValue) => {
                  setValue(newValue);
                }}
              />

              <Button>Leave review</Button>
            </form>
          )}
          {reviewData?.map(({ id, created_at, created_by, rate, text }) => (
            <li className={styles.itemReview} key={id}>
              <span>{created_by.username}</span>
              <span className={styles.date}>{created_at.slice(0, 10)}</span>
              <p className={styles.textReview}>{text}</p>
              <Rating name='read-only' value={Math.round(rate)} readOnly />
            </li>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailPage;
