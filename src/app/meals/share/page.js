

import styles from './page.module.css'
import ImagePicker from "@/components/meals/image-picker";

export default function ShareMealPage() {

    return(
        <>
            <header className={styles.header}>
                <h1>
                    Share your <span className={styles.highlight}>favourite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing</p>
            </header>
            <main className={styles.main}>
                <form className={styles.form}>
                    <div className={styles.row}>
                        <p>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required/>
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required/>
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required/>
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required/>
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea name="instructions" id="instructions" rows="10"></textarea>
                    </p>
                    <ImagePicker/>
                </form>
            </main>
        </>
    )
}