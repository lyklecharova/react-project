import { Link} from 'react-router-dom';
import styles from './Home.module.css'
export const Home = () => {
    return (
        <>
            <div className={styles['cover']}>
                <div className={styles['cover-title']}>
                    <p className={styles['cover-title>p']}>All new recipes,</p>
                    <p className={styles['cover-title>p']}>you can find </p>
                    <p className={styles['cover-title>p']}>
                        only <span>here</span>!
                    </p>
                </div>
            </div>

            <section className={styles['container-about-recipe']}>
                <div className={styles['content-about-recipe']}>
                    <h2 className={styles['about-recipe-title']}>Explore Our Recipe Dashboard</h2>
                    <p className={styles['about-recipe-description']}>
                        Discover a world of flavorful rice and vegetable recipes by entering
                        our recipe dashboard.
                    </p>
                    <Link className={styles['about-recipe-link']} to="/dashboard">
                        Recipe
                    </Link>
                </div>
                <img className={styles['about-recipe-img']} src="/image/cooking.png" alt="" />
            </section>

            <section className={styles['container-about']}>

                <div className={styles['content-about']}>
                    <h2 className={styles['about-title']}>The Website's Goal</h2>
                    <p className={styles['about-description']}>
                        The goal of her website is to offer a wide selection of delicious and
                        healthy rice with vegetable recipes to its visitors.
                    </p>
                </div>
                <div className={styles['content-about']}>
                    <h2 className={styles['about-title']}>Website Strategy</h2>
                    <p className={styles['about-description']}>
                        The website's strategy includes regularly publishing recipes along
                        with cooking tips and nutritional information to attract and retain an
                        audience passionate about nutritious food.
                    </p>
                </div>
                <div className={styles['content-about']}>
                    <h2 className={styles['about-title']}>Website Mission</h2>
                    <p className={styles['about-description']}>
                        Lily and her website's mission is to encourage people to cook tasty,
                        nutritious, and easy-to-make rice and vegetable dishes while enjoying
                        the culinary process.
                    </p>
                </div>
                <div className={styles['content-about']}>
                    <h2 className={styles['about-title']}>Website Description</h2>
                    <p className={styles['about-description']}>
                        The website provides diverse and inspiring recipes, ingredient
                        selection advice, serving ideas, and valuable tips, helping visitors
                        create delightful rice and vegetable dishes at home.
                    </p>
                </div>
            </section>
        </>
    );
}